window.BENCHMARK_DATA = {
  "lastUpdate": 1643755748957,
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
        "date": 1642085281220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.18032786885244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813010404721279",
            "extra": "mean: 11.213235294117647 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.31531531531533,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793332",
            "extra": "mean: 8.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.1780821917808,
            "unit": "iter/sec",
            "range": "stddev: 0.00017738944131173322",
            "extra": "mean: 4.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039815",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.21052631578948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379143536399198",
            "extra": "mean: 11.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.66666666666669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378879538497858",
            "extra": "mean: 9.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.22112211221125,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696334",
            "extra": "mean: 4.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.7681159420289,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026186",
            "extra": "mean: 2.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 100 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.847457627118644,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 92.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.97900262467192,
            "unit": "iter/sec",
            "range": "stddev: 0.00015537951968933657",
            "extra": "mean: 5.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.23744292237444,
            "unit": "iter/sec",
            "range": "stddev: 0.00052833144387149",
            "extra": "mean: 3.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 788.9655172413792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763992459331404",
            "extra": "mean: 1.2674825174825175 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 761.904761904762,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684119",
            "extra": "mean: 1.3124999999999998 msec\nrounds: 10"
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
        "date": 1642431790360,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.5929203539823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 7.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.972972972973,
            "unit": "iter/sec",
            "range": "stddev: 0.0004658474953124563",
            "extra": "mean: 5.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.093023255814,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 2.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 761.904761904762,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684119",
            "extra": "mean: 1.3124999999999998 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.6122448979592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359876",
            "extra": "mean: 7.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.66666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 5.859375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.59116022099454,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 695.9223300970873,
            "unit": "iter/sec",
            "range": "stddev: 0.00006738921477952675",
            "extra": "mean: 1.4369419642857144 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.382022471910116,
            "unit": "iter/sec",
            "range": "stddev: 0.0011048543456039798",
            "extra": "mean: 69.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.953271028037385,
            "unit": "iter/sec",
            "range": "stddev: 0.00065880784586841",
            "extra": "mean: 66.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.86206896551727,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 3.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.61194029850736,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1321.4814814814815,
            "unit": "iter/sec",
            "range": "stddev: 0.000029542952729525212",
            "extra": "mean: 756.7264573991031 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.6302521008404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470529422006545",
            "extra": "mean: 929.6875 usec\nrounds: 10"
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
        "date": 1642432943674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.2857142857143,
            "unit": "iter/sec",
            "range": "stddev: 0.00032940392293420576",
            "extra": "mean: 8.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.88290398126463,
            "unit": "iter/sec",
            "range": "stddev: 0.00018117215761381355",
            "extra": "mean: 6.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.72549019607845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 3.1875000000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.7657657657658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000791917148713095",
            "extra": "mean: 1.548549107142857 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.30434782608697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117549036677572",
            "extra": "mean: 8.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.73799126637553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001232516621479085",
            "extra": "mean: 7.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2962962962963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 3.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 576.5765765765765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494105884401309",
            "extra": "mean: 1.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.531531531531531,
            "unit": "iter/sec",
            "range": "stddev: 0.005764568651348608",
            "extra": "mean: 86.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.307692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 81.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.77622377622376,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439047",
            "extra": "mean: 4.468750000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 397.51552795031057,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697227",
            "extra": "mean: 2.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1122.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 925.0909090909091,
            "unit": "iter/sec",
            "range": "stddev: 0.0001035861392874862",
            "extra": "mean: 1.0809748427672956 msec\nrounds: 10"
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
        "date": 1642433986232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.45308924485124,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 6.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.13450292397664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684093",
            "extra": "mean: 5.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.2439024390244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.3265306122449,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270462766947303",
            "extra": "mean: 1.2249999999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.0449678800857,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306964",
            "extra": "mean: 7.296874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.79558011049724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 5.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.7142857142858,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355139",
            "extra": "mean: 2.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.0404040404039,
            "unit": "iter/sec",
            "range": "stddev: 0.00004411659682154545",
            "extra": "mean: 1.381138392857143 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.645308924485127,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227416",
            "extra": "mean: 68.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.238095238095237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359876",
            "extra": "mean: 65.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.4444444444444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 3.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.3076923076924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1338.9121338912137,
            "unit": "iter/sec",
            "range": "stddev: 0.000012325166214790878",
            "extra": "mean: 746.875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438595,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1643746682908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.31531531531532,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793332",
            "extra": "mean: 8.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.12471655328798,
            "unit": "iter/sec",
            "range": "stddev: 0.0005484847340375322",
            "extra": "mean: 6.890625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.23232323232327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 3.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.6666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007352766136924241",
            "extra": "mean: 1.46484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.61061946902655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003972416871214206",
            "extra": "mean: 9.292763157894736 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.5929203539823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435838411676064",
            "extra": "mean: 7.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.3175355450237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586665",
            "extra": "mean: 3.296875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 598.1308411214953,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227383",
            "extra": "mean: 1.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.19047619047619,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 82.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.549019607843137,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 79.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.4322344322344,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 4.265625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 418.3006535947713,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.3119266055046,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470529422006545",
            "extra": "mean: 851.5625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 937.5438596491229,
            "unit": "iter/sec",
            "range": "stddev: 0.000048315660506579485",
            "extra": "mean: 1.0666167664670658 msec\nrounds: 10"
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
        "date": 1643755445250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.48648648648648,
            "unit": "iter/sec",
            "range": "stddev: 0.00032940392293420663",
            "extra": "mean: 11.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.34482758620692,
            "unit": "iter/sec",
            "range": "stddev: 0.0004034357652299387",
            "extra": "mean: 9.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.76510067114094,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790877",
            "extra": "mean: 4.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 460.431654676259,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697212",
            "extra": "mean: 2.171875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 80.00000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0.00062067040804606",
            "extra": "mean: 12.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.66666666666669,
            "unit": "iter/sec",
            "range": "stddev: 0.00036828478186799344",
            "extra": "mean: 9.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8216560509554,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736826",
            "extra": "mean: 4.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.35616438356163,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736824",
            "extra": "mean: 2.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.32258064516129,
            "unit": "iter/sec",
            "range": "stddev: 0.008398185154477655",
            "extra": "mean: 96.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 95.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.60099750623442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494105884401307",
            "extra": "mean: 6.265625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.59276018099547,
            "unit": "iter/sec",
            "range": "stddev: 0.00015537951968933657",
            "extra": "mean: 3.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 832,
            "unit": "iter/sec",
            "range": "stddev: 0.00007284382284382283",
            "extra": "mean: 1.201923076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 720.7207207207209,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095577652469336",
            "extra": "mean: 1.3874999999999997 msec\nrounds: 10"
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
        "date": 1643755743379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.22222222222223,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359876",
            "extra": "mean: 7.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 185.5072463768116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355116",
            "extra": "mean: 5.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.87878787878793,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039805",
            "extra": "mean: 2.578125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642458254964185",
            "extra": "mean: 1.2456293706293708 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.77263581488933,
            "unit": "iter/sec",
            "range": "stddev: 0.0001482317653203929",
            "extra": "mean: 7.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.04301075268816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 5.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.54189944134083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886947206558666",
            "extra": "mean: 2.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 689.2307692307692,
            "unit": "iter/sec",
            "range": "stddev: 0.00007204210093391769",
            "extra": "mean: 1.4508928571428572 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.746543778801843,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598829",
            "extra": "mean: 67.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.274463007159902,
            "unit": "iter/sec",
            "range": "stddev: 0.000494105884401312",
            "extra": "mean: 65.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.5042735042735,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439067",
            "extra": "mean: 3.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.203007518797,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.078125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1370.4496788008569,
            "unit": "iter/sec",
            "range": "stddev: 0.000018117215761381356",
            "extra": "mean: 729.6875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1057.8512396694216,
            "unit": "iter/sec",
            "range": "stddev: 0.00013999666724703766",
            "extra": "mean: 945.3125 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}