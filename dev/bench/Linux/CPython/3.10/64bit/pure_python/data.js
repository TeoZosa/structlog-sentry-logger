window.BENCHMARK_DATA = {
  "lastUpdate": 1648768247617,
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
        "date": 1647981766945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.52308534052813,
            "unit": "iter/sec",
            "range": "stddev: 0.0006251329389332513",
            "extra": "mean: 5.361266666666691 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.11124042619196,
            "unit": "iter/sec",
            "range": "stddev: 0.00042565756180980573",
            "extra": "mean: 4.18215387205386 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.25801532535377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006322605955137435",
            "extra": "mean: 2.9132604494381864 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.3214086135354,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623594079914014",
            "extra": "mean: 1.3562606324973085 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.02908437671925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007461257529026143",
            "extra": "mean: 6.096479802955789 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 204.59424797886075,
            "unit": "iter/sec",
            "range": "stddev: 0.0012106842890954115",
            "extra": "mean: 4.887722943722849 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.51537272295735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852301136958331",
            "extra": "mean: 2.9716324455206062 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 638.6807058963147,
            "unit": "iter/sec",
            "range": "stddev: 0.00035430032344105524",
            "extra": "mean: 1.5657275862069693 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.06429639501246,
            "unit": "iter/sec",
            "range": "stddev: 0.003195492082876018",
            "extra": "mean: 47.473695833333274 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.84398859189159,
            "unit": "iter/sec",
            "range": "stddev: 0.002415005711331643",
            "extra": "mean: 41.93929199999957 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.10018071115684,
            "unit": "iter/sec",
            "range": "stddev: 0.0015792933154966397",
            "extra": "mean: 4.482291304347616 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 424.3663340681699,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254413168918618",
            "extra": "mean: 2.3564545999998217 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1287.1233287957211,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576911860977887",
            "extra": "mean: 776.9263268156564 usec\nrounds: 1432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1106.9739813574083,
            "unit": "iter/sec",
            "range": "stddev: 0.00022630228793074013",
            "extra": "mean: 903.3635991821296 usec\nrounds: 1467"
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
        "date": 1647984031371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.4438077729396,
            "unit": "iter/sec",
            "range": "stddev: 0.00012824606115445302",
            "extra": "mean: 5.451260591132982 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.89538875118467,
            "unit": "iter/sec",
            "range": "stddev: 0.00012763140422139744",
            "extra": "mean: 4.100118518518496 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.12285301461543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000836789651788191",
            "extra": "mean: 2.716484433962315 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 764.1344271802925,
            "unit": "iter/sec",
            "range": "stddev: 0.00006506406007967306",
            "extra": "mean: 1.3086702606635163 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.13024173678127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018463976735044537",
            "extra": "mean: 5.7759984042553985 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.09081654130688,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270817132221803",
            "extra": "mean: 4.423001408450837 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.7503788525496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000948878258379173",
            "extra": "mean: 2.8188835294116643 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.1218104083453,
            "unit": "iter/sec",
            "range": "stddev: 0.00002287311796072457",
            "extra": "mean: 1.5034840000000291 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.989423926610463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004952304513044211",
            "extra": "mean: 41.68503599999923 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.607014273349677,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987575335658266",
            "extra": "mean: 39.05180000000012 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.04909022810295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012738931388502485",
            "extra": "mean: 3.703030434782534 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 444.6193482940148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006427243845372512",
            "extra": "mean: 2.2491148975791466 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1353.8745874283559,
            "unit": "iter/sec",
            "range": "stddev: 0.00003408550643114898",
            "extra": "mean: 738.6208510638123 usec\nrounds: 1645"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.1855247068886,
            "unit": "iter/sec",
            "range": "stddev: 0.000038165195840844584",
            "extra": "mean: 839.4997918112437 usec\nrounds: 1441"
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
        "date": 1647985660750,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.46793812860636,
            "unit": "iter/sec",
            "range": "stddev: 0.00035969937406096786",
            "extra": "mean: 6.043466857142873 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 216.59870642652024,
            "unit": "iter/sec",
            "range": "stddev: 0.0004316077881992637",
            "extra": "mean: 4.616832743362869 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.17322508905795,
            "unit": "iter/sec",
            "range": "stddev: 0.00017975708990542133",
            "extra": "mean: 3.001441666666635 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 679.1013355012981,
            "unit": "iter/sec",
            "range": "stddev: 0.00013647430555246902",
            "extra": "mean: 1.472534285714254 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.60444374650885,
            "unit": "iter/sec",
            "range": "stddev: 0.000020181151651628133",
            "extra": "mean: 6.226477777777787 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.3437918609779,
            "unit": "iter/sec",
            "range": "stddev: 0.000013898953147988533",
            "extra": "mean: 4.799759047619104 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.251524622223,
            "unit": "iter/sec",
            "range": "stddev: 0.000012911839720493315",
            "extra": "mean: 3.018854029850741 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 641.2702028390771,
            "unit": "iter/sec",
            "range": "stddev: 0.00000968495224540533",
            "extra": "mean: 1.5594050613496913 msec\nrounds: 652"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.06521152614439,
            "unit": "iter/sec",
            "range": "stddev: 0.00017632186453622823",
            "extra": "mean: 45.32020909090904 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.35175981781009,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679143541267871",
            "extra": "mean: 42.823324999999045 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.54473674334463,
            "unit": "iter/sec",
            "range": "stddev: 0.000022615947936518116",
            "extra": "mean: 3.9913031620552033 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 417.6572482002023,
            "unit": "iter/sec",
            "range": "stddev: 0.000013299132049665708",
            "extra": "mean: 2.3943077830188986 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1246.1683775746558,
            "unit": "iter/sec",
            "range": "stddev: 0.000007322925853603373",
            "extra": "mean: 802.459778305594 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1104.1536459479303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065766208527183954",
            "extra": "mean: 905.6710573477181 usec\nrounds: 1116"
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
        "date": 1648220401483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.51138284123687,
            "unit": "iter/sec",
            "range": "stddev: 0.00018523419958549944",
            "extra": "mean: 5.419719827586202 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.45024681344077,
            "unit": "iter/sec",
            "range": "stddev: 0.00026805136153513776",
            "extra": "mean: 4.008815436241607 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.45419217565484,
            "unit": "iter/sec",
            "range": "stddev: 0.00018660437899916903",
            "extra": "mean: 2.628437327188925 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.3762057015632,
            "unit": "iter/sec",
            "range": "stddev: 0.0001105922057454035",
            "extra": "mean: 1.2716559742647007 msec\nrounds: 1088"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.00981649232008,
            "unit": "iter/sec",
            "range": "stddev: 0.00030659249227390096",
            "extra": "mean: 5.681501293103351 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.66404854345882,
            "unit": "iter/sec",
            "range": "stddev: 0.00018529022612016842",
            "extra": "mean: 4.451090445859925 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.9797750227679,
            "unit": "iter/sec",
            "range": "stddev: 0.00008069643709108418",
            "extra": "mean: 2.825020158102762 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.1818896627623,
            "unit": "iter/sec",
            "range": "stddev: 0.00003354236459168681",
            "extra": "mean: 1.468036680327889 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.58768500175116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003638548376759429",
            "extra": "mean: 42.395004000000824 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.282256950967778,
            "unit": "iter/sec",
            "range": "stddev: 0.000736737319683288",
            "extra": "mean: 39.553430769230474 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.13688528915327,
            "unit": "iter/sec",
            "range": "stddev: 0.00009362553940383665",
            "extra": "mean: 3.7574648809522095 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 441.59550614000966,
            "unit": "iter/sec",
            "range": "stddev: 0.000056950757424461314",
            "extra": "mean: 2.264515798045612 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1344.5411147959815,
            "unit": "iter/sec",
            "range": "stddev: 0.000010859744153108413",
            "extra": "mean: 743.7481747456554 usec\nrounds: 1671"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1167.6164856758282,
            "unit": "iter/sec",
            "range": "stddev: 0.000009065991085305193",
            "extra": "mean: 856.4455985915528 usec\nrounds: 1704"
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
        "date": 1648484481906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.94071875022118,
            "unit": "iter/sec",
            "range": "stddev: 0.000017068333104365732",
            "extra": "mean: 5.52667197802196 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.53323528291966,
            "unit": "iter/sec",
            "range": "stddev: 0.000027003340484409607",
            "extra": "mean: 4.192287916666704 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.91617408326107,
            "unit": "iter/sec",
            "range": "stddev: 0.000012082224822991025",
            "extra": "mean: 2.7630707650273285 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 734.6232569315455,
            "unit": "iter/sec",
            "range": "stddev: 0.000008741271139355578",
            "extra": "mean: 1.3612419571045287 msec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.82849131201274,
            "unit": "iter/sec",
            "range": "stddev: 0.00012972334992942988",
            "extra": "mean: 5.888293491124392 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.1098549980267,
            "unit": "iter/sec",
            "range": "stddev: 0.00012246169624114325",
            "extra": "mean: 4.422628991596706 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.7333945088312,
            "unit": "iter/sec",
            "range": "stddev: 0.00008058488410500856",
            "extra": "mean: 2.764466911764726 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 699.3341569736788,
            "unit": "iter/sec",
            "range": "stddev: 0.000052899172686959204",
            "extra": "mean: 1.4299315856777715 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.49332417615751,
            "unit": "iter/sec",
            "range": "stddev: 0.000442734933622701",
            "extra": "mean: 42.565283333333575 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.48941048503327,
            "unit": "iter/sec",
            "range": "stddev: 0.00007224362301775058",
            "extra": "mean: 40.83397600000012 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.92717478669476,
            "unit": "iter/sec",
            "range": "stddev: 0.00006926408921048093",
            "extra": "mean: 3.8033345195728483 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 454.6005576433873,
            "unit": "iter/sec",
            "range": "stddev: 0.00007449741116176702",
            "extra": "mean: 2.1997333333331563 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1386.184142170234,
            "unit": "iter/sec",
            "range": "stddev: 0.000028857676626831107",
            "extra": "mean: 721.4048765803818 usec\nrounds: 1661"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1217.3182758804146,
            "unit": "iter/sec",
            "range": "stddev: 0.000034660821583213744",
            "extra": "mean: 821.477849970468 usec\nrounds: 1693"
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
        "date": 1648486033248,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.61131043672611,
            "unit": "iter/sec",
            "range": "stddev: 0.0004579218475889368",
            "extra": "mean: 7.5981311688311415 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.5502553987606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713612841038138",
            "extra": "mean: 5.729009090909072 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.39940533081744,
            "unit": "iter/sec",
            "range": "stddev: 0.00046368778579774394",
            "extra": "mean: 3.900165051903133 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.7112310876416,
            "unit": "iter/sec",
            "range": "stddev: 0.00022237959170285913",
            "extra": "mean: 1.819136927621855 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.87597089306706,
            "unit": "iter/sec",
            "range": "stddev: 0.00026580495363450867",
            "extra": "mean: 8.272942857142798 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.6229825197178,
            "unit": "iter/sec",
            "range": "stddev: 0.00031640072179801816",
            "extra": "mean: 6.149192349726777 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.65716827537594,
            "unit": "iter/sec",
            "range": "stddev: 0.000412572473078853",
            "extra": "mean: 4.054210169491479 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.2522100705053,
            "unit": "iter/sec",
            "range": "stddev: 0.00019957814844316442",
            "extra": "mean: 1.9147836633663986 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.56825182592224,
            "unit": "iter/sec",
            "range": "stddev: 0.0013140235026885476",
            "extra": "mean: 48.618619047618644 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.401909343953147,
            "unit": "iter/sec",
            "range": "stddev: 0.0008479131462112246",
            "extra": "mean: 44.639052173913285 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.88502884609463,
            "unit": "iter/sec",
            "range": "stddev: 0.00034742806256291936",
            "extra": "mean: 5.294225837320384 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.19446581705506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003007061145058267",
            "extra": "mean: 2.9568786632391144 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 973.9126605164557,
            "unit": "iter/sec",
            "range": "stddev: 0.00021740239391578316",
            "extra": "mean: 1.0267861180382545 msec\nrounds: 1203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 901.6864038119575,
            "unit": "iter/sec",
            "range": "stddev: 0.0001200831611188299",
            "extra": "mean: 1.1090330249767695 msec\nrounds: 1081"
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
        "date": 1648486664406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.42405885274545,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143914607430761",
            "extra": "mean: 7.667297037037042 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.9751489906691,
            "unit": "iter/sec",
            "range": "stddev: 0.0005997178570412551",
            "extra": "mean: 5.848803208556202 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 238.9645482306274,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465946750721254",
            "extra": "mean: 4.184721153846171 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.0293401071781,
            "unit": "iter/sec",
            "range": "stddev: 0.00019483574204592005",
            "extra": "mean: 1.7984662460568066 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.95151974648563,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894678596185547",
            "extra": "mean: 8.133287022900614 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.82347922284993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004572893690810791",
            "extra": "mean: 6.256902958580007 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.11512774515484,
            "unit": "iter/sec",
            "range": "stddev: 0.0004036569609004114",
            "extra": "mean: 4.1820858823528075 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.1904474157687,
            "unit": "iter/sec",
            "range": "stddev: 0.00010778819038062636",
            "extra": "mean: 1.8968477234401595 msec\nrounds: 593"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.602339817543577,
            "unit": "iter/sec",
            "range": "stddev: 0.0012411082261048311",
            "extra": "mean: 48.53817619047652 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.68197445486332,
            "unit": "iter/sec",
            "range": "stddev: 0.001205777676152388",
            "extra": "mean: 46.12126086956521 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.50725743398144,
            "unit": "iter/sec",
            "range": "stddev: 0.00034405546613111256",
            "extra": "mean: 5.449375757576019 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.6585009240639,
            "unit": "iter/sec",
            "range": "stddev: 0.00020030814533554357",
            "extra": "mean: 3.0242682320441867 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1026.064869360217,
            "unit": "iter/sec",
            "range": "stddev: 0.00009495993738865873",
            "extra": "mean: 974.5972499999252 usec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 912.8789932003741,
            "unit": "iter/sec",
            "range": "stddev: 0.0001633033602223522",
            "extra": "mean: 1.0954354382656968 msec\nrounds: 1061"
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
        "date": 1648604777254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.07931759634226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551354403785565",
            "extra": "mean: 7.038322093023231 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 177.54552543454054,
            "unit": "iter/sec",
            "range": "stddev: 0.0007386804086972865",
            "extra": "mean: 5.632358222222227 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.6496950482539,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026342706337713",
            "extra": "mean: 3.9424451104100937 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 621.5804200162529,
            "unit": "iter/sec",
            "range": "stddev: 0.00026111982343088194",
            "extra": "mean: 1.6088022849462542 msec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.75829846777836,
            "unit": "iter/sec",
            "range": "stddev: 0.0008912344698805095",
            "extra": "mean: 7.647698170731561 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.9781482250581,
            "unit": "iter/sec",
            "range": "stddev: 0.00047277463553822754",
            "extra": "mean: 5.781077033492819 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.39775117966354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006645935511034793",
            "extra": "mean: 3.855083536585412 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.437357290913,
            "unit": "iter/sec",
            "range": "stddev: 0.000275983405092209",
            "extra": "mean: 1.7654202836879918 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.088541804957753,
            "unit": "iter/sec",
            "range": "stddev: 0.001970471079017746",
            "extra": "mean: 43.31152692307628 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.906254381856016,
            "unit": "iter/sec",
            "range": "stddev: 0.002301540179648193",
            "extra": "mean: 41.83005769230682 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.38205583003207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006448192140896417",
            "extra": "mean: 5.092114937759365 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.8765313459309,
            "unit": "iter/sec",
            "range": "stddev: 0.00047475869632096116",
            "extra": "mean: 2.882870155902032 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 968.8241789428761,
            "unit": "iter/sec",
            "range": "stddev: 0.00032713086099489134",
            "extra": "mean: 1.032179028697592 msec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 967.0144383661782,
            "unit": "iter/sec",
            "range": "stddev: 0.0002813050583196375",
            "extra": "mean: 1.0341107229893616 msec\nrounds: 1231"
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
        "date": 1648607745827,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.67849710605572,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478550122134113",
            "extra": "mean: 5.13667413127412 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.40178776535322,
            "unit": "iter/sec",
            "range": "stddev: 0.0002342544202194805",
            "extra": "mean: 3.993581710914465 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 367.6444564633112,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268404049558198",
            "extra": "mean: 2.7200192534381227 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 759.1531825805961,
            "unit": "iter/sec",
            "range": "stddev: 0.000058337198306737534",
            "extra": "mean: 1.3172572057205783 msec\nrounds: 909"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.1853170929848,
            "unit": "iter/sec",
            "range": "stddev: 0.0001391901008138518",
            "extra": "mean: 5.8416224999999145 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 236.15642381488792,
            "unit": "iter/sec",
            "range": "stddev: 0.00026288494824125777",
            "extra": "mean: 4.234481467181489 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 369.4539968576033,
            "unit": "iter/sec",
            "range": "stddev: 0.00020175762902971574",
            "extra": "mean: 2.706696932515322 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 723.1952986685826,
            "unit": "iter/sec",
            "range": "stddev: 0.00010452256106871247",
            "extra": "mean: 1.3827523517382105 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.96577768013427,
            "unit": "iter/sec",
            "range": "stddev: 0.0014525987412270472",
            "extra": "mean: 40.054830769230094 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.150417743906058,
            "unit": "iter/sec",
            "range": "stddev: 0.0013532790737239184",
            "extra": "mean: 38.24030689655175 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 283.7753785656221,
            "unit": "iter/sec",
            "range": "stddev: 0.00026498226386205545",
            "extra": "mean: 3.5239138964579104 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.88796695527265,
            "unit": "iter/sec",
            "range": "stddev: 0.00006675763273298491",
            "extra": "mean: 2.227727347611526 msec\nrounds: 607"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1412.140313536272,
            "unit": "iter/sec",
            "range": "stddev: 0.00005321236934013383",
            "extra": "mean: 708.1449275361362 usec\nrounds: 1932"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1204.1259765589286,
            "unit": "iter/sec",
            "range": "stddev: 0.00004936713025885469",
            "extra": "mean: 830.477889745169 usec\nrounds: 1687"
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
        "date": 1648613746462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.9996022202222,
            "unit": "iter/sec",
            "range": "stddev: 0.0008065165188495245",
            "extra": "mean: 7.042273248407662 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.00390371359077,
            "unit": "iter/sec",
            "range": "stddev: 0.0006581408588114634",
            "extra": "mean: 5.4346673076922265 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.28398930699854,
            "unit": "iter/sec",
            "range": "stddev: 0.0007188830899861102",
            "extra": "mean: 3.7981800664451506 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 590.7409190042584,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708450760360641",
            "extra": "mean: 1.6927894578313296 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.1121823644002,
            "unit": "iter/sec",
            "range": "stddev: 0.0004726350748920625",
            "extra": "mean: 7.346880952380845 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.41148990701743,
            "unit": "iter/sec",
            "range": "stddev: 0.0004528565921084176",
            "extra": "mean: 5.700880829015719 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.2891941844132,
            "unit": "iter/sec",
            "range": "stddev: 0.0003506467300970026",
            "extra": "mean: 3.741266095890361 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 557.4733094018688,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294273692935526",
            "extra": "mean: 1.7938078525641565 msec\nrounds: 624"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.98150036928919,
            "unit": "iter/sec",
            "range": "stddev: 0.004459294172946304",
            "extra": "mean: 45.49280000000004 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.991399267911564,
            "unit": "iter/sec",
            "range": "stddev: 0.003379578219538992",
            "extra": "mean: 41.68160384615405 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.01563804048638,
            "unit": "iter/sec",
            "range": "stddev: 0.0008850212536369249",
            "extra": "mean: 5.101633777777737 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 346.66538848541364,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773168275497534",
            "extra": "mean: 2.884626020408369 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1095.5207818707552,
            "unit": "iter/sec",
            "range": "stddev: 0.00024755049618213073",
            "extra": "mean: 912.8078778134725 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 994.5411034678231,
            "unit": "iter/sec",
            "range": "stddev: 0.00019866029451042616",
            "extra": "mean: 1.005488859649081 msec\nrounds: 1140"
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
        "date": 1648734256671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.1656242702129,
            "unit": "iter/sec",
            "range": "stddev: 0.00006812770800053542",
            "extra": "mean: 4.181202892561955 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.444312210124,
            "unit": "iter/sec",
            "range": "stddev: 0.000019955756067750414",
            "extra": "mean: 3.1903593750000128 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.9261795618075,
            "unit": "iter/sec",
            "range": "stddev: 0.000012353615423499644",
            "extra": "mean: 2.092373347107418 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.0603705927136,
            "unit": "iter/sec",
            "range": "stddev: 0.000008273537078548083",
            "extra": "mean: 1.0405173604060598 msec\nrounds: 985"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 223.2225901261165,
            "unit": "iter/sec",
            "range": "stddev: 0.00009207964574596908",
            "extra": "mean: 4.479833333333419 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.3750624151221,
            "unit": "iter/sec",
            "range": "stddev: 0.00001905008058606445",
            "extra": "mean: 3.9005353741496185 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.76345376953554,
            "unit": "iter/sec",
            "range": "stddev: 0.000015529292880992885",
            "extra": "mean: 2.4705787804878763 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.6899032673662,
            "unit": "iter/sec",
            "range": "stddev: 0.000008911553903605164",
            "extra": "mean: 1.2663198501873576 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.465690692965964,
            "unit": "iter/sec",
            "range": "stddev: 0.0003808454633023393",
            "extra": "mean: 36.409060714286085 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.879431262422646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002573059843010456",
            "extra": "mean: 34.626720689655016 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.1991454510816,
            "unit": "iter/sec",
            "range": "stddev: 0.000020608877519265707",
            "extra": "mean: 3.2133764331213217 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.8072256963856,
            "unit": "iter/sec",
            "range": "stddev: 0.000010418779584707223",
            "extra": "mean: 1.9538606525911382 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1539.017635019296,
            "unit": "iter/sec",
            "range": "stddev: 0.00000642616339069803",
            "extra": "mean: 649.7651340996247 usec\nrounds: 1566"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1381.9028753415507,
            "unit": "iter/sec",
            "range": "stddev: 0.000005166424585575407",
            "extra": "mean: 723.6398576512407 usec\nrounds: 1405"
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
        "date": 1648765295113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.472684540942,
            "unit": "iter/sec",
            "range": "stddev: 0.0001472925763357575",
            "extra": "mean: 5.4802723076923145 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.62875188037071,
            "unit": "iter/sec",
            "range": "stddev: 0.00008310511791516892",
            "extra": "mean: 4.121523076923113 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.96053604326977,
            "unit": "iter/sec",
            "range": "stddev: 0.000047755308350135084",
            "extra": "mean: 2.747550629722982 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.8588501617205,
            "unit": "iter/sec",
            "range": "stddev: 0.00002933484199680764",
            "extra": "mean: 1.3247509779951054 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.28099813314145,
            "unit": "iter/sec",
            "range": "stddev: 0.00007974560400743421",
            "extra": "mean: 5.9073375690606955 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.20319417412296,
            "unit": "iter/sec",
            "range": "stddev: 0.00007492356051754117",
            "extra": "mean: 4.520730379746855 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.0766147213325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006806601375993469",
            "extra": "mean: 2.848381117021284 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 685.11679384648,
            "unit": "iter/sec",
            "range": "stddev: 0.00003527712310301788",
            "extra": "mean: 1.4596051490515332 msec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.65626967043483,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041210455759735",
            "extra": "mean: 42.27209166666634 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.683805657890595,
            "unit": "iter/sec",
            "range": "stddev: 0.0025519689801994185",
            "extra": "mean: 42.2229440000001 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.97351708787235,
            "unit": "iter/sec",
            "range": "stddev: 0.000253255947799104",
            "extra": "mean: 3.937418402777837 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.8597622364556,
            "unit": "iter/sec",
            "range": "stddev: 0.00019161306254457668",
            "extra": "mean: 2.3102170431210842 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1303.780395526751,
            "unit": "iter/sec",
            "range": "stddev: 0.00015512652085674703",
            "extra": "mean: 767.0003348961094 usec\nrounds: 1493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.421452984912,
            "unit": "iter/sec",
            "range": "stddev: 0.0002152522122128043",
            "extra": "mean: 913.7247787610631 usec\nrounds: 1469"
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
        "date": 1648767388232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.55951859073082,
            "unit": "iter/sec",
            "range": "stddev: 0.00015985847105629055",
            "extra": "mean: 5.3033652582159165 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.23480136903206,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716384996636131",
            "extra": "mean: 4.028444015443971 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 377.10208967875167,
            "unit": "iter/sec",
            "range": "stddev: 0.00006948327894858492",
            "extra": "mean: 2.651801799485882 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.215605707388,
            "unit": "iter/sec",
            "range": "stddev: 0.00008393662740075985",
            "extra": "mean: 1.2622826321466825 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.21754647716773,
            "unit": "iter/sec",
            "range": "stddev: 0.0001531981778242405",
            "extra": "mean: 5.642782105263135 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.06295206814963,
            "unit": "iter/sec",
            "range": "stddev: 0.00012857414716248124",
            "extra": "mean: 4.404064999999932 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.3697710789866,
            "unit": "iter/sec",
            "range": "stddev: 0.00011274217559144918",
            "extra": "mean: 2.7369532981528932 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 717.9780517415307,
            "unit": "iter/sec",
            "range": "stddev: 0.00006077472703976488",
            "extra": "mean: 1.3928002361275469 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.49362852140002,
            "unit": "iter/sec",
            "range": "stddev: 0.00088661872446193",
            "extra": "mean: 40.82694399999994 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.926520208713516,
            "unit": "iter/sec",
            "range": "stddev: 0.00046295279733993733",
            "extra": "mean: 38.57054444444553 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.2437230235902,
            "unit": "iter/sec",
            "range": "stddev: 0.00013125567688546902",
            "extra": "mean: 3.633143706293689 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 456.4252382015179,
            "unit": "iter/sec",
            "range": "stddev: 0.00006814390545452652",
            "extra": "mean: 2.1909393177738488 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1390.7996652421166,
            "unit": "iter/sec",
            "range": "stddev: 0.00002591618452716817",
            "extra": "mean: 719.0108144194265 usec\nrounds: 1498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1252.8201735535577,
            "unit": "iter/sec",
            "range": "stddev: 0.00002859644215473323",
            "extra": "mean: 798.1991518890962 usec\nrounds: 1297"
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
        "date": 1648768245416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.8993962133039,
            "unit": "iter/sec",
            "range": "stddev: 0.00016161599790167586",
            "extra": "mean: 4.810018779342698 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.21100777191026,
            "unit": "iter/sec",
            "range": "stddev: 0.000009663887246748282",
            "extra": "mean: 3.6073603571428223 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.7640672380921,
            "unit": "iter/sec",
            "range": "stddev: 0.000017980310447706097",
            "extra": "mean: 2.387979481132131 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.6605893897809,
            "unit": "iter/sec",
            "range": "stddev: 0.000008120792957858188",
            "extra": "mean: 1.1938009411765216 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.00884287691173,
            "unit": "iter/sec",
            "range": "stddev: 0.00003388751908147012",
            "extra": "mean: 5.050279500000059 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.0771036340071,
            "unit": "iter/sec",
            "range": "stddev: 0.000012996085266493971",
            "extra": "mean: 3.905073846153889 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.0912901143987,
            "unit": "iter/sec",
            "range": "stddev: 0.000014066247373211525",
            "extra": "mean: 2.462500487804831 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 780.7286209000678,
            "unit": "iter/sec",
            "range": "stddev: 0.000007269295502431374",
            "extra": "mean: 1.2808547979797948 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.010277410554774,
            "unit": "iter/sec",
            "range": "stddev: 0.00004827613149150492",
            "extra": "mean: 37.02294444444436 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.449867752260335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000341030750673862",
            "extra": "mean: 35.14954827586326 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.04698846306144,
            "unit": "iter/sec",
            "range": "stddev: 0.000023771278818058326",
            "extra": "mean: 3.2253175718852 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.73827266732576,
            "unit": "iter/sec",
            "range": "stddev: 0.000010044963357786412",
            "extra": "mean: 1.9656472762644301 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1520.1048616709263,
            "unit": "iter/sec",
            "range": "stddev: 0.000004950988548557041",
            "extra": "mean: 657.8493531694795 usec\nrounds: 1546"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1368.4513652384533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051613795099946356",
            "extra": "mean: 730.7530434782748 usec\nrounds: 1380"
          }
        ]
      }
    ]
  }
}