window.BENCHMARK_DATA = {
  "lastUpdate": 1747235487689,
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
          "id": "de9d425e4bf505bb68944550101cdb0dafd39146",
          "message": "Merge pull request #1520 from TeoZosa/dependabot/pip/pytest-8.3.4",
          "timestamp": "2024-12-02T17:26:19Z",
          "tree_id": "90172706254302c4e424aca06b3928e85a084cb6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/de9d425e4bf505bb68944550101cdb0dafd39146"
        },
        "date": 1733160540493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.36166112697018,
            "unit": "iter/sec",
            "range": "stddev: 0.00009662530558528016",
            "extra": "mean: 4.303635957627135 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 340.46294588695,
            "unit": "iter/sec",
            "range": "stddev: 0.00030499656664240697",
            "extra": "mean: 2.937177193820228 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.14443288948183,
            "unit": "iter/sec",
            "range": "stddev: 0.00003250727114986478",
            "extra": "mean: 2.3858124348836944 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1048.810664269668,
            "unit": "iter/sec",
            "range": "stddev: 0.00002085376371449469",
            "extra": "mean: 953.4609382488908 usec\nrounds: 1085"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.29146876639825,
            "unit": "iter/sec",
            "range": "stddev: 0.000050203760702816155",
            "extra": "mean: 4.666541350230383 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 309.5909843175833,
            "unit": "iter/sec",
            "range": "stddev: 0.00003622053353484736",
            "extra": "mean: 3.23006822115396 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.6736396371518,
            "unit": "iter/sec",
            "range": "stddev: 0.00005104654466373969",
            "extra": "mean: 2.4772487024390926 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 952.5911396074217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002648582921334798",
            "extra": "mean: 1.049768319713866 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.122179379719663,
            "unit": "iter/sec",
            "range": "stddev: 0.0002292310160366953",
            "extra": "mean: 98.79295381818213 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.167349601685414,
            "unit": "iter/sec",
            "range": "stddev: 0.0016787149076956521",
            "extra": "mean: 98.35404890909157 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.2790326836112,
            "unit": "iter/sec",
            "range": "stddev: 0.000041696215077747084",
            "extra": "mean: 3.1222774454544258 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 669.7193889077844,
            "unit": "iter/sec",
            "range": "stddev: 0.000053822828050456125",
            "extra": "mean: 1.4931626835992544 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 858.9172642154679,
            "unit": "iter/sec",
            "range": "stddev: 0.00003848431318843137",
            "extra": "mean: 1.1642564908896047 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 791.6867849095291,
            "unit": "iter/sec",
            "range": "stddev: 0.00003305774999282466",
            "extra": "mean: 1.2631257955307111 msec\nrounds: 895"
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
          "id": "12fb0754cc0e092fc2ee9e9e73cd492c6b768930",
          "message": "Merge pull request #1521 from TeoZosa/dependabot/pip/sentry-sdk-2.19.2",
          "timestamp": "2024-12-06T14:27:38Z",
          "tree_id": "81057b2b91974394c7d22662873279d633052ba7",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/12fb0754cc0e092fc2ee9e9e73cd492c6b768930"
        },
        "date": 1733495422214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.76505728739366,
            "unit": "iter/sec",
            "range": "stddev: 0.00005939171510189615",
            "extra": "mean: 4.277799306722679 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.03886786276644,
            "unit": "iter/sec",
            "range": "stddev: 0.00007756559593997493",
            "extra": "mean: 2.9495143323943975 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.2241554155776,
            "unit": "iter/sec",
            "range": "stddev: 0.00003979079421141217",
            "extra": "mean: 2.3517008318181873 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1096.5256529228975,
            "unit": "iter/sec",
            "range": "stddev: 0.000038848769295346255",
            "extra": "mean: 911.9713682342052 usec\nrounds: 1127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.44636755833722,
            "unit": "iter/sec",
            "range": "stddev: 0.00011411635888305121",
            "extra": "mean: 4.66317061643846 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.32679364329414,
            "unit": "iter/sec",
            "range": "stddev: 0.00009731766962400236",
            "extra": "mean: 3.212058905362833 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.9931707510192,
            "unit": "iter/sec",
            "range": "stddev: 0.00018106559084190036",
            "extra": "mean: 2.4510214182243195 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 993.4464395131023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000559450104300505",
            "extra": "mean: 1.0065967929686372 msec\nrounds: 1024"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.973415869971944,
            "unit": "iter/sec",
            "range": "stddev: 0.0007670529383904112",
            "extra": "mean: 100.26654990000061 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.20739291849073,
            "unit": "iter/sec",
            "range": "stddev: 0.0006102176209823317",
            "extra": "mean: 97.96820872727417 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 328.77633079958065,
            "unit": "iter/sec",
            "range": "stddev: 0.00004697924882256476",
            "extra": "mean: 3.041581483581894 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.4983042191099,
            "unit": "iter/sec",
            "range": "stddev: 0.000057538172645606873",
            "extra": "mean: 1.5048947358491118 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 869.5641332927084,
            "unit": "iter/sec",
            "range": "stddev: 0.000058213685090401353",
            "extra": "mean: 1.1500014337221807 msec\nrounds: 943"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 802.5414495128203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003258053324493945",
            "extra": "mean: 1.2460415603543544 msec\nrounds: 903"
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
          "id": "a1d9601fcb86d7ee3ac9812af0b4632d2dd971dd",
          "message": "Merge pull request #1523 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.8.5",
          "timestamp": "2024-12-09T14:21:46Z",
          "tree_id": "97362ec1a513452bc9374e2911cfffe8b2e7f3b1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a1d9601fcb86d7ee3ac9812af0b4632d2dd971dd"
        },
        "date": 1733754452268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.0378500456331,
            "unit": "iter/sec",
            "range": "stddev: 0.00019267732012557008",
            "extra": "mean: 4.40455192735047 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 339.20697036268035,
            "unit": "iter/sec",
            "range": "stddev: 0.000054488518281109345",
            "extra": "mean: 2.948052626780633 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.26587286402145,
            "unit": "iter/sec",
            "range": "stddev: 0.00006118418824628541",
            "extra": "mean: 2.368176223234647 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1071.8292273600757,
            "unit": "iter/sec",
            "range": "stddev: 0.000041276829527517405",
            "extra": "mean: 932.9844479637939 usec\nrounds: 1105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.98853676716607,
            "unit": "iter/sec",
            "range": "stddev: 0.00010076673443604107",
            "extra": "mean: 4.739593986110906 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 304.3851039983029,
            "unit": "iter/sec",
            "range": "stddev: 0.00008368427547569998",
            "extra": "mean: 3.285311885714274 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.1156952124431,
            "unit": "iter/sec",
            "range": "stddev: 0.00004097907620695452",
            "extra": "mean: 2.4502855727698827 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 979.4481034393172,
            "unit": "iter/sec",
            "range": "stddev: 0.000022094833898661487",
            "extra": "mean: 1.0209831398810363 msec\nrounds: 1008"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.947529319459813,
            "unit": "iter/sec",
            "range": "stddev: 0.00019855054328255471",
            "extra": "mean: 100.52747450000012 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.254775047670066,
            "unit": "iter/sec",
            "range": "stddev: 0.0006312175569863313",
            "extra": "mean: 97.51554718181796 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 327.8595709927858,
            "unit": "iter/sec",
            "range": "stddev: 0.000035795647132382334",
            "extra": "mean: 3.0500863432838567 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 666.7069382064548,
            "unit": "iter/sec",
            "range": "stddev: 0.00007942084409026053",
            "extra": "mean: 1.499909394508711 msec\nrounds: 692"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 874.8372718824543,
            "unit": "iter/sec",
            "range": "stddev: 0.00005086739140244349",
            "extra": "mean: 1.1430697252395563 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 793.177058682427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000553149607757425",
            "extra": "mean: 1.2607525508379347 msec\nrounds: 895"
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
          "id": "4efbfaecc926ea8a29c1077d1e2b819b00b44909",
          "message": "Merge pull request #1524 from TeoZosa/dependabot/pip/docs/poetry-1.8.5",
          "timestamp": "2024-12-09T14:31:46Z",
          "tree_id": "6ec96285f2670cf82be834ecd63891f4ac5c76ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4efbfaecc926ea8a29c1077d1e2b819b00b44909"
        },
        "date": 1733754894312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.43526370414148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230509693856508",
            "extra": "mean: 4.396855543478285 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 337.0932948692307,
            "unit": "iter/sec",
            "range": "stddev: 0.000055457384990518734",
            "extra": "mean: 2.9665377959770223 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.5273352355971,
            "unit": "iter/sec",
            "range": "stddev: 0.00009775336511825553",
            "extra": "mean: 2.383634905311766 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1063.2717248635834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003893275534634279",
            "extra": "mean: 940.4933627180756 usec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.1996089373816,
            "unit": "iter/sec",
            "range": "stddev: 0.00008918779593403648",
            "extra": "mean: 4.757382780373771 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 303.85103193623786,
            "unit": "iter/sec",
            "range": "stddev: 0.00004085213989941011",
            "extra": "mean: 3.291086403846233 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.46993722395683,
            "unit": "iter/sec",
            "range": "stddev: 0.00007698413312586857",
            "extra": "mean: 2.454168783132514 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 965.4598348363131,
            "unit": "iter/sec",
            "range": "stddev: 0.000039759483476499216",
            "extra": "mean: 1.035775869608851 msec\nrounds: 997"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.943839788218359,
            "unit": "iter/sec",
            "range": "stddev: 0.0011462922241158322",
            "extra": "mean: 100.5647738999997 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.180191085074187,
            "unit": "iter/sec",
            "range": "stddev: 0.002063107250503878",
            "extra": "mean: 98.22998327272683 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 320.63557774605954,
            "unit": "iter/sec",
            "range": "stddev: 0.00008343712555476429",
            "extra": "mean: 3.1188054894893504 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 657.9971366611538,
            "unit": "iter/sec",
            "range": "stddev: 0.000034664596898151436",
            "extra": "mean: 1.5197634522761851 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 867.3156891932684,
            "unit": "iter/sec",
            "range": "stddev: 0.00004019190026493314",
            "extra": "mean: 1.1529827172043292 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 794.49069795508,
            "unit": "iter/sec",
            "range": "stddev: 0.000028739588233534518",
            "extra": "mean: 1.2586679775784353 msec\nrounds: 892"
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
          "id": "4ade16bd91dd2ceb39753bdd175cef4f360cc84c",
          "message": "Merge pull request #1526 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.3",
          "timestamp": "2024-12-10T14:41:22Z",
          "tree_id": "073e153bd7e1e74a349bc85b12d8eac25e4ecda3",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4ade16bd91dd2ceb39753bdd175cef4f360cc84c"
        },
        "date": 1733841920503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.58919755096076,
            "unit": "iter/sec",
            "range": "stddev: 0.00005460890253250201",
            "extra": "mean: 4.281019886554625 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 343.95541136730196,
            "unit": "iter/sec",
            "range": "stddev: 0.00005129724788859613",
            "extra": "mean: 2.9073535898876246 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.15640533065203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003379999827348359",
            "extra": "mean: 2.3033173937360276 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1090.7976803148622,
            "unit": "iter/sec",
            "range": "stddev: 0.000035766191877607305",
            "extra": "mean: 916.7602920748297 usec\nrounds: 1123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.92921486133207,
            "unit": "iter/sec",
            "range": "stddev: 0.00009490614311312678",
            "extra": "mean: 4.631147298165242 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 311.6204476796864,
            "unit": "iter/sec",
            "range": "stddev: 0.00005691799844607668",
            "extra": "mean: 3.209032037037238 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.4303943771616,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306449371625101",
            "extra": "mean: 2.4071421194379883 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 996.0520127317851,
            "unit": "iter/sec",
            "range": "stddev: 0.000023990090974898004",
            "extra": "mean: 1.003963635651302 msec\nrounds: 1021"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.17504994982887,
            "unit": "iter/sec",
            "range": "stddev: 0.0008250984731043049",
            "extra": "mean: 98.27961581818266 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.312873609628522,
            "unit": "iter/sec",
            "range": "stddev: 0.0003934019107492307",
            "extra": "mean: 96.9661840000016 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.5375019378712,
            "unit": "iter/sec",
            "range": "stddev: 0.000045318267301680135",
            "extra": "mean: 3.016250029498612 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 685.2360896246455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005435732556838036",
            "extra": "mean: 1.4593510399427065 msec\nrounds: 701"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 888.7319252202961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004764560200799024",
            "extra": "mean: 1.1251986922289567 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 818.2740572174527,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270945379657378",
            "extra": "mean: 1.2220844485776658 msec\nrounds: 914"
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
          "id": "c5b540cc9681c8368df8f4d575e960f529d03e89",
          "message": "Merge pull request #1528 from TeoZosa/dependabot/pip/mypy-1.14.0",
          "timestamp": "2024-12-23T14:22:40Z",
          "tree_id": "5d23275d53a1d79869bb68fa5342c7f57604c732",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/c5b540cc9681c8368df8f4d575e960f529d03e89"
        },
        "date": 1734964043914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 271.85520239820534,
            "unit": "iter/sec",
            "range": "stddev: 0.000046095976964115636",
            "extra": "mean: 3.6784287781818135 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 410.43195621115626,
            "unit": "iter/sec",
            "range": "stddev: 0.00005814964023088913",
            "extra": "mean: 2.436457456264752 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 519.942676953947,
            "unit": "iter/sec",
            "range": "stddev: 0.00007550694163388429",
            "extra": "mean: 1.9232889399624593 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1486.7199212080077,
            "unit": "iter/sec",
            "range": "stddev: 0.00002851166244887424",
            "extra": "mean: 672.6216456341474 usec\nrounds: 1569"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.0357893710533,
            "unit": "iter/sec",
            "range": "stddev: 0.00009651585060764138",
            "extra": "mean: 4.0977596055778225 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 360.1015362595292,
            "unit": "iter/sec",
            "range": "stddev: 0.00007186988348727577",
            "extra": "mean: 2.7769945398935727 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 501.8842827969698,
            "unit": "iter/sec",
            "range": "stddev: 0.00006142916379354089",
            "extra": "mean: 1.9924911663442864 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1297.9306647186875,
            "unit": "iter/sec",
            "range": "stddev: 0.000060990948284880664",
            "extra": "mean: 770.4571801735952 usec\nrounds: 1382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.6563458854656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790371156152917",
            "extra": "mean: 85.79017899999937 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.01411428959451,
            "unit": "iter/sec",
            "range": "stddev: 0.00031157443280126386",
            "extra": "mean: 83.23543258333288 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.186216446058,
            "unit": "iter/sec",
            "range": "stddev: 0.000044142177457534085",
            "extra": "mean: 2.5113877846534383 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 929.7680008294727,
            "unit": "iter/sec",
            "range": "stddev: 0.000024445664584978037",
            "extra": "mean: 1.0755371222798282 msec\nrounds: 965"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1187.0728113165374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003945833291395828",
            "extra": "mean: 842.4083093023905 usec\nrounds: 1290"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1072.8696816495035,
            "unit": "iter/sec",
            "range": "stddev: 0.000029102188621601377",
            "extra": "mean: 932.0796524537178 usec\nrounds: 1243"
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
          "id": "5d84a4535c3b42153b5a1ae824e4fb2a1f6ed2ba",
          "message": "Merge pull request #1529 from TeoZosa/dependabot/pip/pip-e49d2f513e",
          "timestamp": "2024-12-24T01:06:18Z",
          "tree_id": "50aeb90f190c4e1f89af71d4458f10235c809792",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/5d84a4535c3b42153b5a1ae824e4fb2a1f6ed2ba"
        },
        "date": 1735002652978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.8231282376701,
            "unit": "iter/sec",
            "range": "stddev: 0.00007074211563254848",
            "extra": "mean: 3.7338074817518585 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 400.977339919845,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267605662101888",
            "extra": "mean: 2.49390651401872 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 512.838477224138,
            "unit": "iter/sec",
            "range": "stddev: 0.00009041525076661293",
            "extra": "mean: 1.9499316927480583 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1510.1900803647159,
            "unit": "iter/sec",
            "range": "stddev: 0.00001692993994597134",
            "extra": "mean: 662.1683011972219 usec\nrounds: 1587"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.21787568328318,
            "unit": "iter/sec",
            "range": "stddev: 0.00004697674458643199",
            "extra": "mean: 4.094704358565718 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 370.24765824616026,
            "unit": "iter/sec",
            "range": "stddev: 0.00004347477930343273",
            "extra": "mean: 2.700894867875564 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 501.9631893746778,
            "unit": "iter/sec",
            "range": "stddev: 0.000051299000371945216",
            "extra": "mean: 1.992177954813286 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1331.3224795334036,
            "unit": "iter/sec",
            "range": "stddev: 0.00004490503040083433",
            "extra": "mean: 751.1328137045173 usec\nrounds: 1401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.759052107042976,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182761157746615",
            "extra": "mean: 85.04086816666619 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.014768098233597,
            "unit": "iter/sec",
            "range": "stddev: 0.00048266385717570036",
            "extra": "mean: 83.23090315384609 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.795071448234,
            "unit": "iter/sec",
            "range": "stddev: 0.000041252688085755546",
            "extra": "mean: 2.5523547202969987 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 923.156487121024,
            "unit": "iter/sec",
            "range": "stddev: 0.000032788236109232336",
            "extra": "mean: 1.0832399641350317 msec\nrounds: 948"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.1126316433306,
            "unit": "iter/sec",
            "range": "stddev: 0.000039417625701943314",
            "extra": "mean: 856.0818305621561 usec\nrounds: 1263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.0873446387939,
            "unit": "iter/sec",
            "range": "stddev: 0.00004097339113501796",
            "extra": "mean: 945.1015599675058 usec\nrounds: 1234"
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
          "id": "268cd4b4113c7c5df5c1d323707eb79c60fbc023",
          "message": "Merge pull request #1530 from TeoZosa/dependabot/pip/cruft-2.16.0",
          "timestamp": "2024-12-26T14:58:06Z",
          "tree_id": "a200f8ff35ce271f914857abbefed647ccc4b280",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/268cd4b4113c7c5df5c1d323707eb79c60fbc023"
        },
        "date": 1735225243905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.29283754867174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000401747158409179",
            "extra": "mean: 3.7552643518518396 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 409.4260564308155,
            "unit": "iter/sec",
            "range": "stddev: 0.00006254330155378613",
            "extra": "mean: 2.442443474940338 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 509.3122124138832,
            "unit": "iter/sec",
            "range": "stddev: 0.00008271300937924428",
            "extra": "mean: 1.9634322045028216 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1455.4131825321444,
            "unit": "iter/sec",
            "range": "stddev: 0.000020106048270183142",
            "extra": "mean: 687.0901074705046 usec\nrounds: 1526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.1678233825849,
            "unit": "iter/sec",
            "range": "stddev: 0.00011861940643300468",
            "extra": "mean: 4.112386195219024 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 360.78750983664963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007017666222315839",
            "extra": "mean: 2.7717145764074833 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 498.16144197805016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467050936230909",
            "extra": "mean: 2.0073813742575077 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1312.9112794652476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087432304122432",
            "extra": "mean: 761.6660894308889 usec\nrounds: 1353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.76481349579401,
            "unit": "iter/sec",
            "range": "stddev: 0.0019895589375348386",
            "extra": "mean: 84.99922250000017 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.96834322948745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003510599090238113",
            "extra": "mean: 83.55375350000098 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.36655152205225,
            "unit": "iter/sec",
            "range": "stddev: 0.000038152640913079414",
            "extra": "mean: 2.5357120073710964 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 893.8910746282759,
            "unit": "iter/sec",
            "range": "stddev: 0.000022771146279395236",
            "extra": "mean: 1.1187045361380854 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1137.6313123798259,
            "unit": "iter/sec",
            "range": "stddev: 0.000045701217514413506",
            "extra": "mean: 879.019405599945 usec\nrounds: 1250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1044.1850125996607,
            "unit": "iter/sec",
            "range": "stddev: 0.000025463184882881977",
            "extra": "mean: 957.6846899098318 usec\nrounds: 1219"
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
          "id": "ce227a970be6f02e4d263faf5b3ce49544be58f4",
          "message": "Merge pull request #1531 from TeoZosa/dependabot/pip/orjson-3.10.13",
          "timestamp": "2024-12-30T14:34:23Z",
          "tree_id": "5940f6ab91173d86fef4f639ce9c9a5ef9085914",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ce227a970be6f02e4d263faf5b3ce49544be58f4"
        },
        "date": 1735569417124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 265.88132413685315,
            "unit": "iter/sec",
            "range": "stddev: 0.00010766306262760003",
            "extra": "mean: 3.7610764999999957 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 405.07480829889465,
            "unit": "iter/sec",
            "range": "stddev: 0.000033256427773604104",
            "extra": "mean: 2.468679808056898 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 521.5537900404256,
            "unit": "iter/sec",
            "range": "stddev: 0.000033619025875022615",
            "extra": "mean: 1.917347777153513 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1457.393782802809,
            "unit": "iter/sec",
            "range": "stddev: 0.00002997286254830415",
            "extra": "mean: 686.1563510150529 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.43152517619515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004307332189408531",
            "extra": "mean: 4.041522192000002 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 361.22467527688224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003683825307825454",
            "extra": "mean: 2.7683601604278287 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 498.5475710598545,
            "unit": "iter/sec",
            "range": "stddev: 0.00008359170294706977",
            "extra": "mean: 2.005826641325552 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1326.601594389703,
            "unit": "iter/sec",
            "range": "stddev: 0.000031338534555668594",
            "extra": "mean: 753.8058179856519 usec\nrounds: 1390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.723006172480213,
            "unit": "iter/sec",
            "range": "stddev: 0.0014091010998890639",
            "extra": "mean: 85.30235208333359 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.076841737107355,
            "unit": "iter/sec",
            "range": "stddev: 0.00017757900564841286",
            "extra": "mean: 82.80310546153767 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.6207244194797,
            "unit": "iter/sec",
            "range": "stddev: 0.00004842738524463057",
            "extra": "mean: 2.5086503002479925 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 911.6713330806299,
            "unit": "iter/sec",
            "range": "stddev: 0.000022189847530096282",
            "extra": "mean: 1.096886524468087 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1141.1649660053724,
            "unit": "iter/sec",
            "range": "stddev: 0.000045426210615231874",
            "extra": "mean: 876.2974940428483 usec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1048.7369832468933,
            "unit": "iter/sec",
            "range": "stddev: 0.000028086888961923308",
            "extra": "mean: 953.527925470881 usec\nrounds: 1221"
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
          "id": "a27b97502639bc7b121dd847057fdd84125e93aa",
          "message": "Merge pull request #1533 from TeoZosa/dependabot/pip/mypy-1.14.1",
          "timestamp": "2024-12-31T15:01:58Z",
          "tree_id": "78266acf5d45a97e52457bc2097f0cf740d8e56a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a27b97502639bc7b121dd847057fdd84125e93aa"
        },
        "date": 1735657595436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 268.2498954987325,
            "unit": "iter/sec",
            "range": "stddev: 0.00003628173754305984",
            "extra": "mean: 3.7278672490842597 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 403.5225230589374,
            "unit": "iter/sec",
            "range": "stddev: 0.0002157455401191747",
            "extra": "mean: 2.4781764160756463 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 514.8768125923772,
            "unit": "iter/sec",
            "range": "stddev: 0.00003914787515561914",
            "extra": "mean: 1.9422121477272467 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1471.0718354706617,
            "unit": "iter/sec",
            "range": "stddev: 0.000022120987586685504",
            "extra": "mean: 679.7764567901304 usec\nrounds: 1539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.72591588970343,
            "unit": "iter/sec",
            "range": "stddev: 0.00009361891928175774",
            "extra": "mean: 4.0530805059288575 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 361.8942837243978,
            "unit": "iter/sec",
            "range": "stddev: 0.00007573705886285056",
            "extra": "mean: 2.7632378983956385 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 499.0912923519442,
            "unit": "iter/sec",
            "range": "stddev: 0.00002466908527899768",
            "extra": "mean: 2.003641448616639 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1318.7715719743483,
            "unit": "iter/sec",
            "range": "stddev: 0.000013934515861677596",
            "extra": "mean: 758.2814349742832 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.923846873386138,
            "unit": "iter/sec",
            "range": "stddev: 0.0004930037832203831",
            "extra": "mean: 83.86555199999978 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.079891582118178,
            "unit": "iter/sec",
            "range": "stddev: 0.0005326643590427906",
            "extra": "mean: 82.78219992307683 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.08850964588567,
            "unit": "iter/sec",
            "range": "stddev: 0.00019222041334190354",
            "extra": "mean: 2.556965943349904 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 908.9287371154663,
            "unit": "iter/sec",
            "range": "stddev: 0.00003183116133643385",
            "extra": "mean: 1.1001962631014979 msec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1185.9732395970752,
            "unit": "iter/sec",
            "range": "stddev: 0.00006876942553034373",
            "extra": "mean: 843.1893457728793 usec\nrounds: 1313"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1079.296021900933,
            "unit": "iter/sec",
            "range": "stddev: 0.00002239851104795465",
            "extra": "mean: 926.5298673469849 usec\nrounds: 1274"
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
          "id": "e83ae2e8d2184ca3bd0975e5ff52330501aa8cb6",
          "message": "Merge pull request #1534 from TeoZosa/dependabot/pip/orjson-3.10.13",
          "timestamp": "2024-12-31T15:07:41Z",
          "tree_id": "2b45490fc26906b26c19c4e1c47e8c050b4c17bf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e83ae2e8d2184ca3bd0975e5ff52330501aa8cb6"
        },
        "date": 1735658173967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 271.85875158060736,
            "unit": "iter/sec",
            "range": "stddev: 0.00004147647239600795",
            "extra": "mean: 3.678380755395676 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 417.2150833965611,
            "unit": "iter/sec",
            "range": "stddev: 0.00007155134519480485",
            "extra": "mean: 2.396845271889426 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 507.3467831086085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570777759915544",
            "extra": "mean: 1.9710384165103267 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1474.7675026644026,
            "unit": "iter/sec",
            "range": "stddev: 0.00004402034875267412",
            "extra": "mean: 678.0729831606274 usec\nrounds: 1544"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.82617703228112,
            "unit": "iter/sec",
            "range": "stddev: 0.00004442809735049787",
            "extra": "mean: 4.051434138888823 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 371.38688035109476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870752237018818",
            "extra": "mean: 2.692609924870364 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 507.0260118470608,
            "unit": "iter/sec",
            "range": "stddev: 0.000053502359629424266",
            "extra": "mean: 1.9722853988438758 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1332.1339199190434,
            "unit": "iter/sec",
            "range": "stddev: 0.000014545587499381833",
            "extra": "mean: 750.6752774982054 usec\nrounds: 1391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.833497401980813,
            "unit": "iter/sec",
            "range": "stddev: 0.0009170921155440027",
            "extra": "mean: 84.50587058333318 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.010033578382304,
            "unit": "iter/sec",
            "range": "stddev: 0.000555270505438712",
            "extra": "mean: 83.26371391666794 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.95966697636135,
            "unit": "iter/sec",
            "range": "stddev: 0.00013118088649990872",
            "extra": "mean: 2.5065190363196557 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 929.2633379730911,
            "unit": "iter/sec",
            "range": "stddev: 0.00001987587873978961",
            "extra": "mean: 1.0761212232704667 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1144.3070308602598,
            "unit": "iter/sec",
            "range": "stddev: 0.00004742437348872337",
            "extra": "mean: 873.8913360064093 usec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1042.4025038573234,
            "unit": "iter/sec",
            "range": "stddev: 0.000029745240390702438",
            "extra": "mean: 959.3223311528737 usec\nrounds: 1223"
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
          "id": "38412c218324142514f42e9d3ec917f340075192",
          "message": "Merge pull request #1535 from TeoZosa/dependabot/pip/gitpython-3.1.44",
          "timestamp": "2025-01-02T14:50:42Z",
          "tree_id": "19d50a361802f7015a2ee474085480ab4923639b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/38412c218324142514f42e9d3ec917f340075192"
        },
        "date": 1735829604120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.5417292575864,
            "unit": "iter/sec",
            "range": "stddev: 0.00021234286441282275",
            "extra": "mean: 3.808918311111124 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 404.5208674805309,
            "unit": "iter/sec",
            "range": "stddev: 0.00006914923210121647",
            "extra": "mean: 2.472060356807498 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 507.75118806172003,
            "unit": "iter/sec",
            "range": "stddev: 0.00006005992212887688",
            "extra": "mean: 1.9694685576559285 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1502.47035139972,
            "unit": "iter/sec",
            "range": "stddev: 0.000016613190238037164",
            "extra": "mean: 665.5705379266803 usec\nrounds: 1582"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.4712431675836,
            "unit": "iter/sec",
            "range": "stddev: 0.000046448871059995394",
            "extra": "mean: 4.124200407999936 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 360.6152107034335,
            "unit": "iter/sec",
            "range": "stddev: 0.00009447057417425265",
            "extra": "mean: 2.7730388799999632 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.31811086769625,
            "unit": "iter/sec",
            "range": "stddev: 0.00002775821517697079",
            "extra": "mean: 1.9987283655706782 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1343.695635209871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000307525991510352",
            "extra": "mean: 744.2161556503163 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.55925536066845,
            "unit": "iter/sec",
            "range": "stddev: 0.0013114116142735686",
            "extra": "mean: 86.51076291666696 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.822162391309122,
            "unit": "iter/sec",
            "range": "stddev: 0.0007362115215603596",
            "extra": "mean: 84.5868942500007 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.8080492680664,
            "unit": "iter/sec",
            "range": "stddev: 0.00010165395137800391",
            "extra": "mean: 2.585261609452647 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.210089362101,
            "unit": "iter/sec",
            "range": "stddev: 0.000036657578271237276",
            "extra": "mean: 1.087890582983009 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.4366754651135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394715869710052",
            "extra": "mean: 855.8444124513081 usec\nrounds: 1285"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1069.7071984937152,
            "unit": "iter/sec",
            "range": "stddev: 0.00004290109330342047",
            "extra": "mean: 934.8352534302173 usec\nrounds: 1239"
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
          "id": "37557d3e04b04cc28c9bae8be7a102901e28fff0",
          "message": "Merge pull request #1536 from TeoZosa/dependabot/pip/pygments-2.19.0",
          "timestamp": "2025-01-06T14:28:02Z",
          "tree_id": "39c6846d9604816197f120e1160f9a7c4c64b383",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/37557d3e04b04cc28c9bae8be7a102901e28fff0"
        },
        "date": 1736174260924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.3909751691857,
            "unit": "iter/sec",
            "range": "stddev: 0.00007448518024933651",
            "extra": "mean: 3.782277361623606 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.63305591545594,
            "unit": "iter/sec",
            "range": "stddev: 0.00003757758399619594",
            "extra": "mean: 2.489834900966171 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 505.2374149328411,
            "unit": "iter/sec",
            "range": "stddev: 0.00004243414478224383",
            "extra": "mean: 1.9792675095784928 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1448.5386804932498,
            "unit": "iter/sec",
            "range": "stddev: 0.000024163191583120298",
            "extra": "mean: 690.3509125897035 usec\nrounds: 1533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.7715354186176,
            "unit": "iter/sec",
            "range": "stddev: 0.00005400107220083138",
            "extra": "mean: 4.068819435483936 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 359.9506278208708,
            "unit": "iter/sec",
            "range": "stddev: 0.00005080521066234094",
            "extra": "mean: 2.778158788203724 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.6774120907125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003163149382097982",
            "extra": "mean: 2.0297256895874876 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1240.0545553954673,
            "unit": "iter/sec",
            "range": "stddev: 0.00003173644295261274",
            "extra": "mean: 806.4161335878393 usec\nrounds: 1310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.676697593739966,
            "unit": "iter/sec",
            "range": "stddev: 0.0013508043139676",
            "extra": "mean: 85.64065241666559 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.021366813438371,
            "unit": "iter/sec",
            "range": "stddev: 0.00022486010937089216",
            "extra": "mean: 83.18521641666621 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.9126405719773,
            "unit": "iter/sec",
            "range": "stddev: 0.00006972974247567317",
            "extra": "mean: 2.577900009975183 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 884.7124168021219,
            "unit": "iter/sec",
            "range": "stddev: 0.00002340670891887109",
            "extra": "mean: 1.1303108004458626 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1136.5908292345619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003838621851364641",
            "extra": "mean: 879.8240970089922 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1013.7330589460323,
            "unit": "iter/sec",
            "range": "stddev: 0.000021808731346209055",
            "extra": "mean: 986.4529830364709 usec\nrounds: 1179"
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
          "id": "568f3bf24b792984bf400fbe65d3b585fa68700f",
          "message": "Merge pull request #1541 from TeoZosa/dependabot/pip/pygments-2.19.1",
          "timestamp": "2025-01-07T15:08:11Z",
          "tree_id": "8f1235d96e1e89c5df47f097e1b01f52b8764b11",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/568f3bf24b792984bf400fbe65d3b585fa68700f"
        },
        "date": 1736262658410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.5273200034245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000955847278857247",
            "extra": "mean: 3.751960586956532 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 402.4801992385178,
            "unit": "iter/sec",
            "range": "stddev: 0.00007856140286004689",
            "extra": "mean: 2.484594277909756 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 514.9023888259837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000757393366714028",
            "extra": "mean: 1.9421156741573395 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1471.5857205729974,
            "unit": "iter/sec",
            "range": "stddev: 0.000022770887165363884",
            "extra": "mean: 679.5390754475559 usec\nrounds: 1564"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.30815675842314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000759007882105699",
            "extra": "mean: 4.076505295275564 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 357.18298872543033,
            "unit": "iter/sec",
            "range": "stddev: 0.00010447337286952589",
            "extra": "mean: 2.799685403743314 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 494.6056429656362,
            "unit": "iter/sec",
            "range": "stddev: 0.00007512779636340223",
            "extra": "mean: 2.0218127597656164 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1313.5674128805347,
            "unit": "iter/sec",
            "range": "stddev: 0.00003474321442963881",
            "extra": "mean: 761.2856334545405 usec\nrounds: 1375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.501792882701107,
            "unit": "iter/sec",
            "range": "stddev: 0.0018404518704015634",
            "extra": "mean: 86.94296708333334 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.860302302599992,
            "unit": "iter/sec",
            "range": "stddev: 0.0003860282443309125",
            "extra": "mean: 84.31488291666749 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.5437879684818,
            "unit": "iter/sec",
            "range": "stddev: 0.00007482902277498873",
            "extra": "mean: 2.4966059393203937 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 876.744319393673,
            "unit": "iter/sec",
            "range": "stddev: 0.000042026819498385486",
            "extra": "mean: 1.140583380901249 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1134.1460679526813,
            "unit": "iter/sec",
            "range": "stddev: 0.00005027705992772368",
            "extra": "mean: 881.7206427432783 usec\nrounds: 1254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1033.4915024651782,
            "unit": "iter/sec",
            "range": "stddev: 0.000042961541005815366",
            "extra": "mean: 967.5938288942955 usec\nrounds: 1239"
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
          "id": "530abe1351622d550dd17181e33eb16bdadcfe8e",
          "message": "Merge pull request #1542 from TeoZosa/dependabot/pip/pygments-2.19.1",
          "timestamp": "2025-01-08T14:40:44Z",
          "tree_id": "3480d9cd7dadd30df758c71463795e807b435c51",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/530abe1351622d550dd17181e33eb16bdadcfe8e"
        },
        "date": 1736347527106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.49155998224245,
            "unit": "iter/sec",
            "range": "stddev: 0.000052613291127940514",
            "extra": "mean: 3.7384357101449686 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 408.7880783845697,
            "unit": "iter/sec",
            "range": "stddev: 0.000035030448929360966",
            "extra": "mean: 2.446255291866032 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.7477759420954,
            "unit": "iter/sec",
            "range": "stddev: 0.00020693778583049071",
            "extra": "mean: 1.9890689682835636 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1436.2882041736805,
            "unit": "iter/sec",
            "range": "stddev: 0.00003752177940488559",
            "extra": "mean: 696.239095394727 usec\nrounds: 1520"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.0590574126623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000871141768315386",
            "extra": "mean: 4.131223225806419 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.92912171438644,
            "unit": "iter/sec",
            "range": "stddev: 0.000050834608895475546",
            "extra": "mean: 2.801676689189281 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.452132758938,
            "unit": "iter/sec",
            "range": "stddev: 0.00004962359303169627",
            "extra": "mean: 2.0102436679763787 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1280.9070039022695,
            "unit": "iter/sec",
            "range": "stddev: 0.00004115291616776126",
            "extra": "mean: 780.6968007462764 usec\nrounds: 1340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.475912266241359,
            "unit": "iter/sec",
            "range": "stddev: 0.00044454228422067453",
            "extra": "mean: 87.13904191666711 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.584488717142413,
            "unit": "iter/sec",
            "range": "stddev: 0.00039198655726782676",
            "extra": "mean: 86.32232499999996 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.7921949605493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000848683520464103",
            "extra": "mean: 2.558904739898786 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 888.4824853342105,
            "unit": "iter/sec",
            "range": "stddev: 0.000042426323125107234",
            "extra": "mean: 1.1255145897713912 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1147.4680075840172,
            "unit": "iter/sec",
            "range": "stddev: 0.000042608691244093163",
            "extra": "mean: 871.4839920508897 usec\nrounds: 1258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1021.4140954677694,
            "unit": "iter/sec",
            "range": "stddev: 0.00003684274217809136",
            "extra": "mean: 979.0348541666028 usec\nrounds: 1200"
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
          "id": "e338316c20ca8d0df0d94a437a4e2748162d671c",
          "message": "Merge pull request #1543 from TeoZosa/dependabot/pip/docs/orjson-3.10.14",
          "timestamp": "2025-01-09T15:06:22Z",
          "tree_id": "86a6ba20e76e052fbf5ff8ff3b22326a0baa63d1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e338316c20ca8d0df0d94a437a4e2748162d671c"
        },
        "date": 1736435633690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.50984167174215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007187164342854524",
            "extra": "mean: 3.7949246739926847 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.2468689802454,
            "unit": "iter/sec",
            "range": "stddev: 0.0003133117158504864",
            "extra": "mean: 2.5173263229665097 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 515.4423717275331,
            "unit": "iter/sec",
            "range": "stddev: 0.00006570725403225461",
            "extra": "mean: 1.9400810931558572 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1483.2825023681523,
            "unit": "iter/sec",
            "range": "stddev: 0.000024619479674627888",
            "extra": "mean: 674.1804062297223 usec\nrounds: 1541"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.29045769091016,
            "unit": "iter/sec",
            "range": "stddev: 0.00010480008277779072",
            "extra": "mean: 4.076799437751049 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 360.77841837084753,
            "unit": "iter/sec",
            "range": "stddev: 0.00006328205996716484",
            "extra": "mean: 2.7717844224598007 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 498.0192553578937,
            "unit": "iter/sec",
            "range": "stddev: 0.000026375742390191257",
            "extra": "mean: 2.007954490196098 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1296.28239949159,
            "unit": "iter/sec",
            "range": "stddev: 0.00008134421140804066",
            "extra": "mean: 771.4368415340717 usec\nrounds: 1382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.715015060999109,
            "unit": "iter/sec",
            "range": "stddev: 0.0026898974264595943",
            "extra": "mean: 85.36053899999985 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.056710988245973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006101979210865884",
            "extra": "mean: 82.94135946153929 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.148251615143,
            "unit": "iter/sec",
            "range": "stddev: 0.00004966693227703305",
            "extra": "mean: 2.5116272542786833 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.3448556618526,
            "unit": "iter/sec",
            "range": "stddev: 0.000022624448360815098",
            "extra": "mean: 1.1045514797440914 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1176.704148554509,
            "unit": "iter/sec",
            "range": "stddev: 0.000035752335791378914",
            "extra": "mean: 849.8312861634961 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.7015279559619,
            "unit": "iter/sec",
            "range": "stddev: 0.00002496590707637316",
            "extra": "mean: 950.840113300542 usec\nrounds: 1218"
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
          "id": "0dc0d2d4d785a6a7ae71d4b4f3f89655e57f874d",
          "message": "Merge pull request #1544 from TeoZosa/dependabot/pip/orjson-3.10.14",
          "timestamp": "2025-01-09T15:37:29Z",
          "tree_id": "86a6ba20e76e052fbf5ff8ff3b22326a0baa63d1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/0dc0d2d4d785a6a7ae71d4b4f3f89655e57f874d"
        },
        "date": 1736437305955,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.0646456789722,
            "unit": "iter/sec",
            "range": "stddev: 0.00007491753654470079",
            "extra": "mean: 3.744411760147617 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.0897863454936,
            "unit": "iter/sec",
            "range": "stddev: 0.00007378727905620776",
            "extra": "mean: 2.518322138686125 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 516.6610928109202,
            "unit": "iter/sec",
            "range": "stddev: 0.00005209534684174094",
            "extra": "mean: 1.9355047514018342 msec\nrounds: 535"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1456.9127126297153,
            "unit": "iter/sec",
            "range": "stddev: 0.00008402845308023016",
            "extra": "mean: 686.3829187096654 usec\nrounds: 1550"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.66364816929405,
            "unit": "iter/sec",
            "range": "stddev: 0.00011411703280336588",
            "extra": "mean: 4.1209303805667306 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 351.8842195992135,
            "unit": "iter/sec",
            "range": "stddev: 0.000038162807475641965",
            "extra": "mean: 2.841843834710669 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.7591404191562,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547814914426243",
            "extra": "mean: 2.03351583693521 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1272.2322207954032,
            "unit": "iter/sec",
            "range": "stddev: 0.000033062076453755486",
            "extra": "mean: 786.0200234315691 usec\nrounds: 1323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.61691281825531,
            "unit": "iter/sec",
            "range": "stddev: 0.0003990631547405002",
            "extra": "mean: 86.08138974999946 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.877270313001736,
            "unit": "iter/sec",
            "range": "stddev: 0.0005906490237474132",
            "extra": "mean: 84.19442966666561 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.2757510011155,
            "unit": "iter/sec",
            "range": "stddev: 0.000038300956240873325",
            "extra": "mean: 2.5754891914358233 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 885.658337630301,
            "unit": "iter/sec",
            "range": "stddev: 0.00003812819547796182",
            "extra": "mean: 1.1291035803667082 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1111.185933736213,
            "unit": "iter/sec",
            "range": "stddev: 0.00012178083117518615",
            "extra": "mean: 899.9393977546447 usec\nrounds: 1247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1021.2343424049076,
            "unit": "iter/sec",
            "range": "stddev: 0.00006118083394769205",
            "extra": "mean: 979.2071794658779 usec\nrounds: 1198"
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
          "id": "7a717f8707ed492e7c1a0aba37496cbdce3b258d",
          "message": "Merge pull request #1545 from TeoZosa/dependabot/pip/orjson-3.10.14",
          "timestamp": "2025-01-09T16:50:58Z",
          "tree_id": "49f1329219fff3a5b38cf35e234ba6d3b877da1d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7a717f8707ed492e7c1a0aba37496cbdce3b258d"
        },
        "date": 1736441619755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.9878749538035,
            "unit": "iter/sec",
            "range": "stddev: 0.00004694291923529866",
            "extra": "mean: 3.8024566728624283 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.89691593282447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004872684092409544",
            "extra": "mean: 2.4882002333333313 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 521.9946403543915,
            "unit": "iter/sec",
            "range": "stddev: 0.00005148800057752407",
            "extra": "mean: 1.9157284820416587 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1492.263545004725,
            "unit": "iter/sec",
            "range": "stddev: 0.00003966001152823263",
            "extra": "mean: 670.1229171934463 usec\nrounds: 1582"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.40464284212717,
            "unit": "iter/sec",
            "range": "stddev: 0.000052086924026493696",
            "extra": "mean: 4.12533352610444 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 360.2572750090439,
            "unit": "iter/sec",
            "range": "stddev: 0.00007657840803184513",
            "extra": "mean: 2.7757940487805444 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 511.817513216256,
            "unit": "iter/sec",
            "range": "stddev: 0.00005049473997315622",
            "extra": "mean: 1.953821380038386 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1326.687422955904,
            "unit": "iter/sec",
            "range": "stddev: 0.000021031356914800085",
            "extra": "mean: 753.7570513572567 usec\nrounds: 1363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.618620850321353,
            "unit": "iter/sec",
            "range": "stddev: 0.0016467794273095702",
            "extra": "mean: 86.0687350833332 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.855608446289938,
            "unit": "iter/sec",
            "range": "stddev: 0.0007398077096208011",
            "extra": "mean: 84.34826475000001 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.8675189163674,
            "unit": "iter/sec",
            "range": "stddev: 0.00007720550895003369",
            "extra": "mean: 2.5070981029409802 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 914.3304735297045,
            "unit": "iter/sec",
            "range": "stddev: 0.00002561923017838184",
            "extra": "mean: 1.0936964576271584 msec\nrounds: 944"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1154.187158741773,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033014414835282",
            "extra": "mean: 866.4106097750571 usec\nrounds: 1289"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1039.583213873778,
            "unit": "iter/sec",
            "range": "stddev: 0.000027422726991813804",
            "extra": "mean: 961.92395823103 usec\nrounds: 1221"
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
          "id": "1c661c749bff6c80839b27460091f2cee8225907",
          "message": "Merge pull request #1549 from TeoZosa/dependabot/pip/sentry-sdk-2.20.0",
          "timestamp": "2025-01-14T15:38:24Z",
          "tree_id": "b46c76299d8b834bf968491f90aaad831121065f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1c661c749bff6c80839b27460091f2cee8225907"
        },
        "date": 1736869376021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 270.75140230142244,
            "unit": "iter/sec",
            "range": "stddev: 0.00004980104901092494",
            "extra": "mean: 3.693425007220161 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 415.6164705612542,
            "unit": "iter/sec",
            "range": "stddev: 0.00004196517014399109",
            "extra": "mean: 2.4060644147465724 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 524.6430428564223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000535517842641113",
            "extra": "mean: 1.9060578685185527 msec\nrounds: 540"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1497.960489841512,
            "unit": "iter/sec",
            "range": "stddev: 0.000041410465189422815",
            "extra": "mean: 667.5743497786129 usec\nrounds: 1581"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 248.48957966215247,
            "unit": "iter/sec",
            "range": "stddev: 0.00009561545158074365",
            "extra": "mean: 4.024313620553443 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 364.7066562198192,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260735098885952",
            "extra": "mean: 2.741929665789459 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 498.8190541063896,
            "unit": "iter/sec",
            "range": "stddev: 0.00008187261818346811",
            "extra": "mean: 2.00473496705424 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1319.307144776429,
            "unit": "iter/sec",
            "range": "stddev: 0.00003589020694132852",
            "extra": "mean: 757.9736105874427 usec\nrounds: 1379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.747690354882852,
            "unit": "iter/sec",
            "range": "stddev: 0.00025899753591323676",
            "extra": "mean: 85.12311524999946 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.081183516155217,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989803418174027",
            "extra": "mean: 82.77334738461498 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.9319785970956,
            "unit": "iter/sec",
            "range": "stddev: 0.00005185166433659358",
            "extra": "mean: 2.5711436832915324 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 919.5714255979555,
            "unit": "iter/sec",
            "range": "stddev: 0.000041184983669021",
            "extra": "mean: 1.0874631074467604 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.1234557428334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003845859404038122",
            "extra": "mean: 856.0738979118262 usec\nrounds: 1293"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1037.228124661379,
            "unit": "iter/sec",
            "range": "stddev: 0.000043440287812586864",
            "extra": "mean: 964.1080647774252 usec\nrounds: 1235"
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
          "id": "026483ac3c0d9de822b9c23177cf56ba5642ce4f",
          "message": "Merge pull request #1551 from TeoZosa/dependabot/pip/pip-343d96632a",
          "timestamp": "2025-01-14T16:18:52Z",
          "tree_id": "c7c476ac5d9c5815f47879ba8d9a0a1174350ca1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/026483ac3c0d9de822b9c23177cf56ba5642ce4f"
        },
        "date": 1736871819049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 270.0986642529875,
            "unit": "iter/sec",
            "range": "stddev: 0.000052032367226915264",
            "extra": "mean: 3.7023507789855326 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 406.6825282481289,
            "unit": "iter/sec",
            "range": "stddev: 0.000059534981627488234",
            "extra": "mean: 2.4589204859813174 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 516.8532722254281,
            "unit": "iter/sec",
            "range": "stddev: 0.00003372859648747622",
            "extra": "mean: 1.9347850806753626 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1478.3841697716164,
            "unit": "iter/sec",
            "range": "stddev: 0.00002488546685308541",
            "extra": "mean: 676.414169230777 usec\nrounds: 1560"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.67407244143735,
            "unit": "iter/sec",
            "range": "stddev: 0.00012872121465043774",
            "extra": "mean: 4.053932341176266 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 364.1234177397668,
            "unit": "iter/sec",
            "range": "stddev: 0.00007073180809422876",
            "extra": "mean: 2.746321580214003 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.70560218049417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009508786192350809",
            "extra": "mean: 2.037881767716551 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1290.4785562460215,
            "unit": "iter/sec",
            "range": "stddev: 0.000047047476067314414",
            "extra": "mean: 774.9063284778491 usec\nrounds: 1373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.694918326135626,
            "unit": "iter/sec",
            "range": "stddev: 0.0010529711019029184",
            "extra": "mean: 85.50722391666602 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.003014809232761,
            "unit": "iter/sec",
            "range": "stddev: 0.000606566953788797",
            "extra": "mean: 83.31240241666589 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 391.1431794079729,
            "unit": "iter/sec",
            "range": "stddev: 0.000038845911401073804",
            "extra": "mean: 2.5566085583125377 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.5829463946465,
            "unit": "iter/sec",
            "range": "stddev: 0.000043830662157105255",
            "extra": "mean: 1.0945913602551238 msec\nrounds: 941"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1167.7799041746657,
            "unit": "iter/sec",
            "range": "stddev: 0.000039770812075619044",
            "extra": "mean: 856.3257480498905 usec\nrounds: 1282"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.2249988445444,
            "unit": "iter/sec",
            "range": "stddev: 0.000025503096743060102",
            "extra": "mean: 950.3670803279782 usec\nrounds: 1220"
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
          "id": "d58b921c91dc47415c7f52e357ff521da0c2e210",
          "message": "Merge pull request #1553 from TeoZosa/dependabot/pip/emoji-2.14.1",
          "timestamp": "2025-01-16T14:52:37Z",
          "tree_id": "03a91129584a74f0ca4a4c7172f3a871925c6d57",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d58b921c91dc47415c7f52e357ff521da0c2e210"
        },
        "date": 1737039387790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 258.48729553869316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004760732890004592",
            "extra": "mean: 3.8686620861422925 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 399.769227179358,
            "unit": "iter/sec",
            "range": "stddev: 0.000039603723968098395",
            "extra": "mean: 2.50144316273585 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 503.15231553748043,
            "unit": "iter/sec",
            "range": "stddev: 0.00006393213203225356",
            "extra": "mean: 1.987469736538475 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1484.3425643963426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003145626903937287",
            "extra": "mean: 673.6989317601921 usec\nrounds: 1568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.95853198569327,
            "unit": "iter/sec",
            "range": "stddev: 0.00003464343266879414",
            "extra": "mean: 4.115928721774156 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 362.2444559542635,
            "unit": "iter/sec",
            "range": "stddev: 0.000046527844578900364",
            "extra": "mean: 2.7605667486771934 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 485.8291893179452,
            "unit": "iter/sec",
            "range": "stddev: 0.00008914558982130783",
            "extra": "mean: 2.058336596456665 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1324.5393435307851,
            "unit": "iter/sec",
            "range": "stddev: 0.00003406218753182735",
            "extra": "mean: 754.9794612626075 usec\nrounds: 1394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.829927998355831,
            "unit": "iter/sec",
            "range": "stddev: 0.0009252458861098639",
            "extra": "mean: 84.53136824999982 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.069838566763503,
            "unit": "iter/sec",
            "range": "stddev: 0.00043019787251242266",
            "extra": "mean: 82.85114953846045 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.4947562595585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003721744572439493",
            "extra": "mean: 2.600815703517517 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.3033077590159,
            "unit": "iter/sec",
            "range": "stddev: 0.000032119535633040656",
            "extra": "mean: 1.1070478668797048 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1172.9811785845495,
            "unit": "iter/sec",
            "range": "stddev: 0.00004126129567969652",
            "extra": "mean: 852.5285982906494 usec\nrounds: 1287"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1063.1675870965887,
            "unit": "iter/sec",
            "range": "stddev: 0.00002613294234095726",
            "extra": "mean: 940.5854844868875 usec\nrounds: 1257"
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
          "id": "cbbe126d011f506b327bc8b7bdccd94d3293e791",
          "message": "Merge pull request #1555 from TeoZosa/dependabot/pip/emoji-2.14.1",
          "timestamp": "2025-01-17T15:16:34Z",
          "tree_id": "8f274d0e63856b636bac9bbe8e343399e4e0aa49",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cbbe126d011f506b327bc8b7bdccd94d3293e791"
        },
        "date": 1737127297169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.97647022432096,
            "unit": "iter/sec",
            "range": "stddev: 0.000056211631662999095",
            "extra": "mean: 3.8171367037037185 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 400.43277126204424,
            "unit": "iter/sec",
            "range": "stddev: 0.00024494028366919314",
            "extra": "mean: 2.4972981028707997 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 521.4472413520698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483275267637705",
            "extra": "mean: 1.9177395538752535 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1498.7485529005412,
            "unit": "iter/sec",
            "range": "stddev: 0.000038094968071968364",
            "extra": "mean: 667.2233298005134 usec\nrounds: 1604"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.42451648833583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004976592330770857",
            "extra": "mean: 4.10804965098048 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 366.3622777818662,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502392574229344",
            "extra": "mean: 2.729538657894808 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 496.44776901019634,
            "unit": "iter/sec",
            "range": "stddev: 0.000036882670903808166",
            "extra": "mean: 2.0143105930232537 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1329.1244392756223,
            "unit": "iter/sec",
            "range": "stddev: 0.00003205896939645684",
            "extra": "mean: 752.3750000000027 usec\nrounds: 1390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.75153210379458,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250532625751695",
            "extra": "mean: 85.0952872500003 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.89161188374118,
            "unit": "iter/sec",
            "range": "stddev: 0.0027438700825014903",
            "extra": "mean: 84.09288915384558 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.9581570683651,
            "unit": "iter/sec",
            "range": "stddev: 0.00006950605911148724",
            "extra": "mean: 2.538340638613725 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 912.7029364379154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000461465383068788",
            "extra": "mean: 1.0956467434001982 msec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1165.9573069783937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004523745830294921",
            "extra": "mean: 857.6643364340019 usec\nrounds: 1290"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1064.2985342191025,
            "unit": "iter/sec",
            "range": "stddev: 0.000028835665978887056",
            "extra": "mean: 939.5859975826428 usec\nrounds: 1241"
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
          "id": "baf3a3aef8fbef048101c0227d116f0a49a12e86",
          "message": "Merge pull request #1556 from TeoZosa/dependabot/pip/docs/orjson-3.10.15",
          "timestamp": "2025-01-20T14:56:45Z",
          "tree_id": "cce852772e68b171a32b68976122c9d4f10aefe6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/baf3a3aef8fbef048101c0227d116f0a49a12e86"
        },
        "date": 1737385349011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 268.10018894563507,
            "unit": "iter/sec",
            "range": "stddev: 0.00007013286393042259",
            "extra": "mean: 3.729948881918835 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 407.13729550509817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005016352243802467",
            "extra": "mean: 2.4561739026128544 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 494.4241982188052,
            "unit": "iter/sec",
            "range": "stddev: 0.00005485305476447613",
            "extra": "mean: 2.022554728515643 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1478.0983600876145,
            "unit": "iter/sec",
            "range": "stddev: 0.000032466353314061104",
            "extra": "mean: 676.544962772792 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.61563062088493,
            "unit": "iter/sec",
            "range": "stddev: 0.00004723577456894737",
            "extra": "mean: 4.0880462031874 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 362.7801070918982,
            "unit": "iter/sec",
            "range": "stddev: 0.00006261709147510315",
            "extra": "mean: 2.7564907238606757 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.27914277346514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000500438949347699",
            "extra": "mean: 2.03965437800003 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1306.2766890174823,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184262777574485",
            "extra": "mean: 765.5345979971145 usec\nrounds: 1398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.714523642397223,
            "unit": "iter/sec",
            "range": "stddev: 0.00038324180029825663",
            "extra": "mean: 85.36411983333221 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.04744454736468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006955776178959953",
            "extra": "mean: 83.00515483333311 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.9696406811767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004401433744333501",
            "extra": "mean: 2.5775212674998293 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 909.9688265978192,
            "unit": "iter/sec",
            "range": "stddev: 0.00003031039755293247",
            "extra": "mean: 1.0989387446807253 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1152.8953019139044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003881426242515575",
            "extra": "mean: 867.3814511516483 usec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1041.1803603792248,
            "unit": "iter/sec",
            "range": "stddev: 0.000044276816405629475",
            "extra": "mean: 960.4483892068173 usec\nrounds: 1223"
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
          "id": "a352be814abb1ec341788782633e05fd414576b4",
          "message": "Merge pull request #1557 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-6.1.0",
          "timestamp": "2025-01-20T15:26:55Z",
          "tree_id": "c167f3baa57d2fa4707ac588adea1fd7d06d1767",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a352be814abb1ec341788782633e05fd414576b4"
        },
        "date": 1737388138674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.468945745844,
            "unit": "iter/sec",
            "range": "stddev: 0.00006532963023226302",
            "extra": "mean: 3.7387517912087866 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 407.1822627116984,
            "unit": "iter/sec",
            "range": "stddev: 0.00004689927438468985",
            "extra": "mean: 2.4559026548463403 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 515.9130086185514,
            "unit": "iter/sec",
            "range": "stddev: 0.00003566628177890559",
            "extra": "mean: 1.9383112720450244 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1448.0078239473494,
            "unit": "iter/sec",
            "range": "stddev: 0.000020788336154591374",
            "extra": "mean: 690.6040032808281 usec\nrounds: 1524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.40419416779892,
            "unit": "iter/sec",
            "range": "stddev: 0.00037021436973287306",
            "extra": "mean: 4.2122254979757985 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 362.80245980144144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001030299158579491",
            "extra": "mean: 2.75632089304822 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 499.769070289018,
            "unit": "iter/sec",
            "range": "stddev: 0.000042695314289569776",
            "extra": "mean: 2.000924145669313 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1290.8532540863253,
            "unit": "iter/sec",
            "range": "stddev: 0.000024994550883904406",
            "extra": "mean: 774.6813952975676 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.541059941524352,
            "unit": "iter/sec",
            "range": "stddev: 0.00091291808899335",
            "extra": "mean: 86.64715416666654 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.821412712370273,
            "unit": "iter/sec",
            "range": "stddev: 0.000298083625974474",
            "extra": "mean: 84.59225849999896 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.9179146919872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001038920299283354",
            "extra": "mean: 2.6047234623116977 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 908.2705637352262,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812082082169311",
            "extra": "mean: 1.1009935144077996 msec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1154.0150566624923,
            "unit": "iter/sec",
            "range": "stddev: 0.00004493928113320752",
            "extra": "mean: 866.5398204526754 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1061.7411966396949,
            "unit": "iter/sec",
            "range": "stddev: 0.00002191043041848899",
            "extra": "mean: 941.8491089588503 usec\nrounds: 1239"
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
          "id": "7faa24b058d91918c0c1ebce30b8c42d5df06737",
          "message": "Merge pull request #1558 from TeoZosa/dependabot/pip/orjson-3.10.15",
          "timestamp": "2025-01-20T16:51:19Z",
          "tree_id": "7acfceb6d40ab890581b7662fff1a92d57ef555f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/7faa24b058d91918c0c1ebce30b8c42d5df06737"
        },
        "date": 1737392139156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.20863751808116,
            "unit": "iter/sec",
            "range": "stddev: 0.00012961971602534815",
            "extra": "mean: 3.8137568978102134 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 405.9492024120706,
            "unit": "iter/sec",
            "range": "stddev: 0.00004901322823910493",
            "extra": "mean: 2.463362396226415 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 505.0196946207421,
            "unit": "iter/sec",
            "range": "stddev: 0.000025934318915371707",
            "extra": "mean: 1.980120796577996 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1469.1156868079468,
            "unit": "iter/sec",
            "range": "stddev: 0.000025183413023355957",
            "extra": "mean: 680.6815889174609 usec\nrounds: 1552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.51963928845296,
            "unit": "iter/sec",
            "range": "stddev: 0.00010709165392734685",
            "extra": "mean: 4.089651051792727 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.98699098810476,
            "unit": "iter/sec",
            "range": "stddev: 0.00008998445802306678",
            "extra": "mean: 2.801222524193665 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 493.55333243709714,
            "unit": "iter/sec",
            "range": "stddev: 0.000029589600316865446",
            "extra": "mean: 2.0261234891519027 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1302.1556486547745,
            "unit": "iter/sec",
            "range": "stddev: 0.000052795184193003574",
            "extra": "mean: 767.9573490566015 usec\nrounds: 1378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.683030105235996,
            "unit": "iter/sec",
            "range": "stddev: 0.001902748040572278",
            "extra": "mean: 85.59423291666678 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.991689851176748,
            "unit": "iter/sec",
            "range": "stddev: 0.0011785716013866352",
            "extra": "mean: 83.39108269230877 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.7402872124299,
            "unit": "iter/sec",
            "range": "stddev: 0.000065497509000306",
            "extra": "mean: 2.5397451885853943 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.8329240515218,
            "unit": "iter/sec",
            "range": "stddev: 0.000026766067145501247",
            "extra": "mean: 1.1027389648935872 msec\nrounds: 940"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1142.2595714305714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004065482004407346",
            "extra": "mean: 875.457754972099 usec\nrounds: 1257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1032.027791443114,
            "unit": "iter/sec",
            "range": "stddev: 0.00003041665293983605",
            "extra": "mean: 968.9661541010165 usec\nrounds: 1207"
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
          "id": "a09abdfffd75cdbe57e3a4a592f58ca59694849d",
          "message": "Merge pull request #1559 from TeoZosa/dependabot/pip/pre-commit-4.1.0",
          "timestamp": "2025-01-21T14:37:16Z",
          "tree_id": "e144482503801965e4374f9201ce2d53a1fb5a8a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a09abdfffd75cdbe57e3a4a592f58ca59694849d"
        },
        "date": 1737470895714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 262.42480730742614,
            "unit": "iter/sec",
            "range": "stddev: 0.00010778922249837343",
            "extra": "mean: 3.810615354014597 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 404.2847721119618,
            "unit": "iter/sec",
            "range": "stddev: 0.00008780731431325986",
            "extra": "mean: 2.473503997630319 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 503.1237029261375,
            "unit": "iter/sec",
            "range": "stddev: 0.00008016778564509246",
            "extra": "mean: 1.9875827638094956 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1477.9070154477477,
            "unit": "iter/sec",
            "range": "stddev: 0.00002919508769120761",
            "extra": "mean: 676.6325550576261 usec\nrounds: 1562"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.95188012667182,
            "unit": "iter/sec",
            "range": "stddev: 0.00011813432999305482",
            "extra": "mean: 4.184943008064576 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.3145989954152,
            "unit": "iter/sec",
            "range": "stddev: 0.00008635424103276449",
            "extra": "mean: 2.8303387486486975 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 488.0344786210997,
            "unit": "iter/sec",
            "range": "stddev: 0.00008909625859528795",
            "extra": "mean: 2.0490355575397374 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1308.9330717924684,
            "unit": "iter/sec",
            "range": "stddev: 0.00003059597334738833",
            "extra": "mean: 763.9810021994389 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.495615830773524,
            "unit": "iter/sec",
            "range": "stddev: 0.0022593645818903235",
            "extra": "mean: 86.98968499999981 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.718020187054998,
            "unit": "iter/sec",
            "range": "stddev: 0.0011219853760785668",
            "extra": "mean: 85.33864800000164 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.92645732287417,
            "unit": "iter/sec",
            "range": "stddev: 0.00012327478027778635",
            "extra": "mean: 2.5580258927680597 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.7000129483694,
            "unit": "iter/sec",
            "range": "stddev: 0.000033262687790678",
            "extra": "mean: 1.102900612903094 msec\nrounds: 930"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1157.3209405393375,
            "unit": "iter/sec",
            "range": "stddev: 0.000048853523482514316",
            "extra": "mean: 864.0645519936567 usec\nrounds: 1279"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1017.6291232746261,
            "unit": "iter/sec",
            "range": "stddev: 0.00010793295386623818",
            "extra": "mean: 982.676278742989 usec\nrounds: 1209"
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
          "id": "d30ea4dbe33fe5d2b6a379c0990f48352f4b0415",
          "message": "Merge pull request #1560 from TeoZosa/dependabot/pip/importlib-metadata-8.6.1",
          "timestamp": "2025-01-21T14:48:12Z",
          "tree_id": "799ce123dbdf514736ad393f5094d613a28c1302",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d30ea4dbe33fe5d2b6a379c0990f48352f4b0415"
        },
        "date": 1737471321413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 268.5380583600818,
            "unit": "iter/sec",
            "range": "stddev: 0.00013148507959614308",
            "extra": "mean: 3.7238669487179483 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 411.44823999874006,
            "unit": "iter/sec",
            "range": "stddev: 0.00003827461419780997",
            "extra": "mean: 2.4304393670588116 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 511.0460271865334,
            "unit": "iter/sec",
            "range": "stddev: 0.00006158939280073944",
            "extra": "mean: 1.9567709106463649 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1458.5172858089907,
            "unit": "iter/sec",
            "range": "stddev: 0.00004243135527304066",
            "extra": "mean: 685.6278014184339 usec\nrounds: 1551"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 249.8350508339055,
            "unit": "iter/sec",
            "range": "stddev: 0.00010545330292956955",
            "extra": "mean: 4.002640929133745 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 363.6544050229137,
            "unit": "iter/sec",
            "range": "stddev: 0.00004342455885524446",
            "extra": "mean: 2.7498635687830877 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 484.92349431099433,
            "unit": "iter/sec",
            "range": "stddev: 0.000057046403870474474",
            "extra": "mean: 2.062180966135399 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1284.7357232962863,
            "unit": "iter/sec",
            "range": "stddev: 0.00002044357270813444",
            "extra": "mean: 778.3701985294447 usec\nrounds: 1360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.704846117348827,
            "unit": "iter/sec",
            "range": "stddev: 0.00033226665310507643",
            "extra": "mean: 85.43469858333364 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.09051888759002,
            "unit": "iter/sec",
            "range": "stddev: 0.00028329752920103294",
            "extra": "mean: 82.70943615384633 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.91576140215665,
            "unit": "iter/sec",
            "range": "stddev: 0.00005176804071926012",
            "extra": "mean: 2.5979710374998355 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.9318622597234,
            "unit": "iter/sec",
            "range": "stddev: 0.000025104413936689842",
            "extra": "mean: 1.1224202908891827 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1154.6645207612714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000526329797325777",
            "extra": "mean: 866.0524178405509 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1048.8129823859213,
            "unit": "iter/sec",
            "range": "stddev: 0.00002850689193039555",
            "extra": "mean: 953.4588308824347 usec\nrounds: 1224"
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
          "id": "bc1d2d9b0c1b854b2dc343f4feec6c2e59ca5b8e",
          "message": "Merge pull request #1562 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.24.1",
          "timestamp": "2025-01-22T14:49:07Z",
          "tree_id": "c4ee992c141384f7d6e52767e8801b64f63d5b98",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bc1d2d9b0c1b854b2dc343f4feec6c2e59ca5b8e"
        },
        "date": 1737557610638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 267.4927656606208,
            "unit": "iter/sec",
            "range": "stddev: 0.00009738038331196407",
            "extra": "mean: 3.7384188597785912 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 405.7022306397486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007738307444760936",
            "extra": "mean: 2.464861971360394 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 517.6073045527083,
            "unit": "iter/sec",
            "range": "stddev: 0.00009729904023992381",
            "extra": "mean: 1.931966553030299 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1478.7480435967273,
            "unit": "iter/sec",
            "range": "stddev: 0.00003117929054897957",
            "extra": "mean: 676.2477247765084 usec\nrounds: 1566"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 245.74425007968628,
            "unit": "iter/sec",
            "range": "stddev: 0.00010605915302450375",
            "extra": "mean: 4.069271202381073 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.8067551673246,
            "unit": "iter/sec",
            "range": "stddev: 0.000060568408156050706",
            "extra": "mean: 2.8026375216216124 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.8745472518341,
            "unit": "iter/sec",
            "range": "stddev: 0.00002863995865567661",
            "extra": "mean: 1.9965079189723953 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1300.7049840211748,
            "unit": "iter/sec",
            "range": "stddev: 0.000024736788436160708",
            "extra": "mean: 768.8138450184646 usec\nrounds: 1355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.744408136911229,
            "unit": "iter/sec",
            "range": "stddev: 0.0019444856910776165",
            "extra": "mean: 85.14690466666626 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.959252125218313,
            "unit": "iter/sec",
            "range": "stddev: 0.00044915997894467286",
            "extra": "mean: 83.61726883333394 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.8121738256494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000813653332065755",
            "extra": "mean: 2.5457459484029443 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.7248366000364,
            "unit": "iter/sec",
            "range": "stddev: 0.000019819910895114925",
            "extra": "mean: 1.1065315010730112 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1170.8817056701812,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892577891874525",
            "extra": "mean: 854.0572417839827 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1045.963689663311,
            "unit": "iter/sec",
            "range": "stddev: 0.000022598512947269688",
            "extra": "mean: 956.0561326195688 usec\nrounds: 1214"
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
          "id": "aafec4b6d431e00188141e78f2fc10e5de8e9ce2",
          "message": "Merge pull request #1563 from TeoZosa/dependabot/pip/importlib-metadata-8.6.1",
          "timestamp": "2025-01-22T15:30:25Z",
          "tree_id": "4514bf54dd35e1380f28718d52412a2020cf2995",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/aafec4b6d431e00188141e78f2fc10e5de8e9ce2"
        },
        "date": 1737560121349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.53531650627997,
            "unit": "iter/sec",
            "range": "stddev: 0.00004037488861589603",
            "extra": "mean: 3.7518480218978354 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 403.4382314110782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004792816909741787",
            "extra": "mean: 2.478694189448453 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 507.8006640449583,
            "unit": "iter/sec",
            "range": "stddev: 0.000033176226540715436",
            "extra": "mean: 1.9692766685934555 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1470.6037220502926,
            "unit": "iter/sec",
            "range": "stddev: 0.000018558578557282182",
            "extra": "mean: 679.9928389993571 usec\nrounds: 1559"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.67481084368137,
            "unit": "iter/sec",
            "range": "stddev: 0.00005548427807647699",
            "extra": "mean: 4.120740823999853 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 359.3115905502759,
            "unit": "iter/sec",
            "range": "stddev: 0.00003625202336865435",
            "extra": "mean: 2.7830997560321595 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 486.7620003956464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003427429988540508",
            "extra": "mean: 2.0543920831683393 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1273.1996184646223,
            "unit": "iter/sec",
            "range": "stddev: 0.00014538908337761392",
            "extra": "mean: 785.4227927007398 usec\nrounds: 1370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.594135025252173,
            "unit": "iter/sec",
            "range": "stddev: 0.0008958519443485493",
            "extra": "mean: 86.25050491666582 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.797834165991304,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148076533107849",
            "extra": "mean: 84.76132025000165 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.13718617119355,
            "unit": "iter/sec",
            "range": "stddev: 0.00009100967245644679",
            "extra": "mean: 2.537187647058631 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.1648813209503,
            "unit": "iter/sec",
            "range": "stddev: 0.00004280088359418572",
            "extra": "mean: 1.1121430793993137 msec\nrounds: 932"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.1420548968895,
            "unit": "iter/sec",
            "range": "stddev: 0.000042289342967582687",
            "extra": "mean: 856.0602675059661 usec\nrounds: 1271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.6334157959266,
            "unit": "iter/sec",
            "range": "stddev: 0.000028728630403484412",
            "extra": "mean: 951.8067719580685 usec\nrounds: 1241"
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
          "id": "beca5f792b211eadc9d6e7a827931c99866a9883",
          "message": "Merge pull request #1566 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.12.4",
          "timestamp": "2025-01-24T14:29:15Z",
          "tree_id": "8a53d2b79dcd093f10e64cb2c6f6fe7324a70b5d",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/beca5f792b211eadc9d6e7a827931c99866a9883"
        },
        "date": 1737729224577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 269.75037898832574,
            "unit": "iter/sec",
            "range": "stddev: 0.00004530026081841508",
            "extra": "mean: 3.707131028880882 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 412.7460095199864,
            "unit": "iter/sec",
            "range": "stddev: 0.00007463723868998122",
            "extra": "mean: 2.422797500000002 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 507.6931233487484,
            "unit": "iter/sec",
            "range": "stddev: 0.00016658156088560498",
            "extra": "mean: 1.9696938051947428 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1470.8123576900682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003103940954097574",
            "extra": "mean: 679.8963815958919 usec\nrounds: 1554"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 246.84169069952884,
            "unit": "iter/sec",
            "range": "stddev: 0.00008775835484051049",
            "extra": "mean: 4.051179511718961 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 363.71308143824484,
            "unit": "iter/sec",
            "range": "stddev: 0.00004762716418745948",
            "extra": "mean: 2.749419943999982 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.18284683444944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006698501832711626",
            "extra": "mean: 2.031765240157506 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1313.9706031580874,
            "unit": "iter/sec",
            "range": "stddev: 0.000032336623900409814",
            "extra": "mean: 761.0520338860938 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.612487146645995,
            "unit": "iter/sec",
            "range": "stddev: 0.0017493294520479893",
            "extra": "mean: 86.11419650000022 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.7552594480585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009554700377884421",
            "extra": "mean: 85.06830533333402 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.99654358471764,
            "unit": "iter/sec",
            "range": "stddev: 0.000041320558345385433",
            "extra": "mean: 2.5316677227721693 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 937.9466634781917,
            "unit": "iter/sec",
            "range": "stddev: 0.000046540360064134776",
            "extra": "mean: 1.066158704900869 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.828075901818,
            "unit": "iter/sec",
            "range": "stddev: 0.000038077709497866506",
            "extra": "mean: 854.8264660421166 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1054.0646144978766,
            "unit": "iter/sec",
            "range": "stddev: 0.000027550329326752587",
            "extra": "mean: 948.7084437194286 usec\nrounds: 1226"
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
          "id": "29372592cd0fa83a735fe2efc0d6dad1367c4124",
          "message": "Merge pull request #1569 from TeoZosa/dependabot/pip/black-25.1.0\n\n⬆️ Bump black from 24.10.0 to 25.1.0",
          "timestamp": "2025-02-01T12:37:01+09:00",
          "tree_id": "7154520b27c5c06bddbbe4aa95db680c99c5e9ec",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/29372592cd0fa83a735fe2efc0d6dad1367c4124"
        },
        "date": 1738381275548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.30901281079866,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380323129848168",
            "extra": "mean: 3.755036261992597 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 408.82485798504297,
            "unit": "iter/sec",
            "range": "stddev: 0.00006460530636699995",
            "extra": "mean: 2.446035216470583 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 512.3362435195211,
            "unit": "iter/sec",
            "range": "stddev: 0.00003105519502876993",
            "extra": "mean: 1.9518431745731024 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1453.5101269684878,
            "unit": "iter/sec",
            "range": "stddev: 0.000029566389893959073",
            "extra": "mean: 687.9897026143527 usec\nrounds: 1530"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.20495137486463,
            "unit": "iter/sec",
            "range": "stddev: 0.00005415580456940505",
            "extra": "mean: 4.11175839285709 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 369.24736670572764,
            "unit": "iter/sec",
            "range": "stddev: 0.00007531533720097617",
            "extra": "mean: 2.708211595174223 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 493.5165057315131,
            "unit": "iter/sec",
            "range": "stddev: 0.00004254868183976855",
            "extra": "mean: 2.0262746805555234 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1309.260376409529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000707606503872486",
            "extra": "mean: 763.7900130624635 usec\nrounds: 1378"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.569146842723875,
            "unit": "iter/sec",
            "range": "stddev: 0.00041408236992644096",
            "extra": "mean: 86.4367972499999 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.82476656127226,
            "unit": "iter/sec",
            "range": "stddev: 0.000155411771755283",
            "extra": "mean: 84.5682656666676 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.5453536896569,
            "unit": "iter/sec",
            "range": "stddev: 0.00008513989994214408",
            "extra": "mean: 2.5937285728644675 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 911.4544369982036,
            "unit": "iter/sec",
            "range": "stddev: 0.000026848314803782486",
            "extra": "mean: 1.097147547268971 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1143.6100464389344,
            "unit": "iter/sec",
            "range": "stddev: 0.00003857311446463559",
            "extra": "mean: 874.423937699639 usec\nrounds: 1252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1051.3050675644517,
            "unit": "iter/sec",
            "range": "stddev: 0.000025195807874353845",
            "extra": "mean: 951.1986870915503 usec\nrounds: 1224"
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
          "id": "a582ed01286d43c20f1dd6804fd76fe960d60039",
          "message": "Merge pull request #1552 from TeoZosa/dependabot/pip/structlog-25.1.0\n\n⬆️ Bump structlog from 24.4.0 to 25.1.0",
          "timestamp": "2025-02-01T12:37:13+09:00",
          "tree_id": "a1b15d8dd2e6f6a9383a8341fa77874f8293552b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a582ed01286d43c20f1dd6804fd76fe960d60039"
        },
        "date": 1738381482991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.1993751395987,
            "unit": "iter/sec",
            "range": "stddev: 0.000053903199751485916",
            "extra": "mean: 3.7565828224637485 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 407.87393188927433,
            "unit": "iter/sec",
            "range": "stddev: 0.000049723058433271234",
            "extra": "mean: 2.4517379558139307 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 517.2607420360838,
            "unit": "iter/sec",
            "range": "stddev: 0.00003927800547450655",
            "extra": "mean: 1.9332609624765233 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1483.4685420393496,
            "unit": "iter/sec",
            "range": "stddev: 0.000029683514199486308",
            "extra": "mean: 674.0958582278279 usec\nrounds: 1580"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.12363474712913,
            "unit": "iter/sec",
            "range": "stddev: 0.00004869878350608474",
            "extra": "mean: 4.130121378048811 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 359.8929321437131,
            "unit": "iter/sec",
            "range": "stddev: 0.00006801064521157959",
            "extra": "mean: 2.778604164420429 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 487.04417307984437,
            "unit": "iter/sec",
            "range": "stddev: 0.000043949764912628506",
            "extra": "mean: 2.0532018557504914 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1308.200702452791,
            "unit": "iter/sec",
            "range": "stddev: 0.00003340881225866601",
            "extra": "mean: 764.4087012987115 usec\nrounds: 1386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.327256220096668,
            "unit": "iter/sec",
            "range": "stddev: 0.003117932977580642",
            "extra": "mean: 88.28263266666585 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.808065283297696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003840842340342067",
            "extra": "mean: 84.68787866666716 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.6000721821954,
            "unit": "iter/sec",
            "range": "stddev: 0.000040156661408121014",
            "extra": "mean: 2.5799788796993304 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.4284835524628,
            "unit": "iter/sec",
            "range": "stddev: 0.00003834547254633584",
            "extra": "mean: 1.1081210513917303 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1131.4425321196102,
            "unit": "iter/sec",
            "range": "stddev: 0.00004466606569796453",
            "extra": "mean: 883.8274782958974 usec\nrounds: 1244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1019.1509852634789,
            "unit": "iter/sec",
            "range": "stddev: 0.00005083393533411907",
            "extra": "mean: 981.2088831386177 usec\nrounds: 1198"
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
          "id": "81ed4133e00ed6218070f68b41cdf91bfde1132a",
          "message": "Merge pull request #1575 from TeoZosa/dependabot/pip/sentry-sdk-2.21.0",
          "timestamp": "2025-02-12T15:07:19Z",
          "tree_id": "e4f9a6950ae534fdf525c9ef3d2dedff04fe7fbf",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/81ed4133e00ed6218070f68b41cdf91bfde1132a"
        },
        "date": 1739373123852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.52389970524973,
            "unit": "iter/sec",
            "range": "stddev: 0.00011635841564431073",
            "extra": "mean: 3.82374230855019 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 389.35891573326546,
            "unit": "iter/sec",
            "range": "stddev: 0.00003963003074825351",
            "extra": "mean: 2.568324390663397 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 513.3062629556674,
            "unit": "iter/sec",
            "range": "stddev: 0.000033614483757731675",
            "extra": "mean: 1.948154683018872 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1476.8925003297384,
            "unit": "iter/sec",
            "range": "stddev: 0.00003459586084250729",
            "extra": "mean: 677.0973512132637 usec\nrounds: 1566"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 237.1795741193717,
            "unit": "iter/sec",
            "range": "stddev: 0.00008540317017250292",
            "extra": "mean: 4.216214670731736 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 353.26314669690646,
            "unit": "iter/sec",
            "range": "stddev: 0.00004897766478706215",
            "extra": "mean: 2.8307509836512392 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.97958318972695,
            "unit": "iter/sec",
            "range": "stddev: 0.000032058708544455466",
            "extra": "mean: 2.0162120254403098 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1327.0045467389855,
            "unit": "iter/sec",
            "range": "stddev: 0.000023978347098665968",
            "extra": "mean: 753.5769206348427 usec\nrounds: 1386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.74564669359221,
            "unit": "iter/sec",
            "range": "stddev: 0.00025431735557479736",
            "extra": "mean: 85.13792608333316 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.05595046794561,
            "unit": "iter/sec",
            "range": "stddev: 0.0016554966311553376",
            "extra": "mean: 82.94659161538547 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.83869100726287,
            "unit": "iter/sec",
            "range": "stddev: 0.00003925503170900861",
            "extra": "mean: 2.5917566675063606 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 893.0403604891435,
            "unit": "iter/sec",
            "range": "stddev: 0.00007315314936614255",
            "extra": "mean: 1.1197702189543501 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1120.2017920445026,
            "unit": "iter/sec",
            "range": "stddev: 0.00006432347485368277",
            "extra": "mean: 892.6963044532183 usec\nrounds: 1235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1022.2720735989842,
            "unit": "iter/sec",
            "range": "stddev: 0.000046072523799682504",
            "extra": "mean: 978.2131644068357 usec\nrounds: 1180"
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
          "id": "fee566d292351d1c70c60324a0939d242cefc4fd",
          "message": "Merge pull request #1576 from TeoZosa/dependabot/pip/sentry-sdk-2.22.0",
          "timestamp": "2025-02-17T15:46:28Z",
          "tree_id": "d763becc220d4a3e6ee726a924362b8efcf735f1",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/fee566d292351d1c70c60324a0939d242cefc4fd"
        },
        "date": 1739807890276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.2221541755821,
            "unit": "iter/sec",
            "range": "stddev: 0.00004994720691929797",
            "extra": "mean: 3.756261394160562 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.4560200082321,
            "unit": "iter/sec",
            "range": "stddev: 0.00007601261296431085",
            "extra": "mean: 2.516001644607844 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 510.9695328625035,
            "unit": "iter/sec",
            "range": "stddev: 0.00005358796630472982",
            "extra": "mean: 1.9570638476190503 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1501.2244614439862,
            "unit": "iter/sec",
            "range": "stddev: 0.000021163132693384154",
            "extra": "mean: 666.1229054568747 usec\nrounds: 1576"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.8220932737319,
            "unit": "iter/sec",
            "range": "stddev: 0.00003962880115552705",
            "extra": "mean: 4.084598683999957 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 360.77158754767197,
            "unit": "iter/sec",
            "range": "stddev: 0.00007271360633664476",
            "extra": "mean: 2.771836903225815 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 493.2218622208854,
            "unit": "iter/sec",
            "range": "stddev: 0.000030292554994581238",
            "extra": "mean: 2.0274851473476616 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1352.8399865473698,
            "unit": "iter/sec",
            "range": "stddev: 0.000013221134217895766",
            "extra": "mean: 739.1857203689957 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.573475809764714,
            "unit": "iter/sec",
            "range": "stddev: 0.0007892050614367419",
            "extra": "mean: 86.40446624999942 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.853484506906,
            "unit": "iter/sec",
            "range": "stddev: 0.00028845114605412795",
            "extra": "mean: 84.36337850000027 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.54063966897127,
            "unit": "iter/sec",
            "range": "stddev: 0.00002801227319676883",
            "extra": "mean: 2.5475069303481495 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.3347987447723,
            "unit": "iter/sec",
            "range": "stddev: 0.00011722402088900893",
            "extra": "mean: 1.1206556120042366 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1128.345338516045,
            "unit": "iter/sec",
            "range": "stddev: 0.00004152231455476835",
            "extra": "mean: 886.2534951534963 usec\nrounds: 1238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1042.329664595134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005479597286236699",
            "extra": "mean: 959.389369761844 usec\nrounds: 1217"
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
          "id": "67c42a2bd52df3a39e1ae869e3638f3835911851",
          "message": "Merge pull request #1580 from TeoZosa/dependabot/pip/docs/sphinx-autoapi-3.6.0",
          "timestamp": "2025-02-18T14:26:18Z",
          "tree_id": "e7856148a644df0403cc3db6bd0396a5b212ffa8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/67c42a2bd52df3a39e1ae869e3638f3835911851"
        },
        "date": 1739889105266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.82112064921387,
            "unit": "iter/sec",
            "range": "stddev: 0.00004666909730829545",
            "extra": "mean: 3.747829248175172 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 400.87863258373324,
            "unit": "iter/sec",
            "range": "stddev: 0.00006325219487650089",
            "extra": "mean: 2.4945205823389096 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 521.0164555912777,
            "unit": "iter/sec",
            "range": "stddev: 0.00002838667077014721",
            "extra": "mean: 1.9193251753730998 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1479.864599328976,
            "unit": "iter/sec",
            "range": "stddev: 0.00002318819210485789",
            "extra": "mean: 675.7374968314236 usec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 248.46705768998413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000840230338267969",
            "extra": "mean: 4.02467839920942 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 362.1328363373436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004706842617789189",
            "extra": "mean: 2.7614176336896814 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.2572945158892,
            "unit": "iter/sec",
            "range": "stddev: 0.000046023014724585",
            "extra": "mean: 2.0110313333333036 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1322.3165181564339,
            "unit": "iter/sec",
            "range": "stddev: 0.000030324231087474666",
            "extra": "mean: 756.2485881929346 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.564872582700747,
            "unit": "iter/sec",
            "range": "stddev: 0.0011419130750482526",
            "extra": "mean: 86.46874341666718 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.963094093981898,
            "unit": "iter/sec",
            "range": "stddev: 0.00046290492057999443",
            "extra": "mean: 83.59041500000035 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.2288250882345,
            "unit": "iter/sec",
            "range": "stddev: 0.00006657269616069373",
            "extra": "mean: 2.5237941731708045 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.4237138801111,
            "unit": "iter/sec",
            "range": "stddev: 0.000020410862069337162",
            "extra": "mean: 1.1056764486082 msec\nrounds: 934"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1155.380644691464,
            "unit": "iter/sec",
            "range": "stddev: 0.00003926566675661658",
            "extra": "mean: 865.5156243049603 usec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1044.063080971165,
            "unit": "iter/sec",
            "range": "stddev: 0.00003264326992365577",
            "extra": "mean: 957.7965337782288 usec\nrounds: 1199"
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
          "id": "a5bebd2d253764ee1d831f25409ab699ca710a64",
          "message": "Merge pull request #1581 from TeoZosa/dependabot/pip/sphinx-autoapi-3.6.0",
          "timestamp": "2025-02-18T15:11:19Z",
          "tree_id": "069438da4aff07906fa1ad10d1a52d2e1891f3e2",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a5bebd2d253764ee1d831f25409ab699ca710a64"
        },
        "date": 1739891749236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.541402015243,
            "unit": "iter/sec",
            "range": "stddev: 0.00004261914861047575",
            "extra": "mean: 3.7801266356877457 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 398.20860649526406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004836729533717649",
            "extra": "mean: 2.5112465770171473 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.5260776014419,
            "unit": "iter/sec",
            "range": "stddev: 0.00010282433155545261",
            "extra": "mean: 1.9978979013282865 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1485.9266315614377,
            "unit": "iter/sec",
            "range": "stddev: 0.000028482669143655835",
            "extra": "mean: 672.9807372448682 usec\nrounds: 1568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.54737161890216,
            "unit": "iter/sec",
            "range": "stddev: 0.00006219409298963353",
            "extra": "mean: 4.174539646341468 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 357.41256187314633,
            "unit": "iter/sec",
            "range": "stddev: 0.000041127540987424015",
            "extra": "mean: 2.7978871105121437 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 495.3337529698709,
            "unit": "iter/sec",
            "range": "stddev: 0.000052948351253030854",
            "extra": "mean: 2.0188408199608916 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1343.3888689656721,
            "unit": "iter/sec",
            "range": "stddev: 0.000030331366130434847",
            "extra": "mean: 744.386099290773 usec\nrounds: 1410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.671005478042275,
            "unit": "iter/sec",
            "range": "stddev: 0.0009414240032798647",
            "extra": "mean: 85.68242058333286 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.024729792898102,
            "unit": "iter/sec",
            "range": "stddev: 0.000519760373733655",
            "extra": "mean: 83.16195184615356 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.5187991779375,
            "unit": "iter/sec",
            "range": "stddev: 0.000046488172239837755",
            "extra": "mean: 2.5805199699249393 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.4767566646585,
            "unit": "iter/sec",
            "range": "stddev: 0.000026721530836083732",
            "extra": "mean: 1.1019565985088164 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1153.8571805116485,
            "unit": "iter/sec",
            "range": "stddev: 0.00003961341158003449",
            "extra": "mean: 866.6583844948432 usec\nrounds: 1277"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1037.170751849062,
            "unit": "iter/sec",
            "range": "stddev: 0.00002906782602438419",
            "extra": "mean: 964.1613960065938 usec\nrounds: 1202"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21beb46edaae972d0d60fe84ca046ccad2308cd5",
          "message": "Merge pull request #1570 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-5.2.0\n\n⬆️ Bump crazy-max/ghaction-github-labeler from 5.1.0 to 5.2.0",
          "timestamp": "2025-02-23T13:19:34+09:00",
          "tree_id": "5a0cbff821e8a4a9f91f6a66d5efa5560ad1f355",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/21beb46edaae972d0d60fe84ca046ccad2308cd5"
        },
        "date": 1740284528075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 264.62921576668754,
            "unit": "iter/sec",
            "range": "stddev: 0.000045473323910042095",
            "extra": "mean: 3.7788722500000076 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 395.33260386983574,
            "unit": "iter/sec",
            "range": "stddev: 0.000057741763334346316",
            "extra": "mean: 2.52951562864077 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 504.1385771166513,
            "unit": "iter/sec",
            "range": "stddev: 0.00006349968196577383",
            "extra": "mean: 1.9835815892514266 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1479.1772421984417,
            "unit": "iter/sec",
            "range": "stddev: 0.00003581318307820865",
            "extra": "mean: 676.0515044929573 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 243.56655646576357,
            "unit": "iter/sec",
            "range": "stddev: 0.00005805850038012348",
            "extra": "mean: 4.1056539719998995 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 359.1733039983604,
            "unit": "iter/sec",
            "range": "stddev: 0.00004263679527499806",
            "extra": "mean: 2.7841712868631374 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 491.27729095453736,
            "unit": "iter/sec",
            "range": "stddev: 0.00002974115703048169",
            "extra": "mean: 2.035510328712791 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1315.7186834157994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002524295582373641",
            "extra": "mean: 760.0408906589764 usec\nrounds: 1381"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.583227136135118,
            "unit": "iter/sec",
            "range": "stddev: 0.000817262567901756",
            "extra": "mean: 86.33172674999982 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.843424258305184,
            "unit": "iter/sec",
            "range": "stddev: 0.0018464801163577689",
            "extra": "mean: 84.43503991666527 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.5196385091546,
            "unit": "iter/sec",
            "range": "stddev: 0.00009237446523205115",
            "extra": "mean: 2.6279852569972992 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.6913205653145,
            "unit": "iter/sec",
            "range": "stddev: 0.00008000713020084946",
            "extra": "mean: 1.1102582840171644 msec\nrounds: 926"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1123.5668247768479,
            "unit": "iter/sec",
            "range": "stddev: 0.00003514618047102121",
            "extra": "mean: 890.0227186741744 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1016.3556005302736,
            "unit": "iter/sec",
            "range": "stddev: 0.00011638808008750675",
            "extra": "mean: 983.9076003302974 usec\nrounds: 1211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45184bec459a095dd13a4983db5b6e80e76acb3d",
          "message": "Merge pull request #1578 from TeoZosa/dependabot/pip/docs/poetry-2.1.1\n\n⬆️ Bump poetry from 1.8.5 to 2.1.1 in /docs",
          "timestamp": "2025-02-23T16:07:25+09:00",
          "tree_id": "516caa849c06dd0d0de50134f45edee88b84c85b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/45184bec459a095dd13a4983db5b6e80e76acb3d"
        },
        "date": 1740294675317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.07936155199127,
            "unit": "iter/sec",
            "range": "stddev: 0.000042202442686486007",
            "extra": "mean: 3.830252970037466 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 395.7036683696935,
            "unit": "iter/sec",
            "range": "stddev: 0.00006862985380637843",
            "extra": "mean: 2.5271436176470607 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.51656756135486,
            "unit": "iter/sec",
            "range": "stddev: 0.00008794122435629701",
            "extra": "mean: 1.9899841409266668 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1467.7815380457446,
            "unit": "iter/sec",
            "range": "stddev: 0.00003156969968518681",
            "extra": "mean: 681.3002984977143 usec\nrounds: 1531"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 239.44111127492775,
            "unit": "iter/sec",
            "range": "stddev: 0.00009627355943303937",
            "extra": "mean: 4.176392243902485 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 357.33866663076634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000732442314993358",
            "extra": "mean: 2.798465694823023 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 492.0466811877111,
            "unit": "iter/sec",
            "range": "stddev: 0.00005653814987169085",
            "extra": "mean: 2.032327497029717 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1343.1360382991754,
            "unit": "iter/sec",
            "range": "stddev: 0.00002342421941661919",
            "extra": "mean: 744.5262218310428 usec\nrounds: 1420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.703063734522367,
            "unit": "iter/sec",
            "range": "stddev: 0.00019022505203481296",
            "extra": "mean: 85.44771033333288 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.963537756931395,
            "unit": "iter/sec",
            "range": "stddev: 0.0001878724396979174",
            "extra": "mean: 83.58731508333506 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.88551482335697,
            "unit": "iter/sec",
            "range": "stddev: 0.000040151844213529916",
            "extra": "mean: 2.604943300504957 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 913.3511974289551,
            "unit": "iter/sec",
            "range": "stddev: 0.000024417252635155166",
            "extra": "mean: 1.094869096153766 msec\nrounds: 936"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1149.863879177937,
            "unit": "iter/sec",
            "range": "stddev: 0.000038698059189968025",
            "extra": "mean: 869.6681564733749 usec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1054.4096925317397,
            "unit": "iter/sec",
            "range": "stddev: 0.000040281965077589433",
            "extra": "mean: 948.3979586709823 usec\nrounds: 1234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef5b9179f6d316429aa33771048afaf46cbb61ee",
          "message": "Merge pull request #1577 from TeoZosa/dependabot/pip/poetry-2.1.1\n\n⬆️ Bump poetry from 1.8.5 to 2.1.1",
          "timestamp": "2025-02-23T16:07:44+09:00",
          "tree_id": "516caa849c06dd0d0de50134f45edee88b84c85b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ef5b9179f6d316429aa33771048afaf46cbb61ee"
        },
        "date": 1740294879966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.7811785654295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008796367901510529",
            "extra": "mean: 3.7910210479704696 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 397.1094743398703,
            "unit": "iter/sec",
            "range": "stddev: 0.00005890894552371469",
            "extra": "mean: 2.51819728467153 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 508.88026714641984,
            "unit": "iter/sec",
            "range": "stddev: 0.00003287713420708889",
            "extra": "mean: 1.9650987954545123 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1465.840342061807,
            "unit": "iter/sec",
            "range": "stddev: 0.000031879088903178836",
            "extra": "mean: 682.2025368693497 usec\nrounds: 1546"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.58381040292434,
            "unit": "iter/sec",
            "range": "stddev: 0.00011163987165327577",
            "extra": "mean: 4.122286637096805 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 356.0000141632246,
            "unit": "iter/sec",
            "range": "stddev: 0.00004310471772432913",
            "extra": "mean: 2.8089886522911875 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 497.886898688292,
            "unit": "iter/sec",
            "range": "stddev: 0.000026734359711323707",
            "extra": "mean: 2.008488278431407 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1286.4457850302426,
            "unit": "iter/sec",
            "range": "stddev: 0.00011806088020679918",
            "extra": "mean: 777.3355174672139 usec\nrounds: 1374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.638015596956262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006419884915865755",
            "extra": "mean: 85.92530158333301 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.92769564125465,
            "unit": "iter/sec",
            "range": "stddev: 0.0006757995261018497",
            "extra": "mean: 83.8384906923071 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.82570850123875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000338969981281254",
            "extra": "mean: 2.5327631369193444 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 901.6251257185767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004749045873384113",
            "extra": "mean: 1.1091083993505844 msec\nrounds: 924"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1120.8672803909951,
            "unit": "iter/sec",
            "range": "stddev: 0.00004708954605425294",
            "extra": "mean: 892.1662872085689 usec\nrounds: 1243"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1034.4014884115518,
            "unit": "iter/sec",
            "range": "stddev: 0.000043672743319383894",
            "extra": "mean: 966.7426151286968 usec\nrounds: 1203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5042665c90779d4797fc2bdb5f7cd40c6c4c1ab",
          "message": "Merge pull request #1583 from TeoZosa/fix/build/fix-release-branch-checkout-ref\n\n💚 Checkout correct ref when determining version numbers",
          "timestamp": "2025-02-25T16:49:36+09:00",
          "tree_id": "a6c1605eb0ba9ae7bb0eb7e0a43299d7a4832e3f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f5042665c90779d4797fc2bdb5f7cd40c6c4c1ab"
        },
        "date": 1740471065821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 266.49739811467464,
            "unit": "iter/sec",
            "range": "stddev: 0.00006217788546965831",
            "extra": "mean: 3.7523818509090923 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 400.3684890998051,
            "unit": "iter/sec",
            "range": "stddev: 0.00005703917680699618",
            "extra": "mean: 2.49769906280191 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 522.0621640416813,
            "unit": "iter/sec",
            "range": "stddev: 0.00004016165425083381",
            "extra": "mean: 1.9154807011070054 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1509.8673613816513,
            "unit": "iter/sec",
            "range": "stddev: 0.00009069202182677194",
            "extra": "mean: 662.3098330206427 usec\nrounds: 1599"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 244.52500493530212,
            "unit": "iter/sec",
            "range": "stddev: 0.00012917152255613614",
            "extra": "mean: 4.0895613119999155 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 363.39867946629363,
            "unit": "iter/sec",
            "range": "stddev: 0.00005375977927853744",
            "extra": "mean: 2.751798662198367 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.606890512256,
            "unit": "iter/sec",
            "range": "stddev: 0.00009301496249917207",
            "extra": "mean: 1.9896265229885766 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1360.0435715283995,
            "unit": "iter/sec",
            "range": "stddev: 0.000018607744462137136",
            "extra": "mean: 735.2705611307827 usec\nrounds: 1415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.53869629545673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242815714217162",
            "extra": "mean: 86.66490341666606 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.8257769189285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002887007129361044",
            "extra": "mean: 84.56104041666694 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.11981218971056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000981000965584155",
            "extra": "mean: 2.5372994938875273 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 915.8222437290851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000929004492472514",
            "extra": "mean: 1.0919149505783525 msec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1180.3425230020725,
            "unit": "iter/sec",
            "range": "stddev: 0.00003912754444819908",
            "extra": "mean: 847.2117038167947 usec\nrounds: 1310"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.4868028740389,
            "unit": "iter/sec",
            "range": "stddev: 0.000025254299937526543",
            "extra": "mean: 929.8115024077334 usec\nrounds: 1246"
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
          "id": "cedd6c3f8536a9574d01d80f1321656e0d7df2db",
          "message": "Merge pull request #1584 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-3.3.0",
          "timestamp": "2025-02-25T15:32:02Z",
          "tree_id": "39b6cf8ee725e25245ac3de8b8fea0cc02a9bb3a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cedd6c3f8536a9574d01d80f1321656e0d7df2db"
        },
        "date": 1740497782745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 261.90494180045783,
            "unit": "iter/sec",
            "range": "stddev: 0.00007035604511093552",
            "extra": "mean: 3.818179195571987 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 398.31379447010175,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926676307957857",
            "extra": "mean: 2.5105833990267743 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 512.7222067034766,
            "unit": "iter/sec",
            "range": "stddev: 0.000050479040440440976",
            "extra": "mean: 1.9503738806818087 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1455.8101039628043,
            "unit": "iter/sec",
            "range": "stddev: 0.000043748971654799014",
            "extra": "mean: 686.9027748041717 usec\nrounds: 1532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 241.7452945421674,
            "unit": "iter/sec",
            "range": "stddev: 0.000075869149959767",
            "extra": "mean: 4.13658516867459 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 359.04533148415663,
            "unit": "iter/sec",
            "range": "stddev: 0.00004650495645452915",
            "extra": "mean: 2.7851636334230583 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 489.9868970272953,
            "unit": "iter/sec",
            "range": "stddev: 0.00005467819978096331",
            "extra": "mean: 2.0408709009708352 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1304.1099659162878,
            "unit": "iter/sec",
            "range": "stddev: 0.000029492115748383468",
            "extra": "mean: 766.8065010893346 usec\nrounds: 1377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.636851848140713,
            "unit": "iter/sec",
            "range": "stddev: 0.0006426816019812662",
            "extra": "mean: 85.93389458333404 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.979601147145983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006417048665153282",
            "extra": "mean: 83.47523325000179 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.45787638225113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000727785963269535",
            "extra": "mean: 2.567671783375372 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.2986883653383,
            "unit": "iter/sec",
            "range": "stddev: 0.00003321768839292445",
            "extra": "mean: 1.1169456774541113 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1108.9417493687126,
            "unit": "iter/sec",
            "range": "stddev: 0.000045687541681514054",
            "extra": "mean: 901.7606204918069 usec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1028.1162129993118,
            "unit": "iter/sec",
            "range": "stddev: 0.00003351606463152067",
            "extra": "mean: 972.6526897992507 usec\nrounds: 1196"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e1e09e11bfb8035340a9243b5c8607b29f7c86a",
          "message": "Merge pull request #1582 from TeoZosa/build/migrate-poetry-to-uv\n\n👷 Migrate Poetry to uv",
          "timestamp": "2025-02-26T09:43:03+09:00",
          "tree_id": "e8e854292ec3d05d1d9e1f07b58105f404b5a2d6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/1e1e09e11bfb8035340a9243b5c8607b29f7c86a"
        },
        "date": 1740530820618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 272.26413010164066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003806706355904502",
            "extra": "mean: 3.672903954063591 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 426.29507090521594,
            "unit": "iter/sec",
            "range": "stddev: 0.00013956532592278206",
            "extra": "mean: 2.345793015801357 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 547.3744162938492,
            "unit": "iter/sec",
            "range": "stddev: 0.00004952862669992648",
            "extra": "mean: 1.8269030671378073 msec\nrounds: 566"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1638.465455901314,
            "unit": "iter/sec",
            "range": "stddev: 0.000028601280774427616",
            "extra": "mean: 610.3271792507237 usec\nrounds: 1735"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 259.9776541848313,
            "unit": "iter/sec",
            "range": "stddev: 0.00018338464937505414",
            "extra": "mean: 3.8464844339623485 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 382.78938795430366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000686736579612835",
            "extra": "mean: 2.6124026199999495 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 521.9721416260206,
            "unit": "iter/sec",
            "range": "stddev: 0.00005212667894093814",
            "extra": "mean: 1.9158110562852102 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1502.2263985652685,
            "unit": "iter/sec",
            "range": "stddev: 0.000019662097728522587",
            "extra": "mean: 665.6786227129745 usec\nrounds: 1585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.677902224109284,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852434116963559",
            "extra": "mean: 78.8774027692312 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.160620704619737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006335690292373057",
            "extra": "mean: 75.98425807142765 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.78081640771876,
            "unit": "iter/sec",
            "range": "stddev: 0.00006927816458826782",
            "extra": "mean: 2.36529180414758 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1008.1856740144678,
            "unit": "iter/sec",
            "range": "stddev: 0.0001374867464981421",
            "extra": "mean: 991.8807872146471 usec\nrounds: 1095"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1280.661054886642,
            "unit": "iter/sec",
            "range": "stddev: 0.000040389737120867175",
            "extra": "mean: 780.8467323842492 usec\nrounds: 1405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1173.8026854910452,
            "unit": "iter/sec",
            "range": "stddev: 0.00004861018563535504",
            "extra": "mean: 851.9319408284221 usec\nrounds: 1352"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "202d2f0a9da987e10699d93fed6203e702e06f4b",
          "message": "Merge pull request #1585 from TeoZosa/chore/remove-deprecated-code-from-uv-migration\n\n👷 Remove deprecated code from uv migration",
          "timestamp": "2025-02-26T14:22:53+09:00",
          "tree_id": "1fb48c252b5118a1c455287da8df5e99975e1dc8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/202d2f0a9da987e10699d93fed6203e702e06f4b"
        },
        "date": 1740547526785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 278.06748712057964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000671591438592457",
            "extra": "mean: 3.596249278745651 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 424.26906876946504,
            "unit": "iter/sec",
            "range": "stddev: 0.000042795863963778746",
            "extra": "mean: 2.356994826185101 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 531.1897765418494,
            "unit": "iter/sec",
            "range": "stddev: 0.000054632211757952686",
            "extra": "mean: 1.8825663522935212 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1605.0985338160922,
            "unit": "iter/sec",
            "range": "stddev: 0.000032536630781654355",
            "extra": "mean: 623.0147115158833 usec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.09668643852785,
            "unit": "iter/sec",
            "range": "stddev: 0.0007598512809321063",
            "extra": "mean: 4.2717392339621725 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 385.0526871720671,
            "unit": "iter/sec",
            "range": "stddev: 0.00008510062005732583",
            "extra": "mean: 2.5970471920200717 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 505.8796392047055,
            "unit": "iter/sec",
            "range": "stddev: 0.000034673121955747074",
            "extra": "mean: 1.9767547900763554 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1432.8887097104077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004855712371731234",
            "extra": "mean: 697.8909061277367 usec\nrounds: 1534"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.072082852450439,
            "unit": "iter/sec",
            "range": "stddev: 0.0005538506946747997",
            "extra": "mean: 82.83574692307684 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.27414944237334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002198282876218255",
            "extra": "mean: 81.4720404615376 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.5321180802863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000725587500814131",
            "extra": "mean: 2.5606088557213575 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 966.3695348784844,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517121447610239",
            "extra": "mean: 1.034800833333125 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1254.15576797899,
            "unit": "iter/sec",
            "range": "stddev: 0.00004413784882519965",
            "extra": "mean: 797.3491216417643 usec\nrounds: 1340"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1138.176951373311,
            "unit": "iter/sec",
            "range": "stddev: 0.00002991875235144763",
            "extra": "mean: 878.5980060423924 usec\nrounds: 1324"
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
          "id": "702b9834344de35cf0ea4744b6a292f7f06ffe94",
          "message": ":bookmark: Bump version number to `1.6.2`",
          "timestamp": "2025-02-26T15:30:32+09:00",
          "tree_id": "1b4e5829dd0f8d037f299fd9d786f25e100baa1b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/702b9834344de35cf0ea4744b6a292f7f06ffe94"
        },
        "date": 1740551581909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 274.2689050557933,
            "unit": "iter/sec",
            "range": "stddev: 0.000360104296150731",
            "extra": "mean: 3.6460567770034826 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 428.0163487686961,
            "unit": "iter/sec",
            "range": "stddev: 0.00005122287284731614",
            "extra": "mean: 2.3363593537414364 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 533.8996044680393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003414162488632339",
            "extra": "mean: 1.873011314545491 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1648.7996775989889,
            "unit": "iter/sec",
            "range": "stddev: 0.000027352477516490577",
            "extra": "mean: 606.5018167981556 usec\nrounds: 1774"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.85895209989457,
            "unit": "iter/sec",
            "range": "stddev: 0.0009075084503750686",
            "extra": "mean: 4.4275420155040495 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 377.8563643953191,
            "unit": "iter/sec",
            "range": "stddev: 0.00005176900326109308",
            "extra": "mean: 2.6465082878788952 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 513.455783322784,
            "unit": "iter/sec",
            "range": "stddev: 0.000026214592119845997",
            "extra": "mean: 1.9475873726235742 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1491.0597989419243,
            "unit": "iter/sec",
            "range": "stddev: 0.000020374099142673914",
            "extra": "mean: 670.6639134859737 usec\nrounds: 1572"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.794159023137556,
            "unit": "iter/sec",
            "range": "stddev: 0.00013815165061158128",
            "extra": "mean: 78.16066676923064 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.023308900594861,
            "unit": "iter/sec",
            "range": "stddev: 0.000456732053016807",
            "extra": "mean: 76.78540128571498 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.12517069533635,
            "unit": "iter/sec",
            "range": "stddev: 0.0001205027252688171",
            "extra": "mean: 2.391628321100626 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1039.0011229193674,
            "unit": "iter/sec",
            "range": "stddev: 0.000022223283836774316",
            "extra": "mean: 962.4628674030855 usec\nrounds: 1086"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1276.2518712321325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000419982948378945",
            "extra": "mean: 783.5443947553781 usec\nrounds: 1411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1169.5439448319921,
            "unit": "iter/sec",
            "range": "stddev: 0.000026621941301697244",
            "extra": "mean: 855.0341390922703 usec\nrounds: 1366"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba1f2be63b9daa6b8b5bc5656cdc8431bfc24292",
          "message": "Merge pull request #1574 from TeoZosa/dependabot/pip/dot-github/workflows/pip-25.0.1\n\n⬆️ Bump pip from 24.3.1 to 25.0.1 in /.github/workflows",
          "timestamp": "2025-02-26T17:49:03+09:00",
          "tree_id": "4a63730a960b0d54c3b7e919795647ba671d3565",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ba1f2be63b9daa6b8b5bc5656cdc8431bfc24292"
        },
        "date": 1740559900398,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 276.7067347371591,
            "unit": "iter/sec",
            "range": "stddev: 0.000052792653364863804",
            "extra": "mean: 3.613934445614017 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 420.7535937623501,
            "unit": "iter/sec",
            "range": "stddev: 0.00004925735680507393",
            "extra": "mean: 2.3766879589977306 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 509.5048561681358,
            "unit": "iter/sec",
            "range": "stddev: 0.0002737151777055943",
            "extra": "mean: 1.9626898309090925 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1581.2410839494676,
            "unit": "iter/sec",
            "range": "stddev: 0.000025788558109159054",
            "extra": "mean: 632.4146331325386 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 250.66564713605698,
            "unit": "iter/sec",
            "range": "stddev: 0.00025019519799991034",
            "extra": "mean: 3.9893779280302315 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 383.40667345664417,
            "unit": "iter/sec",
            "range": "stddev: 0.00014495469383716744",
            "extra": "mean: 2.608196646616482 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 508.00907052727143,
            "unit": "iter/sec",
            "range": "stddev: 0.00006520277376745513",
            "extra": "mean: 1.9684687892719765 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1394.44799816091,
            "unit": "iter/sec",
            "range": "stddev: 0.00012130149356840583",
            "extra": "mean: 717.1296465116419 usec\nrounds: 1505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.501047972467795,
            "unit": "iter/sec",
            "range": "stddev: 0.0003290912474482769",
            "extra": "mean: 79.99329353846107 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.913696038936344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128000939224817",
            "extra": "mean: 77.43716415384719 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.9052364762156,
            "unit": "iter/sec",
            "range": "stddev: 0.00003554436656759968",
            "extra": "mean: 2.3871747424593908 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1003.1360695301489,
            "unit": "iter/sec",
            "range": "stddev: 0.00002458157238304598",
            "extra": "mean: 996.8737346553417 usec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1238.4295949593497,
            "unit": "iter/sec",
            "range": "stddev: 0.00003645563468597783",
            "extra": "mean: 807.4742432433748 usec\nrounds: 1369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1116.7980276423714,
            "unit": "iter/sec",
            "range": "stddev: 0.000026185135181954326",
            "extra": "mean: 895.4170541571075 usec\nrounds: 1311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9723276321916960f870e6dff003309d939ad4d6",
          "message": "Merge pull request #1587 from TeoZosa/dependabot/pip/myst-parser-4.0.1\n\n⬆️ Bump myst-parser from 3.0.1 to 4.0.1",
          "timestamp": "2025-02-27T13:30:49+09:00",
          "tree_id": "df3c8016e29c5a6e8a4167e42d3dcda1b6707661",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9723276321916960f870e6dff003309d939ad4d6"
        },
        "date": 1740630807950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 269.6525731179616,
            "unit": "iter/sec",
            "range": "stddev: 0.000046452820643246136",
            "extra": "mean: 3.708475644927528 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 418.2606104758408,
            "unit": "iter/sec",
            "range": "stddev: 0.00004838569205321102",
            "extra": "mean: 2.3908538718535657 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 524.9759908101955,
            "unit": "iter/sec",
            "range": "stddev: 0.00003981037898707815",
            "extra": "mean: 1.904849016917326 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1610.8056517256507,
            "unit": "iter/sec",
            "range": "stddev: 0.000028858455249850042",
            "extra": "mean: 620.8073574417269 usec\nrounds: 1673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 252.56992413833157,
            "unit": "iter/sec",
            "range": "stddev: 0.000057358262054027175",
            "extra": "mean: 3.9592996015325403 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 373.2016502518751,
            "unit": "iter/sec",
            "range": "stddev: 0.00020374167330594527",
            "extra": "mean: 2.6795165544554704 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 502.2797399690165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004386953731334361",
            "extra": "mean: 1.9909224291262193 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1438.7758911783546,
            "unit": "iter/sec",
            "range": "stddev: 0.00003107211994304143",
            "extra": "mean: 695.0352769540793 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.525278263677412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005766482645660609",
            "extra": "mean: 79.83854561538504 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.780490676148338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868678923620438",
            "extra": "mean: 78.24425723076936 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.1470656078198,
            "unit": "iter/sec",
            "range": "stddev: 0.00007287799707893661",
            "extra": "mean: 2.3801189675175207 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1031.044034738473,
            "unit": "iter/sec",
            "range": "stddev: 0.00003994558652382442",
            "extra": "mean: 969.8906800364279 usec\nrounds: 1097"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1253.1902975965531,
            "unit": "iter/sec",
            "range": "stddev: 0.00003604768673788163",
            "extra": "mean: 797.9634074073687 usec\nrounds: 1377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1130.8407525172652,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069548858876746",
            "extra": "mean: 884.2978091954927 usec\nrounds: 1305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "061578b63603d43e0bc1727b9e5c27e692dddc82",
          "message": "Merge pull request #1586 from TeoZosa/dependabot/pip/sphinx-8.2.1\n\n⬆️ Bump sphinx from 7.4.7 to 8.2.1",
          "timestamp": "2025-02-28T17:27:38+09:00",
          "tree_id": "cfac2d763a0d9b275e0e1f2b0de623d745cca2e8",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/061578b63603d43e0bc1727b9e5c27e692dddc82"
        },
        "date": 1740731348991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 276.23580344991535,
            "unit": "iter/sec",
            "range": "stddev: 0.00006241510008482766",
            "extra": "mean: 3.6200955397923686 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 421.6889307832377,
            "unit": "iter/sec",
            "range": "stddev: 0.00005766358535843649",
            "extra": "mean: 2.3714162905405587 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 532.5817811960123,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133444572155822",
            "extra": "mean: 1.8776459039855107 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1628.2706338270195,
            "unit": "iter/sec",
            "range": "stddev: 0.000029037633147976285",
            "extra": "mean: 614.148520046475 usec\nrounds: 1721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 257.708584318503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008577055486684076",
            "extra": "mean: 3.880351920152169 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 383.0343538833557,
            "unit": "iter/sec",
            "range": "stddev: 0.000057773095424724306",
            "extra": "mean: 2.6107318830846356 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 515.4786830873676,
            "unit": "iter/sec",
            "range": "stddev: 0.00005064972437240829",
            "extra": "mean: 1.9399444299241988 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1499.9633932256868,
            "unit": "iter/sec",
            "range": "stddev: 0.00003060436360998721",
            "extra": "mean: 666.6829367412025 usec\nrounds: 1565"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.547923826990734,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091207411828684",
            "extra": "mean: 79.69445892307601 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.970473870605689,
            "unit": "iter/sec",
            "range": "stddev: 0.000790708079262774",
            "extra": "mean: 77.09818546153876 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.680555614759,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037722186377005",
            "extra": "mean: 2.399920002325589 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1031.2711009611157,
            "unit": "iter/sec",
            "range": "stddev: 0.000018775696314189195",
            "extra": "mean: 969.6771286115048 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1280.5428131696362,
            "unit": "iter/sec",
            "range": "stddev: 0.00004277510677815207",
            "extra": "mean: 780.9188335724374 usec\nrounds: 1394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1159.4359082422875,
            "unit": "iter/sec",
            "range": "stddev: 0.00006277905106967009",
            "extra": "mean: 862.4883815406464 usec\nrounds: 1376"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec7d8ce9d2a8a6122a3ca6040391b170a72dcd90",
          "message": "Merge pull request #1588 from TeoZosa/dependabot/github_actions/codecov/codecov-action-5.4.0\n\n⬆️ Bump codecov/codecov-action from 4.6.0 to 5.4.0",
          "timestamp": "2025-03-01T13:04:08+09:00",
          "tree_id": "e339d45c695b7399a0dadf28ef2be3c765fe77e0",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ec7d8ce9d2a8a6122a3ca6040391b170a72dcd90"
        },
        "date": 1740802034900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 283.7912310981367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000837670222763969",
            "extra": "mean: 3.5237170511945592 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 402.26351725199,
            "unit": "iter/sec",
            "range": "stddev: 0.0002905683493889871",
            "extra": "mean: 2.4859326215595385 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 525.4144745217701,
            "unit": "iter/sec",
            "range": "stddev: 0.00004669192085753928",
            "extra": "mean: 1.903259328571402 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1613.640097287513,
            "unit": "iter/sec",
            "range": "stddev: 0.000025967291108334152",
            "extra": "mean: 619.7168759508232 usec\nrounds: 1709"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.33901930445626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008449123160548425",
            "extra": "mean: 3.9010838174905027 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 379.5438094247012,
            "unit": "iter/sec",
            "range": "stddev: 0.00004401030870787547",
            "extra": "mean: 2.634741959079148 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 509.19762998822756,
            "unit": "iter/sec",
            "range": "stddev: 0.00003046963138702453",
            "extra": "mean: 1.9638740267175232 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1448.6103578561106,
            "unit": "iter/sec",
            "range": "stddev: 0.000017307431874652487",
            "extra": "mean: 690.3167539682395 usec\nrounds: 1512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.725688993029841,
            "unit": "iter/sec",
            "range": "stddev: 0.0005088992145093567",
            "extra": "mean: 78.58120692307689 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.02837345227192,
            "unit": "iter/sec",
            "range": "stddev: 0.0005653226215307257",
            "extra": "mean: 76.75555230769177 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.8167473928511,
            "unit": "iter/sec",
            "range": "stddev: 0.00006611360982765328",
            "extra": "mean: 2.33199847272726 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1027.3022478052187,
            "unit": "iter/sec",
            "range": "stddev: 0.00002041868976222518",
            "extra": "mean: 973.4233543598793 usec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1263.460925296776,
            "unit": "iter/sec",
            "range": "stddev: 0.00004903055560803803",
            "extra": "mean: 791.4767920227598 usec\nrounds: 1404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1165.1042461278853,
            "unit": "iter/sec",
            "range": "stddev: 0.00004851060334883931",
            "extra": "mean: 858.2922972973503 usec\nrounds: 1369"
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
          "id": "6fb877c23792cda80ebd7bf099a6b522fa2b7734",
          "message": ":memo: Point `CI` status badge to default branch workflows",
          "timestamp": "2025-03-03T10:43:48+09:00",
          "tree_id": "6302bee4be2a972cc7762cfab9473edeeb9e3e4a",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6fb877c23792cda80ebd7bf099a6b522fa2b7734"
        },
        "date": 1740966415681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 285.61860487900327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001498880965589805",
            "extra": "mean: 3.5011724828767035 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 431.44798390780545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003558786240446912",
            "extra": "mean: 2.3177765044642933 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 519.290010307234,
            "unit": "iter/sec",
            "range": "stddev: 0.00005759933211579601",
            "extra": "mean: 1.9257062145454285 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1415.4262116782365,
            "unit": "iter/sec",
            "range": "stddev: 0.00018898721201083543",
            "extra": "mean: 706.500975995297 usec\nrounds: 1708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 252.95857940748795,
            "unit": "iter/sec",
            "range": "stddev: 0.0002912399333019146",
            "extra": "mean: 3.953216381679279 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 389.7907947843173,
            "unit": "iter/sec",
            "range": "stddev: 0.00006859576228960319",
            "extra": "mean: 2.5654787475248853 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.2957731259263,
            "unit": "iter/sec",
            "range": "stddev: 0.00003839091466958238",
            "extra": "mean: 1.9988176069364798 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1429.816953676567,
            "unit": "iter/sec",
            "range": "stddev: 0.00006758931946097604",
            "extra": "mean: 699.3902243421055 usec\nrounds: 1520"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.50047498199032,
            "unit": "iter/sec",
            "range": "stddev: 0.00024359220069552684",
            "extra": "mean: 79.99696023076879 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.882495754600933,
            "unit": "iter/sec",
            "range": "stddev: 0.00034542416346793823",
            "extra": "mean: 77.62471023076827 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.25972495343206,
            "unit": "iter/sec",
            "range": "stddev: 0.000034167252980599204",
            "extra": "mean: 2.4494211377672985 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1011.7257791754921,
            "unit": "iter/sec",
            "range": "stddev: 0.00004091070162300114",
            "extra": "mean: 988.410121184173 usec\nrounds: 1081"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1246.1858025985541,
            "unit": "iter/sec",
            "range": "stddev: 0.000037477409423738274",
            "extra": "mean: 802.4485577630511 usec\nrounds: 1359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.4066695861807,
            "unit": "iter/sec",
            "range": "stddev: 0.00003242849398617902",
            "extra": "mean: 906.2841720677997 usec\nrounds: 1296"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "589a9ac537faf072c840bc4e186bd490fd0e59f0",
          "message": "Merge pull request #1589 from TeoZosa/build/migrate-dependabot-project-dependencies-updates-to-uv\n\n👷  Migrate Dependabot project dependencies updates to uv",
          "timestamp": "2025-03-03T14:12:54+09:00",
          "tree_id": "7e3aa1132a948fa62db37d2a557e2d0a93063f49",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/589a9ac537faf072c840bc4e186bd490fd0e59f0"
        },
        "date": 1740978940364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 274.71284715044055,
            "unit": "iter/sec",
            "range": "stddev: 0.00005372607573076084",
            "extra": "mean: 3.640164667844499 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 415.0867257204142,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356171803469325",
            "extra": "mean: 2.409135098850547 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 518.519160993426,
            "unit": "iter/sec",
            "range": "stddev: 0.00011082397971679808",
            "extra": "mean: 1.9285690389610857 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1612.415118885335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004269371511745973",
            "extra": "mean: 620.1876850989225 usec\nrounds: 1718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 234.75414500479891,
            "unit": "iter/sec",
            "range": "stddev: 0.0006526312006722236",
            "extra": "mean: 4.259775689922569 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 376.9524753648651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000635162654847362",
            "extra": "mean: 2.652854312820379 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 499.9621759007483,
            "unit": "iter/sec",
            "range": "stddev: 0.00006851778892077363",
            "extra": "mean: 2.0001513078431725 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1439.1194900437697,
            "unit": "iter/sec",
            "range": "stddev: 0.000017148480417383903",
            "extra": "mean: 694.8693328929802 usec\nrounds: 1514"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.64993073759091,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743218175251653",
            "extra": "mean: 79.05181623076956 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.853337239640418,
            "unit": "iter/sec",
            "range": "stddev: 0.00042617800595743364",
            "extra": "mean: 77.80080623076967 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.437621789368,
            "unit": "iter/sec",
            "range": "stddev: 0.00006362281796315728",
            "extra": "mean: 2.418744563380507 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1032.152289308681,
            "unit": "iter/sec",
            "range": "stddev: 0.000023329665503352614",
            "extra": "mean: 968.8492777260456 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1272.408458864806,
            "unit": "iter/sec",
            "range": "stddev: 0.000047070006228214235",
            "extra": "mean: 785.9111537911037 usec\nrounds: 1398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1153.2629388693274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000669784350879735",
            "extra": "mean: 867.1049474462535 usec\nrounds: 1351"
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
          "id": "d9c4dbd4e52b8b142121812e63c1c34270845dec",
          "message": "Merge pull request #1590 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.0",
          "timestamp": "2025-03-03T07:13:42Z",
          "tree_id": "eed08cc697e416fd76cdf34aeed06cb13cf552c6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d9c4dbd4e52b8b142121812e63c1c34270845dec"
        },
        "date": 1740986165787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 277.76724536076324,
            "unit": "iter/sec",
            "range": "stddev: 0.00022762320761408433",
            "extra": "mean: 3.6001365053003394 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 427.4160080601316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004777813485085488",
            "extra": "mean: 2.3396409613636036 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 526.7594040644411,
            "unit": "iter/sec",
            "range": "stddev: 0.00008297650174766628",
            "extra": "mean: 1.89839990000001 msec\nrounds: 550"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1616.0355784107414,
            "unit": "iter/sec",
            "range": "stddev: 0.000023124973704435946",
            "extra": "mean: 618.79825751326 usec\nrounds: 1697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 247.92277550381294,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183058789861369",
            "extra": "mean: 4.0335140568181505 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 387.48550045361674,
            "unit": "iter/sec",
            "range": "stddev: 0.00005082968489283693",
            "extra": "mean: 2.5807417279597105 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.8492964244497,
            "unit": "iter/sec",
            "range": "stddev: 0.00010282251614316522",
            "extra": "mean: 1.9966085749525344 msec\nrounds: 527"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1458.4508057392488,
            "unit": "iter/sec",
            "range": "stddev: 0.000019075884455312702",
            "extra": "mean: 685.6590541585853 usec\nrounds: 1551"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.682816878526086,
            "unit": "iter/sec",
            "range": "stddev: 0.000632725807041648",
            "extra": "mean: 78.84683738461526 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.88853382454328,
            "unit": "iter/sec",
            "range": "stddev: 0.001119450805391775",
            "extra": "mean: 77.58834430769213 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.3048073505995,
            "unit": "iter/sec",
            "range": "stddev: 0.00011762958608846671",
            "extra": "mean: 2.4372124871193974 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1034.307562088245,
            "unit": "iter/sec",
            "range": "stddev: 0.00009115053269864972",
            "extra": "mean: 966.8304058234102 usec\nrounds: 1099"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1275.0310564190527,
            "unit": "iter/sec",
            "range": "stddev: 0.00004449046430314111",
            "extra": "mean: 784.2946216608384 usec\nrounds: 1385"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1148.9182299056981,
            "unit": "iter/sec",
            "range": "stddev: 0.00006159306047599757",
            "extra": "mean: 870.3839611649985 usec\nrounds: 1339"
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
          "id": "bda5255a7f839ed917528ec81c814e7967ca7935",
          "message": "Merge pull request #1591 from TeoZosa/dependabot/uv/sphinx-8.2.3",
          "timestamp": "2025-03-06T15:22:40Z",
          "tree_id": "dce58b243d52c38be8ad2613ef9a32b50efed6f9",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bda5255a7f839ed917528ec81c814e7967ca7935"
        },
        "date": 1741274659822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 276.30536201660976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000382334145665827",
            "extra": "mean: 3.619184197879903 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 424.69222131448686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005792145245354074",
            "extra": "mean: 2.3546463763919396 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 519.4934080961069,
            "unit": "iter/sec",
            "range": "stddev: 0.0000579572072296156",
            "extra": "mean: 1.9249522408087971 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1627.9138022178192,
            "unit": "iter/sec",
            "range": "stddev: 0.00001493843654131358",
            "extra": "mean: 614.2831387249319 usec\nrounds: 1694"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 242.32523725709294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003539194993801777",
            "extra": "mean: 4.126685323077011 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 379.4620662401306,
            "unit": "iter/sec",
            "range": "stddev: 0.00018712300621858153",
            "extra": "mean: 2.6353095314860315 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 500.59134084953865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008437788034503608",
            "extra": "mean: 1.997637430769237 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1455.132699152984,
            "unit": "iter/sec",
            "range": "stddev: 0.000035409869558029354",
            "extra": "mean: 687.2225471821837 usec\nrounds: 1526"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.721350483145157,
            "unit": "iter/sec",
            "range": "stddev: 0.00040125280451223293",
            "extra": "mean: 78.60800638461504 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.93807672167438,
            "unit": "iter/sec",
            "range": "stddev: 0.000531233410373757",
            "extra": "mean: 77.29124053846121 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.3293803130863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008558795145824472",
            "extra": "mean: 2.4019443433177456 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1028.5041689071822,
            "unit": "iter/sec",
            "range": "stddev: 0.00004070860434072262",
            "extra": "mean: 972.2858012938647 usec\nrounds: 1082"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1280.0991172901408,
            "unit": "iter/sec",
            "range": "stddev: 0.00004358897927502506",
            "extra": "mean: 781.1895082912904 usec\nrounds: 1387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1154.914154400056,
            "unit": "iter/sec",
            "range": "stddev: 0.000026721071931762054",
            "extra": "mean: 865.8652214020796 usec\nrounds: 1355"
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
          "id": "ab5fd48095e994cfc65d60d6e82bfc5669aa5ae2",
          "message": "Merge pull request #1593 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.24.2",
          "timestamp": "2025-03-10T13:52:53Z",
          "tree_id": "c2c35658ac4709da0b401427dea05ebf0536e759",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/ab5fd48095e994cfc65d60d6e82bfc5669aa5ae2"
        },
        "date": 1741614936279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 278.3989693549883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004598174811944859",
            "extra": "mean: 3.591967320557475 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 419.55800123980345,
            "unit": "iter/sec",
            "range": "stddev: 0.00019548015980869508",
            "extra": "mean: 2.3834606825396665 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 536.3159317240031,
            "unit": "iter/sec",
            "range": "stddev: 0.000037546164507897596",
            "extra": "mean: 1.8645726163410268 msec\nrounds: 563"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1599.5431375562491,
            "unit": "iter/sec",
            "range": "stddev: 0.00009146093074641648",
            "extra": "mean: 625.1785128644798 usec\nrounds: 1749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 256.1423828966733,
            "unit": "iter/sec",
            "range": "stddev: 0.0001158649500422905",
            "extra": "mean: 3.9040786171002217 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 381.9907074948339,
            "unit": "iter/sec",
            "range": "stddev: 0.00007665665290191404",
            "extra": "mean: 2.617864729113925 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 505.0139332770278,
            "unit": "iter/sec",
            "range": "stddev: 0.00008301478235348777",
            "extra": "mean: 1.9801433863636495 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1446.8730799964749,
            "unit": "iter/sec",
            "range": "stddev: 0.00003866729696003614",
            "extra": "mean: 691.1456255737625 usec\nrounds: 1525"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.44804000185683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006926480024378074",
            "extra": "mean: 80.33393207692404 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.587133402220715,
            "unit": "iter/sec",
            "range": "stddev: 0.0009364820705158318",
            "extra": "mean: 79.44620653846194 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.6209720373816,
            "unit": "iter/sec",
            "range": "stddev: 0.00005656802291434502",
            "extra": "mean: 2.4176723802815867 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1029.1286821503238,
            "unit": "iter/sec",
            "range": "stddev: 0.00002003971253068082",
            "extra": "mean: 971.6957824074434 usec\nrounds: 1080"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1247.447995536277,
            "unit": "iter/sec",
            "range": "stddev: 0.000047611492469170866",
            "extra": "mean: 801.6366241945829 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1149.3616645685518,
            "unit": "iter/sec",
            "range": "stddev: 0.000023942471644802158",
            "extra": "mean: 870.0481587537381 usec\nrounds: 1348"
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
          "id": "cb3af65cb7d0f085815968f4e33dd3073f6e379c",
          "message": "Merge pull request #1595 from TeoZosa/dependabot/uv/tox-4.24.2",
          "timestamp": "2025-03-13T14:20:49Z",
          "tree_id": "d72b07c16943451c607859682225882470d39693",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/cb3af65cb7d0f085815968f4e33dd3073f6e379c"
        },
        "date": 1741875740037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 306.85853021676826,
            "unit": "iter/sec",
            "range": "stddev: 0.00008784130610433027",
            "extra": "mean: 3.2588307038216895 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 483.8499792489053,
            "unit": "iter/sec",
            "range": "stddev: 0.00003810497806729479",
            "extra": "mean: 2.0667563147410477 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 592.5276761837946,
            "unit": "iter/sec",
            "range": "stddev: 0.000049932232759524696",
            "extra": "mean: 1.6876848798701727 msec\nrounds: 616"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1740.3423055120904,
            "unit": "iter/sec",
            "range": "stddev: 0.00002275311576222512",
            "extra": "mean: 574.5996042461044 usec\nrounds: 1837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 271.1702393251218,
            "unit": "iter/sec",
            "range": "stddev: 0.00038570808591213587",
            "extra": "mean: 3.6877203135888434 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 421.6982538050179,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502897692419989",
            "extra": "mean: 2.371363862612468 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 570.6380855375407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009296398865418854",
            "extra": "mean: 1.7524242165820398 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1556.635542325411,
            "unit": "iter/sec",
            "range": "stddev: 0.00001552886698326362",
            "extra": "mean: 642.4111314496456 usec\nrounds: 1628"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.301586955142742,
            "unit": "iter/sec",
            "range": "stddev: 0.00024094136499450448",
            "extra": "mean: 75.17899957142886 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.65544465963511,
            "unit": "iter/sec",
            "range": "stddev: 0.0003544423718142663",
            "extra": "mean: 73.23086321428666 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.80760142946025,
            "unit": "iter/sec",
            "range": "stddev: 0.00004991451500651812",
            "extra": "mean: 2.1701030905261196 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1082.306268198674,
            "unit": "iter/sec",
            "range": "stddev: 0.00005811064267303549",
            "extra": "mean: 923.9528859648392 usec\nrounds: 1140"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1316.7118982028487,
            "unit": "iter/sec",
            "range": "stddev: 0.00003857062689975243",
            "extra": "mean: 759.4675808465604 usec\nrounds: 1441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1168.1493229573146,
            "unit": "iter/sec",
            "range": "stddev: 0.00008083682257229946",
            "extra": "mean: 856.0549412196519 usec\nrounds: 1361"
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
          "id": "975ebcfb420d6ba81287210a8b805bb3ae5ce3b9",
          "message": "Merge pull request #1598 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.1",
          "timestamp": "2025-03-17T13:39:18Z",
          "tree_id": "6731a1afb3207969688f4b7680dd18315db576ae",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/975ebcfb420d6ba81287210a8b805bb3ae5ce3b9"
        },
        "date": 1742218851931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 306.1445517304539,
            "unit": "iter/sec",
            "range": "stddev: 0.00009791744007170106",
            "extra": "mean: 3.266430822784832 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 479.354375581635,
            "unit": "iter/sec",
            "range": "stddev: 0.00008435801512156837",
            "extra": "mean: 2.086139296812777 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 590.0372209430653,
            "unit": "iter/sec",
            "range": "stddev: 0.000034390772996433756",
            "extra": "mean: 1.694808334975351 msec\nrounds: 609"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1670.8043024708177,
            "unit": "iter/sec",
            "range": "stddev: 0.00007504230119969777",
            "extra": "mean: 598.5141398793269 usec\nrounds: 1823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 281.34781226514616,
            "unit": "iter/sec",
            "range": "stddev: 0.00004662313234335892",
            "extra": "mean: 3.554319445205374 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 424.64536010566843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006743504009495139",
            "extra": "mean: 2.3549062204545477 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 565.3706187596001,
            "unit": "iter/sec",
            "range": "stddev: 0.00003592582273433024",
            "extra": "mean: 1.7687512700853802 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1518.5434872382923,
            "unit": "iter/sec",
            "range": "stddev: 0.00004790122701760358",
            "extra": "mean: 658.5257573483493 usec\nrounds: 1599"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.341166834498877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003799387054844261",
            "extra": "mean: 74.95596242857135 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.788444271825824,
            "unit": "iter/sec",
            "range": "stddev: 0.0002341497884848776",
            "extra": "mean: 72.52449807142624 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.8994455251847,
            "unit": "iter/sec",
            "range": "stddev: 0.000030313744329808217",
            "extra": "mean: 2.1417887932489728 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1088.3025085114787,
            "unit": "iter/sec",
            "range": "stddev: 0.000026755253950077456",
            "extra": "mean: 918.8621657849028 usec\nrounds: 1134"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1322.3851584273386,
            "unit": "iter/sec",
            "range": "stddev: 0.000041145814457919",
            "extra": "mean: 756.2093340409697 usec\nrounds: 1413"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.7906404279468,
            "unit": "iter/sec",
            "range": "stddev: 0.000038241662676731355",
            "extra": "mean: 839.0735470459149 usec\nrounds: 1371"
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
          "id": "46a789a16ca0a025bc884c57729a7fc033551f8f",
          "message": "Merge pull request #1599 from TeoZosa/dependabot/uv/pre-commit-4.2.0",
          "timestamp": "2025-03-19T14:10:43Z",
          "tree_id": "e7eac0f7317b0280bc5f9b1ae4b8acd0578c7550",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/46a789a16ca0a025bc884c57729a7fc033551f8f"
        },
        "date": 1742393547277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 353.84701105444174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000819899835415983",
            "extra": "mean: 2.826080110215042 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 478.4537955210707,
            "unit": "iter/sec",
            "range": "stddev: 0.000033813239013459845",
            "extra": "mean: 2.0900659778671584 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 923.7071550231209,
            "unit": "iter/sec",
            "range": "stddev: 0.000047098601346620674",
            "extra": "mean: 1.0825941907692265 msec\nrounds: 975"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1747.9837509726103,
            "unit": "iter/sec",
            "range": "stddev: 0.000018222327972013062",
            "extra": "mean: 572.0876978653729 usec\nrounds: 1827"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 324.7567127022427,
            "unit": "iter/sec",
            "range": "stddev: 0.00008471895137935763",
            "extra": "mean: 3.0792281141140343 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 432.7762242757205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005089023564680532",
            "extra": "mean: 2.310662979865786 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 871.4688614326028,
            "unit": "iter/sec",
            "range": "stddev: 0.000031585968943099255",
            "extra": "mean: 1.1474879301551928 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1533.7659537514555,
            "unit": "iter/sec",
            "range": "stddev: 0.000014531780333924122",
            "extra": "mean: 651.9899581511042 usec\nrounds: 1601"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.630123164129484,
            "unit": "iter/sec",
            "range": "stddev: 0.0004709503957444339",
            "extra": "mean: 73.36690857142868 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.706478450453378,
            "unit": "iter/sec",
            "range": "stddev: 0.00022920287299413346",
            "extra": "mean: 72.95820028571397 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 627.3045418111267,
            "unit": "iter/sec",
            "range": "stddev: 0.0002108246048756608",
            "extra": "mean: 1.5941220465467105 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1067.474266463203,
            "unit": "iter/sec",
            "range": "stddev: 0.00003554429602177601",
            "extra": "mean: 936.7907324953496 usec\nrounds: 1114"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1321.6071146879094,
            "unit": "iter/sec",
            "range": "stddev: 0.000040973008428937834",
            "extra": "mean: 756.6545222754379 usec\nrounds: 1459"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1180.3543050523463,
            "unit": "iter/sec",
            "range": "stddev: 0.000028248105630853993",
            "extra": "mean: 847.2032471264229 usec\nrounds: 1392"
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
          "id": "a0211a6cbbc9426f6f0d2391f1abaa9028b5e400",
          "message": "Merge pull request #1600 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.2",
          "timestamp": "2025-03-25T13:27:09Z",
          "tree_id": "c3614dd5bde6cd09a6bd617944664d6469b24867",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0211a6cbbc9426f6f0d2391f1abaa9028b5e400"
        },
        "date": 1742909328334,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 348.17193370722754,
            "unit": "iter/sec",
            "range": "stddev: 0.000057837936120923205",
            "extra": "mean: 2.8721442000000055 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 455.5294672142582,
            "unit": "iter/sec",
            "range": "stddev: 0.00026083481543444565",
            "extra": "mean: 2.1952476666666443 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 909.8229448738994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005679626562541478",
            "extra": "mean: 1.0991149493801775 msec\nrounds: 968"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1786.7718757070968,
            "unit": "iter/sec",
            "range": "stddev: 0.000018935016547314423",
            "extra": "mean: 559.6685360878877 usec\nrounds: 1912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 311.1093304253167,
            "unit": "iter/sec",
            "range": "stddev: 0.00033648675697258703",
            "extra": "mean: 3.214304111782513 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 418.33973029857947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006153259370631536",
            "extra": "mean: 2.390401694063997 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 868.5347874170417,
            "unit": "iter/sec",
            "range": "stddev: 0.000057795051533407944",
            "extra": "mean: 1.1513643604004926 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1588.3443762569573,
            "unit": "iter/sec",
            "range": "stddev: 0.000021427830926764403",
            "extra": "mean: 629.5863887884118 usec\nrounds: 1659"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.53741519207042,
            "unit": "iter/sec",
            "range": "stddev: 0.000554147350591613",
            "extra": "mean: 73.8693455000001 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.613735574618099,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763554667722071",
            "extra": "mean: 73.45522428571576 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 634.8505850286922,
            "unit": "iter/sec",
            "range": "stddev: 0.00007440516983590969",
            "extra": "mean: 1.5751737866868387 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1094.0933240239412,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644050504811611",
            "extra": "mean: 913.9988134852359 usec\nrounds: 1142"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1340.9856989839705,
            "unit": "iter/sec",
            "range": "stddev: 0.00005790540163868907",
            "extra": "mean: 745.7201077965809 usec\nrounds: 1475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.5551717976796,
            "unit": "iter/sec",
            "range": "stddev: 0.000036203913621246154",
            "extra": "mean: 837.8330751932018 usec\nrounds: 1423"
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
          "id": "e250b18882fe8033deb7a6589c8a764c8c2e7a8f",
          "message": ":package: Update `uv.lock`",
          "timestamp": "2025-04-01T14:57:48+09:00",
          "tree_id": "f63a306d836b7920bc37b28d500c8808151d8830",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/e250b18882fe8033deb7a6589c8a764c8c2e7a8f"
        },
        "date": 1743487176457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 343.4489029388697,
            "unit": "iter/sec",
            "range": "stddev: 0.00007051608652175165",
            "extra": "mean: 2.9116412701949708 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 468.4539709979224,
            "unit": "iter/sec",
            "range": "stddev: 0.00004477236628665211",
            "extra": "mean: 2.134681445585259 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 907.0275799856685,
            "unit": "iter/sec",
            "range": "stddev: 0.00005412139181362325",
            "extra": "mean: 1.102502307609875 msec\nrounds: 933"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1747.8244666443454,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040737188574449",
            "extra": "mean: 572.1398338815474 usec\nrounds: 1824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 319.43315580913577,
            "unit": "iter/sec",
            "range": "stddev: 0.000049705053963110096",
            "extra": "mean: 3.1305454108762243 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 419.5226706678523,
            "unit": "iter/sec",
            "range": "stddev: 0.00006441475750272906",
            "extra": "mean: 2.3836614083526553 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 858.7105021509419,
            "unit": "iter/sec",
            "range": "stddev: 0.00007450593265927836",
            "extra": "mean: 1.1645368229399184 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1500.7868217709483,
            "unit": "iter/sec",
            "range": "stddev: 0.000017401943150990112",
            "extra": "mean: 666.3171514392608 usec\nrounds: 1598"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.309789190897908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007701443950962533",
            "extra": "mean: 75.13267007142866 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.466509856726548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005447385985893098",
            "extra": "mean: 74.25829042856995 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 619.0583180196422,
            "unit": "iter/sec",
            "range": "stddev: 0.000040909337390287736",
            "extra": "mean: 1.6153566972478204 msec\nrounds: 654"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1067.3112696094229,
            "unit": "iter/sec",
            "range": "stddev: 0.000041104410680029885",
            "extra": "mean: 936.9337966101914 usec\nrounds: 1121"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1326.6415694795419,
            "unit": "iter/sec",
            "range": "stddev: 0.00004811027999014194",
            "extra": "mean: 753.7831038961883 usec\nrounds: 1463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1184.421312575641,
            "unit": "iter/sec",
            "range": "stddev: 0.00005660502641245917",
            "extra": "mean: 844.2941623748744 usec\nrounds: 1398"
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
          "id": "a0211a6cbbc9426f6f0d2391f1abaa9028b5e400",
          "message": "Merge pull request #1600 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.2",
          "timestamp": "2025-03-25T13:27:09Z",
          "tree_id": "c3614dd5bde6cd09a6bd617944664d6469b24867",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/a0211a6cbbc9426f6f0d2391f1abaa9028b5e400"
        },
        "date": 1743488337267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 351.41606297714765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000670095668960679",
            "extra": "mean: 2.8456297402234263 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 465.70422803380944,
            "unit": "iter/sec",
            "range": "stddev: 0.00003728559124071832",
            "extra": "mean: 2.1472856371134377 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 924.3088495347382,
            "unit": "iter/sec",
            "range": "stddev: 0.00003380738986751635",
            "extra": "mean: 1.081889457731971 msec\nrounds: 970"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1726.805756379257,
            "unit": "iter/sec",
            "range": "stddev: 0.000017594224327944036",
            "extra": "mean: 579.1039300776866 usec\nrounds: 1802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 315.8935353572617,
            "unit": "iter/sec",
            "range": "stddev: 0.00008985363800737495",
            "extra": "mean: 3.165623503086392 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 401.0550575919268,
            "unit": "iter/sec",
            "range": "stddev: 0.00021731471762560713",
            "extra": "mean: 2.493423237209239 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 839.2771540638607,
            "unit": "iter/sec",
            "range": "stddev: 0.00003073615087544869",
            "extra": "mean: 1.1915015143184868 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1504.2010252039336,
            "unit": "iter/sec",
            "range": "stddev: 0.000035425584026114376",
            "extra": "mean: 664.8047589679205 usec\nrounds: 1589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.312048053115944,
            "unit": "iter/sec",
            "range": "stddev: 0.001058056231781042",
            "extra": "mean: 75.11992114285755 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.429005675202271,
            "unit": "iter/sec",
            "range": "stddev: 0.00031603636562587735",
            "extra": "mean: 74.46567707142903 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 632.7288248809949,
            "unit": "iter/sec",
            "range": "stddev: 0.00004931531269796924",
            "extra": "mean: 1.5804558930724901 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1047.851519481147,
            "unit": "iter/sec",
            "range": "stddev: 0.000040494691214496795",
            "extra": "mean: 954.3336831683547 usec\nrounds: 1111"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1331.3054981099965,
            "unit": "iter/sec",
            "range": "stddev: 0.00004777283325612692",
            "extra": "mean: 751.1423947543684 usec\nrounds: 1487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1170.3139041961429,
            "unit": "iter/sec",
            "range": "stddev: 0.000041114748617084806",
            "extra": "mean: 854.4716049382265 usec\nrounds: 1377"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e74ac142e575a4f068f4f9df184d4e84edd9ddd",
          "message": "Merge pull request #1605 from TeoZosa/fix/build/fix-project-agnost-uv-commands\n\n🐛  Make uv-based runner commands project agnostic",
          "timestamp": "2025-04-01T15:17:03+09:00",
          "tree_id": "dc994359d7dfe9db9359a957d39979e34a30bd27",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6e74ac142e575a4f068f4f9df184d4e84edd9ddd"
        },
        "date": 1743488603780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 322.9842143258566,
            "unit": "iter/sec",
            "range": "stddev: 0.0001944954928824692",
            "extra": "mean: 3.096126546268626 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 470.4313115371199,
            "unit": "iter/sec",
            "range": "stddev: 0.0001014504665191764",
            "extra": "mean: 2.125708845213833 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 820.4258174252327,
            "unit": "iter/sec",
            "range": "stddev: 0.00006494026449695426",
            "extra": "mean: 1.218879243876467 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1729.45081170954,
            "unit": "iter/sec",
            "range": "stddev: 0.000017918878851245312",
            "extra": "mean: 578.2182373903498 usec\nrounds: 1824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 295.7625549210436,
            "unit": "iter/sec",
            "range": "stddev: 0.00032380950392055794",
            "extra": "mean: 3.3810906193549717 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 420.11838481436865,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778410489733739",
            "extra": "mean: 2.380281454337817 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 783.9293484878967,
            "unit": "iter/sec",
            "range": "stddev: 0.000030432313485155345",
            "extra": "mean: 1.2756251592428285 msec\nrounds: 898"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1522.9949303842182,
            "unit": "iter/sec",
            "range": "stddev: 0.000027309804300905007",
            "extra": "mean: 656.6010037523382 usec\nrounds: 1599"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.842253438429866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519419269772159",
            "extra": "mean: 77.8679540000001 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.160738309785996,
            "unit": "iter/sec",
            "range": "stddev: 0.0007672972420562245",
            "extra": "mean: 75.98357907142831 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 591.6732153348961,
            "unit": "iter/sec",
            "range": "stddev: 0.00008330573789885252",
            "extra": "mean: 1.6901221385084753 msec\nrounds: 657"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1065.1878475618034,
            "unit": "iter/sec",
            "range": "stddev: 0.000017759213820909922",
            "extra": "mean: 938.8015478105413 usec\nrounds: 1119"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1330.0731230229824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003755370973990536",
            "extra": "mean: 751.8383633880263 usec\nrounds: 1464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1183.5041245814593,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100924207959048",
            "extra": "mean: 844.9484705882586 usec\nrounds: 1377"
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
          "id": "b9fd1afebe57377efd502929e2703e943c5d1cbe",
          "message": ":package: Update `uv.lock`",
          "timestamp": "2025-04-01T15:20:22+09:00",
          "tree_id": "fd6c61965d489629ff86cdb3463937495f5da6a6",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b9fd1afebe57377efd502929e2703e943c5d1cbe"
        },
        "date": 1743488833069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 351.02191965152844,
            "unit": "iter/sec",
            "range": "stddev: 0.00005738987046291752",
            "extra": "mean: 2.84882494230769 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 473.83211829802025,
            "unit": "iter/sec",
            "range": "stddev: 0.000060785067163942365",
            "extra": "mean: 2.110452122983868 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 897.0947983346605,
            "unit": "iter/sec",
            "range": "stddev: 0.000036576487267454016",
            "extra": "mean: 1.1147093951011307 msec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1746.1116975719954,
            "unit": "iter/sec",
            "range": "stddev: 0.000020788108606117045",
            "extra": "mean: 572.7010485013765 usec\nrounds: 1835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 304.5852125343966,
            "unit": "iter/sec",
            "range": "stddev: 0.000325449281175814",
            "extra": "mean: 3.283153478395051 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 423.8533136176246,
            "unit": "iter/sec",
            "range": "stddev: 0.00003865419493134174",
            "extra": "mean: 2.3593067881548775 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 836.8024032858981,
            "unit": "iter/sec",
            "range": "stddev: 0.00007520598151875189",
            "extra": "mean: 1.1950252485811093 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1521.2201768722541,
            "unit": "iter/sec",
            "range": "stddev: 0.000032383743554394107",
            "extra": "mean: 657.3670368059915 usec\nrounds: 1603"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.639322997472586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004730938215793362",
            "extra": "mean: 73.31742199999981 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.911226385229993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864502224848461",
            "extra": "mean: 71.88438835714247 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 641.6317516432908,
            "unit": "iter/sec",
            "range": "stddev: 0.00003701314623280462",
            "extra": "mean: 1.5585263625730617 msec\nrounds: 684"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1086.5005381809026,
            "unit": "iter/sec",
            "range": "stddev: 0.00003316554531552665",
            "extra": "mean: 920.3861064572246 usec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1340.1463296987763,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060310551905998",
            "extra": "mean: 746.1871721312473 usec\nrounds: 1464"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1184.2895202428806,
            "unit": "iter/sec",
            "range": "stddev: 0.00003965095421536177",
            "extra": "mean: 844.3881187050566 usec\nrounds: 1390"
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
          "id": "f4811f792e60e07946b7d9193fd5328e463ad5ed",
          "message": "Merge pull request #1596 from TeoZosa/dependabot/uv/pytest-8.3.5",
          "timestamp": "2025-04-01T06:55:52Z",
          "tree_id": "ba2369157e0c01b9ecea424f589d8c97ce564133",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/f4811f792e60e07946b7d9193fd5328e463ad5ed"
        },
        "date": 1743490795372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 343.3546357268523,
            "unit": "iter/sec",
            "range": "stddev: 0.00003714880523964945",
            "extra": "mean: 2.9124406544943997 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 468.84289161689014,
            "unit": "iter/sec",
            "range": "stddev: 0.00003430758907590699",
            "extra": "mean: 2.132910657024825 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 919.71028345477,
            "unit": "iter/sec",
            "range": "stddev: 0.00003757988043774494",
            "extra": "mean: 1.0872989222689045 msec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1717.869604715106,
            "unit": "iter/sec",
            "range": "stddev: 0.00002122364549405084",
            "extra": "mean: 582.1163592715417 usec\nrounds: 1812"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 304.5323404214021,
            "unit": "iter/sec",
            "range": "stddev: 0.0004470131100994503",
            "extra": "mean: 3.283723490963987 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 409.5671038871861,
            "unit": "iter/sec",
            "range": "stddev: 0.00007674371683583397",
            "extra": "mean: 2.4416023418605577 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 847.4308617827587,
            "unit": "iter/sec",
            "range": "stddev: 0.00003645027603942109",
            "extra": "mean: 1.1800372692307646 msec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1521.9603790393264,
            "unit": "iter/sec",
            "range": "stddev: 0.000030485795959771913",
            "extra": "mean: 657.0473277571181 usec\nrounds: 1614"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.503985669539592,
            "unit": "iter/sec",
            "range": "stddev: 0.0002121468338042503",
            "extra": "mean: 74.05221128571401 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.58144446403301,
            "unit": "iter/sec",
            "range": "stddev: 0.000960240093031367",
            "extra": "mean: 73.62987071428557 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 628.604280346597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005016903686937917",
            "extra": "mean: 1.5908259476830553 msec\nrounds: 669"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1077.0976717326544,
            "unit": "iter/sec",
            "range": "stddev: 0.000023805841072890814",
            "extra": "mean: 928.4209094903784 usec\nrounds: 1138"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1285.105039090876,
            "unit": "iter/sec",
            "range": "stddev: 0.00004399955782201963",
            "extra": "mean: 778.1465091035918 usec\nrounds: 1428"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1157.0744378028517,
            "unit": "iter/sec",
            "range": "stddev: 0.000031164594417643486",
            "extra": "mean: 864.2486320058046 usec\nrounds: 1356"
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
          "id": "fa0fb0024a459fed6f7f62d5ce450c14ff89552f",
          "message": ":memo: Point CI status badge to latest trunk run",
          "timestamp": "2025-04-01T16:37:12+09:00",
          "tree_id": "46ab55f494444d3fff603a4aef26f5e242b36d8b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/fa0fb0024a459fed6f7f62d5ce450c14ff89552f"
        },
        "date": 1743493375274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 354.7122245820709,
            "unit": "iter/sec",
            "range": "stddev: 0.00004586647234005885",
            "extra": "mean: 2.819186739837399 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 471.74768375700637,
            "unit": "iter/sec",
            "range": "stddev: 0.00010043381989290044",
            "extra": "mean: 2.119777233532942 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 936.6660552692713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000437779547551753",
            "extra": "mean: 1.0676163552361482 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1763.852729351391,
            "unit": "iter/sec",
            "range": "stddev: 0.00001844264580250759",
            "extra": "mean: 566.9407560843943 usec\nrounds: 1849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 301.5499361535201,
            "unit": "iter/sec",
            "range": "stddev: 0.0005705214641868166",
            "extra": "mean: 3.3162003373494224 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 426.1004474777453,
            "unit": "iter/sec",
            "range": "stddev: 0.00003645429088937966",
            "extra": "mean: 2.346864468036563 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 881.9249575068193,
            "unit": "iter/sec",
            "range": "stddev: 0.000022455765275943338",
            "extra": "mean: 1.133883321350805 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1529.7765451539424,
            "unit": "iter/sec",
            "range": "stddev: 0.000020104196305388444",
            "extra": "mean: 653.690241995029 usec\nrounds: 1624"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.554027968411514,
            "unit": "iter/sec",
            "range": "stddev: 0.00026823628114522454",
            "extra": "mean: 73.77880599999946 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.739520334208121,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856871600707385",
            "extra": "mean: 72.7827446428562 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 631.8763407495132,
            "unit": "iter/sec",
            "range": "stddev: 0.00003117788321554865",
            "extra": "mean: 1.5825881355421998 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1083.5057985343744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002958856981733079",
            "extra": "mean: 922.9299938705173 usec\nrounds: 1142"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1320.6689533965048,
            "unit": "iter/sec",
            "range": "stddev: 0.000036332288855419425",
            "extra": "mean: 757.192025623222 usec\nrounds: 1444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1181.863944062039,
            "unit": "iter/sec",
            "range": "stddev: 0.00005065835957330369",
            "extra": "mean: 846.1210827390361 usec\nrounds: 1402"
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
          "id": "de0a87e062a3a55aa4b241d8e7f9f33a736ac3a3",
          "message": "Merge pull request #1604 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-5.3.0",
          "timestamp": "2025-04-01T07:58:24Z",
          "tree_id": "e7f6bca3b56f5815ab647e908d4ee3049a00a506",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/de0a87e062a3a55aa4b241d8e7f9f33a736ac3a3"
        },
        "date": 1743494522630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 346.02941793424856,
            "unit": "iter/sec",
            "range": "stddev: 0.000047267571158777975",
            "extra": "mean: 2.8899277002801447 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 480.45543122425937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000764380916872174",
            "extra": "mean: 2.0813585090543723 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 926.9617673856986,
            "unit": "iter/sec",
            "range": "stddev: 0.000028996695667779426",
            "extra": "mean: 1.078793144641003 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1702.3711957525215,
            "unit": "iter/sec",
            "range": "stddev: 0.00002474968107700315",
            "extra": "mean: 587.4159539911369 usec\nrounds: 1804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 317.2143852683206,
            "unit": "iter/sec",
            "range": "stddev: 0.00005432349136750196",
            "extra": "mean: 3.1524421540786522 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 421.5294327344154,
            "unit": "iter/sec",
            "range": "stddev: 0.00007054285618856325",
            "extra": "mean: 2.372313585585493 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 840.3141683716542,
            "unit": "iter/sec",
            "range": "stddev: 0.00004986720812608536",
            "extra": "mean: 1.1900311069820257 msec\nrounds: 888"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1502.010424463019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000526287697737637",
            "extra": "mean: 665.774340652468 usec\nrounds: 1594"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.32232702307965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016989103645125032",
            "extra": "mean: 75.06196164285684 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.631992436191663,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586086942885275",
            "extra": "mean: 73.35684821428552 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 632.6466255700813,
            "unit": "iter/sec",
            "range": "stddev: 0.000053352326032388356",
            "extra": "mean: 1.5806612405446638 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1067.1233687583965,
            "unit": "iter/sec",
            "range": "stddev: 0.00002687934027724205",
            "extra": "mean: 937.0987734656256 usec\nrounds: 1108"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1343.2083415388472,
            "unit": "iter/sec",
            "range": "stddev: 0.00004984692040085426",
            "extra": "mean: 744.4861449076095 usec\nrounds: 1463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.6420743486542,
            "unit": "iter/sec",
            "range": "stddev: 0.000026425462700552916",
            "extra": "mean: 839.1781572051282 usec\nrounds: 1374"
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
          "id": "9e2d80ae41a7167c8025a81b32dbbf2fed0ea984",
          "message": "Merge pull request #1603 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.25.0",
          "timestamp": "2025-04-01T08:15:15Z",
          "tree_id": "db2c21c236147279f87ec9925684a32c85e28fcc",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/9e2d80ae41a7167c8025a81b32dbbf2fed0ea984"
        },
        "date": 1743495414110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 356.25418833048934,
            "unit": "iter/sec",
            "range": "stddev: 0.000052282581829147875",
            "extra": "mean: 2.8069845429362967 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 469.6026626012835,
            "unit": "iter/sec",
            "range": "stddev: 0.000040814535878471974",
            "extra": "mean: 2.129459817073164 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 888.9292787606389,
            "unit": "iter/sec",
            "range": "stddev: 0.00019535703270678396",
            "extra": "mean: 1.124948883891211 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1727.5119268114638,
            "unit": "iter/sec",
            "range": "stddev: 0.000024326230759278165",
            "extra": "mean: 578.8672046078078 usec\nrounds: 1823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 319.89766614103024,
            "unit": "iter/sec",
            "range": "stddev: 0.000047056342515788835",
            "extra": "mean: 3.125999673780488 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 412.3209287712448,
            "unit": "iter/sec",
            "range": "stddev: 0.00006628391570440318",
            "extra": "mean: 2.4252952741935614 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 868.9029018211208,
            "unit": "iter/sec",
            "range": "stddev: 0.000025335471340576206",
            "extra": "mean: 1.1508765800000376 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1545.7844017158554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005849349826281744",
            "extra": "mean: 646.9207470912357 usec\nrounds: 1633"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.422970382711428,
            "unit": "iter/sec",
            "range": "stddev: 0.0008508782187819482",
            "extra": "mean: 74.49915864285776 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.828328506155424,
            "unit": "iter/sec",
            "range": "stddev: 0.00027369172220395664",
            "extra": "mean: 72.31531992857043 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 639.7591881111166,
            "unit": "iter/sec",
            "range": "stddev: 0.00006842481403070232",
            "extra": "mean: 1.563088140949552 msec\nrounds: 674"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1094.23348808441,
            "unit": "iter/sec",
            "range": "stddev: 0.00001672639302327506",
            "extra": "mean: 913.8817362925189 usec\nrounds: 1149"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1300.9747922679876,
            "unit": "iter/sec",
            "range": "stddev: 0.000048403876066183604",
            "extra": "mean: 768.6544012560777 usec\nrounds: 1433"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1171.0366263024293,
            "unit": "iter/sec",
            "range": "stddev: 0.00004981861160332108",
            "extra": "mean: 853.9442554905557 usec\nrounds: 1366"
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
          "id": "93d5ceda0a44801da6451a9e2ebc5aee523caad8",
          "message": "Merge pull request #1601 from TeoZosa/dependabot/pip/docs/orjson-3.10.16",
          "timestamp": "2025-04-01T08:31:43Z",
          "tree_id": "d786369fa1e605df9e060b92ce6c3589d79b4f6b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/93d5ceda0a44801da6451a9e2ebc5aee523caad8"
        },
        "date": 1743496468470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 347.8118871998278,
            "unit": "iter/sec",
            "range": "stddev: 0.00004702036611519227",
            "extra": "mean: 2.8751173746556615 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 482.12784963994704,
            "unit": "iter/sec",
            "range": "stddev: 0.00014490516157615417",
            "extra": "mean: 2.0741386351085085 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 935.5194896242167,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363818470449632",
            "extra": "mean: 1.0689248178054358 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1728.7551841859547,
            "unit": "iter/sec",
            "range": "stddev: 0.00002012475809661796",
            "extra": "mean: 578.4509045280955 usec\nrounds: 1833"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 309.00385407476296,
            "unit": "iter/sec",
            "range": "stddev: 0.00029024663639808253",
            "extra": "mean: 3.2362055903615095 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 429.6824239502228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004877738199999757",
            "extra": "mean: 2.3273002204899274 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 886.9306186280793,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432054361010092",
            "extra": "mean: 1.127483907982361 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1540.4154999088744,
            "unit": "iter/sec",
            "range": "stddev: 0.000024304325539347062",
            "extra": "mean: 649.175498467236 usec\nrounds: 1631"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.493506641722288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001870500755600756",
            "extra": "mean: 74.1097200714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.762122510607309,
            "unit": "iter/sec",
            "range": "stddev: 0.00043887174594448036",
            "extra": "mean: 72.66321014285688 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 637.2433606837138,
            "unit": "iter/sec",
            "range": "stddev: 0.000055581720689561104",
            "extra": "mean: 1.5692591899695523 msec\nrounds: 658"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1081.7115575942944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002004237524693402",
            "extra": "mean: 924.460862953134 usec\nrounds: 1131"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.8741808392201,
            "unit": "iter/sec",
            "range": "stddev: 0.00003993620755928413",
            "extra": "mean: 741.909010659567 usec\nrounds: 1501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1221.81967681985,
            "unit": "iter/sec",
            "range": "stddev: 0.000036469889038192246",
            "extra": "mean: 818.4513795053605 usec\nrounds: 1415"
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
          "id": "66c02bb560e2228fa82755f01aa5d352eb128d10",
          "message": "Merge pull request #1606 from TeoZosa/dependabot/uv/pytest-cov-6.1.0",
          "timestamp": "2025-04-01T13:49:40Z",
          "tree_id": "5257983c93509f790fbfca27d8b04534d3a130cd",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/66c02bb560e2228fa82755f01aa5d352eb128d10"
        },
        "date": 1743515514966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 354.7338261066892,
            "unit": "iter/sec",
            "range": "stddev: 0.00005876143988987242",
            "extra": "mean: 2.819015065395093 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 487.32358327894434,
            "unit": "iter/sec",
            "range": "stddev: 0.000037231673921420374",
            "extra": "mean: 2.0520246388888577 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 938.0877537880081,
            "unit": "iter/sec",
            "range": "stddev: 0.00003803342699188745",
            "extra": "mean: 1.0659983524590206 msec\nrounds: 976"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1782.3183910039702,
            "unit": "iter/sec",
            "range": "stddev: 0.00001690355388498698",
            "extra": "mean: 561.0669816612875 usec\nrounds: 1854"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 326.14732828432346,
            "unit": "iter/sec",
            "range": "stddev: 0.000046622276283651605",
            "extra": "mean: 3.0660990088756335 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 425.2376721387726,
            "unit": "iter/sec",
            "range": "stddev: 0.00005298974228167961",
            "extra": "mean: 2.3516260799999364 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 874.7208647199394,
            "unit": "iter/sec",
            "range": "stddev: 0.000024800735749574455",
            "extra": "mean: 1.1432218440566995 msec\nrounds: 917"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1554.62762117411,
            "unit": "iter/sec",
            "range": "stddev: 0.000014449461722693052",
            "extra": "mean: 643.2408548387713 usec\nrounds: 1612"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.903898260106363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954106229575448",
            "extra": "mean: 77.49596128571439 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.63355091529496,
            "unit": "iter/sec",
            "range": "stddev: 0.002227190715756406",
            "extra": "mean: 73.34846264285692 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 655.2586545449985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006273489454668866",
            "extra": "mean: 1.526114906020409 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1089.797180752854,
            "unit": "iter/sec",
            "range": "stddev: 0.000024288373673721955",
            "extra": "mean: 917.6019333333012 usec\nrounds: 1140"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1350.3703285070235,
            "unit": "iter/sec",
            "range": "stddev: 0.00003930047612607334",
            "extra": "mean: 740.5375983828119 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1196.7278653336602,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119337255045632",
            "extra": "mean: 835.6118621180343 usec\nrounds: 1407"
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
          "id": "916c68b0812c0f4bb6a92f3c7fd0065a425c2e75",
          "message": "Merge pull request #1607 from TeoZosa/dependabot/uv/tox-4.25.0",
          "timestamp": "2025-04-03T01:39:25Z",
          "tree_id": "69e8901d7071b465b1e37caf9a7cae11b4213c35",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/916c68b0812c0f4bb6a92f3c7fd0065a425c2e75"
        },
        "date": 1743644508000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 344.7395650929804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004506443511968625",
            "extra": "mean: 2.900740446575339 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 469.29618643767753,
            "unit": "iter/sec",
            "range": "stddev: 0.00003390041332116795",
            "extra": "mean: 2.1308504711934195 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 928.3087039884033,
            "unit": "iter/sec",
            "range": "stddev: 0.00002608455666717978",
            "extra": "mean: 1.0772278614900204 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1749.3004996667516,
            "unit": "iter/sec",
            "range": "stddev: 0.00001915510036723",
            "extra": "mean: 571.657071035253 usec\nrounds: 1816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 315.81930831536926,
            "unit": "iter/sec",
            "range": "stddev: 0.00015487993924828577",
            "extra": "mean: 3.1663675198776167 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 420.1369171160421,
            "unit": "iter/sec",
            "range": "stddev: 0.00004051105679802254",
            "extra": "mean: 2.3801764597701354 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 869.1518426785285,
            "unit": "iter/sec",
            "range": "stddev: 0.00003286062689008615",
            "extra": "mean: 1.1505469480663206 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1532.5633847488543,
            "unit": "iter/sec",
            "range": "stddev: 0.00001869293591761514",
            "extra": "mean: 652.5015604257522 usec\nrounds: 1597"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.243028378687036,
            "unit": "iter/sec",
            "range": "stddev: 0.00016586514226511675",
            "extra": "mean: 75.51142921428549 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.54282059559357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373956563864787",
            "extra": "mean: 73.839861714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 643.7000006503631,
            "unit": "iter/sec",
            "range": "stddev: 0.00003233947644924365",
            "extra": "mean: 1.5535187183309753 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1076.3812458016162,
            "unit": "iter/sec",
            "range": "stddev: 0.00003357663548517775",
            "extra": "mean: 929.0388548671409 usec\nrounds: 1130"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.907675969823,
            "unit": "iter/sec",
            "range": "stddev: 0.00004547903730303859",
            "extra": "mean: 758.7784927833577 usec\nrounds: 1455"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1188.099302722689,
            "unit": "iter/sec",
            "range": "stddev: 0.00005409141256904761",
            "extra": "mean: 841.6804872356762 usec\nrounds: 1371"
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
          "id": "2b3bed2fe2c3369dd9549187ed45e888b2f69823",
          "message": "Merge pull request #1608 from TeoZosa/dependabot/uv/pytest-cov-6.1.1",
          "timestamp": "2025-04-07T15:10:54Z",
          "tree_id": "a913db5120c705545dd8bb9f5bc883a0f354787b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/2b3bed2fe2c3369dd9549187ed45e888b2f69823"
        },
        "date": 1744038743807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 345.75398292160156,
            "unit": "iter/sec",
            "range": "stddev: 0.0002332465279150966",
            "extra": "mean: 2.892229878453046 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 477.2343845743883,
            "unit": "iter/sec",
            "range": "stddev: 0.000057792411563998625",
            "extra": "mean: 2.0954064340771033 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 946.1941247690427,
            "unit": "iter/sec",
            "range": "stddev: 0.000020601913403469012",
            "extra": "mean: 1.0568655773931073 msec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1788.8809363086673,
            "unit": "iter/sec",
            "range": "stddev: 0.00002103958075541307",
            "extra": "mean: 559.0086962766159 usec\nrounds: 1880"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 317.9565188896187,
            "unit": "iter/sec",
            "range": "stddev: 0.00011433946025679626",
            "extra": "mean: 3.145084124999993 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 407.82290077723144,
            "unit": "iter/sec",
            "range": "stddev: 0.00016646249702424086",
            "extra": "mean: 2.4520447431818906 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 849.5262943210987,
            "unit": "iter/sec",
            "range": "stddev: 0.00004218473139535427",
            "extra": "mean: 1.1771266018306739 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1579.0585559129038,
            "unit": "iter/sec",
            "range": "stddev: 0.000030102210662564098",
            "extra": "mean: 633.2887379352873 usec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.408826405187991,
            "unit": "iter/sec",
            "range": "stddev: 0.00047726960659587726",
            "extra": "mean: 74.57774228571498 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.698027102117958,
            "unit": "iter/sec",
            "range": "stddev: 0.00020490846264673823",
            "extra": "mean: 73.00321371428608 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 640.6565266469036,
            "unit": "iter/sec",
            "range": "stddev: 0.00003574365258226901",
            "extra": "mean: 1.560898794294416 msec\nrounds: 666"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1080.2441501743779,
            "unit": "iter/sec",
            "range": "stddev: 0.000024656814163587706",
            "extra": "mean: 925.7166538125438 usec\nrounds: 1141"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1331.33871535183,
            "unit": "iter/sec",
            "range": "stddev: 0.00005124150296583914",
            "extra": "mean: 751.1236535592915 usec\nrounds: 1475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1214.9610204227342,
            "unit": "iter/sec",
            "range": "stddev: 0.00002206907744585472",
            "extra": "mean: 823.0716732394092 usec\nrounds: 1420"
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
          "id": "36ad22606e7bfdf8defe4524f914d1fded478751",
          "message": "Merge pull request #1609 from TeoZosa/dependabot/github_actions/codecov/codecov-action-5.4.2",
          "timestamp": "2025-04-15T14:17:29Z",
          "tree_id": "1cd50bc9956ee0a8a5471baf52ca96e2d615d5de",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/36ad22606e7bfdf8defe4524f914d1fded478751"
        },
        "date": 1744726739281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 293.73089738282374,
            "unit": "iter/sec",
            "range": "stddev: 0.0003197802617589808",
            "extra": "mean: 3.404476712903258 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 474.7957919286929,
            "unit": "iter/sec",
            "range": "stddev: 0.00003662152523250171",
            "extra": "mean: 2.1061686244897992 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 569.7910952706557,
            "unit": "iter/sec",
            "range": "stddev: 0.00003244003006597714",
            "extra": "mean: 1.755029182274236 msec\nrounds: 598"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1709.333905490467,
            "unit": "iter/sec",
            "range": "stddev: 0.000024784645016477843",
            "extra": "mean: 585.0232051139625 usec\nrounds: 1799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 275.2941110248409,
            "unit": "iter/sec",
            "range": "stddev: 0.000038693751419481817",
            "extra": "mean: 3.6324787198581445 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 417.9648813909497,
            "unit": "iter/sec",
            "range": "stddev: 0.00006744154454149992",
            "extra": "mean: 2.3925455092592696 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 560.5237623874717,
            "unit": "iter/sec",
            "range": "stddev: 0.00005885095000945274",
            "extra": "mean: 1.784045685664853 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1538.2085589825767,
            "unit": "iter/sec",
            "range": "stddev: 0.000021680988132575864",
            "extra": "mean: 650.106901408372 usec\nrounds: 1633"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.234567674729783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007511751205794953",
            "extra": "mean: 75.55970278571397 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.57497640744252,
            "unit": "iter/sec",
            "range": "stddev: 0.00025705788112069565",
            "extra": "mean: 73.66495307142833 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 446.1279964681998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000695220119283813",
            "extra": "mean: 2.2415091810345067 msec\nrounds: 464"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1057.4934399813205,
            "unit": "iter/sec",
            "range": "stddev: 0.000020254898797025073",
            "extra": "mean: 945.6323436083574 usec\nrounds: 1103"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1320.7279142554057,
            "unit": "iter/sec",
            "range": "stddev: 0.00004201566151271027",
            "extra": "mean: 757.158222527443 usec\nrounds: 1456"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1198.3268212721946,
            "unit": "iter/sec",
            "range": "stddev: 0.000039899596550937885",
            "extra": "mean: 834.4968853641759 usec\nrounds: 1387"
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
          "id": "4e880211b67ff33e1b8d27ab84128eff29eb6eb4",
          "message": "Merge pull request #1611 from TeoZosa/dependabot/pip/docs/importlib-metadata-8.7.0",
          "timestamp": "2025-04-28T15:19:36Z",
          "tree_id": "d0958c9a4aca2dec7cb73c16e543c2ae82565830",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/4e880211b67ff33e1b8d27ab84128eff29eb6eb4"
        },
        "date": 1745853669992,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 306.35369562812895,
            "unit": "iter/sec",
            "range": "stddev: 0.00010308424729264581",
            "extra": "mean: 3.2642008706624575 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 495.0894639062835,
            "unit": "iter/sec",
            "range": "stddev: 0.000045855641549349426",
            "extra": "mean: 2.019836964636541 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 606.6175895704854,
            "unit": "iter/sec",
            "range": "stddev: 0.000054406848017601",
            "extra": "mean: 1.6484850047095543 msec\nrounds: 637"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1817.231626167931,
            "unit": "iter/sec",
            "range": "stddev: 0.000033187029837630595",
            "extra": "mean: 550.2875833768863 usec\nrounds: 1913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 279.1941625388418,
            "unit": "iter/sec",
            "range": "stddev: 0.00022790657571297333",
            "extra": "mean: 3.5817367773972677 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 429.8837859908989,
            "unit": "iter/sec",
            "range": "stddev: 0.00008026349501642344",
            "extra": "mean: 2.3262100888382213 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 581.0833193756863,
            "unit": "iter/sec",
            "range": "stddev: 0.00007771906299392092",
            "extra": "mean: 1.720923603648434 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1571.7675295244956,
            "unit": "iter/sec",
            "range": "stddev: 0.000026755425456381335",
            "extra": "mean: 636.2264019428677 usec\nrounds: 1647"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.254272305922852,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899157750972444",
            "extra": "mean: 75.44737100000098 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.657026677820385,
            "unit": "iter/sec",
            "range": "stddev: 0.0009189270472672874",
            "extra": "mean: 73.22238021428517 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 460.9720916024342,
            "unit": "iter/sec",
            "range": "stddev: 0.000045261518719069575",
            "extra": "mean: 2.169328725571636 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1120.1214378991797,
            "unit": "iter/sec",
            "range": "stddev: 0.000022618901228498654",
            "extra": "mean: 892.7603438030158 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1412.879794441092,
            "unit": "iter/sec",
            "range": "stddev: 0.00003760859823613191",
            "extra": "mean: 707.7742946954527 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1261.7291254579197,
            "unit": "iter/sec",
            "range": "stddev: 0.00007883822184669971",
            "extra": "mean: 792.5631419795193 usec\nrounds: 1465"
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
          "id": "92ddca11a4d1b4ba303c869a8bcf7a855ee18e01",
          "message": "Merge pull request #1614 from TeoZosa/dependabot/github_actions/pypa/cibuildwheel-2.23.3",
          "timestamp": "2025-04-28T15:42:21Z",
          "tree_id": "1e3a49090df9a5b24270fad0ca256840a7c9227f",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/92ddca11a4d1b4ba303c869a8bcf7a855ee18e01"
        },
        "date": 1745855033441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 305.4882362609455,
            "unit": "iter/sec",
            "range": "stddev: 0.00006276388169973488",
            "extra": "mean: 3.273448471337562 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 491.31913175894516,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738557274228581",
            "extra": "mean: 2.035336984375011 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 578.5184834348983,
            "unit": "iter/sec",
            "range": "stddev: 0.00007040935890724161",
            "extra": "mean: 1.7285532418300544 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1729.2463176853407,
            "unit": "iter/sec",
            "range": "stddev: 0.00004106188835593486",
            "extra": "mean: 578.2866152570656 usec\nrounds: 1809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 285.6369943347951,
            "unit": "iter/sec",
            "range": "stddev: 0.00008177322389382631",
            "extra": "mean: 3.500947075601489 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 436.2490135137847,
            "unit": "iter/sec",
            "range": "stddev: 0.00009833322196987023",
            "extra": "mean: 2.2922687937915573 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 563.2161296668592,
            "unit": "iter/sec",
            "range": "stddev: 0.00006127620859567528",
            "extra": "mean: 1.775517332203354 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1556.796080754439,
            "unit": "iter/sec",
            "range": "stddev: 0.000021006274704804302",
            "extra": "mean: 642.3448853464419 usec\nrounds: 1631"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.080925735705629,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209727103617224",
            "extra": "mean: 76.4471888461537 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.414817785614911,
            "unit": "iter/sec",
            "range": "stddev: 0.0005517973182237939",
            "extra": "mean: 74.54443407142871 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.43905750298956,
            "unit": "iter/sec",
            "range": "stddev: 0.00008023639891512768",
            "extra": "mean: 2.224995765957319 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1046.94904093066,
            "unit": "iter/sec",
            "range": "stddev: 0.00008610229457539446",
            "extra": "mean: 955.1563265305389 usec\nrounds: 1127"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1363.0773683530404,
            "unit": "iter/sec",
            "range": "stddev: 0.000046107981428698785",
            "extra": "mean: 733.6340718562922 usec\nrounds: 1503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1199.200651561975,
            "unit": "iter/sec",
            "range": "stddev: 0.000047032985951766085",
            "extra": "mean: 833.8888064290879 usec\nrounds: 1431"
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
          "id": "d1c694512fce47aef2f0906a4b7bcc0c95fc56f1",
          "message": "Merge pull request #1616 from TeoZosa/dependabot/pip/docs/orjson-3.10.18",
          "timestamp": "2025-04-30T14:31:18Z",
          "tree_id": "8f574067a20a0806d43e27d66d3bcfcff9fa1368",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/d1c694512fce47aef2f0906a4b7bcc0c95fc56f1"
        },
        "date": 1746023577039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 307.87874158740584,
            "unit": "iter/sec",
            "range": "stddev: 0.0001003963276776364",
            "extra": "mean: 3.2480319844236565 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 474.21416433670265,
            "unit": "iter/sec",
            "range": "stddev: 0.00010728566781293818",
            "extra": "mean: 2.108751857715447 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 597.6307064842899,
            "unit": "iter/sec",
            "range": "stddev: 0.000050084542471666",
            "extra": "mean: 1.673274129240692 msec\nrounds: 619"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1810.2671712499687,
            "unit": "iter/sec",
            "range": "stddev: 0.000014870871526646199",
            "extra": "mean: 552.4046482649915 usec\nrounds: 1902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 284.1295578845551,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177242322727086",
            "extra": "mean: 3.5195211911261652 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 424.249314963952,
            "unit": "iter/sec",
            "range": "stddev: 0.00007435611157729417",
            "extra": "mean: 2.3571045720721293 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 577.4847271085421,
            "unit": "iter/sec",
            "range": "stddev: 0.000057346178529043345",
            "extra": "mean: 1.731647527731142 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1570.092575229429,
            "unit": "iter/sec",
            "range": "stddev: 0.00006587489975014035",
            "extra": "mean: 636.9051199760469 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.161138809124699,
            "unit": "iter/sec",
            "range": "stddev: 0.00035134084205314906",
            "extra": "mean: 75.98126685714261 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.601304538424797,
            "unit": "iter/sec",
            "range": "stddev: 0.001911514713477582",
            "extra": "mean: 73.52235935714242 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 454.5502870118651,
            "unit": "iter/sec",
            "range": "stddev: 0.00004211030162852378",
            "extra": "mean: 2.19997661111123 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1081.3720941693186,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792842224512265",
            "extra": "mean: 924.7510689354096 usec\nrounds: 1146"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1394.8773044047891,
            "unit": "iter/sec",
            "range": "stddev: 0.000044281611765489814",
            "extra": "mean: 716.9089330238347 usec\nrounds: 1508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1261.9341449643618,
            "unit": "iter/sec",
            "range": "stddev: 0.000027424669144690358",
            "extra": "mean: 792.4343786008271 usec\nrounds: 1458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3be32770847c044b3e384341229eb3b5b1385500",
          "message": "Merge pull request #1610 from TeoZosa/dependabot/github_actions/astral-sh/setup-uv-6\n\n⬆️ Bump astral-sh/setup-uv from 5 to 6",
          "timestamp": "2025-05-01T21:07:59+09:00",
          "tree_id": "0a93fbb13f9f8acc354337b23974b228b9e246df",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/3be32770847c044b3e384341229eb3b5b1385500"
        },
        "date": 1746101383959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 302.2290668254646,
            "unit": "iter/sec",
            "range": "stddev: 0.00006624939887324934",
            "extra": "mean: 3.308748594249188 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 489.2533762716914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000314056273402247",
            "extra": "mean: 2.0439307085020126 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 584.733936440466,
            "unit": "iter/sec",
            "range": "stddev: 0.00015538152858132775",
            "extra": "mean: 1.7101795152979182 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1727.3358797193507,
            "unit": "iter/sec",
            "range": "stddev: 0.0000271063776895021",
            "extra": "mean: 578.9262017543891 usec\nrounds: 1824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 281.1866340994448,
            "unit": "iter/sec",
            "range": "stddev: 0.000048499577211447555",
            "extra": "mean: 3.556356806228346 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 430.88332301246936,
            "unit": "iter/sec",
            "range": "stddev: 0.00004686739044100428",
            "extra": "mean: 2.3208138876404387 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 555.2258283963836,
            "unit": "iter/sec",
            "range": "stddev: 0.000033910012938340055",
            "extra": "mean: 1.8010689504272952 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1505.1745765380497,
            "unit": "iter/sec",
            "range": "stddev: 0.00002995493323162438",
            "extra": "mean: 664.374761298475 usec\nrounds: 1571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.036003211714307,
            "unit": "iter/sec",
            "range": "stddev: 0.00046829116893474024",
            "extra": "mean: 76.71062853846095 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.407757316956863,
            "unit": "iter/sec",
            "range": "stddev: 0.0010879516874248707",
            "extra": "mean: 74.58368885714351 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.2727785842675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004945705959543581",
            "extra": "mean: 2.211055025531854 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1097.5549629813122,
            "unit": "iter/sec",
            "range": "stddev: 0.00004522833500954497",
            "extra": "mean: 911.1161023623623 usec\nrounds: 1143"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1333.2239810615642,
            "unit": "iter/sec",
            "range": "stddev: 0.00010858097702320383",
            "extra": "mean: 750.0615156980311 usec\nrounds: 1497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1229.067674535433,
            "unit": "iter/sec",
            "range": "stddev: 0.00003833381542961577",
            "extra": "mean: 813.6248481012107 usec\nrounds: 1422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6007e8b73d5dcd8d6430e734a43c4ec045afd058",
          "message": "Merge pull request #1613 from TeoZosa/dependabot/pip/dot-github/workflows/pip-25.1\n\n⬆️ Bump pip from 25.0.1 to 25.1 in /.github/workflows",
          "timestamp": "2025-05-01T21:08:12+09:00",
          "tree_id": "d8e724d9d54fb84451ecd64bd8970db5e272c78b",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/6007e8b73d5dcd8d6430e734a43c4ec045afd058"
        },
        "date": 1746101877300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 302.08460130803206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000780834279335833",
            "extra": "mean: 3.3103309326923016 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 483.4831147153316,
            "unit": "iter/sec",
            "range": "stddev: 0.00005538548743535793",
            "extra": "mean: 2.0683245589430492 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 589.540964673799,
            "unit": "iter/sec",
            "range": "stddev: 0.00004973981755219078",
            "extra": "mean: 1.69623496910569 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1772.778555747812,
            "unit": "iter/sec",
            "range": "stddev: 0.00002023613500858598",
            "extra": "mean: 564.0862457173448 usec\nrounds: 1868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 277.2120382343153,
            "unit": "iter/sec",
            "range": "stddev: 0.00013279276385753854",
            "extra": "mean: 3.607346947735161 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 430.67943975748415,
            "unit": "iter/sec",
            "range": "stddev: 0.000034917084000745194",
            "extra": "mean: 2.3219125588235663 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 567.5777399513141,
            "unit": "iter/sec",
            "range": "stddev: 0.00007553690993688225",
            "extra": "mean: 1.76187318425451 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1578.4757543012865,
            "unit": "iter/sec",
            "range": "stddev: 0.00002131989137029263",
            "extra": "mean: 633.5225595166969 usec\nrounds: 1655"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.41391084910571,
            "unit": "iter/sec",
            "range": "stddev: 0.00016479227737058785",
            "extra": "mean: 74.54947414285736 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.609280258418375,
            "unit": "iter/sec",
            "range": "stddev: 0.00013368952933410158",
            "extra": "mean: 73.47927157142819 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 458.5069979158827,
            "unit": "iter/sec",
            "range": "stddev: 0.00008787746562107962",
            "extra": "mean: 2.180991794117522 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1103.0332887696086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001585897616942938",
            "extra": "mean: 906.5909525862648 usec\nrounds: 1160"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1389.7888371402146,
            "unit": "iter/sec",
            "range": "stddev: 0.00003747863344996876",
            "extra": "mean: 719.5337689268767 usec\nrounds: 1519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1245.5733678919546,
            "unit": "iter/sec",
            "range": "stddev: 0.00003175326342975522",
            "extra": "mean: 802.8431128809616 usec\nrounds: 1444"
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
          "id": "bf2f44152277881b8e9a439a0be949939627bae4",
          "message": "Merge pull request #1618 from TeoZosa/dependabot/pip/dot-github/workflows/tox-4.26.0",
          "timestamp": "2025-05-14T14:21:38Z",
          "tree_id": "2f14b2b3ab025f9755c13000359659fe579bb8d5",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/bf2f44152277881b8e9a439a0be949939627bae4"
        },
        "date": 1747232760909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 305.960579026754,
            "unit": "iter/sec",
            "range": "stddev: 0.00028944527182882176",
            "extra": "mean: 3.2683949127725946 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 480.1958689967387,
            "unit": "iter/sec",
            "range": "stddev: 0.000040209571011394744",
            "extra": "mean: 2.0824835542406377 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 594.37761795037,
            "unit": "iter/sec",
            "range": "stddev: 0.00012539131486962517",
            "extra": "mean: 1.6824321269841271 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1742.1817775213822,
            "unit": "iter/sec",
            "range": "stddev: 0.000035340358107625067",
            "extra": "mean: 573.9929167567744 usec\nrounds: 1850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 277.45065535626264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572192954588564",
            "extra": "mean: 3.6042445050848495 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 435.344004788046,
            "unit": "iter/sec",
            "range": "stddev: 0.00007223212604811084",
            "extra": "mean: 2.29703404434584 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 563.8376137371807,
            "unit": "iter/sec",
            "range": "stddev: 0.00002963230435581347",
            "extra": "mean: 1.77356028692709 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1557.8335949747268,
            "unit": "iter/sec",
            "range": "stddev: 0.000030969212074422023",
            "extra": "mean: 641.917084870816 usec\nrounds: 1626"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.116097702808657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007113343178338504",
            "extra": "mean: 76.24218899999973 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.476805414341298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005293139843625378",
            "extra": "mean: 74.2015610714282 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 465.94629910100815,
            "unit": "iter/sec",
            "range": "stddev: 0.000042949932546357414",
            "extra": "mean: 2.1461700670858193 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1086.341051735892,
            "unit": "iter/sec",
            "range": "stddev: 0.000018807455909416706",
            "extra": "mean: 920.5212289474605 usec\nrounds: 1140"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1374.227601947867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006073459773660856",
            "extra": "mean: 727.6814980157385 usec\nrounds: 1512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1225.3271274285682,
            "unit": "iter/sec",
            "range": "stddev: 0.000052603715487639165",
            "extra": "mean: 816.108594688969 usec\nrounds: 1431"
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
          "id": "b9a6d216ccee065220aa25503344fa9a1538c73c",
          "message": "Merge pull request #1619 from TeoZosa/dependabot/uv/tox-4.26.0",
          "timestamp": "2025-05-14T15:07:14Z",
          "tree_id": "f4c82431e30528c431785a5267a6cbf25df4cd0c",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/commit/b9a6d216ccee065220aa25503344fa9a1538c73c"
        },
        "date": 1747235430206,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 289.5585328315261,
            "unit": "iter/sec",
            "range": "stddev: 0.00030248467849526133",
            "extra": "mean: 3.4535331776315847 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 450.9416532943822,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727822320559497",
            "extra": "mean: 2.217581792887035 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 567.7866371260925,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215721965158985",
            "extra": "mean: 1.7612249648241065 msec\nrounds: 597"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1664.545228762925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003933870578852557",
            "extra": "mean: 600.7646909920201 usec\nrounds: 1754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 263.27849777685316,
            "unit": "iter/sec",
            "range": "stddev: 0.0003680184146675904",
            "extra": "mean: 3.7982592898549945 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 409.0323636224777,
            "unit": "iter/sec",
            "range": "stddev: 0.00008631550084859224",
            "extra": "mean: 2.4447943217592543 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 528.7350354942831,
            "unit": "iter/sec",
            "range": "stddev: 0.00012200715772975227",
            "extra": "mean: 1.8913064822064591 msec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1446.3766096831994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005544217832496907",
            "extra": "mean: 691.3828620465804 usec\nrounds: 1544"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.858937882799442,
            "unit": "iter/sec",
            "range": "stddev: 0.019380075362180997",
            "extra": "mean: 84.32458369230773 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.010187933400628,
            "unit": "iter/sec",
            "range": "stddev: 0.003545168738848565",
            "extra": "mean: 76.86284050000022 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 435.8456519491825,
            "unit": "iter/sec",
            "range": "stddev: 0.00012303890279561475",
            "extra": "mean: 2.2943902171051027 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1051.2967030122818,
            "unit": "iter/sec",
            "range": "stddev: 0.00003959929155343368",
            "extra": "mean: 951.2062552224302 usec\nrounds: 1101"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1228.9938233626806,
            "unit": "iter/sec",
            "range": "stddev: 0.00010779422841773288",
            "extra": "mean: 813.6737394366028 usec\nrounds: 1420"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1108.86320847886,
            "unit": "iter/sec",
            "range": "stddev: 0.00009671330141420616",
            "extra": "mean: 901.8244922850324 usec\nrounds: 1361"
          }
        ]
      }
    ]
  }
}