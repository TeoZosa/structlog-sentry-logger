window.BENCHMARK_DATA = {
  "lastUpdate": 1643898530545,
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
      }
    ]
  }
}