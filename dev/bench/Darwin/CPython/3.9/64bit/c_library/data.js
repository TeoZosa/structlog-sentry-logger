window.BENCHMARK_DATA = {
  "lastUpdate": 1671164579644,
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
        "date": 1646435859470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.24773968260067,
            "unit": "iter/sec",
            "range": "stddev: 0.001097709485529437",
            "extra": "mean: 8.752908396946559 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.2456024421645,
            "unit": "iter/sec",
            "range": "stddev: 0.000729104000796373",
            "extra": "mean: 7.233503144654118 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.23549232496916,
            "unit": "iter/sec",
            "range": "stddev: 0.0004666838037238203",
            "extra": "mean: 4.969302325581464 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.9916497765114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001704091626839969",
            "extra": "mean: 3.0303797101449548 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.44275591166034,
            "unit": "iter/sec",
            "range": "stddev: 0.0011005909765034647",
            "extra": "mean: 9.761549180327908 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.05294418768278,
            "unit": "iter/sec",
            "range": "stddev: 0.0007845035091377214",
            "extra": "mean: 7.296450331125917 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.49631109842792,
            "unit": "iter/sec",
            "range": "stddev: 0.0005803422316899762",
            "extra": "mean: 5.47956281407057 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.36134177122096,
            "unit": "iter/sec",
            "range": "stddev: 0.00037015793369844134",
            "extra": "mean: 3.2641194029851266 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.904248631688807,
            "unit": "iter/sec",
            "range": "stddev: 0.002753969885794974",
            "extra": "mean: 77.49385714285698 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.222239423892646,
            "unit": "iter/sec",
            "range": "stddev: 0.00413521687920937",
            "extra": "mean: 81.81806666666584 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.08295207515926,
            "unit": "iter/sec",
            "range": "stddev: 0.0009943676180721114",
            "extra": "mean: 6.246761363636636 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.9215329538115,
            "unit": "iter/sec",
            "range": "stddev: 0.00033138759915457436",
            "extra": "mean: 4.293291338582684 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.9929969965506,
            "unit": "iter/sec",
            "range": "stddev: 0.00007756887182220151",
            "extra": "mean: 2.132228000000083 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.5392441780043,
            "unit": "iter/sec",
            "range": "stddev: 0.00012627136367430143",
            "extra": "mean: 2.275109704641119 msec\nrounds: 474"
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
        "date": 1646664497910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.91258122007554,
            "unit": "iter/sec",
            "range": "stddev: 0.0005437091551419328",
            "extra": "mean: 8.135863636363599 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.75442759199427,
            "unit": "iter/sec",
            "range": "stddev: 0.00041299511261450045",
            "extra": "mean: 6.63330434782603 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.28370443897904,
            "unit": "iter/sec",
            "range": "stddev: 0.0003671116708031817",
            "extra": "mean: 4.847692660550464 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.3970414250209,
            "unit": "iter/sec",
            "range": "stddev: 0.00029776513483454036",
            "extra": "mean: 3.4435612535611693 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.74748102320837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483476094891562",
            "extra": "mean: 9.111826446281071 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.8131991461122,
            "unit": "iter/sec",
            "range": "stddev: 0.0003679383246857841",
            "extra": "mean: 7.051529801324668 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.0372518493714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003744982131082647",
            "extra": "mean: 5.049555023923516 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.7518148455771,
            "unit": "iter/sec",
            "range": "stddev: 0.00026692855121374483",
            "extra": "mean: 3.177106382978659 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.922400982102458,
            "unit": "iter/sec",
            "range": "stddev: 0.0035571995034988212",
            "extra": "mean: 77.3850000000001 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.139700201432447,
            "unit": "iter/sec",
            "range": "stddev: 0.006143499599103877",
            "extra": "mean: 82.37435714285623 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.96115228349046,
            "unit": "iter/sec",
            "range": "stddev: 0.0004718354869586218",
            "extra": "mean: 6.1364318181819195 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.77947921756714,
            "unit": "iter/sec",
            "range": "stddev: 0.0001915738926972378",
            "extra": "mean: 4.052200787401671 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.3277211571912,
            "unit": "iter/sec",
            "range": "stddev: 0.00013091001461644906",
            "extra": "mean: 2.181844897959016 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.6218673795221,
            "unit": "iter/sec",
            "range": "stddev: 0.0002127931346490278",
            "extra": "mean: 2.327628260869258 msec\nrounds: 460"
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
        "date": 1646752629509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.85234208369843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004526729342169358",
            "extra": "mean: 7.94581954887218 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.90425824654994,
            "unit": "iter/sec",
            "range": "stddev: 0.00017519798509610968",
            "extra": "mean: 6.293097560975598 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.08724421615835,
            "unit": "iter/sec",
            "range": "stddev: 0.00044034752873964403",
            "extra": "mean: 4.852313901345257 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.10515151368094,
            "unit": "iter/sec",
            "range": "stddev: 0.00013668137981040826",
            "extra": "mean: 2.9752593659942628 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.39662337150297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006334629097262503",
            "extra": "mean: 8.591314516129055 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.64713590780474,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315404270973044",
            "extra": "mean: 6.961503225806171 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.86341128885968,
            "unit": "iter/sec",
            "range": "stddev: 0.00029770323195847746",
            "extra": "mean: 4.953844748858593 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.4055859835713,
            "unit": "iter/sec",
            "range": "stddev: 0.00011204581199508624",
            "extra": "mean: 3.0543156342182214 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.11781389757425,
            "unit": "iter/sec",
            "range": "stddev: 0.0026996173283973207",
            "extra": "mean: 76.2322142857142 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.930875235526615,
            "unit": "iter/sec",
            "range": "stddev: 0.005016408498097539",
            "extra": "mean: 77.33428571428595 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.76501526541222,
            "unit": "iter/sec",
            "range": "stddev: 0.00034200566399298434",
            "extra": "mean: 5.996461538461564 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.7350533062792,
            "unit": "iter/sec",
            "range": "stddev: 0.00017886904479545132",
            "extra": "mean: 4.10281568627469 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.91608199401736,
            "unit": "iter/sec",
            "range": "stddev: 0.00016944353209078362",
            "extra": "mean: 2.16021874999997 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.20171973954353,
            "unit": "iter/sec",
            "range": "stddev: 0.00012199350858099766",
            "extra": "mean: 2.2163036093418493 msec\nrounds: 471"
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
        "date": 1646753398028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.17731853049546,
            "unit": "iter/sec",
            "range": "stddev: 0.00029686474998784574",
            "extra": "mean: 7.801692307692361 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.80493188119374,
            "unit": "iter/sec",
            "range": "stddev: 0.00030748805372177754",
            "extra": "mean: 6.459742514970116 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.3735048849261,
            "unit": "iter/sec",
            "range": "stddev: 0.00036614560804035256",
            "extra": "mean: 4.77615350877185 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.6449742169955,
            "unit": "iter/sec",
            "range": "stddev: 0.00039550484200925185",
            "extra": "mean: 3.1284708994709107 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.78315558259244,
            "unit": "iter/sec",
            "range": "stddev: 0.0008975825871583701",
            "extra": "mean: 8.945891666666514 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.46257779005964,
            "unit": "iter/sec",
            "range": "stddev: 0.0015396919845345478",
            "extra": "mean: 7.3821125827813745 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.45874874439494,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756450727092411",
            "extra": "mean: 4.963795348837252 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7508804608339,
            "unit": "iter/sec",
            "range": "stddev: 0.0003546898718398617",
            "extra": "mean: 3.2180117994099677 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.066715618836968,
            "unit": "iter/sec",
            "range": "stddev: 0.0010598832954619884",
            "extra": "mean: 71.08980000000025 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.31794370949108,
            "unit": "iter/sec",
            "range": "stddev: 0.0035581674389802546",
            "extra": "mean: 75.08666666666765 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.682811946542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751092871921796",
            "extra": "mean: 5.963640449438577 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.05553170819886,
            "unit": "iter/sec",
            "range": "stddev: 0.00044060864671217355",
            "extra": "mean: 4.272490347490345 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 488.9057546315431,
            "unit": "iter/sec",
            "range": "stddev: 0.0001727652323365355",
            "extra": "mean: 2.04538398357294 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.9944501779568,
            "unit": "iter/sec",
            "range": "stddev: 0.00021417486595306105",
            "extra": "mean: 2.272755939525027 msec\nrounds: 463"
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
        "date": 1646838619336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.09529421950627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006259024606610901",
            "extra": "mean: 8.32672093023256 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.30379013689756,
            "unit": "iter/sec",
            "range": "stddev: 0.0010475779762446564",
            "extra": "mean: 7.445806249999998 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.22577036528256,
            "unit": "iter/sec",
            "range": "stddev: 0.0006785237762706785",
            "extra": "mean: 4.944968181818219 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.15760371283386,
            "unit": "iter/sec",
            "range": "stddev: 0.00023858327165439194",
            "extra": "mean: 3.0754316939891093 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.01878212439806,
            "unit": "iter/sec",
            "range": "stddev: 0.0006816826505698811",
            "extra": "mean: 8.927074380165008 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.40549571054092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790703473642148",
            "extra": "mean: 7.071860927152466 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.9779269646689,
            "unit": "iter/sec",
            "range": "stddev: 0.0003788326696681264",
            "extra": "mean: 5.000551886792361 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.12962370348225,
            "unit": "iter/sec",
            "range": "stddev: 0.00019771594159200055",
            "extra": "mean: 3.143372781065072 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.073018410544991,
            "unit": "iter/sec",
            "range": "stddev: 0.002308605163772523",
            "extra": "mean: 76.49342857142904 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.217422829132644,
            "unit": "iter/sec",
            "range": "stddev: 0.002033258371283658",
            "extra": "mean: 75.65771428571466 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.01904595557542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003026235165107973",
            "extra": "mean: 5.951706214689507 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.3295050753508,
            "unit": "iter/sec",
            "range": "stddev: 0.0002481296298293206",
            "extra": "mean: 4.1096536964982295 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.53943573535975,
            "unit": "iter/sec",
            "range": "stddev: 0.00006106612527191506",
            "extra": "mean: 2.1117565392354267 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.0131751350913,
            "unit": "iter/sec",
            "range": "stddev: 0.00011766264858290472",
            "extra": "mean: 2.21232489451471 msec\nrounds: 474"
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
        "date": 1647271544127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.12307673160251,
            "unit": "iter/sec",
            "range": "stddev: 0.0008948912979796173",
            "extra": "mean: 9.248719424460452 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.86948960315738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005624685537990361",
            "extra": "mean: 6.999395061728422 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.97097085237158,
            "unit": "iter/sec",
            "range": "stddev: 0.00042120462888047103",
            "extra": "mean: 4.855053097345179 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.52522920705303,
            "unit": "iter/sec",
            "range": "stddev: 0.00029266563051550396",
            "extra": "mean: 3.119879213483128 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.36564655120752,
            "unit": "iter/sec",
            "range": "stddev: 0.0008336449666618759",
            "extra": "mean: 8.979429752066189 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.93872894065987,
            "unit": "iter/sec",
            "range": "stddev: 0.0004681191921952871",
            "extra": "mean: 7.197417218543116 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.73355769778865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005010637064908944",
            "extra": "mean: 5.242915887850573 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.1952948445344,
            "unit": "iter/sec",
            "range": "stddev: 0.00023997931263352042",
            "extra": "mean: 3.15263188405782 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.323148526459821,
            "unit": "iter/sec",
            "range": "stddev: 0.002804049690477531",
            "extra": "mean: 75.05733333333306 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.727579731923255,
            "unit": "iter/sec",
            "range": "stddev: 0.005755268392234617",
            "extra": "mean: 78.56953333333318 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.96483233331395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099594858955177",
            "extra": "mean: 6.025372881356329 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.7381943576029,
            "unit": "iter/sec",
            "range": "stddev: 0.00026776345346176783",
            "extra": "mean: 4.224075471697897 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.3786113628369,
            "unit": "iter/sec",
            "range": "stddev: 0.00011634460775371721",
            "extra": "mean: 2.130476284585078 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.2635573483491,
            "unit": "iter/sec",
            "range": "stddev: 0.0001470472692847561",
            "extra": "mean: 2.271366737739711 msec\nrounds: 469"
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
        "date": 1647613635872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.33090630883135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008862451736097657",
            "extra": "mean: 8.746541353383432 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.28509028983424,
            "unit": "iter/sec",
            "range": "stddev: 0.000556787051363444",
            "extra": "mean: 6.698592592592592 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.64190926320163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005405596879761585",
            "extra": "mean: 5.008968325791914 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.17215988908526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751035394203299",
            "extra": "mean: 3.1628338192420387 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.04120563231655,
            "unit": "iter/sec",
            "range": "stddev: 0.0005443806423328515",
            "extra": "mean: 8.768760330578477 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.42954599539934,
            "unit": "iter/sec",
            "range": "stddev: 0.00034706883637631306",
            "extra": "mean: 6.876181818181809 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.58098855898635,
            "unit": "iter/sec",
            "range": "stddev: 0.00039919061470324057",
            "extra": "mean: 5.086961904761908 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.00416482873584,
            "unit": "iter/sec",
            "range": "stddev: 0.00011867955995311185",
            "extra": "mean: 3.144612903225841 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.230563357387798,
            "unit": "iter/sec",
            "range": "stddev: 0.00139233432735155",
            "extra": "mean: 75.5825714285712 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.76331141602468,
            "unit": "iter/sec",
            "range": "stddev: 0.0019929585855728445",
            "extra": "mean: 72.65693333333255 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.94432665648466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005695402566809754",
            "extra": "mean: 6.062651685393302 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.7900428015818,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869056314300558",
            "extra": "mean: 4.135819607843082 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.24846564596146,
            "unit": "iter/sec",
            "range": "stddev: 0.00021783451024141298",
            "extra": "mean: 2.261172344689472 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.94294294291495,
            "unit": "iter/sec",
            "range": "stddev: 0.00017639807551808086",
            "extra": "mean: 2.2576271186442107 msec\nrounds: 472"
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
        "date": 1647927093239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.5574192399025,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823241736279855",
            "extra": "mean: 8.093403100775134 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.8524320053335,
            "unit": "iter/sec",
            "range": "stddev: 0.000579320200540009",
            "extra": "mean: 6.718062893081714 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.28958923532517,
            "unit": "iter/sec",
            "range": "stddev: 0.00030525604194101924",
            "extra": "mean: 4.824168949771769 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.0362286800134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522332432091302",
            "extra": "mean: 3.15421364985169 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.74607017389715,
            "unit": "iter/sec",
            "range": "stddev: 0.0010132646286095054",
            "extra": "mean: 10.025457627118557 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.55758430851643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379333006533834",
            "extra": "mean: 7.376938775510289 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.17815207618403,
            "unit": "iter/sec",
            "range": "stddev: 0.0004038926362988872",
            "extra": "mean: 5.097407582938486 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.5850563270111,
            "unit": "iter/sec",
            "range": "stddev: 0.0003046948385696151",
            "extra": "mean: 3.3158141592920702 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.802173447970235,
            "unit": "iter/sec",
            "range": "stddev: 0.001416072879868184",
            "extra": "mean: 72.45235714285718 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.1138139167294,
            "unit": "iter/sec",
            "range": "stddev: 0.006262089939430939",
            "extra": "mean: 76.25546666666452 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.84577502104068,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167502592105142",
            "extra": "mean: 6.416599999999939 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.42922276737164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004911279971137673",
            "extra": "mean: 4.39697233201584 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.83738870527424,
            "unit": "iter/sec",
            "range": "stddev: 0.00019013573906618883",
            "extra": "mean: 2.218094650205974 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.6652679527277,
            "unit": "iter/sec",
            "range": "stddev: 0.00018612710833258603",
            "extra": "mean: 2.3659384288747463 msec\nrounds: 471"
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
        "date": 1647973880725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.4985746847398,
            "unit": "iter/sec",
            "range": "stddev: 0.0009869510047939404",
            "extra": "mean: 9.216710937499982 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.995243531036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010678449068199942",
            "extra": "mean: 7.246626582278495 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.8787588961718,
            "unit": "iter/sec",
            "range": "stddev: 0.0009550587512086365",
            "extra": "mean: 5.2665185185185095 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.03896245214526,
            "unit": "iter/sec",
            "range": "stddev: 0.00044559135486068826",
            "extra": "mean: 3.459741176470508 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.0973611809858,
            "unit": "iter/sec",
            "range": "stddev: 0.0014110313104206283",
            "extra": "mean: 10.193954128440202 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.37720922518818,
            "unit": "iter/sec",
            "range": "stddev: 0.001041761007145843",
            "extra": "mean: 7.850697986577141 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.92611940231384,
            "unit": "iter/sec",
            "range": "stddev: 0.0009087106731443446",
            "extra": "mean: 5.436965686274463 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.94410986005124,
            "unit": "iter/sec",
            "range": "stddev: 0.0004142888829667925",
            "extra": "mean: 3.3228761329305714 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.223506822244863,
            "unit": "iter/sec",
            "range": "stddev: 0.010202352174941061",
            "extra": "mean: 81.80958333333254 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.802235636120072,
            "unit": "iter/sec",
            "range": "stddev: 0.0051837514423906245",
            "extra": "mean: 78.1113571428581 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.33071319930215,
            "unit": "iter/sec",
            "range": "stddev: 0.000829511145524504",
            "extra": "mean: 6.521850574712851 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.43750407475224,
            "unit": "iter/sec",
            "range": "stddev: 0.00032679033903166123",
            "extra": "mean: 4.302231707316898 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 435.40779164932894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002567442248300348",
            "extra": "mean: 2.2966975308640905 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 404.49773706951976,
            "unit": "iter/sec",
            "range": "stddev: 0.00030269668639435073",
            "extra": "mean: 2.4722017167382404 msec\nrounds: 466"
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
        "date": 1647982631733,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.95676645329912,
            "unit": "iter/sec",
            "range": "stddev: 0.0008909478854392975",
            "extra": "mean: 8.698922480620114 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.29274814439216,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949221001868003",
            "extra": "mean: 6.6536809815950715 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.39057666255857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480624162268576",
            "extra": "mean: 5.637278026905855 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 265.5087664885653,
            "unit": "iter/sec",
            "range": "stddev: 0.0008329268376811339",
            "extra": "mean: 3.7663539823008714 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.20378964315691,
            "unit": "iter/sec",
            "range": "stddev: 0.0012323672903706692",
            "extra": "mean: 9.689566666666554 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.31378509944824,
            "unit": "iter/sec",
            "range": "stddev: 0.0009283841932740107",
            "extra": "mean: 7.673785234899405 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.19767422178253,
            "unit": "iter/sec",
            "range": "stddev: 0.0007622974900172693",
            "extra": "mean: 5.370636363636243 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.78705380182464,
            "unit": "iter/sec",
            "range": "stddev: 0.00015820055427285832",
            "extra": "mean: 3.1868746268657726 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.797001170433555,
            "unit": "iter/sec",
            "range": "stddev: 0.004187119522707689",
            "extra": "mean: 78.14330769230683 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.201281426595278,
            "unit": "iter/sec",
            "range": "stddev: 0.009793403798554269",
            "extra": "mean: 89.2754999999994 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.22853166573654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003777122735316252",
            "extra": "mean: 6.241085714285687 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.09700223120853,
            "unit": "iter/sec",
            "range": "stddev: 0.000527252177843442",
            "extra": "mean: 4.40340466926065 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 434.96577722089665,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845138771415728",
            "extra": "mean: 2.2990314465410266 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 412.3349563539155,
            "unit": "iter/sec",
            "range": "stddev: 0.00023920724045874646",
            "extra": "mean: 2.425212765957392 msec\nrounds: 470"
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
        "date": 1647984569926,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.45016238509264,
            "unit": "iter/sec",
            "range": "stddev: 0.0008694082573845084",
            "extra": "mean: 8.66174615384624 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.47163939962672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005921347869367461",
            "extra": "mean: 6.970018633540489 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.55936832041274,
            "unit": "iter/sec",
            "range": "stddev: 0.00044447110793745606",
            "extra": "mean: 4.986054794520515 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.53411233094505,
            "unit": "iter/sec",
            "range": "stddev: 0.0004426144218749043",
            "extra": "mean: 3.383704142011802 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.54692305515361,
            "unit": "iter/sec",
            "range": "stddev: 0.001015481621842485",
            "extra": "mean: 9.128508333333377 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.1784517265098,
            "unit": "iter/sec",
            "range": "stddev: 0.0007938249128303306",
            "extra": "mean: 7.50872222222227 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.98155968599082,
            "unit": "iter/sec",
            "range": "stddev: 0.0003454891008519181",
            "extra": "mean: 5.155129186602881 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.3809364734754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005394728452479425",
            "extra": "mean: 3.5921999999999343 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.399504401347132,
            "unit": "iter/sec",
            "range": "stddev: 0.008045046348929052",
            "extra": "mean: 80.64838461538478 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.569119705681613,
            "unit": "iter/sec",
            "range": "stddev: 0.005418544770376638",
            "extra": "mean: 86.43699999999986 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.8857491791128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007754528208747665",
            "extra": "mean: 6.215590909091073 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.85869569071298,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400305091327356",
            "extra": "mean: 4.3886848249029 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 405.13008526146683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006762619475240673",
            "extra": "mean: 2.4683429752066184 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 402.07150040116846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003955862997438386",
            "extra": "mean: 2.4871198257082288 msec\nrounds: 459"
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
        "date": 1647986264888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.75254445359553,
            "unit": "iter/sec",
            "range": "stddev: 0.00030675345817219034",
            "extra": "mean: 7.648034722222197 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.24236034095017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001737195939789648",
            "extra": "mean: 5.979346368715084 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.4111063096627,
            "unit": "iter/sec",
            "range": "stddev: 0.00025838320480514766",
            "extra": "mean: 4.456107438016502 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.0641958105176,
            "unit": "iter/sec",
            "range": "stddev: 0.00011742698436476495",
            "extra": "mean: 2.8403910761155733 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.26709912370463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005462359205653816",
            "extra": "mean: 8.384541984732884 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.52421485569022,
            "unit": "iter/sec",
            "range": "stddev: 0.00039266254394950014",
            "extra": "mean: 6.778548192771002 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.4598244940593,
            "unit": "iter/sec",
            "range": "stddev: 0.00028771668373531005",
            "extra": "mean: 4.867131578947271 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.34090890845005,
            "unit": "iter/sec",
            "range": "stddev: 0.00024029656394003966",
            "extra": "mean: 3.131449720670408 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.441149272027486,
            "unit": "iter/sec",
            "range": "stddev: 0.002633358360941569",
            "extra": "mean: 74.39839999999928 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.778239239441195,
            "unit": "iter/sec",
            "range": "stddev: 0.001522840472406558",
            "extra": "mean: 72.57821428571428 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.21215353546987,
            "unit": "iter/sec",
            "range": "stddev: 0.0004274978703694197",
            "extra": "mean: 6.016407216495145 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.59280812261053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003895725027611827",
            "extra": "mean: 4.299359073359024 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 482.29295852283377,
            "unit": "iter/sec",
            "range": "stddev: 0.00015627587772106121",
            "extra": "mean: 2.07342857142845 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.6852496838934,
            "unit": "iter/sec",
            "range": "stddev: 0.00016157065241732078",
            "extra": "mean: 2.2538499999999027 msec\nrounds: 520"
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
        "date": 1648221851413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.69508518544598,
            "unit": "iter/sec",
            "range": "stddev: 0.000374319877935227",
            "extra": "mean: 8.150285714285639 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.27212478419733,
            "unit": "iter/sec",
            "range": "stddev: 0.00041059349366683544",
            "extra": "mean: 6.524343558282178 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.3084783444433,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516955916799686",
            "extra": "mean: 4.800572727272651 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.74540591599,
            "unit": "iter/sec",
            "range": "stddev: 0.0002128132372040666",
            "extra": "mean: 3.1080474860334357 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.68718186024833,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760541584283602",
            "extra": "mean: 8.644000000000116 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.32641829223104,
            "unit": "iter/sec",
            "range": "stddev: 0.00030107079872127604",
            "extra": "mean: 6.881061349693077 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.07578907770835,
            "unit": "iter/sec",
            "range": "stddev: 0.0002987423217842796",
            "extra": "mean: 4.998105990783349 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.40116011750507,
            "unit": "iter/sec",
            "range": "stddev: 0.00011184303626337974",
            "extra": "mean: 3.073129793510544 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.558507866839928,
            "unit": "iter/sec",
            "range": "stddev: 0.0015625013336261094",
            "extra": "mean: 73.75442857142873 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.526052529777644,
            "unit": "iter/sec",
            "range": "stddev: 0.004399310770694102",
            "extra": "mean: 73.93139999999978 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.93752810516503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002460409525361925",
            "extra": "mean: 5.816065934066199 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.77870974095504,
            "unit": "iter/sec",
            "range": "stddev: 0.00020989570530801345",
            "extra": "mean: 3.971741697416989 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.6495012864041,
            "unit": "iter/sec",
            "range": "stddev: 0.00013107572488056353",
            "extra": "mean: 2.120218503936805 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.0388822387806,
            "unit": "iter/sec",
            "range": "stddev: 0.00009768952974561789",
            "extra": "mean: 2.202454545454758 msec\nrounds: 473"
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
        "date": 1648488355429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.5266572096202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306975877567474",
            "extra": "mean: 8.436920634920556 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.64547178277328,
            "unit": "iter/sec",
            "range": "stddev: 0.0009999697807158367",
            "extra": "mean: 6.865987577639736 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.95835854215355,
            "unit": "iter/sec",
            "range": "stddev: 0.0004892767610615987",
            "extra": "mean: 5.129300469483496 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.04757923689056,
            "unit": "iter/sec",
            "range": "stddev: 0.00021579661029454494",
            "extra": "mean: 3.2357477203647074 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.10910194014474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004664803514033357",
            "extra": "mean: 8.91988235294135 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.73394669072334,
            "unit": "iter/sec",
            "range": "stddev: 0.000682559062653322",
            "extra": "mean: 7.367353741496595 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.61936952596713,
            "unit": "iter/sec",
            "range": "stddev: 0.0004547279621744727",
            "extra": "mean: 5.446048543689078 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.4756251559692,
            "unit": "iter/sec",
            "range": "stddev: 0.00014680906900075644",
            "extra": "mean: 3.2105240963855746 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.113022073899481,
            "unit": "iter/sec",
            "range": "stddev: 0.0018304747792807984",
            "extra": "mean: 76.2600714285708 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.503998148023129,
            "unit": "iter/sec",
            "range": "stddev: 0.0014036442052529543",
            "extra": "mean: 74.05214285714275 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.5004402311693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419140115060541",
            "extra": "mean: 6.042280000000062 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.2831364482068,
            "unit": "iter/sec",
            "range": "stddev: 0.0003165075088957375",
            "extra": "mean: 4.214374501991952 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.87236256176857,
            "unit": "iter/sec",
            "range": "stddev: 0.00013747295625801044",
            "extra": "mean: 2.2179225941421548 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.9718910385372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000871945807208059",
            "extra": "mean: 2.314965442764857 msec\nrounds: 463"
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
        "date": 1648490045562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.7495054622765,
            "unit": "iter/sec",
            "range": "stddev: 0.00050646957619929",
            "extra": "mean: 8.56534677419353 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.98258859109922,
            "unit": "iter/sec",
            "range": "stddev: 0.0004897352833515198",
            "extra": "mean: 6.712193750000017 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.67006398279057,
            "unit": "iter/sec",
            "range": "stddev: 0.00028630832037679425",
            "extra": "mean: 4.838630136986216 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.7115160476841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002496588800956633",
            "extra": "mean: 3.1376337209301997 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.99164178495523,
            "unit": "iter/sec",
            "range": "stddev: 0.0012324689094720552",
            "extra": "mean: 9.804725000000047 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.23678319582137,
            "unit": "iter/sec",
            "range": "stddev: 0.00038306580757503693",
            "extra": "mean: 7.030530201342306 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.63087255976296,
            "unit": "iter/sec",
            "range": "stddev: 0.000295800120767994",
            "extra": "mean: 5.03446411483253 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.19317043257814,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508250477478717",
            "extra": "mean: 3.172657575757678 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.123518556655348,
            "unit": "iter/sec",
            "range": "stddev: 0.0016458476266824806",
            "extra": "mean: 76.19907692307629 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.155706240597096,
            "unit": "iter/sec",
            "range": "stddev: 0.004237735799786312",
            "extra": "mean: 76.01264285714342 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.34405671499505,
            "unit": "iter/sec",
            "range": "stddev: 0.00024521504870314093",
            "extra": "mean: 5.870471910112565 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.81776841577056,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948726298866427",
            "extra": "mean: 4.152517509727544 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.5491387689559,
            "unit": "iter/sec",
            "range": "stddev: 0.00020519635443143333",
            "extra": "mean: 2.13881262327415 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.79040201072496,
            "unit": "iter/sec",
            "range": "stddev: 0.0001902430183547798",
            "extra": "mean: 2.2635168067225777 msec\nrounds: 476"
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
        "date": 1648490879594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.64364323605952,
            "unit": "iter/sec",
            "range": "stddev: 0.0003309698033418057",
            "extra": "mean: 7.713451851851819 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.227785986089,
            "unit": "iter/sec",
            "range": "stddev: 0.00034535953726853554",
            "extra": "mean: 6.933476744186114 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.70105367916034,
            "unit": "iter/sec",
            "range": "stddev: 0.00029494199641379783",
            "extra": "mean: 4.861423809523784 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.11274916439277,
            "unit": "iter/sec",
            "range": "stddev: 0.00013977298163709914",
            "extra": "mean: 3.1045030120482506 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.60274810961367,
            "unit": "iter/sec",
            "range": "stddev: 0.0007234196329009341",
            "extra": "mean: 9.04136666666675 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.65603535546697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490830319169074",
            "extra": "mean: 7.371585034013746 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.34517754329335,
            "unit": "iter/sec",
            "range": "stddev: 0.00019901814727237759",
            "extra": "mean: 4.966595238095432 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.4022155330009,
            "unit": "iter/sec",
            "range": "stddev: 0.0002089485673919037",
            "extra": "mean: 3.1308486646883606 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.840773491507283,
            "unit": "iter/sec",
            "range": "stddev: 0.0030589782724667887",
            "extra": "mean: 77.8769285714281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.885173319361757,
            "unit": "iter/sec",
            "range": "stddev: 0.0012516257694160872",
            "extra": "mean: 72.01926666666671 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.4928022056703,
            "unit": "iter/sec",
            "range": "stddev: 0.0003279051304112006",
            "extra": "mean: 5.899955555555418 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.0161357976304,
            "unit": "iter/sec",
            "range": "stddev: 0.00033532936769501787",
            "extra": "mean: 4.328701960784236 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.8392589984894,
            "unit": "iter/sec",
            "range": "stddev: 0.00012261189693904513",
            "extra": "mean: 2.1104203187249793 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.8265016324003,
            "unit": "iter/sec",
            "range": "stddev: 0.00016231933262696288",
            "extra": "mean: 2.310394572024844 msec\nrounds: 479"
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
        "date": 1648605557973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.52412298420641,
            "unit": "iter/sec",
            "range": "stddev: 0.0004252329321955487",
            "extra": "mean: 8.030572519083965 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.52976297658114,
            "unit": "iter/sec",
            "range": "stddev: 0.00037013333770055104",
            "extra": "mean: 6.51339506172843 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.56775235700425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005027012775351838",
            "extra": "mean: 5.010829596412513 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.8442314547175,
            "unit": "iter/sec",
            "range": "stddev: 0.00023649252865130197",
            "extra": "mean: 3.156124999999936 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.3427891583661,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221667077840619",
            "extra": "mean: 8.901327868852636 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.75115797067372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880656461730635",
            "extra": "mean: 7.2594671052630515 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.35464539995272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004148109015576509",
            "extra": "mean: 5.145233333333247 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.02212827202396,
            "unit": "iter/sec",
            "range": "stddev: 0.00027790549300319583",
            "extra": "mean: 3.204900900900818 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.896498232258647,
            "unit": "iter/sec",
            "range": "stddev: 0.0025551011936693355",
            "extra": "mean: 77.54042857142807 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.631660771891584,
            "unit": "iter/sec",
            "range": "stddev: 0.004565599099901977",
            "extra": "mean: 79.16615384615419 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.85224423491087,
            "unit": "iter/sec",
            "range": "stddev: 0.00038328116403010354",
            "extra": "mean: 6.585348837209348 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.06023587879113,
            "unit": "iter/sec",
            "range": "stddev: 0.00036292498003230627",
            "extra": "mean: 4.200617529880765 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.6888556983723,
            "unit": "iter/sec",
            "range": "stddev: 0.00010524481514441327",
            "extra": "mean: 2.129069037657104 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.5752735023176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000779055484649477",
            "extra": "mean: 2.229280254777203 msec\nrounds: 471"
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
        "date": 1648608517892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.55884970690269,
            "unit": "iter/sec",
            "range": "stddev: 0.00021819592952013748",
            "extra": "mean: 7.839518796992461 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.37794244628708,
            "unit": "iter/sec",
            "range": "stddev: 0.00039008428598511836",
            "extra": "mean: 6.562629629629617 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.20350094201845,
            "unit": "iter/sec",
            "range": "stddev: 0.00012366172625230616",
            "extra": "mean: 4.668457777777799 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.65748755796847,
            "unit": "iter/sec",
            "range": "stddev: 0.00012152314349820053",
            "extra": "mean: 3.015158823529398 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.55350127108856,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996338659459003",
            "extra": "mean: 8.653999999999996 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.95505670474202,
            "unit": "iter/sec",
            "range": "stddev: 0.0002850889656321517",
            "extra": "mean: 6.758809210526628 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.0014417733262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003377473161402635",
            "extra": "mean: 4.95045971563975 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.3895313451025,
            "unit": "iter/sec",
            "range": "stddev: 0.00007753234493953614",
            "extra": "mean: 3.1212006079027153 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.56436679598041,
            "unit": "iter/sec",
            "range": "stddev: 0.0010460555739232442",
            "extra": "mean: 73.72257142857082 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.47807502281643,
            "unit": "iter/sec",
            "range": "stddev: 0.001711219435386471",
            "extra": "mean: 74.19457142857156 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.1489351649296,
            "unit": "iter/sec",
            "range": "stddev: 0.00040879289657380077",
            "extra": "mean: 5.911949720670393 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.65865308761911,
            "unit": "iter/sec",
            "range": "stddev: 0.0003405742228861001",
            "extra": "mean: 4.121015209125554 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.27561355400906,
            "unit": "iter/sec",
            "range": "stddev: 0.00011469027525437036",
            "extra": "mean: 2.121900584795267 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.53274646628785,
            "unit": "iter/sec",
            "range": "stddev: 0.00014414374850648163",
            "extra": "mean: 2.2344733606556964 msec\nrounds: 488"
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
        "date": 1648614912176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.68289680115562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764644455863393",
            "extra": "mean: 8.286178294573588 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.34669455376564,
            "unit": "iter/sec",
            "range": "stddev: 0.00027003805329944207",
            "extra": "mean: 6.521170886075964 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.98793949893033,
            "unit": "iter/sec",
            "range": "stddev: 0.00032624325580511015",
            "extra": "mean: 4.854653153153138 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.04779907733814,
            "unit": "iter/sec",
            "range": "stddev: 0.000191659541861652",
            "extra": "mean: 3.134326589595426 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.69180517870204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984684972749238",
            "extra": "mean: 9.034092436974799 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.8530276330335,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049051721344659",
            "extra": "mean: 6.951539473684087 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.32810160879237,
            "unit": "iter/sec",
            "range": "stddev: 0.0003153062120213647",
            "extra": "mean: 5.067701923076946 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.2359254323689,
            "unit": "iter/sec",
            "range": "stddev: 0.00013926871485667064",
            "extra": "mean: 3.1722272727273313 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.906401851884205,
            "unit": "iter/sec",
            "range": "stddev: 0.003052559492629073",
            "extra": "mean: 77.48092857142908 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.511100816939111,
            "unit": "iter/sec",
            "range": "stddev: 0.0017727252890831992",
            "extra": "mean: 74.01321428571401 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.62390938103115,
            "unit": "iter/sec",
            "range": "stddev: 0.0004908273319214334",
            "extra": "mean: 6.187203389830664 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.02541426389035,
            "unit": "iter/sec",
            "range": "stddev: 0.00015439472251726967",
            "extra": "mean: 4.0812093023257106 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.30650897581984,
            "unit": "iter/sec",
            "range": "stddev: 0.00012404964734993035",
            "extra": "mean: 2.158398340249069 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.6784757223635,
            "unit": "iter/sec",
            "range": "stddev: 0.0001508791656426314",
            "extra": "mean: 2.2692281449889116 msec\nrounds: 469"
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
        "date": 1648735613224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.48262368031145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006210887368948423",
            "extra": "mean: 8.231629921259833 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.30428851688134,
            "unit": "iter/sec",
            "range": "stddev: 0.0007344523027369832",
            "extra": "mean: 6.978158227848144 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.02936077136334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002470609403614618",
            "extra": "mean: 4.87735023041476 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.6879781828449,
            "unit": "iter/sec",
            "range": "stddev: 0.00042403149940241304",
            "extra": "mean: 3.6011641791044533 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.01843055223468,
            "unit": "iter/sec",
            "range": "stddev: 0.0010408809906606335",
            "extra": "mean: 9.344184873949443 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.40905018746977,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591087482157756",
            "extra": "mean: 7.330891891891919 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.94121754008526,
            "unit": "iter/sec",
            "range": "stddev: 0.0007013747159952581",
            "extra": "mean: 5.466236714975861 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.16878605795085,
            "unit": "iter/sec",
            "range": "stddev: 0.00032415139116881626",
            "extra": "mean: 3.3094086687306508 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.042456142301036,
            "unit": "iter/sec",
            "range": "stddev: 0.0038373271864543565",
            "extra": "mean: 83.03953846153871 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.596281696874915,
            "unit": "iter/sec",
            "range": "stddev: 0.00948833850590018",
            "extra": "mean: 86.23453846153896 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.29619609068487,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967343464450539",
            "extra": "mean: 6.161573863636572 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.82356769305915,
            "unit": "iter/sec",
            "range": "stddev: 0.0006056577866059926",
            "extra": "mean: 4.549102766798443 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.511441771225,
            "unit": "iter/sec",
            "range": "stddev: 0.00017561105227014933",
            "extra": "mean: 2.2001646341465317 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.76649041232065,
            "unit": "iter/sec",
            "range": "stddev: 0.00022190717002421132",
            "extra": "mean: 2.326844978166152 msec\nrounds: 458"
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
        "date": 1648766197830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.72831911775816,
            "unit": "iter/sec",
            "range": "stddev: 0.0006064276605313048",
            "extra": "mean: 8.215015267175545 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.038979314226,
            "unit": "iter/sec",
            "range": "stddev: 0.00038233134378980334",
            "extra": "mean: 6.620807453416181 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.66195482855017,
            "unit": "iter/sec",
            "range": "stddev: 0.0003944101784262929",
            "extra": "mean: 5.008465437788088 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8261161979779,
            "unit": "iter/sec",
            "range": "stddev: 0.0002318736257170745",
            "extra": "mean: 3.1365059171596883 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.13165178020675,
            "unit": "iter/sec",
            "range": "stddev: 0.0011215750051039954",
            "extra": "mean: 9.696344262294867 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.90263910217806,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792660702651993",
            "extra": "mean: 7.412753424657462 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.3603064556495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007570037222731382",
            "extra": "mean: 5.28093779904297 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.8880986883927,
            "unit": "iter/sec",
            "range": "stddev: 0.0003075136789872338",
            "extra": "mean: 3.4735718654434216 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.89133890437512,
            "unit": "iter/sec",
            "range": "stddev: 0.005171381514569235",
            "extra": "mean: 77.57146153846097 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.681285773680733,
            "unit": "iter/sec",
            "range": "stddev: 0.007536194189552316",
            "extra": "mean: 78.85635714285704 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.364918845214,
            "unit": "iter/sec",
            "range": "stddev: 0.0004735474138004611",
            "extra": "mean: 6.158965909091 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.67943172334944,
            "unit": "iter/sec",
            "range": "stddev: 0.00029939154020660106",
            "extra": "mean: 4.207347656249722 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.2374904328499,
            "unit": "iter/sec",
            "range": "stddev: 0.00021715157500201045",
            "extra": "mean: 2.25104819277102 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.61269114275933,
            "unit": "iter/sec",
            "range": "stddev: 0.00016448822711609792",
            "extra": "mean: 2.2799157894738635 msec\nrounds: 475"
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
        "date": 1648768514278,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.90935985936629,
            "unit": "iter/sec",
            "range": "stddev: 0.00036538868679229596",
            "extra": "mean: 8.481090909090911 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.14832005667782,
            "unit": "iter/sec",
            "range": "stddev: 0.0005126968339622762",
            "extra": "mean: 6.7958641975309355 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.08341808750802,
            "unit": "iter/sec",
            "range": "stddev: 0.000522399930725385",
            "extra": "mean: 5.048378151260629 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.9928184787064,
            "unit": "iter/sec",
            "range": "stddev: 0.00019206355937235114",
            "extra": "mean: 3.086488165680507 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.61021766381238,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562513372626875",
            "extra": "mean: 8.802025210083938 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.74618221979694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006376776525376212",
            "extra": "mean: 7.53317333333347 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.36890469631714,
            "unit": "iter/sec",
            "range": "stddev: 0.000264080902553086",
            "extra": "mean: 5.041112676056257 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.246903241021,
            "unit": "iter/sec",
            "range": "stddev: 0.00013782324619649036",
            "extra": "mean: 3.223239263803809 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.329546375029933,
            "unit": "iter/sec",
            "range": "stddev: 0.002467643389438466",
            "extra": "mean: 75.02130769230729 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.994009761499838,
            "unit": "iter/sec",
            "range": "stddev: 0.004242108135809324",
            "extra": "mean: 76.95853846153912 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.10016582783106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005095496870246474",
            "extra": "mean: 6.285348571428528 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.44919261731917,
            "unit": "iter/sec",
            "range": "stddev: 0.00031643173064750945",
            "extra": "mean: 4.247200803212447 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.41058634807763,
            "unit": "iter/sec",
            "range": "stddev: 0.00012882306550814326",
            "extra": "mean: 2.1625802469134094 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.2867192871584,
            "unit": "iter/sec",
            "range": "stddev: 0.00013721146693957594",
            "extra": "mean: 2.29207068607058 msec\nrounds: 481"
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
        "date": 1648769476393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.22791794605162,
            "unit": "iter/sec",
            "range": "stddev: 0.0008759458251654667",
            "extra": "mean: 8.910438848920851 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.23704030897164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005450957211702011",
            "extra": "mean: 6.791769230769213 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.89421767286456,
            "unit": "iter/sec",
            "range": "stddev: 0.0005221892984091182",
            "extra": "mean: 5.211204444444332 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.6593239940137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572599969750817",
            "extra": "mean: 3.1283304597701247 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.47151620762769,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068445747400577",
            "extra": "mean: 9.392183333333232 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.791488524171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124387521394631",
            "extra": "mean: 7.587743421052541 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.6957306884497,
            "unit": "iter/sec",
            "range": "stddev: 0.0004895521648878123",
            "extra": "mean: 5.189528571428494 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.4481675990339,
            "unit": "iter/sec",
            "range": "stddev: 0.00036361483972463076",
            "extra": "mean: 3.4077568389058572 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.587456743610128,
            "unit": "iter/sec",
            "range": "stddev: 0.010964064204191446",
            "extra": "mean: 86.30021428571436 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.922782681255994,
            "unit": "iter/sec",
            "range": "stddev: 0.007143464397923869",
            "extra": "mean: 77.38271428571356 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.65233926143227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005148548981291791",
            "extra": "mean: 6.224621468926655 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.20402581773874,
            "unit": "iter/sec",
            "range": "stddev: 0.0004016668881342339",
            "extra": "mean: 4.251627906976844 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.57734198098603,
            "unit": "iter/sec",
            "range": "stddev: 0.00013638202375987246",
            "extra": "mean: 2.1295746421267734 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.03484176118656,
            "unit": "iter/sec",
            "range": "stddev: 0.0001722275983225711",
            "extra": "mean: 2.3638714859437613 msec\nrounds: 498"
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
        "date": 1648770707432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.32698684520754,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469840463352253",
            "extra": "mean: 8.451157480314913 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.15605991306128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589403944438702",
            "extra": "mean: 6.985383647798774 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.67702011953014,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188098915149795",
            "extra": "mean: 5.008087557603687 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.11116327978607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002443889733994701",
            "extra": "mean: 3.1634441176470327 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.47725743068345,
            "unit": "iter/sec",
            "range": "stddev: 0.0006900203444042054",
            "extra": "mean: 9.75826271186472 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.44201043011935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005069133637035991",
            "extra": "mean: 7.493891891891706 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.23980452156752,
            "unit": "iter/sec",
            "range": "stddev: 0.00020291611094087387",
            "extra": "mean: 5.14827536231877 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.4153418073344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001022462034106236",
            "extra": "mean: 3.082468277945639 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.877503278560098,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367388081468911",
            "extra": "mean: 72.0590714285717 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.971111467115708,
            "unit": "iter/sec",
            "range": "stddev: 0.001018297280946493",
            "extra": "mean: 71.57626666666678 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.4055361333354,
            "unit": "iter/sec",
            "range": "stddev: 0.00017361355196300797",
            "extra": "mean: 5.800277777777493 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.3903714859586,
            "unit": "iter/sec",
            "range": "stddev: 0.00010800434329439757",
            "extra": "mean: 4.02592094861668 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.69511289559125,
            "unit": "iter/sec",
            "range": "stddev: 0.00006267958618665407",
            "extra": "mean: 2.097776908023444 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.6541834468763,
            "unit": "iter/sec",
            "range": "stddev: 0.000051626474085866495",
            "extra": "mean: 2.214083333333323 msec\nrounds: 468"
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
        "date": 1648771378647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.2697801505999,
            "unit": "iter/sec",
            "range": "stddev: 0.0005463618646606481",
            "extra": "mean: 8.31464062500003 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.1926015279457,
            "unit": "iter/sec",
            "range": "stddev: 0.00106810505070018",
            "extra": "mean: 7.507924528301865 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.92398634543554,
            "unit": "iter/sec",
            "range": "stddev: 0.0009760873135667138",
            "extra": "mean: 5.652144859813119 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.7720711648205,
            "unit": "iter/sec",
            "range": "stddev: 0.00030219652723257495",
            "extra": "mean: 3.3247767857142847 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.31222078958193,
            "unit": "iter/sec",
            "range": "stddev: 0.0020151332979027434",
            "extra": "mean: 10.06925423728821 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.26639428368844,
            "unit": "iter/sec",
            "range": "stddev: 0.0008688482519635576",
            "extra": "mean: 8.246307692307713 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.14014531660234,
            "unit": "iter/sec",
            "range": "stddev: 0.000511113122542231",
            "extra": "mean: 5.520587378640825 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.9345097125613,
            "unit": "iter/sec",
            "range": "stddev: 0.000248845449219708",
            "extra": "mean: 3.3340611620794762 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.376993291437973,
            "unit": "iter/sec",
            "range": "stddev: 0.0020164230393509884",
            "extra": "mean: 74.75521428571368 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.872770137379959,
            "unit": "iter/sec",
            "range": "stddev: 0.0013023806372075434",
            "extra": "mean: 77.68335714285764 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 139.8084542417553,
            "unit": "iter/sec",
            "range": "stddev: 0.0009480930124382267",
            "extra": "mean: 7.152643274853826 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.31941666312693,
            "unit": "iter/sec",
            "range": "stddev: 0.00044544803876049604",
            "extra": "mean: 4.457928853754805 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 427.58705283679114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973648399715059",
            "extra": "mean: 2.3387050505051126 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 402.33077924620255,
            "unit": "iter/sec",
            "range": "stddev: 0.000274072786014601",
            "extra": "mean: 2.4855170212768125 msec\nrounds: 470"
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
        "date": 1648866311712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.04319745401781,
            "unit": "iter/sec",
            "range": "stddev: 0.000754074855002878",
            "extra": "mean: 7.631071428571432 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.40986016699998,
            "unit": "iter/sec",
            "range": "stddev: 0.0001180443277514397",
            "extra": "mean: 6.1572616279069345 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.00425307688948,
            "unit": "iter/sec",
            "range": "stddev: 0.00038499492947744227",
            "extra": "mean: 4.484219409282794 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 354.700976616355,
            "unit": "iter/sec",
            "range": "stddev: 0.00021051662359746512",
            "extra": "mean: 2.8192761394102424 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.85650832352724,
            "unit": "iter/sec",
            "range": "stddev: 0.0004847581809903694",
            "extra": "mean: 8.139576923077003 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.0226389768475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390834129507378",
            "extra": "mean: 6.450670731707445 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.4592581903322,
            "unit": "iter/sec",
            "range": "stddev: 0.00028734206164610115",
            "extra": "mean: 4.619807017543699 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 345.30550525119247,
            "unit": "iter/sec",
            "range": "stddev: 0.00016512937520181216",
            "extra": "mean: 2.8959862637363694 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.153800861683457,
            "unit": "iter/sec",
            "range": "stddev: 0.0020519362215100905",
            "extra": "mean: 70.6523999999997 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.70954531814768,
            "unit": "iter/sec",
            "range": "stddev: 0.0020550061684529858",
            "extra": "mean: 67.98306666666747 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.88415016280638,
            "unit": "iter/sec",
            "range": "stddev: 0.0001615360994680752",
            "extra": "mean: 5.49800518134697 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.79424295956744,
            "unit": "iter/sec",
            "range": "stddev: 0.00024788806006438487",
            "extra": "mean: 3.849200000000127 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 501.6095603474497,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384685225131007",
            "extra": "mean: 1.9935824175825725 msec\nrounds: 546"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 493.90014254453996,
            "unit": "iter/sec",
            "range": "stddev: 0.00004635220934136559",
            "extra": "mean: 2.024700772200769 msec\nrounds: 518"
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
        "date": 1649083123074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.68354399105263,
            "unit": "iter/sec",
            "range": "stddev: 0.0004588965952307662",
            "extra": "mean: 8.286133858267695 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.97414650345493,
            "unit": "iter/sec",
            "range": "stddev: 0.00035700596732127145",
            "extra": "mean: 6.80391772151909 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.577979416597,
            "unit": "iter/sec",
            "range": "stddev: 0.00025770704697467163",
            "extra": "mean: 4.888111627907065 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.8610173920906,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755504457966731",
            "extra": "mean: 3.1659494047619714 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.39694602440241,
            "unit": "iter/sec",
            "range": "stddev: 0.00043022862114127",
            "extra": "mean: 8.976906779661103 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.9116557830589,
            "unit": "iter/sec",
            "range": "stddev: 0.00036548268106609185",
            "extra": "mean: 7.14736734693897 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.7753792918871,
            "unit": "iter/sec",
            "range": "stddev: 0.0004982742380372147",
            "extra": "mean: 5.297300970873888 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.0825071457345,
            "unit": "iter/sec",
            "range": "stddev: 0.000274171078307059",
            "extra": "mean: 3.2778018292681437 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.69471654964868,
            "unit": "iter/sec",
            "range": "stddev: 0.003767435292982484",
            "extra": "mean: 78.77292857142797 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.413288455451077,
            "unit": "iter/sec",
            "range": "stddev: 0.003560758375617264",
            "extra": "mean: 74.5529333333323 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.17236592649422,
            "unit": "iter/sec",
            "range": "stddev: 0.00047887499586191665",
            "extra": "mean: 6.204537572253976 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.32315936436083,
            "unit": "iter/sec",
            "range": "stddev: 0.00038856812509582183",
            "extra": "mean: 4.322956692913242 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 449.8599362468208,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794798175364412",
            "extra": "mean: 2.2229141104295596 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.10402707632977,
            "unit": "iter/sec",
            "range": "stddev: 0.00020690888769801737",
            "extra": "mean: 2.33043722943695 msec\nrounds: 462"
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
        "date": 1649084148012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.33324035428662,
            "unit": "iter/sec",
            "range": "stddev: 0.0003077474153159043",
            "extra": "mean: 7.978729323308349 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.15499285276556,
            "unit": "iter/sec",
            "range": "stddev: 0.00035386686785091265",
            "extra": "mean: 6.529333333333395 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.36626031946776,
            "unit": "iter/sec",
            "range": "stddev: 0.00043775943368383377",
            "extra": "mean: 4.845753363228747 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.4391173738243,
            "unit": "iter/sec",
            "range": "stddev: 0.00017174635623522057",
            "extra": "mean: 3.0540028571428732 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.78038390845586,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548183454030004",
            "extra": "mean: 8.6370416666667 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.3638569147918,
            "unit": "iter/sec",
            "range": "stddev: 0.00024452296461142795",
            "extra": "mean: 6.926941558441683 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.07597769530096,
            "unit": "iter/sec",
            "range": "stddev: 0.00017523934106147802",
            "extra": "mean: 4.852579185520479 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.1160110499245,
            "unit": "iter/sec",
            "range": "stddev: 0.00015755812970851712",
            "extra": "mean: 3.0853150289016953 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.243517061906749,
            "unit": "iter/sec",
            "range": "stddev: 0.0022752780593264257",
            "extra": "mean: 75.50864285714327 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.526015939057228,
            "unit": "iter/sec",
            "range": "stddev: 0.002947776469525049",
            "extra": "mean: 73.93159999999975 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.08884857259227,
            "unit": "iter/sec",
            "range": "stddev: 0.0003754995485061015",
            "extra": "mean: 5.949234636872008 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.86550552622987,
            "unit": "iter/sec",
            "range": "stddev: 0.000304661612180625",
            "extra": "mean: 4.083874524714877 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 441.94681906611436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001841032520504951",
            "extra": "mean: 2.2627156862744653 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 410.16207616581005,
            "unit": "iter/sec",
            "range": "stddev: 0.00021688908919785643",
            "extra": "mean: 2.438060606060871 msec\nrounds: 462"
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
        "date": 1649167491124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.60573371583422,
            "unit": "iter/sec",
            "range": "stddev: 0.0011571720838302335",
            "extra": "mean: 8.725566929133821 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.919220183262,
            "unit": "iter/sec",
            "range": "stddev: 0.0007008506064629283",
            "extra": "mean: 7.411842424242379 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.5102737561404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037727015736478",
            "extra": "mean: 5.249060747663582 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.7599743497007,
            "unit": "iter/sec",
            "range": "stddev: 0.00034374123075429897",
            "extra": "mean: 3.3811201201201753 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.60327162649986,
            "unit": "iter/sec",
            "range": "stddev: 0.000812913017527726",
            "extra": "mean: 9.559930434782531 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.27628109859197,
            "unit": "iter/sec",
            "range": "stddev: 0.0008903055407679959",
            "extra": "mean: 7.392278911564554 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.86892239830598,
            "unit": "iter/sec",
            "range": "stddev: 0.000663650313416896",
            "extra": "mean: 5.818387559808523 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.5926275928234,
            "unit": "iter/sec",
            "range": "stddev: 0.00049273265056649",
            "extra": "mean: 3.5766322188449156 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.504455321562842,
            "unit": "iter/sec",
            "range": "stddev: 0.008588187321801477",
            "extra": "mean: 86.92284615384584 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.220967699287232,
            "unit": "iter/sec",
            "range": "stddev: 0.0019296479836115816",
            "extra": "mean: 75.6374285714284 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.02786106911645,
            "unit": "iter/sec",
            "range": "stddev: 0.0007747826374950274",
            "extra": "mean: 6.40911176470608 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.50562472072437,
            "unit": "iter/sec",
            "range": "stddev: 0.00028513682808148377",
            "extra": "mean: 4.228229249011906 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 431.2344239713552,
            "unit": "iter/sec",
            "range": "stddev: 0.00023863286415185103",
            "extra": "mean: 2.318924335378256 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.83774377080726,
            "unit": "iter/sec",
            "range": "stddev: 0.00031823703629598154",
            "extra": "mean: 2.416405982905761 msec\nrounds: 468"
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
        "date": 1649340242550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.96676892812876,
            "unit": "iter/sec",
            "range": "stddev: 0.0007152047005259979",
            "extra": "mean: 8.40570866141728 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.11095781308344,
            "unit": "iter/sec",
            "range": "stddev: 0.00032060080111097545",
            "extra": "mean: 6.661738853503215 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.6104304923889,
            "unit": "iter/sec",
            "range": "stddev: 0.0005487715525247894",
            "extra": "mean: 5.506291666666739 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.5778579102108,
            "unit": "iter/sec",
            "range": "stddev: 0.00016934830978384245",
            "extra": "mean: 3.100026785714315 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.9442363093879,
            "unit": "iter/sec",
            "range": "stddev: 0.000858986738753974",
            "extra": "mean: 9.013537190082777 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.88177413571657,
            "unit": "iter/sec",
            "range": "stddev: 0.0002597108781119528",
            "extra": "mean: 7.048121621621768 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.07309767188352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006665794970389468",
            "extra": "mean: 5.43262439024378 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.50321625690935,
            "unit": "iter/sec",
            "range": "stddev: 0.00013961659896982246",
            "extra": "mean: 3.199967065868207 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.726300900658424,
            "unit": "iter/sec",
            "range": "stddev: 0.002613636185449752",
            "extra": "mean: 78.57742857142901 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.465370913260015,
            "unit": "iter/sec",
            "range": "stddev: 0.001481003698861765",
            "extra": "mean: 74.26457142857095 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.0725772624304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003801031962765734",
            "extra": "mean: 6.132238888888805 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.62294214608372,
            "unit": "iter/sec",
            "range": "stddev: 0.00018384710550649487",
            "extra": "mean: 4.138679841897655 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 420.136234339608,
            "unit": "iter/sec",
            "range": "stddev: 0.0002747553929166623",
            "extra": "mean: 2.380180327868773 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.8648592007485,
            "unit": "iter/sec",
            "range": "stddev: 0.00007153119230233693",
            "extra": "mean: 2.247873661670235 msec\nrounds: 467"
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
        "date": 1649691038251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.72787735220007,
            "unit": "iter/sec",
            "range": "stddev: 0.00026957753660293945",
            "extra": "mean: 8.017453846153833 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.39101218371067,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455749906113637",
            "extra": "mean: 6.477060975609739 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.30200585420684,
            "unit": "iter/sec",
            "range": "stddev: 0.00022832129773632022",
            "extra": "mean: 4.823880000000043 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.4106946740369,
            "unit": "iter/sec",
            "range": "stddev: 0.00008487639022950506",
            "extra": "mean: 2.9725571030639912 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.50797127862589,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423091481494806",
            "extra": "mean: 9.0491209677416 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.72340315699793,
            "unit": "iter/sec",
            "range": "stddev: 0.00031918006697765987",
            "extra": "mean: 6.909732484076444 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.76674998709282,
            "unit": "iter/sec",
            "range": "stddev: 0.00017896331057297806",
            "extra": "mean: 4.956218009478622 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.8518473735249,
            "unit": "iter/sec",
            "range": "stddev: 0.00017329005005387783",
            "extra": "mean: 3.1167032640950754 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.55479282951457,
            "unit": "iter/sec",
            "range": "stddev: 0.001300029562216389",
            "extra": "mean: 73.77464285714298 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.827829692498911,
            "unit": "iter/sec",
            "range": "stddev: 0.0006925782893019896",
            "extra": "mean: 72.31792857142746 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.4829585711391,
            "unit": "iter/sec",
            "range": "stddev: 0.00045883728972478314",
            "extra": "mean: 6.390472222222125 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.7482083971767,
            "unit": "iter/sec",
            "range": "stddev: 0.00013082736026978647",
            "extra": "mean: 4.0040327272726275 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.1981045770638,
            "unit": "iter/sec",
            "range": "stddev: 0.00007659946468988487",
            "extra": "mean: 2.117755218216463 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.6329644942049,
            "unit": "iter/sec",
            "range": "stddev: 0.00010314614986289663",
            "extra": "mean: 2.2541156316914384 msec\nrounds: 467"
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
        "date": 1649779052196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.47553559233273,
            "unit": "iter/sec",
            "range": "stddev: 0.0005034834406940483",
            "extra": "mean: 8.232110236220418 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.15983760652196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008035025783409937",
            "extra": "mean: 7.185981366459522 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.1068494780607,
            "unit": "iter/sec",
            "range": "stddev: 0.00038313983330206483",
            "extra": "mean: 4.899394618834139 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6174905007637,
            "unit": "iter/sec",
            "range": "stddev: 0.0001937896573363815",
            "extra": "mean: 3.1683922155688653 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.72781587038561,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579016064270594",
            "extra": "mean: 8.870924999999996 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.11710438436666,
            "unit": "iter/sec",
            "range": "stddev: 0.000472762914134053",
            "extra": "mean: 7.240232876712329 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.4639980817803,
            "unit": "iter/sec",
            "range": "stddev: 0.000363065835286029",
            "extra": "mean: 5.064214285714235 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.57225677579163,
            "unit": "iter/sec",
            "range": "stddev: 0.00034924496451408385",
            "extra": "mean: 3.349273006135111 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.224361353882466,
            "unit": "iter/sec",
            "range": "stddev: 0.008357980952950721",
            "extra": "mean: 89.09192857142857 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.153197166425526,
            "unit": "iter/sec",
            "range": "stddev: 0.0024977847987968666",
            "extra": "mean: 76.02714285714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.87172463573884,
            "unit": "iter/sec",
            "range": "stddev: 0.0005066512017425296",
            "extra": "mean: 6.1398011363635465 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.9002598699613,
            "unit": "iter/sec",
            "range": "stddev: 0.00036842387283263846",
            "extra": "mean: 4.2571259842521725 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.8928037252052,
            "unit": "iter/sec",
            "range": "stddev: 0.0001629563555222316",
            "extra": "mean: 2.28889098532503 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.34579656823394,
            "unit": "iter/sec",
            "range": "stddev: 0.00033022372004137194",
            "extra": "mean: 2.345513918629561 msec\nrounds: 467"
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
        "date": 1649968982406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.36213626268729,
            "unit": "iter/sec",
            "range": "stddev: 0.0005739261796759967",
            "extra": "mean: 8.377866141732257 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.8422537561345,
            "unit": "iter/sec",
            "range": "stddev: 0.00040508846115243244",
            "extra": "mean: 6.718522292993599 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.29017779983047,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177845580697939",
            "extra": "mean: 4.847540540540568 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.44537325734376,
            "unit": "iter/sec",
            "range": "stddev: 0.0003736607990282517",
            "extra": "mean: 3.3847204610950645 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.77098782071863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284259718596755",
            "extra": "mean: 8.946865546218545 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.61422968605484,
            "unit": "iter/sec",
            "range": "stddev: 0.0005794331312457952",
            "extra": "mean: 7.540668918918857 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.71250494604246,
            "unit": "iter/sec",
            "range": "stddev: 0.0004133666432116815",
            "extra": "mean: 5.413818627450893 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.3761495303532,
            "unit": "iter/sec",
            "range": "stddev: 0.00018747766640566022",
            "extra": "mean: 3.285408536585346 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.94281770688401,
            "unit": "iter/sec",
            "range": "stddev: 0.0016764180892272398",
            "extra": "mean: 77.26292857142855 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.92789007599747,
            "unit": "iter/sec",
            "range": "stddev: 0.002042076652562855",
            "extra": "mean: 77.35214285714319 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.01509693858307,
            "unit": "iter/sec",
            "range": "stddev: 0.00026963618887561195",
            "extra": "mean: 6.023548571428705 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.65255590912366,
            "unit": "iter/sec",
            "range": "stddev: 0.00034359427543510237",
            "extra": "mean: 4.412039370078624 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.1954666646042,
            "unit": "iter/sec",
            "range": "stddev: 0.00010217177266331004",
            "extra": "mean: 2.163586776859622 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 418.8545675820839,
            "unit": "iter/sec",
            "range": "stddev: 0.00017877128945989422",
            "extra": "mean: 2.3874635193133655 msec\nrounds: 466"
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
        "date": 1671164575964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.18115337213504,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207017056162455",
            "extra": "mean: 8.607247999999977 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.38158036365782,
            "unit": "iter/sec",
            "range": "stddev: 0.0012624969348987215",
            "extra": "mean: 8.039775641025566 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.4315783027578,
            "unit": "iter/sec",
            "range": "stddev: 0.0001353824333068744",
            "extra": "mean: 4.844220095693763 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.09087409258166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002277552031733501",
            "extra": "mean: 3.3102621951218905 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.09583510909329,
            "unit": "iter/sec",
            "range": "stddev: 0.0005824968440892263",
            "extra": "mean: 9.4254406779658 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.7305197119816,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563762072840349",
            "extra": "mean: 7.156632653061348 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.02730937256393,
            "unit": "iter/sec",
            "range": "stddev: 0.0005231008319355169",
            "extra": "mean: 5.493681159420164 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.1065378209334,
            "unit": "iter/sec",
            "range": "stddev: 0.00017119321977025344",
            "extra": "mean: 3.3321499999999227 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.286804210398392,
            "unit": "iter/sec",
            "range": "stddev: 0.0015594902819704348",
            "extra": "mean: 75.26264285714313 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.186056713907796,
            "unit": "iter/sec",
            "range": "stddev: 0.004923237224553367",
            "extra": "mean: 82.06100000000102 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.78366618356634,
            "unit": "iter/sec",
            "range": "stddev: 0.0006634625448373547",
            "extra": "mean: 6.812747126437141 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.43047208709842,
            "unit": "iter/sec",
            "range": "stddev: 0.00031999792080827184",
            "extra": "mean: 4.302361867704124 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 313.52798195547496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003752627878383921",
            "extra": "mean: 3.1895079787232934 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 323.38189282516305,
            "unit": "iter/sec",
            "range": "stddev: 0.0004583791140284853",
            "extra": "mean: 3.092319088319059 msec\nrounds: 351"
          }
        ]
      }
    ]
  }
}