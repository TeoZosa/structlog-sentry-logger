window.BENCHMARK_DATA = {
  "lastUpdate": 1672680002323,
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
        "date": 1645921270901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.53409030037776,
            "unit": "iter/sec",
            "range": "stddev: 0.00038343584299703324",
            "extra": "mean: 4.596980632411082 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.25482094284087,
            "unit": "iter/sec",
            "range": "stddev: 0.00032634250057248903",
            "extra": "mean: 3.7986009009009747 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.95494583413466,
            "unit": "iter/sec",
            "range": "stddev: 0.000259115608605572",
            "extra": "mean: 2.3643180198019444 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.9698293058609,
            "unit": "iter/sec",
            "range": "stddev: 0.0001409320931159996",
            "extra": "mean: 1.183474208566116 msec\nrounds: 1074"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.63163522909036,
            "unit": "iter/sec",
            "range": "stddev: 0.0004130205898447159",
            "extra": "mean: 5.245719047619018 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.3295329313442,
            "unit": "iter/sec",
            "range": "stddev: 0.00040269473031675666",
            "extra": "mean: 4.126612171052695 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.2413791282291,
            "unit": "iter/sec",
            "range": "stddev: 0.00024574578221511865",
            "extra": "mean: 2.449531211499016 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.3400868150646,
            "unit": "iter/sec",
            "range": "stddev: 0.0001499721772744471",
            "extra": "mean: 1.2541699790793792 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.947869110212448,
            "unit": "iter/sec",
            "range": "stddev: 0.0016471277192901888",
            "extra": "mean: 35.780903225805844 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.012805703967864,
            "unit": "iter/sec",
            "range": "stddev: 0.0013864060385690587",
            "extra": "mean: 35.697959374999535 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.1973212841687,
            "unit": "iter/sec",
            "range": "stddev: 0.00025804929068906353",
            "extra": "mean: 3.506344293478152 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.624246425192,
            "unit": "iter/sec",
            "range": "stddev: 0.00016935412041240623",
            "extra": "mean: 2.124837399679013 msec\nrounds: 623"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1504.0077874710653,
            "unit": "iter/sec",
            "range": "stddev: 0.00007850792824739061",
            "extra": "mean: 664.8901743264666 usec\nrounds: 1893"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1285.118500867748,
            "unit": "iter/sec",
            "range": "stddev: 0.00009977699545977616",
            "extra": "mean: 778.1383579216797 usec\nrounds: 1559"
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
        "date": 1646063365059,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.44566690924293,
            "unit": "iter/sec",
            "range": "stddev: 0.000014075096829003039",
            "extra": "mean: 5.039162686567199 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.02665224124115,
            "unit": "iter/sec",
            "range": "stddev: 0.000022534992819463544",
            "extra": "mean: 3.845759622641469 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.8119707819822,
            "unit": "iter/sec",
            "range": "stddev: 0.000012548955708951982",
            "extra": "mean: 2.5011757352940807 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.8781455932242,
            "unit": "iter/sec",
            "range": "stddev: 0.00000877497935062521",
            "extra": "mean: 1.1752564161849632 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.5250586130861,
            "unit": "iter/sec",
            "range": "stddev: 0.000011492520137761537",
            "extra": "mean: 5.3901074468086145 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.9866079604353,
            "unit": "iter/sec",
            "range": "stddev: 0.000015124370521998096",
            "extra": "mean: 4.166899180327854 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.1997620880477,
            "unit": "iter/sec",
            "range": "stddev: 0.000011658472561110529",
            "extra": "mean: 2.616432816537518 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 771.3713983718787,
            "unit": "iter/sec",
            "range": "stddev: 0.000007031200391840107",
            "extra": "mean: 1.296392376111798 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.983259269445668,
            "unit": "iter/sec",
            "range": "stddev: 0.00034820240076195215",
            "extra": "mean: 34.502675862069324 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.32755322779021,
            "unit": "iter/sec",
            "range": "stddev: 0.000037098212865032116",
            "extra": "mean: 32.97331612903294 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.46997519958927,
            "unit": "iter/sec",
            "range": "stddev: 0.000010401784339516188",
            "extra": "mean: 3.3730228476822344 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.0023065479982,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907052446172874",
            "extra": "mean: 1.8903509259260036 msec\nrounds: 540"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1435.2523376834222,
            "unit": "iter/sec",
            "range": "stddev: 0.000005147486137694415",
            "extra": "mean: 696.7415929202081 usec\nrounds: 1469"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1244.256283272744,
            "unit": "iter/sec",
            "range": "stddev: 0.000005376545181657966",
            "extra": "mean: 803.6929477018342 usec\nrounds: 1262"
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
        "date": 1646086384864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.94138428895522,
            "unit": "iter/sec",
            "range": "stddev: 0.000016296984346632133",
            "extra": "mean: 4.879443961352671 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.46948715492584,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007916579285196",
            "extra": "mean: 3.724818081180784 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.4865928440895,
            "unit": "iter/sec",
            "range": "stddev: 0.000050152961780333594",
            "extra": "mean: 2.472269829683707 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.243912840615,
            "unit": "iter/sec",
            "range": "stddev: 0.00002089887940725066",
            "extra": "mean: 1.1972550588235469 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.54804974377873,
            "unit": "iter/sec",
            "range": "stddev: 0.000015773832421506836",
            "extra": "mean: 5.3605492063491775 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.59281579431857,
            "unit": "iter/sec",
            "range": "stddev: 0.000009452020220527735",
            "extra": "mean: 4.105211382113855 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.95316527613323,
            "unit": "iter/sec",
            "range": "stddev: 0.000010796732981780192",
            "extra": "mean: 2.5909879487179284 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.9024526894087,
            "unit": "iter/sec",
            "range": "stddev: 0.000009126642808113362",
            "extra": "mean: 1.3264315514993794 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.925591128915233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003399334022211272",
            "extra": "mean: 37.1393888888889 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.58849717171072,
            "unit": "iter/sec",
            "range": "stddev: 0.00006696334009107077",
            "extra": "mean: 34.97910344827547 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.6939597302477,
            "unit": "iter/sec",
            "range": "stddev: 0.000013725548737593703",
            "extra": "mean: 3.3591544850494777 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.9318914366572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001088633685084531",
            "extra": "mean: 2.0536753036437445 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1469.8223674713483,
            "unit": "iter/sec",
            "range": "stddev: 0.000006748996224485354",
            "extra": "mean: 680.3543218085456 usec\nrounds: 1504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1213.74414995349,
            "unit": "iter/sec",
            "range": "stddev: 0.000006825106140708357",
            "extra": "mean: 823.8968649515793 usec\nrounds: 1244"
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
        "date": 1646432418972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.36765615704587,
            "unit": "iter/sec",
            "range": "stddev: 0.00040303497899344564",
            "extra": "mean: 7.6122238095237975 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.05292692138008,
            "unit": "iter/sec",
            "range": "stddev: 0.0006817897752704244",
            "extra": "mean: 5.8121649999999825 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.37378747178298,
            "unit": "iter/sec",
            "range": "stddev: 0.000477022655779827",
            "extra": "mean: 3.978139527027062 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 534.9702553276088,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121178274585875",
            "extra": "mean: 1.8692628048780262 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.34171538423341,
            "unit": "iter/sec",
            "range": "stddev: 0.0004222029318512998",
            "extra": "mean: 8.173826865671638 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.22259779519294,
            "unit": "iter/sec",
            "range": "stddev: 0.00044308343011432755",
            "extra": "mean: 6.241316853932588 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.33102953934545,
            "unit": "iter/sec",
            "range": "stddev: 0.00037115379108041086",
            "extra": "mean: 4.143685964912211 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.86692664764956,
            "unit": "iter/sec",
            "range": "stddev: 0.00038283425299324053",
            "extra": "mean: 2.049739273927512 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.967529319442892,
            "unit": "iter/sec",
            "range": "stddev: 0.003244634385189612",
            "extra": "mean: 47.69279130434859 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.333598637874157,
            "unit": "iter/sec",
            "range": "stddev: 0.0017435538086765189",
            "extra": "mean: 44.775587499999325 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.4142556697819,
            "unit": "iter/sec",
            "range": "stddev: 0.00042623206804378206",
            "extra": "mean: 5.512245971563797 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.4470039828078,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717751474427736",
            "extra": "mean: 3.0726968992248778 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 940.0161219648761,
            "unit": "iter/sec",
            "range": "stddev: 0.00015415563593587113",
            "extra": "mean: 1.063811541774137 msec\nrounds: 1161"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 808.4027693568337,
            "unit": "iter/sec",
            "range": "stddev: 0.00017453561949146265",
            "extra": "mean: 1.2370071428572682 msec\nrounds: 1008"
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
        "date": 1646433550532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.74665311322946,
            "unit": "iter/sec",
            "range": "stddev: 0.000011040906899266865",
            "extra": "mean: 4.86034637681161 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.44114475822187,
            "unit": "iter/sec",
            "range": "stddev: 0.000019868151668570522",
            "extra": "mean: 3.739140441176478 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.7745970490457,
            "unit": "iter/sec",
            "range": "stddev: 0.000013267493198197118",
            "extra": "mean: 2.4644223844281967 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.4731940623643,
            "unit": "iter/sec",
            "range": "stddev: 0.000014771659482977408",
            "extra": "mean: 1.2041327849588666 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.33174035623546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004419517818411339",
            "extra": "mean: 5.338123684210541 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.08950119668276,
            "unit": "iter/sec",
            "range": "stddev: 0.000017446415303280232",
            "extra": "mean: 4.096857894736811 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.10513844037393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000160832385909369",
            "extra": "mean: 2.603453846153724 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.6171807946176,
            "unit": "iter/sec",
            "range": "stddev: 0.000014782346495782284",
            "extra": "mean: 1.3340142483660378 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.109312882334923,
            "unit": "iter/sec",
            "range": "stddev: 0.00016054042367980479",
            "extra": "mean: 36.887692592593304 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.705899448382272,
            "unit": "iter/sec",
            "range": "stddev: 0.00014590561427203986",
            "extra": "mean: 34.83604482758527 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.0858633069029,
            "unit": "iter/sec",
            "range": "stddev: 0.00002434341708782526",
            "extra": "mean: 3.3435214521452106 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.2249365095479,
            "unit": "iter/sec",
            "range": "stddev: 0.000012215421737629268",
            "extra": "mean: 2.027472509960254 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1456.6561865652507,
            "unit": "iter/sec",
            "range": "stddev: 0.000006332775290749309",
            "extra": "mean: 686.503794940087 usec\nrounds: 1502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1228.8160504576051,
            "unit": "iter/sec",
            "range": "stddev: 0.000006896577456887488",
            "extra": "mean: 813.7914536741321 usec\nrounds: 1252"
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
        "date": 1646433852431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.09783222338783,
            "unit": "iter/sec",
            "range": "stddev: 0.0002822952509575111",
            "extra": "mean: 5.461561111111101 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.82709607000115,
            "unit": "iter/sec",
            "range": "stddev: 0.00019709937017130933",
            "extra": "mean: 4.118156565656595 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.75758119,
            "unit": "iter/sec",
            "range": "stddev: 0.00005177648588344954",
            "extra": "mean: 2.834807962529334 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 770.3055839827667,
            "unit": "iter/sec",
            "range": "stddev: 0.00008714659621933745",
            "extra": "mean: 1.2981860975609545 msec\nrounds: 820"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.2038615411356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002812536979124053",
            "extra": "mean: 5.807070707070775 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.37505708674448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000995560323929654",
            "extra": "mean: 4.664721789883238 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.77215951761826,
            "unit": "iter/sec",
            "range": "stddev: 0.000146682306199353",
            "extra": "mean: 2.892077839335259 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 684.9912242396989,
            "unit": "iter/sec",
            "range": "stddev: 0.00009537081690553805",
            "extra": "mean: 1.4598727175080863 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.46273713565775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005926685561933522",
            "extra": "mean: 40.8785000000006 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.001465712252312,
            "unit": "iter/sec",
            "range": "stddev: 0.0009721030998721937",
            "extra": "mean: 38.45937037037046 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.1703720862724,
            "unit": "iter/sec",
            "range": "stddev: 0.00018604754299017193",
            "extra": "mean: 3.6741692063492515 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 431.80721139150273,
            "unit": "iter/sec",
            "range": "stddev: 0.00006011335131718396",
            "extra": "mean: 2.315848308270468 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1324.8501910268253,
            "unit": "iter/sec",
            "range": "stddev: 0.00002651922751591573",
            "extra": "mean: 754.8023216307572 usec\nrounds: 1766"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1114.8850351983265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004433873612763537",
            "extra": "mean: 896.953469127972 usec\nrounds: 1571"
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
        "date": 1646664703532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.98909823158928,
            "unit": "iter/sec",
            "range": "stddev: 0.00014433768113893545",
            "extra": "mean: 5.494834634146355 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 236.50746871243567,
            "unit": "iter/sec",
            "range": "stddev: 0.00013239560962815449",
            "extra": "mean: 4.2281962825278825 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.3981394106335,
            "unit": "iter/sec",
            "range": "stddev: 0.00007738028622861912",
            "extra": "mean: 2.7670314009662462 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 761.0950416802473,
            "unit": "iter/sec",
            "range": "stddev: 0.00006711905729172878",
            "extra": "mean: 1.3138963535911745 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.0568039809893,
            "unit": "iter/sec",
            "range": "stddev: 0.00012971811200201193",
            "extra": "mean: 6.095449720670402 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.6908438572741,
            "unit": "iter/sec",
            "range": "stddev: 0.00009415007872504105",
            "extra": "mean: 4.72386987447704 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.10867866170184,
            "unit": "iter/sec",
            "range": "stddev: 0.00013037342033540055",
            "extra": "mean: 2.889265891472873 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.0787343714962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000557715046536984",
            "extra": "mean: 1.4835062271062285 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.868052631442843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469126396250702",
            "extra": "mean: 41.89700833333335 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.195865190549505,
            "unit": "iter/sec",
            "range": "stddev: 0.00046129633673463387",
            "extra": "mean: 39.68905185185231 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.77891719512354,
            "unit": "iter/sec",
            "range": "stddev: 0.00009138048348660776",
            "extra": "mean: 3.7625256756759327 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 426.61093401308295,
            "unit": "iter/sec",
            "range": "stddev: 0.000052844052120210604",
            "extra": "mean: 2.3440561886051725 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1333.0182955948633,
            "unit": "iter/sec",
            "range": "stddev: 0.00002281081911632597",
            "extra": "mean: 750.1772506083624 usec\nrounds: 1644"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.0926332951017,
            "unit": "iter/sec",
            "range": "stddev: 0.00002156392098375794",
            "extra": "mean: 910.6699832775034 usec\nrounds: 1196"
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
        "date": 1646752002307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.6252571566799,
            "unit": "iter/sec",
            "range": "stddev: 0.0004600683863508927",
            "extra": "mean: 8.088961940298512 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.9437146997416,
            "unit": "iter/sec",
            "range": "stddev: 0.00025051593647531053",
            "extra": "mean: 6.099654395604445 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.95076594125845,
            "unit": "iter/sec",
            "range": "stddev: 0.0008074751740741985",
            "extra": "mean: 4.2927525735294765 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.068487989871,
            "unit": "iter/sec",
            "range": "stddev: 0.00020163967707286716",
            "extra": "mean: 1.9008931780366478 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.45515151191431,
            "unit": "iter/sec",
            "range": "stddev: 0.00046572194898915277",
            "extra": "mean: 8.737046666666673 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.5856308521467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006936367524832886",
            "extra": "mean: 6.775727380952239 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.83940176928124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005642238726260636",
            "extra": "mean: 4.332016078431348 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.6510753457087,
            "unit": "iter/sec",
            "range": "stddev: 0.00017540958111060813",
            "extra": "mean: 2.0422706093190324 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.522066349367922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005019884324222508",
            "extra": "mean: 51.224085714285955 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.03853628691653,
            "unit": "iter/sec",
            "range": "stddev: 0.000950910522027596",
            "extra": "mean: 47.531823809524305 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.75085609878414,
            "unit": "iter/sec",
            "range": "stddev: 0.0009449033171774598",
            "extra": "mean: 5.8564860103627945 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.75697523778746,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150909161103091",
            "extra": "mean: 3.4751546827792854 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 944.7547992986574,
            "unit": "iter/sec",
            "range": "stddev: 0.00008629670943223517",
            "extra": "mean: 1.0584757026292475 msec\nrounds: 1103"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 810.1548716981139,
            "unit": "iter/sec",
            "range": "stddev: 0.00015897020492988012",
            "extra": "mean: 1.2343318974358124 msec\nrounds: 975"
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
        "date": 1646752833316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.9709787641056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006912681029999127",
            "extra": "mean: 7.694025308641995 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.83933894574636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004636516948212898",
            "extra": "mean: 5.922790306122513 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.40178958197725,
            "unit": "iter/sec",
            "range": "stddev: 0.00038403309497013184",
            "extra": "mean: 3.915399346405231 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.1998884663252,
            "unit": "iter/sec",
            "range": "stddev: 0.00033024261731788053",
            "extra": "mean: 1.7850771137026245 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.93673366210828,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041269255726801",
            "extra": "mean: 7.940494968553239 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.84918894709344,
            "unit": "iter/sec",
            "range": "stddev: 0.0008611399625753547",
            "extra": "mean: 6.1406507853402985 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.03449048172448,
            "unit": "iter/sec",
            "range": "stddev: 0.00045229007733464384",
            "extra": "mean: 3.952030405405248 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.5770509650629,
            "unit": "iter/sec",
            "range": "stddev: 0.00024063525349351278",
            "extra": "mean: 1.9395743044190752 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.230813349504665,
            "unit": "iter/sec",
            "range": "stddev: 0.003121880851841678",
            "extra": "mean: 49.429549999999594 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.156794385815086,
            "unit": "iter/sec",
            "range": "stddev: 0.0021566709102549962",
            "extra": "mean: 45.13288260869569 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.86635651559268,
            "unit": "iter/sec",
            "range": "stddev: 0.0005966920736960346",
            "extra": "mean: 5.528944239631371 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.5141499223067,
            "unit": "iter/sec",
            "range": "stddev: 0.00046702463704405804",
            "extra": "mean: 3.2204651551312837 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 873.9385336014889,
            "unit": "iter/sec",
            "range": "stddev: 0.0001912145247513609",
            "extra": "mean: 1.1442452318460128 msec\nrounds: 1143"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 754.4559152619004,
            "unit": "iter/sec",
            "range": "stddev: 0.00028986995823644906",
            "extra": "mean: 1.3254584923664652 msec\nrounds: 1048"
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
        "date": 1646837310263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.11764198234474,
            "unit": "iter/sec",
            "range": "stddev: 0.000012771928107111115",
            "extra": "mean: 4.308160256410246 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.2167393636374,
            "unit": "iter/sec",
            "range": "stddev: 0.000029635321923451045",
            "extra": "mean: 3.2871300970873816 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.44455514247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000331435647404624",
            "extra": "mean: 2.200488461538496 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.2357348492852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003077626421178804",
            "extra": "mean: 1.0914221765913696 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.94901180259518,
            "unit": "iter/sec",
            "range": "stddev: 0.000015869669595097597",
            "extra": "mean: 4.718115887850323 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.60555215258427,
            "unit": "iter/sec",
            "range": "stddev: 0.000011653476365092358",
            "extra": "mean: 3.6283739285715377 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.93300766283824,
            "unit": "iter/sec",
            "range": "stddev: 0.000012345222166972673",
            "extra": "mean: 2.3045031890659726 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.6893655052834,
            "unit": "iter/sec",
            "range": "stddev: 0.000012133093815998587",
            "extra": "mean: 1.2038194318182103 msec\nrounds: 880"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.470804398765214,
            "unit": "iter/sec",
            "range": "stddev: 0.00004864430764923408",
            "extra": "mean: 32.81830000000012 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.21506130626804,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831407143140336",
            "extra": "mean: 31.041381250000335 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.7177057196998,
            "unit": "iter/sec",
            "range": "stddev: 0.000015500265069852783",
            "extra": "mean: 2.9610529239766414 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.2282843661571,
            "unit": "iter/sec",
            "range": "stddev: 0.000014864393916563727",
            "extra": "mean: 1.8043106571936316 msec\nrounds: 563"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1607.4973836150286,
            "unit": "iter/sec",
            "range": "stddev: 0.000006937761725040465",
            "extra": "mean: 622.0849938499713 usec\nrounds: 1626"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1361.4535252332819,
            "unit": "iter/sec",
            "range": "stddev: 0.000007765705993401777",
            "extra": "mean: 734.5090974211936 usec\nrounds: 1396"
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
        "date": 1647269957855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.6909417087775,
            "unit": "iter/sec",
            "range": "stddev: 0.000013446792589579678",
            "extra": "mean: 4.861662801932355 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.4004779650349,
            "unit": "iter/sec",
            "range": "stddev: 0.00001042437549707034",
            "extra": "mean: 3.6982183150183205 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.22073488710896,
            "unit": "iter/sec",
            "range": "stddev: 0.00001005541406203594",
            "extra": "mean: 2.4738958536584734 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.1037038775061,
            "unit": "iter/sec",
            "range": "stddev: 0.000008603102557967304",
            "extra": "mean: 1.2105017751479288 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.84182366781926,
            "unit": "iter/sec",
            "range": "stddev: 0.000011258340023406212",
            "extra": "mean: 5.323628042327819 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.7578415655929,
            "unit": "iter/sec",
            "range": "stddev: 0.000009641330796999213",
            "extra": "mean: 4.069046153846121 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.85358744882444,
            "unit": "iter/sec",
            "range": "stddev: 0.000009802120363410902",
            "extra": "mean: 2.5983907455012982 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.3885262378122,
            "unit": "iter/sec",
            "range": "stddev: 0.000011115096001105627",
            "extra": "mean: 1.3397847968544236 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.930223790159438,
            "unit": "iter/sec",
            "range": "stddev: 0.00002975961383121515",
            "extra": "mean: 37.13300000000035 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.54287444855677,
            "unit": "iter/sec",
            "range": "stddev: 0.00012749166562130818",
            "extra": "mean: 35.035013793103225 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.19835577171546,
            "unit": "iter/sec",
            "range": "stddev: 0.000011671601218200423",
            "extra": "mean: 3.342264356435793 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.6922690831394,
            "unit": "iter/sec",
            "range": "stddev: 0.000014108887399198033",
            "extra": "mean: 2.0337923999999106 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1451.478620685504,
            "unit": "iter/sec",
            "range": "stddev: 0.000005460855983180842",
            "extra": "mean: 688.9526209677964 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1236.710303179638,
            "unit": "iter/sec",
            "range": "stddev: 0.00000597459765354748",
            "extra": "mean: 808.5968051118801 usec\nrounds: 1252"
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
        "date": 1647612717688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.29422279664195,
            "unit": "iter/sec",
            "range": "stddev: 0.000044803690963308994",
            "extra": "mean: 5.640341711229976 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 233.82452070984144,
            "unit": "iter/sec",
            "range": "stddev: 0.000035914417169984106",
            "extra": "mean: 4.276711428571361 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 355.43190682296694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000412188951424152",
            "extra": "mean: 2.813478421052612 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.5277707159311,
            "unit": "iter/sec",
            "range": "stddev: 0.00002015812494765193",
            "extra": "mean: 1.3745179775281153 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.97711431773374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003900873246706305",
            "extra": "mean: 6.135830813953667 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.15978379516022,
            "unit": "iter/sec",
            "range": "stddev: 0.00003746234710737703",
            "extra": "mean: 4.71342863436125 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.1472401003341,
            "unit": "iter/sec",
            "range": "stddev: 0.000019702915817305938",
            "extra": "mean: 3.001675774647959 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 654.5113851887461,
            "unit": "iter/sec",
            "range": "stddev: 0.00002032992508002397",
            "extra": "mean: 1.5278573033708542 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.905675376666224,
            "unit": "iter/sec",
            "range": "stddev: 0.0001338628970228943",
            "extra": "mean: 41.83107083333345 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.4503239043145,
            "unit": "iter/sec",
            "range": "stddev: 0.00021264777406653594",
            "extra": "mean: 39.29223076923094 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.5363010247925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003044750403304439",
            "extra": "mean: 3.867928782287731 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 430.53405996832726,
            "unit": "iter/sec",
            "range": "stddev: 0.000028090961938913395",
            "extra": "mean: 2.3226966063348535 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1304.0620568116801,
            "unit": "iter/sec",
            "range": "stddev: 0.000011647771208862534",
            "extra": "mean: 766.8346723045637 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1076.1599700738927,
            "unit": "iter/sec",
            "range": "stddev: 0.000021755005869175786",
            "extra": "mean: 929.2298801369992 usec\nrounds: 1168"
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
        "date": 1647926212128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.82341360156371,
            "unit": "iter/sec",
            "range": "stddev: 0.00001862364694002891",
            "extra": "mean: 5.623556424581011 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 232.61459400104718,
            "unit": "iter/sec",
            "range": "stddev: 0.000014836559557523499",
            "extra": "mean: 4.298956410256436 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.3210009469285,
            "unit": "iter/sec",
            "range": "stddev: 0.000012335994493358239",
            "extra": "mean: 2.838320728291283 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 722.1233172735923,
            "unit": "iter/sec",
            "range": "stddev: 0.000011587827967576113",
            "extra": "mean: 1.3848050271739503 msec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.93591442367003,
            "unit": "iter/sec",
            "range": "stddev: 0.000017575547486261947",
            "extra": "mean: 6.137382317073295 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.46179782988574,
            "unit": "iter/sec",
            "range": "stddev: 0.000026687738398880774",
            "extra": "mean: 4.7067285046730225 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.9823565782849,
            "unit": "iter/sec",
            "range": "stddev: 0.000011956677753320067",
            "extra": "mean: 2.976346764705774 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.6728647529302,
            "unit": "iter/sec",
            "range": "stddev: 0.000009696092931951158",
            "extra": "mean: 1.5368706060605652 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.633687300320165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892429525909568",
            "extra": "mean: 42.31248333333296 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.076302172250152,
            "unit": "iter/sec",
            "range": "stddev: 0.00008695291982877144",
            "extra": "mean: 39.878287999999316 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.6899376874919,
            "unit": "iter/sec",
            "range": "stddev: 0.00007250724476785254",
            "extra": "mean: 3.8507460431654814 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 437.05061328067364,
            "unit": "iter/sec",
            "range": "stddev: 0.00007198904706725026",
            "extra": "mean: 2.288064516129166 msec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.4299676887504,
            "unit": "iter/sec",
            "range": "stddev: 0.00003597002154804406",
            "extra": "mean: 759.0536305731397 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.2940490770486,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846377461867642",
            "extra": "mean: 950.304718416953 usec\nrounds: 1314"
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
        "date": 1647972989202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 170.49578389699246,
            "unit": "iter/sec",
            "range": "stddev: 0.000020319625674242813",
            "extra": "mean: 5.865247674418534 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.85811403476274,
            "unit": "iter/sec",
            "range": "stddev: 0.000011083817276537316",
            "extra": "mean: 4.447248898678397 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.84661891975855,
            "unit": "iter/sec",
            "range": "stddev: 0.000013329515922786657",
            "extra": "mean: 2.916756195965417 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 701.9615395175007,
            "unit": "iter/sec",
            "range": "stddev: 0.00008671567297307387",
            "extra": "mean: 1.424579472954257 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 156.44978600540648,
            "unit": "iter/sec",
            "range": "stddev: 0.00001856626503348177",
            "extra": "mean: 6.391827215189943 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.02572467263377,
            "unit": "iter/sec",
            "range": "stddev: 0.000013645144598279455",
            "extra": "mean: 4.901342718446578 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.77790010232803,
            "unit": "iter/sec",
            "range": "stddev: 0.000019470515064689",
            "extra": "mean: 3.098105538461515 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 633.8584682899025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001068927399471784",
            "extra": "mean: 1.5776392523364355 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.764158762389947,
            "unit": "iter/sec",
            "range": "stddev: 0.00007945970664607432",
            "extra": "mean: 43.92870434782598 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.169150214692962,
            "unit": "iter/sec",
            "range": "stddev: 0.000046077872806467873",
            "extra": "mean: 41.375058333332625 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.0904971578309,
            "unit": "iter/sec",
            "range": "stddev: 0.000024360661999902606",
            "extra": "mean: 4.014605179282978 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 415.1827089912339,
            "unit": "iter/sec",
            "range": "stddev: 0.00001275444450580279",
            "extra": "mean: 2.408578147268445 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1235.4170374388239,
            "unit": "iter/sec",
            "range": "stddev: 0.000006486259358704647",
            "extra": "mean: 809.4432646591363 usec\nrounds: 1262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1030.5234980929183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069689805249333945",
            "extra": "mean: 970.3805899143446 usec\nrounds: 1051"
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
        "date": 1647981893439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.80617383051916,
            "unit": "iter/sec",
            "range": "stddev: 0.00010311370204744452",
            "extra": "mean: 4.906622705314014 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.73023738385643,
            "unit": "iter/sec",
            "range": "stddev: 0.000009421708117163986",
            "extra": "mean: 3.7351029520294965 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.287175312396,
            "unit": "iter/sec",
            "range": "stddev: 0.000011627514980501408",
            "extra": "mean: 2.4734892944038895 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.1093640909775,
            "unit": "iter/sec",
            "range": "stddev: 0.000009261691754183666",
            "extra": "mean: 1.2119605515587615 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.18635401320174,
            "unit": "iter/sec",
            "range": "stddev: 0.000012780355611503047",
            "extra": "mean: 5.313881578947257 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.22300580147876,
            "unit": "iter/sec",
            "range": "stddev: 0.000014997718929812223",
            "extra": "mean: 4.077920816326483 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.776098915368,
            "unit": "iter/sec",
            "range": "stddev: 0.000011085902822122405",
            "extra": "mean: 2.5921771794871646 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.7651183907216,
            "unit": "iter/sec",
            "range": "stddev: 0.00007628751988657774",
            "extra": "mean: 1.344510484927946 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.11543311029384,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100619044865746",
            "extra": "mean: 36.879366666666655 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.61742509092921,
            "unit": "iter/sec",
            "range": "stddev: 0.0001479895980570116",
            "extra": "mean: 34.94374482758644 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.12913635729814,
            "unit": "iter/sec",
            "range": "stddev: 0.00001126156463645918",
            "extra": "mean: 3.35425115511532 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.38364206855744,
            "unit": "iter/sec",
            "range": "stddev: 0.000010265474629346509",
            "extra": "mean: 2.0517717741937176 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1457.571564064525,
            "unit": "iter/sec",
            "range": "stddev: 0.00000616808311556357",
            "extra": "mean: 686.0726599326899 usec\nrounds: 1485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1214.6879393545264,
            "unit": "iter/sec",
            "range": "stddev: 0.000008011629226560677",
            "extra": "mean: 823.2567127746329 usec\nrounds: 1229"
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
        "date": 1647984151597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.34834780207493,
            "unit": "iter/sec",
            "range": "stddev: 0.00037783667452618875",
            "extra": "mean: 4.7540187999999866 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.3261983778594,
            "unit": "iter/sec",
            "range": "stddev: 0.0004198069041034858",
            "extra": "mean: 3.6452952941176653 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.4114780514185,
            "unit": "iter/sec",
            "range": "stddev: 0.00025007411230991623",
            "extra": "mean: 2.3126120622567954 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.210842238769,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424626189360347",
            "extra": "mean: 1.12081130676552 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.55698932522617,
            "unit": "iter/sec",
            "range": "stddev: 0.0004254509963740749",
            "extra": "mean: 4.8648309322035725 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.61667712497695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003835789257463335",
            "extra": "mean: 3.8968628664495646 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.5024786501135,
            "unit": "iter/sec",
            "range": "stddev: 0.00020981384139261977",
            "extra": "mean: 2.554262244898076 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 767.4566019958601,
            "unit": "iter/sec",
            "range": "stddev: 0.00015426475629343935",
            "extra": "mean: 1.303005274043358 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.61273969862222,
            "unit": "iter/sec",
            "range": "stddev: 0.0018654960865475032",
            "extra": "mean: 36.21516774193531 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.69909571306935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168380728515182",
            "extra": "mean: 38.91187500000037 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.7457520891696,
            "unit": "iter/sec",
            "range": "stddev: 0.00035138724806666296",
            "extra": "mean: 3.2180649076517263 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 536.5152622270372,
            "unit": "iter/sec",
            "range": "stddev: 0.00021504212381822722",
            "extra": "mean: 1.863879875195107 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1575.9184518569662,
            "unit": "iter/sec",
            "range": "stddev: 0.00008389849046060831",
            "extra": "mean: 634.5506005222929 usec\nrounds: 1915"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1272.1667709717958,
            "unit": "iter/sec",
            "range": "stddev: 0.00009002493178019131",
            "extra": "mean: 786.0604622113418 usec\nrounds: 1601"
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
        "date": 1647985765231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.08517797060276,
            "unit": "iter/sec",
            "range": "stddev: 0.000026432858746324363",
            "extra": "mean: 5.647000000000035 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.21091791612315,
            "unit": "iter/sec",
            "range": "stddev: 0.000015458912999714324",
            "extra": "mean: 4.325055274261625 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.3092889788429,
            "unit": "iter/sec",
            "range": "stddev: 0.00001519764637418886",
            "extra": "mean: 2.8384150837988624 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.0028688630458,
            "unit": "iter/sec",
            "range": "stddev: 0.000020065480510299463",
            "extra": "mean: 1.3888833548387063 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 161.6126223857011,
            "unit": "iter/sec",
            "range": "stddev: 0.00001739405806139259",
            "extra": "mean: 6.187635502958564 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.92139421931648,
            "unit": "iter/sec",
            "range": "stddev: 0.000011658893985697432",
            "extra": "mean: 4.741102739725862 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.0568830715785,
            "unit": "iter/sec",
            "range": "stddev: 0.000013119985605071654",
            "extra": "mean: 2.9845678466076135 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 648.3456625429554,
            "unit": "iter/sec",
            "range": "stddev: 0.000009567152685963553",
            "extra": "mean: 1.5423871212121298 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.51772668246789,
            "unit": "iter/sec",
            "range": "stddev: 0.00031201713535268977",
            "extra": "mean: 42.5211166666668 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.980600065988355,
            "unit": "iter/sec",
            "range": "stddev: 0.00007574032325394644",
            "extra": "mean: 40.03106400000064 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.31818228625434,
            "unit": "iter/sec",
            "range": "stddev: 0.000027432649921824875",
            "extra": "mean: 3.8562664259929407 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 424.688144220947,
            "unit": "iter/sec",
            "range": "stddev: 0.000023642349844211822",
            "extra": "mean: 2.3546689814814865 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1288.7134494521604,
            "unit": "iter/sec",
            "range": "stddev: 0.000006758635637495655",
            "extra": "mean: 775.9676912079298 usec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1073.8434374914666,
            "unit": "iter/sec",
            "range": "stddev: 0.000014963388000746238",
            "extra": "mean: 931.2344473008399 usec\nrounds: 1167"
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
        "date": 1648220843892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.19005549045718,
            "unit": "iter/sec",
            "range": "stddev: 0.0004570931701266843",
            "extra": "mean: 8.183972058823544 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.8741515537529,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503609851229646",
            "extra": "mean: 6.33415913978496 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.6119978939503,
            "unit": "iter/sec",
            "range": "stddev: 0.0007460294832661078",
            "extra": "mean: 4.432388389513103 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.8490289722686,
            "unit": "iter/sec",
            "range": "stddev: 0.00037885432496999083",
            "extra": "mean: 1.9460968954248388 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.42141896944247,
            "unit": "iter/sec",
            "range": "stddev: 0.0005291222122157538",
            "extra": "mean: 8.816676859504074 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.66577869648313,
            "unit": "iter/sec",
            "range": "stddev: 0.0005412336319783254",
            "extra": "mean: 6.726497575757536 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.5722607401059,
            "unit": "iter/sec",
            "range": "stddev: 0.0006885954183980831",
            "extra": "mean: 4.55430934959329 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 458.601682389058,
            "unit": "iter/sec",
            "range": "stddev: 0.0003309935637521238",
            "extra": "mean: 2.180541499086004 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.994467101678147,
            "unit": "iter/sec",
            "range": "stddev: 0.0019515304153406876",
            "extra": "mean: 52.64690999999946 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.084625133383376,
            "unit": "iter/sec",
            "range": "stddev: 0.0024198256766025006",
            "extra": "mean: 49.78932857142871 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.48675948148463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281425059550404",
            "extra": "mean: 5.7641286458332 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.1204661229841,
            "unit": "iter/sec",
            "range": "stddev: 0.000321083888955447",
            "extra": "mean: 3.266687826086902 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 768.6603640546635,
            "unit": "iter/sec",
            "range": "stddev: 0.001362886223631987",
            "extra": "mean: 1.3009647000985272 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 768.3392986343473,
            "unit": "iter/sec",
            "range": "stddev: 0.000404549544612557",
            "extra": "mean: 1.301508333333214 msec\nrounds: 900"
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
        "date": 1648484616138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.02232107533584,
            "unit": "iter/sec",
            "range": "stddev: 0.000013212473391515952",
            "extra": "mean: 4.853842995169109 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.92998139004527,
            "unit": "iter/sec",
            "range": "stddev: 0.00010325029258894322",
            "extra": "mean: 3.71844 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.5238225463682,
            "unit": "iter/sec",
            "range": "stddev: 0.000011062564748876841",
            "extra": "mean: 2.4720422982885655 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.0927156519627,
            "unit": "iter/sec",
            "range": "stddev: 0.000009225673074422268",
            "extra": "mean: 1.1917634146341203 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.15351948053876,
            "unit": "iter/sec",
            "range": "stddev: 0.00012235683954544128",
            "extra": "mean: 5.314808900523557 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.4440024324791,
            "unit": "iter/sec",
            "range": "stddev: 0.000010365728858929052",
            "extra": "mean: 4.041318399999909 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.8654057176889,
            "unit": "iter/sec",
            "range": "stddev: 0.00002339557463274308",
            "extra": "mean: 2.6118839285713995 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.7104098869908,
            "unit": "iter/sec",
            "range": "stddev: 0.000008415797062575564",
            "extra": "mean: 1.3320715775748153 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.271168133215845,
            "unit": "iter/sec",
            "range": "stddev: 0.000037834163927802346",
            "extra": "mean: 36.66876296296292 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.924815726482155,
            "unit": "iter/sec",
            "range": "stddev: 0.00004518807004997151",
            "extra": "mean: 34.57238965517241 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.13759760920266,
            "unit": "iter/sec",
            "range": "stddev: 0.000011463427947523213",
            "extra": "mean: 3.3541559602650155 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.27704480446545,
            "unit": "iter/sec",
            "range": "stddev: 0.000011188328683497827",
            "extra": "mean: 2.0313764587524172 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1463.313374762918,
            "unit": "iter/sec",
            "range": "stddev: 0.000006557011403147036",
            "extra": "mean: 683.3806191117587 usec\nrounds: 1486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1211.682266666889,
            "unit": "iter/sec",
            "range": "stddev: 0.000007085156823335223",
            "extra": "mean: 825.298865478004 usec\nrounds: 1234"
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
        "date": 1648486052683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.41846181105691,
            "unit": "iter/sec",
            "range": "stddev: 0.001121778667249442",
            "extra": "mean: 7.973307801418434 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.11496656509817,
            "unit": "iter/sec",
            "range": "stddev: 0.0007341773004327999",
            "extra": "mean: 6.056386170212743 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.0465338104521,
            "unit": "iter/sec",
            "range": "stddev: 0.0005410783459409099",
            "extra": "mean: 4.114438434163736 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.2142101257642,
            "unit": "iter/sec",
            "range": "stddev: 0.00027356673016072354",
            "extra": "mean: 1.9371803030303485 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.23389953975042,
            "unit": "iter/sec",
            "range": "stddev: 0.0012646981373194736",
            "extra": "mean: 8.990065116279062 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.07781924925192,
            "unit": "iter/sec",
            "range": "stddev: 0.0008412350070027253",
            "extra": "mean: 6.753205882352647 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.75867441905936,
            "unit": "iter/sec",
            "range": "stddev: 0.0003506823068529827",
            "extra": "mean: 4.205945387453915 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 464.79512807213933,
            "unit": "iter/sec",
            "range": "stddev: 0.00041207139360443856",
            "extra": "mean: 2.1514855462185336 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.029867393693348,
            "unit": "iter/sec",
            "range": "stddev: 0.0016237371864227285",
            "extra": "mean: 49.925442857143544 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.59423143480132,
            "unit": "iter/sec",
            "range": "stddev: 0.0010938091156462136",
            "extra": "mean: 46.308663636363434 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.64231956765582,
            "unit": "iter/sec",
            "range": "stddev: 0.0004333411690013444",
            "extra": "mean: 5.4751823255812955 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.91666707598006,
            "unit": "iter/sec",
            "range": "stddev: 0.000213122782329264",
            "extra": "mean: 3.145478370786412 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.5402044549381,
            "unit": "iter/sec",
            "range": "stddev: 0.00023730335905255897",
            "extra": "mean: 1.1006667565140185 msec\nrounds: 1113"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.1394841539852,
            "unit": "iter/sec",
            "range": "stddev: 0.00028081869579445017",
            "extra": "mean: 1.267203099173364 msec\nrounds: 968"
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
        "date": 1648486640240,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.173676195534,
            "unit": "iter/sec",
            "range": "stddev: 0.000017345214010473826",
            "extra": "mean: 5.84201976744185 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.72646482797944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002465680931679488",
            "extra": "mean: 4.4498541850220725 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.0328900595702,
            "unit": "iter/sec",
            "range": "stddev: 0.000013836210277253537",
            "extra": "mean: 2.9322684971098365 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.4840245150975,
            "unit": "iter/sec",
            "range": "stddev: 0.000025718373016080538",
            "extra": "mean: 1.4134594780219807 msec\nrounds: 728"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.00457529218846,
            "unit": "iter/sec",
            "range": "stddev: 0.000019904850510877222",
            "extra": "mean: 6.369241139240569 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 203.92750446850408,
            "unit": "iter/sec",
            "range": "stddev: 0.00001460778190580125",
            "extra": "mean: 4.90370341463403 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.8037449972897,
            "unit": "iter/sec",
            "range": "stddev: 0.000012543225769635756",
            "extra": "mean: 3.0978574923546693 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 628.6870589412648,
            "unit": "iter/sec",
            "range": "stddev: 0.000014468474982203803",
            "extra": "mean: 1.5906164852256408 msec\nrounds: 643"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.895422866514874,
            "unit": "iter/sec",
            "range": "stddev: 0.000023493265370858033",
            "extra": "mean: 43.67685217391311 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.228417025965047,
            "unit": "iter/sec",
            "range": "stddev: 0.003779644784169029",
            "extra": "mean: 43.05071666666679 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.85971385603563,
            "unit": "iter/sec",
            "range": "stddev: 0.00021237807514266644",
            "extra": "mean: 4.169103614457751 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 403.4992904978749,
            "unit": "iter/sec",
            "range": "stddev: 0.00022121461715845389",
            "extra": "mean: 2.4783191037736576 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1239.0401632118103,
            "unit": "iter/sec",
            "range": "stddev: 0.00008629676738129622",
            "extra": "mean: 807.0763399693388 usec\nrounds: 1306"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1005.8005576899883,
            "unit": "iter/sec",
            "range": "stddev: 0.00023597033151502884",
            "extra": "mean: 994.2328947367952 usec\nrounds: 1064"
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
        "date": 1648604901388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.11293304153867,
            "unit": "iter/sec",
            "range": "stddev: 0.000012671172471736279",
            "extra": "mean: 4.851709134615374 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.7944334980444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010998426326163823",
            "extra": "mean: 3.6928380952381055 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.807290377551,
            "unit": "iter/sec",
            "range": "stddev: 0.000017078446608885824",
            "extra": "mean: 2.4825767156863043 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.533317523017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000089183720022039",
            "extra": "mean: 1.204045616113753 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.44084501328095,
            "unit": "iter/sec",
            "range": "stddev: 0.00001376718633825272",
            "extra": "mean: 5.278692670157241 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.44259629889552,
            "unit": "iter/sec",
            "range": "stddev: 0.00002173964751167045",
            "extra": "mean: 4.041341365461835 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.1257331831147,
            "unit": "iter/sec",
            "range": "stddev: 0.000011023446231498483",
            "extra": "mean: 2.5965546153846146 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.0069368963469,
            "unit": "iter/sec",
            "range": "stddev: 0.000010294859130124918",
            "extra": "mean: 1.3297749674054342 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.192424472537535,
            "unit": "iter/sec",
            "range": "stddev: 0.00007217032935203328",
            "extra": "mean: 36.77494814814805 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.801760363593605,
            "unit": "iter/sec",
            "range": "stddev: 0.00034028979666380737",
            "extra": "mean: 34.72009999999978 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.9258922388192,
            "unit": "iter/sec",
            "range": "stddev: 0.000013190116262652049",
            "extra": "mean: 3.379224414715886 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.1503501531206,
            "unit": "iter/sec",
            "range": "stddev: 0.000010440380688880618",
            "extra": "mean: 2.031899397590339 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1451.318261167929,
            "unit": "iter/sec",
            "range": "stddev: 0.000006147782517966475",
            "extra": "mean: 689.0287449392825 usec\nrounds: 1482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.6599315656888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072024528873570345",
            "extra": "mean: 820.5734627832044 usec\nrounds: 1236"
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
        "date": 1648607866253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.44861877589415,
            "unit": "iter/sec",
            "range": "stddev: 0.00010302256832075244",
            "extra": "mean: 5.511202051282036 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.56807360969017,
            "unit": "iter/sec",
            "range": "stddev: 0.00007807183035103834",
            "extra": "mean: 4.263154761904858 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.8767511903661,
            "unit": "iter/sec",
            "range": "stddev: 0.00005719026534842368",
            "extra": "mean: 2.7864719480520215 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 735.973010871106,
            "unit": "iter/sec",
            "range": "stddev: 0.000041326702253410835",
            "extra": "mean: 1.3587454773869883 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.4158792119105,
            "unit": "iter/sec",
            "range": "stddev: 0.00011791006526065872",
            "extra": "mean: 6.009041954023035 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 215.20198015762497,
            "unit": "iter/sec",
            "range": "stddev: 0.00009861285509351532",
            "extra": "mean: 4.646797391304433 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.0580113093138,
            "unit": "iter/sec",
            "range": "stddev: 0.000036040834960807086",
            "extra": "mean: 2.940674728261022 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 656.9797929417192,
            "unit": "iter/sec",
            "range": "stddev: 0.000031571274768468076",
            "extra": "mean: 1.5221168302945205 msec\nrounds: 713"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.925381520115167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935581060602366",
            "extra": "mean: 41.79661666666649 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.200733535197426,
            "unit": "iter/sec",
            "range": "stddev: 0.00046174600004100937",
            "extra": "mean: 39.681384615385 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.3923700722872,
            "unit": "iter/sec",
            "range": "stddev: 0.00008481063616590589",
            "extra": "mean: 3.7538612676055396 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 440.45991870848917,
            "unit": "iter/sec",
            "range": "stddev: 0.00005697605785743824",
            "extra": "mean: 2.270354140127408 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1297.5218386459621,
            "unit": "iter/sec",
            "range": "stddev: 0.00001924786010820251",
            "extra": "mean: 770.6999375390528 usec\nrounds: 1601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1096.7283756069535,
            "unit": "iter/sec",
            "range": "stddev: 0.00002812739286998267",
            "extra": "mean: 911.802796610034 usec\nrounds: 1180"
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
          "id": "e8e06d28d983e649f4d4ea96d546b24db26f45d8",
          "message": "Merge pull request #480 from TeoZosa/dependabot/pip/black-22.3.0",
          "timestamp": "2022-03-30T03:05:27Z",
          "tree_id": "769177298e6972d60a88a8c6bf6c5ac109f562d4"
        },
        "date": 1648613756055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.08564921240108,
            "unit": "iter/sec",
            "range": "stddev: 0.0008050244730297173",
            "extra": "mean: 7.7467945205479225 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.42530748678593,
            "unit": "iter/sec",
            "range": "stddev: 0.000564141246858389",
            "extra": "mean: 5.972812682926834 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.2507100823622,
            "unit": "iter/sec",
            "range": "stddev: 0.00043068616230731895",
            "extra": "mean: 3.9800882539682827 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.5046189921451,
            "unit": "iter/sec",
            "range": "stddev: 0.0004939947838048569",
            "extra": "mean: 2.0942205797101408 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.90741947233204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007075723381397904",
            "extra": "mean: 8.005929545454325 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.19320632909145,
            "unit": "iter/sec",
            "range": "stddev: 0.0007905016596740599",
            "extra": "mean: 6.527704615384758 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.35051062968947,
            "unit": "iter/sec",
            "range": "stddev: 0.00031846836978673875",
            "extra": "mean: 4.0265671186441825 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 445.0372632836686,
            "unit": "iter/sec",
            "range": "stddev: 0.00044939895192571484",
            "extra": "mean: 2.2470028523490084 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.979870764113667,
            "unit": "iter/sec",
            "range": "stddev: 0.0044481556917028795",
            "extra": "mean: 55.61775238095244 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.00594258115655,
            "unit": "iter/sec",
            "range": "stddev: 0.001908182751182397",
            "extra": "mean: 47.60557619047542 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.48168148615287,
            "unit": "iter/sec",
            "range": "stddev: 0.0005658224210242555",
            "extra": "mean: 5.362457009345739 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.89361155078785,
            "unit": "iter/sec",
            "range": "stddev: 0.00027986095156033123",
            "extra": "mean: 3.345672043010797 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 844.374773041938,
            "unit": "iter/sec",
            "range": "stddev: 0.00025275754127006007",
            "extra": "mean: 1.184308238387331 msec\nrounds: 1141"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 754.7939386207416,
            "unit": "iter/sec",
            "range": "stddev: 0.00041452928038440874",
            "extra": "mean: 1.324864905284389 msec\nrounds: 1003"
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
          "id": "88cb9ce56e1a1b3c1b9de28ae63af134eff121c1",
          "message": "Merge pull request #482 from TeoZosa/dependabot/pip/pylint-2.13.4",
          "timestamp": "2022-03-31T13:33:50Z",
          "tree_id": "7b282787a6efcee7886052d4f3e84a4bcceb98a1"
        },
        "date": 1648734388811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.5272027139715,
            "unit": "iter/sec",
            "range": "stddev: 0.000583665151022348",
            "extra": "mean: 7.966400735294147 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.38849098022516,
            "unit": "iter/sec",
            "range": "stddev: 0.0009128487292820932",
            "extra": "mean: 6.435483050847445 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.3896469388985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501689902933456",
            "extra": "mean: 4.15991292775673 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.1458444441598,
            "unit": "iter/sec",
            "range": "stddev: 0.00026991196183242844",
            "extra": "mean: 1.8582323181049183 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.9772529202511,
            "unit": "iter/sec",
            "range": "stddev: 0.0007201653860209377",
            "extra": "mean: 8.773680487804802 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.9963651187613,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183220219083005",
            "extra": "mean: 6.666828220858811 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.26889716297967,
            "unit": "iter/sec",
            "range": "stddev: 0.0003604345718321901",
            "extra": "mean: 4.323970980392062 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.516036683597,
            "unit": "iter/sec",
            "range": "stddev: 0.0003951069575228633",
            "extra": "mean: 2.063915173674693 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.550138962975495,
            "unit": "iter/sec",
            "range": "stddev: 0.0013223636138151472",
            "extra": "mean: 48.66147142857121 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.337370734961308,
            "unit": "iter/sec",
            "range": "stddev: 0.0014997059109988946",
            "extra": "mean: 46.86613043478214 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.65537468453977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700840885122912",
            "extra": "mean: 5.597368686868488 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.82080119508043,
            "unit": "iter/sec",
            "range": "stddev: 0.00040977211804638753",
            "extra": "mean: 3.2069701449275123 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 930.585774386278,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547833533049017",
            "extra": "mean: 1.0745919694071195 msec\nrounds: 1046"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 819.7380945602952,
            "unit": "iter/sec",
            "range": "stddev: 0.000291799881008303",
            "extra": "mean: 1.2199018279568876 msec\nrounds: 930"
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
          "id": "52c41779ef071a620510015333cfa37477586514",
          "message": "Merge pull request #476 from TeoZosa/dependabot/pip/xdoctest-1.0.0\n\n⬆️ Bump xdoctest from 0.15.10 to 1.0.0",
          "timestamp": "2022-03-31T22:18:00Z",
          "tree_id": "bae1bbe388c703b3a9445760b70cfcf73b3d8278"
        },
        "date": 1648765345185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.27030913621422,
            "unit": "iter/sec",
            "range": "stddev: 0.000027578002056742498",
            "extra": "mean: 4.2504300847457595 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.0502798203818,
            "unit": "iter/sec",
            "range": "stddev: 0.00001809774202088545",
            "extra": "mean: 3.2252833333332895 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.7795979261245,
            "unit": "iter/sec",
            "range": "stddev: 0.00002240597428501233",
            "extra": "mean: 2.16553525641031 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.9580373916787,
            "unit": "iter/sec",
            "range": "stddev: 0.000010268461820937612",
            "extra": "mean: 1.0515711111111015 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.79096637360394,
            "unit": "iter/sec",
            "range": "stddev: 0.000027101041441203175",
            "extra": "mean: 4.634114285714244 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.4794042421898,
            "unit": "iter/sec",
            "range": "stddev: 0.000021315437666743506",
            "extra": "mean: 3.540081099656485 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.583619571847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001637392819046968",
            "extra": "mean: 2.26457675438592 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.012336951454,
            "unit": "iter/sec",
            "range": "stddev: 0.000015151818362637973",
            "extra": "mean: 1.1560528761061148 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.464222669489526,
            "unit": "iter/sec",
            "range": "stddev: 0.000049041053243502665",
            "extra": "mean: 32.82539032258053 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.32137139578948,
            "unit": "iter/sec",
            "range": "stddev: 0.00005713904059129359",
            "extra": "mean: 30.939281249998896 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.633586974804,
            "unit": "iter/sec",
            "range": "stddev: 0.000017268901969468307",
            "extra": "mean: 2.953044347826032 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.2799261844095,
            "unit": "iter/sec",
            "range": "stddev: 0.000012443352190096007",
            "extra": "mean: 1.781642195540498 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1655.4703491646283,
            "unit": "iter/sec",
            "range": "stddev: 0.000005898753521330966",
            "extra": "mean: 604.0579346556179 usec\nrounds: 1714"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1416.2488206691928,
            "unit": "iter/sec",
            "range": "stddev: 0.000008523724424702008",
            "extra": "mean: 706.0906144497189 usec\nrounds: 1481"
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
          "id": "6de7c1554b72ef904e2de836358946b4357f6199",
          "message": ":rewind: Only push-trigger CI job on master\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence.\n\nReverts 24a56b6afb135be630c7d2c8c046fc79f6f9eeee.",
          "timestamp": "2022-03-31T22:38:04Z",
          "tree_id": "995c65d894aff6c30591110d1e9c4b1cf75cdffa"
        },
        "date": 1648767342434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.09191585181844,
            "unit": "iter/sec",
            "range": "stddev: 0.0006891566673393244",
            "extra": "mean: 7.686872727272712 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.59276814848533,
            "unit": "iter/sec",
            "range": "stddev: 0.0004316698927416359",
            "extra": "mean: 5.694995360824751 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.86329367465734,
            "unit": "iter/sec",
            "range": "stddev: 0.00028490183106034196",
            "extra": "mean: 3.9547060606061493 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.7373210646655,
            "unit": "iter/sec",
            "range": "stddev: 0.00018082081990484003",
            "extra": "mean: 1.78019149253728 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.96354018289146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005185521891516085",
            "extra": "mean: 8.199171641790993 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.99531657138508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003492531666686509",
            "extra": "mean: 6.135145604395585 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.3448399894616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061637413430881",
            "extra": "mean: 4.2132788732394655 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.9508507685336,
            "unit": "iter/sec",
            "range": "stddev: 0.00024081123662314895",
            "extra": "mean: 1.9803907617503826 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.97738756188656,
            "unit": "iter/sec",
            "range": "stddev: 0.0025612503569292376",
            "extra": "mean: 47.67037826086992 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.07371268591824,
            "unit": "iter/sec",
            "range": "stddev: 0.0030141939863803343",
            "extra": "mean: 47.452483333333774 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.45566627076937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005330691666613466",
            "extra": "mean: 5.196001860465266 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.83514523967995,
            "unit": "iter/sec",
            "range": "stddev: 0.00031383870155113396",
            "extra": "mean: 3.004490404040366 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 980.1447385500928,
            "unit": "iter/sec",
            "range": "stddev: 0.00011491561312536925",
            "extra": "mean: 1.0202574789916015 msec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 786.7459531754891,
            "unit": "iter/sec",
            "range": "stddev: 0.0001114283856269143",
            "extra": "mean: 1.2710583333333563 msec\nrounds: 960"
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
          "id": "2057ecff40015f036a2659f489accf7fbf93bf38",
          "message": ":construction_worker: Only push-trigger CI job on master\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence.\n\nReverts 24a56b6afb135be630c7d2c8c046fc79f6f9eeee.",
          "timestamp": "2022-03-31T22:39:06Z",
          "tree_id": "995c65d894aff6c30591110d1e9c4b1cf75cdffa"
        },
        "date": 1648768227831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.91849540786043,
            "unit": "iter/sec",
            "range": "stddev: 0.00016500900531700918",
            "extra": "mean: 5.378701015228424 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.41193297939856,
            "unit": "iter/sec",
            "range": "stddev: 0.00007833832327921894",
            "extra": "mean: 4.194420923076913 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.27806158085014,
            "unit": "iter/sec",
            "range": "stddev: 0.00007185164744701369",
            "extra": "mean: 2.7527123318385214 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.9748993886556,
            "unit": "iter/sec",
            "range": "stddev: 0.00004460997283984812",
            "extra": "mean: 1.3210477663230513 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.6737416197669,
            "unit": "iter/sec",
            "range": "stddev: 0.00008426796624443747",
            "extra": "mean: 5.999745312499805 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.98416236502476,
            "unit": "iter/sec",
            "range": "stddev: 0.00009375697906732952",
            "extra": "mean: 4.587489243027908 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.44539220318967,
            "unit": "iter/sec",
            "range": "stddev: 0.00008783822860135036",
            "extra": "mean: 2.8781501278773316 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.6044595930501,
            "unit": "iter/sec",
            "range": "stddev: 0.00001747563966078985",
            "extra": "mean: 1.5091960000000106 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.092052455914654,
            "unit": "iter/sec",
            "range": "stddev: 0.000356636836619365",
            "extra": "mean: 41.50746400000045 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.447982366505542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003672791856132888",
            "extra": "mean: 39.29584615384648 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.02640500680576,
            "unit": "iter/sec",
            "range": "stddev: 0.0001408165153220004",
            "extra": "mean: 3.7309756849315194 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 443.9579919535694,
            "unit": "iter/sec",
            "range": "stddev: 0.00008430012405470484",
            "extra": "mean: 2.2524653641207193 msec\nrounds: 563"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.446747415706,
            "unit": "iter/sec",
            "range": "stddev: 0.00002711340220402021",
            "extra": "mean: 759.0439628482842 usec\nrounds: 1615"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1112.068840441228,
            "unit": "iter/sec",
            "range": "stddev: 0.00003980923337188558",
            "extra": "mean: 899.2249073386831 usec\nrounds: 1349"
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
          "id": "d9f3b993432075dc1a154f5184a442dbeda48fef",
          "message": ":construction_worker: Restrict job CI jobs to trunk pushes & PRs\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence in\ngeneral (even for a one-man team with only Dependabot updates).\n\nReverts:\n- 042f0d81968505024e25f6ce047af3a5628f36d5\n- 6fb732b27234875e033857e11474816550f67d81\n- 24a56b6afb135be630c7d2c8c046fc79f6f9eeee\n- a28ff70c3b73f406cbfc92d5c3b06e2232a4cc80\n- e9328e969e69abe1d3a590a7031e3981b1ead8a5\n- 3f2ce37baca3510a175d7e3537f5c7de20729efe\n- bbaefaee2af60b92f9e67a91037df6d1b0ea9883\n- 3919b79fbefdde2ff81ecf5ea9c3c6f60e81599b",
          "timestamp": "2022-03-31T23:34:27Z",
          "tree_id": "0dd96960a0428c4ecc4c50cb79b149edd6c0602d"
        },
        "date": 1648769914399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.35100493939578,
            "unit": "iter/sec",
            "range": "stddev: 0.00001650081495422371",
            "extra": "mean: 4.776666824644506 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.2654372471789,
            "unit": "iter/sec",
            "range": "stddev: 0.00002953723206952373",
            "extra": "mean: 3.6461028776978566 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.4856067650576,
            "unit": "iter/sec",
            "range": "stddev: 0.000014191968753385555",
            "extra": "mean: 2.4302186602870934 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.6378339564966,
            "unit": "iter/sec",
            "range": "stddev: 0.00001343795347396457",
            "extra": "mean: 1.189572916666692 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.29754643122885,
            "unit": "iter/sec",
            "range": "stddev: 0.000018753489269034455",
            "extra": "mean: 5.2002743589743545 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.732959307511,
            "unit": "iter/sec",
            "range": "stddev: 0.000014536230980328791",
            "extra": "mean: 3.972463529411831 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.9983364262254,
            "unit": "iter/sec",
            "range": "stddev: 0.000014852129110852612",
            "extra": "mean: 2.5510312342567842 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 757.4477903797226,
            "unit": "iter/sec",
            "range": "stddev: 0.000011710246872025506",
            "extra": "mean: 1.3202230077120978 msec\nrounds: 778"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.882368133521574,
            "unit": "iter/sec",
            "range": "stddev: 0.00004960374118548754",
            "extra": "mean: 37.19910370370338 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.387672232412633,
            "unit": "iter/sec",
            "range": "stddev: 0.00005456479449177375",
            "extra": "mean: 35.22655862068939 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.12985693672636,
            "unit": "iter/sec",
            "range": "stddev: 0.000014377272090049754",
            "extra": "mean: 3.3208264705884702 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.244647988498,
            "unit": "iter/sec",
            "range": "stddev: 0.000013150382965429745",
            "extra": "mean: 2.011082480314864 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1482.6962383302523,
            "unit": "iter/sec",
            "range": "stddev: 0.000007056013606385153",
            "extra": "mean: 674.446979865651 usec\nrounds: 1490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1242.424101763259,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734935498555752",
            "extra": "mean: 804.8781399047165 usec\nrounds: 1258"
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
          "id": "b84fdf60255c81445e322622dfdbac2bf2794b91",
          "message": "Merge pull request #473 from TeoZosa/dependabot/pip/mypy-0.942\n\n⬆️ Bump mypy from 0.941 to 0.942",
          "timestamp": "2022-03-31T23:38:01Z",
          "tree_id": "6c2d1b391b7d9940f0b4cc87cab325ed4cbe0949"
        },
        "date": 1648770458408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.42745766231107,
            "unit": "iter/sec",
            "range": "stddev: 0.0003660382183574425",
            "extra": "mean: 4.620485823754797 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.6656651586572,
            "unit": "iter/sec",
            "range": "stddev: 0.0003175846970311554",
            "extra": "mean: 3.3482255131964367 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 436.3822356572283,
            "unit": "iter/sec",
            "range": "stddev: 0.0002481609198553273",
            "extra": "mean: 2.2915689922480826 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.6819376978283,
            "unit": "iter/sec",
            "range": "stddev: 0.00011432403254028089",
            "extra": "mean: 1.1645755617977163 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.3291071032345,
            "unit": "iter/sec",
            "range": "stddev: 0.00039834284893192903",
            "extra": "mean: 5.199421008403269 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.1579014066408,
            "unit": "iter/sec",
            "range": "stddev: 0.0003286528495279891",
            "extra": "mean: 3.7291461290323014 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.00715735782524,
            "unit": "iter/sec",
            "range": "stddev: 0.00023128599667169135",
            "extra": "mean: 2.475203673469353 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 806.0372187685834,
            "unit": "iter/sec",
            "range": "stddev: 0.00013390026127201314",
            "extra": "mean: 1.2406374999999894 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.89960103570493,
            "unit": "iter/sec",
            "range": "stddev: 0.0021833683077506667",
            "extra": "mean: 35.842806451613235 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.2525319894721,
            "unit": "iter/sec",
            "range": "stddev: 0.0012419281273681557",
            "extra": "mean: 34.1850749999999 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.7554646978472,
            "unit": "iter/sec",
            "range": "stddev: 0.0003048921853120805",
            "extra": "mean: 3.1770695417789194 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.43699299388845,
            "unit": "iter/sec",
            "range": "stddev: 0.00014970780097057362",
            "extra": "mean: 2.125683173076891 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1542.0825692161723,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592795427840308",
            "extra": "mean: 648.4737068964417 usec\nrounds: 1856"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1224.022277364776,
            "unit": "iter/sec",
            "range": "stddev: 0.00008346451304997512",
            "extra": "mean: 816.9785946648957 usec\nrounds: 1537"
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
          "id": "60106608e39f0791b9b05ecc02bbbc7decb8c292",
          "message": "Merge pull request #483 from TeoZosa/compatibility/open-up-dotent-and-importlib-metadata-dependencies\n\n📌  Open `importlib-metadata` & `python-dotenv` version ranges",
          "timestamp": "2022-04-02T02:11:59Z",
          "tree_id": "32b94a9c2faeaaaceb6472b89f883259f9fc9f07"
        },
        "date": 1648865928496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.257688869521,
            "unit": "iter/sec",
            "range": "stddev: 0.000557721791967173",
            "extra": "mean: 7.61860130718946 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.0028634446064,
            "unit": "iter/sec",
            "range": "stddev: 0.0006494042617314592",
            "extra": "mean: 5.681725742574248 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.51329014116513,
            "unit": "iter/sec",
            "range": "stddev: 0.0007143708727338586",
            "extra": "mean: 4.0239296636085795 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.9814001404525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003366357621329973",
            "extra": "mean: 1.9084646892655948 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.36039442101338,
            "unit": "iter/sec",
            "range": "stddev: 0.0008943403787783398",
            "extra": "mean: 8.30838088235288 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.86743473005282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390917953876629",
            "extra": "mean: 6.3344286407767445 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.1851070355121,
            "unit": "iter/sec",
            "range": "stddev: 0.00042878120690908886",
            "extra": "mean: 3.9034275316456286 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.06626416734787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003059484177417763",
            "extra": "mean: 2.024020000000009 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.73401772072682,
            "unit": "iter/sec",
            "range": "stddev: 0.0030125080750790308",
            "extra": "mean: 48.229919230769596 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.763168174104166,
            "unit": "iter/sec",
            "range": "stddev: 0.0025504220674692772",
            "extra": "mean: 43.930616000000384 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.911846228357,
            "unit": "iter/sec",
            "range": "stddev: 0.0005349484743464673",
            "extra": "mean: 5.10433656387674 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.787213568421,
            "unit": "iter/sec",
            "range": "stddev: 0.0003402807783688182",
            "extra": "mean: 3.197061633663148 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 859.3707234189088,
            "unit": "iter/sec",
            "range": "stddev: 0.00041900361050404986",
            "extra": "mean: 1.16364215436804 msec\nrounds: 1179"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 860.591166236589,
            "unit": "iter/sec",
            "range": "stddev: 0.0001634629187905184",
            "extra": "mean: 1.161991941391931 msec\nrounds: 1092"
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
          "id": "5ebb44b3a9a23edc265f6bf776179b27242b5f7e",
          "message": "Merge pull request #486 from TeoZosa/dependabot/pip/rich-12.1.0",
          "timestamp": "2022-04-04T13:19:30Z",
          "tree_id": "d1b718b9bbe316726743e8e929a9145a6446ef8b"
        },
        "date": 1649082447964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.05221812035228,
            "unit": "iter/sec",
            "range": "stddev: 0.000014923757669243796",
            "extra": "mean: 4.806485645933025 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.37978815191457,
            "unit": "iter/sec",
            "range": "stddev: 0.000016287369021709364",
            "extra": "mean: 3.6713443636363703 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.7276206929301,
            "unit": "iter/sec",
            "range": "stddev: 0.000010767275782205099",
            "extra": "mean: 2.4170491646778474 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.5230311821769,
            "unit": "iter/sec",
            "range": "stddev: 0.000010884250520601608",
            "extra": "mean: 1.1982892773892773 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.37778827457842,
            "unit": "iter/sec",
            "range": "stddev: 0.000015105266527965138",
            "extra": "mean: 5.2527136125655485 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.4681966097886,
            "unit": "iter/sec",
            "range": "stddev: 0.000023423088356323776",
            "extra": "mean: 4.040923293172957 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.5126371798374,
            "unit": "iter/sec",
            "range": "stddev: 0.000011042465500094487",
            "extra": "mean: 2.5541959697731547 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.745189014491,
            "unit": "iter/sec",
            "range": "stddev: 0.00001126380392802365",
            "extra": "mean: 1.3214487710219867 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.89216242866133,
            "unit": "iter/sec",
            "range": "stddev: 0.00005301057465864004",
            "extra": "mean: 37.1855555555552 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.290798286507467,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864833117595214",
            "extra": "mean: 35.34718214285678 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 300.9987415479992,
            "unit": "iter/sec",
            "range": "stddev: 0.000011297533072387858",
            "extra": "mean: 3.3222730263160707 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.61277514135566,
            "unit": "iter/sec",
            "range": "stddev: 0.000009882178236101103",
            "extra": "mean: 2.0508076305222045 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1453.5631151501927,
            "unit": "iter/sec",
            "range": "stddev: 0.000005466512575390231",
            "extra": "mean: 687.964622641565 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1215.4550726830334,
            "unit": "iter/sec",
            "range": "stddev: 0.000006979984135450992",
            "extra": "mean: 822.7371150729322 usec\nrounds: 1234"
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
          "id": "61b9f76de1a858ac7f019490cb8750329da0561c",
          "message": "Merge pull request #487 from TeoZosa/dependabot/pip/pre-commit-2.18.1",
          "timestamp": "2022-04-04T13:51:32Z",
          "tree_id": "88a78b8c09562bafca47fb5b3c195fdb2f81e579"
        },
        "date": 1649084214824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.15253136062796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236127873993284",
            "extra": "mean: 5.742092820512846 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.51178365357472,
            "unit": "iter/sec",
            "range": "stddev: 0.00009009449893886885",
            "extra": "mean: 4.175159922178948 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.402229238797,
            "unit": "iter/sec",
            "range": "stddev: 0.00005794183397903354",
            "extra": "mean: 2.751771782178268 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.0208648120814,
            "unit": "iter/sec",
            "range": "stddev: 0.000026661947015917648",
            "extra": "mean: 1.3386506951871515 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.74014881041023,
            "unit": "iter/sec",
            "range": "stddev: 0.00013229731157699342",
            "extra": "mean: 5.822750282485978 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 215.53102043795255,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653215109695803",
            "extra": "mean: 4.6397033613445995 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.38484317834383,
            "unit": "iter/sec",
            "range": "stddev: 0.00006539196160803084",
            "extra": "mean: 2.862173387096672 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.9987082380802,
            "unit": "iter/sec",
            "range": "stddev: 0.000039104468839886494",
            "extra": "mean: 1.5015044137931295 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.862943512525394,
            "unit": "iter/sec",
            "range": "stddev: 0.0016989300858250727",
            "extra": "mean: 43.738900000000136 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.26557330522894,
            "unit": "iter/sec",
            "range": "stddev: 0.000914216135147147",
            "extra": "mean: 41.21064800000056 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.4106284554339,
            "unit": "iter/sec",
            "range": "stddev: 0.0004888625766763114",
            "extra": "mean: 3.9617983050842964 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 416.99292881579566,
            "unit": "iter/sec",
            "range": "stddev: 0.0003881104870469344",
            "extra": "mean: 2.398122200392862 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1239.8650768213756,
            "unit": "iter/sec",
            "range": "stddev: 0.00020698625144764131",
            "extra": "mean: 806.5393716578304 usec\nrounds: 1496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1001.7293949097945,
            "unit": "iter/sec",
            "range": "stddev: 0.00033591162799361614",
            "extra": "mean: 998.2735907336031 usec\nrounds: 1295"
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
          "id": "1c4926428206a7a354321fb9061b2aef3af53791",
          "message": "Merge pull request #488 from TeoZosa/dependabot/pip/rich-12.2.0",
          "timestamp": "2022-04-05T13:24:40Z",
          "tree_id": "d5f5cac46b49725279ae238646c34843a61db390"
        },
        "date": 1649167012986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.62119190918577,
            "unit": "iter/sec",
            "range": "stddev: 0.000025806820636153093",
            "extra": "mean: 4.24410042194093 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.84157621222124,
            "unit": "iter/sec",
            "range": "stddev: 0.000011501521516692687",
            "extra": "mean: 3.2484241157556166 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.9702199770468,
            "unit": "iter/sec",
            "range": "stddev: 0.000018170226074870755",
            "extra": "mean: 2.445165811965782 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.3335093546951,
            "unit": "iter/sec",
            "range": "stddev: 0.000008139295898282172",
            "extra": "mean: 1.1971266431925036 msec\nrounds: 852"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.09908012032514,
            "unit": "iter/sec",
            "range": "stddev: 0.000033389367238030514",
            "extra": "mean: 5.232887564766676 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.33078923652735,
            "unit": "iter/sec",
            "range": "stddev: 0.000008645089823361156",
            "extra": "mean: 4.0431682730922756 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.25348196625725,
            "unit": "iter/sec",
            "range": "stddev: 0.000011102654428781035",
            "extra": "mean: 2.5690200507613845 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.7733639604505,
            "unit": "iter/sec",
            "range": "stddev: 0.000010443947968934973",
            "extra": "mean: 1.3337363636363435 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.292440744456137,
            "unit": "iter/sec",
            "range": "stddev: 0.000051155138430454004",
            "extra": "mean: 36.64018214285684 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.398614679924826,
            "unit": "iter/sec",
            "range": "stddev: 0.00005293444104946959",
            "extra": "mean: 30.86551724137855 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.14515459613256,
            "unit": "iter/sec",
            "range": "stddev: 0.00001327590921158946",
            "extra": "mean: 2.974905294117559 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.8578027498771,
            "unit": "iter/sec",
            "range": "stddev: 0.000009800219703673986",
            "extra": "mean: 1.7957905861456849 msec\nrounds: 563"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1620.077693291448,
            "unit": "iter/sec",
            "range": "stddev: 0.000005793490914521989",
            "extra": "mean: 617.254347825961 usec\nrounds: 1656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1376.6425201078193,
            "unit": "iter/sec",
            "range": "stddev: 0.000005978540320225995",
            "extra": "mean: 726.4049928674871 usec\nrounds: 1402"
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
          "id": "2fae7b08d0af2a2041d1eb477954cb9070a78f06",
          "message": "Merge pull request #490 from TeoZosa/dependabot/pip/pylint-2.13.5",
          "timestamp": "2022-04-07T13:22:51Z",
          "tree_id": "131ec008e5353c7f168464b77fe886490cafc420"
        },
        "date": 1649339351487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.6595162904422,
            "unit": "iter/sec",
            "range": "stddev: 0.00003321313678225733",
            "extra": "mean: 4.815575119617219 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.5965058712765,
            "unit": "iter/sec",
            "range": "stddev: 0.000011469242733167774",
            "extra": "mean: 3.7092468864469157 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.80921204280537,
            "unit": "iter/sec",
            "range": "stddev: 0.000026625935433685258",
            "extra": "mean: 2.4702995145630675 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.8848438772677,
            "unit": "iter/sec",
            "range": "stddev: 0.000009279584663482454",
            "extra": "mean: 1.2137618593563637 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.66542432554942,
            "unit": "iter/sec",
            "range": "stddev: 0.00010968194228411964",
            "extra": "mean: 5.272442268041219 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.77758374039587,
            "unit": "iter/sec",
            "range": "stddev: 0.000012659040384463418",
            "extra": "mean: 4.035877600000049 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.25945067008774,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363144963651755",
            "extra": "mean: 2.588933418367337 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.485789467752,
            "unit": "iter/sec",
            "range": "stddev: 0.000009696969397532638",
            "extra": "mean: 1.3432089828268183 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.271396759127573,
            "unit": "iter/sec",
            "range": "stddev: 0.0003388152665860088",
            "extra": "mean: 36.66845555555587 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.675859553946477,
            "unit": "iter/sec",
            "range": "stddev: 0.00008728653722846516",
            "extra": "mean: 34.872537931033925 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.73066881023914,
            "unit": "iter/sec",
            "range": "stddev: 0.000013100501964426803",
            "extra": "mean: 3.3700594684383818 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.0654271857574,
            "unit": "iter/sec",
            "range": "stddev: 0.000011359453554056992",
            "extra": "mean: 2.0405438631788115 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1408.833950827911,
            "unit": "iter/sec",
            "range": "stddev: 0.00000581314751477884",
            "extra": "mean: 709.8068579425866 usec\nrounds: 1429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1207.2108887857203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061829763385664874",
            "extra": "mean: 828.3556827472419 usec\nrounds: 1223"
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
          "id": "9964e858621ead3f118be676fc074b501c08be1e",
          "message": "Merge pull request #493 from TeoZosa/dependabot/pip/tox-3.25.0",
          "timestamp": "2022-04-11T14:19:01Z",
          "tree_id": "bbe16aa88c5b5788945ac70fe4f7103c20e99243"
        },
        "date": 1649688554083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.04209554405625,
            "unit": "iter/sec",
            "range": "stddev: 0.00008231816493029019",
            "extra": "mean: 5.523577248677239 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.2059560456779,
            "unit": "iter/sec",
            "range": "stddev: 0.00008640667024397001",
            "extra": "mean: 4.19804784313723 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.99226050193164,
            "unit": "iter/sec",
            "range": "stddev: 0.00007946414342495533",
            "extra": "mean: 2.7855753731343165 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 725.6763861509893,
            "unit": "iter/sec",
            "range": "stddev: 0.000036848098674134",
            "extra": "mean: 1.3780247216035675 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.25001271326806,
            "unit": "iter/sec",
            "range": "stddev: 0.00008740536027623072",
            "extra": "mean: 5.94353595505637 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.10110069317994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000694022928209546",
            "extra": "mean: 4.606148917748965 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.2918264709346,
            "unit": "iter/sec",
            "range": "stddev: 0.000043645395214322585",
            "extra": "mean: 2.9560276712328966 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.2866721096607,
            "unit": "iter/sec",
            "range": "stddev: 0.000010770332876950729",
            "extra": "mean: 1.5401517433752374 msec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.510504248397087,
            "unit": "iter/sec",
            "range": "stddev: 0.0003865164263107604",
            "extra": "mean: 42.53417916666669 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.974945806769245,
            "unit": "iter/sec",
            "range": "stddev: 0.00039452831843462595",
            "extra": "mean: 40.040126923076585 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.07722022323713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000591501292364234",
            "extra": "mean: 3.8302843853819892 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.7539153554308,
            "unit": "iter/sec",
            "range": "stddev: 0.000040742670844806874",
            "extra": "mean: 2.289618855932176 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1242.3848912059045,
            "unit": "iter/sec",
            "range": "stddev: 0.000021525014526562517",
            "extra": "mean: 804.9035424355195 usec\nrounds: 1355"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1074.8674303189778,
            "unit": "iter/sec",
            "range": "stddev: 0.00003278518181090929",
            "extra": "mean: 930.3472891566171 usec\nrounds: 1328"
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
          "id": "9fc689c8e07807062838760d6d4225b14c6d6069",
          "message": "Merge pull request #494 from TeoZosa/dependabot/pip/sentry-sdk-1.5.9",
          "timestamp": "2022-04-12T15:11:59Z",
          "tree_id": "221b85a010abc5184588811f805682c04f2f3351"
        },
        "date": 1649778105069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.2076381678128,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000671952565308",
            "extra": "mean: 6.982867763157895 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.0058335430853,
            "unit": "iter/sec",
            "range": "stddev: 0.0004652113476806124",
            "extra": "mean: 5.347426767676766 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.3780143516026,
            "unit": "iter/sec",
            "range": "stddev: 0.00020533349537317733",
            "extra": "mean: 3.8112949458483927 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.5402280755816,
            "unit": "iter/sec",
            "range": "stddev: 0.00022532683469520678",
            "extra": "mean: 1.8848712068965645 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.1078280159041,
            "unit": "iter/sec",
            "range": "stddev: 0.0008882626616440657",
            "extra": "mean: 7.68593262411361 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.02130056530916,
            "unit": "iter/sec",
            "range": "stddev: 0.00026624878630543734",
            "extra": "mean: 5.713590270270276 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.4818053797721,
            "unit": "iter/sec",
            "range": "stddev: 0.00044100447002344664",
            "extra": "mean: 4.040701086956491 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.7783002334472,
            "unit": "iter/sec",
            "range": "stddev: 0.00019785477622123767",
            "extra": "mean: 1.8983318021202464 msec\nrounds: 566"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.444842540041808,
            "unit": "iter/sec",
            "range": "stddev: 0.001048745592924228",
            "extra": "mean: 42.653304166666274 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.59977118428212,
            "unit": "iter/sec",
            "range": "stddev: 0.0011846856969481522",
            "extra": "mean: 40.65078461538472 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.5446900055554,
            "unit": "iter/sec",
            "range": "stddev: 0.0003569282453923704",
            "extra": "mean: 5.087901382488302 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 350.90542786395014,
            "unit": "iter/sec",
            "range": "stddev: 0.00027821638065752457",
            "extra": "mean: 2.8497706806282594 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 957.5283812933639,
            "unit": "iter/sec",
            "range": "stddev: 0.00008601563519175473",
            "extra": "mean: 1.044355467196981 msec\nrounds: 1006"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 886.374376098441,
            "unit": "iter/sec",
            "range": "stddev: 0.00011207016446051124",
            "extra": "mean: 1.1281914583335606 msec\nrounds: 960"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "committer": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "id": "cfd21d50db6a899b83050ee0a2a26a35335df46c",
          "message": "⬆️ Bump tox from 3.24.5 to 3.25.0 in /.github/workflows",
          "timestamp": "2022-04-04T21:12:38Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/492/commits/cfd21d50db6a899b83050ee0a2a26a35335df46c"
        },
        "date": 1649968355122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.80658933044958,
            "unit": "iter/sec",
            "range": "stddev: 0.000014564716996628209",
            "extra": "mean: 4.858930917874394 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.4556419338195,
            "unit": "iter/sec",
            "range": "stddev: 0.000009350477649888294",
            "extra": "mean: 3.711185977859792 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.4704799219384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010430932389745937",
            "extra": "mean: 2.4846542787286063 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.3818081561,
            "unit": "iter/sec",
            "range": "stddev: 0.000009129421666760496",
            "extra": "mean: 1.194198381502916 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.24947651667281,
            "unit": "iter/sec",
            "range": "stddev: 0.000013526288637247355",
            "extra": "mean: 5.256256250000054 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.57644023758652,
            "unit": "iter/sec",
            "range": "stddev: 0.000009040023747207956",
            "extra": "mean: 4.055537499999834 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.517898900583,
            "unit": "iter/sec",
            "range": "stddev: 0.000010793217417338461",
            "extra": "mean: 2.587202307692384 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.6787944644707,
            "unit": "iter/sec",
            "range": "stddev: 0.000008783381623650509",
            "extra": "mean: 1.3215647211413353 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.04776906494563,
            "unit": "iter/sec",
            "range": "stddev: 0.0005536501850253452",
            "extra": "mean: 36.971625925925885 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.631447419383527,
            "unit": "iter/sec",
            "range": "stddev: 0.00022494881656521482",
            "extra": "mean: 34.92663103448269 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.7265376431055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000741846872780859",
            "extra": "mean: 3.3475432343232923 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.26024375793185,
            "unit": "iter/sec",
            "range": "stddev: 0.000010643892150943546",
            "extra": "mean: 2.0110194059406923 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1458.9702782831084,
            "unit": "iter/sec",
            "range": "stddev: 0.000005340582783655644",
            "extra": "mean: 685.4149223497432 usec\nrounds: 1481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1230.365216203964,
            "unit": "iter/sec",
            "range": "stddev: 0.000005721673582437708",
            "extra": "mean: 812.7668003207145 usec\nrounds: 1247"
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
          "id": "4843153269187517c009b0c426df18ed8dbc5f04",
          "message": "Merge pull request #729 from TeoZosa/ci/fix-benchmarks-output-capture\n\n💚 Fix benchmarks output capture",
          "timestamp": "2022-12-16T13:08:52+09:00",
          "tree_id": "fd541630e7b95c41ac449f78e2ea1fa5e4636b80",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4843153269187517c009b0c426df18ed8dbc5f04"
        },
        "date": 1671164072166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.04745579272642,
            "unit": "iter/sec",
            "range": "stddev: 0.000014158983964332094",
            "extra": "mean: 4.760828909952587 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.331468077427,
            "unit": "iter/sec",
            "range": "stddev: 0.00001013087601986249",
            "extra": "mean: 3.645225270758078 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.7820556712225,
            "unit": "iter/sec",
            "range": "stddev: 0.000010869420375361474",
            "extra": "mean: 2.416731190476193 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.7143164862789,
            "unit": "iter/sec",
            "range": "stddev: 0.000009688582619492023",
            "extra": "mean: 1.1768661308840591 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.6864142244088,
            "unit": "iter/sec",
            "range": "stddev: 0.000017331164640014316",
            "extra": "mean: 5.189779487179453 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.7908606686191,
            "unit": "iter/sec",
            "range": "stddev: 0.000009660416809160426",
            "extra": "mean: 3.9558392156862405 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.92637022596017,
            "unit": "iter/sec",
            "range": "stddev: 0.000011523297095150782",
            "extra": "mean: 2.5130277227723203 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 778.3795102959748,
            "unit": "iter/sec",
            "range": "stddev: 0.000010170204825945505",
            "extra": "mean: 1.2847203539822818 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.767755222182483,
            "unit": "iter/sec",
            "range": "stddev: 0.00005060953209106129",
            "extra": "mean: 38.80819230769229 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.199689923535246,
            "unit": "iter/sec",
            "range": "stddev: 0.00020905005182177488",
            "extra": "mean: 36.76512499999949 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.44668100727307,
            "unit": "iter/sec",
            "range": "stddev: 0.00002063732016167257",
            "extra": "mean: 3.2846474025976016 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.61785058143465,
            "unit": "iter/sec",
            "range": "stddev: 0.000010505505618120127",
            "extra": "mean: 1.9895831372546504 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1126.1483977491705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001940664751499257",
            "extra": "mean: 887.9824381926014 usec\nrounds: 1173"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 989.1728851469918,
            "unit": "iter/sec",
            "range": "stddev: 0.000015582493932275615",
            "extra": "mean: 1.0109456243853665 msec\nrounds: 1017"
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
          "id": "f744c5e05fd7585611008a82be81c94012afb433",
          "message": "Merge pull request #730 from TeoZosa/dependabot/pip/sentry-sdk-1.12.0",
          "timestamp": "2022-12-16T05:17:17Z",
          "tree_id": "d2bd8f8aaea1217a0bb5c77f90187dd926f13069",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f744c5e05fd7585611008a82be81c94012afb433"
        },
        "date": 1671168253593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.27663013141597,
            "unit": "iter/sec",
            "range": "stddev: 0.00026957250250308687",
            "extra": "mean: 4.824470560747671 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.95898967347506,
            "unit": "iter/sec",
            "range": "stddev: 0.000016260983093738557",
            "extra": "mean: 3.597653024911061 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.7415104499965,
            "unit": "iter/sec",
            "range": "stddev: 0.00001062158191014265",
            "extra": "mean: 2.4053407582937893 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.1729598447008,
            "unit": "iter/sec",
            "range": "stddev: 0.000009454324904556304",
            "extra": "mean: 1.1776163953488143 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.24160308491807,
            "unit": "iter/sec",
            "range": "stddev: 0.000013967202093908013",
            "extra": "mean: 5.148227692307618 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.9160875502613,
            "unit": "iter/sec",
            "range": "stddev: 0.000008990761190427942",
            "extra": "mean: 3.9383089494164305 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.0498020176398,
            "unit": "iter/sec",
            "range": "stddev: 0.000011383056158867296",
            "extra": "mean: 2.4872540540540427 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.4090851175083,
            "unit": "iter/sec",
            "range": "stddev: 0.000008499072666205817",
            "extra": "mean: 1.2929767948718425 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.76964003380994,
            "unit": "iter/sec",
            "range": "stddev: 0.00003186167893587584",
            "extra": "mean: 38.80535384615359 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.334052283989738,
            "unit": "iter/sec",
            "range": "stddev: 0.00010102691054098128",
            "extra": "mean: 36.584403571428226 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.180821726147,
            "unit": "iter/sec",
            "range": "stddev: 0.00002000219578216094",
            "extra": "mean: 3.2875182410424837 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 499.30137434687094,
            "unit": "iter/sec",
            "range": "stddev: 0.000009842844504194904",
            "extra": "mean: 2.0027984126983145 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1129.6016448233647,
            "unit": "iter/sec",
            "range": "stddev: 0.000017437075778148248",
            "extra": "mean: 885.2678327645049 usec\nrounds: 1172"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 989.789433225628,
            "unit": "iter/sec",
            "range": "stddev: 0.000013686641934254845",
            "extra": "mean: 1.010315897939117 msec\nrounds: 1019"
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
          "id": "533926cc3c6885e1451164ee8d4f11ff6e6ad936",
          "message": "Merge pull request #731 from TeoZosa/fix/flaky-documentation-build-test-ci-job\n\n💚  Fix flaky documentation building CI job",
          "timestamp": "2022-12-18T13:16:59+09:00",
          "tree_id": "9edc29e2aac79ddcfb6c05c59a921113f839ed13",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/533926cc3c6885e1451164ee8d4f11ff6e6ad936"
        },
        "date": 1671338097354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.72002918019152,
            "unit": "iter/sec",
            "range": "stddev: 0.000016526025373018933",
            "extra": "mean: 4.814172248803831 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.80024409691174,
            "unit": "iter/sec",
            "range": "stddev: 0.000011423757524079012",
            "extra": "mean: 3.665685869565249 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.2949983748937,
            "unit": "iter/sec",
            "range": "stddev: 0.000011739567142732734",
            "extra": "mean: 2.407926904762006 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.5933601866626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008903342079120634",
            "extra": "mean: 1.1784207217695326 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.00293613911498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000169237285833475",
            "extra": "mean: 5.263076562500209 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.82867480207233,
            "unit": "iter/sec",
            "range": "stddev: 0.000011405122838669073",
            "extra": "mean: 4.002743083003797 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.40007196804726,
            "unit": "iter/sec",
            "range": "stddev: 0.000011182306194223582",
            "extra": "mean: 2.5163558603492264 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 772.5632060663002,
            "unit": "iter/sec",
            "range": "stddev: 0.00000927089993996065",
            "extra": "mean: 1.2943924744898887 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.332392657152838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000768295685264076",
            "extra": "mean: 39.47514999999973 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.757396041570683,
            "unit": "iter/sec",
            "range": "stddev: 0.00008014655486283203",
            "extra": "mean: 37.37284444444389 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.0698619253227,
            "unit": "iter/sec",
            "range": "stddev: 0.000017132666613904228",
            "extra": "mean: 3.3104924590167113 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.27450028459504,
            "unit": "iter/sec",
            "range": "stddev: 0.000010275570529298532",
            "extra": "mean: 1.9949149606298686 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1146.6103872871495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001815791174713409",
            "extra": "mean: 872.1358284272778 usec\nrounds: 1189"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 999.0473612526403,
            "unit": "iter/sec",
            "range": "stddev: 0.000013999861017592528",
            "extra": "mean: 1.0009535471333062 msec\nrounds: 1029"
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
          "id": "d0d76d790b384fea42cba8f5141ddd0bb0ac7f5d",
          "message": "Merge pull request #732 from TeoZosa/ci/add-cp311-musllinux_aarch64-wheel-builds\n\n👷 📦 Build Python 3.11 `musllinux-aarch64` wheels",
          "timestamp": "2022-12-18T16:55:31+09:00",
          "tree_id": "acfeb7a91edcc721e75ca15348383fb888c00b60",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d0d76d790b384fea42cba8f5141ddd0bb0ac7f5d"
        },
        "date": 1671350444363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.56023445829695,
            "unit": "iter/sec",
            "range": "stddev: 0.0006163340076313322",
            "extra": "mean: 7.71841764705884 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.54050661932573,
            "unit": "iter/sec",
            "range": "stddev: 0.0004425922346209437",
            "extra": "mean: 5.795740487804926 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.42971834217593,
            "unit": "iter/sec",
            "range": "stddev: 0.0006175845465562312",
            "extra": "mean: 4.1249068259385435 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.1354142566722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718895442654548",
            "extra": "mean: 1.7663618541033788 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.17840159366712,
            "unit": "iter/sec",
            "range": "stddev: 0.0008514344233513503",
            "extra": "mean: 8.461783088235537 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.92488134586947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004481536606405624",
            "extra": "mean: 6.026823655913942 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.5393634157967,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989168745131481",
            "extra": "mean: 4.140111929824685 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.4836090170841,
            "unit": "iter/sec",
            "range": "stddev: 0.000463204799265232",
            "extra": "mean: 1.947481832797372 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.331035701661566,
            "unit": "iter/sec",
            "range": "stddev: 0.0018169348285739257",
            "extra": "mean: 51.73028571428517 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.74572194923769,
            "unit": "iter/sec",
            "range": "stddev: 0.0013363015826960078",
            "extra": "mean: 48.20270909090949 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.3387052084998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005992532823111625",
            "extra": "mean: 5.3955270642202535 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.18111413651195,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946911169140392",
            "extra": "mean: 2.922428967254614 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 644.3463993274728,
            "unit": "iter/sec",
            "range": "stddev: 0.0003875394539172066",
            "extra": "mean: 1.551960251572346 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 618.8432784747193,
            "unit": "iter/sec",
            "range": "stddev: 0.0002713852154915398",
            "extra": "mean: 1.6159180115274558 msec\nrounds: 694"
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
          "id": "9d72d14953ea2a29ef0b30386a253ba0a188d3e5",
          "message": "Merge pull request #733 from TeoZosa/ci/build-against-optimized-orjson-builds\n\n👷 :package: Only build against optimized `orjson` wheels",
          "timestamp": "2022-12-18T18:59:38+09:00",
          "tree_id": "9f499c76659a3218cc6865c50285593f74700fa0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9d72d14953ea2a29ef0b30386a253ba0a188d3e5"
        },
        "date": 1671357927096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.49880221177477,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283564645486183",
            "extra": "mean: 4.705908878504676 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.41537979535275,
            "unit": "iter/sec",
            "range": "stddev: 0.000010731632439068591",
            "extra": "mean: 3.5789010638298158 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.36008163631635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001308243363065229",
            "extra": "mean: 2.3902854117647574 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.415942163345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010505886887750233",
            "extra": "mean: 1.1717615650172595 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.02811170356694,
            "unit": "iter/sec",
            "range": "stddev: 0.00001622514644078423",
            "extra": "mean: 5.1538923469387985 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.29197946000167,
            "unit": "iter/sec",
            "range": "stddev: 0.000010211897609610127",
            "extra": "mean: 3.9480128906249634 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.182507530454,
            "unit": "iter/sec",
            "range": "stddev: 0.000010363378817224697",
            "extra": "mean: 2.517734243176167 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 781.8500907907678,
            "unit": "iter/sec",
            "range": "stddev: 0.000008205676892494858",
            "extra": "mean: 1.2790175658719871 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.386901257256966,
            "unit": "iter/sec",
            "range": "stddev: 0.00109755259588689",
            "extra": "mean: 39.39039230769235 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.096346479176,
            "unit": "iter/sec",
            "range": "stddev: 0.00005349084992431972",
            "extra": "mean: 36.90534444444445 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.6099275209473,
            "unit": "iter/sec",
            "range": "stddev: 0.000019367624193642485",
            "extra": "mean: 3.3376731147537986 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.72094164580295,
            "unit": "iter/sec",
            "range": "stddev: 0.000011676881618770178",
            "extra": "mean: 2.025435657370603 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1138.9995471994634,
            "unit": "iter/sec",
            "range": "stddev: 0.000015021488022998426",
            "extra": "mean: 877.9634745762356 usec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 993.0342823223584,
            "unit": "iter/sec",
            "range": "stddev: 0.000012322516786407289",
            "extra": "mean: 1.007014579256369 msec\nrounds: 1022"
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
          "id": "992b57a5e182e832fa82ad21a3a99115c40cef80",
          "message": "Merge pull request #734 from TeoZosa/lint/configure-black-for-line-length-120\n\n🔧 Configure Black with a max line length of 120",
          "timestamp": "2022-12-18T20:04:35+09:00",
          "tree_id": "cdd82cda1745c1bfe3d142fdf075904bac8adae2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/992b57a5e182e832fa82ad21a3a99115c40cef80"
        },
        "date": 1671362348147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.80347248314732,
            "unit": "iter/sec",
            "range": "stddev: 0.0007105735385665352",
            "extra": "mean: 7.587053521126783 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.72079971048177,
            "unit": "iter/sec",
            "range": "stddev: 0.000843978991980685",
            "extra": "mean: 5.892029743589767 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.0341498961302,
            "unit": "iter/sec",
            "range": "stddev: 0.0004014078223948029",
            "extra": "mean: 4.048023321554802 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 506.7995745826314,
            "unit": "iter/sec",
            "range": "stddev: 0.00047793616407291496",
            "extra": "mean: 1.9731666129032126 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.70492466059392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007614194378687994",
            "extra": "mean: 8.353875187970388 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.55954248901617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006392603917395956",
            "extra": "mean: 6.428406666666614 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.27197754430304,
            "unit": "iter/sec",
            "range": "stddev: 0.0004783592755093773",
            "extra": "mean: 4.161950179211444 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.59522691741904,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362045139803925",
            "extra": "mean: 2.04668393162387 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.392690739718446,
            "unit": "iter/sec",
            "range": "stddev: 0.0031247879866775356",
            "extra": "mean: 51.565820000000606 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.03849394687183,
            "unit": "iter/sec",
            "range": "stddev: 0.0027877617498705833",
            "extra": "mean: 49.90395000000027 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.71818822691145,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642541041112051",
            "extra": "mean: 5.5030264705880745 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.11402540447045,
            "unit": "iter/sec",
            "range": "stddev: 0.0002878406606605378",
            "extra": "mean: 3.153439835165054 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 643.8460720281965,
            "unit": "iter/sec",
            "range": "stddev: 0.00029553973818175784",
            "extra": "mean: 1.5531662666666175 msec\nrounds: 750"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 577.143032819968,
            "unit": "iter/sec",
            "range": "stddev: 0.00032493085350926876",
            "extra": "mean: 1.7326727399166866 msec\nrounds: 719"
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
          "id": "dbd12ca830adad258a9ee2ffa52316911e07d9ee",
          "message": "Merge pull request #736 from TeoZosa/feat/update-setup-logger-log-messages\n\n🔊 Update setup meta logger log messages",
          "timestamp": "2022-12-18T23:28:21+09:00",
          "tree_id": "da1419cc3d6b7fec50653846f0fa5303f807318d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dbd12ca830adad258a9ee2ffa52316911e07d9ee"
        },
        "date": 1671374119809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.75519865456062,
            "unit": "iter/sec",
            "range": "stddev: 0.00028864724118754775",
            "extra": "mean: 4.9078502369667865 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.2188856387326,
            "unit": "iter/sec",
            "range": "stddev: 0.000017583519678182978",
            "extra": "mean: 3.6334715827338053 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.0030089884422,
            "unit": "iter/sec",
            "range": "stddev: 0.000011889705223595096",
            "extra": "mean: 2.4390064903845365 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.9159343144371,
            "unit": "iter/sec",
            "range": "stddev: 0.00001770356637035039",
            "extra": "mean: 1.1738247398843769 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.04360364946172,
            "unit": "iter/sec",
            "range": "stddev: 0.000017349009695463026",
            "extra": "mean: 5.20715077720217 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.5126248856297,
            "unit": "iter/sec",
            "range": "stddev: 0.00003261140159355802",
            "extra": "mean: 3.960198031496164 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.5842904182381,
            "unit": "iter/sec",
            "range": "stddev: 0.00001197290052776006",
            "extra": "mean: 2.547223677581836 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.4980860528703,
            "unit": "iter/sec",
            "range": "stddev: 0.000011016924390265243",
            "extra": "mean: 1.2812331226296703 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.32123640480918,
            "unit": "iter/sec",
            "range": "stddev: 0.00011044763889948374",
            "extra": "mean: 39.4925423076921 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.67078648000509,
            "unit": "iter/sec",
            "range": "stddev: 0.0001943217908642445",
            "extra": "mean: 37.49420740740784 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.9730523208432,
            "unit": "iter/sec",
            "range": "stddev: 0.000014428845169006349",
            "extra": "mean: 3.3115537704917806 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.7485559287134,
            "unit": "iter/sec",
            "range": "stddev: 0.000012521521461398573",
            "extra": "mean: 1.9890658823529146 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1120.0345456440048,
            "unit": "iter/sec",
            "range": "stddev: 0.000021704834233901147",
            "extra": "mean: 892.8296041306596 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 988.630939576483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001703582830536148",
            "extra": "mean: 1.0114998023715374 msec\nrounds: 1012"
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
          "id": "c1eccaca8fd7558c9d157d1c06ec4863a8f754f3",
          "message": "Merge pull request #737 from TeoZosa/ci/group=build-prs-under-ci-build-system-label\n\n👷 Group `build` PRs in release notes under \"Continuous Integration Build System\" label",
          "timestamp": "2022-12-18T23:36:26+09:00",
          "tree_id": "415cfce686ef511089c02b5b36c8a3e21f224870",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c1eccaca8fd7558c9d157d1c06ec4863a8f754f3"
        },
        "date": 1671377921921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.20060655581423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005346130742413534",
            "extra": "mean: 7.987181751824833 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.94045799306772,
            "unit": "iter/sec",
            "range": "stddev: 0.0004642588811100854",
            "extra": "mean: 5.990159677419392 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.5458821380433,
            "unit": "iter/sec",
            "range": "stddev: 0.0007605766749463521",
            "extra": "mean: 4.2275096525097 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 520.2652883950351,
            "unit": "iter/sec",
            "range": "stddev: 0.00021361293047647857",
            "extra": "mean: 1.922096327212021 msec\nrounds: 599"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.8303913186164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004812909880284691",
            "extra": "mean: 8.633312799999828 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.20929931659515,
            "unit": "iter/sec",
            "range": "stddev: 0.0009980655696338147",
            "extra": "mean: 6.839510240963841 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.4454640485246,
            "unit": "iter/sec",
            "range": "stddev: 0.00029998068869184675",
            "extra": "mean: 4.283655731225249 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.5758546926864,
            "unit": "iter/sec",
            "range": "stddev: 0.00021622266034960238",
            "extra": "mean: 2.0342740402194086 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.02875339782169,
            "unit": "iter/sec",
            "range": "stddev: 0.0016168073737104014",
            "extra": "mean: 52.55205000000025 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.001301037010276,
            "unit": "iter/sec",
            "range": "stddev: 0.0016212168508927015",
            "extra": "mean: 49.99674761904771 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.16538636133,
            "unit": "iter/sec",
            "range": "stddev: 0.0003729073023529085",
            "extra": "mean: 5.581435233160829 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.5805163393438,
            "unit": "iter/sec",
            "range": "stddev: 0.0002746060460151903",
            "extra": "mean: 3.2617858823524624 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 644.3527485419091,
            "unit": "iter/sec",
            "range": "stddev: 0.0002200567082323748",
            "extra": "mean: 1.5519449591281744 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 564.4621714859638,
            "unit": "iter/sec",
            "range": "stddev: 0.00038790384532627777",
            "extra": "mean: 1.7715979041916476 msec\nrounds: 668"
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
          "id": "a0f0492694150df2360ab6ff2019e559f8755b26",
          "message": "Merge pull request #735 from TeoZosa/dependabot/pip/tox-3.28.0",
          "timestamp": "2022-12-18T14:39:01Z",
          "tree_id": "de2619588bc4c5afd2c2a3be50104759bd56d02d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0f0492694150df2360ab6ff2019e559f8755b26"
        },
        "date": 1671379183647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.0401754110455,
            "unit": "iter/sec",
            "range": "stddev: 0.000015390887988539098",
            "extra": "mean: 4.738434272300465 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.8240517359407,
            "unit": "iter/sec",
            "range": "stddev: 0.000021085490305610032",
            "extra": "mean: 3.651980144404331 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.433838265106,
            "unit": "iter/sec",
            "range": "stddev: 0.000012010884765512248",
            "extra": "mean: 2.4129303827751576 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.561746981318,
            "unit": "iter/sec",
            "range": "stddev: 0.00000823186182578012",
            "extra": "mean: 1.171561405529912 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.23159265468178,
            "unit": "iter/sec",
            "range": "stddev: 0.000016407418354349316",
            "extra": "mean: 5.202058549222788 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.9864860145917,
            "unit": "iter/sec",
            "range": "stddev: 0.000010339489417117614",
            "extra": "mean: 3.9842782608696417 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.520847015494,
            "unit": "iter/sec",
            "range": "stddev: 0.000012255601279492634",
            "extra": "mean: 2.534720300751882 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 772.6267792835929,
            "unit": "iter/sec",
            "range": "stddev: 0.000009533541357098897",
            "extra": "mean: 1.2942859693877495 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.59513361693414,
            "unit": "iter/sec",
            "range": "stddev: 0.00011984044912393833",
            "extra": "mean: 39.06992692307668 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.967633446338294,
            "unit": "iter/sec",
            "range": "stddev: 0.00022302499744880226",
            "extra": "mean: 37.08148888888808 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.3073063688794,
            "unit": "iter/sec",
            "range": "stddev: 0.000019830829180794998",
            "extra": "mean: 3.286151791530784 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.451746315741,
            "unit": "iter/sec",
            "range": "stddev: 0.00001031526689462418",
            "extra": "mean: 2.014294455445434 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1117.6638470588578,
            "unit": "iter/sec",
            "range": "stddev: 0.000017222544967082832",
            "extra": "mean: 894.7234024179173 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 969.9661277361827,
            "unit": "iter/sec",
            "range": "stddev: 0.00001973420763217464",
            "extra": "mean: 1.0309638361639635 msec\nrounds: 1001"
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
          "id": "b2d4efb89b4be51ec654ca235109221d09e7ab7a",
          "message": ":art: Lexicographically order labels for CI build system headers\n\nFollow-up to #737.",
          "timestamp": "2022-12-19T12:07:33+09:00",
          "tree_id": "7fe64403ed14900566e9b246603aaaf916eec699",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b2d4efb89b4be51ec654ca235109221d09e7ab7a"
        },
        "date": 1671419448635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.35598384386716,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220697240377926",
            "extra": "mean: 4.7538462264150825 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.04924420326233,
            "unit": "iter/sec",
            "range": "stddev: 0.000011078291442405858",
            "extra": "mean: 3.6357125899280662 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.56195694761567,
            "unit": "iter/sec",
            "range": "stddev: 0.000017696701088043985",
            "extra": "mean: 2.4180173809523446 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.7747737665346,
            "unit": "iter/sec",
            "range": "stddev: 0.000008106601932888778",
            "extra": "mean: 1.2022485311398532 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.0912088666087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000152088473673808",
            "extra": "mean: 5.205860309278477 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.292522791651,
            "unit": "iter/sec",
            "range": "stddev: 0.000010800950544006768",
            "extra": "mean: 3.963652941176632 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.38410707311886,
            "unit": "iter/sec",
            "range": "stddev: 0.000012045356774469925",
            "extra": "mean: 2.5228054862843816 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 765.8373551205789,
            "unit": "iter/sec",
            "range": "stddev: 0.000010389541683397549",
            "extra": "mean: 1.3057602809705633 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.59556700530545,
            "unit": "iter/sec",
            "range": "stddev: 0.00005497505574203356",
            "extra": "mean: 39.06926538461601 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.003580674797302,
            "unit": "iter/sec",
            "range": "stddev: 0.00009640579137137495",
            "extra": "mean: 37.03212592592617 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.5395981958706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001191732216337557",
            "extra": "mean: 3.305352442996829 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.2452532948983,
            "unit": "iter/sec",
            "range": "stddev: 0.00001326517689735127",
            "extra": "mean: 2.0192015841584268 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1113.9284352319296,
            "unit": "iter/sec",
            "range": "stddev: 0.000018393547178893976",
            "extra": "mean: 897.7237391303252 usec\nrounds: 1150"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 979.4519662280135,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561803745318952",
            "extra": "mean: 1.0209791133005934 msec\nrounds: 1015"
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
          "id": "6332b0d81f1f0aa7bbc62e79ea13a73dc7bbdbaa",
          "message": ":bookmark: Bump version number to `0.19.0`",
          "timestamp": "2022-12-19T13:19:11+09:00",
          "tree_id": "5c1a8a1f5af220fb2ec4439aa5aff08913e0588e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6332b0d81f1f0aa7bbc62e79ea13a73dc7bbdbaa"
        },
        "date": 1671423926258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.28745142985042,
            "unit": "iter/sec",
            "range": "stddev: 0.0011024790195573334",
            "extra": "mean: 7.734702702702637 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.8700960105471,
            "unit": "iter/sec",
            "range": "stddev: 0.001189034127039538",
            "extra": "mean: 6.1777933333334305 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.7457597083997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005419926233425418",
            "extra": "mean: 4.119536428571432 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 521.8869728818738,
            "unit": "iter/sec",
            "range": "stddev: 0.0004106556258445628",
            "extra": "mean: 1.9161237048665412 msec\nrounds: 637"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.5411038583517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007577812795098999",
            "extra": "mean: 8.435892424242393 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.96157484424998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161696114248798",
            "extra": "mean: 6.495127118643832 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.52384189225438,
            "unit": "iter/sec",
            "range": "stddev: 0.0003948462919972395",
            "extra": "mean: 4.210103676470593 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.48519525161635,
            "unit": "iter/sec",
            "range": "stddev: 0.0003413840202498073",
            "extra": "mean: 2.0387975206611593 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.00198713280414,
            "unit": "iter/sec",
            "range": "stddev: 0.0026908021679845377",
            "extra": "mean: 52.62607500000076 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.46330763342606,
            "unit": "iter/sec",
            "range": "stddev: 0.0029941903177888663",
            "extra": "mean: 51.378728571427985 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.8445264711783,
            "unit": "iter/sec",
            "range": "stddev: 0.0009443576835669456",
            "extra": "mean: 5.819213567839297 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.25099096822834,
            "unit": "iter/sec",
            "range": "stddev: 0.000462188440863984",
            "extra": "mean: 3.2128411764705915 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 641.9801491856892,
            "unit": "iter/sec",
            "range": "stddev: 0.0002960982132900264",
            "extra": "mean: 1.5576805626598207 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 587.197752945956,
            "unit": "iter/sec",
            "range": "stddev: 0.00045347390610248886",
            "extra": "mean: 1.703003792134806 msec\nrounds: 712"
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
          "id": "7f61ab9b41c22755077fe22fb9b2f60b96e2dc14",
          "message": "Merge pull request #738 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0",
          "timestamp": "2022-12-19T05:32:04Z",
          "tree_id": "f641aa1f704def6037e3e93b9b19fbaf784fcb6e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7f61ab9b41c22755077fe22fb9b2f60b96e2dc14"
        },
        "date": 1671428213741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.98167587259056,
            "unit": "iter/sec",
            "range": "stddev: 0.00001443110803995371",
            "extra": "mean: 4.785108530805677 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.69090958138327,
            "unit": "iter/sec",
            "range": "stddev: 0.000009814956546575302",
            "extra": "mean: 3.6272505376344393 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.80993784982365,
            "unit": "iter/sec",
            "range": "stddev: 0.000010485315119216803",
            "extra": "mean: 2.422422302158313 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.0986916450383,
            "unit": "iter/sec",
            "range": "stddev: 0.000008135628990600482",
            "extra": "mean: 1.1626572737686465 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.28598445392973,
            "unit": "iter/sec",
            "range": "stddev: 0.000013327446151509591",
            "extra": "mean: 5.200587046632056 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.5870532826509,
            "unit": "iter/sec",
            "range": "stddev: 0.000015817819577039083",
            "extra": "mean: 3.9590311023620686 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.75063411740314,
            "unit": "iter/sec",
            "range": "stddev: 0.000011197426750759211",
            "extra": "mean: 2.5078330024813766 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.9855965916046,
            "unit": "iter/sec",
            "range": "stddev: 0.000007971466268474242",
            "extra": "mean: 1.2706712858925884 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.710146380718353,
            "unit": "iter/sec",
            "range": "stddev: 0.00003383820621718664",
            "extra": "mean: 38.8951500000001 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.149051004921816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076724031942461",
            "extra": "mean: 36.83370000000042 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.767532713756,
            "unit": "iter/sec",
            "range": "stddev: 0.000012334526322283485",
            "extra": "mean: 3.3028640522873536 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.2107755142972,
            "unit": "iter/sec",
            "range": "stddev: 0.000010739578300623126",
            "extra": "mean: 1.9793718750001217 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1120.998027353605,
            "unit": "iter/sec",
            "range": "stddev: 0.00001872521936732892",
            "extra": "mean: 892.0622299048546 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 986.6864340617207,
            "unit": "iter/sec",
            "range": "stddev: 0.00001763704853214717",
            "extra": "mean: 1.0134932086615134 msec\nrounds: 1016"
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
          "id": "23faab732914021aa130e807b9cd28fc767affe0",
          "message": "Merge pull request #739 from TeoZosa/dependabot/pip/importlib-metadata-5.2.0",
          "timestamp": "2022-12-19T08:08:55Z",
          "tree_id": "540e21b48240ab8665b926474ca392a95b2288a6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/23faab732914021aa130e807b9cd28fc767affe0"
        },
        "date": 1671437536680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.06966970870045,
            "unit": "iter/sec",
            "range": "stddev: 0.0009685577860807004",
            "extra": "mean: 7.514860465116322 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.49469237854365,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161008036067372",
            "extra": "mean: 5.934905045871591 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.34725675941192,
            "unit": "iter/sec",
            "range": "stddev: 0.0004531620366476413",
            "extra": "mean: 4.075855639097699 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.7084305350065,
            "unit": "iter/sec",
            "range": "stddev: 0.00041878200765651613",
            "extra": "mean: 1.9315891745602582 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.09096584420786,
            "unit": "iter/sec",
            "range": "stddev: 0.0011533281915751005",
            "extra": "mean: 8.688779285714254 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.51603422797402,
            "unit": "iter/sec",
            "range": "stddev: 0.000646653053303233",
            "extra": "mean: 6.229907216494913 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.0538267197134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005587010211203617",
            "extra": "mean: 4.131312500000058 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.0071706925448,
            "unit": "iter/sec",
            "range": "stddev: 0.0003527724013629452",
            "extra": "mean: 1.9959794160584465 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.02794053273837,
            "unit": "iter/sec",
            "range": "stddev: 0.0020051576214390266",
            "extra": "mean: 52.55429500000055 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.207236633153855,
            "unit": "iter/sec",
            "range": "stddev: 0.0024089461843413876",
            "extra": "mean: 49.487221739132195 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.76793817814203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007398527795199254",
            "extra": "mean: 5.471419166666476 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.0090948671984,
            "unit": "iter/sec",
            "range": "stddev: 0.000542824989275968",
            "extra": "mean: 3.1055023474179064 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 648.5984566287742,
            "unit": "iter/sec",
            "range": "stddev: 0.00029985155929624556",
            "extra": "mean: 1.541785969084337 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 601.4598190274311,
            "unit": "iter/sec",
            "range": "stddev: 0.0003494532566270203",
            "extra": "mean: 1.6626214559386756 msec\nrounds: 783"
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
          "id": "f1ea631b4f10daf69d36ac505ed9795b91021e69",
          "message": "Merge pull request #741 from TeoZosa/dependabot/pip/sentry-sdk-1.12.1",
          "timestamp": "2022-12-19T15:52:53Z",
          "tree_id": "27fb6b20e1b0edbd2ed292d43718b8de1503a1f9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f1ea631b4f10daf69d36ac505ed9795b91021e69"
        },
        "date": 1671465567989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.28368909701152,
            "unit": "iter/sec",
            "range": "stddev: 0.00001664906405127973",
            "extra": "mean: 4.801144075829355 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.43149060152626,
            "unit": "iter/sec",
            "range": "stddev: 0.000014468078534018594",
            "extra": "mean: 3.617532857142864 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.7725245807749,
            "unit": "iter/sec",
            "range": "stddev: 0.000012399900069835218",
            "extra": "mean: 2.3822426229508373 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 876.4624243325039,
            "unit": "iter/sec",
            "range": "stddev: 0.00000721461809350035",
            "extra": "mean: 1.1409502247190801 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.54786040311626,
            "unit": "iter/sec",
            "range": "stddev: 0.00001515581530964489",
            "extra": "mean: 5.140123350253931 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.68152965477884,
            "unit": "iter/sec",
            "range": "stddev: 0.000011786927806711805",
            "extra": "mean: 3.895878294573589 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.84491358892086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230156092173084",
            "extra": "mean: 2.4639953995158286 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.7806928285289,
            "unit": "iter/sec",
            "range": "stddev: 0.00000715064874784989",
            "extra": "mean: 1.242574541003639 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.82985383959554,
            "unit": "iter/sec",
            "range": "stddev: 0.000059414340545215634",
            "extra": "mean: 35.93263571428564 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.967897775684857,
            "unit": "iter/sec",
            "range": "stddev: 0.000054811351122064774",
            "extra": "mean: 34.52097241379325 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.00971001751094,
            "unit": "iter/sec",
            "range": "stddev: 0.00001885688159190453",
            "extra": "mean: 3.2257054140127255 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.2322630272228,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072342763956039",
            "extra": "mean: 1.8207233393178048 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.894836101921,
            "unit": "iter/sec",
            "range": "stddev: 0.000018868205562413106",
            "extra": "mean: 855.5089552237577 usec\nrounds: 1206"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1031.9979094094838,
            "unit": "iter/sec",
            "range": "stddev: 0.000018395908832649138",
            "extra": "mean: 968.9942110175465 usec\nrounds: 1071"
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
          "id": "8ab5e99e1f5dd1028e0e7d0d05d10b01b19d4301",
          "message": "Merge pull request #742 from TeoZosa/fix/debug-library-logging\n\n🐛 Fix library meta logger not honoring user-requested log level filtering & rich formatting logging",
          "timestamp": "2022-12-20T21:45:29+09:00",
          "tree_id": "e544b58e1a67cb3ce9ac53b8f7e61f48ebda8bb8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8ab5e99e1f5dd1028e0e7d0d05d10b01b19d4301"
        },
        "date": 1671540492997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.9536322815331,
            "unit": "iter/sec",
            "range": "stddev: 0.00002239938504613905",
            "extra": "mean: 4.808764285714297 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.8226298545338,
            "unit": "iter/sec",
            "range": "stddev: 0.000011548230081867506",
            "extra": "mean: 3.6124214285713756 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.3040078817213,
            "unit": "iter/sec",
            "range": "stddev: 0.000011402368569617092",
            "extra": "mean: 2.362368372093037 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 881.2424095341067,
            "unit": "iter/sec",
            "range": "stddev: 0.00000632788451277953",
            "extra": "mean: 1.134761547085186 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.56030459360966,
            "unit": "iter/sec",
            "range": "stddev: 0.000012871969776426522",
            "extra": "mean: 5.113512182741186 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.85508782267837,
            "unit": "iter/sec",
            "range": "stddev: 0.000010147485918704272",
            "extra": "mean: 3.9237984555983214 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.9796933722216,
            "unit": "iter/sec",
            "range": "stddev: 0.000010788194715208818",
            "extra": "mean: 2.4692596107056857 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 805.020886695527,
            "unit": "iter/sec",
            "range": "stddev: 0.00000654529263546634",
            "extra": "mean: 1.2422037943696456 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.959550917687313,
            "unit": "iter/sec",
            "range": "stddev: 0.00001841869988048406",
            "extra": "mean: 35.76595357142866 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.102107654917837,
            "unit": "iter/sec",
            "range": "stddev: 0.00003055922699813647",
            "extra": "mean: 34.361772413793354 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.1400740259939,
            "unit": "iter/sec",
            "range": "stddev: 0.000010842110552633397",
            "extra": "mean: 3.2243495238096407 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.2657072362223,
            "unit": "iter/sec",
            "range": "stddev: 0.000010914534909545527",
            "extra": "mean: 1.8206124773959913 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1185.600687186384,
            "unit": "iter/sec",
            "range": "stddev: 0.000017506039742188044",
            "extra": "mean: 843.4543019481176 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1036.3283546229777,
            "unit": "iter/sec",
            "range": "stddev: 0.00001729455832306224",
            "extra": "mean: 964.9451310861855 usec\nrounds: 1068"
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
          "id": "c73c0191484889f362620fe16608d6dea791a876",
          "message": ":bookmark: Bump version number to `0.19.1`",
          "timestamp": "2022-12-20T21:48:24+09:00",
          "tree_id": "ddd815851c129e8efea4776025f0ff6b9ba6a5ec",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c73c0191484889f362620fe16608d6dea791a876"
        },
        "date": 1671541418620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.63232417665415,
            "unit": "iter/sec",
            "range": "stddev: 0.000013471470880925383",
            "extra": "mean: 4.839513875598088 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.7406653359006,
            "unit": "iter/sec",
            "range": "stddev: 0.00013707577911472167",
            "extra": "mean: 3.6935714801443926 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.79780314560827,
            "unit": "iter/sec",
            "range": "stddev: 0.000012053110088612291",
            "extra": "mean: 2.387787119437965 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 868.505264210374,
            "unit": "iter/sec",
            "range": "stddev: 0.000007214758818334697",
            "extra": "mean: 1.1514034988713375 msec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.59512266719608,
            "unit": "iter/sec",
            "range": "stddev: 0.000014266400607451112",
            "extra": "mean: 5.165419387755299 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.8510686463979,
            "unit": "iter/sec",
            "range": "stddev: 0.000012752907870932223",
            "extra": "mean: 3.954897265625007 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.4846568783093,
            "unit": "iter/sec",
            "range": "stddev: 0.000013193628927817497",
            "extra": "mean: 2.4722816625918487 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 799.9803506676188,
            "unit": "iter/sec",
            "range": "stddev: 0.00000702331087722955",
            "extra": "mean: 1.2500307028359583 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.933782967475956,
            "unit": "iter/sec",
            "range": "stddev: 0.00004009531682360291",
            "extra": "mean: 35.79894642857097 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.077027954754506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000403099539705598",
            "extra": "mean: 34.3914103448281 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.54349513232063,
            "unit": "iter/sec",
            "range": "stddev: 0.000012450615345361064",
            "extra": "mean: 3.262179807692042 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.8375200617483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001017626693127243",
            "extra": "mean: 1.8320470162748692 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1170.7945445406176,
            "unit": "iter/sec",
            "range": "stddev: 0.00001914636899723215",
            "extra": "mean: 854.1208230453176 usec\nrounds: 1215"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1028.7830749660488,
            "unit": "iter/sec",
            "range": "stddev: 0.000017974213956090334",
            "extra": "mean: 972.0222118088417 usec\nrounds: 1067"
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
          "id": "a5f480666d7d5e9cef46a72f662dc999773c5c10",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-12-20T22:07:13+09:00",
          "tree_id": "9dd564ecc8a9a0c727538d08ede01e5c29c878c8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a5f480666d7d5e9cef46a72f662dc999773c5c10"
        },
        "date": 1671543676382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.8021279212873,
            "unit": "iter/sec",
            "range": "stddev: 0.000014448881355357878",
            "extra": "mean: 4.789223222748825 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.0043403654004,
            "unit": "iter/sec",
            "range": "stddev: 0.00001826295420129666",
            "extra": "mean: 3.623131428571399 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.0399751915656,
            "unit": "iter/sec",
            "range": "stddev: 0.000012125253112315678",
            "extra": "mean: 2.3694437939109823 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.9040951028944,
            "unit": "iter/sec",
            "range": "stddev: 0.00000916156225956216",
            "extra": "mean: 1.1416775028121404 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.93267633890838,
            "unit": "iter/sec",
            "range": "stddev: 0.000025834004316623773",
            "extra": "mean: 5.1037939086295205 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.02588809306113,
            "unit": "iter/sec",
            "range": "stddev: 0.000018115248872926826",
            "extra": "mean: 3.9211705426356223 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.41195996423244,
            "unit": "iter/sec",
            "range": "stddev: 0.000011712861726402429",
            "extra": "mean: 2.478855609755999 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.8225498232766,
            "unit": "iter/sec",
            "range": "stddev: 0.000008425943160990617",
            "extra": "mean: 1.2565615289766088 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.763020410380857,
            "unit": "iter/sec",
            "range": "stddev: 0.00016320759154099846",
            "extra": "mean: 36.019135714285994 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.92736916150919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000392622902846161",
            "extra": "mean: 34.56933793103459 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.8029391745686,
            "unit": "iter/sec",
            "range": "stddev: 0.000012469186428449852",
            "extra": "mean: 3.2383111464968684 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.7326942372503,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295723105718526",
            "extra": "mean: 1.8323989208630094 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1172.1199659988838,
            "unit": "iter/sec",
            "range": "stddev: 0.000018306073350175018",
            "extra": "mean: 853.1549918167269 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1027.0052180358937,
            "unit": "iter/sec",
            "range": "stddev: 0.000017441956276414037",
            "extra": "mean: 973.704887218061 usec\nrounds: 1064"
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
          "id": "edf5f76eb7810cf223186cd1cbde9ed384ac118d",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T00:05:09+09:00",
          "tree_id": "37407cf54120d06b047669a222bf3b43092715df",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/edf5f76eb7810cf223186cd1cbde9ed384ac118d"
        },
        "date": 1671549008994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.4424559357715,
            "unit": "iter/sec",
            "range": "stddev: 0.000030465447223805427",
            "extra": "mean: 4.891351923076899 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.939499900129,
            "unit": "iter/sec",
            "range": "stddev: 0.000032537659820080135",
            "extra": "mean: 3.718308394160587 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.97605914301823,
            "unit": "iter/sec",
            "range": "stddev: 0.00002203540013399731",
            "extra": "mean: 2.4511242206235555 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.3565967188126,
            "unit": "iter/sec",
            "range": "stddev: 0.000014435506453237566",
            "extra": "mean: 1.1956622377622081 msec\nrounds: 858"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.13566718616926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000408808478120148",
            "extra": "mean: 5.343716753926787 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.72948274787194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002494861034064553",
            "extra": "mean: 4.0530219123503795 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.9960477210304,
            "unit": "iter/sec",
            "range": "stddev: 0.000019801798698147454",
            "extra": "mean: 2.538096526054626 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 767.9413972781525,
            "unit": "iter/sec",
            "range": "stddev: 0.000013683173202759602",
            "extra": "mean: 1.30218269720104 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.88610129160886,
            "unit": "iter/sec",
            "range": "stddev: 0.00025423529213463973",
            "extra": "mean: 40.18307199999953 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.21174468673345,
            "unit": "iter/sec",
            "range": "stddev: 0.00013513199003018154",
            "extra": "mean: 38.15083703703745 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.5757741063225,
            "unit": "iter/sec",
            "range": "stddev: 0.00002496733581329164",
            "extra": "mean: 3.3492335504885973 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.45213328226185,
            "unit": "iter/sec",
            "range": "stddev: 0.000017762893484013142",
            "extra": "mean: 2.014292885375602 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1097.3925951937993,
            "unit": "iter/sec",
            "range": "stddev: 0.000021456628829999413",
            "extra": "mean: 911.2509090909259 usec\nrounds: 1155"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 963.8753163915845,
            "unit": "iter/sec",
            "range": "stddev: 0.000017872421192239917",
            "extra": "mean: 1.0374785856573792 msec\nrounds: 1004"
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
          "id": "e906892e8535453a7ae7626f965f8fe4686f4327",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T00:11:39+09:00",
          "tree_id": "2b9c8b697a0fa61f31140a278a94546c111c62eb",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e906892e8535453a7ae7626f965f8fe4686f4327"
        },
        "date": 1671551279313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.19313432763096,
            "unit": "iter/sec",
            "range": "stddev: 0.0007498147204649261",
            "extra": "mean: 7.9243613793103345 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.76738677743998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005210763113339843",
            "extra": "mean: 6.1437368983956855 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.78977002535254,
            "unit": "iter/sec",
            "range": "stddev: 0.0003639470087001027",
            "extra": "mean: 4.153000353356835 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 499.993097738379,
            "unit": "iter/sec",
            "range": "stddev: 0.00031155311102644553",
            "extra": "mean: 2.0000276094276193 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.60961534979391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005483150220946548",
            "extra": "mean: 8.802071875000095 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.92292029083595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005543828711025699",
            "extra": "mean: 6.496758235294063 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.6634652669037,
            "unit": "iter/sec",
            "range": "stddev: 0.0003324063894145741",
            "extra": "mean: 4.243339114391096 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 478.77529280101623,
            "unit": "iter/sec",
            "range": "stddev: 0.00040513913953502085",
            "extra": "mean: 2.088662499999995 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.979116716560107,
            "unit": "iter/sec",
            "range": "stddev: 0.003527659144871002",
            "extra": "mean: 55.62008500000033 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.90460009525781,
            "unit": "iter/sec",
            "range": "stddev: 0.0018626319527959194",
            "extra": "mean: 50.239642857142655 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.47608878527933,
            "unit": "iter/sec",
            "range": "stddev: 0.0006971868097095458",
            "extra": "mean: 5.571772857142963 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.83830898872037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005548091435519518",
            "extra": "mean: 3.1863541554958505 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 673.6983904594529,
            "unit": "iter/sec",
            "range": "stddev: 0.00037600488691810736",
            "extra": "mean: 1.4843437570305225 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 586.9768684698528,
            "unit": "iter/sec",
            "range": "stddev: 0.00039780810443670417",
            "extra": "mean: 1.7036446472019027 msec\nrounds: 822"
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
          "id": "df079e98b066d94ac126565e27ad07f441ff8ce6",
          "message": ":memo: Add visual tl;dr of library to \"Features\" intro section",
          "timestamp": "2022-12-21T11:12:45+09:00",
          "tree_id": "7c86e247c2d45a01b3485279ef426d4bf023bf28",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/df079e98b066d94ac126565e27ad07f441ff8ce6"
        },
        "date": 1671589067422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.6372212720707,
            "unit": "iter/sec",
            "range": "stddev: 0.0001809878455640578",
            "extra": "mean: 5.329433004926125 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.25977992533606,
            "unit": "iter/sec",
            "range": "stddev: 0.00013718192433685654",
            "extra": "mean: 4.077309374999961 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.69443586742824,
            "unit": "iter/sec",
            "range": "stddev: 0.00007625868374181654",
            "extra": "mean: 2.749560898876424 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.5372799369193,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132664345170336",
            "extra": "mean: 1.343116089613034 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.18538065396504,
            "unit": "iter/sec",
            "range": "stddev: 0.00011425187181080265",
            "extra": "mean: 5.945820000000247 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.78718835258252,
            "unit": "iter/sec",
            "range": "stddev: 0.00007211409233037252",
            "extra": "mean: 4.549855737704785 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 350.33669859139667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680488754757561",
            "extra": "mean: 2.854396938775507 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 687.327918152924,
            "unit": "iter/sec",
            "range": "stddev: 0.00006391874861664008",
            "extra": "mean: 1.4549096196868136 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.47028988041731,
            "unit": "iter/sec",
            "range": "stddev: 0.0005910016258349628",
            "extra": "mean: 44.50320869565161 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.762794839253004,
            "unit": "iter/sec",
            "range": "stddev: 0.0006991752730419929",
            "extra": "mean: 42.08259200000043 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.49863168256127,
            "unit": "iter/sec",
            "range": "stddev: 0.00008349273056199524",
            "extra": "mean: 3.7950861209962845 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 443.9510294458641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007983432737111365",
            "extra": "mean: 2.2525006896553244 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1045.5739826982744,
            "unit": "iter/sec",
            "range": "stddev: 0.00006913599150793186",
            "extra": "mean: 956.4124744375683 usec\nrounds: 1467"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 928.431889173314,
            "unit": "iter/sec",
            "range": "stddev: 0.00008529288192767478",
            "extra": "mean: 1.077084933920582 msec\nrounds: 1135"
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
          "id": "ad67e527eff42409f2067fd74bcd2137c298bfd2",
          "message": "Merge pull request #746 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.11.4",
          "timestamp": "2022-12-26T16:11:11Z",
          "tree_id": "868d6188aecf188d8119ce6b762d39b7ed963952",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ad67e527eff42409f2067fd74bcd2137c298bfd2"
        },
        "date": 1672071539884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.8550998950986,
            "unit": "iter/sec",
            "range": "stddev: 0.000014458987095568775",
            "extra": "mean: 4.788008530805658 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.1547226614711,
            "unit": "iter/sec",
            "range": "stddev: 0.000012679888015820969",
            "extra": "mean: 3.62115842293911 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.14045786149234,
            "unit": "iter/sec",
            "range": "stddev: 0.000011231215609347108",
            "extra": "mean: 2.426357279236267 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.9752671567012,
            "unit": "iter/sec",
            "range": "stddev: 0.000009559639847383933",
            "extra": "mean: 1.1723669354838264 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.43034567036602,
            "unit": "iter/sec",
            "range": "stddev: 0.00001744067064887485",
            "extra": "mean: 5.196685567010331 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.47109829618304,
            "unit": "iter/sec",
            "range": "stddev: 0.000010106977868355803",
            "extra": "mean: 3.9608494071145657 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.4979564574328,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144694593801283",
            "extra": "mean: 2.5220810945273007 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 779.0634125197322,
            "unit": "iter/sec",
            "range": "stddev: 0.000008991456810946076",
            "extra": "mean: 1.2835925598991877 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.852639952272025,
            "unit": "iter/sec",
            "range": "stddev: 0.00005580003418827091",
            "extra": "mean: 38.68076923076927 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.324905421670998,
            "unit": "iter/sec",
            "range": "stddev: 0.00010899513920536668",
            "extra": "mean: 36.59665000000015 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.67322940454693,
            "unit": "iter/sec",
            "range": "stddev: 0.000012527135937103126",
            "extra": "mean: 3.293013355048896 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.586134300248,
            "unit": "iter/sec",
            "range": "stddev: 0.00001416766233173941",
            "extra": "mean: 1.9779023437500736 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1124.131362889448,
            "unit": "iter/sec",
            "range": "stddev: 0.000019348779966816656",
            "extra": "mean: 889.5757497856988 usec\nrounds: 1167"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 984.7073689352577,
            "unit": "iter/sec",
            "range": "stddev: 0.000015681983990785098",
            "extra": "mean: 1.0155301275761528 msec\nrounds: 1019"
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
          "id": "811aeb3c53ffea07bca222e7dfae5015906430a9",
          "message": "Merge pull request #748 from TeoZosa/dependabot/pip/pre-commit-2.21.0",
          "timestamp": "2022-12-26T16:54:48Z",
          "tree_id": "4996c0897caab7c378f945742c4ef96ca51262bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/811aeb3c53ffea07bca222e7dfae5015906430a9"
        },
        "date": 1672074341255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.3274504689148,
            "unit": "iter/sec",
            "range": "stddev: 0.00011040961188770705",
            "extra": "mean: 4.800135545023689 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.9124812169326,
            "unit": "iter/sec",
            "range": "stddev: 0.000010264425089927794",
            "extra": "mean: 3.6112492857142198 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.00234644085015,
            "unit": "iter/sec",
            "range": "stddev: 0.000011621109868897613",
            "extra": "mean: 2.4330761336515048 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.6336712072499,
            "unit": "iter/sec",
            "range": "stddev: 0.00000915519237695662",
            "extra": "mean: 1.1742137891077398 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.6427738652873,
            "unit": "iter/sec",
            "range": "stddev: 0.00002497091778339955",
            "extra": "mean: 5.190955154639165 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.4883219200428,
            "unit": "iter/sec",
            "range": "stddev: 0.00001222462659732007",
            "extra": "mean: 3.960579215686169 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.778181273027,
            "unit": "iter/sec",
            "range": "stddev: 0.000011707898200507342",
            "extra": "mean: 2.5139639303484573 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.3573559116686,
            "unit": "iter/sec",
            "range": "stddev: 0.000008157467615120428",
            "extra": "mean: 1.2864096446700768 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.514487371260604,
            "unit": "iter/sec",
            "range": "stddev: 0.00014211790884804013",
            "extra": "mean: 39.19341923076986 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.867861171969817,
            "unit": "iter/sec",
            "range": "stddev: 0.00033921286524697853",
            "extra": "mean: 37.21918888888932 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.80774925535576,
            "unit": "iter/sec",
            "range": "stddev: 0.00001671842159323717",
            "extra": "mean: 3.3133675409835566 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.48546933474523,
            "unit": "iter/sec",
            "range": "stddev: 0.000010775592843730693",
            "extra": "mean: 1.982217647058655 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1125.6110494457434,
            "unit": "iter/sec",
            "range": "stddev: 0.000016895175760574392",
            "extra": "mean: 888.4063464838988 usec\nrounds: 1166"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 987.1691399818459,
            "unit": "iter/sec",
            "range": "stddev: 0.000014074385752340148",
            "extra": "mean: 1.0129976307995103 msec\nrounds: 1013"
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
          "id": "23312ae4f5e9f11a1725b352f60734087d051d66",
          "message": "Merge pull request #745 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-3.0.0\n\n⬆️ Bump tox-gh-actions from 2.12.0 to 3.0.0 in /.github/workflows",
          "timestamp": "2022-12-28T15:37:45+09:00",
          "tree_id": "8f91cfb5c258db3d2819e6d3bea3aabc289cdabe",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/23312ae4f5e9f11a1725b352f60734087d051d66"
        },
        "date": 1672209652260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.9790031508037,
            "unit": "iter/sec",
            "range": "stddev: 0.000195382660513628",
            "extra": "mean: 5.58724756756759 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.47848381635347,
            "unit": "iter/sec",
            "range": "stddev: 0.00005394978498787823",
            "extra": "mean: 4.1932504098360335 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.0034870737901,
            "unit": "iter/sec",
            "range": "stddev: 0.000032014921343686",
            "extra": "mean: 2.7700563451776223 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.2587684883164,
            "unit": "iter/sec",
            "range": "stddev: 0.00002886826562632545",
            "extra": "mean: 1.3382245109320992 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.94638931687874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000814737936772689",
            "extra": "mean: 5.989946857142944 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.62273494414276,
            "unit": "iter/sec",
            "range": "stddev: 0.00007499011932832604",
            "extra": "mean: 4.574089699570797 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 350.6738578937841,
            "unit": "iter/sec",
            "range": "stddev: 0.00006853244287204974",
            "extra": "mean: 2.8516525469169443 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.7225638586366,
            "unit": "iter/sec",
            "range": "stddev: 0.000045498762407458384",
            "extra": "mean: 1.4842904982618699 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.333804932663668,
            "unit": "iter/sec",
            "range": "stddev: 0.0005111228639141157",
            "extra": "mean: 44.775173913043304 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.808603210199944,
            "unit": "iter/sec",
            "range": "stddev: 0.00039849876858959394",
            "extra": "mean: 42.00162399999954 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.6939434268432,
            "unit": "iter/sec",
            "range": "stddev: 0.00008612622411680906",
            "extra": "mean: 3.763729000000116 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 443.47190872361665,
            "unit": "iter/sec",
            "range": "stddev: 0.00008966161697636683",
            "extra": "mean: 2.2549342592593082 msec\nrounds: 540"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1007.806503658941,
            "unit": "iter/sec",
            "range": "stddev: 0.00003017709615128103",
            "extra": "mean: 992.2539657854967 usec\nrounds: 1286"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 872.0744061151734,
            "unit": "iter/sec",
            "range": "stddev: 0.00003421751673115545",
            "extra": "mean: 1.146691145833182 msec\nrounds: 960"
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
          "id": "0c2a117b5767b8060f03b63e30f41811ca47cdf7",
          "message": "Merge pull request #749 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.0.18\n\n⬆️ Bump tox from 3.27.1 to 4.0.18 in /.github/workflows",
          "timestamp": "2022-12-28T17:33:14+09:00",
          "tree_id": "98c38f999d60b86f7a62b44c67db5ce6043f436f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0c2a117b5767b8060f03b63e30f41811ca47cdf7"
        },
        "date": 1672216561820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.354458160341,
            "unit": "iter/sec",
            "range": "stddev: 0.000013802735785049981",
            "extra": "mean: 4.799513333333339 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.60536071067554,
            "unit": "iter/sec",
            "range": "stddev: 0.000019585028083011068",
            "extra": "mean: 3.615258928571463 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.0650895262522,
            "unit": "iter/sec",
            "range": "stddev: 0.000011804879049743696",
            "extra": "mean: 2.380583449883436 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 870.5627362982443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068224332310069135",
            "extra": "mean: 1.1486822928490383 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.85985890770672,
            "unit": "iter/sec",
            "range": "stddev: 0.000017186973494247194",
            "extra": "mean: 5.105691414141277 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.80592031885345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000135748107138287",
            "extra": "mean: 3.8788868725869583 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.41322086271816,
            "unit": "iter/sec",
            "range": "stddev: 0.000014487553612829936",
            "extra": "mean: 2.442520048309123 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 808.4994043494338,
            "unit": "iter/sec",
            "range": "stddev: 0.000006957766843485566",
            "extra": "mean: 1.2368592909535399 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.69125907605748,
            "unit": "iter/sec",
            "range": "stddev: 0.00010934429943975721",
            "extra": "mean: 36.11247857142847 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.916708313374606,
            "unit": "iter/sec",
            "range": "stddev: 0.00006146885430301603",
            "extra": "mean: 34.58208275862015 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.60124586710185,
            "unit": "iter/sec",
            "range": "stddev: 0.000024774276764139486",
            "extra": "mean: 3.2195621019108014 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.007059826411,
            "unit": "iter/sec",
            "range": "stddev: 0.000010222310388103154",
            "extra": "mean: 1.808295178571319 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1173.9023773197644,
            "unit": "iter/sec",
            "range": "stddev: 0.00001886250278394814",
            "extra": "mean: 851.8595918369161 usec\nrounds: 1225"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1038.667945352391,
            "unit": "iter/sec",
            "range": "stddev: 0.00001832238911040679",
            "extra": "mean: 962.7716003700568 usec\nrounds: 1081"
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
          "id": "3f276fee0c42357caab3f788816c73e6dd9bc312",
          "message": "Merge pull request #750 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.0.19",
          "timestamp": "2022-12-29T16:08:04Z",
          "tree_id": "382786747ed546072351f982caa3c5c67881d651",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3f276fee0c42357caab3f788816c73e6dd9bc312"
        },
        "date": 1672330247530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.29019887520386,
            "unit": "iter/sec",
            "range": "stddev: 0.000021097241280689413",
            "extra": "mean: 4.824154761904763 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.27588207320855,
            "unit": "iter/sec",
            "range": "stddev: 0.000021989038973434742",
            "extra": "mean: 3.645964028776997 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.5652586994449,
            "unit": "iter/sec",
            "range": "stddev: 0.00004053659767947868",
            "extra": "mean: 2.3664983796296024 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.7258096559399,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788075339798576",
            "extra": "mean: 1.1419099322799289 msec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.7790320866344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001570643102533014",
            "extra": "mean: 5.134022842639535 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.76797277385774,
            "unit": "iter/sec",
            "range": "stddev: 0.00001436452110721543",
            "extra": "mean: 3.925140154440213 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.68641779959376,
            "unit": "iter/sec",
            "range": "stddev: 0.000016715112449089016",
            "extra": "mean: 2.4528656249999714 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 798.9040892434268,
            "unit": "iter/sec",
            "range": "stddev: 0.000008032230476802747",
            "extra": "mean: 1.2517147095179018 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.662921765700556,
            "unit": "iter/sec",
            "range": "stddev: 0.00004946678539354995",
            "extra": "mean: 36.149471428571466 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.891823235441453,
            "unit": "iter/sec",
            "range": "stddev: 0.00007499509556971532",
            "extra": "mean: 34.61186896551772 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.22555294683826,
            "unit": "iter/sec",
            "range": "stddev: 0.00001341399269718641",
            "extra": "mean: 3.2338853968252717 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 544.4946829358643,
            "unit": "iter/sec",
            "range": "stddev: 0.000012474891667096464",
            "extra": "mean: 1.8365652252251459 msec\nrounds: 555"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.7605728323053,
            "unit": "iter/sec",
            "range": "stddev: 0.000020495854496673153",
            "extra": "mean: 859.2832781456476 usec\nrounds: 1208"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1029.15856015427,
            "unit": "iter/sec",
            "range": "stddev: 0.000018362215416038256",
            "extra": "mean: 971.6675726334151 usec\nrounds: 1067"
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
          "id": "94637814913a0f17d0bb2ad192ed7e01a1dc4a4c",
          "message": "Merge pull request #751 from TeoZosa/dependabot/pip/cruft-2.12.0",
          "timestamp": "2022-12-29T16:17:28Z",
          "tree_id": "8fac5cd3d7e1a118ab017fb3eb45f9967163e7bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/94637814913a0f17d0bb2ad192ed7e01a1dc4a4c"
        },
        "date": 1672330869384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.76276789900432,
            "unit": "iter/sec",
            "range": "stddev: 0.0008287473382312622",
            "extra": "mean: 8.01521172413794 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.07165581286907,
            "unit": "iter/sec",
            "range": "stddev: 0.0007304839103704643",
            "extra": "mean: 6.247202197802244 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.31343564833097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006998560533624455",
            "extra": "mean: 4.341909090909117 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.648928288578,
            "unit": "iter/sec",
            "range": "stddev: 0.0004670889880725072",
            "extra": "mean: 1.9894601255886604 msec\nrounds: 637"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.42403757654205,
            "unit": "iter/sec",
            "range": "stddev: 0.0011061109021109075",
            "extra": "mean: 9.055999236641163 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.0915748218389,
            "unit": "iter/sec",
            "range": "stddev: 0.0016380808319254184",
            "extra": "mean: 7.294394285714329 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.27743870635038,
            "unit": "iter/sec",
            "range": "stddev: 0.0009733857764792809",
            "extra": "mean: 4.519213553113588 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 479.1996971195522,
            "unit": "iter/sec",
            "range": "stddev: 0.00038036929916866925",
            "extra": "mean: 2.086812671232797 msec\nrounds: 584"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.82908274628853,
            "unit": "iter/sec",
            "range": "stddev: 0.004301269635361633",
            "extra": "mean: 56.088134999999895 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.382776704597273,
            "unit": "iter/sec",
            "range": "stddev: 0.0017153365222245362",
            "extra": "mean: 51.59219523809592 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.87919958755876,
            "unit": "iter/sec",
            "range": "stddev: 0.001087679516557591",
            "extra": "mean: 5.88653585858569 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.37409384353947,
            "unit": "iter/sec",
            "range": "stddev: 0.0007398512202820151",
            "extra": "mean: 3.3970380577426162 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 619.3972613063156,
            "unit": "iter/sec",
            "range": "stddev: 0.00037526466630476916",
            "extra": "mean: 1.6144727503169598 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 558.8798123529684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003458527496231722",
            "extra": "mean: 1.7892934722223173 msec\nrounds: 720"
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
          "id": "bf3e762dbe6b3f71043f017fc65dfea2a9d11154",
          "message": "Merge pull request #752 from TeoZosa/dependabot/pip/gitpython-3.1.30",
          "timestamp": "2022-12-29T21:30:41Z",
          "tree_id": "61f5e3aca9751ebaab7ad23d57143861acf4048c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf3e762dbe6b3f71043f017fc65dfea2a9d11154"
        },
        "date": 1672352920999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.24245715516432,
            "unit": "iter/sec",
            "range": "stddev: 0.000014829278554917615",
            "extra": "mean: 4.756413207547201 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.8009003912733,
            "unit": "iter/sec",
            "range": "stddev: 0.00001200553592017367",
            "extra": "mean: 3.599700355871898 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.14656964399506,
            "unit": "iter/sec",
            "range": "stddev: 0.000013139288129832966",
            "extra": "mean: 2.346610465116274 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 881.1674700174267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068130266021772785",
            "extra": "mean: 1.1348580536912278 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.15752305422714,
            "unit": "iter/sec",
            "range": "stddev: 0.000014772102873595608",
            "extra": "mean: 5.097943654822522 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.44353999414494,
            "unit": "iter/sec",
            "range": "stddev: 0.000016363952882501036",
            "extra": "mean: 3.8994938223939344 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.38925353208583,
            "unit": "iter/sec",
            "range": "stddev: 0.000011526516913788455",
            "extra": "mean: 2.4426630434783148 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.9725798782954,
            "unit": "iter/sec",
            "range": "stddev: 0.000007230749196450553",
            "extra": "mean: 1.237665763546864 msec\nrounds: 812"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.092130952672758,
            "unit": "iter/sec",
            "range": "stddev: 0.00008250677381228617",
            "extra": "mean: 35.597157142856666 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.24148790370455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004225049217079552",
            "extra": "mean: 34.197986206895855 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.49352798418244,
            "unit": "iter/sec",
            "range": "stddev: 0.000046431584548372675",
            "extra": "mean: 3.2206790476191287 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 551.049339160522,
            "unit": "iter/sec",
            "range": "stddev: 0.00001368546891353288",
            "extra": "mean: 1.8147195340501037 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1177.9590810448763,
            "unit": "iter/sec",
            "range": "stddev: 0.000020772024353818347",
            "extra": "mean: 848.9259228877265 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1035.4011018571857,
            "unit": "iter/sec",
            "range": "stddev: 0.00001654107075282191",
            "extra": "mean: 965.8092870543724 usec\nrounds: 1066"
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
          "id": "38fd5bc384b38634f8dfb4e3924269b0fe036d32",
          "message": "Merge pull request #757 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.1.2",
          "timestamp": "2023-01-02T17:17:52Z",
          "tree_id": "7f9135c6730d662578a7b7242d7a5a2541a0a104",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/38fd5bc384b38634f8dfb4e3924269b0fe036d32"
        },
        "date": 1672679996883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.53299214304985,
            "unit": "iter/sec",
            "range": "stddev: 0.000016914632459595893",
            "extra": "mean: 4.795404265402849 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.60935024562394,
            "unit": "iter/sec",
            "range": "stddev: 0.000013975785139943006",
            "extra": "mean: 3.615206785714288 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.2976261499172,
            "unit": "iter/sec",
            "range": "stddev: 0.000011567251252974527",
            "extra": "mean: 2.373618881118864 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.9829586865845,
            "unit": "iter/sec",
            "range": "stddev: 0.000007262578102629906",
            "extra": "mean: 1.1415747191011134 msec\nrounds: 890"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.13571045852447,
            "unit": "iter/sec",
            "range": "stddev: 0.000014217717503368312",
            "extra": "mean: 5.098510606060508 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.59554577871944,
            "unit": "iter/sec",
            "range": "stddev: 0.00001357563536443065",
            "extra": "mean: 3.8971837837838814 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.25963446842337,
            "unit": "iter/sec",
            "range": "stddev: 0.000012029300010397997",
            "extra": "mean: 2.4736578048781412 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 803.6990693974394,
            "unit": "iter/sec",
            "range": "stddev: 0.000007541069732551875",
            "extra": "mean: 1.2442468058968068 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.653332295675067,
            "unit": "iter/sec",
            "range": "stddev: 0.00005376538834707377",
            "extra": "mean: 36.162007142857 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.854816988324032,
            "unit": "iter/sec",
            "range": "stddev: 0.00006171162495997801",
            "extra": "mean: 34.65625862068872 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.9372587908183,
            "unit": "iter/sec",
            "range": "stddev: 0.000013713999117929719",
            "extra": "mean: 3.236903194888192 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.8402881032829,
            "unit": "iter/sec",
            "range": "stddev: 0.000013892383385209062",
            "extra": "mean: 1.8154082437276255 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.6303775051194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001767453034922044",
            "extra": "mean: 851.331635168478 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1029.7683301663774,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663769909895746",
            "extra": "mean: 971.0922065727466 usec\nrounds: 1065"
          }
        ]
      }
    ]
  }
}