window.BENCHMARK_DATA = {
  "lastUpdate": 1646435627060,
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
        "date": 1642086089876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.04215524172139,
            "unit": "iter/sec",
            "range": "stddev: 0.00022873069562010531",
            "extra": "mean: 7.871402985074627 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.2068627978169,
            "unit": "iter/sec",
            "range": "stddev: 0.00034202096914875166",
            "extra": "mean: 6.570005988023971 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.81273810715197,
            "unit": "iter/sec",
            "range": "stddev: 0.00019962233933646512",
            "extra": "mean: 4.72115137614679 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.8829725121153,
            "unit": "iter/sec",
            "range": "stddev: 0.0001504360105784849",
            "extra": "mean: 3.078031428571433 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.65347172607318,
            "unit": "iter/sec",
            "range": "stddev: 0.00042560992969964244",
            "extra": "mean: 8.721933884297648 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.11340246341913,
            "unit": "iter/sec",
            "range": "stddev: 0.0005978080506057692",
            "extra": "mean: 7.188380000000052 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.10982879372725,
            "unit": "iter/sec",
            "range": "stddev: 0.00031785768721579106",
            "extra": "mean: 5.022353773584802 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.63587732456887,
            "unit": "iter/sec",
            "range": "stddev: 0.00020592712375697554",
            "extra": "mean: 3.158201807229021 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.435391123429001,
            "unit": "iter/sec",
            "range": "stddev: 0.005963801232675476",
            "extra": "mean: 74.43028571428582 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.787816533798107,
            "unit": "iter/sec",
            "range": "stddev: 0.001996472718142561",
            "extra": "mean: 72.52779999999983 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.41393182297827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005265218834891122",
            "extra": "mean: 6.0454400000005695 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.09167361723377,
            "unit": "iter/sec",
            "range": "stddev: 0.0003213213807470934",
            "extra": "mean: 4.271830708661225 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.48118396504145,
            "unit": "iter/sec",
            "range": "stddev: 0.000183693914704484",
            "extra": "mean: 2.1716413934427283 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.464901434979,
            "unit": "iter/sec",
            "range": "stddev: 0.00015304866543749398",
            "extra": "mean: 2.275494577006521 msec\nrounds: 461"
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
        "date": 1642435407505,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.76895743698356,
            "unit": "iter/sec",
            "range": "stddev: 0.0007394631624725829",
            "extra": "mean: 8.713157480314939 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.39912166912765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218110690669424",
            "extra": "mean: 6.648975000000079 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.48414329034708,
            "unit": "iter/sec",
            "range": "stddev: 0.000389493814957607",
            "extra": "mean: 4.96316972477064 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.14819491735153,
            "unit": "iter/sec",
            "range": "stddev: 0.00015699530593924055",
            "extra": "mean: 3.0850086956522196 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.31249607050948,
            "unit": "iter/sec",
            "range": "stddev: 0.0003993578637779814",
            "extra": "mean: 8.747949999999882 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.43692714819943,
            "unit": "iter/sec",
            "range": "stddev: 0.00037150168254104153",
            "extra": "mean: 7.020651315789363 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.16088048234295,
            "unit": "iter/sec",
            "range": "stddev: 0.00026244091810297224",
            "extra": "mean: 4.995981220657222 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.09755489330445,
            "unit": "iter/sec",
            "range": "stddev: 0.00013328610251946355",
            "extra": "mean: 3.183724242424266 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.939025765297137,
            "unit": "iter/sec",
            "range": "stddev: 0.003444383582549853",
            "extra": "mean: 77.28557142857159 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.602666122560034,
            "unit": "iter/sec",
            "range": "stddev: 0.0017150060327316644",
            "extra": "mean: 73.51499999999993 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.5635108559591,
            "unit": "iter/sec",
            "range": "stddev: 0.000343764535655095",
            "extra": "mean: 6.003715909091161 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.6292486219025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472975957069187",
            "extra": "mean: 4.173113281249918 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.2495684140456,
            "unit": "iter/sec",
            "range": "stddev: 0.00010298945198403432",
            "extra": "mean: 2.1085944333995594 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.38060249352577,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389020460400128",
            "extra": "mean: 2.2656183673469616 msec\nrounds: 490"
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
        "date": 1643747054249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.26764631922819,
            "unit": "iter/sec",
            "range": "stddev: 0.0010196133492776799",
            "extra": "mean: 8.600844961240274 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.02034106319567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006344593382678722",
            "extra": "mean: 6.578067073170785 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.93028127742681,
            "unit": "iter/sec",
            "range": "stddev: 0.0005310012304909005",
            "extra": "mean: 5.237513888888967 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.1240444036775,
            "unit": "iter/sec",
            "range": "stddev: 0.00033935262267814246",
            "extra": "mean: 3.298979472140706 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.6538772372833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008367785254704113",
            "extra": "mean: 9.203537190082544 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.25272899585005,
            "unit": "iter/sec",
            "range": "stddev: 0.000812481070991686",
            "extra": "mean: 7.4486381578948135 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.7372823118672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651168286987044",
            "extra": "mean: 5.594803652967959 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.5631479303806,
            "unit": "iter/sec",
            "range": "stddev: 0.00035330017911334267",
            "extra": "mean: 3.5898502994011374 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.550056813452452,
            "unit": "iter/sec",
            "range": "stddev: 0.002806023979125677",
            "extra": "mean: 73.80042857142881 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.312215043253703,
            "unit": "iter/sec",
            "range": "stddev: 0.004779694687708011",
            "extra": "mean: 81.2201538461542 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.97221383031263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315752922003193",
            "extra": "mean: 6.452769662921338 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.35648055391744,
            "unit": "iter/sec",
            "range": "stddev: 0.00026509000075753254",
            "extra": "mean: 4.213072243345982 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 415.40638427687276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026099873631427515",
            "extra": "mean: 2.4072812499999747 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 412.90203677661714,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534634520475408",
            "extra": "mean: 2.421881974249032 msec\nrounds: 466"
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
        "date": 1643756546092,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.90119186081868,
            "unit": "iter/sec",
            "range": "stddev: 0.0007914931099790832",
            "extra": "mean: 8.271217054263609 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.5756397797207,
            "unit": "iter/sec",
            "range": "stddev: 0.0025069651182843566",
            "extra": "mean: 7.717500000000044 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.0567826681977,
            "unit": "iter/sec",
            "range": "stddev: 0.0005184464680587848",
            "extra": "mean: 4.973719298245667 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.0918496573405,
            "unit": "iter/sec",
            "range": "stddev: 0.00019239455746800817",
            "extra": "mean: 3.029459833794967 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.01549019269129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993101702506948",
            "extra": "mean: 9.17300833333356 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.5198476424857,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481420950060987",
            "extra": "mean: 7.271677631578888 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.9599134956724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941426769930652",
            "extra": "mean: 5.406576923076889 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.5826584914465,
            "unit": "iter/sec",
            "range": "stddev: 0.00023895743269097895",
            "extra": "mean: 3.2831810089019977 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.206537990964883,
            "unit": "iter/sec",
            "range": "stddev: 0.002039001319057721",
            "extra": "mean: 75.72007142857119 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.801343629027325,
            "unit": "iter/sec",
            "range": "stddev: 0.003736459806514971",
            "extra": "mean: 78.11679999999986 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.8826093652895,
            "unit": "iter/sec",
            "range": "stddev: 0.000678662964906786",
            "extra": "mean: 6.4565027932962265 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.06819904199622,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021675190332483",
            "extra": "mean: 4.309078124999949 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 431.4751598537449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003044825938077667",
            "extra": "mean: 2.3176305220883755 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.0598768145316,
            "unit": "iter/sec",
            "range": "stddev: 0.00015576852847042457",
            "extra": "mean: 2.251948559670626 msec\nrounds: 486"
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
        "date": 1643756918652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.00152211422777,
            "unit": "iter/sec",
            "range": "stddev: 0.0004179769727082258",
            "extra": "mean: 8.19661904761908 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.7011444256673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002833294836484721",
            "extra": "mean: 6.548739393939417 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.40266201928236,
            "unit": "iter/sec",
            "range": "stddev: 0.000276447003001474",
            "extra": "mean: 4.775488479262586 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.6587249944273,
            "unit": "iter/sec",
            "range": "stddev: 0.0009785411795723957",
            "extra": "mean: 3.2823612716763377 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.26879241531262,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479445880815584",
            "extra": "mean: 8.675375000000063 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.33185882284727,
            "unit": "iter/sec",
            "range": "stddev: 0.00043220617909497483",
            "extra": "mean: 7.281631578947468 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.66796282673346,
            "unit": "iter/sec",
            "range": "stddev: 0.000340088587927037",
            "extra": "mean: 5.3285599999999 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.28452959109836,
            "unit": "iter/sec",
            "range": "stddev: 0.00015861383608334266",
            "extra": "mean: 3.3081415094338587 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.4167471671497,
            "unit": "iter/sec",
            "range": "stddev: 0.003504222034337528",
            "extra": "mean: 74.53371428571413 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.31356585793079,
            "unit": "iter/sec",
            "range": "stddev: 0.001747462318605939",
            "extra": "mean: 75.11135714285798 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.4710970442015,
            "unit": "iter/sec",
            "range": "stddev: 0.0014496063469874047",
            "extra": "mean: 6.735317647058866 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.35947393173456,
            "unit": "iter/sec",
            "range": "stddev: 0.00032679223848996114",
            "extra": "mean: 4.143197628458692 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 452.3518280099918,
            "unit": "iter/sec",
            "range": "stddev: 0.00011248278156657924",
            "extra": "mean: 2.2106686390530323 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.28012442231164,
            "unit": "iter/sec",
            "range": "stddev: 0.00010592104702040025",
            "extra": "mean: 2.281645788337037 msec\nrounds: 463"
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
        "date": 1643758759207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.90958068181769,
            "unit": "iter/sec",
            "range": "stddev: 0.0006294583488448898",
            "extra": "mean: 8.339617187499961 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.0756602243012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182650528239397",
            "extra": "mean: 6.753304347826143 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.9034752519397,
            "unit": "iter/sec",
            "range": "stddev: 0.000433165137510244",
            "extra": "mean: 4.9528617511520165 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.445084639777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002996389286516104",
            "extra": "mean: 3.1701238938053242 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.60804931644053,
            "unit": "iter/sec",
            "range": "stddev: 0.000733958746045431",
            "extra": "mean: 9.040933333333475 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.58185894203982,
            "unit": "iter/sec",
            "range": "stddev: 0.000596744203927781",
            "extra": "mean: 7.113293333333198 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.26975943897418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876698924359435",
            "extra": "mean: 5.873033492822938 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.8148381057195,
            "unit": "iter/sec",
            "range": "stddev: 0.0003391685575532258",
            "extra": "mean: 3.302348082595864 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.87834745045517,
            "unit": "iter/sec",
            "range": "stddev: 0.003874951045419362",
            "extra": "mean: 77.64971428571421 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.173680867580714,
            "unit": "iter/sec",
            "range": "stddev: 0.003058128373426211",
            "extra": "mean: 75.90892857143012 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.56109744884702,
            "unit": "iter/sec",
            "range": "stddev: 0.0007786708583742374",
            "extra": "mean: 6.346744318182062 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.57484333901328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896148903512505",
            "extra": "mean: 4.226992125984391 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 407.7344473071785,
            "unit": "iter/sec",
            "range": "stddev: 0.0004116821285256128",
            "extra": "mean: 2.4525766871167036 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.448993264914,
            "unit": "iter/sec",
            "range": "stddev: 0.00036992041296931714",
            "extra": "mean: 2.4186780383795936 msec\nrounds: 469"
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
        "date": 1643759238279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.61133632099425,
            "unit": "iter/sec",
            "range": "stddev: 0.00022307916548752654",
            "extra": "mean: 8.155852713178314 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.31464907966213,
            "unit": "iter/sec",
            "range": "stddev: 0.00030514183361972635",
            "extra": "mean: 6.565356687898021 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.19533640026543,
            "unit": "iter/sec",
            "range": "stddev: 0.00032370860711451776",
            "extra": "mean: 4.8972714932127115 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.6800213175057,
            "unit": "iter/sec",
            "range": "stddev: 0.00016891084216687233",
            "extra": "mean: 3.2291395348837497 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.37879104476123,
            "unit": "iter/sec",
            "range": "stddev: 0.00039760217755659675",
            "extra": "mean: 8.819991735537261 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.3235091352624,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351973517523932",
            "extra": "mean: 7.282074324324243 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.42140190792358,
            "unit": "iter/sec",
            "range": "stddev: 0.00035456244526413047",
            "extra": "mean: 5.143466666666626 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.25170853610126,
            "unit": "iter/sec",
            "range": "stddev: 0.00036543720835036173",
            "extra": "mean: 3.2759849397590934 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.854637147053177,
            "unit": "iter/sec",
            "range": "stddev: 0.0014261446684634492",
            "extra": "mean: 72.1779999999997 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.587378490015087,
            "unit": "iter/sec",
            "range": "stddev: 0.002133908924182685",
            "extra": "mean: 73.597714285715 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.83416437223997,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531727032918052",
            "extra": "mean: 6.066703488372293 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.57245249250855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002533837390562089",
            "extra": "mean: 4.413599221790056 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.35591560025887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000447817067870511",
            "extra": "mean: 2.1260495867768983 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.9271075943764,
            "unit": "iter/sec",
            "range": "stddev: 0.00012838793674884184",
            "extra": "mean: 2.2834850427350926 msec\nrounds: 468"
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
        "date": 1643759838754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.90159268455146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005276666328380097",
            "extra": "mean: 8.006303030303037 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.30275840426233,
            "unit": "iter/sec",
            "range": "stddev: 0.00046036088454788805",
            "extra": "mean: 6.788739130434804 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.77674648577698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632285194185849",
            "extra": "mean: 5.056206140350856 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.0971107927863,
            "unit": "iter/sec",
            "range": "stddev: 0.00024141689466434472",
            "extra": "mean: 3.2457298850574414 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.00316029770889,
            "unit": "iter/sec",
            "range": "stddev: 0.0005782178492690978",
            "extra": "mean: 9.615092436975006 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.26763591555883,
            "unit": "iter/sec",
            "range": "stddev: 0.0032964530517178335",
            "extra": "mean: 8.178779220779452 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.27663228554314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067986642377277",
            "extra": "mean: 5.094850000000003 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.1557674273935,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583622584059005",
            "extra": "mean: 3.2451120689656285 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.15564413843098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718803718274133",
            "extra": "mean: 70.64319999999948 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.352573756279448,
            "unit": "iter/sec",
            "range": "stddev: 0.005335505577142443",
            "extra": "mean: 74.89192857142767 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.39170342013745,
            "unit": "iter/sec",
            "range": "stddev: 0.0007114056337531321",
            "extra": "mean: 6.394201086956363 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.77409244692697,
            "unit": "iter/sec",
            "range": "stddev: 0.000372789835324195",
            "extra": "mean: 4.188059055118273 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.63842666181847,
            "unit": "iter/sec",
            "range": "stddev: 0.00019965361283507904",
            "extra": "mean: 2.2439716599189725 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.23060899763647,
            "unit": "iter/sec",
            "range": "stddev: 0.000163449626170904",
            "extra": "mean: 2.2409937369520447 msec\nrounds: 479"
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
        "date": 1643760309095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.63655268986983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005785177531910881",
            "extra": "mean: 8.289361538461572 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.1975050953074,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343250866580989",
            "extra": "mean: 6.570409937888215 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.2558713416186,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993658198550618",
            "extra": "mean: 4.801785388127765 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.61474193118585,
            "unit": "iter/sec",
            "range": "stddev: 0.00023066605002494673",
            "extra": "mean: 3.099672364672354 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.60716293232798,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162622753624144",
            "extra": "mean: 8.880429752066098 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.8457684750848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005616746848983566",
            "extra": "mean: 7.3074966887417325 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.40681851974625,
            "unit": "iter/sec",
            "range": "stddev: 0.00019617344515059318",
            "extra": "mean: 4.940545023696633 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7326287906601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000951720147842033",
            "extra": "mean: 3.1178617647058693 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.29229317119209,
            "unit": "iter/sec",
            "range": "stddev: 0.006014428129073419",
            "extra": "mean: 81.351785714286 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.417685851721142,
            "unit": "iter/sec",
            "range": "stddev: 0.002353320722527401",
            "extra": "mean: 74.52850000000007 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.29793528104238,
            "unit": "iter/sec",
            "range": "stddev: 0.00022731329732884222",
            "extra": "mean: 5.872061797752872 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.58747455682453,
            "unit": "iter/sec",
            "range": "stddev: 0.00040644539668888504",
            "extra": "mean: 4.43287022900779 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.91345046248443,
            "unit": "iter/sec",
            "range": "stddev: 0.00014265714134247733",
            "extra": "mean: 2.1417245508979996 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.2611565289342,
            "unit": "iter/sec",
            "range": "stddev: 0.00013519615274462885",
            "extra": "mean: 2.2408403361343483 msec\nrounds: 476"
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
        "date": 1643761428670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.48324976550828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006511256080149093",
            "extra": "mean: 8.033209302325583 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.54889496961778,
            "unit": "iter/sec",
            "range": "stddev: 0.0005552483710215435",
            "extra": "mean: 7.270142011834286 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.8077742593487,
            "unit": "iter/sec",
            "range": "stddev: 0.00039629774258948604",
            "extra": "mean: 4.979886877828111 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.4459116877679,
            "unit": "iter/sec",
            "range": "stddev: 0.0001541982929221139",
            "extra": "mean: 3.1109432835821424 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.20448144698919,
            "unit": "iter/sec",
            "range": "stddev: 0.0006376391672122881",
            "extra": "mean: 8.912299999999984 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.30903551995348,
            "unit": "iter/sec",
            "range": "stddev: 0.00034729952640175294",
            "extra": "mean: 7.076688311688288 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.56936145705728,
            "unit": "iter/sec",
            "range": "stddev: 0.00027829926001909596",
            "extra": "mean: 4.96107142857146 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.50416487046647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002739856984782476",
            "extra": "mean: 3.3840470588235116 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.137330023851527,
            "unit": "iter/sec",
            "range": "stddev: 0.0010090385697110046",
            "extra": "mean: 70.73471428571513 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.820464791444596,
            "unit": "iter/sec",
            "range": "stddev: 0.0012282616558526329",
            "extra": "mean: 72.35646666666658 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.97297597124407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005329331379076026",
            "extra": "mean: 6.330196629213535 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.30490409108955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502150947567414",
            "extra": "mean: 4.110069230769042 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.5758005548373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000963957974407163",
            "extra": "mean: 2.1295816326531916 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.94162354906985,
            "unit": "iter/sec",
            "range": "stddev: 0.00014549096602525777",
            "extra": "mean: 2.315127659574575 msec\nrounds: 470"
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
        "date": 1643775648001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.86772679670513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793847395356327",
            "extra": "mean: 8.008474452554756 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.3744651530597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005545588251017495",
            "extra": "mean: 6.83179268292682 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.1577279791937,
            "unit": "iter/sec",
            "range": "stddev: 0.00033962339041992203",
            "extra": "mean: 4.9960599078340335 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.8127803549283,
            "unit": "iter/sec",
            "range": "stddev: 0.00007010181827088521",
            "extra": "mean: 3.041244318181843 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.8760004841263,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298481474063799",
            "extra": "mean: 9.269902439024404 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.12438362135387,
            "unit": "iter/sec",
            "range": "stddev: 0.00046800622786004326",
            "extra": "mean: 7.292649006622581 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.22043136169123,
            "unit": "iter/sec",
            "range": "stddev: 0.00019683097128552862",
            "extra": "mean: 4.994495283019019 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.32723024094486,
            "unit": "iter/sec",
            "range": "stddev: 0.00021699217547754788",
            "extra": "mean: 3.3520238805969775 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.109473467362175,
            "unit": "iter/sec",
            "range": "stddev: 0.0019372457224129571",
            "extra": "mean: 76.28071428571381 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.59865185003361,
            "unit": "iter/sec",
            "range": "stddev: 0.012041741300073527",
            "extra": "mean: 86.21691666666435 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.76915131557743,
            "unit": "iter/sec",
            "range": "stddev: 0.0009340371637070214",
            "extra": "mean: 6.588954285714326 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.1217882524529,
            "unit": "iter/sec",
            "range": "stddev: 0.0003101532425236156",
            "extra": "mean: 4.164553359683656 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.9191498077643,
            "unit": "iter/sec",
            "range": "stddev: 0.00012905303216886443",
            "extra": "mean: 2.128025641025871 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.8039801661371,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366073241894266",
            "extra": "mean: 2.2431383399209035 msec\nrounds: 506"
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
        "date": 1643776095815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.77535721521679,
            "unit": "iter/sec",
            "range": "stddev: 0.001079073818596143",
            "extra": "mean: 8.637416666666663 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.32940148748978,
            "unit": "iter/sec",
            "range": "stddev: 0.0007125580307525706",
            "extra": "mean: 7.389377245508935 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.63742146830353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002567549359066125",
            "extra": "mean: 4.839394495412786 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.60689012566434,
            "unit": "iter/sec",
            "range": "stddev: 0.001096247206180072",
            "extra": "mean: 3.4529565217391287 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.74411741091362,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758804237947564",
            "extra": "mean: 9.029824999999972 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.52812165774074,
            "unit": "iter/sec",
            "range": "stddev: 0.00071866160313379",
            "extra": "mean: 7.116013422818825 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.8653840181506,
            "unit": "iter/sec",
            "range": "stddev: 0.0004400975455614496",
            "extra": "mean: 5.158218446601975 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.327638862299,
            "unit": "iter/sec",
            "range": "stddev: 0.0006069943411991843",
            "extra": "mean: 3.5928878787878635 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.892540133411089,
            "unit": "iter/sec",
            "range": "stddev: 0.0020900008158510545",
            "extra": "mean: 71.98107692307715 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.976239578457555,
            "unit": "iter/sec",
            "range": "stddev: 0.0034519741166754293",
            "extra": "mean: 77.06392857142878 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.36936154998597,
            "unit": "iter/sec",
            "range": "stddev: 0.00031995111515748355",
            "extra": "mean: 6.047069364162306 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.328150605613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005437732410623863",
            "extra": "mean: 4.304256704980805 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.5130980151788,
            "unit": "iter/sec",
            "range": "stddev: 0.00016778790251561335",
            "extra": "mean: 2.138977505112665 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.0566945373891,
            "unit": "iter/sec",
            "range": "stddev: 0.00017766490285644758",
            "extra": "mean: 2.2880326797384236 msec\nrounds: 459"
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
        "date": 1643782483800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.94213305279476,
            "unit": "iter/sec",
            "range": "stddev: 0.0010831236071199692",
            "extra": "mean: 9.264223076923054 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.30627026854944,
            "unit": "iter/sec",
            "range": "stddev: 0.0008552427986327837",
            "extra": "mean: 6.978061728395035 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.0897617293258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573469028702501",
            "extra": "mean: 5.07383027522939 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.34627447419604,
            "unit": "iter/sec",
            "range": "stddev: 0.000323733240624519",
            "extra": "mean: 3.253659090909063 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.6591403955948,
            "unit": "iter/sec",
            "range": "stddev: 0.0008675927641537119",
            "extra": "mean: 9.288574999999888 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.26160286954706,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879715368641457",
            "extra": "mean: 7.560773333333373 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.2109054862084,
            "unit": "iter/sec",
            "range": "stddev: 0.00063538893493588",
            "extra": "mean: 5.25732211538474 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.39212380819066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311073504507528",
            "extra": "mean: 3.328982089552154 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.800491538875061,
            "unit": "iter/sec",
            "range": "stddev: 0.0024057172180740253",
            "extra": "mean: 78.12200000000018 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.368307371762153,
            "unit": "iter/sec",
            "range": "stddev: 0.0007750661687462244",
            "extra": "mean: 74.80378571428555 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.91830866229552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003272257380409835",
            "extra": "mean: 5.99095454545476 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.71605816950142,
            "unit": "iter/sec",
            "range": "stddev: 0.00014846420975337006",
            "extra": "mean: 4.103135458167113 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.9828225789566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018009419416683444",
            "extra": "mean: 2.2027265135699716 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 416.57391508355795,
            "unit": "iter/sec",
            "range": "stddev: 0.00017922659907568353",
            "extra": "mean: 2.400534368071069 msec\nrounds: 451"
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
        "date": 1643824314098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.61263766866756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009112617479852357",
            "extra": "mean: 8.360320610687019 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.0705383390346,
            "unit": "iter/sec",
            "range": "stddev: 0.0004556319666742991",
            "extra": "mean: 6.575895705521498 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.97385302970486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744460474291266",
            "extra": "mean: 4.762497737556545 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.70010246530865,
            "unit": "iter/sec",
            "range": "stddev: 0.00019813902269019156",
            "extra": "mean: 3.0515706051872935 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.99980441838866,
            "unit": "iter/sec",
            "range": "stddev: 0.0008817484727082885",
            "extra": "mean: 9.345811475409977 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.65712595962447,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648347888715816",
            "extra": "mean: 7.009814569536646 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.7304665685176,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841785787966624",
            "extra": "mean: 5.083096774193429 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9959423464002,
            "unit": "iter/sec",
            "range": "stddev: 0.00021138321049906045",
            "extra": "mean: 3.164597597597575 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.97468823677702,
            "unit": "iter/sec",
            "range": "stddev: 0.0016608002638736497",
            "extra": "mean: 77.07314285714239 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.259019684908646,
            "unit": "iter/sec",
            "range": "stddev: 0.003362163740284343",
            "extra": "mean: 75.4203571428584 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.89651361616816,
            "unit": "iter/sec",
            "range": "stddev: 0.0003475297583371974",
            "extra": "mean: 5.851494444444841 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.6201581224173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459076450300473",
            "extra": "mean: 4.022200000000053 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.4553643246786,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756855542843831",
            "extra": "mean: 2.1907947154471294 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.67170957291427,
            "unit": "iter/sec",
            "range": "stddev: 0.000309228853418015",
            "extra": "mean: 2.3828148936168856 msec\nrounds: 470"
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
        "date": 1643830683860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.0843964743108,
            "unit": "iter/sec",
            "range": "stddev: 0.0008469357459835194",
            "extra": "mean: 8.468519379844986 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.27351193865093,
            "unit": "iter/sec",
            "range": "stddev: 0.00016011217127681244",
            "extra": "mean: 6.440248484848486 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01436034414223,
            "unit": "iter/sec",
            "range": "stddev: 0.0002819797543984106",
            "extra": "mean: 4.901615740740735 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7012173707218,
            "unit": "iter/sec",
            "range": "stddev: 0.00021419012882834202",
            "extra": "mean: 3.1181671469741494 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.4429634912859,
            "unit": "iter/sec",
            "range": "stddev: 0.0005705337409652554",
            "extra": "mean: 8.97319999999994 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.18679289784967,
            "unit": "iter/sec",
            "range": "stddev: 0.0006394119192752283",
            "extra": "mean: 7.565052287581956 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.81524450247778,
            "unit": "iter/sec",
            "range": "stddev: 0.0004747601072823225",
            "extra": "mean: 5.240671428571393 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.40632811941487,
            "unit": "iter/sec",
            "range": "stddev: 0.00016933865762042212",
            "extra": "mean: 3.211238532110145 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.760904287996004,
            "unit": "iter/sec",
            "range": "stddev: 0.0009814592438067203",
            "extra": "mean: 72.6696428571432 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.580353496601703,
            "unit": "iter/sec",
            "range": "stddev: 0.002927299994575223",
            "extra": "mean: 73.63578571428471 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.91859277049355,
            "unit": "iter/sec",
            "range": "stddev: 0.00038951468127784836",
            "extra": "mean: 6.06359770114965 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.0899335959303,
            "unit": "iter/sec",
            "range": "stddev: 0.00024293939014251903",
            "extra": "mean: 4.217808764940179 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.5704645798529,
            "unit": "iter/sec",
            "range": "stddev: 0.00009569895742840386",
            "extra": "mean: 2.1571693548387048 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.9725771821123,
            "unit": "iter/sec",
            "range": "stddev: 0.00012427117763289997",
            "extra": "mean: 2.3365983086679796 msec\nrounds: 473"
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
        "date": 1643842968340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.33330526887801,
            "unit": "iter/sec",
            "range": "stddev: 0.00031171505857940506",
            "extra": "mean: 7.978725190839707 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.03389299728687,
            "unit": "iter/sec",
            "range": "stddev: 0.00033655692123523047",
            "extra": "mean: 6.368052023121387 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.48218824366378,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630537766470427",
            "extra": "mean: 5.2775409090909084 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.2889361807788,
            "unit": "iter/sec",
            "range": "stddev: 0.0003578960899335463",
            "extra": "mean: 3.1517014492753668 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.35570509328056,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646812708610395",
            "extra": "mean: 8.98023140495872 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.5182870488529,
            "unit": "iter/sec",
            "range": "stddev: 0.0006506836177120292",
            "extra": "mean: 7.379077922077856 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.94828814181562,
            "unit": "iter/sec",
            "range": "stddev: 0.0004759795345857991",
            "extra": "mean: 5.320612440191282 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.6896403021767,
            "unit": "iter/sec",
            "range": "stddev: 0.00013705196653135117",
            "extra": "mean: 3.157665653495412 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.748296193293317,
            "unit": "iter/sec",
            "range": "stddev: 0.0028301556474888746",
            "extra": "mean: 72.73628571428503 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.438849204464871,
            "unit": "iter/sec",
            "range": "stddev: 0.002442499272310237",
            "extra": "mean: 74.41113333333362 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.46810146919668,
            "unit": "iter/sec",
            "range": "stddev: 0.00039655295681680276",
            "extra": "mean: 5.935841807909515 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.20802645527826,
            "unit": "iter/sec",
            "range": "stddev: 0.00018491864253070958",
            "extra": "mean: 4.233556390977815 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.41159656479573,
            "unit": "iter/sec",
            "range": "stddev: 0.00010206244125252014",
            "extra": "mean: 2.1078742746614516 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.916342199713,
            "unit": "iter/sec",
            "range": "stddev: 0.00013638371145351593",
            "extra": "mean: 2.268003937007738 msec\nrounds: 508"
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
        "date": 1643898677162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.82998039923147,
            "unit": "iter/sec",
            "range": "stddev: 0.001115683333762518",
            "extra": "mean: 9.539255813953497 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.22024990896514,
            "unit": "iter/sec",
            "range": "stddev: 0.0009168044032597736",
            "extra": "mean: 7.620775000000046 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.72387876807372,
            "unit": "iter/sec",
            "range": "stddev: 0.0008317194935185415",
            "extra": "mean: 5.564090909090933 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.38999914920487,
            "unit": "iter/sec",
            "range": "stddev: 0.0003771450931953871",
            "extra": "mean: 3.27450146627568 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.09800926335697,
            "unit": "iter/sec",
            "range": "stddev: 0.0011796676215819295",
            "extra": "mean: 9.699508333333254 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.85269814217725,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980809221780589",
            "extra": "mean: 7.307126666666761 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.28118022661207,
            "unit": "iter/sec",
            "range": "stddev: 0.0010098279118728102",
            "extra": "mean: 5.705119047619095 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.54964612921555,
            "unit": "iter/sec",
            "range": "stddev: 0.0005265590619613521",
            "extra": "mean: 3.51432522796354 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.11554850865068,
            "unit": "iter/sec",
            "range": "stddev: 0.009930131097316379",
            "extra": "mean: 89.9640714285714 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.533321764113213,
            "unit": "iter/sec",
            "range": "stddev: 0.0037516627288149314",
            "extra": "mean: 79.78730769230789 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.3038713599656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006460532269255166",
            "extra": "mean: 6.161282485875831 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.78365878937797,
            "unit": "iter/sec",
            "range": "stddev: 0.0007545994900311777",
            "extra": "mean: 4.7442007874018035 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 438.64189451192357,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221817288999086",
            "extra": "mean: 2.2797639999998154 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 409.27374039294665,
            "unit": "iter/sec",
            "range": "stddev: 0.0003172508298962304",
            "extra": "mean: 2.443352459016532 msec\nrounds: 488"
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
        "date": 1643988306243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.69172758898344,
            "unit": "iter/sec",
            "range": "stddev: 0.00022334982603688933",
            "extra": "mean: 7.47989436619714 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.90411750909584,
            "unit": "iter/sec",
            "range": "stddev: 0.00046395782839114374",
            "extra": "mean: 6.214881355932178 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.94513353518528,
            "unit": "iter/sec",
            "range": "stddev: 0.00026801849063252817",
            "extra": "mean: 4.630805907173008 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.80352013474993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002678448358271575",
            "extra": "mean: 3.078784366576859 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.17463754186112,
            "unit": "iter/sec",
            "range": "stddev: 0.0009266717384944292",
            "extra": "mean: 9.88389999999999 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.61797618335427,
            "unit": "iter/sec",
            "range": "stddev: 0.00046528587061929754",
            "extra": "mean: 6.962916666666571 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.56850576471575,
            "unit": "iter/sec",
            "range": "stddev: 0.00015802660499220474",
            "extra": "mean: 5.010810679611766 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.83256172984716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051742486429354",
            "extra": "mean: 3.217166163141964 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.227500729874595,
            "unit": "iter/sec",
            "range": "stddev: 0.001747851140655387",
            "extra": "mean: 75.60007142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.318974210660384,
            "unit": "iter/sec",
            "range": "stddev: 0.002098984840973351",
            "extra": "mean: 75.08085714285784 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.96553595011284,
            "unit": "iter/sec",
            "range": "stddev: 0.00022667282627986454",
            "extra": "mean: 6.06187222222228 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.30719483519175,
            "unit": "iter/sec",
            "range": "stddev: 0.00017262223450570223",
            "extra": "mean: 4.110030534351305 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.29241508267916,
            "unit": "iter/sec",
            "range": "stddev: 0.00010308028483136197",
            "extra": "mean: 2.1263366533865877 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.74657862698893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001343079350682148",
            "extra": "mean: 2.326952789699762 msec\nrounds: 466"
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
        "date": 1643988795786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.0511347695764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005907687527573473",
            "extra": "mean: 8.399751937984474 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.67791008217293,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823901970439501",
            "extra": "mean: 6.681012578616322 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.1515526434503,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118257554258297",
            "extra": "mean: 4.827383561643886 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.553777915585,
            "unit": "iter/sec",
            "range": "stddev: 0.00033142267379708876",
            "extra": "mean: 3.2727463126843386 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.7524280213805,
            "unit": "iter/sec",
            "range": "stddev: 0.0008142899359074283",
            "extra": "mean: 9.280533333333125 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.30100743426908,
            "unit": "iter/sec",
            "range": "stddev: 0.0008086165348409227",
            "extra": "mean: 7.445960526315708 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.79410575122927,
            "unit": "iter/sec",
            "range": "stddev: 0.0007369451685260082",
            "extra": "mean: 5.656297169811313 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.192212494444,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911665175664962",
            "extra": "mean: 3.287395136778082 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.919944333496943,
            "unit": "iter/sec",
            "range": "stddev: 0.0027692551186355506",
            "extra": "mean: 77.39971428571454 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.506847499005643,
            "unit": "iter/sec",
            "range": "stddev: 0.005341400220382902",
            "extra": "mean: 79.95620000000041 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.86279370544472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006066699250696078",
            "extra": "mean: 6.294740112994293 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.69020432384448,
            "unit": "iter/sec",
            "range": "stddev: 0.00039274290268450577",
            "extra": "mean: 4.242857707509871 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.7027687944425,
            "unit": "iter/sec",
            "range": "stddev: 0.00020806787072006263",
            "extra": "mean: 2.1896079207921124 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 415.89648798523007,
            "unit": "iter/sec",
            "range": "stddev: 0.00035396909664807966",
            "extra": "mean: 2.4044444444443434 msec\nrounds: 477"
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
        "date": 1644011640494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.0830145967559,
            "unit": "iter/sec",
            "range": "stddev: 0.0002733355017840717",
            "extra": "mean: 7.931282442748081 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.87474598189473,
            "unit": "iter/sec",
            "range": "stddev: 0.00035427449363336906",
            "extra": "mean: 6.415407407407437 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.79500198272675,
            "unit": "iter/sec",
            "range": "stddev: 0.0002639112536723273",
            "extra": "mean: 4.655601809954671 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.63527063038924,
            "unit": "iter/sec",
            "range": "stddev: 0.0003072313152945482",
            "extra": "mean: 3.0994751381215213 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.62359024515807,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325681585135549",
            "extra": "mean: 8.648754098360794 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.00642490202935,
            "unit": "iter/sec",
            "range": "stddev: 0.0004215717761033803",
            "extra": "mean: 6.944134615384844 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.73673716045354,
            "unit": "iter/sec",
            "range": "stddev: 0.0003047743968506667",
            "extra": "mean: 4.956955357142705 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.7781239601971,
            "unit": "iter/sec",
            "range": "stddev: 0.00016640224313318458",
            "extra": "mean: 3.1768408408407933 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.941404277820414,
            "unit": "iter/sec",
            "range": "stddev: 0.001843548049844913",
            "extra": "mean: 71.72878571428524 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.81560314482616,
            "unit": "iter/sec",
            "range": "stddev: 0.002144277589101387",
            "extra": "mean: 72.38192857142778 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.29247961894023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003104165239153186",
            "extra": "mean: 5.837967914438595 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.46325232911173,
            "unit": "iter/sec",
            "range": "stddev: 0.00014029832656877275",
            "extra": "mean: 4.057399999999441 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.9285246198429,
            "unit": "iter/sec",
            "range": "stddev: 0.00014776638001846724",
            "extra": "mean: 2.1234644913625695 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.0127385688299,
            "unit": "iter/sec",
            "range": "stddev: 0.00008343218010762257",
            "extra": "mean: 2.1977406679763316 msec\nrounds: 509"
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
        "date": 1644244550665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.9525553366124,
            "unit": "iter/sec",
            "range": "stddev: 0.0004951941524128687",
            "extra": "mean: 8.067602941176522 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.07646003569474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003487873334468241",
            "extra": "mean: 6.448431952662738 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.53889683134113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775153429472582",
            "extra": "mean: 4.749716157205297 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.10415188869,
            "unit": "iter/sec",
            "range": "stddev: 0.00021979715588470086",
            "extra": "mean: 2.9664422535210857 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.66281551226818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843949219435857",
            "extra": "mean: 8.721223140495852 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.31065641627893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676153469264831",
            "extra": "mean: 6.834772151898686 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.5583769891424,
            "unit": "iter/sec",
            "range": "stddev: 0.00017791406670232803",
            "extra": "mean: 4.817921658986142 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.24584086757244,
            "unit": "iter/sec",
            "range": "stddev: 0.00011409890340514817",
            "extra": "mean: 3.0464970930231536 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.322675193178915,
            "unit": "iter/sec",
            "range": "stddev: 0.004162137875216321",
            "extra": "mean: 75.0599999999993 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.197030170581954,
            "unit": "iter/sec",
            "range": "stddev: 0.0011598878311943942",
            "extra": "mean: 70.43726666666714 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.77184051869523,
            "unit": "iter/sec",
            "range": "stddev: 0.00017294148041969618",
            "extra": "mean: 5.7546723163838225 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.88169751887716,
            "unit": "iter/sec",
            "range": "stddev: 0.00011752021090407043",
            "extra": "mean: 3.9544182509505332 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 428.5312718467528,
            "unit": "iter/sec",
            "range": "stddev: 0.00023654683060428137",
            "extra": "mean: 2.333551984877338 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.0951887435371,
            "unit": "iter/sec",
            "range": "stddev: 0.00017362037243836195",
            "extra": "mean: 2.298347639485025 msec\nrounds: 466"
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
        "date": 1644419215756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.91242092146757,
            "unit": "iter/sec",
            "range": "stddev: 0.0007906685236689693",
            "extra": "mean: 8.627203124999996 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.27830354792752,
            "unit": "iter/sec",
            "range": "stddev: 0.0005998097659640202",
            "extra": "mean: 6.7440750000000715 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.4209683295652,
            "unit": "iter/sec",
            "range": "stddev: 0.0007260538309834748",
            "extra": "mean: 5.668260465116247 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.66607913596465,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523360791452251",
            "extra": "mean: 3.218890207715097 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.04436128977935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359579422247266",
            "extra": "mean: 8.846084745762658 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.21438227742573,
            "unit": "iter/sec",
            "range": "stddev: 0.000738821328085521",
            "extra": "mean: 7.28786577181216 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.6364816731162,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160840570694509",
            "extra": "mean: 5.0343219512196065 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.6944711489634,
            "unit": "iter/sec",
            "range": "stddev: 0.0002923136062594302",
            "extra": "mean: 3.314611620795146 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.165801642151582,
            "unit": "iter/sec",
            "range": "stddev: 0.0033862944032836155",
            "extra": "mean: 75.95435714285743 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.167275182884017,
            "unit": "iter/sec",
            "range": "stddev: 0.0029202552537831916",
            "extra": "mean: 75.94585714285732 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.97778699232217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006781451323844098",
            "extra": "mean: 6.25086781609245 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.52155631183007,
            "unit": "iter/sec",
            "range": "stddev: 0.00039507105227242455",
            "extra": "mean: 4.227944444444631 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 397.957539010642,
            "unit": "iter/sec",
            "range": "stddev: 0.0003956064972080544",
            "extra": "mean: 2.5128308977035325 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.62306820655044,
            "unit": "iter/sec",
            "range": "stddev: 0.00022581111772627724",
            "extra": "mean: 2.366174672489164 msec\nrounds: 458"
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
        "date": 1644420747390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.60571812690768,
            "unit": "iter/sec",
            "range": "stddev: 0.00022816518302810063",
            "extra": "mean: 7.715708955223853 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.77891832342291,
            "unit": "iter/sec",
            "range": "stddev: 0.00036294396968475644",
            "extra": "mean: 6.337982352941165 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.26103311985534,
            "unit": "iter/sec",
            "range": "stddev: 0.00012656272489932547",
            "extra": "mean: 4.560773913043486 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.52422260548207,
            "unit": "iter/sec",
            "range": "stddev: 0.00009356181726013632",
            "extra": "mean: 2.9280500000000536 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.15721256685836,
            "unit": "iter/sec",
            "range": "stddev: 0.000304988933258164",
            "extra": "mean: 8.392274193548344 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.6791846794275,
            "unit": "iter/sec",
            "range": "stddev: 0.0003242918378837423",
            "extra": "mean: 6.507062111801186 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.80743573025518,
            "unit": "iter/sec",
            "range": "stddev: 0.00018535519173889413",
            "extra": "mean: 4.721269565217428 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.3959474296512,
            "unit": "iter/sec",
            "range": "stddev: 0.00006116468129424429",
            "extra": "mean: 2.9551181318679625 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.83370776569019,
            "unit": "iter/sec",
            "range": "stddev: 0.0007545759641778327",
            "extra": "mean: 72.28720000000001 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.350016024184715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005666021111676832",
            "extra": "mean: 69.68633333333258 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.80107914139325,
            "unit": "iter/sec",
            "range": "stddev: 0.00023044347812739398",
            "extra": "mean: 5.65607407407434 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 260.8467982515427,
            "unit": "iter/sec",
            "range": "stddev: 0.00012671096373128782",
            "extra": "mean: 3.8336679104478364 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 488.25622643165104,
            "unit": "iter/sec",
            "range": "stddev: 0.00008739986597176421",
            "extra": "mean: 2.0481049618319327 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 467.4902239268363,
            "unit": "iter/sec",
            "range": "stddev: 0.00018751850045963924",
            "extra": "mean: 2.139082164328859 msec\nrounds: 499"
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
        "date": 1644539665399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.53241719177717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002642675017587036",
            "extra": "mean: 7.720075187969864 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.9279675158519,
            "unit": "iter/sec",
            "range": "stddev: 0.0007562984284581534",
            "extra": "mean: 7.146534161490725 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.08063327050607,
            "unit": "iter/sec",
            "range": "stddev: 0.0005803366386004534",
            "extra": "mean: 5.260925233644859 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.5048531511347,
            "unit": "iter/sec",
            "range": "stddev: 0.00033486857720398095",
            "extra": "mean: 3.1796011730205382 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.47082078396934,
            "unit": "iter/sec",
            "range": "stddev: 0.001113506313865712",
            "extra": "mean: 9.304851239669354 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.97760343706943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005678844504393219",
            "extra": "mean: 7.195403973510098 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.32597649064257,
            "unit": "iter/sec",
            "range": "stddev: 0.00042763921312807135",
            "extra": "mean: 5.2541435406698955 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.330512597798,
            "unit": "iter/sec",
            "range": "stddev: 0.00044161372904085377",
            "extra": "mean: 3.3632606060606705 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.685612466249005,
            "unit": "iter/sec",
            "range": "stddev: 0.0021015099577596165",
            "extra": "mean: 78.8294615384612 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.327735684345917,
            "unit": "iter/sec",
            "range": "stddev: 0.0025522032939882763",
            "extra": "mean: 75.03149999999995 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.82987979329502,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925821239617267",
            "extra": "mean: 6.103892655367293 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.49049545229707,
            "unit": "iter/sec",
            "range": "stddev: 0.00031529793189545986",
            "extra": "mean: 4.193039215686565 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.9389766968029,
            "unit": "iter/sec",
            "range": "stddev: 0.00022162622528747655",
            "extra": "mean: 2.2274742268042447 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 412.21633815071283,
            "unit": "iter/sec",
            "range": "stddev: 0.00040238662270215467",
            "extra": "mean: 2.4259106382978546 msec\nrounds: 470"
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
        "date": 1644540470444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.44863059299801,
            "unit": "iter/sec",
            "range": "stddev: 0.0003573756480684589",
            "extra": "mean: 7.8462985074626586 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.12341858560188,
            "unit": "iter/sec",
            "range": "stddev: 0.00021388279681640215",
            "extra": "mean: 6.168140350877165 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.69767497203733,
            "unit": "iter/sec",
            "range": "stddev: 0.00012381864087572186",
            "extra": "mean: 4.47031914893618 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.7657661384855,
            "unit": "iter/sec",
            "range": "stddev: 0.00010646246106008403",
            "extra": "mean: 2.90052 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.96855324167402,
            "unit": "iter/sec",
            "range": "stddev: 0.0001843515776633965",
            "extra": "mean: 8.19883464566932 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.79602025134614,
            "unit": "iter/sec",
            "range": "stddev: 0.00018565834606634735",
            "extra": "mean: 6.544673076923219 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.25673505207408,
            "unit": "iter/sec",
            "range": "stddev: 0.00018802321311832976",
            "extra": "mean: 4.645615384615416 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.73878864843374,
            "unit": "iter/sec",
            "range": "stddev: 0.00009373899988154182",
            "extra": "mean: 2.987404011461219 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.053207316661872,
            "unit": "iter/sec",
            "range": "stddev: 0.0015556707724902166",
            "extra": "mean: 71.15813333333327 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.40064946929098,
            "unit": "iter/sec",
            "range": "stddev: 0.0015306959079117812",
            "extra": "mean: 69.44131250000041 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.3576539733273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480167236842441",
            "extra": "mean: 5.6383244680852025 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.5766779402123,
            "unit": "iter/sec",
            "range": "stddev: 0.00019944731500024486",
            "extra": "mean: 3.897470370370221 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 508.7727089299235,
            "unit": "iter/sec",
            "range": "stddev: 0.00006578782064024325",
            "extra": "mean: 1.9655142314988763 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 480.284025374806,
            "unit": "iter/sec",
            "range": "stddev: 0.00007156726329096535",
            "extra": "mean: 2.0821013133210413 msec\nrounds: 533"
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
        "date": 1644599032110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.34557518970448,
            "unit": "iter/sec",
            "range": "stddev: 0.00040910571402345223",
            "extra": "mean: 7.671913669064742 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.92485641678073,
            "unit": "iter/sec",
            "range": "stddev: 0.00012771458843478816",
            "extra": "mean: 6.026824561403481 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.0813752308361,
            "unit": "iter/sec",
            "range": "stddev: 0.00021933185287415999",
            "extra": "mean: 4.693042735042781 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.6036241749603,
            "unit": "iter/sec",
            "range": "stddev: 0.00014257656885578997",
            "extra": "mean: 3.033947222222228 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.66419642067052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007352943003733042",
            "extra": "mean: 8.721118110236281 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.5374346052884,
            "unit": "iter/sec",
            "range": "stddev: 0.0004607023492597021",
            "extra": "mean: 6.8241948051949235 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.37556631374295,
            "unit": "iter/sec",
            "range": "stddev: 0.0002216214327719264",
            "extra": "mean: 4.990628440366954 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.49255809470037,
            "unit": "iter/sec",
            "range": "stddev: 0.00020843538203489727",
            "extra": "mean: 3.210349570200578 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.53897096084144,
            "unit": "iter/sec",
            "range": "stddev: 0.002615292125384659",
            "extra": "mean: 73.86085714285707 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.5461585352086,
            "unit": "iter/sec",
            "range": "stddev: 0.0018028400874602116",
            "extra": "mean: 73.82166666666734 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.8710143317454,
            "unit": "iter/sec",
            "range": "stddev: 0.0004863238081863346",
            "extra": "mean: 6.216160220994302 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.96793671700237,
            "unit": "iter/sec",
            "range": "stddev: 0.00029372229896688825",
            "extra": "mean: 4.049108614232334 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 402.2745339385155,
            "unit": "iter/sec",
            "range": "stddev: 0.0003063890746217878",
            "extra": "mean: 2.4858645418326235 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.49798476494124,
            "unit": "iter/sec",
            "range": "stddev: 0.00018777000620459158",
            "extra": "mean: 2.3612863247862705 msec\nrounds: 468"
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
        "date": 1644601204764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.47382017388513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779058533466802",
            "extra": "mean: 8.098882812500047 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.19164769782856,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442657837864604",
            "extra": "mean: 6.74801863354039 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.3378107298138,
            "unit": "iter/sec",
            "range": "stddev: 0.000134821691003819",
            "extra": "mean: 4.776967889908196 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.68170432631223,
            "unit": "iter/sec",
            "range": "stddev: 0.00009593509560983665",
            "extra": "mean: 3.079939481268024 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.0246571924051,
            "unit": "iter/sec",
            "range": "stddev: 0.00023724709797827195",
            "extra": "mean: 8.693788135593143 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.57744572567745,
            "unit": "iter/sec",
            "range": "stddev: 0.0001555460716043156",
            "extra": "mean: 6.869195945946018 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.4461605449036,
            "unit": "iter/sec",
            "range": "stddev: 0.00011511569247354148",
            "extra": "mean: 4.988870813397205 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6550785133102,
            "unit": "iter/sec",
            "range": "stddev: 0.00008647232995826497",
            "extra": "mean: 3.16801492537315 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.31229989949208,
            "unit": "iter/sec",
            "range": "stddev: 0.0016696501130480787",
            "extra": "mean: 75.11850000000031 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.029863031123869,
            "unit": "iter/sec",
            "range": "stddev: 0.001146133055518353",
            "extra": "mean: 71.27653333333322 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.5909079954684,
            "unit": "iter/sec",
            "range": "stddev: 0.0001658639576306392",
            "extra": "mean: 5.827814606741339 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.5579356297172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254866534409594",
            "extra": "mean: 4.191853846154048 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.68050909477444,
            "unit": "iter/sec",
            "range": "stddev: 0.00007756614688152407",
            "extra": "mean: 2.097841176470629 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.7163672823636,
            "unit": "iter/sec",
            "range": "stddev: 0.00012621109007733534",
            "extra": "mean: 2.218690228689926 msec\nrounds: 481"
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
        "date": 1644601446507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.88053286100214,
            "unit": "iter/sec",
            "range": "stddev: 0.00029528902064252974",
            "extra": "mean: 7.819798507462707 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.72278343159758,
            "unit": "iter/sec",
            "range": "stddev: 0.00030604266146381696",
            "extra": "mean: 6.340238095238077 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.26422896014367,
            "unit": "iter/sec",
            "range": "stddev: 0.00032087549326802645",
            "extra": "mean: 4.75592070484587 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.60243476409363,
            "unit": "iter/sec",
            "range": "stddev: 0.00009559673725452041",
            "extra": "mean: 2.9273796033994532 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.67129790719811,
            "unit": "iter/sec",
            "range": "stddev: 0.00036622181197623345",
            "extra": "mean: 8.645186991869751 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.81687494127462,
            "unit": "iter/sec",
            "range": "stddev: 0.00033915984915125735",
            "extra": "mean: 7.001973684210593 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.55389892368837,
            "unit": "iter/sec",
            "range": "stddev: 0.00025938369004846327",
            "extra": "mean: 4.936957547169938 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.0080642394893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001514366663039929",
            "extra": "mean: 3.144574344023264 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.452419273473328,
            "unit": "iter/sec",
            "range": "stddev: 0.0037384410256410395",
            "extra": "mean: 74.33607142857112 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.568312382351525,
            "unit": "iter/sec",
            "range": "stddev: 0.003409787506296632",
            "extra": "mean: 73.70113333333279 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.6672666739569,
            "unit": "iter/sec",
            "range": "stddev: 0.0005081815857937503",
            "extra": "mean: 6.302497175141271 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.6661134508504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079659977604638",
            "extra": "mean: 4.1899538461539265 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 489.48588071891504,
            "unit": "iter/sec",
            "range": "stddev: 0.00004582734875826649",
            "extra": "mean: 2.042959847036416 msec\nrounds: 523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.58299922767236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001511796356996551",
            "extra": "mean: 2.2193469387750158 msec\nrounds: 490"
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
        "date": 1644602153111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.6131002876641,
            "unit": "iter/sec",
            "range": "stddev: 0.00047550136418986975",
            "extra": "mean: 8.02483846153849 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.40421844520765,
            "unit": "iter/sec",
            "range": "stddev: 0.00026534110678576864",
            "extra": "mean: 6.393689440993724 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.58503401360457,
            "unit": "iter/sec",
            "range": "stddev: 0.0001479744342098007",
            "extra": "mean: 4.704000000000019 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.59218139653126,
            "unit": "iter/sec",
            "range": "stddev: 0.00021155768988116057",
            "extra": "mean: 3.090309523809525 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.40157653451513,
            "unit": "iter/sec",
            "range": "stddev: 0.0006578233779430828",
            "extra": "mean: 9.057841666666485 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.01046091987675,
            "unit": "iter/sec",
            "range": "stddev: 0.00042336362003012924",
            "extra": "mean: 6.943940000000216 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.2282926175606,
            "unit": "iter/sec",
            "range": "stddev: 0.00038839497849600587",
            "extra": "mean: 5.284622009569402 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.70600597456615,
            "unit": "iter/sec",
            "range": "stddev: 0.0001426708369517491",
            "extra": "mean: 3.1181205882352754 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.066880963514496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010764243949401087",
            "extra": "mean: 76.52935714285698 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.274596404859953,
            "unit": "iter/sec",
            "range": "stddev: 0.003215450700724517",
            "extra": "mean: 75.33185714285752 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.6184186888119,
            "unit": "iter/sec",
            "range": "stddev: 0.0003908745787177969",
            "extra": "mean: 6.001737430167725 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.38659899999786,
            "unit": "iter/sec",
            "range": "stddev: 0.00010350306715328933",
            "extra": "mean: 4.091877394635738 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.2099446646252,
            "unit": "iter/sec",
            "range": "stddev: 0.00009972056835210968",
            "extra": "mean: 2.1312421259842753 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.55131681144417,
            "unit": "iter/sec",
            "range": "stddev: 0.00008800415872094835",
            "extra": "mean: 2.2343806451614254 msec\nrounds: 465"
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
        "date": 1644603532428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.07051609200678,
            "unit": "iter/sec",
            "range": "stddev: 0.0001968753124875094",
            "extra": "mean: 7.688137404580136 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.75203787234224,
            "unit": "iter/sec",
            "range": "stddev: 0.00015316486711011517",
            "extra": "mean: 6.299131736526954 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.56274810590511,
            "unit": "iter/sec",
            "range": "stddev: 0.0001512459302876342",
            "extra": "mean: 4.554506666666671 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.97709165701366,
            "unit": "iter/sec",
            "range": "stddev: 0.00020424677723046106",
            "extra": "mean: 3.021357142857138 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.03540845987227,
            "unit": "iter/sec",
            "range": "stddev: 0.0006717342671249397",
            "extra": "mean: 8.692975609756099 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.8396567800937,
            "unit": "iter/sec",
            "range": "stddev: 0.00016638813800832285",
            "extra": "mean: 6.764084967320135 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.61400604988657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004664841158869307",
            "extra": "mean: 4.9354929577463915 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.7242126587506,
            "unit": "iter/sec",
            "range": "stddev: 0.000142879502603946",
            "extra": "mean: 3.108252225519281 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.704879132755119,
            "unit": "iter/sec",
            "range": "stddev: 0.0008563218687253034",
            "extra": "mean: 72.96671428571499 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.24385198317853,
            "unit": "iter/sec",
            "range": "stddev: 0.006173679586607881",
            "extra": "mean: 75.50673333333341 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.70446235053353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002955964895129536",
            "extra": "mean: 5.756904494382026 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.35896851952526,
            "unit": "iter/sec",
            "range": "stddev: 0.00039065145746115603",
            "extra": "mean: 4.477098039215665 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.8579324473717,
            "unit": "iter/sec",
            "range": "stddev: 0.00020573472160671373",
            "extra": "mean: 2.252973140495963 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.7443799787697,
            "unit": "iter/sec",
            "range": "stddev: 0.00018581251115827127",
            "extra": "mean: 2.3055053763438886 msec\nrounds: 465"
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
        "date": 1644938324245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.77232001004555,
            "unit": "iter/sec",
            "range": "stddev: 0.00029945219957901094",
            "extra": "mean: 8.212046875000045 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.3638720997485,
            "unit": "iter/sec",
            "range": "stddev: 0.000365416852588178",
            "extra": "mean: 6.563235668789823 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.97297017380694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007810799655261422",
            "extra": "mean: 5.1553574660632515 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.9062990921312,
            "unit": "iter/sec",
            "range": "stddev: 0.00015756936123579254",
            "extra": "mean: 3.1161744186046754 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.12805764896099,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659123440545116",
            "extra": "mean: 9.163546218487294 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.2321764064178,
            "unit": "iter/sec",
            "range": "stddev: 0.00030939825985242203",
            "extra": "mean: 7.080539473684401 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.25351069504785,
            "unit": "iter/sec",
            "range": "stddev: 0.00026636249629976785",
            "extra": "mean: 5.174550239234671 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.3046654667879,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545232261293898",
            "extra": "mean: 3.3522774390242853 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.810986702195736,
            "unit": "iter/sec",
            "range": "stddev: 0.002740140282764553",
            "extra": "mean: 78.0580000000004 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.452819999346634,
            "unit": "iter/sec",
            "range": "stddev: 0.002463420350686975",
            "extra": "mean: 74.33385714285683 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.3260841334145,
            "unit": "iter/sec",
            "range": "stddev: 0.0004437834440258203",
            "extra": "mean: 6.316078651685363 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.32540107232697,
            "unit": "iter/sec",
            "range": "stddev: 0.00016448586376594738",
            "extra": "mean: 4.143782608695605 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.83412805886474,
            "unit": "iter/sec",
            "range": "stddev: 0.00015346178159209115",
            "extra": "mean: 2.1699781746031293 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.98218867648626,
            "unit": "iter/sec",
            "range": "stddev: 0.00019759006996316347",
            "extra": "mean: 2.347515991471309 msec\nrounds: 469"
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
        "date": 1644939176438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.16235062940578,
            "unit": "iter/sec",
            "range": "stddev: 0.000820831642709031",
            "extra": "mean: 8.60864122137398 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.17066678367044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007616887260884287",
            "extra": "mean: 6.794832298136714 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.2469144240558,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270316364646927",
            "extra": "mean: 4.920123893805309 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.54743663003546,
            "unit": "iter/sec",
            "range": "stddev: 0.00022279659509041083",
            "extra": "mean: 3.0812136752136476 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.45980366629817,
            "unit": "iter/sec",
            "range": "stddev: 0.0008508774277372644",
            "extra": "mean: 8.97184426229496 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.37912259014416,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967370724298151",
            "extra": "mean: 6.926209150326722 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.9552592681473,
            "unit": "iter/sec",
            "range": "stddev: 0.00042677416736410987",
            "extra": "mean: 5.077295238095354 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.5751469073315,
            "unit": "iter/sec",
            "range": "stddev: 0.00037117988476230917",
            "extra": "mean: 3.4296475903613977 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.100018642334275,
            "unit": "iter/sec",
            "range": "stddev: 0.0016376015059554056",
            "extra": "mean: 76.33576923076892 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.771881425853143,
            "unit": "iter/sec",
            "range": "stddev: 0.006456758224466882",
            "extra": "mean: 78.29699999999816 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.6666298227255,
            "unit": "iter/sec",
            "range": "stddev: 0.0011105900615452648",
            "extra": "mean: 6.302522471910298 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.72830378429046,
            "unit": "iter/sec",
            "range": "stddev: 0.00027028041436583214",
            "extra": "mean: 4.0861640625002025 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.5796836860226,
            "unit": "iter/sec",
            "range": "stddev: 0.00018930809675837338",
            "extra": "mean: 2.199834343434271 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 402.80104268411355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002861458009979354",
            "extra": "mean: 2.4826152219874578 msec\nrounds: 473"
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
        "date": 1644940372658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.17389140928762,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351852400195319",
            "extra": "mean: 8.252602836879372 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.24377379797804,
            "unit": "iter/sec",
            "range": "stddev: 0.0004786257124093872",
            "extra": "mean: 6.611842424242451 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.80336709267152,
            "unit": "iter/sec",
            "range": "stddev: 0.0003136693309809466",
            "extra": "mean: 4.835511210762278 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.167510724206,
            "unit": "iter/sec",
            "range": "stddev: 0.00005453897916774788",
            "extra": "mean: 3.0196198830409817 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.99227610400163,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206544600334481",
            "extra": "mean: 8.772524193548369 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.58571137283673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659875562835212",
            "extra": "mean: 6.775723684210603 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.50556952928113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002501401373464582",
            "extra": "mean: 5.0889142857143845 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.55288859169053,
            "unit": "iter/sec",
            "range": "stddev: 0.00023614707015517656",
            "extra": "mean: 3.2943188405797104 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.323993848121646,
            "unit": "iter/sec",
            "range": "stddev: 0.002524695129021909",
            "extra": "mean: 75.05257142857172 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.127030256062199,
            "unit": "iter/sec",
            "range": "stddev: 0.0020219136186576782",
            "extra": "mean: 70.78628571428729 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.6682354385378,
            "unit": "iter/sec",
            "range": "stddev: 0.000719740179872048",
            "extra": "mean: 6.224005617977555 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.68463142143287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002737713450293815",
            "extra": "mean: 4.17214901960785 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.55652277493834,
            "unit": "iter/sec",
            "range": "stddev: 0.00011874390042406816",
            "extra": "mean: 2.2293734439834387 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.79347766847513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002169462500476561",
            "extra": "mean: 2.2789764453963404 msec\nrounds: 467"
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
        "date": 1645453984056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.26215074170823,
            "unit": "iter/sec",
            "range": "stddev: 0.0004106026221996025",
            "extra": "mean: 8.17914615384614 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.52454531770442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005336300425225056",
            "extra": "mean: 6.643434782608719 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.45582819151642,
            "unit": "iter/sec",
            "range": "stddev: 0.00027761891344827734",
            "extra": "mean: 4.751590909090873 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.7512543856878,
            "unit": "iter/sec",
            "range": "stddev: 0.0003723544828786129",
            "extra": "mean: 3.2813646723646226 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.25257863468744,
            "unit": "iter/sec",
            "range": "stddev: 0.0010199960341979492",
            "extra": "mean: 9.070082644628343 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6047844168831,
            "unit": "iter/sec",
            "range": "stddev: 0.00040078156371038464",
            "extra": "mean: 6.963556291390761 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.85470278953807,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797702194955892",
            "extra": "mean: 5.003635071089994 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.4719430971483,
            "unit": "iter/sec",
            "range": "stddev: 0.0002098891637081549",
            "extra": "mean: 3.139994029850708 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.647764837313785,
            "unit": "iter/sec",
            "range": "stddev: 0.001885623523248932",
            "extra": "mean: 73.27207142857135 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.91974164208054,
            "unit": "iter/sec",
            "range": "stddev: 0.002985194426455009",
            "extra": "mean: 77.40092857142956 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.43223671912472,
            "unit": "iter/sec",
            "range": "stddev: 0.0007195960766482292",
            "extra": "mean: 6.15641340782116 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.8631374623827,
            "unit": "iter/sec",
            "range": "stddev: 0.00023618473244311095",
            "extra": "mean: 4.067303501945268 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.12310252214286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001926827655920651",
            "extra": "mean: 2.1546007827789415 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.55829465600596,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527167585104536",
            "extra": "mean: 2.2854097664544732 msec\nrounds: 471"
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
        "date": 1645922406266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.55113981143577,
            "unit": "iter/sec",
            "range": "stddev: 0.0004049796626748006",
            "extra": "mean: 8.364621212121175 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.06170977330154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006052828166552051",
            "extra": "mean: 6.708630952380971 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.01348858228255,
            "unit": "iter/sec",
            "range": "stddev: 0.00021070883613430208",
            "extra": "mean: 4.672602678571479 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.06547346165314,
            "unit": "iter/sec",
            "range": "stddev: 0.00013236091788372707",
            "extra": "mean: 2.975610644257704 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.99916109406492,
            "unit": "iter/sec",
            "range": "stddev: 0.0006978447079310522",
            "extra": "mean: 8.620752000000152 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.42047670421888,
            "unit": "iter/sec",
            "range": "stddev: 0.00022173937196381154",
            "extra": "mean: 6.783318181817968 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.9352436283863,
            "unit": "iter/sec",
            "range": "stddev: 0.00029125345284850256",
            "extra": "mean: 4.952082568807363 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.4091390827761,
            "unit": "iter/sec",
            "range": "stddev: 0.00023658197488614875",
            "extra": "mean: 3.1406133720930427 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.731992698503305,
            "unit": "iter/sec",
            "range": "stddev: 0.0015640307200973117",
            "extra": "mean: 72.8226428571429 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.997368494723098,
            "unit": "iter/sec",
            "range": "stddev: 0.0016115763799985255",
            "extra": "mean: 71.44199999999947 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.05444954167024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005066210337618259",
            "extra": "mean: 5.986072222222126 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.13838385841123,
            "unit": "iter/sec",
            "range": "stddev: 0.00017405193753949316",
            "extra": "mean: 3.9818684210526256 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 480.2616319078311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000871892342419633",
            "extra": "mean: 2.0821983967936752 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.27443897239215,
            "unit": "iter/sec",
            "range": "stddev: 0.00010437253470129916",
            "extra": "mean: 2.211046908315423 msec\nrounds: 469"
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
        "date": 1646063632157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.1485541998327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003370454973634834",
            "extra": "mean: 7.990503816793889 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.16625176422352,
            "unit": "iter/sec",
            "range": "stddev: 0.00039508621063913895",
            "extra": "mean: 6.79503614457824 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.81259709724426,
            "unit": "iter/sec",
            "range": "stddev: 0.0002093479745706541",
            "extra": "mean: 4.743549549549532 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.61869217638554,
            "unit": "iter/sec",
            "range": "stddev: 0.00011482198514111487",
            "extra": "mean: 3.015511560693652 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.56861103358531,
            "unit": "iter/sec",
            "range": "stddev: 0.0006047449610424887",
            "extra": "mean: 8.883471074380104 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.90955465410397,
            "unit": "iter/sec",
            "range": "stddev: 0.000350753538795439",
            "extra": "mean: 6.900856209150452 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.2095136371158,
            "unit": "iter/sec",
            "range": "stddev: 0.00023100593784526513",
            "extra": "mean: 4.969943925233645 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3828930449601,
            "unit": "iter/sec",
            "range": "stddev: 0.00014000720460678336",
            "extra": "mean: 3.092309523809503 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.418033069700911,
            "unit": "iter/sec",
            "range": "stddev: 0.002473002557288294",
            "extra": "mean: 74.52657142857154 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.860001053360179,
            "unit": "iter/sec",
            "range": "stddev: 0.0011687859676155774",
            "extra": "mean: 72.15006666666615 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.3429624072415,
            "unit": "iter/sec",
            "range": "stddev: 0.000609631866601249",
            "extra": "mean: 6.084836158192172 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.40427161778905,
            "unit": "iter/sec",
            "range": "stddev: 0.00020678813097493992",
            "extra": "mean: 4.125339843749742 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.4638114531304,
            "unit": "iter/sec",
            "range": "stddev: 0.00006539022801507852",
            "extra": "mean: 2.12556200000013 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.3508382548536,
            "unit": "iter/sec",
            "range": "stddev: 0.00011914121023167731",
            "extra": "mean: 2.2353819742488215 msec\nrounds: 466"
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
        "date": 1646086959880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.9738156668382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005560771024451065",
            "extra": "mean: 8.19848091603054 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.32242289753268,
            "unit": "iter/sec",
            "range": "stddev: 0.001169693634273069",
            "extra": "mean: 7.557298136645943 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.05919317437545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005042739048416547",
            "extra": "mean: 5.206728110599082 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.4058108388006,
            "unit": "iter/sec",
            "range": "stddev: 0.00037944080584878493",
            "extra": "mean: 3.3511411764705943 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.69725775261551,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659144520975694",
            "extra": "mean: 8.795286885245883 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.62484034990595,
            "unit": "iter/sec",
            "range": "stddev: 0.0004904303832552875",
            "extra": "mean: 6.962583892617395 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.5844276999037,
            "unit": "iter/sec",
            "range": "stddev: 0.0004638970130677436",
            "extra": "mean: 5.165704761904758 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.8416937055072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471170571492183",
            "extra": "mean: 3.206755287009076 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.705015849507356,
            "unit": "iter/sec",
            "range": "stddev: 0.0047618183092062605",
            "extra": "mean: 78.70907142857091 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.695269107966762,
            "unit": "iter/sec",
            "range": "stddev: 0.004963353236085691",
            "extra": "mean: 78.76950000000095 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.6037238500037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913558417013271",
            "extra": "mean: 5.966454545454766 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.77078879185012,
            "unit": "iter/sec",
            "range": "stddev: 0.00016331887448824587",
            "extra": "mean: 4.035988281250097 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.70861845031203,
            "unit": "iter/sec",
            "range": "stddev: 0.00014162344941013395",
            "extra": "mean: 2.2286177685948223 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.6431426033914,
            "unit": "iter/sec",
            "range": "stddev: 0.00011612140108700613",
            "extra": "mean: 2.25406391752567 msec\nrounds: 485"
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
        "date": 1646432972600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.63806136571172,
            "unit": "iter/sec",
            "range": "stddev: 0.0004689841200969998",
            "extra": "mean: 8.358543999999988 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.06465789253468,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483806780739652",
            "extra": "mean: 6.5761500000000535 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.87533969408122,
            "unit": "iter/sec",
            "range": "stddev: 0.00027344938580678625",
            "extra": "mean: 4.953552036199095 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.3374180832094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002189353013778745",
            "extra": "mean: 3.151219941348955 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.12936869934076,
            "unit": "iter/sec",
            "range": "stddev: 0.00039877084107075715",
            "extra": "mean: 9.33450847457625 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.66943368415482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005057493128862612",
            "extra": "mean: 7.481141891891922 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.91693460617782,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998170802135856",
            "extra": "mean: 5.29333170731693 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.8662327646319,
            "unit": "iter/sec",
            "range": "stddev: 0.00021165349694068136",
            "extra": "mean: 3.3127256097561264 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.228700610882488,
            "unit": "iter/sec",
            "range": "stddev: 0.002467099423600643",
            "extra": "mean: 75.59321428571434 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.964955724676205,
            "unit": "iter/sec",
            "range": "stddev: 0.0019101366443263269",
            "extra": "mean: 77.13099999999997 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.1194716176869,
            "unit": "iter/sec",
            "range": "stddev: 0.0003587991309930839",
            "extra": "mean: 6.056220930232702 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.10149184955284,
            "unit": "iter/sec",
            "range": "stddev: 0.00027348977746151533",
            "extra": "mean: 4.289976833976742 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.2256296536783,
            "unit": "iter/sec",
            "range": "stddev: 0.00009906845242844774",
            "extra": "mean: 2.1967128712870783 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.2050581380971,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152233378998414",
            "extra": "mean: 2.2562919389977103 msec\nrounds: 459"
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
        "date": 1646435625123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.90373080359142,
            "unit": "iter/sec",
            "range": "stddev: 0.0007687715695392608",
            "extra": "mean: 9.182421874999916 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.1074747580997,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655609413592854",
            "extra": "mean: 6.891443750000076 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.10821440118562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003659171425020945",
            "extra": "mean: 5.022394495412869 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.130378933849,
            "unit": "iter/sec",
            "range": "stddev: 0.00019289809120494897",
            "extra": "mean: 3.113999999999982 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.71401206815541,
            "unit": "iter/sec",
            "range": "stddev: 0.00048540998050471286",
            "extra": "mean: 9.198446280991599 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.84720984292358,
            "unit": "iter/sec",
            "range": "stddev: 0.0004189047947484794",
            "extra": "mean: 7.202161290322577 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.93126660939183,
            "unit": "iter/sec",
            "range": "stddev: 0.00029145199307983947",
            "extra": "mean: 5.052258883248869 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.5518025016918,
            "unit": "iter/sec",
            "range": "stddev: 0.000311881125419317",
            "extra": "mean: 3.1892656716416243 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.294841601458643,
            "unit": "iter/sec",
            "range": "stddev: 0.0015845293335216275",
            "extra": "mean: 75.2171428571428 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.945678085370997,
            "unit": "iter/sec",
            "range": "stddev: 0.0030804679179320016",
            "extra": "mean: 77.24585714285836 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.4215771502455,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294924402117742",
            "extra": "mean: 6.233575418993876 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.86898838510143,
            "unit": "iter/sec",
            "range": "stddev: 0.000272991427232331",
            "extra": "mean: 4.186395256917207 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.85679771600803,
            "unit": "iter/sec",
            "range": "stddev: 0.00009879116880049871",
            "extra": "mean: 2.11480516898604 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 412.67234947259465,
            "unit": "iter/sec",
            "range": "stddev: 0.0012668935221554361",
            "extra": "mean: 2.423229957805568 msec\nrounds: 474"
          }
        ]
      }
    ]
  }
}