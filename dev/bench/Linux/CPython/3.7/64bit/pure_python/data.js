window.BENCHMARK_DATA = {
  "lastUpdate": 1643757206851,
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
      }
    ]
  }
}