window.BENCHMARK_DATA = {
  "lastUpdate": 1728978278188,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978243858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.006045805722,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973168419621436",
            "extra": "mean: 1.4044824561403513 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.0662034837168,
            "unit": "iter/sec",
            "range": "stddev: 0.00014876303676573165",
            "extra": "mean: 1.0069822097378396 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1220.05740562627,
            "unit": "iter/sec",
            "range": "stddev: 0.000139239098813361",
            "extra": "mean: 819.6335642802708 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.5718682864085,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399171163057104",
            "extra": "mean: 437.71877518130833 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 479.8167622404783,
            "unit": "iter/sec",
            "range": "stddev: 0.001607011981875997",
            "extra": "mean: 2.084128939828101 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 885.8940358238298,
            "unit": "iter/sec",
            "range": "stddev: 0.0002284204730095761",
            "extra": "mean: 1.1288031746032225 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1090.2218775349688,
            "unit": "iter/sec",
            "range": "stddev: 0.00035493474873481075",
            "extra": "mean: 917.2444807849905 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1668.9448974941713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202248092318019",
            "extra": "mean: 599.1809564842104 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.023145778715953,
            "unit": "iter/sec",
            "range": "stddev: 0.0031933481982731747",
            "extra": "mean: 41.626521739129636 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.670214751092693,
            "unit": "iter/sec",
            "range": "stddev: 0.0010494980492526942",
            "extra": "mean: 38.95565384615388 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1044.152601608269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776540107746132",
            "extra": "mean: 957.7144168962827 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1693.1675931522693,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512275562642164",
            "extra": "mean: 590.608988764214 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1934.1758720654168,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710634237265527",
            "extra": "mean: 517.0160658307386 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1434.4811817838204,
            "unit": "iter/sec",
            "range": "stddev: 0.00033637556896862317",
            "extra": "mean: 697.1161509114187 usec\nrounds: 2359"
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978243858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 712.006045805722,
            "unit": "iter/sec",
            "range": "stddev: 0.00018973168419621436",
            "extra": "mean: 1.4044824561403513 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 993.0662034837168,
            "unit": "iter/sec",
            "range": "stddev: 0.00014876303676573165",
            "extra": "mean: 1.0069822097378396 msec\nrounds: 1068"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1220.05740562627,
            "unit": "iter/sec",
            "range": "stddev: 0.000139239098813361",
            "extra": "mean: 819.6335642802708 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 2284.5718682864085,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399171163057104",
            "extra": "mean: 437.71877518130833 usec\nrounds: 2482"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 479.8167622404783,
            "unit": "iter/sec",
            "range": "stddev: 0.001607011981875997",
            "extra": "mean: 2.084128939828101 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 885.8940358238298,
            "unit": "iter/sec",
            "range": "stddev: 0.0002284204730095761",
            "extra": "mean: 1.1288031746032225 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1090.2218775349688,
            "unit": "iter/sec",
            "range": "stddev: 0.00035493474873481075",
            "extra": "mean: 917.2444807849905 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1668.9448974941713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202248092318019",
            "extra": "mean: 599.1809564842104 usec\nrounds: 2321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.023145778715953,
            "unit": "iter/sec",
            "range": "stddev: 0.0031933481982731747",
            "extra": "mean: 41.626521739129636 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.670214751092693,
            "unit": "iter/sec",
            "range": "stddev: 0.0010494980492526942",
            "extra": "mean: 38.95565384615388 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 1044.152601608269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776540107746132",
            "extra": "mean: 957.7144168962827 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1693.1675931522693,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512275562642164",
            "extra": "mean: 590.608988764214 usec\nrounds: 1780"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1934.1758720654168,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710634237265527",
            "extra": "mean: 517.0160658307386 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1434.4811817838204,
            "unit": "iter/sec",
            "range": "stddev: 0.00033637556896862317",
            "extra": "mean: 697.1161509114187 usec\nrounds: 2359"
          }
        ]
      }
    ]
  }
}