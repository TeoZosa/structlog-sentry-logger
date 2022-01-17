window.BENCHMARK_DATA = {
  "lastUpdate": 1642431336609,
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
        "date": 1642085029671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.78465051046098,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719165931759307",
            "extra": "mean: 4.980460396039585 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.7262470533433,
            "unit": "iter/sec",
            "range": "stddev: 0.000010017952342187057",
            "extra": "mean: 3.806243233082694 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.8998813078337,
            "unit": "iter/sec",
            "range": "stddev: 0.00001145420435141671",
            "extra": "mean: 2.4943883663366395 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.1760060874584,
            "unit": "iter/sec",
            "range": "stddev: 0.002421877978413368",
            "extra": "mean: 2.2926524752475452 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.16588661075153,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561232626841201",
            "extra": "mean: 5.342853968253829 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.76440409812358,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989907803526012",
            "extra": "mean: 4.068937499999964 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.92366843342495,
            "unit": "iter/sec",
            "range": "stddev: 0.0027481452417057444",
            "extra": "mean: 4.256701790281255 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.109923294837,
            "unit": "iter/sec",
            "range": "stddev: 0.000015111457809091082",
            "extra": "mean: 1.3438874670184613 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.993016951064224,
            "unit": "iter/sec",
            "range": "stddev: 0.00011181228420878414",
            "extra": "mean: 40.01117599999944 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.369291378032294,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137937055705491",
            "extra": "mean: 37.92290000000072 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.0769800147663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011267486037749372",
            "extra": "mean: 3.3775000000004285 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.41477621944676,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989774746734656",
            "extra": "mean: 2.0349408450702318 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.8732022129907,
            "unit": "iter/sec",
            "range": "stddev: 0.000005708315567960175",
            "extra": "mean: 678.9450704225598 usec\nrounds: 1491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1307.2023388041698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057231402649545424",
            "extra": "mean: 764.9925113466375 usec\nrounds: 1322"
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
        "date": 1642431334764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.611549504584,
            "unit": "iter/sec",
            "range": "stddev: 0.000019929311130718454",
            "extra": "mean: 4.492129910714305 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.57557840017375,
            "unit": "iter/sec",
            "range": "stddev: 0.000011561725045533555",
            "extra": "mean: 3.417920270270262 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.91322980354266,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864615758215439",
            "extra": "mean: 2.2425887665198294 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.7403619080139,
            "unit": "iter/sec",
            "range": "stddev: 0.00222108443766593",
            "extra": "mean: 2.017184955752207 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.51384575570398,
            "unit": "iter/sec",
            "range": "stddev: 0.000019494617215111967",
            "extra": "mean: 4.842290338164311 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.35835998518206,
            "unit": "iter/sec",
            "range": "stddev: 0.000011161243739195387",
            "extra": "mean: 3.67163321167893 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.72106901296564,
            "unit": "iter/sec",
            "range": "stddev: 0.002500578363443218",
            "extra": "mean: 3.880163945578276 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.3274327036888,
            "unit": "iter/sec",
            "range": "stddev: 0.000010569211781541084",
            "extra": "mean: 1.2043441666666705 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.99468660848128,
            "unit": "iter/sec",
            "range": "stddev: 0.00021431726605444787",
            "extra": "mean: 35.72106428571483 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.564360281937414,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908135571704646",
            "extra": "mean: 33.824510000000174 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.181312821149,
            "unit": "iter/sec",
            "range": "stddev: 0.00001624625167474034",
            "extra": "mean: 2.983459882005996 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.4399654021362,
            "unit": "iter/sec",
            "range": "stddev: 0.00001350363574672381",
            "extra": "mean: 1.8068807142855825 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1629.9361811389958,
            "unit": "iter/sec",
            "range": "stddev: 0.000007367445585188673",
            "extra": "mean: 613.5209535021195 usec\nrounds: 1699"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1472.3128168039677,
            "unit": "iter/sec",
            "range": "stddev: 0.000006939337427709188",
            "extra": "mean: 679.2034875922335 usec\nrounds: 1491"
          }
        ]
      }
    ]
  }
}