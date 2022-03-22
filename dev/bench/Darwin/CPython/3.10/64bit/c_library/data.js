window.BENCHMARK_DATA = {
  "lastUpdate": 1647985888892,
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
        "date": 1647982273023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.18411372737714,
            "unit": "iter/sec",
            "range": "stddev: 0.000626835948007385",
            "extra": "mean: 8.757785714285724 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.46083012038252,
            "unit": "iter/sec",
            "range": "stddev: 0.0001913363781683361",
            "extra": "mean: 6.602367088607599 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.57416516424033,
            "unit": "iter/sec",
            "range": "stddev: 0.00027897292637244864",
            "extra": "mean: 4.936463636363667 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.2563424446855,
            "unit": "iter/sec",
            "range": "stddev: 0.00016743599995897046",
            "extra": "mean: 3.0839797687861377 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.90884420811614,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605826229101638",
            "extra": "mean: 8.778949579832089 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.29959742366472,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489886870200486",
            "extra": "mean: 6.978386666666647 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.93500021148307,
            "unit": "iter/sec",
            "range": "stddev: 0.00041302284384064973",
            "extra": "mean: 5.129915094339703 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.9210824426943,
            "unit": "iter/sec",
            "range": "stddev: 0.00024555984254137696",
            "extra": "mean: 3.2795370919881743 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.241800960598109,
            "unit": "iter/sec",
            "range": "stddev: 0.0017249841343438285",
            "extra": "mean: 75.51842857142839 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.29596533931787,
            "unit": "iter/sec",
            "range": "stddev: 0.003427757939091978",
            "extra": "mean: 75.21078571428522 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.87262565088417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674442374854561",
            "extra": "mean: 5.921622857142828 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.26770199545814,
            "unit": "iter/sec",
            "range": "stddev: 0.00017356458805233796",
            "extra": "mean: 4.127665354330835 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.9438591111054,
            "unit": "iter/sec",
            "range": "stddev: 0.00014045509491318253",
            "extra": "mean: 2.123395348837279 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.45282573391705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017823551533259257",
            "extra": "mean: 2.307056133056261 msec\nrounds: 481"
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
        "date": 1647984330208,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.87695316036277,
            "unit": "iter/sec",
            "range": "stddev: 0.0008425774894853657",
            "extra": "mean: 8.629843750000004 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.61563146112235,
            "unit": "iter/sec",
            "range": "stddev: 0.0004064413867327855",
            "extra": "mean: 6.774350318471326 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.39212402743433,
            "unit": "iter/sec",
            "range": "stddev: 0.0016163360646006735",
            "extra": "mean: 5.574380733944989 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.9556904792602,
            "unit": "iter/sec",
            "range": "stddev: 0.0002274712110629085",
            "extra": "mean: 3.0964000000000578 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.31783293305757,
            "unit": "iter/sec",
            "range": "stddev: 0.000871574067672623",
            "extra": "mean: 9.232090163934673 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.10891380332717,
            "unit": "iter/sec",
            "range": "stddev: 0.00048767639534683593",
            "extra": "mean: 7.137304635761533 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.519136278019,
            "unit": "iter/sec",
            "range": "stddev: 0.0004207121208506998",
            "extra": "mean: 5.167447619047614 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.878193213624,
            "unit": "iter/sec",
            "range": "stddev: 0.00033980262502707095",
            "extra": "mean: 3.216693939393932 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.406802611645134,
            "unit": "iter/sec",
            "range": "stddev: 0.0026464514702927732",
            "extra": "mean: 74.58900000000008 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.005278285086728,
            "unit": "iter/sec",
            "range": "stddev: 0.002308985986469989",
            "extra": "mean: 76.89185714285784 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.1097378356433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835070964875902",
            "extra": "mean: 6.130841807909992 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.92195728064468,
            "unit": "iter/sec",
            "range": "stddev: 0.00042312613431410765",
            "extra": "mean: 4.567837837837621 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.78229924429166,
            "unit": "iter/sec",
            "range": "stddev: 0.00022562599686316165",
            "extra": "mean: 2.2332280701753264 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 416.1920426514709,
            "unit": "iter/sec",
            "range": "stddev: 0.0003323428777657411",
            "extra": "mean: 2.4027369519830626 msec\nrounds: 479"
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
        "date": 1647985886435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.77292754281189,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728725331499951",
            "extra": "mean: 7.765607407407429 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.7940852681665,
            "unit": "iter/sec",
            "range": "stddev: 0.00042039933974237736",
            "extra": "mean: 6.4187289156626965 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.54600148311164,
            "unit": "iter/sec",
            "range": "stddev: 0.00015485280884725876",
            "extra": "mean: 4.554854077253254 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.0510266899809,
            "unit": "iter/sec",
            "range": "stddev: 0.00009615865321440601",
            "extra": "mean: 2.8404973262032507 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.24489589258035,
            "unit": "iter/sec",
            "range": "stddev: 0.00018555576323525704",
            "extra": "mean: 8.386103174603232 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.88406529724352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654274916192392",
            "extra": "mean: 6.627605095541317 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.8884149340797,
            "unit": "iter/sec",
            "range": "stddev: 0.0003574907550491737",
            "extra": "mean: 4.977887850467355 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.0273040122239,
            "unit": "iter/sec",
            "range": "stddev: 0.00016266919806359542",
            "extra": "mean: 3.020898843930629 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.458329167660041,
            "unit": "iter/sec",
            "range": "stddev: 0.001381712800743188",
            "extra": "mean: 74.30342857142846 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.884068031933491,
            "unit": "iter/sec",
            "range": "stddev: 0.0019063864845755608",
            "extra": "mean: 72.0249999999993 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.02968211692837,
            "unit": "iter/sec",
            "range": "stddev: 0.00016907862291315167",
            "extra": "mean: 5.713316666666579 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.50797673499335,
            "unit": "iter/sec",
            "range": "stddev: 0.00010635400034568872",
            "extra": "mean: 3.853446096653857 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.99490834131,
            "unit": "iter/sec",
            "range": "stddev: 0.00014072502302747104",
            "extra": "mean: 2.08335543278082 msec\nrounds: 543"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.9573623990771,
            "unit": "iter/sec",
            "range": "stddev: 0.00010823547827010552",
            "extra": "mean: 2.1741145631067442 msec\nrounds: 515"
          }
        ]
      }
    ]
  }
}