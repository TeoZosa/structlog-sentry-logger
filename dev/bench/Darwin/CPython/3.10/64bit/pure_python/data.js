window.BENCHMARK_DATA = {
  "lastUpdate": 1671424240298,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
        "date": 1647982260025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.72948130221292,
            "unit": "iter/sec",
            "range": "stddev: 0.00039069833867259537",
            "extra": "mean: 8.017350746268663 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.24268665815978,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900638820227407",
            "extra": "mean: 6.441527272727335 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.80534203915715,
            "unit": "iter/sec",
            "range": "stddev: 0.00026828447952147367",
            "extra": "mean: 4.766322869955163 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.8280394647972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944786375812379",
            "extra": "mean: 3.0503797101449033 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.61019024359948,
            "unit": "iter/sec",
            "range": "stddev: 0.00045190351162602657",
            "extra": "mean: 8.725227642276304 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.0426730963569,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911381131505783",
            "extra": "mean: 6.847313725490453 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.55719494583394,
            "unit": "iter/sec",
            "range": "stddev: 0.00020660500541913696",
            "extra": "mean: 4.888608294930895 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.9456745303726,
            "unit": "iter/sec",
            "range": "stddev: 0.00019526642040386248",
            "extra": "mean: 3.125530612244828 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.30949033208118,
            "unit": "iter/sec",
            "range": "stddev: 0.0027311309183939655",
            "extra": "mean: 75.13435714285777 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.422329771302639,
            "unit": "iter/sec",
            "range": "stddev: 0.001277425200495277",
            "extra": "mean: 74.50271428571449 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.5113206742585,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847896530388735",
            "extra": "mean: 5.830518918918722 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.58427846676486,
            "unit": "iter/sec",
            "range": "stddev: 0.0003835998889660115",
            "extra": "mean: 4.139342205323065 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.2298349424481,
            "unit": "iter/sec",
            "range": "stddev: 0.0003592344891043895",
            "extra": "mean: 2.261267605633483 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 410.0922065357979,
            "unit": "iter/sec",
            "range": "stddev: 0.0012236986833033853",
            "extra": "mean: 2.4384759916492285 msec\nrounds: 479"
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
        "date": 1647984253267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.50711749533298,
            "unit": "iter/sec",
            "range": "stddev: 0.00014529538439935033",
            "extra": "mean: 7.721583333333296 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.01759891135512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011834007361372923",
            "extra": "mean: 6.288612121212151 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.02971374718538,
            "unit": "iter/sec",
            "range": "stddev: 0.00008594355422766834",
            "extra": "mean: 4.544840707964571 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.8623306332569,
            "unit": "iter/sec",
            "range": "stddev: 0.00010167628119373932",
            "extra": "mean: 2.9166225352112285 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.63089960493502,
            "unit": "iter/sec",
            "range": "stddev: 0.00017848466149852167",
            "extra": "mean: 8.289749999999916 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.73114329085826,
            "unit": "iter/sec",
            "range": "stddev: 0.00012652524565488126",
            "extra": "mean: 6.634329032258122 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.91650647995837,
            "unit": "iter/sec",
            "range": "stddev: 0.0002488901519145324",
            "extra": "mean: 4.903967889908331 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.58268096606804,
            "unit": "iter/sec",
            "range": "stddev: 0.00006374235716770635",
            "extra": "mean: 3.0620117302053136 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.624455508367387,
            "unit": "iter/sec",
            "range": "stddev: 0.0011198976405343323",
            "extra": "mean: 73.39742857142843 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.933786645859035,
            "unit": "iter/sec",
            "range": "stddev: 0.0025066615818082967",
            "extra": "mean: 71.76799999999919 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.1328023371039,
            "unit": "iter/sec",
            "range": "stddev: 0.0001513779602153018",
            "extra": "mean: 5.613789189189141 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.89185551330277,
            "unit": "iter/sec",
            "range": "stddev: 0.00016161530046174413",
            "extra": "mean: 4.001731060605798 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 500.2811103382028,
            "unit": "iter/sec",
            "range": "stddev: 0.00004364562691519686",
            "extra": "mean: 1.9988761904761398 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 481.5389293528681,
            "unit": "iter/sec",
            "range": "stddev: 0.00004916833429351611",
            "extra": "mean: 2.076675298804777 msec\nrounds: 502"
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
        "date": 1647985865328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.9941733108133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007342630220238601",
            "extra": "mean: 7.692652482269504 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.72799006107962,
            "unit": "iter/sec",
            "range": "stddev: 0.0004131114575161967",
            "extra": "mean: 6.183221590909101 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.4995390901638,
            "unit": "iter/sec",
            "range": "stddev: 0.00036543717433877083",
            "extra": "mean: 4.474282157676315 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 349.9001593786067,
            "unit": "iter/sec",
            "range": "stddev: 0.0002053265968266083",
            "extra": "mean: 2.857958115183245 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.45099472602277,
            "unit": "iter/sec",
            "range": "stddev: 0.00030513754666465753",
            "extra": "mean: 8.035291338582603 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.82234457142692,
            "unit": "iter/sec",
            "range": "stddev: 0.00023633348323918394",
            "extra": "mean: 6.5010060975611585 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.92218409650079,
            "unit": "iter/sec",
            "range": "stddev: 0.00016226759135050305",
            "extra": "mean: 4.609948051948142 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.3242153242955,
            "unit": "iter/sec",
            "range": "stddev: 0.00012506790191199065",
            "extra": "mean: 2.8874677419354207 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.978702049557352,
            "unit": "iter/sec",
            "range": "stddev: 0.0019725966136035656",
            "extra": "mean: 71.5373999999997 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.456173219649797,
            "unit": "iter/sec",
            "range": "stddev: 0.0021988600553141478",
            "extra": "mean: 69.17460000000091 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.20083608666656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002637493822076989",
            "extra": "mean: 5.6753419689117575 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.62363143215444,
            "unit": "iter/sec",
            "range": "stddev: 0.00036437136191909566",
            "extra": "mean: 4.0712695035461905 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 519.2802103312285,
            "unit": "iter/sec",
            "range": "stddev: 0.00014882495991775958",
            "extra": "mean: 1.9257425569176594 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 485.4613485749516,
            "unit": "iter/sec",
            "range": "stddev: 0.00021210127628918656",
            "extra": "mean: 2.0598962264152476 msec\nrounds: 530"
          }
        ]
      },
      {
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
        "date": 1648221539551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.9235316704424,
            "unit": "iter/sec",
            "range": "stddev: 0.00025351165702494844",
            "extra": "mean: 8.069492424242414 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.9617679887449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003726572353451932",
            "extra": "mean: 6.62419375000004 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.00359425867327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398073919073386",
            "extra": "mean: 4.9018744186046845 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.43484369107176,
            "unit": "iter/sec",
            "range": "stddev: 0.0001478451061069833",
            "extra": "mean: 3.1014017857142964 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.18245483312448,
            "unit": "iter/sec",
            "range": "stddev: 0.00047460457483141684",
            "extra": "mean: 8.835291666666834 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.4829278958386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006130130232890414",
            "extra": "mean: 7.663837837837882 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.03131832899973,
            "unit": "iter/sec",
            "range": "stddev: 0.000237980954490069",
            "extra": "mean: 5.0243349056604 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6468746162322,
            "unit": "iter/sec",
            "range": "stddev: 0.00018367129048875252",
            "extra": "mean: 3.168097264437716 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.806589893559018,
            "unit": "iter/sec",
            "range": "stddev: 0.0043301291092262256",
            "extra": "mean: 84.69846153846177 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.329093412190796,
            "unit": "iter/sec",
            "range": "stddev: 0.0014717669055178228",
            "extra": "mean: 75.0238571428571 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.59664750505527,
            "unit": "iter/sec",
            "range": "stddev: 0.0004006008983944414",
            "extra": "mean: 6.18824719101129 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.89797588343538,
            "unit": "iter/sec",
            "range": "stddev: 0.00020965693294688916",
            "extra": "mean: 4.151134920634931 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.51965590318775,
            "unit": "iter/sec",
            "range": "stddev: 0.00012212906275912842",
            "extra": "mean: 2.1952949494950698 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.1208839308432,
            "unit": "iter/sec",
            "range": "stddev: 0.00013289471553022707",
            "extra": "mean: 2.2265720338980777 msec\nrounds: 472"
          }
        ]
      },
      {
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
        "date": 1648488087767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.65753046294464,
            "unit": "iter/sec",
            "range": "stddev: 0.0012847572638614545",
            "extra": "mean: 9.119300751879681 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.72189475855265,
            "unit": "iter/sec",
            "range": "stddev: 0.0004403178053336839",
            "extra": "mean: 6.591006535947769 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.66439779916996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003263806131107589",
            "extra": "mean: 4.934265765765869 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.32526051856985,
            "unit": "iter/sec",
            "range": "stddev: 0.00021913622079349846",
            "extra": "mean: 3.181417867435193 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.97691125361281,
            "unit": "iter/sec",
            "range": "stddev: 0.0007957671863337606",
            "extra": "mean: 9.010883333333405 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.06101225582447,
            "unit": "iter/sec",
            "range": "stddev: 0.00029688676575059553",
            "extra": "mean: 6.941503355704552 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.36850438005501,
            "unit": "iter/sec",
            "range": "stddev: 0.0003371735154757208",
            "extra": "mean: 5.092466346153875 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.3032286936957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007866958535767964",
            "extra": "mean: 3.6589395770393516 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.937601240041385,
            "unit": "iter/sec",
            "range": "stddev: 0.005723653967841491",
            "extra": "mean: 83.76892307692238 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.181031002464156,
            "unit": "iter/sec",
            "range": "stddev: 0.006325744612383794",
            "extra": "mean: 82.09485714285643 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.47986089019892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007798212128714332",
            "extra": "mean: 6.43170114942544 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.71737059913528,
            "unit": "iter/sec",
            "range": "stddev: 0.0004232614418659672",
            "extra": "mean: 4.2244470588237135 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.96722890393454,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517844571047099",
            "extra": "mean: 2.2423172268906986 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.575166988107,
            "unit": "iter/sec",
            "range": "stddev: 0.00012826714337347327",
            "extra": "mean: 2.3117369565218095 msec\nrounds: 460"
          }
        ]
      },
      {
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
        "date": 1648489889495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.4300056412366,
            "unit": "iter/sec",
            "range": "stddev: 0.00045968127397229264",
            "extra": "mean: 8.235196850393693 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.39404665068747,
            "unit": "iter/sec",
            "range": "stddev: 0.00046154341696306593",
            "extra": "mean: 6.738814814814994 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.0026894795586,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289481086056827",
            "extra": "mean: 4.854305555555521 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.923678793381,
            "unit": "iter/sec",
            "range": "stddev: 0.00012092643110359746",
            "extra": "mean: 3.0967069486404513 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.82126000333244,
            "unit": "iter/sec",
            "range": "stddev: 0.000400282118114486",
            "extra": "mean: 8.709188524590108 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.86481345115678,
            "unit": "iter/sec",
            "range": "stddev: 0.00023379485337881903",
            "extra": "mean: 6.999624161073673 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.54720102081427,
            "unit": "iter/sec",
            "range": "stddev: 0.00025380312646986034",
            "extra": "mean: 5.062081339713016 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.8194157218006,
            "unit": "iter/sec",
            "range": "stddev: 0.00015484766769012276",
            "extra": "mean: 3.196732522796248 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.104687734012195,
            "unit": "iter/sec",
            "range": "stddev: 0.0021098818674286954",
            "extra": "mean: 76.30857142857194 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.426886765309604,
            "unit": "iter/sec",
            "range": "stddev: 0.001644308117968295",
            "extra": "mean: 74.47742857142815 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.37543043700026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646505801802023",
            "extra": "mean: 6.010502857143081 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.50402729902137,
            "unit": "iter/sec",
            "range": "stddev: 0.00022608484689719092",
            "extra": "mean: 4.123642857142915 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.5378716480966,
            "unit": "iter/sec",
            "range": "stddev: 0.00011085193860410007",
            "extra": "mean: 2.148052953156746 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.71658746414937,
            "unit": "iter/sec",
            "range": "stddev: 0.00011750953923792416",
            "extra": "mean: 2.228578189300604 msec\nrounds: 486"
          }
        ]
      },
      {
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
        "date": 1648490831140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.85012285012291,
            "unit": "iter/sec",
            "range": "stddev: 0.0004072502349245539",
            "extra": "mean: 8.139999999999997 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.2351778547619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004336124423637608",
            "extra": "mean: 6.746037037037063 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.9962531302353,
            "unit": "iter/sec",
            "range": "stddev: 0.00013319061866092768",
            "extra": "mean: 4.784774774774807 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.5129393725184,
            "unit": "iter/sec",
            "range": "stddev: 0.00011017014092423905",
            "extra": "mean: 3.0720744985673076 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.06786755306626,
            "unit": "iter/sec",
            "range": "stddev: 0.00047319769367601075",
            "extra": "mean: 8.766710743801566 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.4273913367969,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849524698044546",
            "extra": "mean: 6.972168918918668 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.40592678098474,
            "unit": "iter/sec",
            "range": "stddev: 0.00032971672571739316",
            "extra": "mean: 5.0657040358745995 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.3993991892771,
            "unit": "iter/sec",
            "range": "stddev: 0.0001724392989943847",
            "extra": "mean: 3.1806676557863662 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.795930500379875,
            "unit": "iter/sec",
            "range": "stddev: 0.0021124921240942064",
            "extra": "mean: 78.14984615384655 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.025764030841206,
            "unit": "iter/sec",
            "range": "stddev: 0.0022614450269438967",
            "extra": "mean: 76.77092857142905 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.29082837116084,
            "unit": "iter/sec",
            "range": "stddev: 0.000279991851400725",
            "extra": "mean: 6.086767045454481 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.76796362885233,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217334377705722",
            "extra": "mean: 4.390433070866362 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.6831490806433,
            "unit": "iter/sec",
            "range": "stddev: 0.00012015305149550098",
            "extra": "mean: 2.184917670682695 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.1448739755063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008871786982228393",
            "extra": "mean: 2.2364116379309715 msec\nrounds: 464"
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
        "date": 1648605070664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.90146849834079,
            "unit": "iter/sec",
            "range": "stddev: 0.00040111612662988244",
            "extra": "mean: 7.818518518518593 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.05454019669924,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896244532527269",
            "extra": "mean: 6.449343558282259 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.765462187575,
            "unit": "iter/sec",
            "range": "stddev: 0.00033877957272380614",
            "extra": "mean: 4.722205357142858 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.27145999560094,
            "unit": "iter/sec",
            "range": "stddev: 0.00022323299134101833",
            "extra": "mean: 2.9915805555555357 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.42274401552983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561305669466058",
            "extra": "mean: 8.516237704918089 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.36898801163363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597740257564464",
            "extra": "mean: 6.926695364238595 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.67814060470366,
            "unit": "iter/sec",
            "range": "stddev: 0.00042754722146225215",
            "extra": "mean: 4.933931192660608 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.5463855275989,
            "unit": "iter/sec",
            "range": "stddev: 0.00019872702527414906",
            "extra": "mean: 3.062352071006104 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.34351546205514,
            "unit": "iter/sec",
            "range": "stddev: 0.001927894324293371",
            "extra": "mean: 74.94276923076927 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.396719827933756,
            "unit": "iter/sec",
            "range": "stddev: 0.0036843399941255744",
            "extra": "mean: 80.66649999999852 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.39228980889226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006950195655772963",
            "extra": "mean: 6.009893854748541 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.47880962690698,
            "unit": "iter/sec",
            "range": "stddev: 0.00048582068744302035",
            "extra": "mean: 4.040750000000306 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 491.64493944441193,
            "unit": "iter/sec",
            "range": "stddev: 0.00009021624174415824",
            "extra": "mean: 2.033988188976499 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.19626416315276,
            "unit": "iter/sec",
            "range": "stddev: 0.00017914476236512947",
            "extra": "mean: 2.211429149797662 msec\nrounds: 494"
          }
        ]
      },
      {
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
        "date": 1648608136468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.05420329219359,
            "unit": "iter/sec",
            "range": "stddev: 0.00048191624282086464",
            "extra": "mean: 8.060992481202993 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.8303642198084,
            "unit": "iter/sec",
            "range": "stddev: 0.000308462416914214",
            "extra": "mean: 6.417234567901272 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.91625242303917,
            "unit": "iter/sec",
            "range": "stddev: 0.00020817601200123466",
            "extra": "mean: 4.809628820960752 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.2423680581167,
            "unit": "iter/sec",
            "range": "stddev: 0.000073339585731208",
            "extra": "mean: 2.974045197740096 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.37199429949003,
            "unit": "iter/sec",
            "range": "stddev: 0.0004962397855261296",
            "extra": "mean: 8.66761475409826 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.41814799602167,
            "unit": "iter/sec",
            "range": "stddev: 0.00027373333946377893",
            "extra": "mean: 6.87672077922047 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.90758475525905,
            "unit": "iter/sec",
            "range": "stddev: 0.0002938449550438555",
            "extra": "mean: 4.880248826291114 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.04494004173495,
            "unit": "iter/sec",
            "range": "stddev: 0.00012937885341572758",
            "extra": "mean: 3.124561194029803 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.591375301558633,
            "unit": "iter/sec",
            "range": "stddev: 0.0015003591602985188",
            "extra": "mean: 73.57607142857147 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.291004648054162,
            "unit": "iter/sec",
            "range": "stddev: 0.002241461640473384",
            "extra": "mean: 75.23885714285734 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.42734855033092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002698014756694599",
            "extra": "mean: 5.766103260869416 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.0362227195531,
            "unit": "iter/sec",
            "range": "stddev: 0.00020885639374492124",
            "extra": "mean: 4.031669201520897 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.98441954967024,
            "unit": "iter/sec",
            "range": "stddev: 0.00013205234498162553",
            "extra": "mean: 2.18348039215676 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 463.2156940859548,
            "unit": "iter/sec",
            "range": "stddev: 0.00008380533352357356",
            "extra": "mean: 2.1588215010142533 msec\nrounds: 493"
          }
        ]
      },
      {
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
        "date": 1648614663078,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.89166185129143,
            "unit": "iter/sec",
            "range": "stddev: 0.0004497663571551654",
            "extra": "mean: 7.88073846153842 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.52663080536195,
            "unit": "iter/sec",
            "range": "stddev: 0.00036338843444136155",
            "extra": "mean: 6.599500000000091 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.95638009533096,
            "unit": "iter/sec",
            "range": "stddev: 0.00016965217739790223",
            "extra": "mean: 4.740316455696202 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.07479078244904,
            "unit": "iter/sec",
            "range": "stddev: 0.00016006976560319907",
            "extra": "mean: 3.0574046920820055 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.09300758128981,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442341487728296",
            "extra": "mean: 9.083229007633623 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.54520294191508,
            "unit": "iter/sec",
            "range": "stddev: 0.00025611543841123343",
            "extra": "mean: 6.642523178807832 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.37585429414233,
            "unit": "iter/sec",
            "range": "stddev: 0.0003048270487664065",
            "extra": "mean: 4.9170045454545495 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.6203000032369,
            "unit": "iter/sec",
            "range": "stddev: 0.00010932109135630615",
            "extra": "mean: 3.1385319767442343 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.163116614043913,
            "unit": "iter/sec",
            "range": "stddev: 0.0017382666638073563",
            "extra": "mean: 70.60592857142873 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.605516220496613,
            "unit": "iter/sec",
            "range": "stddev: 0.0010838467076636177",
            "extra": "mean: 73.49959999999905 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.04328667064183,
            "unit": "iter/sec",
            "range": "stddev: 0.0004169999318763458",
            "extra": "mean: 6.133340540540414 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.48322975561592,
            "unit": "iter/sec",
            "range": "stddev: 0.0002820649062115295",
            "extra": "mean: 4.107059040590597 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.57298224357197,
            "unit": "iter/sec",
            "range": "stddev: 0.00017021651919764877",
            "extra": "mean: 2.175932960893693 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.25398167385424,
            "unit": "iter/sec",
            "range": "stddev: 0.00006270173502724723",
            "extra": "mean: 2.2259123809524115 msec\nrounds: 525"
          }
        ]
      },
      {
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
        "date": 1648735237241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.43628553301583,
            "unit": "iter/sec",
            "range": "stddev: 0.0009639218142396397",
            "extra": "mean: 8.662787401574793 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.15804981340938,
            "unit": "iter/sec",
            "range": "stddev: 0.0004245583287844612",
            "extra": "mean: 6.486849056603824 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.29942120509475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005678243770099501",
            "extra": "mean: 5.0175760368662665 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.28964297531695,
            "unit": "iter/sec",
            "range": "stddev: 0.00037148820322284524",
            "extra": "mean: 3.131952513966468 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.57507876217224,
            "unit": "iter/sec",
            "range": "stddev: 0.0007660131554627891",
            "extra": "mean: 9.210216666666623 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.67868278314882,
            "unit": "iter/sec",
            "range": "stddev: 0.0005014347832255013",
            "extra": "mean: 7.159288590604052 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.68366234304986,
            "unit": "iter/sec",
            "range": "stddev: 0.00022323256659341617",
            "extra": "mean: 4.982966666666636 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.87260599156036,
            "unit": "iter/sec",
            "range": "stddev: 0.00018194703269619797",
            "extra": "mean: 3.1459143730886656 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.024176592949836,
            "unit": "iter/sec",
            "range": "stddev: 0.002475053019745384",
            "extra": "mean: 76.78028571428567 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.225089127654147,
            "unit": "iter/sec",
            "range": "stddev: 0.002025162894005103",
            "extra": "mean: 75.61385714285761 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.09167844043802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005730381310516214",
            "extra": "mean: 6.406491428571469 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.15371171383498,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336910390901316",
            "extra": "mean: 4.28901599999989 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.185250571527,
            "unit": "iter/sec",
            "range": "stddev: 0.0001294693318382763",
            "extra": "mean: 2.2017447698745025 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.44332922132907,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716500407875957",
            "extra": "mean: 2.350489316239269 msec\nrounds: 468"
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
        "date": 1648765593396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.77629183917938,
            "unit": "iter/sec",
            "range": "stddev: 0.0008778951996123186",
            "extra": "mean: 8.348897637795258 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.66214150635727,
            "unit": "iter/sec",
            "range": "stddev: 0.0004039911946780096",
            "extra": "mean: 6.550412499999925 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.30292959537437,
            "unit": "iter/sec",
            "range": "stddev: 0.0003620640236516663",
            "extra": "mean: 4.847240909090908 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.68125431628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967874603152317",
            "extra": "mean: 3.15774927113705 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.03956980905741,
            "unit": "iter/sec",
            "range": "stddev: 0.0004239609564121962",
            "extra": "mean: 8.692661157024485 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.32700383797746,
            "unit": "iter/sec",
            "range": "stddev: 0.0004071149745602617",
            "extra": "mean: 6.977052287581758 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.45471575850584,
            "unit": "iter/sec",
            "range": "stddev: 0.0003671470645135154",
            "extra": "mean: 5.19602752293589 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.34167576984663,
            "unit": "iter/sec",
            "range": "stddev: 0.00011752809602520095",
            "extra": "mean: 3.161138972809725 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.214291444973327,
            "unit": "iter/sec",
            "range": "stddev: 0.0010231745175707091",
            "extra": "mean: 75.67564285714289 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.078649261908183,
            "unit": "iter/sec",
            "range": "stddev: 0.009967530675058667",
            "extra": "mean: 82.79071428571478 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.3814599630787,
            "unit": "iter/sec",
            "range": "stddev: 0.00039268126852050344",
            "extra": "mean: 6.083411111110751 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.27066770102334,
            "unit": "iter/sec",
            "range": "stddev: 0.00020426008455011254",
            "extra": "mean: 4.161972868216826 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.0661672373923,
            "unit": "iter/sec",
            "range": "stddev: 0.00017619194489734374",
            "extra": "mean: 2.2071831275718097 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.7698656900242,
            "unit": "iter/sec",
            "range": "stddev: 0.00017189001287744326",
            "extra": "mean: 2.30536991869926 msec\nrounds: 492"
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
        "date": 1648768069285,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.00946755635825,
            "unit": "iter/sec",
            "range": "stddev: 0.0004139284364288987",
            "extra": "mean: 8.196085271317841 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.28451312880247,
            "unit": "iter/sec",
            "range": "stddev: 0.00045057849563467955",
            "extra": "mean: 6.835993630573231 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.9870912569951,
            "unit": "iter/sec",
            "range": "stddev: 0.00011956896851118997",
            "extra": "mean: 4.8079906976744535 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.0699660513028,
            "unit": "iter/sec",
            "range": "stddev: 0.00009477510271797495",
            "extra": "mean: 3.1049154078549166 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.9071893415629,
            "unit": "iter/sec",
            "range": "stddev: 0.00038839014369215763",
            "extra": "mean: 8.856831932772986 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.83157015319858,
            "unit": "iter/sec",
            "range": "stddev: 0.00024842197860102636",
            "extra": "mean: 7.050616438356111 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.72528269287113,
            "unit": "iter/sec",
            "range": "stddev: 0.00018571140603850251",
            "extra": "mean: 5.109201970443356 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.7160497162703,
            "unit": "iter/sec",
            "range": "stddev: 0.00031072734877407457",
            "extra": "mean: 3.292549079754574 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.288292350025012,
            "unit": "iter/sec",
            "range": "stddev: 0.0008621986366321361",
            "extra": "mean: 75.25421428571428 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.178306248776424,
            "unit": "iter/sec",
            "range": "stddev: 0.0012780978913118255",
            "extra": "mean: 75.882285714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.58102238112022,
            "unit": "iter/sec",
            "range": "stddev: 0.0002963310118052239",
            "extra": "mean: 6.076034682080784 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.09033578949,
            "unit": "iter/sec",
            "range": "stddev: 0.00020166517301250592",
            "extra": "mean: 4.147822834645509 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.8491093258943,
            "unit": "iter/sec",
            "range": "stddev: 0.00009054906326071903",
            "extra": "mean: 2.155873493975846 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.7137978628341,
            "unit": "iter/sec",
            "range": "stddev: 0.00006758929485797206",
            "extra": "mean: 2.2537049891541385 msec\nrounds: 461"
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
        "date": 1648769031825,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.17162046802909,
            "unit": "iter/sec",
            "range": "stddev: 0.0007638659800983195",
            "extra": "mean: 8.462268656716494 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.2873329422698,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907866152714154",
            "extra": "mean: 6.882912499999927 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.67421868272163,
            "unit": "iter/sec",
            "range": "stddev: 0.00019604981700964652",
            "extra": "mean: 4.769303571428574 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.0066875645026,
            "unit": "iter/sec",
            "range": "stddev: 0.00012855359266827172",
            "extra": "mean: 3.039451895043767 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.98657716340526,
            "unit": "iter/sec",
            "range": "stddev: 0.0008561456839997298",
            "extra": "mean: 9.346966942148795 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.8909651822243,
            "unit": "iter/sec",
            "range": "stddev: 0.00027972099106279944",
            "extra": "mean: 6.9497066666666285 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.2902353873929,
            "unit": "iter/sec",
            "range": "stddev: 0.00019971407463267017",
            "extra": "mean: 4.992754629629559 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.94980529522496,
            "unit": "iter/sec",
            "range": "stddev: 0.0002624996049235847",
            "extra": "mean: 3.1852225519287796 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.185355966938758,
            "unit": "iter/sec",
            "range": "stddev: 0.0019530010606391868",
            "extra": "mean: 75.84171428571373 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.370247951248102,
            "unit": "iter/sec",
            "range": "stddev: 0.0036063874202975797",
            "extra": "mean: 74.79292857142943 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.170752820538,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466868146447543",
            "extra": "mean: 6.243337078651566 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.49953843151945,
            "unit": "iter/sec",
            "range": "stddev: 0.00020425133554727545",
            "extra": "mean: 4.024152343750032 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.2006882211014,
            "unit": "iter/sec",
            "range": "stddev: 0.00030115520455964537",
            "extra": "mean: 2.182449799196847 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.1060340410759,
            "unit": "iter/sec",
            "range": "stddev: 0.00032299698218792386",
            "extra": "mean: 2.2930203252033245 msec\nrounds: 492"
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
        "date": 1648770404312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.29895236153764,
            "unit": "iter/sec",
            "range": "stddev: 0.00021836014361022282",
            "extra": "mean: 7.980912698412671 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.74117551737106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005261841391285015",
            "extra": "mean: 6.633887500000041 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.0318878144881,
            "unit": "iter/sec",
            "range": "stddev: 0.0003537580154266758",
            "extra": "mean: 4.783959090909045 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.21485383741157,
            "unit": "iter/sec",
            "range": "stddev: 0.00017064434812907425",
            "extra": "mean: 3.1229032258064704 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.16740476962683,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645793248122364",
            "extra": "mean: 8.836466666666826 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.94712685430733,
            "unit": "iter/sec",
            "range": "stddev: 0.00044209470705024564",
            "extra": "mean: 7.094859060402622 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.8921657318636,
            "unit": "iter/sec",
            "range": "stddev: 0.00037573522257653195",
            "extra": "mean: 5.053257142857096 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.4473274510264,
            "unit": "iter/sec",
            "range": "stddev: 0.00020277826112652318",
            "extra": "mean: 3.2525896656535127 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.093408375349753,
            "unit": "iter/sec",
            "range": "stddev: 0.0015980437199181268",
            "extra": "mean: 76.37430769230764 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.605223806932653,
            "unit": "iter/sec",
            "range": "stddev: 0.007641608827619737",
            "extra": "mean: 94.29315384615441 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.7417177703955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005714759573858352",
            "extra": "mean: 6.633863636363524 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.6859298678246,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766922462473702",
            "extra": "mean: 4.070237154150362 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.06073942407636,
            "unit": "iter/sec",
            "range": "stddev: 0.00010879200539982262",
            "extra": "mean: 2.1736260330578148 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.7889425186687,
            "unit": "iter/sec",
            "range": "stddev: 0.00016472340063025987",
            "extra": "mean: 2.278999999999895 msec\nrounds: 468"
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
        "date": 1648771048054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.54647946735403,
            "unit": "iter/sec",
            "range": "stddev: 0.00030129769863682733",
            "extra": "mean: 7.90223484848487 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.6059444527093,
            "unit": "iter/sec",
            "range": "stddev: 0.00018188319541874177",
            "extra": "mean: 6.468056603773595 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.46497294188313,
            "unit": "iter/sec",
            "range": "stddev: 0.0001445241174194667",
            "extra": "mean: 4.728915555555528 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.1658025762567,
            "unit": "iter/sec",
            "range": "stddev: 0.00015342215798709442",
            "extra": "mean: 3.0943868194841944 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.84036706455502,
            "unit": "iter/sec",
            "range": "stddev: 0.00037565439991127516",
            "extra": "mean: 8.707739495798299 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.53871200142171,
            "unit": "iter/sec",
            "range": "stddev: 0.0005855737379301435",
            "extra": "mean: 7.2706802721088675 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.3860771753593,
            "unit": "iter/sec",
            "range": "stddev: 0.00023570434776094785",
            "extra": "mean: 4.99036666666663 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.526680535231,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500000174609255",
            "extra": "mean: 3.2307392638037156 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.287056413994293,
            "unit": "iter/sec",
            "range": "stddev: 0.0024209793370760296",
            "extra": "mean: 75.26121428571437 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.563933114307963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674074365820088",
            "extra": "mean: 73.72492857142936 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.27891767034208,
            "unit": "iter/sec",
            "range": "stddev: 0.000279292423342694",
            "extra": "mean: 5.838430167597653 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.2888165139218,
            "unit": "iter/sec",
            "range": "stddev: 0.00028094337138844026",
            "extra": "mean: 4.09351526717561 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.5407681296148,
            "unit": "iter/sec",
            "range": "stddev: 0.00012246907757293763",
            "extra": "mean: 2.1342859960552354 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.0142792992974,
            "unit": "iter/sec",
            "range": "stddev: 0.00013345324734226986",
            "extra": "mean: 2.2221517094014605 msec\nrounds: 468"
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
        "date": 1648866051280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.51436307405949,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853639102526265",
            "extra": "mean: 7.9042408759123735 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.11878542045997,
            "unit": "iter/sec",
            "range": "stddev: 0.00034262229091908613",
            "extra": "mean: 6.5308773006135565 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.33237309931053,
            "unit": "iter/sec",
            "range": "stddev: 0.0002934854975737452",
            "extra": "mean: 4.800022123893857 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.510464715107,
            "unit": "iter/sec",
            "range": "stddev: 0.00013806310281196048",
            "extra": "mean: 3.0256228070175593 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.66405633372389,
            "unit": "iter/sec",
            "range": "stddev: 0.0006430422614917379",
            "extra": "mean: 8.797856000000081 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.10191889248907,
            "unit": "iter/sec",
            "range": "stddev: 0.00047106051907053816",
            "extra": "mean: 6.988026490066072 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.66093942287168,
            "unit": "iter/sec",
            "range": "stddev: 0.00030323817802355943",
            "extra": "mean: 5.008490909090891 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.2766274165858,
            "unit": "iter/sec",
            "range": "stddev: 0.0001896777044032858",
            "extra": "mean: 3.1819101796407576 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.144663595196974,
            "unit": "iter/sec",
            "range": "stddev: 0.0016460764093611648",
            "extra": "mean: 76.07649999999981 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.547478763392311,
            "unit": "iter/sec",
            "range": "stddev: 0.0022373133760935507",
            "extra": "mean: 79.69728571428496 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.5614924566281,
            "unit": "iter/sec",
            "range": "stddev: 0.0003831057459986623",
            "extra": "mean: 5.93255307262604 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.16231526884414,
            "unit": "iter/sec",
            "range": "stddev: 0.00019421565579214414",
            "extra": "mean: 4.029620689654914 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.2765465599864,
            "unit": "iter/sec",
            "range": "stddev: 0.00011201005938676985",
            "extra": "mean: 2.1964671968188942 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.54867808028484,
            "unit": "iter/sec",
            "range": "stddev: 0.00015718684853790793",
            "extra": "mean: 2.2494724409447047 msec\nrounds: 508"
          }
        ]
      },
      {
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
        "date": 1649082312764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.11607050645313,
            "unit": "iter/sec",
            "range": "stddev: 0.00054287822368014",
            "extra": "mean: 8.256542635658903 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.05448032411928,
            "unit": "iter/sec",
            "range": "stddev: 0.000477081325306323",
            "extra": "mean: 6.754270440251526 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.96667498475333,
            "unit": "iter/sec",
            "range": "stddev: 0.00017642086052698254",
            "extra": "mean: 4.717722727272717 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.40711005731004,
            "unit": "iter/sec",
            "range": "stddev: 0.00015703337676643432",
            "extra": "mean: 3.0636587537091997 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.69422614099588,
            "unit": "iter/sec",
            "range": "stddev: 0.00043372820496847457",
            "extra": "mean: 8.718834710743678 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.43181208250368,
            "unit": "iter/sec",
            "range": "stddev: 0.00021285056036995324",
            "extra": "mean: 6.923682432432342 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.58665294442036,
            "unit": "iter/sec",
            "range": "stddev: 0.00038175530511965156",
            "extra": "mean: 5.246957142857344 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.0959610426844,
            "unit": "iter/sec",
            "range": "stddev: 0.00020346536088719117",
            "extra": "mean: 3.1736363636363314 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.141159519596707,
            "unit": "iter/sec",
            "range": "stddev: 0.000941798784533261",
            "extra": "mean: 76.09678571428599 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.524923535878747,
            "unit": "iter/sec",
            "range": "stddev: 0.0016119521711869687",
            "extra": "mean: 73.9375714285713 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.55916490706593,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654558068489826",
            "extra": "mean: 5.897646408839607 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.19709232570347,
            "unit": "iter/sec",
            "range": "stddev: 0.00022868055591548442",
            "extra": "mean: 4.128868725868983 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.21754615483627,
            "unit": "iter/sec",
            "range": "stddev: 0.00015279913085797383",
            "extra": "mean: 2.2162258726899062 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.45031360467044,
            "unit": "iter/sec",
            "range": "stddev: 0.00012282197173469679",
            "extra": "mean: 2.224940042826591 msec\nrounds: 467"
          }
        ]
      },
      {
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
        "date": 1649083668791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.45409480074193,
            "unit": "iter/sec",
            "range": "stddev: 0.0001560051577393412",
            "extra": "mean: 7.845962121212121 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.69093343878393,
            "unit": "iter/sec",
            "range": "stddev: 0.00019473725484508352",
            "extra": "mean: 6.422981595091982 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.9519852569569,
            "unit": "iter/sec",
            "range": "stddev: 0.00033017117806368303",
            "extra": "mean: 5.0517300884955665 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.3975355818208,
            "unit": "iter/sec",
            "range": "stddev: 0.0001555269147060386",
            "extra": "mean: 2.9815365168538883 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.26766344180425,
            "unit": "iter/sec",
            "range": "stddev: 0.0004142191498047744",
            "extra": "mean: 8.527500000000122 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.11993523337856,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112132404092619",
            "extra": "mean: 7.086171052631506 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.1967989299385,
            "unit": "iter/sec",
            "range": "stddev: 0.000093780752980586",
            "extra": "mean: 4.873370370370328 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.37567277473175,
            "unit": "iter/sec",
            "range": "stddev: 0.00007012538244668051",
            "extra": "mean: 3.0177230320700006 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.313401269718142,
            "unit": "iter/sec",
            "range": "stddev: 0.0024815629823084252",
            "extra": "mean: 75.11228571428548 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.864164462264846,
            "unit": "iter/sec",
            "range": "stddev: 0.002619034685855266",
            "extra": "mean: 72.1283999999983 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.80703992130097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002888624279424071",
            "extra": "mean: 5.720593406593951 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.3051573190052,
            "unit": "iter/sec",
            "range": "stddev: 0.00013013422268013107",
            "extra": "mean: 3.8864358974360034 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 500.64658979375685,
            "unit": "iter/sec",
            "range": "stddev: 0.00010604012550769549",
            "extra": "mean: 1.9974169811322469 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.78192198817817,
            "unit": "iter/sec",
            "range": "stddev: 0.00016440105812279236",
            "extra": "mean: 2.326761431411502 msec\nrounds: 503"
          }
        ]
      },
      {
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
        "date": 1649166627451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.32818813731917,
            "unit": "iter/sec",
            "range": "stddev: 0.0006380705341423714",
            "extra": "mean: 8.310604651162825 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.9020151026724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005898318447481391",
            "extra": "mean: 6.497640718562857 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.61013467508064,
            "unit": "iter/sec",
            "range": "stddev: 0.0002825722394432183",
            "extra": "mean: 4.7481095890411575 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.65739470110714,
            "unit": "iter/sec",
            "range": "stddev: 0.0002847310965299369",
            "extra": "mean: 3.1480457142857583 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.9230930650922,
            "unit": "iter/sec",
            "range": "stddev: 0.001147349538635939",
            "extra": "mean: 9.53079032258056 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.49657567971718,
            "unit": "iter/sec",
            "range": "stddev: 0.0007135636745718429",
            "extra": "mean: 7.547364864864821 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.78822258238517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006786381843647287",
            "extra": "mean: 5.214084507042327 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.0367260121787,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418187056746477",
            "extra": "mean: 3.2254243323441574 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.667562444296712,
            "unit": "iter/sec",
            "range": "stddev: 0.002580815827440227",
            "extra": "mean: 78.94178571428537 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.302252278772423,
            "unit": "iter/sec",
            "range": "stddev: 0.005432365973625849",
            "extra": "mean: 81.28592857142942 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.6307899398835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006224056898203389",
            "extra": "mean: 6.467017341040387 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 212.72484422778527,
            "unit": "iter/sec",
            "range": "stddev: 0.0005862511574144636",
            "extra": "mean: 4.700908366533824 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 428.20599816457394,
            "unit": "iter/sec",
            "range": "stddev: 0.00028892224930127103",
            "extra": "mean: 2.3353245967742526 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 410.08404536980316,
            "unit": "iter/sec",
            "range": "stddev: 0.00030782522572043514",
            "extra": "mean: 2.4385245202559047 msec\nrounds: 469"
          }
        ]
      },
      {
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
        "date": 1649339392540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.99864423084553,
            "unit": "iter/sec",
            "range": "stddev: 0.0007692244677039471",
            "extra": "mean: 9.009119047619041 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.91831269441224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494488463081046",
            "extra": "mean: 6.948386075949499 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.08551769782275,
            "unit": "iter/sec",
            "range": "stddev: 0.00047438479695203817",
            "extra": "mean: 5.07393953488368 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.8017283272429,
            "unit": "iter/sec",
            "range": "stddev: 0.00037695998102202057",
            "extra": "mean: 3.380642857142838 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.48733477542493,
            "unit": "iter/sec",
            "range": "stddev: 0.0007951847374642398",
            "extra": "mean: 9.390788135593185 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.79330519562139,
            "unit": "iter/sec",
            "range": "stddev: 0.0008193990668029142",
            "extra": "mean: 7.825136054421913 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.04332490802386,
            "unit": "iter/sec",
            "range": "stddev: 0.0004925220009366162",
            "extra": "mean: 5.648334951456159 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.5984816027907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002457007445134208",
            "extra": "mean: 3.3602321981424472 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.481644383444513,
            "unit": "iter/sec",
            "range": "stddev: 0.01057483076787705",
            "extra": "mean: 87.09553846153858 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.828183886518149,
            "unit": "iter/sec",
            "range": "stddev: 0.0028080186994543987",
            "extra": "mean: 77.95335714285757 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.0822066551818,
            "unit": "iter/sec",
            "range": "stddev: 0.000394513375714325",
            "extra": "mean: 6.286058139535034 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.30832271383974,
            "unit": "iter/sec",
            "range": "stddev: 0.00032605166908853073",
            "extra": "mean: 4.3609407114626535 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.8117715305351,
            "unit": "iter/sec",
            "range": "stddev: 0.000248071092911108",
            "extra": "mean: 2.179543032786916 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.5485394121566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008083150684442824",
            "extra": "mean: 2.269897435897403 msec\nrounds: 468"
          }
        ]
      },
      {
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
        "date": 1649689802413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.2627745669053,
            "unit": "iter/sec",
            "range": "stddev: 0.000591210728070032",
            "extra": "mean: 8.246553846153848 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.61402506598867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002073359094612794",
            "extra": "mean: 6.467718562874253 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.50708924103563,
            "unit": "iter/sec",
            "range": "stddev: 0.00020356082426222478",
            "extra": "mean: 4.795999999999967 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.88994859841563,
            "unit": "iter/sec",
            "range": "stddev: 0.00017914197782140396",
            "extra": "mean: 3.0591335227272474 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.41998216380492,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951857859204416",
            "extra": "mean: 8.516438016529126 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.3544870227992,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655723339654651",
            "extra": "mean: 7.0247171052630195 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.64703778599127,
            "unit": "iter/sec",
            "range": "stddev: 0.00028179447442419105",
            "extra": "mean: 4.959160377358499 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.4262666289391,
            "unit": "iter/sec",
            "range": "stddev: 0.00012651255480508977",
            "extra": "mean: 3.140444444444327 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.135832957241922,
            "unit": "iter/sec",
            "range": "stddev: 0.0024203746883221227",
            "extra": "mean: 76.12764285714287 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.567968739400058,
            "unit": "iter/sec",
            "range": "stddev: 0.0016622078459312278",
            "extra": "mean: 73.70299999999982 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.93583143417933,
            "unit": "iter/sec",
            "range": "stddev: 0.00025288307998798637",
            "extra": "mean: 5.9546553672313784 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.80621800887562,
            "unit": "iter/sec",
            "range": "stddev: 0.00018834230840442958",
            "extra": "mean: 4.019192156862925 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.0398292774326,
            "unit": "iter/sec",
            "range": "stddev: 0.00021862860307721323",
            "extra": "mean: 2.1927909270215262 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.142840677669,
            "unit": "iter/sec",
            "range": "stddev: 0.0001379355669749772",
            "extra": "mean: 2.1827253668764843 msec\nrounds: 477"
          }
        ]
      },
      {
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
        "date": 1649778202876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.865532809439,
            "unit": "iter/sec",
            "range": "stddev: 0.0004871116136609321",
            "extra": "mean: 8.205765624999966 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.54261147863147,
            "unit": "iter/sec",
            "range": "stddev: 0.00021968749371104154",
            "extra": "mean: 6.388037037037056 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.8562284851659,
            "unit": "iter/sec",
            "range": "stddev: 0.00021855420786243867",
            "extra": "mean: 4.857759259259238 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.99509413123525,
            "unit": "iter/sec",
            "range": "stddev: 0.00011694176466188092",
            "extra": "mean: 3.058149855907817 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.00075623255306,
            "unit": "iter/sec",
            "range": "stddev: 0.0009510707220297437",
            "extra": "mean: 9.900915966386545 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.68801158740703,
            "unit": "iter/sec",
            "range": "stddev: 0.000550744988003048",
            "extra": "mean: 7.1079261744965185 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.84759178266205,
            "unit": "iter/sec",
            "range": "stddev: 0.00042213598844372875",
            "extra": "mean: 5.295275362318966 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.94979840835174,
            "unit": "iter/sec",
            "range": "stddev: 0.00019967771971822959",
            "extra": "mean: 3.1451506024094793 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.505278670515695,
            "unit": "iter/sec",
            "range": "stddev: 0.004386350175143417",
            "extra": "mean: 79.96623076923098 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.449446891496619,
            "unit": "iter/sec",
            "range": "stddev: 0.0023458278437961818",
            "extra": "mean: 74.35249999999982 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.93535489246872,
            "unit": "iter/sec",
            "range": "stddev: 0.0005259645437784801",
            "extra": "mean: 6.291866279070333 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.08259720726213,
            "unit": "iter/sec",
            "range": "stddev: 0.00048801351302968826",
            "extra": "mean: 4.403683999999714 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.30147059514,
            "unit": "iter/sec",
            "range": "stddev: 0.00016796979079006076",
            "extra": "mean: 2.186741273100615 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.00561246172896,
            "unit": "iter/sec",
            "range": "stddev: 0.00014427227720386046",
            "extra": "mean: 2.232114893617377 msec\nrounds: 470"
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
        "date": 1649968550295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.98743056645627,
            "unit": "iter/sec",
            "range": "stddev: 0.00035862371132915397",
            "extra": "mean: 8.197565891472896 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.0518279846443,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864858806159743",
            "extra": "mean: 7.140213836478043 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.0661873718397,
            "unit": "iter/sec",
            "range": "stddev: 0.00021268948272875745",
            "extra": "mean: 4.715508928571373 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.03408110357304,
            "unit": "iter/sec",
            "range": "stddev: 0.00011020216943858201",
            "extra": "mean: 3.039198847262332 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.85814280544446,
            "unit": "iter/sec",
            "range": "stddev: 0.000855576424029443",
            "extra": "mean: 9.020537190082605 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.1313599014096,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425309249082384",
            "extra": "mean: 7.035744966442711 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.55429386743816,
            "unit": "iter/sec",
            "range": "stddev: 0.00026569082225880186",
            "extra": "mean: 4.986180952380792 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.38772740246344,
            "unit": "iter/sec",
            "range": "stddev: 0.00012557680040170365",
            "extra": "mean: 3.121218181818256 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.11583909085046,
            "unit": "iter/sec",
            "range": "stddev: 0.0016093829244265456",
            "extra": "mean: 76.2436923076919 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.581565547060638,
            "unit": "iter/sec",
            "range": "stddev: 0.0012966677516784062",
            "extra": "mean: 73.62921428571413 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36059398125886,
            "unit": "iter/sec",
            "range": "stddev: 0.00030509999027481893",
            "extra": "mean: 6.011038888888878 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.7994874721628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435767616467521",
            "extra": "mean: 4.205223529411777 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.747946401084,
            "unit": "iter/sec",
            "range": "stddev: 0.00006560510277941408",
            "extra": "mean: 2.128801217038577 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.20411101483245,
            "unit": "iter/sec",
            "range": "stddev: 0.00014173085749665242",
            "extra": "mean: 2.2411268191268605 msec\nrounds: 481"
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
        "date": 1671164117726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.0363767469405,
            "unit": "iter/sec",
            "range": "stddev: 0.0003835698883597095",
            "extra": "mean: 8.692902439024323 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.4552035094227,
            "unit": "iter/sec",
            "range": "stddev: 0.00047122610289572925",
            "extra": "mean: 6.922561290322581 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.53661150050715,
            "unit": "iter/sec",
            "range": "stddev: 0.001017074950696383",
            "extra": "mean: 5.2209339622641915 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.92464867619634,
            "unit": "iter/sec",
            "range": "stddev: 0.00017073440684295193",
            "extra": "mean: 3.0588088235294046 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.62263605994826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005384360712585258",
            "extra": "mean: 8.879209677419617 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.462286914044,
            "unit": "iter/sec",
            "range": "stddev: 0.00047004607961124013",
            "extra": "mean: 7.170397260273945 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.99617485130636,
            "unit": "iter/sec",
            "range": "stddev: 0.00031355706674946615",
            "extra": "mean: 5.025222222222204 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.64009285770106,
            "unit": "iter/sec",
            "range": "stddev: 0.00051800708072083",
            "extra": "mean: 3.198566091954024 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.324298190179602,
            "unit": "iter/sec",
            "range": "stddev: 0.005456798834159655",
            "extra": "mean: 75.0508571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.753266400770226,
            "unit": "iter/sec",
            "range": "stddev: 0.0026999166918353587",
            "extra": "mean: 72.70999999999978 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.1110439438973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006038442579242738",
            "extra": "mean: 6.056530054644847 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.82736451363388,
            "unit": "iter/sec",
            "range": "stddev: 0.0001683928396468407",
            "extra": "mean: 4.204730612244888 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.5096103983295,
            "unit": "iter/sec",
            "range": "stddev: 0.00010125180909168785",
            "extra": "mean: 2.7971276041665605 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 297.13940764477326,
            "unit": "iter/sec",
            "range": "stddev: 0.0008477505775011528",
            "extra": "mean: 3.3654236842105054 msec\nrounds: 380"
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
        "date": 1671168344896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.32577695590827,
            "unit": "iter/sec",
            "range": "stddev: 0.0018160478354268892",
            "extra": "mean: 10.715153225806517 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.84937487018306,
            "unit": "iter/sec",
            "range": "stddev: 0.0006912620444341178",
            "extra": "mean: 6.903723270440209 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.07930226656936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004300495571966479",
            "extra": "mean: 5.179219047618988 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.4475054111173,
            "unit": "iter/sec",
            "range": "stddev: 0.00027554267020780927",
            "extra": "mean: 3.3063588957055496 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.18661896793279,
            "unit": "iter/sec",
            "range": "stddev: 0.0010538266148603752",
            "extra": "mean: 9.786017094017078 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.1497279862722,
            "unit": "iter/sec",
            "range": "stddev: 0.0008401261820252259",
            "extra": "mean: 7.186503448275908 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.0801531631474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009447181382957585",
            "extra": "mean: 5.777669950738882 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.8346122350466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003036006187729047",
            "extra": "mean: 3.368879365079421 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.212794893066116,
            "unit": "iter/sec",
            "range": "stddev: 0.0019079604970346034",
            "extra": "mean: 75.68421428571374 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.796089427839133,
            "unit": "iter/sec",
            "range": "stddev: 0.005669506990602324",
            "extra": "mean: 84.77385714285697 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 143.47652970176094,
            "unit": "iter/sec",
            "range": "stddev: 0.0011525862092005654",
            "extra": "mean: 6.9697810650889105 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 202.25909137830624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006096560004063755",
            "extra": "mean: 4.944153526970988 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 291.38738715724855,
            "unit": "iter/sec",
            "range": "stddev: 0.0007906956399478827",
            "extra": "mean: 3.4318575342464817 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 292.0475696400312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003848932523995876",
            "extra": "mean: 3.4240997150997323 msec\nrounds: 351"
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
        "date": 1671338433233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.24217790980282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006971652108544532",
            "extra": "mean: 8.83063200000002 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.32084847213937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005731368207063066",
            "extra": "mean: 7.076096774193544 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.53600836504978,
            "unit": "iter/sec",
            "range": "stddev: 0.00023868062721765838",
            "extra": "mean: 4.79533490566034 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.30078447796615,
            "unit": "iter/sec",
            "range": "stddev: 0.00017501502023726867",
            "extra": "mean: 3.2123272727273835 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.4300057400788,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079048673470277",
            "extra": "mean: 9.484965811965747 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.99988612423604,
            "unit": "iter/sec",
            "range": "stddev: 0.0007107985804253927",
            "extra": "mean: 7.751944827586352 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.91698744752887,
            "unit": "iter/sec",
            "range": "stddev: 0.00026011319181319046",
            "extra": "mean: 5.130389162561818 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.8844131380762,
            "unit": "iter/sec",
            "range": "stddev: 0.00020394074599543654",
            "extra": "mean: 3.301589506172868 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.966968120395201,
            "unit": "iter/sec",
            "range": "stddev: 0.001184132057994286",
            "extra": "mean: 71.59750000000032 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.84881079667221,
            "unit": "iter/sec",
            "range": "stddev: 0.003941617711209287",
            "extra": "mean: 77.82821428571397 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.0745710463939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877821596690052",
            "extra": "mean: 6.208304597700729 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.56394535141965,
            "unit": "iter/sec",
            "range": "stddev: 0.00017309939266061145",
            "extra": "mean: 4.088910156250042 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.9775235926403,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546095239860568",
            "extra": "mean: 2.873748826291003 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.65052986445664,
            "unit": "iter/sec",
            "range": "stddev: 0.00020066057127691588",
            "extra": "mean: 2.997147945205552 msec\nrounds: 365"
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
        "date": 1671350571984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.5727671130006,
            "unit": "iter/sec",
            "range": "stddev: 0.0002591641494999741",
            "extra": "mean: 8.505370967741944 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.0560509794324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003319849922365815",
            "extra": "mean: 6.80012820512814 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.41632118741003,
            "unit": "iter/sec",
            "range": "stddev: 0.00017054788849265207",
            "extra": "mean: 4.940313084112105 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.21627405862773,
            "unit": "iter/sec",
            "range": "stddev: 0.00020813768425482349",
            "extra": "mean: 3.2763652694610714 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.88951469069595,
            "unit": "iter/sec",
            "range": "stddev: 0.00043225987865951044",
            "extra": "mean: 9.1836206896553 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.39741071756126,
            "unit": "iter/sec",
            "range": "stddev: 0.00025079247330601196",
            "extra": "mean: 7.278157534246651 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.0443538959936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004020503487179112",
            "extra": "mean: 5.207130434782659 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.4878232004865,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011958497601237",
            "extra": "mean: 3.327921874999895 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.243072271383427,
            "unit": "iter/sec",
            "range": "stddev: 0.002431749440353308",
            "extra": "mean: 70.20957142857144 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.301786769893699,
            "unit": "iter/sec",
            "range": "stddev: 0.0018811134114319246",
            "extra": "mean: 69.92133333333375 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.38481228987288,
            "unit": "iter/sec",
            "range": "stddev: 0.0004706972211253377",
            "extra": "mean: 6.1963699421965455 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.80706075076264,
            "unit": "iter/sec",
            "range": "stddev: 0.00026758958346372887",
            "extra": "mean: 4.222847058823517 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.4248134869147,
            "unit": "iter/sec",
            "range": "stddev: 0.0002178135396416165",
            "extra": "mean: 2.7745037593986446 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.99333832225113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907548215372809",
            "extra": "mean: 2.8249119170984764 msec\nrounds: 386"
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
        "date": 1671358089632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.1507093251023,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241982431584251",
            "extra": "mean: 8.837770491803285 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.2884577611834,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516768566153861",
            "extra": "mean: 6.930561290322564 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.33374737199395,
            "unit": "iter/sec",
            "range": "stddev: 0.00024943590087157043",
            "extra": "mean: 5.199295566502395 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.48225247490814,
            "unit": "iter/sec",
            "range": "stddev: 0.00011223952760723189",
            "extra": "mean: 3.3842980132450373 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.73682013523339,
            "unit": "iter/sec",
            "range": "stddev: 0.00036864034655828337",
            "extra": "mean: 9.457443478260815 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.53846814780746,
            "unit": "iter/sec",
            "range": "stddev: 0.0003187566877068586",
            "extra": "mean: 7.544979310344796 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.9781537575199,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311394966953563",
            "extra": "mean: 5.525528795811625 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.67858584181363,
            "unit": "iter/sec",
            "range": "stddev: 0.0001547250095442664",
            "extra": "mean: 3.4640602006688748 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.353044971147943,
            "unit": "iter/sec",
            "range": "stddev: 0.0011164517577901345",
            "extra": "mean: 74.88928571428539 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.067954295763368,
            "unit": "iter/sec",
            "range": "stddev: 0.002533941789880544",
            "extra": "mean: 76.52307142857089 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.55728790244436,
            "unit": "iter/sec",
            "range": "stddev: 0.00045822389798271814",
            "extra": "mean: 6.512227544910174 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.52895310127525,
            "unit": "iter/sec",
            "range": "stddev: 0.00013312118213898354",
            "extra": "mean: 4.453768595041476 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 338.4967815360238,
            "unit": "iter/sec",
            "range": "stddev: 0.00012813286073738855",
            "extra": "mean: 2.9542378378376903 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 308.93892718751147,
            "unit": "iter/sec",
            "range": "stddev: 0.00026041615047563767",
            "extra": "mean: 3.2368857142856813 msec\nrounds: 350"
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
        "date": 1671363804705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.04617796481138,
            "unit": "iter/sec",
            "range": "stddev: 0.000671309391480256",
            "extra": "mean: 8.924891666666708 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1951767008171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006297657557801161",
            "extra": "mean: 7.08239490445861 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.21606947675957,
            "unit": "iter/sec",
            "range": "stddev: 0.0008290999756718005",
            "extra": "mean: 5.67485135135128 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.83373194403435,
            "unit": "iter/sec",
            "range": "stddev: 0.000325477869226284",
            "extra": "mean: 3.313082317073225 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.05868988700834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008462040155933398",
            "extra": "mean: 9.994134453781614 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.68889765325352,
            "unit": "iter/sec",
            "range": "stddev: 0.0005328989851200195",
            "extra": "mean: 7.710760273972556 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.19238867738815,
            "unit": "iter/sec",
            "range": "stddev: 0.00039700610270723447",
            "extra": "mean: 5.399789954337898 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.585962558176,
            "unit": "iter/sec",
            "range": "stddev: 0.00026765694048738964",
            "extra": "mean: 3.4295203761754625 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.320013320013409,
            "unit": "iter/sec",
            "range": "stddev: 0.0013107218210999185",
            "extra": "mean: 75.07499999999949 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.89974296555187,
            "unit": "iter/sec",
            "range": "stddev: 0.005953692644896589",
            "extra": "mean: 84.0354285714291 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.1304558094515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005801814024682697",
            "extra": "mean: 6.616800000000143 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.90860220242902,
            "unit": "iter/sec",
            "range": "stddev: 0.00039577260804111265",
            "extra": "mean: 4.631589430894614 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 332.89481413965893,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966026631179734",
            "extra": "mean: 3.0039518716577884 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 318.75383487356976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003104263345259507",
            "extra": "mean: 3.137217158176745 msec\nrounds: 373"
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
        "date": 1671374259697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.12922073106101,
            "unit": "iter/sec",
            "range": "stddev: 0.0006554947012897076",
            "extra": "mean: 9.334521367521349 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.89443498421815,
            "unit": "iter/sec",
            "range": "stddev: 0.0012570879681354683",
            "extra": "mean: 7.358653061224569 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.11907854364947,
            "unit": "iter/sec",
            "range": "stddev: 0.00048692819313301893",
            "extra": "mean: 5.259861386138635 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.0513650848689,
            "unit": "iter/sec",
            "range": "stddev: 0.0004446073240499685",
            "extra": "mean: 3.4123710691823455 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.04139512547079,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941036211761209",
            "extra": "mean: 9.342180180180101 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.8054708525106,
            "unit": "iter/sec",
            "range": "stddev: 0.00035942853719983763",
            "extra": "mean: 7.763645390070855 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.23236052124346,
            "unit": "iter/sec",
            "range": "stddev: 0.0010191104288277757",
            "extra": "mean: 5.739461928934114 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.79696524905853,
            "unit": "iter/sec",
            "range": "stddev: 0.00020109506325663112",
            "extra": "mean: 3.46264026402632 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.095419836674608,
            "unit": "iter/sec",
            "range": "stddev: 0.004546571573935799",
            "extra": "mean: 82.67592307692311 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.55303668427429,
            "unit": "iter/sec",
            "range": "stddev: 0.0476170414754289",
            "extra": "mean: 94.75945454545419 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 73.3607082016291,
            "unit": "iter/sec",
            "range": "stddev: 0.032632101396924726",
            "extra": "mean: 13.631275167785164 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 105.20538558471671,
            "unit": "iter/sec",
            "range": "stddev: 0.02168787682250915",
            "extra": "mean: 9.505216814159665 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 250.22233611190305,
            "unit": "iter/sec",
            "range": "stddev: 0.007694463766412885",
            "extra": "mean: 3.9964457831325877 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 308.9825224608234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001418915053114502",
            "extra": "mean: 3.2364290123458104 msec\nrounds: 324"
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
        "date": 1671378187602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.93481538575352,
            "unit": "iter/sec",
            "range": "stddev: 0.0007036989148375754",
            "extra": "mean: 9.4397672413793 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.19339648367175,
            "unit": "iter/sec",
            "range": "stddev: 0.003931860268367687",
            "extra": "mean: 8.913180555555574 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.22264081892024,
            "unit": "iter/sec",
            "range": "stddev: 0.0004932281061128941",
            "extra": "mean: 5.806437499999946 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.63161541982157,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107639867387513",
            "extra": "mean: 3.6679531772575755 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.77819575032511,
            "unit": "iter/sec",
            "range": "stddev: 0.0022815863834723654",
            "extra": "mean: 11.523632075471602 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.82521634191471,
            "unit": "iter/sec",
            "range": "stddev: 0.001174900552575374",
            "extra": "mean: 8.633698529411864 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.71253075322227,
            "unit": "iter/sec",
            "range": "stddev: 0.0010807045507151608",
            "extra": "mean: 6.63514835164839 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 270.71503071038387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036155981998436",
            "extra": "mean: 3.6939212328768662 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.367264326163705,
            "unit": "iter/sec",
            "range": "stddev: 0.017347530691788977",
            "extra": "mean: 96.45746153846154 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.917929087210526,
            "unit": "iter/sec",
            "range": "stddev: 0.007282276024881662",
            "extra": "mean: 91.59246153846331 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.34022735442065,
            "unit": "iter/sec",
            "range": "stddev: 0.0006266896441567893",
            "extra": "mean: 6.7870127388533374 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 194.30296963910496,
            "unit": "iter/sec",
            "range": "stddev: 0.0025690223646860975",
            "extra": "mean: 5.146601731601853 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 306.20659275328455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898236937600993",
            "extra": "mean: 3.2657690058480084 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 299.6203612667997,
            "unit": "iter/sec",
            "range": "stddev: 0.00027483271690212396",
            "extra": "mean: 3.3375568862275715 msec\nrounds: 334"
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
        "date": 1671379275902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.80626530588853,
            "unit": "iter/sec",
            "range": "stddev: 0.0004715337324566348",
            "extra": "mean: 8.417064516128981 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.42723598842497,
            "unit": "iter/sec",
            "range": "stddev: 0.00041947392048735747",
            "extra": "mean: 6.972176470588216 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.92171757158596,
            "unit": "iter/sec",
            "range": "stddev: 0.0003179238579642676",
            "extra": "mean: 5.237748815165832 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.44934592499675,
            "unit": "iter/sec",
            "range": "stddev: 0.00017918887207294098",
            "extra": "mean: 3.3394629629629264 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.9057415913539,
            "unit": "iter/sec",
            "range": "stddev: 0.00043722310167066097",
            "extra": "mean: 9.267347457627096 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.18033611530365,
            "unit": "iter/sec",
            "range": "stddev: 0.00026296598401752533",
            "extra": "mean: 7.343204081632621 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.0861025923972,
            "unit": "iter/sec",
            "range": "stddev: 0.00028638902009160444",
            "extra": "mean: 5.37385643564366 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.98779847773085,
            "unit": "iter/sec",
            "range": "stddev: 0.00027875016933225885",
            "extra": "mean: 3.4248006430866913 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.092873361987982,
            "unit": "iter/sec",
            "range": "stddev: 0.006635423906397064",
            "extra": "mean: 76.37742857142881 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.014950459520746,
            "unit": "iter/sec",
            "range": "stddev: 0.0033817134352638395",
            "extra": "mean: 76.8347142857141 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.86694269096463,
            "unit": "iter/sec",
            "range": "stddev: 0.00036289562009251636",
            "extra": "mean: 6.374829411764898 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.5697531811874,
            "unit": "iter/sec",
            "range": "stddev: 0.00027453945047629295",
            "extra": "mean: 4.433218487395146 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 337.18329337921654,
            "unit": "iter/sec",
            "range": "stddev: 0.00014240924741956647",
            "extra": "mean: 2.9657459893048146 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 318.1716094670594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001577426645827987",
            "extra": "mean: 3.1429579831934404 msec\nrounds: 357"
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
        "date": 1671419558300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.05572608049282,
            "unit": "iter/sec",
            "range": "stddev: 0.0004143275209066369",
            "extra": "mean: 8.47057600000003 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.4311493569147,
            "unit": "iter/sec",
            "range": "stddev: 0.00011383790834244533",
            "extra": "mean: 6.692045161290374 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.6214529762585,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602026889685742",
            "extra": "mean: 5.358440758293836 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.00448604839505,
            "unit": "iter/sec",
            "range": "stddev: 0.00015977242802742237",
            "extra": "mean: 3.333283489096512 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.37466127533007,
            "unit": "iter/sec",
            "range": "stddev: 0.0007069762680898536",
            "extra": "mean: 9.313184210526172 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.31382425036216,
            "unit": "iter/sec",
            "range": "stddev: 0.0003454956204877806",
            "extra": "mean: 7.445249999999935 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.69190700037598,
            "unit": "iter/sec",
            "range": "stddev: 0.0012028576630062516",
            "extra": "mean: 5.7243636363638055 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.48630010694814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005190427261212394",
            "extra": "mean: 3.4543949044585496 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.794991256962685,
            "unit": "iter/sec",
            "range": "stddev: 0.0028099691400770076",
            "extra": "mean: 84.78175000000033 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.595581082600045,
            "unit": "iter/sec",
            "range": "stddev: 0.0017835798487666286",
            "extra": "mean: 79.39292307692206 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.17615233879533,
            "unit": "iter/sec",
            "range": "stddev: 0.000242820300883121",
            "extra": "mean: 6.204391812865597 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.63651192561304,
            "unit": "iter/sec",
            "range": "stddev: 0.00015746414441031705",
            "extra": "mean: 4.243824489795899 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 363.5292181825766,
            "unit": "iter/sec",
            "range": "stddev: 0.00008247833901146009",
            "extra": "mean: 2.750810526315842 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.0611134445241,
            "unit": "iter/sec",
            "range": "stddev: 0.00013892425747550217",
            "extra": "mean: 2.8896630136986103 msec\nrounds: 365"
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
        "date": 1671424237340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.33642633112142,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829317920592959",
            "extra": "mean: 8.595759999999999 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.4714149561167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005051001284941993",
            "extra": "mean: 7.118886075949333 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.7240272837472,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097719205311691",
            "extra": "mean: 5.109234741783996 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.20266216865883,
            "unit": "iter/sec",
            "range": "stddev: 0.00017930245208406856",
            "extra": "mean: 3.2551801242236147 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.25623358688134,
            "unit": "iter/sec",
            "range": "stddev: 0.0008338961058704247",
            "extra": "mean: 9.875935185185073 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.75343545522873,
            "unit": "iter/sec",
            "range": "stddev: 0.00046509115811171745",
            "extra": "mean: 7.31243055555549 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.13952787391844,
            "unit": "iter/sec",
            "range": "stddev: 0.000569348908596746",
            "extra": "mean: 5.551252475247468 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.82151667671496,
            "unit": "iter/sec",
            "range": "stddev: 0.00018366215949448353",
            "extra": "mean: 3.3464792332269253 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.159824184748985,
            "unit": "iter/sec",
            "range": "stddev: 0.0015727503521952393",
            "extra": "mean: 75.9888571428566 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.929489950092146,
            "unit": "iter/sec",
            "range": "stddev: 0.003413325734738554",
            "extra": "mean: 77.34257142857156 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.9033425988634,
            "unit": "iter/sec",
            "range": "stddev: 0.0004700599504341917",
            "extra": "mean: 6.332988165680528 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.7099577027482,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268675397861313",
            "extra": "mean: 4.450181069958743 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 314.4474544669061,
            "unit": "iter/sec",
            "range": "stddev: 0.000420587777229732",
            "extra": "mean: 3.1801815718156643 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 307.6424731712759,
            "unit": "iter/sec",
            "range": "stddev: 0.00044667473292687104",
            "extra": "mean: 3.2505264623954027 msec\nrounds: 359"
          }
        ]
      }
    ]
  }
}