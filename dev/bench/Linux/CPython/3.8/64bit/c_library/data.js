window.BENCHMARK_DATA = {
  "lastUpdate": 1642431357394,
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
        "date": 1642085022785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.28502653067733,
            "unit": "iter/sec",
            "range": "stddev: 0.00001980237774906523",
            "extra": "mean: 4.91920146341468 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.27418509251265,
            "unit": "iter/sec",
            "range": "stddev: 0.000008897148197152824",
            "extra": "mean: 3.755527407407392 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.8108118755377,
            "unit": "iter/sec",
            "range": "stddev: 0.000017062640664127052",
            "extra": "mean: 2.4825550122249065 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.4054990152878,
            "unit": "iter/sec",
            "range": "stddev: 0.000009000003835641096",
            "extra": "mean: 1.1745284722221931 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.74487621893545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003606516820521827",
            "extra": "mean: 5.298157068062848 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.02370429279242,
            "unit": "iter/sec",
            "range": "stddev: 0.000009191584136556935",
            "extra": "mean: 4.03187269076305 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.3293664475266,
            "unit": "iter/sec",
            "range": "stddev: 0.000012288562328355606",
            "extra": "mean: 2.548878787878726 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.0163266291685,
            "unit": "iter/sec",
            "range": "stddev: 0.000008624284310324177",
            "extra": "mean: 1.2771125786162485 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.781064795298775,
            "unit": "iter/sec",
            "range": "stddev: 0.00009769581403351142",
            "extra": "mean: 37.33981481481434 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.29684877510277,
            "unit": "iter/sec",
            "range": "stddev: 0.00007252400418034319",
            "extra": "mean: 35.33962413793082 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.76535462129937,
            "unit": "iter/sec",
            "range": "stddev: 0.000011512386628177843",
            "extra": "mean: 3.2920146579806246 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.91834587970476,
            "unit": "iter/sec",
            "range": "stddev: 0.00001011082638400276",
            "extra": "mean: 1.9805182524269913 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1573.4941591579575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062540224471931044",
            "extra": "mean: 635.5282567652757 usec\nrounds: 1589"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1250.937750402485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002179596037226816",
            "extra": "mean: 799.4002896453107 usec\nrounds: 1381"
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
        "date": 1642431355985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.0582906491299,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286992795271638",
            "extra": "mean: 4.346724463519272 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.39178562636863,
            "unit": "iter/sec",
            "range": "stddev: 0.000024839912013314347",
            "extra": "mean: 3.3179404605263088 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 459.6659799833117,
            "unit": "iter/sec",
            "range": "stddev: 0.000012216734345582321",
            "extra": "mean: 2.1754927350427486 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.459152879733,
            "unit": "iter/sec",
            "range": "stddev: 0.000010303110025459512",
            "extra": "mean: 1.0400857873211053 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.1543315051794,
            "unit": "iter/sec",
            "range": "stddev: 0.00001260663356595852",
            "extra": "mean: 4.6914364485982825 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.8631330340315,
            "unit": "iter/sec",
            "range": "stddev: 0.000010771751352179828",
            "extra": "mean: 3.5731751773049703 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.3143936983775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011844863026017667",
            "extra": "mean: 2.2506585746102328 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.9429620044493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008691075131923762",
            "extra": "mean: 1.1274682170542818 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.643015097780665,
            "unit": "iter/sec",
            "range": "stddev: 0.00065777039102628",
            "extra": "mean: 33.73475999999975 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.39476851312727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004277029312291422",
            "extra": "mean: 31.85244062499981 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.4326954794535,
            "unit": "iter/sec",
            "range": "stddev: 0.00001938843308831405",
            "extra": "mean: 2.9460921511626506 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.3386991052547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000106083405800974",
            "extra": "mean: 1.7657278260868923 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1741.3192293345553,
            "unit": "iter/sec",
            "range": "stddev: 0.000005705869348692067",
            "extra": "mean: 574.2772394365334 usec\nrounds: 1775"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1511.4759102164444,
            "unit": "iter/sec",
            "range": "stddev: 0.000005929760153406227",
            "extra": "mean: 661.6049870466009 usec\nrounds: 1544"
          }
        ]
      }
    ]
  }
}