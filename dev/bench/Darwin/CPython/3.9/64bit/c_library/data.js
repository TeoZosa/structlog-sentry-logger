window.BENCHMARK_DATA = {
  "lastUpdate": 1673281620998,
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
        "date": 1671168681064,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.26653962420345,
            "unit": "iter/sec",
            "range": "stddev: 0.0002614214037523611",
            "extra": "mean: 8.600926829268325 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.92678290577433,
            "unit": "iter/sec",
            "range": "stddev: 0.0001501615481409208",
            "extra": "mean: 6.852751633986924 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.7625946452424,
            "unit": "iter/sec",
            "range": "stddev: 0.00012370903211586208",
            "extra": "mean: 5.056567961165031 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.32484721747954,
            "unit": "iter/sec",
            "range": "stddev: 0.00020101420166810668",
            "extra": "mean: 3.285962382445133 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.06926671210636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002652626514584101",
            "extra": "mean: 9.253324561403506 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.81228478703954,
            "unit": "iter/sec",
            "range": "stddev: 0.00014967604732696015",
            "extra": "mean: 7.36310416666688 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.36360400182247,
            "unit": "iter/sec",
            "range": "stddev: 0.00010730580906124335",
            "extra": "mean: 5.253105000000033 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.59472874244034,
            "unit": "iter/sec",
            "range": "stddev: 0.00020691738363673188",
            "extra": "mean: 3.441218649517621 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.590847534960043,
            "unit": "iter/sec",
            "range": "stddev: 0.0014344612746088538",
            "extra": "mean: 73.57892857142849 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.136180422897882,
            "unit": "iter/sec",
            "range": "stddev: 0.0011799670011535637",
            "extra": "mean: 70.74046666666713 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.33531212066396,
            "unit": "iter/sec",
            "range": "stddev: 0.00011819615953342308",
            "extra": "mean: 6.198271084337025 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.9837078982835,
            "unit": "iter/sec",
            "range": "stddev: 0.00011708362332082962",
            "extra": "mean: 4.310647540983628 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.8808665062682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003067859614344815",
            "extra": "mean: 2.916464864865007 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.46451922152465,
            "unit": "iter/sec",
            "range": "stddev: 0.00042159038694993185",
            "extra": "mean: 3.120470254957426 msec\nrounds: 353"
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
        "date": 1671338755053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.36383819428886,
            "unit": "iter/sec",
            "range": "stddev: 0.0009347264499229139",
            "extra": "mean: 9.22817073170728 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.64275809011424,
            "unit": "iter/sec",
            "range": "stddev: 0.0011933951425610895",
            "extra": "mean: 8.087816993464127 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.4734901188063,
            "unit": "iter/sec",
            "range": "stddev: 0.0008862553673391108",
            "extra": "mean: 5.866014705882308 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.953930309091,
            "unit": "iter/sec",
            "range": "stddev: 0.0003692042908526263",
            "extra": "mean: 3.802947530864221 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.54782243056094,
            "unit": "iter/sec",
            "range": "stddev: 0.0008729300908747888",
            "extra": "mean: 11.167217391304417 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.21231443038424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009758329926371857",
            "extra": "mean: 8.67962773722629 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.3159430357215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140958621987609",
            "extra": "mean: 6.199015306122358 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.5299991953412,
            "unit": "iter/sec",
            "range": "stddev: 0.00022756741501057785",
            "extra": "mean: 3.327454838709832 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.672442701062883,
            "unit": "iter/sec",
            "range": "stddev: 0.0033085882573077132",
            "extra": "mean: 78.91138461538489 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.750565705805993,
            "unit": "iter/sec",
            "range": "stddev: 0.008740374700896636",
            "extra": "mean: 85.10228571428665 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.09710805499424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956915818450244",
            "extra": "mean: 6.618260355029653 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 203.9518878349932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005340317584094779",
            "extra": "mean: 4.903117154811765 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 302.8634581253149,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534737199541142",
            "extra": "mean: 3.3018179419526836 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 291.0683710429355,
            "unit": "iter/sec",
            "range": "stddev: 0.00032550711238928175",
            "extra": "mean: 3.4356189111749624 msec\nrounds: 349"
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
        "date": 1671350929954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 90.52307405160784,
            "unit": "iter/sec",
            "range": "stddev: 0.0003073800268151324",
            "extra": "mean: 11.046907216494802 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.53001062871463,
            "unit": "iter/sec",
            "range": "stddev: 0.00024016256130009745",
            "extra": "mean: 8.966196581196584 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.61689766116032,
            "unit": "iter/sec",
            "range": "stddev: 0.00026641813352031664",
            "extra": "mean: 6.639361290322677 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 222.27910785911592,
            "unit": "iter/sec",
            "range": "stddev: 0.00015023741690281837",
            "extra": "mean: 4.498848360655722 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 83.65840134631783,
            "unit": "iter/sec",
            "range": "stddev: 0.000720685475110635",
            "extra": "mean: 11.953372093023079 msec\nrounds: 86"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 108.0489666235774,
            "unit": "iter/sec",
            "range": "stddev: 0.00023789185011366802",
            "extra": "mean: 9.255063063063018 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.80580490723725,
            "unit": "iter/sec",
            "range": "stddev: 0.00020807345332713497",
            "extra": "mean: 6.811719745223113 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.88723227965204,
            "unit": "iter/sec",
            "range": "stddev: 0.00011640444893976886",
            "extra": "mean: 4.426987704918106 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.484118466726287,
            "unit": "iter/sec",
            "range": "stddev: 0.0023953146045037144",
            "extra": "mean: 95.38236363636346 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.224217080576935,
            "unit": "iter/sec",
            "range": "stddev: 0.005125811877156174",
            "extra": "mean: 97.80700000000114 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 118.29794024028426,
            "unit": "iter/sec",
            "range": "stddev: 0.00036495214822497595",
            "extra": "mean: 8.4532325581394 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 174.72926358190077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002064220861532051",
            "extra": "mean: 5.723139784946616 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 255.56279549449317,
            "unit": "iter/sec",
            "range": "stddev: 0.00016814150243013899",
            "extra": "mean: 3.9129326241133087 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 248.21881762900412,
            "unit": "iter/sec",
            "range": "stddev: 0.0002107211795772911",
            "extra": "mean: 4.028703422053328 msec\nrounds: 263"
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
        "date": 1671358489000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.05130627352001,
            "unit": "iter/sec",
            "range": "stddev: 0.00031147017427922847",
            "extra": "mean: 8.399739837398366 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.2537508332291,
            "unit": "iter/sec",
            "range": "stddev: 0.0004370692089110056",
            "extra": "mean: 6.932228758169997 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.13023051727458,
            "unit": "iter/sec",
            "range": "stddev: 0.00020530767151010032",
            "extra": "mean: 5.047185365853657 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.81315719232543,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490702409311831",
            "extra": "mean: 3.3354106583071528 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.06545541157075,
            "unit": "iter/sec",
            "range": "stddev: 0.003162540725197696",
            "extra": "mean: 9.428140350877232 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.05504318822275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993228626710863",
            "extra": "mean: 7.459622377622372 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.35001299827204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828772274699018",
            "extra": "mean: 5.226025252525227 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.5414604917331,
            "unit": "iter/sec",
            "range": "stddev: 0.0001069931233175223",
            "extra": "mean: 3.316293548387239 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.662635727626865,
            "unit": "iter/sec",
            "range": "stddev: 0.002221000043293436",
            "extra": "mean: 78.972499999999 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.472536715068216,
            "unit": "iter/sec",
            "range": "stddev: 0.00117745092756098",
            "extra": "mean: 74.22507142857222 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.26406649799767,
            "unit": "iter/sec",
            "range": "stddev: 0.00012819426158603393",
            "extra": "mean: 6.278880239520773 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.72748275966137,
            "unit": "iter/sec",
            "range": "stddev: 0.0007445603292737529",
            "extra": "mean: 4.551092050209319 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 352.07404050282275,
            "unit": "iter/sec",
            "range": "stddev: 0.00009222876154581703",
            "extra": "mean: 2.840311653116562 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 336.13254416355755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001164730503808013",
            "extra": "mean: 2.9750169014084324 msec\nrounds: 355"
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
        "date": 1671364360875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.81442026391507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009880481772222987",
            "extra": "mean: 10.659342105263125 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.75424285020542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007274777588731232",
            "extra": "mean: 8.080531034482751 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.14419002318496,
            "unit": "iter/sec",
            "range": "stddev: 0.00035731032785353073",
            "extra": "mean: 5.551108808290169 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 267.99141341025046,
            "unit": "iter/sec",
            "range": "stddev: 0.00030779444820062864",
            "extra": "mean: 3.7314628378378885 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.00141231942094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007175445981934462",
            "extra": "mean: 10.203934579439016 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.4044711888446,
            "unit": "iter/sec",
            "range": "stddev: 0.0005371118185099684",
            "extra": "mean: 8.038296296296387 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.90934643463964,
            "unit": "iter/sec",
            "range": "stddev: 0.0008975932466399383",
            "extra": "mean: 6.176295698924861 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.95905281972884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006365999977737102",
            "extra": "mean: 4.220138408304532 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.952881740180057,
            "unit": "iter/sec",
            "range": "stddev: 0.003144524124521927",
            "extra": "mean: 83.6618333333344 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.92314145285473,
            "unit": "iter/sec",
            "range": "stddev: 0.009972652268540263",
            "extra": "mean: 100.7745384615389 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 118.5243486196198,
            "unit": "iter/sec",
            "range": "stddev: 0.0015453940561507892",
            "extra": "mean: 8.437084967320091 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 188.78849199292412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150271276071787",
            "extra": "mean: 5.296933035714276 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 277.184910053477,
            "unit": "iter/sec",
            "range": "stddev: 0.00034173287105905423",
            "extra": "mean: 3.6077000000002566 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 271.35079959169065,
            "unit": "iter/sec",
            "range": "stddev: 0.00045161243037315345",
            "extra": "mean: 3.685266457680349 msec\nrounds: 319"
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
        "date": 1671374799535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.01862486630247,
            "unit": "iter/sec",
            "range": "stddev: 0.0005109742440087086",
            "extra": "mean: 8.694244094488166 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.92317967288886,
            "unit": "iter/sec",
            "range": "stddev: 0.000363194555539835",
            "extra": "mean: 7.046065359477193 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.44438400564107,
            "unit": "iter/sec",
            "range": "stddev: 0.00034109952963725195",
            "extra": "mean: 5.278594059405968 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.4561323480193,
            "unit": "iter/sec",
            "range": "stddev: 0.00017079035744088674",
            "extra": "mean: 3.361840255591082 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.54535283811312,
            "unit": "iter/sec",
            "range": "stddev: 0.000492555719530253",
            "extra": "mean: 9.474600000000128 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.45321263258148,
            "unit": "iter/sec",
            "range": "stddev: 0.00034445891032771345",
            "extra": "mean: 7.4375314685316365 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.8130170180647,
            "unit": "iter/sec",
            "range": "stddev: 0.00029076069889190815",
            "extra": "mean: 5.470069999999971 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.35157553364223,
            "unit": "iter/sec",
            "range": "stddev: 0.0001741688968353685",
            "extra": "mean: 3.4560033003301625 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.13429819908563,
            "unit": "iter/sec",
            "range": "stddev: 0.0020208361971964456",
            "extra": "mean: 76.13653846153859 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.942135711235306,
            "unit": "iter/sec",
            "range": "stddev: 0.0017741103512638376",
            "extra": "mean: 77.26699999999857 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.74705417666144,
            "unit": "iter/sec",
            "range": "stddev: 0.00035275813537358105",
            "extra": "mean: 6.259896341463159 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 212.77843985243635,
            "unit": "iter/sec",
            "range": "stddev: 0.0003875350292180498",
            "extra": "mean: 4.699724279835441 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 339.6631065980709,
            "unit": "iter/sec",
            "range": "stddev: 0.00015636625456769815",
            "extra": "mean: 2.944093663911862 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 323.0114046484793,
            "unit": "iter/sec",
            "range": "stddev: 0.00015098846640301998",
            "extra": "mean: 3.095865921787687 msec\nrounds: 358"
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
        "date": 1671378646725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.96590793623521,
            "unit": "iter/sec",
            "range": "stddev: 0.00032802009419176587",
            "extra": "mean: 8.266791999999953 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.1473040039653,
            "unit": "iter/sec",
            "range": "stddev: 0.000304697266672356",
            "extra": "mean: 6.750038461538484 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.07879407842128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005980111428098732",
            "extra": "mean: 5.099990566037714 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.78430214169083,
            "unit": "iter/sec",
            "range": "stddev: 0.00025694652367360375",
            "extra": "mean: 3.2596191950464983 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.63504152389453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461156637731856",
            "extra": "mean: 8.723336134453792 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.4037757343952,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852137638190509",
            "extra": "mean: 7.0222857142857835 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.12025790973888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004780053526571613",
            "extra": "mean: 5.205073170731509 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.50926925639055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649524540881291",
            "extra": "mean: 3.316647619047635 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.476946239498732,
            "unit": "iter/sec",
            "range": "stddev: 0.0039526860619572834",
            "extra": "mean: 74.20078571428616 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.255343615554123,
            "unit": "iter/sec",
            "range": "stddev: 0.0018573779854819136",
            "extra": "mean: 70.14913333333415 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.12526956621602,
            "unit": "iter/sec",
            "range": "stddev: 0.00039568668945053114",
            "extra": "mean: 6.092906976744078 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.8261497804453,
            "unit": "iter/sec",
            "range": "stddev: 0.00024406488628769148",
            "extra": "mean: 4.276681632653001 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.522010035883,
            "unit": "iter/sec",
            "range": "stddev: 0.0001748595631635042",
            "extra": "mean: 2.8286781914894026 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.505962568765,
            "unit": "iter/sec",
            "range": "stddev: 0.00011955411473879908",
            "extra": "mean: 2.989483333333492 msec\nrounds: 360"
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
        "date": 1671380058732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.48052869954678,
            "unit": "iter/sec",
            "range": "stddev: 0.005815484557364563",
            "extra": "mean: 9.757951219512226 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.51980386485118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007300549976691015",
            "extra": "mean: 7.433849673202586 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.4775636105788,
            "unit": "iter/sec",
            "range": "stddev: 0.00037621782925001624",
            "extra": "mean: 5.391487684729133 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.3385544985388,
            "unit": "iter/sec",
            "range": "stddev: 0.00041872655210657624",
            "extra": "mean: 3.541847133757906 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.86585372327825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007258152276992237",
            "extra": "mean: 9.914157894736737 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.7653965896545,
            "unit": "iter/sec",
            "range": "stddev: 0.0026332250060475742",
            "extra": "mean: 8.079802816901324 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.6268969080711,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483254723459044",
            "extra": "mean: 5.536274038461412 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.9758175322804,
            "unit": "iter/sec",
            "range": "stddev: 0.00024310805086895016",
            "extra": "mean: 3.42494117647069 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.13844637871564,
            "unit": "iter/sec",
            "range": "stddev: 0.002282761780422044",
            "extra": "mean: 76.11250000000044 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.629925792766466,
            "unit": "iter/sec",
            "range": "stddev: 0.01087902687577156",
            "extra": "mean: 85.98507142857059 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.3090909606739,
            "unit": "iter/sec",
            "range": "stddev: 0.00042629819931139137",
            "extra": "mean: 6.565596273292703 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.2382139755994,
            "unit": "iter/sec",
            "range": "stddev: 0.00030283647520523065",
            "extra": "mean: 4.582148936170305 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 324.7181030342356,
            "unit": "iter/sec",
            "range": "stddev: 0.00019524359982818907",
            "extra": "mean: 3.0795942408377774 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 311.0453364264753,
            "unit": "iter/sec",
            "range": "stddev: 0.0002179347199348298",
            "extra": "mean: 3.214965417867242 msec\nrounds: 347"
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
        "date": 1671419795198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.52289607447526,
            "unit": "iter/sec",
            "range": "stddev: 0.00044377087079449485",
            "extra": "mean: 8.656292682926859 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.63813209408664,
            "unit": "iter/sec",
            "range": "stddev: 0.00021220063998825557",
            "extra": "mean: 6.773317880794653 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.05639316163496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649470790249545",
            "extra": "mean: 5.206804020100484 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.68496286039317,
            "unit": "iter/sec",
            "range": "stddev: 0.00015314705483580039",
            "extra": "mean: 3.314716088328065 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.51467398850625,
            "unit": "iter/sec",
            "range": "stddev: 0.00020161303758459083",
            "extra": "mean: 9.131196428571313 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.74961316106746,
            "unit": "iter/sec",
            "range": "stddev: 0.00027791590769191474",
            "extra": "mean: 7.366503496503492 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.4765624999959,
            "unit": "iter/sec",
            "range": "stddev: 0.00021204009754856353",
            "extra": "mean: 5.305699481865401 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.02028743404145,
            "unit": "iter/sec",
            "range": "stddev: 0.00008786961168542758",
            "extra": "mean: 3.3895974025975177 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.432482058972003,
            "unit": "iter/sec",
            "range": "stddev: 0.002555029406726088",
            "extra": "mean: 80.4344615384618 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.283373926959458,
            "unit": "iter/sec",
            "range": "stddev: 0.004162697698833196",
            "extra": "mean: 81.41085714285775 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.59608388231752,
            "unit": "iter/sec",
            "range": "stddev: 0.0003157276462983553",
            "extra": "mean: 6.4268969696970855 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.06002510620456,
            "unit": "iter/sec",
            "range": "stddev: 0.00035315408444794847",
            "extra": "mean: 4.463089743589913 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.8024294557282,
            "unit": "iter/sec",
            "range": "stddev: 0.00010507482003552237",
            "extra": "mean: 2.9690997229918956 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.6072087695039,
            "unit": "iter/sec",
            "range": "stddev: 0.00017654474247137092",
            "extra": "mean: 3.099744744744619 msec\nrounds: 333"
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
        "date": 1671424370618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.59293248088906,
            "unit": "iter/sec",
            "range": "stddev: 0.00025831502804036317",
            "extra": "mean: 8.72654166666668 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.14760714972016,
            "unit": "iter/sec",
            "range": "stddev: 0.00019683750802681254",
            "extra": "mean: 6.937333333333389 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.41903728751137,
            "unit": "iter/sec",
            "range": "stddev: 0.00014868138461198528",
            "extra": "mean: 5.2515757575757105 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.83051074599837,
            "unit": "iter/sec",
            "range": "stddev: 0.00011847020251011178",
            "extra": "mean: 3.391779220779214 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.30962209611626,
            "unit": "iter/sec",
            "range": "stddev: 0.0006068709743634646",
            "extra": "mean: 9.318828828828686 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.29081125389908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716751690673081",
            "extra": "mean: 7.337251798560936 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.06862570105372,
            "unit": "iter/sec",
            "range": "stddev: 0.00012782308644194125",
            "extra": "mean: 5.403401015228408 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.4868184570379,
            "unit": "iter/sec",
            "range": "stddev: 0.00011756038418771623",
            "extra": "mean: 3.5151013513514204 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.92669639806833,
            "unit": "iter/sec",
            "range": "stddev: 0.0010834140077037088",
            "extra": "mean: 77.35928571428603 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.259835956886716,
            "unit": "iter/sec",
            "range": "stddev: 0.0012490744529487848",
            "extra": "mean: 75.41571428571358 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.07763965417783,
            "unit": "iter/sec",
            "range": "stddev: 0.0002512121243228057",
            "extra": "mean: 6.619113207547033 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.3852438090305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000954576293763883",
            "extra": "mean: 4.476571428571569 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 332.75649185032705,
            "unit": "iter/sec",
            "range": "stddev: 0.00010764290100902543",
            "extra": "mean: 3.005200573065896 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 315.59499317284354,
            "unit": "iter/sec",
            "range": "stddev: 0.00010632113673542131",
            "extra": "mean: 3.168618075801744 msec\nrounds: 343"
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
        "date": 1671430632902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.58702033107168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002996774146907056",
            "extra": "mean: 10.685242424242366 msec\nrounds: 99"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 116.23666910701169,
            "unit": "iter/sec",
            "range": "stddev: 0.0003120163205725297",
            "extra": "mean: 8.6031370967742 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.08548944152543,
            "unit": "iter/sec",
            "range": "stddev: 0.00023545215076382504",
            "extra": "mean: 6.406745454545483 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.56836527342793,
            "unit": "iter/sec",
            "range": "stddev: 0.00008349167362447608",
            "extra": "mean: 4.191670588235285 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 87.63507598731599,
            "unit": "iter/sec",
            "range": "stddev: 0.000265896216683019",
            "extra": "mean: 11.410956043955924 msec\nrounds: 91"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 107.98365409173525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022446673207022244",
            "extra": "mean: 9.26066086956523 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.82540303743426,
            "unit": "iter/sec",
            "range": "stddev: 0.0001174421538969978",
            "extra": "mean: 6.764737179487121 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.41523068997847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002420022537932686",
            "extra": "mean: 4.377991769547416 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.48644722028117,
            "unit": "iter/sec",
            "range": "stddev: 0.0019117922909241785",
            "extra": "mean: 95.36118181818183 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.915578912689115,
            "unit": "iter/sec",
            "range": "stddev: 0.001935060713165126",
            "extra": "mean: 91.61218181818303 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 123.43500415564333,
            "unit": "iter/sec",
            "range": "stddev: 0.0005711506001669595",
            "extra": "mean: 8.101429629629749 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 176.870908726443,
            "unit": "iter/sec",
            "range": "stddev: 0.00022066899305066927",
            "extra": "mean: 5.65384102564118 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 263.5845982856637,
            "unit": "iter/sec",
            "range": "stddev: 0.00026311120445950397",
            "extra": "mean: 3.793848375451115 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 258.4520074873824,
            "unit": "iter/sec",
            "range": "stddev: 0.00012984230272071874",
            "extra": "mean: 3.869190298507625 msec\nrounds: 268"
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
        "date": 1671438684511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.30397888711104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005844287316663318",
            "extra": "mean: 8.825815384615373 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.51781800560312,
            "unit": "iter/sec",
            "range": "stddev: 0.00036100121675387446",
            "extra": "mean: 6.643731707317032 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.37262545161093,
            "unit": "iter/sec",
            "range": "stddev: 0.0006014821712631565",
            "extra": "mean: 5.171362790697784 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.00429663465377,
            "unit": "iter/sec",
            "range": "stddev: 0.00039981863105650173",
            "extra": "mean: 3.4246071428571048 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.14931291391468,
            "unit": "iter/sec",
            "range": "stddev: 0.0014847854939199292",
            "extra": "mean: 10.188558333333267 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.02762653638294,
            "unit": "iter/sec",
            "range": "stddev: 0.0008655549369901734",
            "extra": "mean: 7.69067333333344 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.66002460250712,
            "unit": "iter/sec",
            "range": "stddev: 0.00037952677703204644",
            "extra": "mean: 5.21757211538477 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.03555693774695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108498960313295",
            "extra": "mean: 3.3553043478261153 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.565048288446988,
            "unit": "iter/sec",
            "range": "stddev: 0.0023239336926197613",
            "extra": "mean: 79.58584615384694 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.073946239932939,
            "unit": "iter/sec",
            "range": "stddev: 0.0018963069777452254",
            "extra": "mean: 76.48800000000071 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.77719405618834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005382980539439578",
            "extra": "mean: 6.2981337209304655 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.71356427587156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003688516853853566",
            "extra": "mean: 4.372281124497767 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 326.60482499706075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003778900114558929",
            "extra": "mean: 3.061804123711275 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 324.18700807280123,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315591494305229",
            "extra": "mean: 3.0846393442621687 msec\nrounds: 366"
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
        "date": 1671466417380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.2460433269725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005649167780316089",
            "extra": "mean: 8.909000000000018 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.0546181369181,
            "unit": "iter/sec",
            "range": "stddev: 0.000702368025008285",
            "extra": "mean: 7.870630872483266 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.37482661593629,
            "unit": "iter/sec",
            "range": "stddev: 0.0005385699280263768",
            "extra": "mean: 5.734772727272831 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.5587368492104,
            "unit": "iter/sec",
            "range": "stddev: 0.00019427570245578483",
            "extra": "mean: 3.453530744336533 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.17125229957487,
            "unit": "iter/sec",
            "range": "stddev: 0.00035042258725448357",
            "extra": "mean: 9.41874545454527 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.638434965143,
            "unit": "iter/sec",
            "range": "stddev: 0.00083674502520439",
            "extra": "mean: 8.221085714285639 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.70264790397965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005057344060725412",
            "extra": "mean: 5.691433862433841 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.2914254407791,
            "unit": "iter/sec",
            "range": "stddev: 0.0010322421502136903",
            "extra": "mean: 4.161613333333255 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.968284047274647,
            "unit": "iter/sec",
            "range": "stddev: 0.005202847381846657",
            "extra": "mean: 83.55416666666719 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.15979466783659,
            "unit": "iter/sec",
            "range": "stddev: 0.006585808494455501",
            "extra": "mean: 82.23823076923017 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.9604976158274,
            "unit": "iter/sec",
            "range": "stddev: 0.0008493975461878259",
            "extra": "mean: 6.8511687499999585 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 175.8930570213344,
            "unit": "iter/sec",
            "range": "stddev: 0.004627817630946271",
            "extra": "mean: 5.685272727272618 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 326.14974695750493,
            "unit": "iter/sec",
            "range": "stddev: 0.0002025489479587943",
            "extra": "mean: 3.066076271186846 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 304.65830638739817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004549743364994405",
            "extra": "mean: 3.2823657817109297 msec\nrounds: 339"
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
        "date": 1671540807136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.01849162551959,
            "unit": "iter/sec",
            "range": "stddev: 0.00032054293658344496",
            "extra": "mean: 8.263200000000055 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.9165712366204,
            "unit": "iter/sec",
            "range": "stddev: 0.00023518600042694534",
            "extra": "mean: 6.760567741935498 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.18937249516816,
            "unit": "iter/sec",
            "range": "stddev: 0.00023555187662686352",
            "extra": "mean: 4.921517241379246 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.7674645823187,
            "unit": "iter/sec",
            "range": "stddev: 0.00009983935483986321",
            "extra": "mean: 3.2492063492063163 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.2165717944942,
            "unit": "iter/sec",
            "range": "stddev: 0.0009499478040325375",
            "extra": "mean: 9.15611965811961 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.96778004809502,
            "unit": "iter/sec",
            "range": "stddev: 0.0012359547424107046",
            "extra": "mean: 7.938537931034395 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.23266402275618,
            "unit": "iter/sec",
            "range": "stddev: 0.00017741085926015744",
            "extra": "mean: 5.2020295566502766 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.89235410591544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005815493407451786",
            "extra": "mean: 3.414223642172581 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.222291271965503,
            "unit": "iter/sec",
            "range": "stddev: 0.002742586394604164",
            "extra": "mean: 75.6298571428573 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.107635616701081,
            "unit": "iter/sec",
            "range": "stddev: 0.0014662694548714923",
            "extra": "mean: 70.88360000000051 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.76025249647392,
            "unit": "iter/sec",
            "range": "stddev: 0.00020951673685393467",
            "extra": "mean: 6.1819883720928175 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.8234391596805,
            "unit": "iter/sec",
            "range": "stddev: 0.0003440964867136211",
            "extra": "mean: 4.408715447154534 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 356.6719471822045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001664604011863441",
            "extra": "mean: 2.8036968085105776 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.97220561205,
            "unit": "iter/sec",
            "range": "stddev: 0.00020701000382350687",
            "extra": "mean: 2.9853223140494105 msec\nrounds: 363"
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
        "date": 1671541741386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.2273637300391,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466179498230087",
            "extra": "mean: 8.24896268656718 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.6040297335383,
            "unit": "iter/sec",
            "range": "stddev: 0.0003624565482350053",
            "extra": "mean: 6.639928571428578 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.6907360947355,
            "unit": "iter/sec",
            "range": "stddev: 0.0001060562271793081",
            "extra": "mean: 4.65786283185845 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 345.13531769706196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001501421382771904",
            "extra": "mean: 2.897414285714268 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.97304970492797,
            "unit": "iter/sec",
            "range": "stddev: 0.00017564041296996247",
            "extra": "mean: 8.001725190839828 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.93094011896318,
            "unit": "iter/sec",
            "range": "stddev: 0.00025831786784817097",
            "extra": "mean: 6.4964197530864505 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.01061767736266,
            "unit": "iter/sec",
            "range": "stddev: 0.00048458104380591255",
            "extra": "mean: 5.101764444444636 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.3430558671834,
            "unit": "iter/sec",
            "range": "stddev: 0.0003428300669881108",
            "extra": "mean: 3.296597633136006 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.899851569442182,
            "unit": "iter/sec",
            "range": "stddev: 0.001754695422993223",
            "extra": "mean: 71.94321428571422 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.68695560134105,
            "unit": "iter/sec",
            "range": "stddev: 0.0019119134568975776",
            "extra": "mean: 73.06226666666618 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.0360233839309,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717954862499152",
            "extra": "mean: 6.20979069767433 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.37319137211523,
            "unit": "iter/sec",
            "range": "stddev: 0.0001473956950106179",
            "extra": "mean: 4.108916000000221 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 365.1314976705285,
            "unit": "iter/sec",
            "range": "stddev: 0.00019481927517708315",
            "extra": "mean: 2.738739348371245 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 357.0939082390004,
            "unit": "iter/sec",
            "range": "stddev: 0.0002132352299634922",
            "extra": "mean: 2.800383812010333 msec\nrounds: 383"
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
        "date": 1671544124164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.89576713551588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005201238724587015",
            "extra": "mean: 8.006676470588214 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.61623571648988,
            "unit": "iter/sec",
            "range": "stddev: 0.0004144657806892336",
            "extra": "mean: 6.4260647058823235 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.31793277701527,
            "unit": "iter/sec",
            "range": "stddev: 0.00023644912530510292",
            "extra": "mean: 4.709917748917798 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.3507237933979,
            "unit": "iter/sec",
            "range": "stddev: 0.0003423422425235118",
            "extra": "mean: 3.151087818696835 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.35641343724423,
            "unit": "iter/sec",
            "range": "stddev: 0.0004115468477571855",
            "extra": "mean: 8.594283464566745 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.65888285613656,
            "unit": "iter/sec",
            "range": "stddev: 0.0014260767616677363",
            "extra": "mean: 7.538130718954278 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.51411095475532,
            "unit": "iter/sec",
            "range": "stddev: 0.00045544270538221897",
            "extra": "mean: 4.987180180180154 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.89970192188065,
            "unit": "iter/sec",
            "range": "stddev: 0.00021960234234572813",
            "extra": "mean: 3.1959122807015734 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.319291839891324,
            "unit": "iter/sec",
            "range": "stddev: 0.0029375555305797894",
            "extra": "mean: 75.07906666666742 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.894330835132918,
            "unit": "iter/sec",
            "range": "stddev: 0.001925427603713442",
            "extra": "mean: 71.97179999999861 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.30057881076954,
            "unit": "iter/sec",
            "range": "stddev: 0.00029568398449033716",
            "extra": "mean: 5.83769189189179 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.50017682306148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415158906509721",
            "extra": "mean: 4.123708333333064 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 381.22224403344114,
            "unit": "iter/sec",
            "range": "stddev: 0.00013893029987807078",
            "extra": "mean: 2.623141791044804 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 354.75103609827545,
            "unit": "iter/sec",
            "range": "stddev: 0.00020626763023825755",
            "extra": "mean: 2.8188783068782173 msec\nrounds: 378"
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
        "date": 1671549255803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.07120205550696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003233307313127397",
            "extra": "mean: 8.059888059701558 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.43799919059552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003005330783445202",
            "extra": "mean: 6.475090361445804 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.2486657366777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002824979886686052",
            "extra": "mean: 4.733757709251067 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.4497748078408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001019365984184222",
            "extra": "mean: 3.120613832853072 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.42542001986314,
            "unit": "iter/sec",
            "range": "stddev: 0.00047892968559325264",
            "extra": "mean: 8.816365853658548 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.12149169697022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468917219255476",
            "extra": "mean: 6.843620253164542 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.29761115374367,
            "unit": "iter/sec",
            "range": "stddev: 0.0002134553178538041",
            "extra": "mean: 4.992570776255658 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.8307974444768,
            "unit": "iter/sec",
            "range": "stddev: 0.00014396393377756077",
            "extra": "mean: 3.1562588235294444 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.357570507635703,
            "unit": "iter/sec",
            "range": "stddev: 0.0011540818036523807",
            "extra": "mean: 69.6496666666673 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.275275490511792,
            "unit": "iter/sec",
            "range": "stddev: 0.0028615825276418574",
            "extra": "mean: 70.05118750000028 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.229076940005,
            "unit": "iter/sec",
            "range": "stddev: 0.00025043148183665376",
            "extra": "mean: 5.90914999999982 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.55576543904516,
            "unit": "iter/sec",
            "range": "stddev: 0.00030989994642168867",
            "extra": "mean: 4.105835877862932 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.6997459885388,
            "unit": "iter/sec",
            "range": "stddev: 0.00010948985363221015",
            "extra": "mean: 2.6976009852213867 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.02625915602147,
            "unit": "iter/sec",
            "range": "stddev: 0.00020252442101796665",
            "extra": "mean: 2.889954081632588 msec\nrounds: 392"
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
        "date": 1671551849357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.22201321220693,
            "unit": "iter/sec",
            "range": "stddev: 0.000571773547395611",
            "extra": "mean: 8.83220472440942 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.89816318651236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004939971368425249",
            "extra": "mean: 6.901398734177216 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.03909020753642,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545586043813195",
            "extra": "mean: 4.999022935779806 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.086252318953,
            "unit": "iter/sec",
            "range": "stddev: 0.0014325420565378998",
            "extra": "mean: 3.5450150150150064 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.47010647010437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006078412687186388",
            "extra": "mean: 9.39230769230788 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.027205285603,
            "unit": "iter/sec",
            "range": "stddev: 0.00037573528473321415",
            "extra": "mean: 7.1414693877548645 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.91587982687437,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494099516455417",
            "extra": "mean: 5.717033816425159 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.3101404596787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003223166976550525",
            "extra": "mean: 3.5049577922076156 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.155185250087786,
            "unit": "iter/sec",
            "range": "stddev: 0.009664895291333684",
            "extra": "mean: 82.26941666666724 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.100779010919538,
            "unit": "iter/sec",
            "range": "stddev: 0.003667555666121366",
            "extra": "mean: 82.63930769230782 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.48045445048902,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432144267897311",
            "extra": "mean: 6.780559523809388 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 222.00960493437725,
            "unit": "iter/sec",
            "range": "stddev: 0.00035077515056170373",
            "extra": "mean: 4.504309623430865 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 339.962299970205,
            "unit": "iter/sec",
            "range": "stddev: 0.00020740012058673935",
            "extra": "mean: 2.9415026315789787 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 326.1218037299445,
            "unit": "iter/sec",
            "range": "stddev: 0.00021810218855314152",
            "extra": "mean: 3.0663389830508905 msec\nrounds: 354"
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
        "date": 1671589447335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.18960589923212,
            "unit": "iter/sec",
            "range": "stddev: 0.00041283488535005374",
            "extra": "mean: 8.681338842975121 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.49823831996144,
            "unit": "iter/sec",
            "range": "stddev: 0.00028267618243548706",
            "extra": "mean: 6.96872666666664 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.93605697917494,
            "unit": "iter/sec",
            "range": "stddev: 0.0001565108068267923",
            "extra": "mean: 5.183064356435654 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.86328477971443,
            "unit": "iter/sec",
            "range": "stddev: 0.000320504274444362",
            "extra": "mean: 3.379939490445906 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.90545857536395,
            "unit": "iter/sec",
            "range": "stddev: 0.0004738241633319916",
            "extra": "mean: 9.442383928571394 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.2298040744138,
            "unit": "iter/sec",
            "range": "stddev: 0.000612896101741266",
            "extra": "mean: 7.678733812949578 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.33260882301815,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397259487386487",
            "extra": "mean: 5.454567010309439 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.0956134935246,
            "unit": "iter/sec",
            "range": "stddev: 0.00013269862239917763",
            "extra": "mean: 3.435297385620842 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.973077158303095,
            "unit": "iter/sec",
            "range": "stddev: 0.002991539542638754",
            "extra": "mean: 77.082714285714 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.58661369181292,
            "unit": "iter/sec",
            "range": "stddev: 0.00153626359202264",
            "extra": "mean: 73.60185714285704 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.84327561756334,
            "unit": "iter/sec",
            "range": "stddev: 0.00014689285588589032",
            "extra": "mean: 6.256128048780561 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.83945208652537,
            "unit": "iter/sec",
            "range": "stddev: 0.00017201136445372617",
            "extra": "mean: 4.4476180257509625 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 324.83529126744867,
            "unit": "iter/sec",
            "range": "stddev: 0.00025614759291113043",
            "extra": "mean: 3.078483240223624 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 265.7394625419406,
            "unit": "iter/sec",
            "range": "stddev: 0.0012258267711043537",
            "extra": "mean: 3.763084302325531 msec\nrounds: 344"
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
        "date": 1672072200444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.85475226181018,
            "unit": "iter/sec",
            "range": "stddev: 0.00034497489534125015",
            "extra": "mean: 8.274395348837247 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.81404349733222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002507008261758982",
            "extra": "mean: 6.811337499999931 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.80551781507964,
            "unit": "iter/sec",
            "range": "stddev: 0.00015421795883575011",
            "extra": "mean: 5.030041474654427 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.6037803393671,
            "unit": "iter/sec",
            "range": "stddev: 0.0001428243624253046",
            "extra": "mean: 3.3156083086053876 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.08604588800493,
            "unit": "iter/sec",
            "range": "stddev: 0.00039633202380299994",
            "extra": "mean: 9.083803418803335 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.0093937154565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325469042598146",
            "extra": "mean: 7.352433333333484 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.72926561929194,
            "unit": "iter/sec",
            "range": "stddev: 0.00021982955975473011",
            "extra": "mean: 5.188625592417042 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.13062340985977,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386747259736096",
            "extra": "mean: 3.39984999999996 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.364695819523046,
            "unit": "iter/sec",
            "range": "stddev: 0.0015107351241645567",
            "extra": "mean: 74.82400000000057 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.300372055741194,
            "unit": "iter/sec",
            "range": "stddev: 0.0015227480265566542",
            "extra": "mean: 75.1858666666654 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.31546417165714,
            "unit": "iter/sec",
            "range": "stddev: 0.00023818143155491403",
            "extra": "mean: 6.199033707865055 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.07246047240247,
            "unit": "iter/sec",
            "range": "stddev: 0.00018227967180863724",
            "extra": "mean: 4.327646825396713 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.02829131069194,
            "unit": "iter/sec",
            "range": "stddev: 0.00010721276984334949",
            "extra": "mean: 2.8650972568577178 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.1421924768793,
            "unit": "iter/sec",
            "range": "stddev: 0.00019452107083928498",
            "extra": "mean: 3.010758713136425 msec\nrounds: 373"
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
        "date": 1672075063087,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.13405953963758,
            "unit": "iter/sec",
            "range": "stddev: 0.0009004157952293144",
            "extra": "mean: 9.791053097345126 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.200022931834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005105275880303273",
            "extra": "mean: 7.8616338028169706 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.05728708544427,
            "unit": "iter/sec",
            "range": "stddev: 0.00039947899266488284",
            "extra": "mean: 5.845994736842127 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.8512996976612,
            "unit": "iter/sec",
            "range": "stddev: 0.00047142582820788794",
            "extra": "mean: 3.8782042253520985 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.91348542407363,
            "unit": "iter/sec",
            "range": "stddev: 0.0009335490728829489",
            "extra": "mean: 10.6480980392158 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.36843589727455,
            "unit": "iter/sec",
            "range": "stddev: 0.0007905894700475375",
            "extra": "mean: 8.520178294573503 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.58840288251594,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853294299290781",
            "extra": "mean: 5.967000000000163 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.85700429291904,
            "unit": "iter/sec",
            "range": "stddev: 0.00032045201934114103",
            "extra": "mean: 3.89321678321687 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.040024746881596,
            "unit": "iter/sec",
            "range": "stddev: 0.004394178846014799",
            "extra": "mean: 83.05630769230795 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.290564061256191,
            "unit": "iter/sec",
            "range": "stddev: 0.003105702152328547",
            "extra": "mean: 81.36323076923063 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 134.92805443383497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005193706810118491",
            "extra": "mean: 7.411357142856993 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.3136166898166,
            "unit": "iter/sec",
            "range": "stddev: 0.00024447413292058687",
            "extra": "mean: 4.967373873873603 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 306.72150584118106,
            "unit": "iter/sec",
            "range": "stddev: 0.00028804199920912685",
            "extra": "mean: 3.2602865497073923 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 294.8737949175293,
            "unit": "iter/sec",
            "range": "stddev: 0.00033707281129002746",
            "extra": "mean: 3.391281345565757 msec\nrounds: 327"
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
        "date": 1672209882870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.98039185269093,
            "unit": "iter/sec",
            "range": "stddev: 0.0001701815796938515",
            "extra": "mean: 7.813696969696955 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.14594418258153,
            "unit": "iter/sec",
            "range": "stddev: 0.00013670407128126978",
            "extra": "mean: 6.205554878048809 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.61850635250036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002632966803625394",
            "extra": "mean: 4.5951974248926755 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.3115231225068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000856184514677046",
            "extra": "mean: 3.0645561959654457 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.86507625194781,
            "unit": "iter/sec",
            "range": "stddev: 0.00023102011262445118",
            "extra": "mean: 8.412899999999901 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.6054444470947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002544633996586873",
            "extra": "mean: 6.596069182389865 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.3366659179841,
            "unit": "iter/sec",
            "range": "stddev: 0.00013511308505825798",
            "extra": "mean: 4.709502222222205 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.383258244049,
            "unit": "iter/sec",
            "range": "stddev: 0.00008448119030962391",
            "extra": "mean: 3.0359770114942295 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.753014202279296,
            "unit": "iter/sec",
            "range": "stddev: 0.0019630644653798406",
            "extra": "mean: 72.71133333333353 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.64932447081745,
            "unit": "iter/sec",
            "range": "stddev: 0.0013227927635266388",
            "extra": "mean: 68.26253333333389 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.56610851114618,
            "unit": "iter/sec",
            "range": "stddev: 0.00013498732520785374",
            "extra": "mean: 5.663601063829712 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.02849904284943,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381146667645078",
            "extra": "mean: 3.967805243445828 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 390.43543680424267,
            "unit": "iter/sec",
            "range": "stddev: 0.00012584355534797255",
            "extra": "mean: 2.561242924528344 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 372.0535902716279,
            "unit": "iter/sec",
            "range": "stddev: 0.00011314197078865073",
            "extra": "mean: 2.6877848410760468 msec\nrounds: 409"
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
        "date": 1672216824946,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.8547071492171,
            "unit": "iter/sec",
            "range": "stddev: 0.0005536206430178368",
            "extra": "mean: 8.274398437499983 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.9609210370658,
            "unit": "iter/sec",
            "range": "stddev: 0.0001613276611326941",
            "extra": "mean: 6.580639240506336 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.6902261479438,
            "unit": "iter/sec",
            "range": "stddev: 0.00014609151886528434",
            "extra": "mean: 4.838158139534979 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.14655266803726,
            "unit": "iter/sec",
            "range": "stddev: 0.00007289911398828903",
            "extra": "mean: 3.1731268882174954 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.81351798540454,
            "unit": "iter/sec",
            "range": "stddev: 0.00022111844186441666",
            "extra": "mean: 8.786302521008446 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.43468992156673,
            "unit": "iter/sec",
            "range": "stddev: 0.0004168101359708317",
            "extra": "mean: 7.020761589403966 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.05575740481805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001749210138874607",
            "extra": "mean: 5.206821256038603 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.4700524218467,
            "unit": "iter/sec",
            "range": "stddev: 0.00010468623857762035",
            "extra": "mean: 3.2952180685358803 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.50722926206148,
            "unit": "iter/sec",
            "range": "stddev: 0.0017385461085135084",
            "extra": "mean: 74.03442857142853 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.869561398236899,
            "unit": "iter/sec",
            "range": "stddev: 0.002928029485279728",
            "extra": "mean: 72.10033333333237 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.4167614097775,
            "unit": "iter/sec",
            "range": "stddev: 0.00020394462916349754",
            "extra": "mean: 6.156999999999999 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.5874453288482,
            "unit": "iter/sec",
            "range": "stddev: 0.00011204037432050853",
            "extra": "mean: 4.281052000000187 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 356.1850294241821,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445190467042995",
            "extra": "mean: 2.8075295629819865 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.8240151474504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000879474587109588",
            "extra": "mean: 2.9169485094849463 msec\nrounds: 369"
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
        "date": 1672332697359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.29452544908858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006145108379813667",
            "extra": "mean: 9.872201834862317 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.058460505237,
            "unit": "iter/sec",
            "range": "stddev: 0.000800773085961559",
            "extra": "mean: 7.870392857142975 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.27437243429824,
            "unit": "iter/sec",
            "range": "stddev: 0.00045069409119847777",
            "extra": "mean: 5.838585106383066 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.36158885473793,
            "unit": "iter/sec",
            "range": "stddev: 0.00039814938132129543",
            "extra": "mean: 3.8115335570469933 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.08952248998335,
            "unit": "iter/sec",
            "range": "stddev: 0.0010049162701804139",
            "extra": "mean: 10.406961904761708 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.6687600836871,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278351219764831",
            "extra": "mean: 8.955056000000155 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.3411464176632,
            "unit": "iter/sec",
            "range": "stddev: 0.00027849518131041245",
            "extra": "mean: 6.437444444444335 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.98557228243243,
            "unit": "iter/sec",
            "range": "stddev: 0.00009120917106980601",
            "extra": "mean: 4.132477777777818 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.662313857809364,
            "unit": "iter/sec",
            "range": "stddev: 0.002541535405651823",
            "extra": "mean: 93.78827272727234 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.203665839462673,
            "unit": "iter/sec",
            "range": "stddev: 0.00136770953189487",
            "extra": "mean: 89.2565 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 131.26793292917844,
            "unit": "iter/sec",
            "range": "stddev: 0.0002915475129978148",
            "extra": "mean: 7.618006756756954 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 182.66475320816724,
            "unit": "iter/sec",
            "range": "stddev: 0.0003459580718292134",
            "extra": "mean: 5.474509900989965 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 279.5106724346392,
            "unit": "iter/sec",
            "range": "stddev: 0.0001622387928498984",
            "extra": "mean: 3.57768092105263 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 270.87467321805894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008261338273988085",
            "extra": "mean: 3.6917441860464453 msec\nrounds: 301"
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
        "date": 1672341205954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.87626940288416,
            "unit": "iter/sec",
            "range": "stddev: 0.0012124288923644549",
            "extra": "mean: 8.859258064516158 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.2157762803266,
            "unit": "iter/sec",
            "range": "stddev: 0.0008043059871124444",
            "extra": "mean: 6.982470967741904 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.1811325356588,
            "unit": "iter/sec",
            "range": "stddev: 0.0003601079334028848",
            "extra": "mean: 5.149830917874389 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.61147058739726,
            "unit": "iter/sec",
            "range": "stddev: 0.00019043961307817995",
            "extra": "mean: 3.3045673981191337 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.27107746378837,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621984272639922",
            "extra": "mean: 9.236076923077203 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.45280648842507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009363485655623857",
            "extra": "mean: 7.328541095890375 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.60868559467215,
            "unit": "iter/sec",
            "range": "stddev: 0.0002950161729661137",
            "extra": "mean: 5.274019999999933 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.7777726370572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167994092242438",
            "extra": "mean: 3.474903536977442 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.226800899800539,
            "unit": "iter/sec",
            "range": "stddev: 0.0018600700344254034",
            "extra": "mean: 75.60407142857046 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.653394916646153,
            "unit": "iter/sec",
            "range": "stddev: 0.002468569029810505",
            "extra": "mean: 73.24185714285646 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.58859433788925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006728645478159431",
            "extra": "mean: 6.3456369047615055 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.41737918319714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003084966452067022",
            "extra": "mean: 4.339950413223533 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 339.63069138700985,
            "unit": "iter/sec",
            "range": "stddev: 0.00015091215335389033",
            "extra": "mean: 2.944374655647649 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.8584182854837,
            "unit": "iter/sec",
            "range": "stddev: 0.00033235585995976713",
            "extra": "mean: 3.1166394366198307 msec\nrounds: 355"
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
        "date": 1672353562147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.92346402031045,
            "unit": "iter/sec",
            "range": "stddev: 0.0007972679926040183",
            "extra": "mean: 9.180758333333346 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.7064051798852,
            "unit": "iter/sec",
            "range": "stddev: 0.0007143812302286401",
            "extra": "mean: 7.592645161290338 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.54496314623907,
            "unit": "iter/sec",
            "range": "stddev: 0.00046578973180373917",
            "extra": "mean: 5.664279411764702 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.11041574479646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002672897808630693",
            "extra": "mean: 3.6086698412698617 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.0120211129408,
            "unit": "iter/sec",
            "range": "stddev: 0.00044766980777405206",
            "extra": "mean: 9.522719298245832 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.55075885974568,
            "unit": "iter/sec",
            "range": "stddev: 0.000478526980031694",
            "extra": "mean: 7.779028368794324 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.3816863879934,
            "unit": "iter/sec",
            "range": "stddev: 0.00045970336013818403",
            "extra": "mean: 5.66952284263947 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.6479591404071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002714941238731317",
            "extra": "mean: 3.5379700000000485 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.68212259710358,
            "unit": "iter/sec",
            "range": "stddev: 0.0020950426744320003",
            "extra": "mean: 78.85115384615396 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.450163432337785,
            "unit": "iter/sec",
            "range": "stddev: 0.0032105751601506217",
            "extra": "mean: 80.32023076923004 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.3905913958739,
            "unit": "iter/sec",
            "range": "stddev: 0.00041166307891197764",
            "extra": "mean: 6.605430303030408 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.09932213108195,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294535769996362",
            "extra": "mean: 4.543403361344484 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 315.15166453779824,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849477664243724",
            "extra": "mean: 3.17307541899422 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 292.7580245563265,
            "unit": "iter/sec",
            "range": "stddev: 0.000504147066069876",
            "extra": "mean: 3.4157902298852285 msec\nrounds: 348"
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
        "date": 1672683542582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.54304670397342,
            "unit": "iter/sec",
            "range": "stddev: 0.0006887503433269462",
            "extra": "mean: 8.365187500000044 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.24928920603418,
            "unit": "iter/sec",
            "range": "stddev: 0.00023701541002482397",
            "extra": "mean: 6.745394904458652 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.55003455927343,
            "unit": "iter/sec",
            "range": "stddev: 0.00043358708770788705",
            "extra": "mean: 5.087763033175305 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.5954776406951,
            "unit": "iter/sec",
            "range": "stddev: 0.00030547278667064203",
            "extra": "mean: 3.2300213414633996 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.29061870040373,
            "unit": "iter/sec",
            "range": "stddev: 0.0006411278203002214",
            "extra": "mean: 9.234410256410067 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.57479686460786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004170319692115288",
            "extra": "mean: 7.1136506849313275 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.73838304589563,
            "unit": "iter/sec",
            "range": "stddev: 0.00042029938918579856",
            "extra": "mean: 5.242783251231501 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.4335193322465,
            "unit": "iter/sec",
            "range": "stddev: 0.00017008373809243878",
            "extra": "mean: 3.3620958466451643 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.223477717967816,
            "unit": "iter/sec",
            "range": "stddev: 0.004907105452054658",
            "extra": "mean: 75.62307142857121 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.868445772527805,
            "unit": "iter/sec",
            "range": "stddev: 0.004198943521320647",
            "extra": "mean: 72.10613333333384 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.42004327190367,
            "unit": "iter/sec",
            "range": "stddev: 0.00025425215537690986",
            "extra": "mean: 6.195017543859482 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.06990170479483,
            "unit": "iter/sec",
            "range": "stddev: 0.0005411988936077588",
            "extra": "mean: 4.365479674796876 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.4002622640181,
            "unit": "iter/sec",
            "range": "stddev: 0.00037795705827608193",
            "extra": "mean: 2.920558510638405 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 337.4205906062309,
            "unit": "iter/sec",
            "range": "stddev: 0.00021451062292130135",
            "extra": "mean: 2.9636602739724256 msec\nrounds: 365"
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
        "date": 1672686541165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.84124130619719,
            "unit": "iter/sec",
            "range": "stddev: 0.0007031646438192551",
            "extra": "mean: 8.414587301587309 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.8545963406883,
            "unit": "iter/sec",
            "range": "stddev: 0.00017086612208917055",
            "extra": "mean: 6.585246835443054 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.6119752666912,
            "unit": "iter/sec",
            "range": "stddev: 0.0001994181216097926",
            "extra": "mean: 5.034943127962072 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.22086849381526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003802667422382537",
            "extra": "mean: 3.2763159509201882 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.48197660403044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006764643795014259",
            "extra": "mean: 8.970059829059817 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.98697278860254,
            "unit": "iter/sec",
            "range": "stddev: 0.00038219093624599536",
            "extra": "mean: 7.194918918919024 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.32812757637603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003872992053622906",
            "extra": "mean: 5.254084158415912 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.5510686160976,
            "unit": "iter/sec",
            "range": "stddev: 0.00007825650874145987",
            "extra": "mean: 3.3052271293375752 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.518837534472974,
            "unit": "iter/sec",
            "range": "stddev: 0.0025807523905052535",
            "extra": "mean: 73.97085714285748 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.074423675807889,
            "unit": "iter/sec",
            "range": "stddev: 0.0019528563646479774",
            "extra": "mean: 71.05086666666647 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.42167888108526,
            "unit": "iter/sec",
            "range": "stddev: 0.0002811629931315379",
            "extra": "mean: 6.272672619047711 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.70781308396997,
            "unit": "iter/sec",
            "range": "stddev: 0.00014826041548816855",
            "extra": "mean: 4.278847107437976 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.21623650452796,
            "unit": "iter/sec",
            "range": "stddev: 0.00015771857127882586",
            "extra": "mean: 2.922129032258143 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 329.7320881240902,
            "unit": "iter/sec",
            "range": "stddev: 0.00016202008221210715",
            "extra": "mean: 3.032765193370151 msec\nrounds: 362"
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
        "date": 1672767425650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.42398721811045,
            "unit": "iter/sec",
            "range": "stddev: 0.00027496018260591865",
            "extra": "mean: 8.51614754098359 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.97397023097653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009777032779829845",
            "extra": "mean: 6.850536423841092 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.57762214311936,
            "unit": "iter/sec",
            "range": "stddev: 0.0001011949664289022",
            "extra": "mean: 5.0870490196078615 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 265.78927988880605,
            "unit": "iter/sec",
            "range": "stddev: 0.008432868316558323",
            "extra": "mean: 3.7623789808917567 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.16313416052701,
            "unit": "iter/sec",
            "range": "stddev: 0.00011803718692361601",
            "extra": "mean: 9.160601769911406 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.16610333172534,
            "unit": "iter/sec",
            "range": "stddev: 0.00010195068438510077",
            "extra": "mean: 7.343971631205591 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.9457718913689,
            "unit": "iter/sec",
            "range": "stddev: 0.00011620023363239448",
            "extra": "mean: 5.320683673469343 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.0297029702979,
            "unit": "iter/sec",
            "range": "stddev: 0.00011761114032214604",
            "extra": "mean: 3.366666666666657 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.211099210636593,
            "unit": "iter/sec",
            "range": "stddev: 0.0011886854060289343",
            "extra": "mean: 75.69392857142988 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.593869553228028,
            "unit": "iter/sec",
            "range": "stddev: 0.0010566707306276994",
            "extra": "mean: 73.56257142857002 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.59109220912333,
            "unit": "iter/sec",
            "range": "stddev: 0.00018352898673472333",
            "extra": "mean: 6.305524390243607 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.4868519431238,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523170149709587",
            "extra": "mean: 4.338642276422628 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 351.5029526248047,
            "unit": "iter/sec",
            "range": "stddev: 0.0001027630665874427",
            "extra": "mean: 2.844926315789452 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 329.95656337829826,
            "unit": "iter/sec",
            "range": "stddev: 0.00009473504818028274",
            "extra": "mean: 3.030701949860869 msec\nrounds: 359"
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
        "date": 1672780110219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.21682295555605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002488236712108045",
            "extra": "mean: 8.249680000000069 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.50552506438922,
            "unit": "iter/sec",
            "range": "stddev: 0.00014298446337210967",
            "extra": "mean: 6.600419354838738 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.27169878540388,
            "unit": "iter/sec",
            "range": "stddev: 0.00013673864555417762",
            "extra": "mean: 4.895440758293897 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.9545670650876,
            "unit": "iter/sec",
            "range": "stddev: 0.00006623969544510748",
            "extra": "mean: 3.1550263157894394 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.65591438895308,
            "unit": "iter/sec",
            "range": "stddev: 0.00015021416208338612",
            "extra": "mean: 8.87658677685953 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.45943505364977,
            "unit": "iter/sec",
            "range": "stddev: 0.0001839000113403801",
            "extra": "mean: 7.069164383561555 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.67617268167575,
            "unit": "iter/sec",
            "range": "stddev: 0.00034759971122208847",
            "extra": "mean: 5.0845000000001 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.36029188368946,
            "unit": "iter/sec",
            "range": "stddev: 0.00013729626416277338",
            "extra": "mean: 3.3516524390244014 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.562566541342084,
            "unit": "iter/sec",
            "range": "stddev: 0.0011003648770472698",
            "extra": "mean: 73.7323571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.856812933025727,
            "unit": "iter/sec",
            "range": "stddev: 0.002333444684418403",
            "extra": "mean: 72.16666666666498 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.60020963812642,
            "unit": "iter/sec",
            "range": "stddev: 0.00026953329055544084",
            "extra": "mean: 6.15005357142861 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.23390372836286,
            "unit": "iter/sec",
            "range": "stddev: 0.00017050082545338235",
            "extra": "mean: 4.287541322314167 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.3954238177627,
            "unit": "iter/sec",
            "range": "stddev: 0.0001306165873055649",
            "extra": "mean: 2.7980212765955943 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.06001263131884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000879195618052452",
            "extra": "mean: 2.923463611859905 msec\nrounds: 371"
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
        "date": 1672783352974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.8885157627983,
            "unit": "iter/sec",
            "range": "stddev: 0.00046794244549853433",
            "extra": "mean: 8.704090163934444 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.57435404988954,
            "unit": "iter/sec",
            "range": "stddev: 0.00039360282642070737",
            "extra": "mean: 7.164639999999997 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.58522427104847,
            "unit": "iter/sec",
            "range": "stddev: 0.0004004628523017624",
            "extra": "mean: 5.417551724137902 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.581373628444,
            "unit": "iter/sec",
            "range": "stddev: 0.0003546274813333772",
            "extra": "mean: 3.501628930817635 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.67301090938217,
            "unit": "iter/sec",
            "range": "stddev: 0.0010768611240520901",
            "extra": "mean: 10.452268518518371 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.62294408499179,
            "unit": "iter/sec",
            "range": "stddev: 0.0010170125677237889",
            "extra": "mean: 8.501742647058908 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.0439148730089,
            "unit": "iter/sec",
            "range": "stddev: 0.0006908136459788745",
            "extra": "mean: 5.9864497354496615 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.4741170945696,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325416329431739",
            "extra": "mean: 3.96080204778151 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.675434757080412,
            "unit": "iter/sec",
            "range": "stddev: 0.007364856862153814",
            "extra": "mean: 93.67300000000061 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.6217426713738,
            "unit": "iter/sec",
            "range": "stddev: 0.00894611281077321",
            "extra": "mean: 86.04561538461516 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.31500252598843,
            "unit": "iter/sec",
            "range": "stddev: 0.0006309410690901921",
            "extra": "mean: 6.742406250000066 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 206.78563914370855,
            "unit": "iter/sec",
            "range": "stddev: 0.000407995849104121",
            "extra": "mean: 4.835925764192145 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 274.28074210279954,
            "unit": "iter/sec",
            "range": "stddev: 0.00033735345406264917",
            "extra": "mean: 3.6458994252874057 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 287.90108765540947,
            "unit": "iter/sec",
            "range": "stddev: 0.00033433027972365627",
            "extra": "mean: 3.4734151515151828 msec\nrounds: 330"
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
        "date": 1672841215531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.51509460783934,
            "unit": "iter/sec",
            "range": "stddev: 0.0005102390629406324",
            "extra": "mean: 8.162259541984742 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.77070505995067,
            "unit": "iter/sec",
            "range": "stddev: 0.0003572376600390981",
            "extra": "mean: 6.545757575757586 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.05528597990815,
            "unit": "iter/sec",
            "range": "stddev: 0.00011976793857899069",
            "extra": "mean: 4.738095022624533 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.75506963955934,
            "unit": "iter/sec",
            "range": "stddev: 0.00019119562609755058",
            "extra": "mean: 3.177073529411763 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.65034578822129,
            "unit": "iter/sec",
            "range": "stddev: 0.0007586509911984754",
            "extra": "mean: 8.798917355371918 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.0845544990269,
            "unit": "iter/sec",
            "range": "stddev: 0.00020363447749425018",
            "extra": "mean: 6.845350649350553 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.11876874886116,
            "unit": "iter/sec",
            "range": "stddev: 0.00022710901657981879",
            "extra": "mean: 4.947586046511746 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.5725952213337,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477811300335554",
            "extra": "mean: 3.1992567975829633 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.124626285929514,
            "unit": "iter/sec",
            "range": "stddev: 0.0015455041556852631",
            "extra": "mean: 70.79833333333335 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.682031249235346,
            "unit": "iter/sec",
            "range": "stddev: 0.0015495895247564207",
            "extra": "mean: 68.11046666666651 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.59787873216038,
            "unit": "iter/sec",
            "range": "stddev: 0.00015762035599313246",
            "extra": "mean: 5.931272727272149 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.1411575780778,
            "unit": "iter/sec",
            "range": "stddev: 0.00019698386395026866",
            "extra": "mean: 4.112837209302497 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 369.4891532539939,
            "unit": "iter/sec",
            "range": "stddev: 0.0001858004887886864",
            "extra": "mean: 2.7064393939396134 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.436964657245,
            "unit": "iter/sec",
            "range": "stddev: 0.00022252568484935385",
            "extra": "mean: 2.8293588390500606 msec\nrounds: 379"
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
        "date": 1672843451182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.41950709600296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003783555539499659",
            "extra": "mean: 7.91017164179101 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.17417883059164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002854775605077754",
            "extra": "mean: 6.4031071428570785 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.35449860526603,
            "unit": "iter/sec",
            "range": "stddev: 0.00026469570847694504",
            "extra": "mean: 4.941822429906563 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.72113371126323,
            "unit": "iter/sec",
            "range": "stddev: 0.00023500573407334507",
            "extra": "mean: 3.2816890243902295 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.74602212571335,
            "unit": "iter/sec",
            "range": "stddev: 0.0004978624035920841",
            "extra": "mean: 8.948864406779583 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.83133184478586,
            "unit": "iter/sec",
            "range": "stddev: 0.00028065487836969824",
            "extra": "mean: 6.904583333333488 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.2914382117267,
            "unit": "iter/sec",
            "range": "stddev: 0.00019460487953752514",
            "extra": "mean: 4.894967741935443 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.4259910337285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002092103095404522",
            "extra": "mean: 3.328606811145481 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.083207329586443,
            "unit": "iter/sec",
            "range": "stddev: 0.003425658428729977",
            "extra": "mean: 76.43385714285778 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.795018894577595,
            "unit": "iter/sec",
            "range": "stddev: 0.002153284151729396",
            "extra": "mean: 72.48993333333307 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.3577429238255,
            "unit": "iter/sec",
            "range": "stddev: 0.0003225272269211501",
            "extra": "mean: 6.047494252873691 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.07014549564147,
            "unit": "iter/sec",
            "range": "stddev: 0.0001396293319912589",
            "extra": "mean: 4.165449218749923 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 367.41352758116005,
            "unit": "iter/sec",
            "range": "stddev: 0.00014833849076893604",
            "extra": "mean: 2.721728855721308 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 323.2985742711464,
            "unit": "iter/sec",
            "range": "stddev: 0.00022391018385765871",
            "extra": "mean: 3.093116022099475 msec\nrounds: 362"
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
        "date": 1672844468778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.41776978663167,
            "unit": "iter/sec",
            "range": "stddev: 0.001111743795568054",
            "extra": "mean: 8.589753968254 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.01970195452915,
            "unit": "iter/sec",
            "range": "stddev: 0.0009014102401612074",
            "extra": "mean: 6.665791139240493 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.8303490318831,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374149108721414",
            "extra": "mean: 4.979327102803788 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.9299417292914,
            "unit": "iter/sec",
            "range": "stddev: 0.0011150528882073395",
            "extra": "mean: 3.4730670731708386 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.01041026769141,
            "unit": "iter/sec",
            "range": "stddev: 0.00034460833079135757",
            "extra": "mean: 8.694865079365071 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.92253225098477,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780813132510101",
            "extra": "mean: 6.996797385620837 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.29265285656194,
            "unit": "iter/sec",
            "range": "stddev: 0.0003567440799909416",
            "extra": "mean: 5.2004066985644855 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.08351002941725,
            "unit": "iter/sec",
            "range": "stddev: 0.00011358153395655702",
            "extra": "mean: 3.2249376947040207 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.54323542477008,
            "unit": "iter/sec",
            "range": "stddev: 0.0016643350795869766",
            "extra": "mean: 73.83759999999977 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.18145495297971,
            "unit": "iter/sec",
            "range": "stddev: 0.007023836751683952",
            "extra": "mean: 82.09199999999915 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.8932086751537,
            "unit": "iter/sec",
            "range": "stddev: 0.00030330361775879306",
            "extra": "mean: 6.101534090909532 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.01694773729372,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161591802924903",
            "extra": "mean: 4.328686746987814 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.69598842318686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630656928537845",
            "extra": "mean: 2.827286802030475 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.49209766536524,
            "unit": "iter/sec",
            "range": "stddev: 0.00015801688048343613",
            "extra": "mean: 2.8289175531913986 msec\nrounds: 376"
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
        "date": 1672858933986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.44398445563682,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858739675979504",
            "extra": "mean: 8.442809523809542 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.69104639293963,
            "unit": "iter/sec",
            "range": "stddev: 0.00017978122402537012",
            "extra": "mean: 6.636094339622645 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.36742562260247,
            "unit": "iter/sec",
            "range": "stddev: 0.00024046758351365332",
            "extra": "mean: 4.917208333333295 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.85411902370896,
            "unit": "iter/sec",
            "range": "stddev: 0.00009962853770621391",
            "extra": "mean: 3.1460973451327505 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.84883096688372,
            "unit": "iter/sec",
            "range": "stddev: 0.0004433921035724634",
            "extra": "mean: 8.783577235772228 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.1315777927911,
            "unit": "iter/sec",
            "range": "stddev: 0.0005445419983314107",
            "extra": "mean: 7.400194805194877 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.78441965842453,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161168601917919",
            "extra": "mean: 5.0305753424655775 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.7421905988642,
            "unit": "iter/sec",
            "range": "stddev: 0.00023304306742755605",
            "extra": "mean: 3.1873303303302047 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.065171228910103,
            "unit": "iter/sec",
            "range": "stddev: 0.015166772362164063",
            "extra": "mean: 82.88319999999985 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.02862562765388,
            "unit": "iter/sec",
            "range": "stddev: 0.010185697524796646",
            "extra": "mean: 76.7540666666676 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.11195958951572,
            "unit": "iter/sec",
            "range": "stddev: 0.0003249065820264618",
            "extra": "mean: 6.093401129943517 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.13251699627799,
            "unit": "iter/sec",
            "range": "stddev: 0.000539495938061228",
            "extra": "mean: 4.481641732283604 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.51855215260116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001029792984555552",
            "extra": "mean: 2.7892559366756458 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.0752570917978,
            "unit": "iter/sec",
            "range": "stddev: 0.00009699968534784825",
            "extra": "mean: 2.832257372654139 msec\nrounds: 373"
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
        "date": 1672942345634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.08884996299695,
            "unit": "iter/sec",
            "range": "stddev: 0.0002939629527524553",
            "extra": "mean: 7.930915384615437 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.89257612855718,
            "unit": "iter/sec",
            "range": "stddev: 0.00025990720172920173",
            "extra": "mean: 6.373787878787865 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.19701687236056,
            "unit": "iter/sec",
            "range": "stddev: 0.00009765673838091384",
            "extra": "mean: 4.66859909909902 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.9169655333787,
            "unit": "iter/sec",
            "range": "stddev: 0.00018444321722217412",
            "extra": "mean: 3.135612426035508 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.75648027067557,
            "unit": "iter/sec",
            "range": "stddev: 0.0002881862490173437",
            "extra": "mean: 8.714104838709803 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.0315029838557,
            "unit": "iter/sec",
            "range": "stddev: 0.0002602406055432101",
            "extra": "mean: 6.895053691275032 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.07920345721672,
            "unit": "iter/sec",
            "range": "stddev: 0.00027653929882087756",
            "extra": "mean: 5.179221698113044 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.4505401024734,
            "unit": "iter/sec",
            "range": "stddev: 0.00017639501990257295",
            "extra": "mean: 3.170069069069123 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.38052794211053,
            "unit": "iter/sec",
            "range": "stddev: 0.0026185552687003704",
            "extra": "mean: 74.7354666666664 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.022675951545223,
            "unit": "iter/sec",
            "range": "stddev: 0.008369186893997958",
            "extra": "mean: 76.78913333333335 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.3451764802614,
            "unit": "iter/sec",
            "range": "stddev: 0.0003016391556600993",
            "extra": "mean: 5.940176136363792 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.05254524470772,
            "unit": "iter/sec",
            "range": "stddev: 0.00018932096239585857",
            "extra": "mean: 4.064172549019826 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 376.25566013310555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001359479550169386",
            "extra": "mean: 2.65776732673267 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.4945862443476,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067368846973074",
            "extra": "mean: 2.828897637795125 msec\nrounds: 381"
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
        "date": 1672950101212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.06396392114512,
            "unit": "iter/sec",
            "range": "stddev: 0.0005113378395740233",
            "extra": "mean: 8.260096296296304 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.03587185378518,
            "unit": "iter/sec",
            "range": "stddev: 0.000511764833866629",
            "extra": "mean: 7.244493670886162 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.9808072268313,
            "unit": "iter/sec",
            "range": "stddev: 0.00025004449280757675",
            "extra": "mean: 5.025610328638552 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.02507479258134,
            "unit": "iter/sec",
            "range": "stddev: 0.00029496700343187456",
            "extra": "mean: 3.134549848942639 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.87984706623598,
            "unit": "iter/sec",
            "range": "stddev: 0.0015536167899715442",
            "extra": "mean: 9.356300813008053 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.57605623042312,
            "unit": "iter/sec",
            "range": "stddev: 0.00034192601172312463",
            "extra": "mean: 7.113586956521707 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.0711934366143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001620011336085026",
            "extra": "mean: 5.0233285024154295 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.8043929095667,
            "unit": "iter/sec",
            "range": "stddev: 0.00029792459702948453",
            "extra": "mean: 3.313404388714919 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.16590069337272,
            "unit": "iter/sec",
            "range": "stddev: 0.0031209029309470695",
            "extra": "mean: 75.95378571428591 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.78814429411273,
            "unit": "iter/sec",
            "range": "stddev: 0.003972505191248668",
            "extra": "mean: 78.19742857142842 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.89942780140768,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480524183088463",
            "extra": "mean: 6.215062500000085 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.08234111045846,
            "unit": "iter/sec",
            "range": "stddev: 0.000695390610049709",
            "extra": "mean: 4.442818548387379 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 351.4877478314028,
            "unit": "iter/sec",
            "range": "stddev: 0.00018584486645310255",
            "extra": "mean: 2.845049382716086 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 317.7319046839827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070235734243429",
            "extra": "mean: 3.147307479224045 msec\nrounds: 361"
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
        "date": 1673021443769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.29762331302939,
            "unit": "iter/sec",
            "range": "stddev: 0.0004340453801269271",
            "extra": "mean: 8.244184615384654 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.23051320825726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006286345573748066",
            "extra": "mean: 6.701042424242415 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.32848982200258,
            "unit": "iter/sec",
            "range": "stddev: 0.00037539155299997446",
            "extra": "mean: 5.172543378995509 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.12238621180506,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843724817912373",
            "extra": "mean: 3.2454636363636182 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.11188209907061,
            "unit": "iter/sec",
            "range": "stddev: 0.0004975877402315277",
            "extra": "mean: 8.919661157024585 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.59267080130468,
            "unit": "iter/sec",
            "range": "stddev: 0.00024393886223962003",
            "extra": "mean: 6.915979865771847 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.14204419655118,
            "unit": "iter/sec",
            "range": "stddev: 0.00043661992139946884",
            "extra": "mean: 5.177536585365893 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.0413621427475,
            "unit": "iter/sec",
            "range": "stddev: 0.00024404518015584277",
            "extra": "mean: 3.355238993710705 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.462783171521194,
            "unit": "iter/sec",
            "range": "stddev: 0.0008368529187926665",
            "extra": "mean: 74.27884615384528 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.9971856760619,
            "unit": "iter/sec",
            "range": "stddev: 0.005183383429860346",
            "extra": "mean: 76.93973333333162 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.06787915456178,
            "unit": "iter/sec",
            "range": "stddev: 0.0001728241540938527",
            "extra": "mean: 5.845632768361433 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.66025875663956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003493457556974488",
            "extra": "mean: 4.373300395257089 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.43942559513584,
            "unit": "iter/sec",
            "range": "stddev: 0.00022535002112985657",
            "extra": "mean: 2.861726315789594 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 328.89608956061664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003010815349150063",
            "extra": "mean: 3.040473972603121 msec\nrounds: 365"
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
        "date": 1673244968686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.91331326417301,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284255934752112",
            "extra": "mean: 8.935487394957965 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.24958802203426,
            "unit": "iter/sec",
            "range": "stddev: 0.0003832328205371583",
            "extra": "mean: 7.079666666666701 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.56666816769382,
            "unit": "iter/sec",
            "range": "stddev: 0.00045625458672811766",
            "extra": "mean: 5.303164179104507 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.62776743570015,
            "unit": "iter/sec",
            "range": "stddev: 0.00023477749109404643",
            "extra": "mean: 3.429028753993688 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.35664053414959,
            "unit": "iter/sec",
            "range": "stddev: 0.001378614634365561",
            "extra": "mean: 9.866151785714276 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.51661795777179,
            "unit": "iter/sec",
            "range": "stddev: 0.001261037087753918",
            "extra": "mean: 7.904099999999811 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.43926730496082,
            "unit": "iter/sec",
            "range": "stddev: 0.00044104150060515155",
            "extra": "mean: 5.542030927835113 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 269.85266914757347,
            "unit": "iter/sec",
            "range": "stddev: 0.000772966285983344",
            "extra": "mean: 3.705725806451569 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.098189643074361,
            "unit": "iter/sec",
            "range": "stddev: 0.0019201775444462252",
            "extra": "mean: 76.3464285714284 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.491076134960966,
            "unit": "iter/sec",
            "range": "stddev: 0.0031825625007893357",
            "extra": "mean: 74.1230714285709 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.242524664411,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897483519754867",
            "extra": "mean: 6.700503105590146 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.43757173122344,
            "unit": "iter/sec",
            "range": "stddev: 0.00023196728355479214",
            "extra": "mean: 4.396810924369873 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 315.37962594014357,
            "unit": "iter/sec",
            "range": "stddev: 0.0005059175738088082",
            "extra": "mean: 3.17078186968803 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 306.3059502401035,
            "unit": "iter/sec",
            "range": "stddev: 0.0007652080268060808",
            "extra": "mean: 3.2647096774193636 msec\nrounds: 341"
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
        "date": 1673254397284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.20467590985928,
            "unit": "iter/sec",
            "range": "stddev: 0.000611059938751297",
            "extra": "mean: 8.833557377049189 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.58913162763258,
            "unit": "iter/sec",
            "range": "stddev: 0.00022809195451503226",
            "extra": "mean: 6.729967320261488 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.19593822797515,
            "unit": "iter/sec",
            "range": "stddev: 0.00015838495748122215",
            "extra": "mean: 5.045512077294685 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.6697917747754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000749142830781979",
            "extra": "mean: 3.2930506329114095 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.61989838494846,
            "unit": "iter/sec",
            "range": "stddev: 0.00023988640120617004",
            "extra": "mean: 9.039964912280785 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.8030955327035,
            "unit": "iter/sec",
            "range": "stddev: 0.0002333031604054916",
            "extra": "mean: 7.256731034483035 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.40859670966756,
            "unit": "iter/sec",
            "range": "stddev: 0.00015248706634888646",
            "extra": "mean: 5.22442574257425 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.6185862954995,
            "unit": "iter/sec",
            "range": "stddev: 0.00014695884467289737",
            "extra": "mean: 3.5383377049180447 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.184610922131753,
            "unit": "iter/sec",
            "range": "stddev: 0.0014858772380877924",
            "extra": "mean: 75.84599999999962 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.674638410672847,
            "unit": "iter/sec",
            "range": "stddev: 0.005371466042948903",
            "extra": "mean: 78.8977142857138 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.69307855667256,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049979682662083",
            "extra": "mean: 6.07190058479531 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.33532258386722,
            "unit": "iter/sec",
            "range": "stddev: 0.00041097661353275186",
            "extra": "mean: 4.43783064516133 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.9179487271594,
            "unit": "iter/sec",
            "range": "stddev: 0.00013554634127170564",
            "extra": "mean: 2.857812820512752 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 332.9804231426634,
            "unit": "iter/sec",
            "range": "stddev: 0.00021117150693851275",
            "extra": "mean: 3.003179558011301 msec\nrounds: 362"
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
        "date": 1673261268393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.27786493880106,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831862899112414",
            "extra": "mean: 8.827850000000044 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.519033645991,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579707887499313",
            "extra": "mean: 7.219224489795897 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.5234276615652,
            "unit": "iter/sec",
            "range": "stddev: 0.0004754986613603228",
            "extra": "mean: 5.478748743718528 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.82535529878464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694389773536742",
            "extra": "mean: 3.474329073482507 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.00160183726172,
            "unit": "iter/sec",
            "range": "stddev: 0.0016590671987669148",
            "extra": "mean: 10.309108108108221 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.3419907831699,
            "unit": "iter/sec",
            "range": "stddev: 0.0008108441012519924",
            "extra": "mean: 8.241170212766113 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.80055267368644,
            "unit": "iter/sec",
            "range": "stddev: 0.00036655996635569335",
            "extra": "mean: 5.500533333333142 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.55885089228525,
            "unit": "iter/sec",
            "range": "stddev: 0.00017833252937088365",
            "extra": "mean: 3.4775490196077574 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.975474228779461,
            "unit": "iter/sec",
            "range": "stddev: 0.00697222616290303",
            "extra": "mean: 83.50399999999999 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.710702593164857,
            "unit": "iter/sec",
            "range": "stddev: 0.00496477215926455",
            "extra": "mean: 78.67385714285747 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.25912495541954,
            "unit": "iter/sec",
            "range": "stddev: 0.0004492582317914986",
            "extra": "mean: 6.524896969696799 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.940392425844,
            "unit": "iter/sec",
            "range": "stddev: 0.0002675266285937524",
            "extra": "mean: 4.546686440678076 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.3684794547443,
            "unit": "iter/sec",
            "range": "stddev: 0.0001781226346677792",
            "extra": "mean: 2.9729301675977693 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 311.6489060300921,
            "unit": "iter/sec",
            "range": "stddev: 0.0002467671429841917",
            "extra": "mean: 3.2087390029324934 msec\nrounds: 341"
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
        "date": 1673269125800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.83700737747805,
            "unit": "iter/sec",
            "range": "stddev: 0.00022726683610129603",
            "extra": "mean: 8.414887096774196 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.90960426283655,
            "unit": "iter/sec",
            "range": "stddev: 0.00014610382139973896",
            "extra": "mean: 6.853558441558339 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.2158939769928,
            "unit": "iter/sec",
            "range": "stddev: 0.00024003678975911434",
            "extra": "mean: 5.202483412322264 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.90100350920903,
            "unit": "iter/sec",
            "range": "stddev: 0.00010034275149563424",
            "extra": "mean: 3.269031446540826 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.24198982599768,
            "unit": "iter/sec",
            "range": "stddev: 0.00023424947519356203",
            "extra": "mean: 8.909321739130272 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.48214467668538,
            "unit": "iter/sec",
            "range": "stddev: 0.00040131139194143667",
            "extra": "mean: 7.326965753424487 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.46079883325135,
            "unit": "iter/sec",
            "range": "stddev: 0.00041211746854274945",
            "extra": "mean: 5.116115384615334 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.0267836609621,
            "unit": "iter/sec",
            "range": "stddev: 0.00015221239865186723",
            "extra": "mean: 3.278400630914766 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.788525386152546,
            "unit": "iter/sec",
            "range": "stddev: 0.0009364099582390703",
            "extra": "mean: 72.5240714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.739108076730892,
            "unit": "iter/sec",
            "range": "stddev: 0.0019407825330674594",
            "extra": "mean: 72.78492857142892 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.88583751759185,
            "unit": "iter/sec",
            "range": "stddev: 0.00022058615198930804",
            "extra": "mean: 6.064802259886686 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.2130357503039,
            "unit": "iter/sec",
            "range": "stddev: 0.00009962840589919678",
            "extra": "mean: 4.197923076922646 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 375.3496276989138,
            "unit": "iter/sec",
            "range": "stddev: 0.00010631475237036505",
            "extra": "mean: 2.6641827411166337 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 361.48445761427865,
            "unit": "iter/sec",
            "range": "stddev: 0.000053818457892870896",
            "extra": "mean: 2.766370666666527 msec\nrounds: 375"
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
        "date": 1673281613828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.49955856499106,
            "unit": "iter/sec",
            "range": "stddev: 0.0017276799185287194",
            "extra": "mean: 10.256456692913352 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.02550224213581,
            "unit": "iter/sec",
            "range": "stddev: 0.0013572991417725281",
            "extra": "mean: 8.76996794871797 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.98389832463621,
            "unit": "iter/sec",
            "range": "stddev: 0.0005839369946131746",
            "extra": "mean: 5.319604545454546 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.63322845818675,
            "unit": "iter/sec",
            "range": "stddev: 0.00034561334799589505",
            "extra": "mean: 3.3825696969697576 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 81.44693189407543,
            "unit": "iter/sec",
            "range": "stddev: 0.002207172580982497",
            "extra": "mean: 12.27793333333335 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 107.57122111264232,
            "unit": "iter/sec",
            "range": "stddev: 0.0014515247580560917",
            "extra": "mean: 9.296166666666899 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.4713607756606,
            "unit": "iter/sec",
            "range": "stddev: 0.0009053139910389578",
            "extra": "mean: 6.473691919192091 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.69975744260114,
            "unit": "iter/sec",
            "range": "stddev: 0.00045896154702707834",
            "extra": "mean: 4.137364516128983 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.50700476110804,
            "unit": "iter/sec",
            "range": "stddev: 0.004429739902070598",
            "extra": "mean: 105.18559999999937 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.852064654628022,
            "unit": "iter/sec",
            "range": "stddev: 0.009661123695229057",
            "extra": "mean: 92.1483636363644 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 136.0808239573109,
            "unit": "iter/sec",
            "range": "stddev: 0.0012606831701538314",
            "extra": "mean: 7.34857396449704 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 188.7273173355468,
            "unit": "iter/sec",
            "range": "stddev: 0.0010261139443443193",
            "extra": "mean: 5.298650000000027 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 299.8211357288136,
            "unit": "iter/sec",
            "range": "stddev: 0.0003647825210190006",
            "extra": "mean: 3.3353218997358947 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 263.427709062151,
            "unit": "iter/sec",
            "range": "stddev: 0.00048656700796694734",
            "extra": "mean: 3.79610787172001 msec\nrounds: 343"
          }
        ]
      }
    ]
  }
}