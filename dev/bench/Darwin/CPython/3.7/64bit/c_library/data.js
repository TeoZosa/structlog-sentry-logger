window.BENCHMARK_DATA = {
  "lastUpdate": 1672331139568,
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
      },
      {
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
        "date": 1646752359607,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.0558551924702,
            "unit": "iter/sec",
            "range": "stddev: 0.0008347428693678996",
            "extra": "mean: 8.69143076923081 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.18084680681557,
            "unit": "iter/sec",
            "range": "stddev: 0.00025251220579654526",
            "extra": "mean: 6.658638709677442 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.93658313977835,
            "unit": "iter/sec",
            "range": "stddev: 0.00012786557434581335",
            "extra": "mean: 4.76334322033901 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.17818918137283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001653984248683371",
            "extra": "mean: 2.9657908847184835 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.03054891138454,
            "unit": "iter/sec",
            "range": "stddev: 0.0003635412727596851",
            "extra": "mean: 8.926136752137078 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.39304494081213,
            "unit": "iter/sec",
            "range": "stddev: 0.0002512251848066541",
            "extra": "mean: 7.072483660130562 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.03952059902736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906359969090622",
            "extra": "mean: 4.925149532710187 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.12906499802807,
            "unit": "iter/sec",
            "range": "stddev: 0.00015857058192027444",
            "extra": "mean: 3.0568974358974432 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.876310164559182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005668964089335588",
            "extra": "mean: 77.66200000000038 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.89708037736862,
            "unit": "iter/sec",
            "range": "stddev: 0.0014143852953617626",
            "extra": "mean: 77.53692857142828 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.74891865862253,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080472883764378",
            "extra": "mean: 6.1444340659342345 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.7956084586525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003309131617018904",
            "extra": "mean: 4.135724409448907 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 475.1994256689704,
            "unit": "iter/sec",
            "range": "stddev: 0.00022417111088973918",
            "extra": "mean: 2.104379647749431 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 468.11968681723977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588744543578994",
            "extra": "mean: 2.1362058212057495 msec\nrounds: 481"
          }
        ]
      },
      {
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
        "date": 1646753200059,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.2638485536046,
            "unit": "iter/sec",
            "range": "stddev: 0.0004605037136362341",
            "extra": "mean: 8.455669354838705 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.82033028321555,
            "unit": "iter/sec",
            "range": "stddev: 0.00037198983497512206",
            "extra": "mean: 6.764969325153417 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.40588474286616,
            "unit": "iter/sec",
            "range": "stddev: 0.00018711343512625071",
            "extra": "mean: 4.868409691629979 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.9717006474367,
            "unit": "iter/sec",
            "range": "stddev: 0.00009577240130828192",
            "extra": "mean: 3.0397751479289497 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.69644757151774,
            "unit": "iter/sec",
            "range": "stddev: 0.00048062435741280077",
            "extra": "mean: 8.952836206896496 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.6927737549872,
            "unit": "iter/sec",
            "range": "stddev: 0.00046762963157795726",
            "extra": "mean: 7.315675675675688 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.50201228472014,
            "unit": "iter/sec",
            "range": "stddev: 0.00026255561106903645",
            "extra": "mean: 5.012480769230767 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.8247074457145,
            "unit": "iter/sec",
            "range": "stddev: 0.00015423917578730653",
            "extra": "mean: 3.050410714285753 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.753707685019872,
            "unit": "iter/sec",
            "range": "stddev: 0.0013909103114525577",
            "extra": "mean: 78.40857142857135 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.906996790767376,
            "unit": "iter/sec",
            "range": "stddev: 0.0016638103907845798",
            "extra": "mean: 77.47735714285753 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.1035302741441,
            "unit": "iter/sec",
            "range": "stddev: 0.0003280864408885552",
            "extra": "mean: 5.844414772727296 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.25864694654547,
            "unit": "iter/sec",
            "range": "stddev: 0.0002939900624096792",
            "extra": "mean: 4.162181102362103 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 484.8195538914518,
            "unit": "iter/sec",
            "range": "stddev: 0.0001158959912019443",
            "extra": "mean: 2.0626230769229537 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.8967366245957,
            "unit": "iter/sec",
            "range": "stddev: 0.00021088985099922797",
            "extra": "mean: 2.310019723865905 msec\nrounds: 507"
          }
        ]
      },
      {
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
        "date": 1646837839686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.60892716581012,
            "unit": "iter/sec",
            "range": "stddev: 0.0005593140458183685",
            "extra": "mean: 8.502755905511806 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.65596203490702,
            "unit": "iter/sec",
            "range": "stddev: 0.0005011652871018451",
            "extra": "mean: 6.818679487179527 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.6426311220603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005548409291147615",
            "extra": "mean: 5.218045662100537 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.24606814166174,
            "unit": "iter/sec",
            "range": "stddev: 0.00015207484960387915",
            "extra": "mean: 3.12259883720929 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.82236771049406,
            "unit": "iter/sec",
            "range": "stddev: 0.0004883066606429068",
            "extra": "mean: 9.023449152542401 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.91273604897793,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890617755247065",
            "extra": "mean: 7.046583892617453 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.62062143801262,
            "unit": "iter/sec",
            "range": "stddev: 0.00034160601499496783",
            "extra": "mean: 5.164739130434764 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.15835315379843,
            "unit": "iter/sec",
            "range": "stddev: 0.00030636228793085463",
            "extra": "mean: 3.3095229357799703 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.919759844346233,
            "unit": "iter/sec",
            "range": "stddev: 0.003004117157741133",
            "extra": "mean: 83.89430769230799 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.492084342709788,
            "unit": "iter/sec",
            "range": "stddev: 0.0032302020417869404",
            "extra": "mean: 80.05069230769216 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.07617762456798,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879168737131107",
            "extra": "mean: 6.169938202247046 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.82915968730794,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705604800255858",
            "extra": "mean: 4.118121568627523 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.88676406628184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002929745172272787",
            "extra": "mean: 2.198349301397324 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.5326730333239,
            "unit": "iter/sec",
            "range": "stddev: 0.0001211722721867011",
            "extra": "mean: 2.1952322175732197 msec\nrounds: 478"
          }
        ]
      },
      {
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
        "date": 1647271529346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.79766200016118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007644286026163062",
            "extra": "mean: 9.19137398373982 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.6122505616262,
            "unit": "iter/sec",
            "range": "stddev: 0.0007915204263023223",
            "extra": "mean: 7.540781456953633 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.91326321178738,
            "unit": "iter/sec",
            "range": "stddev: 0.0004099092341081001",
            "extra": "mean: 5.293434579439334 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.07292952550097,
            "unit": "iter/sec",
            "range": "stddev: 0.00040587193973415446",
            "extra": "mean: 3.495612121212114 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.34639655209692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008518410657672475",
            "extra": "mean: 10.599238938053265 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.32919809909761,
            "unit": "iter/sec",
            "range": "stddev: 0.0009851978916604843",
            "extra": "mean: 7.915826388888818 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.1428172514438,
            "unit": "iter/sec",
            "range": "stddev: 0.0006505373621717784",
            "extra": "mean: 5.645162561576284 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.2689233757609,
            "unit": "iter/sec",
            "range": "stddev: 0.00038712077298876275",
            "extra": "mean: 3.5302142857142274 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.956502684343189,
            "unit": "iter/sec",
            "range": "stddev: 0.006968295630926933",
            "extra": "mean: 91.26999999999974 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.274166122991998,
            "unit": "iter/sec",
            "range": "stddev: 0.006304041034419526",
            "extra": "mean: 97.33150000000042 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 135.03522168699112,
            "unit": "iter/sec",
            "range": "stddev: 0.0009933373148762535",
            "extra": "mean: 7.405475308641915 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.99974949420402,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288287611140625",
            "extra": "mean: 4.44444939271259 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 425.0474651033619,
            "unit": "iter/sec",
            "range": "stddev: 0.0002390779461946407",
            "extra": "mean: 2.3526784232363855 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 421.8587455356618,
            "unit": "iter/sec",
            "range": "stddev: 0.00021308737114434102",
            "extra": "mean: 2.370461702127887 msec\nrounds: 470"
          }
        ]
      },
      {
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
        "date": 1647613432930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.23063412212788,
            "unit": "iter/sec",
            "range": "stddev: 0.00044798150848668507",
            "extra": "mean: 8.248740157480318 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.09515757464945,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324535694464957",
            "extra": "mean: 7.037537499999969 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.8093704481954,
            "unit": "iter/sec",
            "range": "stddev: 0.0003308804698878927",
            "extra": "mean: 5.410981042653969 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6796292028994,
            "unit": "iter/sec",
            "range": "stddev: 0.00024194680364376229",
            "extra": "mean: 3.16776854599402 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.8991565100744,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040333231950039",
            "extra": "mean: 9.267913043478067 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.32582428435794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006464009112805239",
            "extra": "mean: 7.335367346938832 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.2645976794599,
            "unit": "iter/sec",
            "range": "stddev: 0.00037366980537152444",
            "extra": "mean: 5.121256038647456 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.03209598344756,
            "unit": "iter/sec",
            "range": "stddev: 0.00016630848356826477",
            "extra": "mean: 3.184387878787745 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.417590466838986,
            "unit": "iter/sec",
            "range": "stddev: 0.0042566517328011715",
            "extra": "mean: 87.5841538461534 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.983057799818482,
            "unit": "iter/sec",
            "range": "stddev: 0.0029246488919224137",
            "extra": "mean: 83.45115384615335 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.24523852049632,
            "unit": "iter/sec",
            "range": "stddev: 0.0003860349006472916",
            "extra": "mean: 6.125752941176564 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.58431860502085,
            "unit": "iter/sec",
            "range": "stddev: 0.0004553853845679049",
            "extra": "mean: 4.617139442231151 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.61084162532194,
            "unit": "iter/sec",
            "range": "stddev: 0.00020157672726738726",
            "extra": "mean: 2.156981481481776 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.7336808659086,
            "unit": "iter/sec",
            "range": "stddev: 0.00010559178594838359",
            "extra": "mean: 2.1990893617024136 msec\nrounds: 470"
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
        "date": 1647926269457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.73771123072692,
            "unit": "iter/sec",
            "range": "stddev: 0.0010932601232832321",
            "extra": "mean: 9.639696000000065 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.70790583143724,
            "unit": "iter/sec",
            "range": "stddev: 0.0004613862072972382",
            "extra": "mean: 7.0073202614378856 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.7682961361213,
            "unit": "iter/sec",
            "range": "stddev: 0.0005592065026175874",
            "extra": "mean: 5.471408450704298 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.55041722735064,
            "unit": "iter/sec",
            "range": "stddev: 0.00021371811328806133",
            "extra": "mean: 3.1892797619048143 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.53765518434842,
            "unit": "iter/sec",
            "range": "stddev: 0.001140834086356741",
            "extra": "mean: 9.565931034482606 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.30818312735818,
            "unit": "iter/sec",
            "range": "stddev: 0.0004800032939888967",
            "extra": "mean: 7.501414965986248 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.698699039749,
            "unit": "iter/sec",
            "range": "stddev: 0.0005935184042932867",
            "extra": "mean: 5.4142233009707885 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.6024856965197,
            "unit": "iter/sec",
            "range": "stddev: 0.0004733022480876233",
            "extra": "mean: 3.453009036144532 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.335861521115637,
            "unit": "iter/sec",
            "range": "stddev: 0.005889741909151157",
            "extra": "mean: 88.21561538461555 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.418316692722591,
            "unit": "iter/sec",
            "range": "stddev: 0.006296562488711298",
            "extra": "mean: 87.57858333333364 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.70075841610296,
            "unit": "iter/sec",
            "range": "stddev: 0.0008595790614744162",
            "extra": "mean: 6.591924855491366 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.17432078725088,
            "unit": "iter/sec",
            "range": "stddev: 0.00045343493376876425",
            "extra": "mean: 4.460814229249006 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 434.3830483117263,
            "unit": "iter/sec",
            "range": "stddev: 0.00028687567209388886",
            "extra": "mean: 2.3021156186609977 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 415.18583718068777,
            "unit": "iter/sec",
            "range": "stddev: 0.00025512777902208936",
            "extra": "mean: 2.408560000000199 msec\nrounds: 475"
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
        "date": 1647973526494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.7584930465536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384689834586424",
            "extra": "mean: 8.713951999999985 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.05567408820517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131708087797758",
            "extra": "mean: 7.243454545454538 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.59392327449106,
            "unit": "iter/sec",
            "range": "stddev: 0.00029160855383135654",
            "extra": "mean: 4.960466981132146 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.38079707561644,
            "unit": "iter/sec",
            "range": "stddev: 0.00022446380546542593",
            "extra": "mean: 3.191005988023917 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.80905730607134,
            "unit": "iter/sec",
            "range": "stddev: 0.0008336101498681445",
            "extra": "mean: 9.919743589743636 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.80344457804983,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367949203382449",
            "extra": "mean: 7.52992517006809 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.94320408230942,
            "unit": "iter/sec",
            "range": "stddev: 0.0005019002421822798",
            "extra": "mean: 5.237159420289881 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.6967655718108,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546317361257443",
            "extra": "mean: 3.2185722891565534 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.685414265913302,
            "unit": "iter/sec",
            "range": "stddev: 0.0038896060030517874",
            "extra": "mean: 85.57676923076912 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.464069921514659,
            "unit": "iter/sec",
            "range": "stddev: 0.002579872753272399",
            "extra": "mean: 80.23061538461572 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.0842047831175,
            "unit": "iter/sec",
            "range": "stddev: 0.0009432860784230571",
            "extra": "mean: 7.038080000000256 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.02057727473235,
            "unit": "iter/sec",
            "range": "stddev: 0.00035526559259778704",
            "extra": "mean: 4.219042968749892 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.3283231973769,
            "unit": "iter/sec",
            "range": "stddev: 0.0002833567695406637",
            "extra": "mean: 2.240503118503139 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.3905529730842,
            "unit": "iter/sec",
            "range": "stddev: 0.00022822060187657037",
            "extra": "mean: 2.2915253164558727 msec\nrounds: 474"
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
        "date": 1647982318309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.394124644582,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527669976136582",
            "extra": "mean: 8.44636507936513 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.8589665465338,
            "unit": "iter/sec",
            "range": "stddev: 0.0002128638436268116",
            "extra": "mean: 6.585057324840758 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.17370017040182,
            "unit": "iter/sec",
            "range": "stddev: 0.0004215887335343503",
            "extra": "mean: 5.150028037383157 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.5076649528906,
            "unit": "iter/sec",
            "range": "stddev: 0.00015151044022066024",
            "extra": "mean: 3.0721242774566493 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.10569055816988,
            "unit": "iter/sec",
            "range": "stddev: 0.00030378886903923525",
            "extra": "mean: 8.841288135592995 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.26928977528925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662855377692669",
            "extra": "mean: 7.338410596026586 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.61997415314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002345641418810404",
            "extra": "mean: 4.984548543689206 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.8984897982592,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128078273273954",
            "extra": "mean: 3.2268630952380244 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.748160097278268,
            "unit": "iter/sec",
            "range": "stddev: 0.002115985010368935",
            "extra": "mean: 78.44269230769231 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.238185208929341,
            "unit": "iter/sec",
            "range": "stddev: 0.004769346262249975",
            "extra": "mean: 81.71146153846163 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.0306963964022,
            "unit": "iter/sec",
            "range": "stddev: 0.00026783948435564464",
            "extra": "mean: 6.096419889502668 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.8684719326208,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478280974360669",
            "extra": "mean: 4.312789883268788 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.92364861744187,
            "unit": "iter/sec",
            "range": "stddev: 0.00027642178208838624",
            "extra": "mean: 2.183770161290401 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.51650069164356,
            "unit": "iter/sec",
            "range": "stddev: 0.00034622264538143485",
            "extra": "mean: 2.3836964656964192 msec\nrounds: 481"
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
        "date": 1647984247677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.35121804145024,
            "unit": "iter/sec",
            "range": "stddev: 0.00024626533936940304",
            "extra": "mean: 7.7308897058824195 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.172619950834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814923369915897",
            "extra": "mean: 6.166269005848032 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.2985543515893,
            "unit": "iter/sec",
            "range": "stddev: 0.0002088337434184577",
            "extra": "mean: 4.418941176470565 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 359.6699008487836,
            "unit": "iter/sec",
            "range": "stddev: 0.00020984079017775175",
            "extra": "mean: 2.7803271767809976 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.20263553699617,
            "unit": "iter/sec",
            "range": "stddev: 0.0002351461729640018",
            "extra": "mean: 8.250645669291224 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.01161151794028,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300888916770229",
            "extra": "mean: 6.451129629629487 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.6221156826455,
            "unit": "iter/sec",
            "range": "stddev: 0.0004392050655349424",
            "extra": "mean: 4.595121212121117 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.82121066449935,
            "unit": "iter/sec",
            "range": "stddev: 0.00039023107617944535",
            "extra": "mean: 2.900053619302932 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.276610595114667,
            "unit": "iter/sec",
            "range": "stddev: 0.0014167435962736522",
            "extra": "mean: 75.32042857142811 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.885314706029558,
            "unit": "iter/sec",
            "range": "stddev: 0.0018460620971864018",
            "extra": "mean: 72.01853333333237 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.43555085197116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003582465248861659",
            "extra": "mean: 5.542145077720284 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 266.0156958660491,
            "unit": "iter/sec",
            "range": "stddev: 0.00024665803966677667",
            "extra": "mean: 3.7591766784451135 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 535.1322727645506,
            "unit": "iter/sec",
            "range": "stddev: 0.000060907265853838847",
            "extra": "mean: 1.8686968641115456 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 516.7719856775193,
            "unit": "iter/sec",
            "range": "stddev: 0.000057070158218433175",
            "extra": "mean: 1.9350894160583019 msec\nrounds: 548"
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
        "date": 1647986005197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.18895202879388,
            "unit": "iter/sec",
            "range": "stddev: 0.0007054681143343679",
            "extra": "mean: 8.390039370078682 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.29850953978183,
            "unit": "iter/sec",
            "range": "stddev: 0.00043750313298691093",
            "extra": "mean: 6.6534259259258635 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.33144995704177,
            "unit": "iter/sec",
            "range": "stddev: 0.00017622649505218667",
            "extra": "mean: 4.7771130434782565 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.1423593089579,
            "unit": "iter/sec",
            "range": "stddev: 0.0001318730233590135",
            "extra": "mean: 2.9399455040872478 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.30193874386268,
            "unit": "iter/sec",
            "range": "stddev: 0.00033461590728937137",
            "extra": "mean: 8.598308943089485 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.46811349488792,
            "unit": "iter/sec",
            "range": "stddev: 0.0005008196005886512",
            "extra": "mean: 6.921942675159149 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.66955339461884,
            "unit": "iter/sec",
            "range": "stddev: 0.00031188929635365546",
            "extra": "mean: 4.769409691629862 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.7789206012789,
            "unit": "iter/sec",
            "range": "stddev: 0.00012763336471822742",
            "extra": "mean: 2.9344538043479176 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.874628704904122,
            "unit": "iter/sec",
            "range": "stddev: 0.0015699829914385005",
            "extra": "mean: 77.67214285714401 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.631419148872414,
            "unit": "iter/sec",
            "range": "stddev: 0.0025488674366315927",
            "extra": "mean: 73.35993333333306 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.55331851404847,
            "unit": "iter/sec",
            "range": "stddev: 0.00029562161599311603",
            "extra": "mean: 5.795310160427802 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.42540925728036,
            "unit": "iter/sec",
            "range": "stddev: 0.00016172828220258753",
            "extra": "mean: 3.8546725352113387 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.3495059168062,
            "unit": "iter/sec",
            "range": "stddev: 0.00016719504937667116",
            "extra": "mean: 2.099298913043585 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 485.3858488900978,
            "unit": "iter/sec",
            "range": "stddev: 0.0001457738222114998",
            "extra": "mean: 2.06021663442937 msec\nrounds: 517"
          }
        ]
      },
      {
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
        "date": 1648221530166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.89922418886114,
            "unit": "iter/sec",
            "range": "stddev: 0.000686394274810919",
            "extra": "mean: 8.779691056910602 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.4665658951168,
            "unit": "iter/sec",
            "range": "stddev: 0.0003284599856303584",
            "extra": "mean: 6.827496732026133 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.16082037087367,
            "unit": "iter/sec",
            "range": "stddev: 0.00035493604498272667",
            "extra": "mean: 5.150369668246475 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.38431039690454,
            "unit": "iter/sec",
            "range": "stddev: 0.000184340986203091",
            "extra": "mean: 3.160712990936556 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.21882179254567,
            "unit": "iter/sec",
            "range": "stddev: 0.0004905633447398682",
            "extra": "mean: 9.155931034482661 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.37614022536259,
            "unit": "iter/sec",
            "range": "stddev: 0.0009488990688806245",
            "extra": "mean: 8.519619047619019 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.24122837383118,
            "unit": "iter/sec",
            "range": "stddev: 0.00033381511397597476",
            "extra": "mean: 5.148237623762491 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.89188622233485,
            "unit": "iter/sec",
            "range": "stddev: 0.0003146724401564303",
            "extra": "mean: 3.3124441087612677 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.652416101126988,
            "unit": "iter/sec",
            "range": "stddev: 0.005500716093189276",
            "extra": "mean: 93.87541666666621 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.25514814805191,
            "unit": "iter/sec",
            "range": "stddev: 0.005775383755703227",
            "extra": "mean: 88.84823076923108 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.29541414620826,
            "unit": "iter/sec",
            "range": "stddev: 0.00040170417062999534",
            "extra": "mean: 6.1616035502957756 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.41938156169525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003561619448980488",
            "extra": "mean: 4.3399126984126895 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.07417352904434,
            "unit": "iter/sec",
            "range": "stddev: 0.00017873944122743393",
            "extra": "mean: 2.202283367556548 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.88546617248664,
            "unit": "iter/sec",
            "range": "stddev: 0.0001867766323723659",
            "extra": "mean: 2.2941806451612323 msec\nrounds: 465"
          }
        ]
      },
      {
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
        "date": 1648487953524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.46325170801103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004288404319637813",
            "extra": "mean: 8.660764227642295 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.9473498334408,
            "unit": "iter/sec",
            "range": "stddev: 0.0004041477723165741",
            "extra": "mean: 6.759161290322541 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.40474266251928,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931149283423411",
            "extra": "mean: 4.989901869158834 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.59506592779326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009706890414725828",
            "extra": "mean: 3.0902819767441674 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.28369066177663,
            "unit": "iter/sec",
            "range": "stddev: 0.00045229581777715976",
            "extra": "mean: 8.986042735042728 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.82693367041722,
            "unit": "iter/sec",
            "range": "stddev: 0.00036199635478040173",
            "extra": "mean: 7.151697986577297 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.5950598759372,
            "unit": "iter/sec",
            "range": "stddev: 0.00023037923944734128",
            "extra": "mean: 5.035371980676167 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.34085441344547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850956998416203",
            "extra": "mean: 3.2431641337385946 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.545380501390639,
            "unit": "iter/sec",
            "range": "stddev: 0.0006751012934438804",
            "extra": "mean: 79.71061538461518 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.762389826215742,
            "unit": "iter/sec",
            "range": "stddev: 0.0016025572872674849",
            "extra": "mean: 78.3552307692294 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.34618540299726,
            "unit": "iter/sec",
            "range": "stddev: 0.00045064100357027363",
            "extra": "mean: 6.437235632183769 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.90975705899444,
            "unit": "iter/sec",
            "range": "stddev: 0.0001463130077032899",
            "extra": "mean: 4.133772908366529 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.01123520646854,
            "unit": "iter/sec",
            "range": "stddev: 0.00010312756803022366",
            "extra": "mean: 2.1141146881289234 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.39398537927815,
            "unit": "iter/sec",
            "range": "stddev: 0.00007173322555086889",
            "extra": "mean: 2.1673451143451152 msec\nrounds: 481"
          }
        ]
      },
      {
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
        "date": 1648489850546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.32662663124785,
            "unit": "iter/sec",
            "range": "stddev: 0.00036805688575975245",
            "extra": "mean: 7.979150375939895 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.81759134296274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619550700711861",
            "extra": "mean: 6.765094674556187 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.53580768329007,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707563028983871",
            "extra": "mean: 4.683055319148956 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.80428066610017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002994927715848277",
            "extra": "mean: 2.883470752089103 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.19039949544091,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703101457299525",
            "extra": "mean: 9.690823999999935 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.93772539361458,
            "unit": "iter/sec",
            "range": "stddev: 0.0007390532293407274",
            "extra": "mean: 7.579333333333311 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.0068520605729,
            "unit": "iter/sec",
            "range": "stddev: 0.00024013267687893888",
            "extra": "mean: 5.024952606634992 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.05331549558804,
            "unit": "iter/sec",
            "range": "stddev: 0.00015286992609195798",
            "extra": "mean: 3.0764183976261363 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.39833366395551,
            "unit": "iter/sec",
            "range": "stddev: 0.0009297655618480491",
            "extra": "mean: 80.65600000000035 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.452369685951288,
            "unit": "iter/sec",
            "range": "stddev: 0.001292192323147102",
            "extra": "mean: 80.30599999999967 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.34890168799652,
            "unit": "iter/sec",
            "range": "stddev: 0.00022203081629506568",
            "extra": "mean: 5.940044692737673 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.2484300312873,
            "unit": "iter/sec",
            "range": "stddev: 0.000275248617349853",
            "extra": "mean: 4.077498069498043 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 484.215702963893,
            "unit": "iter/sec",
            "range": "stddev: 0.00012227048444918135",
            "extra": "mean: 2.0651953125001565 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 457.14572550814216,
            "unit": "iter/sec",
            "range": "stddev: 0.00019581905666897788",
            "extra": "mean: 2.1874862745100505 msec\nrounds: 510"
          }
        ]
      },
      {
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
        "date": 1648490689039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.50019092669254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008206815362778988",
            "extra": "mean: 9.216573643410854 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.64504519505581,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221929886113827",
            "extra": "mean: 6.819187096774241 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.57886720190686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478172026970544",
            "extra": "mean: 4.936349056603802 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.02915878962057,
            "unit": "iter/sec",
            "range": "stddev: 0.00015628928879040228",
            "extra": "mean: 3.086142011834376 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.54468484082336,
            "unit": "iter/sec",
            "range": "stddev: 0.0011307491956296454",
            "extra": "mean: 9.385733333333235 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.99559699791413,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466015607409879",
            "extra": "mean: 7.407649006622426 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.14668092189024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740197657701757",
            "extra": "mean: 5.072365384615333 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.62593799309525,
            "unit": "iter/sec",
            "range": "stddev: 0.00025870395951267926",
            "extra": "mean: 3.198710914454214 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.726099953275973,
            "unit": "iter/sec",
            "range": "stddev: 0.003166869849082411",
            "extra": "mean: 85.27984615384636 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.51876611189249,
            "unit": "iter/sec",
            "range": "stddev: 0.0010782850938360383",
            "extra": "mean: 79.88007692307846 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.18181054128505,
            "unit": "iter/sec",
            "range": "stddev: 0.00034207197206248264",
            "extra": "mean: 6.017505747126079 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.6387567746903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003501965488393029",
            "extra": "mean: 4.431862745098093 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.1620861137501,
            "unit": "iter/sec",
            "range": "stddev: 0.00013007908925301973",
            "extra": "mean: 2.177880165289313 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.44163924383594,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325032290760003",
            "extra": "mean: 2.210229813664579 msec\nrounds: 483"
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
        "date": 1648605217144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.98028743990928,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608143449942416",
            "extra": "mean: 8.548448818897649 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.04696782991246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005602828974343086",
            "extra": "mean: 7.039925000000025 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.5580461162696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003613278798024376",
            "extra": "mean: 5.193239234449773 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.1091375381689,
            "unit": "iter/sec",
            "range": "stddev: 0.0002309085672376442",
            "extra": "mean: 3.193774566473957 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.89086880372568,
            "unit": "iter/sec",
            "range": "stddev: 0.000702181766520442",
            "extra": "mean: 9.355336065573685 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.45700775996914,
            "unit": "iter/sec",
            "range": "stddev: 0.0008004877361290842",
            "extra": "mean: 7.665360544217933 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.21094766000041,
            "unit": "iter/sec",
            "range": "stddev: 0.0003421294188772224",
            "extra": "mean: 5.341567961165022 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.03287501200145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006341418542893882",
            "extra": "mean: 3.2891179941002293 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.872796682923175,
            "unit": "iter/sec",
            "range": "stddev: 0.004436559681520084",
            "extra": "mean: 84.22615384615447 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.202322008014203,
            "unit": "iter/sec",
            "range": "stddev: 0.0028255041891802777",
            "extra": "mean: 81.95161538461477 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.78085388678775,
            "unit": "iter/sec",
            "range": "stddev: 0.0003850910706776437",
            "extra": "mean: 6.181201149425182 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.22475661682984,
            "unit": "iter/sec",
            "range": "stddev: 0.0002624773703066091",
            "extra": "mean: 4.197716535433131 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.2375624656457,
            "unit": "iter/sec",
            "range": "stddev: 0.00015454020696806055",
            "extra": "mean: 2.1727909270218353 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.2168694806229,
            "unit": "iter/sec",
            "range": "stddev: 0.00024895030632736897",
            "extra": "mean: 2.351741127348594 msec\nrounds: 479"
          }
        ]
      },
      {
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
        "date": 1648608400679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.08406091077407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006314908103402945",
            "extra": "mean: 9.083967213114763 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.6173433558797,
            "unit": "iter/sec",
            "range": "stddev: 0.001039309353698622",
            "extra": "mean: 7.597782894736776 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.4147874277948,
            "unit": "iter/sec",
            "range": "stddev: 0.0004537568445432986",
            "extra": "mean: 5.117319999999985 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.66855752264394,
            "unit": "iter/sec",
            "range": "stddev: 0.00014698239389211978",
            "extra": "mean: 3.1880785498489415 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.97447213193912,
            "unit": "iter/sec",
            "range": "stddev: 0.0005636377200663651",
            "extra": "mean: 9.436234782608699 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.76663437210865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006795091469191968",
            "extra": "mean: 7.951234482758574 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.75139453549767,
            "unit": "iter/sec",
            "range": "stddev: 0.00021282896802773485",
            "extra": "mean: 5.08255609756088 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.6558281734421,
            "unit": "iter/sec",
            "range": "stddev: 0.00048705317844406626",
            "extra": "mean: 3.3040830769230483 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.835965356129444,
            "unit": "iter/sec",
            "range": "stddev: 0.0027220870043206946",
            "extra": "mean: 84.48824999999971 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.298261215068209,
            "unit": "iter/sec",
            "range": "stddev: 0.0020128997898804855",
            "extra": "mean: 81.31230769230768 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.02560256265303,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161481506992952",
            "extra": "mean: 6.368388235294312 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 206.01226184982005,
            "unit": "iter/sec",
            "range": "stddev: 0.000757614339588429",
            "extra": "mean: 4.854080000000124 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.37971040382104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002315940286438941",
            "extra": "mean: 2.23025256673496 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.82103309058897,
            "unit": "iter/sec",
            "range": "stddev: 0.00012799285637642437",
            "extra": "mean: 2.2280595744677645 msec\nrounds: 470"
          }
        ]
      },
      {
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
        "date": 1648614526171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.90241563681711,
            "unit": "iter/sec",
            "range": "stddev: 0.00039069081762321107",
            "extra": "mean: 8.410258064516215 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.1422300214076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817117579952561",
            "extra": "mean: 6.889793548387026 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.5522261885104,
            "unit": "iter/sec",
            "range": "stddev: 0.00025936914870823633",
            "extra": "mean: 4.864943661971861 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.17649527556017,
            "unit": "iter/sec",
            "range": "stddev: 0.00015697616733072097",
            "extra": "mean: 3.084739376770573 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.22978742324437,
            "unit": "iter/sec",
            "range": "stddev: 0.0005737639536346305",
            "extra": "mean: 9.071957983193279 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.16070805200569,
            "unit": "iter/sec",
            "range": "stddev: 0.001985436357123808",
            "extra": "mean: 7.989727891156455 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.86699380675628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715359017386421",
            "extra": "mean: 5.053900000000175 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.467426950491,
            "unit": "iter/sec",
            "range": "stddev: 0.00026589683208578965",
            "extra": "mean: 3.1799795918368288 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.91544476659001,
            "unit": "iter/sec",
            "range": "stddev: 0.008455536040415627",
            "extra": "mean: 91.61330769230766 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.281797337117428,
            "unit": "iter/sec",
            "range": "stddev: 0.0035929169993333386",
            "extra": "mean: 81.42130769230741 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.13087572216074,
            "unit": "iter/sec",
            "range": "stddev: 0.00040977406345981326",
            "extra": "mean: 6.092698863636059 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.76282578170813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003085269988394808",
            "extra": "mean: 4.314755813953856 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.1860826646685,
            "unit": "iter/sec",
            "range": "stddev: 0.00012307964398400615",
            "extra": "mean: 2.1589595141699607 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.0910619613674,
            "unit": "iter/sec",
            "range": "stddev: 0.00019043358609091584",
            "extra": "mean: 2.2070618556701183 msec\nrounds: 485"
          }
        ]
      },
      {
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
        "date": 1648735060342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.28313579070516,
            "unit": "iter/sec",
            "range": "stddev: 0.001052519553231925",
            "extra": "mean: 9.873312000000013 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.15064880532404,
            "unit": "iter/sec",
            "range": "stddev: 0.00030248806474910317",
            "extra": "mean: 6.70463057324833 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.4565019012111,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288569164640718",
            "extra": "mean: 5.064406542056068 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.2625162326852,
            "unit": "iter/sec",
            "range": "stddev: 0.00029135280313228495",
            "extra": "mean: 3.2866355421686206 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.68564496668546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006535414340714514",
            "extra": "mean: 9.116963302752401 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.27170309531292,
            "unit": "iter/sec",
            "range": "stddev: 0.0004816897024368022",
            "extra": "mean: 7.180209459459495 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.78615233864977,
            "unit": "iter/sec",
            "range": "stddev: 0.00028414995940139907",
            "extra": "mean: 5.107613526570091 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.87783434293124,
            "unit": "iter/sec",
            "range": "stddev: 0.00019469542859265197",
            "extra": "mean: 3.20638368580061 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.345198335107515,
            "unit": "iter/sec",
            "range": "stddev: 0.0012210259242506577",
            "extra": "mean: 81.00315384615413 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.276694018511437,
            "unit": "iter/sec",
            "range": "stddev: 0.0028510974742528487",
            "extra": "mean: 81.45515384615337 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.6571034279516,
            "unit": "iter/sec",
            "range": "stddev: 0.00023998191221019592",
            "extra": "mean: 5.96455491329502 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.75803420499471,
            "unit": "iter/sec",
            "range": "stddev: 0.0001539522906029502",
            "extra": "mean: 4.136367187499824 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.05605014989345,
            "unit": "iter/sec",
            "range": "stddev: 0.00014562315180987004",
            "extra": "mean: 2.187915463917491 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.52077949405026,
            "unit": "iter/sec",
            "range": "stddev: 0.00022804283405675795",
            "extra": "mean: 2.3611592356687385 msec\nrounds: 471"
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
        "date": 1648765952868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.23231982561347,
            "unit": "iter/sec",
            "range": "stddev: 0.0005163056168995766",
            "extra": "mean: 8.603459016393439 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.80500767298835,
            "unit": "iter/sec",
            "range": "stddev: 0.00038545056458110855",
            "extra": "mean: 6.858475000000008 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.59813087483602,
            "unit": "iter/sec",
            "range": "stddev: 0.00034151072897165393",
            "extra": "mean: 5.086518348623818 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.7095515301265,
            "unit": "iter/sec",
            "range": "stddev: 0.00012920000944053277",
            "extra": "mean: 3.1376530612245346 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.98293394748127,
            "unit": "iter/sec",
            "range": "stddev: 0.0008292557796759677",
            "extra": "mean: 10.001706896551735 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.80289686062682,
            "unit": "iter/sec",
            "range": "stddev: 0.0003713972707470742",
            "extra": "mean: 7.256741496598545 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.48582714763643,
            "unit": "iter/sec",
            "range": "stddev: 0.00047105106676992596",
            "extra": "mean: 5.420470588235166 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.621720409596,
            "unit": "iter/sec",
            "range": "stddev: 0.00025472530253089256",
            "extra": "mean: 3.261347560975671 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.110123877251802,
            "unit": "iter/sec",
            "range": "stddev: 0.0025872936186737356",
            "extra": "mean: 82.57553846153834 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.41956628487263,
            "unit": "iter/sec",
            "range": "stddev: 0.00627500002655996",
            "extra": "mean: 87.568999999999 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.9354570739587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006894795541213942",
            "extra": "mean: 6.99616470588241 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.2457583306022,
            "unit": "iter/sec",
            "range": "stddev: 0.0006029526450472292",
            "extra": "mean: 4.479368421052421 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 452.2547535304229,
            "unit": "iter/sec",
            "range": "stddev: 0.00021238627612444038",
            "extra": "mean: 2.21114314928418 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.8668174691952,
            "unit": "iter/sec",
            "range": "stddev: 0.00023748081176700933",
            "extra": "mean: 2.2995546218488774 msec\nrounds: 476"
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
        "date": 1648768379798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.35036357306632,
            "unit": "iter/sec",
            "range": "stddev: 0.0010962213460481971",
            "extra": "mean: 10.065388429752037 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.42721602866766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004149919063015896",
            "extra": "mean: 7.070774834437082 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.95733279663125,
            "unit": "iter/sec",
            "range": "stddev: 0.0010585046248031017",
            "extra": "mean: 7.0943453608246685 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.96484289166784,
            "unit": "iter/sec",
            "range": "stddev: 0.00047602434015905345",
            "extra": "mean: 3.5092048192771617 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.04523260962213,
            "unit": "iter/sec",
            "range": "stddev: 0.0008398912087404747",
            "extra": "mean: 10.304473214285943 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.34682430644105,
            "unit": "iter/sec",
            "range": "stddev: 0.0007153992690485767",
            "extra": "mean: 7.55590476190468 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.40657393499384,
            "unit": "iter/sec",
            "range": "stddev: 0.0006552960290291657",
            "extra": "mean: 5.636769696969768 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.97027888987645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005364704170363957",
            "extra": "mean: 3.6500309597522227 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.31582766034451,
            "unit": "iter/sec",
            "range": "stddev: 0.010684613818335334",
            "extra": "mean: 96.93841666666654 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.173596554397248,
            "unit": "iter/sec",
            "range": "stddev: 0.0055874121754326675",
            "extra": "mean: 109.00849999999866 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 132.2584859850083,
            "unit": "iter/sec",
            "range": "stddev: 0.0011391506935050759",
            "extra": "mean: 7.560951515151561 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 195.26486620436452,
            "unit": "iter/sec",
            "range": "stddev: 0.0007473473858720899",
            "extra": "mean: 5.121248995983734 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 422.46993771301493,
            "unit": "iter/sec",
            "range": "stddev: 0.0002924212489845094",
            "extra": "mean: 2.367032327586118 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 420.89260072620306,
            "unit": "iter/sec",
            "range": "stddev: 0.00019262789157581145",
            "extra": "mean: 2.3759030172414812 msec\nrounds: 464"
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
        "date": 1648769252888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.60832364620185,
            "unit": "iter/sec",
            "range": "stddev: 0.00041145788477250125",
            "extra": "mean: 8.72536974789911 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.32461389877795,
            "unit": "iter/sec",
            "range": "stddev: 0.0003230031979338177",
            "extra": "mean: 6.7877320261437655 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.4819196841898,
            "unit": "iter/sec",
            "range": "stddev: 0.00023052389077068847",
            "extra": "mean: 5.012985645932984 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.4834831507385,
            "unit": "iter/sec",
            "range": "stddev: 0.00018667014512350116",
            "extra": "mean: 3.252207207207183 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.56643398454557,
            "unit": "iter/sec",
            "range": "stddev: 0.000641104942955572",
            "extra": "mean: 9.472707964601657 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.65362482268617,
            "unit": "iter/sec",
            "range": "stddev: 0.000370443494006149",
            "extra": "mean: 7.212216783216636 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.85826514362444,
            "unit": "iter/sec",
            "range": "stddev: 0.0003912488114724455",
            "extra": "mean: 5.591019230769083 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.20774343418697,
            "unit": "iter/sec",
            "range": "stddev: 0.00024526183417549255",
            "extra": "mean: 3.244564814814702 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.963511290563801,
            "unit": "iter/sec",
            "range": "stddev: 0.001642722380130945",
            "extra": "mean: 83.58749999999985 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.961656450185346,
            "unit": "iter/sec",
            "range": "stddev: 0.0042547967757078685",
            "extra": "mean: 83.60046153846066 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.34901592374464,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528388189349532",
            "extra": "mean: 6.437118343194815 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.06743084794775,
            "unit": "iter/sec",
            "range": "stddev: 0.0001370318186733279",
            "extra": "mean: 4.131080321285105 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.6800291089224,
            "unit": "iter/sec",
            "range": "stddev: 0.00014114322563192288",
            "extra": "mean: 2.1801690427697493 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.47797575309744,
            "unit": "iter/sec",
            "range": "stddev: 0.00017902251638691048",
            "extra": "mean: 2.3502979166665363 msec\nrounds: 480"
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
        "date": 1648770465318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.68581527173302,
            "unit": "iter/sec",
            "range": "stddev: 0.0008234671479055651",
            "extra": "mean: 8.796172131147493 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.86808238060812,
            "unit": "iter/sec",
            "range": "stddev: 0.00022215148090285987",
            "extra": "mean: 6.808831325301187 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.5196500851152,
            "unit": "iter/sec",
            "range": "stddev: 0.0001856263378344662",
            "extra": "mean: 4.962295238095308 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.0137020041674,
            "unit": "iter/sec",
            "range": "stddev: 0.00021280574781486485",
            "extra": "mean: 3.25718361581929 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.08257171300754,
            "unit": "iter/sec",
            "range": "stddev: 0.0020145848913385614",
            "extra": "mean: 9.795991452991366 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.63665993988167,
            "unit": "iter/sec",
            "range": "stddev: 0.00036296171983584644",
            "extra": "mean: 7.213099337748324 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.83838285819672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005002018301614808",
            "extra": "mean: 5.381019704433428 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7720907941213,
            "unit": "iter/sec",
            "range": "stddev: 0.00016131699909898708",
            "extra": "mean: 3.217792168674744 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.04672030541374,
            "unit": "iter/sec",
            "range": "stddev: 0.001919213143385153",
            "extra": "mean: 76.64761538461508 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.19191957084428,
            "unit": "iter/sec",
            "range": "stddev: 0.004739869453466657",
            "extra": "mean: 82.02153846153948 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.3251919117708,
            "unit": "iter/sec",
            "range": "stddev: 0.00039036567797261",
            "extra": "mean: 6.085494186046156 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.50338403944548,
            "unit": "iter/sec",
            "range": "stddev: 0.00023775884026998315",
            "extra": "mean: 4.157945652174224 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.0040734748575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000748503239088495",
            "extra": "mean: 2.1833866943868916 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.546819812559,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631720607571395",
            "extra": "mean: 2.3012479999999726 msec\nrounds: 500"
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
        "date": 1648771202474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.76528467003052,
            "unit": "iter/sec",
            "range": "stddev: 0.0009996533375767648",
            "extra": "mean: 9.637134453781533 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.8571429854833,
            "unit": "iter/sec",
            "range": "stddev: 0.000622346213785464",
            "extra": "mean: 7.470651006711305 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 138.2998340402001,
            "unit": "iter/sec",
            "range": "stddev: 0.0009886315230096692",
            "extra": "mean: 7.230666666666617 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.07178792078065,
            "unit": "iter/sec",
            "range": "stddev: 0.00023836637614803706",
            "extra": "mean: 3.2565674846625217 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.46865036036831,
            "unit": "iter/sec",
            "range": "stddev: 0.000624581053252733",
            "extra": "mean: 9.664763157894933 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.08912535094373,
            "unit": "iter/sec",
            "range": "stddev: 0.00040357134001819576",
            "extra": "mean: 7.513761904761884 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.31654743306947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479761314503663",
            "extra": "mean: 5.338556650246356 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.753230232129,
            "unit": "iter/sec",
            "range": "stddev: 0.00010698913802939874",
            "extra": "mean: 3.1872181818180936 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.662037555603307,
            "unit": "iter/sec",
            "range": "stddev: 0.0013841687128531832",
            "extra": "mean: 78.97623076923128 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.036045177758568,
            "unit": "iter/sec",
            "range": "stddev: 0.0021070955979672484",
            "extra": "mean: 83.08376923076875 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.2853378991681,
            "unit": "iter/sec",
            "range": "stddev: 0.00020556688612580727",
            "extra": "mean: 6.1242485875707935 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.1632580683295,
            "unit": "iter/sec",
            "range": "stddev: 0.00011515324519100593",
            "extra": "mean: 4.146568627450981 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.36056410781913,
            "unit": "iter/sec",
            "range": "stddev: 0.00007277807397980319",
            "extra": "mean: 2.1534989775053583 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.90173466078244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008982543894160733",
            "extra": "mean: 2.232632567849616 msec\nrounds: 479"
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
        "date": 1648865999606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.88676312149815,
            "unit": "iter/sec",
            "range": "stddev: 0.00040234186052451435",
            "extra": "mean: 8.007253731343276 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.85631129264735,
            "unit": "iter/sec",
            "range": "stddev: 0.00024988785957962207",
            "extra": "mean: 6.334874999999942 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.87958974847288,
            "unit": "iter/sec",
            "range": "stddev: 0.00017991413735202213",
            "extra": "mean: 4.547943722943685 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 345.4973293990217,
            "unit": "iter/sec",
            "range": "stddev: 0.00008360707927368727",
            "extra": "mean: 2.8943783783783763 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.2118487676443,
            "unit": "iter/sec",
            "range": "stddev: 0.00041007452926956927",
            "extra": "mean: 8.459388888888686 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.7009106825147,
            "unit": "iter/sec",
            "range": "stddev: 0.0001711222069999351",
            "extra": "mean: 6.591918238993549 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.05694692484954,
            "unit": "iter/sec",
            "range": "stddev: 0.00017607485654814106",
            "extra": "mean: 4.783385650224163 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.20226645404244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008838821846778382",
            "extra": "mean: 2.905268493150724 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.060627432541999,
            "unit": "iter/sec",
            "range": "stddev: 0.0012720361025358887",
            "extra": "mean: 76.56599999999918 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.54789325421379,
            "unit": "iter/sec",
            "range": "stddev: 0.0015994998342542463",
            "extra": "mean: 73.81221428571345 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.12616522752185,
            "unit": "iter/sec",
            "range": "stddev: 0.0001710420785873001",
            "extra": "mean: 5.776134408601976 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.6409505278329,
            "unit": "iter/sec",
            "range": "stddev: 0.00012900132760827027",
            "extra": "mean: 3.8964942965777762 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 505.15680909284083,
            "unit": "iter/sec",
            "range": "stddev: 0.00004155612317409608",
            "extra": "mean: 1.9795833333332615 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 499.87130179170515,
            "unit": "iter/sec",
            "range": "stddev: 0.00006934683088936587",
            "extra": "mean: 2.000514925373125 msec\nrounds: 536"
          }
        ]
      },
      {
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
        "date": 1649082936645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.98110466839286,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939759795295111",
            "extra": "mean: 8.773383999999972 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.41709168818593,
            "unit": "iter/sec",
            "range": "stddev: 0.00043887956113010217",
            "extra": "mean: 7.071281045751704 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.456820608457,
            "unit": "iter/sec",
            "range": "stddev: 0.0003412812322618799",
            "extra": "mean: 4.96384285714286 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.46376164429006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012399257918364168",
            "extra": "mean: 3.0725386904761844 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.93745275065554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006333343521096862",
            "extra": "mean: 9.621170940170968 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.63055090991736,
            "unit": "iter/sec",
            "range": "stddev: 0.0007045638168318073",
            "extra": "mean: 7.597020547945284 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.27690818732174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948430085749055",
            "extra": "mean: 5.200832535885021 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.3834685276744,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368291878083019",
            "extra": "mean: 3.1808288288287416 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.885562150518796,
            "unit": "iter/sec",
            "range": "stddev: 0.0022935086434186327",
            "extra": "mean: 84.13569230769205 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.514897541496445,
            "unit": "iter/sec",
            "range": "stddev: 0.001786678443081523",
            "extra": "mean: 79.90476923076966 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.25337398214626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002968047237323262",
            "extra": "mean: 6.125447674419043 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.5645710094551,
            "unit": "iter/sec",
            "range": "stddev: 0.0002991529735090643",
            "extra": "mean: 4.191737254901804 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.20983598489096,
            "unit": "iter/sec",
            "range": "stddev: 0.00009348765199853189",
            "extra": "mean: 2.1221967871486966 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.30328521755854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001216345374151547",
            "extra": "mean: 2.1963382045929407 msec\nrounds: 479"
          }
        ]
      },
      {
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
        "date": 1649083984454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.81948563519936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004007182256737534",
            "extra": "mean: 8.416128000000008 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.70953919895544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007048975930400363",
            "extra": "mean: 7.106838709677357 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.4337357176344,
            "unit": "iter/sec",
            "range": "stddev: 0.0003926449867551696",
            "extra": "mean: 5.06499052132701 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.9683326335103,
            "unit": "iter/sec",
            "range": "stddev: 0.00016883551620126814",
            "extra": "mean: 3.1351074626865376 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.20778537611888,
            "unit": "iter/sec",
            "range": "stddev: 0.0009220692702451063",
            "extra": "mean: 9.504999999999907 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.38563419370848,
            "unit": "iter/sec",
            "range": "stddev: 0.0009426447322119552",
            "extra": "mean: 8.104671232876726 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.99090585692383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005068641269462523",
            "extra": "mean: 5.347853658536477 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.94157452163785,
            "unit": "iter/sec",
            "range": "stddev: 0.00021586736110933502",
            "extra": "mean: 3.185306060606117 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.590874237231382,
            "unit": "iter/sec",
            "range": "stddev: 0.005088967464915925",
            "extra": "mean: 86.27476923076873 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.823997074924845,
            "unit": "iter/sec",
            "range": "stddev: 0.0064551904974974",
            "extra": "mean: 84.57376923077057 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.65137369164555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007246142849263432",
            "extra": "mean: 6.42461403508753 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.6173345106661,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808781232624351",
            "extra": "mean: 4.4127250996014755 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.5541293677883,
            "unit": "iter/sec",
            "range": "stddev: 0.00017098163796285074",
            "extra": "mean: 2.1665931174091013 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.79968476362984,
            "unit": "iter/sec",
            "range": "stddev: 0.00013475946049648524",
            "extra": "mean: 2.174860125261008 msec\nrounds: 479"
          }
        ]
      },
      {
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
        "date": 1649166735393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.70413959444687,
            "unit": "iter/sec",
            "range": "stddev: 0.0002114896080914739",
            "extra": "mean: 7.955187500000009 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.85136568523527,
            "unit": "iter/sec",
            "range": "stddev: 0.00013320183236223055",
            "extra": "mean: 6.375462499999973 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.95452715580439,
            "unit": "iter/sec",
            "range": "stddev: 0.00028115059581590505",
            "extra": "mean: 4.673890350877163 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.60645741312993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005514019034927365",
            "extra": "mean: 3.382876033057805 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.45404928838403,
            "unit": "iter/sec",
            "range": "stddev: 0.00047736053809804396",
            "extra": "mean: 8.661454545454484 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.92291637679128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505368256889324",
            "extra": "mean: 7.046078431372556 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.27008338831948,
            "unit": "iter/sec",
            "range": "stddev: 0.0001774637854746619",
            "extra": "mean: 4.77851388888879 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.15879069670217,
            "unit": "iter/sec",
            "range": "stddev: 0.00012698588051461487",
            "extra": "mean: 3.0473052325581036 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.451105466609905,
            "unit": "iter/sec",
            "range": "stddev: 0.0014866137049320213",
            "extra": "mean: 80.31415384615424 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.970194493054917,
            "unit": "iter/sec",
            "range": "stddev: 0.0017203349889952405",
            "extra": "mean: 77.09984615384641 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.9816605759575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002885407233721382",
            "extra": "mean: 5.71488461538466 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.06254661339776,
            "unit": "iter/sec",
            "range": "stddev: 0.000320684769269141",
            "extra": "mean: 4.04755805243437 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 494.8617322770743,
            "unit": "iter/sec",
            "range": "stddev: 0.00009587465326325427",
            "extra": "mean: 2.0207664783424746 msec\nrounds: 531"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 479.43855962022525,
            "unit": "iter/sec",
            "range": "stddev: 0.00010026292559902882",
            "extra": "mean: 2.0857729941290577 msec\nrounds: 511"
          }
        ]
      },
      {
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
        "date": 1649339865089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.75527315636447,
            "unit": "iter/sec",
            "range": "stddev: 0.0011628416911190131",
            "extra": "mean: 9.731860655737664 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.53476364130475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003527820654838642",
            "extra": "mean: 6.966953333333331 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.44297571359658,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831739079332072",
            "extra": "mean: 5.0647534883720695 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.51090973117323,
            "unit": "iter/sec",
            "range": "stddev: 0.0003994361683186794",
            "extra": "mean: 3.294774480712155 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.96765197992322,
            "unit": "iter/sec",
            "range": "stddev: 0.0005134111426501786",
            "extra": "mean: 9.436842105263041 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.01807870427828,
            "unit": "iter/sec",
            "range": "stddev: 0.0007957276615874608",
            "extra": "mean: 7.691238095238018 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.4639707681889,
            "unit": "iter/sec",
            "range": "stddev: 0.0004742574402523552",
            "extra": "mean: 5.362966346153784 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.9489864273862,
            "unit": "iter/sec",
            "range": "stddev: 0.00040835961180430786",
            "extra": "mean: 3.32282228915658 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.233256201084652,
            "unit": "iter/sec",
            "range": "stddev: 0.0016587577449430687",
            "extra": "mean: 81.7443846153844 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.862450325989197,
            "unit": "iter/sec",
            "range": "stddev: 0.0060317964645495385",
            "extra": "mean: 84.29961538461583 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.56316788899616,
            "unit": "iter/sec",
            "range": "stddev: 0.00043839777246618047",
            "extra": "mean: 6.346660919539926 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.4629235963408,
            "unit": "iter/sec",
            "range": "stddev: 0.0004073146158997027",
            "extra": "mean: 4.265066666666809 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.6350853699641,
            "unit": "iter/sec",
            "range": "stddev: 0.0001771485860561386",
            "extra": "mean: 2.249035294117507 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.5079006642716,
            "unit": "iter/sec",
            "range": "stddev: 0.00008402775569125939",
            "extra": "mean: 2.180987499999961 msec\nrounds: 480"
          }
        ]
      },
      {
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
        "date": 1649690973833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.89079026644231,
            "unit": "iter/sec",
            "range": "stddev: 0.000287117327317958",
            "extra": "mean: 7.880792592592603 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.4478899878885,
            "unit": "iter/sec",
            "range": "stddev: 0.0003635229956421522",
            "extra": "mean: 6.736370588235291 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.10002150999867,
            "unit": "iter/sec",
            "range": "stddev: 0.00018163685183884276",
            "extra": "mean: 4.6490000000000755 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.1738667015718,
            "unit": "iter/sec",
            "range": "stddev: 0.00006464316151998772",
            "extra": "mean: 3.0471652421652453 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.1594775584431,
            "unit": "iter/sec",
            "range": "stddev: 0.0006056529239513882",
            "extra": "mean: 9.693728813559263 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.63041833357366,
            "unit": "iter/sec",
            "range": "stddev: 0.00019493358776050696",
            "extra": "mean: 7.060630136986249 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.5458676509718,
            "unit": "iter/sec",
            "range": "stddev: 0.00021842322033640798",
            "extra": "mean: 5.011379146919308 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.28274784142224,
            "unit": "iter/sec",
            "range": "stddev: 0.00018985148365915577",
            "extra": "mean: 3.1818482142855977 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.277366486000435,
            "unit": "iter/sec",
            "range": "stddev: 0.0024042609531347648",
            "extra": "mean: 81.45069230769272 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.771881425852895,
            "unit": "iter/sec",
            "range": "stddev: 0.001679589281295893",
            "extra": "mean: 78.29699999999968 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.26533027075916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003550925159943622",
            "extra": "mean: 6.087711864406788 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.87096492171145,
            "unit": "iter/sec",
            "range": "stddev: 0.00023325514052633121",
            "extra": "mean: 4.2396061776061025 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.44505214029886,
            "unit": "iter/sec",
            "range": "stddev: 0.0001175992690348422",
            "extra": "mean: 2.130174757281581 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.87040977829645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008841118257552519",
            "extra": "mean: 2.188804480651889 msec\nrounds: 491"
          }
        ]
      },
      {
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
        "date": 1649777714326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.04030608038731,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007967995232036",
            "extra": "mean: 8.471682539682542 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.97577314433764,
            "unit": "iter/sec",
            "range": "stddev: 0.0003095333193132926",
            "extra": "mean: 6.6677435897436155 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.24518160178064,
            "unit": "iter/sec",
            "range": "stddev: 0.00019930705433258817",
            "extra": "mean: 4.779082568807358 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.471266235846,
            "unit": "iter/sec",
            "range": "stddev: 0.0002204275621391362",
            "extra": "mean: 3.1204045584045126 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.47713821181097,
            "unit": "iter/sec",
            "range": "stddev: 0.00045473429073476996",
            "extra": "mean: 8.970449152542475 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.56405631984876,
            "unit": "iter/sec",
            "range": "stddev: 0.0003591364032056563",
            "extra": "mean: 7.0639399999997705 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.7023294229213,
            "unit": "iter/sec",
            "range": "stddev: 0.00022114696298440367",
            "extra": "mean: 4.957800947867292 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.9159827942184,
            "unit": "iter/sec",
            "range": "stddev: 0.00014606335179546037",
            "extra": "mean: 3.1064005934717445 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.146581204567061,
            "unit": "iter/sec",
            "range": "stddev: 0.001864262069587436",
            "extra": "mean: 82.32769230769267 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.754664037243773,
            "unit": "iter/sec",
            "range": "stddev: 0.0021820424447684516",
            "extra": "mean: 78.40269230769135 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.40370224719365,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000241354086148",
            "extra": "mean: 5.938111731843856 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.04605869096503,
            "unit": "iter/sec",
            "range": "stddev: 0.00018438705717930068",
            "extra": "mean: 4.0642796934861884 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.9411551682886,
            "unit": "iter/sec",
            "range": "stddev: 0.00012332285362790822",
            "extra": "mean: 2.0966947162426153 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 470.87243508992196,
            "unit": "iter/sec",
            "range": "stddev: 0.00010994028278915129",
            "extra": "mean: 2.123717434869661 msec\nrounds: 499"
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
        "date": 1649968828355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.29609488016459,
            "unit": "iter/sec",
            "range": "stddev: 0.0009939312947748078",
            "extra": "mean: 9.066504132231412 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.6739097091315,
            "unit": "iter/sec",
            "range": "stddev: 0.0004113346487922673",
            "extra": "mean: 7.108638709677431 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.53509679648982,
            "unit": "iter/sec",
            "range": "stddev: 0.00018023691201147953",
            "extra": "mean: 4.749801886792457 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.7561117419614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007987192028835912",
            "extra": "mean: 3.0417685459940396 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.69886035523109,
            "unit": "iter/sec",
            "range": "stddev: 0.0003170705189789505",
            "extra": "mean: 9.033516666666793 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.60527505609915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004875292761257086",
            "extra": "mean: 7.267163265305914 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.66903751509565,
            "unit": "iter/sec",
            "range": "stddev: 0.00021250426096481757",
            "extra": "mean: 5.084684466019433 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.03469217425265,
            "unit": "iter/sec",
            "range": "stddev: 0.00016396919377879295",
            "extra": "mean: 3.13445535714283 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.08707529039191,
            "unit": "iter/sec",
            "range": "stddev: 0.002275677444923157",
            "extra": "mean: 82.73300000000052 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.715615264606878,
            "unit": "iter/sec",
            "range": "stddev: 0.001144898075187747",
            "extra": "mean: 78.64346153846267 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.34689502791093,
            "unit": "iter/sec",
            "range": "stddev: 0.0006247848667517652",
            "extra": "mean: 6.315248554913158 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.00634000414306,
            "unit": "iter/sec",
            "range": "stddev: 0.0003015169887450626",
            "extra": "mean: 4.4641593625497595 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.44014435275994,
            "unit": "iter/sec",
            "range": "stddev: 0.000133046017177432",
            "extra": "mean: 2.1671283095723113 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.88755606170656,
            "unit": "iter/sec",
            "range": "stddev: 0.00010920938844738249",
            "extra": "mean: 2.188722338204679 msec\nrounds: 479"
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
        "date": 1671164260256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.83386855671601,
            "unit": "iter/sec",
            "range": "stddev: 0.0003808723339230972",
            "extra": "mean: 9.022512820512793 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.31277580495805,
            "unit": "iter/sec",
            "range": "stddev: 0.0002098590632073111",
            "extra": "mean: 6.9777449664428595 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.33087149187938,
            "unit": "iter/sec",
            "range": "stddev: 0.00024680224984060747",
            "extra": "mean: 5.3098039215685295 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.11610684315855,
            "unit": "iter/sec",
            "range": "stddev: 0.00022870281224940059",
            "extra": "mean: 3.3884968553460104 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.38911026655683,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116785881437093",
            "extra": "mean: 9.766663636363566 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.6654912208001,
            "unit": "iter/sec",
            "range": "stddev: 0.0004675205277068749",
            "extra": "mean: 7.712152173913073 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.4153593951087,
            "unit": "iter/sec",
            "range": "stddev: 0.00030397637560806133",
            "extra": "mean: 5.512212435233098 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.2388028170929,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639112480803497",
            "extra": "mean: 3.505834374999961 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.54038123649416,
            "unit": "iter/sec",
            "range": "stddev: 0.0025321195981019102",
            "extra": "mean: 86.65224999999991 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.99662894726572,
            "unit": "iter/sec",
            "range": "stddev: 0.0012882368588681221",
            "extra": "mean: 83.35675000000069 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.3957516859552,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843076490242333",
            "extra": "mean: 6.519085365853449 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.97188804332825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508739465964658",
            "extra": "mean: 4.405831967213063 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 334.7202486597664,
            "unit": "iter/sec",
            "range": "stddev: 0.00021023478924091097",
            "extra": "mean: 2.9875694822886905 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.19444784150494,
            "unit": "iter/sec",
            "range": "stddev: 0.00019060407453031172",
            "extra": "mean: 3.0285185185185344 msec\nrounds: 351"
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
        "date": 1671168604107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.46864835392114,
            "unit": "iter/sec",
            "range": "stddev: 0.0020634001161712353",
            "extra": "mean: 9.759082568807333 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.3899538636117,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147437732813727",
            "extra": "mean: 7.975120567375862 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.21485677384925,
            "unit": "iter/sec",
            "range": "stddev: 0.0009063528261899074",
            "extra": "mean: 5.874927835051552 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.4774501334288,
            "unit": "iter/sec",
            "range": "stddev: 0.0011629047077908767",
            "extra": "mean: 3.8244215686274736 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.29341037949783,
            "unit": "iter/sec",
            "range": "stddev: 0.0031644753137096554",
            "extra": "mean: 11.58837037037056 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.22975720165043,
            "unit": "iter/sec",
            "range": "stddev: 0.001613083523018054",
            "extra": "mean: 8.678313868613074 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.44178686447805,
            "unit": "iter/sec",
            "range": "stddev: 0.0006887660756838403",
            "extra": "mean: 6.118386363636466 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.08016789307885,
            "unit": "iter/sec",
            "range": "stddev: 0.00032847403879168155",
            "extra": "mean: 3.412035714285583 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.952972499824323,
            "unit": "iter/sec",
            "range": "stddev: 0.005280442103707475",
            "extra": "mean: 91.29941666666645 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.879186632446673,
            "unit": "iter/sec",
            "range": "stddev: 0.007083059286393626",
            "extra": "mean: 91.91863636363641 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 134.7467883269395,
            "unit": "iter/sec",
            "range": "stddev: 0.0015944825825221045",
            "extra": "mean: 7.421327160493615 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.3390454210846,
            "unit": "iter/sec",
            "range": "stddev: 0.000352856406593814",
            "extra": "mean: 4.643839662447424 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 308.99398156103047,
            "unit": "iter/sec",
            "range": "stddev: 0.00043699734749955236",
            "extra": "mean: 3.2363089887641925 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 311.9285885626654,
            "unit": "iter/sec",
            "range": "stddev: 0.00037570813078583853",
            "extra": "mean: 3.205861971831105 msec\nrounds: 355"
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
        "date": 1671338635976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.99669576135796,
            "unit": "iter/sec",
            "range": "stddev: 0.0012133384474665946",
            "extra": "mean: 10.000330434782557 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.16307050738881,
            "unit": "iter/sec",
            "range": "stddev: 0.0007904032848881031",
            "extra": "mean: 8.119316901408428 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.89117206372424,
            "unit": "iter/sec",
            "range": "stddev: 0.0021375165553367335",
            "extra": "mean: 6.540600000000034 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.99736947607516,
            "unit": "iter/sec",
            "range": "stddev: 0.0004577413499679897",
            "extra": "mean: 3.816832214765107 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.32972930994289,
            "unit": "iter/sec",
            "range": "stddev: 0.0010366886060502831",
            "extra": "mean: 10.830747663551431 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 92.14576777901415,
            "unit": "iter/sec",
            "range": "stddev: 0.0038417817048567574",
            "extra": "mean: 10.852370370370348 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.6251687327035,
            "unit": "iter/sec",
            "range": "stddev: 0.0008644716814754942",
            "extra": "mean: 6.683367567567732 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 268.62440130337103,
            "unit": "iter/sec",
            "range": "stddev: 0.0008424530004457674",
            "extra": "mean: 3.722669999999925 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.389143299150048,
            "unit": "iter/sec",
            "range": "stddev: 0.004607238286521136",
            "extra": "mean: 87.80291666666696 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.860475471616247,
            "unit": "iter/sec",
            "range": "stddev: 0.008025252859228815",
            "extra": "mean: 92.07699999999915 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 134.20197569395498,
            "unit": "iter/sec",
            "range": "stddev: 0.0009310651433703909",
            "extra": "mean: 7.4514551282052714 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 206.6659151542551,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895648720366857",
            "extra": "mean: 4.838727272727105 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 291.6272886266344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005115039847358167",
            "extra": "mean: 3.4290343839539768 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 300.1285506358639,
            "unit": "iter/sec",
            "range": "stddev: 0.0005268932472727607",
            "extra": "mean: 3.3319056047195827 msec\nrounds: 339"
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
        "date": 1671350580464,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.01438980963093,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403829429020761",
            "extra": "mean: 9.52250450450448 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.62407422856253,
            "unit": "iter/sec",
            "range": "stddev: 0.00039691089015021454",
            "extra": "mean: 7.597394366197176 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.4790423683995,
            "unit": "iter/sec",
            "range": "stddev: 0.00027937405979470465",
            "extra": "mean: 5.634468085106436 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.2807533245645,
            "unit": "iter/sec",
            "range": "stddev: 0.00022792694949912414",
            "extra": "mean: 3.580626262626325 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.12926971864407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005725680495771333",
            "extra": "mean: 10.295557692307543 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.58217331795548,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325817200489499",
            "extra": "mean: 8.091781954887406 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.07738780883417,
            "unit": "iter/sec",
            "range": "stddev: 0.00034398598388999275",
            "extra": "mean: 5.8113387978142095 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.19522726012167,
            "unit": "iter/sec",
            "range": "stddev: 0.00020035288494148966",
            "extra": "mean: 3.5945979729730126 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.576195483354361,
            "unit": "iter/sec",
            "range": "stddev: 0.004354826201173274",
            "extra": "mean: 86.38416666666693 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.553859277845412,
            "unit": "iter/sec",
            "range": "stddev: 0.0016744990476574122",
            "extra": "mean: 86.5511666666657 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.32180355527146,
            "unit": "iter/sec",
            "range": "stddev: 0.00025942020555580383",
            "extra": "mean: 6.6523949044578385 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.6997250581821,
            "unit": "iter/sec",
            "range": "stddev: 0.0002691113349462505",
            "extra": "mean: 4.679463203463359 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 321.99980383917944,
            "unit": "iter/sec",
            "range": "stddev: 0.000240069178655386",
            "extra": "mean: 3.105591954023186 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 318.96716083987354,
            "unit": "iter/sec",
            "range": "stddev: 0.0001912348850448346",
            "extra": "mean: 3.135118980169923 msec\nrounds: 353"
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
        "date": 1671358295782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.50776092641401,
            "unit": "iter/sec",
            "range": "stddev: 0.0006080683597107152",
            "extra": "mean: 8.73303252032523 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.55446641678944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194870933747397",
            "extra": "mean: 7.431934640522806 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.17151461122384,
            "unit": "iter/sec",
            "range": "stddev: 0.00037305292731742843",
            "extra": "mean: 4.946295238095247 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.2847522986945,
            "unit": "iter/sec",
            "range": "stddev: 0.0010811459941048856",
            "extra": "mean: 3.3751314984709935 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.57275735094294,
            "unit": "iter/sec",
            "range": "stddev: 0.0004408187165430254",
            "extra": "mean: 9.043818965517298 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.58738189195688,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617706259770764",
            "extra": "mean: 7.113013888888779 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.6748408218525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022734104554858825",
            "extra": "mean: 4.983185714285638 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.3675515050317,
            "unit": "iter/sec",
            "range": "stddev: 0.00035110300712800946",
            "extra": "mean: 3.3403753846154305 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.304931343215722,
            "unit": "iter/sec",
            "range": "stddev: 0.0018850235256642818",
            "extra": "mean: 81.2682307692311 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.481204302570466,
            "unit": "iter/sec",
            "range": "stddev: 0.029289656529328346",
            "extra": "mean: 105.47183333333383 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.60887586992106,
            "unit": "iter/sec",
            "range": "stddev: 0.00032162913671812806",
            "extra": "mean: 6.038323699422118 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.56701698545643,
            "unit": "iter/sec",
            "range": "stddev: 0.0014446559091468396",
            "extra": "mean: 4.6823709677421705 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.5256636118392,
            "unit": "iter/sec",
            "range": "stddev: 0.0002311146997995707",
            "extra": "mean: 2.87748533333333 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 288.1278947970283,
            "unit": "iter/sec",
            "range": "stddev: 0.006791549266028281",
            "extra": "mean: 3.470680965147266 msec\nrounds: 373"
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
        "date": 1671363941060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.57491379032467,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324733246610815",
            "extra": "mean: 9.126176470588279 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.83190618053516,
            "unit": "iter/sec",
            "range": "stddev: 0.00046355499829094977",
            "extra": "mean: 7.362040540540547 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.03264853600777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002934253321340588",
            "extra": "mean: 5.262253658536564 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.3211656121735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002497113240356025",
            "extra": "mean: 3.3520920245398544 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.10821829263996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008217211486109115",
            "extra": "mean: 9.890392857143183 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.94790270445785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005380477495298389",
            "extra": "mean: 7.695391608391807 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.7773645372358,
            "unit": "iter/sec",
            "range": "stddev: 0.00038631057333486776",
            "extra": "mean: 5.501234999999998 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.4384214774297,
            "unit": "iter/sec",
            "range": "stddev: 0.00015501773276400371",
            "extra": "mean: 3.3064582043344237 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.489224433161462,
            "unit": "iter/sec",
            "range": "stddev: 0.0020634444690668793",
            "extra": "mean: 87.03807692307673 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.916656736119299,
            "unit": "iter/sec",
            "range": "stddev: 0.0016033301721807016",
            "extra": "mean: 83.91615384615446 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.0175367123084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005361543063989818",
            "extra": "mean: 6.801909638554564 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.2087768477012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002855916808754793",
            "extra": "mean: 4.362834677419245 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.63252448834805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001551100304738008",
            "extra": "mean: 2.827794195250695 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 345.13746292754786,
            "unit": "iter/sec",
            "range": "stddev: 0.0001905997548427843",
            "extra": "mean: 2.8973962765958055 msec\nrounds: 376"
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
        "date": 1671374436923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.54448843430558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007211653050447625",
            "extra": "mean: 8.365086614173263 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.4287227080303,
            "unit": "iter/sec",
            "range": "stddev: 0.0010091419139623646",
            "extra": "mean: 7.121050314465445 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.25208203267474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003030832160131872",
            "extra": "mean: 4.993705882352984 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.9678985852483,
            "unit": "iter/sec",
            "range": "stddev: 0.0001339172025088504",
            "extra": "mean: 3.115576368876037 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.78380429907178,
            "unit": "iter/sec",
            "range": "stddev: 0.0009273535564020623",
            "extra": "mean: 9.824745762711874 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.18675095896907,
            "unit": "iter/sec",
            "range": "stddev: 0.00036007062869440604",
            "extra": "mean: 7.082817567567757 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.59239148866055,
            "unit": "iter/sec",
            "range": "stddev: 0.00039208048358971596",
            "extra": "mean: 4.9605046728970885 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.8772038296377,
            "unit": "iter/sec",
            "range": "stddev: 0.0001727962161174887",
            "extra": "mean: 3.040648571428538 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.12846092629721,
            "unit": "iter/sec",
            "range": "stddev: 0.0029100255836393024",
            "extra": "mean: 82.4506923076923 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.387488255708211,
            "unit": "iter/sec",
            "range": "stddev: 0.004470001296391132",
            "extra": "mean: 80.72661538461563 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.22725876981426,
            "unit": "iter/sec",
            "range": "stddev: 0.0011308288975788708",
            "extra": "mean: 6.569125714285633 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.7790420862325,
            "unit": "iter/sec",
            "range": "stddev: 0.00016020552010622929",
            "extra": "mean: 4.035853846153697 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 365.7448227881363,
            "unit": "iter/sec",
            "range": "stddev: 0.00018824424318744204",
            "extra": "mean: 2.734146699266517 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 347.7691450011437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849925944014597",
            "extra": "mean: 2.875470737913541 msec\nrounds: 393"
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
        "date": 1671378346849,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.08144055954179,
            "unit": "iter/sec",
            "range": "stddev: 0.0006133293652658964",
            "extra": "mean: 9.60786086956522 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.76389146990329,
            "unit": "iter/sec",
            "range": "stddev: 0.00045621782404328085",
            "extra": "mean: 7.4758590604026995 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.7470704421374,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011155889645627",
            "extra": "mean: 5.502151960784253 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 280.61307620727143,
            "unit": "iter/sec",
            "range": "stddev: 0.00026855227711833883",
            "extra": "mean: 3.563625806451593 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.25284662677981,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236813353784766",
            "extra": "mean: 10.075277777777972 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.13513242487295,
            "unit": "iter/sec",
            "range": "stddev: 0.0005054000844072799",
            "extra": "mean: 7.804260869565269 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.00462321401696,
            "unit": "iter/sec",
            "range": "stddev: 0.00037086441329734973",
            "extra": "mean: 5.649569948186587 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.2494922675451,
            "unit": "iter/sec",
            "range": "stddev: 0.0002786730766337404",
            "extra": "mean: 3.5429647435896787 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.072798977836385,
            "unit": "iter/sec",
            "range": "stddev: 0.0017984746988564686",
            "extra": "mean: 82.83083333333312 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.507215023819901,
            "unit": "iter/sec",
            "range": "stddev: 0.003791191633246935",
            "extra": "mean: 86.90200000000026 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 143.48455357588517,
            "unit": "iter/sec",
            "range": "stddev: 0.0005872606232955157",
            "extra": "mean: 6.969391304347799 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.50422834464274,
            "unit": "iter/sec",
            "range": "stddev: 0.00028355408334468406",
            "extra": "mean: 4.474188284518732 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 333.5615273993763,
            "unit": "iter/sec",
            "range": "stddev: 0.00016915877341397667",
            "extra": "mean: 2.997947658402136 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.64786096573823,
            "unit": "iter/sec",
            "range": "stddev: 0.0002358125636482835",
            "extra": "mean: 3.1186860158310914 msec\nrounds: 379"
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
        "date": 1671379540797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.91653054094658,
            "unit": "iter/sec",
            "range": "stddev: 0.0005440407221308053",
            "extra": "mean: 8.339133858267697 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.43999044763035,
            "unit": "iter/sec",
            "range": "stddev: 0.00013804419926673764",
            "extra": "mean: 6.603275641025685 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.31418346837185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003276422959762409",
            "extra": "mean: 4.870584112149503 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.09230601096664,
            "unit": "iter/sec",
            "range": "stddev: 0.00007658660811758396",
            "extra": "mean: 3.085540697674452 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.20283008278246,
            "unit": "iter/sec",
            "range": "stddev: 0.00019085963953674445",
            "extra": "mean: 8.756350427350423 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.96361671263793,
            "unit": "iter/sec",
            "range": "stddev: 0.00027589981127447785",
            "extra": "mean: 6.994786666666641 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.6403374561239,
            "unit": "iter/sec",
            "range": "stddev: 0.00015569962865231174",
            "extra": "mean: 4.984042654028532 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.626754122458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002675978036180258",
            "extra": "mean: 3.148349397590291 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.8116549455275,
            "unit": "iter/sec",
            "range": "stddev: 0.001458541498277938",
            "extra": "mean: 78.05392857142911 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.116031913179249,
            "unit": "iter/sec",
            "range": "stddev: 0.0006684781469626012",
            "extra": "mean: 76.24257142857209 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.36858451483604,
            "unit": "iter/sec",
            "range": "stddev: 0.00013551803558446086",
            "extra": "mean: 5.939350282486242 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.65320815239193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000861882174996591",
            "extra": "mean: 4.021665384615229 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 366.7501007632018,
            "unit": "iter/sec",
            "range": "stddev: 0.000091390799740634",
            "extra": "mean: 2.726652284263901 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 365.435171616478,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365907125362454",
            "extra": "mean: 2.736463476070371 msec\nrounds: 397"
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
        "date": 1671419482944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.40738250931898,
            "unit": "iter/sec",
            "range": "stddev: 0.0002291663966334108",
            "extra": "mean: 8.44541935483877 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.8642260747994,
            "unit": "iter/sec",
            "range": "stddev: 0.0006672494108276693",
            "extra": "mean: 6.76296103896107 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.30995329615223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008468574618722177",
            "extra": "mean: 4.992263157894755 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6673702626096,
            "unit": "iter/sec",
            "range": "stddev: 0.0003378278941884849",
            "extra": "mean: 3.1678915662650886 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.96032968011106,
            "unit": "iter/sec",
            "range": "stddev: 0.00024301037274457852",
            "extra": "mean: 8.931735042734898 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.9806885228284,
            "unit": "iter/sec",
            "range": "stddev: 0.00044847440595490004",
            "extra": "mean: 7.093170068027255 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.58214306327622,
            "unit": "iter/sec",
            "range": "stddev: 0.00008318637877441129",
            "extra": "mean: 5.035699507389041 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.78830968489797,
            "unit": "iter/sec",
            "range": "stddev: 0.00008030561797361015",
            "extra": "mean: 3.1270686567165185 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.194721561674893,
            "unit": "iter/sec",
            "range": "stddev: 0.0024967059426578763",
            "extra": "mean: 82.00269230769172 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.850745021942675,
            "unit": "iter/sec",
            "range": "stddev: 0.001464582311156452",
            "extra": "mean: 77.81649999999983 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.64462055295138,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516219899331457",
            "extra": "mean: 6.148374269005934 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.92008635126865,
            "unit": "iter/sec",
            "range": "stddev: 0.00009922806582288045",
            "extra": "mean: 4.082964426877519 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 363.60119551326596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008872724464652279",
            "extra": "mean: 2.7502659846549244 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.55612978342566,
            "unit": "iter/sec",
            "range": "stddev: 0.00015860653218456065",
            "extra": "mean: 2.868978378378676 msec\nrounds: 370"
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
        "date": 1671424120363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.96394788053946,
            "unit": "iter/sec",
            "range": "stddev: 0.0004591665970242434",
            "extra": "mean: 8.623369747899169 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.95229477186646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003373061400161942",
            "extra": "mean: 6.581012820512844 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.09995690870602,
            "unit": "iter/sec",
            "range": "stddev: 0.00037148479389795204",
            "extra": "mean: 4.997502325581419 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.2136692366224,
            "unit": "iter/sec",
            "range": "stddev: 0.000352044812956689",
            "extra": "mean: 3.213226470588214 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.59741832645733,
            "unit": "iter/sec",
            "range": "stddev: 0.0004745689520812362",
            "extra": "mean: 9.20832203389841 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.43084842946512,
            "unit": "iter/sec",
            "range": "stddev: 0.0018775000962443673",
            "extra": "mean: 7.909462068965653 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.8047160974045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004103644924244004",
            "extra": "mean: 5.186595121951282 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.7367858288475,
            "unit": "iter/sec",
            "range": "stddev: 0.00021765729039205486",
            "extra": "mean: 3.2815204678362675 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.777421233965685,
            "unit": "iter/sec",
            "range": "stddev: 0.005561346212231996",
            "extra": "mean: 84.90823076923103 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.437882619169438,
            "unit": "iter/sec",
            "range": "stddev: 0.004537800755024042",
            "extra": "mean: 87.42876923077002 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 130.89481710741373,
            "unit": "iter/sec",
            "range": "stddev: 0.001754354710985716",
            "extra": "mean: 7.639721893490931 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 203.37520161841215,
            "unit": "iter/sec",
            "range": "stddev: 0.002015600386473473",
            "extra": "mean: 4.917020325203046 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.9895462055379,
            "unit": "iter/sec",
            "range": "stddev: 0.0003588915244558211",
            "extra": "mean: 3.04887765957437 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 301.87689735296686,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920407681137027",
            "extra": "mean: 3.312608579088313 msec\nrounds: 373"
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
        "date": 1671430067110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.08640040175567,
            "unit": "iter/sec",
            "range": "stddev: 0.0005640675280237012",
            "extra": "mean: 8.689123966942185 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.33557184957726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893629686513143",
            "extra": "mean: 7.125777070063739 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.11678790612575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005356250411339593",
            "extra": "mean: 5.073134615384645 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.90718994322333,
            "unit": "iter/sec",
            "range": "stddev: 0.00019450269910867846",
            "extra": "mean: 3.1856549707602135 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.40873109416407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128367188084938",
            "extra": "mean: 9.31023008849542 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.18823629748069,
            "unit": "iter/sec",
            "range": "stddev: 0.0010818159376661065",
            "extra": "mean: 7.924668965517229 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.0113731957265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013418954886175428",
            "extra": "mean: 4.999715686274616 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.22228630753824,
            "unit": "iter/sec",
            "range": "stddev: 0.0002713944199803668",
            "extra": "mean: 3.15236363636358 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.1590402464232,
            "unit": "iter/sec",
            "range": "stddev: 0.002313009504886635",
            "extra": "mean: 82.24333333333345 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.133324435562017,
            "unit": "iter/sec",
            "range": "stddev: 0.0023220661094127473",
            "extra": "mean: 82.41764285714329 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.76692947649454,
            "unit": "iter/sec",
            "range": "stddev: 0.0023236498630679605",
            "extra": "mean: 6.907654970760207 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.45150690177184,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272595712335989",
            "extra": "mean: 4.435543650793584 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.85731980213257,
            "unit": "iter/sec",
            "range": "stddev: 0.00042882717730843774",
            "extra": "mean: 2.858308068459354 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 344.53547205796747,
            "unit": "iter/sec",
            "range": "stddev: 0.0008242724680919019",
            "extra": "mean: 2.902458762886835 msec\nrounds: 388"
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
        "date": 1671438148732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.33908167461603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481621617645329",
            "extra": "mean: 8.74591596638655 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.7125299967049,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362213203340723",
            "extra": "mean: 6.910251655629061 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.3384278968081,
            "unit": "iter/sec",
            "range": "stddev: 0.00034132158544355096",
            "extra": "mean: 5.093246445497575 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.82956643217165,
            "unit": "iter/sec",
            "range": "stddev: 0.00017100971310218284",
            "extra": "mean: 3.206879999999992 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.64262648008807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006759566897578457",
            "extra": "mean: 9.289999999999832 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.78552253726406,
            "unit": "iter/sec",
            "range": "stddev: 0.00045245453780474445",
            "extra": "mean: 7.419194444444364 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.90568050493206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005547214566998591",
            "extra": "mean: 5.293647058823577 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.07249446276757,
            "unit": "iter/sec",
            "range": "stddev: 0.0005172888797619962",
            "extra": "mean: 3.3548885542168354 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.930283096440826,
            "unit": "iter/sec",
            "range": "stddev: 0.0023137993425178358",
            "extra": "mean: 83.82030769230707 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.541035715904933,
            "unit": "iter/sec",
            "range": "stddev: 0.0035586502158801523",
            "extra": "mean: 79.73823076923135 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.12651262561025,
            "unit": "iter/sec",
            "range": "stddev: 0.00031240980568371965",
            "extra": "mean: 6.019508771929995 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.51289087095006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012767999709502358",
            "extra": "mean: 4.073105882353175 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 367.14029313593784,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375481934900298",
            "extra": "mean: 2.7237544303799384 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 361.42020931770395,
            "unit": "iter/sec",
            "range": "stddev: 0.00009213372311583057",
            "extra": "mean: 2.766862433862842 msec\nrounds: 378"
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
        "date": 1671467382959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.06123003625997,
            "unit": "iter/sec",
            "range": "stddev: 0.00019490343637252697",
            "extra": "mean: 8.616141666666628 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.95261685969177,
            "unit": "iter/sec",
            "range": "stddev: 0.0001344896150694502",
            "extra": "mean: 6.946730263157934 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.77394381858022,
            "unit": "iter/sec",
            "range": "stddev: 0.00044462751222455683",
            "extra": "mean: 5.107932038834954 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.1619650651778,
            "unit": "iter/sec",
            "range": "stddev: 0.00022585210122279514",
            "extra": "mean: 3.22412195121945 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.13398574454517,
            "unit": "iter/sec",
            "range": "stddev: 0.00016843944242637233",
            "extra": "mean: 9.3341061946901 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.09481667912877,
            "unit": "iter/sec",
            "range": "stddev: 0.00021520345181189046",
            "extra": "mean: 7.241401408450813 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.50986374775064,
            "unit": "iter/sec",
            "range": "stddev: 0.00010251715430823201",
            "extra": "mean: 5.141127450980306 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.53649780577103,
            "unit": "iter/sec",
            "range": "stddev: 0.00007452568451654751",
            "extra": "mean: 3.159193353474224 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.3361662231973,
            "unit": "iter/sec",
            "range": "stddev: 0.0024317616938957435",
            "extra": "mean: 81.06246153846158 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.730856953153205,
            "unit": "iter/sec",
            "range": "stddev: 0.00127660979320453",
            "extra": "mean: 78.54930769230879 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.59522257553357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757391721441869",
            "extra": "mean: 6.226835294117575 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.2783720440274,
            "unit": "iter/sec",
            "range": "stddev: 0.0004937618810691073",
            "extra": "mean: 4.1967720000001805 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.4418363737619,
            "unit": "iter/sec",
            "range": "stddev: 0.00014237082133477318",
            "extra": "mean: 2.797657963446512 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 369.4748270248029,
            "unit": "iter/sec",
            "range": "stddev: 0.00016160620252994197",
            "extra": "mean: 2.70654433497541 msec\nrounds: 406"
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
        "date": 1671540738281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.36658477211832,
            "unit": "iter/sec",
            "range": "stddev: 0.0003725862029460307",
            "extra": "mean: 8.593532258064535 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.1379257334646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002953321113254524",
            "extra": "mean: 6.842850649350682 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.8220182585476,
            "unit": "iter/sec",
            "range": "stddev: 0.00040653964367299433",
            "extra": "mean: 5.213165876777235 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.016146244546,
            "unit": "iter/sec",
            "range": "stddev: 0.00012696731516737459",
            "extra": "mean: 3.1151081081080974 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.98877974485403,
            "unit": "iter/sec",
            "range": "stddev: 0.0004514556753330188",
            "extra": "mean: 9.175256410256448 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.37107478589783,
            "unit": "iter/sec",
            "range": "stddev: 0.00054246740126184",
            "extra": "mean: 7.33293333333331 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.91045058125394,
            "unit": "iter/sec",
            "range": "stddev: 0.00044900982951542596",
            "extra": "mean: 5.130561224489713 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.0731593791806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001618402967967059",
            "extra": "mean: 3.194141592920278 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.524422624117115,
            "unit": "iter/sec",
            "range": "stddev: 0.002370491826604918",
            "extra": "mean: 79.84399999999944 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.367077697592729,
            "unit": "iter/sec",
            "range": "stddev: 0.004933030607481446",
            "extra": "mean: 80.85984615384535 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.89119137553476,
            "unit": "iter/sec",
            "range": "stddev: 0.00019509234173937696",
            "extra": "mean: 5.920971910112643 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.06688633384252,
            "unit": "iter/sec",
            "range": "stddev: 0.00030766344291117585",
            "extra": "mean: 4.2722830882354295 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 354.0319138383093,
            "unit": "iter/sec",
            "range": "stddev: 0.0001714990234218242",
            "extra": "mean: 2.8246041131103006 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 368.4402946764888,
            "unit": "iter/sec",
            "range": "stddev: 0.00007707320021596182",
            "extra": "mean: 2.714143958868712 msec\nrounds: 389"
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
        "date": 1671541639291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.75764376832076,
            "unit": "iter/sec",
            "range": "stddev: 0.000697804145722236",
            "extra": "mean: 9.110982758620672 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.25337926427815,
            "unit": "iter/sec",
            "range": "stddev: 0.0004934608464035035",
            "extra": "mean: 7.393530612244825 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.74302777621148,
            "unit": "iter/sec",
            "range": "stddev: 0.00033630519787747353",
            "extra": "mean: 5.298208955223916 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.96000759722574,
            "unit": "iter/sec",
            "range": "stddev: 0.00040428381989491066",
            "extra": "mean: 3.378834890965768 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.54673761905173,
            "unit": "iter/sec",
            "range": "stddev: 0.00034167700155922354",
            "extra": "mean: 9.56510000000008 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.9604244382321,
            "unit": "iter/sec",
            "range": "stddev: 0.0002521002540404844",
            "extra": "mean: 7.355081481481458 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.86778739250454,
            "unit": "iter/sec",
            "range": "stddev: 0.0010750622449101287",
            "extra": "mean: 6.177881443298866 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 267.99671165448746,
            "unit": "iter/sec",
            "range": "stddev: 0.00048458230740956726",
            "extra": "mean: 3.7313890675242383 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.325553021605991,
            "unit": "iter/sec",
            "range": "stddev: 0.009501059440447759",
            "extra": "mean: 88.29590909090967 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.41361415896892,
            "unit": "iter/sec",
            "range": "stddev: 0.00231992289579332",
            "extra": "mean: 87.61466666666588 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.6065139496285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416810626215235",
            "extra": "mean: 6.7291801242236176 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.80173848363472,
            "unit": "iter/sec",
            "range": "stddev: 0.00023735427338445917",
            "extra": "mean: 4.4286638655462625 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 334.1823701861882,
            "unit": "iter/sec",
            "range": "stddev: 0.00022290028707880463",
            "extra": "mean: 2.992378082191632 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 341.6173961502226,
            "unit": "iter/sec",
            "range": "stddev: 0.00019840512111552524",
            "extra": "mean: 2.9272513966480225 msec\nrounds: 358"
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
        "date": 1671543949976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.57426195271961,
            "unit": "iter/sec",
            "range": "stddev: 0.00039928780880914223",
            "extra": "mean: 8.092300000000057 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.9934858623858,
            "unit": "iter/sec",
            "range": "stddev: 0.00018276743632131374",
            "extra": "mean: 6.410524096385532 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.42820318889756,
            "unit": "iter/sec",
            "range": "stddev: 0.00013558660696373195",
            "extra": "mean: 4.641917748917736 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.5207147622983,
            "unit": "iter/sec",
            "range": "stddev: 0.00010302182453104414",
            "extra": "mean: 2.989351498637607 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.1507130180456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006032426808142222",
            "extra": "mean: 8.996793388429703 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.75172109066264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005883105066863597",
            "extra": "mean: 7.1047088607596365 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.64167747908493,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263581114825482",
            "extra": "mean: 4.792906250000046 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.77438324356416,
            "unit": "iter/sec",
            "range": "stddev: 0.00018831365918520998",
            "extra": "mean: 3.069609065155848 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.591262438714379,
            "unit": "iter/sec",
            "range": "stddev: 0.0034235504437682735",
            "extra": "mean: 79.4201538461543 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.34365439178399,
            "unit": "iter/sec",
            "range": "stddev: 0.002612338840920172",
            "extra": "mean: 81.0132857142862 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.7945391914501,
            "unit": "iter/sec",
            "range": "stddev: 0.0006061698025144887",
            "extra": "mean: 6.587852272727382 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.92431892966243,
            "unit": "iter/sec",
            "range": "stddev: 0.0002810096362540517",
            "extra": "mean: 4.167980988593181 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.3967566754942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746385463791963",
            "extra": "mean: 2.8620757946209565 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 355.39735628447556,
            "unit": "iter/sec",
            "range": "stddev: 0.00019242241008198796",
            "extra": "mean: 2.813751937984469 msec\nrounds: 387"
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
        "date": 1671549289726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.40637303236898,
            "unit": "iter/sec",
            "range": "stddev: 0.0008059783629655009",
            "extra": "mean: 9.39793333333332 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.64974556461024,
            "unit": "iter/sec",
            "range": "stddev: 0.0004813652707587047",
            "extra": "mean: 7.109860000000001 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.3654983385552,
            "unit": "iter/sec",
            "range": "stddev: 0.0008862342059897736",
            "extra": "mean: 5.171553398058343 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.61190505025627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006201595242742025",
            "extra": "mean: 3.272123839009332 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.76512994166903,
            "unit": "iter/sec",
            "range": "stddev: 0.000570808932886782",
            "extra": "mean: 9.36635398230067 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.9244289066575,
            "unit": "iter/sec",
            "range": "stddev: 0.00030629144947297385",
            "extra": "mean: 7.250347222222435 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.76801096689883,
            "unit": "iter/sec",
            "range": "stddev: 0.0004766656928459354",
            "extra": "mean: 5.269592039800796 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.8061051680787,
            "unit": "iter/sec",
            "range": "stddev: 0.0002770936505321756",
            "extra": "mean: 3.324400611620695 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.995117986979352,
            "unit": "iter/sec",
            "range": "stddev: 0.002371790161076864",
            "extra": "mean: 83.36724999999963 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.961568400848677,
            "unit": "iter/sec",
            "range": "stddev: 0.0032948404478711324",
            "extra": "mean: 83.60107692307722 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.8985024597821,
            "unit": "iter/sec",
            "range": "stddev: 0.0006273963349277122",
            "extra": "mean: 6.671180722891484 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.18033430696173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002149365909424229",
            "extra": "mean: 4.288526315789507 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.18982175344763,
            "unit": "iter/sec",
            "range": "stddev: 0.00027699665708258924",
            "extra": "mean: 2.7918157894735733 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 316.5159007150384,
            "unit": "iter/sec",
            "range": "stddev: 0.0006046432384132168",
            "extra": "mean: 3.1593989361700574 msec\nrounds: 376"
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
        "date": 1671551518272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.38323363022789,
            "unit": "iter/sec",
            "range": "stddev: 0.0002507706155779121",
            "extra": "mean: 8.238370078740195 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.43827390227227,
            "unit": "iter/sec",
            "range": "stddev: 0.00038245171660172096",
            "extra": "mean: 6.691726114649633 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.15461055797425,
            "unit": "iter/sec",
            "range": "stddev: 0.00009209752232476429",
            "extra": "mean: 4.781152073732634 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.83399247966287,
            "unit": "iter/sec",
            "range": "stddev: 0.00007751463462674355",
            "extra": "mean: 3.0784955489613908 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.7857183494886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026642113362898",
            "extra": "mean: 8.788449152542475 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.30420403810083,
            "unit": "iter/sec",
            "range": "stddev: 0.00009172621478474551",
            "extra": "mean: 6.882113333333327 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.020065518488,
            "unit": "iter/sec",
            "range": "stddev: 0.00010737417118761201",
            "extra": "mean: 4.901478672985631 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.6109217245784,
            "unit": "iter/sec",
            "range": "stddev: 0.00008222458094685685",
            "extra": "mean: 3.0901305637981173 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.665854845684784,
            "unit": "iter/sec",
            "range": "stddev: 0.002659315259301251",
            "extra": "mean: 78.95242857142775 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.28690509068806,
            "unit": "iter/sec",
            "range": "stddev: 0.002031053400966996",
            "extra": "mean: 75.26207142857037 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.74325978091784,
            "unit": "iter/sec",
            "range": "stddev: 0.00041803559389313067",
            "extra": "mean: 5.822644808743223 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.70462340934185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003505695911243233",
            "extra": "mean: 4.020833976834055 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 363.73952692519396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003278995175607779",
            "extra": "mean: 2.7492200488996024 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 352.3747897917856,
            "unit": "iter/sec",
            "range": "stddev: 0.00024778285079945817",
            "extra": "mean: 2.8378874680305284 msec\nrounds: 391"
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
        "date": 1671589150287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.61822861088517,
            "unit": "iter/sec",
            "range": "stddev: 0.00017830782530912676",
            "extra": "mean: 8.222451612903177 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.09031158941448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005152314252756608",
            "extra": "mean: 6.79854430379741 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.85790588888418,
            "unit": "iter/sec",
            "range": "stddev: 0.00013501595219706452",
            "extra": "mean: 4.765129032258052 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.2868664981323,
            "unit": "iter/sec",
            "range": "stddev: 0.000051579530378800945",
            "extra": "mean: 3.0185319767442027 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.24238214789922,
            "unit": "iter/sec",
            "range": "stddev: 0.00039799701220148486",
            "extra": "mean: 8.90929059829043 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.01188834636508,
            "unit": "iter/sec",
            "range": "stddev: 0.00035702104763149034",
            "extra": "mean: 6.992425675675772 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.17146608849268,
            "unit": "iter/sec",
            "range": "stddev: 0.000059967897664215",
            "extra": "mean: 4.87397209302335 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.3572739448732,
            "unit": "iter/sec",
            "range": "stddev: 0.00011666890588317846",
            "extra": "mean: 3.0830201149426264 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.603641044042064,
            "unit": "iter/sec",
            "range": "stddev: 0.01054760844019527",
            "extra": "mean: 86.17984615384617 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.954194892161038,
            "unit": "iter/sec",
            "range": "stddev: 0.0017100049241626368",
            "extra": "mean: 77.19507142857093 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.22090507067807,
            "unit": "iter/sec",
            "range": "stddev: 0.000406283674102605",
            "extra": "mean: 6.0525028571428106 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.7903022801597,
            "unit": "iter/sec",
            "range": "stddev: 0.00012509887767319896",
            "extra": "mean: 4.05202307692296 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 378.05146603632704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000679972887100499",
            "extra": "mean: 2.645142500000013 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 377.89253114304387,
            "unit": "iter/sec",
            "range": "stddev: 0.00008481872148182742",
            "extra": "mean: 2.6462550000001706 msec\nrounds: 400"
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
        "date": 1672071992443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.48685158063518,
            "unit": "iter/sec",
            "range": "stddev: 0.0008452348787761852",
            "extra": "mean: 9.217706896551684 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.60317688431334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008740528296958273",
            "extra": "mean: 7.89869594594592 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.79773955866773,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980144739609718",
            "extra": "mean: 5.353383838383811 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.0774690876833,
            "unit": "iter/sec",
            "range": "stddev: 0.00028785723632976227",
            "extra": "mean: 3.423749196141501 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.10386924414111,
            "unit": "iter/sec",
            "range": "stddev: 0.0012166340390525855",
            "extra": "mean: 9.98962385321113 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.86716677739295,
            "unit": "iter/sec",
            "range": "stddev: 0.00029913307956736093",
            "extra": "mean: 7.526313868612932 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.42067299744056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519682820794712",
            "extra": "mean: 5.542602094241085 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.2574766090554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006720211348187537",
            "extra": "mean: 3.5554610389610666 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.388890812757511,
            "unit": "iter/sec",
            "range": "stddev: 0.005379974236730387",
            "extra": "mean: 96.2566666666671 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.49498733167578,
            "unit": "iter/sec",
            "range": "stddev: 0.005028304511975273",
            "extra": "mean: 95.28358333333269 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.05058513151,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091704266030095",
            "extra": "mean: 6.533787500000354 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 207.16344755238256,
            "unit": "iter/sec",
            "range": "stddev: 0.0005801319270104284",
            "extra": "mean: 4.827106382978802 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 330.29778323267146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003728547350646885",
            "extra": "mean: 3.027571030640465 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.0005059838514,
            "unit": "iter/sec",
            "range": "stddev: 0.000407042132593487",
            "extra": "mean: 3.115259887005621 msec\nrounds: 354"
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
        "date": 1672074707388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.47444726511257,
            "unit": "iter/sec",
            "range": "stddev: 0.00045569356889709633",
            "extra": "mean: 10.81379807692309 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.20729372711794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006117172616466689",
            "extra": "mean: 8.756008196721284 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.02904308250066,
            "unit": "iter/sec",
            "range": "stddev: 0.000206505891295476",
            "extra": "mean: 6.2100598802395295 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.2717138496907,
            "unit": "iter/sec",
            "range": "stddev: 0.0003382343372037967",
            "extra": "mean: 4.196889273356348 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 74.98653095191122,
            "unit": "iter/sec",
            "range": "stddev: 0.0012746430580151268",
            "extra": "mean: 13.335728260869928 msec\nrounds: 92"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.5208350121936,
            "unit": "iter/sec",
            "range": "stddev: 0.0003204930393211497",
            "extra": "mean: 9.38783478260876 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.8702228323458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899017165861978",
            "extra": "mean: 6.334316770186452 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.5661543946112,
            "unit": "iter/sec",
            "range": "stddev: 0.00038759943311957186",
            "extra": "mean: 4.191709433962307 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.290193754058263,
            "unit": "iter/sec",
            "range": "stddev: 0.0030470491171335373",
            "extra": "mean: 97.17989999999936 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.104155471721667,
            "unit": "iter/sec",
            "range": "stddev: 0.001891443777551475",
            "extra": "mean: 98.96918181818198 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 128.43070521300456,
            "unit": "iter/sec",
            "range": "stddev: 0.00032468062226586805",
            "extra": "mean: 7.786299999999865 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 193.13615052061306,
            "unit": "iter/sec",
            "range": "stddev: 0.00014802088867929577",
            "extra": "mean: 5.1776945812807424 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 286.946986544219,
            "unit": "iter/sec",
            "range": "stddev: 0.00013389320221692775",
            "extra": "mean: 3.4849642857144922 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 282.1459212640017,
            "unit": "iter/sec",
            "range": "stddev: 0.00014907108625773177",
            "extra": "mean: 3.5442653061226 msec\nrounds: 294"
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
        "date": 1672209678317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.2750626608526,
            "unit": "iter/sec",
            "range": "stddev: 0.001872288612433014",
            "extra": "mean: 10.175521367521299 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.6127609338245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008000044375171405",
            "extra": "mean: 7.484315068493183 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.12316250691566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005113081498838431",
            "extra": "mean: 5.431147208121847 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.78432744058713,
            "unit": "iter/sec",
            "range": "stddev: 0.000540952753521592",
            "extra": "mean: 3.924888198757786 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 82.158595823528,
            "unit": "iter/sec",
            "range": "stddev: 0.0017130484847697797",
            "extra": "mean: 12.171580952380724 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.29597088340213,
            "unit": "iter/sec",
            "range": "stddev: 0.0009213073622515071",
            "extra": "mean: 8.525442028985363 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.34572889203298,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587587168068489",
            "extra": "mean: 6.1219843749999265 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.4184668704944,
            "unit": "iter/sec",
            "range": "stddev: 0.00027960261359100667",
            "extra": "mean: 3.3736089743588793 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.986214132299722,
            "unit": "iter/sec",
            "range": "stddev: 0.004231526585338161",
            "extra": "mean: 91.0231666666661 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.005422757109965,
            "unit": "iter/sec",
            "range": "stddev: 0.003732280611650095",
            "extra": "mean: 83.29569230769242 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.09848243399506,
            "unit": "iter/sec",
            "range": "stddev: 0.0009169804840204467",
            "extra": "mean: 6.798166666666413 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 193.7792070106382,
            "unit": "iter/sec",
            "range": "stddev: 0.0009716343600972015",
            "extra": "mean: 5.1605123966943545 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 301.12184998316195,
            "unit": "iter/sec",
            "range": "stddev: 0.0003965079242917798",
            "extra": "mean: 3.3209147727271127 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 314.68650929944835,
            "unit": "iter/sec",
            "range": "stddev: 0.00035530144104335405",
            "extra": "mean: 3.1777657142855884 msec\nrounds: 350"
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
        "date": 1672216613131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.02122573520603,
            "unit": "iter/sec",
            "range": "stddev: 0.0009465227784268046",
            "extra": "mean: 10.635896226415099 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 120.50441517304635,
            "unit": "iter/sec",
            "range": "stddev: 0.0008259819176441047",
            "extra": "mean: 8.298451127819535 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.05729447369498,
            "unit": "iter/sec",
            "range": "stddev: 0.00046771616644941894",
            "extra": "mean: 6.326819672131154 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.09256997695812,
            "unit": "iter/sec",
            "range": "stddev: 0.00047737484714557675",
            "extra": "mean: 4.030753521126715 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.1815565334506,
            "unit": "iter/sec",
            "range": "stddev: 0.0007947454691602019",
            "extra": "mean: 11.213080808080711 msec\nrounds: 99"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.40732926702645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005382051887838275",
            "extra": "mean: 8.664960937500133 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.7274344467744,
            "unit": "iter/sec",
            "range": "stddev: 0.0005899033264129753",
            "extra": "mean: 6.340051136363681 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.02770697107562,
            "unit": "iter/sec",
            "range": "stddev: 0.000441480240576278",
            "extra": "mean: 3.9995567375886254 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.308582738559352,
            "unit": "iter/sec",
            "range": "stddev: 0.001752781239266761",
            "extra": "mean: 97.00654545454542 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.918093373354319,
            "unit": "iter/sec",
            "range": "stddev: 0.0035450670325333673",
            "extra": "mean: 91.59108333333243 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 129.40630675280303,
            "unit": "iter/sec",
            "range": "stddev: 0.0007429355017256153",
            "extra": "mean: 7.7275986394561045 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 195.09198013064344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773983460492967",
            "extra": "mean: 5.125787330316446 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 291.13028916012314,
            "unit": "iter/sec",
            "range": "stddev: 0.0003964453757475569",
            "extra": "mean: 3.4348882175224125 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 286.32609574291587,
            "unit": "iter/sec",
            "range": "stddev: 0.0003966177642509394",
            "extra": "mean: 3.492521341463308 msec\nrounds: 328"
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
        "date": 1672331134996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.42557392183056,
            "unit": "iter/sec",
            "range": "stddev: 0.00024055347535181093",
            "extra": "mean: 8.73930508474571 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.18563417093966,
            "unit": "iter/sec",
            "range": "stddev: 0.00011298897323113004",
            "extra": "mean: 6.840617449664494 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.60696273585592,
            "unit": "iter/sec",
            "range": "stddev: 0.0001400410932877089",
            "extra": "mean: 5.086289855072494 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.87284743751974,
            "unit": "iter/sec",
            "range": "stddev: 0.0001578004399684463",
            "extra": "mean: 3.2167492537314097 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.43030828353973,
            "unit": "iter/sec",
            "range": "stddev: 0.00041343508225596194",
            "extra": "mean: 9.395819819819668 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.05414598650864,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760744404397863",
            "extra": "mean: 7.243534722222143 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.0049903986507,
            "unit": "iter/sec",
            "range": "stddev: 0.0001009334623400344",
            "extra": "mean: 5.1280738916254895 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.99843052035294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001227879882017321",
            "extra": "mean: 3.215450310558902 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.358283757602743,
            "unit": "iter/sec",
            "range": "stddev: 0.005719593364603033",
            "extra": "mean: 80.91738461538448 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.035979302875965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006072394027963149",
            "extra": "mean: 76.71076923076907 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.0267785259423,
            "unit": "iter/sec",
            "range": "stddev: 0.00045087584547828937",
            "extra": "mean: 6.328041420118149 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.09000760793575,
            "unit": "iter/sec",
            "range": "stddev: 0.00021565427307049562",
            "extra": "mean: 4.27186111111092 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 361.59251127444264,
            "unit": "iter/sec",
            "range": "stddev: 0.0001584003172092999",
            "extra": "mean: 2.765544000000091 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 360.78094473739804,
            "unit": "iter/sec",
            "range": "stddev: 0.00010131536544566634",
            "extra": "mean: 2.771765013054863 msec\nrounds: 383"
          }
        ]
      }
    ]
  }
}