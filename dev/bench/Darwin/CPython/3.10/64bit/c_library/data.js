window.BENCHMARK_DATA = {
  "lastUpdate": 1672071564773,
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
        "date": 1648221647097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.16923010347956,
            "unit": "iter/sec",
            "range": "stddev: 0.0007736039003838611",
            "extra": "mean: 8.758927419354848 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.3230659179041,
            "unit": "iter/sec",
            "range": "stddev: 0.0005552362347701182",
            "extra": "mean: 7.02626797385624 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.8819254032533,
            "unit": "iter/sec",
            "range": "stddev: 0.00038767828152504744",
            "extra": "mean: 5.0281090047393615 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.4550099997356,
            "unit": "iter/sec",
            "range": "stddev: 0.00074612624704135",
            "extra": "mean: 3.5031790123456803 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.89992091458038,
            "unit": "iter/sec",
            "range": "stddev: 0.0008840564935300444",
            "extra": "mean: 9.532895652174004 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.13753721714538,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980700143564546",
            "extra": "mean: 7.927854166666526 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.6306893252462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002521926976860367",
            "extra": "mean: 5.164470588235502 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.287083091757,
            "unit": "iter/sec",
            "range": "stddev: 0.00015493457083393317",
            "extra": "mean: 3.3081135646687803 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.927896781486405,
            "unit": "iter/sec",
            "range": "stddev: 0.005818114019473074",
            "extra": "mean: 83.83707692307715 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.237689825396414,
            "unit": "iter/sec",
            "range": "stddev: 0.007702513476714363",
            "extra": "mean: 81.71476923076918 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.05522766678507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009605915581855404",
            "extra": "mean: 6.846725146199018 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.09680215775785,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183432800541302",
            "extra": "mean: 4.482359183673429 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.979583289692,
            "unit": "iter/sec",
            "range": "stddev: 0.00016233823574978603",
            "extra": "mean: 2.247294117647139 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.30712676696504,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998261305385245",
            "extra": "mean: 2.3078318777290856 msec\nrounds: 458"
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
        "date": 1648487896591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.46855203768132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051001717140959",
            "extra": "mean: 8.034157894736834 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.01107952368113,
            "unit": "iter/sec",
            "range": "stddev: 0.00026813540521163217",
            "extra": "mean: 6.409801169590706 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.4844093912254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002859432186832905",
            "extra": "mean: 4.750945701357431 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.67336883324083,
            "unit": "iter/sec",
            "range": "stddev: 0.0001062753182485929",
            "extra": "mean: 3.0150144508671155 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.60075678424201,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657778572556915",
            "extra": "mean: 9.124024590163927 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.2510549813452,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397416864299766",
            "extra": "mean: 6.884631578947441 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.82391836765515,
            "unit": "iter/sec",
            "range": "stddev: 0.0004126696931231383",
            "extra": "mean: 4.930384976525888 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.23923412629256,
            "unit": "iter/sec",
            "range": "stddev: 0.00011368833927411317",
            "extra": "mean: 3.1324470588235878 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.264818843389401,
            "unit": "iter/sec",
            "range": "stddev: 0.00226650217069065",
            "extra": "mean: 75.38738461538476 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.017296515790582,
            "unit": "iter/sec",
            "range": "stddev: 0.004518052818047791",
            "extra": "mean: 76.82086666666568 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.0903393554871,
            "unit": "iter/sec",
            "range": "stddev: 0.00046880227947332365",
            "extra": "mean: 6.325497206703867 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.37604556072287,
            "unit": "iter/sec",
            "range": "stddev: 0.00018278947513081497",
            "extra": "mean: 3.9939923076925234 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 482.44545606795435,
            "unit": "iter/sec",
            "range": "stddev: 0.00011907913231704632",
            "extra": "mean: 2.0727731755424514 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.3286462523087,
            "unit": "iter/sec",
            "range": "stddev: 0.00016950688821753017",
            "extra": "mean: 2.235492871690506 msec\nrounds: 491"
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
        "date": 1648489796831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.18937249686843,
            "unit": "iter/sec",
            "range": "stddev: 0.00027021307379831197",
            "extra": "mean: 7.681118518518507 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.91741055508896,
            "unit": "iter/sec",
            "range": "stddev: 0.0001852261601295631",
            "extra": "mean: 6.175988095238043 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.526368866173,
            "unit": "iter/sec",
            "range": "stddev: 0.00026914105469400494",
            "extra": "mean: 4.661431623931627 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 343.8991049977768,
            "unit": "iter/sec",
            "range": "stddev: 0.00010231968639758467",
            "extra": "mean: 2.9078296089385423 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.55577557139597,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841546473244911",
            "extra": "mean: 8.364296874999761 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.8126072927772,
            "unit": "iter/sec",
            "range": "stddev: 0.00022634650931730861",
            "extra": "mean: 6.765322784810011 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.27984605267972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001665519326594052",
            "extra": "mean: 4.710762790697702 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.78844199030243,
            "unit": "iter/sec",
            "range": "stddev: 0.00012793086207177245",
            "extra": "mean: 3.041469444444446 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.644599126550755,
            "unit": "iter/sec",
            "range": "stddev: 0.0010745027804858343",
            "extra": "mean: 73.28907142857132 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.158229463732187,
            "unit": "iter/sec",
            "range": "stddev: 0.004940505388645679",
            "extra": "mean: 75.99806666666544 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.5371529571143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005264041943931728",
            "extra": "mean: 5.82964088397811 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.5907279173047,
            "unit": "iter/sec",
            "range": "stddev: 0.00012958406616409417",
            "extra": "mean: 3.8522177121771475 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 488.95679955551617,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810087225310472",
            "extra": "mean: 2.045170454545361 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 471.6650711000189,
            "unit": "iter/sec",
            "range": "stddev: 0.00008035560673965134",
            "extra": "mean: 2.1201485148514316 msec\nrounds: 505"
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
        "date": 1648490630335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.60941763467696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003005573261646368",
            "extra": "mean: 7.715488721804505 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.2285888163292,
            "unit": "iter/sec",
            "range": "stddev: 0.00025325296562060494",
            "extra": "mean: 6.319970414201154 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.34419471907063,
            "unit": "iter/sec",
            "range": "stddev: 0.0002240091660315513",
            "extra": "mean: 4.477394190871322 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.51378377037855,
            "unit": "iter/sec",
            "range": "stddev: 0.00033328041609941055",
            "extra": "mean: 3.2624960212201715 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.25266362252762,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676306143113208",
            "extra": "mean: 8.908474576271109 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.65014081690236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003732964722469682",
            "extra": "mean: 7.0596470588236455 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.7090781512752,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744316282312853",
            "extra": "mean: 4.957635071090022 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.26585505090026,
            "unit": "iter/sec",
            "range": "stddev: 0.00015738152377811135",
            "extra": "mean: 3.0744081632654368 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.886649035087368,
            "unit": "iter/sec",
            "range": "stddev: 0.002521878280984547",
            "extra": "mean: 77.59969230769232 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.057752574242777,
            "unit": "iter/sec",
            "range": "stddev: 0.0032640491337063682",
            "extra": "mean: 76.5828571428564 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.79909781850404,
            "unit": "iter/sec",
            "range": "stddev: 0.0004197907847807447",
            "extra": "mean: 5.995236263736338 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.15974496822665,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801134222104439",
            "extra": "mean: 4.095679245283179 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 478.3583610790494,
            "unit": "iter/sec",
            "range": "stddev: 0.00013248527788013652",
            "extra": "mean: 2.0904829545453447 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.85231490093093,
            "unit": "iter/sec",
            "range": "stddev: 0.000173174640533651",
            "extra": "mean: 2.19369292929296 msec\nrounds: 495"
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
        "date": 1648605066223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.08893915592441,
            "unit": "iter/sec",
            "range": "stddev: 0.00036943020127738204",
            "extra": "mean: 7.9309097744361035 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.80882232119447,
            "unit": "iter/sec",
            "range": "stddev: 0.00040673813196810877",
            "extra": "mean: 6.501577639751569 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.10269246600313,
            "unit": "iter/sec",
            "range": "stddev: 0.000329091108163016",
            "extra": "mean: 4.759577272727292 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.2553879884535,
            "unit": "iter/sec",
            "range": "stddev: 0.00022496318263836524",
            "extra": "mean: 3.037156069364212 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.7417371399929,
            "unit": "iter/sec",
            "range": "stddev: 0.00035713380231345665",
            "extra": "mean: 8.639925619834717 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.22774388449062,
            "unit": "iter/sec",
            "range": "stddev: 0.0009248765482550926",
            "extra": "mean: 7.182476510067156 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.4225252940538,
            "unit": "iter/sec",
            "range": "stddev: 0.00026426192502739866",
            "extra": "mean: 5.01447867298578 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.9939924996832,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240760263332354",
            "extra": "mean: 3.28953869047607 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.197728366385228,
            "unit": "iter/sec",
            "range": "stddev: 0.0014112482972214087",
            "extra": "mean: 75.77061538461513 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.127112644691389,
            "unit": "iter/sec",
            "range": "stddev: 0.0035121203146231215",
            "extra": "mean: 76.17821428571351 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.74396354002937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005446115358114693",
            "extra": "mean: 6.033402234636959 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.15928281481195,
            "unit": "iter/sec",
            "range": "stddev: 0.00046947084688690776",
            "extra": "mean: 4.078980769230665 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.793477001908,
            "unit": "iter/sec",
            "range": "stddev: 0.00006697805486606744",
            "extra": "mean: 2.0973441295548563 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 464.8449173003465,
            "unit": "iter/sec",
            "range": "stddev: 0.00009743211272167806",
            "extra": "mean: 2.151255102040576 msec\nrounds: 490"
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
        "date": 1648608407705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.95647041997972,
            "unit": "iter/sec",
            "range": "stddev: 0.0010082228062768094",
            "extra": "mean: 8.69894488188981 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 120.9791550633204,
            "unit": "iter/sec",
            "range": "stddev: 0.0010012934924331534",
            "extra": "mean: 8.265886792452806 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.0498468866936,
            "unit": "iter/sec",
            "range": "stddev: 0.0005439536089748544",
            "extra": "mean: 5.153315068493218 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.824204279443,
            "unit": "iter/sec",
            "range": "stddev: 0.00038289572969600096",
            "extra": "mean: 3.3242005988024665 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.10142489527863,
            "unit": "iter/sec",
            "range": "stddev: 0.001262278335024188",
            "extra": "mean: 10.090672268907424 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.73265841769725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003981968565075195",
            "extra": "mean: 7.208108108108137 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.55786133360033,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254736343350908",
            "extra": "mean: 5.389154589371863 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.2764295593197,
            "unit": "iter/sec",
            "range": "stddev: 0.00042321922975173794",
            "extra": "mean: 3.5301207430341264 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.149351037741383,
            "unit": "iter/sec",
            "range": "stddev: 0.0037684143761334125",
            "extra": "mean: 82.30892307692382 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.990496148283759,
            "unit": "iter/sec",
            "range": "stddev: 0.007017403491064313",
            "extra": "mean: 83.3993846153842 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.49984850014766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006015735179471197",
            "extra": "mean: 6.600666666666834 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.14052242320588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005159840552248618",
            "extra": "mean: 4.402560975609672 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 428.0689403259295,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917986573952061",
            "extra": "mean: 2.336072314049707 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.1449903215977,
            "unit": "iter/sec",
            "range": "stddev: 0.00012299138937212499",
            "extra": "mean: 2.2928155136268695 msec\nrounds: 477"
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
        "date": 1648614649558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.61987481512739,
            "unit": "iter/sec",
            "range": "stddev: 0.0006348537186835738",
            "extra": "mean: 8.290507692307655 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.6773158305088,
            "unit": "iter/sec",
            "range": "stddev: 0.0004162371898021973",
            "extra": "mean: 6.7259756097560555 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.31419841169975,
            "unit": "iter/sec",
            "range": "stddev: 0.00027481316386082595",
            "extra": "mean: 4.80044090909089 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.48438274211935,
            "unit": "iter/sec",
            "range": "stddev: 0.0003782947827740844",
            "extra": "mean: 3.1798081395349 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.8786719738796,
            "unit": "iter/sec",
            "range": "stddev: 0.0014013518778272374",
            "extra": "mean: 10.012147540983738 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.3157337283155,
            "unit": "iter/sec",
            "range": "stddev: 0.000652772761644117",
            "extra": "mean: 7.2824866666666095 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.54171914427468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007308973038587669",
            "extra": "mean: 5.33214691943133 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.69110092791607,
            "unit": "iter/sec",
            "range": "stddev: 0.00035852852675015656",
            "extra": "mean: 3.314648648648516 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.099991297863019,
            "unit": "iter/sec",
            "range": "stddev: 0.004021856889628975",
            "extra": "mean: 76.33592857142801 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.901810769141463,
            "unit": "iter/sec",
            "range": "stddev: 0.004366269799444939",
            "extra": "mean: 77.50849999999991 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.92401295393006,
            "unit": "iter/sec",
            "range": "stddev: 0.0005578432277131037",
            "extra": "mean: 6.21411299435022 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.08051242089823,
            "unit": "iter/sec",
            "range": "stddev: 0.00042375931514372297",
            "extra": "mean: 4.384416666666404 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.4714076035373,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935836861945536",
            "extra": "mean: 2.1716874999999853 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.9714434060211,
            "unit": "iter/sec",
            "range": "stddev: 0.00029288445507975495",
            "extra": "mean: 2.3257358490566133 msec\nrounds: 477"
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
        "date": 1648734893419,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.74574721750292,
            "unit": "iter/sec",
            "range": "stddev: 0.00047125013598246004",
            "extra": "mean: 8.016305343511473 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.1244772220536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828816996690244",
            "extra": "mean: 6.890636363636366 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.7313175851806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003281083830471468",
            "extra": "mean: 4.790847926267283 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.6887767345025,
            "unit": "iter/sec",
            "range": "stddev: 0.0001350245209195183",
            "extra": "mean: 2.961306590257868 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.23029573960177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005093853570300988",
            "extra": "mean: 8.38713008130076 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.8354523295965,
            "unit": "iter/sec",
            "range": "stddev: 0.00045273592079715755",
            "extra": "mean: 7.643188311688119 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.31699006792107,
            "unit": "iter/sec",
            "range": "stddev: 0.00023614285744233524",
            "extra": "mean: 5.146230392156973 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.9560064417726,
            "unit": "iter/sec",
            "range": "stddev: 0.00011257119317218741",
            "extra": "mean: 3.1851596385542114 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.101168156300634,
            "unit": "iter/sec",
            "range": "stddev: 0.0022795237176044332",
            "extra": "mean: 76.3290714285717 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.551696333588614,
            "unit": "iter/sec",
            "range": "stddev: 0.0013221201359363006",
            "extra": "mean: 73.79149999999969 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.35648846109902,
            "unit": "iter/sec",
            "range": "stddev: 0.00037677974384162544",
            "extra": "mean: 6.159285714285463 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.14388021074564,
            "unit": "iter/sec",
            "range": "stddev: 0.00016362763800995705",
            "extra": "mean: 4.129776061776443 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.7846823752542,
            "unit": "iter/sec",
            "range": "stddev: 0.00009301014189774711",
            "extra": "mean: 2.1106634241247266 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.990006212404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006801538943252306",
            "extra": "mean: 2.2124382978726067 msec\nrounds: 470"
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
        "date": 1648765927761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.6275104314527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886410975753935",
            "extra": "mean: 8.8788253968254 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.7135871463504,
            "unit": "iter/sec",
            "range": "stddev: 0.00046405163546984536",
            "extra": "mean: 7.157499999999978 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.12599594892797,
            "unit": "iter/sec",
            "range": "stddev: 0.0003399554366298651",
            "extra": "mean: 5.177966824644618 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.51648764707136,
            "unit": "iter/sec",
            "range": "stddev: 0.00017798550035707543",
            "extra": "mean: 3.2731457725947246 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.05753740615172,
            "unit": "iter/sec",
            "range": "stddev: 0.000579957911801715",
            "extra": "mean: 9.895352941176325 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.30053168276172,
            "unit": "iter/sec",
            "range": "stddev: 0.00039371742431300636",
            "extra": "mean: 7.55854861111111 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.20341615198,
            "unit": "iter/sec",
            "range": "stddev: 0.00020687720446000435",
            "extra": "mean: 5.2853168316830885 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.4313739180417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009069393736770999",
            "extra": "mean: 3.263373417721452 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.042531695860225,
            "unit": "iter/sec",
            "range": "stddev: 0.0014881349711324974",
            "extra": "mean: 76.67223076923062 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.863792650364012,
            "unit": "iter/sec",
            "range": "stddev: 0.0010092105608059956",
            "extra": "mean: 77.73757142857107 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.67811862042302,
            "unit": "iter/sec",
            "range": "stddev: 0.000369821810417746",
            "extra": "mean: 6.262598837209112 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.32739319169542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793306202669822",
            "extra": "mean: 4.51819354838686 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.8782141933076,
            "unit": "iter/sec",
            "range": "stddev: 0.00014398792617882977",
            "extra": "mean: 2.257957081545492 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.2070629735075,
            "unit": "iter/sec",
            "range": "stddev: 0.00013529901949640917",
            "extra": "mean: 2.303048672566189 msec\nrounds: 452"
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
        "date": 1648768231204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.24664967825971,
            "unit": "iter/sec",
            "range": "stddev: 0.0006337826525730227",
            "extra": "mean: 8.456899224806158 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5994729638459,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617710101982861",
            "extra": "mean: 6.684515527950239 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.05219499674962,
            "unit": "iter/sec",
            "range": "stddev: 0.0004600048574483136",
            "extra": "mean: 4.949216216216245 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.34041179590207,
            "unit": "iter/sec",
            "range": "stddev: 0.00031302597895201204",
            "extra": "mean: 3.1611516034985265 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.71116043579799,
            "unit": "iter/sec",
            "range": "stddev: 0.0004819063188398335",
            "extra": "mean: 9.114842975206622 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.99320338572645,
            "unit": "iter/sec",
            "range": "stddev: 0.00024844758578841935",
            "extra": "mean: 7.042590604026917 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.6026926565061,
            "unit": "iter/sec",
            "range": "stddev: 0.0005387444213308945",
            "extra": "mean: 5.219133333333371 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.95841894084106,
            "unit": "iter/sec",
            "range": "stddev: 0.00018724604524823692",
            "extra": "mean: 3.2158640483383953 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.512103053530556,
            "unit": "iter/sec",
            "range": "stddev: 0.002821216508838944",
            "extra": "mean: 79.92261538461584 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.453932424962668,
            "unit": "iter/sec",
            "range": "stddev: 0.003682453268804846",
            "extra": "mean: 80.29592307692305 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.44004533606122,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729939113875661",
            "extra": "mean: 5.936830508474761 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.37081461431615,
            "unit": "iter/sec",
            "range": "stddev: 0.00028492119490719985",
            "extra": "mean: 4.212817829457323 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 422.7113261322889,
            "unit": "iter/sec",
            "range": "stddev: 0.001122801041059652",
            "extra": "mean: 2.3656806387228118 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 406.4780493205061,
            "unit": "iter/sec",
            "range": "stddev: 0.0007960913019781936",
            "extra": "mean: 2.460157446808412 msec\nrounds: 470"
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
        "date": 1648769285431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.22552850855944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003652125104786076",
            "extra": "mean: 8.115201550387658 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.78533925455397,
            "unit": "iter/sec",
            "range": "stddev: 0.00021444128075787715",
            "extra": "mean: 6.588251572326985 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.2524456379568,
            "unit": "iter/sec",
            "range": "stddev: 0.00010623445987576843",
            "extra": "mean: 4.778916666666703 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.3071049531695,
            "unit": "iter/sec",
            "range": "stddev: 0.00015296894854249383",
            "extra": "mean: 3.1026309523809523 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.04381757203151,
            "unit": "iter/sec",
            "range": "stddev: 0.000631656751777548",
            "extra": "mean: 9.255504132231463 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.6508940094283,
            "unit": "iter/sec",
            "range": "stddev: 0.00028825825772261756",
            "extra": "mean: 7.010120805369131 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.97058125102816,
            "unit": "iter/sec",
            "range": "stddev: 0.00013295697710897077",
            "extra": "mean: 5.000735576923061 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.51515176743925,
            "unit": "iter/sec",
            "range": "stddev: 0.00007340458452759086",
            "extra": "mean: 3.1794970588235008 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.13830695733982,
            "unit": "iter/sec",
            "range": "stddev: 0.003272535902136052",
            "extra": "mean: 76.11330769230825 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.29966617837891,
            "unit": "iter/sec",
            "range": "stddev: 0.0012607761868796091",
            "extra": "mean: 75.1898571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.9451109797916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002821509654256872",
            "extra": "mean: 6.062622857142555 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.72799061939986,
            "unit": "iter/sec",
            "range": "stddev: 0.00011361173950615708",
            "extra": "mean: 4.08616929133863 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.7680341682286,
            "unit": "iter/sec",
            "range": "stddev: 0.00005393352784168195",
            "extra": "mean: 2.124188405797006 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.3573051287412,
            "unit": "iter/sec",
            "range": "stddev: 0.00010112292642950113",
            "extra": "mean: 2.2303640167362953 msec\nrounds: 478"
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
        "date": 1648770140022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.13151038577075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004668869729924292",
            "extra": "mean: 7.804481481481482 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.39548221939376,
            "unit": "iter/sec",
            "range": "stddev: 0.00027208806388438864",
            "extra": "mean: 6.313311377245589 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.0454194308492,
            "unit": "iter/sec",
            "range": "stddev: 0.00041817825810707484",
            "extra": "mean: 4.693834782608797 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.4086678301336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001972845185420639",
            "extra": "mean: 3.170489913544671 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.05784351578697,
            "unit": "iter/sec",
            "range": "stddev: 0.0008242678689895287",
            "extra": "mean: 9.086131147541133 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.29952474621845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007409361727631082",
            "extra": "mean: 7.283346405228853 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.19956091422364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557080460618531",
            "extra": "mean: 5.285424528301967 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.8611095756604,
            "unit": "iter/sec",
            "range": "stddev: 0.000297607887008694",
            "extra": "mean: 3.269457831325337 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.561126791047615,
            "unit": "iter/sec",
            "range": "stddev: 0.002464962757818325",
            "extra": "mean: 79.61069230769215 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.164448370338352,
            "unit": "iter/sec",
            "range": "stddev: 0.004131645014477516",
            "extra": "mean: 82.20676923076826 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.85440201934213,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990868395032123",
            "extra": "mean: 6.21680219780217 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.3074378906873,
            "unit": "iter/sec",
            "range": "stddev: 0.00024407041206960472",
            "extra": "mean: 4.0765172413794275 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.4456100043953,
            "unit": "iter/sec",
            "range": "stddev: 0.0002160491715728571",
            "extra": "mean: 2.1577505070994545 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.2004303441307,
            "unit": "iter/sec",
            "range": "stddev: 0.0002225384094382071",
            "extra": "mean: 2.2977918454934874 msec\nrounds: 466"
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
        "date": 1648770942917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.97320059564926,
            "unit": "iter/sec",
            "range": "stddev: 0.00023058888325193206",
            "extra": "mean: 8.266293650793633 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.92178608706996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001765496249841084",
            "extra": "mean: 6.670144654088037 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.53639734870177,
            "unit": "iter/sec",
            "range": "stddev: 0.0002323338175689818",
            "extra": "mean: 4.913126168224273 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.24888844405126,
            "unit": "iter/sec",
            "range": "stddev: 0.00011909754240835268",
            "extra": "mean: 3.065144542772874 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.66836287067923,
            "unit": "iter/sec",
            "range": "stddev: 0.0003723935615796367",
            "extra": "mean: 9.118399999999987 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.44928027414215,
            "unit": "iter/sec",
            "range": "stddev: 0.00029883707177208186",
            "extra": "mean: 7.275410958904282 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.1087143681614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001991518009724026",
            "extra": "mean: 5.2326237623761624 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.5832355870631,
            "unit": "iter/sec",
            "range": "stddev: 0.00013363435076040804",
            "extra": "mean: 3.230149068323092 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.791859991264888,
            "unit": "iter/sec",
            "range": "stddev: 0.0014998982236529863",
            "extra": "mean: 78.17471428571488 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.315108438928073,
            "unit": "iter/sec",
            "range": "stddev: 0.0008251197082639517",
            "extra": "mean: 81.20107142857132 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.5795125438606,
            "unit": "iter/sec",
            "range": "stddev: 0.00033491674705038286",
            "extra": "mean: 6.26646857142861 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.86143137049683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002516890967375211",
            "extra": "mean: 4.204128404669287 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.71267004357077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006461015986148815",
            "extra": "mean: 2.1752717842325766 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.2747523408732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946941761370433",
            "extra": "mean: 2.308004319654571 msec\nrounds: 463"
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
        "date": 1648866087193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.98485189493613,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510717806806125",
            "extra": "mean: 8.850744000000049 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.31745234219787,
            "unit": "iter/sec",
            "range": "stddev: 0.0009669178022354637",
            "extra": "mean: 7.17785161290313 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.7821778650405,
            "unit": "iter/sec",
            "range": "stddev: 0.00023502940525812772",
            "extra": "mean: 5.030632075471734 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.0526778132359,
            "unit": "iter/sec",
            "range": "stddev: 0.0003764256795432019",
            "extra": "mean: 3.3216778115502104 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.60677081658294,
            "unit": "iter/sec",
            "range": "stddev: 0.0008222913199821585",
            "extra": "mean: 9.380267241379078 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.64119962156373,
            "unit": "iter/sec",
            "range": "stddev: 0.0037229821174052354",
            "extra": "mean: 9.038224489795773 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.39771862594878,
            "unit": "iter/sec",
            "range": "stddev: 0.001471679736315606",
            "extra": "mean: 5.7013284313725245 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.13957527483757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003788487099042884",
            "extra": "mean: 3.3882274143302804 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.406190116274624,
            "unit": "iter/sec",
            "range": "stddev: 0.0019667723331028915",
            "extra": "mean: 80.60492307692311 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.995973044125794,
            "unit": "iter/sec",
            "range": "stddev: 0.0037879061583023163",
            "extra": "mean: 83.36130769230775 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.4201048070296,
            "unit": "iter/sec",
            "range": "stddev: 0.0006462288412901782",
            "extra": "mean: 6.783335294117332 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.82021669941284,
            "unit": "iter/sec",
            "range": "stddev: 0.00043356900251091256",
            "extra": "mean: 4.528570866141438 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 416.02540273688993,
            "unit": "iter/sec",
            "range": "stddev: 0.00036659641915761596",
            "extra": "mean: 2.4036993736953063 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 394.15233564860364,
            "unit": "iter/sec",
            "range": "stddev: 0.0010179513626913802",
            "extra": "mean: 2.537090128755508 msec\nrounds: 466"
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
        "date": 1649082338270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.67628977116318,
            "unit": "iter/sec",
            "range": "stddev: 0.0005206709802901459",
            "extra": "mean: 8.355874015748078 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.93478635870423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491470621684152",
            "extra": "mean: 6.714348101265846 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.98334620624166,
            "unit": "iter/sec",
            "range": "stddev: 0.00017320547206763493",
            "extra": "mean: 4.80807727272728 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.03928079374856,
            "unit": "iter/sec",
            "range": "stddev: 0.00007350184401224024",
            "extra": "mean: 3.002648809523765 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.49727996797895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003747989815872138",
            "extra": "mean: 8.733831932773132 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.6480503554755,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617634587863078",
            "extra": "mean: 7.212506756756626 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.33641676526435,
            "unit": "iter/sec",
            "range": "stddev: 0.000498634201810975",
            "extra": "mean: 5.337990430622022 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.90626170005106,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742210528017115",
            "extra": "mean: 3.1455813253012104 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.499158710471367,
            "unit": "iter/sec",
            "range": "stddev: 0.0017536716025940752",
            "extra": "mean: 80.0053846153849 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.754226063751524,
            "unit": "iter/sec",
            "range": "stddev: 0.00197890186460521",
            "extra": "mean: 78.40538461538452 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.07003549482616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553255941526254",
            "extra": "mean: 6.058034682081009 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.1651556866012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002170409634686325",
            "extra": "mean: 4.1465359999996 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 430.1184980860596,
            "unit": "iter/sec",
            "range": "stddev: 0.00022787587971900505",
            "extra": "mean: 2.324940695296291 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.57860117094543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001200051379506563",
            "extra": "mean: 2.2243051546391666 msec\nrounds: 485"
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
        "date": 1649083846369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.36342615197563,
            "unit": "iter/sec",
            "range": "stddev: 0.0003646846532288184",
            "extra": "mean: 8.520541984732837 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.86760654129606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729958830494737",
            "extra": "mean: 6.499093750000023 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.8863143314017,
            "unit": "iter/sec",
            "range": "stddev: 0.00011502847428563064",
            "extra": "mean: 4.675380952380949 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.00674432290396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001480039519034092",
            "extra": "mean: 3.06742120343841 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.98848550671084,
            "unit": "iter/sec",
            "range": "stddev: 0.00033949187520966796",
            "extra": "mean: 8.621545454545503 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.17327932017406,
            "unit": "iter/sec",
            "range": "stddev: 0.00021171858695439696",
            "extra": "mean: 6.9360980392160005 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.52854603872072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002301597404606481",
            "extra": "mean: 4.962076190476086 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.2994759810315,
            "unit": "iter/sec",
            "range": "stddev: 0.00018227669116049688",
            "extra": "mean: 3.2435994152047356 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.903856133064568,
            "unit": "iter/sec",
            "range": "stddev: 0.0018048096928685192",
            "extra": "mean: 77.49621428571426 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.816897798056676,
            "unit": "iter/sec",
            "range": "stddev: 0.0033551787984004307",
            "extra": "mean: 78.02200000000171 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.7494562358689,
            "unit": "iter/sec",
            "range": "stddev: 0.0003402265704227455",
            "extra": "mean: 5.961271186440816 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.3477997333074,
            "unit": "iter/sec",
            "range": "stddev: 0.0001934692920473309",
            "extra": "mean: 4.0925271317828384 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.4771120822256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000846409380901512",
            "extra": "mean: 2.1345759999999387 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.7142693998771,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389198664719048",
            "extra": "mean: 2.310993814432975 msec\nrounds: 485"
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
        "date": 1649166880211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.98517367988354,
            "unit": "iter/sec",
            "range": "stddev: 0.00034578119526235986",
            "extra": "mean: 8.19771755725187 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.50023978405582,
            "unit": "iter/sec",
            "range": "stddev: 0.00047623234258859653",
            "extra": "mean: 7.017532051282125 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.5457822119094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604738686173598",
            "extra": "mean: 4.888881057268637 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.15561063742524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002036428724592364",
            "extra": "mean: 3.1332678062678454 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.35245023968174,
            "unit": "iter/sec",
            "range": "stddev: 0.0004182033276750223",
            "extra": "mean: 8.822041322313877 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.17704874368323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562676456510999",
            "extra": "mean: 7.5088013245032315 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.67700039356146,
            "unit": "iter/sec",
            "range": "stddev: 0.00028406308430043174",
            "extra": "mean: 5.033295238095446 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.3684688618571,
            "unit": "iter/sec",
            "range": "stddev: 0.0002076653396343646",
            "extra": "mean: 3.1608712574850557 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.781583934269557,
            "unit": "iter/sec",
            "range": "stddev: 0.0029772304287112535",
            "extra": "mean: 84.87823076923135 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.810469109524412,
            "unit": "iter/sec",
            "range": "stddev: 0.0022813979941458153",
            "extra": "mean: 78.0611538461549 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.89724075091252,
            "unit": "iter/sec",
            "range": "stddev: 0.00033042558197239255",
            "extra": "mean: 6.064382857142903 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.59401044539717,
            "unit": "iter/sec",
            "range": "stddev: 0.00022806093913009371",
            "extra": "mean: 4.156379446640256 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.212516865288,
            "unit": "iter/sec",
            "range": "stddev: 0.00009941252074114738",
            "extra": "mean: 2.1266979591836166 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.50159017859323,
            "unit": "iter/sec",
            "range": "stddev: 0.000138752691856464",
            "extra": "mean: 2.234628930817677 msec\nrounds: 477"
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
        "date": 1649339415076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.66676200256227,
            "unit": "iter/sec",
            "range": "stddev: 0.0006287553826567871",
            "extra": "mean: 8.219171641791045 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.66419097150714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006190586120228442",
            "extra": "mean: 6.681625000000024 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.46238424317463,
            "unit": "iter/sec",
            "range": "stddev: 0.00018291179706003517",
            "extra": "mean: 4.55658951965068 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 350.10048993889376,
            "unit": "iter/sec",
            "range": "stddev: 0.00008338984721724589",
            "extra": "mean: 2.856322766570647 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.08852735798847,
            "unit": "iter/sec",
            "range": "stddev: 0.00033383265487414986",
            "extra": "mean: 8.46822314049589 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.27948039896066,
            "unit": "iter/sec",
            "range": "stddev: 0.00039720712686623654",
            "extra": "mean: 7.028420382165698 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.88789985000807,
            "unit": "iter/sec",
            "range": "stddev: 0.0002862409080224101",
            "extra": "mean: 4.880717703349336 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.80090804619425,
            "unit": "iter/sec",
            "range": "stddev: 0.00007875286774042111",
            "extra": "mean: 3.0506321839080397 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.514517970930267,
            "unit": "iter/sec",
            "range": "stddev: 0.0011758208098703806",
            "extra": "mean: 73.99450000000003 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.843006463695502,
            "unit": "iter/sec",
            "range": "stddev: 0.0018392678144866159",
            "extra": "mean: 72.23864285714144 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.093996261801,
            "unit": "iter/sec",
            "range": "stddev: 0.000287832413136265",
            "extra": "mean: 5.879102272727163 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.56881856821119,
            "unit": "iter/sec",
            "range": "stddev: 0.00010807283002034144",
            "extra": "mean: 4.039280898876512 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 480.5828568961481,
            "unit": "iter/sec",
            "range": "stddev: 0.00007501843031757846",
            "extra": "mean: 2.080806640624919 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.44594816457203,
            "unit": "iter/sec",
            "range": "stddev: 0.00006401989322764361",
            "extra": "mean: 2.1671010526315335 msec\nrounds: 475"
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
        "date": 1649690163489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.5025819298664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005655427642735412",
            "extra": "mean: 8.23027777777775 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.17189490377248,
            "unit": "iter/sec",
            "range": "stddev: 0.00018943409579578893",
            "extra": "mean: 6.571515723270455 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.97641039383012,
            "unit": "iter/sec",
            "range": "stddev: 0.00027771438084042374",
            "extra": "mean: 4.97570833333333 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.0520522235446,
            "unit": "iter/sec",
            "range": "stddev: 0.00007580917314789983",
            "extra": "mean: 3.0482967359050988 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.02672615006433,
            "unit": "iter/sec",
            "range": "stddev: 0.000473379600265771",
            "extra": "mean: 9.088700854700612 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 116.33971195891776,
            "unit": "iter/sec",
            "range": "stddev: 0.0008091045384959093",
            "extra": "mean: 8.59551724137948 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.6152091639091,
            "unit": "iter/sec",
            "range": "stddev: 0.0003568594813772621",
            "extra": "mean: 5.1916980198019225 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.54055747966663,
            "unit": "iter/sec",
            "range": "stddev: 0.00017622407628364815",
            "extra": "mean: 3.2305944272446068 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.583726724599785,
            "unit": "iter/sec",
            "range": "stddev: 0.0035752465741443217",
            "extra": "mean: 79.46771428571405 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.614121344608364,
            "unit": "iter/sec",
            "range": "stddev: 0.0011426016101686257",
            "extra": "mean: 73.45314285714315 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.20204323233523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260201922580662",
            "extra": "mean: 6.401964912280937 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.48871210938108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003251188619418349",
            "extra": "mean: 4.415231075697306 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.9751795243846,
            "unit": "iter/sec",
            "range": "stddev: 0.00021199634251146268",
            "extra": "mean: 2.202763598326385 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.8894210873941,
            "unit": "iter/sec",
            "range": "stddev: 0.00014758891969013368",
            "extra": "mean: 2.315407488986972 msec\nrounds: 454"
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
        "date": 1649778024698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.84954207919613,
            "unit": "iter/sec",
            "range": "stddev: 0.00020497878957250696",
            "extra": "mean: 7.821694029850746 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.4256228490299,
            "unit": "iter/sec",
            "range": "stddev: 0.00022124619067230008",
            "extra": "mean: 6.272517441860412 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.45286063750513,
            "unit": "iter/sec",
            "range": "stddev: 0.00010305588454837958",
            "extra": "mean: 4.455278481012615 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 354.97500733708625,
            "unit": "iter/sec",
            "range": "stddev: 0.00011189687698449653",
            "extra": "mean: 2.8170997375327738 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.26387203851013,
            "unit": "iter/sec",
            "range": "stddev: 0.000577269611598024",
            "extra": "mean: 8.1126771653545 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.7933508765796,
            "unit": "iter/sec",
            "range": "stddev: 0.00017699884614742718",
            "extra": "mean: 6.460225806451619 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.3690314690618,
            "unit": "iter/sec",
            "range": "stddev: 0.00035205733756830574",
            "extra": "mean: 4.708784482758642 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.68695330117555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000762877813307278",
            "extra": "mean: 2.961322580645045 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.803587828548414,
            "unit": "iter/sec",
            "range": "stddev: 0.0012606739958487747",
            "extra": "mean: 72.44493333333324 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.282694516016544,
            "unit": "iter/sec",
            "range": "stddev: 0.0017531788353069816",
            "extra": "mean: 70.01480000000033 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.3460393199118,
            "unit": "iter/sec",
            "range": "stddev: 0.00018680975154873413",
            "extra": "mean: 5.484078534031544 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.0905685608277,
            "unit": "iter/sec",
            "range": "stddev: 0.00009573098640230853",
            "extra": "mean: 3.8300885608858155 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 518.7179318819432,
            "unit": "iter/sec",
            "range": "stddev: 0.00016741093252607334",
            "extra": "mean: 1.9278300180831103 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 500.4196616379086,
            "unit": "iter/sec",
            "range": "stddev: 0.00006048407780428651",
            "extra": "mean: 1.9983227611939345 msec\nrounds: 536"
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
        "date": 1649968459853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.31681942376939,
            "unit": "iter/sec",
            "range": "stddev: 0.000730292274836633",
            "extra": "mean: 8.451883720930246 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.9325725195241,
            "unit": "iter/sec",
            "range": "stddev: 0.0004988209119566474",
            "extra": "mean: 6.759836477987432 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.53622838054733,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491262327139079",
            "extra": "mean: 4.986630136986277 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3185356976095,
            "unit": "iter/sec",
            "range": "stddev: 0.00034577516835655053",
            "extra": "mean: 3.141507288629783 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.40297115424059,
            "unit": "iter/sec",
            "range": "stddev: 0.0006414890086430538",
            "extra": "mean: 8.896561983470962 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.31840260914828,
            "unit": "iter/sec",
            "range": "stddev: 0.0008155696056747538",
            "extra": "mean: 7.673513333333328 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.37797929569848,
            "unit": "iter/sec",
            "range": "stddev: 0.00043496444291098694",
            "extra": "mean: 5.040882075471789 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.6174641513441,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966614746836689",
            "extra": "mean: 3.1987976190475425 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.799380195414608,
            "unit": "iter/sec",
            "range": "stddev: 0.005865725978789275",
            "extra": "mean: 84.75021428571416 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.36257829039172,
            "unit": "iter/sec",
            "range": "stddev: 0.0036037026868130317",
            "extra": "mean: 74.83585714285722 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.54800574935388,
            "unit": "iter/sec",
            "range": "stddev: 0.000515021423110767",
            "extra": "mean: 5.933027777777985 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.89621630978402,
            "unit": "iter/sec",
            "range": "stddev: 0.00040843406368689755",
            "extra": "mean: 4.116984674329483 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.53123950910026,
            "unit": "iter/sec",
            "range": "stddev: 0.0001986977801088105",
            "extra": "mean: 2.162016129032351 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.7759326077154,
            "unit": "iter/sec",
            "range": "stddev: 0.00015398625490815237",
            "extra": "mean: 2.1892572016459804 msec\nrounds: 486"
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
        "date": 1671164181915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.25208709456838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006756010568852015",
            "extra": "mean: 9.411579831932732 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.69523035880638,
            "unit": "iter/sec",
            "range": "stddev: 0.00038402292367526673",
            "extra": "mean: 7.369455782312998 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.7589545102103,
            "unit": "iter/sec",
            "range": "stddev: 0.00036705655447971555",
            "extra": "mean: 5.471688118811889 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.2533219031299,
            "unit": "iter/sec",
            "range": "stddev: 0.00028496683120875167",
            "extra": "mean: 3.6596078431372434 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.39845637373193,
            "unit": "iter/sec",
            "range": "stddev: 0.0006617365910073059",
            "extra": "mean: 9.960312500000132 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.97507390529603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005598633613550086",
            "extra": "mean: 8.001595588235322 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.68336306414818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005079595265452017",
            "extra": "mean: 5.999398989898887 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.40800240984885,
            "unit": "iter/sec",
            "range": "stddev: 0.00015568493650230304",
            "extra": "mean: 3.408223333333436 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.83021637465743,
            "unit": "iter/sec",
            "range": "stddev: 0.004019978262474439",
            "extra": "mean: 84.52930769230814 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.363467500919953,
            "unit": "iter/sec",
            "range": "stddev: 0.00629334410819168",
            "extra": "mean: 88.00130769230809 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.06413646497919,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413046171866801",
            "extra": "mean: 6.70852173913031 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.4905986586535,
            "unit": "iter/sec",
            "range": "stddev: 0.0004726487616171392",
            "extra": "mean: 4.684047008547121 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 315.62890624301366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002871499687031557",
            "extra": "mean: 3.16827762039661 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 284.2802390337089,
            "unit": "iter/sec",
            "range": "stddev: 0.00037325149281600465",
            "extra": "mean: 3.5176556886228862 msec\nrounds: 334"
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
        "date": 1671168413433,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.57331399452195,
            "unit": "iter/sec",
            "range": "stddev: 0.0009293794578167108",
            "extra": "mean: 9.043773437499958 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.61711118857716,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893594982905569",
            "extra": "mean: 7.162445859872623 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.77369152106812,
            "unit": "iter/sec",
            "range": "stddev: 0.0007523880386489081",
            "extra": "mean: 5.382893518518432 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.34818310712336,
            "unit": "iter/sec",
            "range": "stddev: 0.00042500172897095727",
            "extra": "mean: 3.4441407185628994 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.98456109395335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007486193039658587",
            "extra": "mean: 9.525210084033924 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.83979855477185,
            "unit": "iter/sec",
            "range": "stddev: 0.0005544582975468161",
            "extra": "mean: 7.416208053691214 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.5397156315207,
            "unit": "iter/sec",
            "range": "stddev: 0.0005684032210001492",
            "extra": "mean: 5.332203883495306 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.7799911291469,
            "unit": "iter/sec",
            "range": "stddev: 0.00046164922750797666",
            "extra": "mean: 3.9560093167702255 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.651658434321613,
            "unit": "iter/sec",
            "range": "stddev: 0.002034519737948299",
            "extra": "mean: 85.824692307694 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.167807164592052,
            "unit": "iter/sec",
            "range": "stddev: 0.004308092529599361",
            "extra": "mean: 82.18407692307696 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.90862170423333,
            "unit": "iter/sec",
            "range": "stddev: 0.0007996594369235163",
            "extra": "mean: 6.62652662721886 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.40427678898442,
            "unit": "iter/sec",
            "range": "stddev: 0.0007537492389310101",
            "extra": "mean: 4.7527551020405605 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 310.6914259684609,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244055486903678",
            "extra": "mean: 3.2186276041666906 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.93307475287776,
            "unit": "iter/sec",
            "range": "stddev: 0.00036819373149404454",
            "extra": "mean: 3.0966168478259557 msec\nrounds: 368"
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
        "date": 1671338234785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.25950634134098,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127064355069285",
            "extra": "mean: 8.601447154471598 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.73579669557893,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551201743271879",
            "extra": "mean: 6.9572091503268405 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5241506372525,
            "unit": "iter/sec",
            "range": "stddev: 0.00011896936350485875",
            "extra": "mean: 5.114457711442801 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.97081960252217,
            "unit": "iter/sec",
            "range": "stddev: 0.00030239742104241966",
            "extra": "mean: 3.2576386292835235 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.14863627183172,
            "unit": "iter/sec",
            "range": "stddev: 0.0004700571114803256",
            "extra": "mean: 9.420752212389623 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.07736860867578,
            "unit": "iter/sec",
            "range": "stddev: 0.00018060308463150086",
            "extra": "mean: 7.348760563380292 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.40450343755057,
            "unit": "iter/sec",
            "range": "stddev: 0.000458935795356434",
            "extra": "mean: 5.393612244897967 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.93891522050274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289100908501075",
            "extra": "mean: 3.379075709779177 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.03018908665819,
            "unit": "iter/sec",
            "range": "stddev: 0.0029971942227339796",
            "extra": "mean: 76.74485714285721 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.351822428391293,
            "unit": "iter/sec",
            "range": "stddev: 0.002628726537469048",
            "extra": "mean: 74.89614285714298 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.751332963865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022504438659922",
            "extra": "mean: 6.420490797545883 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.28974433724431,
            "unit": "iter/sec",
            "range": "stddev: 0.00005900419546057771",
            "extra": "mean: 4.214257142857239 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 350.18903807732386,
            "unit": "iter/sec",
            "range": "stddev: 0.00035858776182634707",
            "extra": "mean: 2.85560052219337 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.75237798569407,
            "unit": "iter/sec",
            "range": "stddev: 0.0003209320618147623",
            "extra": "mean: 2.996233333333325 msec\nrounds: 360"
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
        "date": 1671350586304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.47184553821909,
            "unit": "iter/sec",
            "range": "stddev: 0.00017289436530047573",
            "extra": "mean: 8.033945312500006 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.50222414752236,
            "unit": "iter/sec",
            "range": "stddev: 0.00011855332535960791",
            "extra": "mean: 6.472398734177292 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.31691813622018,
            "unit": "iter/sec",
            "range": "stddev: 0.00009602963525773392",
            "extra": "mean: 4.823533018867941 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.71873617994055,
            "unit": "iter/sec",
            "range": "stddev: 0.00007348873715544759",
            "extra": "mean: 3.108305135951702 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.80606862725932,
            "unit": "iter/sec",
            "range": "stddev: 0.00016875057085282232",
            "extra": "mean: 8.635126050420231 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.60807303880094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009914159609605203",
            "extra": "mean: 6.915243243243288 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.39444265537577,
            "unit": "iter/sec",
            "range": "stddev: 0.00018834451853308424",
            "extra": "mean: 5.040463768116055 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.45572267044275,
            "unit": "iter/sec",
            "range": "stddev: 0.00008985038587486445",
            "extra": "mean: 3.241956386292791 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.43542980419778,
            "unit": "iter/sec",
            "range": "stddev: 0.001783257669991073",
            "extra": "mean: 74.43007142857157 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.100540614727453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005928998309362192",
            "extra": "mean: 70.91926666666524 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.7178926876865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706889280440671",
            "extra": "mean: 5.962393063584074 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.00145984685682,
            "unit": "iter/sec",
            "range": "stddev: 0.00007042358684306046",
            "extra": "mean: 4.1322064777329 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 362.5720199876112,
            "unit": "iter/sec",
            "range": "stddev: 0.00007339700059952292",
            "extra": "mean: 2.7580727272726926 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.69096276220745,
            "unit": "iter/sec",
            "range": "stddev: 0.000059923830589630306",
            "extra": "mean: 2.827326975476943 msec\nrounds: 367"
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
        "date": 1671358161435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.37392000332207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006415589277245242",
            "extra": "mean: 8.978762711864428 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.62047431867552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005280796398229923",
            "extra": "mean: 7.162273333333324 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.63087077363747,
            "unit": "iter/sec",
            "range": "stddev: 0.00023324135952064603",
            "extra": "mean: 5.2734029850746245 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.9361536758569,
            "unit": "iter/sec",
            "range": "stddev: 0.0003631039548909652",
            "extra": "mean: 3.4020993589742865 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.68271644563285,
            "unit": "iter/sec",
            "range": "stddev: 0.00019915897164542905",
            "extra": "mean: 8.95393693693688 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.9161229751225,
            "unit": "iter/sec",
            "range": "stddev: 0.00041936352026307884",
            "extra": "mean: 7.638478571428717 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.6166697614533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836748167573707",
            "extra": "mean: 5.273797927460951 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 274.91521925173845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002629846585051541",
            "extra": "mean: 3.6374850498338733 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.717767307903054,
            "unit": "iter/sec",
            "range": "stddev: 0.0037058784349141274",
            "extra": "mean: 78.6301538461536 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.042005957352321,
            "unit": "iter/sec",
            "range": "stddev: 0.0026816410477161325",
            "extra": "mean: 83.04264285714324 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 119.99379907821381,
            "unit": "iter/sec",
            "range": "stddev: 0.0027446072909332133",
            "extra": "mean: 8.333763975154953 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.80803045660295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006149059529748321",
            "extra": "mean: 4.6337478632478 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 312.3246990385134,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419178489736999",
            "extra": "mean: 3.20179608938545 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 305.45955041742775,
            "unit": "iter/sec",
            "range": "stddev: 0.0009124191073985152",
            "extra": "mean: 3.273755882353141 msec\nrounds: 340"
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
        "date": 1671363598647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.21934665187604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008008725068899239",
            "extra": "mean: 9.240491935483927 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.9604574297892,
            "unit": "iter/sec",
            "range": "stddev: 0.000533603532493495",
            "extra": "mean: 7.30137748344361 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.4649757635732,
            "unit": "iter/sec",
            "range": "stddev: 0.00035258801828303967",
            "extra": "mean: 5.0134114832536065 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.16137359301524,
            "unit": "iter/sec",
            "range": "stddev: 0.00033127225748373016",
            "extra": "mean: 3.5440712074303375 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.8959881829211,
            "unit": "iter/sec",
            "range": "stddev: 0.0006528216215433481",
            "extra": "mean: 10.427964912280848 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.07329280499795,
            "unit": "iter/sec",
            "range": "stddev: 0.0005581476713394285",
            "extra": "mean: 8.191800000000146 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.98792770524548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006663641788032195",
            "extra": "mean: 5.988456852791926 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.5919818339181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002848631883657553",
            "extra": "mean: 3.4892811501596945 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.048539635405158,
            "unit": "iter/sec",
            "range": "stddev: 0.0015653434847571399",
            "extra": "mean: 76.6369285714286 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.705812855825263,
            "unit": "iter/sec",
            "range": "stddev: 0.004400661079833898",
            "extra": "mean: 85.42764285714354 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.88528082681697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312614101187576",
            "extra": "mean: 6.498347305389159 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.13033385174802,
            "unit": "iter/sec",
            "range": "stddev: 0.0003529419531145361",
            "extra": "mean: 4.522219917012507 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 310.67935494373035,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967744732838547",
            "extra": "mean: 3.218752659574429 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 317.6213688598769,
            "unit": "iter/sec",
            "range": "stddev: 0.00021200165945899177",
            "extra": "mean: 3.1484027777777257 msec\nrounds: 360"
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
        "date": 1671374249964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.06897370463045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004173199218943998",
            "extra": "mean: 8.923076271186394 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.98167447900053,
            "unit": "iter/sec",
            "range": "stddev: 0.00033793697763081235",
            "extra": "mean: 7.300246575342467 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.94927067349246,
            "unit": "iter/sec",
            "range": "stddev: 0.0004103553414648667",
            "extra": "mean: 5.436281407035241 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.9683119586539,
            "unit": "iter/sec",
            "range": "stddev: 0.00013960911855516472",
            "extra": "mean: 3.4250292207793143 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.72325883743069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519847668502846",
            "extra": "mean: 10.446781818181996 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.71548255064009,
            "unit": "iter/sec",
            "range": "stddev: 0.0014146035242392806",
            "extra": "mean: 8.495059259259373 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.96322108206408,
            "unit": "iter/sec",
            "range": "stddev: 0.0003573554011380552",
            "extra": "mean: 5.715486910994647 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 267.07278403279514,
            "unit": "iter/sec",
            "range": "stddev: 0.0004715833479408508",
            "extra": "mean: 3.7442976588629313 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.08980305710821,
            "unit": "iter/sec",
            "range": "stddev: 0.0028831364970468196",
            "extra": "mean: 82.71433333333326 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.720623841347924,
            "unit": "iter/sec",
            "range": "stddev: 0.006940005401608816",
            "extra": "mean: 93.27815384615417 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.9571688687934,
            "unit": "iter/sec",
            "range": "stddev: 0.00045497965328755366",
            "extra": "mean: 6.851325000000097 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 196.76444930866802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005722438059387624",
            "extra": "mean: 5.082218884120076 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 301.6569650086993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002597666180697923",
            "extra": "mean: 3.315023738872271 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 286.55751150431263,
            "unit": "iter/sec",
            "range": "stddev: 0.00027144027340968044",
            "extra": "mean: 3.4897008797654574 msec\nrounds: 341"
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
        "date": 1671378055225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 88.62049033477791,
            "unit": "iter/sec",
            "range": "stddev: 0.001855412101794504",
            "extra": "mean: 11.284072072072068 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.80618577554026,
            "unit": "iter/sec",
            "range": "stddev: 0.0009572046965439925",
            "extra": "mean: 8.07714084507048 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.59548293082452,
            "unit": "iter/sec",
            "range": "stddev: 0.0013242563071770217",
            "extra": "mean: 6.596502617801061 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.77937480086422,
            "unit": "iter/sec",
            "range": "stddev: 0.0004379985577232444",
            "extra": "mean: 3.9096193771626235 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.85420620171811,
            "unit": "iter/sec",
            "range": "stddev: 0.0019079146139030444",
            "extra": "mean: 11.513547169811314 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.48114127837398,
            "unit": "iter/sec",
            "range": "stddev: 0.0008751630948370675",
            "extra": "mean: 9.051318518518453 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.71281591403476,
            "unit": "iter/sec",
            "range": "stddev: 0.0008871237080247421",
            "extra": "mean: 6.548238888888807 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.78066163296526,
            "unit": "iter/sec",
            "range": "stddev: 0.0012254619529776872",
            "extra": "mean: 4.612957597173108 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.84604449805074,
            "unit": "iter/sec",
            "range": "stddev: 0.00394413763128905",
            "extra": "mean: 84.41636363636397 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.873529146076558,
            "unit": "iter/sec",
            "range": "stddev: 0.007964923849975276",
            "extra": "mean: 91.96646153846243 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 128.31435095633415,
            "unit": "iter/sec",
            "range": "stddev: 0.0008993163837931069",
            "extra": "mean: 7.793360544217721 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 184.98687272054096,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861418694022355",
            "extra": "mean: 5.405788990825833 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 269.77794259679507,
            "unit": "iter/sec",
            "range": "stddev: 0.00042856737275179355",
            "extra": "mean: 3.706752265861041 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 302.41694300494896,
            "unit": "iter/sec",
            "range": "stddev: 0.000224915724778994",
            "extra": "mean: 3.3066930379745134 msec\nrounds: 316"
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
        "date": 1671379246305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.5936681992683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004063108556027414",
            "extra": "mean: 8.576795081967202 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.821284384112,
            "unit": "iter/sec",
            "range": "stddev: 0.0005745932339655915",
            "extra": "mean: 7.2557733333334085 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.6296765281468,
            "unit": "iter/sec",
            "range": "stddev: 0.0004018923220066866",
            "extra": "mean: 5.2457729468598675 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.5758519990489,
            "unit": "iter/sec",
            "range": "stddev: 0.0001796389173101336",
            "extra": "mean: 3.3159153605015885 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.70618864426281,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124256698309433",
            "extra": "mean: 9.642626086956495 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.12170139948807,
            "unit": "iter/sec",
            "range": "stddev: 0.0003513094051974192",
            "extra": "mean: 7.568779310344809 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.5097138347867,
            "unit": "iter/sec",
            "range": "stddev: 0.00023115348168195043",
            "extra": "mean: 5.390553299492398 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.9898880149478,
            "unit": "iter/sec",
            "range": "stddev: 0.00021231991162117583",
            "extra": "mean: 3.4483961038960578 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.69622468690196,
            "unit": "iter/sec",
            "range": "stddev: 0.002943419693911276",
            "extra": "mean: 78.76357142857186 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.154173490394335,
            "unit": "iter/sec",
            "range": "stddev: 0.0021005741248155043",
            "extra": "mean: 76.02149999999901 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.32620094659885,
            "unit": "iter/sec",
            "range": "stddev: 0.0005317193743882131",
            "extra": "mean: 6.608240963855873 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.27109968903565,
            "unit": "iter/sec",
            "range": "stddev: 0.00024720046576723483",
            "extra": "mean: 4.439095833333262 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.9958215083771,
            "unit": "iter/sec",
            "range": "stddev: 0.000138025944404559",
            "extra": "mean: 2.8985858310626473 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 327.4720832255849,
            "unit": "iter/sec",
            "range": "stddev: 0.0001822912028998334",
            "extra": "mean: 3.0536954177896507 msec\nrounds: 371"
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
        "date": 1671419492069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.64138685867017,
            "unit": "iter/sec",
            "range": "stddev: 0.0011575583209990571",
            "extra": "mean: 9.120643478260805 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.1389790559502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006269998632277926",
            "extra": "mean: 7.510948387096772 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.5172980199803,
            "unit": "iter/sec",
            "range": "stddev: 0.00034208382285206684",
            "extra": "mean: 5.332841346153827 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.79703329622663,
            "unit": "iter/sec",
            "range": "stddev: 0.00040652445415069883",
            "extra": "mean: 3.227919871794912 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.95190685968264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092767782227395",
            "extra": "mean: 9.905706896551669 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.48586367688918,
            "unit": "iter/sec",
            "range": "stddev: 0.00056498886054409",
            "extra": "mean: 7.844006944444315 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.32963456256948,
            "unit": "iter/sec",
            "range": "stddev: 0.00204920110176965",
            "extra": "mean: 6.122587628866045 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.20886510947213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003544331469306819",
            "extra": "mean: 3.556075657894742 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.494901633886867,
            "unit": "iter/sec",
            "range": "stddev: 0.004590964179059437",
            "extra": "mean: 80.03264285714299 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.793511935487631,
            "unit": "iter/sec",
            "range": "stddev: 0.009581608124756709",
            "extra": "mean: 84.79238461538493 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.65068612642136,
            "unit": "iter/sec",
            "range": "stddev: 0.0009398122898787693",
            "extra": "mean: 6.913206060606052 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.35645457668778,
            "unit": "iter/sec",
            "range": "stddev: 0.00023626814517115478",
            "extra": "mean: 4.538101694915331 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 330.51963357512136,
            "unit": "iter/sec",
            "range": "stddev: 0.00017896454480288267",
            "extra": "mean: 3.025538873994659 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 312.55074584386597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002879893855182996",
            "extra": "mean: 3.1994804469273213 msec\nrounds: 358"
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
        "date": 1671423903729,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.31607367216257,
            "unit": "iter/sec",
            "range": "stddev: 0.00021394866111952156",
            "extra": "mean: 7.916648854961831 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.091469601185,
            "unit": "iter/sec",
            "range": "stddev: 0.00012674115651483184",
            "extra": "mean: 6.406500000000054 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.55177439168466,
            "unit": "iter/sec",
            "range": "stddev: 0.00013839507240818934",
            "extra": "mean: 4.639256637168175 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.23688802976295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007089146595562667",
            "extra": "mean: 3.0281293103448634 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.76229823231601,
            "unit": "iter/sec",
            "range": "stddev: 0.0003227803711461375",
            "extra": "mean: 8.56440833333334 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.738746562456,
            "unit": "iter/sec",
            "range": "stddev: 0.00025390033158391955",
            "extra": "mean: 6.908999999999942 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.6756738315246,
            "unit": "iter/sec",
            "range": "stddev: 0.00013886726930202584",
            "extra": "mean: 4.862023696682435 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3126526860635,
            "unit": "iter/sec",
            "range": "stddev: 0.00011258956928926767",
            "extra": "mean: 3.1415653495440914 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.519059459720472,
            "unit": "iter/sec",
            "range": "stddev: 0.0015408397114836088",
            "extra": "mean: 73.9696428571427 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.317453855022327,
            "unit": "iter/sec",
            "range": "stddev: 0.007306842017159842",
            "extra": "mean: 75.08942857142894 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.96782361490318,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831021676357348",
            "extra": "mean: 6.251257142857298 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.66523983073625,
            "unit": "iter/sec",
            "range": "stddev: 0.00009624542033503103",
            "extra": "mean: 4.137955465587049 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 371.38562207091553,
            "unit": "iter/sec",
            "range": "stddev: 0.00012745492941934437",
            "extra": "mean: 2.692619047619058 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.03278172606537,
            "unit": "iter/sec",
            "range": "stddev: 0.00017882825890881145",
            "extra": "mean: 2.873292553191424 msec\nrounds: 376"
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
        "date": 1671428998191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.7022521306215,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990700466964214",
            "extra": "mean: 9.460536363636324 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.89082766504018,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161822239225817",
            "extra": "mean: 7.148431506849308 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.76013056926533,
            "unit": "iter/sec",
            "range": "stddev: 0.00025277959641214966",
            "extra": "mean: 5.441876847290695 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.6147300729356,
            "unit": "iter/sec",
            "range": "stddev: 0.00013792432613867305",
            "extra": "mean: 3.2508196202532287 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.63772052399197,
            "unit": "iter/sec",
            "range": "stddev: 0.0002444187371759924",
            "extra": "mean: 9.29042342342343 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.9422249605275,
            "unit": "iter/sec",
            "range": "stddev: 0.0003008258649026271",
            "extra": "mean: 8.068275362318813 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.27690397234892,
            "unit": "iter/sec",
            "range": "stddev: 0.0003363755008869834",
            "extra": "mean: 5.5779633507852004 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.86264581191267,
            "unit": "iter/sec",
            "range": "stddev: 0.0001573294171981645",
            "extra": "mean: 3.461852941176516 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.127308639182797,
            "unit": "iter/sec",
            "range": "stddev: 0.0012572933535663028",
            "extra": "mean: 76.1770769230769 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.056036457454322,
            "unit": "iter/sec",
            "range": "stddev: 0.006170632382503142",
            "extra": "mean: 82.94599999999949 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.2079494197905,
            "unit": "iter/sec",
            "range": "stddev: 0.00040623383780989653",
            "extra": "mean: 6.484750000000088 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.24059035186,
            "unit": "iter/sec",
            "range": "stddev: 0.00024965726949191183",
            "extra": "mean: 4.667649572649332 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 343.73817193090576,
            "unit": "iter/sec",
            "range": "stddev: 0.00010282925833467691",
            "extra": "mean: 2.9091910112357504 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 308.7675452616799,
            "unit": "iter/sec",
            "range": "stddev: 0.00017360187129498376",
            "extra": "mean: 3.238682352941278 msec\nrounds: 340"
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
        "date": 1671437577204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.25920146483767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916829450925744",
            "extra": "mean: 8.52811538461541 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.8841406815312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003326490300591316",
            "extra": "mean: 6.762050314465444 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.9630248008629,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106188558255681",
            "extra": "mean: 5.34865116279069 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 279.50629102845164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004520075104643273",
            "extra": "mean: 3.577737003058037 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.27409257935963,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009167010874327",
            "extra": "mean: 9.321915254237329 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.2627699321823,
            "unit": "iter/sec",
            "range": "stddev: 0.0007527194620052483",
            "extra": "mean: 7.676790540540649 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.80951801352091,
            "unit": "iter/sec",
            "range": "stddev: 0.0003393353943019054",
            "extra": "mean: 5.159705314009583 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.23727243931796,
            "unit": "iter/sec",
            "range": "stddev: 0.000342774230063899",
            "extra": "mean: 3.3643156250000694 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.173618270915384,
            "unit": "iter/sec",
            "range": "stddev: 0.0033962876263683344",
            "extra": "mean: 82.14484615384657 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.502157065240928,
            "unit": "iter/sec",
            "range": "stddev: 0.007807639180055311",
            "extra": "mean: 86.94021428571526 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.8541119167799,
            "unit": "iter/sec",
            "range": "stddev: 0.0005050977479502524",
            "extra": "mean: 6.3753508771931795 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.61146613682473,
            "unit": "iter/sec",
            "range": "stddev: 0.0007241563454319388",
            "extra": "mean: 4.616560784313884 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 330.311175907747,
            "unit": "iter/sec",
            "range": "stddev: 0.0005779494135113943",
            "extra": "mean: 3.027448275862429 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.56100402883396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464171221340853",
            "extra": "mean: 3.025160220994406 msec\nrounds: 362"
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
        "date": 1671465826105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.53847565732075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006878836445699556",
            "extra": "mean: 9.475217391304383 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.16052769395813,
            "unit": "iter/sec",
            "range": "stddev: 0.00038378546644043645",
            "extra": "mean: 7.290727272727236 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.80587843706977,
            "unit": "iter/sec",
            "range": "stddev: 0.0011419251891485519",
            "extra": "mean: 6.031149253731325 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 275.8603108936593,
            "unit": "iter/sec",
            "range": "stddev: 0.00059375642997779",
            "extra": "mean: 3.62502310231024 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.42276230106445,
            "unit": "iter/sec",
            "range": "stddev: 0.000704600379104335",
            "extra": "mean: 9.859719626168225 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.81064834693265,
            "unit": "iter/sec",
            "range": "stddev: 0.00022687138838058568",
            "extra": "mean: 7.7633333333331755 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.4016907571925,
            "unit": "iter/sec",
            "range": "stddev: 0.00036432632132683715",
            "extra": "mean: 5.605328042327892 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.21136322689904,
            "unit": "iter/sec",
            "range": "stddev: 0.00009622501313828962",
            "extra": "mean: 3.556044067796567 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.970168612191962,
            "unit": "iter/sec",
            "range": "stddev: 0.0030171293539489144",
            "extra": "mean: 77.09999999999998 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.258755987748907,
            "unit": "iter/sec",
            "range": "stddev: 0.0023747918405024144",
            "extra": "mean: 75.42185714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.11336489205516,
            "unit": "iter/sec",
            "range": "stddev: 0.00020147824225205202",
            "extra": "mean: 6.574044303796936 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.94202243152355,
            "unit": "iter/sec",
            "range": "stddev: 0.000177911763013582",
            "extra": "mean: 4.567419213973693 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.2690985935721,
            "unit": "iter/sec",
            "range": "stddev: 0.0002045444326952173",
            "extra": "mean: 3.0462812499999994 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.7815414527461,
            "unit": "iter/sec",
            "range": "stddev: 0.00008314986835401006",
            "extra": "mean: 3.0980705882352813 msec\nrounds: 340"
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
        "date": 1671540516240,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.98178745940537,
            "unit": "iter/sec",
            "range": "stddev: 0.0007493474120380023",
            "extra": "mean: 9.805672413793078 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.38647213070672,
            "unit": "iter/sec",
            "range": "stddev: 0.001130160727708251",
            "extra": "mean: 8.039459459459456 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.72663014466124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005431604234818678",
            "extra": "mean: 5.502770833333355 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.9858308472601,
            "unit": "iter/sec",
            "range": "stddev: 0.00012788500774622838",
            "extra": "mean: 3.389993333333313 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.28917558672785,
            "unit": "iter/sec",
            "range": "stddev: 0.00035805724682452496",
            "extra": "mean: 9.681556603773446 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.36250331603537,
            "unit": "iter/sec",
            "range": "stddev: 0.00036517480188455595",
            "extra": "mean: 7.790437037036792 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.3943305696446,
            "unit": "iter/sec",
            "range": "stddev: 0.00016771284637884687",
            "extra": "mean: 5.574312169312281 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.2462009401861,
            "unit": "iter/sec",
            "range": "stddev: 0.00020371343893794811",
            "extra": "mean: 3.5180769230770825 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.33014679348076,
            "unit": "iter/sec",
            "range": "stddev: 0.0025663407791061362",
            "extra": "mean: 75.01792857142878 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.186871151082357,
            "unit": "iter/sec",
            "range": "stddev: 0.003211135409070166",
            "extra": "mean: 75.83299999999785 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 138.4846055718788,
            "unit": "iter/sec",
            "range": "stddev: 0.00202271896050283",
            "extra": "mean: 7.221019230769024 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 211.08726606809034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901794442704449",
            "extra": "mean: 4.7373771929825 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.32162715834704,
            "unit": "iter/sec",
            "range": "stddev: 0.00019004754437861268",
            "extra": "mean: 3.0457938718661004 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 317.4145671395692,
            "unit": "iter/sec",
            "range": "stddev: 0.00025434814838917345",
            "extra": "mean: 3.150454022988471 msec\nrounds: 348"
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
        "date": 1671541481913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.54688834990246,
            "unit": "iter/sec",
            "range": "stddev: 0.0010857493184163085",
            "extra": "mean: 8.806934426229558 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.94581909650583,
            "unit": "iter/sec",
            "range": "stddev: 0.0005390776707714131",
            "extra": "mean: 7.04494155844155 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.2274930127358,
            "unit": "iter/sec",
            "range": "stddev: 0.00022300419976699202",
            "extra": "mean: 5.019387559808696 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.07743983629763,
            "unit": "iter/sec",
            "range": "stddev: 0.0001500374555382957",
            "extra": "mean: 3.183928143712635 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.95966674018167,
            "unit": "iter/sec",
            "range": "stddev: 0.000366929081934544",
            "extra": "mean: 9.3493185840708 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.5474604109198,
            "unit": "iter/sec",
            "range": "stddev: 0.0012112654688250211",
            "extra": "mean: 7.32346099290785 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.62232974628122,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979077769809247",
            "extra": "mean: 5.245975124378148 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.93514174995397,
            "unit": "iter/sec",
            "range": "stddev: 0.00018845163457986526",
            "extra": "mean: 3.268666666666614 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.053746938197154,
            "unit": "iter/sec",
            "range": "stddev: 0.00319682736010684",
            "extra": "mean: 76.60635714285645 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.644474409841674,
            "unit": "iter/sec",
            "range": "stddev: 0.008413728739516967",
            "extra": "mean: 79.08592857142897 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.30896090382555,
            "unit": "iter/sec",
            "range": "stddev: 0.00023315656969604843",
            "extra": "mean: 6.161089285714418 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.057881113846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003230670139202567",
            "extra": "mean: 4.290779591836724 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.72195102537614,
            "unit": "iter/sec",
            "range": "stddev: 0.00024425867195694665",
            "extra": "mean: 2.82707928388719 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 335.22692875207747,
            "unit": "iter/sec",
            "range": "stddev: 0.00023615767134425308",
            "extra": "mean: 2.9830539083558123 msec\nrounds: 371"
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
        "date": 1671543739511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.32758233636743,
            "unit": "iter/sec",
            "range": "stddev: 0.0010292034239938678",
            "extra": "mean: 10.714945945945983 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.23930382401392,
            "unit": "iter/sec",
            "range": "stddev: 0.0008454138902799041",
            "extra": "mean: 8.753554744525614 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.7139442863371,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251206386595893",
            "extra": "mean: 6.3006436170214 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.72554810744472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006395839262444776",
            "extra": "mean: 4.102975694444461 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 88.23751859290499,
            "unit": "iter/sec",
            "range": "stddev: 0.0010414863489351248",
            "extra": "mean: 11.33304761904771 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.38805893902229,
            "unit": "iter/sec",
            "range": "stddev: 0.0008861156905945367",
            "extra": "mean: 8.897742424242454 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.77891228349674,
            "unit": "iter/sec",
            "range": "stddev: 0.00046500124101304843",
            "extra": "mean: 6.378408839779051 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.4397778852002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003689779484095189",
            "extra": "mean: 4.107792114695298 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.60872397611898,
            "unit": "iter/sec",
            "range": "stddev: 0.003340322734362197",
            "extra": "mean: 79.31016666666727 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 8.332480246070016,
            "unit": "iter/sec",
            "range": "stddev: 0.1014651715534628",
            "extra": "mean: 120.01228571428614 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.57395553959262,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818606297167643",
            "extra": "mean: 6.597439490445904 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.6816074707111,
            "unit": "iter/sec",
            "range": "stddev: 0.0001451880314079904",
            "extra": "mean: 4.61506637168164 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.1610674184635,
            "unit": "iter/sec",
            "range": "stddev: 0.00010617138742081102",
            "extra": "mean: 3.047284090909001 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 270.12404504475245,
            "unit": "iter/sec",
            "range": "stddev: 0.006241816205421819",
            "extra": "mean: 3.7020029069767797 msec\nrounds: 344"
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
        "date": 1671549006405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.40760864375534,
            "unit": "iter/sec",
            "range": "stddev: 0.00016939427809969983",
            "extra": "mean: 8.445403225806457 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.7902339328204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429606917439721",
            "extra": "mean: 6.81244230769233 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.1709307083166,
            "unit": "iter/sec",
            "range": "stddev: 0.0001770929645431344",
            "extra": "mean: 4.946309523809614 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.699680544837,
            "unit": "iter/sec",
            "range": "stddev: 0.000060494813271452394",
            "extra": "mean: 3.118182089552129 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.34649315647279,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096013297547865",
            "extra": "mean: 8.980974358974395 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.51747163152342,
            "unit": "iter/sec",
            "range": "stddev: 0.00011580914427478983",
            "extra": "mean: 7.066265306122436 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.31623473567333,
            "unit": "iter/sec",
            "range": "stddev: 0.0005289154144936362",
            "extra": "mean: 5.172871287128719 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.46510810747685,
            "unit": "iter/sec",
            "range": "stddev: 0.00008399129873581532",
            "extra": "mean: 3.2736963190183848 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.90623028916019,
            "unit": "iter/sec",
            "range": "stddev: 0.001286459552927338",
            "extra": "mean: 71.9102142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.292465774308544,
            "unit": "iter/sec",
            "range": "stddev: 0.0011452656876186306",
            "extra": "mean: 69.96693333333373 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.8214404460441,
            "unit": "iter/sec",
            "range": "stddev: 0.0001538545956930885",
            "extra": "mean: 6.104207100592292 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.55822039814203,
            "unit": "iter/sec",
            "range": "stddev: 0.00021425729916342475",
            "extra": "mean: 4.2272891566268065 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.37304631952173,
            "unit": "iter/sec",
            "range": "stddev: 0.00022125034968745029",
            "extra": "mean: 2.7749023136246387 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.79276885801664,
            "unit": "iter/sec",
            "range": "stddev: 0.00015064729330040708",
            "extra": "mean: 2.867031914893485 msec\nrounds: 376"
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
        "date": 1671551255794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.24322726442875,
            "unit": "iter/sec",
            "range": "stddev: 0.0005614022148501715",
            "extra": "mean: 8.457144 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.49060711110806,
            "unit": "iter/sec",
            "range": "stddev: 0.0004517976718861237",
            "extra": "mean: 7.0180064516129335 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.12977646826624,
            "unit": "iter/sec",
            "range": "stddev: 0.00036982138549790817",
            "extra": "mean: 4.898844339622636 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.8230977708441,
            "unit": "iter/sec",
            "range": "stddev: 0.00013338661114624403",
            "extra": "mean: 3.1169825581394863 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.7609105414932,
            "unit": "iter/sec",
            "range": "stddev: 0.00047949565858020174",
            "extra": "mean: 8.947672268907763 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.3379341267753,
            "unit": "iter/sec",
            "range": "stddev: 0.0002503147817101227",
            "extra": "mean: 7.075241379310342 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.70527823967728,
            "unit": "iter/sec",
            "range": "stddev: 0.00031872034513170396",
            "extra": "mean: 5.0325789473685 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.5070571453815,
            "unit": "iter/sec",
            "range": "stddev: 0.0002693427618206877",
            "extra": "mean: 3.2309440993789047 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.456194799564978,
            "unit": "iter/sec",
            "range": "stddev: 0.0025401327699574954",
            "extra": "mean: 74.31521428571537 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.604677106593478,
            "unit": "iter/sec",
            "range": "stddev: 0.001356332337418614",
            "extra": "mean: 73.50413333333374 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.32757665492082,
            "unit": "iter/sec",
            "range": "stddev: 0.00031142888407757773",
            "extra": "mean: 6.1226647727272905 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.03414245993824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003421669540335388",
            "extra": "mean: 4.463605363985178 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 341.3882830977777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002885766432401044",
            "extra": "mean: 2.929215938303272 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 297.72924774249145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006835938532910555",
            "extra": "mean: 3.358756345177443 msec\nrounds: 394"
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
        "date": 1671589079870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.69662186251398,
            "unit": "iter/sec",
            "range": "stddev: 0.0009607709386999701",
            "extra": "mean: 8.569228346456756 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.2122122983969,
            "unit": "iter/sec",
            "range": "stddev: 0.0007738910316542959",
            "extra": "mean: 7.450886792452824 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.45025364141895,
            "unit": "iter/sec",
            "range": "stddev: 0.001012785998312051",
            "extra": "mean: 5.306440191387531 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.3963605514049,
            "unit": "iter/sec",
            "range": "stddev: 0.00037505432113273964",
            "extra": "mean: 3.5537062314539853 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.1398988797084,
            "unit": "iter/sec",
            "range": "stddev: 0.0004872224058084404",
            "extra": "mean: 9.247280701754402 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.30459044586996,
            "unit": "iter/sec",
            "range": "stddev: 0.000393784953273887",
            "extra": "mean: 7.336510067114177 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.23688865241454,
            "unit": "iter/sec",
            "range": "stddev: 0.00017214386228975458",
            "extra": "mean: 5.174995348837111 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.6896511938071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002094574986515026",
            "extra": "mean: 3.314664576802452 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.7186976843854,
            "unit": "iter/sec",
            "range": "stddev: 0.014087371346371079",
            "extra": "mean: 85.33371428571382 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.21725774923217,
            "unit": "iter/sec",
            "range": "stddev: 0.0029411942554589043",
            "extra": "mean: 81.85142857142783 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.4890701216579,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075310902233913",
            "extra": "mean: 6.5578470588232065 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.42825134056054,
            "unit": "iter/sec",
            "range": "stddev: 0.0010040062292647422",
            "extra": "mean: 4.6204688796678886 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 363.60931831515234,
            "unit": "iter/sec",
            "range": "stddev: 0.00020628276299398387",
            "extra": "mean: 2.7502045454546535 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 337.8303291623436,
            "unit": "iter/sec",
            "range": "stddev: 0.00018491068481730927",
            "extra": "mean: 2.960065789473426 msec\nrounds: 380"
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
        "date": 1672071561698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.17449021181451,
            "unit": "iter/sec",
            "range": "stddev: 0.0003198284334151085",
            "extra": "mean: 8.607741666666714 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.11805651553712,
            "unit": "iter/sec",
            "range": "stddev: 0.00026031324859375807",
            "extra": "mean: 7.136838926174472 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.16208154555903,
            "unit": "iter/sec",
            "range": "stddev: 0.00019280839301735853",
            "extra": "mean: 5.203940298507401 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.3858465824415,
            "unit": "iter/sec",
            "range": "stddev: 0.00016955068145890848",
            "extra": "mean: 3.3854025559105527 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.31145863892186,
            "unit": "iter/sec",
            "range": "stddev: 0.00038896292829519914",
            "extra": "mean: 9.495642857143105 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.41725813042098,
            "unit": "iter/sec",
            "range": "stddev: 0.0003722887423870377",
            "extra": "mean: 7.551885714285638 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.27049772132,
            "unit": "iter/sec",
            "range": "stddev: 0.00038845580923027844",
            "extra": "mean: 5.547219387755279 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.59102800389695,
            "unit": "iter/sec",
            "range": "stddev: 0.0002566063038879019",
            "extra": "mean: 3.4892927631579673 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.310477342239814,
            "unit": "iter/sec",
            "range": "stddev: 0.0008890370917734759",
            "extra": "mean: 75.12878571428645 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.330730666869824,
            "unit": "iter/sec",
            "range": "stddev: 0.0022030833151311076",
            "extra": "mean: 75.01464285714273 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.42356148516905,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113999803838531",
            "extra": "mean: 6.392898809523736 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.7726465430479,
            "unit": "iter/sec",
            "range": "stddev: 0.000245715191436915",
            "extra": "mean: 4.509122362869452 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.6368588651044,
            "unit": "iter/sec",
            "range": "stddev: 0.00012967723394346855",
            "extra": "mean: 2.9016049046321357 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 337.53745842524637,
            "unit": "iter/sec",
            "range": "stddev: 0.00014588494582311548",
            "extra": "mean: 2.9626341463416206 msec\nrounds: 369"
          }
        ]
      }
    ]
  }
}