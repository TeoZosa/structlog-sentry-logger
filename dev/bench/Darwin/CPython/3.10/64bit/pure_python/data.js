window.BENCHMARK_DATA = {
  "lastUpdate": 1647985867890,
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
      }
    ]
  }
}