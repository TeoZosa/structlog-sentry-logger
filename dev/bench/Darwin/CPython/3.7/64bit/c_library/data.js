window.BENCHMARK_DATA = {
  "lastUpdate": 1646663772751,
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
        "date": 1642085559446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.59116528468559,
            "unit": "iter/sec",
            "range": "stddev: 0.00042526934037314193",
            "extra": "mean: 7.962343511450311 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.00381929471993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086056939170273",
            "extra": "mean: 6.493345454545396 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7641996255056,
            "unit": "iter/sec",
            "range": "stddev: 0.00036604794274823244",
            "extra": "mean: 5.242073732718861 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.0149603542948,
            "unit": "iter/sec",
            "range": "stddev: 0.00014896474597961095",
            "extra": "mean: 3.021011494252923 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.33082949649847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002483249107415116",
            "extra": "mean: 8.59617355371905 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.94014546321588,
            "unit": "iter/sec",
            "range": "stddev: 0.0003024255959009022",
            "extra": "mean: 6.852124183006582 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01073558380548,
            "unit": "iter/sec",
            "range": "stddev: 0.00021002015563735486",
            "extra": "mean: 4.901702830188612 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.6895620523507,
            "unit": "iter/sec",
            "range": "stddev: 0.00011842720564590338",
            "extra": "mean: 3.014867256637306 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.09543296775252,
            "unit": "iter/sec",
            "range": "stddev: 0.0014735283532029749",
            "extra": "mean: 76.36249999999986 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.2075222499577,
            "unit": "iter/sec",
            "range": "stddev: 0.0017187273339152537",
            "extra": "mean: 75.7144285714304 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.17918317532946,
            "unit": "iter/sec",
            "range": "stddev: 0.0003253330422041604",
            "extra": "mean: 5.946039106144808 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.64685430307122,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564084469247955",
            "extra": "mean: 4.07088461538462 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 486.91218611034094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009090140008376759",
            "extra": "mean: 2.0537584158417146 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 469.646225507209,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722667250186487",
            "extra": "mean: 2.129262295081833 msec\nrounds: 488"
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
        "date": 1642435405932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.42702305501945,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727088072409583",
            "extra": "mean: 8.101953488372112 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.09292120220766,
            "unit": "iter/sec",
            "range": "stddev: 0.00028707399933252016",
            "extra": "mean: 6.618443750000041 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.54342289655128,
            "unit": "iter/sec",
            "range": "stddev: 0.00036320482955292684",
            "extra": "mean: 4.772280542986484 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.1750288648441,
            "unit": "iter/sec",
            "range": "stddev: 0.00014322355102193578",
            "extra": "mean: 2.99244382022466 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.31131936294751,
            "unit": "iter/sec",
            "range": "stddev: 0.00035834535773173983",
            "extra": "mean: 8.903822033898292 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.54717644400046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007431460935314981",
            "extra": "mean: 7.9651333333334176 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.1511703499171,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531374204162762",
            "extra": "mean: 5.286776699028964 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6879257724834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849011003003273",
            "extra": "mean: 3.1676852941176494 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.230713409471768,
            "unit": "iter/sec",
            "range": "stddev: 0.006857589331237249",
            "extra": "mean: 89.0415384615388 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.884453854494078,
            "unit": "iter/sec",
            "range": "stddev: 0.003952302422121362",
            "extra": "mean: 84.14353846153834 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.80895078973256,
            "unit": "iter/sec",
            "range": "stddev: 0.00045142785859738775",
            "extra": "mean: 6.218559322034011 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.13296690030867,
            "unit": "iter/sec",
            "range": "stddev: 0.0004333848070946313",
            "extra": "mean: 4.38340856031118 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.72208205340706,
            "unit": "iter/sec",
            "range": "stddev: 0.00017963356703551423",
            "extra": "mean: 2.11540784313736 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.34337816638185,
            "unit": "iter/sec",
            "range": "stddev: 0.00017277689911543155",
            "extra": "mean: 2.2555879917184893 msec\nrounds: 483"
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
        "date": 1643746729009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.90704622851369,
            "unit": "iter/sec",
            "range": "stddev: 0.0006213582294215453",
            "extra": "mean: 8.627603174603161 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.11161354443124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466709822172887",
            "extra": "mean: 7.0367225806450335 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.72332044126358,
            "unit": "iter/sec",
            "range": "stddev: 0.0003671263333757539",
            "extra": "mean: 4.957285046729008 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.8443785316772,
            "unit": "iter/sec",
            "range": "stddev: 0.00036757177854353424",
            "extra": "mean: 3.4264836795253144 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.57400573099727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420423479682108",
            "extra": "mean: 9.126252100840292 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.50441262044777,
            "unit": "iter/sec",
            "range": "stddev: 0.000617701504342806",
            "extra": "mean: 7.2199865771812055 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.9252253544162,
            "unit": "iter/sec",
            "range": "stddev: 0.0006242972015734996",
            "extra": "mean: 5.321265402843378 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.5938992445419,
            "unit": "iter/sec",
            "range": "stddev: 0.0004110766791758424",
            "extra": "mean: 3.2616435045316785 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.257594286829686,
            "unit": "iter/sec",
            "range": "stddev: 0.003287640350908733",
            "extra": "mean: 81.5820769230763 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.987787211244084,
            "unit": "iter/sec",
            "range": "stddev: 0.004022967730291097",
            "extra": "mean: 83.41823076923141 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.09069703962308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652241326549009",
            "extra": "mean: 6.4478400000002365 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.19828448603022,
            "unit": "iter/sec",
            "range": "stddev: 0.00029000473752770504",
            "extra": "mean: 4.306664031620627 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.5140716041953,
            "unit": "iter/sec",
            "range": "stddev: 0.00018249122251738184",
            "extra": "mean: 2.1953218623483464 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.86323840419766,
            "unit": "iter/sec",
            "range": "stddev: 0.00014920527186816285",
            "extra": "mean: 2.20330688935293 msec\nrounds: 479"
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
        "date": 1643756064800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.40700938404203,
            "unit": "iter/sec",
            "range": "stddev: 0.0004171609535252048",
            "extra": "mean: 8.374717741935537 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.69454433532871,
            "unit": "iter/sec",
            "range": "stddev: 0.00041312990782233004",
            "extra": "mean: 6.959206451612931 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.08244646232689,
            "unit": "iter/sec",
            "range": "stddev: 0.0003504923368020062",
            "extra": "mean: 5.074018604651095 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.9295717124456,
            "unit": "iter/sec",
            "range": "stddev: 0.00018519947125023842",
            "extra": "mean: 3.058762762762742 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.64718197552497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279669978744996",
            "extra": "mean: 9.204104347826258 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.05179528616836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072563388812687",
            "extra": "mean: 7.350141891892144 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.55055877204606,
            "unit": "iter/sec",
            "range": "stddev: 0.00035875321658427434",
            "extra": "mean: 5.166608695652225 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.5099255827038,
            "unit": "iter/sec",
            "range": "stddev: 0.00022763917984851363",
            "extra": "mean: 3.159458579881726 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.542753906344306,
            "unit": "iter/sec",
            "range": "stddev: 0.0021989335439633927",
            "extra": "mean: 79.72730769230715 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.86712669708181,
            "unit": "iter/sec",
            "range": "stddev: 0.00144470943122087",
            "extra": "mean: 77.71742857143035 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.01444421626505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003174693754398434",
            "extra": "mean: 6.023572254335363 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.77820017071485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476738294201304",
            "extra": "mean: 4.052221789883489 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.75091447372495,
            "unit": "iter/sec",
            "range": "stddev: 0.00004867015395620716",
            "extra": "mean: 2.0975313725488673 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 464.60162307158123,
            "unit": "iter/sec",
            "range": "stddev: 0.00005221329612087513",
            "extra": "mean: 2.1523816326529057 msec\nrounds: 490"
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
        "date": 1643756762401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.91920437266293,
            "unit": "iter/sec",
            "range": "stddev: 0.0027921784256398296",
            "extra": "mean: 9.811693548387069 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.42778932900111,
            "unit": "iter/sec",
            "range": "stddev: 0.0003416797428149783",
            "extra": "mean: 6.603807692307651 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.872446319386,
            "unit": "iter/sec",
            "range": "stddev: 0.0003174952659681042",
            "extra": "mean: 4.929205607476536 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.50603669894434,
            "unit": "iter/sec",
            "range": "stddev: 0.00032432497056438236",
            "extra": "mean: 3.294827380952315 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.47726063950418,
            "unit": "iter/sec",
            "range": "stddev: 0.0010533168212675831",
            "extra": "mean: 10.365136752136738 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.69925629034776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003313027883263465",
            "extra": "mean: 7.107358108108222 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.2407385587978,
            "unit": "iter/sec",
            "range": "stddev: 0.00041424977510350915",
            "extra": "mean: 5.20181105990781 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.0260530904093,
            "unit": "iter/sec",
            "range": "stddev: 0.00021806046460222343",
            "extra": "mean: 3.1150119760478567 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.48059507477318,
            "unit": "iter/sec",
            "range": "stddev: 0.003854935441276658",
            "extra": "mean: 80.12438461538451 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.112032365076441,
            "unit": "iter/sec",
            "range": "stddev: 0.007641719446731707",
            "extra": "mean: 89.9925384615383 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.44914392651617,
            "unit": "iter/sec",
            "range": "stddev: 0.0004986307886427153",
            "extra": "mean: 6.351257142856964 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.2327255438114,
            "unit": "iter/sec",
            "range": "stddev: 0.00028959944916282784",
            "extra": "mean: 4.145374545454802 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.26120251685126,
            "unit": "iter/sec",
            "range": "stddev: 0.00010175281532653842",
            "extra": "mean: 2.1310093283582074 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.83820173689577,
            "unit": "iter/sec",
            "range": "stddev: 0.00013843232774088951",
            "extra": "mean: 2.248008368200941 msec\nrounds: 478"
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
        "date": 1643758698303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.58265493388478,
            "unit": "iter/sec",
            "range": "stddev: 0.0004871470865523824",
            "extra": "mean: 8.432936507936557 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.18547969906933,
            "unit": "iter/sec",
            "range": "stddev: 0.00043445953577739125",
            "extra": "mean: 6.983948387096823 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.88928427167696,
            "unit": "iter/sec",
            "range": "stddev: 0.00023887574167097785",
            "extra": "mean: 4.904622641509335 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.33119310128467,
            "unit": "iter/sec",
            "range": "stddev: 0.00017086294698037932",
            "extra": "mean: 3.0928039772727605 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.26004415561508,
            "unit": "iter/sec",
            "range": "stddev: 0.00043346959838051497",
            "extra": "mean: 8.90788888888907 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.90943712392806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003460652414133011",
            "extra": "mean: 7.09675675675656 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.33766243178422,
            "unit": "iter/sec",
            "range": "stddev: 0.0004568467448592989",
            "extra": "mean: 5.281569377990427 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.4497832933138,
            "unit": "iter/sec",
            "range": "stddev: 0.00010213133763691031",
            "extra": "mean: 3.0726706586826733 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.563263278644461,
            "unit": "iter/sec",
            "range": "stddev: 0.000840227334928354",
            "extra": "mean: 79.59715384615397 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.339983635283247,
            "unit": "iter/sec",
            "range": "stddev: 0.0018780510082922273",
            "extra": "mean: 81.03738461538458 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.64881283209724,
            "unit": "iter/sec",
            "range": "stddev: 0.00043019536208979177",
            "extra": "mean: 6.383706214689554 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.570554822392,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155608440535366",
            "extra": "mean: 4.122511904761858 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.56845338341776,
            "unit": "iter/sec",
            "range": "stddev: 0.00008580582602249703",
            "extra": "mean: 2.138724271844694 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.5397539122445,
            "unit": "iter/sec",
            "range": "stddev: 0.00016865856800668379",
            "extra": "mean: 2.2294567901235505 msec\nrounds: 486"
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
        "date": 1643759019479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.50798762763722,
            "unit": "iter/sec",
            "range": "stddev: 0.0008651244619036967",
            "extra": "mean: 8.888257812500001 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.3729209874708,
            "unit": "iter/sec",
            "range": "stddev: 0.00025666706572965666",
            "extra": "mean: 6.694653846153807 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.61608766304667,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917015667072744",
            "extra": "mean: 4.959921658986172 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.58312850953166,
            "unit": "iter/sec",
            "range": "stddev: 0.00018772687917597175",
            "extra": "mean: 3.251153614457794 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.9486482971087,
            "unit": "iter/sec",
            "range": "stddev: 0.0009269538721900939",
            "extra": "mean: 9.263663934426347 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.43826299764132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004146332111018357",
            "extra": "mean: 7.171632653061058 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.92040281290866,
            "unit": "iter/sec",
            "range": "stddev: 0.0004079816536927617",
            "extra": "mean: 5.321401960784366 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.7037509559524,
            "unit": "iter/sec",
            "range": "stddev: 0.00015563195290950327",
            "extra": "mean: 3.208174418604646 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.88599301763268,
            "unit": "iter/sec",
            "range": "stddev: 0.0010318839832770307",
            "extra": "mean: 77.60364285714262 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.433623578741596,
            "unit": "iter/sec",
            "range": "stddev: 0.0016043087016699561",
            "extra": "mean: 80.42707692307424 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.508889266573,
            "unit": "iter/sec",
            "range": "stddev: 0.0004484269924600972",
            "extra": "mean: 6.308794444444348 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.59364112512654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002609297231059054",
            "extra": "mean: 4.038875939849478 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.65814901153766,
            "unit": "iter/sec",
            "range": "stddev: 0.00010402280309491732",
            "extra": "mean: 2.161423076922962 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.259277372228,
            "unit": "iter/sec",
            "range": "stddev: 0.00009599467365387643",
            "extra": "mean: 2.2111210317460417 msec\nrounds: 504"
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
        "date": 1643759691496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.15149470967356,
            "unit": "iter/sec",
            "range": "stddev: 0.0004669008695043431",
            "extra": "mean: 8.392676923076928 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.3867431094671,
            "unit": "iter/sec",
            "range": "stddev: 0.00034275385156131544",
            "extra": "mean: 6.739146496815321 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.77745318888918,
            "unit": "iter/sec",
            "range": "stddev: 0.00023161627340485935",
            "extra": "mean: 5.056188073394497 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.0847377534149,
            "unit": "iter/sec",
            "range": "stddev: 0.00023176989222051166",
            "extra": "mean: 3.124172701949864 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.15682708256965,
            "unit": "iter/sec",
            "range": "stddev: 0.0004029315471235368",
            "extra": "mean: 8.837292682926748 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.10088037944257,
            "unit": "iter/sec",
            "range": "stddev: 0.00014007282054837936",
            "extra": "mean: 6.891756944444266 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.30959432834868,
            "unit": "iter/sec",
            "range": "stddev: 0.00037196261921707685",
            "extra": "mean: 5.042620370370292 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.0636513963063,
            "unit": "iter/sec",
            "range": "stddev: 0.0001718764474739892",
            "extra": "mean: 3.057508823529552 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.708803192451374,
            "unit": "iter/sec",
            "range": "stddev: 0.0009831385574147094",
            "extra": "mean: 78.68561538461532 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.579158849618034,
            "unit": "iter/sec",
            "range": "stddev: 0.0010492284135198416",
            "extra": "mean: 79.49657142857092 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.08939715146835,
            "unit": "iter/sec",
            "range": "stddev: 0.00043920198692971255",
            "extra": "mean: 6.020853932584458 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.9319337008678,
            "unit": "iter/sec",
            "range": "stddev: 0.0002979104438947502",
            "extra": "mean: 4.167848708487206 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 477.9743873500943,
            "unit": "iter/sec",
            "range": "stddev: 0.00013038732292249363",
            "extra": "mean: 2.092162313432803 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 464.0886020948998,
            "unit": "iter/sec",
            "range": "stddev: 0.00008477808668226215",
            "extra": "mean: 2.154760956175161 msec\nrounds: 502"
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
        "date": 1643760259193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.58356589197689,
            "unit": "iter/sec",
            "range": "stddev: 0.001102411178603317",
            "extra": "mean: 9.844111999999996 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.36226966527565,
            "unit": "iter/sec",
            "range": "stddev: 0.0007821843404525209",
            "extra": "mean: 7.612535947712393 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.01062917880756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161423580948677",
            "extra": "mean: 5.376036866359524 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.68380422466186,
            "unit": "iter/sec",
            "range": "stddev: 0.00025902881276412387",
            "extra": "mean: 3.250089820359309 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.95381474420707,
            "unit": "iter/sec",
            "range": "stddev: 0.0009846928367202327",
            "extra": "mean: 9.713093220339049 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.49376638230308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006261513801283103",
            "extra": "mean: 7.490986486486364 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.1605289661506,
            "unit": "iter/sec",
            "range": "stddev: 0.0005819151889760175",
            "extra": "mean: 5.489663461538486 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.33214449786675,
            "unit": "iter/sec",
            "range": "stddev: 0.0002148126480426527",
            "extra": "mean: 3.3745917159763237 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.302229826472304,
            "unit": "iter/sec",
            "range": "stddev: 0.0033297371132855703",
            "extra": "mean: 81.286076923077 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.96251823660578,
            "unit": "iter/sec",
            "range": "stddev: 0.0023995222804217555",
            "extra": "mean: 91.21991666666733 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.58990915063936,
            "unit": "iter/sec",
            "range": "stddev: 0.00048149160516630613",
            "extra": "mean: 6.3055714285713655 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.59301440931765,
            "unit": "iter/sec",
            "range": "stddev: 0.0005132644149675941",
            "extra": "mean: 4.3745868725865975 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.7541577368847,
            "unit": "iter/sec",
            "range": "stddev: 0.00019275545672617171",
            "extra": "mean: 2.1893615702477183 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.97437353823756,
            "unit": "iter/sec",
            "range": "stddev: 0.00019986007609266925",
            "extra": "mean: 2.38109766454346 msec\nrounds: 471"
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
        "date": 1643761286664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.45145247282501,
            "unit": "iter/sec",
            "range": "stddev: 0.0010552252057449748",
            "extra": "mean: 9.306528455284537 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.73930452669322,
            "unit": "iter/sec",
            "range": "stddev: 0.0004180735077699576",
            "extra": "mean: 6.768679487179541 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.56771086982587,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896444576697705",
            "extra": "mean: 5.388868544600904 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.3685478780088,
            "unit": "iter/sec",
            "range": "stddev: 0.000384462989076711",
            "extra": "mean: 3.455800595238074 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.51583045618135,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266769581453143",
            "extra": "mean: 9.388275862068987 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.43860216808173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005595206118502097",
            "extra": "mean: 7.32930405405413 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.6645647692248,
            "unit": "iter/sec",
            "range": "stddev: 0.00030638615972447406",
            "extra": "mean: 5.110787439613519 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.98815433266145,
            "unit": "iter/sec",
            "range": "stddev: 0.00020577673950926504",
            "extra": "mean: 3.174722560975713 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.431031680006235,
            "unit": "iter/sec",
            "range": "stddev: 0.0024583920166828077",
            "extra": "mean: 80.44384615384541 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.66045914615881,
            "unit": "iter/sec",
            "range": "stddev: 0.0015898228654755684",
            "extra": "mean: 78.98607692307908 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.44084380049335,
            "unit": "iter/sec",
            "range": "stddev: 0.00046326930271060196",
            "extra": "mean: 6.4749710982659465 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.46733211553988,
            "unit": "iter/sec",
            "range": "stddev: 0.00014777930999337093",
            "extra": "mean: 4.124266932270623 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 477.06988221866857,
            "unit": "iter/sec",
            "range": "stddev: 0.00008896286241335103",
            "extra": "mean: 2.0961289682538427 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.3325535556104,
            "unit": "iter/sec",
            "range": "stddev: 0.00012107490815730791",
            "extra": "mean: 2.265865030674639 msec\nrounds: 489"
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
        "date": 1643762353895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.02308601114188,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704807676859969",
            "extra": "mean: 8.1951705426356 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.6882013916857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006920830259770163",
            "extra": "mean: 6.9114135802469345 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.90639130728138,
            "unit": "iter/sec",
            "range": "stddev: 0.00017107479880363593",
            "extra": "mean: 4.741440000000018 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.16193069672033,
            "unit": "iter/sec",
            "range": "stddev: 0.00015623295931372722",
            "extra": "mean: 3.0015434173669355 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.3117821245503,
            "unit": "iter/sec",
            "range": "stddev: 0.0010118622459027251",
            "extra": "mean: 10.276247933884205 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.59140338877955,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934538736384548",
            "extra": "mean: 7.8994305555556785 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.22047505229,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812206476812218",
            "extra": "mean: 5.148787735849013 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.15574711167613,
            "unit": "iter/sec",
            "range": "stddev: 0.00029175806350117115",
            "extra": "mean: 3.266311377245618 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.791704082650773,
            "unit": "iter/sec",
            "range": "stddev: 0.0030054606285464976",
            "extra": "mean: 84.80538461538464 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.413001568812353,
            "unit": "iter/sec",
            "range": "stddev: 0.0029237971995511613",
            "extra": "mean: 80.56069230769279 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.94091106762187,
            "unit": "iter/sec",
            "range": "stddev: 0.0007349546850642481",
            "extra": "mean: 6.805456647398914 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.10241711566394,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915789468032728",
            "extra": "mean: 4.442422310757205 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.05791673068035,
            "unit": "iter/sec",
            "range": "stddev: 0.00017304674360687236",
            "extra": "mean: 2.113906066536281 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.3387013212891,
            "unit": "iter/sec",
            "range": "stddev: 0.00017487412949407258",
            "extra": "mean: 2.23045656565655 msec\nrounds: 495"
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
        "date": 1643775491866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.58899297317569,
            "unit": "iter/sec",
            "range": "stddev: 0.0005601040457158812",
            "extra": "mean: 8.881862903225803 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.93134295142445,
            "unit": "iter/sec",
            "range": "stddev: 0.0004062398815382363",
            "extra": "mean: 6.852537500000022 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.86032571942062,
            "unit": "iter/sec",
            "range": "stddev: 0.00044012348648839736",
            "extra": "mean: 5.1056792452829285 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.8910719791528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883004325952794",
            "extra": "mean: 3.1163222891566353 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.65637544704639,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148866888757944",
            "extra": "mean: 9.288813559322143 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.015432523367,
            "unit": "iter/sec",
            "range": "stddev: 0.0005283806893755606",
            "extra": "mean: 7.51792465753422 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.74524281571126,
            "unit": "iter/sec",
            "range": "stddev: 0.000189086138888626",
            "extra": "mean: 4.981438095238067 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.9537803910418,
            "unit": "iter/sec",
            "range": "stddev: 0.00017866126386068356",
            "extra": "mean: 3.1254514285713952 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.3571089873309,
            "unit": "iter/sec",
            "range": "stddev: 0.0016564100546752076",
            "extra": "mean: 74.86649999999935 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.702297160932682,
            "unit": "iter/sec",
            "range": "stddev: 0.0025296622101458255",
            "extra": "mean: 85.45330769230776 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.11055104520273,
            "unit": "iter/sec",
            "range": "stddev: 0.000458609656229669",
            "extra": "mean: 6.206918128654593 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 178.2367977208119,
            "unit": "iter/sec",
            "range": "stddev: 0.0026343365864665",
            "extra": "mean: 5.610513725490001 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.588764813677,
            "unit": "iter/sec",
            "range": "stddev: 0.0001799207479480854",
            "extra": "mean: 2.269690196078639 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.67086770003954,
            "unit": "iter/sec",
            "range": "stddev: 0.00017084736929436626",
            "extra": "mean: 2.305896186440814 msec\nrounds: 472"
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
        "date": 1643775886837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.10240830294454,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770689690975598",
            "extra": "mean: 8.764056910569115 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.9332297065732,
            "unit": "iter/sec",
            "range": "stddev: 0.0004509829831785852",
            "extra": "mean: 7.249884615384635 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.86173268990277,
            "unit": "iter/sec",
            "range": "stddev: 0.00030688683741263574",
            "extra": "mean: 4.881341121495298 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.43607852426084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002075491947779564",
            "extra": "mean: 3.160195906432746 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.64954008512868,
            "unit": "iter/sec",
            "range": "stddev: 0.0009411212848837008",
            "extra": "mean: 10.45483333333327 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.7268647118569,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899732538888999",
            "extra": "mean: 7.31385161290311 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.0015306462028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004546442093255122",
            "extra": "mean: 5.290962441314445 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.13273428532,
            "unit": "iter/sec",
            "range": "stddev: 0.00014351954343016246",
            "extra": "mean: 3.0947034883721165 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.936971076913247,
            "unit": "iter/sec",
            "range": "stddev: 0.001725202927491256",
            "extra": "mean: 77.29784615384634 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.610169228470882,
            "unit": "iter/sec",
            "range": "stddev: 0.0019938225623791434",
            "extra": "mean: 79.30107692307796 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.42510009214257,
            "unit": "iter/sec",
            "range": "stddev: 0.00034677513174042024",
            "extra": "mean: 6.156683908045661 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.19978547989123,
            "unit": "iter/sec",
            "range": "stddev: 0.00021327305883296477",
            "extra": "mean: 4.095007692307516 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.76423014976626,
            "unit": "iter/sec",
            "range": "stddev: 0.00009639892260629774",
            "extra": "mean: 2.084357142857094 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 464.89070763823554,
            "unit": "iter/sec",
            "range": "stddev: 0.00010945271626664462",
            "extra": "mean: 2.1510432098766987 msec\nrounds: 486"
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
        "date": 1643782340203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.60617479032516,
            "unit": "iter/sec",
            "range": "stddev: 0.0005791840899483401",
            "extra": "mean: 8.360772357723533 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.0917011877584,
            "unit": "iter/sec",
            "range": "stddev: 0.0003537856988874885",
            "extra": "mean: 6.662593548387076 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8140400698414,
            "unit": "iter/sec",
            "range": "stddev: 0.00026891226550498063",
            "extra": "mean: 4.906433333333307 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.83951201172897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639190077010522",
            "extra": "mean: 3.156172011661795 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.1593255333782,
            "unit": "iter/sec",
            "range": "stddev: 0.0012645523273983",
            "extra": "mean: 9.788631578947465 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.01702115346635,
            "unit": "iter/sec",
            "range": "stddev: 0.000778477652266295",
            "extra": "mean: 7.574780821917851 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.58884064268162,
            "unit": "iter/sec",
            "range": "stddev: 0.0002350692991369181",
            "extra": "mean: 5.061014563106797 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.5349885182261,
            "unit": "iter/sec",
            "range": "stddev: 0.00021805273854680316",
            "extra": "mean: 3.2411234939758766 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.981255067682275,
            "unit": "iter/sec",
            "range": "stddev: 0.0010058514507755721",
            "extra": "mean: 77.0341538461538 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.836571546156753,
            "unit": "iter/sec",
            "range": "stddev: 0.0015841764138680992",
            "extra": "mean: 84.48392307692278 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 141.30664280885003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005601559341616684",
            "extra": "mean: 7.076808139534754 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.23968363963797,
            "unit": "iter/sec",
            "range": "stddev: 0.00018649387851922262",
            "extra": "mean: 4.145254980079448 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.3590948045718,
            "unit": "iter/sec",
            "range": "stddev: 0.00012232320351140047",
            "extra": "mean: 2.1535057915057223 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.48237132001384,
            "unit": "iter/sec",
            "range": "stddev: 0.00011832291220752424",
            "extra": "mean: 2.275404123711345 msec\nrounds: 485"
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
        "date": 1643823922930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.0343348765231,
            "unit": "iter/sec",
            "range": "stddev: 0.000495671539989468",
            "extra": "mean: 8.472111111111102 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.78943062732836,
            "unit": "iter/sec",
            "range": "stddev: 0.00023330680021666774",
            "extra": "mean: 6.676038461538519 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.74398891852175,
            "unit": "iter/sec",
            "range": "stddev: 0.0001681155804850931",
            "extra": "mean: 4.836900000000011 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.23990993206974,
            "unit": "iter/sec",
            "range": "stddev: 0.00010497191774247892",
            "extra": "mean: 3.037298850574721 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.92579244239334,
            "unit": "iter/sec",
            "range": "stddev: 0.0003576392872310629",
            "extra": "mean: 8.855372881355944 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.6975626715217,
            "unit": "iter/sec",
            "range": "stddev: 0.00038675361274911657",
            "extra": "mean: 6.910966442953172 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.61225775352167,
            "unit": "iter/sec",
            "range": "stddev: 0.00021012395982470837",
            "extra": "mean: 4.935535545023651 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.4209872977556,
            "unit": "iter/sec",
            "range": "stddev: 0.0001416465851491152",
            "extra": "mean: 3.1306646706586854 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.946915260530064,
            "unit": "iter/sec",
            "range": "stddev: 0.003198582720999352",
            "extra": "mean: 83.70361538461533 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.270516675162819,
            "unit": "iter/sec",
            "range": "stddev: 0.0028602332207226617",
            "extra": "mean: 88.72707692307759 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.60800266235518,
            "unit": "iter/sec",
            "range": "stddev: 0.0005021210945942183",
            "extra": "mean: 6.112170454545202 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.81534218649944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003450121111824635",
            "extra": "mean: 4.169875000000295 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.5860118780212,
            "unit": "iter/sec",
            "range": "stddev: 0.00010823391976612499",
            "extra": "mean: 2.1250100401607477 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 460.5760373537266,
            "unit": "iter/sec",
            "range": "stddev: 0.00012431390743122283",
            "extra": "mean: 2.171194154488743 msec\nrounds: 479"
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
        "date": 1643830236618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.60394009551229,
            "unit": "iter/sec",
            "range": "stddev: 0.00034562488749674926",
            "extra": "mean: 8.360928571428571 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.67749577722577,
            "unit": "iter/sec",
            "range": "stddev: 0.0005334602311691319",
            "extra": "mean: 6.91192499999999 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.1081048085558,
            "unit": "iter/sec",
            "range": "stddev: 0.0002711945022960207",
            "extra": "mean: 4.899364485981363 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.91427999814755,
            "unit": "iter/sec",
            "range": "stddev: 0.00016633720241484323",
            "extra": "mean: 3.0310903790087984 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.96157754013085,
            "unit": "iter/sec",
            "range": "stddev: 0.000495821983761586",
            "extra": "mean: 9.177547008547092 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.77179085497178,
            "unit": "iter/sec",
            "range": "stddev: 0.0003341753309568655",
            "extra": "mean: 7.103695945945849 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.4902718583977,
            "unit": "iter/sec",
            "range": "stddev: 0.000653055752922463",
            "extra": "mean: 5.509937198067673 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.8385360295141,
            "unit": "iter/sec",
            "range": "stddev: 0.00031492004403812536",
            "extra": "mean: 3.313029585798875 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.510898917711108,
            "unit": "iter/sec",
            "range": "stddev: 0.0011854780600114448",
            "extra": "mean: 79.93030769230704 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.925861505887681,
            "unit": "iter/sec",
            "range": "stddev: 0.003049342949404068",
            "extra": "mean: 83.85138461538479 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.48125158336896,
            "unit": "iter/sec",
            "range": "stddev: 0.0007310279460114976",
            "extra": "mean: 6.601477011494334 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.1620472987678,
            "unit": "iter/sec",
            "range": "stddev: 0.00018160175063425233",
            "extra": "mean: 4.09564062499998 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.2820379858275,
            "unit": "iter/sec",
            "range": "stddev: 0.00015976186923943547",
            "extra": "mean: 2.1354652087472656 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.3922011203077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006322041667715168",
            "extra": "mean: 2.1815379876795595 msec\nrounds: 487"
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
        "date": 1643842950269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.03720778868635,
            "unit": "iter/sec",
            "range": "stddev: 0.00029807308872526345",
            "extra": "mean: 8.194222222222185 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.80881858119812,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667961499878671",
            "extra": "mean: 6.72003184713375 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.64306804750007,
            "unit": "iter/sec",
            "range": "stddev: 0.00030679469829634554",
            "extra": "mean: 5.00893925233645 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.9093300910807,
            "unit": "iter/sec",
            "range": "stddev: 0.00020961854614530052",
            "extra": "mean: 3.1356875000000763 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.56094546002886,
            "unit": "iter/sec",
            "range": "stddev: 0.00028929569706201874",
            "extra": "mean: 8.805844262295084 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.2263128387264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007575270170565645",
            "extra": "mean: 7.182550335570229 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.9692340414434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003306132483509174",
            "extra": "mean: 5.129014354066941 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.41190379535345,
            "unit": "iter/sec",
            "range": "stddev: 0.00014170342798694351",
            "extra": "mean: 3.1405861027190434 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.4167480918801,
            "unit": "iter/sec",
            "range": "stddev: 0.0031366852073073923",
            "extra": "mean: 80.53638461538472 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.502551796875482,
            "unit": "iter/sec",
            "range": "stddev: 0.003522185073545344",
            "extra": "mean: 86.9372307692313 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.60114185039834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006871758680111675",
            "extra": "mean: 6.915574712643567 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.51197313906763,
            "unit": "iter/sec",
            "range": "stddev: 0.00035472506786892214",
            "extra": "mean: 4.264174603174701 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.8950015688656,
            "unit": "iter/sec",
            "range": "stddev: 0.00011564494145200936",
            "extra": "mean: 2.174409368635545 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 464.0798333575348,
            "unit": "iter/sec",
            "range": "stddev: 0.000094693318664442",
            "extra": "mean: 2.1548016701462296 msec\nrounds: 479"
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
        "date": 1643898454643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.82551167689854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062058908008034",
            "extra": "mean: 8.559774193548371 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.13583844730164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004384129701362925",
            "extra": "mean: 6.842948387096791 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.18462798317378,
            "unit": "iter/sec",
            "range": "stddev: 0.00033285422694971065",
            "extra": "mean: 4.970558685446066 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.75760120834866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534373424095012",
            "extra": "mean: 3.1871737804878126 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.1773619586287,
            "unit": "iter/sec",
            "range": "stddev: 0.0005627686126336122",
            "extra": "mean: 9.24407826086977 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.02600122734486,
            "unit": "iter/sec",
            "range": "stddev: 0.00069964313949307",
            "extra": "mean: 7.810913333333194 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.8652844915092,
            "unit": "iter/sec",
            "range": "stddev: 0.00041928539660679074",
            "extra": "mean: 5.21199029126217 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.4748228575548,
            "unit": "iter/sec",
            "range": "stddev: 0.00023132883982922392",
            "extra": "mean: 3.262910769230744 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.371126172164184,
            "unit": "iter/sec",
            "range": "stddev: 0.0026932342867033994",
            "extra": "mean: 80.83338461538474 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.52406064728209,
            "unit": "iter/sec",
            "range": "stddev: 0.0014871111471915007",
            "extra": "mean: 79.84630769230705 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.5832795842912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003248215443342163",
            "extra": "mean: 6.075951351351283 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.77709406060296,
            "unit": "iter/sec",
            "range": "stddev: 0.0004130229432793769",
            "extra": "mean: 4.314490196078345 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 428.2796630509275,
            "unit": "iter/sec",
            "range": "stddev: 0.00035043215237713654",
            "extra": "mean: 2.334922916666926 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.82203086470287,
            "unit": "iter/sec",
            "range": "stddev: 0.0001869165319358895",
            "extra": "mean: 2.2788281573500098 msec\nrounds: 483"
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
        "date": 1643988057214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.07136705868393,
            "unit": "iter/sec",
            "range": "stddev: 0.0003498831694951194",
            "extra": "mean: 7.995435114503837 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.52151153141892,
            "unit": "iter/sec",
            "range": "stddev: 0.00022956323618012964",
            "extra": "mean: 6.348339285714268 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.69233153012934,
            "unit": "iter/sec",
            "range": "stddev: 0.00028760911365071403",
            "extra": "mean: 4.572634042553201 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.18179598734304,
            "unit": "iter/sec",
            "range": "stddev: 0.00008937700205886426",
            "extra": "mean: 2.8886556473829192 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.66705555685209,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590306682552989",
            "extra": "mean: 8.571399999999983 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.28049617456898,
            "unit": "iter/sec",
            "range": "stddev: 0.0002616041017919736",
            "extra": "mean: 6.698798742138407 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.86268793325132,
            "unit": "iter/sec",
            "range": "stddev: 0.0002940031631238102",
            "extra": "mean: 5.351523148148265 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.3554551473671,
            "unit": "iter/sec",
            "range": "stddev: 0.00010601736569771588",
            "extra": "mean: 3.111818965517235 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.917924007649447,
            "unit": "iter/sec",
            "range": "stddev: 0.004510621892708684",
            "extra": "mean: 83.90723076923095 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.36247930473424,
            "unit": "iter/sec",
            "range": "stddev: 0.0019476294762918755",
            "extra": "mean: 80.88992307692259 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.30428386051625,
            "unit": "iter/sec",
            "range": "stddev: 0.00025771443368480745",
            "extra": "mean: 6.049449999999999 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.01652231187856,
            "unit": "iter/sec",
            "range": "stddev: 0.00020757932727261181",
            "extra": "mean: 4.081357414448615 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.8480154419126,
            "unit": "iter/sec",
            "range": "stddev: 0.00012708468966741255",
            "extra": "mean: 2.0753431952664156 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 464.4724306354379,
            "unit": "iter/sec",
            "range": "stddev: 0.00012777954853568276",
            "extra": "mean: 2.152980314960599 msec\nrounds: 508"
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
        "date": 1643988528865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.47115713669234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003451431429230533",
            "extra": "mean: 7.906941176470631 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.42566442029784,
            "unit": "iter/sec",
            "range": "stddev: 0.0005038648979270182",
            "extra": "mean: 6.3928128654970235 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.72241300408814,
            "unit": "iter/sec",
            "range": "stddev: 0.000343644920732191",
            "extra": "mean: 4.614197424892719 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 343.8278343680143,
            "unit": "iter/sec",
            "range": "stddev: 0.00015607297227069068",
            "extra": "mean: 2.9084323607426597 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.79873160960749,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783588142410794",
            "extra": "mean: 8.71089763779507 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.68610339936052,
            "unit": "iter/sec",
            "range": "stddev: 0.00028284892575278074",
            "extra": "mean: 6.592561728395061 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.73002935431992,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404325765665571",
            "extra": "mean: 4.722995614035213 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.65446075910944,
            "unit": "iter/sec",
            "range": "stddev: 0.00008555966199458405",
            "extra": "mean: 2.91839189189197 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.255755601740281,
            "unit": "iter/sec",
            "range": "stddev: 0.001194843115822541",
            "extra": "mean: 75.43892857142863 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.949878088029777,
            "unit": "iter/sec",
            "range": "stddev: 0.0018424693788733017",
            "extra": "mean: 71.68521428571394 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.40185726177597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839192734648325",
            "extra": "mean: 6.313057291666683 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.06232714893915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003178508235556957",
            "extra": "mean: 4.365624031007891 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.811520144601,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435569464472405",
            "extra": "mean: 2.1467910447761613 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 460.5377833638032,
            "unit": "iter/sec",
            "range": "stddev: 0.00013465358521473573",
            "extra": "mean: 2.1713745019918314 msec\nrounds: 502"
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
        "date": 1644011243255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.10020044901275,
            "unit": "iter/sec",
            "range": "stddev: 0.00021531367765506554",
            "extra": "mean: 7.993592307692355 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.63035887930917,
            "unit": "iter/sec",
            "range": "stddev: 0.00014743637028706908",
            "extra": "mean: 6.384458333333359 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.71345786615314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007989743859293057",
            "extra": "mean: 5.216117903930152 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.45941763204144,
            "unit": "iter/sec",
            "range": "stddev: 0.00015620246116904943",
            "extra": "mean: 3.1500089285713764 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.07253161636822,
            "unit": "iter/sec",
            "range": "stddev: 0.0008109896846616659",
            "extra": "mean: 9.608683333333296 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.17247889784318,
            "unit": "iter/sec",
            "range": "stddev: 0.0004312070452674184",
            "extra": "mean: 7.134068027210917 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.48497732001894,
            "unit": "iter/sec",
            "range": "stddev: 0.00036421539136910605",
            "extra": "mean: 5.08944761904764 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.4084921937355,
            "unit": "iter/sec",
            "range": "stddev: 0.00021481032844377837",
            "extra": "mean: 3.21121621621633 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.819471215041654,
            "unit": "iter/sec",
            "range": "stddev: 0.0026789636318969613",
            "extra": "mean: 84.60615384615376 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.397068570093618,
            "unit": "iter/sec",
            "range": "stddev: 0.003221256099561893",
            "extra": "mean: 80.66423076923002 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.23330604741827,
            "unit": "iter/sec",
            "range": "stddev: 0.000806339134992606",
            "extra": "mean: 6.746122222222518 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.7147969231942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002978273310162244",
            "extra": "mean: 4.171624000000321 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.48090264542196,
            "unit": "iter/sec",
            "range": "stddev: 0.00011369255734300895",
            "extra": "mean: 2.09872 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.37523265726117,
            "unit": "iter/sec",
            "range": "stddev: 0.00017585270057989618",
            "extra": "mean: 2.1911793814433445 msec\nrounds: 485"
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
        "date": 1644244390467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.48535489799083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007783406236408615",
            "extra": "mean: 8.811709677419392 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.10189186393498,
            "unit": "iter/sec",
            "range": "stddev: 0.0010580513863241952",
            "extra": "mean: 7.745819875776375 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.00785985998147,
            "unit": "iter/sec",
            "range": "stddev: 0.0005631678050622035",
            "extra": "mean: 5.1811361502347895 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.15187999143626,
            "unit": "iter/sec",
            "range": "stddev: 0.00035169660112157236",
            "extra": "mean: 3.2986765578635007 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.01630245759019,
            "unit": "iter/sec",
            "range": "stddev: 0.0006719181695795751",
            "extra": "mean: 9.344370689655374 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.238061124875,
            "unit": "iter/sec",
            "range": "stddev: 0.000689127258213742",
            "extra": "mean: 7.340092715231802 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.45860898579213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855634336290453",
            "extra": "mean: 5.223061032863811 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.7597445984965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002198786091323805",
            "extra": "mean: 3.1973424242424295 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.377182251945772,
            "unit": "iter/sec",
            "range": "stddev: 0.0011871714154656435",
            "extra": "mean: 80.7938333333335 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.287125549848986,
            "unit": "iter/sec",
            "range": "stddev: 0.0014956654037590208",
            "extra": "mean: 81.38599999999923 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.38754911920321,
            "unit": "iter/sec",
            "range": "stddev: 0.00021064104246821058",
            "extra": "mean: 6.046404371584521 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.9592540616218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001852073068650908",
            "extra": "mean: 4.132927272727174 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.9756462501605,
            "unit": "iter/sec",
            "range": "stddev: 0.00009859257750439364",
            "extra": "mean: 2.114273764258662 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.60360554517246,
            "unit": "iter/sec",
            "range": "stddev: 0.00008316944113140218",
            "extra": "mean: 2.2391220930231683 msec\nrounds: 516"
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
        "date": 1644418857983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.03725732026433,
            "unit": "iter/sec",
            "range": "stddev: 0.0015272242682903283",
            "extra": "mean: 9.430647540983637 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.2627906639765,
            "unit": "iter/sec",
            "range": "stddev: 0.000888956311945621",
            "extra": "mean: 7.618305194805203 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.5472201235483,
            "unit": "iter/sec",
            "range": "stddev: 0.0005839732299026732",
            "extra": "mean: 5.331990521327064 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.83514211931623,
            "unit": "iter/sec",
            "range": "stddev: 0.00034367091755494833",
            "extra": "mean: 3.450237237237197 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.86565650366548,
            "unit": "iter/sec",
            "range": "stddev: 0.0015979508072226083",
            "extra": "mean: 10.768243478260763 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.73828001280755,
            "unit": "iter/sec",
            "range": "stddev: 0.0007951305097522942",
            "extra": "mean: 7.828506849315147 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.76155629587726,
            "unit": "iter/sec",
            "range": "stddev: 0.0005928040506879514",
            "extra": "mean: 5.532149758453965 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.22420063977705,
            "unit": "iter/sec",
            "range": "stddev: 0.0003875116092377674",
            "extra": "mean: 3.433780564263362 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.525863362013277,
            "unit": "iter/sec",
            "range": "stddev: 0.0024996280253572825",
            "extra": "mean: 95.00408333333432 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.326213695829358,
            "unit": "iter/sec",
            "range": "stddev: 0.005340556822489755",
            "extra": "mean: 96.84091666666639 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.38596873467688,
            "unit": "iter/sec",
            "range": "stddev: 0.0010655455696858716",
            "extra": "mean: 6.83125581395366 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 206.13768856913376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006724810375343585",
            "extra": "mean: 4.8511264822134805 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.91780698177985,
            "unit": "iter/sec",
            "range": "stddev: 0.0001880136056335152",
            "extra": "mean: 2.2275792682926183 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.8902810406426,
            "unit": "iter/sec",
            "range": "stddev: 0.00022206432610278131",
            "extra": "mean: 2.3425222929935803 msec\nrounds: 471"
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
        "date": 1644420758344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.66042022068795,
            "unit": "iter/sec",
            "range": "stddev: 0.00020347480259040807",
            "extra": "mean: 8.021792307692266 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.72419347505013,
            "unit": "iter/sec",
            "range": "stddev: 0.00007799281350657652",
            "extra": "mean: 6.380635802469107 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.43049502535519,
            "unit": "iter/sec",
            "range": "stddev: 0.00016205258491820243",
            "extra": "mean: 4.685366071428554 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.1070702048246,
            "unit": "iter/sec",
            "range": "stddev: 0.0002919167010578585",
            "extra": "mean: 3.1045577464788656 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.89706426646183,
            "unit": "iter/sec",
            "range": "stddev: 0.00017856010230213033",
            "extra": "mean: 8.481975409836137 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.85091177139648,
            "unit": "iter/sec",
            "range": "stddev: 0.00017791903400848173",
            "extra": "mean: 6.809627450980385 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.78568024214596,
            "unit": "iter/sec",
            "range": "stddev: 0.00010198312494913843",
            "extra": "mean: 4.766769585253607 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.82977050819125,
            "unit": "iter/sec",
            "range": "stddev: 0.00017232411919575658",
            "extra": "mean: 2.9955387096773705 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.0839630937176,
            "unit": "iter/sec",
            "range": "stddev: 0.004474964848737288",
            "extra": "mean: 82.75430769230798 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.05658350244714,
            "unit": "iter/sec",
            "range": "stddev: 0.00189383438592814",
            "extra": "mean: 76.58971428571449 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.3110580308092,
            "unit": "iter/sec",
            "range": "stddev: 0.00019385630752571267",
            "extra": "mean: 5.7041467391307386 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.8157955493052,
            "unit": "iter/sec",
            "range": "stddev: 0.0001928366945533201",
            "extra": "mean: 3.9554490566036478 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 489.5137676874147,
            "unit": "iter/sec",
            "range": "stddev: 0.00012393920136597142",
            "extra": "mean: 2.04284346224673 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 486.4166745872372,
            "unit": "iter/sec",
            "range": "stddev: 0.00008458427573828225",
            "extra": "mean: 2.0558505747126756 msec\nrounds: 522"
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
        "date": 1644539674264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.82766244434796,
            "unit": "iter/sec",
            "range": "stddev: 0.00029950808102747204",
            "extra": "mean: 7.643643410852689 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.47799916777137,
            "unit": "iter/sec",
            "range": "stddev: 0.0001554697116320368",
            "extra": "mean: 6.043099415204682 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.00829327238208,
            "unit": "iter/sec",
            "range": "stddev: 0.00014585922182351534",
            "extra": "mean: 4.629451882845165 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.2310175378904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000794573486026424",
            "extra": "mean: 2.9220028248587493 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.43868160640871,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464158478778308",
            "extra": "mean: 8.515081967213002 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.67833736525293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001737756609819166",
            "extra": "mean: 6.680993506493512 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.59804993877108,
            "unit": "iter/sec",
            "range": "stddev: 0.00024920247178905364",
            "extra": "mean: 4.840316742081387 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.5633646485316,
            "unit": "iter/sec",
            "range": "stddev: 0.00009065323876703676",
            "extra": "mean: 2.9624067796610345 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.717861509755593,
            "unit": "iter/sec",
            "range": "stddev: 0.0015829583168765402",
            "extra": "mean: 78.6295714285709 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.211211411466795,
            "unit": "iter/sec",
            "range": "stddev: 0.0016561005835571511",
            "extra": "mean: 75.69328571428662 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.57847358617568,
            "unit": "iter/sec",
            "range": "stddev: 0.00011994181711852736",
            "extra": "mean: 5.631313186813253 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.85767745634035,
            "unit": "iter/sec",
            "range": "stddev: 0.00012442509461481333",
            "extra": "mean: 3.878108303249248 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 513.1558803127498,
            "unit": "iter/sec",
            "range": "stddev: 0.00011404335061504773",
            "extra": "mean: 1.94872559852678 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 475.0580574866651,
            "unit": "iter/sec",
            "range": "stddev: 0.000136906229411952",
            "extra": "mean: 2.1050058708415236 msec\nrounds: 511"
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
        "date": 1644540156869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.87525194335673,
            "unit": "iter/sec",
            "range": "stddev: 0.00042563121118703665",
            "extra": "mean: 8.272992063492115 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.61057304472467,
            "unit": "iter/sec",
            "range": "stddev: 0.00017484276558010086",
            "extra": "mean: 6.509968553459167 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.4663013515165,
            "unit": "iter/sec",
            "range": "stddev: 0.00025176214726239856",
            "extra": "mean: 4.843405405405423 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.4741269956691,
            "unit": "iter/sec",
            "range": "stddev: 0.0001016621618332425",
            "extra": "mean: 3.00775284090911 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.63222455268638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003498435666851909",
            "extra": "mean: 8.878453781512825 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.2600446780337,
            "unit": "iter/sec",
            "range": "stddev: 0.00029889492523459555",
            "extra": "mean: 6.980313333333281 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.80069301549878,
            "unit": "iter/sec",
            "range": "stddev: 0.0004256857779818956",
            "extra": "mean: 5.030163551401899 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.13677209737847,
            "unit": "iter/sec",
            "range": "stddev: 0.00027244749415172083",
            "extra": "mean: 3.1631878612715565 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.631538035504331,
            "unit": "iter/sec",
            "range": "stddev: 0.0022533226378522865",
            "extra": "mean: 79.16692307692313 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.988374477102083,
            "unit": "iter/sec",
            "range": "stddev: 0.0008555174290609987",
            "extra": "mean: 76.99192857142785 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.1833292718221,
            "unit": "iter/sec",
            "range": "stddev: 0.00035984921030987745",
            "extra": "mean: 5.981457627118478 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.74355423165125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004769047843303548",
            "extra": "mean: 4.315114624506011 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.97740317467964,
            "unit": "iter/sec",
            "range": "stddev: 0.00028357582370064393",
            "extra": "mean: 2.288447852760603 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.6154522332011,
            "unit": "iter/sec",
            "range": "stddev: 0.00019186670864647267",
            "extra": "mean: 2.2799014373718975 msec\nrounds: 487"
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
        "date": 1644598655299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.02514603501086,
            "unit": "iter/sec",
            "range": "stddev: 0.00023400054501963527",
            "extra": "mean: 7.998390977443605 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.80331379725519,
            "unit": "iter/sec",
            "range": "stddev: 0.00030284148588017435",
            "extra": "mean: 6.675419753086415 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.60274602303738,
            "unit": "iter/sec",
            "range": "stddev: 0.00012203368916581928",
            "extra": "mean: 4.703608108108073 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.36745074866417,
            "unit": "iter/sec",
            "range": "stddev: 0.00018000597561372794",
            "extra": "mean: 3.3072342857142596 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.53497956040519,
            "unit": "iter/sec",
            "range": "stddev: 0.0007396261733208252",
            "extra": "mean: 10.046719298245558 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.25088314089712,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205604358108206",
            "extra": "mean: 7.0298333333334515 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.72360494127432,
            "unit": "iter/sec",
            "range": "stddev: 0.00017449018106618707",
            "extra": "mean: 5.032114832535945 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.95637404198976,
            "unit": "iter/sec",
            "range": "stddev: 0.0001721016580966354",
            "extra": "mean: 3.2158851963747352 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.55960984055107,
            "unit": "iter/sec",
            "range": "stddev: 0.001797412648995793",
            "extra": "mean: 79.62030769230675 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.044877359985364,
            "unit": "iter/sec",
            "range": "stddev: 0.0028716981574847026",
            "extra": "mean: 83.02284615384536 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.13559372843847,
            "unit": "iter/sec",
            "range": "stddev: 0.00035492494575951525",
            "extra": "mean: 6.2059534883726455 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.23287311668278,
            "unit": "iter/sec",
            "range": "stddev: 0.00019073825982409575",
            "extra": "mean: 4.233111111111403 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.12995422454264,
            "unit": "iter/sec",
            "range": "stddev: 0.00021503946805915387",
            "extra": "mean: 2.163893491124173 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.21280363592916,
            "unit": "iter/sec",
            "range": "stddev: 0.00015578377865373713",
            "extra": "mean: 2.287215725806394 msec\nrounds: 496"
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
        "date": 1644601056315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.96751726459559,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776885331359935",
            "extra": "mean: 8.54938211382115 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.94500337379569,
            "unit": "iter/sec",
            "range": "stddev: 0.00036843279056190237",
            "extra": "mean: 6.851896103896006 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.80975298485941,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760937405407162",
            "extra": "mean: 4.955161904761977 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.3985528042915,
            "unit": "iter/sec",
            "range": "stddev: 0.00022624690741466176",
            "extra": "mean: 3.201039156626537 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.57766734968381,
            "unit": "iter/sec",
            "range": "stddev: 0.00031167079411667905",
            "extra": "mean: 9.04341739130437 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.13945559558115,
            "unit": "iter/sec",
            "range": "stddev: 0.00031848692829172163",
            "extra": "mean: 7.187034013605544 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.37716549084763,
            "unit": "iter/sec",
            "range": "stddev: 0.0003174329988741895",
            "extra": "mean: 5.1712413793102625 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.02794036987916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001754373660113391",
            "extra": "mean: 3.278388198757768 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.372586156027802,
            "unit": "iter/sec",
            "range": "stddev: 0.002861405827158592",
            "extra": "mean: 80.82384615384633 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.91648752728583,
            "unit": "iter/sec",
            "range": "stddev: 0.002247391127311332",
            "extra": "mean: 77.42042857143007 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.0564297547041,
            "unit": "iter/sec",
            "range": "stddev: 0.00036741158658820693",
            "extra": "mean: 6.170690058479289 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.61026844430398,
            "unit": "iter/sec",
            "range": "stddev: 0.00025937615921268787",
            "extra": "mean: 4.244297188755127 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.6210221568438,
            "unit": "iter/sec",
            "range": "stddev: 0.00009840798575088185",
            "extra": "mean: 2.1203465346534887 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.9045594161496,
            "unit": "iter/sec",
            "range": "stddev: 0.00013506769641204712",
            "extra": "mean: 2.2476730769230704 msec\nrounds: 468"
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
        "date": 1644601630023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.8431180316315,
            "unit": "iter/sec",
            "range": "stddev: 0.00046126117739274467",
            "extra": "mean: 8.558484375000008 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.83355465909253,
            "unit": "iter/sec",
            "range": "stddev: 0.0004273591101247459",
            "extra": "mean: 6.857132450331116 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.83404231343405,
            "unit": "iter/sec",
            "range": "stddev: 0.0003695067348936502",
            "extra": "mean: 4.930138888888911 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.2166155489396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001802563881117791",
            "extra": "mean: 3.046768361581903 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.91304403492398,
            "unit": "iter/sec",
            "range": "stddev: 0.000557895096066508",
            "extra": "mean: 9.266720338983015 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.86354656936246,
            "unit": "iter/sec",
            "range": "stddev: 0.00029523385078921756",
            "extra": "mean: 7.049027210884385 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.33965036107654,
            "unit": "iter/sec",
            "range": "stddev: 0.00014972598380926517",
            "extra": "mean: 4.799854460093819 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.88299754086,
            "unit": "iter/sec",
            "range": "stddev: 0.00011727633706084834",
            "extra": "mean: 3.049868421052795 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.053178649819493,
            "unit": "iter/sec",
            "range": "stddev: 0.0006199352633690978",
            "extra": "mean: 76.60969230769155 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.54311696456585,
            "unit": "iter/sec",
            "range": "stddev: 0.0035466086853026585",
            "extra": "mean: 79.724999999999 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.50369891546637,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948372742674466",
            "extra": "mean: 5.899576271186345 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.9610952238243,
            "unit": "iter/sec",
            "range": "stddev: 0.00022587580535759282",
            "extra": "mean: 4.082280898876151 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.51684157589193,
            "unit": "iter/sec",
            "range": "stddev: 0.00014138451335372163",
            "extra": "mean: 2.1809449715370683 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.3260625420994,
            "unit": "iter/sec",
            "range": "stddev: 0.00009366482941066796",
            "extra": "mean: 2.201062370062331 msec\nrounds: 481"
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
        "date": 1644602107985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.20691547487812,
            "unit": "iter/sec",
            "range": "stddev: 0.00052479649158535",
            "extra": "mean: 8.250354330708667 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.47655641498682,
            "unit": "iter/sec",
            "range": "stddev: 0.00041174275562246774",
            "extra": "mean: 6.6455534591194585 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.73121876872798,
            "unit": "iter/sec",
            "range": "stddev: 0.00030271570207670136",
            "extra": "mean: 4.860711009174288 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.87360820211694,
            "unit": "iter/sec",
            "range": "stddev: 0.00020295394126507128",
            "extra": "mean: 3.126234782608683 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.60698982690526,
            "unit": "iter/sec",
            "range": "stddev: 0.0011261380209947936",
            "extra": "mean: 10.14126890756325 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.1635848437604,
            "unit": "iter/sec",
            "range": "stddev: 0.00037915332858519645",
            "extra": "mean: 6.8887800000000015 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.19523802260835,
            "unit": "iter/sec",
            "range": "stddev: 0.00029311887280272797",
            "extra": "mean: 4.995123809523724 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.92800906134124,
            "unit": "iter/sec",
            "range": "stddev: 0.0002095365268319508",
            "extra": "mean: 3.216178571428461 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.377027095216572,
            "unit": "iter/sec",
            "range": "stddev: 0.0018928265392507966",
            "extra": "mean: 80.79484615384548 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.640737596762483,
            "unit": "iter/sec",
            "range": "stddev: 0.002438701375207203",
            "extra": "mean: 79.10930769230727 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.26094989013905,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718176298481812",
            "extra": "mean: 5.978681818181852 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.32900235724762,
            "unit": "iter/sec",
            "range": "stddev: 0.00008960797639590919",
            "extra": "mean: 4.076158914728729 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.43085948224655,
            "unit": "iter/sec",
            "range": "stddev: 0.00011167445183695908",
            "extra": "mean: 2.112240847784236 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.24401109888976,
            "unit": "iter/sec",
            "range": "stddev: 0.00012483481987687564",
            "extra": "mean: 2.206317073171029 msec\nrounds: 492"
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
        "date": 1644603459489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.66241415428122,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631888724290404",
            "extra": "mean: 7.833159090909017 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.17115987217224,
            "unit": "iter/sec",
            "range": "stddev: 0.00012897872711151726",
            "extra": "mean: 6.243321212121269 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.2289650286713,
            "unit": "iter/sec",
            "range": "stddev: 0.00016895575116434558",
            "extra": "mean: 4.561441048034951 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.4587386044001,
            "unit": "iter/sec",
            "range": "stddev: 0.00008592075777022061",
            "extra": "mean: 2.8372115384615295 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.84976431324824,
            "unit": "iter/sec",
            "range": "stddev: 0.0002227726970130336",
            "extra": "mean: 8.413983870967842 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.73800617645554,
            "unit": "iter/sec",
            "range": "stddev: 0.00020720519337296645",
            "extra": "mean: 6.678331210191029 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.48135606320884,
            "unit": "iter/sec",
            "range": "stddev: 0.00008014493935387634",
            "extra": "mean: 4.6624099099098135 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.7920390979794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000660074845470979",
            "extra": "mean: 2.934340845070313 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.58429054610012,
            "unit": "iter/sec",
            "range": "stddev: 0.0027453125458429288",
            "extra": "mean: 79.46415384615389 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.180117604306469,
            "unit": "iter/sec",
            "range": "stddev: 0.0010335088743717638",
            "extra": "mean: 75.87185714285738 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.27115524527332,
            "unit": "iter/sec",
            "range": "stddev: 0.00009870337108849453",
            "extra": "mean: 5.6094324324322455 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.66726958493496,
            "unit": "iter/sec",
            "range": "stddev: 0.00008415492358394449",
            "extra": "mean: 3.865970370370512 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 514.3386068798649,
            "unit": "iter/sec",
            "range": "stddev: 0.00006421193161002748",
            "extra": "mean: 1.944244485294047 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 496.7586260364661,
            "unit": "iter/sec",
            "range": "stddev: 0.000058765956470721456",
            "extra": "mean: 2.0130500963391262 msec\nrounds: 519"
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
        "date": 1644938336270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.79841219446098,
            "unit": "iter/sec",
            "range": "stddev: 0.0010157893917227571",
            "extra": "mean: 8.710921875000027 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.2718070619659,
            "unit": "iter/sec",
            "range": "stddev: 0.0004173940276302243",
            "extra": "mean: 6.699188679245229 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.8681209090939,
            "unit": "iter/sec",
            "range": "stddev: 0.00021195693348656516",
            "extra": "mean: 4.697744292237416 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.7448089537765,
            "unit": "iter/sec",
            "range": "stddev: 0.00030727344752479294",
            "extra": "mean: 3.098423188405859 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.0439370760071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106988061743967",
            "extra": "mean: 9.341958333333208 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.35903134425706,
            "unit": "iter/sec",
            "range": "stddev: 0.00047793357145061897",
            "extra": "mean: 7.074185430463666 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.27735164577788,
            "unit": "iter/sec",
            "range": "stddev: 0.0004472729357185967",
            "extra": "mean: 4.968268867924448 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.65651425765185,
            "unit": "iter/sec",
            "range": "stddev: 0.00018261808189525363",
            "extra": "mean: 3.089695266272114 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.883182828252304,
            "unit": "iter/sec",
            "range": "stddev: 0.004314804719710535",
            "extra": "mean: 84.15253846153885 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.942926460577283,
            "unit": "iter/sec",
            "range": "stddev: 0.005822520452310123",
            "extra": "mean: 83.73157142857123 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.75713947577432,
            "unit": "iter/sec",
            "range": "stddev: 0.0004486104870528688",
            "extra": "mean: 6.182107344632944 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.38237354971062,
            "unit": "iter/sec",
            "range": "stddev: 0.00011345250146016328",
            "extra": "mean: 4.026050583657308 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 482.4811639720519,
            "unit": "iter/sec",
            "range": "stddev: 0.00010180116899275307",
            "extra": "mean: 2.072619771863106 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 477.89974936390405,
            "unit": "iter/sec",
            "range": "stddev: 0.000059460216199432004",
            "extra": "mean: 2.0924890656063826 msec\nrounds: 503"
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
        "date": 1644939355114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.22423000951106,
            "unit": "iter/sec",
            "range": "stddev: 0.0008439111935525138",
            "extra": "mean: 8.678730158730122 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.6302465120135,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097376599659823",
            "extra": "mean: 7.265844720496898 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.5606458160001,
            "unit": "iter/sec",
            "range": "stddev: 0.00047953825006494575",
            "extra": "mean: 5.087488372093046 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.03775770746796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002018669049586416",
            "extra": "mean: 3.16417888563057 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.83377281255981,
            "unit": "iter/sec",
            "range": "stddev: 0.0008310335562112105",
            "extra": "mean: 9.448779661016914 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.06557981463217,
            "unit": "iter/sec",
            "range": "stddev: 0.000677274242340778",
            "extra": "mean: 7.403810810810781 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.95743701488055,
            "unit": "iter/sec",
            "range": "stddev: 0.00040652201529977076",
            "extra": "mean: 5.155770334928066 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.35132143724945,
            "unit": "iter/sec",
            "range": "stddev: 0.00035778648398690824",
            "extra": "mean: 3.3074107142857048 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.198295491509924,
            "unit": "iter/sec",
            "range": "stddev: 0.001465587833249438",
            "extra": "mean: 81.9786666666671 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.796090956935329,
            "unit": "iter/sec",
            "range": "stddev: 0.0034943135913022083",
            "extra": "mean: 84.77384615384518 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.76958156848463,
            "unit": "iter/sec",
            "range": "stddev: 0.0006387888656741093",
            "extra": "mean: 6.545805714285555 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 203.05003359048868,
            "unit": "iter/sec",
            "range": "stddev: 0.0007737469063630875",
            "extra": "mean: 4.924894531250362 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 416.780334030497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003757143746926654",
            "extra": "mean: 2.3993454545454322 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.22749175560756,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828407016337625",
            "extra": "mean: 2.2063974895398153 msec\nrounds: 478"
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
        "date": 1644940057122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.27964205816562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003672197373478532",
            "extra": "mean: 7.982142857142852 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.92973426303595,
            "unit": "iter/sec",
            "range": "stddev: 0.0002889948877794815",
            "extra": "mean: 6.454538922155666 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.33685237441605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001897996077326819",
            "extra": "mean: 4.643886956521748 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 345.40883888983575,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116664477576995",
            "extra": "mean: 2.8951198910081706 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.61599200239965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005153116989382641",
            "extra": "mean: 8.57515322580648 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.15523462298842,
            "unit": "iter/sec",
            "range": "stddev: 0.00026192841531190735",
            "extra": "mean: 6.7955448717947355 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.17104016852335,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241341176273893",
            "extra": "mean: 4.713178571428595 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.9792813163079,
            "unit": "iter/sec",
            "range": "stddev: 0.00007777414123397928",
            "extra": "mean: 2.932729508196583 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.970012404890493,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920250394629747",
            "extra": "mean: 77.10092857142824 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.086582700659307,
            "unit": "iter/sec",
            "range": "stddev: 0.0019271851875870382",
            "extra": "mean: 76.41414285714328 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.58751705675346,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705717241220087",
            "extra": "mean: 5.662914438502525 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.309701768692,
            "unit": "iter/sec",
            "range": "stddev: 0.00005892374742450028",
            "extra": "mean: 3.916811594202518 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 499.88697408490447,
            "unit": "iter/sec",
            "range": "stddev: 0.00008006986771069744",
            "extra": "mean: 2.000452205882349 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 495.56970308158327,
            "unit": "iter/sec",
            "range": "stddev: 0.00005713184519413252",
            "extra": "mean: 2.017879611650462 msec\nrounds: 515"
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
        "date": 1645454348578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.8071348940916,
            "unit": "iter/sec",
            "range": "stddev: 0.0010988453136991315",
            "extra": "mean: 9.190573770491786 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.52748127842582,
            "unit": "iter/sec",
            "range": "stddev: 0.000319686341173493",
            "extra": "mean: 6.9190993377483965 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.02091458058226,
            "unit": "iter/sec",
            "range": "stddev: 0.0010623482743212578",
            "extra": "mean: 5.713602870813391 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.4939146999685,
            "unit": "iter/sec",
            "range": "stddev: 0.0001928756417260861",
            "extra": "mean: 3.149666666666664 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.93913198081329,
            "unit": "iter/sec",
            "range": "stddev: 0.0005891009740185272",
            "extra": "mean: 9.43938260869563 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.42746400886261,
            "unit": "iter/sec",
            "range": "stddev: 0.0003664459563002515",
            "extra": "mean: 7.22399999999983 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.07002259775206,
            "unit": "iter/sec",
            "range": "stddev: 0.00041265353903301724",
            "extra": "mean: 5.179467980295576 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.64772370927324,
            "unit": "iter/sec",
            "range": "stddev: 0.00020064883830366023",
            "extra": "mean: 3.1984880239521143 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.18957603716887,
            "unit": "iter/sec",
            "range": "stddev: 0.0014135186819079556",
            "extra": "mean: 82.03730769230742 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.565181881007739,
            "unit": "iter/sec",
            "range": "stddev: 0.0010851978314269856",
            "extra": "mean: 79.58499999999994 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.6610580809115,
            "unit": "iter/sec",
            "range": "stddev: 0.0003626501977147061",
            "extra": "mean: 6.185781609195575 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.94939878896537,
            "unit": "iter/sec",
            "range": "stddev: 0.00035258594381895386",
            "extra": "mean: 4.3112851562500945 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.05322605464306,
            "unit": "iter/sec",
            "range": "stddev: 0.00020563832789837077",
            "extra": "mean: 2.2621710261568997 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.58984193608774,
            "unit": "iter/sec",
            "range": "stddev: 0.00017208734465994224",
            "extra": "mean: 2.269684647303014 msec\nrounds: 482"
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
        "date": 1645922216105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.56815843548858,
            "unit": "iter/sec",
            "range": "stddev: 0.00045636499295765274",
            "extra": "mean: 8.652902439024421 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.6199252083439,
            "unit": "iter/sec",
            "range": "stddev: 0.00043151648957004255",
            "extra": "mean: 7.111367741935505 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.43655589408536,
            "unit": "iter/sec",
            "range": "stddev: 0.0001464181644714271",
            "extra": "mean: 4.891493087557594 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.21592686108573,
            "unit": "iter/sec",
            "range": "stddev: 0.00012621541508998959",
            "extra": "mean: 3.03752011494254 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.32154671140236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003542026139853979",
            "extra": "mean: 9.147327586206744 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.47015635126277,
            "unit": "iter/sec",
            "range": "stddev: 0.0004210761427294607",
            "extra": "mean: 7.274306122448912 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.59444383945774,
            "unit": "iter/sec",
            "range": "stddev: 0.00029342094531143023",
            "extra": "mean: 5.16543750000011 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.7592631122418,
            "unit": "iter/sec",
            "range": "stddev: 0.00006688944974848706",
            "extra": "mean: 3.088714714714794 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.368760317211185,
            "unit": "iter/sec",
            "range": "stddev: 0.0020059874063306365",
            "extra": "mean: 80.84884615384578 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.491916288786307,
            "unit": "iter/sec",
            "range": "stddev: 0.0011760402596478739",
            "extra": "mean: 80.05176923076854 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.22069977623136,
            "unit": "iter/sec",
            "range": "stddev: 0.00023809578056770755",
            "extra": "mean: 5.9094425287352434 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.09677783000006,
            "unit": "iter/sec",
            "range": "stddev: 0.0002916308674571551",
            "extra": "mean: 4.182406844106485 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.21705143419763,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184603524900207",
            "extra": "mean: 2.15881517509736 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.6382532986552,
            "unit": "iter/sec",
            "range": "stddev: 0.00009995263435166785",
            "extra": "mean: 2.1756239669421915 msec\nrounds: 484"
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
        "date": 1646063284970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.50033256194168,
            "unit": "iter/sec",
            "range": "stddev: 0.00042014361582407624",
            "extra": "mean: 8.29873228346455 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.2028141379287,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680374689666075",
            "extra": "mean: 6.793348387096746 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.64487009314092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002649840360117958",
            "extra": "mean: 4.886513888888911 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.2785207394839,
            "unit": "iter/sec",
            "range": "stddev: 0.0001439462445545955",
            "extra": "mean: 3.0555014662755924 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.29431547916978,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015396458700579",
            "extra": "mean: 8.9851848739495 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.68089898014125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004897074662205358",
            "extra": "mean: 7.316311258278253 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.33971224580563,
            "unit": "iter/sec",
            "range": "stddev: 0.0002491499241423473",
            "extra": "mean: 4.9178785046727995 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.6396841593217,
            "unit": "iter/sec",
            "range": "stddev: 0.00018625129686288173",
            "extra": "mean: 3.148221238938205 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.217195420619307,
            "unit": "iter/sec",
            "range": "stddev: 0.0030734902485108568",
            "extra": "mean: 81.85184615384571 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.807149936259759,
            "unit": "iter/sec",
            "range": "stddev: 0.0012978167910294336",
            "extra": "mean: 78.08138461538488 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.27074058103105,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893112242281521",
            "extra": "mean: 6.087511363636439 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.96022650260187,
            "unit": "iter/sec",
            "range": "stddev: 0.0002702494635501585",
            "extra": "mean: 4.15006250000019 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 478.2258379651886,
            "unit": "iter/sec",
            "range": "stddev: 0.0001305360966546849",
            "extra": "mean: 2.0910622568092876 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.714117780649,
            "unit": "iter/sec",
            "range": "stddev: 0.00031343077650918775",
            "extra": "mean: 2.269044624746324 msec\nrounds: 493"
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
        "date": 1646086332352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.03580838561976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005106160753601071",
            "extra": "mean: 7.749786764705881 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.93730359148367,
            "unit": "iter/sec",
            "range": "stddev: 0.0002363237180681499",
            "extra": "mean: 6.175229411764704 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.65306741487728,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552827503407528",
            "extra": "mean: 4.4513080168776575 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 359.6328867492007,
            "unit": "iter/sec",
            "range": "stddev: 0.00007769515592948954",
            "extra": "mean: 2.7806133333333776 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.24582756372695,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371477950865745",
            "extra": "mean: 8.316296874999907 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.8791504572488,
            "unit": "iter/sec",
            "range": "stddev: 0.00035312155288162435",
            "extra": "mean: 6.62782098765427 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.40558202703824,
            "unit": "iter/sec",
            "range": "stddev: 0.00014493387659032225",
            "extra": "mean: 4.578637554585037 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 354.196321880672,
            "unit": "iter/sec",
            "range": "stddev: 0.00009039087122398989",
            "extra": "mean: 2.8232930107526584 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.031122975638228,
            "unit": "iter/sec",
            "range": "stddev: 0.0022044309437386483",
            "extra": "mean: 76.73935714285766 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.613803618937963,
            "unit": "iter/sec",
            "range": "stddev: 0.0016587299060138879",
            "extra": "mean: 73.45485714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.58589713801376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191394705700384",
            "extra": "mean: 5.568365979381381 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 267.6846222724867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680555735737603",
            "extra": "mean: 3.735739436619787 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 517.5840936496637,
            "unit": "iter/sec",
            "range": "stddev: 0.00022798452942206297",
            "extra": "mean: 1.932053191489436 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 511.31231501348736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483248579250028",
            "extra": "mean: 1.9557518382353496 msec\nrounds: 544"
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
        "date": 1646432231085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.39451240341334,
            "unit": "iter/sec",
            "range": "stddev: 0.00040645311112194263",
            "extra": "mean: 8.237604651162817 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.3788949443965,
            "unit": "iter/sec",
            "range": "stddev: 0.00022652028859081617",
            "extra": "mean: 6.562588607594923 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.9880684138072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768379328911755",
            "extra": "mean: 4.831196347032024 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.4252415640696,
            "unit": "iter/sec",
            "range": "stddev: 0.00017370245968408455",
            "extra": "mean: 3.091904624277456 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.50683664076887,
            "unit": "iter/sec",
            "range": "stddev: 0.00040957924658903964",
            "extra": "mean: 8.810042016806806 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.28919599607553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005277036224176663",
            "extra": "mean: 6.789364238410567 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.1239933282323,
            "unit": "iter/sec",
            "range": "stddev: 0.0001979637120319009",
            "extra": "mean: 4.923101321585773 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.8381062368554,
            "unit": "iter/sec",
            "range": "stddev: 0.00010780285148813392",
            "extra": "mean: 2.986517906335986 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.633919547200275,
            "unit": "iter/sec",
            "range": "stddev: 0.0027014832393162432",
            "extra": "mean: 79.1520000000003 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.058519891390345,
            "unit": "iter/sec",
            "range": "stddev: 0.00275124586064464",
            "extra": "mean: 76.57835714285761 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.6706133757578,
            "unit": "iter/sec",
            "range": "stddev: 0.0004888039530987627",
            "extra": "mean: 6.636994285714479 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.28710531810347,
            "unit": "iter/sec",
            "range": "stddev: 0.00026191235484740303",
            "extra": "mean: 4.232139534883809 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.1610940764616,
            "unit": "iter/sec",
            "range": "stddev: 0.00009416969271924553",
            "extra": "mean: 2.10898787878776 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 467.1176062092917,
            "unit": "iter/sec",
            "range": "stddev: 0.00005657827557184561",
            "extra": "mean: 2.140788501026764 msec\nrounds: 487"
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
        "date": 1646434943494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.90217747626119,
            "unit": "iter/sec",
            "range": "stddev: 0.0007627718144134409",
            "extra": "mean: 8.77946341463414 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.3217169293848,
            "unit": "iter/sec",
            "range": "stddev: 0.001037985181959686",
            "extra": "mean: 7.6733181818181 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.47730376059923,
            "unit": "iter/sec",
            "range": "stddev: 0.0006642422689374458",
            "extra": "mean: 5.391495238095159 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.2166502052737,
            "unit": "iter/sec",
            "range": "stddev: 0.0005104864890309089",
            "extra": "mean: 3.3759074626865675 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.70101701016908,
            "unit": "iter/sec",
            "range": "stddev: 0.001024250647501015",
            "extra": "mean: 9.832743362831957 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.1600934757318,
            "unit": "iter/sec",
            "range": "stddev: 0.0009541041007404691",
            "extra": "mean: 7.989767123287563 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.06383363388198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272776493580039",
            "extra": "mean: 5.261390243902424 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.24888644061585,
            "unit": "iter/sec",
            "range": "stddev: 0.0017726349756229131",
            "extra": "mean: 4.04450759878419 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.578969459633008,
            "unit": "iter/sec",
            "range": "stddev: 0.020097294958639274",
            "extra": "mean: 104.39536363636263 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.784847257666032,
            "unit": "iter/sec",
            "range": "stddev: 0.001702807686789373",
            "extra": "mean: 84.85472727272736 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 136.23824511255512,
            "unit": "iter/sec",
            "range": "stddev: 0.0016940265337194774",
            "extra": "mean: 7.3400828025481095 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 207.33678350447073,
            "unit": "iter/sec",
            "range": "stddev: 0.001053335539039446",
            "extra": "mean: 4.823070866141981 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 366.949713689542,
            "unit": "iter/sec",
            "range": "stddev: 0.0010858933977911738",
            "extra": "mean: 2.7251690427698505 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.96961263613997,
            "unit": "iter/sec",
            "range": "stddev: 0.00027991629231656793",
            "extra": "mean: 2.3420870488321888 msec\nrounds: 471"
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
        "date": 1646435362696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.35673866383945,
            "unit": "iter/sec",
            "range": "stddev: 0.00020464139208395293",
            "extra": "mean: 8.041381679389286 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.6863375691944,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517280107046674",
            "extra": "mean: 6.506759259259261 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.04977477031818,
            "unit": "iter/sec",
            "range": "stddev: 0.00021656650384711216",
            "extra": "mean: 4.738218750000007 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.49734002127246,
            "unit": "iter/sec",
            "range": "stddev: 0.00015961815877498547",
            "extra": "mean: 3.0075428571429237 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.73371358403793,
            "unit": "iter/sec",
            "range": "stddev: 0.00029067598022882926",
            "extra": "mean: 8.4937438016529 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.87728533157744,
            "unit": "iter/sec",
            "range": "stddev: 0.0003883298247700657",
            "extra": "mean: 6.999013157894798 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.83131408143916,
            "unit": "iter/sec",
            "range": "stddev: 0.000269331883409812",
            "extra": "mean: 4.954632558139609 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.8595102679599,
            "unit": "iter/sec",
            "range": "stddev: 0.00011465227280388343",
            "extra": "mean: 3.031593659942242 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.467106874273668,
            "unit": "iter/sec",
            "range": "stddev: 0.0028456356452072704",
            "extra": "mean: 80.2110714285715 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.073836358525664,
            "unit": "iter/sec",
            "range": "stddev: 0.0014083549381697976",
            "extra": "mean: 76.48864285714296 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.08117766776405,
            "unit": "iter/sec",
            "range": "stddev: 0.00021558336905456389",
            "extra": "mean: 5.811210810811007 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.20389555423043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001394379783931194",
            "extra": "mean: 4.061674157303225 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 485.0449131146881,
            "unit": "iter/sec",
            "range": "stddev: 0.00009086196668185157",
            "extra": "mean: 2.061664750957921 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 487.80400160983083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619443863274331",
            "extra": "mean: 2.0500036832413038 msec\nrounds: 543"
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
        "date": 1646663770670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.61261691753666,
            "unit": "iter/sec",
            "range": "stddev: 0.0006826572653502338",
            "extra": "mean: 9.040559999999953 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.25030424100515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003946313780805621",
            "extra": "mean: 6.70015384615383 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.20031338732525,
            "unit": "iter/sec",
            "range": "stddev: 0.00027792069161386586",
            "extra": "mean: 4.8496531531531035 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.71863477714135,
            "unit": "iter/sec",
            "range": "stddev: 0.00021635078316601018",
            "extra": "mean: 3.0986744868035476 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.24921570134597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005663376441459097",
            "extra": "mean: 9.592398305084696 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.00219988882512,
            "unit": "iter/sec",
            "range": "stddev: 0.00045964979932623234",
            "extra": "mean: 7.299152866242166 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.40200986455693,
            "unit": "iter/sec",
            "range": "stddev: 0.0004178958569953634",
            "extra": "mean: 5.3361220657277935 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.7916282500547,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557856017415007",
            "extra": "mean: 3.2279761904761006 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.905461960229102,
            "unit": "iter/sec",
            "range": "stddev: 0.0022487015642980034",
            "extra": "mean: 77.48657142857114 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.222985673787617,
            "unit": "iter/sec",
            "range": "stddev: 0.0055604030908719135",
            "extra": "mean: 81.81307142857212 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.68764965124234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007345052530466787",
            "extra": "mean: 6.549318181818405 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.6770178327482,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425021658544624",
            "extra": "mean: 4.2251673151749225 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.9989810227625,
            "unit": "iter/sec",
            "range": "stddev: 0.0003606271295011986",
            "extra": "mean: 2.159831967212984 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.19963976286846,
            "unit": "iter/sec",
            "range": "stddev: 0.00009399777905776323",
            "extra": "mean: 2.1920227743270417 msec\nrounds: 483"
          }
        ]
      }
    ]
  }
}