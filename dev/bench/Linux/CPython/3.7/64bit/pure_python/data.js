window.BENCHMARK_DATA = {
  "lastUpdate": 1674140522139,
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
        "date": 1671164050785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.3516799200632,
            "unit": "iter/sec",
            "range": "stddev: 0.0002427680279832118",
            "extra": "mean: 5.337555555555558 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.74570404847015,
            "unit": "iter/sec",
            "range": "stddev: 0.00021680344924368552",
            "extra": "mean: 4.188557042253543 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.25211978512596,
            "unit": "iter/sec",
            "range": "stddev: 0.00014534061805053652",
            "extra": "mean: 2.6160744394619093 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.7396217291947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006838963026893986",
            "extra": "mean: 1.3267181015452605 msec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.28068128986314,
            "unit": "iter/sec",
            "range": "stddev: 0.00009773166103155687",
            "extra": "mean: 6.087143005181246 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.26284641860494,
            "unit": "iter/sec",
            "range": "stddev: 0.00015443500387297466",
            "extra": "mean: 4.5400303149607035 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.65170441863677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006980661418488097",
            "extra": "mean: 2.952886363636349 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 689.615667178153,
            "unit": "iter/sec",
            "range": "stddev: 0.00004205965299391669",
            "extra": "mean: 1.450083064516084 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.737009103151706,
            "unit": "iter/sec",
            "range": "stddev: 0.0003884313150044402",
            "extra": "mean: 48.2229619047626 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.72162379148642,
            "unit": "iter/sec",
            "range": "stddev: 0.00030851168420201625",
            "extra": "mean: 46.03707391304422 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.880630232255,
            "unit": "iter/sec",
            "range": "stddev: 0.00007617572246050332",
            "extra": "mean: 3.7610863157894165 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 442.82736488382506,
            "unit": "iter/sec",
            "range": "stddev: 0.000030236314107675942",
            "extra": "mean: 2.2582163599179292 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 982.9358152022625,
            "unit": "iter/sec",
            "range": "stddev: 0.000036821195852620436",
            "extra": "mean: 1.0173604263206404 msec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 892.5826647797504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326041742960013",
            "extra": "mean: 1.120344411177597 msec\nrounds: 1002"
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
        "date": 1671168294522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.55681054972132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979546946885682",
            "extra": "mean: 8.22660610687019 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.06961552682975,
            "unit": "iter/sec",
            "range": "stddev: 0.00029353922038333056",
            "extra": "mean: 6.208495604395527 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.58760469462302,
            "unit": "iter/sec",
            "range": "stddev: 0.0002622781892009156",
            "extra": "mean: 4.1392852140077405 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.1649522024391,
            "unit": "iter/sec",
            "range": "stddev: 0.0002732681530329825",
            "extra": "mean: 1.956315658362988 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.41110945796136,
            "unit": "iter/sec",
            "range": "stddev: 0.0008352480270403884",
            "extra": "mean: 8.517081600000097 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.45612028678997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005893370681909124",
            "extra": "mean: 6.350975739644822 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 238.95727733526948,
            "unit": "iter/sec",
            "range": "stddev: 0.000401456092610646",
            "extra": "mean: 4.184848484848394 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.2552892662362,
            "unit": "iter/sec",
            "range": "stddev: 0.00034499617688825125",
            "extra": "mean: 1.9370261589403175 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.69614453167721,
            "unit": "iter/sec",
            "range": "stddev: 0.0038709287242301646",
            "extra": "mean: 56.50948421052604 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.861326622724533,
            "unit": "iter/sec",
            "range": "stddev: 0.002894769600938862",
            "extra": "mean: 53.01854000000077 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.10152245137104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155353203860214",
            "extra": "mean: 5.521764734299889 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.3565931403442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005479759041648051",
            "extra": "mean: 3.1609899135447237 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 570.1569460556254,
            "unit": "iter/sec",
            "range": "stddev: 0.0006449684322931186",
            "extra": "mean: 1.7539030383091017 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 579.4948066112225,
            "unit": "iter/sec",
            "range": "stddev: 0.000390548695120548",
            "extra": "mean: 1.7256410041839947 msec\nrounds: 717"
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
        "date": 1671338136130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.47073851201978,
            "unit": "iter/sec",
            "range": "stddev: 0.000017194998110237396",
            "extra": "mean: 4.9389852941176215 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.09274885068965,
            "unit": "iter/sec",
            "range": "stddev: 0.000011212543552778695",
            "extra": "mean: 3.716190808823562 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.39504419188756,
            "unit": "iter/sec",
            "range": "stddev: 0.000009995778927578369",
            "extra": "mean: 2.401565566037739 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.1077569935677,
            "unit": "iter/sec",
            "range": "stddev: 0.000005326014851407759",
            "extra": "mean: 1.194589336492893 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.61061152954306,
            "unit": "iter/sec",
            "range": "stddev: 0.000011075419196852333",
            "extra": "mean: 5.165006153846117 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.81657866406445,
            "unit": "iter/sec",
            "range": "stddev: 0.000009886314951017458",
            "extra": "mean: 3.924391439688634 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.34448001000396,
            "unit": "iter/sec",
            "range": "stddev: 0.000010588498110781464",
            "extra": "mean: 2.45492463768121 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.0960635189732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073824233132051234",
            "extra": "mean: 1.2624731343284183 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.113633476071456,
            "unit": "iter/sec",
            "range": "stddev: 0.000500704022398845",
            "extra": "mean: 38.29417307692259 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.123901984264382,
            "unit": "iter/sec",
            "range": "stddev: 0.00034953957008289284",
            "extra": "mean: 36.86785185185149 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.88113823783226,
            "unit": "iter/sec",
            "range": "stddev: 0.000010679839910206058",
            "extra": "mean: 3.196101898734029 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.7272979077874,
            "unit": "iter/sec",
            "range": "stddev: 0.000009045144992814422",
            "extra": "mean: 1.839157246376829 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.4764237823208,
            "unit": "iter/sec",
            "range": "stddev: 0.000021201026983903978",
            "extra": "mean: 869.2051217463347 usec\nrounds: 1191"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1063.9768817562776,
            "unit": "iter/sec",
            "range": "stddev: 0.00002177960459180467",
            "extra": "mean: 939.8700452488471 usec\nrounds: 1105"
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
        "date": 1671350483363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.99175037189534,
            "unit": "iter/sec",
            "range": "stddev: 0.0004535330236567763",
            "extra": "mean: 5.747398930481297 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.16025434285228,
            "unit": "iter/sec",
            "range": "stddev: 0.0001509012437696811",
            "extra": "mean: 4.326003200000031 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 369.0007996275602,
            "unit": "iter/sec",
            "range": "stddev: 0.00007936138429657696",
            "extra": "mean: 2.7100212276215117 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 715.5407284150338,
            "unit": "iter/sec",
            "range": "stddev: 0.00019962533437038372",
            "extra": "mean: 1.3975444866919886 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.20819010531244,
            "unit": "iter/sec",
            "range": "stddev: 0.00022696248022894663",
            "extra": "mean: 6.241878142076585 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.51724426507656,
            "unit": "iter/sec",
            "range": "stddev: 0.00007881150532436818",
            "extra": "mean: 4.576297872340595 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.2050302274642,
            "unit": "iter/sec",
            "range": "stddev: 0.00006045011474049647",
            "extra": "mean: 2.847339627659468 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 694.765772322412,
            "unit": "iter/sec",
            "range": "stddev: 0.00004510366754689442",
            "extra": "mean: 1.4393340026772958 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.04616063979582,
            "unit": "iter/sec",
            "range": "stddev: 0.0005781739575741431",
            "extra": "mean: 47.51460454545411 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.163218808594426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004739837789705113",
            "extra": "mean: 45.119799999999145 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.5961957841465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007529257478714129",
            "extra": "mean: 3.7509912587412337 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.83072188472875,
            "unit": "iter/sec",
            "range": "stddev: 0.000060955289329727164",
            "extra": "mean: 2.2034647540983268 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 999.2568251211142,
            "unit": "iter/sec",
            "range": "stddev: 0.00003649757711814135",
            "extra": "mean: 1.0007437275985538 msec\nrounds: 1116"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.8553678485672,
            "unit": "iter/sec",
            "range": "stddev: 0.00003994960467118039",
            "extra": "mean: 1.0847688638336048 msec\nrounds: 1153"
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
        "date": 1671357956240,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.52774791220435,
            "unit": "iter/sec",
            "range": "stddev: 0.000017460799252563966",
            "extra": "mean: 4.889312135922311 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.7013151743968,
            "unit": "iter/sec",
            "range": "stddev: 0.000010470273278710004",
            "extra": "mean: 3.7216044117646545 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.6604426562483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001830459827986196",
            "extra": "mean: 2.4470193236715283 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.3431071556406,
            "unit": "iter/sec",
            "range": "stddev: 0.000008445210529178712",
            "extra": "mean: 1.220489915966355 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.2523181872791,
            "unit": "iter/sec",
            "range": "stddev: 0.00001707781004004256",
            "extra": "mean: 5.228694791666655 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.61611227171883,
            "unit": "iter/sec",
            "range": "stddev: 0.000010709578694170532",
            "extra": "mean: 3.958575686274438 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.92301957019873,
            "unit": "iter/sec",
            "range": "stddev: 0.000012137551922041179",
            "extra": "mean: 2.513048883374758 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.1487549378103,
            "unit": "iter/sec",
            "range": "stddev: 0.00000785309607047542",
            "extra": "mean: 1.2818068268015312 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.902187468441504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000663032443963266",
            "extra": "mean: 41.837175000000244 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.25192583812406,
            "unit": "iter/sec",
            "range": "stddev: 0.000046762039447472473",
            "extra": "mean: 39.60093999999998 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.6797606215227,
            "unit": "iter/sec",
            "range": "stddev: 0.00018511010521228178",
            "extra": "mean: 3.2929425324669697 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.5187392749687,
            "unit": "iter/sec",
            "range": "stddev: 0.000011627245974881115",
            "extra": "mean: 1.9511481695569683 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1103.836154726172,
            "unit": "iter/sec",
            "range": "stddev: 0.000020248128008648162",
            "extra": "mean: 905.9315512709125 usec\nrounds: 1141"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1023.406971825307,
            "unit": "iter/sec",
            "range": "stddev: 0.000023256483185872175",
            "extra": "mean: 977.128383458675 usec\nrounds: 1064"
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
        "date": 1671362081569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.26751021073792,
            "unit": "iter/sec",
            "range": "stddev: 0.00007601614661772309",
            "extra": "mean: 5.771422459893043 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.3634645721885,
            "unit": "iter/sec",
            "range": "stddev: 0.00010342361732128791",
            "extra": "mean: 4.34096614173222 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 360.842471250217,
            "unit": "iter/sec",
            "range": "stddev: 0.00008099292970979653",
            "extra": "mean: 2.7712924050633045 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 726.8816696732795,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712566738521271",
            "extra": "mean: 1.3757397410358172 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.62956795911845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001078928613851067",
            "extra": "mean: 6.225503888888677 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.80672833174015,
            "unit": "iter/sec",
            "range": "stddev: 0.00007602935067011759",
            "extra": "mean: 4.6553476595743986 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 348.76698516599464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004640781518956026",
            "extra": "mean: 2.8672438692098474 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 688.0110396676852,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642442071187453",
            "extra": "mean: 1.4534650497512482 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.529631649137233,
            "unit": "iter/sec",
            "range": "stddev: 0.00020353312571497762",
            "extra": "mean: 48.71007999999968 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.671990095506576,
            "unit": "iter/sec",
            "range": "stddev: 0.00028568307766659197",
            "extra": "mean: 46.14250909090891 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.4915104719417,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200173971823139",
            "extra": "mean: 3.8096470175438006 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 444.44423953701335,
            "unit": "iter/sec",
            "range": "stddev: 0.00003936714623460705",
            "extra": "mean: 2.250001037344348 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 990.7894386572098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326141193498245",
            "extra": "mean: 1.0092961844196413 msec\nrounds: 1258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 903.7999994635783,
            "unit": "iter/sec",
            "range": "stddev: 0.000032089407289858555",
            "extra": "mean: 1.1064394784172586 msec\nrounds: 1112"
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
        "date": 1671374147402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.01979286495393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000484871573446298",
            "extra": "mean: 5.024625870646726 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.13283399564614,
            "unit": "iter/sec",
            "range": "stddev: 0.00017062307064459457",
            "extra": "mean: 3.8441898496240468 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.4780305912578,
            "unit": "iter/sec",
            "range": "stddev: 0.000011127739438887647",
            "extra": "mean: 2.4481120772946703 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.7819828629362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064696789391881565",
            "extra": "mean: 1.2109733812949766 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.18925076203243,
            "unit": "iter/sec",
            "range": "stddev: 0.000011881088432288693",
            "extra": "mean: 5.285712565445001 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.69032961732356,
            "unit": "iter/sec",
            "range": "stddev: 0.000012270151763366835",
            "extra": "mean: 4.021065079365036 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.38860097714854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001095408847180447",
            "extra": "mean: 2.5038270935960343 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.4869329282994,
            "unit": "iter/sec",
            "range": "stddev: 0.000006303649575286536",
            "extra": "mean: 1.260260199004892 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.013646759089596,
            "unit": "iter/sec",
            "range": "stddev: 0.00003526258160637398",
            "extra": "mean: 38.44136153846186 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.055263080367844,
            "unit": "iter/sec",
            "range": "stddev: 0.00004324310264035465",
            "extra": "mean: 36.961385185185335 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.5655994898628,
            "unit": "iter/sec",
            "range": "stddev: 0.000010643192467398941",
            "extra": "mean: 3.2513389067523444 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.3042117618729,
            "unit": "iter/sec",
            "range": "stddev: 0.000009756797757165778",
            "extra": "mean: 1.8271374100718427 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1135.1172006107251,
            "unit": "iter/sec",
            "range": "stddev: 0.00002027926591482376",
            "extra": "mean: 880.9662997459396 usec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.4049149735383,
            "unit": "iter/sec",
            "range": "stddev: 0.000018845902022039005",
            "extra": "mean: 950.2046082948443 usec\nrounds: 1085"
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
        "date": 1671377971917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.41133965519177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005945212332087237",
            "extra": "mean: 7.787474242424269 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.33202775946097,
            "unit": "iter/sec",
            "range": "stddev: 0.0009888593016030196",
            "extra": "mean: 6.355984946236519 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.46867032656112,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162900851352597",
            "extra": "mean: 4.211081818181844 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 469.9802687810096,
            "unit": "iter/sec",
            "range": "stddev: 0.0010093854015232042",
            "extra": "mean: 2.127748900169161 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.24949271510009,
            "unit": "iter/sec",
            "range": "stddev: 0.0008478832374983964",
            "extra": "mean: 8.908726229508185 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.68863356023667,
            "unit": "iter/sec",
            "range": "stddev: 0.001159506517365451",
            "extra": "mean: 6.592451764705842 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.835437121161,
            "unit": "iter/sec",
            "range": "stddev: 0.0007499259167354292",
            "extra": "mean: 4.135043283582108 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.7734293357873,
            "unit": "iter/sec",
            "range": "stddev: 0.0002069722034605389",
            "extra": "mean: 1.9426022071308169 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.276460558795044,
            "unit": "iter/sec",
            "range": "stddev: 0.0022519100329471894",
            "extra": "mean: 57.88222631579032 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.544059526431163,
            "unit": "iter/sec",
            "range": "stddev: 0.0026331265489952763",
            "extra": "mean: 53.925624999999755 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.12090249382075,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901945434204727",
            "extra": "mean: 5.4908579207920925 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.24135179070606,
            "unit": "iter/sec",
            "range": "stddev: 0.00025709840462711505",
            "extra": "mean: 2.9390901333331576 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 662.3966310906904,
            "unit": "iter/sec",
            "range": "stddev: 0.00017623360495852864",
            "extra": "mean: 1.509669513797825 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 607.6565551569961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007071790866920504",
            "extra": "mean: 1.64566644021743 msec\nrounds: 736"
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
        "date": 1671379040182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.35321211114405,
            "unit": "iter/sec",
            "range": "stddev: 0.0006687275580832615",
            "extra": "mean: 6.607061627906941 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.0101925233245,
            "unit": "iter/sec",
            "range": "stddev: 0.000593021539916397",
            "extra": "mean: 5.0248682608695905 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.8953354790619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004930172006606774",
            "extra": "mean: 3.414188888888901 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 601.0156401393176,
            "unit": "iter/sec",
            "range": "stddev: 0.000248773841013079",
            "extra": "mean: 1.6638502115655367 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.63038328341355,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279072978438282",
            "extra": "mean: 7.265837500000005 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 192.11520409885358,
            "unit": "iter/sec",
            "range": "stddev: 0.0003838730166250535",
            "extra": "mean: 5.205210096153797 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 277.3905517752022,
            "unit": "iter/sec",
            "range": "stddev: 0.00045649793231441007",
            "extra": "mean: 3.605025454545409 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.4446601269785,
            "unit": "iter/sec",
            "range": "stddev: 0.00022299785912237836",
            "extra": "mean: 1.7169013100437567 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.29891189672022,
            "unit": "iter/sec",
            "range": "stddev: 0.0016802064551747172",
            "extra": "mean: 44.84523750000028 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.179139516167783,
            "unit": "iter/sec",
            "range": "stddev: 0.0016258755999976706",
            "extra": "mean: 43.14224000000024 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.70404148965736,
            "unit": "iter/sec",
            "range": "stddev: 0.0010123820901578157",
            "extra": "mean: 5.8580921182266685 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 388.12491192991024,
            "unit": "iter/sec",
            "range": "stddev: 0.00021898834066120049",
            "extra": "mean: 2.5764901176469333 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 743.5062737826016,
            "unit": "iter/sec",
            "range": "stddev: 0.00018103754275922043",
            "extra": "mean: 1.3449785634120903 msec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 742.8113248697994,
            "unit": "iter/sec",
            "range": "stddev: 0.00015459003653441609",
            "extra": "mean: 1.3462368794327157 msec\nrounds: 846"
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
        "date": 1671419418108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.3465622465384,
            "unit": "iter/sec",
            "range": "stddev: 0.000014620854554199768",
            "extra": "mean: 4.942016256157608 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.6413175689148,
            "unit": "iter/sec",
            "range": "stddev: 0.000010340902179796907",
            "extra": "mean: 3.750356505576241 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.32892583373945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010508189258013195",
            "extra": "mean: 2.4311443645084263 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.2925502546029,
            "unit": "iter/sec",
            "range": "stddev: 0.000008435553906624913",
            "extra": "mean: 1.2102251190475735 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.03723337044525,
            "unit": "iter/sec",
            "range": "stddev: 0.000017802238445933998",
            "extra": "mean: 5.289963157894711 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.3492886815153,
            "unit": "iter/sec",
            "range": "stddev: 0.000019535681824833045",
            "extra": "mean: 3.9785272727272365 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.7052015789488,
            "unit": "iter/sec",
            "range": "stddev: 0.000013740778183455551",
            "extra": "mean: 2.4956002469136287 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.2726847099558,
            "unit": "iter/sec",
            "range": "stddev: 0.000008632144158531042",
            "extra": "mean: 1.2766945911950165 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.60009172568971,
            "unit": "iter/sec",
            "range": "stddev: 0.00007283912987301346",
            "extra": "mean: 42.3727166666669 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.924222885161658,
            "unit": "iter/sec",
            "range": "stddev: 0.00010420498756472625",
            "extra": "mean: 40.12161200000094 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.4733195696988,
            "unit": "iter/sec",
            "range": "stddev: 0.000011767217334353692",
            "extra": "mean: 3.262926774193726 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.4534660485192,
            "unit": "iter/sec",
            "range": "stddev: 0.00001039712647909616",
            "extra": "mean: 1.9438104046240166 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1109.4103555750494,
            "unit": "iter/sec",
            "range": "stddev: 0.000022213361161366183",
            "extra": "mean: 901.3797238999649 usec\nrounds: 1159"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1025.1255204997242,
            "unit": "iter/sec",
            "range": "stddev: 0.00001963564469477191",
            "extra": "mean: 975.4902985075662 usec\nrounds: 1072"
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
        "date": 1671423852541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.7398442318801,
            "unit": "iter/sec",
            "range": "stddev: 0.000014886910766782607",
            "extra": "mean: 4.932429556650283 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.700242123049,
            "unit": "iter/sec",
            "range": "stddev: 0.000013374076113560793",
            "extra": "mean: 3.763639776951682 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.3741845942457,
            "unit": "iter/sec",
            "range": "stddev: 0.000011783906443603474",
            "extra": "mean: 2.4729570731707633 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 810.3993437242704,
            "unit": "iter/sec",
            "range": "stddev: 0.000007442302202551198",
            "extra": "mean: 1.2339595382745512 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.95120211545583,
            "unit": "iter/sec",
            "range": "stddev: 0.000016297272508430487",
            "extra": "mean: 5.292371727748865 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.26331534821864,
            "unit": "iter/sec",
            "range": "stddev: 0.000011607898512124045",
            "extra": "mean: 3.979888582677215 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.60402669732616,
            "unit": "iter/sec",
            "range": "stddev: 0.000014195978956965351",
            "extra": "mean: 2.534186000000025 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 774.377734981425,
            "unit": "iter/sec",
            "range": "stddev: 0.000007276138087999724",
            "extra": "mean: 1.2913594423320902 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.679082135631887,
            "unit": "iter/sec",
            "range": "stddev: 0.00010887671794338297",
            "extra": "mean: 42.231366666667235 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.948907133082226,
            "unit": "iter/sec",
            "range": "stddev: 0.00004796506263242979",
            "extra": "mean: 40.08191599999989 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.7425919597773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000156260358851621",
            "extra": "mean: 3.2922613636365607 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.9268815302098,
            "unit": "iter/sec",
            "range": "stddev: 0.000009965719404353321",
            "extra": "mean: 1.9572272200770326 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1106.2286525694824,
            "unit": "iter/sec",
            "range": "stddev: 0.000022762856026389218",
            "extra": "mean: 903.9722463138694 usec\nrounds: 1153"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1021.2548054802238,
            "unit": "iter/sec",
            "range": "stddev: 0.00001968950529239346",
            "extra": "mean: 979.1875589067812 usec\nrounds: 1061"
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
        "date": 1671428094352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.9059066137633,
            "unit": "iter/sec",
            "range": "stddev: 0.000013008413081398238",
            "extra": "mean: 4.977454455445531 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.37107776737236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003844611119625446",
            "extra": "mean: 3.8704022471910053 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.2278791780694,
            "unit": "iter/sec",
            "range": "stddev: 0.000011217954390769815",
            "extra": "mean: 2.4258427207637543 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.0837242293079,
            "unit": "iter/sec",
            "range": "stddev: 0.000008127632125172136",
            "extra": "mean: 1.2032482057416465 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.76237895606116,
            "unit": "iter/sec",
            "range": "stddev: 0.000017668242805313396",
            "extra": "mean: 5.269748437500073 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.83342137627832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000127470894696644",
            "extra": "mean: 3.9708788235293215 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.2490699238009,
            "unit": "iter/sec",
            "range": "stddev: 0.000027505727702436055",
            "extra": "mean: 2.4676182481752034 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.4429321371667,
            "unit": "iter/sec",
            "range": "stddev: 0.000006486430537523855",
            "extra": "mean: 1.2603300873907395 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.053618346557442,
            "unit": "iter/sec",
            "range": "stddev: 0.00009287662652065382",
            "extra": "mean: 38.382384615384275 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.107037559210113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000276012727314985",
            "extra": "mean: 36.89078888888881 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.82913075862496,
            "unit": "iter/sec",
            "range": "stddev: 0.000014732658423673455",
            "extra": "mean: 3.248555448717816 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.0732322695914,
            "unit": "iter/sec",
            "range": "stddev: 0.00000922648976099661",
            "extra": "mean: 1.827908844765433 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1137.2272788029863,
            "unit": "iter/sec",
            "range": "stddev: 0.000021858127667258214",
            "extra": "mean: 879.3317032041055 usec\nrounds: 1186"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1049.164910095652,
            "unit": "iter/sec",
            "range": "stddev: 0.000019097264518488836",
            "extra": "mean: 953.1390064397315 usec\nrounds: 1087"
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
        "date": 1671437541639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.86935593043259,
            "unit": "iter/sec",
            "range": "stddev: 0.0010055386243838522",
            "extra": "mean: 8.273395620437977 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.4960524056829,
            "unit": "iter/sec",
            "range": "stddev: 0.0008018403373787142",
            "extra": "mean: 6.153995652173933 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.7821540402141,
            "unit": "iter/sec",
            "range": "stddev: 0.0007343009454696815",
            "extra": "mean: 4.241203088803082 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.5509195202092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005028383805452231",
            "extra": "mean: 1.9938155052264968 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.81037542106259,
            "unit": "iter/sec",
            "range": "stddev: 0.0008905449437142492",
            "extra": "mean: 8.943713821138125 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.2694568629115,
            "unit": "iter/sec",
            "range": "stddev: 0.0014189437187450073",
            "extra": "mean: 6.654712280701756 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.55517575893245,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475238133016278",
            "extra": "mean: 4.375311111111067 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.19351115557185,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227020135873889",
            "extra": "mean: 2.0358575129533376 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.16369722659952,
            "unit": "iter/sec",
            "range": "stddev: 0.0026608371697377535",
            "extra": "mean: 58.26250526315771 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.94026079442344,
            "unit": "iter/sec",
            "range": "stddev: 0.0055777590884639044",
            "extra": "mean: 59.03096842105227 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.01636785549977,
            "unit": "iter/sec",
            "range": "stddev: 0.0012948919905170118",
            "extra": "mean: 5.916586734693933 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.24420400982655,
            "unit": "iter/sec",
            "range": "stddev: 0.0012385880845391004",
            "extra": "mean: 3.44537457142863 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 587.9395877520052,
            "unit": "iter/sec",
            "range": "stddev: 0.000580408981586079",
            "extra": "mean: 1.700855021216573 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 613.8172081956727,
            "unit": "iter/sec",
            "range": "stddev: 0.00029859313778975497",
            "extra": "mean: 1.6291495035460457 msec\nrounds: 705"
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
        "date": 1671465424315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.5963938302088,
            "unit": "iter/sec",
            "range": "stddev: 0.00013812433232883678",
            "extra": "mean: 4.985134482758608 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.25288534538214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000099824840400253",
            "extra": "mean: 3.769987265917631 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.4612360803235,
            "unit": "iter/sec",
            "range": "stddev: 0.000011638333922764176",
            "extra": "mean: 2.4362836538462043 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.7330548482248,
            "unit": "iter/sec",
            "range": "stddev: 0.000007857775948510325",
            "extra": "mean: 1.2052068965517115 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.72666121676832,
            "unit": "iter/sec",
            "range": "stddev: 0.00001678604713581206",
            "extra": "mean: 5.2986684210526915 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.433115128572,
            "unit": "iter/sec",
            "range": "stddev: 0.000010297992231258863",
            "extra": "mean: 3.9930821428571917 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.54887990491795,
            "unit": "iter/sec",
            "range": "stddev: 0.000023870129896305213",
            "extra": "mean: 2.4965742014741856 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.575499716859,
            "unit": "iter/sec",
            "range": "stddev: 0.000008365436820559445",
            "extra": "mean: 1.2617094527363533 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.767828718726836,
            "unit": "iter/sec",
            "range": "stddev: 0.0002361805038874938",
            "extra": "mean: 42.07367916666671 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.23401883486521,
            "unit": "iter/sec",
            "range": "stddev: 0.00004959777553954587",
            "extra": "mean: 39.62904230769318 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.61285496827685,
            "unit": "iter/sec",
            "range": "stddev: 0.000012053284005590275",
            "extra": "mean: 3.2936681818182088 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.19990874027,
            "unit": "iter/sec",
            "range": "stddev: 0.000010892378497314217",
            "extra": "mean: 1.9677295938104513 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1090.704607506047,
            "unit": "iter/sec",
            "range": "stddev: 0.00003549333385341076",
            "extra": "mean: 916.8385217392197 usec\nrounds: 1150"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1010.6755588301844,
            "unit": "iter/sec",
            "range": "stddev: 0.00003659794732919523",
            "extra": "mean: 989.4372049102078 usec\nrounds: 1059"
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
        "date": 1671540523000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.00530914982798,
            "unit": "iter/sec",
            "range": "stddev: 0.000033869976772948735",
            "extra": "mean: 5.714112359550567 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.28076982861427,
            "unit": "iter/sec",
            "range": "stddev: 0.00001491091311043865",
            "extra": "mean: 4.342524999999986 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.93595468420284,
            "unit": "iter/sec",
            "range": "stddev: 0.000020181496713078924",
            "extra": "mean: 2.8016230555555675 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.390600941807,
            "unit": "iter/sec",
            "range": "stddev: 0.000009315421951266175",
            "extra": "mean: 1.3747771812080405 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 161.8998128634428,
            "unit": "iter/sec",
            "range": "stddev: 0.000027987390228841365",
            "extra": "mean: 6.176659393939308 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 215.62089711093142,
            "unit": "iter/sec",
            "range": "stddev: 0.000014077795813651996",
            "extra": "mean: 4.6377694063925805 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.34548117407553,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230944072927463",
            "extra": "mean: 2.88729044943824 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.2783907196167,
            "unit": "iter/sec",
            "range": "stddev: 0.000008848547295788119",
            "extra": "mean: 1.4678287373003656 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.000548355825458,
            "unit": "iter/sec",
            "range": "stddev: 0.0018983747163236072",
            "extra": "mean: 52.630060000000256 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.63317011001353,
            "unit": "iter/sec",
            "range": "stddev: 0.003236405624440924",
            "extra": "mean: 50.93420952380832 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.6425427680182,
            "unit": "iter/sec",
            "range": "stddev: 0.0007122876272641557",
            "extra": "mean: 4.208000757575547 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 395.98447215224706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789592765344077",
            "extra": "mean: 2.5253515486726528 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 896.7024385628443,
            "unit": "iter/sec",
            "range": "stddev: 0.00020373364448052127",
            "extra": "mean: 1.115197145669317 msec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 898.1562290752693,
            "unit": "iter/sec",
            "range": "stddev: 0.000027323077640062442",
            "extra": "mean: 1.1133920443101395 msec\nrounds: 993"
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
        "date": 1671541455081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.08179753717722,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162893182964076",
            "extra": "mean: 8.327656818181795 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.96367222703557,
            "unit": "iter/sec",
            "range": "stddev: 0.0007389785429523137",
            "extra": "mean: 6.212581920904009 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.9956225161031,
            "unit": "iter/sec",
            "range": "stddev: 0.0007282306305260743",
            "extra": "mean: 4.366895703124977 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 475.4106359367884,
            "unit": "iter/sec",
            "range": "stddev: 0.0010747375580814058",
            "extra": "mean: 2.103444736842114 msec\nrounds: 570"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.98826035916606,
            "unit": "iter/sec",
            "range": "stddev: 0.0020013004442939394",
            "extra": "mean: 9.260265853658785 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.69151258758717,
            "unit": "iter/sec",
            "range": "stddev: 0.0009729389043745033",
            "extra": "mean: 6.636073809523711 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.2640623487426,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760204024219908",
            "extra": "mean: 4.479001185770693 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.0100866829296,
            "unit": "iter/sec",
            "range": "stddev: 0.0004280762878424221",
            "extra": "mean: 2.0449475935828545 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.299172465253136,
            "unit": "iter/sec",
            "range": "stddev: 0.0027877797895981813",
            "extra": "mean: 57.806233333333445 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.336929073254723,
            "unit": "iter/sec",
            "range": "stddev: 0.006680988113571616",
            "extra": "mean: 57.68034210526228 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.49708596441306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005988049600703968",
            "extra": "mean: 5.763785567010131 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.2965692794725,
            "unit": "iter/sec",
            "range": "stddev: 0.0010551016823472203",
            "extra": "mean: 3.2020844875343646 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 625.5132344986271,
            "unit": "iter/sec",
            "range": "stddev: 0.000515911593837968",
            "extra": "mean: 1.5986871977241832 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 591.0745512294757,
            "unit": "iter/sec",
            "range": "stddev: 0.00038853968367788354",
            "extra": "mean: 1.6918339622640348 msec\nrounds: 689"
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
        "date": 1671543686756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.24835627989293,
            "unit": "iter/sec",
            "range": "stddev: 0.0002802949938920183",
            "extra": "mean: 5.069750738916235 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.7540974034063,
            "unit": "iter/sec",
            "range": "stddev: 0.000011461757330320959",
            "extra": "mean: 3.734770110701126 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.7508425761306,
            "unit": "iter/sec",
            "range": "stddev: 0.000048366715086817496",
            "extra": "mean: 2.4169135071090495 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.8193622424225,
            "unit": "iter/sec",
            "range": "stddev: 0.000005969751651046793",
            "extra": "mean: 1.1879033018867835 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.61780329946336,
            "unit": "iter/sec",
            "range": "stddev: 0.00002339889916857831",
            "extra": "mean: 5.21872176165794 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.6566940942873,
            "unit": "iter/sec",
            "range": "stddev: 0.000011933944361878272",
            "extra": "mean: 3.942336328125004 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.7632964052846,
            "unit": "iter/sec",
            "range": "stddev: 0.000014428878920062629",
            "extra": "mean: 2.4644910194173395 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.0839146739802,
            "unit": "iter/sec",
            "range": "stddev: 0.000005683170063821966",
            "extra": "mean: 1.2609006203474429 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.466138067997857,
            "unit": "iter/sec",
            "range": "stddev: 0.00013495230792895285",
            "extra": "mean: 39.267830769230564 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.237486367385497,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926699570843642",
            "extra": "mean: 36.714107407407916 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.71931323732304,
            "unit": "iter/sec",
            "range": "stddev: 0.000011521631206107763",
            "extra": "mean: 3.2183387301587336 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.5346650064024,
            "unit": "iter/sec",
            "range": "stddev: 0.000009180057560876011",
            "extra": "mean: 1.8398090579709772 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1143.2797395043474,
            "unit": "iter/sec",
            "range": "stddev: 0.00004545078977750652",
            "extra": "mean: 874.6765690377193 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1067.324248960931,
            "unit": "iter/sec",
            "range": "stddev: 0.000020943965204462426",
            "extra": "mean: 936.922402890712 usec\nrounds: 1107"
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
        "date": 1671549013496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.60482152393953,
            "unit": "iter/sec",
            "range": "stddev: 0.00002920711383736949",
            "extra": "mean: 5.662359562841527 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.27815252346636,
            "unit": "iter/sec",
            "range": "stddev: 0.000023585694726769597",
            "extra": "mean: 4.323797942386868 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 359.04806878097054,
            "unit": "iter/sec",
            "range": "stddev: 0.000014190766358398654",
            "extra": "mean: 2.7851424000000073 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.0365549945899,
            "unit": "iter/sec",
            "range": "stddev: 0.000012205253962857401",
            "extra": "mean: 1.3754466582597642 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.41000051483644,
            "unit": "iter/sec",
            "range": "stddev: 0.000021771306996207344",
            "extra": "mean: 6.119576506024227 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.41820731892872,
            "unit": "iter/sec",
            "range": "stddev: 0.000023857213277469587",
            "extra": "mean: 4.599430803571614 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 350.5359587402401,
            "unit": "iter/sec",
            "range": "stddev: 0.000033255494956189416",
            "extra": "mean: 2.852774373259196 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.8877836611463,
            "unit": "iter/sec",
            "range": "stddev: 0.000018359909434608046",
            "extra": "mean: 1.4665169606513064 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.633720510360643,
            "unit": "iter/sec",
            "range": "stddev: 0.00007255510713515096",
            "extra": "mean: 48.46435714285643 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.881733606204854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001376511139716137",
            "extra": "mean: 45.70021818181887 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.6266264772691,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109756968813775",
            "extra": "mean: 3.7789092250922756 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 445.18957487427474,
            "unit": "iter/sec",
            "range": "stddev: 0.00002041475268854438",
            "extra": "mean: 2.246234090909268 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 989.1179686509657,
            "unit": "iter/sec",
            "range": "stddev: 0.000024542371573696728",
            "extra": "mean: 1.011001752767545 msec\nrounds: 1084"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 900.3905980166385,
            "unit": "iter/sec",
            "range": "stddev: 0.000025549354235217533",
            "extra": "mean: 1.1106291005290136 msec\nrounds: 945"
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
        "date": 1671551175143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.35022798967648,
            "unit": "iter/sec",
            "range": "stddev: 0.00005638142946009298",
            "extra": "mean: 4.991259605911341 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.4037935511031,
            "unit": "iter/sec",
            "range": "stddev: 0.000020292983161804913",
            "extra": "mean: 3.767843656716427 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.22104310230594,
            "unit": "iter/sec",
            "range": "stddev: 0.000013706732367512449",
            "extra": "mean: 2.4317821686747054 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.8415749842416,
            "unit": "iter/sec",
            "range": "stddev: 0.000014417990342599168",
            "extra": "mean: 1.2050492890995366 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.5759700928183,
            "unit": "iter/sec",
            "range": "stddev: 0.000032467472766362374",
            "extra": "mean: 5.219861340206193 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.64629265539153,
            "unit": "iter/sec",
            "range": "stddev: 0.000024738509609124237",
            "extra": "mean: 3.9738316406251055 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.99516049620854,
            "unit": "iter/sec",
            "range": "stddev: 0.000025792177762088418",
            "extra": "mean: 2.5125933660932707 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 782.6629703420163,
            "unit": "iter/sec",
            "range": "stddev: 0.000010520641264920819",
            "extra": "mean: 1.2776891687657197 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.50304156254909,
            "unit": "iter/sec",
            "range": "stddev: 0.0009561347364086186",
            "extra": "mean: 40.81126000000012 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.66041298954566,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853372762281928",
            "extra": "mean: 37.508796296296296 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.2613143017539,
            "unit": "iter/sec",
            "range": "stddev: 0.000022229755391965982",
            "extra": "mean: 3.2440009615384633 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.8197305694409,
            "unit": "iter/sec",
            "range": "stddev: 0.000017270563590664605",
            "extra": "mean: 1.8388446460978651 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1129.9562060986095,
            "unit": "iter/sec",
            "range": "stddev: 0.000027592445651694156",
            "extra": "mean: 884.9900505902717 usec\nrounds: 1186"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1044.0732906911421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000378886524169745",
            "extra": "mean: 957.7871677361203 usec\nrounds: 1091"
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
        "date": 1671589078815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.45589279208525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006397285496678932",
            "extra": "mean: 7.607114285714307 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.8281995445427,
            "unit": "iter/sec",
            "range": "stddev: 0.00038566774517446084",
            "extra": "mean: 5.623405076142146 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.4406489002964,
            "unit": "iter/sec",
            "range": "stddev: 0.0003264178071844978",
            "extra": "mean: 4.008969686411089 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.6961675282071,
            "unit": "iter/sec",
            "range": "stddev: 0.0003179287926630901",
            "extra": "mean: 1.7995445324881425 msec\nrounds: 631"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.06067160585953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004906708664589946",
            "extra": "mean: 8.126072992700822 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.50026378995176,
            "unit": "iter/sec",
            "range": "stddev: 0.001047866995093809",
            "extra": "mean: 6.23051935483863 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.49059795884995,
            "unit": "iter/sec",
            "range": "stddev: 0.0007019065649568396",
            "extra": "mean: 4.123871228070036 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.0632253447881,
            "unit": "iter/sec",
            "range": "stddev: 0.0003737889168284317",
            "extra": "mean: 1.897305582922868 msec\nrounds: 609"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.363245481320483,
            "unit": "iter/sec",
            "range": "stddev: 0.001813870562396845",
            "extra": "mean: 51.64423499999984 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.075278470401845,
            "unit": "iter/sec",
            "range": "stddev: 0.00213507515977976",
            "extra": "mean: 49.81250952380852 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.37990391222328,
            "unit": "iter/sec",
            "range": "stddev: 0.0008061213058550414",
            "extra": "mean: 5.308421860465306 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.00106327870645,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011055116877685",
            "extra": "mean: 2.881835549872116 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 675.6533153894936,
            "unit": "iter/sec",
            "range": "stddev: 0.00022257037063378555",
            "extra": "mean: 1.480048979591746 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 641.683723406096,
            "unit": "iter/sec",
            "range": "stddev: 0.00019702541863070056",
            "extra": "mean: 1.5584001331558477 msec\nrounds: 751"
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
        "date": 1672071539848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.54787353029965,
            "unit": "iter/sec",
            "range": "stddev: 0.000013606776424868353",
            "extra": "mean: 4.937104411764696 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.0842884701717,
            "unit": "iter/sec",
            "range": "stddev: 0.000017607471887923003",
            "extra": "mean: 3.7301701107010774 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.55748035311245,
            "unit": "iter/sec",
            "range": "stddev: 0.000011625612386766162",
            "extra": "mean: 2.4006290780141746 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.6030444567621,
            "unit": "iter/sec",
            "range": "stddev: 0.000010530509095018579",
            "extra": "mean: 1.20105253837074 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.08333892779658,
            "unit": "iter/sec",
            "range": "stddev: 0.000014910244763026055",
            "extra": "mean: 5.179110769230842 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.50505259243036,
            "unit": "iter/sec",
            "range": "stddev: 0.000016836724227333584",
            "extra": "mean: 3.9446945525292456 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.2313520915173,
            "unit": "iter/sec",
            "range": "stddev: 0.000011746916262300938",
            "extra": "mean: 2.4436055421686453 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.0606366160076,
            "unit": "iter/sec",
            "range": "stddev: 0.000008109097097406089",
            "extra": "mean: 1.2689378881986493 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.426144728259903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973302225366296",
            "extra": "mean: 39.32959600000032 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.243609632976334,
            "unit": "iter/sec",
            "range": "stddev: 0.000056476913821572435",
            "extra": "mean: 36.70585555555661 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.64601708277354,
            "unit": "iter/sec",
            "range": "stddev: 0.000011194769838487825",
            "extra": "mean: 3.219098089171843 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.853866659223,
            "unit": "iter/sec",
            "range": "stddev: 0.000013225104874737456",
            "extra": "mean: 1.8557907103827298 msec\nrounds: 549"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.5453508068379,
            "unit": "iter/sec",
            "range": "stddev: 0.000021682946487236138",
            "extra": "mean: 869.1530492898297 usec\nrounds: 1197"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1070.3841740923597,
            "unit": "iter/sec",
            "range": "stddev: 0.00002066305581039855",
            "extra": "mean: 934.2440071556153 usec\nrounds: 1118"
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
        "date": 1672074346465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.7434367278488,
            "unit": "iter/sec",
            "range": "stddev: 0.000014929165664667369",
            "extra": "mean: 4.932342156862728 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.1224364869765,
            "unit": "iter/sec",
            "range": "stddev: 0.00011522625421523152",
            "extra": "mean: 3.7718422222221943 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.6274563745935,
            "unit": "iter/sec",
            "range": "stddev: 0.000011374115550025004",
            "extra": "mean: 2.4293811904761995 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.4628341644997,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504954118864533",
            "extra": "mean: 1.2143838902148123 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.85423422512798,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812499440591333",
            "extra": "mean: 5.351765263157847 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.1043517479024,
            "unit": "iter/sec",
            "range": "stddev: 0.000010895703343132574",
            "extra": "mean: 3.966611417322828 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.4751780663059,
            "unit": "iter/sec",
            "range": "stddev: 0.000012322927972145345",
            "extra": "mean: 2.4970336609337425 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 787.3583014056668,
            "unit": "iter/sec",
            "range": "stddev: 0.00000847531082383265",
            "extra": "mean: 1.270069799498786 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.76858901732755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000667449439001003",
            "extra": "mean: 42.0723333333329 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.17541727247144,
            "unit": "iter/sec",
            "range": "stddev: 0.000043771321662336013",
            "extra": "mean: 39.721287999999504 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.63601717692893,
            "unit": "iter/sec",
            "range": "stddev: 0.000013730908395631966",
            "extra": "mean: 3.27186569579302 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.6886380801186,
            "unit": "iter/sec",
            "range": "stddev: 0.000010343510000637532",
            "extra": "mean: 1.9658390715667995 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1097.319245240296,
            "unit": "iter/sec",
            "range": "stddev: 0.000019931255879207572",
            "extra": "mean: 911.3118213660924 usec\nrounds: 1142"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1012.0375437897015,
            "unit": "iter/sec",
            "range": "stddev: 0.000016379172778660764",
            "extra": "mean: 988.1056351480544 usec\nrounds: 1047"
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
        "date": 1672209676817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.237792264246,
            "unit": "iter/sec",
            "range": "stddev: 0.0010744425467115602",
            "extra": "mean: 8.603053968253953 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.4540299601011,
            "unit": "iter/sec",
            "range": "stddev: 0.0009517521757820435",
            "extra": "mean: 6.602663529411789 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.95347464718967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005362649234472216",
            "extra": "mean: 4.367699601593597 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.28658026782693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049084119876079",
            "extra": "mean: 2.0313371115173466 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.0456130585315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508491425110906",
            "extra": "mean: 9.341812068965494 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.25732720401413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005815569248404351",
            "extra": "mean: 6.745029192546543 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.1634340149718,
            "unit": "iter/sec",
            "range": "stddev: 0.00047430866489081536",
            "extra": "mean: 4.402116935483958 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.4531814636661,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987923827007934",
            "extra": "mean: 2.094446196660435 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.875371258167768,
            "unit": "iter/sec",
            "range": "stddev: 0.0024079501126407226",
            "extra": "mean: 59.25795555555524 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.92141910474214,
            "unit": "iter/sec",
            "range": "stddev: 0.0014328961877441897",
            "extra": "mean: 55.79915263157886 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.626543764924,
            "unit": "iter/sec",
            "range": "stddev: 0.0006159810080479282",
            "extra": "mean: 5.726506282722769 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.66023552543675,
            "unit": "iter/sec",
            "range": "stddev: 0.00039521799095640277",
            "extra": "mean: 3.17803105413096 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 615.0674559324945,
            "unit": "iter/sec",
            "range": "stddev: 0.0003046054369171246",
            "extra": "mean: 1.625837931034597 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 574.9603712920184,
            "unit": "iter/sec",
            "range": "stddev: 0.00023935643414028427",
            "extra": "mean: 1.7392503030302011 msec\nrounds: 660"
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
        "date": 1672216572593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.05413346007515,
            "unit": "iter/sec",
            "range": "stddev: 0.000011688677861067244",
            "extra": "mean: 4.998647029702939 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.34547635776795,
            "unit": "iter/sec",
            "range": "stddev: 0.00001834734773612758",
            "extra": "mean: 3.768671747211888 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.14582540497395,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135959987545549",
            "extra": "mean: 2.4030038004751004 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.2304619671447,
            "unit": "iter/sec",
            "range": "stddev: 0.00000672652733375702",
            "extra": "mean: 1.1958425882353108 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.44850134509807,
            "unit": "iter/sec",
            "range": "stddev: 0.000015726034811009223",
            "extra": "mean: 5.223336787564801 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.25253917821985,
            "unit": "iter/sec",
            "range": "stddev: 0.00001701190276347225",
            "extra": "mean: 3.94862773437496 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.98543787627284,
            "unit": "iter/sec",
            "range": "stddev: 0.000010645716974544934",
            "extra": "mean: 2.4510678743962027 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.0439556130193,
            "unit": "iter/sec",
            "range": "stddev: 0.000007176893309771169",
            "extra": "mean: 1.2609641532757219 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.62099123870479,
            "unit": "iter/sec",
            "range": "stddev: 0.00004141905340077105",
            "extra": "mean: 39.03049615384642 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.22924299679017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004364509253647714",
            "extra": "mean: 36.72522222222196 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.2773236979959,
            "unit": "iter/sec",
            "range": "stddev: 0.000011410087500372695",
            "extra": "mean: 3.222923248407725 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.0813751007479,
            "unit": "iter/sec",
            "range": "stddev: 0.000009818491793315459",
            "extra": "mean: 1.8245465827335965 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.5421727229514,
            "unit": "iter/sec",
            "range": "stddev: 0.000021386202895281405",
            "extra": "mean: 869.9115384616757 usec\nrounds: 1196"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1061.7964577511063,
            "unit": "iter/sec",
            "range": "stddev: 0.00001907172365339541",
            "extra": "mean: 941.8000904975783 usec\nrounds: 1105"
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
        "date": 1672330278051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.47759364474028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004032188853793049",
            "extra": "mean: 8.231970769230808 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.18024061450797,
            "unit": "iter/sec",
            "range": "stddev: 0.0006880548002190496",
            "extra": "mean: 6.402858620689739 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.3130290207653,
            "unit": "iter/sec",
            "range": "stddev: 0.00042447919954775003",
            "extra": "mean: 4.36085120967743 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.7467076533595,
            "unit": "iter/sec",
            "range": "stddev: 0.00028809264774699313",
            "extra": "mean: 2.093159374999971 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.21498405124238,
            "unit": "iter/sec",
            "range": "stddev: 0.0005348581870825516",
            "extra": "mean: 9.073176470588326 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.9881891794602,
            "unit": "iter/sec",
            "range": "stddev: 0.00046015865302120477",
            "extra": "mean: 6.803267701863339 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.19894562104895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003066362143159502",
            "extra": "mean: 4.420887096774093 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.30692513108545,
            "unit": "iter/sec",
            "range": "stddev: 0.00028886645280859144",
            "extra": "mean: 2.158396401515185 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.77048528753273,
            "unit": "iter/sec",
            "range": "stddev: 0.001773776322194004",
            "extra": "mean: 59.62856666666679 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.418010280690556,
            "unit": "iter/sec",
            "range": "stddev: 0.001534262852369421",
            "extra": "mean: 57.411838888887935 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.83296976092686,
            "unit": "iter/sec",
            "range": "stddev: 0.00040154197104333027",
            "extra": "mean: 5.719744973544963 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.44491723240037,
            "unit": "iter/sec",
            "range": "stddev: 0.0003420716242808145",
            "extra": "mean: 3.3173556521739105 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 563.1647781152489,
            "unit": "iter/sec",
            "range": "stddev: 0.00035663288878723284",
            "extra": "mean: 1.7756792307692137 msec\nrounds: 650"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 556.0603479281888,
            "unit": "iter/sec",
            "range": "stddev: 0.00025788723718231924",
            "extra": "mean: 1.79836595744666 msec\nrounds: 611"
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
        "date": 1672331006084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.68525538361541,
            "unit": "iter/sec",
            "range": "stddev: 0.000489405907885878",
            "extra": "mean: 8.150938732394325 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.8468002602034,
            "unit": "iter/sec",
            "range": "stddev: 0.00040140106306492195",
            "extra": "mean: 6.066238461538496 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.33166095084454,
            "unit": "iter/sec",
            "range": "stddev: 0.000386399840709046",
            "extra": "mean: 4.160916610169527 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.2578428373801,
            "unit": "iter/sec",
            "range": "stddev: 0.0002309816330345726",
            "extra": "mean: 2.0397429936306044 msec\nrounds: 628"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.57705344991393,
            "unit": "iter/sec",
            "range": "stddev: 0.0004610689555225718",
            "extra": "mean: 8.65223649635052 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.26561582905197,
            "unit": "iter/sec",
            "range": "stddev: 0.0008480171408253164",
            "extra": "mean: 6.399360439560537 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.8025546175085,
            "unit": "iter/sec",
            "range": "stddev: 0.0003800867635101698",
            "extra": "mean: 4.258897445255619 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 471.6911481208789,
            "unit": "iter/sec",
            "range": "stddev: 0.0004296955192079907",
            "extra": "mean: 2.1200313043477617 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.851314950234016,
            "unit": "iter/sec",
            "range": "stddev: 0.006035381745541975",
            "extra": "mean: 59.34254999999943 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.874197260393405,
            "unit": "iter/sec",
            "range": "stddev: 0.001034418808935991",
            "extra": "mean: 55.94656842105313 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.48566718903962,
            "unit": "iter/sec",
            "range": "stddev: 0.0002816387885818592",
            "extra": "mean: 5.602690769230615 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.4651621710591,
            "unit": "iter/sec",
            "range": "stddev: 0.00032263838128725116",
            "extra": "mean: 3.1599054794520147 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 619.6533063046586,
            "unit": "iter/sec",
            "range": "stddev: 0.0001664716783861345",
            "extra": "mean: 1.6138056390977122 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 576.5324994316168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002450314853403048",
            "extra": "mean: 1.7345075966851218 msec\nrounds: 724"
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
        "date": 1672352910333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.74973928703616,
            "unit": "iter/sec",
            "range": "stddev: 0.000015041204329888056",
            "extra": "mean: 5.0062643564356355 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.41748583040345,
            "unit": "iter/sec",
            "range": "stddev: 0.00007884180879712801",
            "extra": "mean: 3.7818981481481777 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.8759612872259,
            "unit": "iter/sec",
            "range": "stddev: 0.00001172226334083625",
            "extra": "mean: 2.439762499999938 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.6386521097745,
            "unit": "iter/sec",
            "range": "stddev: 0.000006682019675467063",
            "extra": "mean: 1.2245318016928468 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.82611140983767,
            "unit": "iter/sec",
            "range": "stddev: 0.000016553308581649778",
            "extra": "mean: 5.213054639175236 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.7266221029253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000135953608944219",
            "extra": "mean: 3.9412498054474776 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.7355461662172,
            "unit": "iter/sec",
            "range": "stddev: 0.000011614879482740918",
            "extra": "mean: 2.4954112745097476 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.8455349042448,
            "unit": "iter/sec",
            "range": "stddev: 0.000009128328919425767",
            "extra": "mean: 1.2806630188679122 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.141698462345534,
            "unit": "iter/sec",
            "range": "stddev: 0.00006243460628153007",
            "extra": "mean: 38.25306153846119 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.14536887942358,
            "unit": "iter/sec",
            "range": "stddev: 0.000050564068128968",
            "extra": "mean: 36.83869629629562 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.51326185878213,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574509189927626",
            "extra": "mean: 3.241351746032029 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.2352662491433,
            "unit": "iter/sec",
            "range": "stddev: 0.000010437789149910888",
            "extra": "mean: 1.8579235934664875 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1137.8234998542878,
            "unit": "iter/sec",
            "range": "stddev: 0.00001988874724958612",
            "extra": "mean: 878.8709322035115 usec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1057.1003967600143,
            "unit": "iter/sec",
            "range": "stddev: 0.000021313090653843716",
            "extra": "mean: 945.9839416057116 usec\nrounds: 1096"
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
        "date": 1672679992419,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.22286006674912,
            "unit": "iter/sec",
            "range": "stddev: 0.00001373927098450919",
            "extra": "mean: 4.969614285714271 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.7880632802207,
            "unit": "iter/sec",
            "range": "stddev: 0.000012682429229151322",
            "extra": "mean: 3.720403308823525 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.85046705085506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011598005262234516",
            "extra": "mean: 2.4105071090046852 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.2839824929266,
            "unit": "iter/sec",
            "range": "stddev: 0.000006967047438659317",
            "extra": "mean: 1.190073856975392 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.01994351346266,
            "unit": "iter/sec",
            "range": "stddev: 0.000013340841654219046",
            "extra": "mean: 5.180811794871614 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.38036020237436,
            "unit": "iter/sec",
            "range": "stddev: 0.000012392148891442889",
            "extra": "mean: 3.946635797665226 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.9226804072954,
            "unit": "iter/sec",
            "range": "stddev: 0.000014291785379519986",
            "extra": "mean: 2.469607281553457 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.9761342589247,
            "unit": "iter/sec",
            "range": "stddev: 0.000006670657352325325",
            "extra": "mean: 1.2674654613466696 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.03747052383091,
            "unit": "iter/sec",
            "range": "stddev: 0.00006670052669636116",
            "extra": "mean: 38.40618846153836 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.042705841064162,
            "unit": "iter/sec",
            "range": "stddev: 0.00017307495790521538",
            "extra": "mean: 36.97854814814821 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.1763846351383,
            "unit": "iter/sec",
            "range": "stddev: 0.000015330300548723316",
            "extra": "mean: 3.2343996815284215 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 541.3923489054905,
            "unit": "iter/sec",
            "range": "stddev: 0.00001117219475825848",
            "extra": "mean: 1.8470892727273605 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1143.0959855379651,
            "unit": "iter/sec",
            "range": "stddev: 0.000020247856669612846",
            "extra": "mean: 874.8171742807572 usec\nrounds: 1182"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1064.0644667349484,
            "unit": "iter/sec",
            "range": "stddev: 0.000020444477599444415",
            "extra": "mean: 939.7926829268828 usec\nrounds: 1107"
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
        "date": 1672680431662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.2971735788195,
            "unit": "iter/sec",
            "range": "stddev: 0.000013541853718288548",
            "extra": "mean: 4.9925816831683205 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.79021109473535,
            "unit": "iter/sec",
            "range": "stddev: 0.000011081422761623529",
            "extra": "mean: 3.762365799256508 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.32654010171706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000100417064522049",
            "extra": "mean: 2.449020334928248 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.5445607637018,
            "unit": "iter/sec",
            "range": "stddev: 0.000005836012041313692",
            "extra": "mean: 1.2069356886227833 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.89432438904566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012156132279750028",
            "extra": "mean: 5.211201546391777 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.14213039239561,
            "unit": "iter/sec",
            "range": "stddev: 0.000012791121621648235",
            "extra": "mean: 3.981809019607963 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.21793677651266,
            "unit": "iter/sec",
            "range": "stddev: 0.000010379053718884845",
            "extra": "mean: 2.492411002444844 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.6266879856897,
            "unit": "iter/sec",
            "range": "stddev: 0.00000616876169642421",
            "extra": "mean: 1.272869182389862 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.040597291176766,
            "unit": "iter/sec",
            "range": "stddev: 0.00005427937588236763",
            "extra": "mean: 38.40157692307719 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.117314927840667,
            "unit": "iter/sec",
            "range": "stddev: 0.00006139023303545384",
            "extra": "mean: 36.876807407407625 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.944997393278,
            "unit": "iter/sec",
            "range": "stddev: 0.000011935428819471599",
            "extra": "mean: 3.2368221153846 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 540.9681378634986,
            "unit": "iter/sec",
            "range": "stddev: 0.000012151393653196307",
            "extra": "mean: 1.8485377049180818 msec\nrounds: 549"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1130.7501696365878,
            "unit": "iter/sec",
            "range": "stddev: 0.000019698356943864948",
            "extra": "mean: 884.3686491078665 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1041.1110029089818,
            "unit": "iter/sec",
            "range": "stddev: 0.000019042831725015857",
            "extra": "mean: 960.5123730379248 usec\nrounds: 1083"
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
        "date": 1672745085519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.1345004957782,
            "unit": "iter/sec",
            "range": "stddev: 0.000013702142602381869",
            "extra": "mean: 4.94720098522165 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.64474119677186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001032355278788777",
            "extra": "mean: 3.7786505617977415 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.91371624130625,
            "unit": "iter/sec",
            "range": "stddev: 0.000010773333947330526",
            "extra": "mean: 2.463577750611224 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.0512852840089,
            "unit": "iter/sec",
            "range": "stddev: 0.000046984132374961574",
            "extra": "mean: 1.214991116446567 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.86185194529716,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684907834150407",
            "extra": "mean: 5.351547089947203 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.23277548868163,
            "unit": "iter/sec",
            "range": "stddev: 0.000010654288521659699",
            "extra": "mean: 4.02847689243033 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.83958139037617,
            "unit": "iter/sec",
            "range": "stddev: 0.00001097610252375383",
            "extra": "mean: 2.5199099255582755 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.9031703848359,
            "unit": "iter/sec",
            "range": "stddev: 0.000007685512698240884",
            "extra": "mean: 1.2756677581863551 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.91203479758998,
            "unit": "iter/sec",
            "range": "stddev: 0.00026710542452017613",
            "extra": "mean: 41.819945833333556 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.206748660988165,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779445861882723",
            "extra": "mean: 39.671915384615794 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.04614858054293,
            "unit": "iter/sec",
            "range": "stddev: 0.000011280205993267307",
            "extra": "mean: 3.2998274509805303 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.63274882188153,
            "unit": "iter/sec",
            "range": "stddev: 0.000011173825364823033",
            "extra": "mean: 1.977719999999977 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1096.3321801579339,
            "unit": "iter/sec",
            "range": "stddev: 0.00002413296618113636",
            "extra": "mean: 912.1323063379783 usec\nrounds: 1136"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1019.4117405949827,
            "unit": "iter/sec",
            "range": "stddev: 0.00001961942925515294",
            "extra": "mean: 980.9578997161117 usec\nrounds: 1057"
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
        "date": 1672777886011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.09390086707674,
            "unit": "iter/sec",
            "range": "stddev: 0.000018182049212529976",
            "extra": "mean: 5.048111000000002 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.10338954316376,
            "unit": "iter/sec",
            "range": "stddev: 0.000018086373119227575",
            "extra": "mean: 3.8007872180451088 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.27997822371213,
            "unit": "iter/sec",
            "range": "stddev: 0.000011365666584704508",
            "extra": "mean: 2.455313429256561 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 821.4758561903734,
            "unit": "iter/sec",
            "range": "stddev: 0.000007329189074766496",
            "extra": "mean: 1.2173212303981025 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.52104576923188,
            "unit": "iter/sec",
            "range": "stddev: 0.000019635527816018608",
            "extra": "mean: 5.276458854166721 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.61169560207722,
            "unit": "iter/sec",
            "range": "stddev: 0.000023874960994061134",
            "extra": "mean: 3.990236758893352 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.5242040141515,
            "unit": "iter/sec",
            "range": "stddev: 0.000012031730659485008",
            "extra": "mean: 2.5092578817734497 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.2042270818677,
            "unit": "iter/sec",
            "range": "stddev: 0.000007332446813204196",
            "extra": "mean: 1.2735540201004765 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.04977591181232,
            "unit": "iter/sec",
            "range": "stddev: 0.00007811742561401137",
            "extra": "mean: 38.38804615384612 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.068852332793092,
            "unit": "iter/sec",
            "range": "stddev: 0.00006532128770080893",
            "extra": "mean: 36.942829629630445 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.1637733510468,
            "unit": "iter/sec",
            "range": "stddev: 0.000012720577633083076",
            "extra": "mean: 3.276928938906665 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.8412177241224,
            "unit": "iter/sec",
            "range": "stddev: 0.000010475752747769442",
            "extra": "mean: 1.8523965328468763 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1135.4597686048057,
            "unit": "iter/sec",
            "range": "stddev: 0.000021695689825381846",
            "extra": "mean: 880.7005123825288 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1045.511067764761,
            "unit": "iter/sec",
            "range": "stddev: 0.000020355602761825953",
            "extra": "mean: 956.4700277520151 usec\nrounds: 1081"
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
        "date": 1672778508543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.6368594686496,
            "unit": "iter/sec",
            "range": "stddev: 0.000019308155555155856",
            "extra": "mean: 5.034312376237643 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.44337618495547,
            "unit": "iter/sec",
            "range": "stddev: 0.00001214242299401839",
            "extra": "mean: 3.7815278810409145 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.2212561858346,
            "unit": "iter/sec",
            "range": "stddev: 0.00001556184711946117",
            "extra": "mean: 2.414168720379149 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.5273733144593,
            "unit": "iter/sec",
            "range": "stddev: 0.000008401743042264095",
            "extra": "mean: 1.205505727923601 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.9638585487661,
            "unit": "iter/sec",
            "range": "stddev: 0.000040293667614874",
            "extra": "mean: 5.209313917525585 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.13276419501344,
            "unit": "iter/sec",
            "range": "stddev: 0.000015174888810887342",
            "extra": "mean: 3.950496108949374 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.72884747464946,
            "unit": "iter/sec",
            "range": "stddev: 0.000014117481458266859",
            "extra": "mean: 2.476909951456444 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.8560994176206,
            "unit": "iter/sec",
            "range": "stddev: 0.000009626960767873117",
            "extra": "mean: 1.2676583229035792 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.98084951582211,
            "unit": "iter/sec",
            "range": "stddev: 0.00006468848013084",
            "extra": "mean: 38.48988846153813 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.94201001763823,
            "unit": "iter/sec",
            "range": "stddev: 0.00014388148256595817",
            "extra": "mean: 37.116755555555294 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.63985169561965,
            "unit": "iter/sec",
            "range": "stddev: 0.000013390321709878071",
            "extra": "mean: 3.2400222929934497 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.7341707201555,
            "unit": "iter/sec",
            "range": "stddev: 0.000011789008661489733",
            "extra": "mean: 1.8596549270074454 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1154.5273746240234,
            "unit": "iter/sec",
            "range": "stddev: 0.000020865830313817804",
            "extra": "mean: 866.1552960800555 usec\nrounds: 1199"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1069.5597695847996,
            "unit": "iter/sec",
            "range": "stddev: 0.00002090824832590049",
            "extra": "mean: 934.964111812281 usec\nrounds: 1109"
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
        "date": 1672840699549,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 166.99900126692,
            "unit": "iter/sec",
            "range": "stddev: 0.000019850564702094308",
            "extra": "mean: 5.988059763313596 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.81693751068775,
            "unit": "iter/sec",
            "range": "stddev: 0.000014359443954120319",
            "extra": "mean: 4.528638116591935 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.8432940147191,
            "unit": "iter/sec",
            "range": "stddev: 0.000012868628633376083",
            "extra": "mean: 2.9167844827586666 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.654750967719,
            "unit": "iter/sec",
            "range": "stddev: 0.000009383514530843613",
            "extra": "mean: 1.4354312499999549 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 158.23841089075717,
            "unit": "iter/sec",
            "range": "stddev: 0.00001781163379243143",
            "extra": "mean: 6.319578125000058 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.73185702204358,
            "unit": "iter/sec",
            "range": "stddev: 0.000012562226715942262",
            "extra": "mean: 4.790835545023646 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.96644263111455,
            "unit": "iter/sec",
            "range": "stddev: 0.000012367253252182153",
            "extra": "mean: 3.00330565476196 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 650.8003958756873,
            "unit": "iter/sec",
            "range": "stddev: 0.000008624609142887653",
            "extra": "mean: 1.5365694402420356 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.893256762861697,
            "unit": "iter/sec",
            "range": "stddev: 0.00006209272268496412",
            "extra": "mean: 50.26829000000035 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.824970059574575,
            "unit": "iter/sec",
            "range": "stddev: 0.00012474312195932471",
            "extra": "mean: 50.44143809523912 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.98567689601757,
            "unit": "iter/sec",
            "range": "stddev: 0.000012371344797762945",
            "extra": "mean: 3.9684795275592277 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 421.63341968937965,
            "unit": "iter/sec",
            "range": "stddev: 0.000015801984004063395",
            "extra": "mean: 2.3717285046728676 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 947.7565931309516,
            "unit": "iter/sec",
            "range": "stddev: 0.000022653995325382753",
            "extra": "mean: 1.0551232323232491 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 861.9660014324556,
            "unit": "iter/sec",
            "range": "stddev: 0.00002595078942509746",
            "extra": "mean: 1.1601385650224638 msec\nrounds: 892"
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
        "date": 1672841025597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.24390543241577,
            "unit": "iter/sec",
            "range": "stddev: 0.000015443965151492474",
            "extra": "mean: 4.969094581280786 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.4742594786536,
            "unit": "iter/sec",
            "range": "stddev: 0.00012726345561110103",
            "extra": "mean: 3.7668435424354523 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.223644567471,
            "unit": "iter/sec",
            "range": "stddev: 0.00001856213722508569",
            "extra": "mean: 2.443651566265068 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.2589350148608,
            "unit": "iter/sec",
            "range": "stddev: 0.000009646472497573127",
            "extra": "mean: 1.2251014440433587 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.1617910150364,
            "unit": "iter/sec",
            "range": "stddev: 0.000020829389307556004",
            "extra": "mean: 5.314575263157906 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.4908724100172,
            "unit": "iter/sec",
            "range": "stddev: 0.00010996510183426493",
            "extra": "mean: 3.976287450980144 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.481784401415,
            "unit": "iter/sec",
            "range": "stddev: 0.000011941507307389253",
            "extra": "mean: 2.509525000000098 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.3010451262909,
            "unit": "iter/sec",
            "range": "stddev: 0.000010058253463620254",
            "extra": "mean: 1.2766483668341984 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.736881416870382,
            "unit": "iter/sec",
            "range": "stddev: 0.00006067901052975536",
            "extra": "mean: 42.128533333333145 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.156964363449802,
            "unit": "iter/sec",
            "range": "stddev: 0.00012689016011205371",
            "extra": "mean: 39.750423999999214 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.2883646671027,
            "unit": "iter/sec",
            "range": "stddev: 0.000013457081998898523",
            "extra": "mean: 3.2863563517915617 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.8605219045516,
            "unit": "iter/sec",
            "range": "stddev: 0.000011765194761902342",
            "extra": "mean: 1.9846762278975176 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1112.0654390439468,
            "unit": "iter/sec",
            "range": "stddev: 0.000020161086034801806",
            "extra": "mean: 899.2276577354202 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1034.132972458575,
            "unit": "iter/sec",
            "range": "stddev: 0.000018499045206924467",
            "extra": "mean: 966.9936329586066 usec\nrounds: 1068"
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
        "date": 1672841488896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.3421031041864,
            "unit": "iter/sec",
            "range": "stddev: 0.000019148761782543184",
            "extra": "mean: 4.8463206730769794 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.38850189671774,
            "unit": "iter/sec",
            "range": "stddev: 0.00002403067959513226",
            "extra": "mean: 3.6983821167882986 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.35880674532893,
            "unit": "iter/sec",
            "range": "stddev: 0.000010540748375456482",
            "extra": "mean: 2.4017745843230416 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.2237273216215,
            "unit": "iter/sec",
            "range": "stddev: 0.000007491524243841614",
            "extra": "mean: 1.2117925925926043 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.72142915872942,
            "unit": "iter/sec",
            "range": "stddev: 0.000014970343704824012",
            "extra": "mean: 5.215901030927967 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.30484883282116,
            "unit": "iter/sec",
            "range": "stddev: 0.00000963704545012815",
            "extra": "mean: 3.91688604651148 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.13150400427764,
            "unit": "iter/sec",
            "range": "stddev: 0.000015927352837729315",
            "extra": "mean: 2.4622566585956536 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.5034287283029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066039805950120954",
            "extra": "mean: 1.26023400000002 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.883135043604682,
            "unit": "iter/sec",
            "range": "stddev: 0.00011553194551640469",
            "extra": "mean: 41.870549999999916 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.055118755750083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003790908510317427",
            "extra": "mean: 39.912004000001104 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.6405708426118,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807613695625174",
            "extra": "mean: 3.240014743589689 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.570394643757,
            "unit": "iter/sec",
            "range": "stddev: 0.000014903650660727836",
            "extra": "mean: 1.9509515384613907 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1111.195813422642,
            "unit": "iter/sec",
            "range": "stddev: 0.000021849110144599682",
            "extra": "mean: 899.9313963574583 usec\nrounds: 1153"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1028.345176218556,
            "unit": "iter/sec",
            "range": "stddev: 0.000018676055766143882",
            "extra": "mean: 972.4361266293997 usec\nrounds: 1074"
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
        "date": 1672858402513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.9082372432938,
            "unit": "iter/sec",
            "range": "stddev: 0.00022482090492170393",
            "extra": "mean: 5.002295121951241 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.26483837059834,
            "unit": "iter/sec",
            "range": "stddev: 0.000014938826515427576",
            "extra": "mean: 3.7416070370370482 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.99758244144755,
            "unit": "iter/sec",
            "range": "stddev: 0.000015639613889933385",
            "extra": "mean: 2.4509949152542143 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.3246859018528,
            "unit": "iter/sec",
            "range": "stddev: 0.00007291986752767086",
            "extra": "mean: 1.2058003541912485 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.54960433752515,
            "unit": "iter/sec",
            "range": "stddev: 0.000052923865909645644",
            "extra": "mean: 5.275663874345688 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.99471478255998,
            "unit": "iter/sec",
            "range": "stddev: 0.000060682118456055145",
            "extra": "mean: 3.9841476377951346 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.577814891292,
            "unit": "iter/sec",
            "range": "stddev: 0.000023203400626357163",
            "extra": "mean: 2.5279476309226494 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 781.5597910100776,
            "unit": "iter/sec",
            "range": "stddev: 0.000007538485527808787",
            "extra": "mean: 1.2794926395939756 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.59740003846383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675685288200047",
            "extra": "mean: 42.37754999999987 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.890786695217162,
            "unit": "iter/sec",
            "range": "stddev: 0.00005577771299241907",
            "extra": "mean: 40.17550800000038 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.1066640570075,
            "unit": "iter/sec",
            "range": "stddev: 0.000012603572787946681",
            "extra": "mean: 3.310089180327714 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.78557643469924,
            "unit": "iter/sec",
            "range": "stddev: 0.000010233978933911838",
            "extra": "mean: 1.9654645224172276 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1115.0959915828178,
            "unit": "iter/sec",
            "range": "stddev: 0.000023007935427462894",
            "extra": "mean: 896.7837814397976 usec\nrounds: 1153"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1022.5866594095278,
            "unit": "iter/sec",
            "range": "stddev: 0.00001975942314992341",
            "extra": "mean: 977.9122295389909 usec\nrounds: 1063"
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
        "date": 1672938366740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.34344590727,
            "unit": "iter/sec",
            "range": "stddev: 0.000017299847519174068",
            "extra": "mean: 4.991428571428561 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.99579555035416,
            "unit": "iter/sec",
            "range": "stddev: 0.00001802576606350183",
            "extra": "mean: 3.7879391143911665 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.89698133768195,
            "unit": "iter/sec",
            "range": "stddev: 0.000011381047410986053",
            "extra": "mean: 2.4160601431981457 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.0736414508757,
            "unit": "iter/sec",
            "range": "stddev: 0.000009179200284818634",
            "extra": "mean: 1.2061654719235844 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.3353185841235,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555524054850682",
            "extra": "mean: 5.19925309278348 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.29933539249927,
            "unit": "iter/sec",
            "range": "stddev: 0.00002481725695966414",
            "extra": "mean: 3.963545914396925 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.78273277736645,
            "unit": "iter/sec",
            "range": "stddev: 0.0006663579772453876",
            "extra": "mean: 3.1369327669901947 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.8803344520777,
            "unit": "iter/sec",
            "range": "stddev: 0.000007669127491618978",
            "extra": "mean: 1.274079571248395 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.18089427087522,
            "unit": "iter/sec",
            "range": "stddev: 0.00005043636722079132",
            "extra": "mean: 38.19579230769225 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.14118300575902,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098899076753589",
            "extra": "mean: 36.844377777778234 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.7670929038946,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199181156435057",
            "extra": "mean: 3.2075226114651563 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.7439151507509,
            "unit": "iter/sec",
            "range": "stddev: 0.000009639274578564172",
            "extra": "mean: 1.8527304744523134 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1147.1502385714803,
            "unit": "iter/sec",
            "range": "stddev: 0.000020700471150208794",
            "extra": "mean: 871.7253994954286 usec\nrounds: 1189"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1061.1931886267205,
            "unit": "iter/sec",
            "range": "stddev: 0.00002013080576204798",
            "extra": "mean: 942.3354868062148 usec\nrounds: 1099"
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
        "date": 1672947628127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.3853346780165,
            "unit": "iter/sec",
            "range": "stddev: 0.00026859431410841163",
            "extra": "mean: 5.066232512315281 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.3414352569642,
            "unit": "iter/sec",
            "range": "stddev: 0.00001224245381206725",
            "extra": "mean: 3.726595555555549 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.66550767303534,
            "unit": "iter/sec",
            "range": "stddev: 0.00007242602393715875",
            "extra": "mean: 2.4469889952153214 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.6966089052136,
            "unit": "iter/sec",
            "range": "stddev: 0.000036129497724497135",
            "extra": "mean: 1.2244449029126074 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.2468835966946,
            "unit": "iter/sec",
            "range": "stddev: 0.000012830551181171724",
            "extra": "mean: 5.174727692307812 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.58953509451652,
            "unit": "iter/sec",
            "range": "stddev: 0.000013698845483066927",
            "extra": "mean: 3.9125232558140612 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.78128374098037,
            "unit": "iter/sec",
            "range": "stddev: 0.000011053887567251684",
            "extra": "mean: 2.4827370098037562 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.7325884016335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065304839831216445",
            "extra": "mean: 1.2808482889733923 msec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.03986703643287,
            "unit": "iter/sec",
            "range": "stddev: 0.00010804927479911866",
            "extra": "mean: 38.40265384615371 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.080062203905843,
            "unit": "iter/sec",
            "range": "stddev: 0.00011804151208456645",
            "extra": "mean: 36.92753703703704 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.52031076233504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000119519242157674",
            "extra": "mean: 3.230805750798852 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 538.1753977808214,
            "unit": "iter/sec",
            "range": "stddev: 0.000011739399979452171",
            "extra": "mean: 1.8581302752290851 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1145.2747766980185,
            "unit": "iter/sec",
            "range": "stddev: 0.000021436140651336067",
            "extra": "mean: 873.1529064868911 usec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1061.8288894539646,
            "unit": "iter/sec",
            "range": "stddev: 0.000021399277065278018",
            "extra": "mean: 941.7713248640658 usec\nrounds: 1102"
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
        "date": 1673019872113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.50984212592985,
            "unit": "iter/sec",
            "range": "stddev: 0.000016486207739765183",
            "extra": "mean: 4.962536764705858 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.5511543824589,
            "unit": "iter/sec",
            "range": "stddev: 0.00000942018125935651",
            "extra": "mean: 3.765752788104074 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.9038395688499,
            "unit": "iter/sec",
            "range": "stddev: 0.00001045142323348057",
            "extra": "mean: 2.4336594202898483 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.3829800022336,
            "unit": "iter/sec",
            "range": "stddev: 0.000008559464363932147",
            "extra": "mean: 1.2013700712589255 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.6316997200664,
            "unit": "iter/sec",
            "range": "stddev: 0.00002278397512925781",
            "extra": "mean: 5.3581465608464445 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.013604739712,
            "unit": "iter/sec",
            "range": "stddev: 0.000012659633009788437",
            "extra": "mean: 4.015844841269923 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.40907181278,
            "unit": "iter/sec",
            "range": "stddev: 0.00010805889173334819",
            "extra": "mean: 2.503698765432004 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.8027747406119,
            "unit": "iter/sec",
            "range": "stddev: 0.000007118514025711208",
            "extra": "mean: 1.2758311557788697 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.751243723981204,
            "unit": "iter/sec",
            "range": "stddev: 0.000037471019719613245",
            "extra": "mean: 42.10305833333342 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.060086569567485,
            "unit": "iter/sec",
            "range": "stddev: 0.000036687780890077125",
            "extra": "mean: 39.90409200000059 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.9603383334259,
            "unit": "iter/sec",
            "range": "stddev: 0.000022321187483890953",
            "extra": "mean: 3.300762091503345 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.0266064443667,
            "unit": "iter/sec",
            "range": "stddev: 0.00001002445071006647",
            "extra": "mean: 1.9645338521401896 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1094.3127397492622,
            "unit": "iter/sec",
            "range": "stddev: 0.000023236186763732235",
            "extra": "mean: 913.8155516942334 usec\nrounds: 1151"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1011.7070613295368,
            "unit": "iter/sec",
            "range": "stddev: 0.000023155001962447424",
            "extra": "mean: 988.4284080075986 usec\nrounds: 1049"
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
        "date": 1673244606587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.74086415950555,
            "unit": "iter/sec",
            "range": "stddev: 0.00001421953015703932",
            "extra": "mean: 4.884222815533978 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.25609395878246,
            "unit": "iter/sec",
            "range": "stddev: 0.000009336321061019776",
            "extra": "mean: 3.7277811111111236 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.5064709145829,
            "unit": "iter/sec",
            "range": "stddev: 0.000010247631215843576",
            "extra": "mean: 2.4300954436450932 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.1150318674952,
            "unit": "iter/sec",
            "range": "stddev: 0.000044677489677014716",
            "extra": "mean: 1.2163747909199836 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.88353498867806,
            "unit": "iter/sec",
            "range": "stddev: 0.0002588732343614449",
            "extra": "mean: 5.408810471204146 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.76575515899555,
            "unit": "iter/sec",
            "range": "stddev: 0.000010604289359370497",
            "extra": "mean: 3.971946062992079 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.6017795599183,
            "unit": "iter/sec",
            "range": "stddev: 0.000029524758856377815",
            "extra": "mean: 2.502491358024733 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.1325203448711,
            "unit": "iter/sec",
            "range": "stddev: 0.000007563872523356366",
            "extra": "mean: 1.2818335012594178 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.824499209026573,
            "unit": "iter/sec",
            "range": "stddev: 0.00014035181261541624",
            "extra": "mean: 41.97360000000009 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.143716454510802,
            "unit": "iter/sec",
            "range": "stddev: 0.00009555506579887517",
            "extra": "mean: 39.771367999999825 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.7535329748375,
            "unit": "iter/sec",
            "range": "stddev: 0.00001340718665401866",
            "extra": "mean: 3.2599461538460206 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 506.0693934143963,
            "unit": "iter/sec",
            "range": "stddev: 0.000012371107048371431",
            "extra": "mean: 1.976013592233086 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1106.6214989105924,
            "unit": "iter/sec",
            "range": "stddev: 0.000026096536089296875",
            "extra": "mean: 903.6513396716445 usec\nrounds: 1157"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1018.4075245767433,
            "unit": "iter/sec",
            "range": "stddev: 0.000020698110151585333",
            "extra": "mean: 981.9251879699202 usec\nrounds: 1064"
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
        "date": 1673253643542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.18470484601036,
            "unit": "iter/sec",
            "range": "stddev: 0.000018063823122065472",
            "extra": "mean: 4.945972549019612 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.9513237627938,
            "unit": "iter/sec",
            "range": "stddev: 0.000008810665914921321",
            "extra": "mean: 3.7600865671641324 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.5898622703723,
            "unit": "iter/sec",
            "range": "stddev: 0.00001108192639742037",
            "extra": "mean: 2.423714423076868 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.0608015269524,
            "unit": "iter/sec",
            "range": "stddev: 0.000008999633091035445",
            "extra": "mean: 1.2091009489916102 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.8001186062227,
            "unit": "iter/sec",
            "range": "stddev: 0.000017775436518282463",
            "extra": "mean: 5.29660684210524 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.7391602141028,
            "unit": "iter/sec",
            "range": "stddev: 0.000009246761030679678",
            "extra": "mean: 3.9882083003951734 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.5277486408435,
            "unit": "iter/sec",
            "range": "stddev: 0.000010796471131847412",
            "extra": "mean: 2.4904879012346286 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.6009549309027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074965639458492135",
            "extra": "mean: 1.2648606022584408 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.99291358403334,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899769825196931",
            "extra": "mean: 43.49166086956534 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.207472624180607,
            "unit": "iter/sec",
            "range": "stddev: 0.000029710902601898637",
            "extra": "mean: 39.67077599999996 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.7869835396027,
            "unit": "iter/sec",
            "range": "stddev: 0.00002034716718265136",
            "extra": "mean: 3.259590705128177 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.4142208877851,
            "unit": "iter/sec",
            "range": "stddev: 0.000010591186598027898",
            "extra": "mean: 1.943958699808459 msec\nrounds: 523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1099.1169399736239,
            "unit": "iter/sec",
            "range": "stddev: 0.00001842825948895631",
            "extra": "mean: 909.8212971078378 usec\nrounds: 1141"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1029.0860018842975,
            "unit": "iter/sec",
            "range": "stddev: 0.000018429355020512214",
            "extra": "mean: 971.736082474118 usec\nrounds: 1067"
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
        "date": 1673260923889,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.5227413968314,
            "unit": "iter/sec",
            "range": "stddev: 0.000023371526552735086",
            "extra": "mean: 4.962219117647053 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.9219253759347,
            "unit": "iter/sec",
            "range": "stddev: 0.000020550544355533832",
            "extra": "mean: 3.732430627306257 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.75624077916524,
            "unit": "iter/sec",
            "range": "stddev: 0.000015032735895600517",
            "extra": "mean: 2.4110547393365076 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.5442504173225,
            "unit": "iter/sec",
            "range": "stddev: 0.000008959439446558764",
            "extra": "mean: 1.1982588095238085 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.97301148733953,
            "unit": "iter/sec",
            "range": "stddev: 0.000022096033939043338",
            "extra": "mean: 5.182071794871726 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.52484502840818,
            "unit": "iter/sec",
            "range": "stddev: 0.000018869395655292727",
            "extra": "mean: 3.9288895348836665 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.92655373034756,
            "unit": "iter/sec",
            "range": "stddev: 0.000016710208035598582",
            "extra": "mean: 2.4695836585365782 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.293891894313,
            "unit": "iter/sec",
            "range": "stddev: 0.000008997938535772603",
            "extra": "mean: 1.2653520547944856 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.061481641339796,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367262602706349",
            "extra": "mean: 38.370803846154274 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.976818819588182,
            "unit": "iter/sec",
            "range": "stddev: 0.00018569749625176363",
            "extra": "mean: 37.06886296296316 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.00475161020347,
            "unit": "iter/sec",
            "range": "stddev: 0.000017224117980793442",
            "extra": "mean: 3.236196190476249 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 540.4837005418151,
            "unit": "iter/sec",
            "range": "stddev: 0.00001318109415152101",
            "extra": "mean: 1.8501945553539112 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1139.9386155974707,
            "unit": "iter/sec",
            "range": "stddev: 0.000022788442882941627",
            "extra": "mean: 877.2402183041011 usec\nrounds: 1191"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1060.5471901445815,
            "unit": "iter/sec",
            "range": "stddev: 0.000019821112421675463",
            "extra": "mean: 942.9094804010302 usec\nrounds: 1097"
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
        "date": 1673268598760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.61292213378238,
            "unit": "iter/sec",
            "range": "stddev: 0.00003977893051782476",
            "extra": "mean: 4.984723762376243 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.09286888268423,
            "unit": "iter/sec",
            "range": "stddev: 0.00007735787168565681",
            "extra": "mean: 3.7722629213483136 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.8335189929284,
            "unit": "iter/sec",
            "range": "stddev: 0.000010455694339015992",
            "extra": "mean: 2.4222839328536434 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.880151460403,
            "unit": "iter/sec",
            "range": "stddev: 0.00000659388248299634",
            "extra": "mean: 1.2137687723480273 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.50134874499093,
            "unit": "iter/sec",
            "range": "stddev: 0.00001376794393601586",
            "extra": "mean: 5.221895336787578 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.64590856218965,
            "unit": "iter/sec",
            "range": "stddev: 0.000014590571562914783",
            "extra": "mean: 3.9896920948617143 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.64465275350034,
            "unit": "iter/sec",
            "range": "stddev: 0.00001181272592944338",
            "extra": "mean: 2.471304126213613 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.9433925748904,
            "unit": "iter/sec",
            "range": "stddev: 0.000006506653642268671",
            "extra": "mean: 1.2723562656641494 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.087036789544317,
            "unit": "iter/sec",
            "range": "stddev: 0.00004043876053821317",
            "extra": "mean: 38.333215384615855 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.005868375197622,
            "unit": "iter/sec",
            "range": "stddev: 0.00019493430517334077",
            "extra": "mean: 37.028988888889316 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.35102444463774,
            "unit": "iter/sec",
            "range": "stddev: 0.000011942250377489986",
            "extra": "mean: 3.1913091772153375 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 544.7582972451888,
            "unit": "iter/sec",
            "range": "stddev: 0.00000921828821805924",
            "extra": "mean: 1.8356764918624318 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1141.2250084222962,
            "unit": "iter/sec",
            "range": "stddev: 0.000021463439348746675",
            "extra": "mean: 876.2513900588851 usec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.6579558239075,
            "unit": "iter/sec",
            "range": "stddev: 0.000019803313586718397",
            "extra": "mean: 944.5921550948374 usec\nrounds: 1109"
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
        "date": 1673280966794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.07459497585916,
            "unit": "iter/sec",
            "range": "stddev: 0.00001883878473916468",
            "extra": "mean: 4.998135820895497 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.7164323751298,
            "unit": "iter/sec",
            "range": "stddev: 0.00001677838876693594",
            "extra": "mean: 3.735295555555512 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.3262250037252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000149339168557593",
            "extra": "mean: 2.4077458628841235 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.4471565406081,
            "unit": "iter/sec",
            "range": "stddev: 0.000007772493259473823",
            "extra": "mean: 1.1941051948052195 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.97328048592283,
            "unit": "iter/sec",
            "range": "stddev: 0.000016654609563377625",
            "extra": "mean: 5.209058247422765 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.73030172148026,
            "unit": "iter/sec",
            "range": "stddev: 0.000020251951003584075",
            "extra": "mean: 3.9567871093749707 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.0123021675094,
            "unit": "iter/sec",
            "range": "stddev: 0.000013789593862658849",
            "extra": "mean: 2.456928192771042 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.8402002816694,
            "unit": "iter/sec",
            "range": "stddev: 0.00000868793554856727",
            "extra": "mean: 1.2709060869564428 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.053955135690586,
            "unit": "iter/sec",
            "range": "stddev: 0.0001355722488621655",
            "extra": "mean: 38.38188846153834 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.088131234973165,
            "unit": "iter/sec",
            "range": "stddev: 0.00006247438335420511",
            "extra": "mean: 36.91653703703679 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.0836840137197,
            "unit": "iter/sec",
            "range": "stddev: 0.00001946984582417833",
            "extra": "mean: 3.2353697452228243 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.158685585411,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256783320126888",
            "extra": "mean: 1.8444784277876538 msec\nrounds: 547"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1138.353839960127,
            "unit": "iter/sec",
            "range": "stddev: 0.00002285600121366721",
            "extra": "mean: 878.4614808652351 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.863136853182,
            "unit": "iter/sec",
            "range": "stddev: 0.000021601238116467115",
            "extra": "mean: 940.8549090908348 usec\nrounds: 1100"
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
        "date": 1673311616152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.04941360702986,
            "unit": "iter/sec",
            "range": "stddev: 0.00007330975297214866",
            "extra": "mean: 4.853204784688999 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.26505989631147,
            "unit": "iter/sec",
            "range": "stddev: 0.000010648626767031113",
            "extra": "mean: 3.6864312727272748 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.0809845599622,
            "unit": "iter/sec",
            "range": "stddev: 0.000015319119539281655",
            "extra": "mean: 2.391881087470453 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.7812332689758,
            "unit": "iter/sec",
            "range": "stddev: 0.000008584297125874529",
            "extra": "mean: 1.1767734575087707 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 192.4296776158177,
            "unit": "iter/sec",
            "range": "stddev: 0.00003252528290990833",
            "extra": "mean: 5.19670360824738 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.27223745225467,
            "unit": "iter/sec",
            "range": "stddev: 0.000010710230484947741",
            "extra": "mean: 3.917386434108554 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.62150010760575,
            "unit": "iter/sec",
            "range": "stddev: 0.000013306203816548758",
            "extra": "mean: 2.4472525301205676 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 806.467594051795,
            "unit": "iter/sec",
            "range": "stddev: 0.00003084249155491311",
            "extra": "mean: 1.2399754278728965 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.773634583585462,
            "unit": "iter/sec",
            "range": "stddev: 0.00010068752558227804",
            "extra": "mean: 42.063404166666686 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.111341175638092,
            "unit": "iter/sec",
            "range": "stddev: 0.00004477324424243546",
            "extra": "mean: 39.822644000000906 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.93143088905026,
            "unit": "iter/sec",
            "range": "stddev: 0.000011028945481994554",
            "extra": "mean: 3.226520127795563 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.6733404368448,
            "unit": "iter/sec",
            "range": "stddev: 0.000011041050034118043",
            "extra": "mean: 1.9023220754717758 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1098.8537240795686,
            "unit": "iter/sec",
            "range": "stddev: 0.00002258940226518126",
            "extra": "mean: 910.0392327810772 usec\nrounds: 1147"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1024.95253759849,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719452665144125",
            "extra": "mean: 975.6549335865299 usec\nrounds: 1054"
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
        "date": 1673335017142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.48579262573423,
            "unit": "iter/sec",
            "range": "stddev: 0.00036665407056502",
            "extra": "mean: 5.115461264822155 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.1345014642042,
            "unit": "iter/sec",
            "range": "stddev: 0.00028683514076003556",
            "extra": "mean: 3.889015259740282 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.1435039364638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002063485052680185",
            "extra": "mean: 2.499103422053263 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.4277446069696,
            "unit": "iter/sec",
            "range": "stddev: 0.00010684584341654197",
            "extra": "mean: 1.2085647435897897 msec\nrounds: 1092"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.9798702625661,
            "unit": "iter/sec",
            "range": "stddev: 0.0003647714227228376",
            "extra": "mean: 5.525476388888982 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.93356568759273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064541932128503",
            "extra": "mean: 4.082739730639767 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.3149450465515,
            "unit": "iter/sec",
            "range": "stddev: 0.00017806707094380719",
            "extra": "mean: 2.6787033663367064 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 735.3995872195085,
            "unit": "iter/sec",
            "range": "stddev: 0.00009682946509572997",
            "extra": "mean: 1.3598049514562907 msec\nrounds: 1030"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.700685409361952,
            "unit": "iter/sec",
            "range": "stddev: 0.0015206046199272235",
            "extra": "mean: 44.05153333333237 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.8143796749411,
            "unit": "iter/sec",
            "range": "stddev: 0.0015162650180293286",
            "extra": "mean: 41.99143600000042 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.261549117832,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674209141149033",
            "extra": "mean: 3.398337305699316 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.6184203322474,
            "unit": "iter/sec",
            "range": "stddev: 0.0001835031951500971",
            "extra": "mean: 2.0340979073244982 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1034.6682903073038,
            "unit": "iter/sec",
            "range": "stddev: 0.00008619282889186979",
            "extra": "mean: 966.4933287005375 usec\nrounds: 1439"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 912.4651425251112,
            "unit": "iter/sec",
            "range": "stddev: 0.00005274057523233066",
            "extra": "mean: 1.0959322755416707 msec\nrounds: 1292"
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
        "date": 1673540058132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.34945033268184,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236782336247625",
            "extra": "mean: 4.917642995169102 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.0446219166688,
            "unit": "iter/sec",
            "range": "stddev: 0.000016995270093660862",
            "extra": "mean: 3.689429411764696 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.85529651330387,
            "unit": "iter/sec",
            "range": "stddev: 0.000013586008463090685",
            "extra": "mean: 2.376113615023468 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.3491539487262,
            "unit": "iter/sec",
            "range": "stddev: 0.000008999286260478263",
            "extra": "mean: 1.1677479861910098 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.05971912718792,
            "unit": "iter/sec",
            "range": "stddev: 0.000021168778194073296",
            "extra": "mean: 5.261504145077686 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.0401153331837,
            "unit": "iter/sec",
            "range": "stddev: 0.000012795446623173315",
            "extra": "mean: 3.9056379844959257 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.1596139598996,
            "unit": "iter/sec",
            "range": "stddev: 0.000011168384325744962",
            "extra": "mean: 2.4440339805824696 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.4197716457586,
            "unit": "iter/sec",
            "range": "stddev: 0.000008616974208791722",
            "extra": "mean: 1.224860096153938 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.88167109605344,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773869098288997",
            "extra": "mean: 41.87311666666638 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.32304412598926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000836443724712841",
            "extra": "mean: 39.4897230769223 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.78906745992106,
            "unit": "iter/sec",
            "range": "stddev: 0.000014811961858003928",
            "extra": "mean: 3.2176163987137634 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.2965087385154,
            "unit": "iter/sec",
            "range": "stddev: 0.000011330062447995957",
            "extra": "mean: 1.9000696060038638 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1065.0244168299907,
            "unit": "iter/sec",
            "range": "stddev: 0.000023922700038224273",
            "extra": "mean: 938.9456093189547 usec\nrounds: 1116"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 998.790139301754,
            "unit": "iter/sec",
            "range": "stddev: 0.000025363630218651744",
            "extra": "mean: 1.0012113262342497 msec\nrounds: 1033"
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
        "date": 1673622589935,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.8909003632786,
            "unit": "iter/sec",
            "range": "stddev: 0.00005672838339319722",
            "extra": "mean: 5.558924870466274 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 236.41247134194109,
            "unit": "iter/sec",
            "range": "stddev: 0.00003359595461870742",
            "extra": "mean: 4.2298952941176475 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 366.21330226475845,
            "unit": "iter/sec",
            "range": "stddev: 0.000028184260311968934",
            "extra": "mean: 2.7306490338164657 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 755.5593333522055,
            "unit": "iter/sec",
            "range": "stddev: 0.00001828042152360146",
            "extra": "mean: 1.3235227941176766 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.68014876604414,
            "unit": "iter/sec",
            "range": "stddev: 0.00004299441351758154",
            "extra": "mean: 6.035726111111195 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.91305189868126,
            "unit": "iter/sec",
            "range": "stddev: 0.00003334263427265096",
            "extra": "mean: 4.506269421487518 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.1327354184496,
            "unit": "iter/sec",
            "range": "stddev: 0.000013385943020741178",
            "extra": "mean: 2.800079356568386 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 711.6219712477956,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392741947735951",
            "extra": "mean: 1.4052404793608988 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.87045085043624,
            "unit": "iter/sec",
            "range": "stddev: 0.00042037930649960843",
            "extra": "mean: 47.914633333332986 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.307021231919556,
            "unit": "iter/sec",
            "range": "stddev: 0.0005860635798643498",
            "extra": "mean: 44.82893478260918 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.1498267238748,
            "unit": "iter/sec",
            "range": "stddev: 0.00009641026922860933",
            "extra": "mean: 3.6744465798047603 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 472.98435737665704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007725872644635927",
            "extra": "mean: 2.1142348249028 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 994.5052967452079,
            "unit": "iter/sec",
            "range": "stddev: 0.00003594956907392832",
            "extra": "mean: 1.0055250618300124 msec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 904.1552767006184,
            "unit": "iter/sec",
            "range": "stddev: 0.000036024046857301546",
            "extra": "mean: 1.106004715969951 msec\nrounds: 933"
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
        "date": 1673680120602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.5749040375148,
            "unit": "iter/sec",
            "range": "stddev: 0.000014125837090331496",
            "extra": "mean: 4.936445631067953 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.7223108382207,
            "unit": "iter/sec",
            "range": "stddev: 0.000017959056875470745",
            "extra": "mean: 3.693821897810203 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.916112494128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001102984652523083",
            "extra": "mean: 2.3871127659574496 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.0578705910592,
            "unit": "iter/sec",
            "range": "stddev: 0.000008619768284754502",
            "extra": "mean: 1.1627124571428757 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.91078580268623,
            "unit": "iter/sec",
            "range": "stddev: 0.000013511664002048007",
            "extra": "mean: 5.1570107142856365 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.69943232612746,
            "unit": "iter/sec",
            "range": "stddev: 0.00001756937541640449",
            "extra": "mean: 3.895606589147169 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.4720497641923,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704598550862668",
            "extra": "mean: 2.4362194711539535 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 820.6958250201106,
            "unit": "iter/sec",
            "range": "stddev: 0.000010785067709504945",
            "extra": "mean: 1.2184782345828256 msec\nrounds: 827"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.291294810631516,
            "unit": "iter/sec",
            "range": "stddev: 0.00006190581541243607",
            "extra": "mean: 42.93449583333346 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.964948263751968,
            "unit": "iter/sec",
            "range": "stddev: 0.00013548985496207342",
            "extra": "mean: 37.08518148148146 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.9314567216779,
            "unit": "iter/sec",
            "range": "stddev: 0.000012069072938444068",
            "extra": "mean: 3.1955879746835514 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.8270097672369,
            "unit": "iter/sec",
            "range": "stddev: 0.000009843987954589207",
            "extra": "mean: 1.802363587921799 msec\nrounds: 563"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1133.29701413622,
            "unit": "iter/sec",
            "range": "stddev: 0.000022821842914434554",
            "extra": "mean: 882.3812182741725 usec\nrounds: 1182"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.9302892507123,
            "unit": "iter/sec",
            "range": "stddev: 0.00002084907586700847",
            "extra": "mean: 951.5378995432471 usec\nrounds: 1095"
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
        "date": 1673691488259,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 161.8436651676989,
            "unit": "iter/sec",
            "range": "stddev: 0.0004489611564433537",
            "extra": "mean: 6.178802234636874 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.34898393285422,
            "unit": "iter/sec",
            "range": "stddev: 0.0007149603908193371",
            "extra": "mean: 4.579824380165268 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 332.9461653500934,
            "unit": "iter/sec",
            "range": "stddev: 0.000520825885738756",
            "extra": "mean: 3.0034885638298263 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 760.2936504162625,
            "unit": "iter/sec",
            "range": "stddev: 0.00001848076208195005",
            "extra": "mean: 1.3152812725089809 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.0765110092817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000478746259788601",
            "extra": "mean: 6.057797041420227 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.3973036937656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004058511259487785",
            "extra": "mean: 4.496457391304392 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.67057331119673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388618888777251",
            "extra": "mean: 2.8274899736147807 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 711.334822088248,
            "unit": "iter/sec",
            "range": "stddev: 0.00001625579576825292",
            "extra": "mean: 1.4058077419355415 msec\nrounds: 775"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.720407114558835,
            "unit": "iter/sec",
            "range": "stddev: 0.00011559762540849913",
            "extra": "mean: 48.26160000000036 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.972751590752534,
            "unit": "iter/sec",
            "range": "stddev: 0.00019275680037604786",
            "extra": "mean: 45.51091363636317 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 264.39575890317826,
            "unit": "iter/sec",
            "range": "stddev: 0.000043616924293947895",
            "extra": "mean: 3.7822089285713543 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.3943879767994,
            "unit": "iter/sec",
            "range": "stddev: 0.00003508206080304916",
            "extra": "mean: 2.205585306122428 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 950.5498481343931,
            "unit": "iter/sec",
            "range": "stddev: 0.00007262311181216887",
            "extra": "mean: 1.0520226813592795 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 857.3427265898349,
            "unit": "iter/sec",
            "range": "stddev: 0.00007525435031431282",
            "extra": "mean: 1.1663946855624454 msec\nrounds: 1129"
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
        "date": 1673705979511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.57931464218868,
            "unit": "iter/sec",
            "range": "stddev: 0.00002383377545642175",
            "extra": "mean: 4.960826470588214 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.34946774495836,
            "unit": "iter/sec",
            "range": "stddev: 0.00001577001738871529",
            "extra": "mean: 3.6717530909091036 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.69414270904366,
            "unit": "iter/sec",
            "range": "stddev: 0.00001453325431241624",
            "extra": "mean: 2.382687529411765 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.0884748681003,
            "unit": "iter/sec",
            "range": "stddev: 0.000007677081320352346",
            "extra": "mean: 1.1479890147225507 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.46016716629256,
            "unit": "iter/sec",
            "range": "stddev: 0.00002465729987647604",
            "extra": "mean: 5.142441326530642 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.1859538333833,
            "unit": "iter/sec",
            "range": "stddev: 0.00001592433752135888",
            "extra": "mean: 3.873177394636023 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.1515018649948,
            "unit": "iter/sec",
            "range": "stddev: 0.00001503436025711574",
            "extra": "mean: 2.420419617224989 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.552465702658,
            "unit": "iter/sec",
            "range": "stddev: 0.000008452055920055883",
            "extra": "mean: 1.2040178571428202 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.99046929490963,
            "unit": "iter/sec",
            "range": "stddev: 0.00016516880134712656",
            "extra": "mean: 38.4756423076922 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.057247724735475,
            "unit": "iter/sec",
            "range": "stddev: 0.000058159790448572255",
            "extra": "mean: 36.958674074074786 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.74074864711855,
            "unit": "iter/sec",
            "range": "stddev: 0.000014295194082481672",
            "extra": "mean: 3.1671553459120676 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.6133713640828,
            "unit": "iter/sec",
            "range": "stddev: 0.000010761188727875905",
            "extra": "mean: 1.780584385964913 msec\nrounds: 570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1145.9883694167102,
            "unit": "iter/sec",
            "range": "stddev: 0.000020638878737318616",
            "extra": "mean: 872.609205020976 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1065.02844529493,
            "unit": "iter/sec",
            "range": "stddev: 0.000018969764372442837",
            "extra": "mean: 938.9420577617321 usec\nrounds: 1108"
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
        "date": 1673706871611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.1725974532091,
            "unit": "iter/sec",
            "range": "stddev: 0.000013895251480118906",
            "extra": "mean: 4.8978169082125405 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.4018090953732,
            "unit": "iter/sec",
            "range": "stddev: 0.00001894988506894151",
            "extra": "mean: 3.684573818181847 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.9383392041658,
            "unit": "iter/sec",
            "range": "stddev: 0.000011121665020674017",
            "extra": "mean: 2.3644108545034697 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 873.4031798411456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074813938557603555",
            "extra": "mean: 1.1449465986394505 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.73045548738858,
            "unit": "iter/sec",
            "range": "stddev: 0.000014618304766788156",
            "extra": "mean: 5.135303553299414 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.55215160738146,
            "unit": "iter/sec",
            "range": "stddev: 0.000015627259046872076",
            "extra": "mean: 3.8827087786260215 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.9330070569891,
            "unit": "iter/sec",
            "range": "stddev: 0.000011397055405527737",
            "extra": "mean: 2.4042333333333774 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.8704229821279,
            "unit": "iter/sec",
            "range": "stddev: 0.000006786532532963055",
            "extra": "mean: 1.2197049338146435 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.051120112998078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000496514164331796",
            "extra": "mean: 38.38606538461488 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.069145425074513,
            "unit": "iter/sec",
            "range": "stddev: 0.000033784632542881125",
            "extra": "mean: 36.94242962962867 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.3029019067336,
            "unit": "iter/sec",
            "range": "stddev: 0.000011342283296545384",
            "extra": "mean: 3.1615264797503 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.1419561650669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001004473736691263",
            "extra": "mean: 1.7884545936395182 msec\nrounds: 566"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1136.8195671277117,
            "unit": "iter/sec",
            "range": "stddev: 0.00001995335403052154",
            "extra": "mean: 879.647068819021 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.0696298876958,
            "unit": "iter/sec",
            "range": "stddev: 0.000019954552064562622",
            "extra": "mean: 945.1173833485237 usec\nrounds: 1093"
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
        "date": 1673744536872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.52829599571996,
            "unit": "iter/sec",
            "range": "stddev: 0.000012859996641729575",
            "extra": "mean: 4.889299033816458 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.42518227317476,
            "unit": "iter/sec",
            "range": "stddev: 0.00001454401551675132",
            "extra": "mean: 3.6707326086956544 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.47163987181824,
            "unit": "iter/sec",
            "range": "stddev: 0.00001313156455005787",
            "extra": "mean: 2.367022790697641 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 869.1839540722468,
            "unit": "iter/sec",
            "range": "stddev: 0.000025825091717739205",
            "extra": "mean: 1.1505044419134316 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.89326230249165,
            "unit": "iter/sec",
            "range": "stddev: 0.000014700672099500415",
            "extra": "mean: 5.1310137055836815 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.1666604842534,
            "unit": "iter/sec",
            "range": "stddev: 0.000016285006448426016",
            "extra": "mean: 3.85852099236645 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.65984615044727,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144577085629448",
            "extra": "mean: 2.4058133333332656 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.8445169435493,
            "unit": "iter/sec",
            "range": "stddev: 0.000007703099555525244",
            "extra": "mean: 1.202147732696857 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.87178460983048,
            "unit": "iter/sec",
            "range": "stddev: 0.00008966427262092182",
            "extra": "mean: 38.65214615384634 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.901929017765802,
            "unit": "iter/sec",
            "range": "stddev: 0.00009357390881127026",
            "extra": "mean: 37.17205555555547 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.2880157746571,
            "unit": "iter/sec",
            "range": "stddev: 0.000011612076685777982",
            "extra": "mean: 3.1517105919002493 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.875284251037,
            "unit": "iter/sec",
            "range": "stddev: 0.000011526446929271226",
            "extra": "mean: 1.798964674868317 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1140.8138465943862,
            "unit": "iter/sec",
            "range": "stddev: 0.000019295095769828402",
            "extra": "mean: 876.5672006745441 usec\nrounds: 1186"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1057.3561904263922,
            "unit": "iter/sec",
            "range": "stddev: 0.000020491403055503484",
            "extra": "mean: 945.7550909090884 usec\nrounds: 1100"
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
        "date": 1673784783179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.67948520251826,
            "unit": "iter/sec",
            "range": "stddev: 0.0008570600559255995",
            "extra": "mean: 7.594197368421029 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.27231804964194,
            "unit": "iter/sec",
            "range": "stddev: 0.00073861445743751",
            "extra": "mean: 5.705407511737093 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.1002445275127,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026796319402344",
            "extra": "mean: 3.8299466237942488 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.6688459083286,
            "unit": "iter/sec",
            "range": "stddev: 0.0004158957824514134",
            "extra": "mean: 1.806133770014524 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.40496155685663,
            "unit": "iter/sec",
            "range": "stddev: 0.0009330398626192613",
            "extra": "mean: 8.236895652173802 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.13019837815486,
            "unit": "iter/sec",
            "range": "stddev: 0.0005761341833640133",
            "extra": "mean: 5.983359139784922 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.11042183874895,
            "unit": "iter/sec",
            "range": "stddev: 0.00044328290128697314",
            "extra": "mean: 3.87431081967212 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 533.9072118672177,
            "unit": "iter/sec",
            "range": "stddev: 0.0004119683809025459",
            "extra": "mean: 1.8729846268656494 msec\nrounds: 670"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.131855031104642,
            "unit": "iter/sec",
            "range": "stddev: 0.0028335438204840683",
            "extra": "mean: 55.15155500000031 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.39336626819468,
            "unit": "iter/sec",
            "range": "stddev: 0.0016731870991934334",
            "extra": "mean: 51.56402380952348 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.94892280233316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958836466664789",
            "extra": "mean: 5.182718750000236 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 350.27070739634297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004314179224704215",
            "extra": "mean: 2.8549347087379098 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 668.4145916467572,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343389272906546",
            "extra": "mean: 1.4960774532709162 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 632.2619516673999,
            "unit": "iter/sec",
            "range": "stddev: 0.00044721956354717686",
            "extra": "mean: 1.581622929171686 msec\nrounds: 833"
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
        "date": 1673828681383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.53308978489676,
            "unit": "iter/sec",
            "range": "stddev: 0.000013620271092202872",
            "extra": "mean: 4.865396618357475 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.11134541892693,
            "unit": "iter/sec",
            "range": "stddev: 0.000012592607965096222",
            "extra": "mean: 3.648152536231912 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.5314516728395,
            "unit": "iter/sec",
            "range": "stddev: 0.000010390060157861064",
            "extra": "mean: 2.3500025581395283 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.2907203441837,
            "unit": "iter/sec",
            "range": "stddev: 0.00000580144702805222",
            "extra": "mean: 1.1583583333333085 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.12125642407977,
            "unit": "iter/sec",
            "range": "stddev: 0.000012760892268335447",
            "extra": "mean: 5.098886363636512 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.7345691147281,
            "unit": "iter/sec",
            "range": "stddev: 0.000011489763199924722",
            "extra": "mean: 3.850084351144984 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.9179505541031,
            "unit": "iter/sec",
            "range": "stddev: 0.000009403606106370866",
            "extra": "mean: 2.3928141843970434 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.9531212121722,
            "unit": "iter/sec",
            "range": "stddev: 0.0008260878773455296",
            "extra": "mean: 1.3737148325359483 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.27215854479745,
            "unit": "iter/sec",
            "range": "stddev: 0.00005578543123856231",
            "extra": "mean: 38.063107692307426 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.17176632079717,
            "unit": "iter/sec",
            "range": "stddev: 0.000025668641838582603",
            "extra": "mean: 36.80290740740707 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.82672451197357,
            "unit": "iter/sec",
            "range": "stddev: 0.00017861229898536604",
            "extra": "mean: 3.1662931677021153 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.990780557645,
            "unit": "iter/sec",
            "range": "stddev: 0.000008439496915101892",
            "extra": "mean: 1.7762280210157175 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1128.255206888088,
            "unit": "iter/sec",
            "range": "stddev: 0.000020763754519679853",
            "extra": "mean: 886.3242942686373 usec\nrounds: 1169"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1055.939966912041,
            "unit": "iter/sec",
            "range": "stddev: 0.000017507834180861157",
            "extra": "mean: 947.0235347984506 usec\nrounds: 1092"
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
        "date": 1673836971582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.64909200022203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003168181211512182",
            "extra": "mean: 4.862652153110019 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.0533591927466,
            "unit": "iter/sec",
            "range": "stddev: 0.00002546116439510286",
            "extra": "mean: 3.7029718978102575 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.23048145640246,
            "unit": "iter/sec",
            "range": "stddev: 0.00002219702912252528",
            "extra": "mean: 2.3910261072261014 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.0341071678557,
            "unit": "iter/sec",
            "range": "stddev: 0.00001301776388945693",
            "extra": "mean: 1.1627445838084962 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.20731907908305,
            "unit": "iter/sec",
            "range": "stddev: 0.00003930762508871465",
            "extra": "mean: 5.257421243523374 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.5049588669791,
            "unit": "iter/sec",
            "range": "stddev: 0.000023833590300877322",
            "extra": "mean: 3.9291965250966494 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.66692122983574,
            "unit": "iter/sec",
            "range": "stddev: 0.00002038475740620292",
            "extra": "mean: 2.452982932692292 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.4856184756052,
            "unit": "iter/sec",
            "range": "stddev: 0.000015540129840717873",
            "extra": "mean: 1.2323077294684823 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.440414028032855,
            "unit": "iter/sec",
            "range": "stddev: 0.00007161993171974168",
            "extra": "mean: 42.66136250000022 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.525011833318178,
            "unit": "iter/sec",
            "range": "stddev: 0.00016751260649138397",
            "extra": "mean: 40.77470000000005 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.77068929024284,
            "unit": "iter/sec",
            "range": "stddev: 0.00022904318408169396",
            "extra": "mean: 3.3028296178345626 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 521.7626515429214,
            "unit": "iter/sec",
            "range": "stddev: 0.000016995152890606167",
            "extra": "mean: 1.916580263157716 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1107.3445486335877,
            "unit": "iter/sec",
            "range": "stddev: 0.000026583468626072375",
            "extra": "mean: 903.0612931033562 usec\nrounds: 1160"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1022.758128453447,
            "unit": "iter/sec",
            "range": "stddev: 0.000026080084090172804",
            "extra": "mean: 977.7482790697929 usec\nrounds: 1075"
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
        "date": 1673869419624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.00446980705598,
            "unit": "iter/sec",
            "range": "stddev: 0.000016470212723544373",
            "extra": "mean: 4.807588995215322 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.92983579674325,
            "unit": "iter/sec",
            "range": "stddev: 0.000021796842826012343",
            "extra": "mean: 3.6774192028985753 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.6867409140897,
            "unit": "iter/sec",
            "range": "stddev: 0.000011265705855065301",
            "extra": "mean: 2.37706564705878 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.2306967691381,
            "unit": "iter/sec",
            "range": "stddev: 0.000008520494151219326",
            "extra": "mean: 1.1544268792710692 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.21417998866616,
            "unit": "iter/sec",
            "range": "stddev: 0.000016688950359427442",
            "extra": "mean: 5.175603571428658 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.10284087841285,
            "unit": "iter/sec",
            "range": "stddev: 0.00001750567502707139",
            "extra": "mean: 3.8744246153845334 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.522711035983,
            "unit": "iter/sec",
            "range": "stddev: 0.000013742756431469643",
            "extra": "mean: 2.4598871670701956 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.496007975645,
            "unit": "iter/sec",
            "range": "stddev: 0.000008423444768264182",
            "extra": "mean: 1.2202621980676194 msec\nrounds: 828"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.797129471257392,
            "unit": "iter/sec",
            "range": "stddev: 0.00009082178081038135",
            "extra": "mean: 42.02187500000024 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.029780432759132,
            "unit": "iter/sec",
            "range": "stddev: 0.00013498761646884213",
            "extra": "mean: 39.95240799999962 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.9798548179167,
            "unit": "iter/sec",
            "range": "stddev: 0.0002267753220333388",
            "extra": "mean: 3.2789050955415857 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.2319425877413,
            "unit": "iter/sec",
            "range": "stddev: 0.00008958717916203422",
            "extra": "mean: 1.9484367924528423 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1092.0952093931328,
            "unit": "iter/sec",
            "range": "stddev: 0.000022480537738876476",
            "extra": "mean: 915.671080139332 usec\nrounds: 1148"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1015.0709654873867,
            "unit": "iter/sec",
            "range": "stddev: 0.000017709551268206708",
            "extra": "mean: 985.1527962085386 usec\nrounds: 1055"
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
        "date": 1673976493369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.69537570402332,
            "unit": "iter/sec",
            "range": "stddev: 0.000010180200667203566",
            "extra": "mean: 4.885308212560392 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.10068004239395,
            "unit": "iter/sec",
            "range": "stddev: 0.000012171312595690414",
            "extra": "mean: 3.6751102564102287 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.8859973454939,
            "unit": "iter/sec",
            "range": "stddev: 0.000010194088926757038",
            "extra": "mean: 2.3647035046729377 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.1400311672191,
            "unit": "iter/sec",
            "range": "stddev: 0.000005817589265534686",
            "extra": "mean: 1.1545477220956868 msec\nrounds: 878"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.28568461758488,
            "unit": "iter/sec",
            "range": "stddev: 0.000012440679277362914",
            "extra": "mean: 5.1207030456852705 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.76769619677543,
            "unit": "iter/sec",
            "range": "stddev: 0.000011529636474816852",
            "extra": "mean: 3.87946206896545 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.10077599525175,
            "unit": "iter/sec",
            "range": "stddev: 0.000011223371026513018",
            "extra": "mean: 2.39750213270134 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.5108997412178,
            "unit": "iter/sec",
            "range": "stddev: 0.00000709653711254144",
            "extra": "mean: 1.2202400240384557 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.748432663194375,
            "unit": "iter/sec",
            "range": "stddev: 0.00005524457397664816",
            "extra": "mean: 38.83731538461491 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.752379970988233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007946283780926613",
            "extra": "mean: 37.379851851852266 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.5027505764122,
            "unit": "iter/sec",
            "range": "stddev: 0.00018313615203655373",
            "extra": "mean: 3.179622429906342 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.8921696456331,
            "unit": "iter/sec",
            "range": "stddev: 0.000010936561310116578",
            "extra": "mean: 1.7765391915640727 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1127.4158652626147,
            "unit": "iter/sec",
            "range": "stddev: 0.000020796922534520535",
            "extra": "mean: 886.9841473865235 usec\nrounds: 1167"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.0201606565247,
            "unit": "iter/sec",
            "range": "stddev: 0.000019360645245818708",
            "extra": "mean: 945.1615736504284 usec\nrounds: 1093"
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
        "date": 1673977015308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.59989566326057,
            "unit": "iter/sec",
            "range": "stddev: 0.001441711086773347",
            "extra": "mean: 8.15661379310349 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.97702928723908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007981837858294363",
            "extra": "mean: 6.024930102040835 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.43914264703747,
            "unit": "iter/sec",
            "range": "stddev: 0.0003338592496875113",
            "extra": "mean: 4.025130618892532 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.4479270005971,
            "unit": "iter/sec",
            "range": "stddev: 0.00021704763393541113",
            "extra": "mean: 1.8167022727272715 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.47232819308825,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094211923668947",
            "extra": "mean: 8.660083464566851 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.07122639283534,
            "unit": "iter/sec",
            "range": "stddev: 0.000680128214703484",
            "extra": "mean: 6.208433513513506 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.02401713323303,
            "unit": "iter/sec",
            "range": "stddev: 0.0003809899215078911",
            "extra": "mean: 4.18368000000015 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.3385551464028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894605026274264",
            "extra": "mean: 1.9442446808510343 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.190276110214768,
            "unit": "iter/sec",
            "range": "stddev: 0.0015606552385439498",
            "extra": "mean: 58.1724222222226 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.132293595807575,
            "unit": "iter/sec",
            "range": "stddev: 0.0022757740125493643",
            "extra": "mean: 55.15022105263138 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.84556356395905,
            "unit": "iter/sec",
            "range": "stddev: 0.00038336845702430147",
            "extra": "mean: 5.380811792452868 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.1641931741293,
            "unit": "iter/sec",
            "range": "stddev: 0.0005692801769609467",
            "extra": "mean: 3.084856443298894 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 623.0029156382582,
            "unit": "iter/sec",
            "range": "stddev: 0.00021374674383238074",
            "extra": "mean: 1.6051289245982314 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 585.6556173483734,
            "unit": "iter/sec",
            "range": "stddev: 0.0002603013498830844",
            "extra": "mean: 1.7074881045752124 msec\nrounds: 765"
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
        "date": 1673977789680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.8015171538099,
            "unit": "iter/sec",
            "range": "stddev: 0.00009126375874484146",
            "extra": "mean: 4.882776328502394 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.42918889243055,
            "unit": "iter/sec",
            "range": "stddev: 0.000013656870914980366",
            "extra": "mean: 3.6706786231884014 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.9328845231582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000127568996166702",
            "extra": "mean: 2.3588639534883096 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.6709241516951,
            "unit": "iter/sec",
            "range": "stddev: 0.000007939128366263097",
            "extra": "mean: 1.1551733714285704 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.87654158795738,
            "unit": "iter/sec",
            "range": "stddev: 0.000013261701367928654",
            "extra": "mean: 5.10525656565646 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.3178087945401,
            "unit": "iter/sec",
            "range": "stddev: 0.000014339665797274968",
            "extra": "mean: 3.871200381679362 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.5541107067915,
            "unit": "iter/sec",
            "range": "stddev: 0.00001140526108466511",
            "extra": "mean: 2.4122303317534497 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.1375950277318,
            "unit": "iter/sec",
            "range": "stddev: 0.000014308405143483919",
            "extra": "mean: 1.2163414081146218 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.07042665055416,
            "unit": "iter/sec",
            "range": "stddev: 0.0001262471419937728",
            "extra": "mean: 38.35763846153794 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.026821417574737,
            "unit": "iter/sec",
            "range": "stddev: 0.00013339634130991404",
            "extra": "mean: 37.000281481481565 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.6997430683162,
            "unit": "iter/sec",
            "range": "stddev: 0.00018090970927902748",
            "extra": "mean: 3.1979559374998523 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 558.2389971783641,
            "unit": "iter/sec",
            "range": "stddev: 0.000010245251748076943",
            "extra": "mean: 1.791347442680519 msec\nrounds: 567"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1121.437966479782,
            "unit": "iter/sec",
            "range": "stddev: 0.000021308622685482827",
            "extra": "mean: 891.7122746780382 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1045.9421500467388,
            "unit": "iter/sec",
            "range": "stddev: 0.000019603568989733325",
            "extra": "mean: 956.0758211678477 usec\nrounds: 1096"
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
        "date": 1674054558898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.06571761856173,
            "unit": "iter/sec",
            "range": "stddev: 0.000011311339040214105",
            "extra": "mean: 4.876485507246405 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.76209571419196,
            "unit": "iter/sec",
            "range": "stddev: 0.000012443872449049877",
            "extra": "mean: 3.666198550724691 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.20677724484096,
            "unit": "iter/sec",
            "range": "stddev: 0.00003825538277108451",
            "extra": "mean: 2.379780751173683 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.3783042537227,
            "unit": "iter/sec",
            "range": "stddev: 0.00000630466146189035",
            "extra": "mean: 1.158240825688073 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.1489035672529,
            "unit": "iter/sec",
            "range": "stddev: 0.000012670877343506605",
            "extra": "mean: 5.098167676767734 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.01521229954125,
            "unit": "iter/sec",
            "range": "stddev: 0.00001090970298132096",
            "extra": "mean: 3.8607770992366968 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.3997700862855,
            "unit": "iter/sec",
            "range": "stddev: 0.000011261067988008658",
            "extra": "mean: 2.4307257142857996 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 820.9307726831933,
            "unit": "iter/sec",
            "range": "stddev: 0.000007058735222502151",
            "extra": "mean: 1.2181295101553122 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.236416347708953,
            "unit": "iter/sec",
            "range": "stddev: 0.00005796101501531804",
            "extra": "mean: 38.11496153846191 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.131138357249576,
            "unit": "iter/sec",
            "range": "stddev: 0.00009328661391777901",
            "extra": "mean: 36.858018518518776 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.88863569496186,
            "unit": "iter/sec",
            "range": "stddev: 0.00030126810854821516",
            "extra": "mean: 3.216585893416771 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.6399105677075,
            "unit": "iter/sec",
            "range": "stddev: 0.000011491410012762546",
            "extra": "mean: 1.786863268893 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1134.4943535653426,
            "unit": "iter/sec",
            "range": "stddev: 0.00002425907713827847",
            "extra": "mean: 881.4499577343236 usec\nrounds: 1183"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1057.1883241894902,
            "unit": "iter/sec",
            "range": "stddev: 0.000021375672877960376",
            "extra": "mean: 945.9052631579767 usec\nrounds: 1102"
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
        "date": 1674140515004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.70840269472683,
            "unit": "iter/sec",
            "range": "stddev: 0.00006375954361013415",
            "extra": "mean: 4.9089776699028915 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.7010558560838,
            "unit": "iter/sec",
            "range": "stddev: 0.00001456016726425544",
            "extra": "mean: 3.6805156934306713 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.6070494911896,
            "unit": "iter/sec",
            "range": "stddev: 0.000010956452140071175",
            "extra": "mean: 2.360678372093046 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.5081827157434,
            "unit": "iter/sec",
            "range": "stddev: 0.000007261428800066984",
            "extra": "mean: 1.1540571917807827 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.80052673271177,
            "unit": "iter/sec",
            "range": "stddev: 0.000015557658486843974",
            "extra": "mean: 5.133456345177713 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.5555535445677,
            "unit": "iter/sec",
            "range": "stddev: 0.000012936480972327076",
            "extra": "mean: 3.8676407692307726 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.85477566133966,
            "unit": "iter/sec",
            "range": "stddev: 0.000010676655090216748",
            "extra": "mean: 2.3989169811321007 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.7060873502089,
            "unit": "iter/sec",
            "range": "stddev: 0.000006132421352174945",
            "extra": "mean: 1.211084688995235 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.075096277278497,
            "unit": "iter/sec",
            "range": "stddev: 0.000041786569796466374",
            "extra": "mean: 38.35076923076933 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.1330905223209,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038004918885932",
            "extra": "mean: 36.85536666666685 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.06813918265095,
            "unit": "iter/sec",
            "range": "stddev: 0.00017738190414133954",
            "extra": "mean: 3.194192812500085 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.1649507258753,
            "unit": "iter/sec",
            "range": "stddev: 0.00001039753643288483",
            "extra": "mean: 1.7820072310405077 msec\nrounds: 567"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1123.5064356185187,
            "unit": "iter/sec",
            "range": "stddev: 0.000020363155700539028",
            "extra": "mean: 890.0705579398615 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1060.1180502702775,
            "unit": "iter/sec",
            "range": "stddev: 0.000018709805840729137",
            "extra": "mean: 943.2911737943239 usec\nrounds: 1099"
          }
        ]
      }
    ]
  }
}