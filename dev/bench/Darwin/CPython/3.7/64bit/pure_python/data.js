window.BENCHMARK_DATA = {
  "lastUpdate": 1643758882302,
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
      }
    ]
  }
}