window.BENCHMARK_DATA = {
  "lastUpdate": 1642432647899,
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
      }
    ]
  }
}