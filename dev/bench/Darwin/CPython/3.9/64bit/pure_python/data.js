window.BENCHMARK_DATA = {
  "lastUpdate": 1673829057347,
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
        "date": 1642086153410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.71788192443324,
            "unit": "iter/sec",
            "range": "stddev: 0.001003962084640299",
            "extra": "mean: 8.215719696969712 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.08675164848128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005022302544552979",
            "extra": "mean: 6.532243902439095 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2759470996732,
            "unit": "iter/sec",
            "range": "stddev: 0.000248568267507949",
            "extra": "mean: 4.71084931506844 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.78838616105946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572964064380266",
            "extra": "mean: 3.060084269662951 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.29013372084908,
            "unit": "iter/sec",
            "range": "stddev: 0.0009024133078182519",
            "extra": "mean: 9.234451612903218 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.44457300553057,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456798819153311",
            "extra": "mean: 7.27566013071874 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.62259990620228,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779834735758871",
            "extra": "mean: 5.416454976303287 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.5901787240708,
            "unit": "iter/sec",
            "range": "stddev: 0.00041051172110322744",
            "extra": "mean: 3.6024329268292172 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.937722606550532,
            "unit": "iter/sec",
            "range": "stddev: 0.005977630537316534",
            "extra": "mean: 83.76807142857169 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.827126073241152,
            "unit": "iter/sec",
            "range": "stddev: 0.004557386197212537",
            "extra": "mean: 77.95978571428515 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.86330432549826,
            "unit": "iter/sec",
            "range": "stddev: 0.0009490180486284628",
            "extra": "mean: 6.3749772727275715 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.2287046521418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004339468061484904",
            "extra": "mean: 4.420305555555559 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 441.5029962193612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003333112348584656",
            "extra": "mean: 2.2649902912621434 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 411.7096504916066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207448004127331",
            "extra": "mean: 2.4288961864409506 msec\nrounds: 472"
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
        "date": 1642435861874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.4775002341461,
            "unit": "iter/sec",
            "range": "stddev: 0.0004190384316071907",
            "extra": "mean: 8.231977099236605 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.66907066926896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003802245138822565",
            "extra": "mean: 6.818070063694257 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.4811105926799,
            "unit": "iter/sec",
            "range": "stddev: 0.0003158545980458098",
            "extra": "mean: 4.890427272727256 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.1852876101031,
            "unit": "iter/sec",
            "range": "stddev: 0.00013771477658376636",
            "extra": "mean: 3.20322590361442 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.03976577693224,
            "unit": "iter/sec",
            "range": "stddev: 0.0008123288092595146",
            "extra": "mean: 9.255851239669308 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.07622466765372,
            "unit": "iter/sec",
            "range": "stddev: 0.0011868947698222526",
            "extra": "mean: 7.687800000000091 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.9911513185443,
            "unit": "iter/sec",
            "range": "stddev: 0.0004306979894108163",
            "extra": "mean: 5.050730769230785 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.6294825224392,
            "unit": "iter/sec",
            "range": "stddev: 0.00024153972812939533",
            "extra": "mean: 3.304370716510915 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.273149083062474,
            "unit": "iter/sec",
            "range": "stddev: 0.001899265544858845",
            "extra": "mean: 75.34007142857112 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.091440909443534,
            "unit": "iter/sec",
            "range": "stddev: 0.0029680798812222677",
            "extra": "mean: 76.38578571428667 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.65289582179705,
            "unit": "iter/sec",
            "range": "stddev: 0.00044995677094454876",
            "extra": "mean: 6.263588235293834 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.50744600937514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844485509388254",
            "extra": "mean: 4.175235537190174 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.3263692697896,
            "unit": "iter/sec",
            "range": "stddev: 0.0001346337843496333",
            "extra": "mean: 2.191414012738719 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.4184727643763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478335316571828",
            "extra": "mean: 2.367320712694771 msec\nrounds: 449"
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
        "date": 1643747055936,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.3005257508907,
            "unit": "iter/sec",
            "range": "stddev: 0.00040069449521311666",
            "extra": "mean: 8.312515625000051 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.25859884369726,
            "unit": "iter/sec",
            "range": "stddev: 0.000655503831261696",
            "extra": "mean: 7.448312500000031 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.33171619608143,
            "unit": "iter/sec",
            "range": "stddev: 0.0003701638017670306",
            "extra": "mean: 5.093420560747682 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.5333864683693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003700159671946475",
            "extra": "mean: 3.5269215116279047 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.11281770896811,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235415363120435",
            "extra": "mean: 9.423932203390025 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.06651792364855,
            "unit": "iter/sec",
            "range": "stddev: 0.001061529473772615",
            "extra": "mean: 7.808442176870819 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.04059224962248,
            "unit": "iter/sec",
            "range": "stddev: 0.0012839387763252605",
            "extra": "mean: 5.585325581395404 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.2042833455265,
            "unit": "iter/sec",
            "range": "stddev: 0.00021482184818179807",
            "extra": "mean: 3.3421981424148997 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.509914347142935,
            "unit": "iter/sec",
            "range": "stddev: 0.0031173446399776505",
            "extra": "mean: 74.01971428571485 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.209852478818268,
            "unit": "iter/sec",
            "range": "stddev: 0.008550764369470117",
            "extra": "mean: 81.9010714285702 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.85808588846112,
            "unit": "iter/sec",
            "range": "stddev: 0.0007774764530300033",
            "extra": "mean: 6.416093167701571 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.40964769041182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039765305058508",
            "extra": "mean: 4.6858237704917425 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.06215253922716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336363078419547",
            "extra": "mean: 2.2468771929823026 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 399.4479716822169,
            "unit": "iter/sec",
            "range": "stddev: 0.000429067113308876",
            "extra": "mean: 2.5034549450549113 msec\nrounds: 455"
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
        "date": 1643756496624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.41818054884268,
            "unit": "iter/sec",
            "range": "stddev: 0.0009136129489083071",
            "extra": "mean: 8.444649253731278 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.4951606097918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006680655615184877",
            "extra": "mean: 7.067379518072349 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.96404375867976,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315519423991279",
            "extra": "mean: 5.102976958525369 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.8098163150276,
            "unit": "iter/sec",
            "range": "stddev: 0.00047380070645818055",
            "extra": "mean: 3.438673469387715 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.7167432484451,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964252265341561",
            "extra": "mean: 9.831223140495965 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.49159285536723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005979751242794838",
            "extra": "mean: 7.117863636363468 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.4194669306797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191810440277945",
            "extra": "mean: 5.4224210526315195 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.5270909253099,
            "unit": "iter/sec",
            "range": "stddev: 0.0004595723177765789",
            "extra": "mean: 3.4184868035190874 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.5961006383369,
            "unit": "iter/sec",
            "range": "stddev: 0.001436378927398914",
            "extra": "mean: 73.55050000000014 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.53869081737945,
            "unit": "iter/sec",
            "range": "stddev: 0.0061877875237895535",
            "extra": "mean: 79.75314285714218 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 138.26881300833617,
            "unit": "iter/sec",
            "range": "stddev: 0.0010566768531310373",
            "extra": "mean: 7.232288888888563 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.76937033215623,
            "unit": "iter/sec",
            "range": "stddev: 0.000557128610158798",
            "extra": "mean: 4.509188976377778 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.8507246990719,
            "unit": "iter/sec",
            "range": "stddev: 0.00016988835513822662",
            "extra": "mean: 2.268341513292527 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 417.96464875028016,
            "unit": "iter/sec",
            "range": "stddev: 0.00029546365658813877",
            "extra": "mean: 2.3925468409589503 msec\nrounds: 459"
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
        "date": 1643756795516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.84894534859517,
            "unit": "iter/sec",
            "range": "stddev: 0.00026837546001320917",
            "extra": "mean: 7.883392307692331 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.51365729762188,
            "unit": "iter/sec",
            "range": "stddev: 0.0005977363165071295",
            "extra": "mean: 6.600065088757486 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.73565490938273,
            "unit": "iter/sec",
            "range": "stddev: 0.0004233857738459288",
            "extra": "mean: 4.722870129870067 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.5146635915351,
            "unit": "iter/sec",
            "range": "stddev: 0.00013192535113512623",
            "extra": "mean: 2.9367310924370393 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.33394221017878,
            "unit": "iter/sec",
            "range": "stddev: 0.0003685794153300651",
            "extra": "mean: 8.595943548386893 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.47095150061088,
            "unit": "iter/sec",
            "range": "stddev: 0.00032047716363033183",
            "extra": "mean: 6.690263157894683 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.17368127003306,
            "unit": "iter/sec",
            "range": "stddev: 0.00031055137577313445",
            "extra": "mean: 4.897790909090945 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.6374257522493,
            "unit": "iter/sec",
            "range": "stddev: 0.00010000275362776814",
            "extra": "mean: 3.0614985337243272 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.129539619229128,
            "unit": "iter/sec",
            "range": "stddev: 0.0012502116392257203",
            "extra": "mean: 70.7737142857141 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.088263912630355,
            "unit": "iter/sec",
            "range": "stddev: 0.0016937896844763604",
            "extra": "mean: 70.981066666666 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.32124760125447,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437886493656915",
            "extra": "mean: 5.7038152173909396 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.79716769692152,
            "unit": "iter/sec",
            "range": "stddev: 0.00024951110713227414",
            "extra": "mean: 3.971450549450426 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.8128124441129,
            "unit": "iter/sec",
            "range": "stddev: 0.00017682380800499456",
            "extra": "mean: 2.184298850574598 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 430.18462089978067,
            "unit": "iter/sec",
            "range": "stddev: 0.0003075654549859087",
            "extra": "mean: 2.3245833333334533 msec\nrounds: 468"
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
        "date": 1643758889976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.83441657115903,
            "unit": "iter/sec",
            "range": "stddev: 0.000443103713848174",
            "extra": "mean: 8.275787878787852 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9130475855923,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300335514184938",
            "extra": "mean: 6.900689873417741 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.0432900553699,
            "unit": "iter/sec",
            "range": "stddev: 0.00031298646846384976",
            "extra": "mean: 5.02403271028036 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.0984115048428,
            "unit": "iter/sec",
            "range": "stddev: 0.0001089191095282248",
            "extra": "mean: 3.0571839080459573 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.58838383838543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981068668997191",
            "extra": "mean: 9.747692307692157 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.52662751880058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004818787398648226",
            "extra": "mean: 7.433472602739903 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.6217331919433,
            "unit": "iter/sec",
            "range": "stddev: 0.00026766321437504556",
            "extra": "mean: 5.085907766990306 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.7950308200856,
            "unit": "iter/sec",
            "range": "stddev: 0.00018546808902758405",
            "extra": "mean: 3.3807194029849676 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.934208301729202,
            "unit": "iter/sec",
            "range": "stddev: 0.0017251990122506588",
            "extra": "mean: 77.3143571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.007368674354034,
            "unit": "iter/sec",
            "range": "stddev: 0.001889490519445459",
            "extra": "mean: 76.87949999999992 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.79243704042602,
            "unit": "iter/sec",
            "range": "stddev: 0.00036313434719934933",
            "extra": "mean: 6.180758620689647 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.65118924237865,
            "unit": "iter/sec",
            "range": "stddev: 0.00026316907984000716",
            "extra": "mean: 4.225628458498038 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.87351042161015,
            "unit": "iter/sec",
            "range": "stddev: 0.00011280569573742401",
            "extra": "mean: 2.2377696969698064 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 421.6525472774744,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517190292649757",
            "extra": "mean: 2.3716209150325276 msec\nrounds: 459"
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
        "date": 1643759148965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.71379725047635,
            "unit": "iter/sec",
            "range": "stddev: 0.00036906658610653503",
            "extra": "mean: 7.830007575757601 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.9584107013213,
            "unit": "iter/sec",
            "range": "stddev: 0.000481373250254515",
            "extra": "mean: 6.495260606060659 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.26990960286892,
            "unit": "iter/sec",
            "range": "stddev: 0.00028466178443590443",
            "extra": "mean: 4.778517857142949 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.8231406221443,
            "unit": "iter/sec",
            "range": "stddev: 0.00016815065638743791",
            "extra": "mean: 3.069149717514066 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.89691016953245,
            "unit": "iter/sec",
            "range": "stddev: 0.0003427277543586623",
            "extra": "mean: 8.628357723577043 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.06422758036908,
            "unit": "iter/sec",
            "range": "stddev: 0.00035549207503268086",
            "extra": "mean: 7.295849673202581 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.03222314577414,
            "unit": "iter/sec",
            "range": "stddev: 0.00021803028829636318",
            "extra": "mean: 4.974326923076764 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.5023779691842,
            "unit": "iter/sec",
            "range": "stddev: 0.0001510602799061053",
            "extra": "mean: 3.159533923303931 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.82494047853519,
            "unit": "iter/sec",
            "range": "stddev: 0.0037345865483094554",
            "extra": "mean: 77.97307142857132 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.904467041778316,
            "unit": "iter/sec",
            "range": "stddev: 0.0013367160007522782",
            "extra": "mean: 71.9193333333332 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.8445719315868,
            "unit": "iter/sec",
            "range": "stddev: 0.00042801152679898546",
            "extra": "mean: 5.922606741572862 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.809801260619,
            "unit": "iter/sec",
            "range": "stddev: 0.0002668403066031855",
            "extra": "mean: 4.084803773585121 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.7180821687352,
            "unit": "iter/sec",
            "range": "stddev: 0.00009521764402042521",
            "extra": "mean: 2.115425742574098 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.82752457549077,
            "unit": "iter/sec",
            "range": "stddev: 0.00010366351687640573",
            "extra": "mean: 2.238000000000116 msec\nrounds: 466"
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
        "date": 1643760158947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.58715686009282,
            "unit": "iter/sec",
            "range": "stddev: 0.001427204684296173",
            "extra": "mean: 8.882007751937964 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.9950104841605,
            "unit": "iter/sec",
            "range": "stddev: 0.00037582989600175114",
            "extra": "mean: 6.71163414634149 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.1889219676097,
            "unit": "iter/sec",
            "range": "stddev: 0.00038343167758718655",
            "extra": "mean: 5.230428571428502 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.138841504121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002383400775470224",
            "extra": "mean: 3.1631671554251732 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.9148336888016,
            "unit": "iter/sec",
            "range": "stddev: 0.00047587381042903695",
            "extra": "mean: 9.015926605504742 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.9753358014063,
            "unit": "iter/sec",
            "range": "stddev: 0.0003466116637659084",
            "extra": "mean: 6.994213333333287 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.89302737515786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966619445380967",
            "extra": "mean: 5.322177272727335 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.437513087519,
            "unit": "iter/sec",
            "range": "stddev: 0.00019361364692180866",
            "extra": "mean: 3.25269349845192 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.705026710118197,
            "unit": "iter/sec",
            "range": "stddev: 0.0020003375278367305",
            "extra": "mean: 72.96592857142821 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.327583433052158,
            "unit": "iter/sec",
            "range": "stddev: 0.0037109827561547445",
            "extra": "mean: 75.03235714285746 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.51234802794667,
            "unit": "iter/sec",
            "range": "stddev: 0.000511110605662741",
            "extra": "mean: 6.430357541899457 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.70654544256493,
            "unit": "iter/sec",
            "range": "stddev: 0.00024260612847979985",
            "extra": "mean: 4.315803846153662 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.6494708851905,
            "unit": "iter/sec",
            "range": "stddev: 0.000058375008983884616",
            "extra": "mean: 2.1157328244273144 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.0704637164397,
            "unit": "iter/sec",
            "range": "stddev: 0.00020218023352026987",
            "extra": "mean: 2.363672451193009 msec\nrounds: 461"
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
        "date": 1643760578528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.73321648130404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740776177579218",
            "extra": "mean: 8.56654198473285 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.66788686096032,
            "unit": "iter/sec",
            "range": "stddev: 0.00031819033299308497",
            "extra": "mean: 6.423932515337486 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.15037540168507,
            "unit": "iter/sec",
            "range": "stddev: 0.00035783059178982305",
            "extra": "mean: 4.781248888888886 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.5028698887611,
            "unit": "iter/sec",
            "range": "stddev: 0.00014276801927274184",
            "extra": "mean: 2.9717428571428632 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.85366210133624,
            "unit": "iter/sec",
            "range": "stddev: 0.00035994005319104776",
            "extra": "mean: 8.861032786885165 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.75901111384812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954153466472467",
            "extra": "mean: 7.365993548386969 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.30242024774202,
            "unit": "iter/sec",
            "range": "stddev: 0.0002236345092472135",
            "extra": "mean: 4.943094594594507 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.68038555971907,
            "unit": "iter/sec",
            "range": "stddev: 0.00011628729412623862",
            "extra": "mean: 3.099041791044743 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.667523815660221,
            "unit": "iter/sec",
            "range": "stddev: 0.001215546085393512",
            "extra": "mean: 73.166142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.796554172629893,
            "unit": "iter/sec",
            "range": "stddev: 0.0008454578528545152",
            "extra": "mean: 72.4818666666664 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.1868415276519,
            "unit": "iter/sec",
            "range": "stddev: 0.0004898733150778913",
            "extra": "mean: 6.443845303867566 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.68495301723803,
            "unit": "iter/sec",
            "range": "stddev: 0.00030421618087591917",
            "extra": "mean: 4.279265682657085 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.3002853843903,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547786365924641",
            "extra": "mean: 2.117297047970512 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.66993298469487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008610488584212108",
            "extra": "mean: 2.264134199134295 msec\nrounds: 462"
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
        "date": 1643761603368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.32386756011535,
            "unit": "iter/sec",
            "range": "stddev: 0.0003611072865222032",
            "extra": "mean: 8.043507812499975 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.28650323393796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004216324955452397",
            "extra": "mean: 6.882951807228895 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.45541635681292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906754028607564",
            "extra": "mean: 4.891041860465134 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.74273500168044,
            "unit": "iter/sec",
            "range": "stddev: 0.00013384298629452382",
            "extra": "mean: 3.0888724035608375 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.8104071761513,
            "unit": "iter/sec",
            "range": "stddev: 0.0005839950041362348",
            "extra": "mean: 9.275542372881509 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.95204689103747,
            "unit": "iter/sec",
            "range": "stddev: 0.001726129366769533",
            "extra": "mean: 7.6363831168830805 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.06742242240915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003829987607056515",
            "extra": "mean: 5.179537735849168 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.0576045744215,
            "unit": "iter/sec",
            "range": "stddev: 0.0003450211612582707",
            "extra": "mean: 3.44759104477616 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.780761859576142,
            "unit": "iter/sec",
            "range": "stddev: 0.0024850484738895054",
            "extra": "mean: 72.56492857142786 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.354802768641543,
            "unit": "iter/sec",
            "range": "stddev: 0.001616691717641158",
            "extra": "mean: 74.87942857142775 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.20494010947777,
            "unit": "iter/sec",
            "range": "stddev: 0.00054388372129655",
            "extra": "mean: 6.74741340782101 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.69916543034526,
            "unit": "iter/sec",
            "range": "stddev: 0.00033483978975641697",
            "extra": "mean: 4.1545636363636875 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.27147093211653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000754080391611996",
            "extra": "mean: 2.117426229508024 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.948062048989,
            "unit": "iter/sec",
            "range": "stddev: 0.0001884558529510583",
            "extra": "mean: 2.415762004175428 msec\nrounds: 479"
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
        "date": 1643775559083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.82545032859475,
            "unit": "iter/sec",
            "range": "stddev: 0.0004842677272007776",
            "extra": "mean: 8.559778688524645 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.9125569464288,
            "unit": "iter/sec",
            "range": "stddev: 0.0003527106344542233",
            "extra": "mean: 6.853419753086405 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.27020175023497,
            "unit": "iter/sec",
            "range": "stddev: 0.00023677854972774273",
            "extra": "mean: 4.89547663551397 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.35702988937516,
            "unit": "iter/sec",
            "range": "stddev: 0.00018094428217256135",
            "extra": "mean: 3.171009063444035 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.0499531091509,
            "unit": "iter/sec",
            "range": "stddev: 0.0004587091686999289",
            "extra": "mean: 9.08678260869561 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.1506282512668,
            "unit": "iter/sec",
            "range": "stddev: 0.00033072088403157896",
            "extra": "mean: 7.186456953642222 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.4328607408675,
            "unit": "iter/sec",
            "range": "stddev: 0.00024452326368883966",
            "extra": "mean: 5.196617647058797 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.85166194396766,
            "unit": "iter/sec",
            "range": "stddev: 0.00012395343382372954",
            "extra": "mean: 3.2695588235292994 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.443556710092734,
            "unit": "iter/sec",
            "range": "stddev: 0.0011217740014176983",
            "extra": "mean: 74.3850769230773 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.242314491726846,
            "unit": "iter/sec",
            "range": "stddev: 0.0018981424421715683",
            "extra": "mean: 75.5155000000001 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.49287420695185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049657776326419",
            "extra": "mean: 6.079290697674111 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.81844834656806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001839302001797328",
            "extra": "mean: 4.22264400000023 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.479487570522,
            "unit": "iter/sec",
            "range": "stddev: 0.00011848111455531904",
            "extra": "mean: 2.1811226611227243 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.85441979100517,
            "unit": "iter/sec",
            "range": "stddev: 0.00013368972540289735",
            "extra": "mean: 2.3372435897436135 msec\nrounds: 468"
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
        "date": 1643776327546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.50324124204047,
            "unit": "iter/sec",
            "range": "stddev: 0.00037681879474062835",
            "extra": "mean: 8.096953488372096 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.23173487418546,
            "unit": "iter/sec",
            "range": "stddev: 0.00031499213787673227",
            "extra": "mean: 6.526063291139225 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.91659188631692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158123605244066",
            "extra": "mean: 5.078292237442927 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.6519323085531,
            "unit": "iter/sec",
            "range": "stddev: 0.00018046628299752283",
            "extra": "mean: 3.0613625730993905 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.65273023490707,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409421832605162",
            "extra": "mean: 8.956341666666745 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.5413706264655,
            "unit": "iter/sec",
            "range": "stddev: 0.0006486628199542242",
            "extra": "mean: 7.602171052631594 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.65370124315356,
            "unit": "iter/sec",
            "range": "stddev: 0.00038972800725221244",
            "extra": "mean: 5.386372549019555 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.4628777198541,
            "unit": "iter/sec",
            "range": "stddev: 0.00044608729867531697",
            "extra": "mean: 3.3281981707316977 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.578496317317828,
            "unit": "iter/sec",
            "range": "stddev: 0.0015792059765859258",
            "extra": "mean: 73.6458571428571 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.44675422160384,
            "unit": "iter/sec",
            "range": "stddev: 0.001872033615876467",
            "extra": "mean: 80.34223076923134 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.2988346432092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836301794573235",
            "extra": "mean: 6.049649425287597 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.03086111071332,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249616406306506",
            "extra": "mean: 4.166130952380968 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.40631264124227,
            "unit": "iter/sec",
            "range": "stddev: 0.00011668463219037643",
            "extra": "mean: 2.1532868369351994 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.60224857750416,
            "unit": "iter/sec",
            "range": "stddev: 0.00015084375769557483",
            "extra": "mean: 2.244153846153828 msec\nrounds: 468"
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
        "date": 1643782596500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.02719366106376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834385547320103",
            "extra": "mean: 8.331445312500005 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.6543128683761,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853697572205628",
            "extra": "mean: 6.550748427672889 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.77381487433863,
            "unit": "iter/sec",
            "range": "stddev: 0.00027453560822648736",
            "extra": "mean: 4.9074018691590515 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.18483384592093,
            "unit": "iter/sec",
            "range": "stddev: 0.00020709506244680174",
            "extra": "mean: 3.255369047619012 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.92624694093011,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812335614184814",
            "extra": "mean: 9.097008474576224 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.03555944237058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004175274488054437",
            "extra": "mean: 7.244510067114241 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.02576082176998,
            "unit": "iter/sec",
            "range": "stddev: 0.00019296389678941922",
            "extra": "mean: 5.049848039215638 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.41884436170534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001337224195977487",
            "extra": "mean: 3.1804709480122844 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.097625961740022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674806639746842",
            "extra": "mean: 76.34971428571394 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.487553877960883,
            "unit": "iter/sec",
            "range": "stddev: 0.0010056547591025958",
            "extra": "mean: 74.1424285714279 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.814190031911,
            "unit": "iter/sec",
            "range": "stddev: 0.00026650510484591564",
            "extra": "mean: 6.104477272727105 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.7132020311438,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747974273224343",
            "extra": "mean: 4.137134387351974 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.77369338293806,
            "unit": "iter/sec",
            "range": "stddev: 0.00026711919925733124",
            "extra": "mean: 2.2534008097165126 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.1151708602195,
            "unit": "iter/sec",
            "range": "stddev: 0.00016345486241720167",
            "extra": "mean: 2.42063247863235 msec\nrounds: 468"
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
        "date": 1643824430596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.28037260625632,
            "unit": "iter/sec",
            "range": "stddev: 0.00032051966440157674",
            "extra": "mean: 8.04632283464573 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.98349425786034,
            "unit": "iter/sec",
            "range": "stddev: 0.00014959491633646248",
            "extra": "mean: 6.45230000000005 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.06997728236777,
            "unit": "iter/sec",
            "range": "stddev: 0.00010076358712420957",
            "extra": "mean: 4.715424657534225 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.4014327290262,
            "unit": "iter/sec",
            "range": "stddev: 0.00009469506784482266",
            "extra": "mean: 3.0731272189349483 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.34013374135792,
            "unit": "iter/sec",
            "range": "stddev: 0.000553749883371259",
            "extra": "mean: 8.822999999999992 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9281000995994,
            "unit": "iter/sec",
            "range": "stddev: 0.00021956021603113115",
            "extra": "mean: 6.899973154362521 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.92963368408454,
            "unit": "iter/sec",
            "range": "stddev: 0.00024280732021329904",
            "extra": "mean: 4.927816513761482 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.74618833910006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007126915382604756",
            "extra": "mean: 3.127480597014877 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.408189338957108,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582815141125168",
            "extra": "mean: 74.58128571428573 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.76293256897058,
            "unit": "iter/sec",
            "range": "stddev: 0.0017555562596940986",
            "extra": "mean: 72.65893333333366 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.51388591404,
            "unit": "iter/sec",
            "range": "stddev: 0.00018767960533883543",
            "extra": "mean: 5.796634831460922 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.18092661481683,
            "unit": "iter/sec",
            "range": "stddev: 0.00015488096481683887",
            "extra": "mean: 4.078620689655097 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.8873538585144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000710850513505103",
            "extra": "mean: 2.1418442622950975 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.2983539608646,
            "unit": "iter/sec",
            "range": "stddev: 0.000056440247288229954",
            "extra": "mean: 2.2011966173360706 msec\nrounds: 473"
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
        "date": 1643831012677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.47321348410254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964860692450624",
            "extra": "mean: 8.440726562500021 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.9945725325111,
            "unit": "iter/sec",
            "range": "stddev: 0.0005425564895438349",
            "extra": "mean: 6.6227546012270535 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.61487110185146,
            "unit": "iter/sec",
            "range": "stddev: 0.00023337653304274269",
            "extra": "mean: 4.793522123893903 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.06302653443703,
            "unit": "iter/sec",
            "range": "stddev: 0.00017525897438769005",
            "extra": "mean: 3.1539470588236105 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.77847244155373,
            "unit": "iter/sec",
            "range": "stddev: 0.000655978992828984",
            "extra": "mean: 9.109254098360696 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.1848263786497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863586911546067",
            "extra": "mean: 7.236684563758337 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.41395529835543,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688907814638218",
            "extra": "mean: 5.014694174757422 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.23924284056534,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630348067592734",
            "extra": "mean: 3.1422900302116106 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.135120989620294,
            "unit": "iter/sec",
            "range": "stddev: 0.0020977518980186505",
            "extra": "mean: 76.13176923076882 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.304468807292567,
            "unit": "iter/sec",
            "range": "stddev: 0.004540845438539768",
            "extra": "mean: 81.27128571428648 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.02470213510392,
            "unit": "iter/sec",
            "range": "stddev: 0.000403671613636225",
            "extra": "mean: 6.0596988636362505 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.4981896860996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814649630859176",
            "extra": "mean: 4.040433593749892 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 449.21582541779776,
            "unit": "iter/sec",
            "range": "stddev: 0.0001778018386744701",
            "extra": "mean: 2.226101449275389 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.46579923432563,
            "unit": "iter/sec",
            "range": "stddev: 0.00022780812750028255",
            "extra": "mean: 2.350365180467183 msec\nrounds: 471"
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
        "date": 1643842986881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.54827661040011,
            "unit": "iter/sec",
            "range": "stddev: 0.00048529548698950553",
            "extra": "mean: 8.02901515151513 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.88662669911685,
            "unit": "iter/sec",
            "range": "stddev: 0.00032012035783966585",
            "extra": "mean: 6.456335329341265 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.9406007921374,
            "unit": "iter/sec",
            "range": "stddev: 0.00024077900673331428",
            "extra": "mean: 4.740671052631581 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.1955861070292,
            "unit": "iter/sec",
            "range": "stddev: 0.00033319252811911355",
            "extra": "mean: 3.387584527220639 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.59932841121824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008517962852466246",
            "extra": "mean: 9.842584745762784 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.30061462757956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441607917378462",
            "extra": "mean: 7.283288590604242 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.95242675839862,
            "unit": "iter/sec",
            "range": "stddev: 0.0005431978377836123",
            "extra": "mean: 5.32049528301882 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.3238280128173,
            "unit": "iter/sec",
            "range": "stddev: 0.00036375483206142837",
            "extra": "mean: 3.386113496932592 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.013217972117337,
            "unit": "iter/sec",
            "range": "stddev: 0.004304010305376245",
            "extra": "mean: 83.24164285714275 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.970481038083339,
            "unit": "iter/sec",
            "range": "stddev: 0.002930055128311552",
            "extra": "mean: 77.09814285714194 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.01794376081565,
            "unit": "iter/sec",
            "range": "stddev: 0.0008267860771504544",
            "extra": "mean: 6.3686988636362045 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.19075163599223,
            "unit": "iter/sec",
            "range": "stddev: 0.00041500205852297356",
            "extra": "mean: 4.325432539682604 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.19067202014327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639833997801181",
            "extra": "mean: 2.17301232032845 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 407.74719673802736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453631694981098",
            "extra": "mean: 2.4524999999999704 msec\nrounds: 466"
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
        "date": 1643898715106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.11225648073741,
            "unit": "iter/sec",
            "range": "stddev: 0.0003550008738367398",
            "extra": "mean: 7.805654411764709 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.30454924281602,
            "unit": "iter/sec",
            "range": "stddev: 0.00036870177470367234",
            "extra": "mean: 6.522963636363588 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.10864976508634,
            "unit": "iter/sec",
            "range": "stddev: 0.00029762490848473007",
            "extra": "mean: 4.828383561643868 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.75864079958427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113025194300223",
            "extra": "mean: 3.107919642857007 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.56342637523912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262602906532036",
            "extra": "mean: 9.384082644628235 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.89178894119775,
            "unit": "iter/sec",
            "range": "stddev: 0.0004170130025277885",
            "extra": "mean: 7.047624161074016 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.68066260310525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667834897687769",
            "extra": "mean: 5.0843839285713885 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.8486138734907,
            "unit": "iter/sec",
            "range": "stddev: 0.00019440736167471626",
            "extra": "mean: 3.2483498542272025 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.858216586107568,
            "unit": "iter/sec",
            "range": "stddev: 0.0012151693523718683",
            "extra": "mean: 72.15935714285696 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.239632044146155,
            "unit": "iter/sec",
            "range": "stddev: 0.00964364627395455",
            "extra": "mean: 75.53080000000041 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.2662448185912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563287947896763",
            "extra": "mean: 6.050842391304262 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.6909704148169,
            "unit": "iter/sec",
            "range": "stddev: 0.00030644695171799834",
            "extra": "mean: 4.2071434108532015 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.77643322302515,
            "unit": "iter/sec",
            "range": "stddev: 0.000141466672115954",
            "extra": "mean: 2.243276955602749 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.8239797295307,
            "unit": "iter/sec",
            "range": "stddev: 0.00015507535244291097",
            "extra": "mean: 2.3104080338268096 msec\nrounds: 473"
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
        "date": 1643988701230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.68181083147816,
            "unit": "iter/sec",
            "range": "stddev: 0.0006469405081008488",
            "extra": "mean: 8.355488549618308 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.88631564851352,
            "unit": "iter/sec",
            "range": "stddev: 0.00035324000779259074",
            "extra": "mean: 6.627506250000026 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.6144849604479,
            "unit": "iter/sec",
            "range": "stddev: 0.0003722967951091796",
            "extra": "mean: 5.060357798165189 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.6546188314236,
            "unit": "iter/sec",
            "range": "stddev: 0.00016898932550654447",
            "extra": "mean: 3.219008955223836 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.3161174564518,
            "unit": "iter/sec",
            "range": "stddev: 0.0005592314172874365",
            "extra": "mean: 8.903441666666662 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.16514240239982,
            "unit": "iter/sec",
            "range": "stddev: 0.000997337468614235",
            "extra": "mean: 7.742026845637732 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.24204712949881,
            "unit": "iter/sec",
            "range": "stddev: 0.00045556705064960537",
            "extra": "mean: 5.228975609756226 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.95093210452586,
            "unit": "iter/sec",
            "range": "stddev: 0.00018546831896138142",
            "extra": "mean: 3.257849693251527 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.31920229394716,
            "unit": "iter/sec",
            "range": "stddev: 0.002550660117100929",
            "extra": "mean: 75.07957142857157 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.283413002184354,
            "unit": "iter/sec",
            "range": "stddev: 0.003283718409578986",
            "extra": "mean: 75.28185714285611 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.09885129549838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653731899114352",
            "extra": "mean: 6.489341040462464 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.4325997267649,
            "unit": "iter/sec",
            "range": "stddev: 0.00023583686978251441",
            "extra": "mean: 4.435915662650601 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.76689896334074,
            "unit": "iter/sec",
            "range": "stddev: 0.00009753256632035458",
            "extra": "mean: 2.1655948103794014 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.3725670002384,
            "unit": "iter/sec",
            "range": "stddev: 0.00008992439133280857",
            "extra": "mean: 2.2863802521008476 msec\nrounds: 476"
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
        "date": 1643989226600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.45136070252093,
            "unit": "iter/sec",
            "range": "stddev: 0.0010366414230391177",
            "extra": "mean: 8.661656250000044 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.5947410454094,
            "unit": "iter/sec",
            "range": "stddev: 0.0010534683566482013",
            "extra": "mean: 7.71636249999994 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.2157452304784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007401977665245949",
            "extra": "mean: 5.175561643835728 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.15966761221614,
            "unit": "iter/sec",
            "range": "stddev: 0.00031997306721628856",
            "extra": "mean: 3.2241458333334037 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.57105751256177,
            "unit": "iter/sec",
            "range": "stddev: 0.001264485590663499",
            "extra": "mean: 9.472293103448463 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.65940330898079,
            "unit": "iter/sec",
            "range": "stddev: 0.001228631847712667",
            "extra": "mean: 7.595355704697985 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.02954421592804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554712253700424",
            "extra": "mean: 5.26233962264159 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.8981866763152,
            "unit": "iter/sec",
            "range": "stddev: 0.00045241043957992735",
            "extra": "mean: 3.473450151057405 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.654433594588177,
            "unit": "iter/sec",
            "range": "stddev: 0.0021465530303461855",
            "extra": "mean: 73.23628571428564 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.936598654039425,
            "unit": "iter/sec",
            "range": "stddev: 0.0029595991013426095",
            "extra": "mean: 77.30007142857076 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.43379198894291,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492134625623491",
            "extra": "mean: 6.782705555555385 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.68214147874562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418112077451315",
            "extra": "mean: 4.55203137254901 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 410.8636146956175,
            "unit": "iter/sec",
            "range": "stddev: 0.0003601069784558188",
            "extra": "mean: 2.4338976833975328 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 416.85754354186076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220123380942052",
            "extra": "mean: 2.3989010526316172 msec\nrounds: 475"
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
        "date": 1644011698062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.74592092777631,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711997429609064",
            "extra": "mean: 8.35101515151519 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.05916938600075,
            "unit": "iter/sec",
            "range": "stddev: 0.00026901582188109134",
            "extra": "mean: 6.846540372670684 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.16101133563578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005044155806402819",
            "extra": "mean: 5.314597285067898 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.38875177678364,
            "unit": "iter/sec",
            "range": "stddev: 0.000242991972478452",
            "extra": "mean: 3.1606686217009163 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.26944651811625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586891640595013",
            "extra": "mean: 9.151689075630173 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.9044046666858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006911454455075849",
            "extra": "mean: 7.251399999999961 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.74321333795288,
            "unit": "iter/sec",
            "range": "stddev: 0.00041078223318112935",
            "extra": "mean: 5.242650485436832 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.47297248285344,
            "unit": "iter/sec",
            "range": "stddev: 0.00023797468358348426",
            "extra": "mean: 3.200276785714239 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.713230386436802,
            "unit": "iter/sec",
            "range": "stddev: 0.004383953224388812",
            "extra": "mean: 78.65821428571428 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.553178801279556,
            "unit": "iter/sec",
            "range": "stddev: 0.0031621672148236576",
            "extra": "mean: 73.78342857142783 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.34700641030034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797434228031375",
            "extra": "mean: 6.197821839080372 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.4615616868899,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907778885600988",
            "extra": "mean: 4.176035573122833 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.4241614300908,
            "unit": "iter/sec",
            "range": "stddev: 0.00019068803199386275",
            "extra": "mean: 2.1532040816324516 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.1672453107073,
            "unit": "iter/sec",
            "range": "stddev: 0.0002516902059578407",
            "extra": "mean: 2.330093945720445 msec\nrounds: 479"
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
        "date": 1644244713130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.79100780022402,
            "unit": "iter/sec",
            "range": "stddev: 0.0005436280292527734",
            "extra": "mean: 8.562303030303003 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.97796481559908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005200000924326533",
            "extra": "mean: 6.803740963855474 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.7869857198587,
            "unit": "iter/sec",
            "range": "stddev: 0.00028237765353310344",
            "extra": "mean: 4.835894273127679 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.2645773340019,
            "unit": "iter/sec",
            "range": "stddev: 0.00015009158153947807",
            "extra": "mean: 3.064997150997134 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.94755775540106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796460404688218",
            "extra": "mean: 8.77596694214888 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.39548036789034,
            "unit": "iter/sec",
            "range": "stddev: 0.00048527930851845766",
            "extra": "mean: 7.072361842105182 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.2438089429622,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271403738801362",
            "extra": "mean: 5.018976525821544 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.9733557578265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013093311637922916",
            "extra": "mean: 3.105847058823569 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.54803747000075,
            "unit": "iter/sec",
            "range": "stddev: 0.0011097440255294793",
            "extra": "mean: 73.8114285714287 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.927447284612102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006414620205505259",
            "extra": "mean: 71.80066666666627 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.0812431774088,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024425638443297",
            "extra": "mean: 5.845176136363554 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.89932259916878,
            "unit": "iter/sec",
            "range": "stddev: 0.00012076232670866333",
            "extra": "mean: 4.0667049808431655 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.99617410643566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008175647730471074",
            "extra": "mean: 2.109721669980084 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.41730192297666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007740095272489604",
            "extra": "mean: 2.195788336933073 msec\nrounds: 463"
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
        "date": 1644419255902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.92442549068599,
            "unit": "iter/sec",
            "range": "stddev: 0.00042724860024604175",
            "extra": "mean: 8.004839694656486 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.54838444873377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737828889852097",
            "extra": "mean: 6.9180987654321715 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.93206282778806,
            "unit": "iter/sec",
            "range": "stddev: 0.00017383923136852082",
            "extra": "mean: 4.71849321266967 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.4094260207563,
            "unit": "iter/sec",
            "range": "stddev: 0.00010915417575710343",
            "extra": "mean: 3.0449795918366775 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.94003804326819,
            "unit": "iter/sec",
            "range": "stddev: 0.0003590195862880506",
            "extra": "mean: 8.700188524590175 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.5974050412384,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012059390536738",
            "extra": "mean: 7.062276315789566 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.42968780274336,
            "unit": "iter/sec",
            "range": "stddev: 0.00025772277639782764",
            "extra": "mean: 5.014298578199168 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.0833361795412,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853810551410396",
            "extra": "mean: 3.2145727002967837 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.693217162687088,
            "unit": "iter/sec",
            "range": "stddev: 0.002405977679324661",
            "extra": "mean: 73.02885714285752 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.551555537888419,
            "unit": "iter/sec",
            "range": "stddev: 0.0017377264484167352",
            "extra": "mean: 73.79226666666625 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.09699885168808,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215487279927399",
            "extra": "mean: 6.020578378378309 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.8263678937788,
            "unit": "iter/sec",
            "range": "stddev: 0.00036117836187705185",
            "extra": "mean: 4.1523692307690725 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.0687053494317,
            "unit": "iter/sec",
            "range": "stddev: 0.00011044746394818691",
            "extra": "mean: 2.087383268482549 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.1396288618014,
            "unit": "iter/sec",
            "range": "stddev: 0.00017976581511470013",
            "extra": "mean: 2.266855967078116 msec\nrounds: 486"
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
        "date": 1644421185041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.09968965676056,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980512160625661",
            "extra": "mean: 8.058037878787903 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.421494585093,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654596678376407",
            "extra": "mean: 6.3523726708074015 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.67318449017316,
            "unit": "iter/sec",
            "range": "stddev: 0.00020922140480885996",
            "extra": "mean: 4.680044444444501 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.6661581118894,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286511883044667",
            "extra": "mean: 3.0150800000000135 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.84811308965239,
            "unit": "iter/sec",
            "range": "stddev: 0.0004342090144062005",
            "extra": "mean: 8.631992125984143 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.37965266973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701345747691847",
            "extra": "mean: 6.974490322580603 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.35310821804325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112425047888528",
            "extra": "mean: 5.171884792626687 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.99837977347863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461597605637654",
            "extra": "mean: 3.076938416422237 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.756348008054843,
            "unit": "iter/sec",
            "range": "stddev: 0.004383504160517755",
            "extra": "mean: 85.0604285714281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.800315984943039,
            "unit": "iter/sec",
            "range": "stddev: 0.003811904015747013",
            "extra": "mean: 78.12307142857223 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.95121217733043,
            "unit": "iter/sec",
            "range": "stddev: 0.00043356813393643443",
            "extra": "mean: 6.02586740331508 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.56653914949788,
            "unit": "iter/sec",
            "range": "stddev: 0.00041053552455615975",
            "extra": "mean: 4.12258015267177 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 494.01787482135876,
            "unit": "iter/sec",
            "range": "stddev: 0.00015223345831041684",
            "extra": "mean: 2.0242182539682574 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 457.84263403844943,
            "unit": "iter/sec",
            "range": "stddev: 0.00008818999621640526",
            "extra": "mean: 2.1841565762004165 msec\nrounds: 479"
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
        "date": 1644539848271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.50221398376587,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942654824250614",
            "extra": "mean: 8.368045801526723 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.36507648193432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002260950111098832",
            "extra": "mean: 6.606543750000032 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.80715048303688,
            "unit": "iter/sec",
            "range": "stddev: 0.00024211293981774438",
            "extra": "mean: 4.955225806451572 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.5996746168,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263536304813054",
            "extra": "mean: 3.1094558823529392 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.48778017901945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667156757574317",
            "extra": "mean: 8.811521367521387 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.74467177470132,
            "unit": "iter/sec",
            "range": "stddev: 0.00026784663386899654",
            "extra": "mean: 7.155907894736886 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.47560844721374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527949213949335",
            "extra": "mean: 5.142033018867909 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.32754001543225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012155460933213768",
            "extra": "mean: 3.2120512048193066 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.579681692261143,
            "unit": "iter/sec",
            "range": "stddev: 0.0010086344702151513",
            "extra": "mean: 73.63942857142851 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.837889128855522,
            "unit": "iter/sec",
            "range": "stddev: 0.0024100650360575873",
            "extra": "mean: 72.2653571428568 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.46636469351654,
            "unit": "iter/sec",
            "range": "stddev: 0.00018559272635717433",
            "extra": "mean: 6.0802705882354875 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.07977836937323,
            "unit": "iter/sec",
            "range": "stddev: 0.00014846495206396568",
            "extra": "mean: 4.20027272727267 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.34787161895184,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086397250737776",
            "extra": "mean: 2.191310756972249 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.6982045885465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006307469243219391",
            "extra": "mean: 2.3272147505422804 msec\nrounds: 461"
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
        "date": 1644540595207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.6258066850822,
            "unit": "iter/sec",
            "range": "stddev: 0.0007679913481626849",
            "extra": "mean: 8.290100000000002 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.94221411534693,
            "unit": "iter/sec",
            "range": "stddev: 0.00048445983431143886",
            "extra": "mean: 6.538417177914096 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.1801809534294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003731873551671428",
            "extra": "mean: 4.850126696832579 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.49523174946825,
            "unit": "iter/sec",
            "range": "stddev: 0.00022761226298153239",
            "extra": "mean: 3.159605263157903 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.56433755418587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005448075490264773",
            "extra": "mean: 8.883808333333132 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.3829630094151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008264418194067506",
            "extra": "mean: 7.553842105263045 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.42554102448605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003690400982101898",
            "extra": "mean: 5.014402843601748 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.7907668334392,
            "unit": "iter/sec",
            "range": "stddev: 0.00023539397232667463",
            "extra": "mean: 3.156657657657603 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.473127093146662,
            "unit": "iter/sec",
            "range": "stddev: 0.00645855388204307",
            "extra": "mean: 80.17235714285701 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.08953146022143,
            "unit": "iter/sec",
            "range": "stddev: 0.002869694662510871",
            "extra": "mean: 76.39692857142829 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.20333301548143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012707755315532",
            "extra": "mean: 6.12732584269673 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.12252195685065,
            "unit": "iter/sec",
            "range": "stddev: 0.0004385971775422138",
            "extra": "mean: 4.364477099236558 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.8006184612337,
            "unit": "iter/sec",
            "range": "stddev: 0.00011104604954983161",
            "extra": "mean: 2.1607577002055467 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.1478821644995,
            "unit": "iter/sec",
            "range": "stddev: 0.00013224521689973555",
            "extra": "mean: 2.2719636752137387 msec\nrounds: 468"
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
        "date": 1644599039884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.29250661608738,
            "unit": "iter/sec",
            "range": "stddev: 0.000547228288543269",
            "extra": "mean: 8.313069767441894 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.6506448072289,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847052579507286",
            "extra": "mean: 6.727182389937201 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.8694825781752,
            "unit": "iter/sec",
            "range": "stddev: 0.00028938847168854447",
            "extra": "mean: 4.85744651162791 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.8049849955779,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564365476160564",
            "extra": "mean: 3.1269056047197874 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.2136890023634,
            "unit": "iter/sec",
            "range": "stddev: 0.0009372650713676358",
            "extra": "mean: 9.504466666666705 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.4614251228178,
            "unit": "iter/sec",
            "range": "stddev: 0.00045151242826770775",
            "extra": "mean: 7.069064935064757 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.49148910757373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005861858836138026",
            "extra": "mean: 5.391082926829387 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.22618044261657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502219576189976",
            "extra": "mean: 3.555856707316932 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.626166132164165,
            "unit": "iter/sec",
            "range": "stddev: 0.0015646985543338184",
            "extra": "mean: 73.38821428571381 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.691735866845494,
            "unit": "iter/sec",
            "range": "stddev: 0.0036744775392992517",
            "extra": "mean: 78.79142857142897 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.15109029153405,
            "unit": "iter/sec",
            "range": "stddev: 0.00046825872439470783",
            "extra": "mean: 6.091948571428857 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.03387765622023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202111905854796",
            "extra": "mean: 4.201082677165169 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.53589972402585,
            "unit": "iter/sec",
            "range": "stddev: 0.00016661406367062554",
            "extra": "mean: 2.1904082474225928 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 403.27430435186807,
            "unit": "iter/sec",
            "range": "stddev: 0.00022579182008843307",
            "extra": "mean: 2.4797017543857 msec\nrounds: 456"
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
        "date": 1644601248909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.99787118717181,
            "unit": "iter/sec",
            "range": "stddev: 0.0007593851302344176",
            "extra": "mean: 8.547164062500007 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.81325174239382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637227973164915",
            "extra": "mean: 6.811374233128848 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.4667986435459,
            "unit": "iter/sec",
            "range": "stddev: 0.00035250435037555784",
            "extra": "mean: 4.890769585253471 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.4592467348016,
            "unit": "iter/sec",
            "range": "stddev: 0.00025704475297875357",
            "extra": "mean: 3.1800623145400695 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.22231384768348,
            "unit": "iter/sec",
            "range": "stddev: 0.0013139574264419034",
            "extra": "mean: 10.078378151260447 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.5651094756937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004627425736425153",
            "extra": "mean: 7.1141409395972355 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.6948527491897,
            "unit": "iter/sec",
            "range": "stddev: 0.00035633222743302473",
            "extra": "mean: 5.162759803921446 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.6512243517347,
            "unit": "iter/sec",
            "range": "stddev: 0.000278275127333645",
            "extra": "mean: 3.3150868263474007 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.246059123973543,
            "unit": "iter/sec",
            "range": "stddev: 0.002466554765306508",
            "extra": "mean: 81.65892307692246 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.707541381200638,
            "unit": "iter/sec",
            "range": "stddev: 0.0036476715589811664",
            "extra": "mean: 78.69342857142973 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.3271206476646,
            "unit": "iter/sec",
            "range": "stddev: 0.0005771614232162563",
            "extra": "mean: 6.3968426966286565 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.60647266093264,
            "unit": "iter/sec",
            "range": "stddev: 0.0009836405977926342",
            "extra": "mean: 4.638079681274789 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.75566061354795,
            "unit": "iter/sec",
            "range": "stddev: 0.00011882845016724817",
            "extra": "mean: 2.2135859872610317 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 428.3682109088187,
            "unit": "iter/sec",
            "range": "stddev: 0.00010178900165781308",
            "extra": "mean: 2.334440265486594 msec\nrounds: 452"
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
        "date": 1644601882660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.31614348719997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005221220280316293",
            "extra": "mean: 8.044007575757556 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.5420278929508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003493517765430467",
            "extra": "mean: 6.470731707317097 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.94128716597507,
            "unit": "iter/sec",
            "range": "stddev: 0.00033641868160005824",
            "extra": "mean: 4.809049773755693 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.83054502685184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278862135379273",
            "extra": "mean: 3.0318598901099016 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.58425202671773,
            "unit": "iter/sec",
            "range": "stddev: 0.0004322183602251759",
            "extra": "mean: 8.577487804878047 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.66710836693207,
            "unit": "iter/sec",
            "range": "stddev: 0.00046426972986575915",
            "extra": "mean: 6.864967741935422 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.23499336969408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001879335439202312",
            "extra": "mean: 4.896320574162623 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.46378589490587,
            "unit": "iter/sec",
            "range": "stddev: 0.00012579522713174123",
            "extra": "mean: 3.072538461538408 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.1538521525809,
            "unit": "iter/sec",
            "range": "stddev: 0.0030142837293623058",
            "extra": "mean: 76.02335714285731 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.585835795766087,
            "unit": "iter/sec",
            "range": "stddev: 0.0014814365410898277",
            "extra": "mean: 73.60607142857134 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.5732532770765,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781035861099423",
            "extra": "mean: 5.897156424580925 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.1163139617061,
            "unit": "iter/sec",
            "range": "stddev: 0.00036667926651317065",
            "extra": "mean: 4.253214007782004 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.02588130473515,
            "unit": "iter/sec",
            "range": "stddev: 0.00010281475538137054",
            "extra": "mean: 2.0788902195607415 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.7511343778045,
            "unit": "iter/sec",
            "range": "stddev: 0.00013466585661709788",
            "extra": "mean: 2.203851239669574 msec\nrounds: 484"
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
        "date": 1644602221753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.66821044366107,
            "unit": "iter/sec",
            "range": "stddev: 0.00042788231508010874",
            "extra": "mean: 8.021291044776094 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.52700887349496,
            "unit": "iter/sec",
            "range": "stddev: 0.000395174864471648",
            "extra": "mean: 6.51351190476193 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.72634525151076,
            "unit": "iter/sec",
            "range": "stddev: 0.00022596976125417706",
            "extra": "mean: 4.768118181818155 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.5191902002009,
            "unit": "iter/sec",
            "range": "stddev: 0.00019850292834578127",
            "extra": "mean: 3.0439622093022813 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.324884144169,
            "unit": "iter/sec",
            "range": "stddev: 0.0004219429643899488",
            "extra": "mean: 8.596612903225719 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.828894378829,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990383104474057",
            "extra": "mean: 6.952705882352912 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.63169120868866,
            "unit": "iter/sec",
            "range": "stddev: 0.00021594980488050123",
            "extra": "mean: 4.935062200957049 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.3462115528835,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868146709887025",
            "extra": "mean: 3.1022545454545902 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.519242227159856,
            "unit": "iter/sec",
            "range": "stddev: 0.0011691849631354067",
            "extra": "mean: 73.96864285714345 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.56007062859625,
            "unit": "iter/sec",
            "range": "stddev: 0.002321626799144976",
            "extra": "mean: 73.74592857142963 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.96031402609702,
            "unit": "iter/sec",
            "range": "stddev: 0.00030268677469881544",
            "extra": "mean: 5.849310734462914 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.36463767952057,
            "unit": "iter/sec",
            "range": "stddev: 0.00017836367295440028",
            "extra": "mean: 4.0922451361865235 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.2116844200709,
            "unit": "iter/sec",
            "range": "stddev: 0.00013543964017899494",
            "extra": "mean: 2.140357429718941 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.91224357633155,
            "unit": "iter/sec",
            "range": "stddev: 0.00009808206477270081",
            "extra": "mean: 2.2887891440499155 msec\nrounds: 479"
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
        "date": 1644603707281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.76145836613182,
            "unit": "iter/sec",
            "range": "stddev: 0.00021088967871951832",
            "extra": "mean: 7.706448529411746 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.94312974842111,
            "unit": "iter/sec",
            "range": "stddev: 0.0005817376100281565",
            "extra": "mean: 6.625011695906353 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.9367714522768,
            "unit": "iter/sec",
            "range": "stddev: 0.00014925802212037643",
            "extra": "mean: 4.674278260869575 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.9827926704271,
            "unit": "iter/sec",
            "range": "stddev: 0.0010007121426269289",
            "extra": "mean: 3.390028248587576 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.51760061400724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707649672292001",
            "extra": "mean: 9.85050862068958 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.09910634138566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569594361175894",
            "extra": "mean: 7.087217105263061 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.01413159701661,
            "unit": "iter/sec",
            "range": "stddev: 0.00037843274823065327",
            "extra": "mean: 5.10167298578191 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.8572682389626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712132305488332",
            "extra": "mean: 3.1861616766466803 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.813918111740975,
            "unit": "iter/sec",
            "range": "stddev: 0.0027788046643540637",
            "extra": "mean: 78.04014285714318 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.089176559902691,
            "unit": "iter/sec",
            "range": "stddev: 0.0029810786122325887",
            "extra": "mean: 76.39899999999956 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.71529370702987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299852653786576",
            "extra": "mean: 6.108164835165063 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.74409707242825,
            "unit": "iter/sec",
            "range": "stddev: 0.00024228412603932053",
            "extra": "mean: 4.085900383142093 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.2787618656397,
            "unit": "iter/sec",
            "range": "stddev: 0.00011669007000142647",
            "extra": "mean: 2.121886409736192 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.6407437038715,
            "unit": "iter/sec",
            "range": "stddev: 0.00012395656587253854",
            "extra": "mean: 2.2289549356222915 msec\nrounds: 466"
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
        "date": 1644938674561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.76017374979241,
            "unit": "iter/sec",
            "range": "stddev: 0.00032783568579309344",
            "extra": "mean: 7.706524822695067 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.00395871624528,
            "unit": "iter/sec",
            "range": "stddev: 0.0004299014956866804",
            "extra": "mean: 6.097413793103433 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.02217423143543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001885086293329918",
            "extra": "mean: 4.504054621848726 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.84903166484787,
            "unit": "iter/sec",
            "range": "stddev: 0.00023828076189774834",
            "extra": "mean: 3.059516483516474 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.75039870852643,
            "unit": "iter/sec",
            "range": "stddev: 0.000629915893383563",
            "extra": "mean: 8.281546153846264 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.60939406783234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003475482087697496",
            "extra": "mean: 6.510018518518536 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.93996963749285,
            "unit": "iter/sec",
            "range": "stddev: 0.00012078605313823794",
            "extra": "mean: 4.718317180616868 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.1097772610556,
            "unit": "iter/sec",
            "range": "stddev: 0.00017852798857735555",
            "extra": "mean: 2.940227146814533 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.791835233541674,
            "unit": "iter/sec",
            "range": "stddev: 0.0013439530533182263",
            "extra": "mean: 72.50666666666703 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.077065363568495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005567853993713926",
            "extra": "mean: 71.03753333333268 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.9824145635992,
            "unit": "iter/sec",
            "range": "stddev: 0.00017408800306385814",
            "extra": "mean: 5.61853260869582 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.93138933328794,
            "unit": "iter/sec",
            "range": "stddev: 0.00016171936130033213",
            "extra": "mean: 3.847169064748025 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 490.5583388117217,
            "unit": "iter/sec",
            "range": "stddev: 0.00013672854444296017",
            "extra": "mean: 2.0384935304989367 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.4674279234908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001680233152185146",
            "extra": "mean: 2.3123128712872987 msec\nrounds: 505"
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
        "date": 1644939203388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.69935175230985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504598012834693",
            "extra": "mean: 8.019287878787843 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.69124385427867,
            "unit": "iter/sec",
            "range": "stddev: 0.00026103158897120997",
            "extra": "mean: 6.301544910179603 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.0254706826061,
            "unit": "iter/sec",
            "range": "stddev: 0.00027686510948391",
            "extra": "mean: 4.694274336283167 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.4055667320057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002251905664786671",
            "extra": "mean: 3.063673239436652 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.3219946626453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466301107340116",
            "extra": "mean: 8.596826446281117 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1967062659271,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084475629231068",
            "extra": "mean: 7.082318181818063 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.79130898722715,
            "unit": "iter/sec",
            "range": "stddev: 0.00024303731667771973",
            "extra": "mean: 4.980295238095254 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.49809195795154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530956314430831",
            "extra": "mean: 3.21029253731348 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.18344385453763,
            "unit": "iter/sec",
            "range": "stddev: 0.0040249416322292834",
            "extra": "mean: 75.85271428571438 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.80280031212739,
            "unit": "iter/sec",
            "range": "stddev: 0.0017149417094068768",
            "extra": "mean: 72.44906666666633 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.89515453259938,
            "unit": "iter/sec",
            "range": "stddev: 0.00040392238051856964",
            "extra": "mean: 5.8859830508475195 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.02012472596232,
            "unit": "iter/sec",
            "range": "stddev: 0.00022143767744191463",
            "extra": "mean: 3.9996780303028103 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.0093977333296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001851516971317283",
            "extra": "mean: 2.0789614604461377 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 465.56158366024164,
            "unit": "iter/sec",
            "range": "stddev: 0.00008766546167347581",
            "extra": "mean: 2.147943548387321 msec\nrounds: 496"
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
        "date": 1644940190213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.79785647022467,
            "unit": "iter/sec",
            "range": "stddev: 0.00022721105667614542",
            "extra": "mean: 7.587376811594177 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.38813929709832,
            "unit": "iter/sec",
            "range": "stddev: 0.0001676677348549193",
            "extra": "mean: 6.234875000000026 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.74675473602207,
            "unit": "iter/sec",
            "range": "stddev: 0.00017730294140880012",
            "extra": "mean: 4.530077922077906 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.5640786816219,
            "unit": "iter/sec",
            "range": "stddev: 0.00015812015437579685",
            "extra": "mean: 2.9800567567566874 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.73231552606345,
            "unit": "iter/sec",
            "range": "stddev: 0.0008004664972210066",
            "extra": "mean: 9.030787401574985 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.99714547873768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003279266198033384",
            "extra": "mean: 6.7115379746835675 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.16508109466886,
            "unit": "iter/sec",
            "range": "stddev: 0.000504128567142636",
            "extra": "mean: 4.9710416666667765 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.226427761033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478771143504645",
            "extra": "mean: 3.3757960339943196 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.429106289892644,
            "unit": "iter/sec",
            "range": "stddev: 0.003764435756405318",
            "extra": "mean: 80.45630769230773 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.345000676782467,
            "unit": "iter/sec",
            "range": "stddev: 0.0018068330012785433",
            "extra": "mean: 74.93442857142695 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.0476804564273,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620745141258944",
            "extra": "mean: 6.40829775280913 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.52532290847472,
            "unit": "iter/sec",
            "range": "stddev: 0.0004162045759596288",
            "extra": "mean: 4.123280769230784 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.4357520071335,
            "unit": "iter/sec",
            "range": "stddev: 0.00022671280909520528",
            "extra": "mean: 2.234957746479 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.08777939726156,
            "unit": "iter/sec",
            "range": "stddev: 0.00019296536727465315",
            "extra": "mean: 2.28264755838622 msec\nrounds: 471"
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
        "date": 1645454558808,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.29691901941618,
            "unit": "iter/sec",
            "range": "stddev: 0.00041178106363085255",
            "extra": "mean: 8.382446153846145 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.4313210152602,
            "unit": "iter/sec",
            "range": "stddev: 0.00018790736470070354",
            "extra": "mean: 6.517574074074096 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.84354873386445,
            "unit": "iter/sec",
            "range": "stddev: 0.00035299781079914855",
            "extra": "mean: 4.929907834101363 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.32091819152225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001492094023240655",
            "extra": "mean: 3.141483775811227 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.81596173670171,
            "unit": "iter/sec",
            "range": "stddev: 0.0002400081377754559",
            "extra": "mean: 8.634388429752194 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.1764753966739,
            "unit": "iter/sec",
            "range": "stddev: 0.0002424070338305258",
            "extra": "mean: 6.84104605263149 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.65721747114347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003948589425669241",
            "extra": "mean: 5.328865116279221 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.78684576652597,
            "unit": "iter/sec",
            "range": "stddev: 0.00007282973644947707",
            "extra": "mean: 3.107647230320766 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.037057832678315,
            "unit": "iter/sec",
            "range": "stddev: 0.0010704167412736527",
            "extra": "mean: 71.23999999999978 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.71939716968851,
            "unit": "iter/sec",
            "range": "stddev: 0.002495263752053036",
            "extra": "mean: 72.88949999999923 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.3516057141827,
            "unit": "iter/sec",
            "range": "stddev: 0.00018400396150340507",
            "extra": "mean: 5.8702117647062755 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.08341083050777,
            "unit": "iter/sec",
            "range": "stddev: 0.00011808688456619652",
            "extra": "mean: 4.063662790698067 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 475.2928210901383,
            "unit": "iter/sec",
            "range": "stddev: 0.00005928937837257678",
            "extra": "mean: 2.1039661354581076 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.2339997997688,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776079904930631",
            "extra": "mean: 2.2015084745765634 msec\nrounds: 472"
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
        "date": 1645922684353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.52054621429171,
            "unit": "iter/sec",
            "range": "stddev: 0.000664490719731798",
            "extra": "mean: 8.509150375939877 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.90125517242654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003660880300153126",
            "extra": "mean: 6.455725609756109 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.9524762648728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002252795957359959",
            "extra": "mean: 4.6958834080717065 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.721250904592,
            "unit": "iter/sec",
            "range": "stddev: 0.00019753830806211432",
            "extra": "mean: 3.0145792507204034 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.84579493759354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006027127563310508",
            "extra": "mean: 8.78381147540993 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.66446537899768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670274154514892",
            "extra": "mean: 7.009453947368276 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.30764530665553,
            "unit": "iter/sec",
            "range": "stddev: 0.00033700255741857005",
            "extra": "mean: 4.8945794392522615 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.1429526180793,
            "unit": "iter/sec",
            "range": "stddev: 0.00016187196419127213",
            "extra": "mean: 3.1042119402983275 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.165764498328036,
            "unit": "iter/sec",
            "range": "stddev: 0.001151793899452194",
            "extra": "mean: 75.95457142857092 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.101008777675847,
            "unit": "iter/sec",
            "range": "stddev: 0.0023367391151579617",
            "extra": "mean: 76.3300000000002 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.8613728877211,
            "unit": "iter/sec",
            "range": "stddev: 0.000517106296753279",
            "extra": "mean: 6.065702247190737 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.77806788512476,
            "unit": "iter/sec",
            "range": "stddev: 0.0002581809558552015",
            "extra": "mean: 4.085333333333213 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.88282388053767,
            "unit": "iter/sec",
            "range": "stddev: 0.00016647299551129954",
            "extra": "mean: 2.165051282051229 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.2326625647484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001976744457344003",
            "extra": "mean: 2.29762167689157 msec\nrounds: 489"
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
        "date": 1646063624377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.35908357833512,
            "unit": "iter/sec",
            "range": "stddev: 0.00031927267975809004",
            "extra": "mean: 7.91395419847327 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.0723269586519,
            "unit": "iter/sec",
            "range": "stddev: 0.0001984345957274588",
            "extra": "mean: 6.366493827160544 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.61024217475142,
            "unit": "iter/sec",
            "range": "stddev: 0.00035734373946515993",
            "extra": "mean: 4.840031111111121 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.5668301066106,
            "unit": "iter/sec",
            "range": "stddev: 0.00024468263980229445",
            "extra": "mean: 3.1001327683614988 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.34267495506322,
            "unit": "iter/sec",
            "range": "stddev: 0.000395134379583286",
            "extra": "mean: 8.522048780488031 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.01657251520422,
            "unit": "iter/sec",
            "range": "stddev: 0.00024913717791468534",
            "extra": "mean: 6.80195424836599 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.0167134466963,
            "unit": "iter/sec",
            "range": "stddev: 0.00021175771139010345",
            "extra": "mean: 4.9257028301886985 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.4371259322813,
            "unit": "iter/sec",
            "range": "stddev: 0.00013220914284870297",
            "extra": "mean: 3.140337349397695 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.148688183555619,
            "unit": "iter/sec",
            "range": "stddev: 0.0028178128501103166",
            "extra": "mean: 76.05321428571469 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.63715707095686,
            "unit": "iter/sec",
            "range": "stddev: 0.0030931444580067752",
            "extra": "mean: 73.32906666666663 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.8349628752882,
            "unit": "iter/sec",
            "range": "stddev: 0.00025485052047525023",
            "extra": "mean: 5.922943820224375 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.28008408949017,
            "unit": "iter/sec",
            "range": "stddev: 0.00018390122562950405",
            "extra": "mean: 4.110488549618191 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.3947987049133,
            "unit": "iter/sec",
            "range": "stddev: 0.00008721608438452577",
            "extra": "mean: 2.085963391137124 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.39612051210673,
            "unit": "iter/sec",
            "range": "stddev: 0.00014764910367544865",
            "extra": "mean: 2.200723014256801 msec\nrounds: 491"
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
        "date": 1646086975530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.89516271608466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006023731856950594",
            "extra": "mean: 8.203770992366419 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.62813984517044,
            "unit": "iter/sec",
            "range": "stddev: 0.0003840710418208409",
            "extra": "mean: 6.4255731707316475 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.91132456633466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906957727344422",
            "extra": "mean: 4.856459459459445 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7127933992165,
            "unit": "iter/sec",
            "range": "stddev: 0.00034592787125551993",
            "extra": "mean: 3.1180545977011316 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.07941125237853,
            "unit": "iter/sec",
            "range": "stddev: 0.0004321906123959161",
            "extra": "mean: 8.541211382113817 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.39691360860002,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758308389265273",
            "extra": "mean: 6.830745098039112 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.45441452411393,
            "unit": "iter/sec",
            "range": "stddev: 0.000700084983542895",
            "extra": "mean: 5.142593457943799 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.31731205811406,
            "unit": "iter/sec",
            "range": "stddev: 0.00013223376939132725",
            "extra": "mean: 3.0834000000000343 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.547709711288688,
            "unit": "iter/sec",
            "range": "stddev: 0.0029753951302843723",
            "extra": "mean: 73.81321428571397 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.862191335206571,
            "unit": "iter/sec",
            "range": "stddev: 0.001464607439685472",
            "extra": "mean: 72.13866666666509 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.83028725698284,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693957460322086",
            "extra": "mean: 5.752737430167421 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.99127070725666,
            "unit": "iter/sec",
            "range": "stddev: 0.0001744443843843064",
            "extra": "mean: 4.032400000000235 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.6115078433158,
            "unit": "iter/sec",
            "range": "stddev: 0.00016611344016113515",
            "extra": "mean: 2.2390824742268594 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.0478006360154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816708531144264",
            "extra": "mean: 2.1927525987525334 msec\nrounds: 481"
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
        "date": 1646433173977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.50416504974947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225887502979843",
            "extra": "mean: 8.230170542635747 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.7372312460629,
            "unit": "iter/sec",
            "range": "stddev: 0.0005742691436088043",
            "extra": "mean: 6.861664596273267 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.19958114526034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709140778067461",
            "extra": "mean: 5.285423963133605 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.12857626824916,
            "unit": "iter/sec",
            "range": "stddev: 0.00037335078812461445",
            "extra": "mean: 3.309849112426015 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.48239158201953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005734330038998142",
            "extra": "mean: 9.133888888888974 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.7501892587104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250826860547212",
            "extra": "mean: 7.53294594594625 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.4519787338282,
            "unit": "iter/sec",
            "range": "stddev: 0.0007511682413376471",
            "extra": "mean: 5.511099999999996 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.0229306497862,
            "unit": "iter/sec",
            "range": "stddev: 0.00022463289868771764",
            "extra": "mean: 3.322006060606102 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.38073938142745,
            "unit": "iter/sec",
            "range": "stddev: 0.0021726244118962105",
            "extra": "mean: 74.73428571428619 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.469918304945455,
            "unit": "iter/sec",
            "range": "stddev: 0.0014567446188740276",
            "extra": "mean: 74.23950000000013 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.98938252279387,
            "unit": "iter/sec",
            "range": "stddev: 0.0004674669291379169",
            "extra": "mean: 6.250414772727364 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.9514262179403,
            "unit": "iter/sec",
            "range": "stddev: 0.0004538755389365247",
            "extra": "mean: 4.609326693226907 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.7335214138938,
            "unit": "iter/sec",
            "range": "stddev: 0.00022191288276442875",
            "extra": "mean: 2.2897257731959084 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.1584660172023,
            "unit": "iter/sec",
            "range": "stddev: 0.00020912476737504438",
            "extra": "mean: 2.368778741865268 msec\nrounds: 461"
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
        "date": 1646435240018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.96764241396033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021048005924736",
            "extra": "mean: 7.464489051094873 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.42142229200758,
            "unit": "iter/sec",
            "range": "stddev: 0.00025567879319101283",
            "extra": "mean: 6.008841807909637 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.37316957184956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362653582880206",
            "extra": "mean: 4.517259259259225 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 350.786079714989,
            "unit": "iter/sec",
            "range": "stddev: 0.0002160908857424655",
            "extra": "mean: 2.8507402597403306 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.97074973030101,
            "unit": "iter/sec",
            "range": "stddev: 0.0003880122368583494",
            "extra": "mean: 8.132015151515269 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.8268312447397,
            "unit": "iter/sec",
            "range": "stddev: 0.00039444501907566395",
            "extra": "mean: 6.6743719512195785 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.51611772950625,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870650789871288",
            "extra": "mean: 4.683487179487097 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.7394543160104,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536508655000212",
            "extra": "mean: 3.19754986522916 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.738491507835601,
            "unit": "iter/sec",
            "range": "stddev: 0.0030662514344018876",
            "extra": "mean: 78.50223076923103 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.872525364426394,
            "unit": "iter/sec",
            "range": "stddev: 0.001814785279279177",
            "extra": "mean: 72.08492857142801 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.57040777817494,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910460206148836",
            "extra": "mean: 5.794736263736583 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.4275741870872,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205010008430429",
            "extra": "mean: 4.1592567049811695 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.6196619213585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002812050179778",
            "extra": "mean: 2.1158662674647566 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.762680851178,
            "unit": "iter/sec",
            "range": "stddev: 0.00008857581711913925",
            "extra": "mean: 2.189320717131484 msec\nrounds: 502"
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
        "date": 1646435662097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.01678143583565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005231690733954742",
            "extra": "mean: 8.195593984962345 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.44386625906134,
            "unit": "iter/sec",
            "range": "stddev: 0.00018740222048859408",
            "extra": "mean: 6.43319047619035 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.93267543739785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728607992179053",
            "extra": "mean: 4.855955947136681 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.0420017941907,
            "unit": "iter/sec",
            "range": "stddev: 0.00015013967560745782",
            "extra": "mean: 3.0026242774566554 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.90162172714446,
            "unit": "iter/sec",
            "range": "stddev: 0.000303348255314273",
            "extra": "mean: 8.481647540983488 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.55031208390108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079366382223533",
            "extra": "mean: 6.966198717948648 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.72051873064814,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769148858305648",
            "extra": "mean: 4.908685714285676 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.06754977030573,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037559790728725",
            "extra": "mean: 3.048152737752159 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.507538557268772,
            "unit": "iter/sec",
            "range": "stddev: 0.0013648103199798652",
            "extra": "mean: 74.03273333333354 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.851656150181663,
            "unit": "iter/sec",
            "range": "stddev: 0.002394010080737125",
            "extra": "mean: 72.19353333333251 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.97367317881813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001605589915679499",
            "extra": "mean: 5.8832640449439815 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.1619803300385,
            "unit": "iter/sec",
            "range": "stddev: 0.00015967845643023495",
            "extra": "mean: 4.062365758754716 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.32262465622824,
            "unit": "iter/sec",
            "range": "stddev: 0.00010400733457079417",
            "extra": "mean: 2.108269662921442 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.7446729259558,
            "unit": "iter/sec",
            "range": "stddev: 0.00010987796259986076",
            "extra": "mean: 2.253548179871586 msec\nrounds: 467"
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
        "date": 1646664480771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.58726649718221,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500055428400546",
            "extra": "mean: 8.2245454545454 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.88316366781763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601102101274396",
            "extra": "mean: 6.415060975609721 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.7404964831356,
            "unit": "iter/sec",
            "range": "stddev: 0.00028269783838062994",
            "extra": "mean: 4.700562499999958 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.4269300518497,
            "unit": "iter/sec",
            "range": "stddev: 0.00009445393705415637",
            "extra": "mean: 2.9374879356568298 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.7179242657482,
            "unit": "iter/sec",
            "range": "stddev: 0.00030279544530300976",
            "extra": "mean: 8.423327868852523 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.19376941816918,
            "unit": "iter/sec",
            "range": "stddev: 0.00020078010812348346",
            "extra": "mean: 6.793765822784635 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.47388430279116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001281571883369546",
            "extra": "mean: 4.7967638888887505 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.11665111520557,
            "unit": "iter/sec",
            "range": "stddev: 0.00027859693062358464",
            "extra": "mean: 3.435049132947958 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.241087093250368,
            "unit": "iter/sec",
            "range": "stddev: 0.003770471542637737",
            "extra": "mean: 75.52249999999994 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.090553411181787,
            "unit": "iter/sec",
            "range": "stddev: 0.0014439699673694175",
            "extra": "mean: 70.9695333333348 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.2456510844068,
            "unit": "iter/sec",
            "range": "stddev: 0.00017702463622621076",
            "extra": "mean: 5.873865168539346 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.811345750708,
            "unit": "iter/sec",
            "range": "stddev: 0.00017030764597948862",
            "extra": "mean: 4.135455252918264 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.83251483806777,
            "unit": "iter/sec",
            "range": "stddev: 0.00010799586050203279",
            "extra": "mean: 2.1652871287129485 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.8839007294036,
            "unit": "iter/sec",
            "range": "stddev: 0.00012096434293888701",
            "extra": "mean: 2.2528413361168753 msec\nrounds: 479"
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
        "date": 1646752670835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.59666579496671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630382796082973",
            "extra": "mean: 7.89910218978104 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.6993559363234,
            "unit": "iter/sec",
            "range": "stddev: 0.00018587960429572038",
            "extra": "mean: 6.422634146341436 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.91527424221565,
            "unit": "iter/sec",
            "range": "stddev: 0.00036466952379044995",
            "extra": "mean: 5.183622727272728 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.6117144492514,
            "unit": "iter/sec",
            "range": "stddev: 0.00012002246174220983",
            "extra": "mean: 3.0806035502958915 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.52176685278056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003332799863475254",
            "extra": "mean: 8.808883333333236 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.96282297899324,
            "unit": "iter/sec",
            "range": "stddev: 0.00019555361521562319",
            "extra": "mean: 6.851059602649083 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.99852898678895,
            "unit": "iter/sec",
            "range": "stddev: 0.000141791390101737",
            "extra": "mean: 4.950531100478468 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.55586803460375,
            "unit": "iter/sec",
            "range": "stddev: 0.0002214338325500148",
            "extra": "mean: 3.3051746987952275 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.365754835777869,
            "unit": "iter/sec",
            "range": "stddev: 0.0013089947678269096",
            "extra": "mean: 74.81807142857123 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.5722830712914,
            "unit": "iter/sec",
            "range": "stddev: 0.0009339151430969239",
            "extra": "mean: 73.67957142857102 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36657305773974,
            "unit": "iter/sec",
            "range": "stddev: 0.00040097260711739947",
            "extra": "mean: 6.010822857142922 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.43729219878176,
            "unit": "iter/sec",
            "range": "stddev: 0.00015203442008346435",
            "extra": "mean: 4.074360465116651 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.22983508717516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009641882611900412",
            "extra": "mean: 2.1681164658634757 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.5460362643607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705185107597147",
            "extra": "mean: 2.3280391752574756 msec\nrounds: 485"
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
        "date": 1646753508848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.7160846641097,
            "unit": "iter/sec",
            "range": "stddev: 0.00021936769808737834",
            "extra": "mean: 7.65016793893129 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.09675979188455,
            "unit": "iter/sec",
            "range": "stddev: 0.0004197921652813472",
            "extra": "mean: 6.89195266272191 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.03605504920947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002890950437758024",
            "extra": "mean: 4.830076576576551 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.815617751925,
            "unit": "iter/sec",
            "range": "stddev: 0.00027098065055549184",
            "extra": "mean: 3.117055232558109 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.49810498917172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007755270141270606",
            "extra": "mean: 8.968762295082202 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6529936820477,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733823511394751",
            "extra": "mean: 6.961219354838755 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.9709751565663,
            "unit": "iter/sec",
            "range": "stddev: 0.00031929761856940595",
            "extra": "mean: 4.878739534883676 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.05114546600123,
            "unit": "iter/sec",
            "range": "stddev: 0.00010321688380936778",
            "extra": "mean: 3.0206812865497232 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.022407843210294,
            "unit": "iter/sec",
            "range": "stddev: 0.0040587128582762946",
            "extra": "mean: 76.79071428571379 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.022758937755908,
            "unit": "iter/sec",
            "range": "stddev: 0.0016698151259789047",
            "extra": "mean: 71.31264285714322 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.83505687026786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004057040691878161",
            "extra": "mean: 5.958230769230614 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.3904024626504,
            "unit": "iter/sec",
            "range": "stddev: 0.00044605099490516414",
            "extra": "mean: 4.6000190839694906 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.2675778350048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002117917903795888",
            "extra": "mean: 2.1446912621358885 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.47485572964786,
            "unit": "iter/sec",
            "range": "stddev: 0.00012907934596282354",
            "extra": "mean: 2.2297794117644485 msec\nrounds: 476"
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
        "date": 1646838699303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.53018744019627,
            "unit": "iter/sec",
            "range": "stddev: 0.000534082447302517",
            "extra": "mean: 8.436669354838777 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.2096552732484,
            "unit": "iter/sec",
            "range": "stddev: 0.00042643826459062405",
            "extra": "mean: 6.839493589743573 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.1458313058136,
            "unit": "iter/sec",
            "range": "stddev: 0.0002294052716412742",
            "extra": "mean: 4.9225720930232155 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.3899671716806,
            "unit": "iter/sec",
            "range": "stddev: 0.00036616373350728613",
            "extra": "mean: 3.3069880239520453 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.32905188217052,
            "unit": "iter/sec",
            "range": "stddev: 0.0006202796435725224",
            "extra": "mean: 8.982381355932047 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.07134171895962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005819224681717068",
            "extra": "mean: 7.190554054054041 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.93926054937987,
            "unit": "iter/sec",
            "range": "stddev: 0.0007005333306725199",
            "extra": "mean: 5.496339805825425 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.57494050285703,
            "unit": "iter/sec",
            "range": "stddev: 0.00029368724563967575",
            "extra": "mean: 3.304966360856171 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.114962954913533,
            "unit": "iter/sec",
            "range": "stddev: 0.002459294338393541",
            "extra": "mean: 76.24878571428592 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.335746468408649,
            "unit": "iter/sec",
            "range": "stddev: 0.0019002137011096178",
            "extra": "mean: 74.98642857142812 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.42504571878322,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935343248315248",
            "extra": "mean: 6.008710982659126 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.31892647210043,
            "unit": "iter/sec",
            "range": "stddev: 0.0002295919222532845",
            "extra": "mean: 4.161137096774165 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.9089515822226,
            "unit": "iter/sec",
            "range": "stddev: 0.00015684444810397155",
            "extra": "mean: 2.1463421052632903 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.95302702223546,
            "unit": "iter/sec",
            "range": "stddev: 0.00012571327115120845",
            "extra": "mean: 2.217525862068761 msec\nrounds: 464"
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
        "date": 1647271559540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.40035538483616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005404631930381548",
            "extra": "mean: 8.591039062499917 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.0590025577931,
            "unit": "iter/sec",
            "range": "stddev: 0.0008173619987846106",
            "extra": "mean: 6.846548192771047 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.44958010780888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004143858418974884",
            "extra": "mean: 4.91522272727275 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.2584287356399,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517824915730596",
            "extra": "mean: 3.0650549132947558 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.40430415218941,
            "unit": "iter/sec",
            "range": "stddev: 0.001333097628539677",
            "extra": "mean: 9.057617886178845 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.50197919002198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072411846322228",
            "extra": "mean: 7.067038961038892 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.4387670988933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966677175337632",
            "extra": "mean: 5.0906448598130805 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3035544048045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832242993785897",
            "extra": "mean: 3.093068376068368 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.415882396762022,
            "unit": "iter/sec",
            "range": "stddev: 0.00320418005832307",
            "extra": "mean: 80.54199999999945 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.843683201379877,
            "unit": "iter/sec",
            "range": "stddev: 0.0022146328547450298",
            "extra": "mean: 77.85928571428512 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.07571532699185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004976814110698196",
            "extra": "mean: 6.169955801104901 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.1791769019169,
            "unit": "iter/sec",
            "range": "stddev: 0.0002947516944100693",
            "extra": "mean: 4.198519841269768 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.9385828227169,
            "unit": "iter/sec",
            "range": "stddev: 0.00010639628924204177",
            "extra": "mean: 2.1370325865581807 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.5251706402905,
            "unit": "iter/sec",
            "range": "stddev: 0.00014905270103017106",
            "extra": "mean: 2.249591397849548 msec\nrounds: 465"
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
        "date": 1647613601288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.24141934859112,
            "unit": "iter/sec",
            "range": "stddev: 0.0003013522825574845",
            "extra": "mean: 8.048845588235304 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.30420328473198,
            "unit": "iter/sec",
            "range": "stddev: 0.00022874055895519998",
            "extra": "mean: 6.438975757575715 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.59814319015777,
            "unit": "iter/sec",
            "range": "stddev: 0.00015661116931851244",
            "extra": "mean: 4.616844748858585 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.917876619448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008145348564528556",
            "extra": "mean: 2.9769180790960763 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.54592399596346,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480683066204",
            "extra": "mean: 8.730122950819615 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.8034082413443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674656581900905",
            "extra": "mean: 7.002633986928059 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.71667212577978,
            "unit": "iter/sec",
            "range": "stddev: 0.000132382336831852",
            "extra": "mean: 4.884799999999956 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.4619655053093,
            "unit": "iter/sec",
            "range": "stddev: 0.0003130548416628783",
            "extra": "mean: 3.2953058823528383 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.617604060380406,
            "unit": "iter/sec",
            "range": "stddev: 0.0014373441645106559",
            "extra": "mean: 73.43435714285741 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.71633667772971,
            "unit": "iter/sec",
            "range": "stddev: 0.0020450044950119516",
            "extra": "mean: 78.63900000000105 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.49096529316145,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847392339222922",
            "extra": "mean: 6.826359550561869 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.10457552957632,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352140524414683",
            "extra": "mean: 4.199835294117581 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.43199727398746,
            "unit": "iter/sec",
            "range": "stddev: 0.00019099350151993691",
            "extra": "mean: 2.20540236686417 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.1245185543909,
            "unit": "iter/sec",
            "range": "stddev: 0.00015086526031988005",
            "extra": "mean: 2.2772584033613645 msec\nrounds: 476"
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
        "date": 1647927135235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.27361976903893,
            "unit": "iter/sec",
            "range": "stddev: 0.0008056219794297052",
            "extra": "mean: 8.600403100775209 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.03283548305953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004861301291996583",
            "extra": "mean: 6.847774999999945 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.4573371598109,
            "unit": "iter/sec",
            "range": "stddev: 0.00046350427064853863",
            "extra": "mean: 5.038866359446989 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.0180209432564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203151887156232",
            "extra": "mean: 3.2049430894309148 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.74539069359341,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310832353975907",
            "extra": "mean: 9.111999999999789 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.84408180219143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006575002727604263",
            "extra": "mean: 7.25457333333336 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.8323409439956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003963966778113026",
            "extra": "mean: 5.240201923076939 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.7738330283027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003646676342244382",
            "extra": "mean: 3.3247573099415884 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.788891933863205,
            "unit": "iter/sec",
            "range": "stddev: 0.0020463115356904537",
            "extra": "mean: 78.19285714285685 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.792966312030968,
            "unit": "iter/sec",
            "range": "stddev: 0.004570219968896115",
            "extra": "mean: 84.79630769230795 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.04342561130696,
            "unit": "iter/sec",
            "range": "stddev: 0.0013208457500588975",
            "extra": "mean: 7.040100558658998 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.0168399266271,
            "unit": "iter/sec",
            "range": "stddev: 0.00021251106236614973",
            "extra": "mean: 4.201383399209348 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 427.14540243519934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669924611976168",
            "extra": "mean: 2.3411231732775266 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 408.02186381309707,
            "unit": "iter/sec",
            "range": "stddev: 0.00024244401212869816",
            "extra": "mean: 2.45084905660367 msec\nrounds: 477"
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
        "date": 1647973836878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.06822143983577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116123014615517",
            "extra": "mean: 8.328598425196827 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5467041881543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005224879108544731",
            "extra": "mean: 6.686874213836473 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.1375344557933,
            "unit": "iter/sec",
            "range": "stddev: 0.00037191341755757166",
            "extra": "mean: 4.922773148148156 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.22369584438945,
            "unit": "iter/sec",
            "range": "stddev: 0.00017448976687860717",
            "extra": "mean: 3.202831858407039 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.26192792864062,
            "unit": "iter/sec",
            "range": "stddev: 0.00037147004800988783",
            "extra": "mean: 8.675891666666432 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.1492785844679,
            "unit": "iter/sec",
            "range": "stddev: 0.0005811423208961184",
            "extra": "mean: 7.238546666666631 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.1692665993272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004415645480217573",
            "extra": "mean: 5.230966346153883 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.25931803547763,
            "unit": "iter/sec",
            "range": "stddev: 0.00019325237081976868",
            "extra": "mean: 3.21275522388062 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.607035986784227,
            "unit": "iter/sec",
            "range": "stddev: 0.0033285329912179687",
            "extra": "mean: 79.32078571428569 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.062144166746902,
            "unit": "iter/sec",
            "range": "stddev: 0.007572813449337687",
            "extra": "mean: 82.90400000000123 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.82312029937296,
            "unit": "iter/sec",
            "range": "stddev: 0.0007125876029108818",
            "extra": "mean: 6.218011428571312 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.82402757022066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003078118426210606",
            "extra": "mean: 4.258507999999978 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.4448043136143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001385667813269264",
            "extra": "mean: 2.2151102204408355 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 430.39383369806643,
            "unit": "iter/sec",
            "range": "stddev: 0.00021592267258810358",
            "extra": "mean: 2.3234533622559486 msec\nrounds: 461"
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
        "date": 1647982472796,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.52531802713662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002137518070342227",
            "extra": "mean: 7.7805681818181665 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.75943287708435,
            "unit": "iter/sec",
            "range": "stddev: 0.00023308911159510522",
            "extra": "mean: 6.298838323353207 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.055709843797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520029409276664",
            "extra": "mean: 4.671681034482708 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.1786575910686,
            "unit": "iter/sec",
            "range": "stddev: 0.00011076603915466561",
            "extra": "mean: 2.9834835164834397 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.71007705445977,
            "unit": "iter/sec",
            "range": "stddev: 0.00043203681139394607",
            "extra": "mean: 8.717629921260011 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.00391818705944,
            "unit": "iter/sec",
            "range": "stddev: 0.0005210128474416762",
            "extra": "mean: 7.042059210526264 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.6341903153162,
            "unit": "iter/sec",
            "range": "stddev: 0.0006457327818887913",
            "extra": "mean: 5.386938679245515 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.6350244100059,
            "unit": "iter/sec",
            "range": "stddev: 0.00028911330741148865",
            "extra": "mean: 3.261206060606065 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.395065449246573,
            "unit": "iter/sec",
            "range": "stddev: 0.00409940105582277",
            "extra": "mean: 74.65435714285717 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.156567539239527,
            "unit": "iter/sec",
            "range": "stddev: 0.0022993336198203138",
            "extra": "mean: 76.0076666666663 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.38084448290556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004861438152069637",
            "extra": "mean: 6.120668571428698 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.58606899156473,
            "unit": "iter/sec",
            "range": "stddev: 0.00027600060355024715",
            "extra": "mean: 4.173865384615529 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.37101909050756,
            "unit": "iter/sec",
            "range": "stddev: 0.00017720974419360055",
            "extra": "mean: 2.144215568862207 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.9247487370947,
            "unit": "iter/sec",
            "range": "stddev: 0.00021846315318259696",
            "extra": "mean: 2.2731160337551595 msec\nrounds: 474"
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
        "date": 1647984469340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.9912666845678,
            "unit": "iter/sec",
            "range": "stddev: 0.0003983831777476975",
            "extra": "mean: 7.874557251908424 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.61614812337586,
            "unit": "iter/sec",
            "range": "stddev: 0.0002329971599671625",
            "extra": "mean: 6.426068322981354 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.84006769987698,
            "unit": "iter/sec",
            "range": "stddev: 0.0002112588087583045",
            "extra": "mean: 4.7429315068493665 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.81142410710555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333783681644388",
            "extra": "mean: 2.9778617647059398 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.9988446998103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764146868580661",
            "extra": "mean: 8.849648000000116 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6670357852199,
            "unit": "iter/sec",
            "range": "stddev: 0.0004918101835485451",
            "extra": "mean: 6.960538961038949 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.4725957982958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005044880615291162",
            "extra": "mean: 5.142112676056351 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.8673240856857,
            "unit": "iter/sec",
            "range": "stddev: 0.00025049871029119184",
            "extra": "mean: 3.280115384615444 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.953044289234086,
            "unit": "iter/sec",
            "range": "stddev: 0.006166838929234565",
            "extra": "mean: 77.20192857142852 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.21298194351628,
            "unit": "iter/sec",
            "range": "stddev: 0.0033155760343509286",
            "extra": "mean: 75.6831428571435 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.2428777489253,
            "unit": "iter/sec",
            "range": "stddev: 0.00046921737742388546",
            "extra": "mean: 6.125841530054645 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.7063773311893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003678247085530995",
            "extra": "mean: 4.189247104247099 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.65644480757436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001198864221115075",
            "extra": "mean: 2.138321862348049 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 401.52888530454237,
            "unit": "iter/sec",
            "range": "stddev: 0.00030449737440334034",
            "extra": "mean: 2.4904808510639107 msec\nrounds: 470"
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
        "date": 1647986085287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.12012483695402,
            "unit": "iter/sec",
            "range": "stddev: 0.0013596893343249474",
            "extra": "mean: 9.080992248062008 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.26288127404362,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617529411770911",
            "extra": "mean: 6.440689440993757 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.30372404926334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558002914707233",
            "extra": "mean: 4.68815068493153 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.19214821981774,
            "unit": "iter/sec",
            "range": "stddev: 0.00008269101436412218",
            "extra": "mean: 3.0103059490084076 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.65576604590443,
            "unit": "iter/sec",
            "range": "stddev: 0.00045792681913602284",
            "extra": "mean: 8.572229508196763 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.93764221142894,
            "unit": "iter/sec",
            "range": "stddev: 0.00019004597088975186",
            "extra": "mean: 6.7142193548385825 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.2901402878136,
            "unit": "iter/sec",
            "range": "stddev: 0.00027683373466007126",
            "extra": "mean: 4.871154545454621 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.93543121297995,
            "unit": "iter/sec",
            "range": "stddev: 0.00020870337726733835",
            "extra": "mean: 3.1256306818181177 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.382056764773072,
            "unit": "iter/sec",
            "range": "stddev: 0.0009765297635616338",
            "extra": "mean: 74.72692857142859 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.137013799119277,
            "unit": "iter/sec",
            "range": "stddev: 0.004017540900316411",
            "extra": "mean: 76.12080000000012 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.5548925613616,
            "unit": "iter/sec",
            "range": "stddev: 0.00019744068262387112",
            "extra": "mean: 5.69622404371596 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.07684067223028,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231528724293988",
            "extra": "mean: 3.9828444444442246 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.7590504705537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842489432061836",
            "extra": "mean: 2.115242424242677 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.7829332408457,
            "unit": "iter/sec",
            "range": "stddev: 0.00012232425514353154",
            "extra": "mean: 2.2947204301076347 msec\nrounds: 465"
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
        "date": 1648222119415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.18423549746205,
            "unit": "iter/sec",
            "range": "stddev: 0.00035116789643448393",
            "extra": "mean: 8.11792187500001 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5772326518626,
            "unit": "iter/sec",
            "range": "stddev: 0.00036275321785252026",
            "extra": "mean: 6.6855094339622925 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.14768701877907,
            "unit": "iter/sec",
            "range": "stddev: 0.00012265481246565555",
            "extra": "mean: 4.804281105990767 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.4452792029669,
            "unit": "iter/sec",
            "range": "stddev: 0.00019966612534820703",
            "extra": "mean: 3.110949404761923 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.98830036552495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007078799850808779",
            "extra": "mean: 9.009958677686164 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.89304243408742,
            "unit": "iter/sec",
            "range": "stddev: 0.0005743171614856713",
            "extra": "mean: 7.304973154362389 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7696689005214,
            "unit": "iter/sec",
            "range": "stddev: 0.00037228234977945506",
            "extra": "mean: 5.241923444976252 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.57964052210957,
            "unit": "iter/sec",
            "range": "stddev: 0.00025674166119782967",
            "extra": "mean: 3.2724693251533785 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.142911323838518,
            "unit": "iter/sec",
            "range": "stddev: 0.001889690597676134",
            "extra": "mean: 76.08664285714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.306495610187035,
            "unit": "iter/sec",
            "range": "stddev: 0.003505267250187419",
            "extra": "mean: 75.15126666666703 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.22964475734557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006209901896506077",
            "extra": "mean: 6.202333333333479 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.28206361896287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957284008027458",
            "extra": "mean: 4.232229838709368 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.99458329373954,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794810174249999",
            "extra": "mean: 2.1786749482401557 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.3091744707211,
            "unit": "iter/sec",
            "range": "stddev: 0.00018442630722369818",
            "extra": "mean: 2.3131593291405546 msec\nrounds: 477"
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
        "date": 1648488397929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.55320209457221,
            "unit": "iter/sec",
            "range": "stddev: 0.0008622101150003946",
            "extra": "mean: 8.364476923076914 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.65841851699483,
            "unit": "iter/sec",
            "range": "stddev: 0.0004752836666652613",
            "extra": "mean: 6.681882716049433 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.62971571486113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006404359388024586",
            "extra": "mean: 5.475560185185279 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.5323131446685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002792452857769789",
            "extra": "mean: 3.1592351190475716 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.76860071082318,
            "unit": "iter/sec",
            "range": "stddev: 0.000702070038682611",
            "extra": "mean: 8.867716666666267 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.93201157897394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155444202605117",
            "extra": "mean: 7.0956200000000065 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.61264439500502,
            "unit": "iter/sec",
            "range": "stddev: 0.00044103042233644037",
            "extra": "mean: 5.164951923076977 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.1325584404623,
            "unit": "iter/sec",
            "range": "stddev: 0.00029760391581385966",
            "extra": "mean: 3.245356495468236 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.70148870520119,
            "unit": "iter/sec",
            "range": "stddev: 0.00489873869895663",
            "extra": "mean: 78.73092857142845 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.478113949752002,
            "unit": "iter/sec",
            "range": "stddev: 0.001647723259397937",
            "extra": "mean: 74.19435714285528 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.26613011514576,
            "unit": "iter/sec",
            "range": "stddev: 0.00046346718705203143",
            "extra": "mean: 6.050846590909284 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.0901792867309,
            "unit": "iter/sec",
            "range": "stddev: 0.00040290818451712705",
            "extra": "mean: 4.290185039369983 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.6534193412512,
            "unit": "iter/sec",
            "range": "stddev: 0.00019918566507234203",
            "extra": "mean: 2.152141700404832 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.2520913644445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001960410564220079",
            "extra": "mean: 2.276597014925324 msec\nrounds: 469"
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
        "date": 1648490209639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.85393140766024,
            "unit": "iter/sec",
            "range": "stddev: 0.00044824260267879154",
            "extra": "mean: 8.206546875000011 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.241758590263,
            "unit": "iter/sec",
            "range": "stddev: 0.00037643023504408237",
            "extra": "mean: 6.70053749999997 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.5753584376328,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545533504486648",
            "extra": "mean: 5.03587155963298 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.3058324970812,
            "unit": "iter/sec",
            "range": "stddev: 0.00023341905316302992",
            "extra": "mean: 3.1715239520958023 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.99234173507406,
            "unit": "iter/sec",
            "range": "stddev: 0.0009201285547061467",
            "extra": "mean: 9.524504201680616 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.59752625294436,
            "unit": "iter/sec",
            "range": "stddev: 0.00040407168479995577",
            "extra": "mean: 7.06227027027039 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.24681439408263,
            "unit": "iter/sec",
            "range": "stddev: 0.00025195710776915485",
            "extra": "mean: 5.121722488038234 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.8693027496218,
            "unit": "iter/sec",
            "range": "stddev: 0.00025638120471819874",
            "extra": "mean: 3.2167859327217423 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.458396144413951,
            "unit": "iter/sec",
            "range": "stddev: 0.005197911453108752",
            "extra": "mean: 80.26715384615348 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.817566658213122,
            "unit": "iter/sec",
            "range": "stddev: 0.002075827970649063",
            "extra": "mean: 78.0179285714289 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.6667086845667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007202720901583647",
            "extra": "mean: 6.382977011493894 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.7377033717492,
            "unit": "iter/sec",
            "range": "stddev: 0.0003214742954636749",
            "extra": "mean: 4.1712254098361425 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.93441604641276,
            "unit": "iter/sec",
            "range": "stddev: 0.00016910502955121243",
            "extra": "mean: 2.227496855346051 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 420.79075441509445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002031044216934279",
            "extra": "mean: 2.376478070175318 msec\nrounds: 456"
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
        "date": 1648491258677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.46609686850157,
            "unit": "iter/sec",
            "range": "stddev: 0.001227561617926565",
            "extra": "mean: 9.481719999999918 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.8597514626411,
            "unit": "iter/sec",
            "range": "stddev: 0.0006617256312808728",
            "extra": "mean: 7.360531645569669 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5046486162657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004266751145098843",
            "extra": "mean: 5.114967889908278 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.2263550401508,
            "unit": "iter/sec",
            "range": "stddev: 0.0004284338917971625",
            "extra": "mean: 3.4337551622418654 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.51966873706228,
            "unit": "iter/sec",
            "range": "stddev: 0.001205100752867537",
            "extra": "mean: 9.659999999999792 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.93426973463244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500553894243763",
            "extra": "mean: 7.4663489932884755 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.74010925590417,
            "unit": "iter/sec",
            "range": "stddev: 0.0007520378936818568",
            "extra": "mean: 5.690220657276642 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.84672619826057,
            "unit": "iter/sec",
            "range": "stddev: 0.00028028395367603093",
            "extra": "mean: 3.4861823708206714 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.200000754285714,
            "unit": "iter/sec",
            "range": "stddev: 0.002997808910477919",
            "extra": "mean: 75.75757142857168 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.27283150981866,
            "unit": "iter/sec",
            "range": "stddev: 0.005277429544145644",
            "extra": "mean: 88.70885714285696 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.40273075980187,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448796921170499",
            "extra": "mean: 6.784134831460731 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.9945745707294,
            "unit": "iter/sec",
            "range": "stddev: 0.0005239688115743497",
            "extra": "mean: 4.405391634981166 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.4037913252652,
            "unit": "iter/sec",
            "range": "stddev: 0.00025266542596049226",
            "extra": "mean: 2.2502058252425807 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.4820036379505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096219406741155",
            "extra": "mean: 2.3069008438818885 msec\nrounds: 474"
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
        "date": 1648605681600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.32944024765696,
            "unit": "iter/sec",
            "range": "stddev: 0.0004212158016677267",
            "extra": "mean: 8.043147286821679 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.7270370238428,
            "unit": "iter/sec",
            "range": "stddev: 0.00040089767202941247",
            "extra": "mean: 6.505036585365928 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.28115693882515,
            "unit": "iter/sec",
            "range": "stddev: 0.00032545567395521325",
            "extra": "mean: 4.871367713004488 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.8967006517513,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656540686647001",
            "extra": "mean: 3.0779013698630173 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.80461596577332,
            "unit": "iter/sec",
            "range": "stddev: 0.0006059738997567473",
            "extra": "mean: 9.276040650406733 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.78954011699625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004715263452358169",
            "extra": "mean: 7.003314102564085 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.552311903344,
            "unit": "iter/sec",
            "range": "stddev: 0.0003609276950048363",
            "extra": "mean: 5.275588516746328 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.5937654890454,
            "unit": "iter/sec",
            "range": "stddev: 0.0001433707293789963",
            "extra": "mean: 3.188838905775161 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.504896972105698,
            "unit": "iter/sec",
            "range": "stddev: 0.0018867847367566013",
            "extra": "mean: 74.04721428571393 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.39901402398237,
            "unit": "iter/sec",
            "range": "stddev: 0.002387828772599021",
            "extra": "mean: 74.63235714285688 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.374650082498,
            "unit": "iter/sec",
            "range": "stddev: 0.000616104049920477",
            "extra": "mean: 6.562771428571515 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.36443471999132,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997179812410335",
            "extra": "mean: 4.230754940711144 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 418.5149621283045,
            "unit": "iter/sec",
            "range": "stddev: 0.0003477622758459727",
            "extra": "mean: 2.3894008350732014 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 394.811252208265,
            "unit": "iter/sec",
            "range": "stddev: 0.000326942623685045",
            "extra": "mean: 2.532855875831256 msec\nrounds: 451"
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
        "date": 1648608587190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.69020844270763,
            "unit": "iter/sec",
            "range": "stddev: 0.00039126899861660386",
            "extra": "mean: 7.956069230769252 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.903060861061,
            "unit": "iter/sec",
            "range": "stddev: 0.00018278199326738238",
            "extra": "mean: 6.37336196319018 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.02831994765242,
            "unit": "iter/sec",
            "range": "stddev: 0.00011996114393386343",
            "extra": "mean: 4.761262672811174 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.74153569885436,
            "unit": "iter/sec",
            "range": "stddev: 0.00007528961984751806",
            "extra": "mean: 3.0793720238095426 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.10093693409783,
            "unit": "iter/sec",
            "range": "stddev: 0.00022755196368059452",
            "extra": "mean: 8.467333333333466 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.56910772885257,
            "unit": "iter/sec",
            "range": "stddev: 0.00022180072953040763",
            "extra": "mean: 6.869589403973483 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.74423921210231,
            "unit": "iter/sec",
            "range": "stddev: 0.00017642157390425608",
            "extra": "mean: 4.956771028037423 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.07541990997976,
            "unit": "iter/sec",
            "range": "stddev: 0.00021670224428376535",
            "extra": "mean: 3.2778779761905286 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.162397662358277,
            "unit": "iter/sec",
            "range": "stddev: 0.0014360528166841677",
            "extra": "mean: 75.97399999999942 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.263819131025311,
            "unit": "iter/sec",
            "range": "stddev: 0.00273676115839445",
            "extra": "mean: 75.39306666666666 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.36026119420728,
            "unit": "iter/sec",
            "range": "stddev: 0.00034355325039143726",
            "extra": "mean: 5.975134078212183 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.46225458956778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576806224387798",
            "extra": "mean: 4.107412878788191 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.9508396062027,
            "unit": "iter/sec",
            "range": "stddev: 0.00010187157720470663",
            "extra": "mean: 2.1415530612244704 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.07374583875986,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794364777625596",
            "extra": "mean: 2.282720682302806 msec\nrounds: 469"
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
        "date": 1648615064247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.00416162529416,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637172526230794",
            "extra": "mean: 8.546704545454547 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.59312949434323,
            "unit": "iter/sec",
            "range": "stddev: 0.00033269799987304733",
            "extra": "mean: 6.553375000000056 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.42816191596754,
            "unit": "iter/sec",
            "range": "stddev: 0.00016232368760598072",
            "extra": "mean: 4.797816143497788 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.33332908411364,
            "unit": "iter/sec",
            "range": "stddev: 0.00018279765804592524",
            "extra": "mean: 3.102378531073489 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.0716249539964,
            "unit": "iter/sec",
            "range": "stddev: 0.000513973962128855",
            "extra": "mean: 8.690239669421391 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.94956750120136,
            "unit": "iter/sec",
            "range": "stddev: 0.00017584217892583032",
            "extra": "mean: 6.946877419354902 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.15477539247468,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896879921739815",
            "extra": "mean: 5.0465601851853075 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.60331411912745,
            "unit": "iter/sec",
            "range": "stddev: 0.00019116775617918574",
            "extra": "mean: 3.1685345345345155 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.96972760029017,
            "unit": "iter/sec",
            "range": "stddev: 0.0024568434910588162",
            "extra": "mean: 71.58335714285714 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.803460803692815,
            "unit": "iter/sec",
            "range": "stddev: 0.0006807615273680014",
            "extra": "mean: 72.4455999999994 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.59176311234984,
            "unit": "iter/sec",
            "range": "stddev: 0.0006224299635120307",
            "extra": "mean: 6.112777202072396 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.6688280380835,
            "unit": "iter/sec",
            "range": "stddev: 0.0003165374112121574",
            "extra": "mean: 4.172424124513595 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.44165798115637,
            "unit": "iter/sec",
            "range": "stddev: 0.00015136571294374575",
            "extra": "mean: 2.153122965641839 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.79409587115595,
            "unit": "iter/sec",
            "range": "stddev: 0.00016998953382209487",
            "extra": "mean: 2.2634978813561113 msec\nrounds: 472"
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
        "date": 1648735328504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.83621567120763,
            "unit": "iter/sec",
            "range": "stddev: 0.0007401939386854473",
            "extra": "mean: 8.207740157480288 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.02423712635434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032774097492146",
            "extra": "mean: 6.534912500000151 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8458925052619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004071488505993456",
            "extra": "mean: 4.905666666666765 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.388902313054,
            "unit": "iter/sec",
            "range": "stddev: 0.00011372571796581445",
            "extra": "mean: 3.073245562130168 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.03604541993761,
            "unit": "iter/sec",
            "range": "stddev: 0.0006922056627020595",
            "extra": "mean: 8.846735537190135 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.9900569096141,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300194904189783",
            "extra": "mean: 7.042746666666702 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.89863671103288,
            "unit": "iter/sec",
            "range": "stddev: 0.0003246813989235532",
            "extra": "mean: 5.104680751173807 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.25651051761827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002625032182419304",
            "extra": "mean: 3.24405151515152 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.184337760131625,
            "unit": "iter/sec",
            "range": "stddev: 0.003440545656953712",
            "extra": "mean: 75.84757142857183 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.32181313683034,
            "unit": "iter/sec",
            "range": "stddev: 0.006681249351814667",
            "extra": "mean: 75.06485714285661 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.32969862887282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006957929278233453",
            "extra": "mean: 6.122585227272462 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.02975512802564,
            "unit": "iter/sec",
            "range": "stddev: 0.00015669041568363535",
            "extra": "mean: 4.064549019607947 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.77257163846,
            "unit": "iter/sec",
            "range": "stddev: 0.00006813052762990469",
            "extra": "mean: 2.1332306122450526 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.5200211631285,
            "unit": "iter/sec",
            "range": "stddev: 0.00013875553460857118",
            "extra": "mean: 2.2649029535866276 msec\nrounds: 474"
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
        "date": 1648766097597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.73259723153471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005229479839664145",
            "extra": "mean: 8.214726562499983 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.56944323740842,
            "unit": "iter/sec",
            "range": "stddev: 0.00021031110820624244",
            "extra": "mean: 6.554392405063261 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.44947060528125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286099235053233",
            "extra": "mean: 4.79732568807332 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.1754096754886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002484225666319402",
            "extra": "mean: 3.1829352941176996 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.61236534423158,
            "unit": "iter/sec",
            "range": "stddev: 0.0008032419101996074",
            "extra": "mean: 9.468588235294352 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.59860807378215,
            "unit": "iter/sec",
            "range": "stddev: 0.000428821074651334",
            "extra": "mean: 7.112445945945842 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.06468173462747,
            "unit": "iter/sec",
            "range": "stddev: 0.0002506537436925042",
            "extra": "mean: 5.023492822966442 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.37800914780587,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598178770431369",
            "extra": "mean: 3.2322917933131063 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.228238130963296,
            "unit": "iter/sec",
            "range": "stddev: 0.0014047932153956374",
            "extra": "mean: 75.59585714285737 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.962134690719033,
            "unit": "iter/sec",
            "range": "stddev: 0.0008632816127173529",
            "extra": "mean: 71.62228571428437 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.38522657197993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086997194276406",
            "extra": "mean: 6.394465909091015 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.16914430306244,
            "unit": "iter/sec",
            "range": "stddev: 0.00012962237287258518",
            "extra": "mean: 4.029509803921502 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.0016765996584,
            "unit": "iter/sec",
            "range": "stddev: 0.00016803945841510165",
            "extra": "mean: 2.150529880478144 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.4486717311531,
            "unit": "iter/sec",
            "range": "stddev: 0.0003682509836471967",
            "extra": "mean: 2.3840819327732974 msec\nrounds: 476"
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
        "date": 1648768504239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.04863234570884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006291441608417142",
            "extra": "mean: 8.5434573643411 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.71400038778725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003909056948616836",
            "extra": "mean: 6.7243164556961394 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.94103971332265,
            "unit": "iter/sec",
            "range": "stddev: 0.0005226289903190742",
            "extra": "mean: 5.052009433962239 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.71356882512595,
            "unit": "iter/sec",
            "range": "stddev: 0.00022765649256037228",
            "extra": "mean: 3.1180470588235867 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.31494709861603,
            "unit": "iter/sec",
            "range": "stddev: 0.0007052037483832355",
            "extra": "mean: 9.232336134453758 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.88647207166406,
            "unit": "iter/sec",
            "range": "stddev: 0.0007883642585883166",
            "extra": "mean: 7.413641891891934 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.9052712843687,
            "unit": "iter/sec",
            "range": "stddev: 0.0003650464867575757",
            "extra": "mean: 5.13069756097561 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.91300157204887,
            "unit": "iter/sec",
            "range": "stddev: 0.00015168743007662675",
            "extra": "mean: 3.0777469512196536 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.127026484713491,
            "unit": "iter/sec",
            "range": "stddev: 0.0015276356507102444",
            "extra": "mean: 76.17871428571478 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.691139131266201,
            "unit": "iter/sec",
            "range": "stddev: 0.0041440541720588545",
            "extra": "mean: 78.79513333333297 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.63124709487738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005486250336149271",
            "extra": "mean: 6.111302197801962 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.40243177037706,
            "unit": "iter/sec",
            "range": "stddev: 0.0003043051931951038",
            "extra": "mean: 4.159691699604605 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.3292080613634,
            "unit": "iter/sec",
            "range": "stddev: 0.00017737850291875296",
            "extra": "mean: 2.2010471311475452 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 424.9076466893108,
            "unit": "iter/sec",
            "range": "stddev: 0.00019270384263220657",
            "extra": "mean: 2.3534525862067914 msec\nrounds: 464"
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
        "date": 1648769351328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.73699032875896,
            "unit": "iter/sec",
            "range": "stddev: 0.00032084914777796554",
            "extra": "mean: 7.767775193798411 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.18835142739434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601120839093369",
            "extra": "mean: 6.443782608695699 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.02650140538074,
            "unit": "iter/sec",
            "range": "stddev: 0.00017562349959111953",
            "extra": "mean: 4.672318584070727 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.721900894813,
            "unit": "iter/sec",
            "range": "stddev: 0.00014476366535184213",
            "extra": "mean: 2.9965069637883714 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.44419457460943,
            "unit": "iter/sec",
            "range": "stddev: 0.00029094908661386385",
            "extra": "mean: 8.58780468750006 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.04934961248108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003301474087273852",
            "extra": "mean: 6.942065359477024 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.2039467162851,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948678967859952",
            "extra": "mean: 5.019980861243897 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.57153926074574,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989364772237287",
            "extra": "mean: 3.1992676056338083 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.077496618886915,
            "unit": "iter/sec",
            "range": "stddev: 0.0021533616512556",
            "extra": "mean: 71.03535714285744 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.132837364960855,
            "unit": "iter/sec",
            "range": "stddev: 0.001632812306595597",
            "extra": "mean: 70.75719999999943 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.05869332042414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472325904112999",
            "extra": "mean: 5.745188481675562 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.54585905294005,
            "unit": "iter/sec",
            "range": "stddev: 0.00023776684952806523",
            "extra": "mean: 4.122931654676206 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 478.84131163059396,
            "unit": "iter/sec",
            "range": "stddev: 0.00006082887591972886",
            "extra": "mean: 2.0883745318354197 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.6194339548512,
            "unit": "iter/sec",
            "range": "stddev: 0.00007134062337440402",
            "extra": "mean: 2.204491089108696 msec\nrounds: 505"
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
        "date": 1648770675360,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.4915239063237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006833882931423223",
            "extra": "mean: 8.43942222222219 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.4897178594857,
            "unit": "iter/sec",
            "range": "stddev: 0.0002823582388004325",
            "extra": "mean: 6.309557575757585 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.1282530480432,
            "unit": "iter/sec",
            "range": "stddev: 0.0003063497031852534",
            "extra": "mean: 4.626882352941194 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.1476276251331,
            "unit": "iter/sec",
            "range": "stddev: 0.00035626260990278744",
            "extra": "mean: 3.1235589887641426 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.07640003554765,
            "unit": "iter/sec",
            "range": "stddev: 0.000810142886049878",
            "extra": "mean: 8.615015625000055 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6501021511848,
            "unit": "iter/sec",
            "range": "stddev: 0.0006294555460075141",
            "extra": "mean: 6.961359477124132 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.13941911173154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003978794791826976",
            "extra": "mean: 5.259298701298601 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.747903961679,
            "unit": "iter/sec",
            "range": "stddev: 0.0002266517443710633",
            "extra": "mean: 3.167083573487049 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.087256466553795,
            "unit": "iter/sec",
            "range": "stddev: 0.001555544666279336",
            "extra": "mean: 70.98614285714307 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.190474216391454,
            "unit": "iter/sec",
            "range": "stddev: 0.00327766249796455",
            "extra": "mean: 75.81228571428663 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.33687910478267,
            "unit": "iter/sec",
            "range": "stddev: 0.00036965514206688645",
            "extra": "mean: 5.802588541666635 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.52614356962167,
            "unit": "iter/sec",
            "range": "stddev: 0.00039960225366295185",
            "extra": "mean: 4.0728860294115234 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.5166636163809,
            "unit": "iter/sec",
            "range": "stddev: 0.00008973608159326487",
            "extra": "mean: 2.1435461538460827 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.0008760888774,
            "unit": "iter/sec",
            "range": "stddev: 0.00014218157858225783",
            "extra": "mean: 2.2778997821351643 msec\nrounds: 459"
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
        "date": 1648771404980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.264599259923,
            "unit": "iter/sec",
            "range": "stddev: 0.00017497158738198642",
            "extra": "mean: 7.796383458646611 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.07874613728006,
            "unit": "iter/sec",
            "range": "stddev: 0.0005899351750577087",
            "extra": "mean: 6.663168674698813 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.50272745639487,
            "unit": "iter/sec",
            "range": "stddev: 0.00016722670797744062",
            "extra": "mean: 4.640312499999989 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.9231073849614,
            "unit": "iter/sec",
            "range": "stddev: 0.00019697965386694126",
            "extra": "mean: 2.9947014084507653 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.19705420660627,
            "unit": "iter/sec",
            "range": "stddev: 0.0014488206886908094",
            "extra": "mean: 9.98033333333334 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.8485318836701,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232430916956173",
            "extra": "mean: 7.202092715231723 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.94321247572304,
            "unit": "iter/sec",
            "range": "stddev: 0.00045675820873403226",
            "extra": "mean: 5.001420091324277 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.2037987097118,
            "unit": "iter/sec",
            "range": "stddev: 0.00017225004095945446",
            "extra": "mean: 3.132794797687898 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.271025494254568,
            "unit": "iter/sec",
            "range": "stddev: 0.006066196457093048",
            "extra": "mean: 88.72307142857164 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.582946332835107,
            "unit": "iter/sec",
            "range": "stddev: 0.005012758761509691",
            "extra": "mean: 79.47264285714287 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.5467201092292,
            "unit": "iter/sec",
            "range": "stddev: 0.0004301715729873497",
            "extra": "mean: 5.9330730337080135 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.78930791660568,
            "unit": "iter/sec",
            "range": "stddev: 0.0005361998785252588",
            "extra": "mean: 4.744073643410931 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 432.45884507631706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006972572470358332",
            "extra": "mean: 2.3123587628865065 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.3207958979001,
            "unit": "iter/sec",
            "range": "stddev: 0.00013326913074611645",
            "extra": "mean: 2.230545647558447 msec\nrounds: 471"
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
        "date": 1648866369005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.0929294642926,
            "unit": "iter/sec",
            "range": "stddev: 0.00019249103422516815",
            "extra": "mean: 7.628176470588235 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.3679468887259,
            "unit": "iter/sec",
            "range": "stddev: 0.00010387159164766612",
            "extra": "mean: 6.083911242603655 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.71495213472673,
            "unit": "iter/sec",
            "range": "stddev: 0.00006156538199131745",
            "extra": "mean: 4.469973913043483 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 354.4198583874151,
            "unit": "iter/sec",
            "range": "stddev: 0.000037168579225629646",
            "extra": "mean: 2.8215123287671524 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.79632175108503,
            "unit": "iter/sec",
            "range": "stddev: 0.00017295444156516064",
            "extra": "mean: 8.21042857142844 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.53027582078565,
            "unit": "iter/sec",
            "range": "stddev: 0.00021579694942691722",
            "extra": "mean: 6.556075471698109 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.0116631514523,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333170649953707",
            "extra": "mean: 4.6726425339366555 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.7834201397289,
            "unit": "iter/sec",
            "range": "stddev: 0.0001297736001146796",
            "extra": "mean: 2.987005747126393 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.07994593300761,
            "unit": "iter/sec",
            "range": "stddev: 0.0006762818516392899",
            "extra": "mean: 71.02300000000004 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.59064486759467,
            "unit": "iter/sec",
            "range": "stddev: 0.0004743780088061942",
            "extra": "mean: 68.5370666666671 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.16310975609306,
            "unit": "iter/sec",
            "range": "stddev: 0.0002800540257109989",
            "extra": "mean: 5.612834224599073 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.7556387028111,
            "unit": "iter/sec",
            "range": "stddev: 0.00009935860482573948",
            "extra": "mean: 3.8497720588237527 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 504.2835448841318,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704106026347883",
            "extra": "mean: 1.9830113636362416 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 479.363359347687,
            "unit": "iter/sec",
            "range": "stddev: 0.00005068504587625745",
            "extra": "mean: 2.086100200400778 msec\nrounds: 499"
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
        "date": 1649083438495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.81324228784783,
            "unit": "iter/sec",
            "range": "stddev: 0.000570802566176568",
            "extra": "mean: 8.346322834645683 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.69360919566054,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789261464977395",
            "extra": "mean: 6.635981481481409 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.31910185823074,
            "unit": "iter/sec",
            "range": "stddev: 0.0003664033912839296",
            "extra": "mean: 4.967238532110091 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.6517429088678,
            "unit": "iter/sec",
            "range": "stddev: 0.0003452279869217335",
            "extra": "mean: 3.4524218289086104 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.4145791410302,
            "unit": "iter/sec",
            "range": "stddev: 0.0007013790193480229",
            "extra": "mean: 9.056774999999964 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.52218474432766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006468615943371589",
            "extra": "mean: 7.271554054054153 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.96709578482077,
            "unit": "iter/sec",
            "range": "stddev: 0.0003016027156020196",
            "extra": "mean: 5.051344497607544 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.11145858331304,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478801947494409",
            "extra": "mean: 3.2667839506172367 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.35725167661434,
            "unit": "iter/sec",
            "range": "stddev: 0.004341816791960109",
            "extra": "mean: 80.9241428571423 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.269161142588398,
            "unit": "iter/sec",
            "range": "stddev: 0.0023375650522765427",
            "extra": "mean: 75.36271428571492 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.80077793814627,
            "unit": "iter/sec",
            "range": "stddev: 0.0005154429917088074",
            "extra": "mean: 6.1804399999997734 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.17673552111253,
            "unit": "iter/sec",
            "range": "stddev: 0.0004465427324683481",
            "extra": "mean: 4.307063745019651 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.78269675923735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670215133541653",
            "extra": "mean: 2.243245436105587 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 412.0678272505267,
            "unit": "iter/sec",
            "range": "stddev: 0.0002060071061641368",
            "extra": "mean: 2.426784946236595 msec\nrounds: 465"
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
        "date": 1649084469475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.1853268558193,
            "unit": "iter/sec",
            "range": "stddev: 0.0013295574168707275",
            "extra": "mean: 8.993992537313492 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.30119023602998,
            "unit": "iter/sec",
            "range": "stddev: 0.0003673437955581718",
            "extra": "mean: 6.6093333333333275 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.89735126800508,
            "unit": "iter/sec",
            "range": "stddev: 0.00035794965685223193",
            "extra": "mean: 4.833314655172395 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.03194279437895,
            "unit": "iter/sec",
            "range": "stddev: 0.00013732493629995955",
            "extra": "mean: 3.076620689655164 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.14658274675998,
            "unit": "iter/sec",
            "range": "stddev: 0.0003264505913114039",
            "extra": "mean: 8.609809917355456 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.52579096305445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006487126626369649",
            "extra": "mean: 7.324623376623485 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.43835649314988,
            "unit": "iter/sec",
            "range": "stddev: 0.0001721868361590606",
            "extra": "mean: 4.867640186915845 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.10116116266664,
            "unit": "iter/sec",
            "range": "stddev: 0.00012009064609149313",
            "extra": "mean: 3.095005899705033 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.80039540401834,
            "unit": "iter/sec",
            "range": "stddev: 0.004206225078411455",
            "extra": "mean: 84.74292307692284 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.500378010584294,
            "unit": "iter/sec",
            "range": "stddev: 0.0014286922476383973",
            "extra": "mean: 74.07200000000002 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.43246823859428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793209240426552",
            "extra": "mean: 5.902056497175046 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.85989187855589,
            "unit": "iter/sec",
            "range": "stddev: 0.00023670712634863274",
            "extra": "mean: 4.186554687500371 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.65380702464705,
            "unit": "iter/sec",
            "range": "stddev: 0.00006352026460279486",
            "extra": "mean: 2.115713414634263 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.2506554978858,
            "unit": "iter/sec",
            "range": "stddev: 0.0001000096679309237",
            "extra": "mean: 2.220985106383028 msec\nrounds: 470"
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
        "date": 1649167308148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.6023031481606,
            "unit": "iter/sec",
            "range": "stddev: 0.0009391575141413219",
            "extra": "mean: 8.725828125000037 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.9831361273406,
            "unit": "iter/sec",
            "range": "stddev: 0.0004630955081257597",
            "extra": "mean: 6.623256249999937 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.80097707680034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005279310253618648",
            "extra": "mean: 5.21373777777776 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.82378041845953,
            "unit": "iter/sec",
            "range": "stddev: 0.00024734546991156707",
            "extra": "mean: 3.1072905759161884 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.56518453725546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687503230102912",
            "extra": "mean: 8.963369747898955 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.32129486600064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008347501134857269",
            "extra": "mean: 7.85414569536424 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.9773576419309,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169337107968038",
            "extra": "mean: 5.208947619047676 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.77460165505727,
            "unit": "iter/sec",
            "range": "stddev: 0.0002637969509227757",
            "extra": "mean: 3.228153614457805 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.008468513002162,
            "unit": "iter/sec",
            "range": "stddev: 0.003318458724722978",
            "extra": "mean: 76.87299999999883 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.718630880638282,
            "unit": "iter/sec",
            "range": "stddev: 0.0015455253881050273",
            "extra": "mean: 72.89357142857052 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.27218673404732,
            "unit": "iter/sec",
            "range": "stddev: 0.00030813378627034043",
            "extra": "mean: 5.9427527472528245 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.6875068394539,
            "unit": "iter/sec",
            "range": "stddev: 0.0004964571601065616",
            "extra": "mean: 4.391984496123961 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.39905342010405,
            "unit": "iter/sec",
            "range": "stddev: 0.0001160454160619012",
            "extra": "mean: 2.134931726907455 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.26843281323465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010415979939220613",
            "extra": "mean: 2.211076271186392 msec\nrounds: 472"
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
        "date": 1649340382125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.40499029844901,
            "unit": "iter/sec",
            "range": "stddev: 0.0004008979358367001",
            "extra": "mean: 8.169601562499947 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.84985268275105,
            "unit": "iter/sec",
            "range": "stddev: 0.00021028143860172448",
            "extra": "mean: 6.542368098159437 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.89564371817667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001489850647636501",
            "extra": "mean: 4.833354545454577 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.08611166190184,
            "unit": "iter/sec",
            "range": "stddev: 0.00009965650173441211",
            "extra": "mean: 3.124159292035365 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.77575209202756,
            "unit": "iter/sec",
            "range": "stddev: 0.0003864088007208692",
            "extra": "mean: 8.712641666666638 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.18789959968902,
            "unit": "iter/sec",
            "range": "stddev: 0.0002763184447083237",
            "extra": "mean: 6.935394736842097 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.37006573093686,
            "unit": "iter/sec",
            "range": "stddev: 0.0001475068179253548",
            "extra": "mean: 4.965981395348813 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.81993516126226,
            "unit": "iter/sec",
            "range": "stddev: 0.00006373250138877324",
            "extra": "mean: 3.097702127659674 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.307668543998384,
            "unit": "iter/sec",
            "range": "stddev: 0.0017742002144911313",
            "extra": "mean: 75.1446428571434 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.392656423835463,
            "unit": "iter/sec",
            "range": "stddev: 0.001975540361465413",
            "extra": "mean: 74.66778571428583 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.8272875783989,
            "unit": "iter/sec",
            "range": "stddev: 0.0002020600083649635",
            "extra": "mean: 5.88833522727236 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.02227747570984,
            "unit": "iter/sec",
            "range": "stddev: 0.00010163941322744024",
            "extra": "mean: 4.015704980842696 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.88331709316657,
            "unit": "iter/sec",
            "range": "stddev: 0.00007088745796409238",
            "extra": "mean: 2.1057804391216624 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.9817839633572,
            "unit": "iter/sec",
            "range": "stddev: 0.00007178660290894256",
            "extra": "mean: 2.193070063694387 msec\nrounds: 471"
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
        "date": 1649691112710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.40712361829543,
            "unit": "iter/sec",
            "range": "stddev: 0.0007204763246340994",
            "extra": "mean: 8.664976377952726 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.43959464160818,
            "unit": "iter/sec",
            "range": "stddev: 0.00024599979802563375",
            "extra": "mean: 6.559975460122691 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.32196943258734,
            "unit": "iter/sec",
            "range": "stddev: 0.00018494772244973272",
            "extra": "mean: 4.754615044247773 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.79227745486446,
            "unit": "iter/sec",
            "range": "stddev: 0.00020111266201958694",
            "extra": "mean: 3.176698005698002 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.77183698689046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052241789695642",
            "extra": "mean: 8.867462184873768 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.06013358723675,
            "unit": "iter/sec",
            "range": "stddev: 0.000322747614421012",
            "extra": "mean: 6.990067567567377 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.48785018788817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004223667910734604",
            "extra": "mean: 5.089373205741562 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.2498529020546,
            "unit": "iter/sec",
            "range": "stddev: 0.00019482306807991085",
            "extra": "mean: 3.2441215805470205 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.714147814682567,
            "unit": "iter/sec",
            "range": "stddev: 0.0020654454570128",
            "extra": "mean: 78.652538461538 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.346361924735978,
            "unit": "iter/sec",
            "range": "stddev: 0.0017913350920718736",
            "extra": "mean: 74.92678571428613 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.71365797073793,
            "unit": "iter/sec",
            "range": "stddev: 0.00043750984166133166",
            "extra": "mean: 6.034505617977379 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.47998631542745,
            "unit": "iter/sec",
            "range": "stddev: 0.0001609327807236056",
            "extra": "mean: 4.175714285714319 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.44395592933216,
            "unit": "iter/sec",
            "range": "stddev: 0.00011746549563716568",
            "extra": "mean: 2.1765440313112134 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.1042025575815,
            "unit": "iter/sec",
            "range": "stddev: 0.0001444309560705985",
            "extra": "mean: 2.2568054968290436 msec\nrounds: 473"
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
        "date": 1649779416190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.92796497528931,
            "unit": "iter/sec",
            "range": "stddev: 0.0009665670361793461",
            "extra": "mean: 8.777476190476126 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.15902278646206,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207088871717798",
            "extra": "mean: 7.084208860759453 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.94506148807986,
            "unit": "iter/sec",
            "range": "stddev: 0.00048626660422966615",
            "extra": "mean: 5.077558139534894 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.52460527574675,
            "unit": "iter/sec",
            "range": "stddev: 0.00045725063099764316",
            "extra": "mean: 3.3386238805970057 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.9022332816457,
            "unit": "iter/sec",
            "range": "stddev: 0.0011997385005588855",
            "extra": "mean: 9.624432203389892 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.1861634362315,
            "unit": "iter/sec",
            "range": "stddev: 0.000503998627041629",
            "extra": "mean: 7.133371621621447 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5786070853969,
            "unit": "iter/sec",
            "range": "stddev: 0.00038433187377583545",
            "extra": "mean: 5.113033653846214 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.64811521277335,
            "unit": "iter/sec",
            "range": "stddev: 0.0002577730426566565",
            "extra": "mean: 3.2932857142856844 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.03907251214503,
            "unit": "iter/sec",
            "range": "stddev: 0.0037363566728581543",
            "extra": "mean: 76.69257142857104 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.643588536657028,
            "unit": "iter/sec",
            "range": "stddev: 0.0032177083998020045",
            "extra": "mean: 73.29449999999937 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.79827081564838,
            "unit": "iter/sec",
            "range": "stddev: 0.0009204265457996514",
            "extra": "mean: 6.85879190751466 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.08778514805778,
            "unit": "iter/sec",
            "range": "stddev: 0.00031670255231896067",
            "extra": "mean: 4.2001314741037135 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.0635163736342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896500758841831",
            "extra": "mean: 2.2932439024391247 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.4641761651553,
            "unit": "iter/sec",
            "range": "stddev: 0.00011975929153041071",
            "extra": "mean: 2.2806880341880706 msec\nrounds: 468"
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
        "date": 1649968825778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.14074376575012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400873805725045",
            "extra": "mean: 8.464480314960634 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.2852170903533,
            "unit": "iter/sec",
            "range": "stddev: 0.0006535299218942162",
            "extra": "mean: 6.883012738853513 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.66078997938826,
            "unit": "iter/sec",
            "range": "stddev: 0.00023567226693065992",
            "extra": "mean: 4.862375565610839 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.42104367578884,
            "unit": "iter/sec",
            "range": "stddev: 0.00036362051071060027",
            "extra": "mean: 3.4671533923304496 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.81595864351897,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777661178973208",
            "extra": "mean: 8.943267241379248 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.72524674892784,
            "unit": "iter/sec",
            "range": "stddev: 0.00043830951759482405",
            "extra": "mean: 7.106045454545411 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.26364692218257,
            "unit": "iter/sec",
            "range": "stddev: 0.00038153846860909435",
            "extra": "mean: 5.174278846153872 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.20037216503965,
            "unit": "iter/sec",
            "range": "stddev: 0.00019179226192814883",
            "extra": "mean: 3.1625516224188805 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.982749635091947,
            "unit": "iter/sec",
            "range": "stddev: 0.0018419797221208543",
            "extra": "mean: 77.02528571428603 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.375025197592059,
            "unit": "iter/sec",
            "range": "stddev: 0.0022886131231537386",
            "extra": "mean: 74.76621428571458 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.07804354434697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004330653328295125",
            "extra": "mean: 6.021265536723252 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.67682044881715,
            "unit": "iter/sec",
            "range": "stddev: 0.00014977525519267436",
            "extra": "mean: 4.037519531250005 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.41136867972784,
            "unit": "iter/sec",
            "range": "stddev: 0.00008142335035837166",
            "extra": "mean: 2.099026315789411 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.0648594822601,
            "unit": "iter/sec",
            "range": "stddev: 0.00011684201490506037",
            "extra": "mean: 2.2023285420946985 msec\nrounds: 487"
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
        "date": 1671164626212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.81111616906946,
            "unit": "iter/sec",
            "range": "stddev: 0.00035688124400504065",
            "extra": "mean: 8.277384000000026 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.89334715671458,
            "unit": "iter/sec",
            "range": "stddev: 0.0008683935298216884",
            "extra": "mean: 7.251981481481545 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.34237703325323,
            "unit": "iter/sec",
            "range": "stddev: 0.0002247007046066089",
            "extra": "mean: 5.145558139534815 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.09528139456137,
            "unit": "iter/sec",
            "range": "stddev: 0.00014578321748758252",
            "extra": "mean: 3.2992925373134616 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.69286000592533,
            "unit": "iter/sec",
            "range": "stddev: 0.0008879452277766487",
            "extra": "mean: 9.643865546218487 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 113.77487532501225,
            "unit": "iter/sec",
            "range": "stddev: 0.0035773089670010113",
            "extra": "mean: 8.789286713286867 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.22481437056453,
            "unit": "iter/sec",
            "range": "stddev: 0.00042262336936931547",
            "extra": "mean: 5.398844660194285 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.2081705348539,
            "unit": "iter/sec",
            "range": "stddev: 0.0003465598740003832",
            "extra": "mean: 3.4222177914108753 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.336737376778089,
            "unit": "iter/sec",
            "range": "stddev: 0.0011034710868715314",
            "extra": "mean: 74.98085714285706 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.263566971065607,
            "unit": "iter/sec",
            "range": "stddev: 0.0023933220796459828",
            "extra": "mean: 75.39449999999955 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.1072364886814,
            "unit": "iter/sec",
            "range": "stddev: 0.001606945710566265",
            "extra": "mean: 6.4058529411767875 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.96027488275968,
            "unit": "iter/sec",
            "range": "stddev: 0.00009776687684189072",
            "extra": "mean: 4.132909836065212 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.75942900146094,
            "unit": "iter/sec",
            "range": "stddev: 0.0001402020300998333",
            "extra": "mean: 2.8755510752687576 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.87274423540293,
            "unit": "iter/sec",
            "range": "stddev: 0.00015694749332560414",
            "extra": "mean: 3.0971954674220226 msec\nrounds: 353"
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
        "date": 1671168915220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.09261149890148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005539648157275617",
            "extra": "mean: 10.858634408602132 msec\nrounds: 93"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.09910695417906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004186179999686333",
            "extra": "mean: 9.082725806451627 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.9045498952755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530077793935593",
            "extra": "mean: 6.807141104294417 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.19741940280522,
            "unit": "iter/sec",
            "range": "stddev: 0.0001238955065783979",
            "extra": "mean: 4.163242063492049 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 79.6675325039157,
            "unit": "iter/sec",
            "range": "stddev: 0.000805608207281003",
            "extra": "mean: 12.552164835164808 msec\nrounds: 91"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 103.12589047849546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005546366547021134",
            "extra": "mean: 9.696885964912246 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.14422141832821,
            "unit": "iter/sec",
            "range": "stddev: 0.00033082457766171394",
            "extra": "mean: 6.616197368421106 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.1738035960554,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482405779009162",
            "extra": "mean: 4.5418663967610895 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.074496320977218,
            "unit": "iter/sec",
            "range": "stddev: 0.002078908432983083",
            "extra": "mean: 99.26054545454446 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.78186442335906,
            "unit": "iter/sec",
            "range": "stddev: 0.002352739424586417",
            "extra": "mean: 102.23000000000032 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 120.72931481541205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004113387841691653",
            "extra": "mean: 8.28299242424212 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 180.88305384189616,
            "unit": "iter/sec",
            "range": "stddev: 0.0001824183061584092",
            "extra": "mean: 5.528433862433938 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 256.67715875260353,
            "unit": "iter/sec",
            "range": "stddev: 0.00019815388515492802",
            "extra": "mean: 3.8959446366781827 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 251.2048529056072,
            "unit": "iter/sec",
            "range": "stddev: 0.00026381927984723294",
            "extra": "mean: 3.980814814814745 msec\nrounds: 270"
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
        "date": 1671338924740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.49015711125244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983147050998991",
            "extra": "mean: 8.889666666666692 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.09507988904258,
            "unit": "iter/sec",
            "range": "stddev: 0.000696750174893005",
            "extra": "mean: 7.294207792207762 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.390287797371,
            "unit": "iter/sec",
            "range": "stddev: 0.0005622480382176262",
            "extra": "mean: 5.669246376811595 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.3801116283738,
            "unit": "iter/sec",
            "range": "stddev: 0.00022872996460554726",
            "extra": "mean: 3.455662500000051 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.20683041400291,
            "unit": "iter/sec",
            "range": "stddev: 0.0008670860888269461",
            "extra": "mean: 9.97935964912288 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.80420752900692,
            "unit": "iter/sec",
            "range": "stddev: 0.0006007845200201066",
            "extra": "mean: 7.824468531468623 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.6755271478836,
            "unit": "iter/sec",
            "range": "stddev: 0.000817477844806889",
            "extra": "mean: 6.0725477386932525 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 268.2757497578665,
            "unit": "iter/sec",
            "range": "stddev: 0.000434224892362724",
            "extra": "mean: 3.7275079872204424 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.317367039621656,
            "unit": "iter/sec",
            "range": "stddev: 0.0022309208331179873",
            "extra": "mean: 81.18618181818152 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.019241881695558,
            "unit": "iter/sec",
            "range": "stddev: 0.002989288612739474",
            "extra": "mean: 83.19992307692286 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 134.67368808762512,
            "unit": "iter/sec",
            "range": "stddev: 0.0008671460190559884",
            "extra": "mean: 7.425355421686769 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 198.3124198801098,
            "unit": "iter/sec",
            "range": "stddev: 0.0006095919818105104",
            "extra": "mean: 5.042548523206727 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 318.8626308593131,
            "unit": "iter/sec",
            "range": "stddev: 0.00033477643146270514",
            "extra": "mean: 3.136146739130478 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 285.72124321208366,
            "unit": "iter/sec",
            "range": "stddev: 0.00036176877696455817",
            "extra": "mean: 3.499914772727365 msec\nrounds: 352"
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
        "date": 1671350995717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.60695619699746,
            "unit": "iter/sec",
            "range": "stddev: 0.0005249607381286108",
            "extra": "mean: 9.745927927927976 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.90100659175334,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112174982751586",
            "extra": "mean: 7.942748251748299 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.49920978195337,
            "unit": "iter/sec",
            "range": "stddev: 0.000396308732676313",
            "extra": "mean: 5.970177419354856 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.5152626581243,
            "unit": "iter/sec",
            "range": "stddev: 0.00034034856095674934",
            "extra": "mean: 3.8984035087719886 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.82191698023307,
            "unit": "iter/sec",
            "range": "stddev: 0.00065614815984947",
            "extra": "mean: 10.658490384615416 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.7974128960394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621165114378981",
            "extra": "mean: 8.417691729323334 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.16893346465923,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793479093050194",
            "extra": "mean: 6.017972067039112 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.34176903303324,
            "unit": "iter/sec",
            "range": "stddev: 0.00023269584518008393",
            "extra": "mean: 3.885882978723274 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.585581957309781,
            "unit": "iter/sec",
            "range": "stddev: 0.001666298238065527",
            "extra": "mean: 79.45599999999953 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.058485509874401,
            "unit": "iter/sec",
            "range": "stddev: 0.002580736324066435",
            "extra": "mean: 82.92915384615458 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 133.47858099351393,
            "unit": "iter/sec",
            "range": "stddev: 0.0005426506551699707",
            "extra": "mean: 7.491838709677268 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 198.25912901041005,
            "unit": "iter/sec",
            "range": "stddev: 0.00035932447516034505",
            "extra": "mean: 5.043903930131221 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 294.88007763384707,
            "unit": "iter/sec",
            "range": "stddev: 0.00023900706818109874",
            "extra": "mean: 3.391209090909496 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 285.15494332543886,
            "unit": "iter/sec",
            "range": "stddev: 0.00024616962981537105",
            "extra": "mean: 3.506865384615583 msec\nrounds: 312"
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
        "date": 1671358558662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.51615151207167,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405339580200059",
            "extra": "mean: 8.887612903225824 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.25950265075963,
            "unit": "iter/sec",
            "range": "stddev: 0.00040886461986581357",
            "extra": "mean: 6.98033974358976 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.23432990880826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315999468183469",
            "extra": "mean: 5.256674757281534 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.4146189114136,
            "unit": "iter/sec",
            "range": "stddev: 0.00029454972893714953",
            "extra": "mean: 3.515993670886057 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.0651379351694,
            "unit": "iter/sec",
            "range": "stddev: 0.0009509722855284728",
            "extra": "mean: 10.09436842105266 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.22973108014523,
            "unit": "iter/sec",
            "range": "stddev: 0.0005935797138752711",
            "extra": "mean: 7.798503448275869 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.13646015784158,
            "unit": "iter/sec",
            "range": "stddev: 0.000497174823828562",
            "extra": "mean: 5.677416243654878 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.3857689027226,
            "unit": "iter/sec",
            "range": "stddev: 0.00036442910463678875",
            "extra": "mean: 3.825762987013116 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.215888140722736,
            "unit": "iter/sec",
            "range": "stddev: 0.0026522060628840064",
            "extra": "mean: 75.66650000000023 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.867984195496863,
            "unit": "iter/sec",
            "range": "stddev: 0.0038703089752766006",
            "extra": "mean: 84.26030769230681 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.97188366126804,
            "unit": "iter/sec",
            "range": "stddev: 0.0007962407628366642",
            "extra": "mean: 7.093613095238434 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 203.203300225652,
            "unit": "iter/sec",
            "range": "stddev: 0.0004655220673879891",
            "extra": "mean: 4.921179916317924 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 303.44097127427835,
            "unit": "iter/sec",
            "range": "stddev: 0.0003864598516278549",
            "extra": "mean: 3.2955338753384966 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 288.44500866160354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004239569440787006",
            "extra": "mean: 3.4668653295130336 msec\nrounds: 349"
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
        "date": 1671364360355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.63703081945657,
            "unit": "iter/sec",
            "range": "stddev: 0.00024842061703439836",
            "extra": "mean: 8.358615999999977 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.91802253353663,
            "unit": "iter/sec",
            "range": "stddev: 0.00013392051093852442",
            "extra": "mean: 6.6703121019108975 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.09116299433015,
            "unit": "iter/sec",
            "range": "stddev: 0.0004533873909218369",
            "extra": "mean: 5.022824644549786 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.5112418591435,
            "unit": "iter/sec",
            "range": "stddev: 0.00007482357559458984",
            "extra": "mean: 3.179536585365869 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.1372823245847,
            "unit": "iter/sec",
            "range": "stddev: 0.00014188465314347382",
            "extra": "mean: 9.07957758620653 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1284211802492,
            "unit": "iter/sec",
            "range": "stddev: 0.00016281938070964594",
            "extra": "mean: 7.085744966443011 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.43532121660397,
            "unit": "iter/sec",
            "range": "stddev: 0.00030531871953342113",
            "extra": "mean: 5.306860696517257 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.44509817110156,
            "unit": "iter/sec",
            "range": "stddev: 0.00019398569341063377",
            "extra": "mean: 3.361964968152753 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.047785650977238,
            "unit": "iter/sec",
            "range": "stddev: 0.002222378718924991",
            "extra": "mean: 76.64135714285766 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.873570155175795,
            "unit": "iter/sec",
            "range": "stddev: 0.0017098666502223415",
            "extra": "mean: 72.07950000000045 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.57808784914084,
            "unit": "iter/sec",
            "range": "stddev: 0.00014567217951439492",
            "extra": "mean: 6.113288235293749 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.71201590747958,
            "unit": "iter/sec",
            "range": "stddev: 0.00010227540614035737",
            "extra": "mean: 4.27877016129061 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 348.3979637464887,
            "unit": "iter/sec",
            "range": "stddev: 0.00011698017094823398",
            "extra": "mean: 2.870280839895059 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 324.94129211947137,
            "unit": "iter/sec",
            "range": "stddev: 0.00017935099205046228",
            "extra": "mean: 3.0774789915968244 msec\nrounds: 357"
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
        "date": 1671374948787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.21540843057906,
            "unit": "iter/sec",
            "range": "stddev: 0.0010389125797282137",
            "extra": "mean: 8.531301587301561 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.56298818420495,
            "unit": "iter/sec",
            "range": "stddev: 0.0006793649913867392",
            "extra": "mean: 6.869878205128177 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.87703798496347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003544683893805736",
            "extra": "mean: 5.079312500000001 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.82603327538845,
            "unit": "iter/sec",
            "range": "stddev: 0.00018096671884516743",
            "extra": "mean: 3.2698328173374493 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.4650983416942,
            "unit": "iter/sec",
            "range": "stddev: 0.0009319120818792516",
            "extra": "mean: 9.219555555555127 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.4517224652959,
            "unit": "iter/sec",
            "range": "stddev: 0.00033103288954202715",
            "extra": "mean: 7.222734265734098 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.40037717755092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003354689973991556",
            "extra": "mean: 5.307845000000118 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.48892732906126,
            "unit": "iter/sec",
            "range": "stddev: 0.0003917344566060425",
            "extra": "mean: 3.361469648562316 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.006873203425657,
            "unit": "iter/sec",
            "range": "stddev: 0.0040854125620558394",
            "extra": "mean: 76.88242857142846 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.88516046617142,
            "unit": "iter/sec",
            "range": "stddev: 0.0013569166026933224",
            "extra": "mean: 72.01933333333179 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.25482815926247,
            "unit": "iter/sec",
            "range": "stddev: 0.00032101322013955793",
            "extra": "mean: 6.201364705882514 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.0780582549185,
            "unit": "iter/sec",
            "range": "stddev: 0.00030409835030067235",
            "extra": "mean: 4.423251012145688 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.2667711338202,
            "unit": "iter/sec",
            "range": "stddev: 0.00038753309162176374",
            "extra": "mean: 2.904724137931073 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.5163492687155,
            "unit": "iter/sec",
            "range": "stddev: 0.00037124518721341797",
            "extra": "mean: 2.9983537604457764 msec\nrounds: 359"
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
        "date": 1671378795733,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.36143812431452,
            "unit": "iter/sec",
            "range": "stddev: 0.0007396038645897812",
            "extra": "mean: 9.061136000000012 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.6695689975153,
            "unit": "iter/sec",
            "range": "stddev: 0.0005384385847928714",
            "extra": "mean: 7.108858064516166 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.54092553422404,
            "unit": "iter/sec",
            "range": "stddev: 0.00040754383460282707",
            "extra": "mean: 5.24821634615386 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.9307178528259,
            "unit": "iter/sec",
            "range": "stddev: 0.00041818396455366326",
            "extra": "mean: 3.5980189873417845 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.59077135420264,
            "unit": "iter/sec",
            "range": "stddev: 0.001248923209732274",
            "extra": "mean: 9.843413793103675 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.98499815265737,
            "unit": "iter/sec",
            "range": "stddev: 0.0005919274075790163",
            "extra": "mean: 7.634462068965663 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.2724890644967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005152087675356983",
            "extra": "mean: 5.67303499999996 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.77405261180076,
            "unit": "iter/sec",
            "range": "stddev: 0.00029726805141955",
            "extra": "mean: 3.4870658307210114 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.938858349075668,
            "unit": "iter/sec",
            "range": "stddev: 0.0019694637581085224",
            "extra": "mean: 77.2865714285711 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.941669537260145,
            "unit": "iter/sec",
            "range": "stddev: 0.005073694077271941",
            "extra": "mean: 83.74038461538575 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 139.53037584637548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006899860277502537",
            "extra": "mean: 7.166898203592681 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.08887130977558,
            "unit": "iter/sec",
            "range": "stddev: 0.0005620336246831501",
            "extra": "mean: 4.97292561983457 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 314.24713637978647,
            "unit": "iter/sec",
            "range": "stddev: 0.00037500181131567103",
            "extra": "mean: 3.182208791208968 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 316.4582494749058,
            "unit": "iter/sec",
            "range": "stddev: 0.0002880029630655189",
            "extra": "mean: 3.1599745042490888 msec\nrounds: 353"
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
        "date": 1671380050972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.63864385163099,
            "unit": "iter/sec",
            "range": "stddev: 0.0003363120479401693",
            "extra": "mean: 10.03626666666671 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.10505355245792,
            "unit": "iter/sec",
            "range": "stddev: 0.00024191203438299398",
            "extra": "mean: 8.189669230769283 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.66760197864483,
            "unit": "iter/sec",
            "range": "stddev: 0.00011402483899588777",
            "extra": "mean: 6.07284000000004 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.1717938713631,
            "unit": "iter/sec",
            "range": "stddev: 0.00006531074991868432",
            "extra": "mean: 3.9343468634686594 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.99910948249604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008043249869662746",
            "extra": "mean: 11.11122105263153 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 113.32315345683821,
            "unit": "iter/sec",
            "range": "stddev: 0.00023851108241220218",
            "extra": "mean: 8.824322033898161 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.4986541024126,
            "unit": "iter/sec",
            "range": "stddev: 0.00010178060437250895",
            "extra": "mean: 6.3492606060605175 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.77093535749324,
            "unit": "iter/sec",
            "range": "stddev: 0.0002019043575296739",
            "extra": "mean: 4.052341085271308 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.912471069551136,
            "unit": "iter/sec",
            "range": "stddev: 0.0018808817129698655",
            "extra": "mean: 91.63827272727266 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.13459686264167,
            "unit": "iter/sec",
            "range": "stddev: 0.0022441695298674545",
            "extra": "mean: 89.81016666666737 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 130.37479470659872,
            "unit": "iter/sec",
            "range": "stddev: 0.0004161638974389341",
            "extra": "mean: 7.670194244604141 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 190.86348944497124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744960069458861",
            "extra": "mean: 5.239346733668069 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 289.5433095084868,
            "unit": "iter/sec",
            "range": "stddev: 0.00009302737612780372",
            "extra": "mean: 3.4537147540986055 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 271.1260800389833,
            "unit": "iter/sec",
            "range": "stddev: 0.00020233324173825467",
            "extra": "mean: 3.688320945945949 msec\nrounds: 296"
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
        "date": 1671419749070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.81967092258243,
            "unit": "iter/sec",
            "range": "stddev: 0.00021924514812841678",
            "extra": "mean: 7.9478828125000085 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.21168671698933,
            "unit": "iter/sec",
            "range": "stddev: 0.00021172031206182084",
            "extra": "mean: 6.4015696969696805 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.25508491735542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003886138317453643",
            "extra": "mean: 4.871986486486526 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.00631744793293,
            "unit": "iter/sec",
            "range": "stddev: 0.00007641441469937542",
            "extra": "mean: 3.0674252199413647 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.22601214984324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586647243296853",
            "extra": "mean: 8.910590163934618 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.31191463585515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220312544742351",
            "extra": "mean: 6.834713375795988 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.86752073053657,
            "unit": "iter/sec",
            "range": "stddev: 0.00014541472749169721",
            "extra": "mean: 4.905146226415131 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.12433506540157,
            "unit": "iter/sec",
            "range": "stddev: 0.00011056310337304822",
            "extra": "mean: 3.2349442815248746 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.699662303324256,
            "unit": "iter/sec",
            "range": "stddev: 0.004172817121653633",
            "extra": "mean: 72.99449999999982 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.086411683833415,
            "unit": "iter/sec",
            "range": "stddev: 0.0023672863849939947",
            "extra": "mean: 70.99039999999945 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.741058205132,
            "unit": "iter/sec",
            "range": "stddev: 0.00040449231087040554",
            "extra": "mean: 5.755691891891918 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.81947348331545,
            "unit": "iter/sec",
            "range": "stddev: 0.000358297711592828",
            "extra": "mean: 4.035195402298864 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 372.7710443909198,
            "unit": "iter/sec",
            "range": "stddev: 0.00024224754602501962",
            "extra": "mean: 2.682611793611614 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 354.3664986542151,
            "unit": "iter/sec",
            "range": "stddev: 0.00016248851484055123",
            "extra": "mean: 2.8219371859295963 msec\nrounds: 398"
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
        "date": 1671424507484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.87778209257527,
            "unit": "iter/sec",
            "range": "stddev: 0.00027545199268648923",
            "extra": "mean: 8.272818897637794 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.5164428484732,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552001162755703",
            "extra": "mean: 6.599943749999915 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.3751879929191,
            "unit": "iter/sec",
            "range": "stddev: 0.0004977325532107167",
            "extra": "mean: 5.0664929577464175 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.8689766384896,
            "unit": "iter/sec",
            "range": "stddev: 0.00036792299715123877",
            "extra": "mean: 3.1459502923976563 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.47258749785323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006789896076200772",
            "extra": "mean: 9.134706896551707 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.03858572857823,
            "unit": "iter/sec",
            "range": "stddev: 0.0007837577726447428",
            "extra": "mean: 7.090258278145603 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.2913500565747,
            "unit": "iter/sec",
            "range": "stddev: 0.00024559424350891124",
            "extra": "mean: 5.146909523809554 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.5591384285739,
            "unit": "iter/sec",
            "range": "stddev: 0.00039683035688204066",
            "extra": "mean: 3.305138972809685 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.699568463593264,
            "unit": "iter/sec",
            "range": "stddev: 0.0011637602845937889",
            "extra": "mean: 72.99500000000072 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.022085719814509,
            "unit": "iter/sec",
            "range": "stddev: 0.0010996623161321363",
            "extra": "mean: 71.31606666666622 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.01679818241232,
            "unit": "iter/sec",
            "range": "stddev: 0.0002664090613702566",
            "extra": "mean: 6.13433714285703 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.25545755319828,
            "unit": "iter/sec",
            "range": "stddev: 0.00029319701628078193",
            "extra": "mean: 4.250698412698333 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.4940968317532,
            "unit": "iter/sec",
            "range": "stddev: 0.00020152281466053593",
            "extra": "mean: 2.8289015544040432 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.0202118102366,
            "unit": "iter/sec",
            "range": "stddev: 0.0003135020584320695",
            "extra": "mean: 2.9238038147138243 msec\nrounds: 367"
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
        "date": 1671430754272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.77637095114906,
            "unit": "iter/sec",
            "range": "stddev: 0.0032052800332326554",
            "extra": "mean: 10.333100840336135 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.591789923576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002783978674971123",
            "extra": "mean: 7.013026490066248 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.37990638560444,
            "unit": "iter/sec",
            "range": "stddev: 0.00028538774962143465",
            "extra": "mean: 5.252655172413799 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.77125900191385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003022498902817261",
            "extra": "mean: 3.4391294498381564 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.06929731547234,
            "unit": "iter/sec",
            "range": "stddev: 0.000578009030327365",
            "extra": "mean: 9.339745614035072 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.53256240895342,
            "unit": "iter/sec",
            "range": "stddev: 0.0004418560092233174",
            "extra": "mean: 7.378300699300724 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.87170097920014,
            "unit": "iter/sec",
            "range": "stddev: 0.00045269517677673277",
            "extra": "mean: 5.266714285714157 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 275.121961745451,
            "unit": "iter/sec",
            "range": "stddev: 0.0005765863452441163",
            "extra": "mean: 3.634751633987047 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.75152380709478,
            "unit": "iter/sec",
            "range": "stddev: 0.003143828264050937",
            "extra": "mean: 78.42200000000103 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.013578776468545,
            "unit": "iter/sec",
            "range": "stddev: 0.0036214877490448128",
            "extra": "mean: 83.23914285714247 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 139.51037027086218,
            "unit": "iter/sec",
            "range": "stddev: 0.0012682807924081448",
            "extra": "mean: 7.16792592592565 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.49339387107824,
            "unit": "iter/sec",
            "range": "stddev: 0.00025552034575147174",
            "extra": "mean: 4.5767974137929714 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 313.4363342666675,
            "unit": "iter/sec",
            "range": "stddev: 0.0003313907578600857",
            "extra": "mean: 3.190440579710243 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 310.3953637712905,
            "unit": "iter/sec",
            "range": "stddev: 0.0001940506919471525",
            "extra": "mean: 3.221697604790363 msec\nrounds: 334"
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
        "date": 1671438805514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.2972172749879,
            "unit": "iter/sec",
            "range": "stddev: 0.0003730769425659018",
            "extra": "mean: 8.38242519685044 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.57787834549055,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397348667282428",
            "extra": "mean: 6.597268749999957 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.37674608958164,
            "unit": "iter/sec",
            "range": "stddev: 0.00044178925794455346",
            "extra": "mean: 4.990599056603773 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.2303535839289,
            "unit": "iter/sec",
            "range": "stddev: 0.0002309157719351193",
            "extra": "mean: 3.2130542168674814 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.42391225987743,
            "unit": "iter/sec",
            "range": "stddev: 0.00017466983423680658",
            "extra": "mean: 8.816483050847294 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.05285143479765,
            "unit": "iter/sec",
            "range": "stddev: 0.00027525528293869035",
            "extra": "mean: 7.191510204081671 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.29384074861034,
            "unit": "iter/sec",
            "range": "stddev: 0.00045945043646109884",
            "extra": "mean: 5.173470588235436 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.38687810512744,
            "unit": "iter/sec",
            "range": "stddev: 0.00008922791826525134",
            "extra": "mean: 3.307021806853475 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.087695976561749,
            "unit": "iter/sec",
            "range": "stddev: 0.002757244990848841",
            "extra": "mean: 76.40764285714319 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.103510363729479,
            "unit": "iter/sec",
            "range": "stddev: 0.0005908952852207835",
            "extra": "mean: 70.90433333333361 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.11242846321136,
            "unit": "iter/sec",
            "range": "stddev: 0.00022162642656002883",
            "extra": "mean: 6.093383720929871 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.31772111193894,
            "unit": "iter/sec",
            "range": "stddev: 0.000254038149784255",
            "extra": "mean: 4.249573705179252 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 350.17583099415083,
            "unit": "iter/sec",
            "range": "stddev: 0.00023919646016284045",
            "extra": "mean: 2.855708222811938 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 339.7832540505727,
            "unit": "iter/sec",
            "range": "stddev: 0.00007122292858008173",
            "extra": "mean: 2.9430526315789596 msec\nrounds: 361"
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
        "date": 1671466717305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.83227484584897,
            "unit": "iter/sec",
            "range": "stddev: 0.00047704258743035084",
            "extra": "mean: 8.415222222222162 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.63297550259767,
            "unit": "iter/sec",
            "range": "stddev: 0.000464155908352338",
            "extra": "mean: 6.962189542483679 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.93686483995262,
            "unit": "iter/sec",
            "range": "stddev: 0.000321318078694343",
            "extra": "mean: 5.183042654028469 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.54125256524713,
            "unit": "iter/sec",
            "range": "stddev: 0.0002334156048077442",
            "extra": "mean: 3.3608785046729355 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.81509334790799,
            "unit": "iter/sec",
            "range": "stddev: 0.0011125022636470521",
            "extra": "mean: 9.821726495726356 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.19464791842896,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942506616001735",
            "extra": "mean: 7.3424324324325125 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.87372790329363,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967114363713352",
            "extra": "mean: 5.438514851485141 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.5197491297382,
            "unit": "iter/sec",
            "range": "stddev: 0.00023403056027560237",
            "extra": "mean: 3.539575562700864 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.703597840388426,
            "unit": "iter/sec",
            "range": "stddev: 0.0017287795097724742",
            "extra": "mean: 78.71785714285677 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.160220038878979,
            "unit": "iter/sec",
            "range": "stddev: 0.003897431633865903",
            "extra": "mean: 75.98657142857184 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.4986281493139,
            "unit": "iter/sec",
            "range": "stddev: 0.0004671218414505751",
            "extra": "mean: 6.389832369941986 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.9335665408575,
            "unit": "iter/sec",
            "range": "stddev: 0.00014913014349501825",
            "extra": "mean: 4.256522448979589 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.5373396667642,
            "unit": "iter/sec",
            "range": "stddev: 0.00015866875230272475",
            "extra": "mean: 2.8609246753247093 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 313.3321474268515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050604258786079",
            "extra": "mean: 3.1915014409220603 msec\nrounds: 347"
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
        "date": 1671541014510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.8997934618124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005771248397030377",
            "extra": "mean: 9.267858333333301 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.56413960640984,
            "unit": "iter/sec",
            "range": "stddev: 0.00026261127489164216",
            "extra": "mean: 7.014386666666622 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.01463677102976,
            "unit": "iter/sec",
            "range": "stddev: 0.00018618101746017054",
            "extra": "mean: 5.262752475247545 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.0593827609353,
            "unit": "iter/sec",
            "range": "stddev: 0.00007658079517991585",
            "extra": "mean: 3.32160383386582 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.6452917259157,
            "unit": "iter/sec",
            "range": "stddev: 0.0004207525159491818",
            "extra": "mean: 9.465637168141695 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.21480504340576,
            "unit": "iter/sec",
            "range": "stddev: 0.00023926062281975062",
            "extra": "mean: 7.450742857143032 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.63722611746667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001516975278319121",
            "extra": "mean: 5.416025906735609 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.79227802050826,
            "unit": "iter/sec",
            "range": "stddev: 0.00008677980626240069",
            "extra": "mean: 3.450747572815695 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.519513588006017,
            "unit": "iter/sec",
            "range": "stddev: 0.0013959841441677412",
            "extra": "mean: 79.87530769230708 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.624611680471176,
            "unit": "iter/sec",
            "range": "stddev: 0.0027157047422815767",
            "extra": "mean: 79.21035714285652 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.18554019152063,
            "unit": "iter/sec",
            "range": "stddev: 0.00035364128660435404",
            "extra": "mean: 6.7030624999998345 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.1171547726627,
            "unit": "iter/sec",
            "range": "stddev: 0.00017326362816755554",
            "extra": "mean: 4.522489451477116 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 322.1356253446691,
            "unit": "iter/sec",
            "range": "stddev: 0.00023627777426424082",
            "extra": "mean: 3.1042825484764363 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.2984341878101,
            "unit": "iter/sec",
            "range": "stddev: 0.00016230261209158276",
            "extra": "mean: 3.1220883190881925 msec\nrounds: 351"
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
        "date": 1671541867537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.79972044862612,
            "unit": "iter/sec",
            "range": "stddev: 0.000346591393225573",
            "extra": "mean: 8.012838461538466 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.50366009498572,
            "unit": "iter/sec",
            "range": "stddev: 0.00041693176453271567",
            "extra": "mean: 6.7338407643312035 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.69470682276062,
            "unit": "iter/sec",
            "range": "stddev: 0.00017002182543964292",
            "extra": "mean: 4.7916883720930965 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.4442054085168,
            "unit": "iter/sec",
            "range": "stddev: 0.00012031352876957893",
            "extra": "mean: 3.091723342939408 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.0634695937522,
            "unit": "iter/sec",
            "range": "stddev: 0.0003175702814936392",
            "extra": "mean: 8.615975409835853 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.89116137946297,
            "unit": "iter/sec",
            "range": "stddev: 0.00017848476614993076",
            "extra": "mean: 6.8544248366013045 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.6458736749142,
            "unit": "iter/sec",
            "range": "stddev: 0.00016500849475078208",
            "extra": "mean: 4.815891509433882 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.54004460711064,
            "unit": "iter/sec",
            "range": "stddev: 0.0002408707995807671",
            "extra": "mean: 3.2410703812316553 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.999626725004116,
            "unit": "iter/sec",
            "range": "stddev: 0.005723424196010025",
            "extra": "mean: 76.92528571428525 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.868285742123035,
            "unit": "iter/sec",
            "range": "stddev: 0.004502175127548864",
            "extra": "mean: 77.71042857142974 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 143.80296986575416,
            "unit": "iter/sec",
            "range": "stddev: 0.0006504818758802244",
            "extra": "mean: 6.953959302325537 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.33801650611736,
            "unit": "iter/sec",
            "range": "stddev: 0.0003513033739201788",
            "extra": "mean: 4.418170731707249 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.75310057798015,
            "unit": "iter/sec",
            "range": "stddev: 0.00009604127069633087",
            "extra": "mean: 2.7719789473683 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.4425439224971,
            "unit": "iter/sec",
            "range": "stddev: 0.00014028740792395086",
            "extra": "mean: 2.8699136125651368 msec\nrounds: 382"
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
        "date": 1671544190193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.25511058353719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191165287309188",
            "extra": "mean: 8.11325384615384 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.68967532356038,
            "unit": "iter/sec",
            "range": "stddev: 0.00045766440551400187",
            "extra": "mean: 6.464555555555508 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.08691010432923,
            "unit": "iter/sec",
            "range": "stddev: 0.000873077472193532",
            "extra": "mean: 5.552874439461885 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.8280880480282,
            "unit": "iter/sec",
            "range": "stddev: 0.0003434818322215111",
            "extra": "mean: 3.2275963302752086 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.5689037270875,
            "unit": "iter/sec",
            "range": "stddev: 0.0003014508288326245",
            "extra": "mean: 8.728371900826438 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.47475877628938,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160273626534882",
            "extra": "mean: 7.068398692810467 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.2710775723139,
            "unit": "iter/sec",
            "range": "stddev: 0.00023648200198907217",
            "extra": "mean: 5.018289719626311 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.6363874859484,
            "unit": "iter/sec",
            "range": "stddev: 0.00025340033057854054",
            "extra": "mean: 3.452604863221872 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.75242877715369,
            "unit": "iter/sec",
            "range": "stddev: 0.0011850169563407276",
            "extra": "mean: 72.71442857142851 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.76561020196912,
            "unit": "iter/sec",
            "range": "stddev: 0.002201234173301749",
            "extra": "mean: 72.64479999999953 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.6500760605582,
            "unit": "iter/sec",
            "range": "stddev: 0.0004351342455563798",
            "extra": "mean: 6.263698863636505 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.7322547053834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001003113701493922",
            "extra": "mean: 4.052976377952993 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.7005578359927,
            "unit": "iter/sec",
            "range": "stddev: 0.0007251221064396089",
            "extra": "mean: 2.9010687022902832 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.31291234358423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002190464011687058",
            "extra": "mean: 3.0274323607422953 msec\nrounds: 377"
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
        "date": 1671549496499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.86868037140637,
            "unit": "iter/sec",
            "range": "stddev: 0.0014624392311631035",
            "extra": "mean: 8.556612403100809 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.12138587562023,
            "unit": "iter/sec",
            "range": "stddev: 0.0009907277120717488",
            "extra": "mean: 7.568797385620866 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.0566566144221,
            "unit": "iter/sec",
            "range": "stddev: 0.0007406370129740576",
            "extra": "mean: 5.52313302752297 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.62563909950643,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361104772524145",
            "extra": "mean: 3.3826565349543447 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.64893924298869,
            "unit": "iter/sec",
            "range": "stddev: 0.000957405982358746",
            "extra": "mean: 9.376558333333278 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.17635205634977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007751459552140853",
            "extra": "mean: 7.3434189189191965 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7390680379099,
            "unit": "iter/sec",
            "range": "stddev: 0.0010545336205145734",
            "extra": "mean: 5.242764423076909 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.1598418142746,
            "unit": "iter/sec",
            "range": "stddev: 0.0002056083544111908",
            "extra": "mean: 3.266267692307696 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.062894102849679,
            "unit": "iter/sec",
            "range": "stddev: 0.0017055846923738685",
            "extra": "mean: 76.55271428571479 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.612487623996598,
            "unit": "iter/sec",
            "range": "stddev: 0.004366537067463125",
            "extra": "mean: 79.28649999999949 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.59335812315166,
            "unit": "iter/sec",
            "range": "stddev: 0.0009068013446470142",
            "extra": "mean: 6.345445086705671 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.37994053007486,
            "unit": "iter/sec",
            "range": "stddev: 0.0001460008596280963",
            "extra": "mean: 4.212655870445401 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.6875478406939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002199790271332715",
            "extra": "mean: 2.89278571428566 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.5866722711883,
            "unit": "iter/sec",
            "range": "stddev: 0.00018624665514626763",
            "extra": "mean: 2.9361101928373787 msec\nrounds: 363"
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
        "date": 1671551877788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.24083769633552,
            "unit": "iter/sec",
            "range": "stddev: 0.00039529526264707975",
            "extra": "mean: 10.611111111111063 msec\nrounds: 99"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.31199124070474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003816314376755179",
            "extra": "mean: 8.52427777777777 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.0994739168991,
            "unit": "iter/sec",
            "range": "stddev: 0.00025900987446638606",
            "extra": "mean: 6.325131736526992 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.13019582244493,
            "unit": "iter/sec",
            "range": "stddev: 0.00007591230804040352",
            "extra": "mean: 4.030142307692257 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.47550673267082,
            "unit": "iter/sec",
            "range": "stddev: 0.0008704280056093255",
            "extra": "mean: 11.563968085106296 msec\nrounds: 94"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 105.66977022695474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009021007708489605",
            "extra": "mean: 9.463444444444484 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.31266082844283,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976777669734789",
            "extra": "mean: 6.608832298136589 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.91516252685463,
            "unit": "iter/sec",
            "range": "stddev: 0.0001759846345718284",
            "extra": "mean: 4.506226562499924 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.843603045073912,
            "unit": "iter/sec",
            "range": "stddev: 0.003215621551681145",
            "extra": "mean: 101.58881818181763 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.103366625457173,
            "unit": "iter/sec",
            "range": "stddev: 0.0021880456784311108",
            "extra": "mean: 98.97690909090913 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 124.53150785517562,
            "unit": "iter/sec",
            "range": "stddev: 0.00043412799670573224",
            "extra": "mean: 8.030096296295984 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 168.8033774742448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005091069661986591",
            "extra": "mean: 5.924052083333316 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 266.92645086784745,
            "unit": "iter/sec",
            "range": "stddev: 0.00018528887984193561",
            "extra": "mean: 3.746350340135792 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 247.6178980701902,
            "unit": "iter/sec",
            "range": "stddev: 0.00015570371284156798",
            "extra": "mean: 4.038480286738151 msec\nrounds: 279"
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
        "date": 1671589421544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.65386980089525,
            "unit": "iter/sec",
            "range": "stddev: 0.0004820865667748861",
            "extra": "mean: 8.572368852458983 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.33868979561962,
            "unit": "iter/sec",
            "range": "stddev: 0.00042121078802641586",
            "extra": "mean: 7.025496732026084 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.26152068546213,
            "unit": "iter/sec",
            "range": "stddev: 0.00037894832743234674",
            "extra": "mean: 5.201248780487853 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.31139544379283,
            "unit": "iter/sec",
            "range": "stddev: 0.00010447294183480117",
            "extra": "mean: 3.3298769716088343 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.94686387315178,
            "unit": "iter/sec",
            "range": "stddev: 0.0015223529655949393",
            "extra": "mean: 9.906201754386188 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.83781488080209,
            "unit": "iter/sec",
            "range": "stddev: 0.0007946855676738812",
            "extra": "mean: 8.140815602836701 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.18031812440768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003849230025249022",
            "extra": "mean: 5.64396774193535 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.07704480000825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002377939078920568",
            "extra": "mean: 3.6619701986754833 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.105098653658235,
            "unit": "iter/sec",
            "range": "stddev: 0.003519823520885637",
            "extra": "mean: 90.04872727272715 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.974790905290718,
            "unit": "iter/sec",
            "range": "stddev: 0.005626934768673085",
            "extra": "mean: 91.11790909090769 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.268789890696,
            "unit": "iter/sec",
            "range": "stddev: 0.00029630236911665935",
            "extra": "mean: 6.482192546583982 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 211.0825558308854,
            "unit": "iter/sec",
            "range": "stddev: 0.0007305928113045611",
            "extra": "mean: 4.737482905982897 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 326.9299405062452,
            "unit": "iter/sec",
            "range": "stddev: 0.00008938149192293757",
            "extra": "mean: 3.0587593123209142 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 315.13875953505703,
            "unit": "iter/sec",
            "range": "stddev: 0.00010908688622996926",
            "extra": "mean: 3.1732053571428644 msec\nrounds: 336"
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
        "date": 1672072320826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.97531970373915,
            "unit": "iter/sec",
            "range": "stddev: 0.000517366745165801",
            "extra": "mean: 8.622524193548388 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.76484342349423,
            "unit": "iter/sec",
            "range": "stddev: 0.00048244414049402684",
            "extra": "mean: 7.053935064934958 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.11973795136967,
            "unit": "iter/sec",
            "range": "stddev: 0.00035036553879721295",
            "extra": "mean: 5.178134615384651 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.2915661703623,
            "unit": "iter/sec",
            "range": "stddev: 0.00045157960549589915",
            "extra": "mean: 3.3979906832298092 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.88660288140062,
            "unit": "iter/sec",
            "range": "stddev: 0.0007995234409855668",
            "extra": "mean: 9.268991452991589 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.9080041054094,
            "unit": "iter/sec",
            "range": "stddev: 0.0006665833096054678",
            "extra": "mean: 7.581041095890488 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.37431034650487,
            "unit": "iter/sec",
            "range": "stddev: 0.000646209460087556",
            "extra": "mean: 5.63779500000015 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 266.7391694033814,
            "unit": "iter/sec",
            "range": "stddev: 0.00037676852603062843",
            "extra": "mean: 3.7489807073955865 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.39781762987385,
            "unit": "iter/sec",
            "range": "stddev: 0.0018580761186341678",
            "extra": "mean: 80.65935714285669 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.487089241658978,
            "unit": "iter/sec",
            "range": "stddev: 0.0052373829846089496",
            "extra": "mean: 80.08271428571489 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.95366738199104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812527069427835",
            "extra": "mean: 6.713497005988474 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.54348332862648,
            "unit": "iter/sec",
            "range": "stddev: 0.00041215409382127066",
            "extra": "mean: 4.772279166666819 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.72903117446293,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899297830256579",
            "extra": "mean: 3.0420191256831237 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 300.8454179971532,
            "unit": "iter/sec",
            "range": "stddev: 0.0004040404535683431",
            "extra": "mean: 3.323966197183241 msec\nrounds: 355"
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
        "date": 1672075227532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.09872666340092,
            "unit": "iter/sec",
            "range": "stddev: 0.00017598892930535703",
            "extra": "mean: 8.467491803278708 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.46700539139135,
            "unit": "iter/sec",
            "range": "stddev: 0.00007566365359992886",
            "extra": "mean: 6.735503267973798 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.72953697821828,
            "unit": "iter/sec",
            "range": "stddev: 0.00008019877952446055",
            "extra": "mean: 5.006770731707329 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6276606729931,
            "unit": "iter/sec",
            "range": "stddev: 0.000047561943589492844",
            "extra": "mean: 3.1682901234567424 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.68245965802024,
            "unit": "iter/sec",
            "range": "stddev: 0.00030091130128406194",
            "extra": "mean: 9.117228070175555 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.29214442754795,
            "unit": "iter/sec",
            "range": "stddev: 0.00041063450260743543",
            "extra": "mean: 7.2837379310345165 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.30528964056188,
            "unit": "iter/sec",
            "range": "stddev: 0.00011866877394854915",
            "extra": "mean: 5.1731641791046306 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.08453460648366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007640805997254587",
            "extra": "mean: 3.299409523809493 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.17392879491485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008349597641163121",
            "extra": "mean: 75.90750000000008 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.593618766961637,
            "unit": "iter/sec",
            "range": "stddev: 0.0017073628546930633",
            "extra": "mean: 73.5639285714288 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.63163100768563,
            "unit": "iter/sec",
            "range": "stddev: 0.00012303470602457087",
            "extra": "mean: 6.264422619047562 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.80938394980572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989527344588005",
            "extra": "mean: 4.29535950413237 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 352.99082991215414,
            "unit": "iter/sec",
            "range": "stddev: 0.00007209931907742121",
            "extra": "mean: 2.8329347826085503 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.33323926506336,
            "unit": "iter/sec",
            "range": "stddev: 0.00017015525716993507",
            "extra": "mean: 3.0090279329610388 msec\nrounds: 358"
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
        "date": 1672209969818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.50234432255169,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949958099337931",
            "extra": "mean: 8.03197727272727 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.0241890248246,
            "unit": "iter/sec",
            "range": "stddev: 0.00010774862378502637",
            "extra": "mean: 6.288351515151536 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.6282691304659,
            "unit": "iter/sec",
            "range": "stddev: 0.00020898548144358153",
            "extra": "mean: 4.793214285714315 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.2368548406877,
            "unit": "iter/sec",
            "range": "stddev: 0.00007268808116613933",
            "extra": "mean: 3.142313609467417 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.5582130472112,
            "unit": "iter/sec",
            "range": "stddev: 0.00013537323834754785",
            "extra": "mean: 8.729186440677847 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.73970464365843,
            "unit": "iter/sec",
            "range": "stddev: 0.00012373925117729954",
            "extra": "mean: 6.9570199999998295 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5308050322869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000758420130220027",
            "extra": "mean: 5.114283653846132 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.2299799228545,
            "unit": "iter/sec",
            "range": "stddev: 0.00005550579608656349",
            "extra": "mean: 3.2234150943395994 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.971009793112408,
            "unit": "iter/sec",
            "range": "stddev: 0.004736192433719966",
            "extra": "mean: 77.09499999999991 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.088607951610156,
            "unit": "iter/sec",
            "range": "stddev: 0.0012718533533307437",
            "extra": "mean: 70.9793333333342 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.995042812093,
            "unit": "iter/sec",
            "range": "stddev: 0.00009832621172465484",
            "extra": "mean: 5.917333333332791 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.0048641645087,
            "unit": "iter/sec",
            "range": "stddev: 0.00009873008087835416",
            "extra": "mean: 4.237200803212867 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 356.5864930332986,
            "unit": "iter/sec",
            "range": "stddev: 0.00009839428594719329",
            "extra": "mean: 2.8043687002654316 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 325.4105993904665,
            "unit": "iter/sec",
            "range": "stddev: 0.00033621120428459434",
            "extra": "mean: 3.073040650406352 msec\nrounds: 369"
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
        "date": 1672216926724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.05553670084673,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476460127699655",
            "extra": "mean: 8.767658536585328 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.42272272540157,
            "unit": "iter/sec",
            "range": "stddev: 0.00047509835703192103",
            "extra": "mean: 7.021351515151498 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.258700542543,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662570572235632",
            "extra": "mean: 5.397857142857152 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.2296235320243,
            "unit": "iter/sec",
            "range": "stddev: 0.000186488648406289",
            "extra": "mean: 3.3757596153846303 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.69336863912342,
            "unit": "iter/sec",
            "range": "stddev: 0.000484170166647732",
            "extra": "mean: 9.285622807017614 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.97797595407093,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983379673996526",
            "extra": "mean: 7.693611111111319 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.2306749472809,
            "unit": "iter/sec",
            "range": "stddev: 0.0002585750008437711",
            "extra": "mean: 5.34100515463918 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.25526112548016,
            "unit": "iter/sec",
            "range": "stddev: 0.00027724003777985964",
            "extra": "mean: 3.580953125000075 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.16325158640693,
            "unit": "iter/sec",
            "range": "stddev: 0.0030910728151169933",
            "extra": "mean: 75.96907142857111 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.957204205538092,
            "unit": "iter/sec",
            "range": "stddev: 0.003605319314933925",
            "extra": "mean: 77.17714285714398 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.46996917802258,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107819822036915",
            "extra": "mean: 6.558668604650985 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.38446069167998,
            "unit": "iter/sec",
            "range": "stddev: 0.00025194707761039324",
            "extra": "mean: 4.537524999999931 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 326.8635243170556,
            "unit": "iter/sec",
            "range": "stddev: 0.00023707582774133327",
            "extra": "mean: 3.059380829015373 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 325.32023129337506,
            "unit": "iter/sec",
            "range": "stddev: 0.00012404554908615264",
            "extra": "mean: 3.073894285714423 msec\nrounds: 350"
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
        "date": 1672332355400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.14560127089781,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137069224598268",
            "extra": "mean: 9.246793103448228 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.14844626169486,
            "unit": "iter/sec",
            "range": "stddev: 0.00029292831680453716",
            "extra": "mean: 7.238590277777703 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.5981157388233,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067022596828567",
            "extra": "mean: 5.476507772020693 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.68429338988165,
            "unit": "iter/sec",
            "range": "stddev: 0.00015139705064302618",
            "extra": "mean: 3.5375152542373045 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.3903140457861,
            "unit": "iter/sec",
            "range": "stddev: 0.000885634469882348",
            "extra": "mean: 10.061342592592377 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.0301798380323,
            "unit": "iter/sec",
            "range": "stddev: 0.0008134834214996939",
            "extra": "mean: 8.128086956521463 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.50335321673245,
            "unit": "iter/sec",
            "range": "stddev: 0.0009595705174135202",
            "extra": "mean: 5.934599999999879 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 270.1487402005011,
            "unit": "iter/sec",
            "range": "stddev: 0.00020603482194255488",
            "extra": "mean: 3.701664495114107 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.599128140332665,
            "unit": "iter/sec",
            "range": "stddev: 0.004024682093786079",
            "extra": "mean: 79.37057142857158 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.807692497155237,
            "unit": "iter/sec",
            "range": "stddev: 0.001087142237055483",
            "extra": "mean: 78.0780769230768 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.83154288278718,
            "unit": "iter/sec",
            "range": "stddev: 0.00039054582378262383",
            "extra": "mean: 6.5431518987342905 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 208.4288256163514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007750610658686808",
            "extra": "mean: 4.797800865800922 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 320.1150660182496,
            "unit": "iter/sec",
            "range": "stddev: 0.00015466352571628518",
            "extra": "mean: 3.1238767123287805 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 304.8766318568172,
            "unit": "iter/sec",
            "range": "stddev: 0.00017311922429948803",
            "extra": "mean: 3.280015243902464 msec\nrounds: 328"
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
        "date": 1672341468751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.0174570846675,
            "unit": "iter/sec",
            "range": "stddev: 0.00042798962016210086",
            "extra": "mean: 8.332121212121168 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.66392063052862,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384194722621404",
            "extra": "mean: 6.593525974025945 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01751677158032,
            "unit": "iter/sec",
            "range": "stddev: 0.00019285607732286964",
            "extra": "mean: 4.901539906103299 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.10609502392373,
            "unit": "iter/sec",
            "range": "stddev: 0.00009878799990307332",
            "extra": "mean: 3.183637681159404 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.99522329594204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002985033566059963",
            "extra": "mean: 8.849931623931864 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.46300561921373,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531544590752467",
            "extra": "mean: 7.222145695364247 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.18586285352455,
            "unit": "iter/sec",
            "range": "stddev: 0.00011220467304283861",
            "extra": "mean: 5.0204366197181916 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.5656791286174,
            "unit": "iter/sec",
            "range": "stddev: 0.00017460931119165447",
            "extra": "mean: 3.305067524115684 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.346921770831452,
            "unit": "iter/sec",
            "range": "stddev: 0.001057558771390302",
            "extra": "mean: 74.92364285714282 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.895231804888628,
            "unit": "iter/sec",
            "range": "stddev: 0.001155421312562069",
            "extra": "mean: 71.96713333333378 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.48128332363555,
            "unit": "iter/sec",
            "range": "stddev: 0.00026663439022580715",
            "extra": "mean: 6.07971910112342 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.4517450057719,
            "unit": "iter/sec",
            "range": "stddev: 0.00015868514723600007",
            "extra": "mean: 4.24715476190455 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 362.1769400706632,
            "unit": "iter/sec",
            "range": "stddev: 0.00016188041783416813",
            "extra": "mean: 2.7610813648292827 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.6578089557491,
            "unit": "iter/sec",
            "range": "stddev: 0.00013062455250796866",
            "extra": "mean: 2.9098713136728533 msec\nrounds: 373"
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
        "date": 1672353519473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.87599340864432,
            "unit": "iter/sec",
            "range": "stddev: 0.000287334180778745",
            "extra": "mean: 8.072589147286854 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.32759442070991,
            "unit": "iter/sec",
            "range": "stddev: 0.000170648294610195",
            "extra": "mean: 6.43800609756092 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.58816305866054,
            "unit": "iter/sec",
            "range": "stddev: 0.0006188741184436717",
            "extra": "mean: 5.086776255707761 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.82564881405835,
            "unit": "iter/sec",
            "range": "stddev: 0.000310462910835915",
            "extra": "mean: 3.2591799410029676 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.58054663819586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004770926211101336",
            "extra": "mean: 8.65197499999996 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.37257037436095,
            "unit": "iter/sec",
            "range": "stddev: 0.0003219099375455477",
            "extra": "mean: 6.926523489932888 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.3333575378305,
            "unit": "iter/sec",
            "range": "stddev: 0.000388429163809983",
            "extra": "mean: 5.172413145539693 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.9484868269546,
            "unit": "iter/sec",
            "range": "stddev: 0.00017492258577279785",
            "extra": "mean: 3.2159667673716905 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.714047481689528,
            "unit": "iter/sec",
            "range": "stddev: 0.002251542597124884",
            "extra": "mean: 72.91793333333298 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.25428697680837,
            "unit": "iter/sec",
            "range": "stddev: 0.0027692765085776927",
            "extra": "mean: 70.15433333333286 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.54847387451068,
            "unit": "iter/sec",
            "range": "stddev: 0.00030294349511944676",
            "extra": "mean: 5.9330112994350195 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.20894770752744,
            "unit": "iter/sec",
            "range": "stddev: 0.00026681232593727793",
            "extra": "mean: 4.26969169960478 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 372.29228954030447,
            "unit": "iter/sec",
            "range": "stddev: 0.0001638006855413043",
            "extra": "mean: 2.686061538461542 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 301.23449151209525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006316838156062812",
            "extra": "mean: 3.319672972973109 msec\nrounds: 370"
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
        "date": 1672683750547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.48141655669568,
            "unit": "iter/sec",
            "range": "stddev: 0.0004170134290403669",
            "extra": "mean: 10.154200000000007 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.70878950949444,
            "unit": "iter/sec",
            "range": "stddev: 0.00022899413739348545",
            "extra": "mean: 8.083500000000015 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.41432381734688,
            "unit": "iter/sec",
            "range": "stddev: 0.00014673728976574412",
            "extra": "mean: 5.973204545454691 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.13795061133987,
            "unit": "iter/sec",
            "range": "stddev: 0.0002469653385805163",
            "extra": "mean: 3.9977940074906235 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.41126501729039,
            "unit": "iter/sec",
            "range": "stddev: 0.00023429121459808564",
            "extra": "mean: 10.705346938775538 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.55185957986548,
            "unit": "iter/sec",
            "range": "stddev: 0.00014510147932974142",
            "extra": "mean: 8.654122950819621 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.00945259660878,
            "unit": "iter/sec",
            "range": "stddev: 0.00012198668033119224",
            "extra": "mean: 6.210815476190634 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.25944236112684,
            "unit": "iter/sec",
            "range": "stddev: 0.00007800951963506701",
            "extra": "mean: 4.127806083650347 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.175619269002754,
            "unit": "iter/sec",
            "range": "stddev: 0.0013518732121837172",
            "extra": "mean: 89.48049999999992 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.628594325827304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010749939922318518",
            "extra": "mean: 85.99491666666736 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 130.34313762000582,
            "unit": "iter/sec",
            "range": "stddev: 0.000194363442525602",
            "extra": "mean: 7.6720571428573185 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 189.08129661571755,
            "unit": "iter/sec",
            "range": "stddev: 0.00014634920401247124",
            "extra": "mean: 5.288730392157011 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 292.66094248044334,
            "unit": "iter/sec",
            "range": "stddev: 0.00012351982815685122",
            "extra": "mean: 3.416923322683633 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 270.8304230941349,
            "unit": "iter/sec",
            "range": "stddev: 0.00018845032044682093",
            "extra": "mean: 3.6923473684210926 msec\nrounds: 285"
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
          "id": "f636cbf8b178cf25b86ae1630942272ca92fed71",
          "message": "Merge pull request #758 from TeoZosa/dependabot/pip/pygments-2.14.0",
          "timestamp": "2023-01-02T17:25:11Z",
          "tree_id": "a4c5e6b707159cc5db6abdccc915f66d926c3ed7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f636cbf8b178cf25b86ae1630942272ca92fed71"
        },
        "date": 1672686579985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.63919775713809,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051202596442071",
            "extra": "mean: 8.500568000000001 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.47653010136165,
            "unit": "iter/sec",
            "range": "stddev: 0.0007550033708370952",
            "extra": "mean: 6.87396103896102 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.13219591185512,
            "unit": "iter/sec",
            "range": "stddev: 0.00036844613971651714",
            "extra": "mean: 5.07273809523806 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.294007111077,
            "unit": "iter/sec",
            "range": "stddev: 0.00029742533188859894",
            "extra": "mean: 3.341196202531613 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.90246735293906,
            "unit": "iter/sec",
            "range": "stddev: 0.00017747902530380733",
            "extra": "mean: 8.936353448275737 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.40712360609234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007966451918459576",
            "extra": "mean: 7.2250616438356685 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.12417279420023,
            "unit": "iter/sec",
            "range": "stddev: 0.0004896521921951075",
            "extra": "mean: 5.344045000000097 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.6953938696325,
            "unit": "iter/sec",
            "range": "stddev: 0.00040689607048624224",
            "extra": "mean: 3.4638585209003185 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.78120943107184,
            "unit": "iter/sec",
            "range": "stddev: 0.0042642304537451785",
            "extra": "mean: 78.2398571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.866458608158839,
            "unit": "iter/sec",
            "range": "stddev: 0.0014504092952721073",
            "extra": "mean: 72.11646666666667 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.69227558301975,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138042893341491",
            "extra": "mean: 6.3414647058823945 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.3490314282668,
            "unit": "iter/sec",
            "range": "stddev: 0.0003171275428176351",
            "extra": "mean: 4.322473251028349 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.858544757177,
            "unit": "iter/sec",
            "range": "stddev: 0.0004736175824503965",
            "extra": "mean: 3.050095890411011 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 313.93991030034886,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329836869861356",
            "extra": "mean: 3.1853229461755657 msec\nrounds: 353"
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
          "id": "32a607fdc879226b79e37d62f3241496d43de46f",
          "message": "Merge pull request #762 from TeoZosa/dependabot/pip/pygments-2.14.0",
          "timestamp": "2023-01-03T11:21:57Z",
          "tree_id": "191ae65430e9797313ee608fcf4604a517f9fe1a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/32a607fdc879226b79e37d62f3241496d43de46f"
        },
        "date": 1672767534769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.36031878250331,
            "unit": "iter/sec",
            "range": "stddev: 0.0009803515788206264",
            "extra": "mean: 9.491239316239287 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.65738412549399,
            "unit": "iter/sec",
            "range": "stddev: 0.0016507695710954245",
            "extra": "mean: 7.895315436241644 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.80885791573346,
            "unit": "iter/sec",
            "range": "stddev: 0.000416262345092376",
            "extra": "mean: 5.592564102564014 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.3313938362625,
            "unit": "iter/sec",
            "range": "stddev: 0.0003154286952229846",
            "extra": "mean: 3.5799771241830998 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.71942612824084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006370522160653652",
            "extra": "mean: 9.735256880733957 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.79000399739658,
            "unit": "iter/sec",
            "range": "stddev: 0.0008988528472233633",
            "extra": "mean: 8.143985401459895 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.87293975784877,
            "unit": "iter/sec",
            "range": "stddev: 0.000639225129063335",
            "extra": "mean: 6.102288770053657 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.18793754732854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789177133345897",
            "extra": "mean: 3.8882072368420344 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.920477989321538,
            "unit": "iter/sec",
            "range": "stddev: 0.00306267430549016",
            "extra": "mean: 91.57108333333379 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.584577066399019,
            "unit": "iter/sec",
            "range": "stddev: 0.004876902991435479",
            "extra": "mean: 86.32166666666603 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 137.49556642480624,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920851234424514",
            "extra": "mean: 7.272961783439624 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 174.95803740821822,
            "unit": "iter/sec",
            "range": "stddev: 0.0011102787807539523",
            "extra": "mean: 5.715656249999907 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 300.699858963787,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869276388163464",
            "extra": "mean: 3.3255752212388936 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 283.7934121974264,
            "unit": "iter/sec",
            "range": "stddev: 0.00040596066573571945",
            "extra": "mean: 3.523689969604828 msec\nrounds: 329"
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
          "id": "303e1a87e5cd8e0c2bc00294c93b2b2366378d70",
          "message": "Merge pull request #764 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.22.0",
          "timestamp": "2023-01-03T20:28:20Z",
          "tree_id": "a08f54dce626322e6027d8fdb197cdb93b266bbf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/303e1a87e5cd8e0c2bc00294c93b2b2366378d70"
        },
        "date": 1672780282028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.96256531716233,
            "unit": "iter/sec",
            "range": "stddev: 0.0005509942121303703",
            "extra": "mean: 8.477265625000022 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.73696149614526,
            "unit": "iter/sec",
            "range": "stddev: 0.00016163900960840458",
            "extra": "mean: 6.547203703703624 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.6430240220994,
            "unit": "iter/sec",
            "range": "stddev: 0.00048458057103617866",
            "extra": "mean: 4.959259090909107 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.5883962025634,
            "unit": "iter/sec",
            "range": "stddev: 0.00027536187340352903",
            "extra": "mean: 3.315777439024361 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.65945646414976,
            "unit": "iter/sec",
            "range": "stddev: 0.00012852697430219354",
            "extra": "mean: 8.571958333333285 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.8075255079812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209207226415462",
            "extra": "mean: 7.1526907894733665 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.76768585377522,
            "unit": "iter/sec",
            "range": "stddev: 0.00040296059113754723",
            "extra": "mean: 5.0564377880184965 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.9576176359965,
            "unit": "iter/sec",
            "range": "stddev: 0.00024404605687322424",
            "extra": "mean: 3.1851432926829104 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.966244543372063,
            "unit": "iter/sec",
            "range": "stddev: 0.007930245651632015",
            "extra": "mean: 77.12333333333348 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.679179468098733,
            "unit": "iter/sec",
            "range": "stddev: 0.0031863254071105096",
            "extra": "mean: 73.10380000000029 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.40386183245266,
            "unit": "iter/sec",
            "range": "stddev: 0.00040845896582053287",
            "extra": "mean: 6.312977401130046 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.4106636212471,
            "unit": "iter/sec",
            "range": "stddev: 0.00017046235701553922",
            "extra": "mean: 4.176923387097 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.6987989614855,
            "unit": "iter/sec",
            "range": "stddev: 0.00024257750174861288",
            "extra": "mean: 2.8760524999994885 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 331.55399356785836,
            "unit": "iter/sec",
            "range": "stddev: 0.0001995753167254238",
            "extra": "mean: 3.016099999999947 msec\nrounds: 370"
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
          "id": "b39171a1b0e66cd733edd6f3d680fbb120a24372",
          "message": "Merge pull request #763 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.1.3",
          "timestamp": "2023-01-03T20:39:34Z",
          "tree_id": "ae2b9ad8e633ffc407b51798dfb3100ed7f73f95",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b39171a1b0e66cd733edd6f3d680fbb120a24372"
        },
        "date": 1672783526773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.03639808678226,
            "unit": "iter/sec",
            "range": "stddev: 0.00025197329239951384",
            "extra": "mean: 8.692900826446344 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.86151754308233,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117274623574468",
            "extra": "mean: 7.415013698630107 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.05784701633962,
            "unit": "iter/sec",
            "range": "stddev: 0.0004834349569044587",
            "extra": "mean: 5.403715736040662 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.667213834874,
            "unit": "iter/sec",
            "range": "stddev: 0.00010160431687896564",
            "extra": "mean: 3.359456310679662 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.85907851665421,
            "unit": "iter/sec",
            "range": "stddev: 0.0005136992719762088",
            "extra": "mean: 9.53660869565219 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.19625424096806,
            "unit": "iter/sec",
            "range": "stddev: 0.0004212487577433549",
            "extra": "mean: 7.92416546762576 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.07643006773762,
            "unit": "iter/sec",
            "range": "stddev: 0.00013234026961680625",
            "extra": "mean: 5.432526041666571 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.11694915574395,
            "unit": "iter/sec",
            "range": "stddev: 0.00014313179137153415",
            "extra": "mean: 3.4829013157894737 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.635137359399842,
            "unit": "iter/sec",
            "range": "stddev: 0.0009420957377685775",
            "extra": "mean: 73.33992857142846 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.410912267727893,
            "unit": "iter/sec",
            "range": "stddev: 0.0005447230569671257",
            "extra": "mean: 74.56614285714228 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.03949366091894,
            "unit": "iter/sec",
            "range": "stddev: 0.00046067910460806334",
            "extra": "mean: 6.942540372670873 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.09812665711667,
            "unit": "iter/sec",
            "range": "stddev: 0.00032637131916784455",
            "extra": "mean: 4.692673819742393 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.5052940999895,
            "unit": "iter/sec",
            "range": "stddev: 0.00013950305001440776",
            "extra": "mean: 2.9717214484680863 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.76192654716306,
            "unit": "iter/sec",
            "range": "stddev: 0.00008375032880636044",
            "extra": "mean: 3.1078879056047124 msec\nrounds: 339"
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
          "id": "b84599e42755c96e2c4c51313957fcd1054482c6",
          "message": "Merge pull request #761 from TeoZosa/dependabot/pip/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 4.13.0 to 6.0.0",
          "timestamp": "2023-01-04T22:52:06+09:00",
          "tree_id": "4ce2f1ff5e6987afa410c61c14774dcdd8d386a3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b84599e42755c96e2c4c51313957fcd1054482c6"
        },
        "date": 1672841467716,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.89891143099547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168558090841997",
            "extra": "mean: 8.481842519685056 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.57633093886963,
            "unit": "iter/sec",
            "range": "stddev: 0.0004588965818570392",
            "extra": "mean: 6.964936305732517 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.2370353460384,
            "unit": "iter/sec",
            "range": "stddev: 0.00030535183934993714",
            "extra": "mean: 5.256600000000076 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.00037324742124,
            "unit": "iter/sec",
            "range": "stddev: 0.00025442797322859065",
            "extra": "mean: 3.389826219512221 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.31491194939454,
            "unit": "iter/sec",
            "range": "stddev: 0.0005572624485942233",
            "extra": "mean: 9.232339130434845 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.85182702238527,
            "unit": "iter/sec",
            "range": "stddev: 0.00011644956719755468",
            "extra": "mean: 7.0496095890410535 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.5686663735884,
            "unit": "iter/sec",
            "range": "stddev: 0.00017079747422976655",
            "extra": "mean: 5.0872807881773525 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.6240061146339,
            "unit": "iter/sec",
            "range": "stddev: 0.00006119664942533045",
            "extra": "mean: 3.3941565495206607 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.470047905263153,
            "unit": "iter/sec",
            "range": "stddev: 0.002675176577308602",
            "extra": "mean: 74.23878571428614 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.683185007607705,
            "unit": "iter/sec",
            "range": "stddev: 0.0014512168194820917",
            "extra": "mean: 73.08240000000079 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.3328518669088,
            "unit": "iter/sec",
            "range": "stddev: 0.0001807825541594998",
            "extra": "mean: 6.085210526315747 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.16153857177895,
            "unit": "iter/sec",
            "range": "stddev: 0.00019480722578725873",
            "extra": "mean: 4.307345679012302 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.7081021553766,
            "unit": "iter/sec",
            "range": "stddev: 0.00020088184108831703",
            "extra": "mean: 2.827189973614799 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 338.3556843290275,
            "unit": "iter/sec",
            "range": "stddev: 0.00013236680677589557",
            "extra": "mean: 2.9554697802197087 msec\nrounds: 364"
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
          "id": "eb88bbf190d39eb2b6cca816200f06d6fa049b81",
          "message": "Merge pull request #759 from TeoZosa/dependabot/pip/docs/importlib-metadata-6.0.0\n\n⬆️ Bump importlib-metadata from 5.2.0 to 6.0.0 in /docs",
          "timestamp": "2023-01-04T22:52:20+09:00",
          "tree_id": "4ce2f1ff5e6987afa410c61c14774dcdd8d386a3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eb88bbf190d39eb2b6cca816200f06d6fa049b81"
        },
        "date": 1672843532297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.06105395353313,
            "unit": "iter/sec",
            "range": "stddev: 0.00045891480723532653",
            "extra": "mean: 8.923706896551737 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.10573445304757,
            "unit": "iter/sec",
            "range": "stddev: 0.00009122083747901433",
            "extra": "mean: 7.03701369863019 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.47766383496403,
            "unit": "iter/sec",
            "range": "stddev: 0.00008702133432787198",
            "extra": "mean: 5.249959390862921 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.2042944618713,
            "unit": "iter/sec",
            "range": "stddev: 0.00032102407875393045",
            "extra": "mean: 3.445848387096786 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.15114015965622,
            "unit": "iter/sec",
            "range": "stddev: 0.00013909270206607544",
            "extra": "mean: 9.510120370370212 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.5224497216751,
            "unit": "iter/sec",
            "range": "stddev: 0.00013805147914189688",
            "extra": "mean: 7.603264705882364 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.76771716036268,
            "unit": "iter/sec",
            "range": "stddev: 0.00022457487707340813",
            "extra": "mean: 5.562734042553063 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.5238699397151,
            "unit": "iter/sec",
            "range": "stddev: 0.0003373513902802571",
            "extra": "mean: 3.552096666666801 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.889374184056598,
            "unit": "iter/sec",
            "range": "stddev: 0.0011615556828647863",
            "extra": "mean: 77.58328571428562 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.553926717790713,
            "unit": "iter/sec",
            "range": "stddev: 0.0009037135869588386",
            "extra": "mean: 73.77935714285755 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.9863236248681,
            "unit": "iter/sec",
            "range": "stddev: 0.0005296258469979311",
            "extra": "mean: 6.712025477706899 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.9814235498995,
            "unit": "iter/sec",
            "range": "stddev: 0.0004313449117156871",
            "extra": "mean: 4.566597402597162 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 332.35959440925274,
            "unit": "iter/sec",
            "range": "stddev: 0.0001737843669483102",
            "extra": "mean: 3.008789325842794 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.7807365054971,
            "unit": "iter/sec",
            "range": "stddev: 0.00007807158491914661",
            "extra": "mean: 3.1077062314540282 msec\nrounds: 337"
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
          "id": "73c45809ef5737c2ec65e032e603fe1a936652c5",
          "message": "Merge pull request #756 from TeoZosa/dependabot/pip/rich-13.0.0\n\n⬆️ Bump rich from 12.6.0 to 13.0.0",
          "timestamp": "2023-01-04T22:52:45+09:00",
          "tree_id": "3ef513042fa23d6a7634201feea5cb4decb7d810",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/73c45809ef5737c2ec65e032e603fe1a936652c5"
        },
        "date": 1672844395525,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.18238511674092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003886759699241676",
            "extra": "mean: 8.052671875000014 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.2526960779607,
            "unit": "iter/sec",
            "range": "stddev: 0.0003371833952777152",
            "extra": "mean: 6.399889570552179 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.81314287182786,
            "unit": "iter/sec",
            "range": "stddev: 0.0005851400927441656",
            "extra": "mean: 5.106909502262386 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.632356581264,
            "unit": "iter/sec",
            "range": "stddev: 0.0003336836440122692",
            "extra": "mean: 3.2296366279069635 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.43969210028364,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150119601508724",
            "extra": "mean: 8.973463414634244 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.0195285514652,
            "unit": "iter/sec",
            "range": "stddev: 0.0005203575826901462",
            "extra": "mean: 7.141860927152333 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.09644832239107,
            "unit": "iter/sec",
            "range": "stddev: 0.0003608374489063236",
            "extra": "mean: 5.048046082949226 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.0379340530951,
            "unit": "iter/sec",
            "range": "stddev: 0.00012711886445239125",
            "extra": "mean: 3.225411764706013 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.279376874249543,
            "unit": "iter/sec",
            "range": "stddev: 0.005793813326526874",
            "extra": "mean: 81.43735714285708 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.322438402026277,
            "unit": "iter/sec",
            "range": "stddev: 0.004504267701374965",
            "extra": "mean: 81.15276923076866 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.2968565024638,
            "unit": "iter/sec",
            "range": "stddev: 0.0010448177090881573",
            "extra": "mean: 7.027562130177383 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.32905813032667,
            "unit": "iter/sec",
            "range": "stddev: 0.00039209618068234813",
            "extra": "mean: 4.622587499999901 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 346.31256427272746,
            "unit": "iter/sec",
            "range": "stddev: 0.00047655874371689625",
            "extra": "mean: 2.8875648854959874 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.59230252333896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002595814367976763",
            "extra": "mean: 2.988711911357395 msec\nrounds: 361"
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
          "id": "93114cb2cb4f9d09ff5f94b18b6d312d75234035",
          "message": "Merge pull request #765 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.1",
          "timestamp": "2023-01-04T18:50:34Z",
          "tree_id": "d9c771061fedb833bc5dc5f796d19abe63337f10",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/93114cb2cb4f9d09ff5f94b18b6d312d75234035"
        },
        "date": 1672858897177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.36677375500233,
            "unit": "iter/sec",
            "range": "stddev: 0.00030266609742360504",
            "extra": "mean: 8.040732824427533 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.37091186319603,
            "unit": "iter/sec",
            "range": "stddev: 0.00027054182694038787",
            "extra": "mean: 6.436211180124238 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.99159163448877,
            "unit": "iter/sec",
            "range": "stddev: 0.00034458637465956945",
            "extra": "mean: 4.87824886877826 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3382280491121,
            "unit": "iter/sec",
            "range": "stddev: 0.00011988740470697782",
            "extra": "mean: 3.0927366863905412 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.59794159795729,
            "unit": "iter/sec",
            "range": "stddev: 0.00047704632913140644",
            "extra": "mean: 8.88115702479362 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.88652625863145,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946240429247674",
            "extra": "mean: 7.148651315789585 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.41663478225973,
            "unit": "iter/sec",
            "range": "stddev: 0.00027320637882832295",
            "extra": "mean: 5.014626794258594 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.1981234454141,
            "unit": "iter/sec",
            "range": "stddev: 0.00017390249626438576",
            "extra": "mean: 3.223746130030896 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.501172191057044,
            "unit": "iter/sec",
            "range": "stddev: 0.001759979834112999",
            "extra": "mean: 74.0676428571427 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.530908654639882,
            "unit": "iter/sec",
            "range": "stddev: 0.004871409840907756",
            "extra": "mean: 73.90486666666618 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.63522574877976,
            "unit": "iter/sec",
            "range": "stddev: 0.00032817281109108313",
            "extra": "mean: 5.96533333333301 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.92655126703323,
            "unit": "iter/sec",
            "range": "stddev: 0.00010785607174703448",
            "extra": "mean: 4.150642570281266 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 359.86717629674183,
            "unit": "iter/sec",
            "range": "stddev: 0.00023638970525430655",
            "extra": "mean: 2.7788030303030826 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 351.8204620265961,
            "unit": "iter/sec",
            "range": "stddev: 0.00012608266791191777",
            "extra": "mean: 2.8423588390501413 msec\nrounds: 379"
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
          "id": "d6c1f874e45e1daaabc306ca037af79e37bdabb5",
          "message": "Merge pull request #766 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.3",
          "timestamp": "2023-01-05T17:02:10Z",
          "tree_id": "fefaa29742d74a16c94ee32e80776b945caf4ba3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d6c1f874e45e1daaabc306ca037af79e37bdabb5"
        },
        "date": 1672942733543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.34684040498443,
            "unit": "iter/sec",
            "range": "stddev: 0.00023397558992948242",
            "extra": "mean: 7.977863636363625 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.38658901718452,
            "unit": "iter/sec",
            "range": "stddev: 0.000322699798151474",
            "extra": "mean: 6.605604938271552 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.04198398564148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251445119403002",
            "extra": "mean: 4.738393665158286 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.9938715095119,
            "unit": "iter/sec",
            "range": "stddev: 0.00015895655357365347",
            "extra": "mean: 3.086478134110761 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.14341549439719,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324617632673521",
            "extra": "mean: 8.760908333333392 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.60243814271348,
            "unit": "iter/sec",
            "range": "stddev: 0.0008563073048064845",
            "extra": "mean: 7.163198675496734 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.30745304350037,
            "unit": "iter/sec",
            "range": "stddev: 0.00028401213630091943",
            "extra": "mean: 4.99232547169791 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.4874517612283,
            "unit": "iter/sec",
            "range": "stddev: 0.00012465873058805775",
            "extra": "mean: 3.1797771084336963 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.814546164529304,
            "unit": "iter/sec",
            "range": "stddev: 0.0018004582300333613",
            "extra": "mean: 72.3874666666672 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.162751256059142,
            "unit": "iter/sec",
            "range": "stddev: 0.0023288615673758414",
            "extra": "mean: 70.6077499999993 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.1602739974923,
            "unit": "iter/sec",
            "range": "stddev: 0.000788358290381488",
            "extra": "mean: 5.9822826086956615 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.11485995088333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834454000278313",
            "extra": "mean: 4.182090566037637 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.8214228780413,
            "unit": "iter/sec",
            "range": "stddev: 0.00024470666648249433",
            "extra": "mean: 2.8916658536584183 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 318.89022817146525,
            "unit": "iter/sec",
            "range": "stddev: 0.00024251623734085958",
            "extra": "mean: 3.135875331564899 msec\nrounds: 377"
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
          "id": "dd3dcf17494bd78be7074c2355109c4131e433cf",
          "message": "Merge pull request #768 from TeoZosa/dependabot/pip/docs/orjson-3.8.4",
          "timestamp": "2023-01-05T18:16:35Z",
          "tree_id": "4f656f450805c9f564a68fbecfb13b7fa8d5bfd7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dd3dcf17494bd78be7074c2355109c4131e433cf"
        },
        "date": 1672950299988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.86497414570961,
            "unit": "iter/sec",
            "range": "stddev: 0.0006333357130758539",
            "extra": "mean: 9.10208196721313 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.87031746283583,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374218817329519",
            "extra": "mean: 7.048690789473695 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.64640370913654,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005409673548188",
            "extra": "mean: 5.300922680412422 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.89702907835766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006054068439746941",
            "extra": "mean: 3.5855527156549396 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.09238619371303,
            "unit": "iter/sec",
            "range": "stddev: 0.0009628708736606182",
            "extra": "mean: 9.700037383177612 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.16275938082944,
            "unit": "iter/sec",
            "range": "stddev: 0.0011820688002221432",
            "extra": "mean: 7.802578571428447 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.12216917483002,
            "unit": "iter/sec",
            "range": "stddev: 0.0007200847281408854",
            "extra": "mean: 5.677876923076825 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.0374366265454,
            "unit": "iter/sec",
            "range": "stddev: 0.00030462119214783143",
            "extra": "mean: 3.6096204620461796 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.599182216157432,
            "unit": "iter/sec",
            "range": "stddev: 0.002541278784190198",
            "extra": "mean: 79.37023076923047 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.911365321548486,
            "unit": "iter/sec",
            "range": "stddev: 0.004118557922701268",
            "extra": "mean: 77.45114285714193 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.91627091865107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007159897800285911",
            "extra": "mean: 6.715182926829217 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.9116324383871,
            "unit": "iter/sec",
            "range": "stddev: 0.00035851713853570654",
            "extra": "mean: 4.741322175732183 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 316.4432149529964,
            "unit": "iter/sec",
            "range": "stddev: 0.0003535015280740536",
            "extra": "mean: 3.1601246376811623 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 198.22960070570886,
            "unit": "iter/sec",
            "range": "stddev: 0.004320351263261464",
            "extra": "mean: 5.044655270655553 msec\nrounds: 351"
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
          "id": "639b1120d0c461b03a0676d046937482bf1fe415",
          "message": "Merge pull request #771 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.4",
          "timestamp": "2023-01-06T15:41:04Z",
          "tree_id": "524ff09ef85bca5ce1866f85d1d22b6e7b3e2e51",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/639b1120d0c461b03a0676d046937482bf1fe415"
        },
        "date": 1673021663778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.84905419864694,
            "unit": "iter/sec",
            "range": "stddev: 0.00034495627382899956",
            "extra": "mean: 8.558049586776882 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.81809081556108,
            "unit": "iter/sec",
            "range": "stddev: 0.0007954299680392512",
            "extra": "mean: 7.472831168831133 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.67728557912938,
            "unit": "iter/sec",
            "range": "stddev: 0.0003778937375316588",
            "extra": "mean: 5.474134328358165 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.3064294605853,
            "unit": "iter/sec",
            "range": "stddev: 0.00018310657100486475",
            "extra": "mean: 3.4446360759494277 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.82371599877318,
            "unit": "iter/sec",
            "range": "stddev: 0.0011944636180562594",
            "extra": "mean: 10.545884955752397 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.54200989891002,
            "unit": "iter/sec",
            "range": "stddev: 0.0009583360677307503",
            "extra": "mean: 8.094412587412688 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.4572352786826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951790005287748",
            "extra": "mean: 5.6670954773867965 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 275.72116905776085,
            "unit": "iter/sec",
            "range": "stddev: 0.00028001449892360786",
            "extra": "mean: 3.6268524590163405 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.806603816733764,
            "unit": "iter/sec",
            "range": "stddev: 0.0017296022854786787",
            "extra": "mean: 78.08471428571474 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.135253707425417,
            "unit": "iter/sec",
            "range": "stddev: 0.002588199611848767",
            "extra": "mean: 76.13099999999966 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.2302023919251,
            "unit": "iter/sec",
            "range": "stddev: 0.000421599710277535",
            "extra": "mean: 6.7462634730536895 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.30867798718796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002298611113939029",
            "extra": "mean: 4.539085836909951 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 329.8244670601414,
            "unit": "iter/sec",
            "range": "stddev: 0.00028598065133669565",
            "extra": "mean: 3.031915760869422 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 315.80535519669775,
            "unit": "iter/sec",
            "range": "stddev: 0.0003248616107898938",
            "extra": "mean: 3.166507418397497 msec\nrounds: 337"
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
          "id": "304b1f91062f070502017967302355528e614edb",
          "message": "Merge pull request #773 from TeoZosa/feat/make-sentry-sdk-dependency-an-optional-extra\n\n✨  Make `Sentry` integration an optional extra",
          "timestamp": "2023-01-09T15:06:54+09:00",
          "tree_id": "4e1ccee7db11f148caf18b506df8a003c10da5ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/304b1f91062f070502017967302355528e614edb"
        },
        "date": 1673244979370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.985397254592,
            "unit": "iter/sec",
            "range": "stddev: 0.00020697190730314198",
            "extra": "mean: 8.265460317460297 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.2985070987598,
            "unit": "iter/sec",
            "range": "stddev: 0.00025561560093722234",
            "extra": "mean: 6.83533974358975 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.08756207466087,
            "unit": "iter/sec",
            "range": "stddev: 0.00026923327963421576",
            "extra": "mean: 5.022915492957741 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.80373528567867,
            "unit": "iter/sec",
            "range": "stddev: 0.00014228027804899615",
            "extra": "mean: 3.291598765432099 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.50893199776047,
            "unit": "iter/sec",
            "range": "stddev: 0.0008485790844522876",
            "extra": "mean: 9.13167521367527 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.510205552252,
            "unit": "iter/sec",
            "range": "stddev: 0.0009398448143742339",
            "extra": "mean: 7.6039726027397725 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.638820248264,
            "unit": "iter/sec",
            "range": "stddev: 0.00020026437600937987",
            "extra": "mean: 5.164253731343237 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.13357586124954,
            "unit": "iter/sec",
            "range": "stddev: 0.00021853763628575215",
            "extra": "mean: 3.3998158730158914 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.100530665067021,
            "unit": "iter/sec",
            "range": "stddev: 0.0022280770314882245",
            "extra": "mean: 76.33278571428649 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.213867387514464,
            "unit": "iter/sec",
            "range": "stddev: 0.0029304461320704116",
            "extra": "mean: 75.67807142857218 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.26083640164865,
            "unit": "iter/sec",
            "range": "stddev: 0.0003930507633938561",
            "extra": "mean: 6.358862275448997 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.03418326850462,
            "unit": "iter/sec",
            "range": "stddev: 0.00044066795390011477",
            "extra": "mean: 4.483617647058738 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 354.61947120377295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012110059009833406",
            "extra": "mean: 2.8199241192409756 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 325.95607626451545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002121148804878971",
            "extra": "mean: 3.0678980169969083 msec\nrounds: 353"
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
          "id": "8454547e2de3bf9d9db9078d09bc0131a13aa785",
          "message": "Merge pull request #776 from TeoZosa/dependabot/pip/rich-13.0.1",
          "timestamp": "2023-01-09T08:27:40Z",
          "tree_id": "a1ef4dd0d72f0fb75a7e651d220915f92c16690a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8454547e2de3bf9d9db9078d09bc0131a13aa785"
        },
        "date": 1673254429331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.47554264246135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008955141151387713",
            "extra": "mean: 9.134460317460336 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.41648204997227,
            "unit": "iter/sec",
            "range": "stddev: 0.0006401952101934766",
            "extra": "mean: 7.277147435897422 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.18584152345068,
            "unit": "iter/sec",
            "range": "stddev: 0.0008562262964811201",
            "extra": "mean: 5.3999808612440106 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.2893657737679,
            "unit": "iter/sec",
            "range": "stddev: 0.0003026886042626626",
            "extra": "mean: 3.4330123839009548 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.08885866485348,
            "unit": "iter/sec",
            "range": "stddev: 0.0009459086413733409",
            "extra": "mean: 10.859076923076893 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.3069762760425,
            "unit": "iter/sec",
            "range": "stddev: 0.0007277092385833324",
            "extra": "mean: 7.674186206896541 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.51278887584934,
            "unit": "iter/sec",
            "range": "stddev: 0.000873081935688171",
            "extra": "mean: 5.665311881188123 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 269.44745774574096,
            "unit": "iter/sec",
            "range": "stddev: 0.00034338285733051695",
            "extra": "mean: 3.7112987012986824 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.031119349563465,
            "unit": "iter/sec",
            "range": "stddev: 0.004386586953930468",
            "extra": "mean: 83.11778571428466 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.22123579390449,
            "unit": "iter/sec",
            "range": "stddev: 0.004232739959639375",
            "extra": "mean: 81.82478571428626 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 114.04863195629146,
            "unit": "iter/sec",
            "range": "stddev: 0.002038990372155786",
            "extra": "mean: 8.768189349112445 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 186.99191539654487,
            "unit": "iter/sec",
            "range": "stddev: 0.0008943425566602565",
            "extra": "mean: 5.347824786324839 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 302.66243983862006,
            "unit": "iter/sec",
            "range": "stddev: 0.0004867364833793756",
            "extra": "mean: 3.3040108991826043 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 300.8534151563282,
            "unit": "iter/sec",
            "range": "stddev: 0.00042280788356205407",
            "extra": "mean: 3.323877840909282 msec\nrounds: 352"
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
          "id": "0064cb0024ffa21814901a9d51f26c61dc9f9d7c",
          "message": "Merge pull request #775 from TeoZosa/fix/remove-system-git-executable-dependence\n\n✨ Remove dependence on available system `git` executable",
          "timestamp": "2023-01-09T19:39:48+09:00",
          "tree_id": "6161a9739206bb5fe2086f487866a1d441c21e8a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0064cb0024ffa21814901a9d51f26c61dc9f9d7c"
        },
        "date": 1673261328202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.27114662711577,
            "unit": "iter/sec",
            "range": "stddev: 0.00037081622445280757",
            "extra": "mean: 8.112198412698397 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.2768405068682,
            "unit": "iter/sec",
            "range": "stddev: 0.00013260174319351396",
            "extra": "mean: 6.4401104294479 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.35149634001905,
            "unit": "iter/sec",
            "range": "stddev: 0.0002476153427289345",
            "extra": "mean: 4.8696991150442335 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.16315381944946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000479345018035492",
            "extra": "mean: 3.1040172910662283 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.76933215355156,
            "unit": "iter/sec",
            "range": "stddev: 0.00028509886939287563",
            "extra": "mean: 8.713129032258246 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.00391002796243,
            "unit": "iter/sec",
            "range": "stddev: 0.00013422277720716693",
            "extra": "mean: 6.992815789473616 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.06490614972788,
            "unit": "iter/sec",
            "range": "stddev: 0.00010430654102450352",
            "extra": "mean: 4.97351834862383 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.2718989128679,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338784825644295",
            "extra": "mean: 3.2023374613001163 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.784800878551303,
            "unit": "iter/sec",
            "range": "stddev: 0.0013084965018065036",
            "extra": "mean: 72.5436666666667 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.464899955930434,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278476688165596",
            "extra": "mean: 69.13286666666589 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.87063244187343,
            "unit": "iter/sec",
            "range": "stddev: 0.0002552243760935148",
            "extra": "mean: 6.065361581921261 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.56254134150734,
            "unit": "iter/sec",
            "range": "stddev: 0.00007032859227707326",
            "extra": "mean: 4.174275303643797 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.49201160159333,
            "unit": "iter/sec",
            "range": "stddev: 0.00028426661795382237",
            "extra": "mean: 2.6991135265700272 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 356.30765831291524,
            "unit": "iter/sec",
            "range": "stddev: 0.00010152920403466905",
            "extra": "mean: 2.8065633074936147 msec\nrounds: 387"
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
          "id": "ee41b945fb628fe36169caf6c8b69797f66a0419",
          "message": "Merge pull request #777 from TeoZosa/feat/only-install-colorama-on-windows-platforms\n\n✨  Only install `colorama` on Windows",
          "timestamp": "2023-01-09T21:47:21+09:00",
          "tree_id": "3fdee09ad0a69dc9cd22c6324bb4f632fbeab5e6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ee41b945fb628fe36169caf6c8b69797f66a0419"
        },
        "date": 1673269105463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.51118698894834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006178993140749107",
            "extra": "mean: 9.131487179487134 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.72091418930844,
            "unit": "iter/sec",
            "range": "stddev: 0.00071355526462148",
            "extra": "mean: 7.314169934640473 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.6417811283889,
            "unit": "iter/sec",
            "range": "stddev: 0.0022013105088324707",
            "extra": "mean: 5.929728643216171 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.5713997376122,
            "unit": "iter/sec",
            "range": "stddev: 0.00045709787128875415",
            "extra": "mean: 3.5389285714285723 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.93753165370288,
            "unit": "iter/sec",
            "range": "stddev: 0.0010076948763406474",
            "extra": "mean: 9.621163636363633 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.14884556492046,
            "unit": "iter/sec",
            "range": "stddev: 0.0003321221747347794",
            "extra": "mean: 7.567224637681243 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.16564797309715,
            "unit": "iter/sec",
            "range": "stddev: 0.00024664860413608136",
            "extra": "mean: 5.581427083333275 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.15437905522253,
            "unit": "iter/sec",
            "range": "stddev: 0.00012364579608122397",
            "extra": "mean: 3.365254125412576 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.43521730063945,
            "unit": "iter/sec",
            "range": "stddev: 0.0015075154036718254",
            "extra": "mean: 80.41676923076989 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.257005475728949,
            "unit": "iter/sec",
            "range": "stddev: 0.0033620355490328845",
            "extra": "mean: 88.83357142857255 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.01148321367725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005281131031220474",
            "extra": "mean: 6.848776397515065 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.30546388241007,
            "unit": "iter/sec",
            "range": "stddev: 0.0005253022512005056",
            "extra": "mean: 4.777706140350976 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 321.35283059057264,
            "unit": "iter/sec",
            "range": "stddev: 0.000286899891890754",
            "extra": "mean: 3.111844380403402 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 309.9845657385389,
            "unit": "iter/sec",
            "range": "stddev: 0.0004033215865972221",
            "extra": "mean: 3.2259670658682564 msec\nrounds: 334"
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
          "id": "3fe79262989d9e589264fabad47dbbaa5654b5e6",
          "message": "Merge pull request #779 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.6",
          "timestamp": "2023-01-09T16:08:58Z",
          "tree_id": "7b4917cfa6ca10532fd426b37c70eb148e3eaa2f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3fe79262989d9e589264fabad47dbbaa5654b5e6"
        },
        "date": 1673281567782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.98000363311299,
            "unit": "iter/sec",
            "range": "stddev: 0.0006793706088818764",
            "extra": "mean: 8.77346874999997 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.21023000631482,
            "unit": "iter/sec",
            "range": "stddev: 0.000539834122623244",
            "extra": "mean: 7.235354430379792 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.3242070057766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003559363668233661",
            "extra": "mean: 5.042248826291149 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.6660490109809,
            "unit": "iter/sec",
            "range": "stddev: 0.00017290733129771436",
            "extra": "mean: 3.2608761329304916 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.3540131120627,
            "unit": "iter/sec",
            "range": "stddev: 0.0021953269245383045",
            "extra": "mean: 10.59838333333333 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 96.75763845985327,
            "unit": "iter/sec",
            "range": "stddev: 0.002011533471763762",
            "extra": "mean: 10.335101351351403 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.25705370392004,
            "unit": "iter/sec",
            "range": "stddev: 0.000681804260349642",
            "extra": "mean: 5.908173267326819 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 265.2788682313729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006714896120669013",
            "extra": "mean: 3.769618012422357 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.527621140888714,
            "unit": "iter/sec",
            "range": "stddev: 0.014455353445780271",
            "extra": "mean: 86.7481666666663 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.031845259983934,
            "unit": "iter/sec",
            "range": "stddev: 0.01345430732201181",
            "extra": "mean: 90.64666666666572 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.89103630531088,
            "unit": "iter/sec",
            "range": "stddev: 0.001307657304726931",
            "extra": "mean: 7.097683615819249 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 176.08470315826332,
            "unit": "iter/sec",
            "range": "stddev: 0.0011609990007465617",
            "extra": "mean: 5.679085020242838 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 310.0174060985771,
            "unit": "iter/sec",
            "range": "stddev: 0.0005437275920747299",
            "extra": "mean: 3.2256253369271373 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 277.6374594629935,
            "unit": "iter/sec",
            "range": "stddev: 0.0007115071282093485",
            "extra": "mean: 3.6018194444445664 msec\nrounds: 360"
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
          "id": "2c17a319adcd65bfc0bbb57469ba75effe716efe",
          "message": "Merge pull request #778 from TeoZosa/deps/remove-typeguard\n\n:heavy_minus_sign: Remove dev dependency: `typeguard`",
          "timestamp": "2023-01-10T09:44:04+09:00",
          "tree_id": "5c3ff10b5045ff63238e1e0e7e11be5969e61247",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2c17a319adcd65bfc0bbb57469ba75effe716efe"
        },
        "date": 1673312018404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.08504835674329,
            "unit": "iter/sec",
            "range": "stddev: 0.00037655897336411054",
            "extra": "mean: 7.994560606060559 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.4020453380593,
            "unit": "iter/sec",
            "range": "stddev: 0.0006984244688095346",
            "extra": "mean: 6.973401234568007 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.50975457758562,
            "unit": "iter/sec",
            "range": "stddev: 0.00045525872245491924",
            "extra": "mean: 4.865949074074108 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.0227173438116,
            "unit": "iter/sec",
            "range": "stddev: 0.00007753095065802753",
            "extra": "mean: 3.0118421052632183 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.10525396893972,
            "unit": "iter/sec",
            "range": "stddev: 0.0011371677833417826",
            "extra": "mean: 8.920188524590147 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.42988455174265,
            "unit": "iter/sec",
            "range": "stddev: 0.00028819954134081776",
            "extra": "mean: 6.923774834437022 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.74729762545797,
            "unit": "iter/sec",
            "range": "stddev: 0.00039346296766768586",
            "extra": "mean: 5.108627358490515 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.85556009277536,
            "unit": "iter/sec",
            "range": "stddev: 0.00019725121681388874",
            "extra": "mean: 3.156012158054603 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.765208606303661,
            "unit": "iter/sec",
            "range": "stddev: 0.008044592684284662",
            "extra": "mean: 78.33792857142845 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.289321108611386,
            "unit": "iter/sec",
            "range": "stddev: 0.013492545642392904",
            "extra": "mean: 88.5792857142853 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.10891435119322,
            "unit": "iter/sec",
            "range": "stddev: 0.0004952136150648687",
            "extra": "mean: 6.405784090909325 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.46475405806592,
            "unit": "iter/sec",
            "range": "stddev: 0.00057459401856872",
            "extra": "mean: 4.6627708333335365 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 334.58425645429065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001668855205587869",
            "extra": "mean: 2.988783783783967 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 309.90914629301943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934771567054913",
            "extra": "mean: 3.2267521367520366 msec\nrounds: 351"
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
          "id": "8b9c77d6363b4698601385cfa8bdf91bac8a0fc6",
          "message": "Merge pull request #781 from TeoZosa/chore/from-future-import-annotations\n\n♻️  Postpone annotation evaluation (PEP 563)",
          "timestamp": "2023-01-10T16:14:14+09:00",
          "tree_id": "1a90a31642aeef9d5c84e0c18e2d900be1317ea1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8b9c77d6363b4698601385cfa8bdf91bac8a0fc6"
        },
        "date": 1673335442650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.29798905921993,
            "unit": "iter/sec",
            "range": "stddev: 0.00048654010718363565",
            "extra": "mean: 8.382370967741933 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.37827107020718,
            "unit": "iter/sec",
            "range": "stddev: 0.00034617807247369473",
            "extra": "mean: 6.926249999999845 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.24703596314097,
            "unit": "iter/sec",
            "range": "stddev: 0.0003519026323525644",
            "extra": "mean: 5.018895238095244 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.811602287531,
            "unit": "iter/sec",
            "range": "stddev: 0.00015993346138924353",
            "extra": "mean: 3.25932915360496 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.60503755952939,
            "unit": "iter/sec",
            "range": "stddev: 0.0005639149748587327",
            "extra": "mean: 9.74611016949163 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.00998516843188,
            "unit": "iter/sec",
            "range": "stddev: 0.0003603338379789391",
            "extra": "mean: 7.352401360544383 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.54355592993292,
            "unit": "iter/sec",
            "range": "stddev: 0.00039320765365699595",
            "extra": "mean: 5.508320000000175 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.1671381533141,
            "unit": "iter/sec",
            "range": "stddev: 0.00017769644506814982",
            "extra": "mean: 3.4226984126984608 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.747999175119968,
            "unit": "iter/sec",
            "range": "stddev: 0.00103340615718842",
            "extra": "mean: 72.73785714285756 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.857838230026875,
            "unit": "iter/sec",
            "range": "stddev: 0.0026647709878292822",
            "extra": "mean: 77.77357142857052 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.7435290099753,
            "unit": "iter/sec",
            "range": "stddev: 0.0002664339954820411",
            "extra": "mean: 6.260034482758637 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.18727563626902,
            "unit": "iter/sec",
            "range": "stddev: 0.0003178428413592075",
            "extra": "mean: 4.480542168675028 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.89497775331034,
            "unit": "iter/sec",
            "range": "stddev: 0.0001606891244305103",
            "extra": "mean: 2.891050938337683 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 304.8069401677461,
            "unit": "iter/sec",
            "range": "stddev: 0.00019561509666391058",
            "extra": "mean: 3.2807651933701525 msec\nrounds: 362"
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
          "id": "0830c97cb7f211f467f65497896d652c47a17afe",
          "message": "Merge pull request #788 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.8",
          "timestamp": "2023-01-12T15:48:00Z",
          "tree_id": "a5cd56579681b1ea7c3de969bed98ed7c03a5e44",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0830c97cb7f211f467f65497896d652c47a17afe"
        },
        "date": 1673540111227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.21906330100354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007393257340612177",
            "extra": "mean: 8.387920289855039 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.55991966457827,
            "unit": "iter/sec",
            "range": "stddev: 0.00037872642261398875",
            "extra": "mean: 6.469982658959533 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.352312537737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519995494083077",
            "extra": "mean: 4.643553571428522 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.54070207086426,
            "unit": "iter/sec",
            "range": "stddev: 0.0002426231573087682",
            "extra": "mean: 3.0071506849314957 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.67193032367655,
            "unit": "iter/sec",
            "range": "stddev: 0.0004974608326712936",
            "extra": "mean: 8.875325000000137 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.75655865047676,
            "unit": "iter/sec",
            "range": "stddev: 0.00028544260339492014",
            "extra": "mean: 7.0049320987653285 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.1982054991611,
            "unit": "iter/sec",
            "range": "stddev: 0.00016556023953406113",
            "extra": "mean: 4.970223255814125 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.5415019835488,
            "unit": "iter/sec",
            "range": "stddev: 0.0001486470315858394",
            "extra": "mean: 3.2305845697329043 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.24039834684175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008019605509465886",
            "extra": "mean: 75.52642857142823 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.563998821869784,
            "unit": "iter/sec",
            "range": "stddev: 0.0022110071744073983",
            "extra": "mean: 73.7245714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.1889395849869,
            "unit": "iter/sec",
            "range": "stddev: 0.00021404644962915294",
            "extra": "mean: 6.127866279069799 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.78614969316408,
            "unit": "iter/sec",
            "range": "stddev: 0.00019311313240278908",
            "extra": "mean: 4.187847583643281 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.721579668729,
            "unit": "iter/sec",
            "range": "stddev: 0.0002156395703542319",
            "extra": "mean: 2.875864077670101 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.44227438248174,
            "unit": "iter/sec",
            "range": "stddev: 0.000224494240733055",
            "extra": "mean: 3.0080410256412793 msec\nrounds: 390"
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
          "id": "98cc16b298317ed9504c2747c16cad84e52a4401",
          "message": "Merge pull request #789 from TeoZosa/dependabot/pip/sentry-sdk-1.13.0",
          "timestamp": "2023-01-13T15:02:19Z",
          "tree_id": "0f08b28be620f15d477f8637bf1fe3d7ffba7892",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/98cc16b298317ed9504c2747c16cad84e52a4401"
        },
        "date": 1673623287402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.98437154115206,
            "unit": "iter/sec",
            "range": "stddev: 0.00046065644476300934",
            "extra": "mean: 8.404465116279065 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.25666122892898,
            "unit": "iter/sec",
            "range": "stddev: 0.00028796755149543615",
            "extra": "mean: 6.567857142857134 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.13347935140186,
            "unit": "iter/sec",
            "range": "stddev: 0.0003661122015100264",
            "extra": "mean: 5.072705069124469 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.08522155728446,
            "unit": "iter/sec",
            "range": "stddev: 0.00021932125620639672",
            "extra": "mean: 3.204252976190499 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.50595947291764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324901143691268",
            "extra": "mean: 9.301809917355465 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.28469184162478,
            "unit": "iter/sec",
            "range": "stddev: 0.0005088781142112569",
            "extra": "mean: 7.284133333333524 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.7562574621889,
            "unit": "iter/sec",
            "range": "stddev: 0.000426106341857606",
            "extra": "mean: 5.471768867924501 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.21738971509404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001952035844279353",
            "extra": "mean: 3.276353293413107 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.800620281485571,
            "unit": "iter/sec",
            "range": "stddev: 0.002040209649052901",
            "extra": "mean: 78.12121428571471 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.382031182044345,
            "unit": "iter/sec",
            "range": "stddev: 0.002615886537891622",
            "extra": "mean: 74.72707142857159 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.93230059071374,
            "unit": "iter/sec",
            "range": "stddev: 0.00018886669921364596",
            "extra": "mean: 6.100079096045134 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.66028029629058,
            "unit": "iter/sec",
            "range": "stddev: 0.00014379772546395665",
            "extra": "mean: 4.22546613545811 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 337.11529258299544,
            "unit": "iter/sec",
            "range": "stddev: 0.00022725003618563678",
            "extra": "mean: 2.96634422110592 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 335.0907176334893,
            "unit": "iter/sec",
            "range": "stddev: 0.00017716521512653542",
            "extra": "mean: 2.9842664907649445 msec\nrounds: 379"
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
          "id": "e818a0c20ce288e263ca91d6d8f0511a49a9062c",
          "message": "Merge pull request #790 from TeoZosa/ci/migrate-linters-to-ruff\n\n🏗️ Migrate linters to `ruff`",
          "timestamp": "2023-01-14T16:05:44+09:00",
          "tree_id": "acf6e6fe5702230e9b89b2a3f3e4c149f9b4b6a5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e818a0c20ce288e263ca91d6d8f0511a49a9062c"
        },
        "date": 1673680526999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.83681177430906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004625363283448746",
            "extra": "mean: 8.20770000000003 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.32988539447132,
            "unit": "iter/sec",
            "range": "stddev: 0.0005342631127099176",
            "extra": "mean: 6.652037267080741 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.23946854283565,
            "unit": "iter/sec",
            "range": "stddev: 0.00018404055418458058",
            "extra": "mean: 4.920304147465509 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.45279089607607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001487298397643424",
            "extra": "mean: 3.101229166666732 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.79202617965908,
            "unit": "iter/sec",
            "range": "stddev: 0.0004176030012660593",
            "extra": "mean: 8.945181818181888 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.71497093119282,
            "unit": "iter/sec",
            "range": "stddev: 0.0004145039112063368",
            "extra": "mean: 7.209027210884345 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.1958883007775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006075473651883149",
            "extra": "mean: 5.149439613526546 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.2998505370181,
            "unit": "iter/sec",
            "range": "stddev: 0.00026290120189556327",
            "extra": "mean: 3.264774691358017 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.05294367188636,
            "unit": "iter/sec",
            "range": "stddev: 0.0014772702197629614",
            "extra": "mean: 76.61107142857101 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.574709772704974,
            "unit": "iter/sec",
            "range": "stddev: 0.0017147083383802285",
            "extra": "mean: 73.66640000000046 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.3226045821407,
            "unit": "iter/sec",
            "range": "stddev: 0.00042143458374275275",
            "extra": "mean: 6.160571428571221 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.69087408868737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002990555773227129",
            "extra": "mean: 4.279157258064314 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 352.92267519043367,
            "unit": "iter/sec",
            "range": "stddev: 0.0003183075796378177",
            "extra": "mean: 2.833481865285107 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 337.07337424259936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002854663614135376",
            "extra": "mean: 2.966713114754289 msec\nrounds: 366"
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
          "id": "5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae",
          "message": "Merge pull request #784 from TeoZosa/dependabot/pip/docs/orjson-3.8.5",
          "timestamp": "2023-01-14T10:14:21Z",
          "tree_id": "efecafffd0e86ff848bf96e95ff4594ad7dbadba",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae"
        },
        "date": 1673695525917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.44645172689926,
            "unit": "iter/sec",
            "range": "stddev: 0.0009849625176519838",
            "extra": "mean: 9.483486486486498 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.29014888740093,
            "unit": "iter/sec",
            "range": "stddev: 0.0004559828408670339",
            "extra": "mean: 7.55914184397171 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.22724208958385,
            "unit": "iter/sec",
            "range": "stddev: 0.0005296806568294712",
            "extra": "mean: 5.642473404255343 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 270.91938811429975,
            "unit": "iter/sec",
            "range": "stddev: 0.00041032624655899406",
            "extra": "mean: 3.6911348684210976 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.27961420744933,
            "unit": "iter/sec",
            "range": "stddev: 0.0006625624132053774",
            "extra": "mean: 10.495424528301838 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.36290051848341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005317776865137215",
            "extra": "mean: 8.377812499999942 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.61621897814595,
            "unit": "iter/sec",
            "range": "stddev: 0.00042814261022783653",
            "extra": "mean: 6.001816666666551 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.80775281188323,
            "unit": "iter/sec",
            "range": "stddev: 0.00043312093901587797",
            "extra": "mean: 3.863871886121043 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.235986617940068,
            "unit": "iter/sec",
            "range": "stddev: 0.002808634968515298",
            "extra": "mean: 88.99974999999897 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.086412269381999,
            "unit": "iter/sec",
            "range": "stddev: 0.0021012839573051486",
            "extra": "mean: 82.73753846153816 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 139.50574845745626,
            "unit": "iter/sec",
            "range": "stddev: 0.0005532524580475853",
            "extra": "mean: 7.168163398692926 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 202.9196557527644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155152948760876",
            "extra": "mean: 4.928058823529602 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 311.5375148389202,
            "unit": "iter/sec",
            "range": "stddev: 0.00031580216513145924",
            "extra": "mean: 3.209886297375929 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 285.98984164082344,
            "unit": "iter/sec",
            "range": "stddev: 0.0004690773711176719",
            "extra": "mean: 3.496627692307711 msec\nrounds: 325"
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
          "id": "eba81f3dc6bd2489195e2aad144968eac9fd3c28",
          "message": "Merge pull request #791 from TeoZosa/docs/add-ruff-documentation\n\n📝 Add Ruff status badge",
          "timestamp": "2023-01-14T23:17:36+09:00",
          "tree_id": "495cf285c70a9512296c2a1f833b1a784b5884c2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eba81f3dc6bd2489195e2aad144968eac9fd3c28"
        },
        "date": 1673709270678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.85267088015665,
            "unit": "iter/sec",
            "range": "stddev: 0.00042673633981531184",
            "extra": "mean: 8.78328099173552 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.4783205983505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183327484176128",
            "extra": "mean: 7.327171052631534 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.9597946759225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998534720302921",
            "extra": "mean: 5.2921310679611 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.16525365381443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002070866403765871",
            "extra": "mean: 3.470231012658257 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.12463839940101,
            "unit": "iter/sec",
            "range": "stddev: 0.0005054353574684855",
            "extra": "mean: 9.512517857142974 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.2138913129109,
            "unit": "iter/sec",
            "range": "stddev: 0.000504206781357245",
            "extra": "mean: 7.5067246376810965 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.85230760237664,
            "unit": "iter/sec",
            "range": "stddev: 0.00038104467904512333",
            "extra": "mean: 5.529373737373637 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.62637457386563,
            "unit": "iter/sec",
            "range": "stddev: 0.0001970662621167304",
            "extra": "mean: 3.513377850162941 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.965375963489613,
            "unit": "iter/sec",
            "range": "stddev: 0.0014451304306315812",
            "extra": "mean: 77.12849999999933 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.491579337143394,
            "unit": "iter/sec",
            "range": "stddev: 0.00485414458065418",
            "extra": "mean: 80.05392857142775 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.29828169859667,
            "unit": "iter/sec",
            "range": "stddev: 0.0005436153282015156",
            "extra": "mean: 6.788945454545158 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.58667667132835,
            "unit": "iter/sec",
            "range": "stddev: 0.0010670853841162795",
            "extra": "mean: 4.960645299145556 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 309.3875859828208,
            "unit": "iter/sec",
            "range": "stddev: 0.0002470255630643093",
            "extra": "mean: 3.2321917404130316 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 298.739948189216,
            "unit": "iter/sec",
            "range": "stddev: 0.00029341045002798376",
            "extra": "mean: 3.3473929618767273 msec\nrounds: 341"
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
          "id": "02f4d6a9512ec041d5187d21abb8b6b616a9813b",
          "message": "Merge pull request #782 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.3.2",
          "timestamp": "2023-01-14T14:30:36Z",
          "tree_id": "4e0d8c0db33fd57d7045107afad05779f5698ff5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02f4d6a9512ec041d5187d21abb8b6b616a9813b"
        },
        "date": 1673712686870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.81870473382779,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730251365256616",
            "extra": "mean: 10.119541666666658 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.41687009880712,
            "unit": "iter/sec",
            "range": "stddev: 0.0008718323192482989",
            "extra": "mean: 8.102620000000027 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.93779046485625,
            "unit": "iter/sec",
            "range": "stddev: 0.00043258543916503434",
            "extra": "mean: 5.526761421319727 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.47278538086638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003546511586398476",
            "extra": "mean: 3.9143112582781385 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.87862379109238,
            "unit": "iter/sec",
            "range": "stddev: 0.0006070207918868391",
            "extra": "mean: 9.815601769911556 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.77246722952904,
            "unit": "iter/sec",
            "range": "stddev: 0.0004984112339786055",
            "extra": "mean: 8.014588652482274 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 138.2243174806681,
            "unit": "iter/sec",
            "range": "stddev: 0.0012033844394987087",
            "extra": "mean: 7.23461702127673 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.88896640963034,
            "unit": "iter/sec",
            "range": "stddev: 0.00048646073387611057",
            "extra": "mean: 4.221386986301387 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.41919759564337,
            "unit": "iter/sec",
            "range": "stddev: 0.003277607844422317",
            "extra": "mean: 80.52049999999984 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.763291986812655,
            "unit": "iter/sec",
            "range": "stddev: 0.0030418588720447274",
            "extra": "mean: 78.34969230769181 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.8514436818814,
            "unit": "iter/sec",
            "range": "stddev: 0.000374549453452527",
            "extra": "mean: 6.5423000000001785 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 195.4202588476102,
            "unit": "iter/sec",
            "range": "stddev: 0.000671994285156043",
            "extra": "mean: 5.117176724137929 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 278.5397830413688,
            "unit": "iter/sec",
            "range": "stddev: 0.0004198357059415027",
            "extra": "mean: 3.590151428571622 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 265.25352849362037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604086642740781",
            "extra": "mean: 3.769978124999951 msec\nrounds: 320"
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
          "id": "81573e95bcfc838f6f0a208d03ad824c47a35a9d",
          "message": "Merge pull request #786 from TeoZosa/dependabot/pip/docs/poetry-1.3.2",
          "timestamp": "2023-01-15T00:58:39Z",
          "tree_id": "0ee02943f6b4684bd7b5101e9d55b2cedf52986c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81573e95bcfc838f6f0a208d03ad824c47a35a9d"
        },
        "date": 1673774791182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.42149198471712,
            "unit": "iter/sec",
            "range": "stddev: 0.00031383400865140054",
            "extra": "mean: 8.589479338842969 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.88796720289494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002817351549471204",
            "extra": "mean: 6.998489932885964 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.57804235276436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001871836965406481",
            "extra": "mean: 5.219804878048805 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.2327951612152,
            "unit": "iter/sec",
            "range": "stddev: 0.0001823898538017866",
            "extra": "mean: 3.375723472668791 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.98805824092413,
            "unit": "iter/sec",
            "range": "stddev: 0.00038621106990664706",
            "extra": "mean: 9.260283185840553 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.33639472215117,
            "unit": "iter/sec",
            "range": "stddev: 0.00036601518250370965",
            "extra": "mean: 7.61403571428583 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.7990902198674,
            "unit": "iter/sec",
            "range": "stddev: 0.00033047475602069855",
            "extra": "mean: 5.411282051281938 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 280.49565231738734,
            "unit": "iter/sec",
            "range": "stddev: 0.0003123324404011562",
            "extra": "mean: 3.5651176470588455 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.358189772362236,
            "unit": "iter/sec",
            "range": "stddev: 0.002750867469242018",
            "extra": "mean: 80.9179999999994 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.551168424129157,
            "unit": "iter/sec",
            "range": "stddev: 0.004991662785348137",
            "extra": "mean: 79.67385714285668 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.6186335708839,
            "unit": "iter/sec",
            "range": "stddev: 0.0009220571775259011",
            "extra": "mean: 6.86725301204823 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.4483865284086,
            "unit": "iter/sec",
            "range": "stddev: 0.00023448592549928638",
            "extra": "mean: 4.43560504201697 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.62014677758066,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490243754995899",
            "extra": "mean: 3.0523153409087938 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.243736214063,
            "unit": "iter/sec",
            "range": "stddev: 0.00018292559815204733",
            "extra": "mean: 3.112901162790745 msec\nrounds: 344"
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
          "id": "804b002cf0a6bba4c7fd90ba52cf34805eda27a6",
          "message": "Merge pull request #793 from TeoZosa/dependabot/pip/rich-13.1.0",
          "timestamp": "2023-01-15T12:09:52Z",
          "tree_id": "132be4b2a953cf97aa7e76d5d655ec4500383932",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/804b002cf0a6bba4c7fd90ba52cf34805eda27a6"
        },
        "date": 1673785438588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.0771257164315,
            "unit": "iter/sec",
            "range": "stddev: 0.00023974206045605087",
            "extra": "mean: 7.807795454545449 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.23086292477603,
            "unit": "iter/sec",
            "range": "stddev: 0.00033960305142308823",
            "extra": "mean: 6.400783950617313 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.82361443051803,
            "unit": "iter/sec",
            "range": "stddev: 0.0003037136105670193",
            "extra": "mean: 4.811772727272681 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.60396758075893,
            "unit": "iter/sec",
            "range": "stddev: 0.00009624519404530138",
            "extra": "mean: 3.0901969696970384 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.83748867389805,
            "unit": "iter/sec",
            "range": "stddev: 0.00040423407170365826",
            "extra": "mean: 8.344634146341312 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.34435265693276,
            "unit": "iter/sec",
            "range": "stddev: 0.0005014528781371155",
            "extra": "mean: 7.22833986928116 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.90642168686773,
            "unit": "iter/sec",
            "range": "stddev: 0.00023207633791370505",
            "extra": "mean: 4.95278947368439 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.4319031935872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001280684660935847",
            "extra": "mean: 3.2633677811551296 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.432993350668236,
            "unit": "iter/sec",
            "range": "stddev: 0.0014462229168685974",
            "extra": "mean: 74.44357142857173 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.474870809676156,
            "unit": "iter/sec",
            "range": "stddev: 0.0018078306242383223",
            "extra": "mean: 74.21221428571404 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.53805713625007,
            "unit": "iter/sec",
            "range": "stddev: 0.00020395682065580686",
            "extra": "mean: 5.968793103448439 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.46003539703892,
            "unit": "iter/sec",
            "range": "stddev: 0.00030752236491805775",
            "extra": "mean: 4.358057377049043 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 340.96947779071934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002352409883111069",
            "extra": "mean: 2.9328138297873725 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 318.62978512070646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902867585714771",
            "extra": "mean: 3.13843854748598 msec\nrounds: 358"
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
          "id": "60afafdc960ab68128dc92260c04f61397c75b3f",
          "message": "Merge pull request #792 from TeoZosa/ci/add-pydocstyle-via-ruff\n\n➕ Integrate `pydocstyle` via Ruff",
          "timestamp": "2023-01-16T09:18:19+09:00",
          "tree_id": "0fcd7364d294e5479ae39c53e00992228355d4ad",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/60afafdc960ab68128dc92260c04f61397c75b3f"
        },
        "date": 1673829053422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.24524724431511,
            "unit": "iter/sec",
            "range": "stddev: 0.00020252915523424542",
            "extra": "mean: 7.858839694656467 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.4893830240967,
            "unit": "iter/sec",
            "range": "stddev: 0.0011409018277827162",
            "extra": "mean: 6.689438271604925 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.10945513508793,
            "unit": "iter/sec",
            "range": "stddev: 0.0006247207057288706",
            "extra": "mean: 5.431551569506644 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.9810458661024,
            "unit": "iter/sec",
            "range": "stddev: 0.00013853754502047105",
            "extra": "mean: 3.1547627627628403 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.32331484331935,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084535745682333",
            "extra": "mean: 8.982844262295261 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.19830991941322,
            "unit": "iter/sec",
            "range": "stddev: 0.0002826358588315981",
            "extra": "mean: 6.934894039735006 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.40658673629434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002862832106569166",
            "extra": "mean: 5.040155251141523 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.2940757448674,
            "unit": "iter/sec",
            "range": "stddev: 0.0001470263330015156",
            "extra": "mean: 3.1817335329341803 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.924875297768539,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949159158245844",
            "extra": "mean: 71.81392857142858 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.908178207474144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006165430744364007",
            "extra": "mean: 71.90014285714342 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.44707200486894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002719614212471884",
            "extra": "mean: 5.936582857142777 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.1826384471718,
            "unit": "iter/sec",
            "range": "stddev: 0.00019805448742883977",
            "extra": "mean: 4.198458823529227 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 354.44574242930076,
            "unit": "iter/sec",
            "range": "stddev: 0.0002035175008106123",
            "extra": "mean: 2.821306282722423 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 325.898767695256,
            "unit": "iter/sec",
            "range": "stddev: 0.00030213243285373337",
            "extra": "mean: 3.0684375000002695 msec\nrounds: 368"
          }
        ]
      }
    ]
  }
}