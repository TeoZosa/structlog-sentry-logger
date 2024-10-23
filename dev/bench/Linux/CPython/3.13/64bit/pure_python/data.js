window.BENCHMARK_DATA = {
  "lastUpdate": 1729695144771,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728978052518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.63722458227153,
            "unit": "iter/sec",
            "range": "stddev: 0.00018405509595735857",
            "extra": "mean: 4.26189834873949 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 348.7268321769596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395080389179982",
            "extra": "mean: 2.867574008450704 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.57003190988405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002735751671808651",
            "extra": "mean: 2.3225025568182005 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1066.3423573334464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003769338711160572",
            "extra": "mean: 937.785124189059 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.7587653762463,
            "unit": "iter/sec",
            "range": "stddev: 0.00011400669723118782",
            "extra": "mean: 4.613423582959685 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.53798581198504,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334747782380738",
            "extra": "mean: 3.2306212672954624 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.7739619322988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002890235810301627",
            "extra": "mean: 2.393638883990698 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.2409504010361,
            "unit": "iter/sec",
            "range": "stddev: 0.000020395603909661554",
            "extra": "mean: 1.0232890870870934 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.06826362367667,
            "unit": "iter/sec",
            "range": "stddev: 0.0008182445319832142",
            "extra": "mean: 99.32199209090892 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.166697159364215,
            "unit": "iter/sec",
            "range": "stddev: 0.000627573880300176",
            "extra": "mean: 98.36036072727242 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.8076987908822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000857688522721753",
            "extra": "mean: 3.032069911242611 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.9465437329367,
            "unit": "iter/sec",
            "range": "stddev: 0.00005553158534818521",
            "extra": "mean: 1.4642434450785444 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 868.2361040885557,
            "unit": "iter/sec",
            "range": "stddev: 0.00004131958001778064",
            "extra": "mean: 1.151760443145549 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 796.5673909133486,
            "unit": "iter/sec",
            "range": "stddev: 0.00006626247963505441",
            "extra": "mean: 1.2553865641592412 msec\nrounds: 904"
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
          "id": "b69d50658b3d5819eb5e80ce41575370486e6d52",
          "message": ":bookmark: Bump version number to `1.6.0`",
          "timestamp": "2024-10-15T16:54:23+09:00",
          "tree_id": "1a2e1b792e090b427508e9532082016460daed16",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b69d50658b3d5819eb5e80ce41575370486e6d52"
        },
        "date": 1728979032114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.114959238563,
            "unit": "iter/sec",
            "range": "stddev: 0.00008784711989768794",
            "extra": "mean: 4.289728995798289 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.73910170126754,
            "unit": "iter/sec",
            "range": "stddev: 0.00005087823014813569",
            "extra": "mean: 2.926208897435897 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.5792795656464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003636148935786686",
            "extra": "mean: 2.3387475675057114 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1062.250566848532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003774589696876867",
            "extra": "mean: 941.3974736363607 usec\nrounds: 1100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.6127603132766,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833634155326911",
            "extra": "mean: 4.637944426605553 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.401981364628,
            "unit": "iter/sec",
            "range": "stddev: 0.00009305004475911487",
            "extra": "mean: 3.2743729936908035 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.257488315242,
            "unit": "iter/sec",
            "range": "stddev: 0.00005144659048568054",
            "extra": "mean: 2.419798862149541 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 977.4322517634105,
            "unit": "iter/sec",
            "range": "stddev: 0.000022747443135029096",
            "extra": "mean: 1.0230888107036313 msec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.97667834709225,
            "unit": "iter/sec",
            "range": "stddev: 0.00021886042719841155",
            "extra": "mean: 100.23376170000056 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.269621959885848,
            "unit": "iter/sec",
            "range": "stddev: 0.00028324350387949756",
            "extra": "mean: 97.37456781818241 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.1174484842481,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666089520608972",
            "extra": "mean: 3.020076424778237 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.6445263183089,
            "unit": "iter/sec",
            "range": "stddev: 0.000027740229513141977",
            "extra": "mean: 1.4648912595744041 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 847.9263784772008,
            "unit": "iter/sec",
            "range": "stddev: 0.000058891304889904375",
            "extra": "mean: 1.1793476714286324 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 808.2625782096343,
            "unit": "iter/sec",
            "range": "stddev: 0.000047804919497584056",
            "extra": "mean: 1.2372216986898978 msec\nrounds: 916"
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
          "id": "9f5020048a36caf9b2b676c6a1aaca33f71473ea",
          "message": "Merge pull request #1425 from TeoZosa/build/add-python-313-support\n\n[WIP]➕ Add Python 3.13 support",
          "timestamp": "2024-10-15T16:35:53+09:00",
          "tree_id": "22c189e4e0a9077558e411f3a2f6ab1636238eb9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9f5020048a36caf9b2b676c6a1aaca33f71473ea"
        },
        "date": 1728998988924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.25068138641473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007386697904696912",
            "extra": "mean: 4.45929525751078 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 325.31718081043414,
            "unit": "iter/sec",
            "range": "stddev: 0.00007229038323906876",
            "extra": "mean: 3.0739231094674673 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.6160294171469,
            "unit": "iter/sec",
            "range": "stddev: 0.00007351266776848643",
            "extra": "mean: 2.4593226229507574 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1006.03324229644,
            "unit": "iter/sec",
            "range": "stddev: 0.00004275915131589446",
            "extra": "mean: 994.002939423087 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.70463637900465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007538848465908369",
            "extra": "mean: 4.957744244019219 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.7561885516701,
            "unit": "iter/sec",
            "range": "stddev: 0.0001146936016362672",
            "extra": "mean: 3.4631292406779353 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.94191894882,
            "unit": "iter/sec",
            "range": "stddev: 0.00004979699028984953",
            "extra": "mean: 2.5777054532019443 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 931.3944339358765,
            "unit": "iter/sec",
            "range": "stddev: 0.000031182363929349846",
            "extra": "mean: 1.0736589822361413 msec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.533441959214166,
            "unit": "iter/sec",
            "range": "stddev: 0.001288730915259123",
            "extra": "mean: 104.89390969999981 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.7367746514507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009328477015774656",
            "extra": "mean: 102.7034141999998 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.62563483264796,
            "unit": "iter/sec",
            "range": "stddev: 0.000046170063724224573",
            "extra": "mean: 3.1189022066871064 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.3561624960402,
            "unit": "iter/sec",
            "range": "stddev: 0.00007473553327497418",
            "extra": "mean: 1.5120445785609316 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 827.9303308614683,
            "unit": "iter/sec",
            "range": "stddev: 0.000051390104361742515",
            "extra": "mean: 1.207831097285072 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 763.5578719023748,
            "unit": "iter/sec",
            "range": "stddev: 0.000054411452209507116",
            "extra": "mean: 1.309658425115229 msec\nrounds: 868"
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
          "id": "4734cd939b23a91ceab5b3cf32175604c419e991",
          "message": "Merge pull request #1467 from TeoZosa/dependabot/pip/poetry-1.8.4",
          "timestamp": "2024-10-15T13:36:38Z",
          "tree_id": "d9aea439ccd637790d941d8c840b3d29f66f354f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4734cd939b23a91ceab5b3cf32175604c419e991"
        },
        "date": 1728999992291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.3542698789776,
            "unit": "iter/sec",
            "range": "stddev: 0.00011609916190006234",
            "extra": "mean: 4.360067072340383 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.1065491139596,
            "unit": "iter/sec",
            "range": "stddev: 0.00007808824973955358",
            "extra": "mean: 2.975246994252832 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.31105671635834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467803176509817",
            "extra": "mean: 2.3623290347222254 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1042.9005601362476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003820938914473697",
            "extra": "mean: 958.8641891891947 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.25321879171912,
            "unit": "iter/sec",
            "range": "stddev: 0.000035631733702635",
            "extra": "mean: 4.711353757990755 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.08476602840176,
            "unit": "iter/sec",
            "range": "stddev: 0.00009113689002009639",
            "extra": "mean: 3.288556717460154 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.5488192824696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003118422951673409",
            "extra": "mean: 2.496574579326855 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 946.2368604576712,
            "unit": "iter/sec",
            "range": "stddev: 0.000022712115039926816",
            "extra": "mean: 1.0568178452869874 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.805962920151417,
            "unit": "iter/sec",
            "range": "stddev: 0.0042357375301158885",
            "extra": "mean: 101.97876620000095 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.933725291402595,
            "unit": "iter/sec",
            "range": "stddev: 0.003504826546089181",
            "extra": "mean: 100.66716872727258 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.0906785802194,
            "unit": "iter/sec",
            "range": "stddev: 0.00006063495172421651",
            "extra": "mean: 3.095106316265056 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 666.0290593845997,
            "unit": "iter/sec",
            "range": "stddev: 0.00004048985562927001",
            "extra": "mean: 1.5014359897809626 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 849.5161316321869,
            "unit": "iter/sec",
            "range": "stddev: 0.000042071019836801124",
            "extra": "mean: 1.1771406836956544 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.8226264996038,
            "unit": "iter/sec",
            "range": "stddev: 0.00003862080883266097",
            "extra": "mean: 1.2661070554940623 msec\nrounds: 901"
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
          "id": "7430b0444dce4357f96d7e491e2e86d86da49472",
          "message": "Merge pull request #1469 from TeoZosa/build/add-python-313-wheel-builds\n\n👷  Build Python 3.13 wheels in CI",
          "timestamp": "2024-10-15T23:44:30+09:00",
          "tree_id": "14888d016a4310bb7a2cb8635768a619e5713c21",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7430b0444dce4357f96d7e491e2e86d86da49472"
        },
        "date": 1729003741037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.09625278778793,
            "unit": "iter/sec",
            "range": "stddev: 0.00011276499266335247",
            "extra": "mean: 4.290073255319146 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.1931543715229,
            "unit": "iter/sec",
            "range": "stddev: 0.00005186799644848022",
            "extra": "mean: 2.9308911599999656 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.51193805793326,
            "unit": "iter/sec",
            "range": "stddev: 0.000056180399697557327",
            "extra": "mean: 2.366797029680339 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1059.3407658017268,
            "unit": "iter/sec",
            "range": "stddev: 0.000022114073112347298",
            "extra": "mean: 943.9833076216823 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.9433243429369,
            "unit": "iter/sec",
            "range": "stddev: 0.00005356213222462026",
            "extra": "mean: 4.652389196347052 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.32496729215103,
            "unit": "iter/sec",
            "range": "stddev: 0.0000452849456345275",
            "extra": "mean: 3.2645070000000063 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.270748195377,
            "unit": "iter/sec",
            "range": "stddev: 0.00004224349498923102",
            "extra": "mean: 2.4797236211031084 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 947.0042456086295,
            "unit": "iter/sec",
            "range": "stddev: 0.00004062195632222097",
            "extra": "mean: 1.0559614749744979 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.935215677576464,
            "unit": "iter/sec",
            "range": "stddev: 0.0017547484221577803",
            "extra": "mean: 100.65206759999938 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.882007820455714,
            "unit": "iter/sec",
            "range": "stddev: 0.000505257489741915",
            "extra": "mean: 101.19401018181793 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.5713298993107,
            "unit": "iter/sec",
            "range": "stddev: 0.000029978041809931758",
            "extra": "mean: 3.0715235285283553 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.2270200066927,
            "unit": "iter/sec",
            "range": "stddev: 0.00002941820190009066",
            "extra": "mean: 1.4898089173913607 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 853.7842508609069,
            "unit": "iter/sec",
            "range": "stddev: 0.00003883825886437446",
            "extra": "mean: 1.1712560860564687 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 782.5761024464971,
            "unit": "iter/sec",
            "range": "stddev: 0.000026079850876124755",
            "extra": "mean: 1.2778309954441367 msec\nrounds: 878"
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
          "id": "a556a3e7c7f8a831e35b66683aeecfeb12651f2a",
          "message": ":bookmark: Bump version number to `1.6.0`",
          "timestamp": "2024-10-15T23:47:34+09:00",
          "tree_id": "14888d016a4310bb7a2cb8635768a619e5713c21",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a556a3e7c7f8a831e35b66683aeecfeb12651f2a"
        },
        "date": 1729004100313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.54054116902836,
            "unit": "iter/sec",
            "range": "stddev: 0.00009795385539883786",
            "extra": "mean: 4.300325418410044 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 325.4839350615595,
            "unit": "iter/sec",
            "range": "stddev: 0.000037529534097996284",
            "extra": "mean: 3.072348255255264 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.36346079860346,
            "unit": "iter/sec",
            "range": "stddev: 0.00006339814011734538",
            "extra": "mean: 2.356470555024022 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1066.1123953932308,
            "unit": "iter/sec",
            "range": "stddev: 0.000020285373522729114",
            "extra": "mean: 937.9874057567397 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.9177622588013,
            "unit": "iter/sec",
            "range": "stddev: 0.00010273622174352074",
            "extra": "mean: 4.6313929411763235 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.1016256442618,
            "unit": "iter/sec",
            "range": "stddev: 0.00003790034214778968",
            "extra": "mean: 3.235181950000088 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.97975704004256,
            "unit": "iter/sec",
            "range": "stddev: 0.00003407695139543328",
            "extra": "mean: 2.427303727699428 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 970.0803318376051,
            "unit": "iter/sec",
            "range": "stddev: 0.000030066603358374886",
            "extra": "mean: 1.0308424644644827 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.771021676493742,
            "unit": "iter/sec",
            "range": "stddev: 0.0013691203488464254",
            "extra": "mean: 102.34344299999982 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.885432714646289,
            "unit": "iter/sec",
            "range": "stddev: 0.0013008065755768699",
            "extra": "mean: 101.15895063636384 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.9890044949866,
            "unit": "iter/sec",
            "range": "stddev: 0.00005414848871870445",
            "extra": "mean: 3.058206808955046 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.0742164433717,
            "unit": "iter/sec",
            "range": "stddev: 0.00002664284494061778",
            "extra": "mean: 1.490148146802455 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 857.1334184273684,
            "unit": "iter/sec",
            "range": "stddev: 0.000049411135604384145",
            "extra": "mean: 1.1666795139486652 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.4119305612014,
            "unit": "iter/sec",
            "range": "stddev: 0.00008601098451366628",
            "extra": "mean: 1.2667657547170452 msec\nrounds: 901"
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
          "id": "0fbd6c98ef7778c30f18a542ba99566b6fcdd57a",
          "message": "Merge pull request #1470 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.4",
          "timestamp": "2024-10-15T14:48:48Z",
          "tree_id": "52d1a8faa4e95096d7cd69d0c6715764208e9e3d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0fbd6c98ef7778c30f18a542ba99566b6fcdd57a"
        },
        "date": 1729004450467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.63822014889192,
            "unit": "iter/sec",
            "range": "stddev: 0.00012553959321335277",
            "extra": "mean: 4.373721940928284 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.54909593153263,
            "unit": "iter/sec",
            "range": "stddev: 0.00012066203505342628",
            "extra": "mean: 2.9890978997135162 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.68132384320126,
            "unit": "iter/sec",
            "range": "stddev: 0.00005637909374826732",
            "extra": "mean: 2.377096256292865 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1011.7265424791855,
            "unit": "iter/sec",
            "range": "stddev: 0.000037952372625760636",
            "extra": "mean: 988.4093754717057 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.58997695419257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000606939578632487",
            "extra": "mean: 4.771220525581514 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 298.04972804534924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000552160582441204",
            "extra": "mean: 3.355144816128961 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.40514273543084,
            "unit": "iter/sec",
            "range": "stddev: 0.0001644782175382162",
            "extra": "mean: 2.4850577037914987 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 936.0098282965812,
            "unit": "iter/sec",
            "range": "stddev: 0.00004840963390163049",
            "extra": "mean: 1.068364850206619 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.825169151929781,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013956392765161",
            "extra": "mean: 101.77941819999994 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.040024823651,
            "unit": "iter/sec",
            "range": "stddev: 0.0007873015086348013",
            "extra": "mean: 99.60134736363683 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.2524884608391,
            "unit": "iter/sec",
            "range": "stddev: 0.00004953798271505971",
            "extra": "mean: 3.065110720588519 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.5052233656941,
            "unit": "iter/sec",
            "range": "stddev: 0.00006447854371066773",
            "extra": "mean: 1.502617808080676 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 816.4146149006823,
            "unit": "iter/sec",
            "range": "stddev: 0.00010674438881372901",
            "extra": "mean: 1.224867832775937 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 757.5271424106015,
            "unit": "iter/sec",
            "range": "stddev: 0.000040011603707017144",
            "extra": "mean: 1.32008471249994 msec\nrounds: 880"
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
          "id": "a934f70d7b106a1d9bacb4b2e86430601733dd03",
          "message": ":bookmark: Bump version number to `1.6.1`",
          "timestamp": "2024-10-16T10:06:04+09:00",
          "tree_id": "18a9142ce5f43f0e5035566c7666dbeae2df6bef",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a934f70d7b106a1d9bacb4b2e86430601733dd03"
        },
        "date": 1729041050708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.17545364370136,
            "unit": "iter/sec",
            "range": "stddev: 0.00017033668263171652",
            "extra": "mean: 4.307087524999992 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 347.4230907674116,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112147135431335",
            "extra": "mean: 2.878334879213504 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.83584649392225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012086762761503418",
            "extra": "mean: 2.3649839726026487 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1033.6837926681205,
            "unit": "iter/sec",
            "range": "stddev: 0.00006612154821862822",
            "extra": "mean: 967.4138330241431 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.13405026438454,
            "unit": "iter/sec",
            "range": "stddev: 0.00005269153621313438",
            "extra": "mean: 4.60544994570124 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.94711015774476,
            "unit": "iter/sec",
            "range": "stddev: 0.00005094194316897968",
            "extra": "mean: 3.2792571783438587 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.36418021720834,
            "unit": "iter/sec",
            "range": "stddev: 0.00007613132598643676",
            "extra": "mean: 2.460846818401867 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.2223747581066,
            "unit": "iter/sec",
            "range": "stddev: 0.000024959063486835017",
            "extra": "mean: 1.057952103869644 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.069540092838032,
            "unit": "iter/sec",
            "range": "stddev: 0.000359357478961666",
            "extra": "mean: 99.30940150000005 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.259805414955688,
            "unit": "iter/sec",
            "range": "stddev: 0.00024444094631701543",
            "extra": "mean: 97.46773545454411 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.56662679535737,
            "unit": "iter/sec",
            "range": "stddev: 0.00004214737845439967",
            "extra": "mean: 3.052814048192815 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.2670210805999,
            "unit": "iter/sec",
            "range": "stddev: 0.00006966819601500361",
            "extra": "mean: 1.512248408163263 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 853.126484539021,
            "unit": "iter/sec",
            "range": "stddev: 0.00005025119456795989",
            "extra": "mean: 1.172159132464796 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 777.6313146498921,
            "unit": "iter/sec",
            "range": "stddev: 0.00006831453111768896",
            "extra": "mean: 1.2859564438325422 msec\nrounds: 908"
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
          "id": "55d681730b6ea7a716c61f9b1f445553d3bd2486",
          "message": "Merge pull request #1471 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.22.0",
          "timestamp": "2024-10-16T13:28:52Z",
          "tree_id": "38c24b95072894dd18e63174856011b9e99023f6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/55d681730b6ea7a716c61f9b1f445553d3bd2486"
        },
        "date": 1729085587916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.8179978666537,
            "unit": "iter/sec",
            "range": "stddev: 0.00022115813717573412",
            "extra": "mean: 4.27683073640165 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.72323833196583,
            "unit": "iter/sec",
            "range": "stddev: 0.00008620581841334619",
            "extra": "mean: 2.909317405633791 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.99808475298727,
            "unit": "iter/sec",
            "range": "stddev: 0.00008816790835101016",
            "extra": "mean: 2.3201959251701036 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1049.5552108922132,
            "unit": "iter/sec",
            "range": "stddev: 0.000048646743155710216",
            "extra": "mean: 952.7845601851789 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.94022239569424,
            "unit": "iter/sec",
            "range": "stddev: 0.00005299556589622845",
            "extra": "mean: 4.588414148648481 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.2526064751612,
            "unit": "iter/sec",
            "range": "stddev: 0.00013947971248854426",
            "extra": "mean: 3.254650990506216 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.86228575723885,
            "unit": "iter/sec",
            "range": "stddev: 0.00005070009945329001",
            "extra": "mean: 2.398873762790701 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.0149848159099,
            "unit": "iter/sec",
            "range": "stddev: 0.000044900058888108007",
            "extra": "mean: 1.0526149755351237 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.065327974489719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006846052742687787",
            "extra": "mean: 99.35096029999926 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.294706709350866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005268590360424469",
            "extra": "mean: 97.13729863636448 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.5544195211245,
            "unit": "iter/sec",
            "range": "stddev: 0.00008423504294404617",
            "extra": "mean: 3.02522048093837 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 680.1000551457978,
            "unit": "iter/sec",
            "range": "stddev: 0.000029650519095601656",
            "extra": "mean: 1.4703718848921765 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 870.0640543872098,
            "unit": "iter/sec",
            "range": "stddev: 0.00003397855211990716",
            "extra": "mean: 1.149340666307959 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 791.236520029003,
            "unit": "iter/sec",
            "range": "stddev: 0.000054563762975892",
            "extra": "mean: 1.2638445960044218 msec\nrounds: 901"
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
          "id": "2d2406c55b593319f7d9557560cfa34bf516d62f",
          "message": "Merge pull request #1472 from TeoZosa/dependabot/pip/sentry-sdk-2.17.0",
          "timestamp": "2024-10-17T13:41:53Z",
          "tree_id": "66c9f2bc18581ab45d24b7bd37c8ad90db7f0530",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2d2406c55b593319f7d9557560cfa34bf516d62f"
        },
        "date": 1729172812136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.13843541317007,
            "unit": "iter/sec",
            "range": "stddev: 0.000074915798877921",
            "extra": "mean: 4.461528421739136 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 333.1693378661116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758207089199302",
            "extra": "mean: 3.0014766857142865 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.1978517464482,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096099944876151",
            "extra": "mean: 2.402703415704341 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1041.8832905484328,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733204889031016",
            "extra": "mean: 959.8004009389708 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.54434153189763,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349127707731315",
            "extra": "mean: 4.704900599999858 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.2689334520694,
            "unit": "iter/sec",
            "range": "stddev: 0.00034548028351893604",
            "extra": "mean: 3.3639573042072906 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.6460676353108,
            "unit": "iter/sec",
            "range": "stddev: 0.00004265381367996139",
            "extra": "mean: 2.4292713537735744 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 945.7273236123775,
            "unit": "iter/sec",
            "range": "stddev: 0.00004891186043056356",
            "extra": "mean: 1.0573872352342726 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.022693462719799,
            "unit": "iter/sec",
            "range": "stddev: 0.0007416503388773223",
            "extra": "mean: 99.77357920000038 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.332469971555103,
            "unit": "iter/sec",
            "range": "stddev: 0.00039873154581625953",
            "extra": "mean: 96.78227981818114 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.290630896251,
            "unit": "iter/sec",
            "range": "stddev: 0.00011632099334090726",
            "extra": "mean: 3.0553884089550776 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.7224051151536,
            "unit": "iter/sec",
            "range": "stddev: 0.00006638192068560405",
            "extra": "mean: 1.5043873838234239 msec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 848.1495986452185,
            "unit": "iter/sec",
            "range": "stddev: 0.000059030492948045795",
            "extra": "mean: 1.1790372849286705 msec\nrounds: 909"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 776.4356790020477,
            "unit": "iter/sec",
            "range": "stddev: 0.000030006187482205088",
            "extra": "mean: 1.2879366920455013 msec\nrounds: 880"
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
          "id": "3754898af9ec72491a792418114fe80c5231a7bc",
          "message": "Merge pull request #1473 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.23.0",
          "timestamp": "2024-10-17T14:18:34Z",
          "tree_id": "8796a077b40260b85bfca77b304d80f1e7140ad0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3754898af9ec72491a792418114fe80c5231a7bc"
        },
        "date": 1729174854408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.3075406237759,
            "unit": "iter/sec",
            "range": "stddev: 0.00014192488012339897",
            "extra": "mean: 4.323248594936688 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.24269164048457,
            "unit": "iter/sec",
            "range": "stddev: 0.000033195941408691206",
            "extra": "mean: 2.939078559420298 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.6386798617894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000689537108876549",
            "extra": "mean: 2.327537176870784 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1038.4176063794546,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367039718204305",
            "extra": "mean: 963.0037028037291 usec\nrounds: 1070"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.3699311674833,
            "unit": "iter/sec",
            "range": "stddev: 0.00010181998664144391",
            "extra": "mean: 4.686695986301166 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.38233662238287,
            "unit": "iter/sec",
            "range": "stddev: 0.00003897502365070488",
            "extra": "mean: 3.253277371069286 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.90377885083444,
            "unit": "iter/sec",
            "range": "stddev: 0.00006804726927485185",
            "extra": "mean: 2.4277514588234377 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 935.5766963513606,
            "unit": "iter/sec",
            "range": "stddev: 0.000019172147411494783",
            "extra": "mean: 1.068859457380547 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.98048466928234,
            "unit": "iter/sec",
            "range": "stddev: 0.0008254307714483377",
            "extra": "mean: 100.19553490000064 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.139709283805153,
            "unit": "iter/sec",
            "range": "stddev: 0.0009746579317933184",
            "extra": "mean: 98.62215690909113 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.30605959854296,
            "unit": "iter/sec",
            "range": "stddev: 0.00004011007304949393",
            "extra": "mean: 2.9734819562684223 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 680.8868637284386,
            "unit": "iter/sec",
            "range": "stddev: 0.000051000653152717715",
            "extra": "mean: 1.46867277556824 msec\nrounds: 704"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.0406381085633,
            "unit": "iter/sec",
            "range": "stddev: 0.000036261033405978115",
            "extra": "mean: 1.1586939894181534 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.09221953142,
            "unit": "iter/sec",
            "range": "stddev: 0.000042686322314871696",
            "extra": "mean: 1.2688870353200228 msec\nrounds: 906"
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
          "id": "71787aadc3fa0bca56e13f579718061ac7d2458f",
          "message": "Merge pull request #1474 from TeoZosa/dependabot/pip/mypy-1.12.1",
          "timestamp": "2024-10-21T13:55:11Z",
          "tree_id": "cbf3b04e6ef78ade63a8f83c0349926eb05c1eca",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/71787aadc3fa0bca56e13f579718061ac7d2458f"
        },
        "date": 1729519195629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.63253559479017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001050534116762354",
            "extra": "mean: 4.5119729254386 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 324.830130520893,
            "unit": "iter/sec",
            "range": "stddev: 0.0000662242269215156",
            "extra": "mean: 3.078532149700565 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.2820046430413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152670227981551",
            "extra": "mean: 2.4553012129186538 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1027.6555719726205,
            "unit": "iter/sec",
            "range": "stddev: 0.00002296527695506947",
            "extra": "mean: 973.0886760828489 usec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.56176124023656,
            "unit": "iter/sec",
            "range": "stddev: 0.000056210316083888974",
            "extra": "mean: 4.912513990384641 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.790952885469,
            "unit": "iter/sec",
            "range": "stddev: 0.000051900023624290385",
            "extra": "mean: 3.259548531645649 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.85049458825347,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193751820537258",
            "extra": "mean: 2.451878845971617 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 952.2582710746194,
            "unit": "iter/sec",
            "range": "stddev: 0.000018283405285943465",
            "extra": "mean: 1.0501352735655467 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.671174590053372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001480269870743087",
            "extra": "mean: 103.40005659999996 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.179544134250238,
            "unit": "iter/sec",
            "range": "stddev: 0.0001419929628092823",
            "extra": "mean: 98.2362261818175 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.8643834131148,
            "unit": "iter/sec",
            "range": "stddev: 0.00005570608183205104",
            "extra": "mean: 3.059372788059713 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.2494024035311,
            "unit": "iter/sec",
            "range": "stddev: 0.000025642645412445608",
            "extra": "mean: 1.4657396495725012 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 865.9084038311946,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644605648026512",
            "extra": "mean: 1.1548565593953353 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.313913783147,
            "unit": "iter/sec",
            "range": "stddev: 0.000028559970409728386",
            "extra": "mean: 1.257365151884748 msec\nrounds: 902"
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
          "id": "c499c72c2fd47d2dedd2bac673622dd00cf10709",
          "message": "Merge pull request #1475 from TeoZosa/dependabot/pip/orjson-3.10.9",
          "timestamp": "2024-10-21T14:05:20Z",
          "tree_id": "11802cbb62f4e23fc75e7158457f02ed6b48b2d7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c499c72c2fd47d2dedd2bac673622dd00cf10709"
        },
        "date": 1729519731530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.65425803198502,
            "unit": "iter/sec",
            "range": "stddev: 0.00013362056872260402",
            "extra": "mean: 4.373415166666681 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.4728300631294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008228449796793597",
            "extra": "mean: 2.9284906790830947 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.73220344792566,
            "unit": "iter/sec",
            "range": "stddev: 0.00024899410403909477",
            "extra": "mean: 2.440618510297528 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1039.7905412138211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000383279906693164",
            "extra": "mean: 961.7321569713733 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.76940193705522,
            "unit": "iter/sec",
            "range": "stddev: 0.0001289246134435496",
            "extra": "mean: 4.69992391244224 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.94493265827697,
            "unit": "iter/sec",
            "range": "stddev: 0.00012173973367857533",
            "extra": "mean: 3.3009299453376357 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.6417949435005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008636581597629073",
            "extra": "mean: 2.4531341300236424 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 940.8979570410233,
            "unit": "iter/sec",
            "range": "stddev: 0.00004652453483434263",
            "extra": "mean: 1.0628145087537901 msec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.800537721594928,
            "unit": "iter/sec",
            "range": "stddev: 0.0013686606152646563",
            "extra": "mean: 102.03521769999995 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.1906517432896,
            "unit": "iter/sec",
            "range": "stddev: 0.0005885169496743021",
            "extra": "mean: 98.12915063636493 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.68805133295444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000405631018981169",
            "extra": "mean: 3.0148809882698546 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.9085038418546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004615284005079371",
            "extra": "mean: 1.4816823233187786 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 854.8679748775735,
            "unit": "iter/sec",
            "range": "stddev: 0.000034318966624471694",
            "extra": "mean: 1.1697712739130404 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.0158277533783,
            "unit": "iter/sec",
            "range": "stddev: 0.00004624328100121132",
            "extra": "mean: 1.2674016981983391 msec\nrounds: 888"
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
          "id": "5947b6257a742d6a05341f1c06ea985da67d416d",
          "message": "Merge pull request #1479 from TeoZosa/dependabot/pip/orjson-3.10.9",
          "timestamp": "2024-10-22T13:56:41Z",
          "tree_id": "f4179e2bfcfcd7e49a549c9cdd98b3b06e6bc6e5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5947b6257a742d6a05341f1c06ea985da67d416d"
        },
        "date": 1729606007468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.57476367503298,
            "unit": "iter/sec",
            "range": "stddev: 0.00013746504277746015",
            "extra": "mean: 4.355879470338984 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.7237568982039,
            "unit": "iter/sec",
            "range": "stddev: 0.00005512775102945453",
            "extra": "mean: 2.952258232954497 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.4679428515238,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926956646034077",
            "extra": "mean: 2.383972403712298 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1017.4084407666995,
            "unit": "iter/sec",
            "range": "stddev: 0.00002342482059863202",
            "extra": "mean: 982.889427619078 usec\nrounds: 1050"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.7551917766485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002120923465953885",
            "extra": "mean: 4.790300023148266 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.98266415119906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460913454161623",
            "extra": "mean: 3.2788748920634947 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.3728124139211,
            "unit": "iter/sec",
            "range": "stddev: 0.00004733600273112998",
            "extra": "mean: 2.4668649928572726 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 935.6893165516957,
            "unit": "iter/sec",
            "range": "stddev: 0.00002105263868410489",
            "extra": "mean: 1.068730808731801 msec\nrounds: 962"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.989268129677503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993545249314818",
            "extra": "mean: 100.1074340000006 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.24723698718641,
            "unit": "iter/sec",
            "range": "stddev: 0.00030950741336428344",
            "extra": "mean: 97.58728145454657 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.5725305088957,
            "unit": "iter/sec",
            "range": "stddev: 0.00003818349560998912",
            "extra": "mean: 3.02505473900255 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.8276064760527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006999690163458284",
            "extra": "mean: 1.5086879155751174 msec\nrounds: 687"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 836.9514409282503,
            "unit": "iter/sec",
            "range": "stddev: 0.00009496299515892947",
            "extra": "mean: 1.1948124480088294 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 772.3358437200629,
            "unit": "iter/sec",
            "range": "stddev: 0.00008086769594879337",
            "extra": "mean: 1.294773521300476 msec\nrounds: 892"
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
          "id": "dff108e22964932ec8eb982d0d9bbeadfefb6c4e",
          "message": "Merge pull request #1480 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.23.1",
          "timestamp": "2024-10-22T14:08:18Z",
          "tree_id": "eed48a327f72be9f96a531e54aabd9d2e5252fe5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/dff108e22964932ec8eb982d0d9bbeadfefb6c4e"
        },
        "date": 1729606384484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.34915420893321,
            "unit": "iter/sec",
            "range": "stddev: 0.00010750527799936215",
            "extra": "mean: 4.341235822784796 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.79336505301046,
            "unit": "iter/sec",
            "range": "stddev: 0.00003964057941645111",
            "extra": "mean: 2.942965057142867 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.45461872821966,
            "unit": "iter/sec",
            "range": "stddev: 0.00009288810538389705",
            "extra": "mean: 2.367118160550486 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1037.9532100309195,
            "unit": "iter/sec",
            "range": "stddev: 0.000019096281556684842",
            "extra": "mean: 963.4345655814398 usec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.92759356299223,
            "unit": "iter/sec",
            "range": "stddev: 0.00004662256374693301",
            "extra": "mean: 4.652729709677386 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.5704690397656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760170690693573",
            "extra": "mean: 3.2833124076432934 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.45761495775594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675919856419516",
            "extra": "mean: 2.442255226107276 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.9016113797024,
            "unit": "iter/sec",
            "range": "stddev: 0.00004395253194869679",
            "extra": "mean: 1.050528739572762 msec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.927007330572854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008255059659262015",
            "extra": "mean: 100.73529379999897 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.147138339652644,
            "unit": "iter/sec",
            "range": "stddev: 0.0012031834632224782",
            "extra": "mean: 98.54995236363675 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.72803994396696,
            "unit": "iter/sec",
            "range": "stddev: 0.000035797139168126794",
            "extra": "mean: 3.070045797015277 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.8911615793653,
            "unit": "iter/sec",
            "range": "stddev: 0.00003741864064492728",
            "extra": "mean: 1.5040055542694024 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.9447208726131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000542686374328144",
            "extra": "mean: 1.1601672076924179 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.9670649479112,
            "unit": "iter/sec",
            "range": "stddev: 0.000024557615917001434",
            "extra": "mean: 1.2563333887004997 msec\nrounds: 885"
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
          "id": "f3fe9c78928377b889f65c042bca3ad2b7bc44ba",
          "message": "Merge pull request #1482 from TeoZosa/dependabot/pip/rich-13.9.3",
          "timestamp": "2024-10-23T14:06:24Z",
          "tree_id": "20d90fe7b85fc64bef420e04f52f58f77a56df04",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f3fe9c78928377b889f65c042bca3ad2b7bc44ba"
        },
        "date": 1729692778755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.22108925325435,
            "unit": "iter/sec",
            "range": "stddev: 0.0002243699618123021",
            "extra": "mean: 4.306241105042039 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.41796979354217,
            "unit": "iter/sec",
            "range": "stddev: 0.00007216064219016904",
            "extra": "mean: 2.937565254285734 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.2750037329383,
            "unit": "iter/sec",
            "range": "stddev: 0.00006694614711844891",
            "extra": "mean: 2.318706141891863 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.1893017376274,
            "unit": "iter/sec",
            "range": "stddev: 0.00002492752910269062",
            "extra": "mean: 949.4969217310963 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.15468405520875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208308009601646",
            "extra": "mean: 4.6478188675799395 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.29755602839725,
            "unit": "iter/sec",
            "range": "stddev: 0.00011815501525732741",
            "extra": "mean: 3.2541749206348722 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.2482886400415,
            "unit": "iter/sec",
            "range": "stddev: 0.000031669537252696254",
            "extra": "mean: 2.402412279620851 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 939.2844812317666,
            "unit": "iter/sec",
            "range": "stddev: 0.00003809808759834176",
            "extra": "mean: 1.0646401808838701 msec\nrounds: 973"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.093699852434453,
            "unit": "iter/sec",
            "range": "stddev: 0.00044079935228305155",
            "extra": "mean: 99.07169963636423 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.17058655126251,
            "unit": "iter/sec",
            "range": "stddev: 0.0013228090160336474",
            "extra": "mean: 98.32274618181845 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.62928202317147,
            "unit": "iter/sec",
            "range": "stddev: 0.00011649529402511186",
            "extra": "mean: 3.0337110643274237 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 693.8059138914517,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501814430099536",
            "extra": "mean: 1.441325275524321 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 882.7507642239282,
            "unit": "iter/sec",
            "range": "stddev: 0.00005374977604874946",
            "extra": "mean: 1.132822582010622 msec\nrounds: 945"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.1318495828659,
            "unit": "iter/sec",
            "range": "stddev: 0.00003017613827048756",
            "extra": "mean: 1.2688232312008063 msec\nrounds: 891"
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
          "id": "438d98bdcb9eae5e55657555e7ec1d319decbc13",
          "message": "Merge pull request #1483 from TeoZosa/dependabot/pip/orjson-3.10.10",
          "timestamp": "2024-10-23T14:24:57Z",
          "tree_id": "12948fa74d7fecff6e1349b89fc406c884b2378c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/438d98bdcb9eae5e55657555e7ec1d319decbc13"
        },
        "date": 1729693680673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.9922200562549,
            "unit": "iter/sec",
            "range": "stddev: 0.00014733389061550933",
            "extra": "mean: 4.444598127659568 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 331.24457852407045,
            "unit": "iter/sec",
            "range": "stddev: 0.00006936062878003802",
            "extra": "mean: 3.0189173343023734 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.2633305860176,
            "unit": "iter/sec",
            "range": "stddev: 0.000037529170899121006",
            "extra": "mean: 2.351484193621841 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1046.7347743725954,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287115483342576",
            "extra": "mean: 955.3518469847265 usec\nrounds: 1111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.2658580701265,
            "unit": "iter/sec",
            "range": "stddev: 0.00005967462206803149",
            "extra": "mean: 4.824721299065373 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 295.3922047989573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006979049698329692",
            "extra": "mean: 3.385329686274544 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.4584591167972,
            "unit": "iter/sec",
            "range": "stddev: 0.00003638855572668217",
            "extra": "mean: 2.4422501910376995 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.5767051251726,
            "unit": "iter/sec",
            "range": "stddev: 0.00009223804034072691",
            "extra": "mean: 1.0508874319999855 msec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.814107736885942,
            "unit": "iter/sec",
            "range": "stddev: 0.0003450174861767038",
            "extra": "mean: 101.89413310000042 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.97579210442879,
            "unit": "iter/sec",
            "range": "stddev: 0.00034573525299890563",
            "extra": "mean: 100.24266639999908 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.08190563691124,
            "unit": "iter/sec",
            "range": "stddev: 0.000044731105958679774",
            "extra": "mean: 3.0667141681681946 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.5646612627526,
            "unit": "iter/sec",
            "range": "stddev: 0.00003941281859156032",
            "extra": "mean: 1.4868458864943654 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 848.331825971309,
            "unit": "iter/sec",
            "range": "stddev: 0.00004593203856849958",
            "extra": "mean: 1.1787840198675048 msec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 776.1756174530848,
            "unit": "iter/sec",
            "range": "stddev: 0.00003422353477233263",
            "extra": "mean: 1.2883682217194155 msec\nrounds: 884"
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
          "id": "0e8bd5e25ce86507625ee41de0e0c0b9e5a465db",
          "message": "Merge pull request #1484 from TeoZosa/dependabot/pip/mypy-1.13.0",
          "timestamp": "2024-10-23T14:30:36Z",
          "tree_id": "7160f6ca8bad0cafa893cfded2100a91e3f25281",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0e8bd5e25ce86507625ee41de0e0c0b9e5a465db"
        },
        "date": 1729694152185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.83115087404377,
            "unit": "iter/sec",
            "range": "stddev: 0.0001451922213102265",
            "extra": "mean: 4.428087073593073 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.4902105852148,
            "unit": "iter/sec",
            "range": "stddev: 0.000041996365201390914",
            "extra": "mean: 2.989624115606934 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.2409041643006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000381626653116293",
            "extra": "mean: 2.396696944186041 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1041.9933174829239,
            "unit": "iter/sec",
            "range": "stddev: 0.000017883715696610007",
            "extra": "mean: 959.6990529801434 usec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.932191481435,
            "unit": "iter/sec",
            "range": "stddev: 0.00011624064355519293",
            "extra": "mean: 4.674378330232641 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.40530205986863,
            "unit": "iter/sec",
            "range": "stddev: 0.00010935338075375147",
            "extra": "mean: 3.2959213079363976 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.63208433291584,
            "unit": "iter/sec",
            "range": "stddev: 0.00007355452815993082",
            "extra": "mean: 2.4293538770686047 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.047392083403,
            "unit": "iter/sec",
            "range": "stddev: 0.000028310166352937957",
            "extra": "mean: 1.0405314121212625 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.009620937346764,
            "unit": "iter/sec",
            "range": "stddev: 0.00019850973696758438",
            "extra": "mean: 99.90388309999965 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.272303938602393,
            "unit": "iter/sec",
            "range": "stddev: 0.0002847353595319589",
            "extra": "mean: 97.3491444545454 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.151168105906,
            "unit": "iter/sec",
            "range": "stddev: 0.00008898753057624759",
            "extra": "mean: 3.038117730994183 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 680.6598967987383,
            "unit": "iter/sec",
            "range": "stddev: 0.000055809055788269695",
            "extra": "mean: 1.4691625064193934 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 848.342603636165,
            "unit": "iter/sec",
            "range": "stddev: 0.000058958347696593665",
            "extra": "mean: 1.178769044150089 msec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 777.8876401402872,
            "unit": "iter/sec",
            "range": "stddev: 0.000027370781178760947",
            "extra": "mean: 1.2855327021517609 msec\nrounds: 883"
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
          "id": "c57a976b58f2cd8fb3ee1b203c421c9a03044f1a",
          "message": "Merge pull request #1485 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.23.2",
          "timestamp": "2024-10-23T14:42:58Z",
          "tree_id": "3f19c7c73afb006918a5d6e6f4485baadedbcdaf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c57a976b58f2cd8fb3ee1b203c421c9a03044f1a"
        },
        "date": 1729695106705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.46451551122234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001581661019486512",
            "extra": "mean: 4.377047340425517 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.84609786090687,
            "unit": "iter/sec",
            "range": "stddev: 0.00003686538520638222",
            "extra": "mean: 2.9425084068768173 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.6502630626139,
            "unit": "iter/sec",
            "range": "stddev: 0.00003509525216384151",
            "extra": "mean: 2.4000944884792283 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1078.1273091574178,
            "unit": "iter/sec",
            "range": "stddev: 0.000022452398684894148",
            "extra": "mean: 927.5342452660102 usec\nrounds: 1109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.02556073583733,
            "unit": "iter/sec",
            "range": "stddev: 0.00004477655875706795",
            "extra": "mean: 4.694272351851953 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.31957113081,
            "unit": "iter/sec",
            "range": "stddev: 0.00003745160841861659",
            "extra": "mean: 3.2645645079365897 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.73273640201097,
            "unit": "iter/sec",
            "range": "stddev: 0.00003810050018886698",
            "extra": "mean: 2.44061533569738 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 974.4789235792647,
            "unit": "iter/sec",
            "range": "stddev: 0.000026484560948547353",
            "extra": "mean: 1.0261894596211443 msec\nrounds: 1003"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.987515525692729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006802951198544993",
            "extra": "mean: 100.12500080000031 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.859107165296095,
            "unit": "iter/sec",
            "range": "stddev: 0.011482853182239986",
            "extra": "mean: 101.4290628181814 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.5131780523806,
            "unit": "iter/sec",
            "range": "stddev: 0.00009247037335310843",
            "extra": "mean: 3.0626635223879872 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 679.1448583459303,
            "unit": "iter/sec",
            "range": "stddev: 0.00003243976655303538",
            "extra": "mean: 1.4724399186876247 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 887.957319852856,
            "unit": "iter/sec",
            "range": "stddev: 0.00006394947254091028",
            "extra": "mean: 1.1261802539853047 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 798.2043825269913,
            "unit": "iter/sec",
            "range": "stddev: 0.000026671634912497512",
            "extra": "mean: 1.2528119638157775 msec\nrounds: 912"
          }
        ]
      }
    ]
  }
}