window.BENCHMARK_DATA = {
  "lastUpdate": 1644599042018,
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
      }
    ]
  }
}