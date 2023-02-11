window.BENCHMARK_DATA = {
  "lastUpdate": 1676093585737,
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
        "date": 1672074437338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.60934925766567,
            "unit": "iter/sec",
            "range": "stddev: 0.0005126236255212429",
            "extra": "mean: 8.725291666666667 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.03371567605248,
            "unit": "iter/sec",
            "range": "stddev: 0.0008142399078385309",
            "extra": "mean: 7.1924999999999475 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.30232404219822,
            "unit": "iter/sec",
            "range": "stddev: 0.0004153528866129217",
            "extra": "mean: 5.310608910891093 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 253.79161459655177,
            "unit": "iter/sec",
            "range": "stddev: 0.0018258857278536128",
            "extra": "mean: 3.9402405063291126 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.3231042540278,
            "unit": "iter/sec",
            "range": "stddev: 0.0006036042583210636",
            "extra": "mean: 9.494592920354012 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.02441118422729,
            "unit": "iter/sec",
            "range": "stddev: 0.0015503852081395224",
            "extra": "mean: 8.128468085106412 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.14497756178935,
            "unit": "iter/sec",
            "range": "stddev: 0.0008564501775198742",
            "extra": "mean: 5.947248704663352 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.7053582149509,
            "unit": "iter/sec",
            "range": "stddev: 0.0002195473416325734",
            "extra": "mean: 3.4517828947369216 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.8769733961729,
            "unit": "iter/sec",
            "range": "stddev: 0.0022691202406811303",
            "extra": "mean: 77.65800000000038 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.10382312561518,
            "unit": "iter/sec",
            "range": "stddev: 0.010282771195356519",
            "extra": "mean: 90.05907142857136 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.72214672394261,
            "unit": "iter/sec",
            "range": "stddev: 0.0008621583247403639",
            "extra": "mean: 6.815603658536279 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.8527524106608,
            "unit": "iter/sec",
            "range": "stddev: 0.0004882517435563837",
            "extra": "mean: 4.654350427350545 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 325.0490475795035,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788050538033229",
            "extra": "mean: 3.0764587912087658 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 314.50530638354127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859433471824805",
            "extra": "mean: 3.179596590909323 msec\nrounds: 352"
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
        "date": 1672209686649,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.56062949665795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007056468816634475",
            "extra": "mean: 10.25003636363638 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.40886659881697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241442463251638",
            "extra": "mean: 8.169342857142873 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.5329013148251,
            "unit": "iter/sec",
            "range": "stddev: 0.0011314880848610463",
            "extra": "mean: 6.268299465240602 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.6818866744143,
            "unit": "iter/sec",
            "range": "stddev: 0.00023055139866618146",
            "extra": "mean: 3.8214337748344205 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 90.3451183521038,
            "unit": "iter/sec",
            "range": "stddev: 0.000695097747230648",
            "extra": "mean: 11.068666666666818 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.8550593791228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008685332161323621",
            "extra": "mean: 8.860923076923136 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.89606983947016,
            "unit": "iter/sec",
            "range": "stddev: 0.0003975906921045374",
            "extra": "mean: 6.1768021978023375 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.18053264758683,
            "unit": "iter/sec",
            "range": "stddev: 0.0024725682471779826",
            "extra": "mean: 4.382494809688471 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.618945696793944,
            "unit": "iter/sec",
            "range": "stddev: 0.0038885174008779695",
            "extra": "mean: 79.24592307692289 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.68053931794073,
            "unit": "iter/sec",
            "range": "stddev: 0.0030870742123096187",
            "extra": "mean: 93.62823076923104 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 138.7024525200152,
            "unit": "iter/sec",
            "range": "stddev: 0.0005889478854159715",
            "extra": "mean: 7.209677852348695 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 194.66430313194692,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343199765899409",
            "extra": "mean: 5.137048672566239 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 296.0794366280821,
            "unit": "iter/sec",
            "range": "stddev: 0.00023767731147483005",
            "extra": "mean: 3.3774719764011922 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 305.9528758175395,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613439239439459",
            "extra": "mean: 3.268477203647427 msec\nrounds: 329"
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
        "date": 1672216623489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.38711097568414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003395474297611437",
            "extra": "mean: 8.74224369747895 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.8462501411583,
            "unit": "iter/sec",
            "range": "stddev: 0.00010597846113733244",
            "extra": "mean: 7.000533783783729 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.73220434649645,
            "unit": "iter/sec",
            "range": "stddev: 0.000166678020725279",
            "extra": "mean: 5.161764423076852 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.92046068022563,
            "unit": "iter/sec",
            "range": "stddev: 0.00011758315335946231",
            "extra": "mean: 3.2688235294117383 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.29453456280756,
            "unit": "iter/sec",
            "range": "stddev: 0.00017684401506066328",
            "extra": "mean: 9.40782142857136 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.47788959364976,
            "unit": "iter/sec",
            "range": "stddev: 0.0001771034826091796",
            "extra": "mean: 7.436166666666827 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.34829752002463,
            "unit": "iter/sec",
            "range": "stddev: 0.00008977901590527017",
            "extra": "mean: 5.366295336787512 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.62426424389287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000943859958253185",
            "extra": "mean: 3.3712683706069697 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.357320476650443,
            "unit": "iter/sec",
            "range": "stddev: 0.0033875334779301484",
            "extra": "mean: 80.92369230769182 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.179881851773425,
            "unit": "iter/sec",
            "range": "stddev: 0.001147327206939303",
            "extra": "mean: 75.87321428571414 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.38493557175676,
            "unit": "iter/sec",
            "range": "stddev: 0.00030058542927995677",
            "extra": "mean: 6.435630303030245 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.30937258469916,
            "unit": "iter/sec",
            "range": "stddev: 0.00019165622158741558",
            "extra": "mean: 4.438341772151872 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.42909465964703,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339243794935825",
            "extra": "mean: 2.903355191256899 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.81975848082254,
            "unit": "iter/sec",
            "range": "stddev: 0.0001038752173505334",
            "extra": "mean: 2.9866815642460867 msec\nrounds: 358"
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
        "date": 1672330810850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.60722956843938,
            "unit": "iter/sec",
            "range": "stddev: 0.0007551859801264596",
            "extra": "mean: 8.291376923076932 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.09191547697029,
            "unit": "iter/sec",
            "range": "stddev: 0.0004462262691571954",
            "extra": "mean: 6.6184878048780975 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.60295636786662,
            "unit": "iter/sec",
            "range": "stddev: 0.0006086694613251681",
            "extra": "mean: 4.840201793721922 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.64504291226376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002405299297363713",
            "extra": "mean: 3.1090172910663307 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.41254876834954,
            "unit": "iter/sec",
            "range": "stddev: 0.00021048102571198036",
            "extra": "mean: 8.740299999999953 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.8104908042417,
            "unit": "iter/sec",
            "range": "stddev: 0.0005018781407208748",
            "extra": "mean: 7.051664473684263 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.84396520175866,
            "unit": "iter/sec",
            "range": "stddev: 0.0004487735236943446",
            "extra": "mean: 5.054488262910689 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.47082598717924,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397447957694418",
            "extra": "mean: 3.241797653958894 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.582588932001054,
            "unit": "iter/sec",
            "range": "stddev: 0.0026756906095616703",
            "extra": "mean: 73.62366666666655 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.651957403829279,
            "unit": "iter/sec",
            "range": "stddev: 0.0008387554953330498",
            "extra": "mean: 68.25026666666739 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.490079801836,
            "unit": "iter/sec",
            "range": "stddev: 0.00043272463270576777",
            "extra": "mean: 5.970502857143174 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.90612141967296,
            "unit": "iter/sec",
            "range": "stddev: 0.000318448665429419",
            "extra": "mean: 4.116816793893323 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 375.30840459725965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002390028940043938",
            "extra": "mean: 2.664475369458064 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 359.2954134240661,
            "unit": "iter/sec",
            "range": "stddev: 0.0003000155132499094",
            "extra": "mean: 2.783225063938483 msec\nrounds: 391"
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
        "date": 1672338696768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.63717334677779,
            "unit": "iter/sec",
            "range": "stddev: 0.00024859289956530723",
            "extra": "mean: 8.50071428571427 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.68895927865427,
            "unit": "iter/sec",
            "range": "stddev: 0.00028935946586905204",
            "extra": "mean: 6.770986842105343 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.30888402444705,
            "unit": "iter/sec",
            "range": "stddev: 0.00015608095710392374",
            "extra": "mean: 4.9674906542056005 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.74660502073294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008807314060369126",
            "extra": "mean: 3.218056074766385 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.36130536130555,
            "unit": "iter/sec",
            "range": "stddev: 0.0018028472184952395",
            "extra": "mean: 9.491150442477858 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.35966499294736,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398388195712998",
            "extra": "mean: 7.280157534246639 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.16835817515832,
            "unit": "iter/sec",
            "range": "stddev: 0.00018700023484799898",
            "extra": "mean: 5.0462142857141385 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.8597658046564,
            "unit": "iter/sec",
            "range": "stddev: 0.00030886035097464783",
            "extra": "mean: 3.4263030303029383 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.392466074550514,
            "unit": "iter/sec",
            "range": "stddev: 0.010039522576502044",
            "extra": "mean: 87.77730769230793 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.180936599694963,
            "unit": "iter/sec",
            "range": "stddev: 0.0031518330895164573",
            "extra": "mean: 75.86714285714281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.20593726020186,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448521775569204",
            "extra": "mean: 6.127228070175437 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.41080806063457,
            "unit": "iter/sec",
            "range": "stddev: 0.00040572371765128473",
            "extra": "mean: 4.456113360323561 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.5294896525126,
            "unit": "iter/sec",
            "range": "stddev: 0.00014550497734659685",
            "extra": "mean: 2.7736982097187806 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 344.98477193256565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907511188750743",
            "extra": "mean: 2.898678670360182 msec\nrounds: 361"
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
        "date": 1672352988818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.51452113013676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837052457056079",
            "extra": "mean: 9.215356521739091 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.1591623915375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005071560785665",
            "extra": "mean: 7.682901315789478 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.75681160048455,
            "unit": "iter/sec",
            "range": "stddev: 0.0004077015087691679",
            "extra": "mean: 5.3260384615384 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.8673712969867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002991223125568554",
            "extra": "mean: 3.3913552238806806 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.00364433218697,
            "unit": "iter/sec",
            "range": "stddev: 0.0007094218515229857",
            "extra": "mean: 9.433637931034413 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.54588869952038,
            "unit": "iter/sec",
            "range": "stddev: 0.0007253714806655077",
            "extra": "mean: 7.84031543624158 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.11588352552835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004133381725013202",
            "extra": "mean: 5.61432242990657 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 280.69468335479814,
            "unit": "iter/sec",
            "range": "stddev: 0.00027445633771009867",
            "extra": "mean: 3.562589743589834 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.76899250824962,
            "unit": "iter/sec",
            "range": "stddev: 0.005606605944756901",
            "extra": "mean: 78.31471428571467 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.45652450509778,
            "unit": "iter/sec",
            "range": "stddev: 0.004748770272860001",
            "extra": "mean: 80.27921428571462 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.8059860509783,
            "unit": "iter/sec",
            "range": "stddev: 0.000489511884470805",
            "extra": "mean: 6.7201597633136725 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.65444744038004,
            "unit": "iter/sec",
            "range": "stddev: 0.00022505417824488834",
            "extra": "mean: 4.225570281124458 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 350.32929192991594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708808877528283",
            "extra": "mean: 2.854457286432252 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 304.0364175489361,
            "unit": "iter/sec",
            "range": "stddev: 0.00045697440925607485",
            "extra": "mean: 3.2890796703294445 msec\nrounds: 364"
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
        "date": 1672682597592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.1353002829601,
            "unit": "iter/sec",
            "range": "stddev: 0.0009981279793126268",
            "extra": "mean: 8.917798387096829 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.80916492802604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138638021523897",
            "extra": "mean: 7.101810457516352 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.80294162202105,
            "unit": "iter/sec",
            "range": "stddev: 0.0004925998318378768",
            "extra": "mean: 5.1866428571429255 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 261.6017279604434,
            "unit": "iter/sec",
            "range": "stddev: 0.0019563911960369306",
            "extra": "mean: 3.8226047197639668 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.51646269438032,
            "unit": "iter/sec",
            "range": "stddev: 0.000819704247090682",
            "extra": "mean: 9.567870689655177 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.5595219267528,
            "unit": "iter/sec",
            "range": "stddev: 0.0006324995259678299",
            "extra": "mean: 7.376833333333327 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.92205491263292,
            "unit": "iter/sec",
            "range": "stddev: 0.00048540436162234594",
            "extra": "mean: 5.378598039215479 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.7421500454315,
            "unit": "iter/sec",
            "range": "stddev: 0.00021762271376609852",
            "extra": "mean: 3.3813238993710613 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.773324581968492,
            "unit": "iter/sec",
            "range": "stddev: 0.0027929620132917704",
            "extra": "mean: 78.28815384615322 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.762601929887472,
            "unit": "iter/sec",
            "range": "stddev: 0.0020818770548313736",
            "extra": "mean: 78.35392857143019 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.46473644144487,
            "unit": "iter/sec",
            "range": "stddev: 0.0003555401160632719",
            "extra": "mean: 6.231898809523858 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.67214689472448,
            "unit": "iter/sec",
            "range": "stddev: 0.0014860410851662254",
            "extra": "mean: 4.511166666667037 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.169400230416,
            "unit": "iter/sec",
            "range": "stddev: 0.0001429558608515432",
            "extra": "mean: 2.7459748110832036 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 361.66644323716486,
            "unit": "iter/sec",
            "range": "stddev: 0.00011056168976755465",
            "extra": "mean: 2.7649786666667446 msec\nrounds: 375"
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
        "date": 1672685968142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.59739634707095,
            "unit": "iter/sec",
            "range": "stddev: 0.00016962270691216915",
            "extra": "mean: 9.1243043478261 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.0916614048654,
            "unit": "iter/sec",
            "range": "stddev: 0.00011124710542401159",
            "extra": "mean: 7.1895035971223225 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.36489653960558,
            "unit": "iter/sec",
            "range": "stddev: 0.00013220630534011815",
            "extra": "mean: 5.424026041666659 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.8421479582047,
            "unit": "iter/sec",
            "range": "stddev: 0.00004533920452157245",
            "extra": "mean: 3.426509868421103 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.28540329397603,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497472803707814",
            "extra": "mean: 9.776566037735842 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.42875096554727,
            "unit": "iter/sec",
            "range": "stddev: 0.0008283434621326705",
            "extra": "mean: 8.4438955223881 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.12142343407345,
            "unit": "iter/sec",
            "range": "stddev: 0.00024111044809738434",
            "extra": "mean: 6.019693181818043 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.69197762072235,
            "unit": "iter/sec",
            "range": "stddev: 0.00047065774121597665",
            "extra": "mean: 3.8957197231833995 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.802949753859377,
            "unit": "iter/sec",
            "range": "stddev: 0.0033114242049533163",
            "extra": "mean: 84.72458333333292 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.599896374259135,
            "unit": "iter/sec",
            "range": "stddev: 0.004877403786540925",
            "extra": "mean: 86.20766666666609 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 141.22140617240981,
            "unit": "iter/sec",
            "range": "stddev: 0.00031059556818425533",
            "extra": "mean: 7.081079470198395 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.536780848333,
            "unit": "iter/sec",
            "range": "stddev: 0.00020377615502666048",
            "extra": "mean: 4.772431818181937 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 315.9391290611232,
            "unit": "iter/sec",
            "range": "stddev: 0.00016084539040648905",
            "extra": "mean: 3.165166666666777 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 309.2325597521685,
            "unit": "iter/sec",
            "range": "stddev: 0.00008973639801796837",
            "extra": "mean: 3.2338121212120754 msec\nrounds: 330"
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
        "date": 1672764787570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.60407256632752,
            "unit": "iter/sec",
            "range": "stddev: 0.0011981289386849515",
            "extra": "mean: 8.65021428571431 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.8468122029614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007911427172670516",
            "extra": "mean: 6.585584415584442 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.19319423168065,
            "unit": "iter/sec",
            "range": "stddev: 0.00011740805782475965",
            "extra": "mean: 4.897322869955132 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.456323139564,
            "unit": "iter/sec",
            "range": "stddev: 0.00010289697476189521",
            "extra": "mean: 3.1500396341463577 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.43980515501471,
            "unit": "iter/sec",
            "range": "stddev: 0.00016208734905528123",
            "extra": "mean: 8.815247863247887 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.10395048982357,
            "unit": "iter/sec",
            "range": "stddev: 0.000260119960068269",
            "extra": "mean: 7.037102040816328 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.18134211063764,
            "unit": "iter/sec",
            "range": "stddev: 0.0002679155498476134",
            "extra": "mean: 5.23063594470058 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.97291881048875,
            "unit": "iter/sec",
            "range": "stddev: 0.00018783907464946885",
            "extra": "mean: 3.257616352201267 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.430918550113073,
            "unit": "iter/sec",
            "range": "stddev: 0.0014988090381931126",
            "extra": "mean: 74.45507142857188 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.232226520595505,
            "unit": "iter/sec",
            "range": "stddev: 0.006485947074718947",
            "extra": "mean: 75.57307142857132 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.01555588000303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002747500655771646",
            "extra": "mean: 6.096982658959614 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.62724772222612,
            "unit": "iter/sec",
            "range": "stddev: 0.00013695493961882177",
            "extra": "mean: 4.226056 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.3020504565886,
            "unit": "iter/sec",
            "range": "stddev: 0.00014160970506647702",
            "extra": "mean: 2.7909413265307528 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.8352726529758,
            "unit": "iter/sec",
            "range": "stddev: 0.000588528057551266",
            "extra": "mean: 3.097554959785719 msec\nrounds: 373"
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
        "date": 1672779381475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.72687585859705,
            "unit": "iter/sec",
            "range": "stddev: 0.0010128140415118206",
            "extra": "mean: 8.71635344827587 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.68463757663145,
            "unit": "iter/sec",
            "range": "stddev: 0.00030889924414613664",
            "extra": "mean: 6.959686274509822 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.1203372274105,
            "unit": "iter/sec",
            "range": "stddev: 0.00025336554534504026",
            "extra": "mean: 5.073043269230697 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.1401775734024,
            "unit": "iter/sec",
            "range": "stddev: 0.00034645861339272367",
            "extra": "mean: 3.354126934984464 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.52445463229665,
            "unit": "iter/sec",
            "range": "stddev: 0.0006634652106450754",
            "extra": "mean: 9.567139130434779 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.7531123698637,
            "unit": "iter/sec",
            "range": "stddev: 0.00028659147459300877",
            "extra": "mean: 7.420978873239302 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.21371879587826,
            "unit": "iter/sec",
            "range": "stddev: 0.0008850462217533448",
            "extra": "mean: 5.840653465346456 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.9373454852326,
            "unit": "iter/sec",
            "range": "stddev: 0.00010504802924324151",
            "extra": "mean: 3.301012618296504 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.08260826091964,
            "unit": "iter/sec",
            "range": "stddev: 0.0042201262760388865",
            "extra": "mean: 76.43735714285656 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.03941221984274,
            "unit": "iter/sec",
            "range": "stddev: 0.011401928952509374",
            "extra": "mean: 83.06053333333428 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.23647427504153,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817851704120097",
            "extra": "mean: 5.979556818181742 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.7396943962841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646646181858174",
            "extra": "mean: 4.296645669291409 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.66686058558116,
            "unit": "iter/sec",
            "range": "stddev: 0.00034865809462167417",
            "extra": "mean: 2.8763167082294907 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.5438561347093,
            "unit": "iter/sec",
            "range": "stddev: 0.00013264367600212488",
            "extra": "mean: 2.910836512261431 msec\nrounds: 367"
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
        "date": 1672782188084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.32114736755075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003591957694865089",
            "extra": "mean: 7.91633088235295 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.8050172546077,
            "unit": "iter/sec",
            "range": "stddev: 0.00031093603606985044",
            "extra": "mean: 6.336934131736559 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.26527939088223,
            "unit": "iter/sec",
            "range": "stddev: 0.00012097062428764923",
            "extra": "mean: 4.560685589519666 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.4578176584944,
            "unit": "iter/sec",
            "range": "stddev: 0.00044313527709608375",
            "extra": "mean: 3.101180821917832 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.20432409201544,
            "unit": "iter/sec",
            "range": "stddev: 0.0006034796127329134",
            "extra": "mean: 8.60553174603174 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.9600704940137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837508447218865",
            "extra": "mean: 7.355100628930829 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.01952134597505,
            "unit": "iter/sec",
            "range": "stddev: 0.000415208445139966",
            "extra": "mean: 5.101532710280407 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.7826566061391,
            "unit": "iter/sec",
            "range": "stddev: 0.0002032459571139419",
            "extra": "mean: 3.0789821428571256 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.662533598447263,
            "unit": "iter/sec",
            "range": "stddev: 0.002130413905681792",
            "extra": "mean: 73.19286666666638 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.19759170346591,
            "unit": "iter/sec",
            "range": "stddev: 0.004246745960985403",
            "extra": "mean: 75.77140000000024 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.45928661519122,
            "unit": "iter/sec",
            "range": "stddev: 0.0002855165891728857",
            "extra": "mean: 6.043782857142982 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.24759875855258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467073982851357",
            "extra": "mean: 4.459356557377009 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.26637194876275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497904780337727",
            "extra": "mean: 2.7757239583333093 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 355.7239295576906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004452685822457353",
            "extra": "mean: 2.81116876574316 msec\nrounds: 397"
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
        "date": 1672840754079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.28513573179488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005448531110736478",
            "extra": "mean: 8.905898305084722 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.47776852528042,
            "unit": "iter/sec",
            "range": "stddev: 0.00020823839333798417",
            "extra": "mean: 7.068248322147601 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.11610867328653,
            "unit": "iter/sec",
            "range": "stddev: 0.00047922183787944573",
            "extra": "mean: 5.372990049751299 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.0872300830023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001536200832988088",
            "extra": "mean: 3.3435061728395468 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.98837969524708,
            "unit": "iter/sec",
            "range": "stddev: 0.00045014108853006103",
            "extra": "mean: 9.524863636363662 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.3723671792528,
            "unit": "iter/sec",
            "range": "stddev: 0.0005671191536147694",
            "extra": "mean: 7.729625899280663 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.70300835804136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005841122292295579",
            "extra": "mean: 5.564737113402097 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.18563477358356,
            "unit": "iter/sec",
            "range": "stddev: 0.00016000394220145562",
            "extra": "mean: 3.494235483870993 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.384864987278977,
            "unit": "iter/sec",
            "range": "stddev: 0.005461768865748325",
            "extra": "mean: 80.74371428571426 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.42594679297293,
            "unit": "iter/sec",
            "range": "stddev: 0.0017573738539753026",
            "extra": "mean: 74.48264285714247 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.83694255287088,
            "unit": "iter/sec",
            "range": "stddev: 0.0003022437967868927",
            "extra": "mean: 6.542920731707716 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.18945378930445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007311991214756653",
            "extra": "mean: 4.6687639484980785 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 340.959594317182,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135973330140738",
            "extra": "mean: 2.9328988439308654 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 316.556740966001,
            "unit": "iter/sec",
            "range": "stddev: 0.00035366627589739183",
            "extra": "mean: 3.158991329479863 msec\nrounds: 346"
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
        "date": 1672842072258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.2972102852112,
            "unit": "iter/sec",
            "range": "stddev: 0.00039380894987847844",
            "extra": "mean: 8.598658536585411 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.82283850783477,
            "unit": "iter/sec",
            "range": "stddev: 0.00027207959279011587",
            "extra": "mean: 6.857636363636359 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.37962263572254,
            "unit": "iter/sec",
            "range": "stddev: 0.00011539039611435278",
            "extra": "mean: 5.015557692307677 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.87806099036436,
            "unit": "iter/sec",
            "range": "stddev: 0.00012575126378880824",
            "extra": "mean: 3.1961333333333233 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.82013675828837,
            "unit": "iter/sec",
            "range": "stddev: 0.00022140369709688709",
            "extra": "mean: 9.27470535714311 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.5466575220101,
            "unit": "iter/sec",
            "range": "stddev: 0.00020356329371697216",
            "extra": "mean: 7.2702602739727125 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.17275139834214,
            "unit": "iter/sec",
            "range": "stddev: 0.0003353066193172768",
            "extra": "mean: 5.258376884422137 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.55996407502334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517485418271766",
            "extra": "mean: 3.3160900621118787 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.36801378051249,
            "unit": "iter/sec",
            "range": "stddev: 0.0020453837599035667",
            "extra": "mean: 74.80542857142858 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.718148744971991,
            "unit": "iter/sec",
            "range": "stddev: 0.0006667945567811878",
            "extra": "mean: 72.89613333333496 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.50237895088898,
            "unit": "iter/sec",
            "range": "stddev: 0.0002942680609983541",
            "extra": "mean: 6.309053571428376 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.5229240501614,
            "unit": "iter/sec",
            "range": "stddev: 0.00015464298384942836",
            "extra": "mean: 4.319226720647937 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 359.4875295176904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000881717739918551",
            "extra": "mean: 2.781737662337436 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.9428706991045,
            "unit": "iter/sec",
            "range": "stddev: 0.00007343607672451265",
            "extra": "mean: 2.8823189189187195 msec\nrounds: 370"
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
        "date": 1672843569983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.00219766447744,
            "unit": "iter/sec",
            "range": "stddev: 0.001952152469395946",
            "extra": "mean: 9.008830645161334 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.1964528480745,
            "unit": "iter/sec",
            "range": "stddev: 0.0012041939590071136",
            "extra": "mean: 7.288818181818136 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.90232502620694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003056048890711298",
            "extra": "mean: 5.130775119617162 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.71652537430066,
            "unit": "iter/sec",
            "range": "stddev: 0.00013512284324071865",
            "extra": "mean: 3.208042944785258 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.43327127337085,
            "unit": "iter/sec",
            "range": "stddev: 0.000758355907314565",
            "extra": "mean: 9.668068965517215 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.78854381760164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468141764267107",
            "extra": "mean: 7.704840277777908 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.03902232933356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002531479980558858",
            "extra": "mean: 5.207275000000102 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.2151309251156,
            "unit": "iter/sec",
            "range": "stddev: 0.00025256095890325984",
            "extra": "mean: 3.457633757961726 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.28010395256774,
            "unit": "iter/sec",
            "range": "stddev: 0.001075728864417762",
            "extra": "mean: 75.30061538461433 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.090655736713957,
            "unit": "iter/sec",
            "range": "stddev: 0.004832319553715488",
            "extra": "mean: 82.70849999999947 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.92416325446288,
            "unit": "iter/sec",
            "range": "stddev: 0.0004442059035903828",
            "extra": "mean: 6.175730538922136 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.68602356039307,
            "unit": "iter/sec",
            "range": "stddev: 0.00026919038084721487",
            "extra": "mean: 4.470552000000168 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.769664240438,
            "unit": "iter/sec",
            "range": "stddev: 0.00018453793310033867",
            "extra": "mean: 2.78730366492142 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.5179586682415,
            "unit": "iter/sec",
            "range": "stddev: 0.00017934054207187263",
            "extra": "mean: 2.9195549450549754 msec\nrounds: 364"
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
        "date": 1672858455856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.841570171266,
            "unit": "iter/sec",
            "range": "stddev: 0.0004360169260813099",
            "extra": "mean: 8.632479674796791 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.74738714513393,
            "unit": "iter/sec",
            "range": "stddev: 0.001315756801850385",
            "extra": "mean: 7.104927631578937 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.4317820935638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003987909914113932",
            "extra": "mean: 5.116874999999978 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.44340575319404,
            "unit": "iter/sec",
            "range": "stddev: 0.0002314778925898636",
            "extra": "mean: 3.350719033232644 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.77945633172838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005857180233327333",
            "extra": "mean: 9.1929122807017 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.46876944169597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002444189606164998",
            "extra": "mean: 7.221845070422631 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.93720237266126,
            "unit": "iter/sec",
            "range": "stddev: 0.00023590136323988533",
            "extra": "mean: 5.129857142857221 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.01428386423083,
            "unit": "iter/sec",
            "range": "stddev: 0.0001072217888165263",
            "extra": "mean: 3.2678213166143233 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.73668183964714,
            "unit": "iter/sec",
            "range": "stddev: 0.005225276030004746",
            "extra": "mean: 78.51338461538458 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.183704564481058,
            "unit": "iter/sec",
            "range": "stddev: 0.0010600225090909795",
            "extra": "mean: 75.85121428571411 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.9437627695128,
            "unit": "iter/sec",
            "range": "stddev: 0.0003115238905251865",
            "extra": "mean: 6.3717090909091905 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.60105547024781,
            "unit": "iter/sec",
            "range": "stddev: 0.0002832690575609484",
            "extra": "mean: 4.432603375527556 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 361.4721638120116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001186716980661019",
            "extra": "mean: 2.7664647519582264 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 349.1636238011229,
            "unit": "iter/sec",
            "range": "stddev: 0.00011114896608966423",
            "extra": "mean: 2.8639867724868764 msec\nrounds: 378"
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
        "date": 1672940292626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.72165512347586,
            "unit": "iter/sec",
            "range": "stddev: 0.001150368821590524",
            "extra": "mean: 8.871409836065617 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.4913618881216,
            "unit": "iter/sec",
            "range": "stddev: 0.00031083388754532553",
            "extra": "mean: 6.920828947368434 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.98636451078366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002612938930435684",
            "extra": "mean: 4.975461904761933 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.899654083792,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477946363391737",
            "extra": "mean: 3.206159374999978 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.81498159067124,
            "unit": "iter/sec",
            "range": "stddev: 0.0003755211812794645",
            "extra": "mean: 9.361982608695556 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.84349779810113,
            "unit": "iter/sec",
            "range": "stddev: 0.0007036416317249794",
            "extra": "mean: 7.822063829787151 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.3238849041965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001805723050836166",
            "extra": "mean: 5.199562189054866 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.2843596134125,
            "unit": "iter/sec",
            "range": "stddev: 0.00012194209989601264",
            "extra": "mean: 3.363782747603662 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.648507024438787,
            "unit": "iter/sec",
            "range": "stddev: 0.00713829730213211",
            "extra": "mean: 79.06071428571389 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.949308636411967,
            "unit": "iter/sec",
            "range": "stddev: 0.003909535270153529",
            "extra": "mean: 77.22419999999961 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.9683754423144,
            "unit": "iter/sec",
            "range": "stddev: 0.0005228871582626947",
            "extra": "mean: 6.494840236686518 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 196.84495235094323,
            "unit": "iter/sec",
            "range": "stddev: 0.0008073822910842816",
            "extra": "mean: 5.080140425532268 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 329.69222056845484,
            "unit": "iter/sec",
            "range": "stddev: 0.00035998128774007574",
            "extra": "mean: 3.0331319261212824 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 326.3567181792705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017702168788002329",
            "extra": "mean: 3.064131805157728 msec\nrounds: 349"
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
        "date": 1672947725395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.7149509234781,
            "unit": "iter/sec",
            "range": "stddev: 0.0017836946337125251",
            "extra": "mean: 9.283762295082056 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.2436869817721,
            "unit": "iter/sec",
            "range": "stddev: 0.00010021704558783149",
            "extra": "mean: 6.9327124183006275 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.76230407868158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022275406693676",
            "extra": "mean: 5.501690821255865 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.02745127564094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000939154138122897",
            "extra": "mean: 3.300031055900531 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 91.13127045275814,
            "unit": "iter/sec",
            "range": "stddev: 0.0025568807479620505",
            "extra": "mean: 10.973181818181645 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.18776839224574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005507604697005334",
            "extra": "mean: 7.622661870503378 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.30594824081862,
            "unit": "iter/sec",
            "range": "stddev: 0.00020325462831559136",
            "extra": "mean: 5.367515151515197 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.29852346901464,
            "unit": "iter/sec",
            "range": "stddev: 0.00018854756040840489",
            "extra": "mean: 3.432904458598705 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.830914212507711,
            "unit": "iter/sec",
            "range": "stddev: 0.0010980295346549051",
            "extra": "mean: 77.9367692307684 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.530084250358783,
            "unit": "iter/sec",
            "range": "stddev: 0.0018801949128366387",
            "extra": "mean: 79.80792307692315 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.2656875606949,
            "unit": "iter/sec",
            "range": "stddev: 0.0011859506818143008",
            "extra": "mean: 7.0291017964073 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.5798474985121,
            "unit": "iter/sec",
            "range": "stddev: 0.0004897710464556673",
            "extra": "mean: 4.574987179487382 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 363.1650700533489,
            "unit": "iter/sec",
            "range": "stddev: 0.00007016181962253894",
            "extra": "mean: 2.7535687830690874 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 339.90736590466895,
            "unit": "iter/sec",
            "range": "stddev: 0.00013430625567906277",
            "extra": "mean: 2.9419780219780876 msec\nrounds: 364"
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
        "date": 1673020507974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.79508828235846,
            "unit": "iter/sec",
            "range": "stddev: 0.0005402532226252279",
            "extra": "mean: 8.635944881889705 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.14139620006253,
            "unit": "iter/sec",
            "range": "stddev: 0.00041514954306675207",
            "extra": "mean: 6.937632258064434 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.0939295981873,
            "unit": "iter/sec",
            "range": "stddev: 0.0005220817006290714",
            "extra": "mean: 5.125736111111125 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.18169048404724,
            "unit": "iter/sec",
            "range": "stddev: 0.00021470743747531058",
            "extra": "mean: 3.1727731343284185 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.54266363880903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004723852463348772",
            "extra": "mean: 8.965179487179379 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.91217145655997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002912663031674735",
            "extra": "mean: 7.096619047619157 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.0738902140363,
            "unit": "iter/sec",
            "range": "stddev: 0.00043717598433955164",
            "extra": "mean: 5.462275362318869 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.25997561403267,
            "unit": "iter/sec",
            "range": "stddev: 0.00025935158618199916",
            "extra": "mean: 3.481167182662498 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.820866587729558,
            "unit": "iter/sec",
            "range": "stddev: 0.00585738611938113",
            "extra": "mean: 84.59616666666659 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.475552714968021,
            "unit": "iter/sec",
            "range": "stddev: 0.002009824501207156",
            "extra": "mean: 80.15676923077017 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.98374427681924,
            "unit": "iter/sec",
            "range": "stddev: 0.00047937583477628134",
            "extra": "mean: 6.667389221556828 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.4434564806751,
            "unit": "iter/sec",
            "range": "stddev: 0.00048524513514746785",
            "extra": "mean: 4.43570204081625 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 351.0890028535026,
            "unit": "iter/sec",
            "range": "stddev: 0.0003339826600571506",
            "extra": "mean: 2.8482806122448263 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 327.85769184601827,
            "unit": "iter/sec",
            "range": "stddev: 0.00025760863411167695",
            "extra": "mean: 3.050103825136609 msec\nrounds: 366"
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
        "date": 1673244653306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.43514297634627,
            "unit": "iter/sec",
            "range": "stddev: 0.00040306954785560055",
            "extra": "mean: 8.815610169491498 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.2215689005518,
            "unit": "iter/sec",
            "range": "stddev: 0.0004919407821843227",
            "extra": "mean: 7.1315704697985645 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.90775908844188,
            "unit": "iter/sec",
            "range": "stddev: 0.0007042452508954524",
            "extra": "mean: 5.26571428571431 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.32965684290355,
            "unit": "iter/sec",
            "range": "stddev: 0.0008494195728433347",
            "extra": "mean: 3.5170443037973884 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.59023403068613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006670405614366214",
            "extra": "mean: 9.6534196428572 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.41011953796456,
            "unit": "iter/sec",
            "range": "stddev: 0.00037538899721378566",
            "extra": "mean: 7.552292857142844 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.19686870692405,
            "unit": "iter/sec",
            "range": "stddev: 0.00032110187685641545",
            "extra": "mean: 5.34196969696968 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.91309959953077,
            "unit": "iter/sec",
            "range": "stddev: 0.00018693205136061396",
            "extra": "mean: 3.4612483870967554 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.803331081620986,
            "unit": "iter/sec",
            "range": "stddev: 0.0047973297580724585",
            "extra": "mean: 84.72184615384585 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.207185841142081,
            "unit": "iter/sec",
            "range": "stddev: 0.0036360970327910073",
            "extra": "mean: 75.71635714285715 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.9488977836127,
            "unit": "iter/sec",
            "range": "stddev: 0.0010424529932453492",
            "extra": "mean: 6.6689386503065435 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.00307371525355,
            "unit": "iter/sec",
            "range": "stddev: 0.0003755970289015069",
            "extra": "mean: 4.6947679324891745 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 322.20256223439173,
            "unit": "iter/sec",
            "range": "stddev: 0.0003925571789539197",
            "extra": "mean: 3.103637640449715 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 319.0887253831384,
            "unit": "iter/sec",
            "range": "stddev: 0.00025471302555720224",
            "extra": "mean: 3.133924581005716 msec\nrounds: 358"
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
        "date": 1673253877215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.40621546269129,
            "unit": "iter/sec",
            "range": "stddev: 0.0010616157393146908",
            "extra": "mean: 11.84746874999998 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 113.65484409882022,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603300600593832",
            "extra": "mean: 8.798569105690941 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.91052274321277,
            "unit": "iter/sec",
            "range": "stddev: 0.0002466903978718095",
            "extra": "mean: 6.455339393939357 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.75605394259077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894568202979456",
            "extra": "mean: 4.314881889763769 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 83.6988496580576,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456977715995969",
            "extra": "mean: 11.947595505617933 msec\nrounds: 89"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 97.80412578983328,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929595275118101",
            "extra": "mean: 10.224517543859585 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 134.9405478063894,
            "unit": "iter/sec",
            "range": "stddev: 0.00045743494477049697",
            "extra": "mean: 7.410670967741916 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.87996386791588,
            "unit": "iter/sec",
            "range": "stddev: 0.00029560566780753003",
            "extra": "mean: 4.506941422594134 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 8.943482071570608,
            "unit": "iter/sec",
            "range": "stddev: 0.01473924612109393",
            "extra": "mean: 111.81327272727289 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.339337041708868,
            "unit": "iter/sec",
            "range": "stddev: 0.0018812006272589214",
            "extra": "mean: 96.71800000000016 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 115.6730956555644,
            "unit": "iter/sec",
            "range": "stddev: 0.0008108479224053443",
            "extra": "mean: 8.645052631578773 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 166.49927701918196,
            "unit": "iter/sec",
            "range": "stddev: 0.000380785646581146",
            "extra": "mean: 6.006032085561504 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 264.00833524644247,
            "unit": "iter/sec",
            "range": "stddev: 0.000712750162517397",
            "extra": "mean: 3.7877591973243394 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 262.6385488195552,
            "unit": "iter/sec",
            "range": "stddev: 0.00012007442003234734",
            "extra": "mean: 3.807514184397379 msec\nrounds: 282"
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
        "date": 1673261049756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.98042536717612,
            "unit": "iter/sec",
            "range": "stddev: 0.00022053384642583187",
            "extra": "mean: 8.265799999999963 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.16594522588713,
            "unit": "iter/sec",
            "range": "stddev: 0.00020953789750933555",
            "extra": "mean: 6.703943037974691 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.3026471798664,
            "unit": "iter/sec",
            "range": "stddev: 0.00017492711572096776",
            "extra": "mean: 4.870857798165147 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.8337809550476,
            "unit": "iter/sec",
            "range": "stddev: 0.00024116987805707305",
            "extra": "mean: 3.1562291021672344 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.30298402255472,
            "unit": "iter/sec",
            "range": "stddev: 0.0009765074651505285",
            "extra": "mean: 9.233355932203532 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.0774359574219,
            "unit": "iter/sec",
            "range": "stddev: 0.000289675040953462",
            "extra": "mean: 7.295146666666668 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.3565728567189,
            "unit": "iter/sec",
            "range": "stddev: 0.0003698169610038629",
            "extra": "mean: 5.424270935960583 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.29013846244663,
            "unit": "iter/sec",
            "range": "stddev: 0.0001125358534763568",
            "extra": "mean: 3.3080801282051397 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.642670276450035,
            "unit": "iter/sec",
            "range": "stddev: 0.004295745716198908",
            "extra": "mean: 79.09721428571436 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.909579461227933,
            "unit": "iter/sec",
            "range": "stddev: 0.00752763855971601",
            "extra": "mean: 77.46185714285707 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.41855697569423,
            "unit": "iter/sec",
            "range": "stddev: 0.0009587949537466447",
            "extra": "mean: 6.434238095238454 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.706889606952,
            "unit": "iter/sec",
            "range": "stddev: 0.000641233738440598",
            "extra": "mean: 4.657512396694051 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 338.86183443747785,
            "unit": "iter/sec",
            "range": "stddev: 0.00040690147083085145",
            "extra": "mean: 2.9510552631577234 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 335.2467297501848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005261844857762255",
            "extra": "mean: 2.9828777173909145 msec\nrounds: 368"
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
        "date": 1673268724787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.00457102506388,
            "unit": "iter/sec",
            "range": "stddev: 0.0002692196206241943",
            "extra": "mean: 8.474247999999953 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.4105706625803,
            "unit": "iter/sec",
            "range": "stddev: 0.00029478677474388705",
            "extra": "mean: 6.73806451612908 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.98742936158246,
            "unit": "iter/sec",
            "range": "stddev: 0.00023182699845187454",
            "extra": "mean: 5.000314285714299 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.00162818278005,
            "unit": "iter/sec",
            "range": "stddev: 0.00012115918400872512",
            "extra": "mean: 3.1948715596330417 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.23083467353473,
            "unit": "iter/sec",
            "range": "stddev: 0.00030023041549306304",
            "extra": "mean: 9.071871794871653 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.9178954153539,
            "unit": "iter/sec",
            "range": "stddev: 0.00039941509464738175",
            "extra": "mean: 7.756875000000206 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.08794086976698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003371317124468969",
            "extra": "mean: 5.288544554455448 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.8304800041972,
            "unit": "iter/sec",
            "range": "stddev: 0.00008433868665724942",
            "extra": "mean: 3.313118012422384 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.58144063302076,
            "unit": "iter/sec",
            "range": "stddev: 0.002353243819572934",
            "extra": "mean: 79.48215384615327 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.407560140089748,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177791795179253",
            "extra": "mean: 74.58478571428628 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.99063826208396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002892580937412634",
            "extra": "mean: 6.250365714285603 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.55658387592607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764085024992451",
            "extra": "mean: 4.554634538152185 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.65446021588866,
            "unit": "iter/sec",
            "range": "stddev: 0.00009329194721863359",
            "extra": "mean: 2.788198979591832 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.48522117760797,
            "unit": "iter/sec",
            "range": "stddev: 0.00012000061351514953",
            "extra": "mean: 2.8861259842520126 msec\nrounds: 381"
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
        "date": 1673280981947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.09709962631408,
            "unit": "iter/sec",
            "range": "stddev: 0.0009654416819035339",
            "extra": "mean: 10.19398130841123 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 120.94157529109451,
            "unit": "iter/sec",
            "range": "stddev: 0.0009872229647807647",
            "extra": "mean: 8.268455223880606 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.24891916336708,
            "unit": "iter/sec",
            "range": "stddev: 0.000546877419959454",
            "extra": "mean: 5.94357458563532 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.42431646316504,
            "unit": "iter/sec",
            "range": "stddev: 0.00041969408388267107",
            "extra": "mean: 3.869604895104896 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 90.34603425635386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447583807171397",
            "extra": "mean: 11.068554455445529 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 113.3965183610922,
            "unit": "iter/sec",
            "range": "stddev: 0.0008484811270275378",
            "extra": "mean: 8.81861290322572 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.33941045112692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008732955439100844",
            "extra": "mean: 6.198113636363638 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.8045222530448,
            "unit": "iter/sec",
            "range": "stddev: 0.0004278416485452728",
            "extra": "mean: 3.9556254416962116 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.964852166380709,
            "unit": "iter/sec",
            "range": "stddev: 0.003612543765069931",
            "extra": "mean: 91.20049999999965 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.775188108629948,
            "unit": "iter/sec",
            "range": "stddev: 0.0034143502332284596",
            "extra": "mean: 84.92433333333398 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 135.44421639652958,
            "unit": "iter/sec",
            "range": "stddev: 0.0009061062320984463",
            "extra": "mean: 7.383113333332574 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 196.32299635722978,
            "unit": "iter/sec",
            "range": "stddev: 0.00042445799433263846",
            "extra": "mean: 5.093646788990514 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 294.5091192330949,
            "unit": "iter/sec",
            "range": "stddev: 0.0003061507281306666",
            "extra": "mean: 3.3954805970151667 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 288.00163649527184,
            "unit": "iter/sec",
            "range": "stddev: 0.00019489604471033977",
            "extra": "mean: 3.4722024922119394 msec\nrounds: 321"
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
          "id": "2c17a319adcd65bfc0bbb57469ba75effe716efe",
          "message": "Merge pull request #778 from TeoZosa/deps/remove-typeguard\n\n:heavy_minus_sign: Remove dev dependency: `typeguard`",
          "timestamp": "2023-01-10T09:44:04+09:00",
          "tree_id": "5c3ff10b5045ff63238e1e0e7e11be5969e61247",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2c17a319adcd65bfc0bbb57469ba75effe716efe"
        },
        "date": 1673311671051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.64028676319955,
            "unit": "iter/sec",
            "range": "stddev: 0.0007109131144647368",
            "extra": "mean: 8.72293700787399 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.92648524786486,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105912867072096",
            "extra": "mean: 6.760114649681597 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.369488299324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003181825719505101",
            "extra": "mean: 5.066639269406391 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.8252574431031,
            "unit": "iter/sec",
            "range": "stddev: 0.00010259939493282407",
            "extra": "mean: 3.146383040935692 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.56966461032547,
            "unit": "iter/sec",
            "range": "stddev: 0.00042169021746464407",
            "extra": "mean: 8.883387931034793 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.3280752169769,
            "unit": "iter/sec",
            "range": "stddev: 0.000479054748270966",
            "extra": "mean: 7.389449664429646 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.12220359979383,
            "unit": "iter/sec",
            "range": "stddev: 0.00021362298780846698",
            "extra": "mean: 4.972101449275415 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.0758324166895,
            "unit": "iter/sec",
            "range": "stddev: 0.00026780764263344256",
            "extra": "mean: 3.3324909638553835 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.280577818968691,
            "unit": "iter/sec",
            "range": "stddev: 0.0015765624954938735",
            "extra": "mean: 75.29792857142833 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.613340295584267,
            "unit": "iter/sec",
            "range": "stddev: 0.0024488965052456998",
            "extra": "mean: 73.45735714285847 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.26293482002816,
            "unit": "iter/sec",
            "range": "stddev: 0.0004714875644068862",
            "extra": "mean: 6.278924855491516 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.3051500711917,
            "unit": "iter/sec",
            "range": "stddev: 0.0003122762044851295",
            "extra": "mean: 4.28623200000024 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 348.2380408432125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704038572901539",
            "extra": "mean: 2.8715989717224226 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 341.5341199911016,
            "unit": "iter/sec",
            "range": "stddev: 0.0001743624372814174",
            "extra": "mean: 2.9279651474530692 msec\nrounds: 373"
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
          "id": "8b9c77d6363b4698601385cfa8bdf91bac8a0fc6",
          "message": "Merge pull request #781 from TeoZosa/chore/from-future-import-annotations\n\n♻️  Postpone annotation evaluation (PEP 563)",
          "timestamp": "2023-01-10T16:14:14+09:00",
          "tree_id": "1a90a31642aeef9d5c84e0c18e2d900be1317ea1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8b9c77d6363b4698601385cfa8bdf91bac8a0fc6"
        },
        "date": 1673335048585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.40980813358726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783008665395944",
            "extra": "mean: 8.517176000000049 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.88804495796649,
            "unit": "iter/sec",
            "range": "stddev: 0.00027949760730580224",
            "extra": "mean: 6.761871794871757 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.2490269319081,
            "unit": "iter/sec",
            "range": "stddev: 0.00008625830704513225",
            "extra": "mean: 5.0955666666666675 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.4923018740049,
            "unit": "iter/sec",
            "range": "stddev: 0.00022447417559746583",
            "extra": "mean: 3.3278722741433007 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.70522526640386,
            "unit": "iter/sec",
            "range": "stddev: 0.00034704453332110876",
            "extra": "mean: 9.460270270270438 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.51288789422628,
            "unit": "iter/sec",
            "range": "stddev: 0.0003189054796663692",
            "extra": "mean: 7.434231884058176 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.41672264789273,
            "unit": "iter/sec",
            "range": "stddev: 0.00012726261236498067",
            "extra": "mean: 5.251639593908674 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 271.916420016172,
            "unit": "iter/sec",
            "range": "stddev: 0.0006754200902643888",
            "extra": "mean: 3.677600638977689 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.442894293784443,
            "unit": "iter/sec",
            "range": "stddev: 0.0066603784908235274",
            "extra": "mean: 80.36715384615351 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.205616159901124,
            "unit": "iter/sec",
            "range": "stddev: 0.0020489389977446705",
            "extra": "mean: 75.72535714285726 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.55801476800778,
            "unit": "iter/sec",
            "range": "stddev: 0.00013863456903106551",
            "extra": "mean: 6.38740853658517 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.44655445392956,
            "unit": "iter/sec",
            "range": "stddev: 0.00022915933598973996",
            "extra": "mean: 4.416053061224429 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 341.3535968744092,
            "unit": "iter/sec",
            "range": "stddev: 0.00030875561057710057",
            "extra": "mean: 2.9295135869563427 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 327.5412811804654,
            "unit": "iter/sec",
            "range": "stddev: 0.00029512563480982713",
            "extra": "mean: 3.0530502793296157 msec\nrounds: 358"
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
          "id": "0830c97cb7f211f467f65497896d652c47a17afe",
          "message": "Merge pull request #788 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.2.8",
          "timestamp": "2023-01-12T15:48:00Z",
          "tree_id": "a5cd56579681b1ea7c3de969bed98ed7c03a5e44",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0830c97cb7f211f467f65497896d652c47a17afe"
        },
        "date": 1673539296842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.58959891698784,
            "unit": "iter/sec",
            "range": "stddev: 0.0009581443612470873",
            "extra": "mean: 8.803622950819712 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.03395279707374,
            "unit": "iter/sec",
            "range": "stddev: 0.0013287519459986748",
            "extra": "mean: 7.29746153846154 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.86226733620887,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619476415663443",
            "extra": "mean: 5.2393802816901145 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.2897532707004,
            "unit": "iter/sec",
            "range": "stddev: 0.000570487082419176",
            "extra": "mean: 3.330116959064321 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.39429726566725,
            "unit": "iter/sec",
            "range": "stddev: 0.0007095727120091391",
            "extra": "mean: 9.398999999999939 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.0973238703672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005483893875382366",
            "extra": "mean: 7.686553191489391 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.26481965153843,
            "unit": "iter/sec",
            "range": "stddev: 0.0020905928035902404",
            "extra": "mean: 5.873203883495051 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 260.5991463930233,
            "unit": "iter/sec",
            "range": "stddev: 0.0014495264101523468",
            "extra": "mean: 3.837311111111037 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.803398199445294,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886474440506367",
            "extra": "mean: 72.44592857142861 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.842003969035206,
            "unit": "iter/sec",
            "range": "stddev: 0.005699951213659295",
            "extra": "mean: 77.86946666666759 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.36015947812683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006298269094963384",
            "extra": "mean: 6.4366566265065535 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.28926667391565,
            "unit": "iter/sec",
            "range": "stddev: 0.00043536285380592885",
            "extra": "mean: 4.51897200000019 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.47205238154277,
            "unit": "iter/sec",
            "range": "stddev: 0.00010156611700001685",
            "extra": "mean: 2.7436945945944937 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.19629292254547,
            "unit": "iter/sec",
            "range": "stddev: 0.0004527105507176546",
            "extra": "mean: 3.001233870967644 msec\nrounds: 372"
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
          "id": "98cc16b298317ed9504c2747c16cad84e52a4401",
          "message": "Merge pull request #789 from TeoZosa/dependabot/pip/sentry-sdk-1.13.0",
          "timestamp": "2023-01-13T15:02:19Z",
          "tree_id": "0f08b28be620f15d477f8637bf1fe3d7ffba7892",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/98cc16b298317ed9504c2747c16cad84e52a4401"
        },
        "date": 1673622655441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.89983446069978,
            "unit": "iter/sec",
            "range": "stddev: 0.0006198499671351697",
            "extra": "mean: 9.532903508771932 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.23495441182854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003898312138442906",
            "extra": "mean: 7.394537931034592 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.68776142021323,
            "unit": "iter/sec",
            "range": "stddev: 0.00018399339728456332",
            "extra": "mean: 5.444020833333313 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 274.86259138273994,
            "unit": "iter/sec",
            "range": "stddev: 0.0002492036390123726",
            "extra": "mean: 3.6381815181518196 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.30749914393192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007376318515056898",
            "extra": "mean: 10.383407407407562 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.0880807475386,
            "unit": "iter/sec",
            "range": "stddev: 0.00027541423107319067",
            "extra": "mean: 7.930963768115895 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.81079086624862,
            "unit": "iter/sec",
            "range": "stddev: 0.0002908571715500306",
            "extra": "mean: 5.786675675675692 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.8642202046078,
            "unit": "iter/sec",
            "range": "stddev: 0.00015683263473430456",
            "extra": "mean: 3.473860000000073 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.774115318817332,
            "unit": "iter/sec",
            "range": "stddev: 0.002179662106253023",
            "extra": "mean: 78.28330769230782 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.355277777532743,
            "unit": "iter/sec",
            "range": "stddev: 0.0032696140554258147",
            "extra": "mean: 80.93707142857072 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.77131558557537,
            "unit": "iter/sec",
            "range": "stddev: 0.00032978782652160236",
            "extra": "mean: 6.461145569620006 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.23947869706384,
            "unit": "iter/sec",
            "range": "stddev: 0.0002807497580866771",
            "extra": "mean: 4.6032148760331 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 333.82752000907533,
            "unit": "iter/sec",
            "range": "stddev: 0.00013613408451150732",
            "extra": "mean: 2.995558904109566 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 323.5229479637343,
            "unit": "iter/sec",
            "range": "stddev: 0.00014477322161686736",
            "extra": "mean: 3.090970845481095 msec\nrounds: 343"
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
          "id": "e818a0c20ce288e263ca91d6d8f0511a49a9062c",
          "message": "Merge pull request #790 from TeoZosa/ci/migrate-linters-to-ruff\n\n🏗️ Migrate linters to `ruff`",
          "timestamp": "2023-01-14T16:05:44+09:00",
          "tree_id": "acf6e6fe5702230e9b89b2a3f3e4c149f9b4b6a5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e818a0c20ce288e263ca91d6d8f0511a49a9062c"
        },
        "date": 1673680194575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.11853407467315,
            "unit": "iter/sec",
            "range": "stddev: 0.001485354756716114",
            "extra": "mean: 10.191754385964934 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.55332600329777,
            "unit": "iter/sec",
            "range": "stddev: 0.0009154300713419886",
            "extra": "mean: 8.028689655172462 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.50483322181583,
            "unit": "iter/sec",
            "range": "stddev: 0.000921742088272575",
            "extra": "mean: 5.763528205128201 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.13633793676112,
            "unit": "iter/sec",
            "range": "stddev: 0.0009887515080419333",
            "extra": "mean: 3.9348957654723042 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 78.87531315377241,
            "unit": "iter/sec",
            "range": "stddev: 0.006342250032252849",
            "extra": "mean: 12.678238095238198 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.58561232891353,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469131396688841",
            "extra": "mean: 8.026609022556631 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.08030314462073,
            "unit": "iter/sec",
            "range": "stddev: 0.0004805246473131529",
            "extra": "mean: 5.914349462365598 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.89432438851048,
            "unit": "iter/sec",
            "range": "stddev: 0.0014374287772122392",
            "extra": "mean: 4.083393939393869 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.077015125455032,
            "unit": "iter/sec",
            "range": "stddev: 0.003131173304873468",
            "extra": "mean: 82.80191666666663 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.914374142508601,
            "unit": "iter/sec",
            "range": "stddev: 0.0036290069154380276",
            "extra": "mean: 83.93223076923178 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 136.12897149853057,
            "unit": "iter/sec",
            "range": "stddev: 0.001879811820469538",
            "extra": "mean: 7.3459748427673555 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 212.48831995292613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007711836238815855",
            "extra": "mean: 4.706141025641015 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 319.024864763077,
            "unit": "iter/sec",
            "range": "stddev: 0.0005924032468567608",
            "extra": "mean: 3.1345519125684684 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 302.03791940782435,
            "unit": "iter/sec",
            "range": "stddev: 0.00045187835234443885",
            "extra": "mean: 3.310842565597725 msec\nrounds: 343"
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
          "id": "5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae",
          "message": "Merge pull request #784 from TeoZosa/dependabot/pip/docs/orjson-3.8.5",
          "timestamp": "2023-01-14T10:14:21Z",
          "tree_id": "efecafffd0e86ff848bf96e95ff4594ad7dbadba",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5a27cbbe68edad7eb6cf140c5dc2f70bedf24aae"
        },
        "date": 1673693921245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.8130536113675,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715147102495885",
            "extra": "mean: 8.709811023622068 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.25877467692547,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530736905179734",
            "extra": "mean: 6.931987341772094 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.36639103336512,
            "unit": "iter/sec",
            "range": "stddev: 0.00021403185578120794",
            "extra": "mean: 5.280768115942002 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7348927727119,
            "unit": "iter/sec",
            "range": "stddev: 0.0001679446091908066",
            "extra": "mean: 3.218177370030515 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.23478257649764,
            "unit": "iter/sec",
            "range": "stddev: 0.0002915647217382968",
            "extra": "mean: 9.15459322033891 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.14332311244993,
            "unit": "iter/sec",
            "range": "stddev: 0.00026586403896113145",
            "extra": "mean: 7.291641891891852 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.22243286170567,
            "unit": "iter/sec",
            "range": "stddev: 0.00017821586710766832",
            "extra": "mean: 5.22951196172267 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.69118242443443,
            "unit": "iter/sec",
            "range": "stddev: 0.00013696461854224688",
            "extra": "mean: 3.3036971608832566 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.787221546833646,
            "unit": "iter/sec",
            "range": "stddev: 0.005480886136443476",
            "extra": "mean: 78.20307142857149 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.333155557925753,
            "unit": "iter/sec",
            "range": "stddev: 0.0034123700603197644",
            "extra": "mean: 75.00100000000079 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.2048128979605,
            "unit": "iter/sec",
            "range": "stddev: 0.0019100775391202606",
            "extra": "mean: 6.281217142856933 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.6019947116816,
            "unit": "iter/sec",
            "range": "stddev: 0.00029002363864507144",
            "extra": "mean: 4.208718875502081 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.4431734637312,
            "unit": "iter/sec",
            "range": "stddev: 0.00007936450754087556",
            "extra": "mean: 2.7743624338626094 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.9508800959634,
            "unit": "iter/sec",
            "range": "stddev: 0.00014412408249006567",
            "extra": "mean: 2.9073918918916464 msec\nrounds: 370"
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
          "id": "eba81f3dc6bd2489195e2aad144968eac9fd3c28",
          "message": "Merge pull request #791 from TeoZosa/docs/add-ruff-documentation\n\n📝 Add Ruff status badge",
          "timestamp": "2023-01-14T23:17:36+09:00",
          "tree_id": "495cf285c70a9512296c2a1f833b1a784b5884c2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/eba81f3dc6bd2489195e2aad144968eac9fd3c28"
        },
        "date": 1673708050752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.56830783344864,
            "unit": "iter/sec",
            "range": "stddev: 0.0003694649373321111",
            "extra": "mean: 9.472539823008855 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.44021053459733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003983086201301176",
            "extra": "mean: 7.608021897810205 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.51916487308657,
            "unit": "iter/sec",
            "range": "stddev: 0.00017775008399984336",
            "extra": "mean: 5.633194594594493 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.71538253898296,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441308337830045",
            "extra": "mean: 3.666826530612208 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.45048730738897,
            "unit": "iter/sec",
            "range": "stddev: 0.00027530144365137897",
            "extra": "mean: 10.055254901960668 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.9524551026361,
            "unit": "iter/sec",
            "range": "stddev: 0.0008851114645213009",
            "extra": "mean: 8.477992248061746 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.74107452664623,
            "unit": "iter/sec",
            "range": "stddev: 0.0006792041002688351",
            "extra": "mean: 5.8913259668508715 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 206.51649176956406,
            "unit": "iter/sec",
            "range": "stddev: 0.010495171453945646",
            "extra": "mean: 4.842228295819703 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.348704620885286,
            "unit": "iter/sec",
            "range": "stddev: 0.00197308155120075",
            "extra": "mean: 80.98015384615373 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.027853071183438,
            "unit": "iter/sec",
            "range": "stddev: 0.008126223889900664",
            "extra": "mean: 83.14035714285696 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.9541967481387,
            "unit": "iter/sec",
            "range": "stddev: 0.0004798536069700002",
            "extra": "mean: 6.851464516129116 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.24362871284313,
            "unit": "iter/sec",
            "range": "stddev: 0.00010664401619331153",
            "extra": "mean: 4.561135964912173 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 313.9053671411834,
            "unit": "iter/sec",
            "range": "stddev: 0.00015189773634203353",
            "extra": "mean: 3.185673469387466 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 300.7484008282072,
            "unit": "iter/sec",
            "range": "stddev: 0.00016353847358995964",
            "extra": "mean: 3.3250384615385458 msec\nrounds: 338"
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
          "id": "02f4d6a9512ec041d5187d21abb8b6b616a9813b",
          "message": "Merge pull request #782 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.3.2",
          "timestamp": "2023-01-14T14:30:36Z",
          "tree_id": "4e0d8c0db33fd57d7045107afad05779f5698ff5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02f4d6a9512ec041d5187d21abb8b6b616a9813b"
        },
        "date": 1673711687432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.1775152821051,
            "unit": "iter/sec",
            "range": "stddev: 0.0011563568688763282",
            "extra": "mean: 10.185631578947392 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.46972594008898,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739408415874303",
            "extra": "mean: 7.845000000000015 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.46237984427535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006731960223274839",
            "extra": "mean: 6.080417910447793 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.90404320366122,
            "unit": "iter/sec",
            "range": "stddev: 0.0008114635257282624",
            "extra": "mean: 3.907714733542331 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.59984157008792,
            "unit": "iter/sec",
            "range": "stddev: 0.0008357840046939047",
            "extra": "mean: 10.799154545454698 msec\nrounds: 110"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 113.09546412892537,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162081398547847",
            "extra": "mean: 8.842087591240889 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.19016159574633,
            "unit": "iter/sec",
            "range": "stddev: 0.0009664359639503759",
            "extra": "mean: 6.165602094240878 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.57523433244998,
            "unit": "iter/sec",
            "range": "stddev: 0.0004877892628031876",
            "extra": "mean: 4.006807817589532 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.652195175330277,
            "unit": "iter/sec",
            "range": "stddev: 0.008389593390298765",
            "extra": "mean: 93.87736363636375 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.759451764550121,
            "unit": "iter/sec",
            "range": "stddev: 0.01009894975245313",
            "extra": "mean: 92.94153846153819 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 127.57382153682735,
            "unit": "iter/sec",
            "range": "stddev: 0.0010175223254216355",
            "extra": "mean: 7.838598765431866 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 189.52525124091184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006417779901406837",
            "extra": "mean: 5.276341772151864 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 289.1197776246971,
            "unit": "iter/sec",
            "range": "stddev: 0.0004802726593129022",
            "extra": "mean: 3.458774104682966 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 272.79298043817556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004754005395276865",
            "extra": "mean: 3.6657834757835164 msec\nrounds: 351"
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
          "id": "81573e95bcfc838f6f0a208d03ad824c47a35a9d",
          "message": "Merge pull request #786 from TeoZosa/dependabot/pip/docs/poetry-1.3.2",
          "timestamp": "2023-01-15T00:58:39Z",
          "tree_id": "0ee02943f6b4684bd7b5101e9d55b2cedf52986c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81573e95bcfc838f6f0a208d03ad824c47a35a9d"
        },
        "date": 1673772733621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.50692858523442,
            "unit": "iter/sec",
            "range": "stddev: 0.00038868656881114674",
            "extra": "mean: 8.733096000000032 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.87360878402666,
            "unit": "iter/sec",
            "range": "stddev: 0.00045817731640945944",
            "extra": "mean: 7.200792207792189 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.43479851466233,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114698846598051",
            "extra": "mean: 5.090747706422076 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.69809329738774,
            "unit": "iter/sec",
            "range": "stddev: 0.000185038675361817",
            "extra": "mean: 3.197972809667765 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.93570214350773,
            "unit": "iter/sec",
            "range": "stddev: 0.00043821196119968444",
            "extra": "mean: 9.351413793103447 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.1772458759264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005048555622912703",
            "extra": "mean: 7.508790209790362 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.6277981346378,
            "unit": "iter/sec",
            "range": "stddev: 0.00024774360744458576",
            "extra": "mean: 5.301445544554493 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.3936847466319,
            "unit": "iter/sec",
            "range": "stddev: 0.00018703648384649893",
            "extra": "mean: 3.3069473684209876 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.768037589102612,
            "unit": "iter/sec",
            "range": "stddev: 0.0044189234455447365",
            "extra": "mean: 78.32057142857174 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.037639665715021,
            "unit": "iter/sec",
            "range": "stddev: 0.0024223448588883345",
            "extra": "mean: 76.7009999999994 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.21308940198466,
            "unit": "iter/sec",
            "range": "stddev: 0.00027173376667548706",
            "extra": "mean: 5.98039306358352 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.27427548293315,
            "unit": "iter/sec",
            "range": "stddev: 0.0001746104250416876",
            "extra": "mean: 4.305255060728743 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 352.85946164790107,
            "unit": "iter/sec",
            "range": "stddev: 0.00022688889309492935",
            "extra": "mean: 2.8339894736841282 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 331.833566829039,
            "unit": "iter/sec",
            "range": "stddev: 0.0002449728398465568",
            "extra": "mean: 3.0135589041093036 msec\nrounds: 365"
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
          "id": "804b002cf0a6bba4c7fd90ba52cf34805eda27a6",
          "message": "Merge pull request #793 from TeoZosa/dependabot/pip/rich-13.1.0",
          "timestamp": "2023-01-15T12:09:52Z",
          "tree_id": "132be4b2a953cf97aa7e76d5d655ec4500383932",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/804b002cf0a6bba4c7fd90ba52cf34805eda27a6"
        },
        "date": 1673784820378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.52213898983915,
            "unit": "iter/sec",
            "range": "stddev: 0.00023884364638397285",
            "extra": "mean: 8.297230769230763 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.1168554237522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002978393514048317",
            "extra": "mean: 6.706150000000027 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.66827166873438,
            "unit": "iter/sec",
            "range": "stddev: 0.00012905961515624075",
            "extra": "mean: 4.815372093023277 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.05561997654553,
            "unit": "iter/sec",
            "range": "stddev: 0.00011243502075879986",
            "extra": "mean: 3.1441041666666454 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.19461357954621,
            "unit": "iter/sec",
            "range": "stddev: 0.00041500107114966875",
            "extra": "mean: 8.993241379310353 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.2567753596997,
            "unit": "iter/sec",
            "range": "stddev: 0.0006631077822593153",
            "extra": "mean: 7.677143835616486 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.24202418731477,
            "unit": "iter/sec",
            "range": "stddev: 0.0002878642019011412",
            "extra": "mean: 5.174857819905016 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.044530714769,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843456007987924",
            "extra": "mean: 3.3893188854489864 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.70382306897013,
            "unit": "iter/sec",
            "range": "stddev: 0.004761970418768976",
            "extra": "mean: 78.71646153846093 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.773500292807812,
            "unit": "iter/sec",
            "range": "stddev: 0.007817363658990401",
            "extra": "mean: 78.28707692307765 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.6262027164363,
            "unit": "iter/sec",
            "range": "stddev: 0.0004360703023564323",
            "extra": "mean: 6.149070588235116 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.15175886451675,
            "unit": "iter/sec",
            "range": "stddev: 0.000319610550404921",
            "extra": "mean: 4.307527131782783 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.3329178979608,
            "unit": "iter/sec",
            "range": "stddev: 0.0001964799578189258",
            "extra": "mean: 2.775211340206171 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.6728591960437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989339465695532",
            "extra": "mean: 3.1184428969358113 msec\nrounds: 359"
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
          "id": "60afafdc960ab68128dc92260c04f61397c75b3f",
          "message": "Merge pull request #792 from TeoZosa/ci/add-pydocstyle-via-ruff\n\n➕ Integrate `pydocstyle` via Ruff",
          "timestamp": "2023-01-16T09:18:19+09:00",
          "tree_id": "0fcd7364d294e5479ae39c53e00992228355d4ad",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/60afafdc960ab68128dc92260c04f61397c75b3f"
        },
        "date": 1673828979424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.53614266001459,
            "unit": "iter/sec",
            "range": "stddev: 0.0035551392562741075",
            "extra": "mean: 10.577964912280732 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.27874886034297,
            "unit": "iter/sec",
            "range": "stddev: 0.0010786593630076312",
            "extra": "mean: 7.7955234899328465 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.91448507613947,
            "unit": "iter/sec",
            "range": "stddev: 0.001277155618201939",
            "extra": "mean: 5.589262376237656 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.37233652132977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007751388486771593",
            "extra": "mean: 3.6714448051947777 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.21129456920995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418798302890561",
            "extra": "mean: 9.978915094339587 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.10802860287713,
            "unit": "iter/sec",
            "range": "stddev: 0.0008783875011226501",
            "extra": "mean: 8.189469696969933 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.6772594568876,
            "unit": "iter/sec",
            "range": "stddev: 0.0013725054026023228",
            "extra": "mean: 6.1095842105261955 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.05524686458244,
            "unit": "iter/sec",
            "range": "stddev: 0.001043192702130929",
            "extra": "mean: 4.031359999999987 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.637432073802591,
            "unit": "iter/sec",
            "range": "stddev: 0.0009303211810986324",
            "extra": "mean: 79.13000000000008 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.203211362235779,
            "unit": "iter/sec",
            "range": "stddev: 0.0067984459039393975",
            "extra": "mean: 81.94564285714279 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.27747939028723,
            "unit": "iter/sec",
            "range": "stddev: 0.000841647979982527",
            "extra": "mean: 7.0285192307691835 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.305832337894,
            "unit": "iter/sec",
            "range": "stddev: 0.0004600186985742344",
            "extra": "mean: 4.688104347826353 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 306.4834726261607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006606513524219442",
            "extra": "mean: 3.2628186813184863 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 293.1834429480941,
            "unit": "iter/sec",
            "range": "stddev: 0.00037866202123370765",
            "extra": "mean: 3.410833810888299 msec\nrounds: 349"
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
          "id": "7893c91422060f8c92dbb9e6bc24b5bf4ef57276",
          "message": "Merge pull request #794 from TeoZosa/dependabot/pip/pytest-7.2.1",
          "timestamp": "2023-01-16T02:35:42Z",
          "tree_id": "74deb5effdd1883ba09e99e2d4f5948abdf1e1c8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7893c91422060f8c92dbb9e6bc24b5bf4ef57276"
        },
        "date": 1673837023212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.65092849422986,
            "unit": "iter/sec",
            "range": "stddev: 0.0003587526034861189",
            "extra": "mean: 7.958556390977421 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.53276502026893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003845995723303543",
            "extra": "mean: 6.30784431137719 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.25220439660433,
            "unit": "iter/sec",
            "range": "stddev: 0.00039589941175823733",
            "extra": "mean: 4.667396551724109 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.00749791436834,
            "unit": "iter/sec",
            "range": "stddev: 0.00007424783554369827",
            "extra": "mean: 3.011980169971706 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.69252868851761,
            "unit": "iter/sec",
            "range": "stddev: 0.00024106572666620241",
            "extra": "mean: 8.569528925620055 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.83395552670092,
            "unit": "iter/sec",
            "range": "stddev: 0.00032979752291379625",
            "extra": "mean: 7.001136363636328 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.74172135292434,
            "unit": "iter/sec",
            "range": "stddev: 0.00016025730387679509",
            "extra": "mean: 4.8369530516432215 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.05114866484206,
            "unit": "iter/sec",
            "range": "stddev: 0.00007770691620554347",
            "extra": "mean: 3.14414836795256 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.746487281553584,
            "unit": "iter/sec",
            "range": "stddev: 0.0009416522187619357",
            "extra": "mean: 72.74585714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.37921512172428,
            "unit": "iter/sec",
            "range": "stddev: 0.004111179483172654",
            "extra": "mean: 74.74279999999898 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.3912004126276,
            "unit": "iter/sec",
            "range": "stddev: 0.0004308632282257066",
            "extra": "mean: 5.903494382022533 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.72402379465638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002371222929391524",
            "extra": "mean: 4.1541346153844 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 355.49267285168867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002622721280783367",
            "extra": "mean: 2.8129974999996676 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 352.08035003601816,
            "unit": "iter/sec",
            "range": "stddev: 0.00017233731503529204",
            "extra": "mean: 2.8402607526881267 msec\nrounds: 372"
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
          "id": "5fdbc05d97e5754189f43e0959acb4fbf4257426",
          "message": ":bookmark: Bump version number to `0.20.0`",
          "timestamp": "2023-01-16T20:40:25+09:00",
          "tree_id": "0cc06357aaa58f6467620b400b1df6728d8f8338",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5fdbc05d97e5754189f43e0959acb4fbf4257426"
        },
        "date": 1673869505018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.77326888448061,
            "unit": "iter/sec",
            "range": "stddev: 0.0006307064603107139",
            "extra": "mean: 8.867349593495874 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.53095524083528,
            "unit": "iter/sec",
            "range": "stddev: 0.0003957860040436543",
            "extra": "mean: 7.065592105263164 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.55992376122737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004904111834863975",
            "extra": "mean: 5.418294392523376 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.007810963033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003185748105461801",
            "extra": "mean: 3.378289230769269 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.44456086779427,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140438626970316",
            "extra": "mean: 9.761377192982554 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.55565011135553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792167971426442",
            "extra": "mean: 7.778732394366137 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.5116163078031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003434265598203644",
            "extra": "mean: 5.276721393034867 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.04403484722144,
            "unit": "iter/sec",
            "range": "stddev: 0.00017617137273140583",
            "extra": "mean: 3.299850467289833 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.759546349052126,
            "unit": "iter/sec",
            "range": "stddev: 0.002038703443556866",
            "extra": "mean: 78.37269230769223 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.979272102452425,
            "unit": "iter/sec",
            "range": "stddev: 0.005535326058773783",
            "extra": "mean: 77.04592307692283 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.5815916691294,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535887278787974",
            "extra": "mean: 6.469075581395402 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 214.48393224072848,
            "unit": "iter/sec",
            "range": "stddev: 0.0006324933657372011",
            "extra": "mean: 4.662353909465063 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 343.76200302327004,
            "unit": "iter/sec",
            "range": "stddev: 0.00025113529364623167",
            "extra": "mean: 2.908989333333352 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.6636676364699,
            "unit": "iter/sec",
            "range": "stddev: 0.00018480863042260107",
            "extra": "mean: 2.988074585635197 msec\nrounds: 362"
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
          "id": "f2912cddeaba16d0a61f980cd5f39a6306f17309",
          "message": "Merge pull request #796 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.12.0",
          "timestamp": "2023-01-17T17:24:28Z",
          "tree_id": "43a431371c4dde5e5f50252490ae05527065795b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f2912cddeaba16d0a61f980cd5f39a6306f17309"
        },
        "date": 1673977303971,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.54310647768503,
            "unit": "iter/sec",
            "range": "stddev: 0.0003126605894949897",
            "extra": "mean: 8.094340740740764 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.89017461179182,
            "unit": "iter/sec",
            "range": "stddev: 0.0008176168483115478",
            "extra": "mean: 6.998381818181895 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.58359119612476,
            "unit": "iter/sec",
            "range": "stddev: 0.00024511947624043334",
            "extra": "mean: 4.8173364485981995 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.36730305302166,
            "unit": "iter/sec",
            "range": "stddev: 0.00022835449121363468",
            "extra": "mean: 3.082924791086413 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.07304966458533,
            "unit": "iter/sec",
            "range": "stddev: 0.0003928244007540394",
            "extra": "mean: 9.003084033613613 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.74964848685144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995333862823276",
            "extra": "mean: 7.155653061224597 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.87149448456037,
            "unit": "iter/sec",
            "range": "stddev: 0.00026439542260335515",
            "extra": "mean: 5.053785046729046 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.7668400676809,
            "unit": "iter/sec",
            "range": "stddev: 0.000077453534653729",
            "extra": "mean: 3.098211699164357 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.417441523914684,
            "unit": "iter/sec",
            "range": "stddev: 0.0022140910570238536",
            "extra": "mean: 74.52985714285708 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.71698208104895,
            "unit": "iter/sec",
            "range": "stddev: 0.0009170242765639634",
            "extra": "mean: 72.902333333334 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.18694353489022,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519091329964186",
            "extra": "mean: 6.840556179774916 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.057684049825,
            "unit": "iter/sec",
            "range": "stddev: 0.0003502192187457167",
            "extra": "mean: 4.015134099616642 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 373.4925498757212,
            "unit": "iter/sec",
            "range": "stddev: 0.00007289596756886024",
            "extra": "mean: 2.6774295774647925 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.6026637089794,
            "unit": "iter/sec",
            "range": "stddev: 0.00022252103459246143",
            "extra": "mean: 2.885148051948145 msec\nrounds: 385"
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
          "id": "b74d1765eb1c51a41f7793f721ceff1260a9765d",
          "message": "Merge pull request #797 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.3",
          "timestamp": "2023-01-17T17:30:17Z",
          "tree_id": "d8e2cf75dfe088e056c58575ae64ed27b69f04e6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b74d1765eb1c51a41f7793f721ceff1260a9765d"
        },
        "date": 1673980377282,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.81515177191785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842432494628401",
            "extra": "mean: 8.142317829457374 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.13010316674706,
            "unit": "iter/sec",
            "range": "stddev: 0.00037186148583836755",
            "extra": "mean: 6.573320987654349 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.4794826809931,
            "unit": "iter/sec",
            "range": "stddev: 0.00012715282901332056",
            "extra": "mean: 4.684290909090881 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.8457100506506,
            "unit": "iter/sec",
            "range": "stddev: 0.00020398845247369767",
            "extra": "mean: 3.050215297450452 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.95362087630542,
            "unit": "iter/sec",
            "range": "stddev: 0.0004521680731615411",
            "extra": "mean: 8.775499999999841 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.55660532652823,
            "unit": "iter/sec",
            "range": "stddev: 0.00034811760619151365",
            "extra": "mean: 6.965893333333142 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.33584811001978,
            "unit": "iter/sec",
            "range": "stddev: 0.00022878281551496027",
            "extra": "mean: 4.917971962616871 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.91597079913475,
            "unit": "iter/sec",
            "range": "stddev: 0.00048477192491128205",
            "extra": "mean: 3.155410557184612 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.403793079923847,
            "unit": "iter/sec",
            "range": "stddev: 0.013131576504745732",
            "extra": "mean: 80.62049999999995 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.569139125352745,
            "unit": "iter/sec",
            "range": "stddev: 0.0031245459142622526",
            "extra": "mean: 73.69664285714249 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.8379402001307,
            "unit": "iter/sec",
            "range": "stddev: 0.000448747751706099",
            "extra": "mean: 6.0299832402236495 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.22898584170443,
            "unit": "iter/sec",
            "range": "stddev: 0.000514539140437045",
            "extra": "mean: 4.233180769230808 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 373.3274428530267,
            "unit": "iter/sec",
            "range": "stddev: 0.0001267435553852741",
            "extra": "mean: 2.6786136919317896 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 352.30994558262984,
            "unit": "iter/sec",
            "range": "stddev: 0.0003257248955852987",
            "extra": "mean: 2.8384097938145283 msec\nrounds: 388"
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
          "id": "25ff2fa2bbd35cc89b0fe68d6d4e047ff86107da",
          "message": "Merge pull request #799 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-2.0.1",
          "timestamp": "2023-01-17T17:40:28Z",
          "tree_id": "f044f38c36704ec40c110d85405dc4c35ac75fff",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/25ff2fa2bbd35cc89b0fe68d6d4e047ff86107da"
        },
        "date": 1674007341146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.62489516561774,
            "unit": "iter/sec",
            "range": "stddev: 0.00025901527709348723",
            "extra": "mean: 8.501601626016193 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.1293045761065,
            "unit": "iter/sec",
            "range": "stddev: 0.00030424089535920686",
            "extra": "mean: 6.938214285714233 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.0478994733937,
            "unit": "iter/sec",
            "range": "stddev: 0.00021472639291199872",
            "extra": "mean: 5.100794258373134 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.95854189539403,
            "unit": "iter/sec",
            "range": "stddev: 0.0001644773449358738",
            "extra": "mean: 3.2471903323262112 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.3586729610599,
            "unit": "iter/sec",
            "range": "stddev: 0.0002971402817343799",
            "extra": "mean: 9.228610619468947 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.45978884957512,
            "unit": "iter/sec",
            "range": "stddev: 0.0002939421396449446",
            "extra": "mean: 7.492893617021362 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.8093674796512,
            "unit": "iter/sec",
            "range": "stddev: 0.00022224556045482086",
            "extra": "mean: 5.26844387755102 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.0433434174381,
            "unit": "iter/sec",
            "range": "stddev: 0.0001885088840323568",
            "extra": "mean: 3.3439968553457757 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.501718986360675,
            "unit": "iter/sec",
            "range": "stddev: 0.005110955382614528",
            "extra": "mean: 79.98899999999968 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.761186256597574,
            "unit": "iter/sec",
            "range": "stddev: 0.0014372708423801737",
            "extra": "mean: 72.66815384615309 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.56311807104436,
            "unit": "iter/sec",
            "range": "stddev: 0.000270078062611805",
            "extra": "mean: 6.2671124260354265 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.27205079016227,
            "unit": "iter/sec",
            "range": "stddev: 0.0001781978734263783",
            "extra": "mean: 4.305296296296164 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.2971725331945,
            "unit": "iter/sec",
            "range": "stddev: 0.00028833818867414154",
            "extra": "mean: 2.896056149732494 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 308.3337243362414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002288627312280545",
            "extra": "mean: 3.2432391304348167 msec\nrounds: 368"
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
          "id": "aad6a291735adda52239a3478b2cdddcacb4feab",
          "message": "Merge pull request #800 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.4",
          "timestamp": "2023-01-18T14:59:50Z",
          "tree_id": "97b6f4679c90952fab8e9b4cef397201787dce0c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aad6a291735adda52239a3478b2cdddcacb4feab"
        },
        "date": 1674055174561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.11745569326109,
            "unit": "iter/sec",
            "range": "stddev: 0.0006679192853295972",
            "extra": "mean: 8.919217741935485 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.24799019702445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182028639232308",
            "extra": "mean: 7.079746753246662 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.25684476428745,
            "unit": "iter/sec",
            "range": "stddev: 0.0007136324171603967",
            "extra": "mean: 5.397911214953248 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.2422782676005,
            "unit": "iter/sec",
            "range": "stddev: 0.0007578175101363168",
            "extra": "mean: 3.286854166666594 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.43565033362128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007091535738628889",
            "extra": "mean: 9.22205932203408 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.352244946771,
            "unit": "iter/sec",
            "range": "stddev: 0.00047344086421986705",
            "extra": "mean: 7.38813013698637 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.82189595570048,
            "unit": "iter/sec",
            "range": "stddev: 0.001136004784293138",
            "extra": "mean: 5.268096153846098 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.9587734444496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003872907081376463",
            "extra": "mean: 3.300779141104357 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.894573963276175,
            "unit": "iter/sec",
            "range": "stddev: 0.0049687391373851066",
            "extra": "mean: 77.55200000000048 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.856841639710238,
            "unit": "iter/sec",
            "range": "stddev: 0.0022124317196896975",
            "extra": "mean: 77.7795999999995 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.95901627838393,
            "unit": "iter/sec",
            "range": "stddev: 0.0007576140495726556",
            "extra": "mean: 6.212761627906988 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.6694826148482,
            "unit": "iter/sec",
            "range": "stddev: 0.0004436092412195689",
            "extra": "mean: 4.243230769230686 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 335.3820235235367,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734980930088008",
            "extra": "mean: 2.9816744186046726 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 336.0108537845506,
            "unit": "iter/sec",
            "range": "stddev: 0.0007493819574178587",
            "extra": "mean: 2.976094339622725 msec\nrounds: 371"
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
          "id": "b4775494482919280cd578ae347cebc834ca3696",
          "message": "Merge pull request #801 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.3.5",
          "timestamp": "2023-01-19T14:58:01Z",
          "tree_id": "f10bcf62d4300770d86030146b7c3c7de08214b8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b4775494482919280cd578ae347cebc834ca3696"
        },
        "date": 1674140868527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.19149330319945,
            "unit": "iter/sec",
            "range": "stddev: 0.00032774559178165477",
            "extra": "mean: 8.117443609022544 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.06539600204684,
            "unit": "iter/sec",
            "range": "stddev: 0.00021795391023696125",
            "extra": "mean: 6.533155279503067 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.36182233441713,
            "unit": "iter/sec",
            "range": "stddev: 0.00016848230089326678",
            "extra": "mean: 4.753714285714242 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.5456751484858,
            "unit": "iter/sec",
            "range": "stddev: 0.00019182757814766594",
            "extra": "mean: 3.0071057142856765 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.03215714523921,
            "unit": "iter/sec",
            "range": "stddev: 0.00044435821511896925",
            "extra": "mean: 8.693221311475568 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.18828928339525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986688721665085",
            "extra": "mean: 6.887607843137299 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.88072095840892,
            "unit": "iter/sec",
            "range": "stddev: 0.00012427737908228935",
            "extra": "mean: 4.929004566210127 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.4074154115015,
            "unit": "iter/sec",
            "range": "stddev: 0.00008535928845118284",
            "extra": "mean: 3.1210263929618884 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.747364679288602,
            "unit": "iter/sec",
            "range": "stddev: 0.0024440208100135223",
            "extra": "mean: 72.74121428571486 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.313359517238894,
            "unit": "iter/sec",
            "range": "stddev: 0.0016114658012415044",
            "extra": "mean: 69.86480000000057 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.02514079609549,
            "unit": "iter/sec",
            "range": "stddev: 0.00015312190869840638",
            "extra": "mean: 5.881483146067564 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.7893472292001,
            "unit": "iter/sec",
            "range": "stddev: 0.00015836855676711252",
            "extra": "mean: 4.187791505791746 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 371.97152403386673,
            "unit": "iter/sec",
            "range": "stddev: 0.00008609833063257517",
            "extra": "mean: 2.688377833753084 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 350.668444373703,
            "unit": "iter/sec",
            "range": "stddev: 0.00018849031318022463",
            "extra": "mean: 2.8516965699209376 msec\nrounds: 379"
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
          "id": "e2290ce3594ab8243dec01de1220eae04a6bc2e7",
          "message": "Merge pull request #802 from TeoZosa/dependabot/pip/rich-13.2.0",
          "timestamp": "2023-01-20T14:48:00Z",
          "tree_id": "1faae6234780c7b658d95a413191b417733c4b26",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e2290ce3594ab8243dec01de1220eae04a6bc2e7"
        },
        "date": 1674226323466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.11135893738833,
            "unit": "iter/sec",
            "range": "stddev: 0.0009650778251224806",
            "extra": "mean: 10.089660869565218 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.3668982799856,
            "unit": "iter/sec",
            "range": "stddev: 0.0006621788948783821",
            "extra": "mean: 7.9134647887324405 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.79410611299195,
            "unit": "iter/sec",
            "range": "stddev: 0.00047847142477501134",
            "extra": "mean: 5.820921465968587 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.8817217193223,
            "unit": "iter/sec",
            "range": "stddev: 0.00019200364537470932",
            "extra": "mean: 3.5350463576158826 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.24061740589136,
            "unit": "iter/sec",
            "range": "stddev: 0.000923065145952908",
            "extra": "mean: 10.283768518518421 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.23865047968681,
            "unit": "iter/sec",
            "range": "stddev: 0.0008251877018597128",
            "extra": "mean: 8.529610294117669 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.7240162998556,
            "unit": "iter/sec",
            "range": "stddev: 0.00031768702681033264",
            "extra": "mean: 5.823297297297377 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.9916873708395,
            "unit": "iter/sec",
            "range": "stddev: 0.00024286158211775992",
            "extra": "mean: 3.649745762711882 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.561588016631655,
            "unit": "iter/sec",
            "range": "stddev: 0.002275911727705337",
            "extra": "mean: 79.60776923076853 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.461321973720041,
            "unit": "iter/sec",
            "range": "stddev: 0.0023857013079534592",
            "extra": "mean: 80.24830769230763 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.70533990716473,
            "unit": "iter/sec",
            "range": "stddev: 0.0002835815059150121",
            "extra": "mean: 6.724708074533773 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.1711755100136,
            "unit": "iter/sec",
            "range": "stddev: 0.00013788940835820934",
            "extra": "mean: 4.562643776824163 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 311.2498670703864,
            "unit": "iter/sec",
            "range": "stddev: 0.00023348665925078372",
            "extra": "mean: 3.212852777777601 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 308.2304036235533,
            "unit": "iter/sec",
            "range": "stddev: 0.00018902467981652836",
            "extra": "mean: 3.244326283987598 msec\nrounds: 331"
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
          "id": "1b58b7124f9502774e264e78c566737bac85da81",
          "message": "Merge pull request #803 from TeoZosa/dependabot/pip/python-dotenv-0.21.1",
          "timestamp": "2023-01-23T15:20:52Z",
          "tree_id": "3e252282c997bd07abceaf7f67f40180df8dd296",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1b58b7124f9502774e264e78c566737bac85da81"
        },
        "date": 1674487671157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.96935285253032,
            "unit": "iter/sec",
            "range": "stddev: 0.0031694902677998037",
            "extra": "mean: 9.348472000000001 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.43727352474409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005658985424654349",
            "extra": "mean: 7.1716835443038365 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.20903954802054,
            "unit": "iter/sec",
            "range": "stddev: 0.0003840712225962709",
            "extra": "mean: 5.149090909090964 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.09561583455235,
            "unit": "iter/sec",
            "range": "stddev: 0.0002533619140302206",
            "extra": "mean: 3.377287425149733 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.51049291314033,
            "unit": "iter/sec",
            "range": "stddev: 0.000932364419275217",
            "extra": "mean: 9.851198347107545 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 120.95258331834972,
            "unit": "iter/sec",
            "range": "stddev: 0.0008751662423958163",
            "extra": "mean: 8.267702702702755 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.9649472654097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005593103115688455",
            "extra": "mean: 5.525932038834925 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.1481675869452,
            "unit": "iter/sec",
            "range": "stddev: 0.00034153914802924037",
            "extra": "mean: 3.482522658610424 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.10786556198582,
            "unit": "iter/sec",
            "range": "stddev: 0.004182022872032683",
            "extra": "mean: 76.29007142857068 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.035745877445073,
            "unit": "iter/sec",
            "range": "stddev: 0.004169433421334861",
            "extra": "mean: 76.71214285714457 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.26120581998384,
            "unit": "iter/sec",
            "range": "stddev: 0.001575326809386213",
            "extra": "mean: 6.482511235954922 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.54772181389436,
            "unit": "iter/sec",
            "range": "stddev: 0.0003978061881860816",
            "extra": "mean: 4.394682539682271 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 330.2628341721861,
            "unit": "iter/sec",
            "range": "stddev: 0.0003137772423227787",
            "extra": "mean: 3.027891414141499 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.8456026280414,
            "unit": "iter/sec",
            "range": "stddev: 0.00031871360446915223",
            "extra": "mean: 3.1167639257294333 msec\nrounds: 377"
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
          "id": "21a03fbbeddf74d74ebc105abcc6794041e946b2",
          "message": "Merge pull request #804 from TeoZosa/dependabot/pip/sentry-sdk-1.14.0",
          "timestamp": "2023-01-24T11:45:43Z",
          "tree_id": "0a37f31c2b04df6d10e4adb053c1ae6fe73a8b57",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21a03fbbeddf74d74ebc105abcc6794041e946b2"
        },
        "date": 1674560980104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.0876689682454,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505457751307202",
            "extra": "mean: 9.083669491525416 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.29046813934076,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508934777267165",
            "extra": "mean: 7.3372702702702535 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.1238653803342,
            "unit": "iter/sec",
            "range": "stddev: 0.00039426822864573096",
            "extra": "mean: 5.2322089552239435 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.54185438102695,
            "unit": "iter/sec",
            "range": "stddev: 0.00025256559900676287",
            "extra": "mean: 3.418314285714242 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.32041332778947,
            "unit": "iter/sec",
            "range": "stddev: 0.00027760239125973257",
            "extra": "mean: 9.405531531531633 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.70641659740818,
            "unit": "iter/sec",
            "range": "stddev: 0.00041790244421040706",
            "extra": "mean: 7.535430656934266 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.92146474749322,
            "unit": "iter/sec",
            "range": "stddev: 0.0009711982945070704",
            "extra": "mean: 5.716851282051312 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.4769841786694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006458347345053891",
            "extra": "mean: 3.490681818181673 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.351227094411815,
            "unit": "iter/sec",
            "range": "stddev: 0.0046867901869411055",
            "extra": "mean: 80.96361538461548 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.542184293064409,
            "unit": "iter/sec",
            "range": "stddev: 0.003949330429408355",
            "extra": "mean: 79.73092857142764 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.15596414058297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003305352598387785",
            "extra": "mean: 6.529291925465553 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 211.08750659648467,
            "unit": "iter/sec",
            "range": "stddev: 0.00043551974107541484",
            "extra": "mean: 4.737371794871792 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 285.0833671968335,
            "unit": "iter/sec",
            "range": "stddev: 0.0004973361633059453",
            "extra": "mean: 3.507745856353514 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 250.95907569152718,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232165896647849",
            "extra": "mean: 3.9847134328354628 msec\nrounds: 335"
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
          "id": "8ad344421dbb24e2c1279d3a8777887e0a192803",
          "message": "Merge pull request #805 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.2",
          "timestamp": "2023-01-26T15:10:42Z",
          "tree_id": "ba9242eee200fd9b59cddd781c0d61916e934459",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/8ad344421dbb24e2c1279d3a8777887e0a192803"
        },
        "date": 1674746077368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.39888873324948,
            "unit": "iter/sec",
            "range": "stddev: 0.0004652882718372814",
            "extra": "mean: 8.23730769230768 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.709143205217,
            "unit": "iter/sec",
            "range": "stddev: 0.00031963984984427853",
            "extra": "mean: 6.679618749999983 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.07034098279834,
            "unit": "iter/sec",
            "range": "stddev: 0.0003232271213027317",
            "extra": "mean: 4.876375565610835 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.03183596281986,
            "unit": "iter/sec",
            "range": "stddev: 0.00011253120089450372",
            "extra": "mean: 3.076621700879754 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.23226311506843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007528191339799166",
            "extra": "mean: 9.071754237288292 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.2424863622177,
            "unit": "iter/sec",
            "range": "stddev: 0.0007441015647284613",
            "extra": "mean: 7.339854304635741 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.5261745922485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458437211775594",
            "extra": "mean: 5.062620192307632 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.37199196340754,
            "unit": "iter/sec",
            "range": "stddev: 0.00021367597568212714",
            "extra": "mean: 3.2640059347182033 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.821113330167544,
            "unit": "iter/sec",
            "range": "stddev: 0.0011627006668349384",
            "extra": "mean: 72.35307142857194 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.693827917880817,
            "unit": "iter/sec",
            "range": "stddev: 0.0021598235642223094",
            "extra": "mean: 73.0256000000002 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.1489708198985,
            "unit": "iter/sec",
            "range": "stddev: 0.0003068915967194126",
            "extra": "mean: 5.982687150837984 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.8315374756641,
            "unit": "iter/sec",
            "range": "stddev: 0.00018170839686399494",
            "extra": "mean: 4.051346153846298 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.2122399049708,
            "unit": "iter/sec",
            "range": "stddev: 0.00014862021274893956",
            "extra": "mean: 2.776141089108506 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 358.2253553019853,
            "unit": "iter/sec",
            "range": "stddev: 0.00014371288039869895",
            "extra": "mean: 2.7915388601038478 msec\nrounds: 386"
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
          "id": "2cddfdd81c1bf220fc141176f66d42bd81c679a5",
          "message": "Merge pull request #806 from TeoZosa/dependabot/pip/rich-13.3.1",
          "timestamp": "2023-01-30T15:39:59Z",
          "tree_id": "bf2f1ba11c00a8a104b6e079d97fbecd7bdc7144",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2cddfdd81c1bf220fc141176f66d42bd81c679a5"
        },
        "date": 1675094185227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.59639785322723,
            "unit": "iter/sec",
            "range": "stddev: 0.001071690818390429",
            "extra": "mean: 8.726277777777796 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.3367361993219,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438271336301025",
            "extra": "mean: 7.12571794871792 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.88065603717553,
            "unit": "iter/sec",
            "range": "stddev: 0.00016707078430920508",
            "extra": "mean: 4.787422727272673 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.55604066595447,
            "unit": "iter/sec",
            "range": "stddev: 0.00010425881769108305",
            "extra": "mean: 3.1002364672364644 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.62631820265533,
            "unit": "iter/sec",
            "range": "stddev: 0.00026102399396167147",
            "extra": "mean: 8.724000000000304 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.5788776852166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023427393351335978",
            "extra": "mean: 6.869128378378405 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.17740621081063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679247411880096",
            "extra": "mean: 4.873830985915402 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 168.7821865882086,
            "unit": "iter/sec",
            "range": "stddev: 0.0345752702110754",
            "extra": "mean: 5.924795857988142 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.709334685987656,
            "unit": "iter/sec",
            "range": "stddev: 0.000997801352204468",
            "extra": "mean: 72.94300000000017 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.038778850860432,
            "unit": "iter/sec",
            "range": "stddev: 0.0008657999164003642",
            "extra": "mean: 71.2312666666667 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36010665844992,
            "unit": "iter/sec",
            "range": "stddev: 0.0002742830471825776",
            "extra": "mean: 6.011056497174992 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.86003479133186,
            "unit": "iter/sec",
            "range": "stddev: 0.00025932718183751277",
            "extra": "mean: 4.33162890624994 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.5900105141143,
            "unit": "iter/sec",
            "range": "stddev: 0.00016537115964108712",
            "extra": "mean: 2.796498701298395 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.5309847342388,
            "unit": "iter/sec",
            "range": "stddev: 0.00012168067219494774",
            "extra": "mean: 2.8286063829786623 msec\nrounds: 376"
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
          "id": "37be49d6d2c5d448f18cfed72d7fb75b824a042d",
          "message": "Merge pull request #807 from TeoZosa/dependabot/pip/xdoctest-1.1.1",
          "timestamp": "2023-01-30T15:56:02Z",
          "tree_id": "08f4bddf144d271c20b7f813167542a11484ef19",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/37be49d6d2c5d448f18cfed72d7fb75b824a042d"
        },
        "date": 1675101283377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.64621472899225,
            "unit": "iter/sec",
            "range": "stddev: 0.0003769853475120886",
            "extra": "mean: 8.153533333333367 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.85149741398027,
            "unit": "iter/sec",
            "range": "stddev: 0.0002833055577011619",
            "extra": "mean: 6.457799999999989 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.63850460362391,
            "unit": "iter/sec",
            "range": "stddev: 0.00022033438694945784",
            "extra": "mean: 4.770116071428577 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.68907293645617,
            "unit": "iter/sec",
            "range": "stddev: 0.00027648994141906156",
            "extra": "mean: 2.9525605633802567 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.41399466577774,
            "unit": "iter/sec",
            "range": "stddev: 0.00063245829169729",
            "extra": "mean: 8.590032520325241 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.1003225478526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003128729019921229",
            "extra": "mean: 6.891783439490357 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.02192903470495,
            "unit": "iter/sec",
            "range": "stddev: 0.00026679415131457507",
            "extra": "mean: 4.877527027027073 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.3965040787441,
            "unit": "iter/sec",
            "range": "stddev: 0.0002123749416739551",
            "extra": "mean: 3.1706121883657055 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.042169571367387,
            "unit": "iter/sec",
            "range": "stddev: 0.001804130596581724",
            "extra": "mean: 71.21406666666701 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.451368255546402,
            "unit": "iter/sec",
            "range": "stddev: 0.00202060531241786",
            "extra": "mean: 69.19760000000015 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.42990043931897,
            "unit": "iter/sec",
            "range": "stddev: 0.0004312413392919199",
            "extra": "mean: 5.9021459459462315 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.52796007934273,
            "unit": "iter/sec",
            "range": "stddev: 0.00021101792386196583",
            "extra": "mean: 3.975701149425126 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 381.02477878090843,
            "unit": "iter/sec",
            "range": "stddev: 0.00012395956902211327",
            "extra": "mean: 2.624501228501483 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 363.66788097781756,
            "unit": "iter/sec",
            "range": "stddev: 0.0002004139059536415",
            "extra": "mean: 2.749761670761891 msec\nrounds: 407"
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
          "id": "4db35477b05e8eeb089719010546f3d070b5178d",
          "message": "Merge pull request #809 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.3",
          "timestamp": "2023-01-31T15:42:43Z",
          "tree_id": "278a85b0eecd673cf832b7967610786eca2d7490",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4db35477b05e8eeb089719010546f3d070b5178d"
        },
        "date": 1675180342879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.40261755424909,
            "unit": "iter/sec",
            "range": "stddev: 0.00036483058971311196",
            "extra": "mean: 8.237054687500024 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.14728610429853,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630745210438009",
            "extra": "mean: 6.795911949685544 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.28970550125607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002932657496434264",
            "extra": "mean: 4.895009259259281 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.5733348159614,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553565960022726",
            "extra": "mean: 3.2407207207207898 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.40417094214394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007089005214466534",
            "extra": "mean: 9.487290598290436 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.28950525008534,
            "unit": "iter/sec",
            "range": "stddev: 0.0009252135158951179",
            "extra": "mean: 7.391556338028439 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.9594177607527,
            "unit": "iter/sec",
            "range": "stddev: 0.000451920540286702",
            "extra": "mean: 5.2642822966506735 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.4025539103808,
            "unit": "iter/sec",
            "range": "stddev: 0.00015701110239149736",
            "extra": "mean: 3.4082866242038503 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.554910944235194,
            "unit": "iter/sec",
            "range": "stddev: 0.0013215487999957934",
            "extra": "mean: 73.77399999999946 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.238006346198835,
            "unit": "iter/sec",
            "range": "stddev: 0.04938983394596041",
            "extra": "mean: 97.67526666666697 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.1438901646529,
            "unit": "iter/sec",
            "range": "stddev: 0.00022730479721523152",
            "extra": "mean: 6.05532544378707 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.9013118908255,
            "unit": "iter/sec",
            "range": "stddev: 0.00019046460714241027",
            "extra": "mean: 4.293664092664101 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.1705037835652,
            "unit": "iter/sec",
            "range": "stddev: 0.000290750719991846",
            "extra": "mean: 2.831493540051787 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 334.686366044721,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740388617733862",
            "extra": "mean: 2.987871934605126 msec\nrounds: 367"
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
          "id": "92422432cbcd7a8cba00f1d1dd3aa0c5e5f8a30b",
          "message": "Merge pull request #810 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.4",
          "timestamp": "2023-02-01T15:33:02Z",
          "tree_id": "4c11ca522c7a3fc711242b63a6c0ecea4d4e2308",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/92422432cbcd7a8cba00f1d1dd3aa0c5e5f8a30b"
        },
        "date": 1675266064329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.66422037463012,
            "unit": "iter/sec",
            "range": "stddev: 0.0014962863003322015",
            "extra": "mean: 9.202661157024878 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.31025058402201,
            "unit": "iter/sec",
            "range": "stddev: 0.0007408823972956279",
            "extra": "mean: 7.673993377483497 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.4930044758834,
            "unit": "iter/sec",
            "range": "stddev: 0.00013451715847680968",
            "extra": "mean: 4.96295145631068 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.269413471349,
            "unit": "iter/sec",
            "range": "stddev: 0.00007162118373857562",
            "extra": "mean: 3.1518953846154627 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.41462009871468,
            "unit": "iter/sec",
            "range": "stddev: 0.000451944053179035",
            "extra": "mean: 9.223848214285775 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.52476237832616,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670801708299243",
            "extra": "mean: 7.3787253521126654 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.81332137002755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008941040198658322",
            "extra": "mean: 5.159604060913875 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.46230303677817,
            "unit": "iter/sec",
            "range": "stddev: 0.00021561511793615883",
            "extra": "mean: 3.3393184713375628 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.349926341510816,
            "unit": "iter/sec",
            "range": "stddev: 0.003639227091591997",
            "extra": "mean: 80.97214285714242 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.344008540165369,
            "unit": "iter/sec",
            "range": "stddev: 0.0019644094042974907",
            "extra": "mean: 74.94000000000055 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.41049921338362,
            "unit": "iter/sec",
            "range": "stddev: 0.00038145994321341087",
            "extra": "mean: 6.64847204968933 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 199.08054899389418,
            "unit": "iter/sec",
            "range": "stddev: 0.0017715762415447605",
            "extra": "mean: 5.023092436974694 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.56357976809625,
            "unit": "iter/sec",
            "range": "stddev: 0.00021810980943084803",
            "extra": "mean: 3.0435509641872383 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 290.98434889945526,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980083062147906",
            "extra": "mean: 3.436610951008685 msec\nrounds: 347"
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
          "id": "c208d30f3322a7d7a4c193e4f56c877ebd26516b",
          "message": "Merge pull request #811 from TeoZosa/dependabot/pip/black-23.1.0\n\n⬆️ Bump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-04T12:27:50+09:00",
          "tree_id": "08cc0e8e04ac2601cb34ec417e87ef43ee4ec2f5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c208d30f3322a7d7a4c193e4f56c877ebd26516b"
        },
        "date": 1675485705730,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.6799005441019,
            "unit": "iter/sec",
            "range": "stddev: 0.002110432783811428",
            "extra": "mean: 10.237520661156958 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.10676361848502,
            "unit": "iter/sec",
            "range": "stddev: 0.00026737420682465193",
            "extra": "mean: 7.293586206896491 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.8048801373044,
            "unit": "iter/sec",
            "range": "stddev: 0.0002803487726700475",
            "extra": "mean: 5.240956097560994 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.314366472379,
            "unit": "iter/sec",
            "range": "stddev: 0.00014068799325300872",
            "extra": "mean: 3.253996913580279 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.3234738835326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005667164342573388",
            "extra": "mean: 9.317626086956519 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.7655712900162,
            "unit": "iter/sec",
            "range": "stddev: 0.00020335107873512988",
            "extra": "mean: 7.311781690140896 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.6808617518268,
            "unit": "iter/sec",
            "range": "stddev: 0.0002063493744406856",
            "extra": "mean: 5.217004926108485 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.2648681072715,
            "unit": "iter/sec",
            "range": "stddev: 0.0003184406300848624",
            "extra": "mean: 3.3753580246913386 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.404353573694301,
            "unit": "iter/sec",
            "range": "stddev: 0.0034841956771234335",
            "extra": "mean: 80.6168571428569 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.399924577567404,
            "unit": "iter/sec",
            "range": "stddev: 0.0029844701482736563",
            "extra": "mean: 74.62728571428556 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.39768563401827,
            "unit": "iter/sec",
            "range": "stddev: 0.00036246497493157146",
            "extra": "mean: 6.435102272727084 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.38842296806726,
            "unit": "iter/sec",
            "range": "stddev: 0.00025454422440634083",
            "extra": "mean: 4.159934108527506 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 343.0470711403327,
            "unit": "iter/sec",
            "range": "stddev: 0.00027437632207728255",
            "extra": "mean: 2.9150518518519077 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.5409328599825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002847376999996855",
            "extra": "mean: 3.025343915343765 msec\nrounds: 378"
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
          "id": "02bc216e6c302dc80ec938ec9decab46fe9140ae",
          "message": "Merge pull request #808 from TeoZosa/dependabot/pip/dot-github/workflows/pip-23.0\n\n⬆️ Bump pip from 22.3.1 to 23.0 in /.github/workflows",
          "timestamp": "2023-02-05T16:00:21+09:00",
          "tree_id": "d5d4e2e838e130c700b441448e9e8b2b97bdddb3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/02bc216e6c302dc80ec938ec9decab46fe9140ae"
        },
        "date": 1675580602281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.28262257511646,
            "unit": "iter/sec",
            "range": "stddev: 0.00022580142312500165",
            "extra": "mean: 8.383450819672117 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.6396612540234,
            "unit": "iter/sec",
            "range": "stddev: 0.00008566227665099494",
            "extra": "mean: 6.727679487179481 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.434980452966,
            "unit": "iter/sec",
            "range": "stddev: 0.00013323687690378394",
            "extra": "mean: 4.915575471698188 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.82771276305886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002314597868690623",
            "extra": "mean: 3.0136120689655863 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.67090123954624,
            "unit": "iter/sec",
            "range": "stddev: 0.00048748784925156614",
            "extra": "mean: 8.954884297520723 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.2119888351521,
            "unit": "iter/sec",
            "range": "stddev: 0.0003320388942351762",
            "extra": "mean: 6.9826556291392325 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.30149225214888,
            "unit": "iter/sec",
            "range": "stddev: 0.00016009922627033884",
            "extra": "mean: 4.89472685185187 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.41480149796297,
            "unit": "iter/sec",
            "range": "stddev: 0.00013231627463561102",
            "extra": "mean: 3.1405575221238498 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.034483661989814,
            "unit": "iter/sec",
            "range": "stddev: 0.0014929012725315631",
            "extra": "mean: 71.25306666666637 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.350043480631733,
            "unit": "iter/sec",
            "range": "stddev: 0.0018750143313753975",
            "extra": "mean: 69.68620000000006 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.04343223953154,
            "unit": "iter/sec",
            "range": "stddev: 0.00020386680463402806",
            "extra": "mean: 6.059011173184254 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.9723302554912,
            "unit": "iter/sec",
            "range": "stddev: 0.00010615968278470779",
            "extra": "mean: 4.032708000000156 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 378.42916650047727,
            "unit": "iter/sec",
            "range": "stddev: 0.00023604913492135656",
            "extra": "mean: 2.64250245098045 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 365.9949038684386,
            "unit": "iter/sec",
            "range": "stddev: 0.00013734614250345144",
            "extra": "mean: 2.732278481012573 msec\nrounds: 395"
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
          "id": "bf1d335a37c402c4ad753e4c2803a5f31c5db5df",
          "message": "Merge pull request #820 from TeoZosa/build/c-library/constrain-mypyc-version-to-lt-1.0\n\n💚 📌  Constrain `mypy` to <1.0 for C-compilation",
          "timestamp": "2023-02-11T14:27:46+09:00",
          "tree_id": "112b8aacdd0f9c72ccc8e01c95d29cc1277a08f0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf1d335a37c402c4ad753e4c2803a5f31c5db5df"
        },
        "date": 1676093580795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.3642233648212,
            "unit": "iter/sec",
            "range": "stddev: 0.0005063518092420407",
            "extra": "mean: 9.228137931034485 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.03113742487184,
            "unit": "iter/sec",
            "range": "stddev: 0.00033254916050776557",
            "extra": "mean: 7.405699300699267 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.0717217056461,
            "unit": "iter/sec",
            "range": "stddev: 0.0002814294859334152",
            "extra": "mean: 5.432664999999979 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.46453756144956,
            "unit": "iter/sec",
            "range": "stddev: 0.00017705575504418312",
            "extra": "mean: 3.5030620915031814 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.59354944918675,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456680620876048",
            "extra": "mean: 10.142651376146885 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.04746732557268,
            "unit": "iter/sec",
            "range": "stddev: 0.00018044317907841602",
            "extra": "mean: 7.689500000000069 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.89112909608264,
            "unit": "iter/sec",
            "range": "stddev: 0.00038206603348162483",
            "extra": "mean: 5.653194736841926 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 273.15113074685536,
            "unit": "iter/sec",
            "range": "stddev: 0.00026190712610092096",
            "extra": "mean: 3.6609769736840545 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.30411191418612,
            "unit": "iter/sec",
            "range": "stddev: 0.003830441304829541",
            "extra": "mean: 88.46338461538477 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.89285815571049,
            "unit": "iter/sec",
            "range": "stddev: 0.005430863228829863",
            "extra": "mean: 84.08407692307662 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.8800910485914,
            "unit": "iter/sec",
            "range": "stddev: 0.0003262391104879157",
            "extra": "mean: 6.541074074073911 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 210.65587969286457,
            "unit": "iter/sec",
            "range": "stddev: 0.000383298793064217",
            "extra": "mean: 4.747078512396596 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 324.217736127492,
            "unit": "iter/sec",
            "range": "stddev: 0.0001514461876641395",
            "extra": "mean: 3.084346994535704 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 313.16217964443945,
            "unit": "iter/sec",
            "range": "stddev: 0.0001912107501707423",
            "extra": "mean: 3.19323361823381 msec\nrounds: 351"
          }
        ]
      }
    ]
  }
}