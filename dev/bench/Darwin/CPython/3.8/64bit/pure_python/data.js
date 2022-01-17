window.BENCHMARK_DATA = {
  "lastUpdate": 1642435800872,
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
        "date": 1642086180777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.79737504494811,
            "unit": "iter/sec",
            "range": "stddev: 0.00041294563358096277",
            "extra": "mean: 8.27832558139533 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.47161597741032,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381432404311959",
            "extra": "mean: 7.018941935483877 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.3791994260936,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838966014806955",
            "extra": "mean: 4.869042253521166 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.25615982156154,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331007295540684",
            "extra": "mean: 3.112780780780794 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.14119565891993,
            "unit": "iter/sec",
            "range": "stddev: 0.0011972515157029709",
            "extra": "mean: 9.88716806722669 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.45743135207766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004374739484252945",
            "extra": "mean: 7.0692645161290235 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.4375685044684,
            "unit": "iter/sec",
            "range": "stddev: 0.00024864076244778167",
            "extra": "mean: 5.116723502304198 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.6804151034956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487196024379363",
            "extra": "mean: 3.325790273556046 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.558077589749209,
            "unit": "iter/sec",
            "range": "stddev: 0.0018160068903072272",
            "extra": "mean: 73.75676923076952 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.219667692806492,
            "unit": "iter/sec",
            "range": "stddev: 0.0027111143693702147",
            "extra": "mean: 75.64486666666757 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.52935020525578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931554994334522",
            "extra": "mean: 6.348023391812583 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.26734505089513,
            "unit": "iter/sec",
            "range": "stddev: 0.0004141713493409695",
            "extra": "mean: 4.323999999999695 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.7999614895974,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764579068748132",
            "extra": "mean: 2.193944897958976 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.77113206790597,
            "unit": "iter/sec",
            "range": "stddev: 0.00020652751242028955",
            "extra": "mean: 2.258503157894752 msec\nrounds: 475"
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
        "date": 1642435798791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.86313213385188,
            "unit": "iter/sec",
            "range": "stddev: 0.00048080284117135453",
            "extra": "mean: 8.484417322834632 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.3681876261468,
            "unit": "iter/sec",
            "range": "stddev: 0.00046465502056196935",
            "extra": "mean: 6.926733766233746 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5802586874906,
            "unit": "iter/sec",
            "range": "stddev: 0.00038036941236252035",
            "extra": "mean: 5.112990476190429 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.63327923363573,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727447617881136",
            "extra": "mean: 3.1986358024690147 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.82677407787669,
            "unit": "iter/sec",
            "range": "stddev: 0.00041122615025662094",
            "extra": "mean: 9.10524786324793 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.39215311595342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628148942492877",
            "extra": "mean: 8.104243055555449 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.85889322525057,
            "unit": "iter/sec",
            "range": "stddev: 0.00025689506083636853",
            "extra": "mean: 5.239472906404239 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.44308984349107,
            "unit": "iter/sec",
            "range": "stddev: 0.00016919420967873253",
            "extra": "mean: 3.2739323076924074 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.186262551673678,
            "unit": "iter/sec",
            "range": "stddev: 0.0017282343479805616",
            "extra": "mean: 75.83649999999993 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.522924738162427,
            "unit": "iter/sec",
            "range": "stddev: 0.002398980191986007",
            "extra": "mean: 73.94849999999968 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.4929702775492,
            "unit": "iter/sec",
            "range": "stddev: 0.00034201266053878685",
            "extra": "mean: 6.116470930232526 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.9451583703751,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593038243166115",
            "extra": "mean: 4.44552800000028 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.6460262662161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007769995519929343",
            "extra": "mean: 2.1898800000003034 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.1116088757213,
            "unit": "iter/sec",
            "range": "stddev: 0.00015602824936799794",
            "extra": "mean: 2.3035550755941268 msec\nrounds: 463"
          }
        ]
      }
    ]
  }
}