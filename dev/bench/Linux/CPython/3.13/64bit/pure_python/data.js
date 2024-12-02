window.BENCHMARK_DATA = {
  "lastUpdate": 1733158349801,
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
          "id": "aabadf0bb739344423632cab1efe3a5bca0aa4b4",
          "message": "Merge pull request #1486 from TeoZosa/dependabot/pip/orjson-3.10.10",
          "timestamp": "2024-10-24T13:37:15Z",
          "tree_id": "8ccae666915a96968c87bae8b7c2a15549b78e12",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aabadf0bb739344423632cab1efe3a5bca0aa4b4"
        },
        "date": 1729777203848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.50044881453456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000929687342135093",
            "extra": "mean: 4.301066966101641 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.64428477019726,
            "unit": "iter/sec",
            "range": "stddev: 0.00006498396490149675",
            "extra": "mean: 2.9356136142856823 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.1412566847921,
            "unit": "iter/sec",
            "range": "stddev: 0.00006302424006105038",
            "extra": "mean: 2.3466397217195034 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1043.0754608117898,
            "unit": "iter/sec",
            "range": "stddev: 0.000020113977745511557",
            "extra": "mean: 958.703408880633 usec\nrounds: 1081"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.6926904199336,
            "unit": "iter/sec",
            "range": "stddev: 0.00006228450263395834",
            "extra": "mean: 4.657820431818264 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.9850540681648,
            "unit": "iter/sec",
            "range": "stddev: 0.00004587926729320902",
            "extra": "mean: 3.2896354166667767 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.7357086706351,
            "unit": "iter/sec",
            "range": "stddev: 0.00003738633995207351",
            "extra": "mean: 2.4346556164706143 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 950.5308815333402,
            "unit": "iter/sec",
            "range": "stddev: 0.000024995044275218112",
            "extra": "mean: 1.0520436730965115 msec\nrounds: 985"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.935541061095874,
            "unit": "iter/sec",
            "range": "stddev: 0.00016392111465022752",
            "extra": "mean: 100.6487713000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.278607669186801,
            "unit": "iter/sec",
            "range": "stddev: 0.0007529978935337747",
            "extra": "mean: 97.28944154545357 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.20809804867577,
            "unit": "iter/sec",
            "range": "stddev: 0.00009152788001324532",
            "extra": "mean: 3.0749541785712977 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 669.9358445136398,
            "unit": "iter/sec",
            "range": "stddev: 0.000058315218269238566",
            "extra": "mean: 1.4926802442194747 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 865.4366806644393,
            "unit": "iter/sec",
            "range": "stddev: 0.00004018606332723485",
            "extra": "mean: 1.1554860365200255 msec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 797.9890017718237,
            "unit": "iter/sec",
            "range": "stddev: 0.00006575180825666204",
            "extra": "mean: 1.2531501032967107 msec\nrounds: 910"
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
          "id": "a400ea71468c8920448aa448ef44e9bdb53f86fb",
          "message": "Merge pull request #1487 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-5.1.0",
          "timestamp": "2024-10-28T13:36:03Z",
          "tree_id": "c486816eb83bcdef0cb387d280d0b13453957925",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a400ea71468c8920448aa448ef44e9bdb53f86fb"
        },
        "date": 1730122925627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.76617614874334,
            "unit": "iter/sec",
            "range": "stddev: 0.00007267653736124947",
            "extra": "mean: 4.314693440677979 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.43892009775004,
            "unit": "iter/sec",
            "range": "stddev: 0.000054959514876630534",
            "extra": "mean: 2.9032723703703547 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.77961226900896,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606848069937102",
            "extra": "mean: 2.370906442396284 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1054.8832165869173,
            "unit": "iter/sec",
            "range": "stddev: 0.000025051453054958036",
            "extra": "mean: 947.9722345337028 usec\nrounds: 1083"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.16541597392472,
            "unit": "iter/sec",
            "range": "stddev: 0.00007372006921879189",
            "extra": "mean: 4.647587045871662 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.738471962746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000521899454835142",
            "extra": "mean: 3.238987333333259 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.3854218926033,
            "unit": "iter/sec",
            "range": "stddev: 0.00003979211220587641",
            "extra": "mean: 2.4190499883176773 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 959.6115799399832,
            "unit": "iter/sec",
            "range": "stddev: 0.000026109160190444714",
            "extra": "mean: 1.04208830000003 msec\nrounds: 990"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.020580988894844,
            "unit": "iter/sec",
            "range": "stddev: 0.0009335830830343307",
            "extra": "mean: 99.79461281818237 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.220794717893305,
            "unit": "iter/sec",
            "range": "stddev: 0.0004891472489386584",
            "extra": "mean: 97.83974999999985 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.8496577243489,
            "unit": "iter/sec",
            "range": "stddev: 0.00010458686670807151",
            "extra": "mean: 3.0688999552239693 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 677.1582626791247,
            "unit": "iter/sec",
            "range": "stddev: 0.000034827834543581285",
            "extra": "mean: 1.476759651493547 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 847.8512957715193,
            "unit": "iter/sec",
            "range": "stddev: 0.000060229791310770485",
            "extra": "mean: 1.1794521102784068 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 785.8821013121271,
            "unit": "iter/sec",
            "range": "stddev: 0.00007525612410360501",
            "extra": "mean: 1.2724554972436408 msec\nrounds: 907"
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
          "id": "801ee64296e251dd25ade28df79120f731529ea0",
          "message": "Merge pull request #1489 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.3.3",
          "timestamp": "2024-10-28T14:18:28Z",
          "tree_id": "b722e08f4205ffa6571d73e92e56882485a55b4d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/801ee64296e251dd25ade28df79120f731529ea0"
        },
        "date": 1730125308367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.2179311611538,
            "unit": "iter/sec",
            "range": "stddev: 0.0002198042361544429",
            "extra": "mean: 4.34371030508477 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.97864644443604,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778224112406234",
            "extra": "mean: 2.9156334085714115 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.1342368817973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000955670640818944",
            "extra": "mean: 2.3689147020785524 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1040.9114894156578,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501333174549258",
            "extra": "mean: 960.69647627905 usec\nrounds: 1075"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.63746861456897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001090352767176218",
            "extra": "mean: 4.747493437788275 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.90348963628657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003579927460555949",
            "extra": "mean: 3.269004878594164 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.67710497278455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000725127054534724",
            "extra": "mean: 2.471105945238123 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 933.0815526806315,
            "unit": "iter/sec",
            "range": "stddev: 0.00005085835129181484",
            "extra": "mean: 1.0717176833333804 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.002050630422364,
            "unit": "iter/sec",
            "range": "stddev: 0.0001646277207356536",
            "extra": "mean: 99.97949789999936 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.275505393353201,
            "unit": "iter/sec",
            "range": "stddev: 0.0006800112413477158",
            "extra": "mean: 97.31881418181713 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.988790277623,
            "unit": "iter/sec",
            "range": "stddev: 0.00008351908502823978",
            "extra": "mean: 3.0960826818183262 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.7378454575291,
            "unit": "iter/sec",
            "range": "stddev: 0.00003148126495458357",
            "extra": "mean: 1.502092763425142 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 842.5498346883353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004268468214023219",
            "extra": "mean: 1.186873415469729 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 766.7638620390424,
            "unit": "iter/sec",
            "range": "stddev: 0.00003949330664952101",
            "extra": "mean: 1.3041824863012148 msec\nrounds: 876"
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
          "id": "58214f2c8d765586160e3a30f5ee5f5623ce86c2",
          "message": "Merge pull request #1491 from TeoZosa/dependabot/pip/sphinx-autoapi-3.3.3",
          "timestamp": "2024-10-28T15:12:03Z",
          "tree_id": "8215281af2ec2fc841858b58841572d638467b8f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/58214f2c8d765586160e3a30f5ee5f5623ce86c2"
        },
        "date": 1730128675186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.05132856899064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008026457820246404",
            "extra": "mean: 4.523836189873419 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.9610525146931,
            "unit": "iter/sec",
            "range": "stddev: 0.00015436892876158765",
            "extra": "mean: 2.9677020312500217 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.58446264057216,
            "unit": "iter/sec",
            "range": "stddev: 0.00006650449627292713",
            "extra": "mean: 2.366390836405518 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1062.1985647806105,
            "unit": "iter/sec",
            "range": "stddev: 0.000020105217730272442",
            "extra": "mean: 941.4435616438088 usec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.411361489247,
            "unit": "iter/sec",
            "range": "stddev: 0.00024395740484441935",
            "extra": "mean: 4.7525950733943825 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.2806831413183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010762175288436273",
            "extra": "mean: 3.330217546925519 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.7146358764826,
            "unit": "iter/sec",
            "range": "stddev: 0.00003953421086046915",
            "extra": "mean: 2.4893292668268017 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 946.3150288130922,
            "unit": "iter/sec",
            "range": "stddev: 0.0000538813558232026",
            "extra": "mean: 1.0567305490796672 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.985145069724384,
            "unit": "iter/sec",
            "range": "stddev: 0.0007010657928960428",
            "extra": "mean: 100.14877029999951 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.29007467946857,
            "unit": "iter/sec",
            "range": "stddev: 0.00028230260472191686",
            "extra": "mean: 97.181024545455 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.4240624380096,
            "unit": "iter/sec",
            "range": "stddev: 0.00008533989944585111",
            "extra": "mean: 3.0172824285715296 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.1586627103301,
            "unit": "iter/sec",
            "range": "stddev: 0.000024473054037059045",
            "extra": "mean: 1.4659346200000354 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 868.7654803849472,
            "unit": "iter/sec",
            "range": "stddev: 0.000052186566954999",
            "extra": "mean: 1.1510586258064757 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 792.4146313031133,
            "unit": "iter/sec",
            "range": "stddev: 0.00003470844757751234",
            "extra": "mean: 1.2619655928809843 msec\nrounds: 899"
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
          "id": "c6cc88922d99e030e2b3cf3714443b2f2cde3239",
          "message": "Merge pull request #1493 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.11.0",
          "timestamp": "2024-10-30T13:54:43Z",
          "tree_id": "cb62810936ede19f335fc4997635aea8ea505d42",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c6cc88922d99e030e2b3cf3714443b2f2cde3239"
        },
        "date": 1730296727085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.39111177559437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547571402123431",
            "extra": "mean: 4.359366813559308 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 341.81122662149227,
            "unit": "iter/sec",
            "range": "stddev: 0.00004298313004515544",
            "extra": "mean: 2.925591443804036 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.1988794951216,
            "unit": "iter/sec",
            "range": "stddev: 0.00003510030692275997",
            "extra": "mean: 2.346322452054795 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1052.7285016065432,
            "unit": "iter/sec",
            "range": "stddev: 0.000055123652137775924",
            "extra": "mean: 949.9125353535355 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.2265682292779,
            "unit": "iter/sec",
            "range": "stddev: 0.00038429903084304774",
            "extra": "mean: 4.689847087557689 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.9656071395585,
            "unit": "iter/sec",
            "range": "stddev: 0.00008744658426931358",
            "extra": "mean: 3.2898458789808878 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.94854508708704,
            "unit": "iter/sec",
            "range": "stddev: 0.00003612008649389923",
            "extra": "mean: 2.421609209905581 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 960.6301556238113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004528430736727704",
            "extra": "mean: 1.040983352589658 msec\nrounds: 1004"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.859111774440027,
            "unit": "iter/sec",
            "range": "stddev: 0.0018427188505585914",
            "extra": "mean: 101.42901540000011 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.16099629374148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005287005047996798",
            "extra": "mean: 98.41554618181837 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.7735737256471,
            "unit": "iter/sec",
            "range": "stddev: 0.00008878878949527878",
            "extra": "mean: 3.0508865880597793 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 676.9156680185074,
            "unit": "iter/sec",
            "range": "stddev: 0.00005789272223525048",
            "extra": "mean: 1.477288896159306 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 862.4662027829842,
            "unit": "iter/sec",
            "range": "stddev: 0.000058002253769401134",
            "extra": "mean: 1.1594657237271737 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 790.5930325969244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001172802221053781",
            "extra": "mean: 1.264873277108476 msec\nrounds: 913"
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
          "id": "21eefb2d9fec5fb31640eda85fa0788411970fa8",
          "message": "Merge pull request #1496 from TeoZosa/dependabot/pip/docs/orjson-3.10.11",
          "timestamp": "2024-11-04T14:41:08Z",
          "tree_id": "1aa94739ec9c5fce5deceefaa655d078b0b0320f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21eefb2d9fec5fb31640eda85fa0788411970fa8"
        },
        "date": 1730731553395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 226.60570843989586,
            "unit": "iter/sec",
            "range": "stddev: 0.000050105492836852575",
            "extra": "mean: 4.412951495726493 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 336.0300786075175,
            "unit": "iter/sec",
            "range": "stddev: 0.00004088328392149875",
            "extra": "mean: 2.9759240724637572 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.0011035594223,
            "unit": "iter/sec",
            "range": "stddev: 0.00004345395198840868",
            "extra": "mean: 2.392338181609231 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1062.7047018569422,
            "unit": "iter/sec",
            "range": "stddev: 0.00003699806677479706",
            "extra": "mean: 940.9951779197236 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.9394114967804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004544242867553839",
            "extra": "mean: 4.786076465116344 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.1381858476017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004875300797477506",
            "extra": "mean: 3.3317986419354204 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.0595147841837,
            "unit": "iter/sec",
            "range": "stddev: 0.000033421058176683486",
            "extra": "mean: 2.4933955264422925 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.6661280614074,
            "unit": "iter/sec",
            "range": "stddev: 0.000023611988636495814",
            "extra": "mean: 1.0507886857726576 msec\nrounds: 977"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.922886490519728,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032432458181004",
            "extra": "mean: 100.77712779999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.21238943988295,
            "unit": "iter/sec",
            "range": "stddev: 0.00014805862228045125",
            "extra": "mean: 97.92027672727114 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.01149709816633,
            "unit": "iter/sec",
            "range": "stddev: 0.0002538477143102904",
            "extra": "mean: 3.0958650357144726 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.7450067903857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005769533179101391",
            "extra": "mean: 1.4864473015874509 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 849.6247656880967,
            "unit": "iter/sec",
            "range": "stddev: 0.00011450551850006011",
            "extra": "mean: 1.176990173056122 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 778.5272877056486,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275671475827117",
            "extra": "mean: 1.2844764927213281 msec\nrounds: 893"
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
          "id": "0d2a9e41a956ccbcef8329161cdb6bed5587d9bc",
          "message": "Merge pull request #1497 from TeoZosa/dependabot/pip/orjson-3.10.11",
          "timestamp": "2024-11-04T15:32:32Z",
          "tree_id": "7c2efc407c232ed71d6e76423981d166fab32fb3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0d2a9e41a956ccbcef8329161cdb6bed5587d9bc"
        },
        "date": 1730734664445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.16331822083774,
            "unit": "iter/sec",
            "range": "stddev: 0.00023534325572884665",
            "extra": "mean: 4.363700123404263 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.8825934072005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008306409403204242",
            "extra": "mean: 2.950874490028476 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.2678064028612,
            "unit": "iter/sec",
            "range": "stddev: 0.000045519358356436074",
            "extra": "mean: 2.362570422018376 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1039.938423239734,
            "unit": "iter/sec",
            "range": "stddev: 0.00002157097667214297",
            "extra": "mean: 961.5953960857478 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.067598336056,
            "unit": "iter/sec",
            "range": "stddev: 0.00022457854294518397",
            "extra": "mean: 4.7154775545452985 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.0272005014727,
            "unit": "iter/sec",
            "range": "stddev: 0.000070515631865501",
            "extra": "mean: 3.2570404132489994 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.5053031271508,
            "unit": "iter/sec",
            "range": "stddev: 0.00007288997242057398",
            "extra": "mean: 2.453955794749443 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 952.9273074646939,
            "unit": "iter/sec",
            "range": "stddev: 0.000040603133546721855",
            "extra": "mean: 1.049397988877604 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.932538279466135,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256986977027696",
            "extra": "mean: 100.67919920000037 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.224385241525594,
            "unit": "iter/sec",
            "range": "stddev: 0.00027722226492688217",
            "extra": "mean: 97.80539136363652 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.8445658759492,
            "unit": "iter/sec",
            "range": "stddev: 0.00010301753306792724",
            "extra": "mean: 3.116773996997158 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.2688764955788,
            "unit": "iter/sec",
            "range": "stddev: 0.000053947280669614324",
            "extra": "mean: 1.4964036709954662 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 847.935937364118,
            "unit": "iter/sec",
            "range": "stddev: 0.00006576359697919688",
            "extra": "mean: 1.179334376496161 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 781.4604945816842,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911171716921523",
            "extra": "mean: 1.2796552185728851 msec\nrounds: 883"
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
          "id": "0d7329f9c24b528ef32b7fabf98cceee5b004031",
          "message": "Merge pull request #1498 from TeoZosa/dependabot/pip/sentry-sdk-2.18.0",
          "timestamp": "2024-11-04T15:37:30Z",
          "tree_id": "f20e21d63d6845e027d7f982264a1a57850c3840",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0d7329f9c24b528ef32b7fabf98cceee5b004031"
        },
        "date": 1730735059158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.4502447982816,
            "unit": "iter/sec",
            "range": "stddev: 0.00022773458510732893",
            "extra": "mean: 4.5987531581197025 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 326.358731786132,
            "unit": "iter/sec",
            "range": "stddev: 0.00009818293854235607",
            "extra": "mean: 3.064112899713422 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.58646670260293,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033262896990648",
            "extra": "mean: 2.412042071593558 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1056.645456879247,
            "unit": "iter/sec",
            "range": "stddev: 0.000036086776904909125",
            "extra": "mean: 946.3912360475701 usec\nrounds: 1093"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.03935101699656,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368314621049604",
            "extra": "mean: 4.853441806451372 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 290.17283167342197,
            "unit": "iter/sec",
            "range": "stddev: 0.00008347533810338036",
            "extra": "mean: 3.4462220126984886 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.6476190107217,
            "unit": "iter/sec",
            "range": "stddev: 0.00007881168612224542",
            "extra": "mean: 2.593040772727287 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 964.871128065758,
            "unit": "iter/sec",
            "range": "stddev: 0.00004147298023726241",
            "extra": "mean: 1.0364078382204922 msec\nrounds: 989"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.515076378283942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006201559243257559",
            "extra": "mean: 105.09637130000122 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.069578591065437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006110585481040196",
            "extra": "mean: 99.30902181818043 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.43037383834263,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814610509936509",
            "extra": "mean: 3.1110936656625086 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.5560481061534,
            "unit": "iter/sec",
            "range": "stddev: 0.00006918299577522988",
            "extra": "mean: 1.495760905660403 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 854.3644913514776,
            "unit": "iter/sec",
            "range": "stddev: 0.000052142571312375754",
            "extra": "mean: 1.1704606290672834 msec\nrounds: 922"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 787.9243737591469,
            "unit": "iter/sec",
            "range": "stddev: 0.00002950650655459446",
            "extra": "mean: 1.2691573370538738 msec\nrounds: 896"
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
          "id": "f5651caa381da6f661fbbd155a7dd8ecb36e3c7c",
          "message": "Merge pull request #1499 from TeoZosa/dependabot/pip/rich-13.9.4",
          "timestamp": "2024-11-04T15:44:17Z",
          "tree_id": "993ed23eddb93975385ce57ef75edddc9aba9ea5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f5651caa381da6f661fbbd155a7dd8ecb36e3c7c"
        },
        "date": 1730735500934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.60920186527477,
            "unit": "iter/sec",
            "range": "stddev: 0.00017846321956647353",
            "extra": "mean: 4.355226148936134 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 344.5623598466206,
            "unit": "iter/sec",
            "range": "stddev: 0.00005890696192023238",
            "extra": "mean: 2.902232270655282 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.0128333929288,
            "unit": "iter/sec",
            "range": "stddev: 0.00006784940654531287",
            "extra": "mean: 2.3695961849314604 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1021.1032584895178,
            "unit": "iter/sec",
            "range": "stddev: 0.000026140979219832343",
            "extra": "mean: 979.3328849809616 usec\nrounds: 1052"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.93703198487634,
            "unit": "iter/sec",
            "range": "stddev: 0.00008563828472398513",
            "extra": "mean: 4.786130972092988 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.2891264976164,
            "unit": "iter/sec",
            "range": "stddev: 0.00004675572325881519",
            "extra": "mean: 3.3080912025722014 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.41298723311655,
            "unit": "iter/sec",
            "range": "stddev: 0.00004158319236101373",
            "extra": "mean: 2.4545118377088277 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 932.8571480649764,
            "unit": "iter/sec",
            "range": "stddev: 0.000045324478455505224",
            "extra": "mean: 1.071975491718424 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.040598618320862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040014810208062",
            "extra": "mean: 99.59565539999993 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.328914294212002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003088473745975497",
            "extra": "mean: 96.81559663636367 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.43207336179364,
            "unit": "iter/sec",
            "range": "stddev: 0.00008877551128094013",
            "extra": "mean: 3.0447696224187633 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 676.3772624400001,
            "unit": "iter/sec",
            "range": "stddev: 0.000048246355428053016",
            "extra": "mean: 1.4784648383840486 msec\nrounds: 693"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 855.1333196154415,
            "unit": "iter/sec",
            "range": "stddev: 0.000036097526867977804",
            "extra": "mean: 1.1694082981700513 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 788.4879482366574,
            "unit": "iter/sec",
            "range": "stddev: 0.00002690326346265368",
            "extra": "mean: 1.268250202474698 msec\nrounds: 889"
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
          "id": "5b2126d132b2365d977f2dabf02bbbc0a96e2bb4",
          "message": "Merge pull request #1500 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.0",
          "timestamp": "2024-11-06T14:46:21Z",
          "tree_id": "457dc8776fe18182ce1b6df037de37a1ec4dcb8b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5b2126d132b2365d977f2dabf02bbbc0a96e2bb4"
        },
        "date": 1730904580589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.45507763866965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001831423691842877",
            "extra": "mean: 4.283479331932763 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.6514836911776,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283837365539015",
            "extra": "mean: 2.884741727777726 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.64292052532994,
            "unit": "iter/sec",
            "range": "stddev: 0.000039298481113712985",
            "extra": "mean: 2.3221094608501316 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1077.886880309477,
            "unit": "iter/sec",
            "range": "stddev: 0.000037131976044310635",
            "extra": "mean: 927.741137096766 usec\nrounds: 1116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.42459283162847,
            "unit": "iter/sec",
            "range": "stddev: 0.00010877880486560088",
            "extra": "mean: 4.685495643835686 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.721436201437,
            "unit": "iter/sec",
            "range": "stddev: 0.000053307842547453914",
            "extra": "mean: 3.270951531645656 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.60823309889173,
            "unit": "iter/sec",
            "range": "stddev: 0.000044903596317726474",
            "extra": "mean: 2.4236065104409232 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.373216659823,
            "unit": "iter/sec",
            "range": "stddev: 0.000029409678024078918",
            "extra": "mean: 1.0380193083083293 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.942778046895642,
            "unit": "iter/sec",
            "range": "stddev: 0.00157488398455033",
            "extra": "mean: 100.57551272727268 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.212504343505623,
            "unit": "iter/sec",
            "range": "stddev: 0.0007495899559549327",
            "extra": "mean: 97.91917500000125 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.7078494984921,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140605535839564",
            "extra": "mean: 3.051498465875476 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 679.2229463021291,
            "unit": "iter/sec",
            "range": "stddev: 0.000046776803703486285",
            "extra": "mean: 1.472270637269054 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.5259811029676,
            "unit": "iter/sec",
            "range": "stddev: 0.00006038386019165866",
            "extra": "mean: 1.1607311003200984 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 793.6608796259093,
            "unit": "iter/sec",
            "range": "stddev: 0.000059310657697072706",
            "extra": "mean: 1.259983987709396 msec\nrounds: 895"
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
          "id": "daace40f44156e576c7ed0488f351f91cd5b6761",
          "message": ":arrow_up: Bump Python `3.12.6` to `3.12.7`",
          "timestamp": "2024-11-07T09:20:15+09:00",
          "tree_id": "cd2ff39777f03a5e5b4a32efe1288d88dfe8efb0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/daace40f44156e576c7ed0488f351f91cd5b6761"
        },
        "date": 1730939094715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 235.48237116847355,
            "unit": "iter/sec",
            "range": "stddev: 0.00007353821388501778",
            "extra": "mean: 4.24660238912135 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 349.8801827030318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007979113298233776",
            "extra": "mean: 2.8581212924790633 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.28413198864075,
            "unit": "iter/sec",
            "range": "stddev: 0.00006075500599460294",
            "extra": "mean: 2.3403630632054098 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1070.3949429976203,
            "unit": "iter/sec",
            "range": "stddev: 0.000034849154716045955",
            "extra": "mean: 934.2346080218945 usec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.3461189010295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012988150486042206",
            "extra": "mean: 4.665351559090893 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 308.1841804732231,
            "unit": "iter/sec",
            "range": "stddev: 0.00005500772258962064",
            "extra": "mean: 3.2448128858025083 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.2640243409128,
            "unit": "iter/sec",
            "range": "stddev: 0.00006911608739884518",
            "extra": "mean: 2.4374547624703267 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 955.4178864769283,
            "unit": "iter/sec",
            "range": "stddev: 0.000039318237605533344",
            "extra": "mean: 1.0466624229607704 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.028727933002632,
            "unit": "iter/sec",
            "range": "stddev: 0.000472898119469003",
            "extra": "mean: 99.71354360000042 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.233619989464636,
            "unit": "iter/sec",
            "range": "stddev: 0.0010946663770514276",
            "extra": "mean: 97.71713245454546 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.71224383794566,
            "unit": "iter/sec",
            "range": "stddev: 0.00003888574224757036",
            "extra": "mean: 3.0514575479044415 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.833856348802,
            "unit": "iter/sec",
            "range": "stddev: 0.00005801248331590167",
            "extra": "mean: 1.466632949784816 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.2200401599497,
            "unit": "iter/sec",
            "range": "stddev: 0.00004209754281176029",
            "extra": "mean: 1.1584531793477661 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.8229964298622,
            "unit": "iter/sec",
            "range": "stddev: 0.00005002926887573455",
            "extra": "mean: 1.2661064624861196 msec\nrounds: 893"
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
          "id": "ff3364d840705d5366d03aa0ff5d87472c9997c8",
          "message": "Merge pull request #1494 from TeoZosa/dependabot/pip/pytest-cov-6.0.0\n\n⬆️ Bump pytest-cov from 5.0.0 to 6.0.0",
          "timestamp": "2024-11-07T09:39:30+09:00",
          "tree_id": "c0c0a3a9c5376be6be028fbbeb346d26bd76ddb7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ff3364d840705d5366d03aa0ff5d87472c9997c8"
        },
        "date": 1730940364070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.42622314534339,
            "unit": "iter/sec",
            "range": "stddev: 0.000195589937876658",
            "extra": "mean: 4.377781089361699 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.0000600148704,
            "unit": "iter/sec",
            "range": "stddev: 0.00008802797790743496",
            "extra": "mean: 2.9411759514285483 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.64920656450005,
            "unit": "iter/sec",
            "range": "stddev: 0.000032340300878206185",
            "extra": "mean: 2.3829426682028054 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1031.9653073364175,
            "unit": "iter/sec",
            "range": "stddev: 0.000025144520416156768",
            "extra": "mean: 969.0248236940035 usec\nrounds: 1072"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.62843051504834,
            "unit": "iter/sec",
            "range": "stddev: 0.00012217983641475542",
            "extra": "mean: 4.747697153488285 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.9605090000559,
            "unit": "iter/sec",
            "range": "stddev: 0.00005570743405532548",
            "extra": "mean: 3.289901057508152 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.6231145163157,
            "unit": "iter/sec",
            "range": "stddev: 0.00003750227097503782",
            "extra": "mean: 2.471435674641066 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 971.3826443238172,
            "unit": "iter/sec",
            "range": "stddev: 0.000024487717169284152",
            "extra": "mean: 1.0294604354354133 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.932807605917857,
            "unit": "iter/sec",
            "range": "stddev: 0.0007694099250575157",
            "extra": "mean: 100.67646930000045 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.158689545080989,
            "unit": "iter/sec",
            "range": "stddev: 0.00019915604740907957",
            "extra": "mean: 98.4378935454541 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.6238111930001,
            "unit": "iter/sec",
            "range": "stddev: 0.000047135819370439155",
            "extra": "mean: 3.0429931305638167 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.7362192384854,
            "unit": "iter/sec",
            "range": "stddev: 0.00005735319754772577",
            "extra": "mean: 1.4820606504992586 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 857.1485449955004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000400256334412359",
            "extra": "mean: 1.1666589249186083 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 797.365261502599,
            "unit": "iter/sec",
            "range": "stddev: 0.00002921228094886855",
            "extra": "mean: 1.2541303819977623 msec\nrounds: 911"
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
          "id": "2a69bbda38c860262a9ed4dace7c5e3e395d747c",
          "message": "Merge pull request #1488 from TeoZosa/dependabot/pip/dot-github/workflows/pip-24.3.1\n\n⬆️ Bump pip from 24.2 to 24.3.1 in /.github/workflows",
          "timestamp": "2024-11-07T09:40:58+09:00",
          "tree_id": "d3ac5803dbe9d1b96b5672811511803626e62ec8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2a69bbda38c860262a9ed4dace7c5e3e395d747c"
        },
        "date": 1730940789155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.20606848509985,
            "unit": "iter/sec",
            "range": "stddev: 0.00015618660153509804",
            "extra": "mean: 4.30651966386558 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.3493470519184,
            "unit": "iter/sec",
            "range": "stddev: 0.00007938863194616195",
            "extra": "mean: 2.895618620786516 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.05170267428736,
            "unit": "iter/sec",
            "range": "stddev: 0.00006297175385628986",
            "extra": "mean: 2.3526549681093494 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1058.7910754742995,
            "unit": "iter/sec",
            "range": "stddev: 0.000023758542242196513",
            "extra": "mean: 944.4733934426456 usec\nrounds: 1098"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.97897714451693,
            "unit": "iter/sec",
            "range": "stddev: 0.00010182233371354817",
            "extra": "mean: 4.695299101382433 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.2005427984987,
            "unit": "iter/sec",
            "range": "stddev: 0.00006100912697256386",
            "extra": "mean: 3.2873051139241265 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.357892469845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000910784810393752",
            "extra": "mean: 2.4730567119438014 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 959.7949902921979,
            "unit": "iter/sec",
            "range": "stddev: 0.000022425340843412305",
            "extra": "mean: 1.041889163951108 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.908748590292259,
            "unit": "iter/sec",
            "range": "stddev: 0.000419213100320017",
            "extra": "mean: 100.92091759999988 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 9.583958814431975,
            "unit": "iter/sec",
            "range": "stddev: 0.011991401455253672",
            "extra": "mean: 104.34101600000129 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.2844988647652,
            "unit": "iter/sec",
            "range": "stddev: 0.00009343832867173417",
            "extra": "mean: 3.0932506925372723 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.8382468890253,
            "unit": "iter/sec",
            "range": "stddev: 0.000035633759315454706",
            "extra": "mean: 1.486241313753579 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 853.7663314286407,
            "unit": "iter/sec",
            "range": "stddev: 0.000040280853320572765",
            "extra": "mean: 1.1712806691810638 msec\nrounds: 928"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 787.5249406196181,
            "unit": "iter/sec",
            "range": "stddev: 0.00005305979722047274",
            "extra": "mean: 1.2698010544443308 msec\nrounds: 900"
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
          "id": "1e63b2b7b745285d4f77c2b01a6c93a41126f0b2",
          "message": "Merge pull request #1501 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.2",
          "timestamp": "2024-11-07T14:20:21Z",
          "tree_id": "ea5114be30488b6b7b053404913dfb3581babf0b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1e63b2b7b745285d4f77c2b01a6c93a41126f0b2"
        },
        "date": 1730989414053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.8163105284279,
            "unit": "iter/sec",
            "range": "stddev: 0.00014938094792803507",
            "extra": "mean: 4.351301253164543 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 345.3911829771792,
            "unit": "iter/sec",
            "range": "stddev: 0.000047793093870551856",
            "extra": "mean: 2.895267885474866 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.85067441961434,
            "unit": "iter/sec",
            "range": "stddev: 0.00006850632968700423",
            "extra": "mean: 2.348240968181829 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1047.4755846057226,
            "unit": "iter/sec",
            "range": "stddev: 0.000055665735098377605",
            "extra": "mean: 954.6761897809839 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.91394908625227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000738974940896498",
            "extra": "mean: 4.6967331369862295 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.35917147962317,
            "unit": "iter/sec",
            "range": "stddev: 0.00008377767806924564",
            "extra": "mean: 3.3182995396827213 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.6956489836045,
            "unit": "iter/sec",
            "range": "stddev: 0.000050250798800688676",
            "extra": "mean: 2.4588411567695774 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 956.8340229032411,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417361402412084",
            "extra": "mean: 1.045113338430195 msec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.01632675830806,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895780436605662",
            "extra": "mean: 99.83699854545462 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.033680406198341,
            "unit": "iter/sec",
            "range": "stddev: 0.0002576447732615987",
            "extra": "mean: 99.66432649999959 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.4912822358829,
            "unit": "iter/sec",
            "range": "stddev: 0.0001032602328905459",
            "extra": "mean: 3.091273412650488 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.1894343957392,
            "unit": "iter/sec",
            "range": "stddev: 0.00003226254756465067",
            "extra": "mean: 1.4898923444769112 msec\nrounds: 688"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 845.8020825131523,
            "unit": "iter/sec",
            "range": "stddev: 0.00004415034602734672",
            "extra": "mean: 1.1823096923912455 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 771.0218244470419,
            "unit": "iter/sec",
            "range": "stddev: 0.00005932680202612426",
            "extra": "mean: 1.2969801480226266 msec\nrounds: 885"
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
          "id": "c92c8519b60c3c05bbc8dfd8e2f1124de5f0de8b",
          "message": "Merge pull request #1505 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.2",
          "timestamp": "2024-11-13T14:43:17Z",
          "tree_id": "10aade2337335d6104782b2dce3a45307f2a6e8d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c92c8519b60c3c05bbc8dfd8e2f1124de5f0de8b"
        },
        "date": 1731509193451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.70987479968147,
            "unit": "iter/sec",
            "range": "stddev: 0.00015364513389540748",
            "extra": "mean: 4.260579154811756 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 346.4800225374097,
            "unit": "iter/sec",
            "range": "stddev: 0.00004110850090631891",
            "extra": "mean: 2.886169288135593 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.498989965155,
            "unit": "iter/sec",
            "range": "stddev: 0.00007485245045350496",
            "extra": "mean: 2.3557182081448182 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1069.534361400492,
            "unit": "iter/sec",
            "range": "stddev: 0.000026952350549971624",
            "extra": "mean: 934.9863231047194 usec\nrounds: 1108"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.47822987191003,
            "unit": "iter/sec",
            "range": "stddev: 0.00007601397039465732",
            "extra": "mean: 4.728619114155101 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.85795334056166,
            "unit": "iter/sec",
            "range": "stddev: 0.00003632940471187456",
            "extra": "mean: 3.2910114380952464 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.6219158715249,
            "unit": "iter/sec",
            "range": "stddev: 0.00006838504098915474",
            "extra": "mean: 2.4472500400943025 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 963.8239128459632,
            "unit": "iter/sec",
            "range": "stddev: 0.000016426343371331092",
            "extra": "mean: 1.037533917421925 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.006326864026235,
            "unit": "iter/sec",
            "range": "stddev: 0.00027140927698779193",
            "extra": "mean: 99.93677136363614 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.297414570832572,
            "unit": "iter/sec",
            "range": "stddev: 0.00020526100305003783",
            "extra": "mean: 97.11175490909146 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.40842472932616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000402862117155284",
            "extra": "mean: 3.0449888757397097 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.2631465641091,
            "unit": "iter/sec",
            "range": "stddev: 0.000031381246775037847",
            "extra": "mean: 1.4853033395683994 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 864.0806163998815,
            "unit": "iter/sec",
            "range": "stddev: 0.00003497253799351479",
            "extra": "mean: 1.157299424406041 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.234464256673,
            "unit": "iter/sec",
            "range": "stddev: 0.00002670076204499089",
            "extra": "mean: 1.2574907715232473 msec\nrounds: 906"
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
          "id": "f4a94a588b991454423a73773f8c31d5c82be983",
          "message": "Merge pull request #1507 from TeoZosa/dependabot/pip/sphinx-rtd-theme-3.0.2",
          "timestamp": "2024-11-14T14:46:15Z",
          "tree_id": "ad0a6328125c993e95eb71089c820c5ff5d570aa",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f4a94a588b991454423a73773f8c31d5c82be983"
        },
        "date": 1731595857516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.25457617705402,
            "unit": "iter/sec",
            "range": "stddev: 0.00016682149486520052",
            "extra": "mean: 4.305620222689058 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.43285518881424,
            "unit": "iter/sec",
            "range": "stddev: 0.000054277526570275565",
            "extra": "mean: 2.9635525545976815 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.8738957620373,
            "unit": "iter/sec",
            "range": "stddev: 0.00004043932720369962",
            "extra": "mean: 2.353639538636373 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1053.1680834676501,
            "unit": "iter/sec",
            "range": "stddev: 0.000035609617750851663",
            "extra": "mean: 949.5160513290627 usec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.31258288671194,
            "unit": "iter/sec",
            "range": "stddev: 0.00005590676564822805",
            "extra": "mean: 4.644410403669516 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.2024196944576,
            "unit": "iter/sec",
            "range": "stddev: 0.00004402092042136495",
            "extra": "mean: 3.2765139968454835 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.14867882766447,
            "unit": "iter/sec",
            "range": "stddev: 0.00007633779481420776",
            "extra": "mean: 2.4440993011765415 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 973.7190717569865,
            "unit": "iter/sec",
            "range": "stddev: 0.000019019866156945448",
            "extra": "mean: 1.0269902572572518 msec\nrounds: 999"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.907274773858171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342175948513269",
            "extra": "mean: 100.93593069999933 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.048482310255043,
            "unit": "iter/sec",
            "range": "stddev: 0.000783443199740708",
            "extra": "mean: 99.51751609090694 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 322.9831928382986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000391261884059759",
            "extra": "mean: 3.096136338278907 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 672.6179906479766,
            "unit": "iter/sec",
            "range": "stddev: 0.00003992347447994157",
            "extra": "mean: 1.4867279999998737 msec\nrounds: 695"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 849.1323848336644,
            "unit": "iter/sec",
            "range": "stddev: 0.00009102447919760295",
            "extra": "mean: 1.1776726666665631 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 793.1265656157701,
            "unit": "iter/sec",
            "range": "stddev: 0.000028708595863115563",
            "extra": "mean: 1.2608328145251533 msec\nrounds: 895"
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
          "id": "564e5480eb096043baae32d1c3adc2f293c50b6a",
          "message": "Merge pull request #1513 from TeoZosa/dependabot/pip/sentry-sdk-2.19.0",
          "timestamp": "2024-11-22T14:39:10Z",
          "tree_id": "133d7153af4d61c80c6a303c4d40f438015857bb",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/564e5480eb096043baae32d1c3adc2f293c50b6a"
        },
        "date": 1732286516597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 228.14657449599906,
            "unit": "iter/sec",
            "range": "stddev: 0.0002187378138932763",
            "extra": "mean: 4.383147115879825 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 335.0547867385954,
            "unit": "iter/sec",
            "range": "stddev: 0.00006750097045959146",
            "extra": "mean: 2.9845865201149464 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.61054341269175,
            "unit": "iter/sec",
            "range": "stddev: 0.00008123660781082511",
            "extra": "mean: 2.3662447981650807 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1057.1623132755628,
            "unit": "iter/sec",
            "range": "stddev: 0.00003749521331424851",
            "extra": "mean: 945.9285366516251 usec\nrounds: 1105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.96706593598662,
            "unit": "iter/sec",
            "range": "stddev: 0.00006469280481265511",
            "extra": "mean: 4.673616454128385 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 306.05041383872674,
            "unit": "iter/sec",
            "range": "stddev: 0.00008391310964830894",
            "extra": "mean: 3.267435542586621 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.9250885804843,
            "unit": "iter/sec",
            "range": "stddev: 0.000053698221726508356",
            "extra": "mean: 2.4394701077283805 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.9252172250465,
            "unit": "iter/sec",
            "range": "stddev: 0.00003972074513928939",
            "extra": "mean: 1.039581853238853 msec\nrounds: 988"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.928524226452442,
            "unit": "iter/sec",
            "range": "stddev: 0.000180424080941732",
            "extra": "mean: 100.71990330000027 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.113671061259707,
            "unit": "iter/sec",
            "range": "stddev: 0.0010957239711848045",
            "extra": "mean: 98.87606527272652 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.8373153309266,
            "unit": "iter/sec",
            "range": "stddev: 0.000055183022289600324",
            "extra": "mean: 3.1462636756757703 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.5028550630024,
            "unit": "iter/sec",
            "range": "stddev: 0.00005545450240628944",
            "extra": "mean: 1.4891969445255404 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 848.9328787912459,
            "unit": "iter/sec",
            "range": "stddev: 0.00005345075709873155",
            "extra": "mean: 1.1779494291985146 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 776.1148760187282,
            "unit": "iter/sec",
            "range": "stddev: 0.00003869973562069309",
            "extra": "mean: 1.2884690538722123 msec\nrounds: 891"
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
          "id": "90caf1c4258dc18e9d9f4613af76fcdd8fa70a40",
          "message": "Merge pull request #1514 from TeoZosa/dependabot/pip/pip-661d9d4597",
          "timestamp": "2024-11-22T22:47:02Z",
          "tree_id": "2560cd6de3c956bac939430c7b0d37c38985b4f0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/90caf1c4258dc18e9d9f4613af76fcdd8fa70a40"
        },
        "date": 1732315784368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.8995885786861,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592853064603907",
            "extra": "mean: 4.312211186440673 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.1263070527874,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405650917428505",
            "extra": "mean: 2.9143786980056805 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.82973564669834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000770379227158167",
            "extra": "mean: 2.370624722476999 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1061.381874655969,
            "unit": "iter/sec",
            "range": "stddev: 0.000016114897718234658",
            "extra": "mean: 942.1679641214288 usec\nrounds: 1087"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.81489144275224,
            "unit": "iter/sec",
            "range": "stddev: 0.00004858778972304125",
            "extra": "mean: 4.676942720183474 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.55435174716695,
            "unit": "iter/sec",
            "range": "stddev: 0.00006050948474611295",
            "extra": "mean: 3.2514578132910827 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.5669866431526,
            "unit": "iter/sec",
            "range": "stddev: 0.00022552630793814027",
            "extra": "mean: 2.453584399061142 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 969.8385679018006,
            "unit": "iter/sec",
            "range": "stddev: 0.000019109719296761706",
            "extra": "mean: 1.031099435613756 msec\nrounds: 994"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.040110909381259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125511745431941",
            "extra": "mean: 99.60049336363626 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.350049854731749,
            "unit": "iter/sec",
            "range": "stddev: 0.00013932669042102845",
            "extra": "mean: 96.61789209090895 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 321.28209966361305,
            "unit": "iter/sec",
            "range": "stddev: 0.0002342482556677092",
            "extra": "mean: 3.112529459459504 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 665.9990102307551,
            "unit": "iter/sec",
            "range": "stddev: 0.000027950714154821307",
            "extra": "mean: 1.5015037329462704 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 859.7515532406196,
            "unit": "iter/sec",
            "range": "stddev: 0.00005911863698250221",
            "extra": "mean: 1.163126715189695 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 793.0167969922584,
            "unit": "iter/sec",
            "range": "stddev: 0.00004269760142903586",
            "extra": "mean: 1.2610073377925717 msec\nrounds: 897"
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
          "id": "7cdcdee5266f441dd99fe61e7255b9c636bcf78f",
          "message": "Merge pull request #1515 from TeoZosa/dependabot/pip/orjson-3.10.12",
          "timestamp": "2024-11-25T14:37:59Z",
          "tree_id": "9ac429a3ca6330836a550dc261ac6733fde230e4",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7cdcdee5266f441dd99fe61e7255b9c636bcf78f"
        },
        "date": 1732545711518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.65257893564305,
            "unit": "iter/sec",
            "range": "stddev: 0.00037442762607747246",
            "extra": "mean: 4.33552490336135 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.5435010700102,
            "unit": "iter/sec",
            "range": "stddev: 0.00008882404725645168",
            "extra": "mean: 2.9193372429378437 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.42655739863983,
            "unit": "iter/sec",
            "range": "stddev: 0.00003238880862342844",
            "extra": "mean: 2.3450697022726983 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1083.6106788779298,
            "unit": "iter/sec",
            "range": "stddev: 0.00003503949764814065",
            "extra": "mean: 922.840665464364 usec\nrounds: 1109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.25227154394463,
            "unit": "iter/sec",
            "range": "stddev: 0.00011687631715495055",
            "extra": "mean: 4.645711716895151 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.96137045063904,
            "unit": "iter/sec",
            "range": "stddev: 0.00008931580211747623",
            "extra": "mean: 3.2791038370607652 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.4660431864214,
            "unit": "iter/sec",
            "range": "stddev: 0.00007208575278728344",
            "extra": "mean: 2.43033420754707 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 978.2141056903052,
            "unit": "iter/sec",
            "range": "stddev: 0.00003749058350145043",
            "extra": "mean: 1.0222710899208725 msec\nrounds: 1012"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.123871718426125,
            "unit": "iter/sec",
            "range": "stddev: 0.00018774334895158245",
            "extra": "mean: 98.77643927272733 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.26635882236879,
            "unit": "iter/sec",
            "range": "stddev: 0.0003236365227597258",
            "extra": "mean: 97.40551809090837 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 325.687765580804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008882485562399767",
            "extra": "mean: 3.0704254371259063 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 675.4770869442655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003364045433868967",
            "extra": "mean: 1.480435116642989 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 873.4156681013878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000642278767620053",
            "extra": "mean: 1.1449302279792832 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 798.832978368381,
            "unit": "iter/sec",
            "range": "stddev: 0.000057399476794779274",
            "extra": "mean: 1.25182613522354 msec\nrounds: 917"
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
          "id": "9b1502680dd6d693bde07bca0d08d57f51d4a910",
          "message": "Merge pull request #1516 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.22.0",
          "timestamp": "2024-11-25T15:23:07Z",
          "tree_id": "f1d7edc23cd20a161f98f46b84e7917241188c54",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9b1502680dd6d693bde07bca0d08d57f51d4a910"
        },
        "date": 1732548498376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.0457458051012,
            "unit": "iter/sec",
            "range": "stddev: 0.00017217047016504196",
            "extra": "mean: 4.3094950805084595 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 334.827137739512,
            "unit": "iter/sec",
            "range": "stddev: 0.00024381884571388605",
            "extra": "mean: 2.9866157407407568 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.1888397894886,
            "unit": "iter/sec",
            "range": "stddev: 0.000049070714845371505",
            "extra": "mean: 2.3518961609977835 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1082.9528291394531,
            "unit": "iter/sec",
            "range": "stddev: 0.000024249598321097648",
            "extra": "mean: 923.4012535842675 usec\nrounds: 1116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.63034757723975,
            "unit": "iter/sec",
            "range": "stddev: 0.00011353385405310628",
            "extra": "mean: 4.637566146118629 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 307.154852615893,
            "unit": "iter/sec",
            "range": "stddev: 0.00004890069078039752",
            "extra": "mean: 3.255686802547548 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.84851135716355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000571323891449679",
            "extra": "mean: 2.416343112412383 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 989.3453179304441,
            "unit": "iter/sec",
            "range": "stddev: 0.000041235017695194615",
            "extra": "mean: 1.010769426889131 msec\nrounds: 1019"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.011798604301243,
            "unit": "iter/sec",
            "range": "stddev: 0.0007904822217378633",
            "extra": "mean: 99.88215299999968 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.203049496709125,
            "unit": "iter/sec",
            "range": "stddev: 0.0009612565088135248",
            "extra": "mean: 98.00991363636317 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.0406099713109,
            "unit": "iter/sec",
            "range": "stddev: 0.00009957253181194576",
            "extra": "mean: 3.048403062314315 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 687.5907694975832,
            "unit": "iter/sec",
            "range": "stddev: 0.000027531105202501158",
            "extra": "mean: 1.4543534386459136 msec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 861.0197023673209,
            "unit": "iter/sec",
            "range": "stddev: 0.000041014837914152773",
            "extra": "mean: 1.1614136090620937 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 773.104641656171,
            "unit": "iter/sec",
            "range": "stddev: 0.0002496069777423919",
            "extra": "mean: 1.2934859605263345 msec\nrounds: 912"
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
          "id": "78a4010dd2a29dfec0aa914c8a492f6d9260b739",
          "message": "Merge pull request #1517 from TeoZosa/dependabot/pip/orjson-3.10.12",
          "timestamp": "2024-11-26T14:31:56Z",
          "tree_id": "c017414ae850471581f5d746922eca04e86799b3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/78a4010dd2a29dfec0aa914c8a492f6d9260b739"
        },
        "date": 1732631799919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.6254999094306,
            "unit": "iter/sec",
            "range": "stddev: 0.00021267409903743235",
            "extra": "mean: 4.354917029661001 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 342.3134260575752,
            "unit": "iter/sec",
            "range": "stddev: 0.00008435440720627066",
            "extra": "mean: 2.921299382022503 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.8884951209964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000322888235514625",
            "extra": "mean: 2.3591109726027266 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1070.7628314878261,
            "unit": "iter/sec",
            "range": "stddev: 0.000022436905694139088",
            "extra": "mean: 933.9136273627455 usec\nrounds: 1111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.99659224434305,
            "unit": "iter/sec",
            "range": "stddev: 0.00004996248950592383",
            "extra": "mean: 4.672971609090821 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 314.61297300421205,
            "unit": "iter/sec",
            "range": "stddev: 0.000029334752182039684",
            "extra": "mean: 3.178508471698057 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.2196449737049,
            "unit": "iter/sec",
            "range": "stddev: 0.00006391287586948034",
            "extra": "mean: 2.4083638915093437 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 978.3245651083271,
            "unit": "iter/sec",
            "range": "stddev: 0.00004039064234765143",
            "extra": "mean: 1.0221556686448663 msec\nrounds: 1011"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.06687692656969,
            "unit": "iter/sec",
            "range": "stddev: 0.00097385008100401",
            "extra": "mean: 99.335673545455 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.207529779769677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006469019024132056",
            "extra": "mean: 97.96689518181978 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.61402716500777,
            "unit": "iter/sec",
            "range": "stddev: 0.00007430821261010587",
            "extra": "mean: 2.9707615229884676 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 685.3530194520706,
            "unit": "iter/sec",
            "range": "stddev: 0.00003061691398937743",
            "extra": "mean: 1.4591020563380388 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 859.2437338730035,
            "unit": "iter/sec",
            "range": "stddev: 0.000035429987831478084",
            "extra": "mean: 1.1638141316347388 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 789.0861021517335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005340433243998832",
            "extra": "mean: 1.267288825988865 msec\nrounds: 885"
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
          "id": "1eb5227f90226e05b0e4937d33e305513a2126b7",
          "message": "Merge pull request #1518 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.4.0",
          "timestamp": "2024-12-02T14:36:05Z",
          "tree_id": "2b72a87465810b5098f1f8d646ee9775c57c41ab",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1eb5227f90226e05b0e4937d33e305513a2126b7"
        },
        "date": 1733150367462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.90560262337988,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686748852964854",
            "extra": "mean: 4.4266277081545296 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 338.83851461429185,
            "unit": "iter/sec",
            "range": "stddev: 0.00003917686069963278",
            "extra": "mean: 2.9512583631123643 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.74125666376267,
            "unit": "iter/sec",
            "range": "stddev: 0.00007504977656189062",
            "extra": "mean: 2.399570438515103 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1066.8759605732942,
            "unit": "iter/sec",
            "range": "stddev: 0.00003651734242646027",
            "extra": "mean: 937.3160863636313 usec\nrounds: 1100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.5959720124847,
            "unit": "iter/sec",
            "range": "stddev: 0.0003485735632449008",
            "extra": "mean: 4.817049147465446 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.92772705504956,
            "unit": "iter/sec",
            "range": "stddev: 0.00003243110352834784",
            "extra": "mean: 3.2687458885348337 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.77111784281357,
            "unit": "iter/sec",
            "range": "stddev: 0.00008990785882146833",
            "extra": "mean: 2.4827996738094376 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 954.8521847145486,
            "unit": "iter/sec",
            "range": "stddev: 0.00002369533881885391",
            "extra": "mean: 1.0472825176589489 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.005557787184031,
            "unit": "iter/sec",
            "range": "stddev: 0.00021687740401054196",
            "extra": "mean: 99.94445300000017 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.131020649481792,
            "unit": "iter/sec",
            "range": "stddev: 0.00023021465592540203",
            "extra": "mean: 98.70673790909218 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.0228152555842,
            "unit": "iter/sec",
            "range": "stddev: 0.00008572901483632332",
            "extra": "mean: 3.164328496951233 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 683.0612654322694,
            "unit": "iter/sec",
            "range": "stddev: 0.00003068873053502668",
            "extra": "mean: 1.463997522048273 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 853.3240751736854,
            "unit": "iter/sec",
            "range": "stddev: 0.00005504403499949787",
            "extra": "mean: 1.1718877142854083 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 797.2309384089787,
            "unit": "iter/sec",
            "range": "stddev: 0.00007231712590023695",
            "extra": "mean: 1.254341686733438 msec\nrounds: 897"
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
          "id": "a24ba3298a49c3c66a18596c3b11556e99f41565",
          "message": "Merge pull request #1519 from TeoZosa/dependabot/pip/sphinx-autoapi-3.4.0",
          "timestamp": "2024-12-02T16:47:35Z",
          "tree_id": "6b501032ed8223db07ee450953f13c7b208e5647",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a24ba3298a49c3c66a18596c3b11556e99f41565"
        },
        "date": 1733158308929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 218.41090055546272,
            "unit": "iter/sec",
            "range": "stddev: 0.00018862312705597014",
            "extra": "mean: 4.578526060085827 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 322.49727534566614,
            "unit": "iter/sec",
            "range": "stddev: 0.00013532972430389676",
            "extra": "mean: 3.1008013910448016 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.29139736588513,
            "unit": "iter/sec",
            "range": "stddev: 0.00005985175261327514",
            "extra": "mean: 2.479596655251122 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1048.5030174865226,
            "unit": "iter/sec",
            "range": "stddev: 0.000020888700152336066",
            "extra": "mean: 953.740698235858 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.5869519138498,
            "unit": "iter/sec",
            "range": "stddev: 0.000055329410424045164",
            "extra": "mean: 4.9361520599078395 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.13826160131254,
            "unit": "iter/sec",
            "range": "stddev: 0.00037684159228165216",
            "extra": "mean: 3.287978285714264 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.30311161228366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000745426022681668",
            "extra": "mean: 2.5361199811765505 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 970.7108642643675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000190875064562348",
            "extra": "mean: 1.030172873111736 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.04426280622802,
            "unit": "iter/sec",
            "range": "stddev: 0.00033789322941473566",
            "extra": "mean: 99.55932249999897 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.157786062139802,
            "unit": "iter/sec",
            "range": "stddev: 0.0016520036222905736",
            "extra": "mean: 98.44664909090865 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.3843167768491,
            "unit": "iter/sec",
            "range": "stddev: 0.00006754785735141753",
            "extra": "mean: 3.0545140642201796 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.5175032591601,
            "unit": "iter/sec",
            "range": "stddev: 0.000033102449839249417",
            "extra": "mean: 1.4673137450143097 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 879.773918816513,
            "unit": "iter/sec",
            "range": "stddev: 0.000049225351142517716",
            "extra": "mean: 1.1366556550633113 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 803.840955867847,
            "unit": "iter/sec",
            "range": "stddev: 0.00006276745785004982",
            "extra": "mean: 1.244027183114071 msec\nrounds: 912"
          }
        ]
      }
    ]
  }
}