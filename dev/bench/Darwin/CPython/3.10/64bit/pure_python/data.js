window.BENCHMARK_DATA = {
  "lastUpdate": 1648765600035,
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
      }
    ]
  }
}