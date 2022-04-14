window.BENCHMARK_DATA = {
  "lastUpdate": 1649968446511,
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
        "date": 1644601097580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.1325823916931,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656841867290452",
            "extra": "mean: 7.865804195804177 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.22073359202324,
            "unit": "iter/sec",
            "range": "stddev: 0.00030724421975553574",
            "extra": "mean: 5.980119680851 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.03614724146342,
            "unit": "iter/sec",
            "range": "stddev: 0.00027349828986951755",
            "extra": "mean: 4.047990592334483 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.7742273949207,
            "unit": "iter/sec",
            "range": "stddev: 0.0002655091582707768",
            "extra": "mean: 1.8595164086687228 msec\nrounds: 646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.23694182547973,
            "unit": "iter/sec",
            "range": "stddev: 0.00037998332379118996",
            "extra": "mean: 8.386662595419821 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.85742151542846,
            "unit": "iter/sec",
            "range": "stddev: 0.00043326398144596543",
            "extra": "mean: 6.178277094972001 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.5366247886527,
            "unit": "iter/sec",
            "range": "stddev: 0.00038303652371496995",
            "extra": "mean: 4.056192465753376 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.3685478423938,
            "unit": "iter/sec",
            "range": "stddev: 0.00017553474471832325",
            "extra": "mean: 1.9070556464812296 msec\nrounds: 611"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.435293660346023,
            "unit": "iter/sec",
            "range": "stddev: 0.0029051275444089866",
            "extra": "mean: 51.452785714285746 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.722509119081163,
            "unit": "iter/sec",
            "range": "stddev: 0.0016250094661924568",
            "extra": "mean: 48.256704545455165 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.21997629529974,
            "unit": "iter/sec",
            "range": "stddev: 0.00024428730957627926",
            "extra": "mean: 5.428292957746485 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.6722835210975,
            "unit": "iter/sec",
            "range": "stddev: 0.0009292296175940297",
            "extra": "mean: 4.35402994505491 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 981.0504796873145,
            "unit": "iter/sec",
            "range": "stddev: 0.00019297716444359572",
            "extra": "mean: 1.0193155405405083 msec\nrounds: 1184"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 909.1186133455943,
            "unit": "iter/sec",
            "range": "stddev: 0.00013333973432288657",
            "extra": "mean: 1.0999664788733765 msec\nrounds: 1065"
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
        "date": 1644602776414,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.26509256167478,
            "unit": "iter/sec",
            "range": "stddev: 0.0010868161416302394",
            "extra": "mean: 8.314964705882351 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.10686863023653,
            "unit": "iter/sec",
            "range": "stddev: 0.0013051771324493712",
            "extra": "mean: 6.207060000000024 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.87556868929173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005488902174912676",
            "extra": "mean: 4.203878546712714 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.0892166780071,
            "unit": "iter/sec",
            "range": "stddev: 0.00034293583137286936",
            "extra": "mean: 1.9339022508038544 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.44788969620964,
            "unit": "iter/sec",
            "range": "stddev: 0.0011220373027432643",
            "extra": "mean: 9.136768217054362 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.83876329927247,
            "unit": "iter/sec",
            "range": "stddev: 0.0011647049132963462",
            "extra": "mean: 6.904229069767424 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.4407097991197,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521308328647182",
            "extra": "mean: 4.358424452554743 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.4030687356755,
            "unit": "iter/sec",
            "range": "stddev: 0.0004221900318000378",
            "extra": "mean: 2.026740536013401 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.93486104841563,
            "unit": "iter/sec",
            "range": "stddev: 0.002616038304161933",
            "extra": "mean: 52.812640000000144 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.280105124690156,
            "unit": "iter/sec",
            "range": "stddev: 0.002175070983387208",
            "extra": "mean: 49.30940909090964 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.63204902004878,
            "unit": "iter/sec",
            "range": "stddev: 0.0010968776152939365",
            "extra": "mean: 5.536116129032051 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.8867228850587,
            "unit": "iter/sec",
            "range": "stddev: 0.0012538058220807817",
            "extra": "mean: 3.2799066831683477 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 942.6602728424072,
            "unit": "iter/sec",
            "range": "stddev: 0.00031915299912602243",
            "extra": "mean: 1.0608275630251143 msec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 846.2547672751141,
            "unit": "iter/sec",
            "range": "stddev: 0.0004516846689578135",
            "extra": "mean: 1.1816772426818174 msec\nrounds: 1059"
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
        "date": 1644937335730,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.63735136447355,
            "unit": "iter/sec",
            "range": "stddev: 0.000014382957502822181",
            "extra": "mean: 4.9841168316831554 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.61104640752154,
            "unit": "iter/sec",
            "range": "stddev: 0.000012875825353296808",
            "extra": "mean: 3.8224685606060445 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.7080308856091,
            "unit": "iter/sec",
            "range": "stddev: 0.000011645698552489868",
            "extra": "mean: 2.4893701970443334 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 812.0151337466164,
            "unit": "iter/sec",
            "range": "stddev: 0.000008654546663447032",
            "extra": "mean: 1.2315041412910943 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.87475977463,
            "unit": "iter/sec",
            "range": "stddev: 0.000019750499131056282",
            "extra": "mean: 5.409067204301125 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.51584615025098,
            "unit": "iter/sec",
            "range": "stddev: 0.000009548945945651419",
            "extra": "mean: 4.106508943089449 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.63773573523946,
            "unit": "iter/sec",
            "range": "stddev: 0.00001126900698873314",
            "extra": "mean: 2.5730903307888062 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 755.1468439797433,
            "unit": "iter/sec",
            "range": "stddev: 0.000007841998180350208",
            "extra": "mean: 1.3242457516340025 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.06002879297062,
            "unit": "iter/sec",
            "range": "stddev: 0.000049617081064238834",
            "extra": "mean: 39.9041840000001 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.539103353786082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000616035549077228",
            "extra": "mean: 37.680248148147754 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.28960342246427,
            "unit": "iter/sec",
            "range": "stddev: 0.000012179576678556619",
            "extra": "mean: 3.341245364238206 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.4299163888831,
            "unit": "iter/sec",
            "range": "stddev: 0.000009427833383350603",
            "extra": "mean: 2.026630260520884 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1471.5918806015368,
            "unit": "iter/sec",
            "range": "stddev: 0.000005656077235042188",
            "extra": "mean: 679.5362309224171 usec\nrounds: 1507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1311.9493151890424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066464907709553015",
            "extra": "mean: 762.2245679940062 usec\nrounds: 1331"
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
        "date": 1644938538541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.10700380207703,
            "unit": "iter/sec",
            "range": "stddev: 0.000028493940998612866",
            "extra": "mean: 5.047777114427873 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.13960891619985,
            "unit": "iter/sec",
            "range": "stddev: 0.000015427251376846107",
            "extra": "mean: 3.844089733840322 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.1290505673511,
            "unit": "iter/sec",
            "range": "stddev: 0.0000166992407873019",
            "extra": "mean: 2.524429850746271 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.4399661740397,
            "unit": "iter/sec",
            "range": "stddev: 0.000009048622354039191",
            "extra": "mean: 1.246199145299191 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.7137742297648,
            "unit": "iter/sec",
            "range": "stddev: 0.00007234633994192917",
            "extra": "mean: 5.533612499999975 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.58433571111254,
            "unit": "iter/sec",
            "range": "stddev: 0.00002182436163530424",
            "extra": "mean: 4.139341224489835 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.44688388291297,
            "unit": "iter/sec",
            "range": "stddev: 0.000018522407144644838",
            "extra": "mean: 2.607923136246829 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.9197601779783,
            "unit": "iter/sec",
            "range": "stddev: 0.000009558749379214812",
            "extra": "mean: 1.340626771653559 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.640427174330195,
            "unit": "iter/sec",
            "range": "stddev: 0.00018104934253770005",
            "extra": "mean: 40.58371200000039 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.150895899519423,
            "unit": "iter/sec",
            "range": "stddev: 0.00015842014498933374",
            "extra": "mean: 38.23960769230767 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 291.4685960312149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000289109995756591",
            "extra": "mean: 3.430901351351433 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.18077441232475,
            "unit": "iter/sec",
            "range": "stddev: 0.000012833407443350037",
            "extra": "mean: 2.078221020408222 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1446.793194710589,
            "unit": "iter/sec",
            "range": "stddev: 0.000006388443582866059",
            "extra": "mean: 691.1837874659317 usec\nrounds: 1468"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.9648792786872,
            "unit": "iter/sec",
            "range": "stddev: 0.000006878034947250148",
            "extra": "mean: 780.0525709898246 usec\nrounds: 1303"
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
        "date": 1644939072194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 170.9982684807783,
            "unit": "iter/sec",
            "range": "stddev: 0.000048630288993960714",
            "extra": "mean: 5.848012432432371 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.007036831741,
            "unit": "iter/sec",
            "range": "stddev: 0.00008924027748732888",
            "extra": "mean: 4.405149787234155 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.04945994393114,
            "unit": "iter/sec",
            "range": "stddev: 0.00006145988536599811",
            "extra": "mean: 2.8649234986945205 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 703.4251826393314,
            "unit": "iter/sec",
            "range": "stddev: 0.000029095890894917864",
            "extra": "mean: 1.4216152970922737 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.465848114613,
            "unit": "iter/sec",
            "range": "stddev: 0.00014331566221089835",
            "extra": "mean: 6.155139751552837 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.45156771397345,
            "unit": "iter/sec",
            "range": "stddev: 0.00011640518473009321",
            "extra": "mean: 4.729215350877328 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.15673209283665,
            "unit": "iter/sec",
            "range": "stddev: 0.00007762690720505811",
            "extra": "mean: 2.9484893129771996 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 654.7321822223906,
            "unit": "iter/sec",
            "range": "stddev: 0.00004989031555902597",
            "extra": "mean: 1.527342060085773 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.684963118591927,
            "unit": "iter/sec",
            "range": "stddev: 0.0004728624838328393",
            "extra": "mean: 46.11490434782594 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.827897059880996,
            "unit": "iter/sec",
            "range": "stddev: 0.0010212536758491416",
            "extra": "mean: 43.806050000000006 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.46533069599644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000896151302629552",
            "extra": "mean: 3.8991625000002794 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 430.25670519947244,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798723378331653",
            "extra": "mean: 2.3241938775512803 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1301.0813844993963,
            "unit": "iter/sec",
            "range": "stddev: 0.000032847808928411654",
            "extra": "mean: 768.5914285713648 usec\nrounds: 1470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1107.0354466908905,
            "unit": "iter/sec",
            "range": "stddev: 0.000022606600499131394",
            "extra": "mean: 903.3134422110539 usec\nrounds: 1592"
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
        "date": 1645453900035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.2712549131004,
            "unit": "iter/sec",
            "range": "stddev: 0.00007878099696747644",
            "extra": "mean: 5.738180978260848 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.84838611261787,
            "unit": "iter/sec",
            "range": "stddev: 0.00007753545356181951",
            "extra": "mean: 4.408230612244931 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.8563509934587,
            "unit": "iter/sec",
            "range": "stddev: 0.00007837907114163118",
            "extra": "mean: 2.7944173611111323 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 721.2395511421565,
            "unit": "iter/sec",
            "range": "stddev: 0.00002971641132607475",
            "extra": "mean: 1.3865018888889242 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.21850079497332,
            "unit": "iter/sec",
            "range": "stddev: 0.0002418175175830228",
            "extra": "mean: 6.016177472527422 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.31649583909117,
            "unit": "iter/sec",
            "range": "stddev: 0.000253725436029895",
            "extra": "mean: 4.379885020242962 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 369.42831006637584,
            "unit": "iter/sec",
            "range": "stddev: 0.00020101988825085555",
            "extra": "mean: 2.7068851323828653 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 722.5882046199232,
            "unit": "iter/sec",
            "range": "stddev: 0.00011282553237421416",
            "extra": "mean: 1.3839140932642178 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.561361397210224,
            "unit": "iter/sec",
            "range": "stddev: 0.001679784272047938",
            "extra": "mean: 42.442369230769685 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.907689790945632,
            "unit": "iter/sec",
            "range": "stddev: 0.0017264009311502044",
            "extra": "mean: 38.59857857142807 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.6272944762442,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718356743333999",
            "extra": "mean: 3.4527132596683563 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.6503539017169,
            "unit": "iter/sec",
            "range": "stddev: 0.00011987405550530391",
            "extra": "mean: 2.156797663551394 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1487.2005894553013,
            "unit": "iter/sec",
            "range": "stddev: 0.00006810050060644353",
            "extra": "mean: 672.4042520493202 usec\nrounds: 1952"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1300.8136570239924,
            "unit": "iter/sec",
            "range": "stddev: 0.000088221638743865",
            "extra": "mean: 768.7496165190984 usec\nrounds: 1695"
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
        "date": 1645921185262,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.4944840441447,
            "unit": "iter/sec",
            "range": "stddev: 0.000015948289420636735",
            "extra": "mean: 5.115233838383847 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.5160503079272,
            "unit": "iter/sec",
            "range": "stddev: 0.000012691489469708279",
            "extra": "mean: 3.898391538461548 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.61028368604883,
            "unit": "iter/sec",
            "range": "stddev: 0.000010902560060770642",
            "extra": "mean: 2.553559090909096 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.5107149769321,
            "unit": "iter/sec",
            "range": "stddev: 0.000009363022121010486",
            "extra": "mean: 1.2861559085133236 msec\nrounds: 787"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.58429384152933,
            "unit": "iter/sec",
            "range": "stddev: 0.000016252868058784758",
            "extra": "mean: 5.4175790322578985 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.72364060891613,
            "unit": "iter/sec",
            "range": "stddev: 0.00001209614077358653",
            "extra": "mean: 4.119911836734647 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.91767636057,
            "unit": "iter/sec",
            "range": "stddev: 0.000011198245336309136",
            "extra": "mean: 2.6115273901807594 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.0345948398622,
            "unit": "iter/sec",
            "range": "stddev: 0.000008503271819592076",
            "extra": "mean: 1.3458323568575143 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.85348127185787,
            "unit": "iter/sec",
            "range": "stddev: 0.0004360218919582131",
            "extra": "mean: 40.23581200000024 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.341049667415113,
            "unit": "iter/sec",
            "range": "stddev: 0.00009872738790501477",
            "extra": "mean: 37.963559259259064 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.3484536241293,
            "unit": "iter/sec",
            "range": "stddev: 0.000012227184637127087",
            "extra": "mean: 3.374406000000055 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.53300960790295,
            "unit": "iter/sec",
            "range": "stddev: 0.000014081205991455379",
            "extra": "mean: 2.038598790322651 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1394.7537641676552,
            "unit": "iter/sec",
            "range": "stddev: 0.000005973159493029508",
            "extra": "mean: 716.9724331927281 usec\nrounds: 1422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1264.0707926936286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070623188237642265",
            "extra": "mean: 791.0949337489905 usec\nrounds: 1283"
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
        "date": 1646063465393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.51196262640806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000983300556074606",
            "extra": "mean: 5.79669945652175 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.78524081652859,
            "unit": "iter/sec",
            "range": "stddev: 0.00009937932280426846",
            "extra": "mean: 4.4094580246913395 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.27095725601214,
            "unit": "iter/sec",
            "range": "stddev: 0.00005659836684044504",
            "extra": "mean: 2.863106648936201 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 712.8594536918342,
            "unit": "iter/sec",
            "range": "stddev: 0.00003372374909921952",
            "extra": "mean: 1.4028010638297508 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.36114230066886,
            "unit": "iter/sec",
            "range": "stddev: 0.00011470809937094005",
            "extra": "mean: 6.275055421686713 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.62540931388875,
            "unit": "iter/sec",
            "range": "stddev: 0.00009206440611158036",
            "extra": "mean: 4.747765254237346 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.3827316178969,
            "unit": "iter/sec",
            "range": "stddev: 0.000052747533821550455",
            "extra": "mean: 2.9639928374655247 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.1620519819802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000317602897121893",
            "extra": "mean: 1.531013623595494 msec\nrounds: 712"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.199987915484858,
            "unit": "iter/sec",
            "range": "stddev: 0.0003839111810571435",
            "extra": "mean: 45.04506956521736 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.374475656944497,
            "unit": "iter/sec",
            "range": "stddev: 0.0004302339696294922",
            "extra": "mean: 42.781708333333356 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.97702052125004,
            "unit": "iter/sec",
            "range": "stddev: 0.00010378048270654574",
            "extra": "mean: 3.802613620071775 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 439.13695756751514,
            "unit": "iter/sec",
            "range": "stddev: 0.000043262069403468426",
            "extra": "mean: 2.277193897637857 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1328.4733687810105,
            "unit": "iter/sec",
            "range": "stddev: 0.00002402661344753659",
            "extra": "mean: 752.7437308868199 usec\nrounds: 1635"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1145.9317882745797,
            "unit": "iter/sec",
            "range": "stddev: 0.00002811259037937635",
            "extra": "mean: 872.6522906792662 usec\nrounds: 1266"
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
        "date": 1646086288401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.94452691446153,
            "unit": "iter/sec",
            "range": "stddev: 0.0008252783322098922",
            "extra": "mean: 8.337187412587406 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.63918233053724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062424620901162",
            "extra": "mean: 6.343600526315874 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.70168941278936,
            "unit": "iter/sec",
            "range": "stddev: 0.0006561728568331208",
            "extra": "mean: 4.22472692307691 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.2455443417121,
            "unit": "iter/sec",
            "range": "stddev: 0.00021518339124285753",
            "extra": "mean: 2.0151314432989755 msec\nrounds: 582"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.91145377782877,
            "unit": "iter/sec",
            "range": "stddev: 0.0008089487048545403",
            "extra": "mean: 8.480940298507564 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.3690796852218,
            "unit": "iter/sec",
            "range": "stddev: 0.0008825428217400323",
            "extra": "mean: 6.436287078651703 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.07826801536757,
            "unit": "iter/sec",
            "range": "stddev: 0.0008594237970827614",
            "extra": "mean: 4.290404285714303 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.80319967688206,
            "unit": "iter/sec",
            "range": "stddev: 0.00034610867475471654",
            "extra": "mean: 2.0755362369337584 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.62567651949432,
            "unit": "iter/sec",
            "range": "stddev: 0.0016565409972772146",
            "extra": "mean: 53.68932500000003 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.68590317756176,
            "unit": "iter/sec",
            "range": "stddev: 0.0016553370751540809",
            "extra": "mean: 48.342099999999604 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.57895628447778,
            "unit": "iter/sec",
            "range": "stddev: 0.0005318463780031016",
            "extra": "mean: 5.44724744186027 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.73406021888087,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591574031146316",
            "extra": "mean: 3.260153108808376 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 881.8340042367614,
            "unit": "iter/sec",
            "range": "stddev: 0.00022689868085894524",
            "extra": "mean: 1.1340002712477761 msec\nrounds: 1106"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 815.091198213016,
            "unit": "iter/sec",
            "range": "stddev: 0.000323694403746476",
            "extra": "mean: 1.2268565802113591 msec\nrounds: 1041"
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
        "date": 1646432241428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.2378505219849,
            "unit": "iter/sec",
            "range": "stddev: 0.00045862100587165406",
            "extra": "mean: 7.394379577464782 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.8025531231522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004917001865122246",
            "extra": "mean: 6.180372192513387 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.97440552726934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002762636059044558",
            "extra": "mean: 3.9066405797101016 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.7603581651475,
            "unit": "iter/sec",
            "range": "stddev: 0.0002505761100561204",
            "extra": "mean: 1.9388849572649747 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.54205045283186,
            "unit": "iter/sec",
            "range": "stddev: 0.0005073354023543655",
            "extra": "mean: 8.029416541353095 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.1518482261007,
            "unit": "iter/sec",
            "range": "stddev: 0.00042324449569507004",
            "extra": "mean: 6.205327528089974 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.8100351349533,
            "unit": "iter/sec",
            "range": "stddev: 0.00028359649104778387",
            "extra": "mean: 4.035349090909157 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.3855197898668,
            "unit": "iter/sec",
            "range": "stddev: 0.0002759768981591452",
            "extra": "mean: 1.97868747884939 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.973502849216455,
            "unit": "iter/sec",
            "range": "stddev: 0.006096208767086315",
            "extra": "mean: 62.60367619047645 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.817550305176795,
            "unit": "iter/sec",
            "range": "stddev: 0.002426960521689973",
            "extra": "mean: 48.036391666666255 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.79277052002757,
            "unit": "iter/sec",
            "range": "stddev: 0.00040963879951742154",
            "extra": "mean: 5.030364018691786 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 351.6180666425717,
            "unit": "iter/sec",
            "range": "stddev: 0.0003569169920290304",
            "extra": "mean: 2.8439949333335144 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1017.4835547688182,
            "unit": "iter/sec",
            "range": "stddev: 0.0001026120531145082",
            "extra": "mean: 982.8168674698722 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 968.9447665494076,
            "unit": "iter/sec",
            "range": "stddev: 0.00012954063057993902",
            "extra": "mean: 1.0320505714285302 msec\nrounds: 1050"
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
        "date": 1646433352645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.17895205525724,
            "unit": "iter/sec",
            "range": "stddev: 0.000015889939523827067",
            "extra": "mean: 4.995530198019823 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.3197478739555,
            "unit": "iter/sec",
            "range": "stddev: 0.000010541695151879869",
            "extra": "mean: 3.826729545454552 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.7466026469044,
            "unit": "iter/sec",
            "range": "stddev: 0.000011413143095318188",
            "extra": "mean: 2.5141635235731727 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.9890048765845,
            "unit": "iter/sec",
            "range": "stddev: 0.000009061814684219093",
            "extra": "mean: 1.2547224539877462 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.9944565965939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000185257842718804",
            "extra": "mean: 5.405567379679051 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.4948608670281,
            "unit": "iter/sec",
            "range": "stddev: 0.000011595903035846766",
            "extra": "mean: 4.106862857142998 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.11161958115076,
            "unit": "iter/sec",
            "range": "stddev: 0.00006538834547449607",
            "extra": "mean: 2.6308061855670477 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.1660184608079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000089123269924669",
            "extra": "mean: 1.3419828269485092 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.096662304532156,
            "unit": "iter/sec",
            "range": "stddev: 0.00003742513504729105",
            "extra": "mean: 39.845935999999966 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.511108645468834,
            "unit": "iter/sec",
            "range": "stddev: 0.00005074510319785326",
            "extra": "mean: 37.720037037037145 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.8077471943991,
            "unit": "iter/sec",
            "range": "stddev: 0.00001284978795792588",
            "extra": "mean: 3.346633443708598 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.23357519863947,
            "unit": "iter/sec",
            "range": "stddev: 0.000011290331890073352",
            "extra": "mean: 2.027436999999992 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1466.2100216197116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060611283746495515",
            "extra": "mean: 682.0305312708934 usec\nrounds: 1487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1291.701002505142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058920582847147134",
            "extra": "mean: 774.1729688686366 usec\nrounds: 1317"
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
        "date": 1646433558423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.47269512427093,
            "unit": "iter/sec",
            "range": "stddev: 0.000021912465190403664",
            "extra": "mean: 5.900655555555542 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.43518881189027,
            "unit": "iter/sec",
            "range": "stddev: 0.00002175254438684583",
            "extra": "mean: 4.495691555555462 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.04950466244765,
            "unit": "iter/sec",
            "range": "stddev: 0.000013548024377536058",
            "extra": "mean: 2.932125648415018 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 694.066873588019,
            "unit": "iter/sec",
            "range": "stddev: 0.000010245572532161011",
            "extra": "mean: 1.4407833568405908 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.51312692467562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000233967603469754",
            "extra": "mean: 6.348677215189881 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.44702795235287,
            "unit": "iter/sec",
            "range": "stddev: 0.000017718450799896546",
            "extra": "mean: 4.797381904761824 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.5625473616998,
            "unit": "iter/sec",
            "range": "stddev: 0.000013329027645798425",
            "extra": "mean: 3.016022189349105 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 646.3791762878933,
            "unit": "iter/sec",
            "range": "stddev: 0.000010126768797230034",
            "extra": "mean: 1.5470795419848211 msec\nrounds: 655"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.364668074747843,
            "unit": "iter/sec",
            "range": "stddev: 0.0003183218521441565",
            "extra": "mean: 49.10465499999965 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.136835874730647,
            "unit": "iter/sec",
            "range": "stddev: 0.00008974292555913497",
            "extra": "mean: 43.22112173912984 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.23385208130307,
            "unit": "iter/sec",
            "range": "stddev: 0.000017474309788464794",
            "extra": "mean: 3.917975581395279 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 431.53224813951033,
            "unit": "iter/sec",
            "range": "stddev: 0.000014201392212777421",
            "extra": "mean: 2.3173239179953695 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1294.5079103362793,
            "unit": "iter/sec",
            "range": "stddev: 0.000006789548747611875",
            "extra": "mean: 772.4943138742398 usec\nrounds: 1319"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1130.9311532431736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075059525987667435",
            "extra": "mean: 884.2271230501502 usec\nrounds: 1154"
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
        "date": 1646663655759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.05971928279064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007204938372309467",
            "extra": "mean: 7.296089655172387 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 193.31253127838733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006002282341899433",
            "extra": "mean: 5.172970388349581 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.66481697959622,
            "unit": "iter/sec",
            "range": "stddev: 0.0007725825510238461",
            "extra": "mean: 3.926730091185388 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.494185921747,
            "unit": "iter/sec",
            "range": "stddev: 0.0006141391252836592",
            "extra": "mean: 1.780962341325767 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.01108530310185,
            "unit": "iter/sec",
            "range": "stddev: 0.0005265383951003429",
            "extra": "mean: 7.298679503105583 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.81262298713787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191540627989161",
            "extra": "mean: 5.854368269230896 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.8047478775386,
            "unit": "iter/sec",
            "range": "stddev: 0.0004438241485665508",
            "extra": "mean: 3.8342860248447312 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 593.6528401146919,
            "unit": "iter/sec",
            "range": "stddev: 0.00019789197003818048",
            "extra": "mean: 1.6844861717612656 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.54521123539609,
            "unit": "iter/sec",
            "range": "stddev: 0.00365120201809732",
            "extra": "mean: 44.355317391304595 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.532448979775676,
            "unit": "iter/sec",
            "range": "stddev: 0.002967115509492042",
            "extra": "mean: 44.38044000000019 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.9146162020445,
            "unit": "iter/sec",
            "range": "stddev: 0.0003585052903011478",
            "extra": "mean: 4.5679910156253 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 369.6527395284158,
            "unit": "iter/sec",
            "range": "stddev: 0.00034343971023968755",
            "extra": "mean: 2.705241685144142 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1133.604744952689,
            "unit": "iter/sec",
            "range": "stddev: 0.00013210901554733663",
            "extra": "mean: 882.1416851441769 usec\nrounds: 1353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1003.3605628108467,
            "unit": "iter/sec",
            "range": "stddev: 0.0001878000497452539",
            "extra": "mean: 996.6506927465513 usec\nrounds: 1227"
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
        "date": 1646751888597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.13492704963699,
            "unit": "iter/sec",
            "range": "stddev: 0.00001493277789349895",
            "extra": "mean: 5.204675773195862 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.58107980450472,
            "unit": "iter/sec",
            "range": "stddev: 0.00001626471274738158",
            "extra": "mean: 3.9126526923076823 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.2415354013633,
            "unit": "iter/sec",
            "range": "stddev: 0.000010298992663149468",
            "extra": "mean: 2.5237132169576166 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.6911707694316,
            "unit": "iter/sec",
            "range": "stddev: 0.000009670639711340468",
            "extra": "mean: 1.261525341614872 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.61143555712937,
            "unit": "iter/sec",
            "range": "stddev: 0.000013999731969214733",
            "extra": "mean: 5.446283870967597 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.0433543979932,
            "unit": "iter/sec",
            "range": "stddev: 0.00001931770162031194",
            "extra": "mean: 4.183341563786202 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.894258224277,
            "unit": "iter/sec",
            "range": "stddev: 0.000009901245656343461",
            "extra": "mean: 2.6116871134020996 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.4810953649705,
            "unit": "iter/sec",
            "range": "stddev: 0.000011507914540122302",
            "extra": "mean: 1.3468356382978945 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.974929500521917,
            "unit": "iter/sec",
            "range": "stddev: 0.00003808590754113331",
            "extra": "mean: 37.07145925925967 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.024176457028453,
            "unit": "iter/sec",
            "range": "stddev: 0.00012156886670543347",
            "extra": "mean: 35.6834750000013 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.47086256872,
            "unit": "iter/sec",
            "range": "stddev: 0.00001131100092671925",
            "extra": "mean: 3.339223026315385 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.5623418151844,
            "unit": "iter/sec",
            "range": "stddev: 0.000010931734082369608",
            "extra": "mean: 1.9358747609940563 msec\nrounds: 523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1429.7043196439204,
            "unit": "iter/sec",
            "range": "stddev: 0.000005096343857484512",
            "extra": "mean: 699.4453232463186 usec\nrounds: 1454"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1289.5046994622032,
            "unit": "iter/sec",
            "range": "stddev: 0.000005089878357447417",
            "extra": "mean: 775.4915514592982 usec\nrounds: 1302"
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
        "date": 1646752715986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.3590422030309,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315356189751118",
            "extra": "mean: 7.333580405405435 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.15232322752126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007457445654485771",
            "extra": "mean: 5.581842211055294 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.37046389407814,
            "unit": "iter/sec",
            "range": "stddev: 0.0004842132269802206",
            "extra": "mean: 3.931274035087689 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.18345079707103,
            "unit": "iter/sec",
            "range": "stddev: 0.0022230586847489316",
            "extra": "mean: 2.8803216216215928 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.53379948043897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007054753746899287",
            "extra": "mean: 8.02994852941168 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.87766394633425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005486634469433635",
            "extra": "mean: 5.886589071038252 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.545444260575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480977562678565",
            "extra": "mean: 3.897944876324886 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.8845607237625,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113609577787095",
            "extra": "mean: 1.8522478187918774 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.416219907187692,
            "unit": "iter/sec",
            "range": "stddev: 0.00218350195623927",
            "extra": "mean: 48.98066363636404 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.861346052264448,
            "unit": "iter/sec",
            "range": "stddev: 0.0025606800319298807",
            "extra": "mean: 45.74283750000004 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.65374151577637,
            "unit": "iter/sec",
            "range": "stddev: 0.0013872597188529989",
            "extra": "mean: 6.148029493087353 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.4606645579286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006779493229446787",
            "extra": "mean: 2.9371968750000845 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1056.1973252992652,
            "unit": "iter/sec",
            "range": "stddev: 0.0003417064212255883",
            "extra": "mean: 946.7927782497062 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 948.5792332157286,
            "unit": "iter/sec",
            "range": "stddev: 0.0002587866530317352",
            "extra": "mean: 1.0542081936687067 msec\nrounds: 1074"
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
        "date": 1646837125228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.78259589566008,
            "unit": "iter/sec",
            "range": "stddev: 0.000034704438007365795",
            "extra": "mean: 5.821311494252858 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.5019328329779,
            "unit": "iter/sec",
            "range": "stddev: 0.000012751709123619076",
            "extra": "mean: 4.414973362445425 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.12121137413806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001490949236690749",
            "extra": "mean: 2.8808380681818053 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 708.6508852082902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000091645602154529",
            "extra": "mean: 1.411132083333354 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.64098339245018,
            "unit": "iter/sec",
            "range": "stddev: 0.00001907690080336188",
            "extra": "mean: 6.264055624999942 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.6804503774382,
            "unit": "iter/sec",
            "range": "stddev: 0.00001496023000166762",
            "extra": "mean: 4.746524882629025 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.5982388416719,
            "unit": "iter/sec",
            "range": "stddev: 0.000014388017426173655",
            "extra": "mean: 2.9797534201953266 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 655.4446420495426,
            "unit": "iter/sec",
            "range": "stddev: 0.000013458143905527715",
            "extra": "mean: 1.5256818590705845 msec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.35581259109593,
            "unit": "iter/sec",
            "range": "stddev: 0.00008664265780487123",
            "extra": "mean: 46.82565909090899 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.693649349965067,
            "unit": "iter/sec",
            "range": "stddev: 0.00005392847041210709",
            "extra": "mean: 44.06519130434785 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.5886742120151,
            "unit": "iter/sec",
            "range": "stddev: 0.00001779681883876023",
            "extra": "mean: 3.9125364341085134 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 430.7830024488197,
            "unit": "iter/sec",
            "range": "stddev: 0.000013051110995055778",
            "extra": "mean: 2.3213543577982922 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1320.3421403180441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069582140346469405",
            "extra": "mean: 757.3794469357161 usec\nrounds: 1338"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1159.5128711815191,
            "unit": "iter/sec",
            "range": "stddev: 0.000007660210614507477",
            "extra": "mean: 862.4311336716953 usec\nrounds: 1182"
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
        "date": 1647269759775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.09521545578426,
            "unit": "iter/sec",
            "range": "stddev: 0.000015072186229570956",
            "extra": "mean: 5.048077500000017 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.90215220557207,
            "unit": "iter/sec",
            "range": "stddev: 0.000024603905107933394",
            "extra": "mean: 3.8328545454545435 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.9222614165688,
            "unit": "iter/sec",
            "range": "stddev: 0.000010018593821545572",
            "extra": "mean: 2.500485960591165 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 805.6758932132155,
            "unit": "iter/sec",
            "range": "stddev: 0.000009906312321329148",
            "extra": "mean: 1.2411938949938994 msec\nrounds: 819"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.6219265536312,
            "unit": "iter/sec",
            "range": "stddev: 0.00001828782363154621",
            "extra": "mean: 5.416474731182636 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.10216555187003,
            "unit": "iter/sec",
            "range": "stddev: 0.000008576269999034041",
            "extra": "mean: 4.096645344129513 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.46699601581366,
            "unit": "iter/sec",
            "range": "stddev: 0.000009901641772336387",
            "extra": "mean: 2.5875430769231365 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 759.3471965636305,
            "unit": "iter/sec",
            "range": "stddev: 0.000008433234493906559",
            "extra": "mean: 1.316920645161299 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.858935484698378,
            "unit": "iter/sec",
            "range": "stddev: 0.00003540502177249126",
            "extra": "mean: 40.22698400000024 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.182668624190647,
            "unit": "iter/sec",
            "range": "stddev: 0.00006980920558593929",
            "extra": "mean: 38.193203846153466 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.29109496386593,
            "unit": "iter/sec",
            "range": "stddev: 0.00001006676391666651",
            "extra": "mean: 3.341228712871434 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.55323002744393,
            "unit": "iter/sec",
            "range": "stddev: 0.000009602086663048188",
            "extra": "mean: 1.9977895256917486 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1459.2989421609043,
            "unit": "iter/sec",
            "range": "stddev: 0.000005138688056646006",
            "extra": "mean: 685.2605529331896 usec\nrounds: 1483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1293.6799973731852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055942212874371465",
            "extra": "mean: 772.9886850152265 usec\nrounds: 1308"
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
        "date": 1647612542156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.35379884524905,
            "unit": "iter/sec",
            "range": "stddev: 0.0007877898548563618",
            "extra": "mean: 8.173019631901928 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.1660975670264,
            "unit": "iter/sec",
            "range": "stddev: 0.0008452735671507708",
            "extra": "mean: 6.6152398989899455 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.60244753303525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006225018795354135",
            "extra": "mean: 4.41301500000001 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 469.96148230798383,
            "unit": "iter/sec",
            "range": "stddev: 0.0002930951565922388",
            "extra": "mean: 2.1278339558573895 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.97246679263537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704839401392139",
            "extra": "mean: 7.46422025316452 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 183.7373060488638,
            "unit": "iter/sec",
            "range": "stddev: 0.000489965783705676",
            "extra": "mean: 5.442552857142993 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.64889945725042,
            "unit": "iter/sec",
            "range": "stddev: 0.0004180190745728004",
            "extra": "mean: 3.958061967213142 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 596.4434052592107,
            "unit": "iter/sec",
            "range": "stddev: 0.0001811923209281214",
            "extra": "mean: 1.6766050075872765 msec\nrounds: 659"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.03443807109234,
            "unit": "iter/sec",
            "range": "stddev: 0.005898105664523866",
            "extra": "mean: 55.449468181817906 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.729235706719948,
            "unit": "iter/sec",
            "range": "stddev: 0.0037648491197391338",
            "extra": "mean: 43.99620000000034 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.95698309041757,
            "unit": "iter/sec",
            "range": "stddev: 0.0004864719910190707",
            "extra": "mean: 5.587935059760996 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 364.09301227968757,
            "unit": "iter/sec",
            "range": "stddev: 0.0004035834497110271",
            "extra": "mean: 2.746550925926103 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 927.7453418041431,
            "unit": "iter/sec",
            "range": "stddev: 0.0001868846086012421",
            "extra": "mean: 1.0778819951338658 msec\nrounds: 1233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 971.284720119336,
            "unit": "iter/sec",
            "range": "stddev: 0.000179860764225094",
            "extra": "mean: 1.0295642248723278 msec\nrounds: 1174"
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
        "date": 1647926030185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.54719839357486,
            "unit": "iter/sec",
            "range": "stddev: 0.000012998939585025723",
            "extra": "mean: 5.062081407035153 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.1948632940763,
            "unit": "iter/sec",
            "range": "stddev: 0.000019812463992207506",
            "extra": "mean: 3.858101149425264 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.31776893776123,
            "unit": "iter/sec",
            "range": "stddev: 0.00001127013570852842",
            "extra": "mean: 2.529610552763794 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.4977805016006,
            "unit": "iter/sec",
            "range": "stddev: 0.000009114640725876462",
            "extra": "mean: 1.2570745318352123 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.60119860760537,
            "unit": "iter/sec",
            "range": "stddev: 0.00001903581532430206",
            "extra": "mean: 5.5065715846994445 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.99234100555447,
            "unit": "iter/sec",
            "range": "stddev: 0.000009722838460469031",
            "extra": "mean: 4.149509465020516 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.5447032226112,
            "unit": "iter/sec",
            "range": "stddev: 0.000010697426619300207",
            "extra": "mean: 2.61407357512954 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.6290539903248,
            "unit": "iter/sec",
            "range": "stddev: 0.000008885461016634495",
            "extra": "mean: 1.3393531830238132 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.01537194606097,
            "unit": "iter/sec",
            "range": "stddev: 0.00006520249228377697",
            "extra": "mean: 39.975419999999815 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.466436637389553,
            "unit": "iter/sec",
            "range": "stddev: 0.000043466596206296606",
            "extra": "mean: 37.783703703704646 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.87448681190136,
            "unit": "iter/sec",
            "range": "stddev: 0.00001035596470197167",
            "extra": "mean: 3.3571186666667074 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.1600819204411,
            "unit": "iter/sec",
            "range": "stddev: 0.000009369168528871183",
            "extra": "mean: 2.056935641547896 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1437.847843548663,
            "unit": "iter/sec",
            "range": "stddev: 0.000005687292197350581",
            "extra": "mean: 695.4838820302168 usec\nrounds: 1458"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1278.2518466612883,
            "unit": "iter/sec",
            "range": "stddev: 0.000006418223889557216",
            "extra": "mean: 782.3184473481778 usec\nrounds: 1301"
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
        "date": 1647972925733,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.16730112167875,
            "unit": "iter/sec",
            "range": "stddev: 0.0004069067692111168",
            "extra": "mean: 4.995820967741953 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.4616755104725,
            "unit": "iter/sec",
            "range": "stddev: 0.00036255825439436004",
            "extra": "mean: 3.899218072289188 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 360.1915966034176,
            "unit": "iter/sec",
            "range": "stddev: 0.00007797903012287547",
            "extra": "mean: 2.776300195312529 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.8132770722607,
            "unit": "iter/sec",
            "range": "stddev: 0.00013576890613665115",
            "extra": "mean: 1.2021928809788986 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.1578195194959,
            "unit": "iter/sec",
            "range": "stddev: 0.0005893242947365878",
            "extra": "mean: 5.430125110132154 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.89906808335758,
            "unit": "iter/sec",
            "range": "stddev: 0.00037794340255864066",
            "extra": "mean: 4.001615562913725 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.81864820892264,
            "unit": "iter/sec",
            "range": "stddev: 0.00023931137215456668",
            "extra": "mean: 2.5200428571429083 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 770.8605052926083,
            "unit": "iter/sec",
            "range": "stddev: 0.00015389813081287493",
            "extra": "mean: 1.2972515690376605 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.649573536842023,
            "unit": "iter/sec",
            "range": "stddev: 0.0013648728814569006",
            "extra": "mean: 44.150941666667144 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.124521128255534,
            "unit": "iter/sec",
            "range": "stddev: 0.0016660912323154802",
            "extra": "mean: 41.45160000000011 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 283.0715564780439,
            "unit": "iter/sec",
            "range": "stddev: 0.00021100085770743218",
            "extra": "mean: 3.532675668449097 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.4396490754426,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914117770189912",
            "extra": "mean: 2.1577782608695433 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1369.906372667477,
            "unit": "iter/sec",
            "range": "stddev: 0.00003320781958456877",
            "extra": "mean: 729.9768947368303 usec\nrounds: 1900"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1270.920282918315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000777677915550757",
            "extra": "mean: 786.831411411405 usec\nrounds: 1665"
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
        "date": 1647981740180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.19272140716424,
            "unit": "iter/sec",
            "range": "stddev: 0.00001969486329532307",
            "extra": "mean: 5.045593969849249 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.8585833720061,
            "unit": "iter/sec",
            "range": "stddev: 0.000009912036986996718",
            "extra": "mean: 3.848246946564889 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.17406359126466,
            "unit": "iter/sec",
            "range": "stddev: 0.00003094980444791948",
            "extra": "mean: 2.543402763819077 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.6614651089119,
            "unit": "iter/sec",
            "range": "stddev: 0.000008447740912802038",
            "extra": "mean: 1.274434956304626 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.71573086591908,
            "unit": "iter/sec",
            "range": "stddev: 0.000025093371135926996",
            "extra": "mean: 5.472982513661194 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.42337116728595,
            "unit": "iter/sec",
            "range": "stddev: 0.000010735982902077203",
            "extra": "mean: 4.108068979591848 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.8904518019027,
            "unit": "iter/sec",
            "range": "stddev: 0.00001529983309787801",
            "extra": "mean: 2.6117130769230394 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 738.2013426073405,
            "unit": "iter/sec",
            "range": "stddev: 0.000008914340373598415",
            "extra": "mean: 1.3546439735099667 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.100177317692474,
            "unit": "iter/sec",
            "range": "stddev: 0.00005194922264435536",
            "extra": "mean: 39.84035600000027 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.526567093793652,
            "unit": "iter/sec",
            "range": "stddev: 0.000046521990939443665",
            "extra": "mean: 37.698055555555364 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.31762099213614,
            "unit": "iter/sec",
            "range": "stddev: 0.000010731853232370346",
            "extra": "mean: 3.3861846666664994 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.6676397983298,
            "unit": "iter/sec",
            "range": "stddev: 0.000009191088590566534",
            "extra": "mean: 2.0463806451613906 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1449.6163129631766,
            "unit": "iter/sec",
            "range": "stddev: 0.000004950788272076218",
            "extra": "mean: 689.8377115775478 usec\nrounds: 1477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1310.5390020071316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050030332729895824",
            "extra": "mean: 763.0448223734423 usec\nrounds: 1323"
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
        "date": 1647984118180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.8012770919446,
            "unit": "iter/sec",
            "range": "stddev: 0.00003468501948420757",
            "extra": "mean: 5.081267839196007 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.07684104454086,
            "unit": "iter/sec",
            "range": "stddev: 0.000008999293075724789",
            "extra": "mean: 3.874814942528735 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.8861940957693,
            "unit": "iter/sec",
            "range": "stddev: 0.000013688006374034767",
            "extra": "mean: 2.5323751879699197 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.0442152968507,
            "unit": "iter/sec",
            "range": "stddev: 0.000007606682642479321",
            "extra": "mean: 1.2689643304129923 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.98437743243633,
            "unit": "iter/sec",
            "range": "stddev: 0.00003998924473764196",
            "extra": "mean: 5.494977173912968 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.13476438909265,
            "unit": "iter/sec",
            "range": "stddev: 0.000010078202842681973",
            "extra": "mean: 4.147058606557493 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.6090636033814,
            "unit": "iter/sec",
            "range": "stddev: 0.000017711746823971243",
            "extra": "mean: 2.6136338501291116 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.9487759433863,
            "unit": "iter/sec",
            "range": "stddev: 0.000009200284555252167",
            "extra": "mean: 1.3514449006622997 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.82724951514868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002832438044042478",
            "extra": "mean: 40.27832399999994 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.329418668864374,
            "unit": "iter/sec",
            "range": "stddev: 0.00006609160201975447",
            "extra": "mean: 37.98032962962989 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.5893622002007,
            "unit": "iter/sec",
            "range": "stddev: 0.000011504365340700487",
            "extra": "mean: 3.3945557046978756 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.8428750499377,
            "unit": "iter/sec",
            "range": "stddev: 0.000009927667529019643",
            "extra": "mean: 2.0582786150712087 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1462.1050952888338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058162694156521555",
            "extra": "mean: 683.9453629032415 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1297.1597409963788,
            "unit": "iter/sec",
            "range": "stddev: 0.000005654181863922139",
            "extra": "mean: 770.9150757576523 usec\nrounds: 1320"
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
        "date": 1647985694312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.84586299698103,
            "unit": "iter/sec",
            "range": "stddev: 0.000018688902086381377",
            "extra": "mean: 5.0290208955223905 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.2613994245541,
            "unit": "iter/sec",
            "range": "stddev: 0.000010511207776774669",
            "extra": "mean: 3.8422908745247297 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.62373667511116,
            "unit": "iter/sec",
            "range": "stddev: 0.000019021995738643994",
            "extra": "mean: 2.5086313432835694 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.5014177502236,
            "unit": "iter/sec",
            "range": "stddev: 0.000008411544667362224",
            "extra": "mean: 1.258650995024884 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.0272103768491,
            "unit": "iter/sec",
            "range": "stddev: 0.000034371350153006315",
            "extra": "mean: 5.463668478260809 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.3701181660906,
            "unit": "iter/sec",
            "range": "stddev: 0.000010157389247742392",
            "extra": "mean: 4.1089678861787755 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.11660590219367,
            "unit": "iter/sec",
            "range": "stddev: 0.000013965474158023272",
            "extra": "mean: 2.5966161538460524 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.3786888113201,
            "unit": "iter/sec",
            "range": "stddev: 0.000007799343381561008",
            "extra": "mean: 1.3434022427440462 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.906632506721806,
            "unit": "iter/sec",
            "range": "stddev: 0.00005050088382083607",
            "extra": "mean: 40.14994800000039 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.358523165139506,
            "unit": "iter/sec",
            "range": "stddev: 0.000035933688135112006",
            "extra": "mean: 37.93839259259225 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.06740994252334,
            "unit": "iter/sec",
            "range": "stddev: 0.000013479911458598442",
            "extra": "mean: 3.366239333333401 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.6672785034605,
            "unit": "iter/sec",
            "range": "stddev: 0.000009108705345402389",
            "extra": "mean: 2.0422030303030203 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1457.9896111360172,
            "unit": "iter/sec",
            "range": "stddev: 0.000005770569130583361",
            "extra": "mean: 685.8759433963547 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1317.0822421534556,
            "unit": "iter/sec",
            "range": "stddev: 0.00000533167772213775",
            "extra": "mean: 759.2540298508468 usec\nrounds: 1340"
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
        "date": 1648220457486,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.56491510411504,
            "unit": "iter/sec",
            "range": "stddev: 0.00029060223760882773",
            "extra": "mean: 5.6636393442623065 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.0791753488859,
            "unit": "iter/sec",
            "range": "stddev: 0.00016227333980835376",
            "extra": "mean: 4.346329903537018 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 375.09258864424964,
            "unit": "iter/sec",
            "range": "stddev: 0.00021321016951504312",
            "extra": "mean: 2.666008421052631 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.8636376743206,
            "unit": "iter/sec",
            "range": "stddev: 0.00014515335256695016",
            "extra": "mean: 1.2855723697148633 msec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.1210982191021,
            "unit": "iter/sec",
            "range": "stddev: 0.0002563256746749013",
            "extra": "mean: 6.093061835748852 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.3262737285254,
            "unit": "iter/sec",
            "range": "stddev: 0.00020438833902148171",
            "extra": "mean: 4.559417269076326 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.03993660883566,
            "unit": "iter/sec",
            "range": "stddev: 0.00013439083567204645",
            "extra": "mean: 2.8405868085106953 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 689.0398211901478,
            "unit": "iter/sec",
            "range": "stddev: 0.00008713661721028095",
            "extra": "mean: 1.4512949313622319 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.323186522366985,
            "unit": "iter/sec",
            "range": "stddev: 0.0007744046936838063",
            "extra": "mean: 44.79647200000045 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.37816459049073,
            "unit": "iter/sec",
            "range": "stddev: 0.001576043739164068",
            "extra": "mean: 41.02031538461567 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.9290989960285,
            "unit": "iter/sec",
            "range": "stddev: 0.00018439200817479826",
            "extra": "mean: 3.7463131736524486 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.7481725832052,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210144416252209",
            "extra": "mean: 2.0418657097288224 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1331.898737436215,
            "unit": "iter/sec",
            "range": "stddev: 0.000055298777473863445",
            "extra": "mean: 750.8078293736578 usec\nrounds: 1852"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1225.3985143835646,
            "unit": "iter/sec",
            "range": "stddev: 0.00007819009542414283",
            "extra": "mean: 816.0610513740087 usec\nrounds: 1674"
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
        "date": 1648484504993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.56619241820093,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551656245085799",
            "extra": "mean: 8.50584661654132 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.19690723142747,
            "unit": "iter/sec",
            "range": "stddev: 0.0007396226305164732",
            "extra": "mean: 6.402175418994441 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.56458019449386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006549275008719317",
            "extra": "mean: 4.375131086142323 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 468.1741007223407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005248001475589673",
            "extra": "mean: 2.1359575389948118 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.23103100618235,
            "unit": "iter/sec",
            "range": "stddev: 0.0010343319941066252",
            "extra": "mean: 9.239494354838753 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.2110816245531,
            "unit": "iter/sec",
            "range": "stddev: 0.0005821785143687956",
            "extra": "mean: 6.792966867469927 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.0571948588204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005733562600237225",
            "extra": "mean: 4.4236592452831704 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 473.86388784915334,
            "unit": "iter/sec",
            "range": "stddev: 0.0003798238218977445",
            "extra": "mean: 2.110310630630569 msec\nrounds: 555"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.945172115635042,
            "unit": "iter/sec",
            "range": "stddev: 0.0012216215229205417",
            "extra": "mean: 55.72529444444463 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.836142642062565,
            "unit": "iter/sec",
            "range": "stddev: 0.00282895049733483",
            "extra": "mean: 50.41302727272685 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.48756061301316,
            "unit": "iter/sec",
            "range": "stddev: 0.0007069473152799638",
            "extra": "mean: 5.666121717171413 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.3526469082922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005650356173972334",
            "extra": "mean: 3.264212044818251 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 936.9966533632065,
            "unit": "iter/sec",
            "range": "stddev: 0.00021797273551842598",
            "extra": "mean: 1.0672396709322842 msec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 821.8607748161658,
            "unit": "iter/sec",
            "range": "stddev: 0.0002765232294171953",
            "extra": "mean: 1.2167510978044678 msec\nrounds: 1002"
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
        "date": 1648486076963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.14694494727567,
            "unit": "iter/sec",
            "range": "stddev: 0.0010608653235314913",
            "extra": "mean: 6.487316374268977 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.2022621011263,
            "unit": "iter/sec",
            "range": "stddev: 0.00003675680408983086",
            "extra": "mean: 4.401364628820932 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.463269063712,
            "unit": "iter/sec",
            "range": "stddev: 0.000012143399359666605",
            "extra": "mean: 2.9115194842406895 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 701.2555536229981,
            "unit": "iter/sec",
            "range": "stddev: 0.000014493610161482595",
            "extra": "mean: 1.4260136619718091 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.06235016894593,
            "unit": "iter/sec",
            "range": "stddev: 0.00002088567904793587",
            "extra": "mean: 6.286842857142896 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.93702504966723,
            "unit": "iter/sec",
            "range": "stddev: 0.000033706031185572556",
            "extra": "mean: 4.74075141509434 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.24503020038685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000144128210476186",
            "extra": "mean: 2.991817109144388 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 655.5642045407672,
            "unit": "iter/sec",
            "range": "stddev: 0.000020982707930712173",
            "extra": "mean: 1.525403603603579 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.192773084847005,
            "unit": "iter/sec",
            "range": "stddev: 0.00005305209744470474",
            "extra": "mean: 45.05971363636343 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.383972625163324,
            "unit": "iter/sec",
            "range": "stddev: 0.00013897017404916384",
            "extra": "mean: 42.76433333333222 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.09873426907143,
            "unit": "iter/sec",
            "range": "stddev: 0.000012427270310847041",
            "extra": "mean: 3.9047440154442348 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 428.6569200881789,
            "unit": "iter/sec",
            "range": "stddev: 0.000012060896754501625",
            "extra": "mean: 2.3328679723502197 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1308.546631029008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061339197242364575",
            "extra": "mean: 764.2066215199569 usec\nrounds: 1329"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1155.6076860859955,
            "unit": "iter/sec",
            "range": "stddev: 0.000006220479983875527",
            "extra": "mean: 865.3455770850456 usec\nrounds: 1187"
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
        "date": 1648486637516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.8327967712512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011457951239560108",
            "extra": "mean: 5.106396969696971 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.53845536645474,
            "unit": "iter/sec",
            "range": "stddev: 0.000010631503782604382",
            "extra": "mean: 3.8678965517241566 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.28276091633785,
            "unit": "iter/sec",
            "range": "stddev: 0.000009780557411682483",
            "extra": "mean: 2.5298345864661966 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.2109012778191,
            "unit": "iter/sec",
            "range": "stddev: 0.000007852157099415915",
            "extra": "mean: 1.2591114002478225 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.77537602677418,
            "unit": "iter/sec",
            "range": "stddev: 0.000019178048846864015",
            "extra": "mean: 5.441425405405294 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.0082911955211,
            "unit": "iter/sec",
            "range": "stddev: 0.000011343366826330694",
            "extra": "mean: 4.1665227272726035 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.0337258581368,
            "unit": "iter/sec",
            "range": "stddev: 0.000009630491538286328",
            "extra": "mean: 2.617569948186556 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.3728950648773,
            "unit": "iter/sec",
            "range": "stddev: 0.00000790200720718798",
            "extra": "mean: 1.3380201591511998 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.18597830096995,
            "unit": "iter/sec",
            "range": "stddev: 0.0002776359377553572",
            "extra": "mean: 39.70463200000012 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.531686547579866,
            "unit": "iter/sec",
            "range": "stddev: 0.000029308452929275826",
            "extra": "mean: 37.690781481481686 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.89046608371495,
            "unit": "iter/sec",
            "range": "stddev: 0.000011489386945319173",
            "extra": "mean: 3.3796289999998663 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.7203992877251,
            "unit": "iter/sec",
            "range": "stddev: 0.000034636066913353044",
            "extra": "mean: 2.054567676767641 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1451.7121278647146,
            "unit": "iter/sec",
            "range": "stddev: 0.000005321949393329375",
            "extra": "mean: 688.8418032787766 usec\nrounds: 1464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1303.9263132130695,
            "unit": "iter/sec",
            "range": "stddev: 0.000005881562363598915",
            "extra": "mean: 766.9145026576313 usec\nrounds: 1317"
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
        "date": 1648604807264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.65921397742733,
            "unit": "iter/sec",
            "range": "stddev: 0.00111820874787708",
            "extra": "mean: 8.357066428571404 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.17419216256096,
            "unit": "iter/sec",
            "range": "stddev: 0.0007283332178263598",
            "extra": "mean: 6.128420105820155 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.54540642579215,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038985052356197",
            "extra": "mean: 4.281822602739759 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.0795413232443,
            "unit": "iter/sec",
            "range": "stddev: 0.0004884730042459354",
            "extra": "mean: 2.0404850961538603 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.87799459457274,
            "unit": "iter/sec",
            "range": "stddev: 0.0011278570515866346",
            "extra": "mean: 9.018922137404424 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.01429308018737,
            "unit": "iter/sec",
            "range": "stddev: 0.0007114851566123096",
            "extra": "mean: 6.451018032786886 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.0379242783467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119034342647715",
            "extra": "mean: 4.309640344827537 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 473.6212162263932,
            "unit": "iter/sec",
            "range": "stddev: 0.0006611635478988322",
            "extra": "mean: 2.1113919008264936 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.226366736005918,
            "unit": "iter/sec",
            "range": "stddev: 0.003209010968163363",
            "extra": "mean: 54.865569999999764 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.46442431555161,
            "unit": "iter/sec",
            "range": "stddev: 0.0024447131593741235",
            "extra": "mean: 51.37578095238213 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.74300571845924,
            "unit": "iter/sec",
            "range": "stddev: 0.0010238504634803602",
            "extra": "mean: 5.722689705882538 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.5604614997337,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197785428175467",
            "extra": "mean: 3.2619992647057936 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 875.267793889825,
            "unit": "iter/sec",
            "range": "stddev: 0.0005397911454210172",
            "extra": "mean: 1.1425074782608484 msec\nrounds: 1150"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 826.2771686303433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999334984385139",
            "extra": "mean: 1.2102476480835407 msec\nrounds: 1148"
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
        "date": 1648607773736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.0034306539872,
            "unit": "iter/sec",
            "range": "stddev: 0.00011011316916284247",
            "extra": "mean: 5.101951515151489 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.67070833083073,
            "unit": "iter/sec",
            "range": "stddev: 0.000012711383433142576",
            "extra": "mean: 3.880922307692311 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.56324249548777,
            "unit": "iter/sec",
            "range": "stddev: 0.000012724874561923785",
            "extra": "mean: 2.560404797979813 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 769.6521535958306,
            "unit": "iter/sec",
            "range": "stddev: 0.00000909470995889849",
            "extra": "mean: 1.2992882503192897 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.3124499938041,
            "unit": "iter/sec",
            "range": "stddev: 0.000021477326686452444",
            "extra": "mean: 5.455166847826209 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.36295399541262,
            "unit": "iter/sec",
            "range": "stddev: 0.000012117052540975408",
            "extra": "mean: 4.160374897119484 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.0220906347776,
            "unit": "iter/sec",
            "range": "stddev: 0.000012966818657083398",
            "extra": "mean: 2.631425974025957 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 729.59859917067,
            "unit": "iter/sec",
            "range": "stddev: 0.000009325632438032469",
            "extra": "mean: 1.3706166666667035 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.908583009496915,
            "unit": "iter/sec",
            "range": "stddev: 0.00006296478169050096",
            "extra": "mean: 40.14680399999989 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.254044637530132,
            "unit": "iter/sec",
            "range": "stddev: 0.00005134543227464606",
            "extra": "mean: 38.08936923076992 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.1449099186486,
            "unit": "iter/sec",
            "range": "stddev: 0.00003479360551184811",
            "extra": "mean: 3.411282154882077 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.9561806958279,
            "unit": "iter/sec",
            "range": "stddev: 0.000011629525507589607",
            "extra": "mean: 2.070581224489625 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1412.6319638617713,
            "unit": "iter/sec",
            "range": "stddev: 0.000006057955536139369",
            "extra": "mean: 707.898465829881 usec\nrounds: 1434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1272.9250804340206,
            "unit": "iter/sec",
            "range": "stddev: 0.000007159893840241834",
            "extra": "mean: 785.592188708417 usec\nrounds: 1293"
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
        "date": 1648613788609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.5308837067538,
            "unit": "iter/sec",
            "range": "stddev: 0.00001890519456808535",
            "extra": "mean: 5.062499500000004 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.958364988887,
            "unit": "iter/sec",
            "range": "stddev: 0.000026803044359726288",
            "extra": "mean: 3.8467698473282415 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.7813729764926,
            "unit": "iter/sec",
            "range": "stddev: 0.000018220821210557308",
            "extra": "mean: 2.5394802005012473 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.8319130676601,
            "unit": "iter/sec",
            "range": "stddev: 0.000007714439749823113",
            "extra": "mean: 1.258127641277628 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.68747274748438,
            "unit": "iter/sec",
            "range": "stddev: 0.00001809859592025003",
            "extra": "mean: 5.414552406417186 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.36884383137,
            "unit": "iter/sec",
            "range": "stddev: 0.000009793289773619783",
            "extra": "mean: 4.1259428571428005 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.4701030895144,
            "unit": "iter/sec",
            "range": "stddev: 0.00001048937949713072",
            "extra": "mean: 2.6009824742268055 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.4411848679945,
            "unit": "iter/sec",
            "range": "stddev: 0.00001894334713985633",
            "extra": "mean: 1.3378979112271019 msec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.9493851822807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005973222273867795",
            "extra": "mean: 40.08114800000001 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.15239786809676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006865370372107676",
            "extra": "mean: 38.23741153846154 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.0050178652303,
            "unit": "iter/sec",
            "range": "stddev: 0.0007516373510300508",
            "extra": "mean: 3.5210645484951706 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.2457246609597,
            "unit": "iter/sec",
            "range": "stddev: 0.000009657491213008561",
            "extra": "mean: 2.0397934131737143 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1474.9873761897045,
            "unit": "iter/sec",
            "range": "stddev: 0.000005362212294180479",
            "extra": "mean: 677.9719041279346 usec\nrounds: 1502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1321.208429841942,
            "unit": "iter/sec",
            "range": "stddev: 0.000005516787508710373",
            "extra": "mean: 756.8828486203583 usec\nrounds: 1341"
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
        "date": 1648734302287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.12376791781662,
            "unit": "iter/sec",
            "range": "stddev: 0.000021059659214531513",
            "extra": "mean: 5.0473500000000415 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.32164438537416,
            "unit": "iter/sec",
            "range": "stddev: 0.000013171445181560882",
            "extra": "mean: 3.856214942528725 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.47726450485226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008903448582080141",
            "extra": "mean: 2.509553465346636 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 801.6298888590131,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913601179809157",
            "extra": "mean: 1.247458476658516 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.45631666759158,
            "unit": "iter/sec",
            "range": "stddev: 0.000021138897271309515",
            "extra": "mean: 5.480763934426299 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 197.52749229094437,
            "unit": "iter/sec",
            "range": "stddev: 0.0017854423699421587",
            "extra": "mean: 5.062586419752998 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.06723305154947,
            "unit": "iter/sec",
            "range": "stddev: 0.00021445028606274587",
            "extra": "mean: 2.754310796915173 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.243174359309,
            "unit": "iter/sec",
            "range": "stddev: 0.000007941366810605028",
            "extra": "mean: 1.3311269028871258 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.776518282741453,
            "unit": "iter/sec",
            "range": "stddev: 0.00006402510887664317",
            "extra": "mean: 40.36079600000008 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.214656089926986,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587998945720035",
            "extra": "mean: 38.146599999999665 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.33935726845374,
            "unit": "iter/sec",
            "range": "stddev: 0.000015431740172119717",
            "extra": "mean: 3.3859354515051407 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.795822843633,
            "unit": "iter/sec",
            "range": "stddev: 0.000010259705189032448",
            "extra": "mean: 2.029237979797783 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1480.1217586633725,
            "unit": "iter/sec",
            "range": "stddev: 0.000006143779455922557",
            "extra": "mean: 675.6200928382084 usec\nrounds: 1508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1299.89402759313,
            "unit": "iter/sec",
            "range": "stddev: 0.00000612259453420307",
            "extra": "mean: 769.2934799089658 usec\nrounds: 1319"
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
        "date": 1648765303216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.9488003554678,
            "unit": "iter/sec",
            "range": "stddev: 0.00012731015073768514",
            "extra": "mean: 5.619593939393889 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 237.15733729228026,
            "unit": "iter/sec",
            "range": "stddev: 0.00014910583371805397",
            "extra": "mean: 4.216609999999992 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 355.93242783111305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000783596284186098",
            "extra": "mean: 2.8095220379147126 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 704.6387960435558,
            "unit": "iter/sec",
            "range": "stddev: 0.00005134543933911417",
            "extra": "mean: 1.4191668208092634 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.38630736047034,
            "unit": "iter/sec",
            "range": "stddev: 0.00019224666099905554",
            "extra": "mean: 6.010109941520209 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.1081764205266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001509063201410325",
            "extra": "mean: 4.522673092369481 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.6136880556818,
            "unit": "iter/sec",
            "range": "stddev: 0.00007937801276442615",
            "extra": "mean: 2.9018000000000654 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.0494079893245,
            "unit": "iter/sec",
            "range": "stddev: 0.00005834255695107091",
            "extra": "mean: 1.4835707711441797 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.668324779063276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207974146212348",
            "extra": "mean: 44.1144199999998 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.02482004158481,
            "unit": "iter/sec",
            "range": "stddev: 0.0006607000371665295",
            "extra": "mean: 41.6236208333336 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.1178859708808,
            "unit": "iter/sec",
            "range": "stddev: 0.00009843739946091226",
            "extra": "mean: 3.78618811188823 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 439.15177502680723,
            "unit": "iter/sec",
            "range": "stddev: 0.00007068920751364074",
            "extra": "mean: 2.2771170626350234 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1323.9765819510071,
            "unit": "iter/sec",
            "range": "stddev: 0.000028167315775612073",
            "extra": "mean: 755.3003683240406 usec\nrounds: 1629"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1159.6346106932933,
            "unit": "iter/sec",
            "range": "stddev: 0.000033015456532279836",
            "extra": "mean: 862.340594855258 usec\nrounds: 1244"
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
        "date": 1648767371136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.67811649571036,
            "unit": "iter/sec",
            "range": "stddev: 0.00001300844276881011",
            "extra": "mean: 5.084449748743707 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.2100681121926,
            "unit": "iter/sec",
            "range": "stddev: 0.000009261669278293146",
            "extra": "mean: 3.887872692307712 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.1262942389853,
            "unit": "iter/sec",
            "range": "stddev: 0.000010299816416288268",
            "extra": "mean: 2.56985974683541 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.0046642503827,
            "unit": "iter/sec",
            "range": "stddev: 0.000007638212168992555",
            "extra": "mean: 1.282043615676378 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.40027661398673,
            "unit": "iter/sec",
            "range": "stddev: 0.000023512731015985955",
            "extra": "mean: 5.482447826086895 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.56520301566133,
            "unit": "iter/sec",
            "range": "stddev: 0.000009561315019339453",
            "extra": "mean: 4.174228925619995 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.31770228302287,
            "unit": "iter/sec",
            "range": "stddev: 0.000009255488809909155",
            "extra": "mean: 2.636312499999969 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.0271461211621,
            "unit": "iter/sec",
            "range": "stddev: 0.000007555810684173714",
            "extra": "mean: 1.3568021276594975 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.696380231792016,
            "unit": "iter/sec",
            "range": "stddev: 0.00004989736866768468",
            "extra": "mean: 40.4917640000005 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.982747455689225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003953109467478129",
            "extra": "mean: 38.48707692307721 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.37761675496256,
            "unit": "iter/sec",
            "range": "stddev: 0.000010610386423113045",
            "extra": "mean: 3.4202344594596155 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.84762305674013,
            "unit": "iter/sec",
            "range": "stddev: 0.000009157418471652926",
            "extra": "mean: 2.062503665987805 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1437.2764877869874,
            "unit": "iter/sec",
            "range": "stddev: 0.000005594800486739741",
            "extra": "mean: 695.7603554342745 usec\nrounds: 1463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1292.553404770075,
            "unit": "iter/sec",
            "range": "stddev: 0.000006442339302762684",
            "extra": "mean: 773.6624237803809 usec\nrounds: 1312"
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
        "date": 1648768282576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.9634796532764,
            "unit": "iter/sec",
            "range": "stddev: 0.000054741189645058626",
            "extra": "mean: 5.989333727810676 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.77551277350514,
            "unit": "iter/sec",
            "range": "stddev: 0.00001256394992979145",
            "extra": "mean: 4.529487837837821 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.40793230925055,
            "unit": "iter/sec",
            "range": "stddev: 0.000013873529321929264",
            "extra": "mean: 2.9376518731987993 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 688.3556045052836,
            "unit": "iter/sec",
            "range": "stddev: 0.000010396275594169449",
            "extra": "mean: 1.452737500000008 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 156.79394100578648,
            "unit": "iter/sec",
            "range": "stddev: 0.000023544144604200867",
            "extra": "mean: 6.377797468354309 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 205.97273396324164,
            "unit": "iter/sec",
            "range": "stddev: 0.000016045453599043488",
            "extra": "mean: 4.855011538461505 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.15957220200283,
            "unit": "iter/sec",
            "range": "stddev: 0.00005129288159925632",
            "extra": "mean: 3.010601179940857 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 647.9593516709293,
            "unit": "iter/sec",
            "range": "stddev: 0.000009915890319033969",
            "extra": "mean: 1.5433066864784706 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.23188616797227,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476978319437707",
            "extra": "mean: 47.098971428571105 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.12753986877595,
            "unit": "iter/sec",
            "range": "stddev: 0.0010343201908287758",
            "extra": "mean: 45.19255217391313 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.1563177596421,
            "unit": "iter/sec",
            "range": "stddev: 0.00001281854847086849",
            "extra": "mean: 3.934586434108276 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 422.12661659215604,
            "unit": "iter/sec",
            "range": "stddev: 0.00012204006498373266",
            "extra": "mean: 2.3689574660632333 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1280.1437838678614,
            "unit": "iter/sec",
            "range": "stddev: 0.00000719920328607016",
            "extra": "mean: 781.1622511485175 usec\nrounds: 1306"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1131.266787630356,
            "unit": "iter/sec",
            "range": "stddev: 0.000008061167577399793",
            "extra": "mean: 883.9647826086026 usec\nrounds: 1150"
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
        "date": 1648769908350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.95084566591451,
            "unit": "iter/sec",
            "range": "stddev: 0.001660607197768723",
            "extra": "mean: 8.267821481481487 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.66156742124286,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459652522745151",
            "extra": "mean: 6.147733701657448 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.65218336100133,
            "unit": "iter/sec",
            "range": "stddev: 0.00042956858401026654",
            "extra": "mean: 4.121125085910594 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.6704895295733,
            "unit": "iter/sec",
            "range": "stddev: 0.000478303474402677",
            "extra": "mean: 2.005332220367325 msec\nrounds: 599"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.54795442237028,
            "unit": "iter/sec",
            "range": "stddev: 0.0009572794729733349",
            "extra": "mean: 8.964754263565911 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.18697463319765,
            "unit": "iter/sec",
            "range": "stddev: 0.0009681836801169582",
            "extra": "mean: 6.361850289017533 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.42623102955858,
            "unit": "iter/sec",
            "range": "stddev: 0.0005065034153736167",
            "extra": "mean: 4.284008680555575 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 480.9124397928968,
            "unit": "iter/sec",
            "range": "stddev: 0.00044732975295228266",
            "extra": "mean: 2.0793806049821595 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.409875725359193,
            "unit": "iter/sec",
            "range": "stddev: 0.0011416979678366924",
            "extra": "mean: 51.520164999999984 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.096122625392105,
            "unit": "iter/sec",
            "range": "stddev: 0.0010394543888847896",
            "extra": "mean: 49.76084285714237 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.009291991841,
            "unit": "iter/sec",
            "range": "stddev: 0.0003178641609318718",
            "extra": "mean: 5.555268780487873 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9404599671628,
            "unit": "iter/sec",
            "range": "stddev: 0.00024933340466563614",
            "extra": "mean: 3.1651533333335493 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 999.0762140340445,
            "unit": "iter/sec",
            "range": "stddev: 0.00024724327430487083",
            "extra": "mean: 1.0009246401355363 msec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 907.0787998358078,
            "unit": "iter/sec",
            "range": "stddev: 0.00025243206221318314",
            "extra": "mean: 1.1024400528168137 msec\nrounds: 1136"
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
        "date": 1648770472631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.36803961915206,
            "unit": "iter/sec",
            "range": "stddev: 0.0012419097062518357",
            "extra": "mean: 8.743701503759448 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.41094734011216,
            "unit": "iter/sec",
            "range": "stddev: 0.0016105822353067196",
            "extra": "mean: 6.692949999999975 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.3377978463946,
            "unit": "iter/sec",
            "range": "stddev: 0.0008082762293313508",
            "extra": "mean: 4.418175000000025 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 455.62479042539195,
            "unit": "iter/sec",
            "range": "stddev: 0.00040921051305232455",
            "extra": "mean: 2.194788389513122 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.26579111851771,
            "unit": "iter/sec",
            "range": "stddev: 0.0012172074822828654",
            "extra": "mean: 9.410366115702322 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.84722046265807,
            "unit": "iter/sec",
            "range": "stddev: 0.0008392234083510453",
            "extra": "mean: 6.8564899408284194 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.27968000403436,
            "unit": "iter/sec",
            "range": "stddev: 0.0004767581020223757",
            "extra": "mean: 4.399865399239603 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 443.6195429745727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007009087071224",
            "extra": "mean: 2.254183828996275 msec\nrounds: 538"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.84160690902168,
            "unit": "iter/sec",
            "range": "stddev: 0.002424779909419574",
            "extra": "mean: 56.048763157893916 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.786451586844365,
            "unit": "iter/sec",
            "range": "stddev: 0.002269947316915444",
            "extra": "mean: 53.22985000000067 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.40002748983466,
            "unit": "iter/sec",
            "range": "stddev: 0.0011170188706735905",
            "extra": "mean: 6.08272404371607 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.37977151414236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003019163154526434",
            "extra": "mean: 3.455666561514058 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 846.0259254069456,
            "unit": "iter/sec",
            "range": "stddev: 0.00035118453226425116",
            "extra": "mean: 1.1819968750000085 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 784.7762087070773,
            "unit": "iter/sec",
            "range": "stddev: 0.00031944308715330046",
            "extra": "mean: 1.2742486187845894 msec\nrounds: 905"
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
        "date": 1648865864232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.7820979729381,
            "unit": "iter/sec",
            "range": "stddev: 0.0010668067934658167",
            "extra": "mean: 8.788728787878737 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.12860517986908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003954989629640206",
            "extra": "mean: 6.446264367816086 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.47922093243292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681692918565349",
            "extra": "mean: 4.338785925925873 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 506.38546935893334,
            "unit": "iter/sec",
            "range": "stddev: 0.00033584091986364674",
            "extra": "mean: 1.9747802030456478 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.0762986612926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007649402758718363",
            "extra": "mean: 9.339134920634809 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.37993268382175,
            "unit": "iter/sec",
            "range": "stddev: 0.00045295390690321986",
            "extra": "mean: 6.739455813953423 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.42940004436306,
            "unit": "iter/sec",
            "range": "stddev: 0.00047978807864053824",
            "extra": "mean: 4.516112132353027 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 472.19485304193154,
            "unit": "iter/sec",
            "range": "stddev: 0.00031596349250712",
            "extra": "mean: 2.1177698010850587 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.222271624825446,
            "unit": "iter/sec",
            "range": "stddev: 0.0011280558905578833",
            "extra": "mean: 54.877899999999535 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.122758915098874,
            "unit": "iter/sec",
            "range": "stddev: 0.0014587498434988247",
            "extra": "mean: 52.2937095238085 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.02659416649587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005129779225475902",
            "extra": "mean: 5.524050234742131 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.44015484167886,
            "unit": "iter/sec",
            "range": "stddev: 0.0003319240053837992",
            "extra": "mean: 3.1701734375000714 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 901.4410710799212,
            "unit": "iter/sec",
            "range": "stddev: 0.00026263272313973364",
            "extra": "mean: 1.1093348551359057 msec\nrounds: 1139"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 830.7698132277854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910946589535372",
            "extra": "mean: 1.2037028597785775 msec\nrounds: 1084"
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
        "date": 1649082205424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.7594330771789,
            "unit": "iter/sec",
            "range": "stddev: 0.00035288460529636883",
            "extra": "mean: 7.259031034482814 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.91151660896625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991644532062472",
            "extra": "mean: 6.027309137055755 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.788723086504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005177230781091448",
            "extra": "mean: 3.9248204861111033 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 532.3191033834548,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882481355407036",
            "extra": "mean: 1.8785724458204394 msec\nrounds: 646"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.2055266019672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005056878879233784",
            "extra": "mean: 8.051171532846766 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.51268960081518,
            "unit": "iter/sec",
            "range": "stddev: 0.00032315153170668615",
            "extra": "mean: 5.934271195652214 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.7660415567915,
            "unit": "iter/sec",
            "range": "stddev: 0.00028347369763368505",
            "extra": "mean: 3.8794869718309193 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.11966968289,
            "unit": "iter/sec",
            "range": "stddev: 0.00017400990738201345",
            "extra": "mean: 1.8079270270271022 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.429587246668426,
            "unit": "iter/sec",
            "range": "stddev: 0.0013707921327350248",
            "extra": "mean: 46.66445454545402 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.344665680357704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025320554956407065",
            "extra": "mean: 46.850113043477826 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.82581785475452,
            "unit": "iter/sec",
            "range": "stddev: 0.0006721112208183743",
            "extra": "mean: 5.213062616822381 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 359.3751675976236,
            "unit": "iter/sec",
            "range": "stddev: 0.00020902155390356434",
            "extra": "mean: 2.7826073979592705 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1024.1719901210258,
            "unit": "iter/sec",
            "range": "stddev: 0.00015587913177127896",
            "extra": "mean: 976.3985049833578 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 960.6719926552626,
            "unit": "iter/sec",
            "range": "stddev: 0.00013466047367392546",
            "extra": "mean: 1.0409380180180294 msec\nrounds: 1110"
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
        "date": 1649083830015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.60751358269064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003673334301395282",
            "extra": "mean: 6.149777325581398 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.48342715156176,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381218842781323",
            "extra": "mean: 4.662364888888892 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.9201475723445,
            "unit": "iter/sec",
            "range": "stddev: 0.00033753142549739694",
            "extra": "mean: 3.0402515850144285 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.9601347786789,
            "unit": "iter/sec",
            "range": "stddev: 0.00018605080695485528",
            "extra": "mean: 1.4970953323903657 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 149.75941009485996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003578177223529627",
            "extra": "mean: 6.67737672955966 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 200.5593168237391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003797170127852383",
            "extra": "mean: 4.986056074766383 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.30948991208595,
            "unit": "iter/sec",
            "range": "stddev: 0.0003305572668858464",
            "extra": "mean: 3.171487164178973 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 620.2442017125329,
            "unit": "iter/sec",
            "range": "stddev: 0.00016772576537707465",
            "extra": "mean: 1.612268195718618 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.52977839690603,
            "unit": "iter/sec",
            "range": "stddev: 0.0017250666293237976",
            "extra": "mean: 48.70973181818205 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.060792862142964,
            "unit": "iter/sec",
            "range": "stddev: 0.00039101577371836535",
            "extra": "mean: 43.36364347826128 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.5737536396871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000556909299373277",
            "extra": "mean: 3.8823831460672533 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.20717497310415,
            "unit": "iter/sec",
            "range": "stddev: 0.000023943431719262635",
            "extra": "mean: 2.3137052272726133 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1305.9021687693507,
            "unit": "iter/sec",
            "range": "stddev: 0.000008458139025678916",
            "extra": "mean: 765.7541459957714 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1134.4900536146126,
            "unit": "iter/sec",
            "range": "stddev: 0.000010600515022142104",
            "extra": "mean: 881.4532986110261 usec\nrounds: 1152"
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
        "date": 1649166789400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.33780376317978,
            "unit": "iter/sec",
            "range": "stddev: 0.00002319359580911404",
            "extra": "mean: 5.0166099009901535 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.618793322362,
            "unit": "iter/sec",
            "range": "stddev: 0.000012724982019778042",
            "extra": "mean: 3.866695019157113 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.96870725453186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001245459844775896",
            "extra": "mean: 2.519090250000011 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.7252077580847,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913278411265958",
            "extra": "mean: 1.24575631901841 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.63369884972937,
            "unit": "iter/sec",
            "range": "stddev: 0.00003356463079212049",
            "extra": "mean: 5.38695294117638 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.04918042544497,
            "unit": "iter/sec",
            "range": "stddev: 0.000011856932407481717",
            "extra": "mean: 4.131391803278656 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.36394178966304,
            "unit": "iter/sec",
            "range": "stddev: 0.000012936724486753648",
            "extra": "mean: 2.5882332480819366 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.4781690802887,
            "unit": "iter/sec",
            "range": "stddev: 0.000008643778042579191",
            "extra": "mean: 1.325419397116557 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.22586788777991,
            "unit": "iter/sec",
            "range": "stddev: 0.0005234441242693021",
            "extra": "mean: 43.05544166666605 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.833051322522543,
            "unit": "iter/sec",
            "range": "stddev: 0.00009283707018226411",
            "extra": "mean: 38.71010000000078 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.8995398580737,
            "unit": "iter/sec",
            "range": "stddev: 0.000012171100556943126",
            "extra": "mean: 3.390985284281115 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.9778103133703,
            "unit": "iter/sec",
            "range": "stddev: 0.000011553618894851704",
            "extra": "mean: 2.0202925851704348 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1494.659823357906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075177155506276005",
            "extra": "mean: 669.0485583223866 usec\nrounds: 1526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1313.5413339624963,
            "unit": "iter/sec",
            "range": "stddev: 0.00000615302729954781",
            "extra": "mean: 761.3007479432326 usec\nrounds: 1337"
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
        "date": 1649339109388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.70600055416665,
            "unit": "iter/sec",
            "range": "stddev: 0.00030753246562105604",
            "extra": "mean: 5.058015422885581 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.056752610888,
            "unit": "iter/sec",
            "range": "stddev: 0.000010975447724397681",
            "extra": "mean: 3.8601580152671557 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.8635751283697,
            "unit": "iter/sec",
            "range": "stddev: 0.000011870948297028291",
            "extra": "mean: 2.532520250000019 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.8031448778919,
            "unit": "iter/sec",
            "range": "stddev: 0.00000791712823183645",
            "extra": "mean: 1.2677434243176118 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.76541258298732,
            "unit": "iter/sec",
            "range": "stddev: 0.00003883349921701895",
            "extra": "mean: 5.4417204301076305 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.3716984554397,
            "unit": "iter/sec",
            "range": "stddev: 0.000007632530543554463",
            "extra": "mean: 4.125894262295031 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.864052522873,
            "unit": "iter/sec",
            "range": "stddev: 0.000015571599053370705",
            "extra": "mean: 2.6050889460153703 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.1265729135943,
            "unit": "iter/sec",
            "range": "stddev: 0.00000820251412708907",
            "extra": "mean: 1.338461294583951 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.848698758131746,
            "unit": "iter/sec",
            "range": "stddev: 0.00008833028491560035",
            "extra": "mean: 40.243555999999785 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.246565485483895,
            "unit": "iter/sec",
            "range": "stddev: 0.00004960884846581122",
            "extra": "mean: 38.10022307692284 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.1440801297706,
            "unit": "iter/sec",
            "range": "stddev: 0.000020676700472250855",
            "extra": "mean: 3.365370764119796 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.02538495304634,
            "unit": "iter/sec",
            "range": "stddev: 0.000009355258793259083",
            "extra": "mean: 2.0324154618474193 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1474.7375590620177,
            "unit": "iter/sec",
            "range": "stddev: 0.000005243433528327112",
            "extra": "mean: 678.0867509986207 usec\nrounds: 1502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1295.9783785814254,
            "unit": "iter/sec",
            "range": "stddev: 0.000005972007944694805",
            "extra": "mean: 771.6178113207393 usec\nrounds: 1325"
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
        "date": 1649688296052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.16423023252742,
            "unit": "iter/sec",
            "range": "stddev: 0.000034206468271977486",
            "extra": "mean: 5.046319402985051 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.2397603217164,
            "unit": "iter/sec",
            "range": "stddev: 0.000009075624352121656",
            "extra": "mean: 3.872370384615424 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.6982570329757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001518852578401177",
            "extra": "mean: 2.5144691542288644 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 801.9880601678938,
            "unit": "iter/sec",
            "range": "stddev: 0.000009221303067213077",
            "extra": "mean: 1.2469013563501843 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.7042443148627,
            "unit": "iter/sec",
            "range": "stddev: 0.000016845283804605778",
            "extra": "mean: 5.414060752688034 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.1981907795185,
            "unit": "iter/sec",
            "range": "stddev: 0.000010586280818443133",
            "extra": "mean: 4.128849999999939 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.6950463869711,
            "unit": "iter/sec",
            "range": "stddev: 0.000009899285831430898",
            "extra": "mean: 2.5994615979382365 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 738.740172327568,
            "unit": "iter/sec",
            "range": "stddev: 0.000009166442339477137",
            "extra": "mean: 1.3536559096945735 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.065601692750345,
            "unit": "iter/sec",
            "range": "stddev: 0.00012501141387879166",
            "extra": "mean: 39.895311999999876 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.516737757713077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004982820343526071",
            "extra": "mean: 37.71202962962984 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.9335693390391,
            "unit": "iter/sec",
            "range": "stddev: 0.00001086087552124278",
            "extra": "mean: 3.345224834437507 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.9231613932926,
            "unit": "iter/sec",
            "range": "stddev: 0.000008984236471661555",
            "extra": "mean: 2.024606412825693 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1464.1196108870529,
            "unit": "iter/sec",
            "range": "stddev: 0.000005375406800730125",
            "extra": "mean: 683.0043068640676 usec\nrounds: 1486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1125.3589610947004,
            "unit": "iter/sec",
            "range": "stddev: 0.00034781675541371154",
            "extra": "mean: 888.6053557766522 usec\nrounds: 1307"
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
        "date": 1649777629011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.00650571117595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644078744434023",
            "extra": "mean: 7.873612413793106 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.84167663371966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191816042077304",
            "extra": "mean: 5.993706249999972 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.93768984703848,
            "unit": "iter/sec",
            "range": "stddev: 0.0007846604207167396",
            "extra": "mean: 6.175214682539748 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 461.661034762721,
            "unit": "iter/sec",
            "range": "stddev: 0.0003412244471474786",
            "extra": "mean: 2.166091406249973 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.995270112581,
            "unit": "iter/sec",
            "range": "stddev: 0.000459974892669125",
            "extra": "mean: 8.696009836065382 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.37429051527758,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657588143927202",
            "extra": "mean: 6.606141614907019 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.71729718584396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003709541512778923",
            "extra": "mean: 4.103114598540213 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.8977695183617,
            "unit": "iter/sec",
            "range": "stddev: 0.00021464513220555246",
            "extra": "mean: 1.9805989655171823 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.057582017537612,
            "unit": "iter/sec",
            "range": "stddev: 0.0018086948959579597",
            "extra": "mean: 55.37839999999973 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.008676143093723,
            "unit": "iter/sec",
            "range": "stddev: 0.0028697845822679667",
            "extra": "mean: 49.97831904761796 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.4193796435761,
            "unit": "iter/sec",
            "range": "stddev: 0.00034137508594603424",
            "extra": "mean: 5.542641826923083 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.6282640507774,
            "unit": "iter/sec",
            "range": "stddev: 0.00018399509003091944",
            "extra": "mean: 3.158277745664648 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 897.4775799940437,
            "unit": "iter/sec",
            "range": "stddev: 0.00017526846847692036",
            "extra": "mean: 1.1142339622641455 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 864.0149464916418,
            "unit": "iter/sec",
            "range": "stddev: 0.00034037281956224877",
            "extra": "mean: 1.1573873855545318 msec\nrounds: 983"
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
        "date": 1649968442557,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.68882164713946,
            "unit": "iter/sec",
            "range": "stddev: 0.00031020775262594004",
            "extra": "mean: 8.019965116279062 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.63150080377852,
            "unit": "iter/sec",
            "range": "stddev: 0.00020603288476173773",
            "extra": "mean: 6.037498876404476 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.74852735992548,
            "unit": "iter/sec",
            "range": "stddev: 0.0002073085061032018",
            "extra": "mean: 4.052709090909089 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.2853621004527,
            "unit": "iter/sec",
            "range": "stddev: 0.00025697467637069",
            "extra": "mean: 1.9110031971581014 msec\nrounds: 563"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.69969066746576,
            "unit": "iter/sec",
            "range": "stddev: 0.0004176662637123912",
            "extra": "mean: 8.718419327730995 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.36545994230636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004091367598718726",
            "extra": "mean: 6.4781331288343065 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.87432726285024,
            "unit": "iter/sec",
            "range": "stddev: 0.0003570154733678586",
            "extra": "mean: 4.257596015936172 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.73962678110877,
            "unit": "iter/sec",
            "range": "stddev: 0.00016862745117733366",
            "extra": "mean: 1.9773020484171278 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.29773124504226,
            "unit": "iter/sec",
            "range": "stddev: 0.0009021766193567268",
            "extra": "mean: 54.65158421052601 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.288522106760087,
            "unit": "iter/sec",
            "range": "stddev: 0.0007541873730161175",
            "extra": "mean: 49.2889523809525 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.34558004272012,
            "unit": "iter/sec",
            "range": "stddev: 0.000651192415693557",
            "extra": "mean: 5.607091578947258 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.35162213420443,
            "unit": "iter/sec",
            "range": "stddev: 0.00035487022728498675",
            "extra": "mean: 3.0735977077363685 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 964.3600225221301,
            "unit": "iter/sec",
            "range": "stddev: 0.00009108335988339645",
            "extra": "mean: 1.0369571287128425 msec\nrounds: 1010"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 877.0514530872803,
            "unit": "iter/sec",
            "range": "stddev: 0.00013103731433822334",
            "extra": "mean: 1.1401839612487188 msec\nrounds: 929"
          }
        ]
      }
    ]
  }
}