window.BENCHMARK_DATA = {
  "lastUpdate": 1644600585112,
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
        "date": 1642085079405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.10895608810122,
            "unit": "iter/sec",
            "range": "stddev: 0.000019803443752250047",
            "extra": "mean: 6.093512650602409 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 196.64508758488142,
            "unit": "iter/sec",
            "range": "stddev: 0.00010417374567034435",
            "extra": "mean: 5.085303743315491 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.6546851170772,
            "unit": "iter/sec",
            "range": "stddev: 0.000014106247490223253",
            "extra": "mean: 2.9971106194690678 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 686.9975472913595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011733709054879875",
            "extra": "mean: 1.455609272467889 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.87840614803656,
            "unit": "iter/sec",
            "range": "stddev: 0.000024373548271735333",
            "extra": "mean: 6.584214473684268 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.16267407866624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003829108227020753",
            "extra": "mean: 4.995936453202002 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.08254039797646,
            "unit": "iter/sec",
            "range": "stddev: 0.000013831341550325088",
            "extra": "mean: 3.104794189602346 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 635.9168377551138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012596707847336629",
            "extra": "mean: 1.5725326656393577 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.979207507439373,
            "unit": "iter/sec",
            "range": "stddev: 0.000040826640462331503",
            "extra": "mean: 47.66624285714287 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.42947661522937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005027049948851686",
            "extra": "mean: 46.6646954545463 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.03979725923188,
            "unit": "iter/sec",
            "range": "stddev: 0.000013189040687058964",
            "extra": "mean: 4.097692307692534 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 413.8035742904135,
            "unit": "iter/sec",
            "range": "stddev: 0.000013880618865411155",
            "extra": "mean: 2.416605515587415 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1276.106685689381,
            "unit": "iter/sec",
            "range": "stddev: 0.000006952957203405653",
            "extra": "mean: 783.6335403726672 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1107.3964873384266,
            "unit": "iter/sec",
            "range": "stddev: 0.000006433726645850577",
            "extra": "mean: 903.0189380530285 usec\nrounds: 1130"
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
          "id": "47b651f62e195f128f5b4a2eeeb86575d0d1302c",
          "message": "Merge pull request #414 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.5",
          "timestamp": "2022-01-17T14:17:07Z",
          "tree_id": "4d41b141b482b6b7cf3f7964d4bcfab727102e36"
        },
        "date": 1642431426211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.00700882495943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007766067094876383",
            "extra": "mean: 7.575355345911933 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.57385189106913,
            "unit": "iter/sec",
            "range": "stddev: 0.0010027956025752429",
            "extra": "mean: 6.2666908653846125 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.37362884663705,
            "unit": "iter/sec",
            "range": "stddev: 0.00048814506861983903",
            "extra": "mean: 4.026192332268369 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.4943305739231,
            "unit": "iter/sec",
            "range": "stddev: 0.00039256514069829605",
            "extra": "mean: 1.9861196825396625 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.49496908229786,
            "unit": "iter/sec",
            "range": "stddev: 0.0015890394631629236",
            "extra": "mean: 9.132839694656536 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.19348419545156,
            "unit": "iter/sec",
            "range": "stddev: 0.0008965732633742893",
            "extra": "mean: 6.7027055865921445 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.93354665086986,
            "unit": "iter/sec",
            "range": "stddev: 0.0008395156393580728",
            "extra": "mean: 4.406576351351299 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 519.4546863716656,
            "unit": "iter/sec",
            "range": "stddev: 0.00032817424269973957",
            "extra": "mean: 1.9250957325746565 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.27833610478627,
            "unit": "iter/sec",
            "range": "stddev: 0.0032268274668660734",
            "extra": "mean: 54.70957499999933 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.91056553211846,
            "unit": "iter/sec",
            "range": "stddev: 0.002415097255992987",
            "extra": "mean: 50.224590476190315 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.84873597249873,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008177883232699",
            "extra": "mean: 5.560228125000074 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.14425903118666,
            "unit": "iter/sec",
            "range": "stddev: 0.0004258548797103998",
            "extra": "mean: 3.1235918552035806 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 964.474948436022,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681426463705556",
            "extra": "mean: 1.0368335658915608 msec\nrounds: 1290"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 873.0933292049648,
            "unit": "iter/sec",
            "range": "stddev: 0.00030867628718781793",
            "extra": "mean: 1.1453529268292495 msec\nrounds: 1230"
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
        "date": 1642432633767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.8591157716341,
            "unit": "iter/sec",
            "range": "stddev: 0.0003720188266477452",
            "extra": "mean: 5.590992640692646 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.3858885072729,
            "unit": "iter/sec",
            "range": "stddev: 0.0002678217907970163",
            "extra": "mean: 4.025993610223631 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.6375017127102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001416235409743084",
            "extra": "mean: 2.698054016064255 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 775.0043118264282,
            "unit": "iter/sec",
            "range": "stddev: 0.000096360334959851",
            "extra": "mean: 1.2903154017857419 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.52322010055175,
            "unit": "iter/sec",
            "range": "stddev: 0.0003490504142140273",
            "extra": "mean: 5.729896568627653 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.54214661777507,
            "unit": "iter/sec",
            "range": "stddev: 0.0002046167054725782",
            "extra": "mean: 4.394790217391235 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 367.0750051760537,
            "unit": "iter/sec",
            "range": "stddev: 0.00017416139906121876",
            "extra": "mean: 2.724238877338945 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 691.5434047070638,
            "unit": "iter/sec",
            "range": "stddev: 0.00008187562857847029",
            "extra": "mean: 1.446040831556477 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.595855657351915,
            "unit": "iter/sec",
            "range": "stddev: 0.001441437836005562",
            "extra": "mean: 40.65725599999979 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.540053898972424,
            "unit": "iter/sec",
            "range": "stddev: 0.001594971615301911",
            "extra": "mean: 39.15418518518607 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 283.30518611259436,
            "unit": "iter/sec",
            "range": "stddev: 0.0002117060774406534",
            "extra": "mean: 3.5297624223602053 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.796745368454,
            "unit": "iter/sec",
            "range": "stddev: 0.000462370050304901",
            "extra": "mean: 2.3105534195934565 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1394.022751613007,
            "unit": "iter/sec",
            "range": "stddev: 0.000050770253097109355",
            "extra": "mean: 717.3484068627374 usec\nrounds: 1632"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1196.2805607577209,
            "unit": "iter/sec",
            "range": "stddev: 0.00004413819342906132",
            "extra": "mean: 835.9243080624855 usec\nrounds: 1662"
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
          "id": "72326bb172ec9a61951193ae60d0c19c966fd36a",
          "message": "Merge pull request #417 from TeoZosa/dependabot/pip/importlib-metadata-4.10.1",
          "timestamp": "2022-01-17T15:32:35Z",
          "tree_id": "4b4b5e123579effdb1376478fc68c7dad22f148d"
        },
        "date": 1642433727559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.35436066360612,
            "unit": "iter/sec",
            "range": "stddev: 0.000014418057909703835",
            "extra": "mean: 5.067027638190965 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.88136911456576,
            "unit": "iter/sec",
            "range": "stddev: 0.00000916701695154423",
            "extra": "mean: 3.847909541984756 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.40355104786425,
            "unit": "iter/sec",
            "range": "stddev: 0.000009664099167443457",
            "extra": "mean: 2.5163338308458085 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.0661900832336,
            "unit": "iter/sec",
            "range": "stddev: 0.000008214351264794805",
            "extra": "mean: 1.2390557457212636 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.5956804788154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008979800196866505",
            "extra": "mean: 6.596494021739254 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.94964405751352,
            "unit": "iter/sec",
            "range": "stddev: 0.000018911176329395965",
            "extra": "mean: 4.133091428571357 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.9132558036962,
            "unit": "iter/sec",
            "range": "stddev: 0.000009446632870279498",
            "extra": "mean: 2.591255897435856 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.7732076124785,
            "unit": "iter/sec",
            "range": "stddev: 0.00000997339182714302",
            "extra": "mean: 1.3390946405229471 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.862638892645826,
            "unit": "iter/sec",
            "range": "stddev: 0.00004368763097237429",
            "extra": "mean: 40.22099200000014 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.334292779400112,
            "unit": "iter/sec",
            "range": "stddev: 0.0001033830740506356",
            "extra": "mean: 37.973300000000215 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.05882061708735,
            "unit": "iter/sec",
            "range": "stddev: 0.000011830706132133712",
            "extra": "mean: 3.366336666666475 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.30513723909075,
            "unit": "iter/sec",
            "range": "stddev: 0.000010471685478704164",
            "extra": "mean: 2.0353949596772805 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1492.9449464701738,
            "unit": "iter/sec",
            "range": "stddev: 0.000005488491042763667",
            "extra": "mean: 669.8170634920851 usec\nrounds: 1512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1303.3079017668929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060657534761559945",
            "extra": "mean: 767.2783987914914 usec\nrounds: 1324"
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
        "date": 1643746301490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.38932001732616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001772096468515866",
            "extra": "mean: 4.456540088105732 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.5575355379198,
            "unit": "iter/sec",
            "range": "stddev: 0.00007649507938144462",
            "extra": "mean: 3.3949224832215 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.86048626880864,
            "unit": "iter/sec",
            "range": "stddev: 0.000012274201271253023",
            "extra": "mean: 2.2278637362637688 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 894.3043335182152,
            "unit": "iter/sec",
            "range": "stddev: 0.00000861429529033753",
            "extra": "mean: 1.1181875816993703 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.39863366971113,
            "unit": "iter/sec",
            "range": "stddev: 0.000024777556411161073",
            "extra": "mean: 4.821632535885128 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.38455874362666,
            "unit": "iter/sec",
            "range": "stddev: 0.000010946686147066905",
            "extra": "mean: 3.6312856630823838 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.24336589215875,
            "unit": "iter/sec",
            "range": "stddev: 0.00015101321701264714",
            "extra": "mean: 2.5365043181818305 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.9848145824063,
            "unit": "iter/sec",
            "range": "stddev: 0.000009284681848799738",
            "extra": "mean: 1.3495553219448442 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.555778070414828,
            "unit": "iter/sec",
            "range": "stddev: 0.0004143141986452354",
            "extra": "mean: 42.452429166666434 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.886029626021813,
            "unit": "iter/sec",
            "range": "stddev: 0.00006880177799321031",
            "extra": "mean: 33.460449999999284 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.53888197934157,
            "unit": "iter/sec",
            "range": "stddev: 0.00001428554853521042",
            "extra": "mean: 3.025362686567383 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.6260880454961,
            "unit": "iter/sec",
            "range": "stddev: 0.000010545125729818788",
            "extra": "mean: 1.806273262032084 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1671.7558320349817,
            "unit": "iter/sec",
            "range": "stddev: 0.000006299710733487342",
            "extra": "mean: 598.173477751669 usec\nrounds: 1708"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1502.4911796379945,
            "unit": "iter/sec",
            "range": "stddev: 0.000005787530569309907",
            "extra": "mean: 665.5613114753438 usec\nrounds: 1525"
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
        "date": 1643754996143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.35808466642425,
            "unit": "iter/sec",
            "range": "stddev: 0.000028005806877105573",
            "extra": "mean: 4.398348101265817 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.43101308296445,
            "unit": "iter/sec",
            "range": "stddev: 0.00007626987633797622",
            "extra": "mean: 3.38488498402561 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 455.72034640074514,
            "unit": "iter/sec",
            "range": "stddev: 0.000016903111144385806",
            "extra": "mean: 2.194328183716058 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.4216430758759,
            "unit": "iter/sec",
            "range": "stddev: 0.00001603074437494067",
            "extra": "mean: 1.095984523809505 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.41414567577817,
            "unit": "iter/sec",
            "range": "stddev: 0.00003812830786058558",
            "extra": "mean: 4.775226605504638 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.3941807124854,
            "unit": "iter/sec",
            "range": "stddev: 0.000027869565581656792",
            "extra": "mean: 3.618021180555295 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 439.63578836406316,
            "unit": "iter/sec",
            "range": "stddev: 0.000015234080996596103",
            "extra": "mean: 2.2746100896860977 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.9100733989371,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954592666693478",
            "extra": "mean: 1.1697136706135849 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.26444054633394,
            "unit": "iter/sec",
            "range": "stddev: 0.00007562538588434982",
            "extra": "mean: 35.3801448275864 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.895753507519288,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147410651400047",
            "extra": "mean: 33.44956666666666 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.46214344947435,
            "unit": "iter/sec",
            "range": "stddev: 0.000031224825295808376",
            "extra": "mean: 2.954540173410206 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.3236334964333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001696739327859884",
            "extra": "mean: 1.8007517412932557 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1673.6483435042749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062544635976595405",
            "extra": "mean: 597.4970810810867 usec\nrounds: 1850"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1487.449632340908,
            "unit": "iter/sec",
            "range": "stddev: 0.000012838735972892787",
            "extra": "mean: 672.2916717699053 usec\nrounds: 1633"
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
        "date": 1643755244739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.15785401676325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254496143192645",
            "extra": "mean: 5.676726737967867 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 229.7480593304194,
            "unit": "iter/sec",
            "range": "stddev: 0.00007513426577535099",
            "extra": "mean: 4.352593893129772 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.1266524845592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007702842639602298",
            "extra": "mean: 2.823848453608282 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.0480347108587,
            "unit": "iter/sec",
            "range": "stddev: 0.000027278821283481065",
            "extra": "mean: 1.39655435323386 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.53812056050552,
            "unit": "iter/sec",
            "range": "stddev: 0.00009872595012829839",
            "extra": "mean: 6.152402873563101 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.03134678870805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006592224394316935",
            "extra": "mean: 4.716283771929784 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.02525266564135,
            "unit": "iter/sec",
            "range": "stddev: 0.000039170945718630306",
            "extra": "mean: 2.940958038147051 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 655.2494149239349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000243359882554206",
            "extra": "mean: 1.5261364256480654 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.45731011807278,
            "unit": "iter/sec",
            "range": "stddev: 0.0004463446705640299",
            "extra": "mean: 44.5289304347825 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.52480828261471,
            "unit": "iter/sec",
            "range": "stddev: 0.00020284428739209757",
            "extra": "mean: 42.50831666666629 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.5696781105047,
            "unit": "iter/sec",
            "range": "stddev: 0.000045422841235253745",
            "extra": "mean: 3.867429496403019 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.5234041174815,
            "unit": "iter/sec",
            "range": "stddev: 0.00003336211584541478",
            "extra": "mean: 2.3120136170212446 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1344.9962273823655,
            "unit": "iter/sec",
            "range": "stddev: 0.000017421141938269424",
            "extra": "mean: 743.4965092401799 usec\nrounds: 1461"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1184.4158836244283,
            "unit": "iter/sec",
            "range": "stddev: 0.000019846437795561708",
            "extra": "mean: 844.298032326198 usec\nrounds: 1423"
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
        "date": 1643757204881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.25852155701153,
            "unit": "iter/sec",
            "range": "stddev: 0.0003058540232637632",
            "extra": "mean: 5.018605940594021 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.1095070914951,
            "unit": "iter/sec",
            "range": "stddev: 0.00001953607107452616",
            "extra": "mean: 3.844534600760455 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.5665450362902,
            "unit": "iter/sec",
            "range": "stddev: 0.000010698207364017108",
            "extra": "mean: 2.5089913151364676 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.6072967869333,
            "unit": "iter/sec",
            "range": "stddev: 0.000008184373729236187",
            "extra": "mean: 1.2600690594059378 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.32321817462042,
            "unit": "iter/sec",
            "range": "stddev: 0.00002083202040127971",
            "extra": "mean: 5.367017647058935 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.11211975189596,
            "unit": "iter/sec",
            "range": "stddev: 0.000016068788457971387",
            "extra": "mean: 4.113328455284472 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.40500099180963,
            "unit": "iter/sec",
            "range": "stddev: 0.00001006666462008109",
            "extra": "mean: 2.5746321428572108 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.6059716067023,
            "unit": "iter/sec",
            "range": "stddev: 0.00001156348897081237",
            "extra": "mean: 1.3393945910290426 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.163231365545034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000526249646078647",
            "extra": "mean: 39.74052400000019 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.566812187200505,
            "unit": "iter/sec",
            "range": "stddev: 0.00005805659950750533",
            "extra": "mean: 37.64094814814798 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.9171494900505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541451512618227",
            "extra": "mean: 3.379324252491904 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.66078580967087,
            "unit": "iter/sec",
            "range": "stddev: 0.000009807079781863664",
            "extra": "mean: 2.025682470119363 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.39686349147,
            "unit": "iter/sec",
            "range": "stddev: 0.000006412482451052341",
            "extra": "mean: 679.1647176079395 usec\nrounds: 1505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1309.9842470000885,
            "unit": "iter/sec",
            "range": "stddev: 0.000005465624539520924",
            "extra": "mean: 763.3679582712817 usec\nrounds: 1342"
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
        "date": 1643757652183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.10014806155786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002974108812293487",
            "extra": "mean: 4.564122885572138 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.0102718886886,
            "unit": "iter/sec",
            "range": "stddev: 0.000020040924641665617",
            "extra": "mean: 3.8460019011406748 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.5319088407021,
            "unit": "iter/sec",
            "range": "stddev: 0.000010094054759281477",
            "extra": "mean: 2.5155213399503924 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.6206769180403,
            "unit": "iter/sec",
            "range": "stddev: 0.000010263921609958833",
            "extra": "mean: 1.253728782287768 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.58505490631893,
            "unit": "iter/sec",
            "range": "stddev: 0.000017515479522771565",
            "extra": "mean: 5.447066486486534 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.53187438036818,
            "unit": "iter/sec",
            "range": "stddev: 0.000018961464416505944",
            "extra": "mean: 4.123169387755102 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.7431032288816,
            "unit": "iter/sec",
            "range": "stddev: 0.000009960091874790209",
            "extra": "mean: 2.605910025706847 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.71388823749,
            "unit": "iter/sec",
            "range": "stddev: 0.00001031105841356001",
            "extra": "mean: 1.326763398692883 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.875154089142015,
            "unit": "iter/sec",
            "range": "stddev: 0.00006348397488031382",
            "extra": "mean: 40.200755999999984 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.262670279372198,
            "unit": "iter/sec",
            "range": "stddev: 0.00007212434913393608",
            "extra": "mean: 38.076859259259784 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.63409475429415,
            "unit": "iter/sec",
            "range": "stddev: 0.000011012667999309685",
            "extra": "mean: 3.3598301324501474 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 499.29672471256504,
            "unit": "iter/sec",
            "range": "stddev: 0.000008687612951387016",
            "extra": "mean: 2.0028170634920137 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1475.1049849932645,
            "unit": "iter/sec",
            "range": "stddev: 0.000005250674391343643",
            "extra": "mean: 677.9178500332748 usec\nrounds: 1507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1310.1550065485878,
            "unit": "iter/sec",
            "range": "stddev: 0.000005659716032699185",
            "extra": "mean: 763.2684644196064 usec\nrounds: 1335"
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
        "date": 1643758443700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.5302536122003,
            "unit": "iter/sec",
            "range": "stddev: 0.000012722894016890821",
            "extra": "mean: 4.986778712871282 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.73470254493066,
            "unit": "iter/sec",
            "range": "stddev: 0.000018337976011783127",
            "extra": "mean: 3.8206626415094314 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.31444215428064,
            "unit": "iter/sec",
            "range": "stddev: 0.000010974605968044618",
            "extra": "mean: 2.5296318407960587 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.479876914135,
            "unit": "iter/sec",
            "range": "stddev: 0.000009355797450745091",
            "extra": "mean: 1.273107089552232 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.62172497438263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008042629092545016",
            "extra": "mean: 5.416480645161105 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.4574506357966,
            "unit": "iter/sec",
            "range": "stddev: 0.000024303420824538025",
            "extra": "mean: 4.107493927125538 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.1092042267181,
            "unit": "iter/sec",
            "range": "stddev: 0.000012042293241040404",
            "extra": "mean: 2.6034262886597124 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.7998247165713,
            "unit": "iter/sec",
            "range": "stddev: 0.000011695724894136295",
            "extra": "mean: 1.3498923280423267 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.23717391299964,
            "unit": "iter/sec",
            "range": "stddev: 0.00007768311335180194",
            "extra": "mean: 39.624087999999915 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.67138453824289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000662292696149118",
            "extra": "mean: 37.493366666666496 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.33177219546957,
            "unit": "iter/sec",
            "range": "stddev: 0.000011175771336047602",
            "extra": "mean: 3.3519728476817794 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.4268707476161,
            "unit": "iter/sec",
            "range": "stddev: 0.000010028550541981877",
            "extra": "mean: 2.034890763052258 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1496.8838671695294,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056471148244915",
            "extra": "mean: 668.0544977018882 usec\nrounds: 1523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1322.7115883031245,
            "unit": "iter/sec",
            "range": "stddev: 0.00000583171076738453",
            "extra": "mean: 756.0227103497871 usec\nrounds: 1343"
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
        "date": 1643759061670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.94101716218086,
            "unit": "iter/sec",
            "range": "stddev: 0.00019134094129979125",
            "extra": "mean: 5.7490752688171884 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.73397822452182,
            "unit": "iter/sec",
            "range": "stddev: 0.00011753069807520473",
            "extra": "mean: 4.371890909090975 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.3729047297291,
            "unit": "iter/sec",
            "range": "stddev: 0.00008996485658943593",
            "extra": "mean: 2.8787507211538057 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 699.8566829282362,
            "unit": "iter/sec",
            "range": "stddev: 0.00004894391996620065",
            "extra": "mean: 1.428863972286367 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.6979390086295,
            "unit": "iter/sec",
            "range": "stddev: 0.0004879571221639768",
            "extra": "mean: 6.146359358288859 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 215.67114877324119,
            "unit": "iter/sec",
            "range": "stddev: 0.00017538103519078462",
            "extra": "mean: 4.636688799999902 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.49433134578317,
            "unit": "iter/sec",
            "range": "stddev: 0.00012712313665600217",
            "extra": "mean: 2.9028053846153385 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.7803517943405,
            "unit": "iter/sec",
            "range": "stddev: 0.00007325233220556515",
            "extra": "mean: 1.5019968632371115 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.605796540672408,
            "unit": "iter/sec",
            "range": "stddev: 0.0007146633125902714",
            "extra": "mean: 44.236441666667105 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.436846697898186,
            "unit": "iter/sec",
            "range": "stddev: 0.0002532282650755443",
            "extra": "mean: 42.6678560000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.6906036964364,
            "unit": "iter/sec",
            "range": "stddev: 0.000011669288921064246",
            "extra": "mean: 3.9418093749999104 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 420.1826232069049,
            "unit": "iter/sec",
            "range": "stddev: 0.00022389197630203148",
            "extra": "mean: 2.379917551963074 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1294.0883931416224,
            "unit": "iter/sec",
            "range": "stddev: 0.000007005877651953624",
            "extra": "mean: 772.7447408536968 usec\nrounds: 1312"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1139.5146371163164,
            "unit": "iter/sec",
            "range": "stddev: 0.000014129702261353525",
            "extra": "mean: 877.566612510239 usec\nrounds: 1231"
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
        "date": 1643760018615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.2527505217289,
            "unit": "iter/sec",
            "range": "stddev: 0.00033375137629322403",
            "extra": "mean: 6.932276829268287 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 190.0608842963618,
            "unit": "iter/sec",
            "range": "stddev: 0.0003804835220462093",
            "extra": "mean: 5.261471889400981 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 286.7989586051092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005011337842299124",
            "extra": "mean: 3.486763009404405 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 609.5171608224349,
            "unit": "iter/sec",
            "range": "stddev: 0.00029524016084543316",
            "extra": "mean: 1.640642896174864 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.28957223466327,
            "unit": "iter/sec",
            "range": "stddev: 0.00042088908744665677",
            "extra": "mean: 7.077663157894855 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.5476877932544,
            "unit": "iter/sec",
            "range": "stddev: 0.0006646395271148463",
            "extra": "mean: 5.729093364928815 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.15545006319053,
            "unit": "iter/sec",
            "range": "stddev: 0.00036320685676320864",
            "extra": "mean: 3.595112012987065 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 593.5891187991554,
            "unit": "iter/sec",
            "range": "stddev: 0.0003075852089804316",
            "extra": "mean: 1.6846669999999722 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.381735608473683,
            "unit": "iter/sec",
            "range": "stddev: 0.0023798706087064356",
            "extra": "mean: 44.679287500000754 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.719295156587425,
            "unit": "iter/sec",
            "range": "stddev: 0.0028107991450481893",
            "extra": "mean: 44.0154499999993 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.84822725035525,
            "unit": "iter/sec",
            "range": "stddev: 0.0007035486754030122",
            "extra": "mean: 4.905610480349454 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 360.6238900947559,
            "unit": "iter/sec",
            "range": "stddev: 0.0002056784062633003",
            "extra": "mean: 2.7729721393034845 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1068.9064968121097,
            "unit": "iter/sec",
            "range": "stddev: 0.00015670907482507853",
            "extra": "mean: 935.5355243722297 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1020.3959136145934,
            "unit": "iter/sec",
            "range": "stddev: 0.00016079836937374256",
            "extra": "mean: 980.0117647057757 usec\nrounds: 1224"
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
        "date": 1643761461891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.69970922747086,
            "unit": "iter/sec",
            "range": "stddev: 0.000014841996773866069",
            "extra": "mean: 4.391749130434791 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.42836126656914,
            "unit": "iter/sec",
            "range": "stddev: 0.000012786329589191814",
            "extra": "mean: 3.3621541528238907 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.68759909204323,
            "unit": "iter/sec",
            "range": "stddev: 0.000011353794268214589",
            "extra": "mean: 2.204159871244623 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 918.4141166679757,
            "unit": "iter/sec",
            "range": "stddev: 0.000011050695749971063",
            "extra": "mean: 1.0888334378265216 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.8451874518511,
            "unit": "iter/sec",
            "range": "stddev: 0.000022302617686761187",
            "extra": "mean: 4.7654178403755365 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.5393075397519,
            "unit": "iter/sec",
            "range": "stddev: 0.000014175404741093689",
            "extra": "mean: 3.616122456140353 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.77579499738783,
            "unit": "iter/sec",
            "range": "stddev: 0.000016437179052722273",
            "extra": "mean: 2.263591648351655 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.6368077806006,
            "unit": "iter/sec",
            "range": "stddev: 0.000010886360605474584",
            "extra": "mean: 1.163281970884643 msec\nrounds: 893"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.047119160189226,
            "unit": "iter/sec",
            "range": "stddev: 0.000059054411283637905",
            "extra": "mean: 35.65428571428558 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.707223430205342,
            "unit": "iter/sec",
            "range": "stddev: 0.00003062676014170386",
            "extra": "mean: 33.66184666666736 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.35287803556105,
            "unit": "iter/sec",
            "range": "stddev: 0.000020843901881387585",
            "extra": "mean: 2.964255131964779 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.5226518120506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000089801558152683",
            "extra": "mean: 1.7714081034483184 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1676.955779743894,
            "unit": "iter/sec",
            "range": "stddev: 0.00000629153861121211",
            "extra": "mean: 596.3186460126699 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1498.0848728983904,
            "unit": "iter/sec",
            "range": "stddev: 0.000005435062545326165",
            "extra": "mean: 667.5189223860659 usec\nrounds: 1559"
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
        "date": 1643775037281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.58267572680234,
            "unit": "iter/sec",
            "range": "stddev: 0.00001559964901035437",
            "extra": "mean: 5.035686000000008 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.9370117792405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002235155557961726",
            "extra": "mean: 3.861943076923127 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.0096286685983,
            "unit": "iter/sec",
            "range": "stddev: 0.000015974207207293576",
            "extra": "mean: 2.518830597014927 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.2835171010818,
            "unit": "iter/sec",
            "range": "stddev: 0.000009142944529992314",
            "extra": "mean: 1.257413209876571 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.34928311460774,
            "unit": "iter/sec",
            "range": "stddev: 0.000018055410073286694",
            "extra": "mean: 5.483980978260789 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.9472227820737,
            "unit": "iter/sec",
            "range": "stddev: 0.000010731397986968915",
            "extra": "mean: 4.150286475409831 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.5777960242839,
            "unit": "iter/sec",
            "range": "stddev: 0.000012202111839344744",
            "extra": "mean: 2.6002541237114367 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.011183408099,
            "unit": "iter/sec",
            "range": "stddev: 0.000008386063239682036",
            "extra": "mean: 1.3531594953520167 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.18876460192687,
            "unit": "iter/sec",
            "range": "stddev: 0.00005247979769984177",
            "extra": "mean: 39.70023999999995 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.688077753638716,
            "unit": "iter/sec",
            "range": "stddev: 0.00004946547127983627",
            "extra": "mean: 37.46991481481493 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.8237408826485,
            "unit": "iter/sec",
            "range": "stddev: 0.000014213342318495032",
            "extra": "mean: 3.415023648648619 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.0550823037934,
            "unit": "iter/sec",
            "range": "stddev: 0.00013704727670803903",
            "extra": "mean: 2.0744517311608703 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1456.7736849812848,
            "unit": "iter/sec",
            "range": "stddev: 0.000006259440322526806",
            "extra": "mean: 686.4484238763876 usec\nrounds: 1491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1310.3677510857465,
            "unit": "iter/sec",
            "range": "stddev: 0.000006483304902760298",
            "extra": "mean: 763.1445440956696 usec\nrounds: 1338"
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
        "date": 1643775335774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.93270936690382,
            "unit": "iter/sec",
            "range": "stddev: 0.00012949729456824082",
            "extra": "mean: 5.077876616915414 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.65065261281745,
            "unit": "iter/sec",
            "range": "stddev: 0.000014160845722156026",
            "extra": "mean: 3.807338721804492 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.2266899744508,
            "unit": "iter/sec",
            "range": "stddev: 0.000018814434039794313",
            "extra": "mean: 2.4985839901477753 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.2557680199637,
            "unit": "iter/sec",
            "range": "stddev: 0.00000977971606876787",
            "extra": "mean: 1.2496004901960962 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.66930988681798,
            "unit": "iter/sec",
            "range": "stddev: 0.000040645280158790435",
            "extra": "mean: 5.415084946236547 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.3999097046712,
            "unit": "iter/sec",
            "range": "stddev: 0.000016959900677430195",
            "extra": "mean: 4.074981124497802 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.6213900162515,
            "unit": "iter/sec",
            "range": "stddev: 0.00001679940883506632",
            "extra": "mean: 2.5798369897958255 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.5228667664419,
            "unit": "iter/sec",
            "range": "stddev: 0.000009799060803053961",
            "extra": "mean: 1.3270997392438189 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.72689148356388,
            "unit": "iter/sec",
            "range": "stddev: 0.00020772183924617701",
            "extra": "mean: 40.441800000000256 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.357949347635984,
            "unit": "iter/sec",
            "range": "stddev: 0.000040600739259750526",
            "extra": "mean: 37.939218518518366 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.7507060945191,
            "unit": "iter/sec",
            "range": "stddev: 0.000014882894943733545",
            "extra": "mean: 3.358514285714427 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.8250935937725,
            "unit": "iter/sec",
            "range": "stddev: 0.00013662881608828288",
            "extra": "mean: 2.020916103379655 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1474.3083537602768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062699599429018214",
            "extra": "mean: 678.2841577540165 usec\nrounds: 1496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1305.607832540991,
            "unit": "iter/sec",
            "range": "stddev: 0.000006577990281864881",
            "extra": "mean: 765.9267776096189 usec\nrounds: 1322"
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
        "date": 1643781814249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.82513029999265,
            "unit": "iter/sec",
            "range": "stddev: 0.000014606445873474588",
            "extra": "mean: 5.054969500000057 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.0055087493552,
            "unit": "iter/sec",
            "range": "stddev: 0.000009213141743449014",
            "extra": "mean: 3.8909671814671123 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.3991555687168,
            "unit": "iter/sec",
            "range": "stddev: 0.000011307889487506684",
            "extra": "mean: 2.5419474999999725 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 798.4473089925343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000178372838201759",
            "extra": "mean: 1.2524307975460285 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.07967377709514,
            "unit": "iter/sec",
            "range": "stddev: 0.000023187540632185518",
            "extra": "mean: 5.522430978260855 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.9233197138936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000100564092274608",
            "extra": "mean: 4.167998347107281 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.7703530872739,
            "unit": "iter/sec",
            "range": "stddev: 0.000010848851959552175",
            "extra": "mean: 2.598952835051663 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.0971099432962,
            "unit": "iter/sec",
            "range": "stddev: 0.000008484212988415259",
            "extra": "mean: 1.338514078947379 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.87287968649814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007577564318461594",
            "extra": "mean: 40.20443200000017 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.30318896828061,
            "unit": "iter/sec",
            "range": "stddev: 0.00004120798447682734",
            "extra": "mean: 38.018203846153945 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.3069229452792,
            "unit": "iter/sec",
            "range": "stddev: 0.000012453379704710474",
            "extra": "mean: 3.3978133779269983 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.54379982735185,
            "unit": "iter/sec",
            "range": "stddev: 0.00001055024828663824",
            "extra": "mean: 2.051097768762762 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1435.3448139888012,
            "unit": "iter/sec",
            "range": "stddev: 0.000005775910643676327",
            "extra": "mean: 696.6967032966911 usec\nrounds: 1456"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1288.3444378474226,
            "unit": "iter/sec",
            "range": "stddev: 0.000005749180018777405",
            "extra": "mean: 776.1899462777276 usec\nrounds: 1303"
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
        "date": 1643823786433,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.3318554445816,
            "unit": "iter/sec",
            "range": "stddev: 0.000901080632792952",
            "extra": "mean: 6.355991907514489 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.27835464547573,
            "unit": "iter/sec",
            "range": "stddev: 0.000012859979499082046",
            "extra": "mean: 4.419335652173897 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.6286084210442,
            "unit": "iter/sec",
            "range": "stddev: 0.000013807540287383872",
            "extra": "mean: 2.884932102272747 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.5227979938238,
            "unit": "iter/sec",
            "range": "stddev: 0.000009857050953718652",
            "extra": "mean: 1.3956290055248453 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.09498384916242,
            "unit": "iter/sec",
            "range": "stddev: 0.00043593313069028265",
            "extra": "mean: 6.3655756250000195 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.177265666848,
            "unit": "iter/sec",
            "range": "stddev: 0.000016118230350391177",
            "extra": "mean: 4.73535821596248 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.0719183934716,
            "unit": "iter/sec",
            "range": "stddev: 0.000011736495435012196",
            "extra": "mean: 2.984433923303922 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.6575250947694,
            "unit": "iter/sec",
            "range": "stddev: 0.000009675969882969603",
            "extra": "mean: 1.4955339055793457 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.662402291488394,
            "unit": "iter/sec",
            "range": "stddev: 0.00005803893099282126",
            "extra": "mean: 46.162931818181626 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.986865305164503,
            "unit": "iter/sec",
            "range": "stddev: 0.00019979633147539395",
            "extra": "mean: 43.50310434782632 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.9275164173795,
            "unit": "iter/sec",
            "range": "stddev: 0.000013658262907427783",
            "extra": "mean: 3.892148314606743 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.8976707455358,
            "unit": "iter/sec",
            "range": "stddev: 0.00017082410673361246",
            "extra": "mean: 2.3100147392287913 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1333.7257320539427,
            "unit": "iter/sec",
            "range": "stddev: 0.000006637751790616166",
            "extra": "mean: 749.7793406594894 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1161.8906930195915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009371739742994544",
            "extra": "mean: 860.6661590524835 usec\nrounds: 1182"
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
        "date": 1643830213531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.46614480126328,
            "unit": "iter/sec",
            "range": "stddev: 0.000014931760925923262",
            "extra": "mean: 4.415671052631536 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.9833470631203,
            "unit": "iter/sec",
            "range": "stddev: 0.000011483248447875174",
            "extra": "mean: 3.3785684563758376 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.08226371460233,
            "unit": "iter/sec",
            "range": "stddev: 0.000011208310229302437",
            "extra": "mean: 2.202244130434734 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.3116738474741,
            "unit": "iter/sec",
            "range": "stddev: 0.000007559294247561793",
            "extra": "mean: 1.1021570964247367 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.19583238278832,
            "unit": "iter/sec",
            "range": "stddev: 0.00001589990852016671",
            "extra": "mean: 4.780209952606472 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.4079640875906,
            "unit": "iter/sec",
            "range": "stddev: 0.000010134135134613328",
            "extra": "mean: 3.630977060931907 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 436.56610864537373,
            "unit": "iter/sec",
            "range": "stddev: 0.000011710139486713005",
            "extra": "mean: 2.290603828828839 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.5233132025862,
            "unit": "iter/sec",
            "range": "stddev: 0.000006696145278155508",
            "extra": "mean: 1.178518002322994 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.317986774718804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001436117250137881",
            "extra": "mean: 35.31324482758644 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.995278743125432,
            "unit": "iter/sec",
            "range": "stddev: 0.00005041243278537671",
            "extra": "mean: 33.33858000000044 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.1028874599885,
            "unit": "iter/sec",
            "range": "stddev: 0.000024636379579441435",
            "extra": "mean: 2.9841581120944554 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.6118183867233,
            "unit": "iter/sec",
            "range": "stddev: 0.00039605324438207767",
            "extra": "mean: 2.025883422460002 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1648.0736153839157,
            "unit": "iter/sec",
            "range": "stddev: 0.000005734441582738482",
            "extra": "mean: 606.7690124188124 usec\nrounds: 1691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1470.7331964056352,
            "unit": "iter/sec",
            "range": "stddev: 0.000006218746987400862",
            "extra": "mean: 679.9329765887702 usec\nrounds: 1495"
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
        "date": 1643842699197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.34827043187292,
            "unit": "iter/sec",
            "range": "stddev: 0.00003713024945477849",
            "extra": "mean: 4.991308374384211 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.95138418656745,
            "unit": "iter/sec",
            "range": "stddev: 0.000011318290198008963",
            "extra": "mean: 3.817502255639078 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.2249136799134,
            "unit": "iter/sec",
            "range": "stddev: 0.00003927207123272334",
            "extra": "mean: 2.5048536945812208 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.0513596642717,
            "unit": "iter/sec",
            "range": "stddev: 0.000008176081346140774",
            "extra": "mean: 1.2468029484029388 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.83239519275455,
            "unit": "iter/sec",
            "range": "stddev: 0.000058102023537033054",
            "extra": "mean: 5.381193085106343 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.582739865359,
            "unit": "iter/sec",
            "range": "stddev: 0.000012591243561985739",
            "extra": "mean: 4.088595951417066 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.151863355578,
            "unit": "iter/sec",
            "range": "stddev: 0.000010596011434823754",
            "extra": "mean: 2.5896547314577525 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.3385175005087,
            "unit": "iter/sec",
            "range": "stddev: 0.000008604067152982816",
            "extra": "mean: 1.3345103403140104 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.962743105914214,
            "unit": "iter/sec",
            "range": "stddev: 0.00006711825385111103",
            "extra": "mean: 40.05970000000033 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.345925514798967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005452757947193747",
            "extra": "mean: 37.95653333333394 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.30065866959296,
            "unit": "iter/sec",
            "range": "stddev: 0.000010526105335332711",
            "extra": "mean: 3.363598333333518 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.87082978864555,
            "unit": "iter/sec",
            "range": "stddev: 0.000009133084676122112",
            "extra": "mean: 2.041354453441225 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1467.234063084565,
            "unit": "iter/sec",
            "range": "stddev: 0.000004942008932905434",
            "extra": "mean: 681.5545148247859 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1299.8284817232889,
            "unit": "iter/sec",
            "range": "stddev: 0.000006331906830539036",
            "extra": "mean: 769.3322727274127 usec\nrounds: 1320"
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
        "date": 1643898528689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.9707465397604,
            "unit": "iter/sec",
            "range": "stddev: 0.0007257488078646388",
            "extra": "mean: 7.409012883435558 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 188.61383281736772,
            "unit": "iter/sec",
            "range": "stddev: 0.0004501622172235178",
            "extra": "mean: 5.3018380733945785 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.43081800864775,
            "unit": "iter/sec",
            "range": "stddev: 0.000364299173496356",
            "extra": "mean: 3.657232228915664 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.6043580670307,
            "unit": "iter/sec",
            "range": "stddev: 0.0004333889770884206",
            "extra": "mean: 1.8395731843575327 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.96603491953695,
            "unit": "iter/sec",
            "range": "stddev: 0.0005784941968886058",
            "extra": "mean: 7.694317985611459 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.14032483800256,
            "unit": "iter/sec",
            "range": "stddev: 0.0005223258167210091",
            "extra": "mean: 5.877501415094512 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.76398746525194,
            "unit": "iter/sec",
            "range": "stddev: 0.0005672867354690461",
            "extra": "mean: 3.6796634069400427 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.4259261348406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834654494329229",
            "extra": "mean: 1.7780119186046413 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.055852755017927,
            "unit": "iter/sec",
            "range": "stddev: 0.0020613920871833885",
            "extra": "mean: 47.492733333333405 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.464538474723792,
            "unit": "iter/sec",
            "range": "stddev: 0.0030765431551610617",
            "extra": "mean: 48.86501600000031 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.21043225733803,
            "unit": "iter/sec",
            "range": "stddev: 0.0008001520912953834",
            "extra": "mean: 5.070725663716965 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 351.64684614345515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993925362226802",
            "extra": "mean: 2.8437621749408426 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1062.3578291586323,
            "unit": "iter/sec",
            "range": "stddev: 0.00013847582029680955",
            "extra": "mean: 941.3024242424809 usec\nrounds: 1320"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 966.8239451760954,
            "unit": "iter/sec",
            "range": "stddev: 0.0002040043850194565",
            "extra": "mean: 1.034314473684102 msec\nrounds: 1216"
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
        "date": 1643987865732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.60306525973806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000905301652153273",
            "extra": "mean: 4.374394537815157 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.23381147793833,
            "unit": "iter/sec",
            "range": "stddev: 0.00006126735525601812",
            "extra": "mean: 3.364354798761591 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 456.34851951632857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005465887413829496",
            "extra": "mean: 2.1913076458752903 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.871497267648,
            "unit": "iter/sec",
            "range": "stddev: 0.00003263807250301783",
            "extra": "mean: 1.095444433299911 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.9343573862213,
            "unit": "iter/sec",
            "range": "stddev: 0.00008888243756866887",
            "extra": "mean: 4.763393721973178 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.2199924679686,
            "unit": "iter/sec",
            "range": "stddev: 0.00008304962910191803",
            "extra": "mean: 3.5942780068730316 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.6508135810456,
            "unit": "iter/sec",
            "range": "stddev: 0.00005919696011841556",
            "extra": "mean: 2.248955741127261 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.3922874169477,
            "unit": "iter/sec",
            "range": "stddev: 0.000021777390711942554",
            "extra": "mean: 1.1731687566417994 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.4785827800222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003796137735831051",
            "extra": "mean: 35.11410689655184 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.93432023890326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002584256800874944",
            "extra": "mean: 33.40647096774155 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.43518036855,
            "unit": "iter/sec",
            "range": "stddev: 0.00004877889302659257",
            "extra": "mean: 2.9723407608697276 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.9496657199768,
            "unit": "iter/sec",
            "range": "stddev: 0.000045980018673703856",
            "extra": "mean: 1.7954943894387398 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1650.1763439679887,
            "unit": "iter/sec",
            "range": "stddev: 0.000011589340297707534",
            "extra": "mean: 605.9958401751265 usec\nrounds: 1827"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1482.0323463385964,
            "unit": "iter/sec",
            "range": "stddev: 0.00001493430162205897",
            "extra": "mean: 674.7491054905305 usec\nrounds: 1621"
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
        "date": 1643988221152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.28078665820972,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073592659145572",
            "extra": "mean: 7.9820699300699145 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.45193296889906,
            "unit": "iter/sec",
            "range": "stddev: 0.0006639910327455329",
            "extra": "mean: 5.971862983425401 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.83615699804278,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418696102402067",
            "extra": "mean: 3.9708356890459218 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.8473847086567,
            "unit": "iter/sec",
            "range": "stddev: 0.00037140763440371904",
            "extra": "mean: 1.8592634796238416 msec\nrounds: 638"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.33256553931803,
            "unit": "iter/sec",
            "range": "stddev: 0.0006196716832854795",
            "extra": "mean: 8.670577952756023 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.51753628272417,
            "unit": "iter/sec",
            "range": "stddev: 0.000534808760292865",
            "extra": "mean: 6.513913812154718 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.19012178492272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004896907976071193",
            "extra": "mean: 4.061901398601292 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.79503002733276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032993234592371",
            "extra": "mean: 1.9539072115385614 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.008508588614404,
            "unit": "iter/sec",
            "range": "stddev: 0.0014329710610071075",
            "extra": "mean: 52.60802000000009 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.464031026777644,
            "unit": "iter/sec",
            "range": "stddev: 0.005093489046089101",
            "extra": "mean: 51.376819047619165 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.09684933892018,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621463431913048",
            "extra": "mean: 5.583571144278563 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.57034701005773,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716793430112706",
            "extra": "mean: 3.3050165354331935 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 957.038173573097,
            "unit": "iter/sec",
            "range": "stddev: 0.00040155674562359126",
            "extra": "mean: 1.0448903999999346 msec\nrounds: 1250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 894.1795282210983,
            "unit": "iter/sec",
            "range": "stddev: 0.0003209255067324872",
            "extra": "mean: 1.1183436529680157 msec\nrounds: 1095"
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
        "date": 1644011236227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.14294597388013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014976640380855836",
            "extra": "mean: 5.775574594594557 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.99190311286796,
            "unit": "iter/sec",
            "range": "stddev: 0.00003247267747808533",
            "extra": "mean: 4.3861206751054995 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.99301473069687,
            "unit": "iter/sec",
            "range": "stddev: 0.000040058973267459594",
            "extra": "mean: 2.873620899470856 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.0599291140323,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100740274053403",
            "extra": "mean: 1.4143072727272645 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.3525994697733,
            "unit": "iter/sec",
            "range": "stddev: 0.000058956564096289213",
            "extra": "mean: 6.355153987729928 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 213.01256506673508,
            "unit": "iter/sec",
            "range": "stddev: 0.00004871965493313404",
            "extra": "mean: 4.694558744394764 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.7643956358167,
            "unit": "iter/sec",
            "range": "stddev: 0.000037651346042253814",
            "extra": "mean: 2.9606436111111516 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 658.1288193247816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000312532891955135",
            "extra": "mean: 1.519459368191727 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.04727972035613,
            "unit": "iter/sec",
            "range": "stddev: 0.00032017636962762444",
            "extra": "mean: 45.35706956521741 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.447588874666437,
            "unit": "iter/sec",
            "range": "stddev: 0.00016794222846350153",
            "extra": "mean: 42.648308333332885 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.1700707484861,
            "unit": "iter/sec",
            "range": "stddev: 0.000023451382489968923",
            "extra": "mean: 3.873415679442633 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.4440051474697,
            "unit": "iter/sec",
            "range": "stddev: 0.00002401959035620703",
            "extra": "mean: 2.3124381147542685 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1323.5784674703189,
            "unit": "iter/sec",
            "range": "stddev: 0.000020730244069896234",
            "extra": "mean: 755.5275524474524 usec\nrounds: 1430"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1154.3627917390254,
            "unit": "iter/sec",
            "range": "stddev: 0.000010424110365653588",
            "extra": "mean: 866.2787878787389 usec\nrounds: 1287"
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
        "date": 1644244354695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.22965860205068,
            "unit": "iter/sec",
            "range": "stddev: 0.000013203559402859342",
            "extra": "mean: 5.019332999999966 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.38573069257234,
            "unit": "iter/sec",
            "range": "stddev: 0.000008222911802680299",
            "extra": "mean: 3.8701827586206807 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.28383046516933,
            "unit": "iter/sec",
            "range": "stddev: 0.000014558514558996257",
            "extra": "mean: 2.510772277227689 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.1530024964823,
            "unit": "iter/sec",
            "range": "stddev: 0.00000777596522622184",
            "extra": "mean: 1.2544643209876298 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.33080964434637,
            "unit": "iter/sec",
            "range": "stddev: 0.00001711739865315299",
            "extra": "mean: 5.4546205405406525 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.96371778946195,
            "unit": "iter/sec",
            "range": "stddev: 0.000008646158857457873",
            "extra": "mean: 4.132851028806403 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.04237559680104,
            "unit": "iter/sec",
            "range": "stddev: 0.000010142443819625806",
            "extra": "mean: 2.5836964194373997 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.7713429914783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072675668953566275",
            "extra": "mean: 1.328424639580522 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.88884393410593,
            "unit": "iter/sec",
            "range": "stddev: 0.0002505148250431811",
            "extra": "mean: 40.178643999999935 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.327364789723905,
            "unit": "iter/sec",
            "range": "stddev: 0.000047381990459504465",
            "extra": "mean: 37.98329259259248 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.6421196133781,
            "unit": "iter/sec",
            "range": "stddev: 0.000011001651491925402",
            "extra": "mean: 3.371065448505181 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.69797922204464,
            "unit": "iter/sec",
            "range": "stddev: 0.000011075211607471698",
            "extra": "mean: 2.0546623217923274 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1476.7436596394741,
            "unit": "iter/sec",
            "range": "stddev: 0.000009581965353088398",
            "extra": "mean: 677.1655957162773 usec\nrounds: 1494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1294.059253079994,
            "unit": "iter/sec",
            "range": "stddev: 0.000005867047698189544",
            "extra": "mean: 772.7621417797501 usec\nrounds: 1326"
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
        "date": 1644418237822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.38600821195934,
            "unit": "iter/sec",
            "range": "stddev: 0.0005343888397092244",
            "extra": "mean: 5.197883199999971 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.56444369598609,
            "unit": "iter/sec",
            "range": "stddev: 0.000428880968337787",
            "extra": "mean: 4.039352279635194 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.30286863724524,
            "unit": "iter/sec",
            "range": "stddev: 0.00031292009133924146",
            "extra": "mean: 2.636415600000042 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.4345827497782,
            "unit": "iter/sec",
            "range": "stddev: 0.0001663244687016853",
            "extra": "mean: 1.3272552427184088 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.78918351604176,
            "unit": "iter/sec",
            "range": "stddev: 0.0004760104164443035",
            "extra": "mean: 6.5880847161571 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 203.60520778150112,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061799334219875",
            "extra": "mean: 4.911465727699607 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.36187042816937,
            "unit": "iter/sec",
            "range": "stddev: 0.0001688180403964197",
            "extra": "mean: 3.064083431952554 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.8505454536316,
            "unit": "iter/sec",
            "range": "stddev: 0.00016143737621540145",
            "extra": "mean: 1.531744144144281 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.374336824766285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006237997877312331",
            "extra": "mean: 46.78507727272771 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.23502694454887,
            "unit": "iter/sec",
            "range": "stddev: 0.00020282765508637267",
            "extra": "mean: 43.03846956521857 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.1572601985431,
            "unit": "iter/sec",
            "range": "stddev: 0.000019846811176734733",
            "extra": "mean: 3.9191516605166536 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 429.8462459904809,
            "unit": "iter/sec",
            "range": "stddev: 0.00001693644160594259",
            "extra": "mean: 2.326413245033075 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1423.7846027419882,
            "unit": "iter/sec",
            "range": "stddev: 0.00007827427918128482",
            "extra": "mean: 702.3534304796914 usec\nrounds: 1647"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.481967072459,
            "unit": "iter/sec",
            "range": "stddev: 0.000045779292069906654",
            "extra": "mean: 837.8844654460437 usec\nrounds: 1693"
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
        "date": 1644419430271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.6549795000137,
            "unit": "iter/sec",
            "range": "stddev: 0.0003022036387715307",
            "extra": "mean: 5.444992576419228 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.92227141172293,
            "unit": "iter/sec",
            "range": "stddev: 0.00032939269927153984",
            "extra": "mean: 3.953783881578924 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.3176387070461,
            "unit": "iter/sec",
            "range": "stddev: 0.00019752881367535326",
            "extra": "mean: 2.685878658536612 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.6015620845698,
            "unit": "iter/sec",
            "range": "stddev: 0.00014741500582929562",
            "extra": "mean: 1.2156553623188868 msec\nrounds: 1035"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.85028264107112,
            "unit": "iter/sec",
            "range": "stddev: 0.00040580475986135136",
            "extra": "mean: 5.78535357142881 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.69454283864485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217558034792577",
            "extra": "mean: 4.551774418604709 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.92400726101687,
            "unit": "iter/sec",
            "range": "stddev: 0.00023612467155699387",
            "extra": "mean: 2.7328078512397007 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.9037207298012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563650198659123",
            "extra": "mean: 1.344259978991579 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.139078200828497,
            "unit": "iter/sec",
            "range": "stddev: 0.002272234651851002",
            "extra": "mean: 43.21693333333369 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.460551830181526,
            "unit": "iter/sec",
            "range": "stddev: 0.002116241957999778",
            "extra": "mean: 39.27644642857179 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.89881849252697,
            "unit": "iter/sec",
            "range": "stddev: 0.00029626275739627535",
            "extra": "mean: 3.5473720867209297 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.18299183455565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002094001148757487",
            "extra": "mean: 2.0739014376996425 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1444.68314336543,
            "unit": "iter/sec",
            "range": "stddev: 0.00007615732919116751",
            "extra": "mean: 692.1933052187984 usec\nrounds: 1897"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1214.5637352715166,
            "unit": "iter/sec",
            "range": "stddev: 0.00006897863810502007",
            "extra": "mean: 823.3409009008896 usec\nrounds: 1665"
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
        "date": 1644539131126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.0049026013883,
            "unit": "iter/sec",
            "range": "stddev: 0.000015384146378608772",
            "extra": "mean: 5.050380000000003 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.683573119182,
            "unit": "iter/sec",
            "range": "stddev: 0.000013719825543290441",
            "extra": "mean: 3.8657267175572647 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.14520094785865,
            "unit": "iter/sec",
            "range": "stddev: 0.000011932201088543092",
            "extra": "mean: 2.524326932668362 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.2702435928204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008622709651187372",
            "extra": "mean: 1.2495778869778926 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.03689591080658,
            "unit": "iter/sec",
            "range": "stddev: 0.000021614043422442843",
            "extra": "mean: 5.493391847826138 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.43892513203727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218613290071635",
            "extra": "mean: 4.107806504065102 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.2205485517668,
            "unit": "iter/sec",
            "range": "stddev: 0.000011813369851418385",
            "extra": "mean: 2.6026718346253883 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.1604345783185,
            "unit": "iter/sec",
            "range": "stddev: 0.00000973731931404084",
            "extra": "mean: 1.3312735255569916 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.124120693461673,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306990751467499",
            "extra": "mean: 39.80238800000038 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.537903448620362,
            "unit": "iter/sec",
            "range": "stddev: 0.00005200040954305456",
            "extra": "mean: 37.681951851851636 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.1961480235692,
            "unit": "iter/sec",
            "range": "stddev: 0.000012881934701771566",
            "extra": "mean: 3.3761411371238594 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.5560541886459,
            "unit": "iter/sec",
            "range": "stddev: 0.000010186618818758272",
            "extra": "mean: 2.0385030241935307 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1447.85481584229,
            "unit": "iter/sec",
            "range": "stddev: 0.000005778627331933554",
            "extra": "mean: 690.6769857433874 usec\nrounds: 1473"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1288.8896821868943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059898121706274216",
            "extra": "mean: 775.8615914305968 usec\nrounds: 1307"
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
        "date": 1644540123350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.37756698300115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007789314751873627",
            "extra": "mean: 7.789522916666686 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.3551163078265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006867874309255848",
            "extra": "mean: 5.735421025641056 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.5779932443778,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733179438690894",
            "extra": "mean: 3.8823192439862173 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.9072911268428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002004286623186163",
            "extra": "mean: 1.821801269841245 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.82521240451108,
            "unit": "iter/sec",
            "range": "stddev: 0.0006801244029298643",
            "extra": "mean: 8.20848148148167 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.9892480225395,
            "unit": "iter/sec",
            "range": "stddev: 0.00036991490994501153",
            "extra": "mean: 6.135374033149178 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.33737959377302,
            "unit": "iter/sec",
            "range": "stddev: 0.0003972011493274505",
            "extra": "mean: 3.931785416666623 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 540.5888966179352,
            "unit": "iter/sec",
            "range": "stddev: 0.00018687315647146276",
            "extra": "mean: 1.8498345161290957 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.565804545024065,
            "unit": "iter/sec",
            "range": "stddev: 0.0017708803415999097",
            "extra": "mean: 48.62440454545465 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.002427537396755,
            "unit": "iter/sec",
            "range": "stddev: 0.0010856224437603922",
            "extra": "mean: 45.44953043478203 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.88936860084772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005009022586398857",
            "extra": "mean: 5.350759154929608 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 271.1851181292009,
            "unit": "iter/sec",
            "range": "stddev: 0.0008716961999635164",
            "extra": "mean: 3.687517983651188 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1047.6836263682314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002179562671457834",
            "extra": "mean: 954.4866167914397 usec\nrounds: 1203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 961.3982073928598,
            "unit": "iter/sec",
            "range": "stddev: 0.00016717364433078296",
            "extra": "mean: 1.040151721014564 msec\nrounds: 1104"
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
        "date": 1644597415875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.08955259503213,
            "unit": "iter/sec",
            "range": "stddev: 0.00045631791490518327",
            "extra": "mean: 8.19070902255637 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.67443016273194,
            "unit": "iter/sec",
            "range": "stddev: 0.000987476512963369",
            "extra": "mean: 6.302212643678183 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.08026655574875,
            "unit": "iter/sec",
            "range": "stddev: 0.000337836241191943",
            "extra": "mean: 4.235847470817121 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.2413838737815,
            "unit": "iter/sec",
            "range": "stddev: 0.00031243331903416175",
            "extra": "mean: 2.007059293680286 msec\nrounds: 538"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.22613807970149,
            "unit": "iter/sec",
            "range": "stddev: 0.0007945399625587853",
            "extra": "mean: 8.910580165289243 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.08407947042298,
            "unit": "iter/sec",
            "range": "stddev: 0.0006363196615338729",
            "extra": "mean: 6.532357926829404 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.06999217082412,
            "unit": "iter/sec",
            "range": "stddev: 0.0004916844053669534",
            "extra": "mean: 4.272226400000051 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.50144788394647,
            "unit": "iter/sec",
            "range": "stddev: 0.00023892368842384356",
            "extra": "mean: 2.0428948766604775 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.63800703594584,
            "unit": "iter/sec",
            "range": "stddev: 0.0011421177748549372",
            "extra": "mean: 53.65380526315764 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.679153056482477,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813091708191688",
            "extra": "mean: 50.81519499999985 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.8658707885705,
            "unit": "iter/sec",
            "range": "stddev: 0.00039945009348275916",
            "extra": "mean: 5.654002072539042 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.23118796445505,
            "unit": "iter/sec",
            "range": "stddev: 0.0005017883456766778",
            "extra": "mean: 3.27620518292663 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 888.0514606516103,
            "unit": "iter/sec",
            "range": "stddev: 0.00024238567111370247",
            "extra": "mean: 1.126060869565202 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 853.4671688082732,
            "unit": "iter/sec",
            "range": "stddev: 0.0001900577073195882",
            "extra": "mean: 1.171691233766304 msec\nrounds: 924"
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
        "date": 1644600148786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.79973168914344,
            "unit": "iter/sec",
            "range": "stddev: 0.00002175817445281438",
            "extra": "mean: 5.787046022727288 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.43761954690038,
            "unit": "iter/sec",
            "range": "stddev: 0.000028273360477031998",
            "extra": "mean: 4.396809999999969 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.56605621260275,
            "unit": "iter/sec",
            "range": "stddev: 0.00001538221158879345",
            "extra": "mean: 2.8688966759002623 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.228416161983,
            "unit": "iter/sec",
            "range": "stddev: 0.000009627373957439304",
            "extra": "mean: 1.4139703342617964 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.31018527276387,
            "unit": "iter/sec",
            "range": "stddev: 0.000023405122634275524",
            "extra": "mean: 6.237906832298425 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.75732852244863,
            "unit": "iter/sec",
            "range": "stddev: 0.00011689419312912781",
            "extra": "mean: 4.744793488372034 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.37093110061073,
            "unit": "iter/sec",
            "range": "stddev: 0.000016647840701924226",
            "extra": "mean: 2.9640965116279685 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.922358663507,
            "unit": "iter/sec",
            "range": "stddev: 0.00018475301006648675",
            "extra": "mean: 1.5315756716417863 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.92461222087871,
            "unit": "iter/sec",
            "range": "stddev: 0.00006225166786180183",
            "extra": "mean: 45.61084090909049 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.72340157202378,
            "unit": "iter/sec",
            "range": "stddev: 0.0037116186067757784",
            "extra": "mean: 44.007495833333486 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.3056109489215,
            "unit": "iter/sec",
            "range": "stddev: 0.000029554421912714772",
            "extra": "mean: 3.8564533807831167 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 431.0750993427949,
            "unit": "iter/sec",
            "range": "stddev: 0.00007140248989053285",
            "extra": "mean: 2.3197814058955673 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1316.71543474531,
            "unit": "iter/sec",
            "range": "stddev: 0.000025099627927510598",
            "extra": "mean: 759.4655410061539 usec\nrounds: 1451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1173.7831932430752,
            "unit": "iter/sec",
            "range": "stddev: 0.00002609885274347011",
            "extra": "mean: 851.9460883036455 usec\nrounds: 1291"
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
        "date": 1644600583003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.94505672012627,
            "unit": "iter/sec",
            "range": "stddev: 0.000016077567249379242",
            "extra": "mean: 5.026513432835826 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.4619069818754,
            "unit": "iter/sec",
            "range": "stddev: 0.000013056941991096781",
            "extra": "mean: 3.88406973180074 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.43836572757266,
            "unit": "iter/sec",
            "range": "stddev: 0.00001082193822394419",
            "extra": "mean: 2.5288390977443114 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 799.4838406297782,
            "unit": "iter/sec",
            "range": "stddev: 0.000011133029804864761",
            "extra": "mean: 1.2508070197044494 msec\nrounds: 812"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.70931846165044,
            "unit": "iter/sec",
            "range": "stddev: 0.00002460813874227802",
            "extra": "mean: 5.473174594594604 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.72007210786333,
            "unit": "iter/sec",
            "range": "stddev: 0.000024451273550117288",
            "extra": "mean: 4.137016803278826 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.06253609890763,
            "unit": "iter/sec",
            "range": "stddev: 0.000009769881617501998",
            "extra": "mean: 2.6037426356588704 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.1145706081288,
            "unit": "iter/sec",
            "range": "stddev: 0.00001013927750283939",
            "extra": "mean: 1.3295846657929273 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.0455252512492,
            "unit": "iter/sec",
            "range": "stddev: 0.00009457125144540367",
            "extra": "mean: 39.927291999999994 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.469000095288937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007032626346793024",
            "extra": "mean: 37.78004444444368 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.0659567618838,
            "unit": "iter/sec",
            "range": "stddev: 0.00002019494352513638",
            "extra": "mean: 3.377625752508477 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.2180586721312,
            "unit": "iter/sec",
            "range": "stddev: 0.000015560241934653175",
            "extra": "mean: 2.060929065040661 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1443.3620213840911,
            "unit": "iter/sec",
            "range": "stddev: 0.000011074002427066753",
            "extra": "mean: 692.8268758527154 usec\nrounds: 1466"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1303.1321385903873,
            "unit": "iter/sec",
            "range": "stddev: 0.00000538793389168355",
            "extra": "mean: 767.3818873669336 usec\nrounds: 1314"
          }
        ]
      }
    ]
  }
}