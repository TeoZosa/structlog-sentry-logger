window.BENCHMARK_DATA = {
  "lastUpdate": 1643782396714,
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
        "date": 1642085682884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.05614336097565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002850708851738586",
            "extra": "mean: 8.260629921259872 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.54338698888404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006820982747653795",
            "extra": "mean: 7.115240506329144 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.3052104898317,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706543303105622",
            "extra": "mean: 4.823805429864243 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.9688881412313,
            "unit": "iter/sec",
            "range": "stddev: 0.00010388090484713395",
            "extra": "mean: 3.039801136363646 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.44145025401336,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238229264650927",
            "extra": "mean: 9.05457142857159 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.99659818445815,
            "unit": "iter/sec",
            "range": "stddev: 0.0008026613713990039",
            "extra": "mean: 7.874226666666573 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.81819358723934,
            "unit": "iter/sec",
            "range": "stddev: 0.0003247341491213956",
            "extra": "mean: 5.004549295774744 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.60941006595607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455742660047864",
            "extra": "mean: 3.2194774774777617 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.79736012850521,
            "unit": "iter/sec",
            "range": "stddev: 0.008909410204514882",
            "extra": "mean: 92.61523076923066 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.670004307801586,
            "unit": "iter/sec",
            "range": "stddev: 0.0021809861465474554",
            "extra": "mean: 78.92657142857067 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.07756106877332,
            "unit": "iter/sec",
            "range": "stddev: 0.00023546592054119516",
            "extra": "mean: 5.879670391061379 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.07373725371556,
            "unit": "iter/sec",
            "range": "stddev: 0.000529484766008818",
            "extra": "mean: 4.543931558935331 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.0056975106712,
            "unit": "iter/sec",
            "range": "stddev: 0.0001603479833910327",
            "extra": "mean: 2.1096792828687194 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.7996385133222,
            "unit": "iter/sec",
            "range": "stddev: 0.00014091544524253907",
            "extra": "mean: 2.208482328482641 msec\nrounds: 481"
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
        "date": 1642435380277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.19164181769801,
            "unit": "iter/sec",
            "range": "stddev: 0.0008300634186518473",
            "extra": "mean: 8.533031746031757 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.71293192333786,
            "unit": "iter/sec",
            "range": "stddev: 0.002866201512658434",
            "extra": "mean: 7.4231923076923145 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.81937367533894,
            "unit": "iter/sec",
            "range": "stddev: 0.00027479015651261793",
            "extra": "mean: 4.930495454545382 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.45606536108903,
            "unit": "iter/sec",
            "range": "stddev: 0.00024531472352996934",
            "extra": "mean: 3.1011976744186582 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.58224890137812,
            "unit": "iter/sec",
            "range": "stddev: 0.0004264118169111423",
            "extra": "mean: 8.882394957983106 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.4590817696265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006701505447181682",
            "extra": "mean: 7.3282040816325 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.77360959039234,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468754876632947",
            "extra": "mean: 5.241815165876914 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.13534233649096,
            "unit": "iter/sec",
            "range": "stddev: 0.000212807144523108",
            "extra": "mean: 3.173239766081944 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.74546670160187,
            "unit": "iter/sec",
            "range": "stddev: 0.0026095998145901694",
            "extra": "mean: 85.13923076923099 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.414803411587986,
            "unit": "iter/sec",
            "range": "stddev: 0.0018455221031812414",
            "extra": "mean: 80.54899999999995 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.16781619669422,
            "unit": "iter/sec",
            "range": "stddev: 0.0004685321380237534",
            "extra": "mean: 6.054448275862199 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.96120028740853,
            "unit": "iter/sec",
            "range": "stddev: 0.0003256061991855009",
            "extra": "mean: 4.202365758754806 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.33852808712425,
            "unit": "iter/sec",
            "range": "stddev: 0.00016203069593348087",
            "extra": "mean: 2.2010019801979888 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.5146470997045,
            "unit": "iter/sec",
            "range": "stddev: 0.00017862475053925813",
            "extra": "mean: 2.2295815899579767 msec\nrounds: 478"
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
        "date": 1643747045785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.60086645283498,
            "unit": "iter/sec",
            "range": "stddev: 0.0005271615029539749",
            "extra": "mean: 8.503338709677452 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.00644817144894,
            "unit": "iter/sec",
            "range": "stddev: 0.00022146944764010396",
            "extra": "mean: 6.6222337662337765 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.85512848902167,
            "unit": "iter/sec",
            "range": "stddev: 0.00032145042718437986",
            "extra": "mean: 5.003624413145502 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.7056543337932,
            "unit": "iter/sec",
            "range": "stddev: 0.00019125557549847197",
            "extra": "mean: 3.157505988023965 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.9969038848351,
            "unit": "iter/sec",
            "range": "stddev: 0.0004410740824606244",
            "extra": "mean: 8.849799999999878 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.6268568097972,
            "unit": "iter/sec",
            "range": "stddev: 0.0003878578741255134",
            "extra": "mean: 7.06080769230786 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.69048296092723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931768263010275",
            "extra": "mean: 5.18966990291251 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.33183183607974,
            "unit": "iter/sec",
            "range": "stddev: 0.00016420594404817782",
            "extra": "mean: 3.2644338461538234 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.63324428515768,
            "unit": "iter/sec",
            "range": "stddev: 0.0018690399119088616",
            "extra": "mean: 79.1562307692302 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.360775726968109,
            "unit": "iter/sec",
            "range": "stddev: 0.0018946449825467716",
            "extra": "mean: 80.90107142857151 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.28935999332936,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646307849779808",
            "extra": "mean: 6.566446927374326 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.90219372101453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002491698052481098",
            "extra": "mean: 4.168365384615504 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.4382527348348,
            "unit": "iter/sec",
            "range": "stddev: 0.00018173111950862636",
            "extra": "mean: 2.1256774809161953 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.0941129669477,
            "unit": "iter/sec",
            "range": "stddev: 0.0011638368581286431",
            "extra": "mean: 2.34689935760171 msec\nrounds: 467"
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
        "date": 1643756243910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.42884459263286,
            "unit": "iter/sec",
            "range": "stddev: 0.000374400204741996",
            "extra": "mean: 8.515795275590552 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.53467416891678,
            "unit": "iter/sec",
            "range": "stddev: 0.00046884646639285286",
            "extra": "mean: 7.06540645161294 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.38659918052608,
            "unit": "iter/sec",
            "range": "stddev: 0.00016504173610926433",
            "extra": "mean: 4.892688679245268 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.6325100245674,
            "unit": "iter/sec",
            "range": "stddev: 0.00014988534099369055",
            "extra": "mean: 3.118835329341302 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.33017675806498,
            "unit": "iter/sec",
            "range": "stddev: 0.00032787755441126437",
            "extra": "mean: 8.982290598290621 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.23574551817043,
            "unit": "iter/sec",
            "range": "stddev: 0.0002841885093447716",
            "extra": "mean: 7.080360544217518 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.55613291213962,
            "unit": "iter/sec",
            "range": "stddev: 0.00022461524790260237",
            "extra": "mean: 5.011121359223166 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.148399953113,
            "unit": "iter/sec",
            "range": "stddev: 0.00014930617352427376",
            "extra": "mean: 3.183208955223872 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.79258119645717,
            "unit": "iter/sec",
            "range": "stddev: 0.003827352859385998",
            "extra": "mean: 84.79907692307674 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.439048661558353,
            "unit": "iter/sec",
            "range": "stddev: 0.0019391554003401715",
            "extra": "mean: 80.39200000000008 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.14659462210165,
            "unit": "iter/sec",
            "range": "stddev: 0.0004452924113872687",
            "extra": "mean: 6.323247126436992 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.61347657574143,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177626909345106",
            "extra": "mean: 4.226301960784105 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.7967208209929,
            "unit": "iter/sec",
            "range": "stddev: 0.00010171087779042914",
            "extra": "mean: 2.1195569105691514 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.27677268043317,
            "unit": "iter/sec",
            "range": "stddev: 0.00012824121331577156",
            "extra": "mean: 2.215935010482224 msec\nrounds: 477"
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
        "date": 1643756600703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.72290914447375,
            "unit": "iter/sec",
            "range": "stddev: 0.0007946282679251955",
            "extra": "mean: 9.197693548387072 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.10424808322057,
            "unit": "iter/sec",
            "range": "stddev: 0.000570177567563348",
            "extra": "mean: 6.987912751677797 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.24438461254985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005387699787297361",
            "extra": "mean: 5.044279069767382 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.0983800776442,
            "unit": "iter/sec",
            "range": "stddev: 0.00030855339061527356",
            "extra": "mean: 3.3322405797101293 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.88472813169008,
            "unit": "iter/sec",
            "range": "stddev: 0.0008979362399942207",
            "extra": "mean: 10.112785046728819 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.58785242540092,
            "unit": "iter/sec",
            "range": "stddev: 0.0020276078006136234",
            "extra": "mean: 8.362053333333344 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.12354945350137,
            "unit": "iter/sec",
            "range": "stddev: 0.0004130082640020109",
            "extra": "mean: 5.344062801932322 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.91475641912865,
            "unit": "iter/sec",
            "range": "stddev: 0.0001804518123141792",
            "extra": "mean: 3.135634146341494 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.17556794341549,
            "unit": "iter/sec",
            "range": "stddev: 0.0033823427872960205",
            "extra": "mean: 82.13169230769205 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.423459744167294,
            "unit": "iter/sec",
            "range": "stddev: 0.003755902018736365",
            "extra": "mean: 87.53915384615333 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.69605564688155,
            "unit": "iter/sec",
            "range": "stddev: 0.0009099097988076887",
            "extra": "mean: 6.592129213483325 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.50533684291,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070641089629902",
            "extra": "mean: 4.264295275590586 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.3844256211553,
            "unit": "iter/sec",
            "range": "stddev: 0.00026320505545894166",
            "extra": "mean: 2.255379174852746 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.4395638127986,
            "unit": "iter/sec",
            "range": "stddev: 0.00023989462374267949",
            "extra": "mean: 2.275625779625979 msec\nrounds: 481"
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
        "date": 1643758471134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.45762290118773,
            "unit": "iter/sec",
            "range": "stddev: 0.0009194291514561952",
            "extra": "mean: 9.57326016260159 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1843760722864,
            "unit": "iter/sec",
            "range": "stddev: 0.000766288612734701",
            "extra": "mean: 7.0829367088607595 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.09295278015767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005264298756458515",
            "extra": "mean: 5.432038461538459 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.6821426047666,
            "unit": "iter/sec",
            "range": "stddev: 0.00033894793057818117",
            "extra": "mean: 3.359287833827852 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.71504393202825,
            "unit": "iter/sec",
            "range": "stddev: 0.0008111259889971421",
            "extra": "mean: 9.198358974358953 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.2597158093393,
            "unit": "iter/sec",
            "range": "stddev: 0.0004219538105404195",
            "extra": "mean: 7.129630872483304 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.00516947311792,
            "unit": "iter/sec",
            "range": "stddev: 0.0004633401467371274",
            "extra": "mean: 5.2908605769231585 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.33170763101145,
            "unit": "iter/sec",
            "range": "stddev: 0.0001708298706294627",
            "extra": "mean: 3.2017242424243384 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.265437982897406,
            "unit": "iter/sec",
            "range": "stddev: 0.005559245909016616",
            "extra": "mean: 88.76707692307633 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.233323914623336,
            "unit": "iter/sec",
            "range": "stddev: 0.007370666272984084",
            "extra": "mean: 89.02084615384572 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.84044829688315,
            "unit": "iter/sec",
            "range": "stddev: 0.0004028524930245308",
            "extra": "mean: 6.029892045454596 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.01727335209821,
            "unit": "iter/sec",
            "range": "stddev: 0.0003040386964302461",
            "extra": "mean: 4.236978021977941 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.1012276026009,
            "unit": "iter/sec",
            "range": "stddev: 0.0001247261025328574",
            "extra": "mean: 2.1362900608518802 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.3280991294236,
            "unit": "iter/sec",
            "range": "stddev: 0.00009132622085951563",
            "extra": "mean: 2.1770930232557637 msec\nrounds: 473"
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
        "date": 1643758880836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.59421242345435,
            "unit": "iter/sec",
            "range": "stddev: 0.0013531208406566853",
            "extra": "mean: 9.470216000000036 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.3390792267432,
            "unit": "iter/sec",
            "range": "stddev: 0.000286914356139092",
            "extra": "mean: 6.976464516129157 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.49685581716037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853600229937791",
            "extra": "mean: 5.012610328638481 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.2071654232642,
            "unit": "iter/sec",
            "range": "stddev: 0.00013012958468478517",
            "extra": "mean: 3.1624836795252054 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.91874912437382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258714047568249",
            "extra": "mean: 9.352896551724006 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.4092468010298,
            "unit": "iter/sec",
            "range": "stddev: 0.0004008898544817015",
            "extra": "mean: 7.277530612244834 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.4694477884961,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062146462643236",
            "extra": "mean: 5.195629807692367 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.2036185230835,
            "unit": "iter/sec",
            "range": "stddev: 0.000227502152087439",
            "extra": "mean: 3.2341148036252534 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.211147650622202,
            "unit": "iter/sec",
            "range": "stddev: 0.0026342786342896476",
            "extra": "mean: 81.89238461538432 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.978861915972885,
            "unit": "iter/sec",
            "range": "stddev: 0.004416432695787015",
            "extra": "mean: 83.48038461538465 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.4154041468573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005889669231829116",
            "extra": "mean: 6.476037837837387 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.42133952155072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002617744522473348",
            "extra": "mean: 4.247703296703309 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.98295780646026,
            "unit": "iter/sec",
            "range": "stddev: 0.0001683454508815042",
            "extra": "mean: 2.2272560296844555 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.6014237676751,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381584889819331",
            "extra": "mean: 2.2799743589744814 msec\nrounds: 468"
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
        "date": 1643759783082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.15883930719373,
            "unit": "iter/sec",
            "range": "stddev: 0.0017284661607951022",
            "extra": "mean: 9.419846774193546 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.73059840556044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007049911879104905",
            "extra": "mean: 7.367535483870918 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.18474525393307,
            "unit": "iter/sec",
            "range": "stddev: 0.0004569230405964358",
            "extra": "mean: 5.0204647887323794 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.54264878432053,
            "unit": "iter/sec",
            "range": "stddev: 0.00022195807143524974",
            "extra": "mean: 3.159131964809456 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.04194617413617,
            "unit": "iter/sec",
            "range": "stddev: 0.00024970667610422185",
            "extra": "mean: 8.768703389830366 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.67211234453646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210605343540273",
            "extra": "mean: 8.021039999999834 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.76267071543623,
            "unit": "iter/sec",
            "range": "stddev: 0.00041567798629619433",
            "extra": "mean: 5.383212871287081 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.89945001116695,
            "unit": "iter/sec",
            "range": "stddev: 0.0006543666477337963",
            "extra": "mean: 3.8182592592590847 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.58430419456059,
            "unit": "iter/sec",
            "range": "stddev: 0.006442771661154018",
            "extra": "mean: 86.32370000000087 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.968992346174627,
            "unit": "iter/sec",
            "range": "stddev: 0.006042869357922625",
            "extra": "mean: 91.1660769230771 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.15548153040177,
            "unit": "iter/sec",
            "range": "stddev: 0.0006877728936312912",
            "extra": "mean: 6.529312500000187 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.41333729800056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003471359702476168",
            "extra": "mean: 4.265968871595129 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 485.4507028940789,
            "unit": "iter/sec",
            "range": "stddev: 0.00012263954006245327",
            "extra": "mean: 2.0599413988657695 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.33950841726625,
            "unit": "iter/sec",
            "range": "stddev: 0.00016094523095789052",
            "extra": "mean: 2.302346391752391 msec\nrounds: 485"
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
        "date": 1643760039048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.87110467109375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005548786418772703",
            "extra": "mean: 8.70540944881886 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.77326717642356,
            "unit": "iter/sec",
            "range": "stddev: 0.00022375931176057785",
            "extra": "mean: 6.545647798742129 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.4512219711928,
            "unit": "iter/sec",
            "range": "stddev: 0.0003710297700784998",
            "extra": "mean: 4.891142201834823 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.2393137027873,
            "unit": "iter/sec",
            "range": "stddev: 0.00009650035043588574",
            "extra": "mean: 3.01896531791898 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.06274517181967,
            "unit": "iter/sec",
            "range": "stddev: 0.0007813960718499494",
            "extra": "mean: 9.085726495726536 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.17559999608025,
            "unit": "iter/sec",
            "range": "stddev: 0.00025748206444774983",
            "extra": "mean: 6.93598639455766 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.76087454737203,
            "unit": "iter/sec",
            "range": "stddev: 0.00025628469733758846",
            "extra": "mean: 4.981050228310484 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.8068831260907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008608610708362856",
            "extra": "mean: 3.088260479041759 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.949084200922034,
            "unit": "iter/sec",
            "range": "stddev: 0.0018317625216977898",
            "extra": "mean: 77.22553846153811 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.069271808180577,
            "unit": "iter/sec",
            "range": "stddev: 0.0012623152481499394",
            "extra": "mean: 76.51535714285629 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36991134727378,
            "unit": "iter/sec",
            "range": "stddev: 0.0003066899759547448",
            "extra": "mean: 6.010702247190843 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.45796373522492,
            "unit": "iter/sec",
            "range": "stddev: 0.00021293109964971342",
            "extra": "mean: 4.1415076335878 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 485.1753037291439,
            "unit": "iter/sec",
            "range": "stddev: 0.00011170279747403144",
            "extra": "mean: 2.0611106796117236 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 472.84787618046573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000742951430926192",
            "extra": "mean: 2.1148450704224864 msec\nrounds: 497"
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
        "date": 1643761263092,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.48218676742104,
            "unit": "iter/sec",
            "range": "stddev: 0.00029627805912264116",
            "extra": "mean: 8.440087301587258 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.6226967279678,
            "unit": "iter/sec",
            "range": "stddev: 0.00017835070118630167",
            "extra": "mean: 6.683477987421396 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.89158778353283,
            "unit": "iter/sec",
            "range": "stddev: 0.00038901334634526585",
            "extra": "mean: 5.184259259259258 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.11983406236885,
            "unit": "iter/sec",
            "range": "stddev: 0.00011027734745750011",
            "extra": "mean: 3.038406976744215 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.09913779475248,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455512387382156",
            "extra": "mean: 8.920675213675118 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.93662453908445,
            "unit": "iter/sec",
            "range": "stddev: 0.00045147169466302686",
            "extra": "mean: 7.095387755101803 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.80440200646126,
            "unit": "iter/sec",
            "range": "stddev: 0.00020164608280992018",
            "extra": "mean: 5.004894736841995 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.1549588299036,
            "unit": "iter/sec",
            "range": "stddev: 0.0001597410440321671",
            "extra": "mean: 3.163005899705075 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.17677682590771,
            "unit": "iter/sec",
            "range": "stddev: 0.00322360149561941",
            "extra": "mean: 82.12353846153829 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.309813383229029,
            "unit": "iter/sec",
            "range": "stddev: 0.001795260812420404",
            "extra": "mean: 81.23600000000053 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.11581136117877,
            "unit": "iter/sec",
            "range": "stddev: 0.00020457425320550963",
            "extra": "mean: 6.019896551724033 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.81997849757877,
            "unit": "iter/sec",
            "range": "stddev: 0.00019023834117698772",
            "extra": "mean: 4.152479400748946 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 480.26561406946155,
            "unit": "iter/sec",
            "range": "stddev: 0.00011863880316689626",
            "extra": "mean: 2.08218113207532 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 457.843822747227,
            "unit": "iter/sec",
            "range": "stddev: 0.0001414763578939919",
            "extra": "mean: 2.184150905432428 msec\nrounds: 497"
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
          "id": "7940508d06cb95f1d0485d97377176a2d09c3797",
          "message": "Merge pull request #418 from TeoZosa/dependabot/pip/pre-commit-2.17.0",
          "timestamp": "2022-02-01T23:34:45Z",
          "tree_id": "e604faef0c8a6e5394e2cb6a4ccd21eb59dedd5a"
        },
        "date": 1643762432709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.31097661524944,
            "unit": "iter/sec",
            "range": "stddev: 0.001123644043760923",
            "extra": "mean: 8.903849206349268 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.44183657356456,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080095562150169",
            "extra": "mean: 6.782335483871027 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.53107109997353,
            "unit": "iter/sec",
            "range": "stddev: 0.0004287563682055238",
            "extra": "mean: 4.962014018691589 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.1386432117432,
            "unit": "iter/sec",
            "range": "stddev: 0.00020759601449756867",
            "extra": "mean: 3.1631691394658774 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.16475330190272,
            "unit": "iter/sec",
            "range": "stddev: 0.000833174168198383",
            "extra": "mean: 9.419322033898396 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.43082171747795,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864060153959161",
            "extra": "mean: 7.4387702702704335 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.99503474242317,
            "unit": "iter/sec",
            "range": "stddev: 0.0007459355778245534",
            "extra": "mean: 5.347735576922952 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.7730404902088,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230986738952006",
            "extra": "mean: 3.65266060606053 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.074344525631473,
            "unit": "iter/sec",
            "range": "stddev: 0.0020928276387798834",
            "extra": "mean: 82.82023076923103 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.169718720706435,
            "unit": "iter/sec",
            "range": "stddev: 0.009299281738874498",
            "extra": "mean: 89.52776923076847 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.34524411442146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005411759931500448",
            "extra": "mean: 6.197889534883522 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.79735427999336,
            "unit": "iter/sec",
            "range": "stddev: 0.00031198005676813013",
            "extra": "mean: 4.240929687500089 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 480.19096182155084,
            "unit": "iter/sec",
            "range": "stddev: 0.00006747973048973532",
            "extra": "mean: 2.0825048355900155 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.26705690688374,
            "unit": "iter/sec",
            "range": "stddev: 0.00021357831931808038",
            "extra": "mean: 2.2258475991647493 msec\nrounds: 479"
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
        "date": 1643775137869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.5723627577666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005728449857385773",
            "extra": "mean: 9.043851239669381 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.32537600923644,
            "unit": "iter/sec",
            "range": "stddev: 0.00034889208997433",
            "extra": "mean: 6.92878846153848 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.43431765706703,
            "unit": "iter/sec",
            "range": "stddev: 0.00024298007981324784",
            "extra": "mean: 5.143124999999985 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.4974284583929,
            "unit": "iter/sec",
            "range": "stddev: 0.00012498583877511513",
            "extra": "mean: 3.159583333333342 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.9561192155478,
            "unit": "iter/sec",
            "range": "stddev: 0.0005804065347129282",
            "extra": "mean: 9.527791304347922 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.59155055857408,
            "unit": "iter/sec",
            "range": "stddev: 0.0002996210810646646",
            "extra": "mean: 7.485503355704696 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.03026275431745,
            "unit": "iter/sec",
            "range": "stddev: 0.00047032626643548925",
            "extra": "mean: 5.433888888888952 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.2690855364643,
            "unit": "iter/sec",
            "range": "stddev: 0.0003776477031651485",
            "extra": "mean: 3.3526773255813906 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.20729489162261,
            "unit": "iter/sec",
            "range": "stddev: 0.0030067688957254955",
            "extra": "mean: 81.91823076923136 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.963719365892384,
            "unit": "iter/sec",
            "range": "stddev: 0.010694576721104401",
            "extra": "mean: 91.2099230769216 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.05324287552773,
            "unit": "iter/sec",
            "range": "stddev: 0.0005686343221999607",
            "extra": "mean: 6.367267441860772 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.5614007679766,
            "unit": "iter/sec",
            "range": "stddev: 0.00056461613258528",
            "extra": "mean: 4.554534615384234 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 441.2939959799397,
            "unit": "iter/sec",
            "range": "stddev: 0.00022443881156323185",
            "extra": "mean: 2.2660630081299766 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.724841088596,
            "unit": "iter/sec",
            "range": "stddev: 0.00018300794474501681",
            "extra": "mean: 2.295026369168312 msec\nrounds: 493"
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
        "date": 1643776096115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.35440885675749,
            "unit": "iter/sec",
            "range": "stddev: 0.0007275891832315935",
            "extra": "mean: 8.821888888888914 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.94459110636626,
            "unit": "iter/sec",
            "range": "stddev: 0.0016572524674059643",
            "extra": "mean: 7.249287500000057 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.07116091177065,
            "unit": "iter/sec",
            "range": "stddev: 0.0003610619777104604",
            "extra": "mean: 4.973363636363529 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.153935611767,
            "unit": "iter/sec",
            "range": "stddev: 0.00011545350548130981",
            "extra": "mean: 3.113771587743732 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.653819172124,
            "unit": "iter/sec",
            "range": "stddev: 0.0007758936562072704",
            "extra": "mean: 9.376129310345117 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.29988630117515,
            "unit": "iter/sec",
            "range": "stddev: 0.00040998924196311256",
            "extra": "mean: 7.178756756756691 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.6008482271375,
            "unit": "iter/sec",
            "range": "stddev: 0.0002361363460029345",
            "extra": "mean: 5.2191835748792075 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.63236148863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951551751108775",
            "extra": "mean: 3.1884464831804435 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.652745402430298,
            "unit": "iter/sec",
            "range": "stddev: 0.0017306892246462993",
            "extra": "mean: 79.03423076923079 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.341787774415101,
            "unit": "iter/sec",
            "range": "stddev: 0.0031746811812463447",
            "extra": "mean: 81.02553846153718 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.76506502988713,
            "unit": "iter/sec",
            "range": "stddev: 0.0004048496977999887",
            "extra": "mean: 6.338538888888737 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.28231936599792,
            "unit": "iter/sec",
            "range": "stddev: 0.00021577318109218963",
            "extra": "mean: 4.3614352941175705 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.956990961996,
            "unit": "iter/sec",
            "range": "stddev: 0.00006662564616246478",
            "extra": "mean: 2.1278542914172056 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.6848865308522,
            "unit": "iter/sec",
            "range": "stddev: 0.00012984480168906032",
            "extra": "mean: 2.2437377398723517 msec\nrounds: 469"
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
        "date": 1643782394551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.83481484225274,
            "unit": "iter/sec",
            "range": "stddev: 0.0005647060426480241",
            "extra": "mean: 8.784658730158746 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.3051911263176,
            "unit": "iter/sec",
            "range": "stddev: 0.000709661336389127",
            "extra": "mean: 7.501583333333343 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.64217513914647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005917172006218339",
            "extra": "mean: 5.386706976744152 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.75989884070424,
            "unit": "iter/sec",
            "range": "stddev: 0.0003704305626102513",
            "extra": "mean: 3.4157683615819163 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.2103979178388,
            "unit": "iter/sec",
            "range": "stddev: 0.0012390592906336621",
            "extra": "mean: 10.393886956521833 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.01486171420473,
            "unit": "iter/sec",
            "range": "stddev: 0.0004910209072847113",
            "extra": "mean: 7.041516556291355 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.81434077033703,
            "unit": "iter/sec",
            "range": "stddev: 0.00039718424866513685",
            "extra": "mean: 5.159576923076934 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.86800011596625,
            "unit": "iter/sec",
            "range": "stddev: 0.00026376112382773745",
            "extra": "mean: 3.312706214689327 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.592652865119096,
            "unit": "iter/sec",
            "range": "stddev: 0.001810594080151062",
            "extra": "mean: 79.4113846153848 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.66551208008644,
            "unit": "iter/sec",
            "range": "stddev: 0.0037358304332032466",
            "extra": "mean: 85.72276923076917 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.97627007142498,
            "unit": "iter/sec",
            "range": "stddev: 0.0009292935242945049",
            "extra": "mean: 6.994167630058063 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.43356495616788,
            "unit": "iter/sec",
            "range": "stddev: 0.00030978068714233696",
            "extra": "mean: 4.265600790513808 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 390.7732510084506,
            "unit": "iter/sec",
            "range": "stddev: 0.0014323690023122751",
            "extra": "mean: 2.5590287907868463 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 389.4244258609946,
            "unit": "iter/sec",
            "range": "stddev: 0.001023214918024516",
            "extra": "mean: 2.5678923395445947 msec\nrounds: 483"
          }
        ]
      }
    ]
  }
}