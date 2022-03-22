window.BENCHMARK_DATA = {
  "lastUpdate": 1647984033522,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
        "date": 1647981766945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.52308534052813,
            "unit": "iter/sec",
            "range": "stddev: 0.0006251329389332513",
            "extra": "mean: 5.361266666666691 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.11124042619196,
            "unit": "iter/sec",
            "range": "stddev: 0.00042565756180980573",
            "extra": "mean: 4.18215387205386 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.25801532535377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006322605955137435",
            "extra": "mean: 2.9132604494381864 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.3214086135354,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623594079914014",
            "extra": "mean: 1.3562606324973085 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.02908437671925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461257529026143",
            "extra": "mean: 6.096479802955789 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.59424797886075,
            "unit": "iter/sec",
            "range": "stddev: 0.0012106842890954115",
            "extra": "mean: 4.887722943722849 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.51537272295735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852301136958331",
            "extra": "mean: 2.9716324455206062 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 638.6807058963147,
            "unit": "iter/sec",
            "range": "stddev: 0.00035430032344105524",
            "extra": "mean: 1.5657275862069693 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.06429639501246,
            "unit": "iter/sec",
            "range": "stddev: 0.003195492082876018",
            "extra": "mean: 47.473695833333274 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.84398859189159,
            "unit": "iter/sec",
            "range": "stddev: 0.002415005711331643",
            "extra": "mean: 41.93929199999957 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.10018071115684,
            "unit": "iter/sec",
            "range": "stddev: 0.0015792933154966397",
            "extra": "mean: 4.482291304347616 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 424.3663340681699,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254413168918618",
            "extra": "mean: 2.3564545999998217 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1287.1233287957211,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576911860977887",
            "extra": "mean: 776.9263268156564 usec\nrounds: 1432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1106.9739813574083,
            "unit": "iter/sec",
            "range": "stddev: 0.00022630228793074013",
            "extra": "mean: 903.3635991821296 usec\nrounds: 1467"
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
        "date": 1647984031371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.4438077729396,
            "unit": "iter/sec",
            "range": "stddev: 0.00012824606115445302",
            "extra": "mean: 5.451260591132982 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.89538875118467,
            "unit": "iter/sec",
            "range": "stddev: 0.00012763140422139744",
            "extra": "mean: 4.100118518518496 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.12285301461543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000836789651788191",
            "extra": "mean: 2.716484433962315 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 764.1344271802925,
            "unit": "iter/sec",
            "range": "stddev: 0.00006506406007967306",
            "extra": "mean: 1.3086702606635163 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.13024173678127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018463976735044537",
            "extra": "mean: 5.7759984042553985 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.09081654130688,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270817132221803",
            "extra": "mean: 4.423001408450837 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.7503788525496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000948878258379173",
            "extra": "mean: 2.8188835294116643 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.1218104083453,
            "unit": "iter/sec",
            "range": "stddev: 0.00002287311796072457",
            "extra": "mean: 1.5034840000000291 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.989423926610463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004952304513044211",
            "extra": "mean: 41.68503599999923 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.607014273349677,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987575335658266",
            "extra": "mean: 39.05180000000012 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.04909022810295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012738931388502485",
            "extra": "mean: 3.703030434782534 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 444.6193482940148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006427243845372512",
            "extra": "mean: 2.2491148975791466 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1353.8745874283559,
            "unit": "iter/sec",
            "range": "stddev: 0.00003408550643114898",
            "extra": "mean: 738.6208510638123 usec\nrounds: 1645"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.1855247068886,
            "unit": "iter/sec",
            "range": "stddev: 0.000038165195840844584",
            "extra": "mean: 839.4997918112437 usec\nrounds: 1441"
          }
        ]
      }
    ]
  }
}