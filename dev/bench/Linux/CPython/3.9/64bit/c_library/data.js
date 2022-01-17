window.BENCHMARK_DATA = {
  "lastUpdate": 1642431414153,
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
      }
    ]
  }
}