window.BENCHMARK_DATA = {
  "lastUpdate": 1645922416563,
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
        "date": 1643824330501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.1897705518037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005506527612605549",
            "extra": "mean: 8.533168000000053 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.62530787004223,
            "unit": "iter/sec",
            "range": "stddev: 0.0004572620367284105",
            "extra": "mean: 6.914419161676617 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.43166979401792,
            "unit": "iter/sec",
            "range": "stddev: 0.00022969098372084448",
            "extra": "mean: 4.844217948717956 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.2982358073384,
            "unit": "iter/sec",
            "range": "stddev: 0.00012463263348597598",
            "extra": "mean: 3.0553174157304115 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.88427695680039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006775648672140017",
            "extra": "mean: 9.100483050847549 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.24704857863765,
            "unit": "iter/sec",
            "range": "stddev: 0.0007288366784457807",
            "extra": "mean: 7.448953333333298 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.08661597924035,
            "unit": "iter/sec",
            "range": "stddev: 0.0003819056191783661",
            "extra": "mean: 5.048296650717689 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.449701082506,
            "unit": "iter/sec",
            "range": "stddev: 0.0002093283434394766",
            "extra": "mean: 3.2738614457831363 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.580271811288195,
            "unit": "iter/sec",
            "range": "stddev: 0.0022599870064302597",
            "extra": "mean: 79.48953846153837 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.897823442687116,
            "unit": "iter/sec",
            "range": "stddev: 0.0011611711484085796",
            "extra": "mean: 77.53246153846104 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.83936529604708,
            "unit": "iter/sec",
            "range": "stddev: 0.00037246234691394814",
            "extra": "mean: 6.295668571428661 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.73722118824762,
            "unit": "iter/sec",
            "range": "stddev: 0.0002304239472961699",
            "extra": "mean: 4.069387596899484 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 483.69586289787543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000535268414117214",
            "extra": "mean: 2.067414829659467 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 457.5699589049256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000949825390901467",
            "extra": "mean: 2.185458158995488 msec\nrounds: 478"
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
        "date": 1643830473603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.15781794512678,
            "unit": "iter/sec",
            "range": "stddev: 0.000355547522906817",
            "extra": "mean: 7.926579710144932 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.74857845753868,
            "unit": "iter/sec",
            "range": "stddev: 0.00028894835306602767",
            "extra": "mean: 6.299269005847981 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.60990443806284,
            "unit": "iter/sec",
            "range": "stddev: 0.0003368353147153811",
            "extra": "mean: 4.725676724137906 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.53456054863335,
            "unit": "iter/sec",
            "range": "stddev: 0.00017580418220741398",
            "extra": "mean: 3.139376770538284 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.58714770002517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003618736733767488",
            "extra": "mean: 8.882008474576324 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9223206634907,
            "unit": "iter/sec",
            "range": "stddev: 0.00020359680963247926",
            "extra": "mean: 6.900248322147681 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.31449440927557,
            "unit": "iter/sec",
            "range": "stddev: 0.000322819215927068",
            "extra": "mean: 5.068051401868989 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.1272840887485,
            "unit": "iter/sec",
            "range": "stddev: 0.000156864857548383",
            "extra": "mean: 3.16328279883385 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.171509679159083,
            "unit": "iter/sec",
            "range": "stddev: 0.0017251479869637627",
            "extra": "mean: 82.15907692307638 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.675482302101692,
            "unit": "iter/sec",
            "range": "stddev: 0.0015751252127683781",
            "extra": "mean: 78.89246153846094 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.04511350574393,
            "unit": "iter/sec",
            "range": "stddev: 0.0003287234150317056",
            "extra": "mean: 5.98640677966084 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.20064031863294,
            "unit": "iter/sec",
            "range": "stddev: 0.00015286558552455855",
            "extra": "mean: 4.078292775665355 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 486.0445425106161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007187924951465642",
            "extra": "mean: 2.0574246031744265 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.9857054927027,
            "unit": "iter/sec",
            "range": "stddev: 0.00012523216880582432",
            "extra": "mean: 2.212459349593623 msec\nrounds: 492"
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
        "date": 1643842987508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.0847836908421,
            "unit": "iter/sec",
            "range": "stddev: 0.0005725970965557658",
            "extra": "mean: 8.68924603174603 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.5021845237012,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901011869444734",
            "extra": "mean: 6.96853503184711 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.55134538280504,
            "unit": "iter/sec",
            "range": "stddev: 0.00016754364315573633",
            "extra": "mean: 4.841411214953276 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.2659804271405,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708246130556784",
            "extra": "mean: 3.12240469208217 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.30320006997198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005582823857069966",
            "extra": "mean: 9.319386554621895 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.93720469440743,
            "unit": "iter/sec",
            "range": "stddev: 0.00039689806283691814",
            "extra": "mean: 7.045369127516724 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.56123856610526,
            "unit": "iter/sec",
            "range": "stddev: 0.0004029733657933572",
            "extra": "mean: 5.036229665071709 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.1097490990006,
            "unit": "iter/sec",
            "range": "stddev: 0.00022568408879475828",
            "extra": "mean: 3.193768328445803 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.734822785144926,
            "unit": "iter/sec",
            "range": "stddev: 0.0015259542831814305",
            "extra": "mean: 78.52484615384616 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.435134036396619,
            "unit": "iter/sec",
            "range": "stddev: 0.0034357753463772765",
            "extra": "mean: 80.4173076923081 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.36961906674406,
            "unit": "iter/sec",
            "range": "stddev: 0.00044088223986152845",
            "extra": "mean: 5.974800000000106 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.6768954664669,
            "unit": "iter/sec",
            "range": "stddev: 0.0002176030692985757",
            "extra": "mean: 4.1207054263564205 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.27697881616405,
            "unit": "iter/sec",
            "range": "stddev: 0.00015676304168877432",
            "extra": "mean: 2.1129276190474333 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 478.88703142704907,
            "unit": "iter/sec",
            "range": "stddev: 0.000048170168956466074",
            "extra": "mean: 2.0881751527496406 msec\nrounds: 491"
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
        "date": 1643898522904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.41336303548148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008191178156629591",
            "extra": "mean: 8.66450793650793 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.4190096848804,
            "unit": "iter/sec",
            "range": "stddev: 0.0007135181435597736",
            "extra": "mean: 7.33035668789811 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.05843718598055,
            "unit": "iter/sec",
            "range": "stddev: 0.000673097601334731",
            "extra": "mean: 5.289369863013731 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.9614410408741,
            "unit": "iter/sec",
            "range": "stddev: 0.00034331006727611056",
            "extra": "mean: 3.2471597633136002 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.13097951404137,
            "unit": "iter/sec",
            "range": "stddev: 0.0013737791083715822",
            "extra": "mean: 10.087663865546242 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.5279714033585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011128504349830677",
            "extra": "mean: 7.489067567567704 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.69235330107446,
            "unit": "iter/sec",
            "range": "stddev: 0.00028203893254547034",
            "extra": "mean: 5.084081730769232 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.8678776735577,
            "unit": "iter/sec",
            "range": "stddev: 0.00027230542583911644",
            "extra": "mean: 3.1860539772727643 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.45671292259401,
            "unit": "iter/sec",
            "range": "stddev: 0.0015682615640682735",
            "extra": "mean: 80.27799999999985 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.026146693087167,
            "unit": "iter/sec",
            "range": "stddev: 0.0025331097109472832",
            "extra": "mean: 83.152153846154 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.49777949170152,
            "unit": "iter/sec",
            "range": "stddev: 0.0008043921054500113",
            "extra": "mean: 6.430960000000303 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.71857972501365,
            "unit": "iter/sec",
            "range": "stddev: 0.0006062164997406293",
            "extra": "mean: 4.657258823529304 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.08584298538085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002442724254924926",
            "extra": "mean: 2.22179838709675 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.48667370107955,
            "unit": "iter/sec",
            "range": "stddev: 0.00015233980024817838",
            "extra": "mean: 2.2002845360823713 msec\nrounds: 485"
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
        "date": 1643988218180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.53104944546405,
            "unit": "iter/sec",
            "range": "stddev: 0.0004484222681586954",
            "extra": "mean: 8.436608000000021 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.29964196136416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646510623350245",
            "extra": "mean: 6.65337579617827 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.95992987871475,
            "unit": "iter/sec",
            "range": "stddev: 0.00025050556927395717",
            "extra": "mean: 4.855313364055221 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.05991142822324,
            "unit": "iter/sec",
            "range": "stddev: 0.00020862372827815776",
            "extra": "mean: 3.1342076023391714 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.1819653663588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005401642307143998",
            "extra": "mean: 8.994264462809882 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.62126396898466,
            "unit": "iter/sec",
            "range": "stddev: 0.00034031639057203816",
            "extra": "mean: 7.01157718120817 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.17316034407153,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818587532633134",
            "extra": "mean: 4.921909952606491 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.5930429110813,
            "unit": "iter/sec",
            "range": "stddev: 0.00017522113026149748",
            "extra": "mean: 3.1486835820896015 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.483135763703872,
            "unit": "iter/sec",
            "range": "stddev: 0.0018323218176923436",
            "extra": "mean: 80.10807692307672 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.68768006745931,
            "unit": "iter/sec",
            "range": "stddev: 0.0014154826349152899",
            "extra": "mean: 78.81661538461607 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.6206669488674,
            "unit": "iter/sec",
            "range": "stddev: 0.00046299576012261666",
            "extra": "mean: 6.074571428571654 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.23258906646157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001440083313525722",
            "extra": "mean: 4.111291187739473 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.9013237735668,
            "unit": "iter/sec",
            "range": "stddev: 0.00036164006332442046",
            "extra": "mean: 2.1463772455087744 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.14654932180224,
            "unit": "iter/sec",
            "range": "stddev: 0.00015360965740021573",
            "extra": "mean: 2.236403258655856 msec\nrounds: 491"
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
        "date": 1643988890574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.92638969861407,
            "unit": "iter/sec",
            "range": "stddev: 0.0012664238125883324",
            "extra": "mean: 9.622195121951163 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.58419034559822,
            "unit": "iter/sec",
            "range": "stddev: 0.0011028725864117115",
            "extra": "mean: 8.02670063694267 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.39084267040639,
            "unit": "iter/sec",
            "range": "stddev: 0.00032759694702816844",
            "extra": "mean: 5.22491037735853 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.58441047490373,
            "unit": "iter/sec",
            "range": "stddev: 0.00016485428565954298",
            "extra": "mean: 3.1388855421686563 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.32676869817203,
            "unit": "iter/sec",
            "range": "stddev: 0.0008821603862660046",
            "extra": "mean: 9.678034188034093 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.8485429417529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858551328136646",
            "extra": "mean: 7.584459999999946 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.76439601549492,
            "unit": "iter/sec",
            "range": "stddev: 0.0002565159546114863",
            "extra": "mean: 5.031082125603842 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.2658170252332,
            "unit": "iter/sec",
            "range": "stddev: 0.0006490971375220017",
            "extra": "mean: 3.409875757575789 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.150787873094837,
            "unit": "iter/sec",
            "range": "stddev: 0.0026202672342945112",
            "extra": "mean: 76.04107142857178 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.993499523258615,
            "unit": "iter/sec",
            "range": "stddev: 0.005232613463064701",
            "extra": "mean: 83.37849999999847 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.81093556305004,
            "unit": "iter/sec",
            "range": "stddev: 0.0003027757712634495",
            "extra": "mean: 6.14209356725145 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.62544208767318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002446685317187159",
            "extra": "mean: 4.28035573122523 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 439.384198241772,
            "unit": "iter/sec",
            "range": "stddev: 0.0001945605230092747",
            "extra": "mean: 2.2759125248508547 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.09637574570183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000936097645591376",
            "extra": "mean: 2.2568453608248684 msec\nrounds: 485"
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
        "date": 1644011537447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.10011949891098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009260124908876902",
            "extra": "mean: 9.0826422764227 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.95722967549605,
            "unit": "iter/sec",
            "range": "stddev: 0.0007138399985307582",
            "extra": "mean: 7.248623376623371 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.719368189548,
            "unit": "iter/sec",
            "range": "stddev: 0.000558335857780453",
            "extra": "mean: 5.270943127962051 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.71573499627226,
            "unit": "iter/sec",
            "range": "stddev: 0.00025850785599972406",
            "extra": "mean: 3.197792397660835 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.17491513739483,
            "unit": "iter/sec",
            "range": "stddev: 0.0011436722869520837",
            "extra": "mean: 9.883872881356083 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.27060180978538,
            "unit": "iter/sec",
            "range": "stddev: 0.0006868735914953213",
            "extra": "mean: 7.44764666666685 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.3077853428039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006134762417070853",
            "extra": "mean: 5.48522926829286 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.0247271864747,
            "unit": "iter/sec",
            "range": "stddev: 0.000390353179373324",
            "extra": "mean: 3.49620121951221 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.163389880620992,
            "unit": "iter/sec",
            "range": "stddev: 0.0031916828753694336",
            "extra": "mean: 82.21392307692318 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.433587129650814,
            "unit": "iter/sec",
            "range": "stddev: 0.0050443313322717275",
            "extra": "mean: 87.46161538461467 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.08552324999343,
            "unit": "iter/sec",
            "range": "stddev: 0.00031906018014627834",
            "extra": "mean: 6.094382857142396 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.57993669294825,
            "unit": "iter/sec",
            "range": "stddev: 0.0004745554544768224",
            "extra": "mean: 4.59601199999986 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.6507091447577,
            "unit": "iter/sec",
            "range": "stddev: 0.00010692715696468128",
            "extra": "mean: 2.138348088531301 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 424.21644064354473,
            "unit": "iter/sec",
            "range": "stddev: 0.00037700241277698943",
            "extra": "mean: 2.357287234042557 msec\nrounds: 470"
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
        "date": 1644244474454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.32359135764598,
            "unit": "iter/sec",
            "range": "stddev: 0.000508327094973175",
            "extra": "mean: 8.451399999999921 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.07074197588636,
            "unit": "iter/sec",
            "range": "stddev: 0.00034609139078536823",
            "extra": "mean: 6.753528662420373 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.1832052324728,
            "unit": "iter/sec",
            "range": "stddev: 0.00029787738489870296",
            "extra": "mean: 4.850055555555527 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.5228129604055,
            "unit": "iter/sec",
            "range": "stddev: 0.00007575280798151713",
            "extra": "mean: 2.998295652173922 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.39748969950709,
            "unit": "iter/sec",
            "range": "stddev: 0.0008204632412093103",
            "extra": "mean: 9.765864406779627 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.3902849922759,
            "unit": "iter/sec",
            "range": "stddev: 0.0003755600862422499",
            "extra": "mean: 7.1230000000001334 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.86371482942704,
            "unit": "iter/sec",
            "range": "stddev: 0.00032819857119082086",
            "extra": "mean: 5.028569444444593 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3518579258764,
            "unit": "iter/sec",
            "range": "stddev: 0.00013105872439287457",
            "extra": "mean: 3.0926063218391504 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.362220673246599,
            "unit": "iter/sec",
            "range": "stddev: 0.0019186391244174694",
            "extra": "mean: 80.891615384615 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.889727869606988,
            "unit": "iter/sec",
            "range": "stddev: 0.003485809522545867",
            "extra": "mean: 84.10621428571474 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.63168844527,
            "unit": "iter/sec",
            "range": "stddev: 0.0004059611959423025",
            "extra": "mean: 6.111285714285535 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.28351564164663,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957511903574385",
            "extra": "mean: 4.144501945525347 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.7283331734095,
            "unit": "iter/sec",
            "range": "stddev: 0.00017499942797506474",
            "extra": "mean: 2.07585880077356 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.88670922247104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001498265690467728",
            "extra": "mean: 2.208057731958681 msec\nrounds: 485"
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
        "date": 1644418938308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.4407602705041,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828422837448581",
            "extra": "mean: 8.662451612903201 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.54520950906092,
            "unit": "iter/sec",
            "range": "stddev: 0.0004327844896001376",
            "extra": "mean: 7.015318181818202 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.04388089920178,
            "unit": "iter/sec",
            "range": "stddev: 0.00015113028721579577",
            "extra": "mean: 4.829894009216552 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.36796549179047,
            "unit": "iter/sec",
            "range": "stddev: 0.00016962014912549339",
            "extra": "mean: 3.121410714285743 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.62277557410698,
            "unit": "iter/sec",
            "range": "stddev: 0.0005243647465326946",
            "extra": "mean: 9.206172413793258 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.7060589735537,
            "unit": "iter/sec",
            "range": "stddev: 0.0004267020135151702",
            "extra": "mean: 7.26184459459441 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.99687324143153,
            "unit": "iter/sec",
            "range": "stddev: 0.0003457609257026307",
            "extra": "mean: 5.235687804878041 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.89225202457345,
            "unit": "iter/sec",
            "range": "stddev: 0.00016835023165212156",
            "extra": "mean: 3.165636363636451 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.948902814977735,
            "unit": "iter/sec",
            "range": "stddev: 0.0037836973184221523",
            "extra": "mean: 83.68969230769189 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.379290019149936,
            "unit": "iter/sec",
            "range": "stddev: 0.0022029526194592575",
            "extra": "mean: 80.78007692307611 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.75998347537535,
            "unit": "iter/sec",
            "range": "stddev: 0.00047452604010376256",
            "extra": "mean: 6.220453488371852 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.94393088857765,
            "unit": "iter/sec",
            "range": "stddev: 0.00024140069328273603",
            "extra": "mean: 4.16764031620524 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.6791788189765,
            "unit": "iter/sec",
            "range": "stddev: 0.00013988786040859314",
            "extra": "mean: 2.1291129032258413 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.3664312691776,
            "unit": "iter/sec",
            "range": "stddev: 0.00013335572028244514",
            "extra": "mean: 2.30751605995728 msec\nrounds: 467"
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
        "date": 1644420709193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.87374801728032,
            "unit": "iter/sec",
            "range": "stddev: 0.0010749349824599396",
            "extra": "mean: 9.270096000000017 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.82083405091083,
            "unit": "iter/sec",
            "range": "stddev: 0.000483129684552106",
            "extra": "mean: 6.95309554140127 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.6389964720574,
            "unit": "iter/sec",
            "range": "stddev: 0.00034411527795119226",
            "extra": "mean: 5.034258215962495 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.62542673523353,
            "unit": "iter/sec",
            "range": "stddev: 0.00030337171984219196",
            "extra": "mean: 3.2613081395349677 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.64352934124267,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620543267996253",
            "extra": "mean: 9.204413793103695 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.84807346961486,
            "unit": "iter/sec",
            "range": "stddev: 0.0004464416867724445",
            "extra": "mean: 7.361164383561685 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.2975918651415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003819884315166055",
            "extra": "mean: 5.173370192307791 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.41858355048504,
            "unit": "iter/sec",
            "range": "stddev: 0.00045232004293391974",
            "extra": "mean: 3.3398060606060866 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.65292219433488,
            "unit": "iter/sec",
            "range": "stddev: 0.003894276538255895",
            "extra": "mean: 85.81538461538466 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.159508431605875,
            "unit": "iter/sec",
            "range": "stddev: 0.002470627591720522",
            "extra": "mean: 82.24016666666618 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.04687265831197,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854412685895078",
            "extra": "mean: 6.367525714285997 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.68711144103648,
            "unit": "iter/sec",
            "range": "stddev: 0.0003429249914786381",
            "extra": "mean: 4.2429133858266885 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.4626710107127,
            "unit": "iter/sec",
            "range": "stddev: 0.00022794397476859132",
            "extra": "mean: 2.23482329317267 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 404.3899903367611,
            "unit": "iter/sec",
            "range": "stddev: 0.00034938758125754296",
            "extra": "mean: 2.4728604166666854 msec\nrounds: 480"
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
        "date": 1644539507164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.19135085149827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662751340857927",
            "extra": "mean: 8.460855999999964 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.40592063517758,
            "unit": "iter/sec",
            "range": "stddev: 0.00033934716401557753",
            "extra": "mean: 6.738275641025631 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.12584657887444,
            "unit": "iter/sec",
            "range": "stddev: 0.00035145835377802193",
            "extra": "mean: 4.9968558139534265 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.941672153437,
            "unit": "iter/sec",
            "range": "stddev: 0.00037015209096746734",
            "extra": "mean: 3.216037249283656 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.81807756589826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005137047205694544",
            "extra": "mean: 9.189649572649525 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.8458512327081,
            "unit": "iter/sec",
            "range": "stddev: 0.00034607101604032254",
            "extra": "mean: 7.000553333333528 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.96249507268553,
            "unit": "iter/sec",
            "range": "stddev: 0.00027985970207093793",
            "extra": "mean: 5.000937799043287 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.221603831432,
            "unit": "iter/sec",
            "range": "stddev: 0.00020132719325188455",
            "extra": "mean: 3.132620060790308 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.921508786151984,
            "unit": "iter/sec",
            "range": "stddev: 0.0021073711902118947",
            "extra": "mean: 83.88199999999995 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.685120167978145,
            "unit": "iter/sec",
            "range": "stddev: 0.005160567079006962",
            "extra": "mean: 85.57892307692273 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.66879577306892,
            "unit": "iter/sec",
            "range": "stddev: 0.00045288848936781144",
            "extra": "mean: 6.185485549132678 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.22653042112444,
            "unit": "iter/sec",
            "range": "stddev: 0.00022659633256835347",
            "extra": "mean: 4.0778622047243935 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 477.60939341753993,
            "unit": "iter/sec",
            "range": "stddev: 0.00014826508770484194",
            "extra": "mean: 2.093761165048467 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 466.21887096075136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001628642518555109",
            "extra": "mean: 2.144915322580722 msec\nrounds: 496"
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
        "date": 1644540361242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.30501629154557,
            "unit": "iter/sec",
            "range": "stddev: 0.0004599540395601764",
            "extra": "mean: 8.24368217054265 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.4471620799837,
            "unit": "iter/sec",
            "range": "stddev: 0.0002126985505701187",
            "extra": "mean: 6.516901234567988 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.86539217370546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004354893024694893",
            "extra": "mean: 5.053940909090878 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.2676255556243,
            "unit": "iter/sec",
            "range": "stddev: 0.000190418114629427",
            "extra": "mean: 3.0743914285714524 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.99451859461382,
            "unit": "iter/sec",
            "range": "stddev: 0.0003720488070747665",
            "extra": "mean: 8.696066666666653 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.90030944837002,
            "unit": "iter/sec",
            "range": "stddev: 0.0006030240104462335",
            "extra": "mean: 7.147947019867374 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.05640706450004,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121968753578664",
            "extra": "mean: 5.7124444444443965 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.9858927678246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005237841766418436",
            "extra": "mean: 3.5089456193352375 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.871201351373974,
            "unit": "iter/sec",
            "range": "stddev: 0.008279940668529653",
            "extra": "mean: 91.98615384615366 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.5719380803037,
            "unit": "iter/sec",
            "range": "stddev: 0.0025023318509563904",
            "extra": "mean: 79.542230769231 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.3145569334326,
            "unit": "iter/sec",
            "range": "stddev: 0.0006294393654763957",
            "extra": "mean: 6.199068571428776 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.3292367482469,
            "unit": "iter/sec",
            "range": "stddev: 0.0021113580013469393",
            "extra": "mean: 4.601313725490119 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.98254751848333,
            "unit": "iter/sec",
            "range": "stddev: 0.0001671302394467352",
            "extra": "mean: 2.1142429149796946 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.54327852450973,
            "unit": "iter/sec",
            "range": "stddev: 0.00019984983042878993",
            "extra": "mean: 2.229439271254974 msec\nrounds: 494"
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
        "date": 1644598804201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.72318376001354,
            "unit": "iter/sec",
            "range": "stddev: 0.0008140557990227261",
            "extra": "mean: 9.73490076335878 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.25411405109347,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011563672657546",
            "extra": "mean: 7.3934904458598645 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.6863628980251,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080200116995528",
            "extra": "mean: 4.861771028037374 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.9912858292539,
            "unit": "iter/sec",
            "range": "stddev: 0.00010486692085592178",
            "extra": "mean: 2.958656160458465 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.42362182117816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005609754849168773",
            "extra": "mean: 9.056033333333485 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.7733689326025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002366426889667753",
            "extra": "mean: 6.9553910256410285 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.84528723696232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003008092731407896",
            "extra": "mean: 5.003870813397122 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.6296682433721,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836246163942519",
            "extra": "mean: 3.3374532163742776 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.410145771481464,
            "unit": "iter/sec",
            "range": "stddev: 0.0022315411025356866",
            "extra": "mean: 80.57923076923092 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.675321636286498,
            "unit": "iter/sec",
            "range": "stddev: 0.004325332426827488",
            "extra": "mean: 78.8934615384617 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.86760853867443,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617485545404746",
            "extra": "mean: 6.25517582417632 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.71053155180076,
            "unit": "iter/sec",
            "range": "stddev: 0.00017625484155426753",
            "extra": "mean: 4.0207384615384605 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.68755706976674,
            "unit": "iter/sec",
            "range": "stddev: 0.00014260960585668598",
            "extra": "mean: 2.1245515947466975 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 462.782634852924,
            "unit": "iter/sec",
            "range": "stddev: 0.00009332668693400665",
            "extra": "mean: 2.160841666666702 msec\nrounds: 480"
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
        "date": 1644600829375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.56795152502741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007667667447724108",
            "extra": "mean: 8.728444444444392 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.3881300901504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565751641597866",
            "extra": "mean: 7.02305732484069 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.4306034523909,
            "unit": "iter/sec",
            "range": "stddev: 0.00028138568564333843",
            "extra": "mean: 4.891635514018753 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.2774133501381,
            "unit": "iter/sec",
            "range": "stddev: 0.00046436720350117753",
            "extra": "mean: 3.5053598820059406 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.11850262257765,
            "unit": "iter/sec",
            "range": "stddev: 0.0009215958639702909",
            "extra": "mean: 9.423427350427401 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.72718737835066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007935292526275802",
            "extra": "mean: 7.477910958904172 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.49569789446096,
            "unit": "iter/sec",
            "range": "stddev: 0.000213876956327736",
            "extra": "mean: 5.012639423076828 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.79910596388225,
            "unit": "iter/sec",
            "range": "stddev: 0.0003259379746031638",
            "extra": "mean: 3.324477966101644 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.64052622341931,
            "unit": "iter/sec",
            "range": "stddev: 0.0031473015731433053",
            "extra": "mean: 85.9067692307692 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.591556353688663,
            "unit": "iter/sec",
            "range": "stddev: 0.010487208966042666",
            "extra": "mean: 86.2696923076926 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.28114686194235,
            "unit": "iter/sec",
            "range": "stddev: 0.0009633163005288402",
            "extra": "mean: 6.52395953757237 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.04811544823497,
            "unit": "iter/sec",
            "range": "stddev: 0.000433499270448199",
            "extra": "mean: 4.385039525691637 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.015475391341,
            "unit": "iter/sec",
            "range": "stddev: 0.0002077591672406703",
            "extra": "mean: 2.2025680933850214 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.1123787414253,
            "unit": "iter/sec",
            "range": "stddev: 0.0003862806318831728",
            "extra": "mean: 2.3467987551866516 msec\nrounds: 482"
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
        "date": 1644601523133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.598257173503,
            "unit": "iter/sec",
            "range": "stddev: 0.001358576868930466",
            "extra": "mean: 9.84268852459018 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.2608941920804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005075728500840075",
            "extra": "mean: 7.338862745098004 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.9160534314172,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760989787448062",
            "extra": "mean: 5.3499952606634595 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.7402159676828,
            "unit": "iter/sec",
            "range": "stddev: 0.0003560789447437558",
            "extra": "mean: 3.2494940476190948 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.76998678343054,
            "unit": "iter/sec",
            "range": "stddev: 0.0008423617531481045",
            "extra": "mean: 9.454477876106301 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.8601678802772,
            "unit": "iter/sec",
            "range": "stddev: 0.0006997676788806081",
            "extra": "mean: 7.526710344827493 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.68876954721142,
            "unit": "iter/sec",
            "range": "stddev: 0.00039894546503847864",
            "extra": "mean: 5.162921951219536 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 177.83882568697678,
            "unit": "iter/sec",
            "range": "stddev: 0.00337003545591593",
            "extra": "mean: 5.623069069069042 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.994943669899145,
            "unit": "iter/sec",
            "range": "stddev: 0.006052088477203462",
            "extra": "mean: 83.36846153846157 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.00284005661644,
            "unit": "iter/sec",
            "range": "stddev: 0.0038561803540638883",
            "extra": "mean: 83.31361538461562 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.3605839656386,
            "unit": "iter/sec",
            "range": "stddev: 0.0007078220141496221",
            "extra": "mean: 6.395473684210321 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.74388582384262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566546333366145",
            "extra": "mean: 4.278186770428015 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.3660876882515,
            "unit": "iter/sec",
            "range": "stddev: 0.00023642238318117735",
            "extra": "mean: 2.2303203285421063 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.0671346480903,
            "unit": "iter/sec",
            "range": "stddev: 0.00029367690441992907",
            "extra": "mean: 2.319824267782253 msec\nrounds: 478"
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
        "date": 1644601947787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.70649957970602,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105441767458062",
            "extra": "mean: 8.149527559055121 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.45536828529393,
            "unit": "iter/sec",
            "range": "stddev: 0.00027856739125415745",
            "extra": "mean: 6.736031250000008 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.43283107745486,
            "unit": "iter/sec",
            "range": "stddev: 0.00025559766117678854",
            "extra": "mean: 4.844190697674411 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.4364766267732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844472295635586",
            "extra": "mean: 3.0917972222222216 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.05184011911358,
            "unit": "iter/sec",
            "range": "stddev: 0.00038035746889317066",
            "extra": "mean: 8.92444067796636 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.0819294557915,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135681404200414",
            "extra": "mean: 7.190006666666638 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.64977693035212,
            "unit": "iter/sec",
            "range": "stddev: 0.000334109875851667",
            "extra": "mean: 5.163961538461566 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.50129291057505,
            "unit": "iter/sec",
            "range": "stddev: 0.00017888416069214357",
            "extra": "mean: 3.100762762762894 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.297564159979068,
            "unit": "iter/sec",
            "range": "stddev: 0.003125168197897636",
            "extra": "mean: 81.31691666666629 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.570746712024533,
            "unit": "iter/sec",
            "range": "stddev: 0.002342944058012177",
            "extra": "mean: 79.54976923076902 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.03882276250175,
            "unit": "iter/sec",
            "range": "stddev: 0.00029577169560402773",
            "extra": "mean: 5.951005747126386 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.0903206277421,
            "unit": "iter/sec",
            "range": "stddev: 0.0001537765747903608",
            "extra": "mean: 4.113697318007804 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.1751045187138,
            "unit": "iter/sec",
            "range": "stddev: 0.00008814091901476066",
            "extra": "mean: 2.0782455089820804 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 466.2066634319798,
            "unit": "iter/sec",
            "range": "stddev: 0.00006200384452875615",
            "extra": "mean: 2.144971486761903 msec\nrounds: 491"
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
        "date": 1644603450210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.43616842074447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007746989907013001",
            "extra": "mean: 8.738495999999984 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.80098887748557,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707238665326336",
            "extra": "mean: 6.631256249999956 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.5472576092762,
            "unit": "iter/sec",
            "range": "stddev: 0.00011843474862779863",
            "extra": "mean: 4.660977777777775 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.3160517250739,
            "unit": "iter/sec",
            "range": "stddev: 0.0001419871258951926",
            "extra": "mean: 3.036596590909087 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.57238073696884,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432373625904752",
            "extra": "mean: 8.804957627118677 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.10005188403326,
            "unit": "iter/sec",
            "range": "stddev: 0.0008864031527903069",
            "extra": "mean: 7.57001973684212 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.43082666320913,
            "unit": "iter/sec",
            "range": "stddev: 0.00021059881164278696",
            "extra": "mean: 4.86781860465098 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.34292668824094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009064728362446793",
            "extra": "mean: 3.0549002849002838 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.320495352532378,
            "unit": "iter/sec",
            "range": "stddev: 0.008798136031675483",
            "extra": "mean: 88.33535714285696 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.660130515727662,
            "unit": "iter/sec",
            "range": "stddev: 0.0049190118988085094",
            "extra": "mean: 85.76233333333268 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.75122454315658,
            "unit": "iter/sec",
            "range": "stddev: 0.00047220809680390696",
            "extra": "mean: 6.106824561403205 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.6987981845719,
            "unit": "iter/sec",
            "range": "stddev: 0.00045124296032453184",
            "extra": "mean: 4.297400793650944 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.2124165932003,
            "unit": "iter/sec",
            "range": "stddev: 0.0001922544399986942",
            "extra": "mean: 2.1266984126987447 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.5046616886876,
            "unit": "iter/sec",
            "range": "stddev: 0.00022256268507057117",
            "extra": "mean: 2.350150515463991 msec\nrounds: 485"
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
        "date": 1644938390459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.21380547723776,
            "unit": "iter/sec",
            "range": "stddev: 0.00018667703032454",
            "extra": "mean: 8.050634920634892 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.8781633373713,
            "unit": "iter/sec",
            "range": "stddev: 0.000230225892625447",
            "extra": "mean: 6.584224999999977 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.79203168671827,
            "unit": "iter/sec",
            "range": "stddev: 0.002767228185955212",
            "extra": "mean: 6.031652968036525 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.95657933868824,
            "unit": "iter/sec",
            "range": "stddev: 0.00006997599752222702",
            "extra": "mean: 2.958959999999985 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.42579584110443,
            "unit": "iter/sec",
            "range": "stddev: 0.00015467424283459658",
            "extra": "mean: 8.73928813559343 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.78258699406808,
            "unit": "iter/sec",
            "range": "stddev: 0.00011900284634969231",
            "extra": "mean: 6.859529801324558 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.51988066032428,
            "unit": "iter/sec",
            "range": "stddev: 0.00018293195248318876",
            "extra": "mean: 4.8421488372093355 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.49892442729197,
            "unit": "iter/sec",
            "range": "stddev: 0.00018514715199258972",
            "extra": "mean: 2.8694493150684948 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.56837637900738,
            "unit": "iter/sec",
            "range": "stddev: 0.0014411242501582253",
            "extra": "mean: 73.7007857142858 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.465176648690681,
            "unit": "iter/sec",
            "range": "stddev: 0.0011382813365330277",
            "extra": "mean: 74.26564285714272 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.22883143679968,
            "unit": "iter/sec",
            "range": "stddev: 0.00010402059792191278",
            "extra": "mean: 5.772711111111069 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.47307956308092,
            "unit": "iter/sec",
            "range": "stddev: 0.00025167854150438444",
            "extra": "mean: 4.124169172932221 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 475.44774505334925,
            "unit": "iter/sec",
            "range": "stddev: 0.00013958215557703516",
            "extra": "mean: 2.1032805611220042 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.47874472746463,
            "unit": "iter/sec",
            "range": "stddev: 0.00007219178744978794",
            "extra": "mean: 2.176379237287984 msec\nrounds: 472"
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
        "date": 1644939267009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.0288239322485,
            "unit": "iter/sec",
            "range": "stddev: 0.0007441684761897405",
            "extra": "mean: 8.926274193548338 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.07283435251372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331958713216466",
            "extra": "mean: 6.799352201257882 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.78150390382822,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804384901268191",
            "extra": "mean: 4.883253521126748 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.799810885787,
            "unit": "iter/sec",
            "range": "stddev: 0.00013678864537973863",
            "extra": "mean: 3.078819526627253 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.78692607990848,
            "unit": "iter/sec",
            "range": "stddev: 0.0008163163710253682",
            "extra": "mean: 9.277563025209979 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.3559787648849,
            "unit": "iter/sec",
            "range": "stddev: 0.0009710973835477155",
            "extra": "mean: 7.852006711409485 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.1380656090562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003420623791435641",
            "extra": "mean: 5.046985781990462 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.6789752640506,
            "unit": "iter/sec",
            "range": "stddev: 0.00029935409425932885",
            "extra": "mean: 3.229150442477862 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.197263044380755,
            "unit": "iter/sec",
            "range": "stddev: 0.00765467259930603",
            "extra": "mean: 89.30753846153868 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.545610532136514,
            "unit": "iter/sec",
            "range": "stddev: 0.002611241653764064",
            "extra": "mean: 79.70915384615405 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.5479197419509,
            "unit": "iter/sec",
            "range": "stddev: 0.0005778978241492866",
            "extra": "mean: 6.307241379310293 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.08523072360836,
            "unit": "iter/sec",
            "range": "stddev: 0.00027333954046666415",
            "extra": "mean: 4.217892430278756 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.9282895525743,
            "unit": "iter/sec",
            "range": "stddev: 0.00013818388624161701",
            "extra": "mean: 2.1189659999998725 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 460.96120515857234,
            "unit": "iter/sec",
            "range": "stddev: 0.00013048992689108807",
            "extra": "mean: 2.169379958246153 msec\nrounds: 479"
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
        "date": 1644940065682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.20879752008304,
            "unit": "iter/sec",
            "range": "stddev: 0.000947411071836198",
            "extra": "mean: 8.833235772357725 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.65134803506282,
            "unit": "iter/sec",
            "range": "stddev: 0.0009143600040806498",
            "extra": "mean: 7.712993464052227 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.42199359915125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007451092855974865",
            "extra": "mean: 5.279218009478709 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.3056687880963,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801834259964192",
            "extra": "mean: 3.233047761194105 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.99173081755283,
            "unit": "iter/sec",
            "range": "stddev: 0.0008464285194898921",
            "extra": "mean: 9.434698275862049 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.5601354496245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975898729949882",
            "extra": "mean: 7.269547945205441 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.06701341229,
            "unit": "iter/sec",
            "range": "stddev: 0.0003999069459901104",
            "extra": "mean: 5.1528592233010135 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.9111856453164,
            "unit": "iter/sec",
            "range": "stddev: 0.00021507645033505863",
            "extra": "mean: 3.1754985074626636 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.17500920149729,
            "unit": "iter/sec",
            "range": "stddev: 0.005093560029019977",
            "extra": "mean: 82.13546153846188 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.413185285410135,
            "unit": "iter/sec",
            "range": "stddev: 0.0023832373505873815",
            "extra": "mean: 80.55950000000018 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.86032721245337,
            "unit": "iter/sec",
            "range": "stddev: 0.000726693008539534",
            "extra": "mean: 6.37509826589606 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.13480527592657,
            "unit": "iter/sec",
            "range": "stddev: 0.00024461932869942327",
            "extra": "mean: 4.112944664031664 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.215053906854,
            "unit": "iter/sec",
            "range": "stddev: 0.00014331139461687807",
            "extra": "mean: 2.1681859504134007 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.9796921212122,
            "unit": "iter/sec",
            "range": "stddev: 0.00021330678380248146",
            "extra": "mean: 2.381067510548547 msec\nrounds: 474"
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
        "date": 1645454364724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.10433559727444,
            "unit": "iter/sec",
            "range": "stddev: 0.0011004963945080008",
            "extra": "mean: 9.514355371900871 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.90197794650769,
            "unit": "iter/sec",
            "range": "stddev: 0.00038113430136021563",
            "extra": "mean: 7.097132450331124 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.97906541366535,
            "unit": "iter/sec",
            "range": "stddev: 0.00043987890708782737",
            "extra": "mean: 5.263737864077677 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.43618883712816,
            "unit": "iter/sec",
            "range": "stddev: 0.0003055955915854147",
            "extra": "mean: 3.3284938271604756 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.74106970010598,
            "unit": "iter/sec",
            "range": "stddev: 0.0007140112831966623",
            "extra": "mean: 9.639383928571332 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.78637288223305,
            "unit": "iter/sec",
            "range": "stddev: 0.0010419470256958533",
            "extra": "mean: 8.211099290780226 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.9737446219004,
            "unit": "iter/sec",
            "range": "stddev: 0.001890907097096701",
            "extra": "mean: 6.098537313433041 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.6599923338856,
            "unit": "iter/sec",
            "range": "stddev: 0.000277857467355706",
            "extra": "mean: 3.304037617554782 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.330000123300056,
            "unit": "iter/sec",
            "range": "stddev: 0.0018997099778651123",
            "extra": "mean: 81.10299999999964 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.886409810493998,
            "unit": "iter/sec",
            "range": "stddev: 0.002621738207899977",
            "extra": "mean: 84.12969230769271 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.4880164762441,
            "unit": "iter/sec",
            "range": "stddev: 0.000709006752944545",
            "extra": "mean: 6.472993975903445 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.1467961671415,
            "unit": "iter/sec",
            "range": "stddev: 0.00033136123866835706",
            "extra": "mean: 4.38314285714271 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 434.9854432909744,
            "unit": "iter/sec",
            "range": "stddev: 0.0002256563907779553",
            "extra": "mean: 2.2989275053304965 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.0453325241142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001683243861383733",
            "extra": "mean: 2.36941371681409 msec\nrounds: 452"
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
        "date": 1645922413661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.48406610767971,
            "unit": "iter/sec",
            "range": "stddev: 0.0010368031231285507",
            "extra": "mean: 8.734839999999956 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.01417864437136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005179042850882996",
            "extra": "mean: 6.895877419354775 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.65967651060325,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923101985992377",
            "extra": "mean: 5.41536744186043 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.05457504882673,
            "unit": "iter/sec",
            "range": "stddev: 0.00007848539994628112",
            "extra": "mean: 2.9845884057970924 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.39901430087447,
            "unit": "iter/sec",
            "range": "stddev: 0.00018850419547676705",
            "extra": "mean: 8.818418803418899 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.513457124969,
            "unit": "iter/sec",
            "range": "stddev: 0.0010927875299369528",
            "extra": "mean: 8.096283783784106 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.7610217032724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931584634265697",
            "extra": "mean: 5.134497607655535 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.25487666055903,
            "unit": "iter/sec",
            "range": "stddev: 0.00030749420087727093",
            "extra": "mean: 3.192288690476137 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.552505694052329,
            "unit": "iter/sec",
            "range": "stddev: 0.006537325490144677",
            "extra": "mean: 86.56130769230768 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.831174599014156,
            "unit": "iter/sec",
            "range": "stddev: 0.005163386334168756",
            "extra": "mean: 84.52246153846178 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.18671054762723,
            "unit": "iter/sec",
            "range": "stddev: 0.000770924192260909",
            "extra": "mean: 6.281931428571161 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.26501766783645,
            "unit": "iter/sec",
            "range": "stddev: 0.0006662860429960114",
            "extra": "mean: 4.439215686274669 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.3994740608587,
            "unit": "iter/sec",
            "range": "stddev: 0.00027613289383085574",
            "extra": "mean: 2.215332665330438 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.9963250305856,
            "unit": "iter/sec",
            "range": "stddev: 0.00032653791347227857",
            "extra": "mean: 2.267592592592794 msec\nrounds: 486"
          }
        ]
      }
    ]
  }
}