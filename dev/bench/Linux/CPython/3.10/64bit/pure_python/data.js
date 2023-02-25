window.BENCHMARK_DATA = {
  "lastUpdate": 1677322352271,
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
        "date": 1648769863192,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.75372774769767,
            "unit": "iter/sec",
            "range": "stddev: 0.000427767859663701",
            "extra": "mean: 4.429605703422093 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.8221695687802,
            "unit": "iter/sec",
            "range": "stddev: 0.00042832226119188054",
            "extra": "mean: 3.4743675287355935 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.9729574228094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791992263977263",
            "extra": "mean: 2.278044656488535 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.478211553592,
            "unit": "iter/sec",
            "range": "stddev: 0.00014964828952658925",
            "extra": "mean: 1.1594495798319224 msec\nrounds: 1071"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.05078999320853,
            "unit": "iter/sec",
            "range": "stddev: 0.0004139099953774535",
            "extra": "mean: 4.6937164609052955 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.01145156684333,
            "unit": "iter/sec",
            "range": "stddev: 0.00037258735187406744",
            "extra": "mean: 3.609959062499979 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.8737528414453,
            "unit": "iter/sec",
            "range": "stddev: 0.00027023028345745525",
            "extra": "mean: 2.3101423762375446 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 764.6773305710431,
            "unit": "iter/sec",
            "range": "stddev: 0.00016255646486594495",
            "extra": "mean: 1.3077411347518613 msec\nrounds: 987"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.076488215315596,
            "unit": "iter/sec",
            "range": "stddev: 0.0015624745829331474",
            "extra": "mean: 35.616989999999525 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.112069820542395,
            "unit": "iter/sec",
            "range": "stddev: 0.0026644449924241097",
            "extra": "mean: 35.57190937499976 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.4433695809208,
            "unit": "iter/sec",
            "range": "stddev: 0.00033010366409850123",
            "extra": "mean: 3.0354230569948424 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.6753946053927,
            "unit": "iter/sec",
            "range": "stddev: 0.00021560176516223072",
            "extra": "mean: 1.9059403400308068 msec\nrounds: 647"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1667.6986306097397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000905444283928341",
            "extra": "mean: 599.628722867262 usec\nrounds: 1981"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1489.259755454379,
            "unit": "iter/sec",
            "range": "stddev: 0.00009992749283059432",
            "extra": "mean: 671.4745337994418 usec\nrounds: 1716"
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
        "date": 1648770327215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.08237578217037,
            "unit": "iter/sec",
            "range": "stddev: 0.0004337984004174803",
            "extra": "mean: 7.931322627737259 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.39864970936082,
            "unit": "iter/sec",
            "range": "stddev: 0.0004467341704403991",
            "extra": "mean: 6.157686666666656 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.8722754925589,
            "unit": "iter/sec",
            "range": "stddev: 0.0003911582022088276",
            "extra": "mean: 4.2576332089552285 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.3979069393293,
            "unit": "iter/sec",
            "range": "stddev: 0.00016046847620903966",
            "extra": "mean: 2.0104628227194694 msec\nrounds: 581"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.36475353820998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613525659554546",
            "extra": "mean: 8.377682442747968 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.45112275247624,
            "unit": "iter/sec",
            "range": "stddev: 0.00035863179499260754",
            "extra": "mean: 6.432890173410282 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.48679609514699,
            "unit": "iter/sec",
            "range": "stddev: 0.000217834676338717",
            "extra": "mean: 4.1582324528302035 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 456.3776932451092,
            "unit": "iter/sec",
            "range": "stddev: 0.0004722306859865155",
            "extra": "mean: 2.191167567567604 msec\nrounds: 555"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.04921279773332,
            "unit": "iter/sec",
            "range": "stddev: 0.0017205229933452827",
            "extra": "mean: 49.877269999999996 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.925598179625162,
            "unit": "iter/sec",
            "range": "stddev: 0.0026603532831380953",
            "extra": "mean: 47.788359090909054 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.2309562825698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003274472094729962",
            "extra": "mean: 5.340997129186242 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.4250943622609,
            "unit": "iter/sec",
            "range": "stddev: 0.00020902819511571966",
            "extra": "mean: 3.2007672176310114 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 929.3415590640002,
            "unit": "iter/sec",
            "range": "stddev: 0.0001243721837633557",
            "extra": "mean: 1.0760306479860478 msec\nrounds: 1142"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 855.2136881985938,
            "unit": "iter/sec",
            "range": "stddev: 0.00015099914468527276",
            "extra": "mean: 1.1692984031936877 msec\nrounds: 1002"
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
        "date": 1648865734153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.19652925319173,
            "unit": "iter/sec",
            "range": "stddev: 0.00019831981735948201",
            "extra": "mean: 5.807317977528078 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 226.84639382383068,
            "unit": "iter/sec",
            "range": "stddev: 0.0003009478462890902",
            "extra": "mean: 4.408269327731089 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.8845235000587,
            "unit": "iter/sec",
            "range": "stddev: 0.00016550689889041785",
            "extra": "mean: 3.087520172910697 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.7718461842896,
            "unit": "iter/sec",
            "range": "stddev: 0.00012337814408434818",
            "extra": "mean: 1.3893291399229877 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 153.53455979699544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005904013381163914",
            "extra": "mean: 6.513191566265 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 210.97394395074315,
            "unit": "iter/sec",
            "range": "stddev: 0.00022418745066966428",
            "extra": "mean: 4.73992181818184 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.29411578062917,
            "unit": "iter/sec",
            "range": "stddev: 0.0005438181337782047",
            "extra": "mean: 3.1516499999999374 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 678.5192490804826,
            "unit": "iter/sec",
            "range": "stddev: 0.00014196136556394087",
            "extra": "mean: 1.473797539797408 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.82086878158187,
            "unit": "iter/sec",
            "range": "stddev: 0.0005679582798872481",
            "extra": "mean: 37.284399999999586 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.927373160465958,
            "unit": "iter/sec",
            "range": "stddev: 0.0019599764073110113",
            "extra": "mean: 37.13693103448253 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.98835640773572,
            "unit": "iter/sec",
            "range": "stddev: 0.00047189063907415317",
            "extra": "mean: 4.273716929134085 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 402.7313617674686,
            "unit": "iter/sec",
            "range": "stddev: 0.00031454989231442093",
            "extra": "mean: 2.483044766147082 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1348.0153617218446,
            "unit": "iter/sec",
            "range": "stddev: 0.00007306064642937103",
            "extra": "mean: 741.8313087490945 usec\nrounds: 1383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1172.1370695366788,
            "unit": "iter/sec",
            "range": "stddev: 0.00012324725092554707",
            "extra": "mean: 853.1425427874908 usec\nrounds: 1227"
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
        "date": 1649082124293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.4130490883233,
            "unit": "iter/sec",
            "range": "stddev: 0.000059253263475051106",
            "extra": "mean: 4.730076995305166 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.78150816042313,
            "unit": "iter/sec",
            "range": "stddev: 0.000011484503768344818",
            "extra": "mean: 3.6260589285714406 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.0709198040547,
            "unit": "iter/sec",
            "range": "stddev: 0.000015492991744121152",
            "extra": "mean: 2.3976737588653094 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.9976119076198,
            "unit": "iter/sec",
            "range": "stddev: 0.000009479482425431031",
            "extra": "mean: 1.1904795749704782 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.26080753531178,
            "unit": "iter/sec",
            "range": "stddev: 0.000016769114567740936",
            "extra": "mean: 5.095260804020065 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.35187339692885,
            "unit": "iter/sec",
            "range": "stddev: 0.000013107996346265025",
            "extra": "mean: 3.9161647286822965 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.7975622929867,
            "unit": "iter/sec",
            "range": "stddev: 0.000012612051055812031",
            "extra": "mean: 2.476488452088331 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 776.7484040403295,
            "unit": "iter/sec",
            "range": "stddev: 0.000008527826122236569",
            "extra": "mean: 1.287418158567699 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.951780569383224,
            "unit": "iter/sec",
            "range": "stddev: 0.0004191057265175525",
            "extra": "mean: 37.103300000000125 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.46552280417245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803894408005339",
            "extra": "mean: 35.13021724137878 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.1939219784327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000192417802369515",
            "extra": "mean: 3.244710322580533 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.1823298763216,
            "unit": "iter/sec",
            "range": "stddev: 0.000011946616053854305",
            "extra": "mean: 1.9677976608186558 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1522.985224870511,
            "unit": "iter/sec",
            "range": "stddev: 0.000007360785766290444",
            "extra": "mean: 656.6051880674175 usec\nrounds: 1542"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1362.8636183558942,
            "unit": "iter/sec",
            "range": "stddev: 0.000010205291469562893",
            "extra": "mean: 733.749134199034 usec\nrounds: 1386"
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
        "date": 1649083493143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.21100058286254,
            "unit": "iter/sec",
            "range": "stddev: 0.00011374663584589641",
            "extra": "mean: 4.734601877934283 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.04828342651604,
            "unit": "iter/sec",
            "range": "stddev: 0.00001049339639702634",
            "extra": "mean: 3.622554676259016 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.87392752323,
            "unit": "iter/sec",
            "range": "stddev: 0.000035105222007851674",
            "extra": "mean: 2.4045748815165666 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.8644178976609,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024893299583798",
            "extra": "mean: 1.2108525059665634 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.6716990120447,
            "unit": "iter/sec",
            "range": "stddev: 0.000014821599252083427",
            "extra": "mean: 5.084615656565601 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.23226135784464,
            "unit": "iter/sec",
            "range": "stddev: 0.000010552669241661337",
            "extra": "mean: 3.9179999999998616 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.25728287182267,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199296538293754",
            "extra": "mean: 2.504650617283892 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.7583816658585,
            "unit": "iter/sec",
            "range": "stddev: 0.000008696479713690347",
            "extra": "mean: 1.3337630154639146 msec\nrounds: 776"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.021117002937952,
            "unit": "iter/sec",
            "range": "stddev: 0.00003997529935349205",
            "extra": "mean: 37.00809259259238 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.351019644421704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004420993747365688",
            "extra": "mean: 35.27209999999976 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.3787260100702,
            "unit": "iter/sec",
            "range": "stddev: 0.000012313562069641027",
            "extra": "mean: 3.2639341935481894 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.18867380553576,
            "unit": "iter/sec",
            "range": "stddev: 0.000009999113194123662",
            "extra": "mean: 1.9952565815324195 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1481.9088069521788,
            "unit": "iter/sec",
            "range": "stddev: 0.000006648957659735394",
            "extra": "mean: 674.805355976449 usec\nrounds: 1531"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1306.7757916072194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059552060908468144",
            "extra": "mean: 765.242214022107 usec\nrounds: 1355"
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
        "date": 1649166548523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.81687638292365,
            "unit": "iter/sec",
            "range": "stddev: 0.000016420248892281163",
            "extra": "mean: 4.766060849056596 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.6086630407944,
            "unit": "iter/sec",
            "range": "stddev: 0.000016176732404832788",
            "extra": "mean: 3.6548550359712197 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.10668107591226,
            "unit": "iter/sec",
            "range": "stddev: 0.000013316318261700325",
            "extra": "mean: 2.40322985781996 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.5223724611445,
            "unit": "iter/sec",
            "range": "stddev: 0.000011266645977026942",
            "extra": "mean: 1.2157724014336635 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.9428741415366,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581761878541153",
            "extra": "mean: 5.10352828282831 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.05054917922905,
            "unit": "iter/sec",
            "range": "stddev: 0.00002590623871925856",
            "extra": "mean: 3.9517796078431995 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.0801006116588,
            "unit": "iter/sec",
            "range": "stddev: 0.000013145455169527998",
            "extra": "mean: 2.5057626237623176 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 768.1731143928622,
            "unit": "iter/sec",
            "range": "stddev: 0.000009294879718270962",
            "extra": "mean: 1.3017898976982107 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.722214562953752,
            "unit": "iter/sec",
            "range": "stddev: 0.00004704439286768151",
            "extra": "mean: 37.422048148148114 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.343164868647527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006347791464790809",
            "extra": "mean: 35.28187499999952 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.77323541224376,
            "unit": "iter/sec",
            "range": "stddev: 0.00001947104047731804",
            "extra": "mean: 3.270397419354899 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 506.38600222492465,
            "unit": "iter/sec",
            "range": "stddev: 0.000012005023002756354",
            "extra": "mean: 1.9747781250000345 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1503.094390516295,
            "unit": "iter/sec",
            "range": "stddev: 0.000006123701965454007",
            "extra": "mean: 665.2942132639533 usec\nrounds: 1538"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1354.5190990629135,
            "unit": "iter/sec",
            "range": "stddev: 0.000006325898147571428",
            "extra": "mean: 738.2693981146684 usec\nrounds: 1379"
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
        "date": 1649338888600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.97594766373112,
            "unit": "iter/sec",
            "range": "stddev: 0.00003852099682046442",
            "extra": "mean: 4.7175163551402255 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.9956722803365,
            "unit": "iter/sec",
            "range": "stddev: 0.000010192270553507608",
            "extra": "mean: 3.6364208633093633 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.2715792390834,
            "unit": "iter/sec",
            "range": "stddev: 0.00001063862197114752",
            "extra": "mean: 2.396520754716994 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.5163707597715,
            "unit": "iter/sec",
            "range": "stddev: 0.000007637017165477901",
            "extra": "mean: 1.2098973902728078 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.53782679259868,
            "unit": "iter/sec",
            "range": "stddev: 0.00005323246499983784",
            "extra": "mean: 5.114099999999852 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.28235730628558,
            "unit": "iter/sec",
            "range": "stddev: 0.00001034903631226616",
            "extra": "mean: 3.9326361867704818 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.0915503606314,
            "unit": "iter/sec",
            "range": "stddev: 0.000011779316135794933",
            "extra": "mean: 2.499427941176533 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 763.4057267144049,
            "unit": "iter/sec",
            "range": "stddev: 0.000008032260860759678",
            "extra": "mean: 1.3099194373401741 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.68517102081351,
            "unit": "iter/sec",
            "range": "stddev: 0.000026993538848913542",
            "extra": "mean: 37.47399629629634 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.118787819141748,
            "unit": "iter/sec",
            "range": "stddev: 0.00021920552057632696",
            "extra": "mean: 35.563410714285986 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.48821759754856,
            "unit": "iter/sec",
            "range": "stddev: 0.00001643108529731678",
            "extra": "mean: 3.262768167202779 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.9732657486383,
            "unit": "iter/sec",
            "range": "stddev: 0.000009872934232330873",
            "extra": "mean: 1.9921379647750945 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1493.8770219586681,
            "unit": "iter/sec",
            "range": "stddev: 0.000006383336801904409",
            "extra": "mean: 669.3991441737749 usec\nrounds: 1519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1334.7281915052884,
            "unit": "iter/sec",
            "range": "stddev: 0.000005139227020974084",
            "extra": "mean: 749.2162122328543 usec\nrounds: 1357"
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
        "date": 1649688251700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.62874299524435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000977505693636305",
            "extra": "mean: 4.703033023255778 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.0570928964207,
            "unit": "iter/sec",
            "range": "stddev: 0.000010161117362260657",
            "extra": "mean: 3.5834960854092177 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.85799206180195,
            "unit": "iter/sec",
            "range": "stddev: 0.00003659780341897016",
            "extra": "mean: 2.387444000000008 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.7465570551559,
            "unit": "iter/sec",
            "range": "stddev: 0.000009059303940853296",
            "extra": "mean: 1.2037365566037572 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.05585875024818,
            "unit": "iter/sec",
            "range": "stddev: 0.000014644612586847262",
            "extra": "mean: 5.126736548223408 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.18425325405434,
            "unit": "iter/sec",
            "range": "stddev: 0.000010878223806896191",
            "extra": "mean: 3.903440540540616 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.3550907551109,
            "unit": "iter/sec",
            "range": "stddev: 0.00001129822386355435",
            "extra": "mean: 2.510323134328289 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 763.9172817455853,
            "unit": "iter/sec",
            "range": "stddev: 0.000008438509531896648",
            "extra": "mean: 1.30904225352116 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.65139443056924,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729527020234354",
            "extra": "mean: 37.521488888888925 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.162761044906638,
            "unit": "iter/sec",
            "range": "stddev: 0.000035676998020984955",
            "extra": "mean: 35.50788214285738 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.80788458830153,
            "unit": "iter/sec",
            "range": "stddev: 0.000012178202444641882",
            "extra": "mean: 3.248779677419627 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.2306453289169,
            "unit": "iter/sec",
            "range": "stddev: 0.000010225013447605987",
            "extra": "mean: 1.9560642718446926 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1504.438838855148,
            "unit": "iter/sec",
            "range": "stddev: 0.000005560571345370886",
            "extra": "mean: 664.6996701846534 usec\nrounds: 1516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1336.318434828416,
            "unit": "iter/sec",
            "range": "stddev: 0.000005484976954168593",
            "extra": "mean: 748.3246312682954 usec\nrounds: 1356"
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
        "date": 1649777438397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.23463944903446,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744389827918754",
            "extra": "mean: 7.73786350364961 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.85837409978194,
            "unit": "iter/sec",
            "range": "stddev: 0.00036398063656173217",
            "extra": "mean: 6.02924034090911 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.75618047840453,
            "unit": "iter/sec",
            "range": "stddev: 0.0006240765507921723",
            "extra": "mean: 4.2963413385827645 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.98531264826033,
            "unit": "iter/sec",
            "range": "stddev: 0.0002425131139419918",
            "extra": "mean: 1.9881296229802718 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.22030957237625,
            "unit": "iter/sec",
            "range": "stddev: 0.0009053320632315346",
            "extra": "mean: 8.530944881889791 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.05507364149145,
            "unit": "iter/sec",
            "range": "stddev: 0.0008804152583816071",
            "extra": "mean: 6.70892962962944 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.29180136329933,
            "unit": "iter/sec",
            "range": "stddev: 0.0005063359676447907",
            "extra": "mean: 4.498591463414635 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 479.71483133799336,
            "unit": "iter/sec",
            "range": "stddev: 0.0005685289967046406",
            "extra": "mean: 2.0845717803030124 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.595758171547732,
            "unit": "iter/sec",
            "range": "stddev: 0.002655507495681354",
            "extra": "mean: 51.03145238095256 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.673808277116365,
            "unit": "iter/sec",
            "range": "stddev: 0.0020742829849278734",
            "extra": "mean: 48.37038181818152 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.48545366550485,
            "unit": "iter/sec",
            "range": "stddev: 0.0007667986718937022",
            "extra": "mean: 5.571482142857291 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.83900634706225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763226187887288",
            "extra": "mean: 3.2696941176470227 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 903.8091089563129,
            "unit": "iter/sec",
            "range": "stddev: 0.00023775695090440336",
            "extra": "mean: 1.1064283266128674 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 754.727111697274,
            "unit": "iter/sec",
            "range": "stddev: 0.0003513795273122479",
            "extra": "mean: 1.3249822147652044 msec\nrounds: 894"
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
        "date": 1649968408834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.69800191697917,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856239713573667",
            "extra": "mean: 5.216538461538485 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.4639401619745,
            "unit": "iter/sec",
            "range": "stddev: 0.00033086123115060436",
            "extra": "mean: 3.6434658753709193 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.2082145044188,
            "unit": "iter/sec",
            "range": "stddev: 0.00021407481168943314",
            "extra": "mean: 2.4678670476190336 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.7478488854065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001373989204432055",
            "extra": "mean: 1.2080973708920386 msec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.42394951489683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004381447538636269",
            "extra": "mean: 5.335497424892959 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.1776937715577,
            "unit": "iter/sec",
            "range": "stddev: 0.00034895774367237764",
            "extra": "mean: 4.013200318471463 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.37804549893764,
            "unit": "iter/sec",
            "range": "stddev: 0.00024044931361044415",
            "extra": "mean: 2.6220701789263994 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.8884546845522,
            "unit": "iter/sec",
            "range": "stddev: 0.00014503274733411342",
            "extra": "mean: 1.3460971074380519 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.93946804114682,
            "unit": "iter/sec",
            "range": "stddev: 0.0012395834143901878",
            "extra": "mean: 40.09708620689633 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.23439061714699,
            "unit": "iter/sec",
            "range": "stddev: 0.001374695478737806",
            "extra": "mean: 35.417800000000405 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.59854946812845,
            "unit": "iter/sec",
            "range": "stddev: 0.00028203852624244456",
            "extra": "mean: 3.2722668407308397 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.56016737116175,
            "unit": "iter/sec",
            "range": "stddev: 0.00021754959136648834",
            "extra": "mean: 1.9977618380059938 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1551.6995563054227,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523642829385383",
            "extra": "mean: 644.4546535677226 usec\nrounds: 1934"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1314.6986994217325,
            "unit": "iter/sec",
            "range": "stddev: 0.00007370833648613524",
            "extra": "mean: 760.6305539359306 usec\nrounds: 1715"
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
        "date": 1671164073330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.09259462406,
            "unit": "iter/sec",
            "range": "stddev: 0.00003446106857189985",
            "extra": "mean: 4.7825701421801154 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.8476166905374,
            "unit": "iter/sec",
            "range": "stddev: 0.000012625673444157065",
            "extra": "mean: 3.6120953900708797 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.4442799341627,
            "unit": "iter/sec",
            "range": "stddev: 0.000017110750376859556",
            "extra": "mean: 2.3784364485981113 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.4039888276717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064884435402639985",
            "extra": "mean: 1.1745305555555776 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.05826666359667,
            "unit": "iter/sec",
            "range": "stddev: 0.000013650600702921412",
            "extra": "mean: 5.074641206030327 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.6487261668187,
            "unit": "iter/sec",
            "range": "stddev: 0.00001414518846147612",
            "extra": "mean: 3.896376245210785 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.82524118460816,
            "unit": "iter/sec",
            "range": "stddev: 0.00001252811856561584",
            "extra": "mean: 2.4641148418491405 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.667507117381,
            "unit": "iter/sec",
            "range": "stddev: 0.000009900109257638168",
            "extra": "mean: 1.2760513750000557 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.014503108259234,
            "unit": "iter/sec",
            "range": "stddev: 0.0004727651350828923",
            "extra": "mean: 35.69579642857131 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.178323322988113,
            "unit": "iter/sec",
            "range": "stddev: 0.00003202300589293245",
            "extra": "mean: 34.27201724137969 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.06001449360366,
            "unit": "iter/sec",
            "range": "stddev: 0.00001583947989421127",
            "extra": "mean: 3.1942757097790646 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.1596155532392,
            "unit": "iter/sec",
            "range": "stddev: 0.000009457559980908375",
            "extra": "mean: 1.8176543165466668 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1199.0506306143996,
            "unit": "iter/sec",
            "range": "stddev: 0.00001448800271538689",
            "extra": "mean: 833.9931396288038 usec\nrounds: 1239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1092.9355645325431,
            "unit": "iter/sec",
            "range": "stddev: 0.000012668898885950621",
            "extra": "mean: 914.9670231727773 usec\nrounds: 1122"
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
        "date": 1671168268381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.02167978509746,
            "unit": "iter/sec",
            "range": "stddev: 0.000012091633357197595",
            "extra": "mean: 4.761413207547143 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.2741646491761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000562376496208528",
            "extra": "mean: 3.61959288256229 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.1933879167905,
            "unit": "iter/sec",
            "range": "stddev: 0.000011380114934805776",
            "extra": "mean: 2.362985879629629 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.559819182546,
            "unit": "iter/sec",
            "range": "stddev: 0.000007888902078306118",
            "extra": "mean: 1.1688253440366811 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.56200543107366,
            "unit": "iter/sec",
            "range": "stddev: 0.000014024480615921842",
            "extra": "mean: 5.061702010050128 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.070032129727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001895339845692193",
            "extra": "mean: 3.8749171755723983 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.65586683189366,
            "unit": "iter/sec",
            "range": "stddev: 0.000011949608101576433",
            "extra": "mean: 2.4292135265701584 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.9121671429057,
            "unit": "iter/sec",
            "range": "stddev: 0.000008049629150729655",
            "extra": "mean: 1.2580006211179613 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.221910635028266,
            "unit": "iter/sec",
            "range": "stddev: 0.00003875237701280955",
            "extra": "mean: 35.43346206896521 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.297521605457316,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256269676112323",
            "extra": "mean: 34.13257999999999 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.6228912176468,
            "unit": "iter/sec",
            "range": "stddev: 0.000011824353429836793",
            "extra": "mean: 3.198742088607338 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.6474551072039,
            "unit": "iter/sec",
            "range": "stddev: 0.000013789397997083237",
            "extra": "mean: 1.8326851717901425 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1187.9522740175191,
            "unit": "iter/sec",
            "range": "stddev: 0.000014742801739478845",
            "extra": "mean: 841.7846590908185 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1083.2690112266146,
            "unit": "iter/sec",
            "range": "stddev: 0.000013401122580167377",
            "extra": "mean: 923.1317333334156 usec\nrounds: 1125"
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
        "date": 1671338092166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.55316762381278,
            "unit": "iter/sec",
            "range": "stddev: 0.000012909796333344143",
            "extra": "mean: 4.81804258373202 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.7169052385191,
            "unit": "iter/sec",
            "range": "stddev: 0.00001464459878460328",
            "extra": "mean: 3.653409712230204 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.86142963233283,
            "unit": "iter/sec",
            "range": "stddev: 0.000011360947990805166",
            "extra": "mean: 2.3704466200466237 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.8786955421647,
            "unit": "iter/sec",
            "range": "stddev: 0.000005978799306181766",
            "extra": "mean: 1.1629547344110984 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.01130846655857,
            "unit": "iter/sec",
            "range": "stddev: 0.000013377713212166694",
            "extra": "mean: 5.101746464646501 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.23513982433067,
            "unit": "iter/sec",
            "range": "stddev: 0.000011442969105255393",
            "extra": "mean: 3.9179558139536144 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.72807207537227,
            "unit": "iter/sec",
            "range": "stddev: 0.000010897978594601946",
            "extra": "mean: 2.458645145631075 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.208040002235,
            "unit": "iter/sec",
            "range": "stddev: 0.000006482489992377801",
            "extra": "mean: 1.2719279746835932 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.052143324010594,
            "unit": "iter/sec",
            "range": "stddev: 0.000036341477170864646",
            "extra": "mean: 35.6479000000001 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.2156524167493,
            "unit": "iter/sec",
            "range": "stddev: 0.000027827836738209353",
            "extra": "mean: 34.228227586206536 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.5381137890343,
            "unit": "iter/sec",
            "range": "stddev: 0.00001058166027421993",
            "extra": "mean: 3.2098801261831307 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.5849335959402,
            "unit": "iter/sec",
            "range": "stddev: 0.000009410999955268285",
            "extra": "mean: 1.8228717902350362 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1191.128682407646,
            "unit": "iter/sec",
            "range": "stddev: 0.000013811141535930207",
            "extra": "mean: 839.5398538961258 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.0448831178942,
            "unit": "iter/sec",
            "range": "stddev: 0.000012260269187833573",
            "extra": "mean: 914.0392825110815 usec\nrounds: 1115"
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
        "date": 1671350427681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.65230264017652,
            "unit": "iter/sec",
            "range": "stddev: 0.000012569451778714088",
            "extra": "mean: 4.680501860465106 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.3975867749531,
            "unit": "iter/sec",
            "range": "stddev: 0.000014795079888004794",
            "extra": "mean: 3.5919851590106107 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.26864624182576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011755061178243585",
            "extra": "mean: 2.3625657342657758 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.6804534216956,
            "unit": "iter/sec",
            "range": "stddev: 0.00000821243741728335",
            "extra": "mean: 1.1591777651083277 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.0821684451141,
            "unit": "iter/sec",
            "range": "stddev: 0.000021836512229126125",
            "extra": "mean: 5.048410000000008 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.7191054085784,
            "unit": "iter/sec",
            "range": "stddev: 0.000008461258427865581",
            "extra": "mean: 3.8651958015267738 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.0036376421642,
            "unit": "iter/sec",
            "range": "stddev: 0.000012403211985436274",
            "extra": "mean: 2.4691136253041193 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 758.0894223047354,
            "unit": "iter/sec",
            "range": "stddev: 0.00019135621873052894",
            "extra": "mean: 1.3191055970149415 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.774603668380472,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942711830714391",
            "extra": "mean: 38.79788076923063 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.107785978607765,
            "unit": "iter/sec",
            "range": "stddev: 0.00007026546812909402",
            "extra": "mean: 36.88977037037088 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.805746555676,
            "unit": "iter/sec",
            "range": "stddev: 0.000016412947640849422",
            "extra": "mean: 3.2488022435900805 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.44659946669725,
            "unit": "iter/sec",
            "range": "stddev: 0.000027064009437209952",
            "extra": "mean: 1.9590687861272398 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1167.5198480781687,
            "unit": "iter/sec",
            "range": "stddev: 0.000015788072801099335",
            "extra": "mean: 856.516488046075 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.2964346038518,
            "unit": "iter/sec",
            "range": "stddev: 0.00001430230612248135",
            "extra": "mean: 950.302564102539 usec\nrounds: 1092"
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
        "date": 1671357929959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.7073521216752,
            "unit": "iter/sec",
            "range": "stddev: 0.000015388690174527076",
            "extra": "mean: 4.635910599078351 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.3642082336894,
            "unit": "iter/sec",
            "range": "stddev: 0.000010886216341818741",
            "extra": "mean: 3.55411232394364 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.7664166697212,
            "unit": "iter/sec",
            "range": "stddev: 0.000011725537269723174",
            "extra": "mean: 2.3377244239631385 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 857.7795612281266,
            "unit": "iter/sec",
            "range": "stddev: 0.00000830277885247895",
            "extra": "mean: 1.16580068493151 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.7970022696368,
            "unit": "iter/sec",
            "range": "stddev: 0.000017449805213381607",
            "extra": "mean: 5.0050800995024245 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.9381288176655,
            "unit": "iter/sec",
            "range": "stddev: 0.000057952557018066786",
            "extra": "mean: 3.8470693181816875 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.41370923512983,
            "unit": "iter/sec",
            "range": "stddev: 0.000011612401193223752",
            "extra": "mean: 2.4545074879227298 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.6787285128482,
            "unit": "iter/sec",
            "range": "stddev: 0.000008486806176887243",
            "extra": "mean: 1.2599556521739537 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.189140592271627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011365441986054914",
            "extra": "mean: 38.183765384615114 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.493797939241485,
            "unit": "iter/sec",
            "range": "stddev: 0.000040449990517539326",
            "extra": "mean: 36.37183928571451 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.22058653357567,
            "unit": "iter/sec",
            "range": "stddev: 0.000016652926638297143",
            "extra": "mean: 3.223512698412645 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 518.1770373604108,
            "unit": "iter/sec",
            "range": "stddev: 0.00000966280438862476",
            "extra": "mean: 1.929842366412049 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1161.986736958082,
            "unit": "iter/sec",
            "range": "stddev: 0.000016568855378237352",
            "extra": "mean: 860.5950207468456 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1046.4883920326786,
            "unit": "iter/sec",
            "range": "stddev: 0.000012578933659770647",
            "extra": "mean: 955.5767723879093 usec\nrounds: 1072"
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
        "date": 1671361793548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.75450619523835,
            "unit": "iter/sec",
            "range": "stddev: 0.000019266120531099775",
            "extra": "mean: 4.813373333333358 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.2266614426022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000164461344804598",
            "extra": "mean: 3.633368928571433 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.411777193174,
            "unit": "iter/sec",
            "range": "stddev: 0.000012638932860795258",
            "extra": "mean: 2.3673582366589367 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.9467018596557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059065165619557254",
            "extra": "mean: 1.1669337169160052 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.55909807554454,
            "unit": "iter/sec",
            "range": "stddev: 0.000013349514803007554",
            "extra": "mean: 5.061776500000068 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.98076937089536,
            "unit": "iter/sec",
            "range": "stddev: 0.000012506711242944779",
            "extra": "mean: 3.8913417624519573 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.41298248194863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011274394940921207",
            "extra": "mean: 2.4365700956937526 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.9165421086244,
            "unit": "iter/sec",
            "range": "stddev: 0.000006408603361995583",
            "extra": "mean: 1.267561201501986 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.200894713672017,
            "unit": "iter/sec",
            "range": "stddev: 0.000049902742844539005",
            "extra": "mean: 35.45986785714256 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.263083903215094,
            "unit": "iter/sec",
            "range": "stddev: 0.00007579594608696718",
            "extra": "mean: 34.17274827586204 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.4414040227141,
            "unit": "iter/sec",
            "range": "stddev: 0.000013957071950910455",
            "extra": "mean: 3.170160883280854 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 551.8496903855992,
            "unit": "iter/sec",
            "range": "stddev: 0.000012203437479477886",
            "extra": "mean: 1.812087634408675 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1211.9123742319962,
            "unit": "iter/sec",
            "range": "stddev: 0.000013802691470500518",
            "extra": "mean: 825.1421647820969 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.9939008129031,
            "unit": "iter/sec",
            "range": "stddev: 0.000012823736326444959",
            "extra": "mean: 907.4460387324597 usec\nrounds: 1136"
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
        "date": 1671374127295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.2812542998586,
            "unit": "iter/sec",
            "range": "stddev: 0.000014884290393639941",
            "extra": "mean: 5.516290163934396 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 237.85910878471384,
            "unit": "iter/sec",
            "range": "stddev: 0.000011865479736094876",
            "extra": "mean: 4.204169456066951 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.84882868792505,
            "unit": "iter/sec",
            "range": "stddev: 0.00001427184502048849",
            "extra": "mean: 2.7866887671233167 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 725.5192715197392,
            "unit": "iter/sec",
            "range": "stddev: 0.000010087978458140762",
            "extra": "mean: 1.37832313937755 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.02508778750007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006481961496572484",
            "extra": "mean: 6.492448823529612 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.58739330970548,
            "unit": "iter/sec",
            "range": "stddev: 0.000013432899353577321",
            "extra": "mean: 4.553995495495512 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.6506428307226,
            "unit": "iter/sec",
            "range": "stddev: 0.000018096984769473548",
            "extra": "mean: 2.8847487252124404 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.0676521595033,
            "unit": "iter/sec",
            "range": "stddev: 0.000009015872752299034",
            "extra": "mean: 1.5036064327485439 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.361057283641944,
            "unit": "iter/sec",
            "range": "stddev: 0.0001581230066008741",
            "extra": "mean: 44.720604545454215 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.472688402311352,
            "unit": "iter/sec",
            "range": "stddev: 0.0001303825357711627",
            "extra": "mean: 42.602704166665895 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.86034348538243,
            "unit": "iter/sec",
            "range": "stddev: 0.000023461216442929166",
            "extra": "mean: 3.8043015037588184 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 440.2788353826858,
            "unit": "iter/sec",
            "range": "stddev: 0.000012667434215826817",
            "extra": "mean: 2.271287919463152 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1002.569314371704,
            "unit": "iter/sec",
            "range": "stddev: 0.00001898089959719099",
            "extra": "mean: 997.4372700870921 usec\nrounds: 1033"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 900.0707364526121,
            "unit": "iter/sec",
            "range": "stddev: 0.000017830414139413437",
            "extra": "mean: 1.111023789020441 msec\nrounds: 929"
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
        "date": 1671377898916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.8567256518976,
            "unit": "iter/sec",
            "range": "stddev: 0.00006248630626578062",
            "extra": "mean: 4.811006220095677 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.275801104586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001523905870752315",
            "extra": "mean: 3.659306810035799 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.3524538561007,
            "unit": "iter/sec",
            "range": "stddev: 0.00001105418885776473",
            "extra": "mean: 2.378956018518522 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.4734730455576,
            "unit": "iter/sec",
            "range": "stddev: 0.000007584273517413598",
            "extra": "mean: 1.1730570294784508 msec\nrounds: 882"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.1842681040273,
            "unit": "iter/sec",
            "range": "stddev: 0.000013725518066589602",
            "extra": "mean: 5.071398492462066 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.7655553785539,
            "unit": "iter/sec",
            "range": "stddev: 0.00001720588625424155",
            "extra": "mean: 3.909830620154924 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.93091899024625,
            "unit": "iter/sec",
            "range": "stddev: 0.00001027804384360951",
            "extra": "mean: 2.433499047619086 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.8462166836276,
            "unit": "iter/sec",
            "range": "stddev: 0.000008199664720471062",
            "extra": "mean: 1.2741349563045687 msec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.161664853256987,
            "unit": "iter/sec",
            "range": "stddev: 0.00004024009622200961",
            "extra": "mean: 35.509264285713805 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.244690323940404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004290742124663985",
            "extra": "mean: 34.194241379310355 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.51649408759386,
            "unit": "iter/sec",
            "range": "stddev: 0.000011129471361437315",
            "extra": "mean: 3.1794834890964316 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.6828321774578,
            "unit": "iter/sec",
            "range": "stddev: 0.000010303973018174118",
            "extra": "mean: 1.8258742857142987 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1204.8615385750147,
            "unit": "iter/sec",
            "range": "stddev: 0.000013172620583284031",
            "extra": "mean: 829.9708870968662 usec\nrounds: 1240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1105.8645708492297,
            "unit": "iter/sec",
            "range": "stddev: 0.000013465758267279003",
            "extra": "mean: 904.2698594024647 usec\nrounds: 1138"
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
        "date": 1671379055135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.8967115240317,
            "unit": "iter/sec",
            "range": "stddev: 0.0004318348329697403",
            "extra": "mean: 7.524640666666684 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.5195061751837,
            "unit": "iter/sec",
            "range": "stddev: 0.000578652880660858",
            "extra": "mean: 5.934031155778812 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.85201979510347,
            "unit": "iter/sec",
            "range": "stddev: 0.00031819962162109045",
            "extra": "mean: 4.117733922261422 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.7676578577567,
            "unit": "iter/sec",
            "range": "stddev: 0.0002049348161280202",
            "extra": "mean: 1.8322815315315548 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.9225016988336,
            "unit": "iter/sec",
            "range": "stddev: 0.00039373254206559076",
            "extra": "mean: 8.26975944055949 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.3391867419401,
            "unit": "iter/sec",
            "range": "stddev: 0.0006261028638506465",
            "extra": "mean: 6.084975956284172 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.73956313769713,
            "unit": "iter/sec",
            "range": "stddev: 0.0004977163544178958",
            "extra": "mean: 4.224051048951038 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.95987183196485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002851633736833391",
            "extra": "mean: 1.9686594462540616 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.746512562834525,
            "unit": "iter/sec",
            "range": "stddev: 0.0019447337102170641",
            "extra": "mean: 53.34325500000077 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.641552590031512,
            "unit": "iter/sec",
            "range": "stddev: 0.0017768315297545475",
            "extra": "mean: 48.4459681818185 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.5098709619818,
            "unit": "iter/sec",
            "range": "stddev: 0.00034495137277245404",
            "extra": "mean: 5.449298148147968 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.36348616760097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002636815575438284",
            "extra": "mean: 3.0178340153453362 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 660.4314580866652,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441422744827115",
            "extra": "mean: 1.5141616707615628 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 600.6394391869478,
            "unit": "iter/sec",
            "range": "stddev: 0.0003004918949654695",
            "extra": "mean: 1.6648923376620828 msec\nrounds: 770"
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
        "date": 1671419478830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.24842573123618,
            "unit": "iter/sec",
            "range": "stddev: 0.0005284223437653936",
            "extra": "mean: 7.029954777070064 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.6442060020508,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704563989687576",
            "extra": "mean: 5.415821171171183 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.05057757589265,
            "unit": "iter/sec",
            "range": "stddev: 0.0003654529440968396",
            "extra": "mean: 3.6623251592355865 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 578.1998013459362,
            "unit": "iter/sec",
            "range": "stddev: 0.00022319956422606001",
            "extra": "mean: 1.7295059556786345 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.09317539740167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005402920864514493",
            "extra": "mean: 7.570413815789537 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.71171061612839,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858713515546534",
            "extra": "mean: 5.723714778325143 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.352080692949,
            "unit": "iter/sec",
            "range": "stddev: 0.0003887017754245782",
            "extra": "mean: 3.740386075949374 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.0419149611354,
            "unit": "iter/sec",
            "range": "stddev: 0.00032396503640121695",
            "extra": "mean: 1.8280134897360563 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.786213978199847,
            "unit": "iter/sec",
            "range": "stddev: 0.0009378017832545268",
            "extra": "mean: 48.10880909090898 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.43382005189766,
            "unit": "iter/sec",
            "range": "stddev: 0.0017356833751733768",
            "extra": "mean: 46.65523913043509 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.12845368804545,
            "unit": "iter/sec",
            "range": "stddev: 0.00037060132190185513",
            "extra": "mean: 4.874994092827202 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 352.6085571044476,
            "unit": "iter/sec",
            "range": "stddev: 0.00025689795469068693",
            "extra": "mean: 2.8360060465117582 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 727.7186737506903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002219033700407404",
            "extra": "mean: 1.3741573991030918 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 682.3403516765363,
            "unit": "iter/sec",
            "range": "stddev: 0.00023000680503240458",
            "extra": "mean: 1.4655442808606611 msec\nrounds: 883"
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
        "date": 1671423900396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.11475090596716,
            "unit": "iter/sec",
            "range": "stddev: 0.000013315025432015137",
            "extra": "mean: 4.8050414285714504 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.95322950308656,
            "unit": "iter/sec",
            "range": "stddev: 0.00015868598213770272",
            "extra": "mean: 3.6771028673834905 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.3953499758455,
            "unit": "iter/sec",
            "range": "stddev: 0.00003292397787566064",
            "extra": "mean: 2.3900839243498555 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 867.7652674125071,
            "unit": "iter/sec",
            "range": "stddev: 0.000006616145285395343",
            "extra": "mean: 1.1523853714285996 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.5041162503014,
            "unit": "iter/sec",
            "range": "stddev: 0.00002268127143353565",
            "extra": "mean: 5.114981818181837 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.85039614169273,
            "unit": "iter/sec",
            "range": "stddev: 0.000012180807101966039",
            "extra": "mean: 3.9085341085271925 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.93607130396487,
            "unit": "iter/sec",
            "range": "stddev: 0.000014606342007666345",
            "extra": "mean: 2.47563926829276 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.718477539936,
            "unit": "iter/sec",
            "range": "stddev: 0.000005918046464431425",
            "extra": "mean: 1.261481885856031 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.121498936153714,
            "unit": "iter/sec",
            "range": "stddev: 0.00007765437696579454",
            "extra": "mean: 35.559982142857066 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.23672685366136,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382709196585672",
            "extra": "mean: 34.20355517241386 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.5320079421231,
            "unit": "iter/sec",
            "range": "stddev: 0.000016809237320890652",
            "extra": "mean: 3.2099430379743885 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 552.4034193277402,
            "unit": "iter/sec",
            "range": "stddev: 0.000010123929767431263",
            "extra": "mean: 1.8102711985689242 msec\nrounds: 559"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1191.8948805331447,
            "unit": "iter/sec",
            "range": "stddev: 0.000013970863708592572",
            "extra": "mean: 839.0001638002602 usec\nrounds: 1221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1086.1357008247364,
            "unit": "iter/sec",
            "range": "stddev: 0.00001235216221798332",
            "extra": "mean: 920.6952678571095 usec\nrounds: 1120"
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
        "date": 1671428082473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.97158318814996,
            "unit": "iter/sec",
            "range": "stddev: 0.000050686438069052715",
            "extra": "mean: 4.717613488372077 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.4714986589851,
            "unit": "iter/sec",
            "range": "stddev: 0.00002766230304979175",
            "extra": "mean: 3.6039737588652616 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.61653718616986,
            "unit": "iter/sec",
            "range": "stddev: 0.00001241946529668514",
            "extra": "mean: 2.371823474178476 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.2687474301736,
            "unit": "iter/sec",
            "range": "stddev: 0.000009913513525090838",
            "extra": "mean: 1.1705918108419835 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.65973349365538,
            "unit": "iter/sec",
            "range": "stddev: 0.00001771259455864474",
            "extra": "mean: 5.110913636363645 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.0086222329697,
            "unit": "iter/sec",
            "range": "stddev: 0.000022924312213689305",
            "extra": "mean: 3.8758394636015185 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.72321867492855,
            "unit": "iter/sec",
            "range": "stddev: 0.000011483305209140432",
            "extra": "mean: 2.4708243902438287 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.413643782988,
            "unit": "iter/sec",
            "range": "stddev: 0.000010934365499524037",
            "extra": "mean: 1.2587900621117385 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.80670007443219,
            "unit": "iter/sec",
            "range": "stddev: 0.00005577329509879373",
            "extra": "mean: 38.74962692307736 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.104593917467852,
            "unit": "iter/sec",
            "range": "stddev: 0.00010298631986737233",
            "extra": "mean: 36.89411481481518 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.7372440096156,
            "unit": "iter/sec",
            "range": "stddev: 0.000012573263924066488",
            "extra": "mean: 3.2815155339806323 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.0910181404855,
            "unit": "iter/sec",
            "range": "stddev: 0.000012251985496995575",
            "extra": "mean: 1.9451808429120039 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1166.0682768965378,
            "unit": "iter/sec",
            "range": "stddev: 0.000015214233912497789",
            "extra": "mean: 857.58271604942 usec\nrounds: 1215"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1055.804872495596,
            "unit": "iter/sec",
            "range": "stddev: 0.000013648832648921143",
            "extra": "mean: 947.1447102117547 usec\nrounds: 1087"
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
        "date": 1671437495664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.14939106217741,
            "unit": "iter/sec",
            "range": "stddev: 0.000017263044364140634",
            "extra": "mean: 4.713659534883684 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.51190528798054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000855592544635456",
            "extra": "mean: 3.577665140845082 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.95331696884887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013425843345483149",
            "extra": "mean: 2.3755603286385347 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.1289052888633,
            "unit": "iter/sec",
            "range": "stddev: 0.000008141104251387539",
            "extra": "mean: 1.1694143348624138 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.18782417703386,
            "unit": "iter/sec",
            "range": "stddev: 0.000016537305569790016",
            "extra": "mean: 5.0713070351757965 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.4750828939083,
            "unit": "iter/sec",
            "range": "stddev: 0.000010750891163579175",
            "extra": "mean: 3.8539346007603763 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.53564333091384,
            "unit": "iter/sec",
            "range": "stddev: 0.00001338229028480911",
            "extra": "mean: 2.4598089156625687 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 782.9238615374315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074348792708946465",
            "extra": "mean: 1.2772634085213534 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.98944049032892,
            "unit": "iter/sec",
            "range": "stddev: 0.00004884222715883071",
            "extra": "mean: 38.477165384615176 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.261277536162645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000515629935870725",
            "extra": "mean: 36.68206666666591 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.9682374829257,
            "unit": "iter/sec",
            "range": "stddev: 0.000011994760412434697",
            "extra": "mean: 3.2470881028938634 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.992417441336,
            "unit": "iter/sec",
            "range": "stddev: 0.000011887232363600268",
            "extra": "mean: 1.9493465517243371 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.171426523865,
            "unit": "iter/sec",
            "range": "stddev: 0.000015959649829789263",
            "extra": "mean: 851.6643970467758 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.4620774915286,
            "unit": "iter/sec",
            "range": "stddev: 0.000010583282539877933",
            "extra": "mean: 941.2100640438842 usec\nrounds: 1093"
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
        "date": 1671465401803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.39001399746041,
            "unit": "iter/sec",
            "range": "stddev: 0.002088224716138568",
            "extra": "mean: 8.10438355263159 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.8383571295995,
            "unit": "iter/sec",
            "range": "stddev: 0.0020086567667694268",
            "extra": "mean: 6.295708530805813 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.88386508764347,
            "unit": "iter/sec",
            "range": "stddev: 0.001585885466285381",
            "extra": "mean: 4.100312251655657 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 540.0044428659561,
            "unit": "iter/sec",
            "range": "stddev: 0.00043895827290518796",
            "extra": "mean: 1.8518366158113766 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.94511306218264,
            "unit": "iter/sec",
            "range": "stddev: 0.0033469150704782584",
            "extra": "mean: 8.478520000000197 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.00651204441252,
            "unit": "iter/sec",
            "range": "stddev: 0.0010381223620796185",
            "extra": "mean: 6.4099888324874295 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.6668437530448,
            "unit": "iter/sec",
            "range": "stddev: 0.0008969573667325661",
            "extra": "mean: 4.225348951048977 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 531.5162564247042,
            "unit": "iter/sec",
            "range": "stddev: 0.0007944251875157868",
            "extra": "mean: 1.881409999999995 msec\nrounds: 650"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.099836843984423,
            "unit": "iter/sec",
            "range": "stddev: 0.005777395261121495",
            "extra": "mean: 52.356468181818755 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.73497868983312,
            "unit": "iter/sec",
            "range": "stddev: 0.002647368841364808",
            "extra": "mean: 48.227683999999726 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.79410213865955,
            "unit": "iter/sec",
            "range": "stddev: 0.0024463094244102767",
            "extra": "mean: 5.500728506787704 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.96722543175497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003994049091564682",
            "extra": "mean: 3.058410514018694 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 730.3149558171878,
            "unit": "iter/sec",
            "range": "stddev: 0.00026542095038733387",
            "extra": "mean: 1.3692722462201907 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 665.3288952966815,
            "unit": "iter/sec",
            "range": "stddev: 0.0005736745402755655",
            "extra": "mean: 1.5030160377358674 msec\nrounds: 848"
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
        "date": 1671540531939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.82824411616994,
            "unit": "iter/sec",
            "range": "stddev: 0.00048430224254372825",
            "extra": "mean: 7.762272992700709 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.2316361996081,
            "unit": "iter/sec",
            "range": "stddev: 0.0007921348119459164",
            "extra": "mean: 5.806134239130428 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.36251169868842,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730129739030666",
            "extra": "mean: 4.2307893617021035 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.7337931046867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002709403818507378",
            "extra": "mean: 1.8425239273927285 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.37315376378734,
            "unit": "iter/sec",
            "range": "stddev: 0.00064352685234476",
            "extra": "mean: 8.239054263566134 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.5267102921133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009571511808215505",
            "extra": "mean: 6.55622872928183 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.31764169736246,
            "unit": "iter/sec",
            "range": "stddev: 0.0010589478583902124",
            "extra": "mean: 4.360763492063689 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.4123803893385,
            "unit": "iter/sec",
            "range": "stddev: 0.0005611473305400911",
            "extra": "mean: 2.030818151260381 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.218482337590075,
            "unit": "iter/sec",
            "range": "stddev: 0.0013048692410694508",
            "extra": "mean: 52.03324500000015 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.445774350113982,
            "unit": "iter/sec",
            "range": "stddev: 0.0020081014101570108",
            "extra": "mean: 48.909861904762 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.94544908663224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005897529319459461",
            "extra": "mean: 5.46611028037357 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.9004823072641,
            "unit": "iter/sec",
            "range": "stddev: 0.0004952932468860195",
            "extra": "mean: 3.1357744985675153 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 655.2107949797389,
            "unit": "iter/sec",
            "range": "stddev: 0.0003981994277111645",
            "extra": "mean: 1.5262263803680507 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 625.0328964682408,
            "unit": "iter/sec",
            "range": "stddev: 0.000218808945865897",
            "extra": "mean: 1.5999157894736697 msec\nrounds: 741"
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
        "date": 1671541411921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.95518303696053,
            "unit": "iter/sec",
            "range": "stddev: 0.000017976481133426166",
            "extra": "mean: 4.695823720930238 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.5487194643657,
            "unit": "iter/sec",
            "range": "stddev: 0.000009840198310704776",
            "extra": "mean: 3.577193992932852 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.2177662071736,
            "unit": "iter/sec",
            "range": "stddev: 0.000013201998462773274",
            "extra": "mean: 2.362849766355224 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.9692276307993,
            "unit": "iter/sec",
            "range": "stddev: 0.000008672296498752843",
            "extra": "mean: 1.1628323059360892 msec\nrounds: 876"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.37082228452442,
            "unit": "iter/sec",
            "range": "stddev: 0.000025305302971004417",
            "extra": "mean: 5.066605025125888 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.8783156841602,
            "unit": "iter/sec",
            "range": "stddev: 0.000010122292599850649",
            "extra": "mean: 3.8479547528518587 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.8345044519285,
            "unit": "iter/sec",
            "range": "stddev: 0.000012036104509924091",
            "extra": "mean: 2.458001937046025 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.247715548527,
            "unit": "iter/sec",
            "range": "stddev: 0.000008201202226156912",
            "extra": "mean: 1.2686367245658539 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.758174530059684,
            "unit": "iter/sec",
            "range": "stddev: 0.000035544389798700185",
            "extra": "mean: 38.822626923076555 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.11931685838164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002243361277938768",
            "extra": "mean: 36.87408518518543 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.6084889294854,
            "unit": "iter/sec",
            "range": "stddev: 0.000013370345011133409",
            "extra": "mean: 3.250885576923187 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.0266079955398,
            "unit": "iter/sec",
            "range": "stddev: 0.000011768257189212767",
            "extra": "mean: 1.9645338461536026 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1175.3130692021564,
            "unit": "iter/sec",
            "range": "stddev: 0.000014461844453668066",
            "extra": "mean: 850.8371311473928 usec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.9605007189493,
            "unit": "iter/sec",
            "range": "stddev: 0.000011865770502741238",
            "extra": "mean: 946.1091491307342 usec\nrounds: 1093"
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
        "date": 1671543683379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.6267227456567,
            "unit": "iter/sec",
            "range": "stddev: 0.00001896530477934218",
            "extra": "mean: 4.816335714285692 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.5668545746534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323090809731714",
            "extra": "mean: 3.615762277580053 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.0767372737515,
            "unit": "iter/sec",
            "range": "stddev: 0.000013954331038974652",
            "extra": "mean: 2.3805174418604613 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.1458777324882,
            "unit": "iter/sec",
            "range": "stddev: 0.000007121154809360166",
            "extra": "mean: 1.1776539534883501 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.90256914346523,
            "unit": "iter/sec",
            "range": "stddev: 0.000022717165921192976",
            "extra": "mean: 5.10457828282829 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.191496181139,
            "unit": "iter/sec",
            "range": "stddev: 0.000012653895930812216",
            "extra": "mean: 3.873094252873579 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.4226794850353,
            "unit": "iter/sec",
            "range": "stddev: 0.000014842029842159728",
            "extra": "mean: 2.4484438554216976 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.1990443662734,
            "unit": "iter/sec",
            "range": "stddev: 0.000006555751106826894",
            "extra": "mean: 1.2591301980197473 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.180064979204243,
            "unit": "iter/sec",
            "range": "stddev: 0.000042947369661943085",
            "extra": "mean: 35.486078571428415 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.250542597565243,
            "unit": "iter/sec",
            "range": "stddev: 0.00004226149040734625",
            "extra": "mean: 34.18739999999993 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.4906005727071,
            "unit": "iter/sec",
            "range": "stddev: 0.000010054999325303322",
            "extra": "mean: 3.2103697452231255 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.4843074321956,
            "unit": "iter/sec",
            "range": "stddev: 0.000009725594302318013",
            "extra": "mean: 1.8399795289853125 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.1898923433055,
            "unit": "iter/sec",
            "range": "stddev: 0.000013870287353048402",
            "extra": "mean: 831.1240032547337 usec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.5728734186089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000135749015029438",
            "extra": "mean: 911.1012345679619 usec\nrounds: 1134"
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
        "date": 1671549018722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.18126706151173,
            "unit": "iter/sec",
            "range": "stddev: 0.00017715044825283957",
            "extra": "mean: 5.371109649122829 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.2796256341796,
            "unit": "iter/sec",
            "range": "stddev: 0.0001822164874813669",
            "extra": "mean: 4.027716722408068 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.1167989369653,
            "unit": "iter/sec",
            "range": "stddev: 0.00006167593180635326",
            "extra": "mean: 2.769187152034306 msec\nrounds: 467"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 761.6864913288148,
            "unit": "iter/sec",
            "range": "stddev: 0.00007839941918652916",
            "extra": "mean: 1.312876112920725 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.91977346818396,
            "unit": "iter/sec",
            "range": "stddev: 0.00013075774742937724",
            "extra": "mean: 5.885130256410338 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.18711445177968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001721788659241476",
            "extra": "mean: 4.382368401487102 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.3578096845045,
            "unit": "iter/sec",
            "range": "stddev: 0.00012231479922574442",
            "extra": "mean: 2.8299926380369236 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 683.1447759848455,
            "unit": "iter/sec",
            "range": "stddev: 0.00007368249968291694",
            "extra": "mean: 1.4638185567010518 msec\nrounds: 970"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.645558511839926,
            "unit": "iter/sec",
            "range": "stddev: 0.0008114757888255878",
            "extra": "mean: 44.15876956521799 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.404479205401092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002722644545896215",
            "extra": "mean: 42.72686399999998 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.0457502903693,
            "unit": "iter/sec",
            "range": "stddev: 0.0001296960489392352",
            "extra": "mean: 3.7729335365854983 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.268621785901,
            "unit": "iter/sec",
            "range": "stddev: 0.00010717843737074034",
            "extra": "mean: 2.2061972789114543 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1037.4884961388595,
            "unit": "iter/sec",
            "range": "stddev: 0.000052435221425249286",
            "extra": "mean: 963.8661090909657 usec\nrounds: 1375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 905.7856238662441,
            "unit": "iter/sec",
            "range": "stddev: 0.000036641634215705666",
            "extra": "mean: 1.104013989239101 msec\nrounds: 1301"
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
        "date": 1671551194801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.3253896518146,
            "unit": "iter/sec",
            "range": "stddev: 0.00001502551098737524",
            "extra": "mean: 4.7097523364486324 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.9357671061036,
            "unit": "iter/sec",
            "range": "stddev: 0.000010842451116291265",
            "extra": "mean: 3.5722480565370973 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.5498949882989,
            "unit": "iter/sec",
            "range": "stddev: 0.000011735928864123081",
            "extra": "mean: 2.3892014117646747 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 846.497625847844,
            "unit": "iter/sec",
            "range": "stddev: 0.000008314507473201076",
            "extra": "mean: 1.181338221709021 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.31278692190222,
            "unit": "iter/sec",
            "range": "stddev: 0.000015689142552247762",
            "extra": "mean: 4.992192537313552 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.5498791966564,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048603089311333",
            "extra": "mean: 3.8233624999999 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.63355817809776,
            "unit": "iter/sec",
            "range": "stddev: 0.000011823559972574381",
            "extra": "mean: 2.4836479217603316 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 782.9750688920019,
            "unit": "iter/sec",
            "range": "stddev: 0.00000797988481723237",
            "extra": "mean: 1.2771798742137639 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.75321722066125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003321960866712662",
            "extra": "mean: 38.83010000000006 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.96154474872455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005374088937598679",
            "extra": "mean: 37.08986296296343 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.5885348940718,
            "unit": "iter/sec",
            "range": "stddev: 0.000011702315627858436",
            "extra": "mean: 3.2405610932475724 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.312801058732,
            "unit": "iter/sec",
            "range": "stddev: 0.000010220159671411098",
            "extra": "mean: 1.9595824324322793 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1141.315925695044,
            "unit": "iter/sec",
            "range": "stddev: 0.000016214512941790416",
            "extra": "mean: 876.1815878377544 usec\nrounds: 1184"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1040.3573569508815,
            "unit": "iter/sec",
            "range": "stddev: 0.000014517126630628507",
            "extra": "mean: 961.2081784386451 usec\nrounds: 1076"
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
        "date": 1671589067999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.38962528174218,
            "unit": "iter/sec",
            "range": "stddev: 0.00037403458955074273",
            "extra": "mean: 4.8687950943396245 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.00521870124044,
            "unit": "iter/sec",
            "range": "stddev: 0.00038294686245736486",
            "extra": "mean: 3.717400000000033 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.4902207470794,
            "unit": "iter/sec",
            "range": "stddev: 0.00022361318027485708",
            "extra": "mean: 2.4783748120300344 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 815.6140676453292,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244931158216952",
            "extra": "mean: 1.226070073664854 msec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.49428317639564,
            "unit": "iter/sec",
            "range": "stddev: 0.00023668359813496643",
            "extra": "mean: 5.602420325203119 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 232.02717502273458,
            "unit": "iter/sec",
            "range": "stddev: 0.00019611337142481954",
            "extra": "mean: 4.309840000000076 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.35114539488234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001635130335536249",
            "extra": "mean: 2.692869033530605 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 734.9775206976152,
            "unit": "iter/sec",
            "range": "stddev: 0.00012958013962502938",
            "extra": "mean: 1.3605858299595812 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.555482025528555,
            "unit": "iter/sec",
            "range": "stddev: 0.002173399670650536",
            "extra": "mean: 40.72410384615429 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.148532254868194,
            "unit": "iter/sec",
            "range": "stddev: 0.001483899072442042",
            "extra": "mean: 38.24306428571437 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.8576194632565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670566083364208",
            "extra": "mean: 3.357308776596058 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 478.3607109945992,
            "unit": "iter/sec",
            "range": "stddev: 0.00016710366756396801",
            "extra": "mean: 2.0904726851852398 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1094.9896497231994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000908698360066165",
            "extra": "mean: 913.2506414583813 usec\nrounds: 1481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 978.4757505773939,
            "unit": "iter/sec",
            "range": "stddev: 0.00009259694563562392",
            "extra": "mean: 1.021997734138945 msec\nrounds: 1324"
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
        "date": 1672071558327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.7390398386135,
            "unit": "iter/sec",
            "range": "stddev: 0.000017075716267020425",
            "extra": "mean: 4.837015789473671 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.64095661045707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002091358570628372",
            "extra": "mean: 3.6279078853046713 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.57440549105655,
            "unit": "iter/sec",
            "range": "stddev: 0.000016464969198959146",
            "extra": "mean: 2.423805225653236 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.3985158499413,
            "unit": "iter/sec",
            "range": "stddev: 0.000006385526923401495",
            "extra": "mean: 1.1786913594470183 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.92055797383856,
            "unit": "iter/sec",
            "range": "stddev: 0.00001935131414720924",
            "extra": "mean: 5.1041095959594545 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.5155694591384,
            "unit": "iter/sec",
            "range": "stddev: 0.000012245568050831692",
            "extra": "mean: 3.898398846153839 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.3970291056511,
            "unit": "iter/sec",
            "range": "stddev: 0.00001535416288415837",
            "extra": "mean: 2.466717632850212 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.1111355737725,
            "unit": "iter/sec",
            "range": "stddev: 0.000006632645587351515",
            "extra": "mean: 1.2545302096177406 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.853307769302422,
            "unit": "iter/sec",
            "range": "stddev: 0.000598689699109951",
            "extra": "mean: 35.90237857142827 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.04608451769545,
            "unit": "iter/sec",
            "range": "stddev: 0.000033512275157780736",
            "extra": "mean: 34.42804827586245 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.49851309631606,
            "unit": "iter/sec",
            "range": "stddev: 0.000011321181632439992",
            "extra": "mean: 3.2415067092650487 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.03952761939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000111174460851545",
            "extra": "mean: 1.8347293165465903 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1190.218755262488,
            "unit": "iter/sec",
            "range": "stddev: 0.000015008930191064185",
            "extra": "mean: 840.181685575491 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1090.0438630530844,
            "unit": "iter/sec",
            "range": "stddev: 0.000016645199634421848",
            "extra": "mean: 917.3942754919218 usec\nrounds: 1118"
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
        "date": 1672074338466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.10203350445883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576705890613563",
            "extra": "mean: 4.737045794392493 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.7526548359857,
            "unit": "iter/sec",
            "range": "stddev: 0.000011864300520631807",
            "extra": "mean: 3.600325622775793 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.5805733423936,
            "unit": "iter/sec",
            "range": "stddev: 0.00001245740834727373",
            "extra": "mean: 2.4120763593380445 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.4735753669429,
            "unit": "iter/sec",
            "range": "stddev: 0.000009186828885261724",
            "extra": "mean: 1.1771996551723638 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.52080165479123,
            "unit": "iter/sec",
            "range": "stddev: 0.00001634965522203265",
            "extra": "mean: 5.037255499999969 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.73180335275765,
            "unit": "iter/sec",
            "range": "stddev: 0.000012169169987925901",
            "extra": "mean: 3.8650061068704007 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.41693273278713,
            "unit": "iter/sec",
            "range": "stddev: 0.00001179451888020104",
            "extra": "mean: 2.491175429975382 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 781.5816499178577,
            "unit": "iter/sec",
            "range": "stddev: 0.000008977365193533143",
            "extra": "mean: 1.2794568553459482 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.861640224797153,
            "unit": "iter/sec",
            "range": "stddev: 0.00007141774526314216",
            "extra": "mean: 38.667307692307965 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.146272258811962,
            "unit": "iter/sec",
            "range": "stddev: 0.00006530244909253592",
            "extra": "mean: 36.83747037037063 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.37321126828004,
            "unit": "iter/sec",
            "range": "stddev: 0.000017348384607695668",
            "extra": "mean: 3.253373954983945 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.54037381860604,
            "unit": "iter/sec",
            "range": "stddev: 0.000014036427855987858",
            "extra": "mean: 1.966412209302177 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1154.6262617916625,
            "unit": "iter/sec",
            "range": "stddev: 0.00001673269698710692",
            "extra": "mean: 866.081114808765 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1041.878413462534,
            "unit": "iter/sec",
            "range": "stddev: 0.000011743773434296368",
            "extra": "mean: 959.8048938135142 usec\nrounds: 1083"
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
        "date": 1672209608193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.55013226098103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006690240547114905",
            "extra": "mean: 5.448102857142857 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.80041381314467,
            "unit": "iter/sec",
            "range": "stddev: 0.00006699211011132709",
            "extra": "mean: 4.118609125475314 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.0741587494732,
            "unit": "iter/sec",
            "range": "stddev: 0.00006569550398104871",
            "extra": "mean: 2.702161111111148 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.0608277149141,
            "unit": "iter/sec",
            "range": "stddev: 0.00002720031300266133",
            "extra": "mean: 1.335005066345014 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 170.9413073021377,
            "unit": "iter/sec",
            "range": "stddev: 0.00007128814955465392",
            "extra": "mean: 5.849961111111115 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.8488177962269,
            "unit": "iter/sec",
            "range": "stddev: 0.00006475260123713916",
            "extra": "mean: 4.467300787401592 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.8480905128503,
            "unit": "iter/sec",
            "range": "stddev: 0.00003782811177505546",
            "extra": "mean: 2.842135645932908 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 683.4445540589278,
            "unit": "iter/sec",
            "range": "stddev: 0.00002780877744035427",
            "extra": "mean: 1.4631764845605575 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.511641454933283,
            "unit": "iter/sec",
            "range": "stddev: 0.000328556864787871",
            "extra": "mean: 44.42146086956517 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.58285235778378,
            "unit": "iter/sec",
            "range": "stddev: 0.0002628045081293372",
            "extra": "mean: 42.40369166666724 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.7140286123621,
            "unit": "iter/sec",
            "range": "stddev: 0.00005774978804870066",
            "extra": "mean: 3.7493340909089716 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 449.3045589294576,
            "unit": "iter/sec",
            "range": "stddev: 0.00003568519790796291",
            "extra": "mean: 2.2256618147446923 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1022.9046290691851,
            "unit": "iter/sec",
            "range": "stddev: 0.00002343631382583374",
            "extra": "mean: 977.6082457559825 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.2128368148736,
            "unit": "iter/sec",
            "range": "stddev: 0.000014417670874566399",
            "extra": "mean: 1.0855254725471866 msec\nrounds: 1111"
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
        "date": 1672216530994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.3818487756119,
            "unit": "iter/sec",
            "range": "stddev: 0.00001967325052647998",
            "extra": "mean: 4.798882464455012 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.90335819360826,
            "unit": "iter/sec",
            "range": "stddev: 0.000013980572275137578",
            "extra": "mean: 3.650922743682285 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.14175794835927,
            "unit": "iter/sec",
            "range": "stddev: 0.000012211008331427081",
            "extra": "mean: 2.3577023041474576 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.0079945537794,
            "unit": "iter/sec",
            "range": "stddev: 0.000008374902155990637",
            "extra": "mean: 1.1600820483314107 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.2317190230973,
            "unit": "iter/sec",
            "range": "stddev: 0.000012689380966788867",
            "extra": "mean: 5.0701783919598284 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.98951726233216,
            "unit": "iter/sec",
            "range": "stddev: 0.00002024470341388276",
            "extra": "mean: 3.9217298449614466 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.32170024624577,
            "unit": "iter/sec",
            "range": "stddev: 0.00001160590714437094",
            "extra": "mean: 2.425290736341993 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.1314454118796,
            "unit": "iter/sec",
            "range": "stddev: 0.000008445756339350492",
            "extra": "mean: 1.2576536945812753 msec\nrounds: 812"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.183789308459108,
            "unit": "iter/sec",
            "range": "stddev: 0.00007483109048486278",
            "extra": "mean: 35.48138928571465 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.13050173472158,
            "unit": "iter/sec",
            "range": "stddev: 0.00010183421183239727",
            "extra": "mean: 34.32827931034459 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.56270939243655,
            "unit": "iter/sec",
            "range": "stddev: 0.000012139122923624408",
            "extra": "mean: 3.209626729559683 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.084937846329,
            "unit": "iter/sec",
            "range": "stddev: 0.000009767880474757407",
            "extra": "mean: 1.8179010752687772 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1196.8499065141118,
            "unit": "iter/sec",
            "range": "stddev: 0.000014895965835953921",
            "extra": "mean: 835.5266558966885 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.278508915209,
            "unit": "iter/sec",
            "range": "stddev: 0.000014343167369975399",
            "extra": "mean: 910.5158590308021 usec\nrounds: 1135"
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
        "date": 1672330213902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.1034291795905,
            "unit": "iter/sec",
            "range": "stddev: 0.000127459346614862",
            "extra": "mean: 4.805302843601935 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.2782350182012,
            "unit": "iter/sec",
            "range": "stddev: 0.000015091908523866658",
            "extra": "mean: 3.6326882142857415 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.2971663714691,
            "unit": "iter/sec",
            "range": "stddev: 0.000013535222723769363",
            "extra": "mean: 2.4021302107727607 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 861.8842809030117,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076004784765284",
            "extra": "mean: 1.1602485648679914 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.79388154966136,
            "unit": "iter/sec",
            "range": "stddev: 0.000016440311707358098",
            "extra": "mean: 5.081458793969912 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.84393624043102,
            "unit": "iter/sec",
            "range": "stddev: 0.000013798254583457228",
            "extra": "mean: 3.9239701550385564 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.2957061138659,
            "unit": "iter/sec",
            "range": "stddev: 0.000013177820083034517",
            "extra": "mean: 2.467334306569374 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.1988929568846,
            "unit": "iter/sec",
            "range": "stddev: 0.00002602687020159149",
            "extra": "mean: 1.2575470223324614 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.082959871757364,
            "unit": "iter/sec",
            "range": "stddev: 0.00008787910910722382",
            "extra": "mean: 35.60878214285688 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.116790357804383,
            "unit": "iter/sec",
            "range": "stddev: 0.00009413487127544891",
            "extra": "mean: 34.344444827585974 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.69211331921196,
            "unit": "iter/sec",
            "range": "stddev: 0.000011420554514523184",
            "extra": "mean: 3.1980339682540997 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.4292373366183,
            "unit": "iter/sec",
            "range": "stddev: 0.000009001658323067542",
            "extra": "mean: 1.8036566844920123 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1186.2268177457113,
            "unit": "iter/sec",
            "range": "stddev: 0.00001600097502366603",
            "extra": "mean: 843.0090982940227 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1087.6815159655198,
            "unit": "iter/sec",
            "range": "stddev: 0.00001347311124127854",
            "extra": "mean: 919.386773905332 usec\nrounds: 1119"
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
        "date": 1672330809707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.45640711848304,
            "unit": "iter/sec",
            "range": "stddev: 0.000015827432594198716",
            "extra": "mean: 4.66295231481482 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.9843111328693,
            "unit": "iter/sec",
            "range": "stddev: 0.00000995069919962442",
            "extra": "mean: 3.533764808362365 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.3952843321217,
            "unit": "iter/sec",
            "range": "stddev: 0.000012387271012231882",
            "extra": "mean: 2.3787136470588415 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.1174258917905,
            "unit": "iter/sec",
            "range": "stddev: 0.000008470749211160178",
            "extra": "mean: 1.1680640642939042 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.29894365610485,
            "unit": "iter/sec",
            "range": "stddev: 0.000013456227432488967",
            "extra": "mean: 5.017588059701532 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.10072046047145,
            "unit": "iter/sec",
            "range": "stddev: 0.000010849637680182659",
            "extra": "mean: 3.815327169811478 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.2325362016489,
            "unit": "iter/sec",
            "range": "stddev: 0.000011613053427597555",
            "extra": "mean: 2.4616442822384177 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 791.048012678774,
            "unit": "iter/sec",
            "range": "stddev: 0.000007503728887992933",
            "extra": "mean: 1.264145771144332 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.980158952608072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000770992831453024",
            "extra": "mean: 38.490911538461276 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.34303972181937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008351841383682078",
            "extra": "mean: 36.57237857142905 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.8731229399181,
            "unit": "iter/sec",
            "range": "stddev: 0.000012047347637697522",
            "extra": "mean: 3.237575320512817 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.7528367768426,
            "unit": "iter/sec",
            "range": "stddev: 0.000011793044180606944",
            "extra": "mean: 1.9464612716763785 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1171.0615909851422,
            "unit": "iter/sec",
            "range": "stddev: 0.000015210485157752575",
            "extra": "mean: 853.9260511129577 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.2726434761057,
            "unit": "iter/sec",
            "range": "stddev: 0.000014094817134622943",
            "extra": "mean: 941.3779090909005 usec\nrounds: 1100"
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
        "date": 1672352902391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.81176291765243,
            "unit": "iter/sec",
            "range": "stddev: 0.00005691348858738356",
            "extra": "mean: 4.812047142857165 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.1299241409187,
            "unit": "iter/sec",
            "range": "stddev: 0.000013074840165356349",
            "extra": "mean: 3.6214836298932425 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.2879126785236,
            "unit": "iter/sec",
            "range": "stddev: 0.000026171615207619362",
            "extra": "mean: 2.396426950354526 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 864.2481264299718,
            "unit": "iter/sec",
            "range": "stddev: 0.000007939804385004082",
            "extra": "mean: 1.1570751146789184 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.5400652354987,
            "unit": "iter/sec",
            "range": "stddev: 0.000015653397242482097",
            "extra": "mean: 5.088021105527658 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.05127568640665,
            "unit": "iter/sec",
            "range": "stddev: 0.00001429633965625027",
            "extra": "mean: 3.920780232558141 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.6671306761881,
            "unit": "iter/sec",
            "range": "stddev: 0.000012293991480819587",
            "extra": "mean: 2.446979277108442 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 791.7486904437056,
            "unit": "iter/sec",
            "range": "stddev: 0.000006059526776057535",
            "extra": "mean: 1.263027033792235 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.07675623619826,
            "unit": "iter/sec",
            "range": "stddev: 0.00010429115760970549",
            "extra": "mean: 35.61665000000033 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.031350955896567,
            "unit": "iter/sec",
            "range": "stddev: 0.00030108096606677737",
            "extra": "mean: 34.445520689656014 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.74241145981995,
            "unit": "iter/sec",
            "range": "stddev: 0.000012295904599865024",
            "extra": "mean: 3.228489102564247 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.9559253799065,
            "unit": "iter/sec",
            "range": "stddev: 0.00001024623456829655",
            "extra": "mean: 1.8383842391303777 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1186.3012228264777,
            "unit": "iter/sec",
            "range": "stddev: 0.000015466290044838286",
            "extra": "mean: 842.9562245728813 usec\nrounds: 1229"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.537378596432,
            "unit": "iter/sec",
            "range": "stddev: 0.000013297388849187312",
            "extra": "mean: 913.6280035336381 usec\nrounds: 1132"
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
        "date": 1672679991764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.98969449104675,
            "unit": "iter/sec",
            "range": "stddev: 0.000247419691796611",
            "extra": "mean: 4.8546117924528716 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.266222146091,
            "unit": "iter/sec",
            "range": "stddev: 0.000025679283234599005",
            "extra": "mean: 3.6066419928825733 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.993841266031,
            "unit": "iter/sec",
            "range": "stddev: 0.000014015993284486947",
            "extra": "mean: 2.35852482435602 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.6707325293391,
            "unit": "iter/sec",
            "range": "stddev: 0.000007347662300454225",
            "extra": "mean: 1.1538407407407718 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.47024814505275,
            "unit": "iter/sec",
            "range": "stddev: 0.000014977141175434001",
            "extra": "mean: 5.064054000000269 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.5649899648186,
            "unit": "iter/sec",
            "range": "stddev: 0.000015164352477388003",
            "extra": "mean: 3.8674996183205783 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.7925858435963,
            "unit": "iter/sec",
            "range": "stddev: 0.000012555477826499204",
            "extra": "mean: 2.4284070048308535 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.0660329610116,
            "unit": "iter/sec",
            "range": "stddev: 0.00000736116617519649",
            "extra": "mean: 1.2625210000000386 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.169356991166378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000385171443649477",
            "extra": "mean: 35.49956785714313 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.135430220293077,
            "unit": "iter/sec",
            "range": "stddev: 0.00005310040957989745",
            "extra": "mean: 34.322472413793 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.89420517631896,
            "unit": "iter/sec",
            "range": "stddev: 0.00001346782668232835",
            "extra": "mean: 3.1857867507884876 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 551.5502423652543,
            "unit": "iter/sec",
            "range": "stddev: 0.000009946856641941016",
            "extra": "mean: 1.8130714542189754 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.3171417089873,
            "unit": "iter/sec",
            "range": "stddev: 0.000015261771340208795",
            "extra": "mean: 840.8186218211332 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1093.0085340903952,
            "unit": "iter/sec",
            "range": "stddev: 0.000015237429112657468",
            "extra": "mean: 914.9059397163836 usec\nrounds: 1128"
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
        "date": 1672680441890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.03643018402857,
            "unit": "iter/sec",
            "range": "stddev: 0.000012598643971478453",
            "extra": "mean: 4.67210184331798 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.7660861000029,
            "unit": "iter/sec",
            "range": "stddev: 0.000013569219927026142",
            "extra": "mean: 3.5490431578947557 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.3721859903743,
            "unit": "iter/sec",
            "range": "stddev: 0.000012012842921514964",
            "extra": "mean: 2.3845167452830376 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.2952253850912,
            "unit": "iter/sec",
            "range": "stddev: 0.000008091223693690374",
            "extra": "mean: 1.171927335640137 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.73552534643866,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638800980382135",
            "extra": "mean: 5.031812999999801 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.7414618035436,
            "unit": "iter/sec",
            "range": "stddev: 0.000010044480289491654",
            "extra": "mean: 3.835216666666742 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.4693268712958,
            "unit": "iter/sec",
            "range": "stddev: 0.00005898467500592731",
            "extra": "mean: 2.4723753658536514 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.6900696239297,
            "unit": "iter/sec",
            "range": "stddev: 0.000008856100490384087",
            "extra": "mean: 1.2727664999999933 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.921706078959282,
            "unit": "iter/sec",
            "range": "stddev: 0.00004829517510553601",
            "extra": "mean: 38.577707692307435 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.078554887729148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006840585853211067",
            "extra": "mean: 36.929592592592805 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.463979919762,
            "unit": "iter/sec",
            "range": "stddev: 0.000012843943146660311",
            "extra": "mean: 3.263026213592275 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.2737432957639,
            "unit": "iter/sec",
            "range": "stddev: 0.00001029842630577861",
            "extra": "mean: 1.9520813102119992 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.1252789081595,
            "unit": "iter/sec",
            "range": "stddev: 0.000015106815013586736",
            "extra": "mean: 870.2271356784955 usec\nrounds: 1194"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1053.4933372140588,
            "unit": "iter/sec",
            "range": "stddev: 0.000011567678858468765",
            "extra": "mean: 949.2228993535728 usec\nrounds: 1083"
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
        "date": 1672745078142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.60325899142072,
            "unit": "iter/sec",
            "range": "stddev: 0.000016274638242209328",
            "extra": "mean: 4.703596759259243 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.654539278896,
            "unit": "iter/sec",
            "range": "stddev: 0.000011866132557519548",
            "extra": "mean: 3.6015978798586428 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.0800222859287,
            "unit": "iter/sec",
            "range": "stddev: 0.000011629628430958437",
            "extra": "mean: 2.380498826291118 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.2150805265464,
            "unit": "iter/sec",
            "range": "stddev: 0.000008017489926601539",
            "extra": "mean: 1.1775579861110816 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.74237530118745,
            "unit": "iter/sec",
            "range": "stddev: 0.000014515009559477766",
            "extra": "mean: 5.057084999999972 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.21135392015316,
            "unit": "iter/sec",
            "range": "stddev: 0.000008500812117454867",
            "extra": "mean: 3.887853256705118 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.7624739405357,
            "unit": "iter/sec",
            "range": "stddev: 0.00001265735898659465",
            "extra": "mean: 2.4767036674816776 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.905092307774,
            "unit": "iter/sec",
            "range": "stddev: 0.000007420367812618812",
            "extra": "mean: 1.2659748743718262 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.826169220212236,
            "unit": "iter/sec",
            "range": "stddev: 0.00006104426388924206",
            "extra": "mean: 38.72041538461592 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.969616030580163,
            "unit": "iter/sec",
            "range": "stddev: 0.00006941869149874821",
            "extra": "mean: 37.07876296296267 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.8107562737891,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230752470547947",
            "extra": "mean: 3.2593381410253714 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.80985421817064,
            "unit": "iter/sec",
            "range": "stddev: 0.00001309662907457347",
            "extra": "mean: 1.9576756238005006 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.683321735941,
            "unit": "iter/sec",
            "range": "stddev: 0.000015675876860124666",
            "extra": "mean: 857.865924092313 usec\nrounds: 1212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.5283795396326,
            "unit": "iter/sec",
            "range": "stddev: 0.000014803424358755965",
            "extra": "mean: 950.9966820275529 usec\nrounds: 1085"
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
        "date": 1672777880706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.75494538778437,
            "unit": "iter/sec",
            "range": "stddev: 0.000014049908690447358",
            "extra": "mean: 4.813363157894764 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.3017485597686,
            "unit": "iter/sec",
            "range": "stddev: 0.000013263173214629641",
            "extra": "mean: 3.6456202166064804 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.5690535669096,
            "unit": "iter/sec",
            "range": "stddev: 0.000017353424171178096",
            "extra": "mean: 2.383397897196266 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.9365619915477,
            "unit": "iter/sec",
            "range": "stddev: 0.000006939024491560195",
            "extra": "mean: 1.1628764774044216 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.6556618952825,
            "unit": "iter/sec",
            "range": "stddev: 0.00001559547607565334",
            "extra": "mean: 5.085030303030337 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.57569713117496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003103915745197599",
            "extra": "mean: 4.006800387597067 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.3102030562298,
            "unit": "iter/sec",
            "range": "stddev: 0.00001544037180351265",
            "extra": "mean: 2.4611737349396776 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.0896865740308,
            "unit": "iter/sec",
            "range": "stddev: 0.000006409955137130228",
            "extra": "mean: 1.2561398757764297 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.011061568213183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010710019903006222",
            "extra": "mean: 35.70018214285727 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.074835719659085,
            "unit": "iter/sec",
            "range": "stddev: 0.000051118388379050065",
            "extra": "mean: 34.39400344827556 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.0742839547932,
            "unit": "iter/sec",
            "range": "stddev: 0.000017016391807006897",
            "extra": "mean: 3.2250336507938 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.2974778327704,
            "unit": "iter/sec",
            "range": "stddev: 0.000009226787443857523",
            "extra": "mean: 1.8271598911068894 msec\nrounds: 551"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1192.7515558532823,
            "unit": "iter/sec",
            "range": "stddev: 0.000013400146485360524",
            "extra": "mean: 838.3975649351471 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.594607428109,
            "unit": "iter/sec",
            "range": "stddev: 0.000013747731267270869",
            "extra": "mean: 921.1541704035433 usec\nrounds: 1115"
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
        "date": 1672778573671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.551117063125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975828915061733",
            "extra": "mean: 6.47035116279075 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 198.5642635718682,
            "unit": "iter/sec",
            "range": "stddev: 0.0007596407871194735",
            "extra": "mean: 5.036152941176451 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.6256997318856,
            "unit": "iter/sec",
            "range": "stddev: 0.0004131748185524291",
            "extra": "mean: 3.4173348441925526 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 608.1433544912876,
            "unit": "iter/sec",
            "range": "stddev: 0.00028489376407898854",
            "extra": "mean: 1.6443491367861789 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.4372239840989,
            "unit": "iter/sec",
            "range": "stddev: 0.0008003947688253085",
            "extra": "mean: 7.666523170731587 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.02045515262833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008746560320522777",
            "extra": "mean: 5.585953846153643 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 277.25211398566427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003918800458796355",
            "extra": "mean: 3.606825519287858 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.7882058363684,
            "unit": "iter/sec",
            "range": "stddev: 0.00037181023752204433",
            "extra": "mean: 1.901906488011281 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.56490979443148,
            "unit": "iter/sec",
            "range": "stddev: 0.00293780537158043",
            "extra": "mean: 46.37162916666693 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.046166726479633,
            "unit": "iter/sec",
            "range": "stddev: 0.0024319262575986968",
            "extra": "mean: 43.391163999999094 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.36442042137497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005046571205994946",
            "extra": "mean: 4.869392653061128 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 364.3836991053785,
            "unit": "iter/sec",
            "range": "stddev: 0.0004379894704558024",
            "extra": "mean: 2.744359866962115 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 739.2395541322435,
            "unit": "iter/sec",
            "range": "stddev: 0.0003166384438558419",
            "extra": "mean: 1.3527414684592334 msec\nrounds: 967"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 702.8099750096713,
            "unit": "iter/sec",
            "range": "stddev: 0.00019944477543099232",
            "extra": "mean: 1.422859713945066 msec\nrounds: 839"
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
        "date": 1672840724703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.1028955397443,
            "unit": "iter/sec",
            "range": "stddev: 0.00011533977861431328",
            "extra": "mean: 4.805315165876758 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.31293244372944,
            "unit": "iter/sec",
            "range": "stddev: 0.000012673398830586504",
            "extra": "mean: 3.6454715827338275 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.5763227800669,
            "unit": "iter/sec",
            "range": "stddev: 0.000016007044938381732",
            "extra": "mean: 2.3947717948718314 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.3458872445829,
            "unit": "iter/sec",
            "range": "stddev: 0.000008070235344953428",
            "extra": "mean: 1.16911768082665 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.34465331353977,
            "unit": "iter/sec",
            "range": "stddev: 0.000024274671264257644",
            "extra": "mean: 5.067276884422134 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.26962929089046,
            "unit": "iter/sec",
            "range": "stddev: 0.000014195696982011845",
            "extra": "mean: 3.917426459143943 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.0846081663474,
            "unit": "iter/sec",
            "range": "stddev: 0.000013433358375713465",
            "extra": "mean: 2.462541007194153 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.4188270867593,
            "unit": "iter/sec",
            "range": "stddev: 0.00000727483106949935",
            "extra": "mean: 1.2619589108910878 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.922041659685874,
            "unit": "iter/sec",
            "range": "stddev: 0.00006703501020037505",
            "extra": "mean: 35.81400000000036 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.043291930952392,
            "unit": "iter/sec",
            "range": "stddev: 0.00006508474979036672",
            "extra": "mean: 34.43135862068952 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.37943279525257,
            "unit": "iter/sec",
            "range": "stddev: 0.000014741540293128088",
            "extra": "mean: 3.2427584126985094 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.1585913507853,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154947364341027",
            "extra": "mean: 1.8242895683451323 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1190.0569669168008,
            "unit": "iter/sec",
            "range": "stddev: 0.000016022827172954745",
            "extra": "mean: 840.2959083469758 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1079.4306774197314,
            "unit": "iter/sec",
            "range": "stddev: 0.000015193585243693561",
            "extra": "mean: 926.4142857143895 usec\nrounds: 1120"
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
        "date": 1672841069253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.66038377677035,
            "unit": "iter/sec",
            "range": "stddev: 0.00010124928244530219",
            "extra": "mean: 5.415346700507598 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.5558671465557,
            "unit": "iter/sec",
            "range": "stddev: 0.00008181748534895842",
            "extra": "mean: 4.1227615384615115 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 366.5078932091178,
            "unit": "iter/sec",
            "range": "stddev: 0.00006622733566067153",
            "extra": "mean: 2.7284541984732416 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.0690983973029,
            "unit": "iter/sec",
            "range": "stddev: 0.00003753303714047149",
            "extra": "mean: 1.3367749077490905 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.09364759555987,
            "unit": "iter/sec",
            "range": "stddev: 0.00011689707500173051",
            "extra": "mean: 5.810789729729691 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.33049851230902,
            "unit": "iter/sec",
            "range": "stddev: 0.00009569035755732144",
            "extra": "mean: 4.477668776371286 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 351.0880440810839,
            "unit": "iter/sec",
            "range": "stddev: 0.00005785358706960868",
            "extra": "mean: 2.848288390501414 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.7804523724361,
            "unit": "iter/sec",
            "range": "stddev: 0.000031591066889205014",
            "extra": "mean: 1.4819634986226056 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.200973638177686,
            "unit": "iter/sec",
            "range": "stddev: 0.0005398967539639078",
            "extra": "mean: 45.04306956521762 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.32207168796709,
            "unit": "iter/sec",
            "range": "stddev: 0.0004738770385476393",
            "extra": "mean: 42.87783749999985 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.2221945234608,
            "unit": "iter/sec",
            "range": "stddev: 0.00007376079819811977",
            "extra": "mean: 3.728252249134932 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.5258126605799,
            "unit": "iter/sec",
            "range": "stddev: 0.00004973879763580185",
            "extra": "mean: 2.2295260869562172 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1021.0987150154299,
            "unit": "iter/sec",
            "range": "stddev: 0.00003716434187600361",
            "extra": "mean: 979.3372426140884 usec\nrounds: 1117"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 910.1759040966328,
            "unit": "iter/sec",
            "range": "stddev: 0.000035917229187356554",
            "extra": "mean: 1.0986887210473004 msec\nrounds: 993"
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
        "date": 1672841316058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.3345771381312,
            "unit": "iter/sec",
            "range": "stddev: 0.000014684783502243065",
            "extra": "mean: 4.754330046948384 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.576262447166,
            "unit": "iter/sec",
            "range": "stddev: 0.000009492515039858887",
            "extra": "mean: 3.6156392857142925 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.97807029035783,
            "unit": "iter/sec",
            "range": "stddev: 0.000009815141977292622",
            "extra": "mean: 2.369791395348845 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.8268266152714,
            "unit": "iter/sec",
            "range": "stddev: 0.00000711694040661487",
            "extra": "mean: 1.1616738339021688 msec\nrounds: 879"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.9099542441411,
            "unit": "iter/sec",
            "range": "stddev: 0.000014414621807427016",
            "extra": "mean: 5.104385858585877 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.53378640098373,
            "unit": "iter/sec",
            "range": "stddev: 0.000010184564434841476",
            "extra": "mean: 3.913376833976856 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.9165605838414,
            "unit": "iter/sec",
            "range": "stddev: 0.000009525518410313242",
            "extra": "mean: 2.463560487804862 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.4938616318063,
            "unit": "iter/sec",
            "range": "stddev: 0.000008820908851802206",
            "extra": "mean: 1.2602491945476646 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.705942017479465,
            "unit": "iter/sec",
            "range": "stddev: 0.00009879847904451009",
            "extra": "mean: 38.90151153846151 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.834311543375993,
            "unit": "iter/sec",
            "range": "stddev: 0.00022369529470145922",
            "extra": "mean: 37.265722222221434 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.0425523581413,
            "unit": "iter/sec",
            "range": "stddev: 0.000058233747935037177",
            "extra": "mean: 3.256877564102508 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 518.1199089651483,
            "unit": "iter/sec",
            "range": "stddev: 0.000011595751190552514",
            "extra": "mean: 1.9300551526717453 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1171.8141327597307,
            "unit": "iter/sec",
            "range": "stddev: 0.000014316071948598726",
            "extra": "mean: 853.3776578073073 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.7040028921597,
            "unit": "iter/sec",
            "range": "stddev: 0.000011237951171491528",
            "extra": "mean: 946.3388018433138 usec\nrounds: 1085"
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
        "date": 1672858403446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.4595573350777,
            "unit": "iter/sec",
            "range": "stddev: 0.00001336060733266641",
            "extra": "mean: 4.706778139534874 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.56254766599915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009582552234229918",
            "extra": "mean: 3.564267605633766 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.30993785412596,
            "unit": "iter/sec",
            "range": "stddev: 0.000019886150066942585",
            "extra": "mean: 2.3963004694835663 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.79957114359,
            "unit": "iter/sec",
            "range": "stddev: 0.000007714424000159506",
            "extra": "mean: 1.1712350694444449 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.0048693036832,
            "unit": "iter/sec",
            "range": "stddev: 0.00003861299819278284",
            "extra": "mean: 5.076016666666747 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.3014736051278,
            "unit": "iter/sec",
            "range": "stddev: 0.000047154833331431424",
            "extra": "mean: 3.8864915384614833 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.4601750565087,
            "unit": "iter/sec",
            "range": "stddev: 0.000010686670188683328",
            "extra": "mean: 2.5033784653464823 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.3521207824433,
            "unit": "iter/sec",
            "range": "stddev: 0.00001061065136042705",
            "extra": "mean: 1.2864183080808356 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.689295675592355,
            "unit": "iter/sec",
            "range": "stddev: 0.00004727278303033688",
            "extra": "mean: 38.92671923076932 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.958349350253854,
            "unit": "iter/sec",
            "range": "stddev: 0.00009270660195226894",
            "extra": "mean: 37.09425925925927 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.08955883242106,
            "unit": "iter/sec",
            "range": "stddev: 0.000014042989862588649",
            "extra": "mean: 3.2885048859934196 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.6205060177288,
            "unit": "iter/sec",
            "range": "stddev: 0.00001225525143481831",
            "extra": "mean: 1.946962763915588 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1167.827580966774,
            "unit": "iter/sec",
            "range": "stddev: 0.00001632701549611908",
            "extra": "mean: 856.2907883817579 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1045.6155642219574,
            "unit": "iter/sec",
            "range": "stddev: 0.000010998350596282372",
            "extra": "mean: 956.374440298333 usec\nrounds: 1072"
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
        "date": 1672938287686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.76700669874583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426221716877098",
            "extra": "mean: 4.813083732057427 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.160654198603,
            "unit": "iter/sec",
            "range": "stddev: 0.00001639002694944773",
            "extra": "mean: 3.647496402877694 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.9650400696894,
            "unit": "iter/sec",
            "range": "stddev: 0.000012307903972428153",
            "extra": "mean: 2.3925446009390283 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.0518871287546,
            "unit": "iter/sec",
            "range": "stddev: 0.000006648376119966791",
            "extra": "mean: 1.177784320557496 msec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.8722723801748,
            "unit": "iter/sec",
            "range": "stddev: 0.000013574771269023383",
            "extra": "mean: 5.105367839196085 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.0594086541117,
            "unit": "iter/sec",
            "range": "stddev: 0.00001776028585727633",
            "extra": "mean: 3.9206552123552862 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.40568532647774,
            "unit": "iter/sec",
            "range": "stddev: 0.000010804005069770298",
            "extra": "mean: 2.466664963503629 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.9427480041315,
            "unit": "iter/sec",
            "range": "stddev: 0.000006377310800142436",
            "extra": "mean: 1.2707404732253151 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.085379553843946,
            "unit": "iter/sec",
            "range": "stddev: 0.000044387825444309585",
            "extra": "mean: 35.60571428571396 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.983708257588827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002683849041925866",
            "extra": "mean: 34.50214137930985 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.9329215864609,
            "unit": "iter/sec",
            "range": "stddev: 0.000013401055267223418",
            "extra": "mean: 3.195573015873013 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.6454586883843,
            "unit": "iter/sec",
            "range": "stddev: 0.000011292005641453103",
            "extra": "mean: 1.8326918772563185 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1205.292339678181,
            "unit": "iter/sec",
            "range": "stddev: 0.000013687329687539321",
            "extra": "mean: 829.6742351046593 usec\nrounds: 1242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.0252172328035,
            "unit": "iter/sec",
            "range": "stddev: 0.000014402626264183175",
            "extra": "mean: 914.0557130203742 usec\nrounds: 1129"
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
        "date": 1672947615365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.36415888411543,
            "unit": "iter/sec",
            "range": "stddev: 0.000027300883753030706",
            "extra": "mean: 4.708892523364492 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.9109699429589,
            "unit": "iter/sec",
            "range": "stddev: 0.000011953184571726547",
            "extra": "mean: 3.5853734982331944 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.8521148376661,
            "unit": "iter/sec",
            "range": "stddev: 0.000011089227519701938",
            "extra": "mean: 2.348233025404131 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.1101049988144,
            "unit": "iter/sec",
            "range": "stddev: 0.000008492307106583207",
            "extra": "mean: 1.1680740528128504 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.55249276201334,
            "unit": "iter/sec",
            "range": "stddev: 0.000015861865959330284",
            "extra": "mean: 5.036451500000094 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.2020786280572,
            "unit": "iter/sec",
            "range": "stddev: 0.000009838922564937679",
            "extra": "mean: 3.887993461538509 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.40140596112855,
            "unit": "iter/sec",
            "range": "stddev: 0.000009994722654700164",
            "extra": "mean: 2.448571394230654 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.2891772884237,
            "unit": "iter/sec",
            "range": "stddev: 0.00000735652029902319",
            "extra": "mean: 1.2653596034696049 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.253272908022673,
            "unit": "iter/sec",
            "range": "stddev: 0.00005172868816717245",
            "extra": "mean: 38.09048888888869 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.542161146824554,
            "unit": "iter/sec",
            "range": "stddev: 0.00006210913248813175",
            "extra": "mean: 36.307971428570845 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.6116600013421,
            "unit": "iter/sec",
            "range": "stddev: 0.000010501435496204941",
            "extra": "mean: 3.240318269230823 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.7187004333186,
            "unit": "iter/sec",
            "range": "stddev: 0.000009584897349811318",
            "extra": "mean: 1.946590613027141 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1156.1183524646142,
            "unit": "iter/sec",
            "range": "stddev: 0.000013011999184946174",
            "extra": "mean: 864.9633472803187 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.6608542875588,
            "unit": "iter/sec",
            "range": "stddev: 0.00001101145067518316",
            "extra": "mean: 950.8768876611308 usec\nrounds: 1086"
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
        "date": 1673019879754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.69269075742162,
            "unit": "iter/sec",
            "range": "stddev: 0.00016099890287650035",
            "extra": "mean: 5.32785797872344 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.8924969459333,
            "unit": "iter/sec",
            "range": "stddev: 0.00010009519866662479",
            "extra": "mean: 4.050345848375412 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.0018558122131,
            "unit": "iter/sec",
            "range": "stddev: 0.00011684123952354415",
            "extra": "mean: 2.6177883295194944 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.2961367732632,
            "unit": "iter/sec",
            "range": "stddev: 0.00007840624369036977",
            "extra": "mean: 1.2669515957446837 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.76483940826793,
            "unit": "iter/sec",
            "range": "stddev: 0.00029726729408862697",
            "extra": "mean: 5.657233663366349 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.3796892890171,
            "unit": "iter/sec",
            "range": "stddev: 0.00010799577581745441",
            "extra": "mean: 4.378673090909098 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 364.65937895038894,
            "unit": "iter/sec",
            "range": "stddev: 0.00009322035266553156",
            "extra": "mean: 2.7422851508120614 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 696.2026419355444,
            "unit": "iter/sec",
            "range": "stddev: 0.000047593088368434765",
            "extra": "mean: 1.4363634088199593 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.698818457415854,
            "unit": "iter/sec",
            "range": "stddev: 0.00045928479857839576",
            "extra": "mean: 44.055156521739285 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.728348001090676,
            "unit": "iter/sec",
            "range": "stddev: 0.00043760860145425286",
            "extra": "mean: 42.14368400000012 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.69127168299633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000937367654866981",
            "extra": "mean: 3.6942454545453147 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.97270271097534,
            "unit": "iter/sec",
            "range": "stddev: 0.00004720276533294476",
            "extra": "mean: 2.2273069029850276 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1035.6486240692834,
            "unit": "iter/sec",
            "range": "stddev: 0.000037721258686678896",
            "extra": "mean: 965.5784565915682 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 931.8261128171174,
            "unit": "iter/sec",
            "range": "stddev: 0.00003971859198029291",
            "extra": "mean: 1.0731615976899143 msec\nrounds: 1039"
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
        "date": 1673244601124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.78999961210695,
            "unit": "iter/sec",
            "range": "stddev: 0.000013912551642555105",
            "extra": "mean: 4.789501421800921 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.04472082217205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005675576927168097",
            "extra": "mean: 3.6226014285714228 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.3265438525573,
            "unit": "iter/sec",
            "range": "stddev: 0.000012601840252167048",
            "extra": "mean: 2.38477629107977 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.5463807678937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076139647546282106",
            "extra": "mean: 1.1897023446659007 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.88264527960507,
            "unit": "iter/sec",
            "range": "stddev: 0.000016033291465124514",
            "extra": "mean: 5.0791678391959785 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.2291776836992,
            "unit": "iter/sec",
            "range": "stddev: 0.000013541271128003905",
            "extra": "mean: 3.902756153846167 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.69515746781684,
            "unit": "iter/sec",
            "range": "stddev: 0.00001219947499823513",
            "extra": "mean: 2.4528130434782986 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.331865775288,
            "unit": "iter/sec",
            "range": "stddev: 0.000006766614590514462",
            "extra": "mean: 1.2717276807980367 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.113132869292606,
            "unit": "iter/sec",
            "range": "stddev: 0.00005787485358304588",
            "extra": "mean: 35.57056428571429 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.15366312761255,
            "unit": "iter/sec",
            "range": "stddev: 0.00035437821092699904",
            "extra": "mean: 34.30100689655228 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.051123453529,
            "unit": "iter/sec",
            "range": "stddev: 0.000013836659111120521",
            "extra": "mean: 3.246214423077262 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.3802406971918,
            "unit": "iter/sec",
            "range": "stddev: 0.00001055670385677391",
            "extra": "mean: 1.8302272401432025 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1184.3265008719786,
            "unit": "iter/sec",
            "range": "stddev: 0.000014226226756982182",
            "extra": "mean: 844.3617526617319 usec\nrounds: 1221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1089.6680962515163,
            "unit": "iter/sec",
            "range": "stddev: 0.000012706128824520013",
            "extra": "mean: 917.7106344950571 usec\nrounds: 1119"
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
        "date": 1673253640650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.52262277085336,
            "unit": "iter/sec",
            "range": "stddev: 0.00019596222336966843",
            "extra": "mean: 4.683344495412895 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.68598570928793,
            "unit": "iter/sec",
            "range": "stddev: 0.000010702107486435747",
            "extra": "mean: 3.5374940766550496 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.19215019895637,
            "unit": "iter/sec",
            "range": "stddev: 0.00001243576386732547",
            "extra": "mean: 2.3629927906977186 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.5866542707935,
            "unit": "iter/sec",
            "range": "stddev: 0.000009127836817193512",
            "extra": "mean: 1.1882317702227185 msec\nrounds: 853"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.059420633892,
            "unit": "iter/sec",
            "range": "stddev: 0.000027522308698782792",
            "extra": "mean: 4.998514925373079 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.3628492485861,
            "unit": "iter/sec",
            "range": "stddev: 0.000010494767760561728",
            "extra": "mean: 3.8260984790875354 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.4789903533645,
            "unit": "iter/sec",
            "range": "stddev: 0.000014674835138127256",
            "extra": "mean: 2.466219024390205 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 774.207579827176,
            "unit": "iter/sec",
            "range": "stddev: 0.000007480787218191056",
            "extra": "mean: 1.2916432569973377 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.967828457324483,
            "unit": "iter/sec",
            "range": "stddev: 0.000035151982327708586",
            "extra": "mean: 38.50918846153807 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.23767596043109,
            "unit": "iter/sec",
            "range": "stddev: 0.000036705264456183916",
            "extra": "mean: 36.71385185185135 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.15481318949367,
            "unit": "iter/sec",
            "range": "stddev: 0.00002032863088319489",
            "extra": "mean: 3.2556872204475855 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.3223024520989,
            "unit": "iter/sec",
            "range": "stddev: 0.000010694794962157423",
            "extra": "mean: 1.9711335282651399 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.454164472517,
            "unit": "iter/sec",
            "range": "stddev: 0.000014889058877308945",
            "extra": "mean: 869.9781434598557 usec\nrounds: 1185"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1041.2243861973566,
            "unit": "iter/sec",
            "range": "stddev: 0.000012391783932884868",
            "extra": "mean: 960.4077788190193 usec\nrounds: 1067"
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
        "date": 1673260922803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.46216080810535,
            "unit": "iter/sec",
            "range": "stddev: 0.000014918172218215054",
            "extra": "mean: 4.797033649289116 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.4890300564475,
            "unit": "iter/sec",
            "range": "stddev: 0.000013637946868965542",
            "extra": "mean: 3.629908602150513 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.531507406273,
            "unit": "iter/sec",
            "range": "stddev: 0.000012008181792977027",
            "extra": "mean: 2.3666874125873854 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.5940844188739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066418803330320056",
            "extra": "mean: 1.1552759174311606 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.37033850956678,
            "unit": "iter/sec",
            "range": "stddev: 0.000014763762259550933",
            "extra": "mean: 5.092418781725947 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.5611821944569,
            "unit": "iter/sec",
            "range": "stddev: 0.000012074585030448595",
            "extra": "mean: 3.8977057692307655 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.6821821462005,
            "unit": "iter/sec",
            "range": "stddev: 0.000011781175232818423",
            "extra": "mean: 2.446889156626514 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 799.1171092755409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064184307280130756",
            "extra": "mean: 1.2513810408922097 msec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.123179526325238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000413820718790972",
            "extra": "mean: 35.55785714285723 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.324570109133226,
            "unit": "iter/sec",
            "range": "stddev: 0.00003567594073215086",
            "extra": "mean: 34.101096666666805 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.27788281867333,
            "unit": "iter/sec",
            "range": "stddev: 0.000011870272776891584",
            "extra": "mean: 3.1920542586748923 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.8497444146486,
            "unit": "iter/sec",
            "range": "stddev: 0.000010734563774891693",
            "extra": "mean: 1.8055438502673273 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1177.0533168787554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005646975937891952",
            "extra": "mean: 849.5791869919236 usec\nrounds: 1230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1089.0772571125356,
            "unit": "iter/sec",
            "range": "stddev: 0.000014510750223379957",
            "extra": "mean: 918.2085049239706 usec\nrounds: 1117"
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
        "date": 1673268608470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.91898050789231,
            "unit": "iter/sec",
            "range": "stddev: 0.00001600234928070144",
            "extra": "mean: 4.80956571428572 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.41967867561465,
            "unit": "iter/sec",
            "range": "stddev: 0.00002110399220279476",
            "extra": "mean: 3.6573812274368183 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.19862079645293,
            "unit": "iter/sec",
            "range": "stddev: 0.000011416742962807735",
            "extra": "mean: 2.3741768149883304 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.49813378244,
            "unit": "iter/sec",
            "range": "stddev: 0.000007946055469812125",
            "extra": "mean: 1.167544867358708 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.87767831552037,
            "unit": "iter/sec",
            "range": "stddev: 0.00001407554954045124",
            "extra": "mean: 5.079295979899655 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.02089688674707,
            "unit": "iter/sec",
            "range": "stddev: 0.000015558297934940586",
            "extra": "mean: 3.921247286821725 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.7229776357539,
            "unit": "iter/sec",
            "range": "stddev: 0.000011329938948569226",
            "extra": "mean: 2.446644927536178 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.8638033593586,
            "unit": "iter/sec",
            "range": "stddev: 0.000009158280523713108",
            "extra": "mean: 1.2660410513140548 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.006057710282683,
            "unit": "iter/sec",
            "range": "stddev: 0.00008920205669187943",
            "extra": "mean: 35.70656071428578 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.184475066898273,
            "unit": "iter/sec",
            "range": "stddev: 0.00006213907748527458",
            "extra": "mean: 34.26479310344779 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.8734656173743,
            "unit": "iter/sec",
            "range": "stddev: 0.00001213956413097653",
            "extra": "mean: 3.2167428571430685 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.4774327904178,
            "unit": "iter/sec",
            "range": "stddev: 0.000009708228152076873",
            "extra": "mean: 1.826559306569289 msec\nrounds: 548"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1198.5867334957065,
            "unit": "iter/sec",
            "range": "stddev: 0.000014708096537947887",
            "extra": "mean: 834.3159256264053 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1092.6236260938374,
            "unit": "iter/sec",
            "range": "stddev: 0.000012892928015382315",
            "extra": "mean: 915.2282415629528 usec\nrounds: 1126"
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
        "date": 1673280867018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.19486749741887,
            "unit": "iter/sec",
            "range": "stddev: 0.000014900721888124552",
            "extra": "mean: 4.757490094339623 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.81704531002623,
            "unit": "iter/sec",
            "range": "stddev: 0.00002037441943868453",
            "extra": "mean: 3.6124943060498027 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.10779169095264,
            "unit": "iter/sec",
            "range": "stddev: 0.000013664770380628835",
            "extra": "mean: 2.346824018475775 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 861.6266998868272,
            "unit": "iter/sec",
            "range": "stddev: 0.00000833628781764006",
            "extra": "mean: 1.1605954180985196 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.66031430445855,
            "unit": "iter/sec",
            "range": "stddev: 0.000015523002092531393",
            "extra": "mean: 5.033717999999947 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.79229052895977,
            "unit": "iter/sec",
            "range": "stddev: 0.00001474669625361215",
            "extra": "mean: 3.8790919540228157 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.08278910716297,
            "unit": "iter/sec",
            "range": "stddev: 0.000011162232526807863",
            "extra": "mean: 2.4385319905212595 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.8730620022534,
            "unit": "iter/sec",
            "range": "stddev: 0.000006634653573404538",
            "extra": "mean: 1.2660262111801797 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.149252969092597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005025168769657411",
            "extra": "mean: 35.52492142857159 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.275216308515642,
            "unit": "iter/sec",
            "range": "stddev: 0.00003706044025037818",
            "extra": "mean: 34.15858620689739 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.75255844274017,
            "unit": "iter/sec",
            "range": "stddev: 0.000012357486637534394",
            "extra": "mean: 3.2076721518988616 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.8238445200448,
            "unit": "iter/sec",
            "range": "stddev: 0.000009582723111854416",
            "extra": "mean: 1.8187643369176276 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1173.7846530502097,
            "unit": "iter/sec",
            "range": "stddev: 0.000014898398018236373",
            "extra": "mean: 851.9450287592268 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.2592366559327,
            "unit": "iter/sec",
            "range": "stddev: 0.000013653078160610342",
            "extra": "mean: 921.4388288289105 usec\nrounds: 1110"
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
        "date": 1673311614103,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.02301393323808,
            "unit": "iter/sec",
            "range": "stddev: 0.000015748909727492904",
            "extra": "mean: 4.738819626168228 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.1957667630025,
            "unit": "iter/sec",
            "range": "stddev: 0.000015094651369780716",
            "extra": "mean: 3.581716197183096 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.6470041882336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381116503267562",
            "extra": "mean: 2.3716520930232328 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.4936883171368,
            "unit": "iter/sec",
            "range": "stddev: 0.000006603594381080313",
            "extra": "mean: 1.1229725860155273 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.19414868180968,
            "unit": "iter/sec",
            "range": "stddev: 0.000017448015867787803",
            "extra": "mean: 4.99515099009916 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.1560441856346,
            "unit": "iter/sec",
            "range": "stddev: 0.000014580281637833024",
            "extra": "mean: 3.82912830188675 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.4503251261705,
            "unit": "iter/sec",
            "range": "stddev: 0.000013299310692568675",
            "extra": "mean: 2.3954946009390676 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.9330289825452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069726776754741815",
            "extra": "mean: 1.213690876350564 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.210327740535043,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199053296471538",
            "extra": "mean: 35.44801071428579 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.327368016335353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004149904596604434",
            "extra": "mean: 34.09784333333287 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.6192416788758,
            "unit": "iter/sec",
            "range": "stddev: 0.000012834102317518845",
            "extra": "mean: 3.178445141065706 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.8635376597035,
            "unit": "iter/sec",
            "range": "stddev: 0.000010523792866791938",
            "extra": "mean: 1.7609864583333357 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.550451673263,
            "unit": "iter/sec",
            "range": "stddev: 0.000016590612853735017",
            "extra": "mean: 844.915397215416 usec\nrounds: 1221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1081.62683641976,
            "unit": "iter/sec",
            "range": "stddev: 0.000013861116408563388",
            "extra": "mean: 924.5332737028336 usec\nrounds: 1118"
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
        "date": 1673334991303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.91255624829938,
            "unit": "iter/sec",
            "range": "stddev: 0.000017360893157170164",
            "extra": "mean: 4.741301408450703 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.66499352921943,
            "unit": "iter/sec",
            "range": "stddev: 0.000013721984464772934",
            "extra": "mean: 3.6014622775800773 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.70845016499527,
            "unit": "iter/sec",
            "range": "stddev: 0.000013579099430825583",
            "extra": "mean: 2.305696371882012 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.654238931655,
            "unit": "iter/sec",
            "range": "stddev: 0.000005717020123475673",
            "extra": "mean: 1.1090725877192926 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.05755655166527,
            "unit": "iter/sec",
            "range": "stddev: 0.000018165841503307875",
            "extra": "mean: 5.023672636815728 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.1264993497743,
            "unit": "iter/sec",
            "range": "stddev: 0.00001239351051294674",
            "extra": "mean: 3.859119011406778 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.01208417942837,
            "unit": "iter/sec",
            "range": "stddev: 0.000015211133815368068",
            "extra": "mean: 2.3808838785047954 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.8068614426361,
            "unit": "iter/sec",
            "range": "stddev: 0.000006510003151647797",
            "extra": "mean: 1.210936899038425 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.049335977050195,
            "unit": "iter/sec",
            "range": "stddev: 0.000054921601050397785",
            "extra": "mean: 35.65146785714265 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.19335047956146,
            "unit": "iter/sec",
            "range": "stddev: 0.0001513407452812676",
            "extra": "mean: 34.25437586206864 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.44204359057534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001920209659454365",
            "extra": "mean: 3.160136335403768 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.6681789638639,
            "unit": "iter/sec",
            "range": "stddev: 0.000009508925531885772",
            "extra": "mean: 1.7709515734266221 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1196.6247461997343,
            "unit": "iter/sec",
            "range": "stddev: 0.000014940669248549104",
            "extra": "mean: 835.6838709677538 usec\nrounds: 1240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.6218122682449,
            "unit": "iter/sec",
            "range": "stddev: 0.000013731897575779336",
            "extra": "mean: 916.0681737589442 usec\nrounds: 1128"
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
        "date": 1673539893847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.44446282894427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005699725843876774",
            "extra": "mean: 7.328989240506342 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.6746467518447,
            "unit": "iter/sec",
            "range": "stddev: 0.000976741297948479",
            "extra": "mean: 5.791238139534904 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 269.52690545957114,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438596385472243",
            "extra": "mean: 3.710204731861174 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.8304265618924,
            "unit": "iter/sec",
            "range": "stddev: 0.00032196010040927577",
            "extra": "mean: 1.764196050775707 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.97088246634809,
            "unit": "iter/sec",
            "range": "stddev: 0.0008538898273220535",
            "extra": "mean: 8.0664102739726 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.82143538449202,
            "unit": "iter/sec",
            "range": "stddev: 0.000644567236047961",
            "extra": "mean: 6.179651030927847 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.75797751142605,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105648077121603",
            "extra": "mean: 3.9720687697160066 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.7937949382213,
            "unit": "iter/sec",
            "range": "stddev: 0.0002754248107629458",
            "extra": "mean: 1.887526825633375 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.696222348965993,
            "unit": "iter/sec",
            "range": "stddev: 0.002371288603391566",
            "extra": "mean: 50.77115714285677 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.48078074225685,
            "unit": "iter/sec",
            "range": "stddev: 0.002137267432637489",
            "extra": "mean: 48.826263636364004 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.67093925676755,
            "unit": "iter/sec",
            "range": "stddev: 0.00037850517914720945",
            "extra": "mean: 5.244637719297891 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.75920791715845,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676230996358687",
            "extra": "mean: 2.9961720194644266 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 667.1384600089068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002635537660626063",
            "extra": "mean: 1.4989392156864247 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 608.3620572141235,
            "unit": "iter/sec",
            "range": "stddev: 0.0002577691997934639",
            "extra": "mean: 1.6437580025606904 msec\nrounds: 781"
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
        "date": 1673622566032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.37925231687638,
            "unit": "iter/sec",
            "range": "stddev: 0.00008316378758613585",
            "extra": "mean: 4.708557870370356 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.0250949247362,
            "unit": "iter/sec",
            "range": "stddev: 0.000009031882329747261",
            "extra": "mean: 3.533255594405599 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.2729780360009,
            "unit": "iter/sec",
            "range": "stddev: 0.000016604431731700136",
            "extra": "mean: 2.3241059770114827 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 896.5337441088024,
            "unit": "iter/sec",
            "range": "stddev: 0.000008805670279800984",
            "extra": "mean: 1.1154069844789256 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.301351573448,
            "unit": "iter/sec",
            "range": "stddev: 0.00009325552769803611",
            "extra": "mean: 5.068389000000018 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.83064477722843,
            "unit": "iter/sec",
            "range": "stddev: 0.000009898381439324276",
            "extra": "mean: 3.81926264150945 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.43815274009796,
            "unit": "iter/sec",
            "range": "stddev: 0.000010165376938315566",
            "extra": "mean: 2.412905263157852 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.4053592959108,
            "unit": "iter/sec",
            "range": "stddev: 0.00000782695993145855",
            "extra": "mean: 1.2248817191283825 msec\nrounds: 826"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.967792147399418,
            "unit": "iter/sec",
            "range": "stddev: 0.000051591333947096214",
            "extra": "mean: 38.50924230769255 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.218282459842968,
            "unit": "iter/sec",
            "range": "stddev: 0.000048439147656496976",
            "extra": "mean: 36.740011111111436 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.2790063144919,
            "unit": "iter/sec",
            "range": "stddev: 0.000027331235713912466",
            "extra": "mean: 3.2022645768025586 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.0637876257324,
            "unit": "iter/sec",
            "range": "stddev: 0.00001038973269430263",
            "extra": "mean: 1.9081646616540586 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1161.7059783310935,
            "unit": "iter/sec",
            "range": "stddev: 0.00001607429056083723",
            "extra": "mean: 860.8030075188213 usec\nrounds: 1197"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1038.5720022496205,
            "unit": "iter/sec",
            "range": "stddev: 0.000012931692295460882",
            "extra": "mean: 962.8605410447511 usec\nrounds: 1072"
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
        "date": 1673680128732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.28808467043996,
            "unit": "iter/sec",
            "range": "stddev: 0.00104093003898572",
            "extra": "mean: 7.179365000000049 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.99973393038772,
            "unit": "iter/sec",
            "range": "stddev: 0.000853749739731775",
            "extra": "mean: 5.524870000000104 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.3708270589629,
            "unit": "iter/sec",
            "range": "stddev: 0.00042039340627363374",
            "extra": "mean: 3.740123823529452 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.3355681427196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471009695588471",
            "extra": "mean: 1.8303768934530897 msec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.4347649151355,
            "unit": "iter/sec",
            "range": "stddev: 0.000625934339400531",
            "extra": "mean: 7.550887417218599 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.1505926139425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006718807566167508",
            "extra": "mean: 5.775319534883749 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.8758538610436,
            "unit": "iter/sec",
            "range": "stddev: 0.0008462104221534241",
            "extra": "mean: 3.8778349544073643 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.2988632732994,
            "unit": "iter/sec",
            "range": "stddev: 0.0002436664423035957",
            "extra": "mean: 1.8857291034482782 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.125863867456136,
            "unit": "iter/sec",
            "range": "stddev: 0.00290586597340206",
            "extra": "mean: 52.285220000000265 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.806440658373404,
            "unit": "iter/sec",
            "range": "stddev: 0.0015196491798099843",
            "extra": "mean: 50.48862727272698 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.4964111847269,
            "unit": "iter/sec",
            "range": "stddev: 0.00048157305761708217",
            "extra": "mean: 5.362033476394826 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.95939037320574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005060804270645354",
            "extra": "mean: 2.994376049382776 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 701.5380081012308,
            "unit": "iter/sec",
            "range": "stddev: 0.00023785041283951348",
            "extra": "mean: 1.425439517819684 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 593.6938940832713,
            "unit": "iter/sec",
            "range": "stddev: 0.00021028651521962514",
            "extra": "mean: 1.684369689440903 msec\nrounds: 805"
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
        "date": 1673691481769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.40073231992784,
            "unit": "iter/sec",
            "range": "stddev: 0.000015451660941435562",
            "extra": "mean: 4.730352582159595 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.3990994171222,
            "unit": "iter/sec",
            "range": "stddev: 0.000012857864106613277",
            "extra": "mean: 3.566345263157918 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 439.51248647124606,
            "unit": "iter/sec",
            "range": "stddev: 0.000012583876848384906",
            "extra": "mean: 2.2752482142857673 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 887.8569777446473,
            "unit": "iter/sec",
            "range": "stddev: 0.00000738219743820767",
            "extra": "mean: 1.1263075304540837 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.2990405180237,
            "unit": "iter/sec",
            "range": "stddev: 0.000014784175425570664",
            "extra": "mean: 4.992535148514683 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.3813177752847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001207183836989651",
            "extra": "mean: 3.8258281368820786 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.96054083079304,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286315951950841",
            "extra": "mean: 2.3642867441860345 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.3562251220164,
            "unit": "iter/sec",
            "range": "stddev: 0.000007136592133313613",
            "extra": "mean: 1.1970940898344713 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.081086946667227,
            "unit": "iter/sec",
            "range": "stddev: 0.000042352143052690127",
            "extra": "mean: 35.6111571428571 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.14614166894236,
            "unit": "iter/sec",
            "range": "stddev: 0.00003785449131069434",
            "extra": "mean: 34.30985862068952 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.21313386190474,
            "unit": "iter/sec",
            "range": "stddev: 0.000012691087569758718",
            "extra": "mean: 3.122919999999939 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.571663075738,
            "unit": "iter/sec",
            "range": "stddev: 0.00001079856175363889",
            "extra": "mean: 1.7681225303292574 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1153.6155421264157,
            "unit": "iter/sec",
            "range": "stddev: 0.000015439035182404234",
            "extra": "mean: 866.8399163179945 usec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1076.1429643841184,
            "unit": "iter/sec",
            "range": "stddev: 0.00001310819837957727",
            "extra": "mean: 929.2445642408718 usec\nrounds: 1113"
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
        "date": 1673706000338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.99766340628207,
            "unit": "iter/sec",
            "range": "stddev: 0.00007836815209525937",
            "extra": "mean: 4.761957746478836 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.49960818633616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001765782818521057",
            "extra": "mean: 3.5650673684210603 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.2027030273448,
            "unit": "iter/sec",
            "range": "stddev: 0.000012954759070129481",
            "extra": "mean: 2.308388181818149 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.6125960652327,
            "unit": "iter/sec",
            "range": "stddev: 0.000006479411530470459",
            "extra": "mean: 1.1066689467969844 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.89286927503784,
            "unit": "iter/sec",
            "range": "stddev: 0.000013976154657200759",
            "extra": "mean: 5.027832338308499 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.0612970273997,
            "unit": "iter/sec",
            "range": "stddev: 0.00001227012411037892",
            "extra": "mean: 3.8159011320753917 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.1425751783659,
            "unit": "iter/sec",
            "range": "stddev: 0.000010743555874120644",
            "extra": "mean: 2.391528773585021 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 842.265473200785,
            "unit": "iter/sec",
            "range": "stddev: 0.000006387105827912168",
            "extra": "mean: 1.1872741217799072 msec\nrounds: 854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.25828638925469,
            "unit": "iter/sec",
            "range": "stddev: 0.00005633832653751403",
            "extra": "mean: 35.387850000000476 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.387925911864027,
            "unit": "iter/sec",
            "range": "stddev: 0.00006799607696667196",
            "extra": "mean: 34.027579999999105 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.9901395630872,
            "unit": "iter/sec",
            "range": "stddev: 0.000011470726715234512",
            "extra": "mean: 3.1250962962964874 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 569.2371777102397,
            "unit": "iter/sec",
            "range": "stddev: 0.000009490872717892604",
            "extra": "mean: 1.7567369791665868 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1192.037653658744,
            "unit": "iter/sec",
            "range": "stddev: 0.000015505876989426922",
            "extra": "mean: 838.8996747969168 usec\nrounds: 1230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.630448644985,
            "unit": "iter/sec",
            "range": "stddev: 0.000014544783796927622",
            "extra": "mean: 910.2241806909387 usec\nrounds: 1129"
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
        "date": 1673706872211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.70076945985434,
            "unit": "iter/sec",
            "range": "stddev: 0.000012495806226028699",
            "extra": "mean: 4.657645161290324 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.04195433760515,
            "unit": "iter/sec",
            "range": "stddev: 0.000009313420867066787",
            "extra": "mean: 3.4959906574394872 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.9887147686598,
            "unit": "iter/sec",
            "range": "stddev: 0.000011387432579038843",
            "extra": "mean: 2.3256424311926756 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.4904290411129,
            "unit": "iter/sec",
            "range": "stddev: 0.000007733824930497942",
            "extra": "mean: 1.1068185869564928 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.35536961208265,
            "unit": "iter/sec",
            "range": "stddev: 0.000013132421485454252",
            "extra": "mean: 4.966343842364527 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.4150170632242,
            "unit": "iter/sec",
            "range": "stddev: 0.00003194491557360631",
            "extra": "mean: 3.7819334586465274 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.5936666684309,
            "unit": "iter/sec",
            "range": "stddev: 0.000012199241258148855",
            "extra": "mean: 2.4061964370545144 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.4171708937054,
            "unit": "iter/sec",
            "range": "stddev: 0.000007248134415891391",
            "extra": "mean: 1.1884711111110997 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.953543157747916,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712389734181527",
            "extra": "mean: 38.53038461538419 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.14798911828137,
            "unit": "iter/sec",
            "range": "stddev: 0.00005967262134196212",
            "extra": "mean: 36.83514074074102 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.3130263003893,
            "unit": "iter/sec",
            "range": "stddev: 0.000010905891372940562",
            "extra": "mean: 3.1916962145111984 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.3643947852426,
            "unit": "iter/sec",
            "range": "stddev: 0.000025970129098394566",
            "extra": "mean: 1.8926332089550755 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1164.5479037895263,
            "unit": "iter/sec",
            "range": "stddev: 0.000015665664510557877",
            "extra": "mean: 858.7023313905121 usec\nrounds: 1201"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.2185545233804,
            "unit": "iter/sec",
            "range": "stddev: 0.000012067669446842538",
            "extra": "mean: 941.4258447487787 usec\nrounds: 1095"
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
        "date": 1673744501385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.5612381613849,
            "unit": "iter/sec",
            "range": "stddev: 0.000013784992651301713",
            "extra": "mean: 4.660674074074077 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 285.94577501805884,
            "unit": "iter/sec",
            "range": "stddev: 0.000010585415564351374",
            "extra": "mean: 3.4971665517241695 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.99065156644576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011890157633257379",
            "extra": "mean: 2.3474693548386956 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.0379005982251,
            "unit": "iter/sec",
            "range": "stddev: 0.000008555558180489314",
            "extra": "mean: 1.102489762931034 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.28082361721724,
            "unit": "iter/sec",
            "range": "stddev: 0.000013482633527189633",
            "extra": "mean: 4.968183168316794 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.9704637812777,
            "unit": "iter/sec",
            "range": "stddev: 0.000011362940714193313",
            "extra": "mean: 3.7883026217228086 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.75193815133895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010551195597367694",
            "extra": "mean: 2.4405009638554955 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.1427429726194,
            "unit": "iter/sec",
            "range": "stddev: 0.000008351501887092294",
            "extra": "mean: 1.2017169030733272 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.680531618610974,
            "unit": "iter/sec",
            "range": "stddev: 0.00009119410718205557",
            "extra": "mean: 38.94000384615436 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.053341072592794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005665995284504252",
            "extra": "mean: 36.96401111111117 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.4376484202526,
            "unit": "iter/sec",
            "range": "stddev: 0.000023835821314510246",
            "extra": "mean: 3.200638607594829 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.2243489236747,
            "unit": "iter/sec",
            "range": "stddev: 0.000011001681961230342",
            "extra": "mean: 1.8895578066915835 msec\nrounds: 538"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.2914045649916,
            "unit": "iter/sec",
            "range": "stddev: 0.000015825996285817295",
            "extra": "mean: 855.2188069594399 usec\nrounds: 1207"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1054.438839258234,
            "unit": "iter/sec",
            "range": "stddev: 0.000015554376011949784",
            "extra": "mean: 948.3717431192784 usec\nrounds: 1090"
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
        "date": 1673784752607,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.77304208713312,
            "unit": "iter/sec",
            "range": "stddev: 0.00029577295428670887",
            "extra": "mean: 4.836220379146935 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.4425634976959,
            "unit": "iter/sec",
            "range": "stddev: 0.000015488837558604684",
            "extra": "mean: 3.5914049469964557 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.48423100155725,
            "unit": "iter/sec",
            "range": "stddev: 0.000012702700242803878",
            "extra": "mean: 2.328374193548387 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.1989100008724,
            "unit": "iter/sec",
            "range": "stddev: 0.000008213539259408118",
            "extra": "mean: 1.1233444444444667 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.10850898633296,
            "unit": "iter/sec",
            "range": "stddev: 0.000014309966171729139",
            "extra": "mean: 5.022387064676583 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.9324726942825,
            "unit": "iter/sec",
            "range": "stddev: 0.000018602195133604935",
            "extra": "mean: 3.8471530303031507 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.7783272893865,
            "unit": "iter/sec",
            "range": "stddev: 0.000012003895382556132",
            "extra": "mean: 2.399357007125897 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.857746696614,
            "unit": "iter/sec",
            "range": "stddev: 0.000008622721106939955",
            "extra": "mean: 1.2123302521007953 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.07172043854874,
            "unit": "iter/sec",
            "range": "stddev: 0.00005924967472453658",
            "extra": "mean: 35.623039285713915 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.075640278183617,
            "unit": "iter/sec",
            "range": "stddev: 0.000138961928549436",
            "extra": "mean: 34.393051724138026 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.7433480128165,
            "unit": "iter/sec",
            "range": "stddev: 0.000013311105545496969",
            "extra": "mean: 3.1771918495296663 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.5160398360839,
            "unit": "iter/sec",
            "range": "stddev: 0.000010771827622013925",
            "extra": "mean: 1.7840702654868499 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1181.1244090859616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001559671443947981",
            "extra": "mean: 846.6508627773355 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1089.3961826423294,
            "unit": "iter/sec",
            "range": "stddev: 0.000014995152325751877",
            "extra": "mean: 917.9396953406804 usec\nrounds: 1116"
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
        "date": 1673828657242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.66321955279622,
            "unit": "iter/sec",
            "range": "stddev: 0.000056000442913831946",
            "extra": "mean: 4.7695537735849065 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.4097174567587,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574902452939935",
            "extra": "mean: 3.578973591549333 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.5443363667827,
            "unit": "iter/sec",
            "range": "stddev: 0.000012250771108755114",
            "extra": "mean: 2.355466589327093 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.5932609643738,
            "unit": "iter/sec",
            "range": "stddev: 0.000007607751634718059",
            "extra": "mean: 1.1091475982533046 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.0156486999669,
            "unit": "iter/sec",
            "range": "stddev: 0.000016411725791905986",
            "extra": "mean: 5.024730499999954 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.86085488687496,
            "unit": "iter/sec",
            "range": "stddev: 0.00007311170694528397",
            "extra": "mean: 3.84821330798488 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.6170595717622,
            "unit": "iter/sec",
            "range": "stddev: 0.000011391689796742875",
            "extra": "mean: 2.417695249406174 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.387826396388,
            "unit": "iter/sec",
            "range": "stddev: 0.000006270479723553301",
            "extra": "mean: 1.2115516706442861 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.12489986782288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000752160003347142",
            "extra": "mean: 35.555682142857314 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.21428090760125,
            "unit": "iter/sec",
            "range": "stddev: 0.000060802850472085746",
            "extra": "mean: 34.22983448275842 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.06778527960137,
            "unit": "iter/sec",
            "range": "stddev: 0.00001330353124261396",
            "extra": "mean: 3.184026018809099 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.7383024303035,
            "unit": "iter/sec",
            "range": "stddev: 0.000012967643590521737",
            "extra": "mean: 1.7738727272724788 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1179.23177756913,
            "unit": "iter/sec",
            "range": "stddev: 0.00001598759005434498",
            "extra": "mean: 848.0097119341556 usec\nrounds: 1215"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1077.2056414604544,
            "unit": "iter/sec",
            "range": "stddev: 0.000013298986971540412",
            "extra": "mean: 928.327852650511 usec\nrounds: 1113"
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
        "date": 1673836967034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.1216310191745,
            "unit": "iter/sec",
            "range": "stddev: 0.00005039019122183547",
            "extra": "mean: 4.736606074766342 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.58969990653236,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286637473115825",
            "extra": "mean: 3.589508156028392 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.58206142047516,
            "unit": "iter/sec",
            "range": "stddev: 0.000024067485611792726",
            "extra": "mean: 2.3224376712328305 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 889.2524064899195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068319687894498585",
            "extra": "mean: 1.1245401111111144 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.36165118606348,
            "unit": "iter/sec",
            "range": "stddev: 0.000020656671828739955",
            "extra": "mean: 5.041297014925524 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.1829676377568,
            "unit": "iter/sec",
            "range": "stddev: 0.000012215655487851737",
            "extra": "mean: 3.8287335849056308 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.48302412174706,
            "unit": "iter/sec",
            "range": "stddev: 0.000012169847663839828",
            "extra": "mean: 2.406837203791447 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.2043595784645,
            "unit": "iter/sec",
            "range": "stddev: 0.000006249449738615121",
            "extra": "mean: 1.2118210336538038 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.971972083971473,
            "unit": "iter/sec",
            "range": "stddev: 0.00033756277425275026",
            "extra": "mean: 35.75007142857193 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.202590048199706,
            "unit": "iter/sec",
            "range": "stddev: 0.00003489914462623824",
            "extra": "mean: 34.243537931035284 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.83960668434213,
            "unit": "iter/sec",
            "range": "stddev: 0.000011229281216347035",
            "extra": "mean: 3.146240993788844 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.2493918868167,
            "unit": "iter/sec",
            "range": "stddev: 0.000010033256404585644",
            "extra": "mean: 1.7628930313591769 msec\nrounds: 574"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.743447558146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163711281099044",
            "extra": "mean: 857.8216777410803 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1066.1411689152906,
            "unit": "iter/sec",
            "range": "stddev: 0.000013711234515863543",
            "extra": "mean: 937.9620909090455 usec\nrounds: 1100"
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
        "date": 1673869378132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.11798852803378,
            "unit": "iter/sec",
            "range": "stddev: 0.000022166017709218428",
            "extra": "mean: 4.670322222222227 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.2620900404588,
            "unit": "iter/sec",
            "range": "stddev: 0.000013215045294896782",
            "extra": "mean: 3.517880276816619 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.88870400236584,
            "unit": "iter/sec",
            "range": "stddev: 0.000014867679128425502",
            "extra": "mean: 2.3425309468822535 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.74144600908,
            "unit": "iter/sec",
            "range": "stddev: 0.000008354739793354172",
            "extra": "mean: 1.1077368879216627 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.27519075173552,
            "unit": "iter/sec",
            "range": "stddev: 0.00010587584208058109",
            "extra": "mean: 5.0181861386139 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.4426538042635,
            "unit": "iter/sec",
            "range": "stddev: 0.000011465553189873517",
            "extra": "mean: 3.810356226415184 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.953828106701,
            "unit": "iter/sec",
            "range": "stddev: 0.000016995326758399244",
            "extra": "mean: 2.4215782296649766 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.6252901763088,
            "unit": "iter/sec",
            "range": "stddev: 0.000008322050002782587",
            "extra": "mean: 1.20102044917258 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.695617424672683,
            "unit": "iter/sec",
            "range": "stddev: 0.00006031488156685892",
            "extra": "mean: 38.91714230769212 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.02248811460892,
            "unit": "iter/sec",
            "range": "stddev: 0.0001813832018851404",
            "extra": "mean: 37.00621481481489 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.20913019328106,
            "unit": "iter/sec",
            "range": "stddev: 0.000013822616303120882",
            "extra": "mean: 3.2236317460318884 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.1479098991697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000117578361442093",
            "extra": "mean: 1.8934089887639867 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1159.54972226975,
            "unit": "iter/sec",
            "range": "stddev: 0.00001695313422146013",
            "extra": "mean: 862.403725165454 usec\nrounds: 1208"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.3156698152898,
            "unit": "iter/sec",
            "range": "stddev: 0.000012793882154699001",
            "extra": "mean: 941.3397810218454 usec\nrounds: 1096"
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
        "date": 1673976409048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.7228775029395,
            "unit": "iter/sec",
            "range": "stddev: 0.000142356025874392",
            "extra": "mean: 5.270845631067905 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.1026478239943,
            "unit": "iter/sec",
            "range": "stddev: 0.0001136128595681383",
            "extra": "mean: 3.9824351063829937 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.6506243848258,
            "unit": "iter/sec",
            "range": "stddev: 0.00011911808351284578",
            "extra": "mean: 2.634000672645723 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.2116429528409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000515088240990027",
            "extra": "mean: 1.249669395348867 msec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.20696770240298,
            "unit": "iter/sec",
            "range": "stddev: 0.0002174764212093721",
            "extra": "mean: 5.5491750000000994 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.43675168368983,
            "unit": "iter/sec",
            "range": "stddev: 0.00019237349393179932",
            "extra": "mean: 4.33958555956671 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 367.96541291242767,
            "unit": "iter/sec",
            "range": "stddev: 0.00009821320817289235",
            "extra": "mean: 2.7176467268623172 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.0903409978963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006329617719365067",
            "extra": "mean: 1.3511863952333927 msec\nrounds: 1007"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.192750796502096,
            "unit": "iter/sec",
            "range": "stddev: 0.00109704302082883",
            "extra": "mean: 43.11692083333293 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.15361999592701,
            "unit": "iter/sec",
            "range": "stddev: 0.0008425386405750229",
            "extra": "mean: 41.40166153846208 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.49129936121506,
            "unit": "iter/sec",
            "range": "stddev: 0.00013991473026276371",
            "extra": "mean: 3.5907764525991794 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 473.4391353999972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000812109019771988",
            "extra": "mean: 2.1122039249144966 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1012.2658469744746,
            "unit": "iter/sec",
            "range": "stddev: 0.000038901892930575616",
            "extra": "mean: 987.8827809797834 usec\nrounds: 1388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 961.568691457316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000765704194205905",
            "extra": "mean: 1.0399673043476894 msec\nrounds: 1150"
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
        "date": 1673976789135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.2201553621885,
            "unit": "iter/sec",
            "range": "stddev: 0.000012262373244545004",
            "extra": "mean: 4.624915740740769 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.6931597954916,
            "unit": "iter/sec",
            "range": "stddev: 0.000014165272424580426",
            "extra": "mean: 3.5125536585366035 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.4583489658817,
            "unit": "iter/sec",
            "range": "stddev: 0.000010178518991550724",
            "extra": "mean: 2.3177208237986298 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.8882538393858,
            "unit": "iter/sec",
            "range": "stddev: 0.000008643793419478079",
            "extra": "mean: 1.1063314472252148 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.16160303051544,
            "unit": "iter/sec",
            "range": "stddev: 0.000012422952570008714",
            "extra": "mean: 4.946537745098183 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.1447014353573,
            "unit": "iter/sec",
            "range": "stddev: 0.000021678473805265118",
            "extra": "mean: 3.785803745318452 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.53382839340424,
            "unit": "iter/sec",
            "range": "stddev: 0.000010189968761124682",
            "extra": "mean: 2.3892931279620293 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.1631292854157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072097285863034935",
            "extra": "mean: 1.2031332535885466 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.923155988702632,
            "unit": "iter/sec",
            "range": "stddev: 0.000042262922283836395",
            "extra": "mean: 38.575550000000085 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.34580093507064,
            "unit": "iter/sec",
            "range": "stddev: 0.00003716230382188665",
            "extra": "mean: 36.56868571428503 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.85902442711813,
            "unit": "iter/sec",
            "range": "stddev: 0.000011838996454262462",
            "extra": "mean: 3.1861438485806928 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.4057298777024,
            "unit": "iter/sec",
            "range": "stddev: 0.000010518937350287668",
            "extra": "mean: 1.8853491651203953 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1161.649896398313,
            "unit": "iter/sec",
            "range": "stddev: 0.000015230466457581712",
            "extra": "mean: 860.8445652175346 usec\nrounds: 1196"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1072.8473037033602,
            "unit": "iter/sec",
            "range": "stddev: 0.000012894883588164579",
            "extra": "mean: 932.0990942029694 usec\nrounds: 1104"
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
        "date": 1673977636041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.28113937488885,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576102076743903",
            "extra": "mean: 4.602332272727257 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.59072696808454,
            "unit": "iter/sec",
            "range": "stddev: 0.00000903568288041289",
            "extra": "mean: 3.477163573883157 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.6478421590677,
            "unit": "iter/sec",
            "range": "stddev: 0.000010386391480044586",
            "extra": "mean: 2.3113486363635647 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.8583459792127,
            "unit": "iter/sec",
            "range": "stddev: 0.00000690981485971521",
            "extra": "mean: 1.0954602150537511 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.28770763856676,
            "unit": "iter/sec",
            "range": "stddev: 0.000013158531044975565",
            "extra": "mean: 4.919136585365701 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.8698635830878,
            "unit": "iter/sec",
            "range": "stddev: 0.000008730500271203655",
            "extra": "mean: 3.7754389513109223 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.90624333400456,
            "unit": "iter/sec",
            "range": "stddev: 0.000009802102104210153",
            "extra": "mean: 2.3814839999999085 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.4449448932608,
            "unit": "iter/sec",
            "range": "stddev: 0.00000718833945725433",
            "extra": "mean: 1.1984014117646988 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.74152675569335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005052862905211312",
            "extra": "mean: 38.8477346153847 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.05567245721526,
            "unit": "iter/sec",
            "range": "stddev: 0.00003727576643726576",
            "extra": "mean: 36.96082592592586 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.3510006005119,
            "unit": "iter/sec",
            "range": "stddev: 0.000011035895526524532",
            "extra": "mean: 3.1610457943921606 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.8358248936722,
            "unit": "iter/sec",
            "range": "stddev: 0.000010498129565891378",
            "extra": "mean: 1.8873770949721653 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1143.1815629681646,
            "unit": "iter/sec",
            "range": "stddev: 0.00001628227172971272",
            "extra": "mean: 874.7516863407008 usec\nrounds: 1186"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.9747084250348,
            "unit": "iter/sec",
            "range": "stddev: 0.000013863330530567542",
            "extra": "mean: 951.4976830399428 usec\nrounds: 1079"
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
        "date": 1674054393941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.7440109138457,
            "unit": "iter/sec",
            "range": "stddev: 0.000011898457671765026",
            "extra": "mean: 4.767716587677725 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.8418193318798,
            "unit": "iter/sec",
            "range": "stddev: 0.000013829187992283664",
            "extra": "mean: 3.599170212765949 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.86863574385376,
            "unit": "iter/sec",
            "range": "stddev: 0.000011292653214306596",
            "extra": "mean: 2.3536686774941966 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 881.8385877593189,
            "unit": "iter/sec",
            "range": "stddev: 0.000009787933583984748",
            "extra": "mean: 1.1339943770672587 msec\nrounds: 907"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.46073433761768,
            "unit": "iter/sec",
            "range": "stddev: 0.00001545697828662437",
            "extra": "mean: 5.064297989949757 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.81462547438366,
            "unit": "iter/sec",
            "range": "stddev: 0.000013654536328367897",
            "extra": "mean: 3.8938592307693405 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.54087825425324,
            "unit": "iter/sec",
            "range": "stddev: 0.000011942877791707966",
            "extra": "mean: 2.4358110311750423 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.6950666505312,
            "unit": "iter/sec",
            "range": "stddev: 0.000007773629856133666",
            "extra": "mean: 1.2067164874552219 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.138073526796372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006449596722529688",
            "extra": "mean: 35.539035714285234 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.20026034952139,
            "unit": "iter/sec",
            "range": "stddev: 0.00011421612045809076",
            "extra": "mean: 34.24626999999987 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.1274305190912,
            "unit": "iter/sec",
            "range": "stddev: 0.000015339796918145443",
            "extra": "mean: 3.1733194357367043 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.2787897556501,
            "unit": "iter/sec",
            "range": "stddev: 0.00006881744654811401",
            "extra": "mean: 1.800897168141519 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1176.1130754540982,
            "unit": "iter/sec",
            "range": "stddev: 0.00002304915771633846",
            "extra": "mean: 850.2583815029003 usec\nrounds: 1211"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1067.2631545952556,
            "unit": "iter/sec",
            "range": "stddev: 0.000038837151653690664",
            "extra": "mean: 936.9760360360569 usec\nrounds: 1110"
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
        "date": 1674140453545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.63611360849995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006496924662145007",
            "extra": "mean: 7.427427702702697 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.94555380360933,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164801194473566",
            "extra": "mean: 5.716064102564057 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.66365143404784,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530164860848932",
            "extra": "mean: 3.957830872483166 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.3578084240352,
            "unit": "iter/sec",
            "range": "stddev: 0.00023805883921335392",
            "extra": "mean: 1.7471588319087685 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.27793491412116,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993284860916123",
            "extra": "mean: 8.383780291970929 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.02594291625726,
            "unit": "iter/sec",
            "range": "stddev: 0.000963306062667322",
            "extra": "mean: 6.368374431817966 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.05100621373245,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009513366032179",
            "extra": "mean: 4.11436272401451 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 532.0810430028438,
            "unit": "iter/sec",
            "range": "stddev: 0.00027881353294462413",
            "extra": "mean: 1.8794129449837502 msec\nrounds: 618"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.30478150020966,
            "unit": "iter/sec",
            "range": "stddev: 0.0027192684136508865",
            "extra": "mean: 51.800638095237666 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.172872346522173,
            "unit": "iter/sec",
            "range": "stddev: 0.0020913996053971216",
            "extra": "mean: 49.57152272727295 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.6603798768886,
            "unit": "iter/sec",
            "range": "stddev: 0.00038337177055066367",
            "extra": "mean: 5.357323287671157 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.44453907182236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885794724214538",
            "extra": "mean: 2.972258080808158 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 681.719866675514,
            "unit": "iter/sec",
            "range": "stddev: 0.00045860283383852564",
            "extra": "mean: 1.4668781839623009 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 641.9572035992526,
            "unit": "iter/sec",
            "range": "stddev: 0.00035594918393023627",
            "extra": "mean: 1.5577362391033451 msec\nrounds: 803"
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
        "date": 1674226232568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 220.53191901511556,
            "unit": "iter/sec",
            "range": "stddev: 0.00001131267298451742",
            "extra": "mean: 4.534490990991007 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 289.2224368303133,
            "unit": "iter/sec",
            "range": "stddev: 0.000010907131124830111",
            "extra": "mean: 3.457546416382279 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.82887036640807,
            "unit": "iter/sec",
            "range": "stddev: 0.000010275117361009273",
            "extra": "mean: 2.2633197309417588 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.4174514247622,
            "unit": "iter/sec",
            "range": "stddev: 0.000007690693902814856",
            "extra": "mean: 1.102028618063132 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.86207982119453,
            "unit": "iter/sec",
            "range": "stddev: 0.000014300006215206057",
            "extra": "mean: 4.881332850241533 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.19217828424627,
            "unit": "iter/sec",
            "range": "stddev: 0.000009989855754715893",
            "extra": "mean: 3.7566843866170125 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.38275700520813,
            "unit": "iter/sec",
            "range": "stddev: 0.00001053030651881552",
            "extra": "mean: 2.361928971962594 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.1862672573989,
            "unit": "iter/sec",
            "range": "stddev: 0.000008144830120876776",
            "extra": "mean: 1.2030997616209693 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.084330640961994,
            "unit": "iter/sec",
            "range": "stddev: 0.00007401741375148432",
            "extra": "mean: 38.33719230769265 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.606230252918177,
            "unit": "iter/sec",
            "range": "stddev: 0.00003437914881124315",
            "extra": "mean: 36.223707142857464 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.1509065461385,
            "unit": "iter/sec",
            "range": "stddev: 0.00001996188129747277",
            "extra": "mean: 3.15307312499995 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.8496659538441,
            "unit": "iter/sec",
            "range": "stddev: 0.000011491418613745493",
            "extra": "mean: 1.9053074906366447 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1176.2050137945519,
            "unit": "iter/sec",
            "range": "stddev: 0.00001557680059738876",
            "extra": "mean: 850.1919208573195 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1065.7318196325582,
            "unit": "iter/sec",
            "range": "stddev: 0.000017649059185540898",
            "extra": "mean: 938.3223636362653 usec\nrounds: 1100"
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
        "date": 1674487472940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.69714343143738,
            "unit": "iter/sec",
            "range": "stddev: 0.00005682471941700292",
            "extra": "mean: 4.74614882629108 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.96337722888774,
            "unit": "iter/sec",
            "range": "stddev: 0.000011875711984887795",
            "extra": "mean: 3.5718957597173033 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.4527561257501,
            "unit": "iter/sec",
            "range": "stddev: 0.00001312300121032613",
            "extra": "mean: 2.344925635103939 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 887.2615620407904,
            "unit": "iter/sec",
            "range": "stddev: 0.000007343801536536259",
            "extra": "mean: 1.127063363028936 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.91638311136322,
            "unit": "iter/sec",
            "range": "stddev: 0.00001455140449791938",
            "extra": "mean: 5.027237999999983 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.25136962014517,
            "unit": "iter/sec",
            "range": "stddev: 0.000012618055630738824",
            "extra": "mean: 3.8131354716981574 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.72833337900175,
            "unit": "iter/sec",
            "range": "stddev: 0.000011832445050697917",
            "extra": "mean: 2.4112169811319464 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 826.8442993970081,
            "unit": "iter/sec",
            "range": "stddev: 0.000006729019532282688",
            "extra": "mean: 1.2094175417660482 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.061949559848376,
            "unit": "iter/sec",
            "range": "stddev: 0.000060855983172102494",
            "extra": "mean: 35.635442857142785 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.14131497872582,
            "unit": "iter/sec",
            "range": "stddev: 0.00011903322920618418",
            "extra": "mean: 34.31554137931096 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.1210368177171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000180639627189262",
            "extra": "mean: 3.16334531250011 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.0523659371746,
            "unit": "iter/sec",
            "range": "stddev: 0.000011260343662437487",
            "extra": "mean: 1.7760337412587657 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1177.5747958355705,
            "unit": "iter/sec",
            "range": "stddev: 0.000014624329982110434",
            "extra": "mean: 849.2029580935715 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.8021324614583,
            "unit": "iter/sec",
            "range": "stddev: 0.000012984703021614386",
            "extra": "mean: 920.9781138788618 usec\nrounds: 1124"
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
        "date": 1674560901300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.35107816303724,
            "unit": "iter/sec",
            "range": "stddev: 0.000011554667750509992",
            "extra": "mean: 4.579780454545433 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.6132959179068,
            "unit": "iter/sec",
            "range": "stddev: 0.000011228600328587944",
            "extra": "mean: 3.476890721649493 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 441.6512630930456,
            "unit": "iter/sec",
            "range": "stddev: 0.000010718995578496183",
            "extra": "mean: 2.2642299107142443 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.9548382213436,
            "unit": "iter/sec",
            "range": "stddev: 0.000007050968749687802",
            "extra": "mean: 1.0870098818474796 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.32740840571412,
            "unit": "iter/sec",
            "range": "stddev: 0.000012354393693010682",
            "extra": "mean: 4.918176097560966 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.23737545579104,
            "unit": "iter/sec",
            "range": "stddev: 0.000011180535349535457",
            "extra": "mean: 3.7560466417910994 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.2102267275054,
            "unit": "iter/sec",
            "range": "stddev: 0.000009848484023304975",
            "extra": "mean: 2.362891860465072 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 847.4681986568268,
            "unit": "iter/sec",
            "range": "stddev: 0.000007384848922276871",
            "extra": "mean: 1.179985280373853 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.982396926082806,
            "unit": "iter/sec",
            "range": "stddev: 0.00020007601651601012",
            "extra": "mean: 38.487596153845814 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.196741226029104,
            "unit": "iter/sec",
            "range": "stddev: 0.00018824036461965402",
            "extra": "mean: 36.769111111111094 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.3998436886272,
            "unit": "iter/sec",
            "range": "stddev: 0.00001251272344138784",
            "extra": "mean: 3.1705786163522385 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.4646228005649,
            "unit": "iter/sec",
            "range": "stddev: 0.000010044781000715188",
            "extra": "mean: 1.8851398510244537 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1177.6970268906227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001435239545516325",
            "extra": "mean: 849.114820846766 usec\nrounds: 1228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1068.9919750819017,
            "unit": "iter/sec",
            "range": "stddev: 0.00001184582509566565",
            "extra": "mean: 935.4607174889074 usec\nrounds: 1115"
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
        "date": 1674746011316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.0885609060843,
            "unit": "iter/sec",
            "range": "stddev: 0.000015186212891053908",
            "extra": "mean: 4.805646190476206 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.2353816432656,
            "unit": "iter/sec",
            "range": "stddev: 0.000013110340749571906",
            "extra": "mean: 3.6201010676156415 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.31496208609127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010322531087468659",
            "extra": "mean: 2.345683564814826 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.9017431400243,
            "unit": "iter/sec",
            "range": "stddev: 0.000005858719295419595",
            "extra": "mean: 1.112468640350859 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.3418261861717,
            "unit": "iter/sec",
            "range": "stddev: 0.00001469645456809012",
            "extra": "mean: 5.093158291457461 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.54401683804593,
            "unit": "iter/sec",
            "range": "stddev: 0.000014720681732720851",
            "extra": "mean: 3.8828314176245855 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.8332678034461,
            "unit": "iter/sec",
            "range": "stddev: 0.000011352653265342743",
            "extra": "mean: 2.4222854066986423 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.6555187374322,
            "unit": "iter/sec",
            "range": "stddev: 0.000006046281315921011",
            "extra": "mean: 1.2067740784779108 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.09048225238338,
            "unit": "iter/sec",
            "range": "stddev: 0.000069717719104574",
            "extra": "mean: 35.599246428571135 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.140626836989814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004936792351157815",
            "extra": "mean: 34.316351724138094 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.3001973510452,
            "unit": "iter/sec",
            "range": "stddev: 0.000011490463705855686",
            "extra": "mean: 3.1816715625001324 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.1900187341685,
            "unit": "iter/sec",
            "range": "stddev: 0.00000950912026945443",
            "extra": "mean: 1.775599649737419 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1202.6688740245784,
            "unit": "iter/sec",
            "range": "stddev: 0.000016086694177561626",
            "extra": "mean: 831.4840614887014 usec\nrounds: 1236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.5873526670543,
            "unit": "iter/sec",
            "range": "stddev: 0.000014135480158038182",
            "extra": "mean: 916.0970925109376 usec\nrounds: 1135"
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
        "date": 1675093391169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.8361713895908,
            "unit": "iter/sec",
            "range": "stddev: 0.00094374273375832",
            "extra": "mean: 7.361809375000028 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.85339298883673,
            "unit": "iter/sec",
            "range": "stddev: 0.00046182444998841995",
            "extra": "mean: 5.5293405529954605 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.9114060846388,
            "unit": "iter/sec",
            "range": "stddev: 0.0004337192958570963",
            "extra": "mean: 3.67766845238087 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 578.6398496379741,
            "unit": "iter/sec",
            "range": "stddev: 0.00024707888549286314",
            "extra": "mean: 1.7281906882591127 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.25374872576464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579738996869369",
            "extra": "mean: 7.858314666666739 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.82153228497685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006132946374430944",
            "extra": "mean: 6.067168446601974 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.75750385890046,
            "unit": "iter/sec",
            "range": "stddev: 0.0003689557026925118",
            "extra": "mean: 3.7628288401253704 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 535.4831747067042,
            "unit": "iter/sec",
            "range": "stddev: 0.0002855973023682307",
            "extra": "mean: 1.8674723076924347 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.442914215085235,
            "unit": "iter/sec",
            "range": "stddev: 0.001958425428404699",
            "extra": "mean: 51.43261904761822 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.302946294304032,
            "unit": "iter/sec",
            "range": "stddev: 0.0010125303092680977",
            "extra": "mean: 46.94186363636374 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.73654710802325,
            "unit": "iter/sec",
            "range": "stddev: 0.0007770954066305614",
            "extra": "mean: 5.16164871794903 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.1583852172091,
            "unit": "iter/sec",
            "range": "stddev: 0.0004696265837010744",
            "extra": "mean: 2.9311898617509247 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 695.4965159752418,
            "unit": "iter/sec",
            "range": "stddev: 0.00019095109931646488",
            "extra": "mean: 1.4378217245240634 msec\nrounds: 893"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 626.6329687696552,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640836435669819",
            "extra": "mean: 1.5958304938270673 msec\nrounds: 810"
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
        "date": 1675094582189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.249719491231,
            "unit": "iter/sec",
            "range": "stddev: 0.0004026803600664839",
            "extra": "mean: 5.457034274193544 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.34313654812365,
            "unit": "iter/sec",
            "range": "stddev: 0.00021802005742849493",
            "extra": "mean: 3.9010211604096083 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.5076657295759,
            "unit": "iter/sec",
            "range": "stddev: 0.00015730915713679035",
            "extra": "mean: 2.5283960000000083 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.4011777037225,
            "unit": "iter/sec",
            "range": "stddev: 0.000019123347795779135",
            "extra": "mean: 1.276485188509882 msec\nrounds: 1114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.67184362551194,
            "unit": "iter/sec",
            "range": "stddev: 0.0001876083199564485",
            "extra": "mean: 5.6602114942530495 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.38591343593828,
            "unit": "iter/sec",
            "range": "stddev: 0.00017386592333028917",
            "extra": "mean: 4.321784265734314 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.3910906180583,
            "unit": "iter/sec",
            "range": "stddev: 0.00012712699429092013",
            "extra": "mean: 2.7367936046511208 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.5031447171376,
            "unit": "iter/sec",
            "range": "stddev: 0.00009016073961652536",
            "extra": "mean: 1.339579085603071 msec\nrounds: 1028"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.67016794816112,
            "unit": "iter/sec",
            "range": "stddev: 0.0025510715226401584",
            "extra": "mean: 44.11083333333288 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.301102626817332,
            "unit": "iter/sec",
            "range": "stddev: 0.0020046738916595797",
            "extra": "mean: 42.91642399999972 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.58978772242943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797538042062101",
            "extra": "mean: 3.737063392857499 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.8406924591236,
            "unit": "iter/sec",
            "range": "stddev: 0.00039023709601516407",
            "extra": "mean: 2.227961984732637 msec\nrounds: 655"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1040.7297056245818,
            "unit": "iter/sec",
            "range": "stddev: 0.0001658745560689026",
            "extra": "mean: 960.8642807018384 usec\nrounds: 1425"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 965.111052793668,
            "unit": "iter/sec",
            "range": "stddev: 0.00008407203153663552",
            "extra": "mean: 1.0361501892505949 msec\nrounds: 1321"
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
        "date": 1675179910487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.41654100544906,
            "unit": "iter/sec",
            "range": "stddev: 0.000017958410354929192",
            "extra": "mean: 4.620718894009222 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.8505256882299,
            "unit": "iter/sec",
            "range": "stddev: 0.000012330160815032517",
            "extra": "mean: 3.5229809688580964 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.5181532006823,
            "unit": "iter/sec",
            "range": "stddev: 0.000016501211187913172",
            "extra": "mean: 2.3120416856492363 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.9804881553749,
            "unit": "iter/sec",
            "range": "stddev: 0.000008560060982899284",
            "extra": "mean: 1.1062185667752171 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.44318003331452,
            "unit": "iter/sec",
            "range": "stddev: 0.000015365545175482425",
            "extra": "mean: 4.939657635468074 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.54119632973124,
            "unit": "iter/sec",
            "range": "stddev: 0.00000946753265004909",
            "extra": "mean: 3.765894007490526 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.1344774188839,
            "unit": "iter/sec",
            "range": "stddev: 0.000011443790604697498",
            "extra": "mean: 2.3858691037735795 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.1727251650474,
            "unit": "iter/sec",
            "range": "stddev: 0.00000831744481579439",
            "extra": "mean: 1.2162894357742828 msec\nrounds: 833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.592987049062515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000708969645659705",
            "extra": "mean: 39.073203846154044 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.015833980296033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000638614655371815",
            "extra": "mean: 37.015329629629385 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.3344463912047,
            "unit": "iter/sec",
            "range": "stddev: 0.000012484263169106498",
            "extra": "mean: 3.17123616352207 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.38529973432,
            "unit": "iter/sec",
            "range": "stddev: 0.000011168174656351057",
            "extra": "mean: 1.8854217877096497 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1153.874900697469,
            "unit": "iter/sec",
            "range": "stddev: 0.000016597387992527325",
            "extra": "mean: 866.6450751251647 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.5630596588778,
            "unit": "iter/sec",
            "range": "stddev: 0.000014791453643729994",
            "extra": "mean: 946.4650413983434 usec\nrounds: 1087"
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
        "date": 1675265768063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.48563275137644,
            "unit": "iter/sec",
            "range": "stddev: 0.0009539946474362655",
            "extra": "mean: 7.273487272727327 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.6496954939047,
            "unit": "iter/sec",
            "range": "stddev: 0.00047917246730780816",
            "extra": "mean: 5.535575342465723 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.59510827243855,
            "unit": "iter/sec",
            "range": "stddev: 0.00046406173046906505",
            "extra": "mean: 3.7651295857988227 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 577.0164229078703,
            "unit": "iter/sec",
            "range": "stddev: 0.00039416376090575637",
            "extra": "mean: 1.7330529258777538 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.83049187112681,
            "unit": "iter/sec",
            "range": "stddev: 0.000998207320999904",
            "extra": "mean: 8.075555421686628 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.0568998319276,
            "unit": "iter/sec",
            "range": "stddev: 0.0005643790378747563",
            "extra": "mean: 5.985984422110542 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.10974028334897,
            "unit": "iter/sec",
            "range": "stddev: 0.00040349943857211843",
            "extra": "mean: 3.7720228571428622 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.9846214956841,
            "unit": "iter/sec",
            "range": "stddev: 0.00024679119108205307",
            "extra": "mean: 1.7986108991825103 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.443668493648286,
            "unit": "iter/sec",
            "range": "stddev: 0.00138757904927929",
            "extra": "mean: 48.91490000000213 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.246074903129244,
            "unit": "iter/sec",
            "range": "stddev: 0.002149618570743268",
            "extra": "mean: 47.06751739130479 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.03100545579312,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869757282280734",
            "extra": "mean: 5.075343333333215 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 345.57007001387336,
            "unit": "iter/sec",
            "range": "stddev: 0.00040828727794479453",
            "extra": "mean: 2.893769127516899 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 700.4143587672332,
            "unit": "iter/sec",
            "range": "stddev: 0.00024515393667311707",
            "extra": "mean: 1.4277262987013195 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 617.2242207678146,
            "unit": "iter/sec",
            "range": "stddev: 0.00030017163004187274",
            "extra": "mean: 1.6201567701864 msec\nrounds: 805"
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
        "date": 1675481476559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.86233325138312,
            "unit": "iter/sec",
            "range": "stddev: 0.000036542440187287076",
            "extra": "mean: 4.765028504672881 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.8198833134043,
            "unit": "iter/sec",
            "range": "stddev: 0.000021046373115826082",
            "extra": "mean: 3.561001408450721 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.91435304886835,
            "unit": "iter/sec",
            "range": "stddev: 0.000026080951830576072",
            "extra": "mean: 2.3314677927928074 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 882.2461356437553,
            "unit": "iter/sec",
            "range": "stddev: 0.000013359778798523184",
            "extra": "mean: 1.1334705357143018 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.35055358458973,
            "unit": "iter/sec",
            "range": "stddev: 0.000030301064001090286",
            "extra": "mean: 5.016289054726268 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.0996191356419,
            "unit": "iter/sec",
            "range": "stddev: 0.000021619687282928825",
            "extra": "mean: 3.844680754716908 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.9881133596666,
            "unit": "iter/sec",
            "range": "stddev: 0.000023853436611491014",
            "extra": "mean: 2.3810197674419102 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.8502279520719,
            "unit": "iter/sec",
            "range": "stddev: 0.00001444306839454106",
            "extra": "mean: 1.2152879904874334 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.76152296542271,
            "unit": "iter/sec",
            "range": "stddev: 0.00007202637046491336",
            "extra": "mean: 36.021078571428205 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.906571071639405,
            "unit": "iter/sec",
            "range": "stddev: 0.00008148339596303499",
            "extra": "mean: 34.59421034482752 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.10942726663734,
            "unit": "iter/sec",
            "range": "stddev: 0.000015813766478291893",
            "extra": "mean: 3.1634614906834244 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.4297045771199,
            "unit": "iter/sec",
            "range": "stddev: 0.000015895476027334056",
            "extra": "mean: 1.7843451048951162 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1181.443221406811,
            "unit": "iter/sec",
            "range": "stddev: 0.000021445105793051645",
            "extra": "mean: 846.4223941369299 usec\nrounds: 1228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1083.7221652614433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163006495263183",
            "extra": "mean: 922.7457295373805 usec\nrounds: 1124"
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
        "date": 1675580567731,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.13439753148805,
            "unit": "iter/sec",
            "range": "stddev: 0.000013760247263828418",
            "extra": "mean: 4.6482571428571084 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.1462818834106,
            "unit": "iter/sec",
            "range": "stddev: 0.00001010363186005344",
            "extra": "mean: 3.5317433566433474 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.89978114252494,
            "unit": "iter/sec",
            "range": "stddev: 0.000009864244937606163",
            "extra": "mean: 2.331547004608278 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.9205365625976,
            "unit": "iter/sec",
            "range": "stddev: 0.000006473536919644045",
            "extra": "mean: 1.1199204845815478 msec\nrounds: 908"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.111558013295,
            "unit": "iter/sec",
            "range": "stddev: 0.000011984985546723552",
            "extra": "mean: 4.947762561576115 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.8647235640091,
            "unit": "iter/sec",
            "range": "stddev: 0.000008542519556244807",
            "extra": "mean: 3.8042381132076635 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.89371902418924,
            "unit": "iter/sec",
            "range": "stddev: 0.000009880925223370129",
            "extra": "mean: 2.41607918660287 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.9839549594577,
            "unit": "iter/sec",
            "range": "stddev: 0.000006874083146840699",
            "extra": "mean: 1.2048425683709116 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.016840700985675,
            "unit": "iter/sec",
            "range": "stddev: 0.000045150868634336856",
            "extra": "mean: 38.43664230769242 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.33667289845166,
            "unit": "iter/sec",
            "range": "stddev: 0.00005268805811775211",
            "extra": "mean: 36.58089642857159 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.8910008970479,
            "unit": "iter/sec",
            "range": "stddev: 0.0001491028680743051",
            "extra": "mean: 3.2373879365080493 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.1736278784582,
            "unit": "iter/sec",
            "range": "stddev: 0.000022871161556089373",
            "extra": "mean: 1.8897389199253185 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.5290564986365,
            "unit": "iter/sec",
            "range": "stddev: 0.00001657315039721038",
            "extra": "mean: 869.9214642263252 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1044.9059917165632,
            "unit": "iter/sec",
            "range": "stddev: 0.000011859582081094553",
            "extra": "mean: 957.023892988888 usec\nrounds: 1084"
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
        "date": 1676093435052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 147.03611942273588,
            "unit": "iter/sec",
            "range": "stddev: 0.0004701008536256769",
            "extra": "mean: 6.801050000000014 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.7883145890914,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828164690717056",
            "extra": "mean: 5.325144976076642 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.51202829745847,
            "unit": "iter/sec",
            "range": "stddev: 0.00027136333586114597",
            "extra": "mean: 3.7381496688741622 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 613.7714544483987,
            "unit": "iter/sec",
            "range": "stddev: 0.00022688487816806935",
            "extra": "mean: 1.6292709489050905 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.905664457377,
            "unit": "iter/sec",
            "range": "stddev: 0.0005952388695104516",
            "extra": "mean: 7.524133783783921 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.99755797127656,
            "unit": "iter/sec",
            "range": "stddev: 0.00035418945659475526",
            "extra": "mean: 5.555630927835014 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.05960942487053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003804817495349032",
            "extra": "mean: 3.7444823728813286 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.8390318352455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005926246900441974",
            "extra": "mean: 1.961403379416329 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.10795461904882,
            "unit": "iter/sec",
            "range": "stddev: 0.0021468291256500475",
            "extra": "mean: 47.37550454545476 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.614424602402604,
            "unit": "iter/sec",
            "range": "stddev: 0.002103832902758695",
            "extra": "mean: 46.26540000000011 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.96532633681673,
            "unit": "iter/sec",
            "range": "stddev: 0.0003183383041871785",
            "extra": "mean: 5.348585321101234 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.784056904328,
            "unit": "iter/sec",
            "range": "stddev: 0.00043485792715347127",
            "extra": "mean: 2.9604712820511665 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 717.7561837456591,
            "unit": "iter/sec",
            "range": "stddev: 0.00027459448615116763",
            "extra": "mean: 1.3932307692306218 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 668.4051970449493,
            "unit": "iter/sec",
            "range": "stddev: 0.00028658275357954833",
            "extra": "mean: 1.496098481012785 msec\nrounds: 790"
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
          "id": "52504f79eb5b80040a5b89f0c788ca1e3ebb6b7d",
          "message": "Merge pull request #818 from TeoZosa/dependabot/pip/docs/orjson-3.8.6",
          "timestamp": "2023-02-11T07:59:05Z",
          "tree_id": "3e1ebcd3d82e32d14dde2a530a2d308f870ecd87",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/52504f79eb5b80040a5b89f0c788ca1e3ebb6b7d"
        },
        "date": 1676102516871,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.1096803931142,
            "unit": "iter/sec",
            "range": "stddev: 0.00003172717652035228",
            "extra": "mean: 5.402202617801065 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.76305925856323,
            "unit": "iter/sec",
            "range": "stddev: 0.00001959724426263919",
            "extra": "mean: 4.068959765624974 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.03189993610965,
            "unit": "iter/sec",
            "range": "stddev: 0.00003175796579563352",
            "extra": "mean: 2.680735883905031 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.2082039335662,
            "unit": "iter/sec",
            "range": "stddev: 0.0003109085647989386",
            "extra": "mean: 1.390417954815725 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.4316960952488,
            "unit": "iter/sec",
            "range": "stddev: 0.00046411872609550297",
            "extra": "mean: 6.156433898305211 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.42436675618276,
            "unit": "iter/sec",
            "range": "stddev: 0.000719673289814436",
            "extra": "mean: 4.707557872340435 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.33166012907736,
            "unit": "iter/sec",
            "range": "stddev: 0.000711849715199525",
            "extra": "mean: 3.0272605405405257 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 659.4121535104944,
            "unit": "iter/sec",
            "range": "stddev: 0.00047739739267520654",
            "extra": "mean: 1.5165022280470983 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.110255506058504,
            "unit": "iter/sec",
            "range": "stddev: 0.0008138327578634528",
            "extra": "mean: 47.370340909090686 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.957193591897777,
            "unit": "iter/sec",
            "range": "stddev: 0.001531003769586341",
            "extra": "mean: 45.54316086956581 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.5914119420024,
            "unit": "iter/sec",
            "range": "stddev: 0.0004108165086947627",
            "extra": "mean: 3.9124945255473427 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.50820231398654,
            "unit": "iter/sec",
            "range": "stddev: 0.00021306782093954326",
            "extra": "mean: 2.280459053497856 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1009.8475904864194,
            "unit": "iter/sec",
            "range": "stddev: 0.000022277691431236573",
            "extra": "mean: 990.2484388939561 usec\nrounds: 1121"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 895.1243474639292,
            "unit": "iter/sec",
            "range": "stddev: 0.000021154551894977572",
            "extra": "mean: 1.1171632218844285 msec\nrounds: 987"
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
          "id": "279ab510138ccb63135b7e6a2b4a67e99aaa41d6",
          "message": "Merge pull request #819 from TeoZosa/dependabot/pip/orjson-3.8.6",
          "timestamp": "2023-02-11T09:44:05Z",
          "tree_id": "37065511f4feed9ccfe2fec1ccc69c1860f66139",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/279ab510138ccb63135b7e6a2b4a67e99aaa41d6"
        },
        "date": 1676108806664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.62741473166272,
            "unit": "iter/sec",
            "range": "stddev: 0.000027586154698461567",
            "extra": "mean: 4.637629223744341 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.6429828706561,
            "unit": "iter/sec",
            "range": "stddev: 0.000025055098973967642",
            "extra": "mean: 3.5131728522336605 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.12594302186943,
            "unit": "iter/sec",
            "range": "stddev: 0.00004410240768287818",
            "extra": "mean: 2.324900453514741 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 887.0156504651763,
            "unit": "iter/sec",
            "range": "stddev: 0.000011867852692779066",
            "extra": "mean: 1.127375824175787 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.6244658867758,
            "unit": "iter/sec",
            "range": "stddev: 0.00004761836180205095",
            "extra": "mean: 4.984436945812775 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.0749552173196,
            "unit": "iter/sec",
            "range": "stddev: 0.00003631780485382297",
            "extra": "mean: 3.8157022641510063 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.33460991964967,
            "unit": "iter/sec",
            "range": "stddev: 0.00002117171177122831",
            "extra": "mean: 2.379057009345859 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.1931899440596,
            "unit": "iter/sec",
            "range": "stddev: 0.000011354708833635534",
            "extra": "mean: 1.2089074380165374 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.63129383813836,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021619710324518",
            "extra": "mean: 39.01480769230773 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.186280393254247,
            "unit": "iter/sec",
            "range": "stddev: 0.00016128316536521362",
            "extra": "mean: 36.78325925925971 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.95877572285445,
            "unit": "iter/sec",
            "range": "stddev: 0.00002125376347939287",
            "extra": "mean: 3.1750186915888396 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.0458161468705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001966048312720383",
            "extra": "mean: 1.9045956928838206 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.1805573492686,
            "unit": "iter/sec",
            "range": "stddev: 0.000021261746220114087",
            "extra": "mean: 856.0320523302589 usec\nrounds: 1223"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1061.035173899027,
            "unit": "iter/sec",
            "range": "stddev: 0.000016559370777381568",
            "extra": "mean: 942.4758241758011 usec\nrounds: 1092"
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
          "id": "a33d9177ec2d461e22ad89b09cd56d9f33f2c259",
          "message": "Merge pull request #821 from TeoZosa/fix/use-directory-owner-agnostic-method-to-infer-git-repo-root\n\n🐛 Infer git project root with invoking `git`",
          "timestamp": "2023-02-12T19:34:09+09:00",
          "tree_id": "6c77dc86ea1db8a7c75d9d48d716456414854ba7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a33d9177ec2d461e22ad89b09cd56d9f33f2c259"
        },
        "date": 1676198188672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.47300240640942,
            "unit": "iter/sec",
            "range": "stddev: 0.000014923114714102417",
            "extra": "mean: 4.619513698630123 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 285.8013309502798,
            "unit": "iter/sec",
            "range": "stddev: 0.000012874274428258217",
            "extra": "mean: 3.4989340206185657 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.4117431686572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153297207473549",
            "extra": "mean: 2.301963553530728 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.9051755663421,
            "unit": "iter/sec",
            "range": "stddev: 0.000008204692519935785",
            "extra": "mean: 1.1050881650380018 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.7234761795413,
            "unit": "iter/sec",
            "range": "stddev: 0.000030073678439360953",
            "extra": "mean: 4.932827804878176 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.7643267766591,
            "unit": "iter/sec",
            "range": "stddev: 0.000010984443269914101",
            "extra": "mean: 3.7769438661710115 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.7139524160167,
            "unit": "iter/sec",
            "range": "stddev: 0.000011103996747612262",
            "extra": "mean: 2.371275586854451 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.1884236591359,
            "unit": "iter/sec",
            "range": "stddev: 0.000008791863331736002",
            "extra": "mean: 1.208914403778063 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.09729331922312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003532362656924324",
            "extra": "mean: 38.318150000000415 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.303496007887574,
            "unit": "iter/sec",
            "range": "stddev: 0.00011692050633456199",
            "extra": "mean: 36.625346428571454 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.7219817271025,
            "unit": "iter/sec",
            "range": "stddev: 0.000012564895503207819",
            "extra": "mean: 3.177407547170018 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.5669117143833,
            "unit": "iter/sec",
            "range": "stddev: 0.00001332346412549107",
            "extra": "mean: 1.8883355018588097 msec\nrounds: 538"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1173.6833015693728,
            "unit": "iter/sec",
            "range": "stddev: 0.000015700515940870243",
            "extra": "mean: 852.0185970635051 usec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1069.248594767711,
            "unit": "iter/sec",
            "range": "stddev: 0.00001512654839181759",
            "extra": "mean: 935.236206896531 usec\nrounds: 1102"
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
          "id": "a7422e7d85a3118e0c7d89c7d25ca52e4bae9d5c",
          "message": "Merge pull request #813 from TeoZosa/dependabot/pip/mypy-1.0.0\n\n⬆️ Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-12T19:36:56+09:00",
          "tree_id": "0aa558ae87162e170880e6dda9b80f6089deab77",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a7422e7d85a3118e0c7d89c7d25ca52e4bae9d5c"
        },
        "date": 1676198410716,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.01588521611777,
            "unit": "iter/sec",
            "range": "stddev: 0.000012774775720357462",
            "extra": "mean: 4.738979716981128 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.08695435138884,
            "unit": "iter/sec",
            "range": "stddev: 0.000013497232218050024",
            "extra": "mean: 3.595997526501752 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.80992882966046,
            "unit": "iter/sec",
            "range": "stddev: 0.000011128800989777536",
            "extra": "mean: 2.305157013574623 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.287469475807,
            "unit": "iter/sec",
            "range": "stddev: 0.000005763961596963075",
            "extra": "mean: 1.1119914754098577 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.58870947723048,
            "unit": "iter/sec",
            "range": "stddev: 0.000015272355259707007",
            "extra": "mean: 5.035532999999965 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.35670657510866,
            "unit": "iter/sec",
            "range": "stddev: 0.00001261249545215158",
            "extra": "mean: 3.840884351145056 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.902351119598,
            "unit": "iter/sec",
            "range": "stddev: 0.000010926784679422228",
            "extra": "mean: 2.381506074766361 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.0414268542637,
            "unit": "iter/sec",
            "range": "stddev: 0.000005850072473012551",
            "extra": "mean: 1.1946840000000487 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.193574261522116,
            "unit": "iter/sec",
            "range": "stddev: 0.00004636980678786801",
            "extra": "mean: 35.46907500000009 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.2821109825188,
            "unit": "iter/sec",
            "range": "stddev: 0.000049944712075922175",
            "extra": "mean: 34.15054333333387 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.66169326546674,
            "unit": "iter/sec",
            "range": "stddev: 0.000012224749087831691",
            "extra": "mean: 3.148003115264861 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.1062400022159,
            "unit": "iter/sec",
            "range": "stddev: 0.000009410700303738672",
            "extra": "mean: 1.7602341421141572 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1191.1749707334714,
            "unit": "iter/sec",
            "range": "stddev: 0.000015163317033585611",
            "extra": "mean: 839.5072298944004 usec\nrounds: 1231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.7599921175467,
            "unit": "iter/sec",
            "range": "stddev: 0.000014688145062547007",
            "extra": "mean: 913.4422222223735 usec\nrounds: 1125"
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
          "id": "a85d8a7029ba6fd53dd7ce2b5284f7e37b1f3cc6",
          "message": "Merge pull request #815 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.5",
          "timestamp": "2023-02-12T12:44:32Z",
          "tree_id": "96805a5b8d936f6ec0eb0fdc6f26c95796e2a578",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a85d8a7029ba6fd53dd7ce2b5284f7e37b1f3cc6"
        },
        "date": 1676206017665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.52474716472895,
            "unit": "iter/sec",
            "range": "stddev: 0.00005096085810389806",
            "extra": "mean: 4.597178082191778 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.5931848371916,
            "unit": "iter/sec",
            "range": "stddev: 0.00003158315959387788",
            "extra": "mean: 3.513787586206866 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.142783397241,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574468419340618",
            "extra": "mean: 2.308707517084238 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.5489098013272,
            "unit": "iter/sec",
            "range": "stddev: 0.000007562298616856938",
            "extra": "mean: 1.1067469498910474 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.45642075851316,
            "unit": "iter/sec",
            "range": "stddev: 0.000032313097458649516",
            "extra": "mean: 4.963852709359436 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.9882495509011,
            "unit": "iter/sec",
            "range": "stddev: 0.000009190030556669667",
            "extra": "mean: 3.773752238806015 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.1349497714858,
            "unit": "iter/sec",
            "range": "stddev: 0.000014214395803461286",
            "extra": "mean: 2.3745357647058625 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.3511690925067,
            "unit": "iter/sec",
            "range": "stddev: 0.00000688988836915637",
            "extra": "mean: 1.1985361045129996 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.84400301341077,
            "unit": "iter/sec",
            "range": "stddev: 0.00010873372055002187",
            "extra": "mean: 38.69369615384613 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.217481088224822,
            "unit": "iter/sec",
            "range": "stddev: 0.00018954223398937918",
            "extra": "mean: 36.74109285714294 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.3076234781629,
            "unit": "iter/sec",
            "range": "stddev: 0.000011552448032436486",
            "extra": "mean: 3.1715059374999743 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 531.6062994366556,
            "unit": "iter/sec",
            "range": "stddev: 0.000010601693901231768",
            "extra": "mean: 1.881091328412967 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.3937379642168,
            "unit": "iter/sec",
            "range": "stddev: 0.000015168438919532157",
            "extra": "mean: 855.1439669421248 usec\nrounds: 1210"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.9709268994734,
            "unit": "iter/sec",
            "range": "stddev: 0.000011455236469588742",
            "extra": "mean: 946.0998165137877 usec\nrounds: 1090"
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
          "id": "2935be47c51599dad527b1c7160324c45e9f48dd",
          "message": "Merge pull request #817 from TeoZosa/dependabot/pip/pytest-xdist-3.2.0",
          "timestamp": "2023-02-12T12:45:27Z",
          "tree_id": "fb2788308bac6dcf5fb608c7dc81dda03bf68288",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2935be47c51599dad527b1c7160324c45e9f48dd"
        },
        "date": 1676206307141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.33200836316607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002253291699909661",
            "extra": "mean: 5.281727102803748 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.94879286793272,
            "unit": "iter/sec",
            "range": "stddev: 0.0001792178307475962",
            "extra": "mean: 3.9070315151515134 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 377.87442202389667,
            "unit": "iter/sec",
            "range": "stddev: 0.00004369992857911675",
            "extra": "mean: 2.6463818181818093 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 815.509840413088,
            "unit": "iter/sec",
            "range": "stddev: 0.00007809310287386889",
            "extra": "mean: 1.2262267730496796 msec\nrounds: 1128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.30698568568826,
            "unit": "iter/sec",
            "range": "stddev: 0.00023726509908727803",
            "extra": "mean: 5.7042792452830255 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.73500638549623,
            "unit": "iter/sec",
            "range": "stddev: 0.00015977800214134346",
            "extra": "mean: 4.315273793103483 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 377.31474434421494,
            "unit": "iter/sec",
            "range": "stddev: 0.00014033043617982688",
            "extra": "mean: 2.650307243460713 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.8036941033179,
            "unit": "iter/sec",
            "range": "stddev: 0.00007280016111019899",
            "extra": "mean: 1.3498852772466503 msec\nrounds: 1046"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.129681183491513,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284360775421888",
            "extra": "mean: 43.23449130434777 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.357722002133677,
            "unit": "iter/sec",
            "range": "stddev: 0.0009654281919129167",
            "extra": "mean: 41.054742307692095 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 280.3121163123866,
            "unit": "iter/sec",
            "range": "stddev: 0.00017217354980824783",
            "extra": "mean: 3.5674519287834703 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 461.2347539437202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000841373258811307",
            "extra": "mean: 2.1680933438984082 msec\nrounds: 631"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1077.9281235555318,
            "unit": "iter/sec",
            "range": "stddev: 0.00006849077394894369",
            "extra": "mean: 927.7056402439089 usec\nrounds: 1312"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 943.0374348909274,
            "unit": "iter/sec",
            "range": "stddev: 0.000051441836229361436",
            "extra": "mean: 1.060403291535994 msec\nrounds: 1276"
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
          "id": "ec3a79ca66b815990daae4b15f077c3231f95490",
          "message": "Merge pull request #814 from TeoZosa/dependabot/pip/sentry-sdk-1.15.0",
          "timestamp": "2023-02-12T13:39:16Z",
          "tree_id": "7b6f7689d9eaeb83470c3ca09713669847367ed8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ec3a79ca66b815990daae4b15f077c3231f95490"
        },
        "date": 1676209300020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.8745512039812,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902399397181696",
            "extra": "mean: 4.610960550458733 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.44823373407746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003773141655281994",
            "extra": "mean: 3.540471777003538 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.23497555178096,
            "unit": "iter/sec",
            "range": "stddev: 0.000012181775578011064",
            "extra": "mean: 2.3243112643677777 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.5720686014665,
            "unit": "iter/sec",
            "range": "stddev: 0.000009424839022069044",
            "extra": "mean: 1.127939888268149 msec\nrounds: 895"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.43354871765112,
            "unit": "iter/sec",
            "range": "stddev: 0.00001434407952292464",
            "extra": "mean: 4.964416336633663 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.73384617284046,
            "unit": "iter/sec",
            "range": "stddev: 0.000017042501263745668",
            "extra": "mean: 3.7773787313433136 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.3015800044161,
            "unit": "iter/sec",
            "range": "stddev: 0.000016403497524787416",
            "extra": "mean: 2.3963484633569263 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.0859476972607,
            "unit": "iter/sec",
            "range": "stddev: 0.000008547527969031875",
            "extra": "mean: 1.2253611311672346 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.59513361693396,
            "unit": "iter/sec",
            "range": "stddev: 0.000055721511521010794",
            "extra": "mean: 39.06992692307695 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.777341053671034,
            "unit": "iter/sec",
            "range": "stddev: 0.00017676558994678688",
            "extra": "mean: 37.34500740740669 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.92455915387205,
            "unit": "iter/sec",
            "range": "stddev: 0.000011248338193639847",
            "extra": "mean: 3.1956584126983705 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 521.3283801235647,
            "unit": "iter/sec",
            "range": "stddev: 0.00001361288340509452",
            "extra": "mean: 1.918176792452736 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1154.6454867289724,
            "unit": "iter/sec",
            "range": "stddev: 0.00001722127846613274",
            "extra": "mean: 866.0666944907289 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.021332638951,
            "unit": "iter/sec",
            "range": "stddev: 0.000013697149389971545",
            "extra": "mean: 951.4554737810656 usec\nrounds: 1087"
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
          "id": "95c5ca1918d97c251000ab9f6124dd36c337e210",
          "message": "Merge pull request #822 from TeoZosa/test/reproduce-previous-error-in-test-which-infers-git-repo-root-with-bad-ownership\n\n✅ Validate previous method to infer git repo root directory throws the expected error",
          "timestamp": "2023-02-13T13:13:30+09:00",
          "tree_id": "140290f18c8d1e37afcefde55ebc11f2f5298f19",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/95c5ca1918d97c251000ab9f6124dd36c337e210"
        },
        "date": 1676261741947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.4939017050778,
            "unit": "iter/sec",
            "range": "stddev: 0.000017797219844484854",
            "extra": "mean: 4.750731455399103 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.1212273969953,
            "unit": "iter/sec",
            "range": "stddev: 0.000011954513397696239",
            "extra": "mean: 3.582672695035465 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.4119656843954,
            "unit": "iter/sec",
            "range": "stddev: 0.000013422450130084088",
            "extra": "mean: 2.334201843317992 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.7303198872754,
            "unit": "iter/sec",
            "range": "stddev: 0.000005960184047048678",
            "extra": "mean: 1.1040814004376678 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.7059276462042,
            "unit": "iter/sec",
            "range": "stddev: 0.000014200305883466794",
            "extra": "mean: 5.032562499999997 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.8974980020328,
            "unit": "iter/sec",
            "range": "stddev: 0.000012682178731795108",
            "extra": "mean: 3.8775095057033773 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.42077735476624,
            "unit": "iter/sec",
            "range": "stddev: 0.000011119289318285253",
            "extra": "mean: 2.3899386792452004 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 836.7530351045799,
            "unit": "iter/sec",
            "range": "stddev: 0.000006550981136976306",
            "extra": "mean: 1.1950957547169423 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.08609229872346,
            "unit": "iter/sec",
            "range": "stddev: 0.00005672958819886705",
            "extra": "mean: 35.604810714285485 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.03512088221911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000484276752400485",
            "extra": "mean: 34.441048275862094 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.8401086578667,
            "unit": "iter/sec",
            "range": "stddev: 0.00001188920059114366",
            "extra": "mean: 3.1462360248449075 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.8531790833824,
            "unit": "iter/sec",
            "range": "stddev: 0.000009358794741642986",
            "extra": "mean: 1.7703715532286701 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.2705503665818,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537577386418245",
            "extra": "mean: 836.6306688417166 usec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1096.2474189679272,
            "unit": "iter/sec",
            "range": "stddev: 0.000014647027133376941",
            "extra": "mean: 912.2028318583954 usec\nrounds: 1130"
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
          "id": "4b88375791c3c73d62a1875c3feb84a8ede25f53",
          "message": ":bookmark: Bump version number to `0.20.1`",
          "timestamp": "2023-02-13T14:16:27+09:00",
          "tree_id": "c222d2ff61556b747c49437af1f78e862accfbda",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4b88375791c3c73d62a1875c3feb84a8ede25f53"
        },
        "date": 1676265547994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.40513657219626,
            "unit": "iter/sec",
            "range": "stddev: 0.00004267403704665689",
            "extra": "mean: 4.752735680751169 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.2046593831401,
            "unit": "iter/sec",
            "range": "stddev: 0.000017910494440204528",
            "extra": "mean: 3.5816021201413566 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.3645140876006,
            "unit": "iter/sec",
            "range": "stddev: 0.000013777857945025528",
            "extra": "mean: 2.3344604118993386 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 897.5991145002538,
            "unit": "iter/sec",
            "range": "stddev: 0.000006867710694777422",
            "extra": "mean: 1.1140830954994412 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.05058704942866,
            "unit": "iter/sec",
            "range": "stddev: 0.000013494967436240055",
            "extra": "mean: 4.998735643564591 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.233252499456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001802900355878094",
            "extra": "mean: 3.8279965909090476 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.98483511680047,
            "unit": "iter/sec",
            "range": "stddev: 0.000012201462735862103",
            "extra": "mean: 2.3924312941175554 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.186175022568,
            "unit": "iter/sec",
            "range": "stddev: 0.00000764283806731293",
            "extra": "mean: 1.2133180952381515 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.124826417087267,
            "unit": "iter/sec",
            "range": "stddev: 0.00007610985055745173",
            "extra": "mean: 35.555774999999606 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.194899308805727,
            "unit": "iter/sec",
            "range": "stddev: 0.0001274500476862287",
            "extra": "mean: 34.252558620689655 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.2512612033422,
            "unit": "iter/sec",
            "range": "stddev: 0.000014874260305139997",
            "extra": "mean: 3.1720729559745795 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.953359987133,
            "unit": "iter/sec",
            "range": "stddev: 0.000010040595641549368",
            "extra": "mean: 1.782679401408591 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1205.1602274151714,
            "unit": "iter/sec",
            "range": "stddev: 0.000014722235821078733",
            "extra": "mean: 829.7651857834711 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1087.9613878242997,
            "unit": "iter/sec",
            "range": "stddev: 0.000015811270874181803",
            "extra": "mean: 919.1502669040448 usec\nrounds: 1124"
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
          "id": "ac53cad7dad459349c8ce97802077bca85a99454",
          "message": "Merge pull request #824 from TeoZosa/dependabot/pip/pytest-forked-1.6.0",
          "timestamp": "2023-02-13T16:45:44Z",
          "tree_id": "9236930651daf64db26e4f6dc748617be62f5989",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ac53cad7dad459349c8ce97802077bca85a99454"
        },
        "date": 1676306911478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.22173434914086,
            "unit": "iter/sec",
            "range": "stddev: 0.00004278081311786546",
            "extra": "mean: 4.756882075471693 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.97772702946247,
            "unit": "iter/sec",
            "range": "stddev: 0.000014145431509448522",
            "extra": "mean: 3.584515547703173 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.1677869383354,
            "unit": "iter/sec",
            "range": "stddev: 0.000012147704206133037",
            "extra": "mean: 2.3139160997732735 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.4713597339046,
            "unit": "iter/sec",
            "range": "stddev: 0.000006595531380983228",
            "extra": "mean: 1.103178814489573 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.3124080248706,
            "unit": "iter/sec",
            "range": "stddev: 0.000015580718918975058",
            "extra": "mean: 4.992201980198057 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.4335411662383,
            "unit": "iter/sec",
            "range": "stddev: 0.00001391119554770695",
            "extra": "mean: 3.8545517110265473 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.35120099019923,
            "unit": "iter/sec",
            "range": "stddev: 0.000012735460787595352",
            "extra": "mean: 2.3789631090487013 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.7133717731385,
            "unit": "iter/sec",
            "range": "stddev: 0.000006073031832587852",
            "extra": "mean: 1.2081476923077692 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.17683783424773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000555504203973835",
            "extra": "mean: 35.490142857142864 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.235556727665827,
            "unit": "iter/sec",
            "range": "stddev: 0.00006767485635096248",
            "extra": "mean: 34.204924137931414 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.79274032679643,
            "unit": "iter/sec",
            "range": "stddev: 0.000012726577999496445",
            "extra": "mean: 3.14670498442371 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.5269331920082,
            "unit": "iter/sec",
            "range": "stddev: 0.000010971860834065489",
            "extra": "mean: 1.7651411458333586 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1201.321648517186,
            "unit": "iter/sec",
            "range": "stddev: 0.000015279734490235282",
            "extra": "mean: 832.4165316044366 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.938928783941,
            "unit": "iter/sec",
            "range": "stddev: 0.000014135255004849506",
            "extra": "mean: 907.4913081649297 usec\nrounds: 1139"
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
          "id": "b6b30188b0e0c5bea9fc46acab433d066968892c",
          "message": "Merge pull request #825 from TeoZosa/dependabot/pip/gitpython-3.1.31",
          "timestamp": "2023-02-17T16:07:34Z",
          "tree_id": "85e9b1980ecc13057d9e89de32a2e4d0dd709c88",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b6b30188b0e0c5bea9fc46acab433d066968892c"
        },
        "date": 1676650199316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.20031765582377,
            "unit": "iter/sec",
            "range": "stddev: 0.000051875135965867966",
            "extra": "mean: 4.582944748858435 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.5147212913328,
            "unit": "iter/sec",
            "range": "stddev: 0.000012190160819487156",
            "extra": "mean: 3.466027645051194 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.49027230590855,
            "unit": "iter/sec",
            "range": "stddev: 0.000014049169857679541",
            "extra": "mean: 2.301547500000039 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.2085754905861,
            "unit": "iter/sec",
            "range": "stddev: 0.000008552446979481999",
            "extra": "mean: 1.1059395222583919 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.14597275661282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000240841624810639",
            "extra": "mean: 4.874577777777826 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.84390372864686,
            "unit": "iter/sec",
            "range": "stddev: 0.000013056036910950914",
            "extra": "mean: 3.747509259259295 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.51074199346704,
            "unit": "iter/sec",
            "range": "stddev: 0.000011469344282558422",
            "extra": "mean: 2.372418779342755 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 814.0560211195833,
            "unit": "iter/sec",
            "range": "stddev: 0.00008071887728505697",
            "extra": "mean: 1.2284166863905572 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.652369351496183,
            "unit": "iter/sec",
            "range": "stddev: 0.00009150198787243537",
            "extra": "mean: 38.98275384615397 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.905797422066183,
            "unit": "iter/sec",
            "range": "stddev: 0.00033490152896347537",
            "extra": "mean: 37.166711111110665 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.84047767955497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000167014672681431",
            "extra": "mean: 3.1762116719242224 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.9137812482946,
            "unit": "iter/sec",
            "range": "stddev: 0.000011977087926478783",
            "extra": "mean: 1.8870994402982761 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1172.2126416793367,
            "unit": "iter/sec",
            "range": "stddev: 0.000015939751996417835",
            "extra": "mean: 853.0875409835018 usec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1065.0659342682497,
            "unit": "iter/sec",
            "range": "stddev: 0.000016862668828422698",
            "extra": "mean: 938.9090081892881 usec\nrounds: 1099"
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
          "id": "4753a4818c36756ea82610a1c4214538c98de2fa",
          "message": "Merge pull request #827 from TeoZosa/dependabot/pip/mypy-1.0.1",
          "timestamp": "2023-02-20T16:10:00Z",
          "tree_id": "0c7f5f11dd69a5b8f17ef1f9bef9dc11a383cc90",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4753a4818c36756ea82610a1c4214538c98de2fa"
        },
        "date": 1676909549674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.19861927422423,
            "unit": "iter/sec",
            "range": "stddev: 0.00001387097309198651",
            "extra": "mean: 4.734879439252306 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.8776243077863,
            "unit": "iter/sec",
            "range": "stddev: 0.000014188712983388272",
            "extra": "mean: 3.5476388111888073 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.1268795069468,
            "unit": "iter/sec",
            "range": "stddev: 0.00001682680391623672",
            "extra": "mean: 2.3141351473923395 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.6437943551296,
            "unit": "iter/sec",
            "range": "stddev: 0.000006127180133334716",
            "extra": "mean: 1.0933218004338519 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.366977548041,
            "unit": "iter/sec",
            "range": "stddev: 0.000013406654854157762",
            "extra": "mean: 4.990842364532024 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.3753371917571,
            "unit": "iter/sec",
            "range": "stddev: 0.00001314361822165998",
            "extra": "mean: 3.811333834586555 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.8213182594649,
            "unit": "iter/sec",
            "range": "stddev: 0.000012949896648754601",
            "extra": "mean: 2.370672027972028 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.7403691477838,
            "unit": "iter/sec",
            "range": "stddev: 0.000006442430027970148",
            "extra": "mean: 1.185198713450259 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.32691842589866,
            "unit": "iter/sec",
            "range": "stddev: 0.00005362183287230148",
            "extra": "mean: 35.30211034482743 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.463374717263036,
            "unit": "iter/sec",
            "range": "stddev: 0.000059238510791599946",
            "extra": "mean: 33.94044333333225 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.543164466767,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144261743928424",
            "extra": "mean: 3.139291975308822 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.4374525170634,
            "unit": "iter/sec",
            "range": "stddev: 0.000011559471913256276",
            "extra": "mean: 1.7685422066551608 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1211.4506002083212,
            "unit": "iter/sec",
            "range": "stddev: 0.00001568996694725185",
            "extra": "mean: 825.4566878979958 usec\nrounds: 1256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.3565586040986,
            "unit": "iter/sec",
            "range": "stddev: 0.000013711983648299077",
            "extra": "mean: 911.2808340727995 usec\nrounds: 1127"
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
          "id": "45d053718c2c90b01d082dbeddde9e85ce480461",
          "message": "Merge pull request #828 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.23.0",
          "timestamp": "2023-02-21T16:38:05Z",
          "tree_id": "8871c1becb96707ca71c7dc0345d6c59957fe205",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/45d053718c2c90b01d082dbeddde9e85ce480461"
        },
        "date": 1676997640457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.95675383711816,
            "unit": "iter/sec",
            "range": "stddev: 0.00007026540305001739",
            "extra": "mean: 4.785679245282974 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.1828306014521,
            "unit": "iter/sec",
            "range": "stddev: 0.000014285303824615607",
            "extra": "mean: 3.5564049122807133 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.21304766100604,
            "unit": "iter/sec",
            "range": "stddev: 0.000012164424339579646",
            "extra": "mean: 2.303016930022584 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.7400865442609,
            "unit": "iter/sec",
            "range": "stddev: 0.000008939100256763324",
            "extra": "mean: 1.1163952747252508 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.9647050707011,
            "unit": "iter/sec",
            "range": "stddev: 0.00001670331775026121",
            "extra": "mean: 5.0514054999999125 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.8845718736417,
            "unit": "iter/sec",
            "range": "stddev: 0.00006728005770123162",
            "extra": "mean: 3.847862121212064 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.40646896081404,
            "unit": "iter/sec",
            "range": "stddev: 0.000013777293081025503",
            "extra": "mean: 2.3843218309859497 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.0482577286917,
            "unit": "iter/sec",
            "range": "stddev: 0.000006847367086514204",
            "extra": "mean: 1.204749230769253 msec\nrounds: 845"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.006354641868374,
            "unit": "iter/sec",
            "range": "stddev: 0.00010895285780976275",
            "extra": "mean: 35.706182142856974 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.16227053818331,
            "unit": "iter/sec",
            "range": "stddev: 0.00005346464832717783",
            "extra": "mean: 34.29088275861992 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.9960188087225,
            "unit": "iter/sec",
            "range": "stddev: 0.000015421068812465658",
            "extra": "mean: 3.1446934579439154 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.24189259166,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135902034756455",
            "extra": "mean: 1.801016842105297 msec\nrounds: 570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1167.8042572013944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000739140232875187",
            "extra": "mean: 856.3078904991047 usec\nrounds: 1242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1095.1575621599118,
            "unit": "iter/sec",
            "range": "stddev: 0.000024218635311347757",
            "extra": "mean: 913.1106194690028 usec\nrounds: 1130"
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
          "id": "bb3a6b22faba4709776404069d0634fb9dbaf89b",
          "message": "Merge pull request #830 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.4.6",
          "timestamp": "2023-02-22T15:15:39Z",
          "tree_id": "9dad8124aaf595607b4e624dc603aad5319936e9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bb3a6b22faba4709776404069d0634fb9dbaf89b"
        },
        "date": 1677079061176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.1632179048189,
            "unit": "iter/sec",
            "range": "stddev: 0.000019769630483003506",
            "extra": "mean: 4.626133944954134 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.47821442044705,
            "unit": "iter/sec",
            "range": "stddev: 0.00001689880029839237",
            "extra": "mean: 3.5152076655052444 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.56463759360105,
            "unit": "iter/sec",
            "range": "stddev: 0.000011214876204245005",
            "extra": "mean: 2.3171499999999705 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.2814206303295,
            "unit": "iter/sec",
            "range": "stddev: 0.000009203593567326244",
            "extra": "mean: 1.1207226519337088 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.15936217452392,
            "unit": "iter/sec",
            "range": "stddev: 0.00001975439783180329",
            "extra": "mean: 4.9960191176472435 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.75653335230874,
            "unit": "iter/sec",
            "range": "stddev: 0.000019390131178416686",
            "extra": "mean: 3.8058045112780574 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.57675216819456,
            "unit": "iter/sec",
            "range": "stddev: 0.000010145410693280142",
            "extra": "mean: 2.389048113207623 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.0127487245136,
            "unit": "iter/sec",
            "range": "stddev: 0.000007740263556901474",
            "extra": "mean: 1.2165261445782474 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.130802960378624,
            "unit": "iter/sec",
            "range": "stddev: 0.0001891526966809573",
            "extra": "mean: 38.26901153846175 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.326713502050954,
            "unit": "iter/sec",
            "range": "stddev: 0.00004555632132533757",
            "extra": "mean: 36.59422857142872 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.6011523080468,
            "unit": "iter/sec",
            "range": "stddev: 0.000014780611736573363",
            "extra": "mean: 3.1786278996868833 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.6342051138589,
            "unit": "iter/sec",
            "range": "stddev: 0.000010706981190381767",
            "extra": "mean: 1.8916672253257183 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.2742960412013,
            "unit": "iter/sec",
            "range": "stddev: 0.000016231793810873348",
            "extra": "mean: 859.6424793388383 usec\nrounds: 1210"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1056.2311291423805,
            "unit": "iter/sec",
            "range": "stddev: 0.000012694734264248408",
            "extra": "mean: 946.7624768945809 usec\nrounds: 1082"
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
          "id": "9f43ef5c41d0895668b8bbf50b4f3ff68a95211e",
          "message": "Merge pull request #831 from TeoZosa/dependabot/pip/markdown-it-py-2.2.0",
          "timestamp": "2023-02-23T20:49:01Z",
          "tree_id": "ca521ec9cf81ecfae165a5dc2ea69ecbb494d56e",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f43ef5c41d0895668b8bbf50b4f3ff68a95211e"
        },
        "date": 1677185494086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.34788221497766,
            "unit": "iter/sec",
            "range": "stddev: 0.00005250547922995343",
            "extra": "mean: 4.579847488584456 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.79817726453376,
            "unit": "iter/sec",
            "range": "stddev: 0.00002110364897915636",
            "extra": "mean: 3.4867725085910535 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.1301637205958,
            "unit": "iter/sec",
            "range": "stddev: 0.000010972582410654676",
            "extra": "mean: 2.30345662100456 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 894.4060839249494,
            "unit": "iter/sec",
            "range": "stddev: 0.000011179064984467698",
            "extra": "mean: 1.118060373216235 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.70990511792505,
            "unit": "iter/sec",
            "range": "stddev: 0.000016069487469873506",
            "extra": "mean: 4.933158048780384 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.045222846669,
            "unit": "iter/sec",
            "range": "stddev: 0.000020654040649674713",
            "extra": "mean: 3.7729410447760037 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.0930095837231,
            "unit": "iter/sec",
            "range": "stddev: 0.000011379414780555723",
            "extra": "mean: 2.3918122931441888 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.7532307790874,
            "unit": "iter/sec",
            "range": "stddev: 0.000009281943832783794",
            "extra": "mean: 1.2154312649165449 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.894322679711816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005063327336691706",
            "extra": "mean: 38.61850384615387 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.243144578882088,
            "unit": "iter/sec",
            "range": "stddev: 0.00008555645765883816",
            "extra": "mean: 36.70648214285675 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.67535367932095,
            "unit": "iter/sec",
            "range": "stddev: 0.00001276484470024949",
            "extra": "mean: 3.1778783699058906 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.184684123663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011306602231957355",
            "extra": "mean: 1.9004734082396468 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1177.1076796580921,
            "unit": "iter/sec",
            "range": "stddev: 0.000014186086689376419",
            "extra": "mean: 849.5399505765389 usec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.9594979367942,
            "unit": "iter/sec",
            "range": "stddev: 0.000017309530721414508",
            "extra": "mean: 929.4030136985174 usec\nrounds: 1095"
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
          "id": "b7a8434b0b978bd2f41e7f345da544560088f42e",
          "message": "Merge pull request #829 from TeoZosa/dependabot/pip/types-emoji-2.1.0.2\n\n⬆️ Bump types-emoji from 2.1.0.1 to 2.1.0.2",
          "timestamp": "2023-02-25T19:49:25+09:00",
          "tree_id": "42c392e3e52bab420ad3506c3413257925b09f45",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b7a8434b0b978bd2f41e7f345da544560088f42e"
        },
        "date": 1677322342043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.59416642825525,
            "unit": "iter/sec",
            "range": "stddev: 0.0012054165027033002",
            "extra": "mean: 7.962153246753246 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.84141523650015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406806990810163",
            "extra": "mean: 5.591546000000047 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.9925841809102,
            "unit": "iter/sec",
            "range": "stddev: 0.000564209388006995",
            "extra": "mean: 3.831526490066237 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 588.6506623339371,
            "unit": "iter/sec",
            "range": "stddev: 0.0002753498890531038",
            "extra": "mean: 1.6988004329004007 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.86287597810298,
            "unit": "iter/sec",
            "range": "stddev: 0.0011641934577409526",
            "extra": "mean: 8.205944525547599 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.96854023330135,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494279687635056",
            "extra": "mean: 6.061761827956911 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.9144813004811,
            "unit": "iter/sec",
            "range": "stddev: 0.000481378392761517",
            "extra": "mean: 3.8923457912457016 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.3307449296914,
            "unit": "iter/sec",
            "range": "stddev: 0.0004145854202976632",
            "extra": "mean: 1.8610511485451067 msec\nrounds: 653"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.49509378114838,
            "unit": "iter/sec",
            "range": "stddev: 0.0023942620931248185",
            "extra": "mean: 51.29495714285781 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.65781623219768,
            "unit": "iter/sec",
            "range": "stddev: 0.0014954603518599714",
            "extra": "mean: 48.40782727272887 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.58949372938832,
            "unit": "iter/sec",
            "range": "stddev: 0.000667377935594929",
            "extra": "mean: 5.274553881278653 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.4431892502419,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345884233447118",
            "extra": "mean: 2.990044444444541 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 661.5041745211888,
            "unit": "iter/sec",
            "range": "stddev: 0.00030283814116452597",
            "extra": "mean: 1.5117062575210833 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 627.2047828607335,
            "unit": "iter/sec",
            "range": "stddev: 0.00031046300584124727",
            "extra": "mean: 1.594375596816906 msec\nrounds: 754"
          }
        ]
      }
    ]
  }
}