window.BENCHMARK_DATA = {
  "lastUpdate": 1728979069328,
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
        "date": 1728978052518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.63722458227153,
            "unit": "iter/sec",
            "range": "stddev: 0.00018405509595735857",
            "extra": "mean: 4.26189834873949 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.7268321769596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395080389179982",
            "extra": "mean: 2.867574008450704 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.57003190988405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002735751671808651",
            "extra": "mean: 2.3225025568182005 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1066.3423573334464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003769338711160572",
            "extra": "mean: 937.785124189059 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.7587653762463,
            "unit": "iter/sec",
            "range": "stddev: 0.00011400669723118782",
            "extra": "mean: 4.613423582959685 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.53798581198504,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334747782380738",
            "extra": "mean: 3.2306212672954624 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.7739619322988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002890235810301627",
            "extra": "mean: 2.393638883990698 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.2409504010361,
            "unit": "iter/sec",
            "range": "stddev: 0.000020395603909661554",
            "extra": "mean: 1.0232890870870934 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.06826362367667,
            "unit": "iter/sec",
            "range": "stddev: 0.0008182445319832142",
            "extra": "mean: 99.32199209090892 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.166697159364215,
            "unit": "iter/sec",
            "range": "stddev: 0.000627573880300176",
            "extra": "mean: 98.36036072727242 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.8076987908822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000857688522721753",
            "extra": "mean: 3.032069911242611 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.9465437329367,
            "unit": "iter/sec",
            "range": "stddev: 0.00005553158534818521",
            "extra": "mean: 1.4642434450785444 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 868.2361040885557,
            "unit": "iter/sec",
            "range": "stddev: 0.00004131958001778064",
            "extra": "mean: 1.151760443145549 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 796.5673909133486,
            "unit": "iter/sec",
            "range": "stddev: 0.00006626247963505441",
            "extra": "mean: 1.2553865641592412 msec\nrounds: 904"
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
          "id": "b69d50658b3d5819eb5e80ce41575370486e6d52",
          "message": ":bookmark: Bump version number to `1.6.0`",
          "timestamp": "2024-10-15T16:54:23+09:00",
          "tree_id": "1a2e1b792e090b427508e9532082016460daed16",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b69d50658b3d5819eb5e80ce41575370486e6d52"
        },
        "date": 1728979032114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.114959238563,
            "unit": "iter/sec",
            "range": "stddev: 0.00008784711989768794",
            "extra": "mean: 4.289728995798289 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.73910170126754,
            "unit": "iter/sec",
            "range": "stddev: 0.00005087823014813569",
            "extra": "mean: 2.926208897435897 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.5792795656464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003636148935786686",
            "extra": "mean: 2.3387475675057114 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1062.250566848532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003774589696876867",
            "extra": "mean: 941.3974736363607 usec\nrounds: 1100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.6127603132766,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833634155326911",
            "extra": "mean: 4.637944426605553 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.401981364628,
            "unit": "iter/sec",
            "range": "stddev: 0.00009305004475911487",
            "extra": "mean: 3.2743729936908035 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.257488315242,
            "unit": "iter/sec",
            "range": "stddev: 0.00005144659048568054",
            "extra": "mean: 2.419798862149541 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.4322517634105,
            "unit": "iter/sec",
            "range": "stddev: 0.000022747443135029096",
            "extra": "mean: 1.0230888107036313 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.97667834709225,
            "unit": "iter/sec",
            "range": "stddev: 0.00021886042719841155",
            "extra": "mean: 100.23376170000056 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.269621959885848,
            "unit": "iter/sec",
            "range": "stddev: 0.00028324350387949756",
            "extra": "mean: 97.37456781818241 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.1174484842481,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666089520608972",
            "extra": "mean: 3.020076424778237 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.6445263183089,
            "unit": "iter/sec",
            "range": "stddev: 0.000027740229513141977",
            "extra": "mean: 1.4648912595744041 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 847.9263784772008,
            "unit": "iter/sec",
            "range": "stddev: 0.000058891304889904375",
            "extra": "mean: 1.1793476714286324 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 808.2625782096343,
            "unit": "iter/sec",
            "range": "stddev: 0.000047804919497584056",
            "extra": "mean: 1.2372216986898978 msec\nrounds: 916"
          }
        ]
      }
    ]
  }
}