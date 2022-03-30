window.BENCHMARK_DATA = {
  "lastUpdate": 1648614652302,
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
      }
    ]
  }
}