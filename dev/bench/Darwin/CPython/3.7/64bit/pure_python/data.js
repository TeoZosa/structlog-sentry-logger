window.BENCHMARK_DATA = {
  "lastUpdate": 1671541684128,
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
        "date": 1646063520404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.49511516371582,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893026540282256",
            "extra": "mean: 8.510992125984266 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.0902954637208,
            "unit": "iter/sec",
            "range": "stddev: 0.0003436406544570988",
            "extra": "mean: 6.7526369426751565 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.81029287037103,
            "unit": "iter/sec",
            "range": "stddev: 0.0003235265806573205",
            "extra": "mean: 4.955148648648614 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.4991137812763,
            "unit": "iter/sec",
            "range": "stddev: 0.00028330276227877697",
            "extra": "mean: 3.129899135446689 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.60934405432097,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038717591678586",
            "extra": "mean: 9.207310924369914 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.437123315497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005723879304746487",
            "extra": "mean: 7.383500000000207 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.59902411988656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004010107713431025",
            "extra": "mean: 5.08649523809537 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.8750232406356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002770393848398752",
            "extra": "mean: 3.227107462686475 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.343616467091742,
            "unit": "iter/sec",
            "range": "stddev: 0.006685528779693009",
            "extra": "mean: 88.15530769230762 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.350417444109597,
            "unit": "iter/sec",
            "range": "stddev: 0.0061256672216402274",
            "extra": "mean: 80.96892307692318 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.10225808436937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004414828518091453",
            "extra": "mean: 6.093761363636283 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.60813407890882,
            "unit": "iter/sec",
            "range": "stddev: 0.0002335204712484899",
            "extra": "mean: 4.28067286245357 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 483.5538705019441,
            "unit": "iter/sec",
            "range": "stddev: 0.00009723517962970662",
            "extra": "mean: 2.0680219123506727 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 462.9138048906834,
            "unit": "iter/sec",
            "range": "stddev: 0.00015126997236210386",
            "extra": "mean: 2.160229376257528 msec\nrounds: 497"
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
        "date": 1646086593538,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.47625286603397,
            "unit": "iter/sec",
            "range": "stddev: 0.0020104887678657267",
            "extra": "mean: 9.304380952380905 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.63682360003386,
            "unit": "iter/sec",
            "range": "stddev: 0.0014971733951002493",
            "extra": "mean: 7.42738853503187 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.61559266118167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004908526925721459",
            "extra": "mean: 4.984657407407476 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.75153783637404,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545666453951195",
            "extra": "mean: 3.1372397660817994 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.71187483762174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006782846740765686",
            "extra": "mean: 9.198627118644188 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.8674329417964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006965318286496925",
            "extra": "mean: 7.306340000000257 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.42230974747298,
            "unit": "iter/sec",
            "range": "stddev: 0.0004514068329102941",
            "extra": "mean: 5.039755868544593 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.9900714511272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061794783057755",
            "extra": "mean: 3.2895811209438497 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.530966410294878,
            "unit": "iter/sec",
            "range": "stddev: 0.005965846503221567",
            "extra": "mean: 86.72299999999976 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.3351361609261,
            "unit": "iter/sec",
            "range": "stddev: 0.0028394712874601677",
            "extra": "mean: 81.06923076923067 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.83252174815357,
            "unit": "iter/sec",
            "range": "stddev: 0.0005136432550386295",
            "extra": "mean: 6.141279329608734 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.63794543719828,
            "unit": "iter/sec",
            "range": "stddev: 0.00059452109700884",
            "extra": "mean: 4.680816406250093 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.4599499530995,
            "unit": "iter/sec",
            "range": "stddev: 0.00019129183824514453",
            "extra": "mean: 2.1438067729084684 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.9229000464223,
            "unit": "iter/sec",
            "range": "stddev: 0.00021343554059480028",
            "extra": "mean: 2.1933533057852097 msec\nrounds: 484"
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
        "date": 1646432397632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.97405797242676,
            "unit": "iter/sec",
            "range": "stddev: 0.0009015748459513266",
            "extra": "mean: 9.17649593495936 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.03612243983324,
            "unit": "iter/sec",
            "range": "stddev: 0.0008027002079238469",
            "extra": "mean: 7.244480519480522 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.31055391491188,
            "unit": "iter/sec",
            "range": "stddev: 0.00040171356057051394",
            "extra": "mean: 5.017295774647801 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8609073680637,
            "unit": "iter/sec",
            "range": "stddev: 0.00025709058742081405",
            "extra": "mean: 3.1361636904761485 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.86251503215497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829332493409105",
            "extra": "mean: 9.271061403508801 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.509836132529,
            "unit": "iter/sec",
            "range": "stddev: 0.0007847481420991037",
            "extra": "mean: 7.546609589041039 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.2425754247717,
            "unit": "iter/sec",
            "range": "stddev: 0.0004518354313476012",
            "extra": "mean: 5.228961165048553 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.2333843572969,
            "unit": "iter/sec",
            "range": "stddev: 0.0003453870502674385",
            "extra": "mean: 3.4455030120481673 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.678223616422464,
            "unit": "iter/sec",
            "range": "stddev: 0.0022915753538920104",
            "extra": "mean: 85.62946153846148 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.208315177377372,
            "unit": "iter/sec",
            "range": "stddev: 0.002669612379430404",
            "extra": "mean: 81.911384615385 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.3544548199716,
            "unit": "iter/sec",
            "range": "stddev: 0.0008929666709344519",
            "extra": "mean: 6.879734104046191 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.76916004621012,
            "unit": "iter/sec",
            "range": "stddev: 0.0004158141406369873",
            "extra": "mean: 4.333334661354906 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.05066416678994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001970350955514711",
            "extra": "mean: 2.2072586558042246 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 401.07198654814874,
            "unit": "iter/sec",
            "range": "stddev: 0.0003237384535399112",
            "extra": "mean: 2.4933179916317836 msec\nrounds: 478"
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
        "date": 1646435073594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.69897330934812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005057905749559757",
            "extra": "mean: 8.643119047619093 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.783192683963,
            "unit": "iter/sec",
            "range": "stddev: 0.0007146197064849686",
            "extra": "mean: 7.153935897435885 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.81616210547583,
            "unit": "iter/sec",
            "range": "stddev: 0.0007552927131277315",
            "extra": "mean: 5.530479069767382 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.6955367234799,
            "unit": "iter/sec",
            "range": "stddev: 0.00023993829697168244",
            "extra": "mean: 3.177674556213013 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.36817996188857,
            "unit": "iter/sec",
            "range": "stddev: 0.0019568416137093897",
            "extra": "mean: 10.71028695652185 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.15556783736794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008506416819031152",
            "extra": "mean: 7.926721088435343 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.65293411768585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007252725957835106",
            "extra": "mean: 6.036717703349364 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.4589816546261,
            "unit": "iter/sec",
            "range": "stddev: 0.00038851282532338156",
            "extra": "mean: 3.373147928994094 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.973442903639738,
            "unit": "iter/sec",
            "range": "stddev: 0.00299260806999664",
            "extra": "mean: 83.5181666666666 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.362851691185718,
            "unit": "iter/sec",
            "range": "stddev: 0.003436124596633344",
            "extra": "mean: 88.00607692307648 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.13779837369526,
            "unit": "iter/sec",
            "range": "stddev: 0.0007332804665625416",
            "extra": "mean: 6.572988505747304 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.3926311872078,
            "unit": "iter/sec",
            "range": "stddev: 0.00028377566036542624",
            "extra": "mean: 4.248221343873334 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.1286199605181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002127755776116216",
            "extra": "mean: 2.2415060483868956 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.4699758426401,
            "unit": "iter/sec",
            "range": "stddev: 0.0003313403596482271",
            "extra": "mean: 2.275468302658445 msec\nrounds: 489"
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
        "date": 1646435592614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.98167292133184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004400889987093164",
            "extra": "mean: 8.404655737704907 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.15922314027313,
            "unit": "iter/sec",
            "range": "stddev: 0.00023163922749281217",
            "extra": "mean: 6.704245161290326 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.6659044175622,
            "unit": "iter/sec",
            "range": "stddev: 0.00035830098175947063",
            "extra": "mean: 4.958696428571464 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.28180767798597,
            "unit": "iter/sec",
            "range": "stddev: 0.00010207636068850393",
            "extra": "mean: 3.0648352941176538 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.08377027006726,
            "unit": "iter/sec",
            "range": "stddev: 0.00028706446429977177",
            "extra": "mean: 8.921898305084557 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.8426340699173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005045952340265797",
            "extra": "mean: 7.202398648648713 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.38677438128877,
            "unit": "iter/sec",
            "range": "stddev: 0.00016815702431663974",
            "extra": "mean: 4.9655693779904535 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.7293805560935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000972426677185848",
            "extra": "mean: 3.060636904761977 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.6449918537072,
            "unit": "iter/sec",
            "range": "stddev: 0.002396624688481172",
            "extra": "mean: 79.08269230769213 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.843977779918466,
            "unit": "iter/sec",
            "range": "stddev: 0.0021887393544107645",
            "extra": "mean: 77.85749999999985 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.756758586255,
            "unit": "iter/sec",
            "range": "stddev: 0.00023921108050973752",
            "extra": "mean: 5.961011695906327 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.6800919906459,
            "unit": "iter/sec",
            "range": "stddev: 0.0003072050427066316",
            "extra": "mean: 4.207335968379531 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 478.3478600832609,
            "unit": "iter/sec",
            "range": "stddev: 0.00012836661406152993",
            "extra": "mean: 2.090528846153803 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.1630312402081,
            "unit": "iter/sec",
            "range": "stddev: 0.00010842559992112082",
            "extra": "mean: 2.2067113402062355 msec\nrounds: 485"
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
        "date": 1646664321837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.56826658204909,
            "unit": "iter/sec",
            "range": "stddev: 0.00036573589118237264",
            "extra": "mean: 8.363423076923079 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.67074835448497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097569418789302",
            "extra": "mean: 6.726272727272734 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.13631285228067,
            "unit": "iter/sec",
            "range": "stddev: 0.00027529950609634783",
            "extra": "mean: 4.922802752293694 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.2576834958585,
            "unit": "iter/sec",
            "range": "stddev: 0.00022571290394036203",
            "extra": "mean: 3.0935072886297283 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.74528470125688,
            "unit": "iter/sec",
            "range": "stddev: 0.0006906363558729946",
            "extra": "mean: 9.456686440677899 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.5816279820188,
            "unit": "iter/sec",
            "range": "stddev: 0.00023356202141183274",
            "extra": "mean: 7.013526315789519 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.21202674161464,
            "unit": "iter/sec",
            "range": "stddev: 0.000262243221627454",
            "extra": "mean: 5.019777251184924 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.76764849658883,
            "unit": "iter/sec",
            "range": "stddev: 0.00012563388713072583",
            "extra": "mean: 3.04166180758012 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.23859997947677,
            "unit": "iter/sec",
            "range": "stddev: 0.0026144221600128944",
            "extra": "mean: 81.70869230769256 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.524977695905289,
            "unit": "iter/sec",
            "range": "stddev: 0.0020087238741467238",
            "extra": "mean: 79.84046153846035 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.45882561903264,
            "unit": "iter/sec",
            "range": "stddev: 0.0004059387700643561",
            "extra": "mean: 6.00749162011186 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.15742445679555,
            "unit": "iter/sec",
            "range": "stddev: 0.00017857105863191343",
            "extra": "mean: 4.062440944882065 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.38747181445194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008764014607202087",
            "extra": "mean: 2.1124344422700694 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.0973703205352,
            "unit": "iter/sec",
            "range": "stddev: 0.00010481085164621837",
            "extra": "mean: 2.1973319672132527 msec\nrounds: 488"
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
        "date": 1646752288307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.31739088850776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003925376618065047",
            "extra": "mean: 8.381007936507908 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.1555776236163,
            "unit": "iter/sec",
            "range": "stddev: 0.00032581636349804263",
            "extra": "mean: 6.795529032258134 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.91556435520417,
            "unit": "iter/sec",
            "range": "stddev: 0.000566922856740974",
            "extra": "mean: 5.350009259259194 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.0111671374865,
            "unit": "iter/sec",
            "range": "stddev: 0.0004345915223468584",
            "extra": "mean: 3.267854599406544 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.29192754402908,
            "unit": "iter/sec",
            "range": "stddev: 0.000746592726329636",
            "extra": "mean: 9.408052173912944 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.10157602630568,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561087820809549",
            "extra": "mean: 7.241046979865888 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.81876680064113,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563636076118337",
            "extra": "mean: 4.979614285714295 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.07550413403214,
            "unit": "iter/sec",
            "range": "stddev: 0.0006060699954330153",
            "extra": "mean: 3.4593038348083 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.848617587583185,
            "unit": "iter/sec",
            "range": "stddev: 0.0015239665645092936",
            "extra": "mean: 77.82938461538407 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.862894408499931,
            "unit": "iter/sec",
            "range": "stddev: 0.0006614181733214206",
            "extra": "mean: 77.74299999999921 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.58063679108517,
            "unit": "iter/sec",
            "range": "stddev: 0.00048013449812407043",
            "extra": "mean: 6.386485714285552 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.0045906473447,
            "unit": "iter/sec",
            "range": "stddev: 0.00011027455097813358",
            "extra": "mean: 4.048507751937808 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.78524903426324,
            "unit": "iter/sec",
            "range": "stddev: 0.0009664150123680688",
            "extra": "mean: 2.1940157170922965 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 424.80695621394005,
            "unit": "iter/sec",
            "range": "stddev: 0.0003399059397950246",
            "extra": "mean: 2.354010416666489 msec\nrounds: 480"
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
        "date": 1646753400302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.22044591419942,
            "unit": "iter/sec",
            "range": "stddev: 0.00032225592466381093",
            "extra": "mean: 8.530934959349661 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.9416724734799,
            "unit": "iter/sec",
            "range": "stddev: 0.00039585608853596565",
            "extra": "mean: 6.805421383647858 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.07863609150118,
            "unit": "iter/sec",
            "range": "stddev: 0.0003088922657925216",
            "extra": "mean: 4.8525165876776715 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.84905798338036,
            "unit": "iter/sec",
            "range": "stddev: 0.00018957163956714534",
            "extra": "mean: 3.1560769230768955 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.48023455441428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002754835366177196",
            "extra": "mean: 8.970199999999936 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.5180041298587,
            "unit": "iter/sec",
            "range": "stddev: 0.00047360544984101534",
            "extra": "mean: 7.219278145695155 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.48407949293122,
            "unit": "iter/sec",
            "range": "stddev: 0.0001911031459225947",
            "extra": "mean: 4.963171296296309 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.64993106925647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776183228306309",
            "extra": "mean: 3.0897581120943114 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.249105344190381,
            "unit": "iter/sec",
            "range": "stddev: 0.005614773571249962",
            "extra": "mean: 81.63861538461575 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.626789968889613,
            "unit": "iter/sec",
            "range": "stddev: 0.0014855921033151394",
            "extra": "mean: 79.1966923076918 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.53832657752804,
            "unit": "iter/sec",
            "range": "stddev: 0.00023842036123540618",
            "extra": "mean: 6.114774566474077 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.1323827108276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003612572729331192",
            "extra": "mean: 4.289408396946634 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.7148051444426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000967116627295953",
            "extra": "mean: 2.12895141700396 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.56464645591467,
            "unit": "iter/sec",
            "range": "stddev: 0.00009780483187595927",
            "extra": "mean: 2.166543749999953 msec\nrounds: 480"
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
        "date": 1646838336980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.7386513095767,
            "unit": "iter/sec",
            "range": "stddev: 0.0011235702019211724",
            "extra": "mean: 9.547573770491791 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.2517273325182,
            "unit": "iter/sec",
            "range": "stddev: 0.00109364440847624",
            "extra": "mean: 7.3936209150326535 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.21809413302603,
            "unit": "iter/sec",
            "range": "stddev: 0.0004213602573681253",
            "extra": "mean: 5.044948113207519 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7554687413282,
            "unit": "iter/sec",
            "range": "stddev: 0.0002691500473237941",
            "extra": "mean: 3.217964285714298 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.91084722174541,
            "unit": "iter/sec",
            "range": "stddev: 0.0006271338930487341",
            "extra": "mean: 9.441903508771874 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.3005537135537,
            "unit": "iter/sec",
            "range": "stddev: 0.0009929292965063735",
            "extra": "mean: 7.794198630137007 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.48026979341944,
            "unit": "iter/sec",
            "range": "stddev: 0.00040441341807761474",
            "extra": "mean: 5.305595121951136 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.26662228990995,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566863935497947",
            "extra": "mean: 3.330373493975936 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.994202187188959,
            "unit": "iter/sec",
            "range": "stddev: 0.0033313187713592657",
            "extra": "mean: 83.37361538461498 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.333977546468374,
            "unit": "iter/sec",
            "range": "stddev: 0.0027525549297019343",
            "extra": "mean: 81.07684615384542 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.28133184712766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004304282445649784",
            "extra": "mean: 6.124398843930616 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.48049458206629,
            "unit": "iter/sec",
            "range": "stddev: 0.0003767351197530197",
            "extra": "mean: 4.228678571428512 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 433.41621620682827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003979476918409548",
            "extra": "mean: 2.3072510040159533 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.6897853919447,
            "unit": "iter/sec",
            "range": "stddev: 0.00019281608785723294",
            "extra": "mean: 2.3602173913041713 msec\nrounds: 506"
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
        "date": 1647271284525,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.21330348036338,
            "unit": "iter/sec",
            "range": "stddev: 0.0004673428635554031",
            "extra": "mean: 8.31854687499997 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.71473987547364,
            "unit": "iter/sec",
            "range": "stddev: 0.00035234362061535644",
            "extra": "mean: 6.72428301886787 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.9602240734758,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137177762728557",
            "extra": "mean: 4.95147004608287 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.1981156433457,
            "unit": "iter/sec",
            "range": "stddev: 0.00015956438408943921",
            "extra": "mean: 3.12306647398842 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.59698267460665,
            "unit": "iter/sec",
            "range": "stddev: 0.0006925409543662709",
            "extra": "mean: 9.208358974358788 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.7565282972935,
            "unit": "iter/sec",
            "range": "stddev: 0.00022222839925592532",
            "extra": "mean: 7.10446621621619 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.49204097579715,
            "unit": "iter/sec",
            "range": "stddev: 0.00039606208947689034",
            "extra": "mean: 5.06349519230778 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.1878633533387,
            "unit": "iter/sec",
            "range": "stddev: 0.00026689388659098306",
            "extra": "mean: 3.1626767371602242 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.610731926880929,
            "unit": "iter/sec",
            "range": "stddev: 0.001123574104913153",
            "extra": "mean: 79.29753846153915 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.390215542095628,
            "unit": "iter/sec",
            "range": "stddev: 0.00379360830534211",
            "extra": "mean: 80.70884615384699 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.8151223953136,
            "unit": "iter/sec",
            "range": "stddev: 0.00037544777832640593",
            "extra": "mean: 6.104442528735722 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.32395603583265,
            "unit": "iter/sec",
            "range": "stddev: 0.0011626782069945414",
            "extra": "mean: 4.601425531914755 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 452.54610838344433,
            "unit": "iter/sec",
            "range": "stddev: 0.00014427090753197432",
            "extra": "mean: 2.209719587628617 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.7778101477528,
            "unit": "iter/sec",
            "range": "stddev: 0.00018368621359743457",
            "extra": "mean: 2.273875527426062 msec\nrounds: 474"
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
        "date": 1647613355656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.17272728801836,
            "unit": "iter/sec",
            "range": "stddev: 0.001029466133271919",
            "extra": "mean: 9.076656488549624 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.36824748508735,
            "unit": "iter/sec",
            "range": "stddev: 0.0014358047588552093",
            "extra": "mean: 7.333085365853628 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.72143377542204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037594555514147",
            "extra": "mean: 5.188836448598127 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.17025040376956,
            "unit": "iter/sec",
            "range": "stddev: 0.00009687222092260442",
            "extra": "mean: 3.010504398826957 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.32990439307865,
            "unit": "iter/sec",
            "range": "stddev: 0.003066268417900027",
            "extra": "mean: 10.169846153846041 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.31348536878559,
            "unit": "iter/sec",
            "range": "stddev: 0.0019575367521957117",
            "extra": "mean: 8.24310666666662 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.95498754931145,
            "unit": "iter/sec",
            "range": "stddev: 0.000244484339940857",
            "extra": "mean: 4.927200913242069 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.7184865237407,
            "unit": "iter/sec",
            "range": "stddev: 0.0009672333019855679",
            "extra": "mean: 3.239197014925438 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.079161460881162,
            "unit": "iter/sec",
            "range": "stddev: 0.009523364633148115",
            "extra": "mean: 90.25953846153865 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.398475559743577,
            "unit": "iter/sec",
            "range": "stddev: 0.006587360668501357",
            "extra": "mean: 80.65507692307634 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.75660701919554,
            "unit": "iter/sec",
            "range": "stddev: 0.0004322516866461966",
            "extra": "mean: 6.069559322033692 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.54448061987847,
            "unit": "iter/sec",
            "range": "stddev: 0.00026490336596879285",
            "extra": "mean: 4.245482625482528 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 478.1604974398938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000674280058129548",
            "extra": "mean: 2.0913480000001528 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 463.575630635688,
            "unit": "iter/sec",
            "range": "stddev: 0.00009606691629356183",
            "extra": "mean: 2.157145315487634 msec\nrounds: 523"
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
        "date": 1647926615438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.02355219942167,
            "unit": "iter/sec",
            "range": "stddev: 0.0010299411024103288",
            "extra": "mean: 9.343737704918036 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.58689239003476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008836145079392522",
            "extra": "mean: 7.542223684210583 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.5780124947563,
            "unit": "iter/sec",
            "range": "stddev: 0.00024066984853191798",
            "extra": "mean: 5.139326829268281 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.4539573760524,
            "unit": "iter/sec",
            "range": "stddev: 0.00018838538956931236",
            "extra": "mean: 3.263132930513575 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.01149734047046,
            "unit": "iter/sec",
            "range": "stddev: 0.0006583942794061867",
            "extra": "mean: 9.614321739130506 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.01683214610173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005320258928842524",
            "extra": "mean: 7.574791666666488 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.54841920652578,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793011730807005",
            "extra": "mean: 5.248009950248659 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.55490890250434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003622134765010705",
            "extra": "mean: 3.383466049382632 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.833292574214456,
            "unit": "iter/sec",
            "range": "stddev: 0.0023773751122285734",
            "extra": "mean: 84.50733333333342 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.585812548682624,
            "unit": "iter/sec",
            "range": "stddev: 0.0035460542300644266",
            "extra": "mean: 86.31246153846206 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.84661353658075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004422140490173321",
            "extra": "mean: 6.416565476190327 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.40292527763393,
            "unit": "iter/sec",
            "range": "stddev: 0.000282083081466529",
            "extra": "mean: 4.340222672064631 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 449.93748286001573,
            "unit": "iter/sec",
            "range": "stddev: 0.00014115825615874743",
            "extra": "mean: 2.222530991735844 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.4247777395065,
            "unit": "iter/sec",
            "range": "stddev: 0.00013573984160341495",
            "extra": "mean: 2.250099567099601 msec\nrounds: 462"
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
        "date": 1647973624416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.9589392627419,
            "unit": "iter/sec",
            "range": "stddev: 0.0005410566952689715",
            "extra": "mean: 8.698758064516165 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.36079055966795,
            "unit": "iter/sec",
            "range": "stddev: 0.0004684447268975371",
            "extra": "mean: 7.02440606060605 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.35362762760704,
            "unit": "iter/sec",
            "range": "stddev: 0.00019328707108753657",
            "extra": "mean: 4.822679069767382 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.2979397274879,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241428055441065",
            "extra": "mean: 3.093122093023275 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.80883876683716,
            "unit": "iter/sec",
            "range": "stddev: 0.0003610581525700646",
            "extra": "mean: 9.10673504273506 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.92998859493557,
            "unit": "iter/sec",
            "range": "stddev: 0.0002908894213488387",
            "extra": "mean: 7.095721854304725 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.94180097812034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002069310662074303",
            "extra": "mean: 5.001455399061 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.4564002618845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231115829979619",
            "extra": "mean: 3.0726081871345334 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.495170136158862,
            "unit": "iter/sec",
            "range": "stddev: 0.0030539303490622343",
            "extra": "mean: 80.03092307692337 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.71678449256593,
            "unit": "iter/sec",
            "range": "stddev: 0.001914925201055844",
            "extra": "mean: 78.63623076923159 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.92773384499603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003255650349302363",
            "extra": "mean: 6.0632616279068605 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.4115028579108,
            "unit": "iter/sec",
            "range": "stddev: 0.00020112244010946098",
            "extra": "mean: 4.176908745247273 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.37516443408737,
            "unit": "iter/sec",
            "range": "stddev: 0.00012036181412742091",
            "extra": "mean: 2.0860488281250893 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 463.36141476115404,
            "unit": "iter/sec",
            "range": "stddev: 0.00012128637613739923",
            "extra": "mean: 2.158142581888187 msec\nrounds: 519"
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
        "date": 1647982292704,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.1479063013415,
            "unit": "iter/sec",
            "range": "stddev: 0.0005058143692300613",
            "extra": "mean: 8.392929687500022 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.19113947844866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729894942882229",
            "extra": "mean: 6.658182389937142 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.32990973174347,
            "unit": "iter/sec",
            "range": "stddev: 0.00022205504263151605",
            "extra": "mean: 4.823230769230851 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.491741531964,
            "unit": "iter/sec",
            "range": "stddev: 0.0001371396780504023",
            "extra": "mean: 3.1008545994064916 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.83147772565594,
            "unit": "iter/sec",
            "range": "stddev: 0.00045260557452644554",
            "extra": "mean: 8.862774999999996 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.90287177611268,
            "unit": "iter/sec",
            "range": "stddev: 0.00019839489060318664",
            "extra": "mean: 6.9977599999999285 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.81144553730843,
            "unit": "iter/sec",
            "range": "stddev: 0.0002614908192999554",
            "extra": "mean: 5.00471830985919 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.1393155509846,
            "unit": "iter/sec",
            "range": "stddev: 0.000176283808413328",
            "extra": "mean: 3.104246987951805 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.149180724670632,
            "unit": "iter/sec",
            "range": "stddev: 0.0025828497008001487",
            "extra": "mean: 82.31007692307666 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.523035159866295,
            "unit": "iter/sec",
            "range": "stddev: 0.002071893290614817",
            "extra": "mean: 79.8528461538454 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.43147052567778,
            "unit": "iter/sec",
            "range": "stddev: 0.0006872000650538755",
            "extra": "mean: 6.233191011235824 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.54206647719533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002172675823025748",
            "extra": "mean: 4.122996124031225 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.3564477283361,
            "unit": "iter/sec",
            "range": "stddev: 0.00018050801336282236",
            "extra": "mean: 2.1442825651303616 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.90318539049275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375807697420941",
            "extra": "mean: 2.2227004219408926 msec\nrounds: 474"
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
        "date": 1647984304483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.73434284465395,
            "unit": "iter/sec",
            "range": "stddev: 0.00047845693701202644",
            "extra": "mean: 7.828748148148106 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.44901054251832,
            "unit": "iter/sec",
            "range": "stddev: 0.0004200128073529004",
            "extra": "mean: 6.311178571428562 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.73515005018533,
            "unit": "iter/sec",
            "range": "stddev: 0.0003509582571709634",
            "extra": "mean: 4.4896371308016985 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 354.8120548112885,
            "unit": "iter/sec",
            "range": "stddev: 0.0001508612262301814",
            "extra": "mean: 2.8183935309973145 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.5215062537471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345775166146345",
            "extra": "mean: 8.656396825396861 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.81435568608623,
            "unit": "iter/sec",
            "range": "stddev: 0.00020075665192960564",
            "extra": "mean: 6.5013437499999105 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.36942600172245,
            "unit": "iter/sec",
            "range": "stddev: 0.00008959879023988336",
            "extra": "mean: 4.579395652173909 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.19040607350837,
            "unit": "iter/sec",
            "range": "stddev: 0.000128519682057634",
            "extra": "mean: 2.871991825613037 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.347570742125017,
            "unit": "iter/sec",
            "range": "stddev: 0.0019075138067852096",
            "extra": "mean: 74.91999999999953 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.948246426459095,
            "unit": "iter/sec",
            "range": "stddev: 0.000971305071981919",
            "extra": "mean: 71.69360000000087 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.01053385964445,
            "unit": "iter/sec",
            "range": "stddev: 0.00026247398524828453",
            "extra": "mean: 5.494187500000081 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 268.7789988852702,
            "unit": "iter/sec",
            "range": "stddev: 0.00030064931698626314",
            "extra": "mean: 3.7205287769780533 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 525.5052377537331,
            "unit": "iter/sec",
            "range": "stddev: 0.00005849311389908882",
            "extra": "mean: 1.90293060498215 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 497.625601723112,
            "unit": "iter/sec",
            "range": "stddev: 0.00007262757403625802",
            "extra": "mean: 2.009542910447799 msec\nrounds: 536"
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
        "date": 1647986168429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.79100630980314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005406262475824693",
            "extra": "mean: 8.711483870967689 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.21593253610482,
            "unit": "iter/sec",
            "range": "stddev: 0.0006730571985577311",
            "extra": "mean: 7.131857142857184 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.3386276700544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005203528542979512",
            "extra": "mean: 5.281542452830184 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.63052897377116,
            "unit": "iter/sec",
            "range": "stddev: 0.00018770055841440972",
            "extra": "mean: 3.118854599406546 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.4464002795708,
            "unit": "iter/sec",
            "range": "stddev: 0.0018762944278312061",
            "extra": "mean: 10.262051724137887 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.0612332902119,
            "unit": "iter/sec",
            "range": "stddev: 0.0007861990196624015",
            "extra": "mean: 7.572244897959149 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.85109481524958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008261267532346597",
            "extra": "mean: 5.622681159420427 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.57431652862016,
            "unit": "iter/sec",
            "range": "stddev: 0.0004198963429193481",
            "extra": "mean: 3.2940863095238906 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.104369718887941,
            "unit": "iter/sec",
            "range": "stddev: 0.009158243643230512",
            "extra": "mean: 98.96708333333405 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.777719996484771,
            "unit": "iter/sec",
            "range": "stddev: 0.0029831327622021815",
            "extra": "mean: 84.90607692307715 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.16822137217218,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144372730741379",
            "extra": "mean: 6.243435754189758 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.91501690203066,
            "unit": "iter/sec",
            "range": "stddev: 0.0006300496572277104",
            "extra": "mean: 4.741246093750151 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.7737196935934,
            "unit": "iter/sec",
            "range": "stddev: 0.0003289488375041729",
            "extra": "mean: 2.1797238095239666 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.4926038413609,
            "unit": "iter/sec",
            "range": "stddev: 0.0003839138248807022",
            "extra": "mean: 2.3392217573221266 msec\nrounds: 478"
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
        "date": 1648221623403,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.22221171843987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005024295877928988",
            "extra": "mean: 8.5308064516129 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.1079213053236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002528564257498751",
            "extra": "mean: 6.751833333333373 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.05623700671552,
            "unit": "iter/sec",
            "range": "stddev: 0.00037082580712327455",
            "extra": "mean: 4.9985944700461 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.20088927682497,
            "unit": "iter/sec",
            "range": "stddev: 0.00013795849742748308",
            "extra": "mean: 3.17257988165684 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.75963594160352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870856765143421",
            "extra": "mean: 9.110817391304392 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.59166291438837,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883430420516232",
            "extra": "mean: 7.112797297297338 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.31362750323768,
            "unit": "iter/sec",
            "range": "stddev: 0.0001374109220489075",
            "extra": "mean: 5.119970443349751 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.98413200644734,
            "unit": "iter/sec",
            "range": "stddev: 0.0001220953721621286",
            "extra": "mean: 3.0770733137830897 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.08864885171783,
            "unit": "iter/sec",
            "range": "stddev: 0.00248478926517119",
            "extra": "mean: 82.72223076923086 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.353797557368843,
            "unit": "iter/sec",
            "range": "stddev: 0.000958632720235743",
            "extra": "mean: 80.94676923077114 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.07184907072636,
            "unit": "iter/sec",
            "range": "stddev: 0.00032208802606454527",
            "extra": "mean: 6.13226627218955 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.21164417474517,
            "unit": "iter/sec",
            "range": "stddev: 0.000114818270952255",
            "extra": "mean: 4.145736842105154 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.4911087657833,
            "unit": "iter/sec",
            "range": "stddev: 0.00008491727253456367",
            "extra": "mean: 2.120930769230598 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.1952866362458,
            "unit": "iter/sec",
            "range": "stddev: 0.00012663427545776118",
            "extra": "mean: 2.2717190082645007 msec\nrounds: 484"
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
        "date": 1648488328927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.87608391658674,
            "unit": "iter/sec",
            "range": "stddev: 0.0007951450551553954",
            "extra": "mean: 9.356630252100807 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.7227122456613,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404729427906195",
            "extra": "mean: 7.056032051281984 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.28013736936654,
            "unit": "iter/sec",
            "range": "stddev: 0.00038783236016391834",
            "extra": "mean: 5.200745192307714 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.99291587974153,
            "unit": "iter/sec",
            "range": "stddev: 0.00017587659976329696",
            "extra": "mean: 3.164627906976792 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.03562032774953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005330224939347807",
            "extra": "mean: 9.342684210526736 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.5766767432043,
            "unit": "iter/sec",
            "range": "stddev: 0.0004473594665461013",
            "extra": "mean: 7.3218943661971725 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.6816039624765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949425358937991",
            "extra": "mean: 5.47400492610851 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.18732536844414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002451334376834285",
            "extra": "mean: 3.2134984894259597 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.861465383681947,
            "unit": "iter/sec",
            "range": "stddev: 0.0023243984360991395",
            "extra": "mean: 84.3066153846151 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.033538397169696,
            "unit": "iter/sec",
            "range": "stddev: 0.0016461901703414368",
            "extra": "mean: 83.10107692307703 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.12157920818814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005385902912446347",
            "extra": "mean: 6.7970994152049204 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.3997913462258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670234845368274",
            "extra": "mean: 4.284493975903336 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.91275438521393,
            "unit": "iter/sec",
            "range": "stddev: 0.00020100654310330475",
            "extra": "mean: 2.2325776397516464 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 401.6920531495613,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373002376181645",
            "extra": "mean: 2.4894692144374386 msec\nrounds: 471"
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
        "date": 1648489999789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.60175642978734,
            "unit": "iter/sec",
            "range": "stddev: 0.0008417235323103458",
            "extra": "mean: 8.650387596899245 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.53231719984365,
            "unit": "iter/sec",
            "range": "stddev: 0.000578539945884845",
            "extra": "mean: 6.555987730061345 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.73553563339453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005316350027143788",
            "extra": "mean: 4.83709777777782 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.22883039351024,
            "unit": "iter/sec",
            "range": "stddev: 0.00007457923865262268",
            "extra": "mean: 2.9391983002833575 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.9295367959747,
            "unit": "iter/sec",
            "range": "stddev: 0.0002243884646272237",
            "extra": "mean: 8.700983471074288 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.03612150968866,
            "unit": "iter/sec",
            "range": "stddev: 0.00029680371873403534",
            "extra": "mean: 6.847620915032695 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.31342462280375,
            "unit": "iter/sec",
            "range": "stddev: 0.0001020995634150586",
            "extra": "mean: 4.754808219178095 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.37068687415746,
            "unit": "iter/sec",
            "range": "stddev: 0.00013874970404519237",
            "extra": "mean: 3.0734176136363716 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.508409671859765,
            "unit": "iter/sec",
            "range": "stddev: 0.0025536432549645985",
            "extra": "mean: 79.94621428571413 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.134452701428627,
            "unit": "iter/sec",
            "range": "stddev: 0.0014623175287682985",
            "extra": "mean: 76.13564285714247 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.81902266615643,
            "unit": "iter/sec",
            "range": "stddev: 0.0007023484895038507",
            "extra": "mean: 6.179743169398987 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.2224749083298,
            "unit": "iter/sec",
            "range": "stddev: 0.00023825747755074994",
            "extra": "mean: 3.98053558052438 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 491.4571227471401,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965632005523458",
            "extra": "mean: 2.0347655038759314 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.74435297656817,
            "unit": "iter/sec",
            "range": "stddev: 0.0001597066063688767",
            "extra": "mean: 2.218552475247504 msec\nrounds: 505"
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
        "date": 1648491025656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.11257065933826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007835252650661999",
            "extra": "mean: 8.763276422764264 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.0495544804602,
            "unit": "iter/sec",
            "range": "stddev: 0.0006467367273469937",
            "extra": "mean: 7.2437756410256435 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.46906714861518,
            "unit": "iter/sec",
            "range": "stddev: 0.0006090060202081902",
            "extra": "mean: 5.480380952380998 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.5885984809695,
            "unit": "iter/sec",
            "range": "stddev: 0.00029151399870302135",
            "extra": "mean: 3.2939313432835826 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.00482323051112,
            "unit": "iter/sec",
            "range": "stddev: 0.000563686709619531",
            "extra": "mean: 9.173905982906028 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.53570548610665,
            "unit": "iter/sec",
            "range": "stddev: 0.00044118126252488005",
            "extra": "mean: 7.218355704698 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.3980717323406,
            "unit": "iter/sec",
            "range": "stddev: 0.00038429751178871777",
            "extra": "mean: 5.307909952606691 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.62226609461027,
            "unit": "iter/sec",
            "range": "stddev: 0.0002272593561711639",
            "extra": "mean: 3.1987484848483745 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.913135637683936,
            "unit": "iter/sec",
            "range": "stddev: 0.008008151985994038",
            "extra": "mean: 91.63269230769198 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.600120641254739,
            "unit": "iter/sec",
            "range": "stddev: 0.0043767243251293855",
            "extra": "mean: 86.20599999999949 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.65742769351672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005317331144352335",
            "extra": "mean: 6.424364161850086 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.74313282285604,
            "unit": "iter/sec",
            "range": "stddev: 0.0002512020336370945",
            "extra": "mean: 4.102679687500221 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.2784160773268,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524744383398694",
            "extra": "mean: 2.2208481781375657 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.1847983948772,
            "unit": "iter/sec",
            "range": "stddev: 0.00012123700116870533",
            "extra": "mean: 2.177772442588675 msec\nrounds: 479"
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
        "date": 1648605290384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.25226558165329,
            "unit": "iter/sec",
            "range": "stddev: 0.0013260122655596234",
            "extra": "mean: 10.17788235294119 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.580907083857,
            "unit": "iter/sec",
            "range": "stddev: 0.0009857027994407057",
            "extra": "mean: 8.091864864864931 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.27856958099326,
            "unit": "iter/sec",
            "range": "stddev: 0.00046840854204695123",
            "extra": "mean: 5.546971014492839 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.6936391717483,
            "unit": "iter/sec",
            "range": "stddev: 0.0003325607173950644",
            "extra": "mean: 3.3933545454545664 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.65628794952511,
            "unit": "iter/sec",
            "range": "stddev: 0.000691143679098316",
            "extra": "mean: 9.375912280701613 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.56890616746234,
            "unit": "iter/sec",
            "range": "stddev: 0.0009468387907848614",
            "extra": "mean: 8.158676056337885 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.5708996721844,
            "unit": "iter/sec",
            "range": "stddev: 0.0004673660741327318",
            "extra": "mean: 5.3598926829267395 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.67818657606557,
            "unit": "iter/sec",
            "range": "stddev: 0.00024851329123214513",
            "extra": "mean: 3.271414330218025 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.616456766228694,
            "unit": "iter/sec",
            "range": "stddev: 0.0038666643064762776",
            "extra": "mean: 86.08476923076881 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.572212173726207,
            "unit": "iter/sec",
            "range": "stddev: 0.006432451172244317",
            "extra": "mean: 94.5875833333325 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.23793707021048,
            "unit": "iter/sec",
            "range": "stddev: 0.001093383433945057",
            "extra": "mean: 6.656108433735159 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.8300991671249,
            "unit": "iter/sec",
            "range": "stddev: 0.0001972357969536788",
            "extra": "mean: 4.33219066147861 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.27088316480297,
            "unit": "iter/sec",
            "range": "stddev: 0.0002625752563648977",
            "extra": "mean: 2.261057731958744 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.9960283544193,
            "unit": "iter/sec",
            "range": "stddev: 0.00016969574473827057",
            "extra": "mean: 2.272747787610697 msec\nrounds: 452"
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
        "date": 1648608309824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.36262858736744,
            "unit": "iter/sec",
            "range": "stddev: 0.0007823894021709576",
            "extra": "mean: 8.59382442748085 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.98081867146007,
            "unit": "iter/sec",
            "range": "stddev: 0.00016355910635197272",
            "extra": "mean: 6.4524113924051125 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.35479702810386,
            "unit": "iter/sec",
            "range": "stddev: 0.00014865064228894329",
            "extra": "mean: 4.6434999999999995 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.2845712438345,
            "unit": "iter/sec",
            "range": "stddev: 0.00021672643950889386",
            "extra": "mean: 3.0932500000000274 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.32316267452889,
            "unit": "iter/sec",
            "range": "stddev: 0.0002698657685390106",
            "extra": "mean: 8.52346610169504 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.349248761464,
            "unit": "iter/sec",
            "range": "stddev: 0.00022593418183176523",
            "extra": "mean: 6.879980519480517 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.12706560506405,
            "unit": "iter/sec",
            "range": "stddev: 0.00013844500956145068",
            "extra": "mean: 4.781781818181763 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.208954343648,
            "unit": "iter/sec",
            "range": "stddev: 0.00010227240137874788",
            "extra": "mean: 3.065519774011293 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.72364248522102,
            "unit": "iter/sec",
            "range": "stddev: 0.001611089840560901",
            "extra": "mean: 78.59384615384603 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.996880810989202,
            "unit": "iter/sec",
            "range": "stddev: 0.0020705407103784952",
            "extra": "mean: 83.35499999999959 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.31061297189163,
            "unit": "iter/sec",
            "range": "stddev: 0.0007339989342925996",
            "extra": "mean: 6.652890173410455 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.2559982886207,
            "unit": "iter/sec",
            "range": "stddev: 0.00026293660996833953",
            "extra": "mean: 4.179623529411681 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.45187456905825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900011842259656",
            "extra": "mean: 2.181254032258006 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.18399613512304,
            "unit": "iter/sec",
            "range": "stddev: 0.00021686680826286768",
            "extra": "mean: 2.2769500000002996 msec\nrounds: 480"
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
        "date": 1648614604962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.62462358296806,
            "unit": "iter/sec",
            "range": "stddev: 0.0022287110674905656",
            "extra": "mean: 10.68095081967216 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.58753790376547,
            "unit": "iter/sec",
            "range": "stddev: 0.002190133370630113",
            "extra": "mean: 8.961574193548504 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.88254856596953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005263259955235225",
            "extra": "mean: 5.46799029126215 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.2442230318645,
            "unit": "iter/sec",
            "range": "stddev: 0.0004678412287758155",
            "extra": "mean: 3.581094674556222 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.33875428992671,
            "unit": "iter/sec",
            "range": "stddev: 0.0008840151024315467",
            "extra": "mean: 9.966238938053 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.58993309786234,
            "unit": "iter/sec",
            "range": "stddev: 0.0006984195930595205",
            "extra": "mean: 7.599365517241415 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.69821072989518,
            "unit": "iter/sec",
            "range": "stddev: 0.000501057490649",
            "extra": "mean: 5.5340891089109014 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.81668341418185,
            "unit": "iter/sec",
            "range": "stddev: 0.00035633959807296735",
            "extra": "mean: 3.313269461077816 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.533504349572784,
            "unit": "iter/sec",
            "range": "stddev: 0.010390495704846467",
            "extra": "mean: 86.703916666667 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.509905586014519,
            "unit": "iter/sec",
            "range": "stddev: 0.006699501030719792",
            "extra": "mean: 95.14833333333605 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.47449357355958,
            "unit": "iter/sec",
            "range": "stddev: 0.0003253521213261995",
            "extra": "mean: 6.270595238095161 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.1966905845295,
            "unit": "iter/sec",
            "range": "stddev: 0.00028477122266872733",
            "extra": "mean: 4.325321428571153 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 424.50535702425407,
            "unit": "iter/sec",
            "range": "stddev: 0.00024062450718114302",
            "extra": "mean: 2.3556828752643164 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.44918344917903,
            "unit": "iter/sec",
            "range": "stddev: 0.00021274471990519308",
            "extra": "mean: 2.291217484008518 msec\nrounds: 469"
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
        "date": 1648735421008,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.11559403579392,
            "unit": "iter/sec",
            "range": "stddev: 0.00043767779984573216",
            "extra": "mean: 8.538572580645162 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.26356192875284,
            "unit": "iter/sec",
            "range": "stddev: 0.00042503368490962696",
            "extra": "mean: 7.392974025974034 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.756814319875,
            "unit": "iter/sec",
            "range": "stddev: 0.0002279205446158405",
            "extra": "mean: 4.90781132075472 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.13656346678033,
            "unit": "iter/sec",
            "range": "stddev: 0.00017852846390868041",
            "extra": "mean: 3.133454810495546 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.20098008932082,
            "unit": "iter/sec",
            "range": "stddev: 0.00047297006583019857",
            "extra": "mean: 8.992726495726586 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.07730551840186,
            "unit": "iter/sec",
            "range": "stddev: 0.0003248632151596341",
            "extra": "mean: 7.038421768707319 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.58693147168896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003286387537288551",
            "extra": "mean: 5.112816037735881 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.52027997400864,
            "unit": "iter/sec",
            "range": "stddev: 0.00015694900510892387",
            "extra": "mean: 3.1593552238804916 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.01499841494453,
            "unit": "iter/sec",
            "range": "stddev: 0.003713417751538424",
            "extra": "mean: 83.22930769230706 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.51185274621765,
            "unit": "iter/sec",
            "range": "stddev: 0.0019529442931327666",
            "extra": "mean: 79.9242142857141 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.39483739976725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781317595362918",
            "extra": "mean: 6.046137931034401 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.6639192252151,
            "unit": "iter/sec",
            "range": "stddev: 0.00037673911880271334",
            "extra": "mean: 4.411818181818306 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.6808366598927,
            "unit": "iter/sec",
            "range": "stddev: 0.0001975396502399067",
            "extra": "mean: 2.1945184426229707 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.2886484623629,
            "unit": "iter/sec",
            "range": "stddev: 0.00007906694442361923",
            "extra": "mean: 2.2012436440679592 msec\nrounds: 472"
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
        "date": 1648765720619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.02430396731064,
            "unit": "iter/sec",
            "range": "stddev: 0.0004064111031355949",
            "extra": "mean: 8.262803149606261 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.66141238140915,
            "unit": "iter/sec",
            "range": "stddev: 0.0005861403227789415",
            "extra": "mean: 6.772250000000013 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.3714018254158,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108198961278346",
            "extra": "mean: 5.513548387096762 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.74638549155287,
            "unit": "iter/sec",
            "range": "stddev: 0.00033026698646231056",
            "extra": "mean: 3.4159260355030234 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.97754737407256,
            "unit": "iter/sec",
            "range": "stddev: 0.0016852117551634908",
            "extra": "mean: 9.7108547008547 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.1482430150175,
            "unit": "iter/sec",
            "range": "stddev: 0.0010749803494702894",
            "extra": "mean: 7.624959183673487 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.23121739787325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707787108176554",
            "extra": "mean: 5.256760765550248 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.6637194620016,
            "unit": "iter/sec",
            "range": "stddev: 0.0003657874097556691",
            "extra": "mean: 3.28230746268665 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.37470555023581,
            "unit": "iter/sec",
            "range": "stddev: 0.0035955903346379645",
            "extra": "mean: 87.9143636363641 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.671460070476016,
            "unit": "iter/sec",
            "range": "stddev: 0.004484969391975922",
            "extra": "mean: 85.67908333333445 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.8074203566052,
            "unit": "iter/sec",
            "range": "stddev: 0.0004420628128544725",
            "extra": "mean: 5.99493714285716 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.84089955997908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003673325433894984",
            "extra": "mean: 4.186887596899518 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.87599997425366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002621838436573845",
            "extra": "mean: 2.2032449392713547 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.7993060724452,
            "unit": "iter/sec",
            "range": "stddev: 0.00030106937548812025",
            "extra": "mean: 2.3105397489537856 msec\nrounds: 478"
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
        "date": 1648768144185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.55246223056764,
            "unit": "iter/sec",
            "range": "stddev: 0.0009199368657860894",
            "extra": "mean: 8.964391999999975 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.5564435020309,
            "unit": "iter/sec",
            "range": "stddev: 0.0005854786230207629",
            "extra": "mean: 6.87018709677423 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.58964234376427,
            "unit": "iter/sec",
            "range": "stddev: 0.0004583935179331927",
            "extra": "mean: 5.035509345794439 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.9737047575365,
            "unit": "iter/sec",
            "range": "stddev: 0.0004382465652017547",
            "extra": "mean: 3.610451038575675 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.63951108537488,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467790430135637",
            "extra": "mean: 9.20475423728799 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.21942336433875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007702786269146622",
            "extra": "mean: 7.450486486486379 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.22809592648215,
            "unit": "iter/sec",
            "range": "stddev: 0.0004846167575607764",
            "extra": "mean: 5.148585714285708 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.50223574721423,
            "unit": "iter/sec",
            "range": "stddev: 0.00044599254243216525",
            "extra": "mean: 3.3613192771085383 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.299892556854905,
            "unit": "iter/sec",
            "range": "stddev: 0.0038947953256606494",
            "extra": "mean: 88.49641666666693 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.82383576146411,
            "unit": "iter/sec",
            "range": "stddev: 0.0034906814153683173",
            "extra": "mean: 84.57492307692313 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.06634335666072,
            "unit": "iter/sec",
            "range": "stddev: 0.000712711471247668",
            "extra": "mean: 6.407531428571279 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.68351573958856,
            "unit": "iter/sec",
            "range": "stddev: 0.0004689009417601374",
            "extra": "mean: 4.261057692307747 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.8305196085062,
            "unit": "iter/sec",
            "range": "stddev: 0.00022111249018185063",
            "extra": "mean: 2.1747142857141957 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.16241634675856,
            "unit": "iter/sec",
            "range": "stddev: 0.00019354613844936252",
            "extra": "mean: 2.1922016460905347 msec\nrounds: 486"
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
        "date": 1648769069785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.12461642864187,
            "unit": "iter/sec",
            "range": "stddev: 0.0003219696001948261",
            "extra": "mean: 8.12185271317828 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.35812206267317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005153872571617745",
            "extra": "mean: 6.832555555555585 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.0354339210791,
            "unit": "iter/sec",
            "range": "stddev: 0.00018496800296641632",
            "extra": "mean: 4.694054794520516 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.8816430864354,
            "unit": "iter/sec",
            "range": "stddev: 0.00017836438860293775",
            "extra": "mean: 3.049881019830019 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.93793087652588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005887816561217058",
            "extra": "mean: 9.096041666666672 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.4294226121004,
            "unit": "iter/sec",
            "range": "stddev: 0.00032567690302079974",
            "extra": "mean: 7.070664516129065 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.01133020069503,
            "unit": "iter/sec",
            "range": "stddev: 0.00025671979754843174",
            "extra": "mean: 4.95021739130432 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.9748431764872,
            "unit": "iter/sec",
            "range": "stddev: 0.00014214871874115628",
            "extra": "mean: 3.003229885057618 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.870296825817103,
            "unit": "iter/sec",
            "range": "stddev: 0.0019480187342552646",
            "extra": "mean: 77.69828571428557 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.966504739720692,
            "unit": "iter/sec",
            "range": "stddev: 0.002168084094968527",
            "extra": "mean: 77.121785714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.69718471277943,
            "unit": "iter/sec",
            "range": "stddev: 0.00050571350664872",
            "extra": "mean: 6.035105555555494 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.9741716207976,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487285851281456",
            "extra": "mean: 4.082062992126077 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 490.73236177334974,
            "unit": "iter/sec",
            "range": "stddev: 0.00015034851870818845",
            "extra": "mean: 2.037770642201627 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 467.292377162755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001357053384212212",
            "extra": "mean: 2.139987829614662 msec\nrounds: 493"
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
        "date": 1648770416806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.75291604898806,
            "unit": "iter/sec",
            "range": "stddev: 0.0009635589164460439",
            "extra": "mean: 9.195155737704976 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.94820330291242,
            "unit": "iter/sec",
            "range": "stddev: 0.0005669862448060471",
            "extra": "mean: 6.995540880503156 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.04986323822314,
            "unit": "iter/sec",
            "range": "stddev: 0.00020795005934502725",
            "extra": "mean: 4.973890476190497 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.5443615454094,
            "unit": "iter/sec",
            "range": "stddev: 0.0004154461100464027",
            "extra": "mean: 3.1691265060240728 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.2030972069585,
            "unit": "iter/sec",
            "range": "stddev: 0.002054633632436493",
            "extra": "mean: 10.080330434782596 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.65274450152734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005111028804520233",
            "extra": "mean: 7.426510344827448 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.15256840159932,
            "unit": "iter/sec",
            "range": "stddev: 0.000543380963150799",
            "extra": "mean: 5.286737623762263 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.0944289907208,
            "unit": "iter/sec",
            "range": "stddev: 0.0003172785576415466",
            "extra": "mean: 3.3102232415901853 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.31925053470286,
            "unit": "iter/sec",
            "range": "stddev: 0.003932859141342511",
            "extra": "mean: 81.17376923076918 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.11329390744594,
            "unit": "iter/sec",
            "range": "stddev: 0.005651214770216918",
            "extra": "mean: 82.5539285714275 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.67015554835066,
            "unit": "iter/sec",
            "range": "stddev: 0.0006248169436497789",
            "extra": "mean: 6.507444444444261 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.27586880484102,
            "unit": "iter/sec",
            "range": "stddev: 0.00038543617695023475",
            "extra": "mean: 4.323840637450318 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.1591986078023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001257193422607734",
            "extra": "mean: 2.1684485596707366 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.1183092679142,
            "unit": "iter/sec",
            "range": "stddev: 0.00012039612436642394",
            "extra": "mean: 2.2020693277311447 msec\nrounds: 476"
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
        "date": 1648771306254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.85269904714937,
            "unit": "iter/sec",
            "range": "stddev: 0.001568983638496647",
            "extra": "mean: 9.722642276422748 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.4280902261627,
            "unit": "iter/sec",
            "range": "stddev: 0.0011593120828766543",
            "extra": "mean: 7.223967320261429 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.69101598977065,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653326021085131",
            "extra": "mean: 5.216728571428531 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.4964934411213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758358504722558",
            "extra": "mean: 3.454273273273285 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.74766578379769,
            "unit": "iter/sec",
            "range": "stddev: 0.0011842119396120146",
            "extra": "mean: 9.732581196581211 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.14296058157265,
            "unit": "iter/sec",
            "range": "stddev: 0.0008240109136587472",
            "extra": "mean: 7.567561643835684 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.94228299919874,
            "unit": "iter/sec",
            "range": "stddev: 0.0007079894811617788",
            "extra": "mean: 5.4364879227053855 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.7053601228244,
            "unit": "iter/sec",
            "range": "stddev: 0.0004066562738846859",
            "extra": "mean: 3.4047727272727024 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.10773391120479,
            "unit": "iter/sec",
            "range": "stddev: 0.01027101721615478",
            "extra": "mean: 90.02736363636353 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.807866037034863,
            "unit": "iter/sec",
            "range": "stddev: 0.0052519004081786076",
            "extra": "mean: 84.68930769230809 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.55334331131664,
            "unit": "iter/sec",
            "range": "stddev: 0.000830216481038721",
            "extra": "mean: 6.8234540229883756 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.00628279685935,
            "unit": "iter/sec",
            "range": "stddev: 0.000588380432550847",
            "extra": "mean: 4.566079051382998 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 423.3791334323807,
            "unit": "iter/sec",
            "range": "stddev: 0.00037243538711528076",
            "extra": "mean: 2.361949186992026 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 405.00700153801193,
            "unit": "iter/sec",
            "range": "stddev: 0.00036793002387376764",
            "extra": "mean: 2.469093117409095 msec\nrounds: 494"
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
        "date": 1648866128226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.00446288451323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005825401569099654",
            "extra": "mean: 8.546682539682514 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.30084410893335,
            "unit": "iter/sec",
            "range": "stddev: 0.00042111062086612103",
            "extra": "mean: 6.653322580645197 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.4477691857363,
            "unit": "iter/sec",
            "range": "stddev: 0.00019316947693222072",
            "extra": "mean: 4.8438401826484405 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.12085138911226,
            "unit": "iter/sec",
            "range": "stddev: 0.00017144501155048656",
            "extra": "mean: 3.114092391304321 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.52445277734053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005560593474292682",
            "extra": "mean: 9.300210084033441 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.99289336599213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003871209776807159",
            "extra": "mean: 7.246749999999975 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.9095150691517,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996538543818513",
            "extra": "mean: 5.052814159291883 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.04699100592427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002280980513905605",
            "extra": "mean: 3.246257971014456 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.7747017107149,
            "unit": "iter/sec",
            "range": "stddev: 0.0021549392791225678",
            "extra": "mean: 78.27971428571523 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.530748529082846,
            "unit": "iter/sec",
            "range": "stddev: 0.002535259368211633",
            "extra": "mean: 79.80369230769267 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.25479365811162,
            "unit": "iter/sec",
            "range": "stddev: 0.000618385262580563",
            "extra": "mean: 6.31892391304346 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 193.09709483665563,
            "unit": "iter/sec",
            "range": "stddev: 0.0005517546816469122",
            "extra": "mean: 5.178741818181772 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.7297225436408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005277906416712906",
            "extra": "mean: 2.189478701825563 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.88580338373663,
            "unit": "iter/sec",
            "range": "stddev: 0.00019025404464838866",
            "extra": "mean: 2.2427267080745863 msec\nrounds: 483"
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
        "date": 1649082714683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.06476015373266,
            "unit": "iter/sec",
            "range": "stddev: 0.0004368315370801473",
            "extra": "mean: 8.398790697674372 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.80216390642025,
            "unit": "iter/sec",
            "range": "stddev: 0.0003248406623263807",
            "extra": "mean: 6.544409937888211 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.96523127059655,
            "unit": "iter/sec",
            "range": "stddev: 0.00022171488368115296",
            "extra": "mean: 5.000869369369428 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.5853640144451,
            "unit": "iter/sec",
            "range": "stddev: 0.00014560631673405416",
            "extra": "mean: 3.0903746312684257 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.6488548896047,
            "unit": "iter/sec",
            "range": "stddev: 0.00035037375348355687",
            "extra": "mean: 8.956652542372892 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.8781404085488,
            "unit": "iter/sec",
            "range": "stddev: 0.00028696105729126295",
            "extra": "mean: 7.0983333333332235 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.4191029135703,
            "unit": "iter/sec",
            "range": "stddev: 0.00024705682515574836",
            "extra": "mean: 4.9402451923076836 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.2820170955371,
            "unit": "iter/sec",
            "range": "stddev: 0.0002429837314201645",
            "extra": "mean: 3.1125302593659883 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.972175609900667,
            "unit": "iter/sec",
            "range": "stddev: 0.0011034690378897898",
            "extra": "mean: 77.08807142857184 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.280980971200202,
            "unit": "iter/sec",
            "range": "stddev: 0.0013859538013808797",
            "extra": "mean: 75.29564285714281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.83515375388768,
            "unit": "iter/sec",
            "range": "stddev: 0.00033845636403685513",
            "extra": "mean: 5.888062499999998 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.50410272965482,
            "unit": "iter/sec",
            "range": "stddev: 0.00018426423296273145",
            "extra": "mean: 4.056727611940467 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.0924606858783,
            "unit": "iter/sec",
            "range": "stddev: 0.00010070341594969019",
            "extra": "mean: 2.131775894538704 msec\nrounds: 531"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.43855201324953,
            "unit": "iter/sec",
            "range": "stddev: 0.00010962342613373579",
            "extra": "mean: 2.1956858846918785 msec\nrounds: 503"
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
        "date": 1649083927145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.26516313819957,
            "unit": "iter/sec",
            "range": "stddev: 0.0010103384160753122",
            "extra": "mean: 8.987539062499966 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.3206975689028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909366046935171",
            "extra": "mean: 6.929013071895469 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.92092020129252,
            "unit": "iter/sec",
            "range": "stddev: 0.00018728962644104315",
            "extra": "mean: 4.7636986301370206 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.67651959572686,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251699509538218",
            "extra": "mean: 3.4882521994134943 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.45305331721528,
            "unit": "iter/sec",
            "range": "stddev: 0.0003622413550607728",
            "extra": "mean: 8.814218487394916 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.99113620853944,
            "unit": "iter/sec",
            "range": "stddev: 0.0002216023388854613",
            "extra": "mean: 6.896973333333349 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.45217760605848,
            "unit": "iter/sec",
            "range": "stddev: 0.0010187028090557606",
            "extra": "mean: 5.363305555555531 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.50927460791127,
            "unit": "iter/sec",
            "range": "stddev: 0.00010323073724718068",
            "extra": "mean: 3.0815760233917855 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.521430910596996,
            "unit": "iter/sec",
            "range": "stddev: 0.0028140477507658194",
            "extra": "mean: 79.86307692307685 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.925789350257661,
            "unit": "iter/sec",
            "range": "stddev: 0.0016823034770852134",
            "extra": "mean: 77.36471428571333 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.79924873637768,
            "unit": "iter/sec",
            "range": "stddev: 0.0004665874436494699",
            "extra": "mean: 6.067988826815936 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.15561658166314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005134658443845619",
            "extra": "mean: 4.344886363636418 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 439.0523561491353,
            "unit": "iter/sec",
            "range": "stddev: 0.00021550148909012405",
            "extra": "mean: 2.277632692307713 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.78545771202664,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464531372182634",
            "extra": "mean: 2.3106136820923298 msec\nrounds: 497"
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
        "date": 1649167142770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.86135579659219,
            "unit": "iter/sec",
            "range": "stddev: 0.0008276633148083996",
            "extra": "mean: 10.43173228346463 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.0994351117372,
            "unit": "iter/sec",
            "range": "stddev: 0.0016022526630579757",
            "extra": "mean: 7.2411592356688 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.85956761917322,
            "unit": "iter/sec",
            "range": "stddev: 0.0007609795968849952",
            "extra": "mean: 5.054089686098641 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.40231809953434,
            "unit": "iter/sec",
            "range": "stddev: 0.00028688527927354186",
            "extra": "mean: 3.2851260997066953 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.73828855846148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162226280700234",
            "extra": "mean: 9.547606837606791 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.62633345009428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003258001302233394",
            "extra": "mean: 6.914370129870343 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.3690024617153,
            "unit": "iter/sec",
            "range": "stddev: 0.00041421698191825755",
            "extra": "mean: 5.0666517412934455 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.67447182422455,
            "unit": "iter/sec",
            "range": "stddev: 0.0003637205345630314",
            "extra": "mean: 3.314831360946796 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.454534654406366,
            "unit": "iter/sec",
            "range": "stddev: 0.012395758089692345",
            "extra": "mean: 95.65227272727257 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.555127587867165,
            "unit": "iter/sec",
            "range": "stddev: 0.005006577915526682",
            "extra": "mean: 86.54166666666629 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.69387868020382,
            "unit": "iter/sec",
            "range": "stddev: 0.0009845756163790588",
            "extra": "mean: 6.506439999999836 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.90034644865275,
            "unit": "iter/sec",
            "range": "stddev: 0.0006160910038051018",
            "extra": "mean: 4.631766536964907 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.39643568277427,
            "unit": "iter/sec",
            "range": "stddev: 0.00024031523017480845",
            "extra": "mean: 2.235154150197675 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.69865740075306,
            "unit": "iter/sec",
            "range": "stddev: 0.00019074232027424564",
            "extra": "mean: 2.2537818930039943 msec\nrounds: 486"
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
        "date": 1649340007933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.91552873775983,
            "unit": "iter/sec",
            "range": "stddev: 0.0004589080486350372",
            "extra": "mean: 8.409330645161274 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.37201754416213,
            "unit": "iter/sec",
            "range": "stddev: 0.001175576481499443",
            "extra": "mean: 7.442025641025627 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.12602415263672,
            "unit": "iter/sec",
            "range": "stddev: 0.0003371850694504676",
            "extra": "mean: 4.947408450704219 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.87858232349805,
            "unit": "iter/sec",
            "range": "stddev: 0.00017737856715693755",
            "extra": "mean: 3.097139465875384 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.56451818074477,
            "unit": "iter/sec",
            "range": "stddev: 0.0004841223514572277",
            "extra": "mean: 9.127042372881473 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.01256328946013,
            "unit": "iter/sec",
            "range": "stddev: 0.00033077076634917756",
            "extra": "mean: 7.142216216216348 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.63692641177101,
            "unit": "iter/sec",
            "range": "stddev: 0.00024850601520429557",
            "extra": "mean: 5.034310679611589 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.89974236874366,
            "unit": "iter/sec",
            "range": "stddev: 0.00012182886031849536",
            "extra": "mean: 3.145645833333401 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.963131469293323,
            "unit": "iter/sec",
            "range": "stddev: 0.0026966626240022312",
            "extra": "mean: 83.5901538461544 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.603836219934713,
            "unit": "iter/sec",
            "range": "stddev: 0.0014631464076620617",
            "extra": "mean: 79.3409230769249 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.80494360339918,
            "unit": "iter/sec",
            "range": "stddev: 0.0005532904587022616",
            "extra": "mean: 6.218714285714668 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.67393311083825,
            "unit": "iter/sec",
            "range": "stddev: 0.0003753920620872762",
            "extra": "mean: 4.470793650793743 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.14166553214125,
            "unit": "iter/sec",
            "range": "stddev: 0.00011207713507775508",
            "extra": "mean: 2.1090742971885303 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.7078102167858,
            "unit": "iter/sec",
            "range": "stddev: 0.00011825890407555503",
            "extra": "mean: 2.1943885480573346 msec\nrounds: 489"
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
        "date": 1649690432952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.08909302300403,
            "unit": "iter/sec",
            "range": "stddev: 0.00021272727558030246",
            "extra": "mean: 8.258382113821135 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.23880892017485,
            "unit": "iter/sec",
            "range": "stddev: 0.00023439720129193235",
            "extra": "mean: 6.745871794871816 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.48635649528754,
            "unit": "iter/sec",
            "range": "stddev: 0.00026083674225510386",
            "extra": "mean: 4.963115207373303 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.13646293556667,
            "unit": "iter/sec",
            "range": "stddev: 0.00016153434824201364",
            "extra": "mean: 3.0290504451038838 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.1307036729764,
            "unit": "iter/sec",
            "range": "stddev: 0.00017347885690499615",
            "extra": "mean: 8.839333333333368 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.6329471101137,
            "unit": "iter/sec",
            "range": "stddev: 0.0003018657555862196",
            "extra": "mean: 7.213292517006925 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.5475585606328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003551353095175438",
            "extra": "mean: 5.478024509803849 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.8167786352671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002497737152718935",
            "extra": "mean: 3.335370370370496 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.8478121192181,
            "unit": "iter/sec",
            "range": "stddev: 0.0033452045317104587",
            "extra": "mean: 84.40376923076961 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.348728081007822,
            "unit": "iter/sec",
            "range": "stddev: 0.002930223029054111",
            "extra": "mean: 80.97999999999891 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.39819529287516,
            "unit": "iter/sec",
            "range": "stddev: 0.001054012797925852",
            "extra": "mean: 6.393935672514474 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.82274410706523,
            "unit": "iter/sec",
            "range": "stddev: 0.0003422938408411949",
            "extra": "mean: 4.5081039999998325 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.22075801494026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002193310521854871",
            "extra": "mean: 2.1681591355599985 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.3595801717877,
            "unit": "iter/sec",
            "range": "stddev: 0.00023587341107720323",
            "extra": "mean: 2.2008999999998076 msec\nrounds: 490"
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
        "date": 1649777929286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.71346047419767,
            "unit": "iter/sec",
            "range": "stddev: 0.0013278744625063413",
            "extra": "mean: 10.13033070866142 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.61329648372262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003686945229762073",
            "extra": "mean: 6.914993464052304 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.07652761708772,
            "unit": "iter/sec",
            "range": "stddev: 0.0003231553805696495",
            "extra": "mean: 5.2062582159624435 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.47014785980343,
            "unit": "iter/sec",
            "range": "stddev: 0.0001783462589943828",
            "extra": "mean: 3.140011730205303 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.11911829063568,
            "unit": "iter/sec",
            "range": "stddev: 0.00056654266144594",
            "extra": "mean: 9.335401709401669 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.8908983058211,
            "unit": "iter/sec",
            "range": "stddev: 0.00021624826184674884",
            "extra": "mean: 7.199895833333297 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.36977105025676,
            "unit": "iter/sec",
            "range": "stddev: 0.00018210844136653826",
            "extra": "mean: 5.092433497537006 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.2785958027065,
            "unit": "iter/sec",
            "range": "stddev: 0.00023569204780714785",
            "extra": "mean: 3.433139318885402 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.894250959545673,
            "unit": "iter/sec",
            "range": "stddev: 0.002192084706158713",
            "extra": "mean: 84.07423076923183 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.66396177431834,
            "unit": "iter/sec",
            "range": "stddev: 0.0015493510552183098",
            "extra": "mean: 78.96423076923152 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.10464523792442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005539344186214533",
            "extra": "mean: 6.617930232557925 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.690515749359,
            "unit": "iter/sec",
            "range": "stddev: 0.0002302217484977123",
            "extra": "mean: 4.189525490196128 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.05190011882837,
            "unit": "iter/sec",
            "range": "stddev: 0.00011230211824919818",
            "extra": "mean: 2.1642590361446943 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.7398509848612,
            "unit": "iter/sec",
            "range": "stddev: 0.00008419413547676285",
            "extra": "mean: 2.2284626556016223 msec\nrounds: 482"
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
        "date": 1649968643365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.27213222656988,
            "unit": "iter/sec",
            "range": "stddev: 0.0006513225552425854",
            "extra": "mean: 8.751039999999982 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.42712598117333,
            "unit": "iter/sec",
            "range": "stddev: 0.0005117534697341307",
            "extra": "mean: 6.97218181818175 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.3089773726438,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853032393496552",
            "extra": "mean: 5.282369668246412 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.80630017370584,
            "unit": "iter/sec",
            "range": "stddev: 0.00011642894587961091",
            "extra": "mean: 3.069308357348655 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.47325134809914,
            "unit": "iter/sec",
            "range": "stddev: 0.00034338561103554343",
            "extra": "mean: 8.812649572649718 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.24946328572616,
            "unit": "iter/sec",
            "range": "stddev: 0.00032610853790444985",
            "extra": "mean: 6.9808289473685115 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.8081615573191,
            "unit": "iter/sec",
            "range": "stddev: 0.00023540899070650405",
            "extra": "mean: 4.955200980392323 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.5836560273513,
            "unit": "iter/sec",
            "range": "stddev: 0.00026899602850341433",
            "extra": "mean: 3.304871165644213 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.841534885780801,
            "unit": "iter/sec",
            "range": "stddev: 0.006507892786083496",
            "extra": "mean: 101.61016666666652 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.214511246511117,
            "unit": "iter/sec",
            "range": "stddev: 0.0021761824302427095",
            "extra": "mean: 81.86983333333409 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.33459803310242,
            "unit": "iter/sec",
            "range": "stddev: 0.0005079377274213222",
            "extra": "mean: 6.160116279070006 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.90193634711756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162489535340517",
            "extra": "mean: 4.466240963855218 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.24406784796093,
            "unit": "iter/sec",
            "range": "stddev: 0.00012186727874525746",
            "extra": "mean: 2.1175490981962954 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.48636961712793,
            "unit": "iter/sec",
            "range": "stddev: 0.00011563175860290699",
            "extra": "mean: 2.200286008230407 msec\nrounds: 486"
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
        "date": 1671164556968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.59002789413141,
            "unit": "iter/sec",
            "range": "stddev: 0.0006139282902242582",
            "extra": "mean: 9.470591304347776 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.83581629309808,
            "unit": "iter/sec",
            "range": "stddev: 0.0004231943024670635",
            "extra": "mean: 7.308028169014106 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.05065705178413,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718702999544552",
            "extra": "mean: 5.9862081218274374 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.7467114508284,
            "unit": "iter/sec",
            "range": "stddev: 0.00017875617313038884",
            "extra": "mean: 3.3030912052117145 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.8418871595154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006459836800028681",
            "extra": "mean: 10.117168224299036 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.54836193795282,
            "unit": "iter/sec",
            "range": "stddev: 0.0014628408828398943",
            "extra": "mean: 8.43537593984969 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.19165344014527,
            "unit": "iter/sec",
            "range": "stddev: 0.0008539831108241391",
            "extra": "mean: 5.740803191489392 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.5990303721641,
            "unit": "iter/sec",
            "range": "stddev: 0.0012323328413055175",
            "extra": "mean: 3.6549837133550733 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.250017578152386,
            "unit": "iter/sec",
            "range": "stddev: 0.002110377050541978",
            "extra": "mean: 88.88875000000063 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.519994564669561,
            "unit": "iter/sec",
            "range": "stddev: 0.005017321314628488",
            "extra": "mean: 95.05708333333256 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 137.52189193693542,
            "unit": "iter/sec",
            "range": "stddev: 0.0005501961893715963",
            "extra": "mean: 7.271569536423906 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.63204060242018,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062298854895562",
            "extra": "mean: 4.770263157894648 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 308.18911490422005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006467745532999417",
            "extra": "mean: 3.24476093294464 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 309.19378629615915,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418087153723878",
            "extra": "mean: 3.2342176470589123 msec\nrounds: 340"
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
        "date": 1671168624338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.59162587169608,
            "unit": "iter/sec",
            "range": "stddev: 0.0009421025396585019",
            "extra": "mean: 8.961245901639277 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.44866423717912,
            "unit": "iter/sec",
            "range": "stddev: 0.00042677689877087133",
            "extra": "mean: 7.020072847682063 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.51466912312358,
            "unit": "iter/sec",
            "range": "stddev: 0.0002736570838307465",
            "extra": "mean: 4.913650717703369 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.1906497563917,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289273409739334",
            "extra": "mean: 3.3091692307691893 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.7709076092496,
            "unit": "iter/sec",
            "range": "stddev: 0.0012078612584847555",
            "extra": "mean: 10.333684210526277 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.48879294729372,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315062976163582",
            "extra": "mean: 7.169034722222116 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.02587705325706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004742163787370939",
            "extra": "mean: 5.262441176470602 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.53912893234076,
            "unit": "iter/sec",
            "range": "stddev: 0.00021868508504187487",
            "extra": "mean: 3.2410799999998994 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.49102807887032,
            "unit": "iter/sec",
            "range": "stddev: 0.0016156669734915098",
            "extra": "mean: 80.05746153846124 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.145378309849155,
            "unit": "iter/sec",
            "range": "stddev: 0.002322147635492726",
            "extra": "mean: 82.33584615384615 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.90011035790204,
            "unit": "iter/sec",
            "range": "stddev: 0.000671810795722328",
            "extra": "mean: 6.540217647058872 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.19294741781633,
            "unit": "iter/sec",
            "range": "stddev: 0.00025222748160751553",
            "extra": "mean: 4.288294354838617 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 350.9537234754211,
            "unit": "iter/sec",
            "range": "stddev: 0.00020512526491502033",
            "extra": "mean: 2.8493785166238155 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 341.28869870701857,
            "unit": "iter/sec",
            "range": "stddev: 0.00026638874792655733",
            "extra": "mean: 2.9300706521737374 msec\nrounds: 368"
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
        "date": 1671338872765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.4985981358229,
            "unit": "iter/sec",
            "range": "stddev: 0.0005905998837209402",
            "extra": "mean: 10.050392857142835 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.93017205694335,
            "unit": "iter/sec",
            "range": "stddev: 0.0009237786695794294",
            "extra": "mean: 7.8167642857142985 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.43154564006124,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500100416831384",
            "extra": "mean: 5.451625000000006 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.7836923009722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002385925268798357",
            "extra": "mean: 3.5362718120805945 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.93632021168212,
            "unit": "iter/sec",
            "range": "stddev: 0.0007504122428699686",
            "extra": "mean: 10.423580952380853 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.44633522088775,
            "unit": "iter/sec",
            "range": "stddev: 0.0008152252003334547",
            "extra": "mean: 8.234089552238776 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.57823546447125,
            "unit": "iter/sec",
            "range": "stddev: 0.0013916962817152724",
            "extra": "mean: 6.346054054054105 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.59749099069063,
            "unit": "iter/sec",
            "range": "stddev: 0.007671846665553531",
            "extra": "mean: 4.96037919463084 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.143651334287345,
            "unit": "iter/sec",
            "range": "stddev: 0.032267389985162806",
            "extra": "mean: 109.36549999999971 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 7.730315980179459,
            "unit": "iter/sec",
            "range": "stddev: 0.05489512582519304",
            "extra": "mean: 129.36081818181836 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.07831429544746,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490574353638712",
            "extra": "mean: 7.0383717948717415 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.71975661586384,
            "unit": "iter/sec",
            "range": "stddev: 0.00021265021006033552",
            "extra": "mean: 4.5306320346319495 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 315.1327473928652,
            "unit": "iter/sec",
            "range": "stddev: 0.0006687538043508225",
            "extra": "mean: 3.1732658959537905 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 309.08555616596504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003007926961859792",
            "extra": "mean: 3.235350148368127 msec\nrounds: 337"
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
        "date": 1671350815025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.0054811677718,
            "unit": "iter/sec",
            "range": "stddev: 0.0007838464651788906",
            "extra": "mean: 9.708221238938092 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.75946584275258,
            "unit": "iter/sec",
            "range": "stddev: 0.00040782394732078505",
            "extra": "mean: 7.532419580419626 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.127291596208,
            "unit": "iter/sec",
            "range": "stddev: 0.00032181511221938855",
            "extra": "mean: 5.710132275132226 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.3732750849481,
            "unit": "iter/sec",
            "range": "stddev: 0.00028043735078813067",
            "extra": "mean: 3.6052499999999674 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.79767530974597,
            "unit": "iter/sec",
            "range": "stddev: 0.0007513958972423695",
            "extra": "mean: 10.43866666666665 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.0452787762755,
            "unit": "iter/sec",
            "range": "stddev: 0.0005302499055378029",
            "extra": "mean: 7.933656934306548 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.00904950549392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004623161557109405",
            "extra": "mean: 5.916842931937165 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.3764174567204,
            "unit": "iter/sec",
            "range": "stddev: 0.0003001634867799932",
            "extra": "mean: 3.6579600000000547 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.83717959467512,
            "unit": "iter/sec",
            "range": "stddev: 0.0018956341926712357",
            "extra": "mean: 84.4795833333342 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.900914814167185,
            "unit": "iter/sec",
            "range": "stddev: 0.0020189429926803044",
            "extra": "mean: 84.02715384615405 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.07356234910392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004241863263981984",
            "extra": "mean: 6.708097560975814 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.74687468461798,
            "unit": "iter/sec",
            "range": "stddev: 0.00026989737241186335",
            "extra": "mean: 4.469336170212649 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 311.1334195109836,
            "unit": "iter/sec",
            "range": "stddev: 0.00023625149104777353",
            "extra": "mean: 3.2140552486188265 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 308.66181074958416,
            "unit": "iter/sec",
            "range": "stddev: 0.00022358014892026072",
            "extra": "mean: 3.239791788856235 msec\nrounds: 341"
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
        "date": 1671358350755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.57877744398955,
            "unit": "iter/sec",
            "range": "stddev: 0.00041293715828712846",
            "extra": "mean: 8.652107438016538 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.20653398422837,
            "unit": "iter/sec",
            "range": "stddev: 0.00010357531754825933",
            "extra": "mean: 6.657499999999998 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.49236788533253,
            "unit": "iter/sec",
            "range": "stddev: 0.00025033244659957414",
            "extra": "mean: 4.962967136150243 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3074635288971,
            "unit": "iter/sec",
            "range": "stddev: 0.00012635063630236557",
            "extra": "mean: 3.1416165644171787 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.95715157404568,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040274496676883",
            "extra": "mean: 9.619347826087067 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.65705680649734,
            "unit": "iter/sec",
            "range": "stddev: 0.0013691318975793492",
            "extra": "mean: 7.538234482758566 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.8991104760153,
            "unit": "iter/sec",
            "range": "stddev: 0.0002865220993418046",
            "extra": "mean: 5.053079812206617 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.6028876567024,
            "unit": "iter/sec",
            "range": "stddev: 0.0010300798989635947",
            "extra": "mean: 3.4293213213213365 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.39481096006394,
            "unit": "iter/sec",
            "range": "stddev: 0.0029788884521337777",
            "extra": "mean: 80.67892307692294 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.543486610525031,
            "unit": "iter/sec",
            "range": "stddev: 0.017054699809857684",
            "extra": "mean: 94.84528571428642 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 143.33279091708977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007729988940834429",
            "extra": "mean: 6.9767705882350795 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.02941534200522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006640358689867799",
            "extra": "mean: 4.309798387096854 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 352.0539915993942,
            "unit": "iter/sec",
            "range": "stddev: 0.00029325745564394754",
            "extra": "mean: 2.840473404255306 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 349.43456415085046,
            "unit": "iter/sec",
            "range": "stddev: 0.00019102718970202503",
            "extra": "mean: 2.861766129032105 msec\nrounds: 372"
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
        "date": 1671364009873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.15836178189082,
            "unit": "iter/sec",
            "range": "stddev: 0.000404914185208331",
            "extra": "mean: 8.683694214875976 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.49696340069255,
            "unit": "iter/sec",
            "range": "stddev: 0.000402109365894562",
            "extra": "mean: 7.06728947368425 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.00077168551968,
            "unit": "iter/sec",
            "range": "stddev: 0.00036585655393142163",
            "extra": "mean: 5.128184834123186 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.31099125257964,
            "unit": "iter/sec",
            "range": "stddev: 0.00019317319658234135",
            "extra": "mean: 3.2225735735736265 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.10685151851843,
            "unit": "iter/sec",
            "range": "stddev: 0.00045216313554306267",
            "extra": "mean: 9.082086956521628 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.8758142643168,
            "unit": "iter/sec",
            "range": "stddev: 0.00028574360716076516",
            "extra": "mean: 7.2006778523490045 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.41519871120022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005131149767024468",
            "extra": "mean: 5.766507246376749 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.0386194419276,
            "unit": "iter/sec",
            "range": "stddev: 0.00032170724305659933",
            "extra": "mean: 3.389386792452877 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.60067962135386,
            "unit": "iter/sec",
            "range": "stddev: 0.004433765627660402",
            "extra": "mean: 86.20184615384584 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.521707339770744,
            "unit": "iter/sec",
            "range": "stddev: 0.006297136192808058",
            "extra": "mean: 86.7926923076921 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.68877630452388,
            "unit": "iter/sec",
            "range": "stddev: 0.0004847656613948267",
            "extra": "mean: 6.423070588235735 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.4890294239278,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594492750531355",
            "extra": "mean: 4.301278225806382 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 331.2378122307857,
            "unit": "iter/sec",
            "range": "stddev: 0.00019947272489987585",
            "extra": "mean: 3.0189790026244427 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.9738051655381,
            "unit": "iter/sec",
            "range": "stddev: 0.0003195624438893063",
            "extra": "mean: 3.0032392473121106 msec\nrounds: 372"
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
        "date": 1671374502746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.39641793005393,
            "unit": "iter/sec",
            "range": "stddev: 0.0009962467870682577",
            "extra": "mean: 9.311297520661153 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.59119205136295,
            "unit": "iter/sec",
            "range": "stddev: 0.00013212639078456268",
            "extra": "mean: 7.062586206896575 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.46795469649354,
            "unit": "iter/sec",
            "range": "stddev: 0.0001941544092938822",
            "extra": "mean: 5.334245000000015 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.12558836073254,
            "unit": "iter/sec",
            "range": "stddev: 0.00014902485774631656",
            "extra": "mean: 3.3430774193548536 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.59099251086019,
            "unit": "iter/sec",
            "range": "stddev: 0.00041156270080974723",
            "extra": "mean: 9.747444444444195 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.4700540323109,
            "unit": "iter/sec",
            "range": "stddev: 0.0003683163291420348",
            "extra": "mean: 7.54887591240877 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.15773524980904,
            "unit": "iter/sec",
            "range": "stddev: 0.00016944800971578858",
            "extra": "mean: 5.459774869109944 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.8565279618689,
            "unit": "iter/sec",
            "range": "stddev: 0.00008524356748932219",
            "extra": "mean: 3.323843450479299 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.658000886007972,
            "unit": "iter/sec",
            "range": "stddev: 0.0026649344269597834",
            "extra": "mean: 85.7780000000007 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.923553512449695,
            "unit": "iter/sec",
            "range": "stddev: 0.002776352629453617",
            "extra": "mean: 83.86761538461448 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.74840010022373,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898243759568906",
            "extra": "mean: 6.546713414633894 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.81642789664116,
            "unit": "iter/sec",
            "range": "stddev: 0.000113187271524886",
            "extra": "mean: 4.33244725738411 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.74772618475197,
            "unit": "iter/sec",
            "range": "stddev: 0.00012433002614446588",
            "extra": "mean: 2.917597765363345 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 337.7293209621682,
            "unit": "iter/sec",
            "range": "stddev: 0.00019985258272480294",
            "extra": "mean: 2.9609510869564626 msec\nrounds: 368"
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
        "date": 1671378436623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.63094446914882,
            "unit": "iter/sec",
            "range": "stddev: 0.00019432808539732502",
            "extra": "mean: 8.221592000000015 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.3985907160334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420455579841006",
            "extra": "mean: 7.122578616352172 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.1828644439132,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997095098453441",
            "extra": "mean: 5.020512195122008 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.343782915991,
            "unit": "iter/sec",
            "range": "stddev: 0.00005681660650113802",
            "extra": "mean: 2.973148459383806 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.38878971795535,
            "unit": "iter/sec",
            "range": "stddev: 0.00036524357448177624",
            "extra": "mean: 8.977564102564306 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.84501443200548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735609965240861",
            "extra": "mean: 7.150773333333333 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.14624892367203,
            "unit": "iter/sec",
            "range": "stddev: 0.0002008887552646926",
            "extra": "mean: 4.946913461538373 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.2319813118916,
            "unit": "iter/sec",
            "range": "stddev: 0.00008701168043705536",
            "extra": "mean: 3.0466257309941502 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.616761367476602,
            "unit": "iter/sec",
            "range": "stddev: 0.0028334412240825823",
            "extra": "mean: 79.25964285714342 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.938750726649344,
            "unit": "iter/sec",
            "range": "stddev: 0.0019954141724919886",
            "extra": "mean: 77.28721428571512 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.63280248808664,
            "unit": "iter/sec",
            "range": "stddev: 0.00024136417061604713",
            "extra": "mean: 6.037451428571501 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.39900005106963,
            "unit": "iter/sec",
            "range": "stddev: 0.00025093316884626277",
            "extra": "mean: 4.142519230769155 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 375.7756243746789,
            "unit": "iter/sec",
            "range": "stddev: 0.00016263830773100837",
            "extra": "mean: 2.6611625000000494 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 362.0990801589029,
            "unit": "iter/sec",
            "range": "stddev: 0.00028784490546799105",
            "extra": "mean: 2.7616750629721616 msec\nrounds: 397"
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
        "date": 1671379767189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.39731940699507,
            "unit": "iter/sec",
            "range": "stddev: 0.000512702538022026",
            "extra": "mean: 9.140991803278665 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.10477176331872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006719079904341579",
            "extra": "mean: 7.456856209150397 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.45959254869592,
            "unit": "iter/sec",
            "range": "stddev: 0.000751891705509154",
            "extra": "mean: 5.572285024154686 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.40014214641025,
            "unit": "iter/sec",
            "range": "stddev: 0.00032972274472146154",
            "extra": "mean: 3.4317073170731773 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 82.94437997256956,
            "unit": "iter/sec",
            "range": "stddev: 0.0012353224743625012",
            "extra": "mean: 12.056271929824646 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.21417160615867,
            "unit": "iter/sec",
            "range": "stddev: 0.0008233350766911031",
            "extra": "mean: 8.18235714285697 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.7345999844453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013519549065558",
            "extra": "mean: 5.722965000000109 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.2066998658107,
            "unit": "iter/sec",
            "range": "stddev: 0.0006196814086940037",
            "extra": "mean: 3.7992953846153035 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.428003170113136,
            "unit": "iter/sec",
            "range": "stddev: 0.008995661335030086",
            "extra": "mean: 95.89563636363478 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.394165660322422,
            "unit": "iter/sec",
            "range": "stddev: 0.0042876336321591504",
            "extra": "mean: 96.20781818181841 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.7077068775159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858641097838585",
            "extra": "mean: 6.261438596491319 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.02267613087446,
            "unit": "iter/sec",
            "range": "stddev: 0.00034565485693487336",
            "extra": "mean: 4.586678861788307 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.1865886808251,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666006339758268",
            "extra": "mean: 3.0470471204188696 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.55685304757935,
            "unit": "iter/sec",
            "range": "stddev: 0.00029569547363372844",
            "extra": "mean: 3.119571428571433 msec\nrounds: 371"
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
        "date": 1671419825041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.75461672797547,
            "unit": "iter/sec",
            "range": "stddev: 0.0007069919266920512",
            "extra": "mean: 9.280344827586195 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 116.18869672395044,
            "unit": "iter/sec",
            "range": "stddev: 0.0016832836061276026",
            "extra": "mean: 8.60668918918914 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.6412585144357,
            "unit": "iter/sec",
            "range": "stddev: 0.0012073366726086487",
            "extra": "mean: 5.5053571428570915 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.3525046977509,
            "unit": "iter/sec",
            "range": "stddev: 0.00024426804225628426",
            "extra": "mean: 3.3743598726114947 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 88.98691310219887,
            "unit": "iter/sec",
            "range": "stddev: 0.0014462392137334654",
            "extra": "mean: 11.237607476635686 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.62900364804699,
            "unit": "iter/sec",
            "range": "stddev: 0.0015346547711930516",
            "extra": "mean: 8.723795620437967 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.34808312432722,
            "unit": "iter/sec",
            "range": "stddev: 0.00044183005083377934",
            "extra": "mean: 5.670603174603206 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.93338475761465,
            "unit": "iter/sec",
            "range": "stddev: 0.00031213306748552653",
            "extra": "mean: 3.3905961538461673 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.431709273959498,
            "unit": "iter/sec",
            "range": "stddev: 0.0018719196303705556",
            "extra": "mean: 80.43946153846147 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.707724756794413,
            "unit": "iter/sec",
            "range": "stddev: 0.005863605622604919",
            "extra": "mean: 85.4136923076932 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.93133910873638,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415269094350256",
            "extra": "mean: 6.581920529801332 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.00154645438326,
            "unit": "iter/sec",
            "range": "stddev: 0.00035369104353561386",
            "extra": "mean: 4.545422594142298 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 308.0488770884699,
            "unit": "iter/sec",
            "range": "stddev: 0.0009858783182114588",
            "extra": "mean: 3.246238095238392 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 340.40969985451324,
            "unit": "iter/sec",
            "range": "stddev: 0.00016718047459126351",
            "extra": "mean: 2.9376366197184955 msec\nrounds: 355"
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
        "date": 1671424306684,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.04442253581888,
            "unit": "iter/sec",
            "range": "stddev: 0.00067624242944891",
            "extra": "mean: 9.3419159663866 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.76733401703288,
            "unit": "iter/sec",
            "range": "stddev: 0.0005642071549055233",
            "extra": "mean: 7.475666666666676 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.788848234827,
            "unit": "iter/sec",
            "range": "stddev: 0.001208374552278053",
            "extra": "mean: 5.889668316831663 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.0594158657794,
            "unit": "iter/sec",
            "range": "stddev: 0.0002710062947087424",
            "extra": "mean: 3.483599369085217 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.99018583224418,
            "unit": "iter/sec",
            "range": "stddev: 0.000779619232039554",
            "extra": "mean: 10.753823008849734 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.59520029873272,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084895778585273",
            "extra": "mean: 8.090929078014153 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.8238718699678,
            "unit": "iter/sec",
            "range": "stddev: 0.00046426556259704366",
            "extra": "mean: 5.752949748743767 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 270.8652753248485,
            "unit": "iter/sec",
            "range": "stddev: 0.00036362885337953247",
            "extra": "mean: 3.691872274143302 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.91975984434631,
            "unit": "iter/sec",
            "range": "stddev: 0.0033502088090306844",
            "extra": "mean: 83.89430769230745 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.27100280929732,
            "unit": "iter/sec",
            "range": "stddev: 0.0012776312688297245",
            "extra": "mean: 88.72325000000103 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.37612395463822,
            "unit": "iter/sec",
            "range": "stddev: 0.0005578582417662886",
            "extra": "mean: 7.123718562874299 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 207.74815474512383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005625216334113948",
            "extra": "mean: 4.813520491803413 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 320.4268702776649,
            "unit": "iter/sec",
            "range": "stddev: 0.00034042140361561997",
            "extra": "mean: 3.1208368983957344 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 306.5312027048189,
            "unit": "iter/sec",
            "range": "stddev: 0.00037698694223231214",
            "extra": "mean: 3.2623106267030586 msec\nrounds: 367"
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
        "date": 1671429441202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.42137330349559,
            "unit": "iter/sec",
            "range": "stddev: 0.0006838658352763931",
            "extra": "mean: 9.056217741935503 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.44605618849837,
            "unit": "iter/sec",
            "range": "stddev: 0.0004601940903223037",
            "extra": "mean: 6.875401273885337 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.5925547874541,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686259359737313",
            "extra": "mean: 5.060919431279572 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.89753518962596,
            "unit": "iter/sec",
            "range": "stddev: 0.00012225714881627337",
            "extra": "mean: 3.145667673715997 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.50848615898431,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424653581898182",
            "extra": "mean: 9.30159130434776 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.97555361932592,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254279682638723",
            "extra": "mean: 7.464048275862099 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.36341729461822,
            "unit": "iter/sec",
            "range": "stddev: 0.00017683277515272207",
            "extra": "mean: 5.066795121951246 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.00118803180806,
            "unit": "iter/sec",
            "range": "stddev: 0.00012975900472322305",
            "extra": "mean: 3.1545623100303946 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.61521083898917,
            "unit": "iter/sec",
            "range": "stddev: 0.0005545165369438952",
            "extra": "mean: 79.2693846153845 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.671701556085024,
            "unit": "iter/sec",
            "range": "stddev: 0.004363073706305995",
            "extra": "mean: 78.91599999999954 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.71911937202367,
            "unit": "iter/sec",
            "range": "stddev: 0.0009723903530793936",
            "extra": "mean: 6.222035087718815 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.42130314250645,
            "unit": "iter/sec",
            "range": "stddev: 0.00006796086277715486",
            "extra": "mean: 4.009280632411145 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 354.1176933487335,
            "unit": "iter/sec",
            "range": "stddev: 0.0001247571995989191",
            "extra": "mean: 2.8239198966407044 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 366.7477004442786,
            "unit": "iter/sec",
            "range": "stddev: 0.00010917347036463607",
            "extra": "mean: 2.7266701298702043 msec\nrounds: 385"
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
        "date": 1671438322685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.76512596204243,
            "unit": "iter/sec",
            "range": "stddev: 0.002355502925792149",
            "extra": "mean: 10.664945945945995 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.70805611303612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006472037192521244",
            "extra": "mean: 7.769521428571365 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.92071346034234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007680950693327182",
            "extra": "mean: 5.684378947368407 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.75748233622,
            "unit": "iter/sec",
            "range": "stddev: 0.00018505350578925043",
            "extra": "mean: 3.6132717770034697 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.94335350879379,
            "unit": "iter/sec",
            "range": "stddev: 0.0011915566511084762",
            "extra": "mean: 10.532596153846393 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.50128887172733,
            "unit": "iter/sec",
            "range": "stddev: 0.00045935511393959435",
            "extra": "mean: 7.843057971014316 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.26093647544081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006666809337929949",
            "extra": "mean: 6.125163934426096 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 270.4457957376077,
            "unit": "iter/sec",
            "range": "stddev: 0.0006905144153281466",
            "extra": "mean: 3.697598615917185 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 7.916095148585088,
            "unit": "iter/sec",
            "range": "stddev: 0.04066738056097247",
            "extra": "mean: 126.32490909090937 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.704250479461114,
            "unit": "iter/sec",
            "range": "stddev: 0.004632864886936274",
            "extra": "mean: 93.42083333333424 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.95128337620307,
            "unit": "iter/sec",
            "range": "stddev: 0.0005875524152739193",
            "extra": "mean: 6.624653846153696 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.08724677440463,
            "unit": "iter/sec",
            "range": "stddev: 0.0009843054984151594",
            "extra": "mean: 4.692913419913391 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 309.8410059990537,
            "unit": "iter/sec",
            "range": "stddev: 0.000262872696529875",
            "extra": "mean: 3.2274617647060375 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 301.2433292992342,
            "unit": "iter/sec",
            "range": "stddev: 0.0008475445309129145",
            "extra": "mean: 3.3195755813954286 msec\nrounds: 344"
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
        "date": 1671466228562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.26832059941151,
            "unit": "iter/sec",
            "range": "stddev: 0.00036969026433735603",
            "extra": "mean: 8.600795081967163 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.40495038868573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002586908961590337",
            "extra": "mean: 6.830370129870148 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.3229542972437,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545958941254048",
            "extra": "mean: 5.119725961538517 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.17836755724437,
            "unit": "iter/sec",
            "range": "stddev: 0.00027773559686621296",
            "extra": "mean: 3.3424876543210007 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.5579463010109,
            "unit": "iter/sec",
            "range": "stddev: 0.0013631972843414838",
            "extra": "mean: 10.146315315315606 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.58532449356824,
            "unit": "iter/sec",
            "range": "stddev: 0.0011952271604323372",
            "extra": "mean: 8.15758333333341 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.7405206635251,
            "unit": "iter/sec",
            "range": "stddev: 0.0005906374575730185",
            "extra": "mean: 5.502350253807201 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.1325466644517,
            "unit": "iter/sec",
            "range": "stddev: 0.00016329620259911801",
            "extra": "mean: 3.3768662420382376 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.921200862300172,
            "unit": "iter/sec",
            "range": "stddev: 0.0013367345444866801",
            "extra": "mean: 83.88416666666683 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.012611393869625,
            "unit": "iter/sec",
            "range": "stddev: 0.0015257304723822254",
            "extra": "mean: 83.2458461538453 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.65661783004015,
            "unit": "iter/sec",
            "range": "stddev: 0.0002156556878074347",
            "extra": "mean: 6.185951515151476 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.56338134096575,
            "unit": "iter/sec",
            "range": "stddev: 0.0007674948639905761",
            "extra": "mean: 4.413775933609737 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.31966468368597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113952894105454",
            "extra": "mean: 2.8791920000001405 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.04779984777434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002415870268395787",
            "extra": "mean: 2.9935835543766496 msec\nrounds: 377"
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
        "date": 1671540737258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.51356502068475,
            "unit": "iter/sec",
            "range": "stddev: 0.005219926283077023",
            "extra": "mean: 10.580491803278663 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.99789308345842,
            "unit": "iter/sec",
            "range": "stddev: 0.00031555039351143817",
            "extra": "mean: 6.944546052631611 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.59104296763243,
            "unit": "iter/sec",
            "range": "stddev: 0.00021351692137167234",
            "extra": "mean: 4.936052380952341 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.9422526347174,
            "unit": "iter/sec",
            "range": "stddev: 0.00035736749005723593",
            "extra": "mean: 3.311891566265077 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.98838700055303,
            "unit": "iter/sec",
            "range": "stddev: 0.0004242107867199574",
            "extra": "mean: 9.175289473684254 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.3067413010815,
            "unit": "iter/sec",
            "range": "stddev: 0.0003198551306207112",
            "extra": "mean: 7.230305555555594 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.17792317270533,
            "unit": "iter/sec",
            "range": "stddev: 0.00016915565729259174",
            "extra": "mean: 5.045970731707254 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.90980517097773,
            "unit": "iter/sec",
            "range": "stddev: 0.00017342912826596486",
            "extra": "mean: 3.195809090909081 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.777090872635908,
            "unit": "iter/sec",
            "range": "stddev: 0.0013914677180074202",
            "extra": "mean: 78.26507692307743 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.620697555661959,
            "unit": "iter/sec",
            "range": "stddev: 0.0018156048331781124",
            "extra": "mean: 79.23492307692416 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.0702896466524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005785030938198001",
            "extra": "mean: 6.286529069767396 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.0335772603794,
            "unit": "iter/sec",
            "range": "stddev: 0.00026720902721073775",
            "extra": "mean: 4.291227091633464 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 348.6181238845131,
            "unit": "iter/sec",
            "range": "stddev: 0.0002152724890029378",
            "extra": "mean: 2.868468193384204 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 335.7649502469682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116407537945232",
            "extra": "mean: 2.9782739361701123 msec\nrounds: 376"
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
        "date": 1671541673335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.51198886646424,
            "unit": "iter/sec",
            "range": "stddev: 0.00045092597179296947",
            "extra": "mean: 8.229640624999986 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.73558248490605,
            "unit": "iter/sec",
            "range": "stddev: 0.00032163019410656193",
            "extra": "mean: 6.50467499999996 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.1558192261612,
            "unit": "iter/sec",
            "range": "stddev: 0.0002752499717427701",
            "extra": "mean: 4.781124444444432 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.56629977979094,
            "unit": "iter/sec",
            "range": "stddev: 0.00039436872270423356",
            "extra": "mean: 3.2619371428572155 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.32219508181238,
            "unit": "iter/sec",
            "range": "stddev: 0.0023119921062393655",
            "extra": "mean: 9.4053739130435 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.65267892266776,
            "unit": "iter/sec",
            "range": "stddev: 0.001193284230652575",
            "extra": "mean: 8.427959731543465 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.06771843977964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783105508316891",
            "extra": "mean: 5.317233644859715 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.2933367454949,
            "unit": "iter/sec",
            "range": "stddev: 0.00015763604065406907",
            "extra": "mean: 3.1516577380952473 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.512524298068085,
            "unit": "iter/sec",
            "range": "stddev: 0.005377925830987229",
            "extra": "mean: 86.86192307692326 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.33460949100761,
            "unit": "iter/sec",
            "range": "stddev: 0.0033914890875187133",
            "extra": "mean: 81.07269230769222 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.64476874348898,
            "unit": "iter/sec",
            "range": "stddev: 0.00039097312882422367",
            "extra": "mean: 5.929623595505733 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.6242116150392,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490676163725096",
            "extra": "mean: 4.054751937984583 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 377.686080858648,
            "unit": "iter/sec",
            "range": "stddev: 0.00011565110247626972",
            "extra": "mean: 2.6477014925372853 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 363.2856513232088,
            "unit": "iter/sec",
            "range": "stddev: 0.00021622278502275087",
            "extra": "mean: 2.7526548223351592 msec\nrounds: 394"
          }
        ]
      }
    ]
  }
}