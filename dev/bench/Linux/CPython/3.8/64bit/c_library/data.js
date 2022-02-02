window.BENCHMARK_DATA = {
  "lastUpdate": 1643775029105,
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
        "date": 1642085022785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.28502653067733,
            "unit": "iter/sec",
            "range": "stddev: 0.00001980237774906523",
            "extra": "mean: 4.91920146341468 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.27418509251265,
            "unit": "iter/sec",
            "range": "stddev: 0.000008897148197152824",
            "extra": "mean: 3.755527407407392 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.8108118755377,
            "unit": "iter/sec",
            "range": "stddev: 0.000017062640664127052",
            "extra": "mean: 2.4825550122249065 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.4054990152878,
            "unit": "iter/sec",
            "range": "stddev: 0.000009000003835641096",
            "extra": "mean: 1.1745284722221931 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.74487621893545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003606516820521827",
            "extra": "mean: 5.298157068062848 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.02370429279242,
            "unit": "iter/sec",
            "range": "stddev: 0.000009191584136556935",
            "extra": "mean: 4.03187269076305 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.3293664475266,
            "unit": "iter/sec",
            "range": "stddev: 0.000012288562328355606",
            "extra": "mean: 2.548878787878726 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.0163266291685,
            "unit": "iter/sec",
            "range": "stddev: 0.000008624284310324177",
            "extra": "mean: 1.2771125786162485 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.781064795298775,
            "unit": "iter/sec",
            "range": "stddev: 0.00009769581403351142",
            "extra": "mean: 37.33981481481434 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.29684877510277,
            "unit": "iter/sec",
            "range": "stddev: 0.00007252400418034319",
            "extra": "mean: 35.33962413793082 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.76535462129937,
            "unit": "iter/sec",
            "range": "stddev: 0.000011512386628177843",
            "extra": "mean: 3.2920146579806246 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.91834587970476,
            "unit": "iter/sec",
            "range": "stddev: 0.00001011082638400276",
            "extra": "mean: 1.9805182524269913 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1573.4941591579575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062540224471931044",
            "extra": "mean: 635.5282567652757 usec\nrounds: 1589"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1250.937750402485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002179596037226816",
            "extra": "mean: 799.4002896453107 usec\nrounds: 1381"
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
        "date": 1642431355985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 230.0582906491299,
            "unit": "iter/sec",
            "range": "stddev: 0.00001286992795271638",
            "extra": "mean: 4.346724463519272 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 301.39178562636863,
            "unit": "iter/sec",
            "range": "stddev: 0.000024839912013314347",
            "extra": "mean: 3.3179404605263088 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 459.6659799833117,
            "unit": "iter/sec",
            "range": "stddev: 0.000012216734345582321",
            "extra": "mean: 2.1754927350427486 msec\nrounds: 468"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.459152879733,
            "unit": "iter/sec",
            "range": "stddev: 0.000010303110025459512",
            "extra": "mean: 1.0400857873211053 msec\nrounds: 978"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.1543315051794,
            "unit": "iter/sec",
            "range": "stddev: 0.00001260663356595852",
            "extra": "mean: 4.6914364485982825 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.8631330340315,
            "unit": "iter/sec",
            "range": "stddev: 0.000010771751352179828",
            "extra": "mean: 3.5731751773049703 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 444.3143936983775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011844863026017667",
            "extra": "mean: 2.2506585746102328 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.9429620044493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008691075131923762",
            "extra": "mean: 1.1274682170542818 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.643015097780665,
            "unit": "iter/sec",
            "range": "stddev: 0.00065777039102628",
            "extra": "mean: 33.73475999999975 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.39476851312727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004277029312291422",
            "extra": "mean: 31.85244062499981 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.4326954794535,
            "unit": "iter/sec",
            "range": "stddev: 0.00001938843308831405",
            "extra": "mean: 2.9460921511626506 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.3386991052547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000106083405800974",
            "extra": "mean: 1.7657278260868923 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1741.3192293345553,
            "unit": "iter/sec",
            "range": "stddev: 0.000005705869348692067",
            "extra": "mean: 574.2772394365334 usec\nrounds: 1775"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1511.4759102164444,
            "unit": "iter/sec",
            "range": "stddev: 0.000005929760153406227",
            "extra": "mean: 661.6049870466009 usec\nrounds: 1544"
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
        "date": 1642432619973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.97878779298813,
            "unit": "iter/sec",
            "range": "stddev: 0.0006899875405124283",
            "extra": "mean: 7.693563057324852 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.50194858775603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413244473549086",
            "extra": "mean: 5.865035609756141 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.2585216786723,
            "unit": "iter/sec",
            "range": "stddev: 0.000561603773010248",
            "extra": "mean: 3.948534459459466 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.4333286348285,
            "unit": "iter/sec",
            "range": "stddev: 0.000341885709148116",
            "extra": "mean: 1.9514733802816764 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.9805580440374,
            "unit": "iter/sec",
            "range": "stddev: 0.0006576873174373397",
            "extra": "mean: 8.334683687943528 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.99324047926407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005892135602304",
            "extra": "mean: 6.211440909090839 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.3333400692035,
            "unit": "iter/sec",
            "range": "stddev: 0.0005985901765483726",
            "extra": "mean: 4.109588927335654 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.2607934950767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002739669422364038",
            "extra": "mean: 1.9147521936460028 msec\nrounds: 661"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.141810011270948,
            "unit": "iter/sec",
            "range": "stddev: 0.0028142231189744724",
            "extra": "mean: 52.24166363636391 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.721398136512033,
            "unit": "iter/sec",
            "range": "stddev: 0.0018017749511039028",
            "extra": "mean: 46.03755217391257 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.96895880578623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005730925411972393",
            "extra": "mean: 5.525809545454633 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.9253811371958,
            "unit": "iter/sec",
            "range": "stddev: 0.0007708440925370602",
            "extra": "mean: 3.3011429951691533 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 865.3256610360168,
            "unit": "iter/sec",
            "range": "stddev: 0.00038384778935450785",
            "extra": "mean: 1.1556342831700421 msec\nrounds: 1123"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 824.0223673136352,
            "unit": "iter/sec",
            "range": "stddev: 0.0003247330881253674",
            "extra": "mean: 1.213559291187766 msec\nrounds: 1044"
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
        "date": 1642433737493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.54340041485824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471440338816321",
            "extra": "mean: 5.72923409090908 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.40105607027812,
            "unit": "iter/sec",
            "range": "stddev: 0.000015512207317116124",
            "extra": "mean: 4.397516956521744 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.8830928096598,
            "unit": "iter/sec",
            "range": "stddev: 0.000013063444141107184",
            "extra": "mean: 2.882815624999964 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 721.6504589027595,
            "unit": "iter/sec",
            "range": "stddev: 0.000010004552039470735",
            "extra": "mean: 1.3857124147339417 msec\nrounds: 733"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 161.62239535098288,
            "unit": "iter/sec",
            "range": "stddev: 0.000019603288730006743",
            "extra": "mean: 6.187261349693383 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.9319899299483,
            "unit": "iter/sec",
            "range": "stddev: 0.000013101703820861073",
            "extra": "mean: 4.7184948356807235 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 336.7803795712947,
            "unit": "iter/sec",
            "range": "stddev: 0.000011794862667780947",
            "extra": "mean: 2.9692941176470917 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 673.5536958481293,
            "unit": "iter/sec",
            "range": "stddev: 0.000009422441426826496",
            "extra": "mean: 1.48466262773722 msec\nrounds: 685"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.629529706226304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000500452056510431",
            "extra": "mean: 44.19004782608714 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.952863160586357,
            "unit": "iter/sec",
            "range": "stddev: 0.00005886950795957972",
            "extra": "mean: 41.74866249999987 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.3682936714319,
            "unit": "iter/sec",
            "range": "stddev: 0.000010053191922814896",
            "extra": "mean: 3.855521374045824 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 441.49425756225537,
            "unit": "iter/sec",
            "range": "stddev: 0.000013148455430121184",
            "extra": "mean: 2.2650351230423182 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1318.2233250649924,
            "unit": "iter/sec",
            "range": "stddev: 0.000007212972783708909",
            "extra": "mean: 758.5968029739552 usec\nrounds: 1345"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1168.462174059244,
            "unit": "iter/sec",
            "range": "stddev: 0.000007088781177800456",
            "extra": "mean: 855.8257359123527 usec\nrounds: 1189"
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
        "date": 1643746341884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.61618345126587,
            "unit": "iter/sec",
            "range": "stddev: 0.0007139305429494432",
            "extra": "mean: 7.319777018633543 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.3575223697505,
            "unit": "iter/sec",
            "range": "stddev: 0.00044639109144099516",
            "extra": "mean: 5.544542788461589 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.3717763568058,
            "unit": "iter/sec",
            "range": "stddev: 0.0003834355058853634",
            "extra": "mean: 3.7969140575079656 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 595.5215811387661,
            "unit": "iter/sec",
            "range": "stddev: 0.00020396970933792013",
            "extra": "mean: 1.679200270270279 msec\nrounds: 740"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.73449519247815,
            "unit": "iter/sec",
            "range": "stddev: 0.0004689033212901143",
            "extra": "mean: 8.017028476821086 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.26769051202962,
            "unit": "iter/sec",
            "range": "stddev: 0.0009971776204324807",
            "extra": "mean: 6.278737368421055 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.10497239187373,
            "unit": "iter/sec",
            "range": "stddev: 0.00037047608300759625",
            "extra": "mean: 3.88946192170808 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.138565774728,
            "unit": "iter/sec",
            "range": "stddev: 0.0003149540830658458",
            "extra": "mean: 1.897034413580259 msec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.672409253107123,
            "unit": "iter/sec",
            "range": "stddev: 0.0012428588540185062",
            "extra": "mean: 46.1416166666672 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.23316999982041,
            "unit": "iter/sec",
            "range": "stddev: 0.0035130160090632626",
            "extra": "mean: 44.97784166666641 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.7194278615914,
            "unit": "iter/sec",
            "range": "stddev: 0.00046946108291017787",
            "extra": "mean: 5.188890456431757 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 343.087978050232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003696230707688976",
            "extra": "mean: 2.914704285714111 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 998.2069755008314,
            "unit": "iter/sec",
            "range": "stddev: 0.00020995166861216717",
            "extra": "mean: 1.001796245210838 msec\nrounds: 1305"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 979.6241414335792,
            "unit": "iter/sec",
            "range": "stddev: 0.00019270122705625928",
            "extra": "mean: 1.0207996696943409 msec\nrounds: 1211"
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
        "date": 1643755017905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.8473007028333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001473483308425574",
            "extra": "mean: 5.622801111111094 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 233.06377606756564,
            "unit": "iter/sec",
            "range": "stddev: 0.000011377257122511516",
            "extra": "mean: 4.290671063829747 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.8150941680512,
            "unit": "iter/sec",
            "range": "stddev: 0.000014702045154748488",
            "extra": "mean: 2.802572022160656 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.2821869866806,
            "unit": "iter/sec",
            "range": "stddev: 0.000011712555202488812",
            "extra": "mean: 1.3508362318840887 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.4863798836737,
            "unit": "iter/sec",
            "range": "stddev: 0.000015793910086722532",
            "extra": "mean: 6.079530722891521 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 215.26605346593848,
            "unit": "iter/sec",
            "range": "stddev: 0.000011870385207531886",
            "extra": "mean: 4.645414285714258 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.03352905336163,
            "unit": "iter/sec",
            "range": "stddev: 0.000010952172117917415",
            "extra": "mean: 2.8982690544412097 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 688.0023399942326,
            "unit": "iter/sec",
            "range": "stddev: 0.00000930245154902811",
            "extra": "mean: 1.4534834285714535 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.25486871008896,
            "unit": "iter/sec",
            "range": "stddev: 0.00003229968856516488",
            "extra": "mean: 43.00174782608672 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.532301485106686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000383165181968094",
            "extra": "mean: 40.76258400000057 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.38347214111786,
            "unit": "iter/sec",
            "range": "stddev: 0.000023767209629541808",
            "extra": "mean: 3.8257966037734468 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 442.7959957800173,
            "unit": "iter/sec",
            "range": "stddev: 0.00001256684758233398",
            "extra": "mean: 2.258376339285606 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1374.7512707561223,
            "unit": "iter/sec",
            "range": "stddev: 0.00000708567951292245",
            "extra": "mean: 727.404310344804 usec\nrounds: 1392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1191.4357281815076,
            "unit": "iter/sec",
            "range": "stddev: 0.000005933363489053392",
            "extra": "mean: 839.3234954656793 usec\nrounds: 1213"
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
        "date": 1643755284067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.88030290105795,
            "unit": "iter/sec",
            "range": "stddev: 0.000045234944067654036",
            "extra": "mean: 5.6856849999999906 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.78877932668297,
            "unit": "iter/sec",
            "range": "stddev: 0.000010989633138332978",
            "extra": "mean: 4.370843722943772 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 355.11734951458106,
            "unit": "iter/sec",
            "range": "stddev: 0.000011395570156442284",
            "extra": "mean: 2.8159705555555803 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.9836207259599,
            "unit": "iter/sec",
            "range": "stddev: 0.000009115682178462758",
            "extra": "mean: 1.355043624161052 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.14396010902712,
            "unit": "iter/sec",
            "range": "stddev: 0.00001465897024781145",
            "extra": "mean: 6.129555757575776 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.92558757854584,
            "unit": "iter/sec",
            "range": "stddev: 0.000016541290055245565",
            "extra": "mean: 4.718637383177577 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.7279117233035,
            "unit": "iter/sec",
            "range": "stddev: 0.000011044733093140842",
            "extra": "mean: 2.926304716981088 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 677.4333145583843,
            "unit": "iter/sec",
            "range": "stddev: 0.000009026640916645561",
            "extra": "mean: 1.4761600566572306 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.992879105341263,
            "unit": "iter/sec",
            "range": "stddev: 0.00005660278034743195",
            "extra": "mean: 43.49172608695616 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.270746585639944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006471966393671857",
            "extra": "mean: 41.201863999999944 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.58237973775744,
            "unit": "iter/sec",
            "range": "stddev: 0.000010445970857580567",
            "extra": "mean: 3.837558015267076 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.0498417471018,
            "unit": "iter/sec",
            "range": "stddev: 0.00001233780163816741",
            "extra": "mean: 2.2828452488685693 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1342.347001685671,
            "unit": "iter/sec",
            "range": "stddev: 0.000006814433614287601",
            "extra": "mean: 744.9638571429266 usec\nrounds: 1400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1180.6807044167947,
            "unit": "iter/sec",
            "range": "stddev: 0.000010274758650276935",
            "extra": "mean: 846.969037656931 usec\nrounds: 1195"
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
        "date": 1643757264104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.16701311789842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006179090396487867",
            "extra": "mean: 7.926002013422771 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.91948571043613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783922588705916",
            "extra": "mean: 5.716915962441212 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.6124690360902,
            "unit": "iter/sec",
            "range": "stddev: 0.0004037125562933504",
            "extra": "mean: 3.881799680511214 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 534.9481316377704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601589167398979",
            "extra": "mean: 1.8693401114206158 msec\nrounds: 718"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.16830454122164,
            "unit": "iter/sec",
            "range": "stddev: 0.0014961318463856553",
            "extra": "mean: 8.391493055555632 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.87276094793788,
            "unit": "iter/sec",
            "range": "stddev: 0.00046364129984440743",
            "extra": "mean: 6.102295428571551 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.7709393533616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003640868621063137",
            "extra": "mean: 4.170647213114736 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.1880362896409,
            "unit": "iter/sec",
            "range": "stddev: 0.00028159049469886176",
            "extra": "mean: 1.9077123680240742 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.802805641700722,
            "unit": "iter/sec",
            "range": "stddev: 0.0020867689596660737",
            "extra": "mean: 50.49789499999946 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.799223736797238,
            "unit": "iter/sec",
            "range": "stddev: 0.0023273717956392888",
            "extra": "mean: 48.07871739130514 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.95165259016179,
            "unit": "iter/sec",
            "range": "stddev: 0.0009898225602746687",
            "extra": "mean: 5.495965470852066 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.6218813673547,
            "unit": "iter/sec",
            "range": "stddev: 0.0004035525490828479",
            "extra": "mean: 3.080507068062862 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.9030002119817,
            "unit": "iter/sec",
            "range": "stddev: 0.00022722229368254021",
            "extra": "mean: 976.6550149701359 usec\nrounds: 1336"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 881.2618414892489,
            "unit": "iter/sec",
            "range": "stddev: 0.00019182124987801837",
            "extra": "mean: 1.1347365254236979 msec\nrounds: 1180"
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
        "date": 1643757684396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.66505173356296,
            "unit": "iter/sec",
            "range": "stddev: 0.000015157741086556524",
            "extra": "mean: 4.886032038834944 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.8713602358881,
            "unit": "iter/sec",
            "range": "stddev: 0.000018618220254088948",
            "extra": "mean: 3.7331351851851493 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.4469935895016,
            "unit": "iter/sec",
            "range": "stddev: 0.000011712675340592525",
            "extra": "mean: 2.436368192771136 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.1148247070638,
            "unit": "iter/sec",
            "range": "stddev: 0.000009263540433910101",
            "extra": "mean: 1.1917320139697227 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.0055473128164,
            "unit": "iter/sec",
            "range": "stddev: 0.000016930407665077418",
            "extra": "mean: 5.2908499999999234 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.44125561611253,
            "unit": "iter/sec",
            "range": "stddev: 0.00001002097532963879",
            "extra": "mean: 4.025096385542279 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.5764349523375,
            "unit": "iter/sec",
            "range": "stddev: 0.000012567070228770135",
            "extra": "mean: 2.5215820000000377 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 781.3840232488021,
            "unit": "iter/sec",
            "range": "stddev: 0.000009223410256691286",
            "extra": "mean: 1.2797804539722306 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.470004338139887,
            "unit": "iter/sec",
            "range": "stddev: 0.00022285790459597606",
            "extra": "mean: 37.7786111111107 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.882314327685542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003042473614202315",
            "extra": "mean: 35.86502857142878 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.0992792774528,
            "unit": "iter/sec",
            "range": "stddev: 0.000021960847777240763",
            "extra": "mean: 3.299249019607909 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.1126736063414,
            "unit": "iter/sec",
            "range": "stddev: 0.000010952481053904916",
            "extra": "mean: 1.999549407114485 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1538.5407908944221,
            "unit": "iter/sec",
            "range": "stddev: 0.000007045138785959579",
            "extra": "mean: 649.9665175719231 usec\nrounds: 1565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1358.5780282221951,
            "unit": "iter/sec",
            "range": "stddev: 0.00000592019220137574",
            "extra": "mean: 736.0637219406364 usec\nrounds: 1381"
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
        "date": 1643758471495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.18171196748108,
            "unit": "iter/sec",
            "range": "stddev: 0.00014815023799522967",
            "extra": "mean: 4.873728708134029 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.46575541009344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001058063346450167",
            "extra": "mean: 3.7110466911764877 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.6480993026816,
            "unit": "iter/sec",
            "range": "stddev: 0.000016186725277604264",
            "extra": "mean: 2.447093236714922 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.6825270544031,
            "unit": "iter/sec",
            "range": "stddev: 0.000007969364718759511",
            "extra": "mean: 1.183876744186036 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.70475728201885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003011460155924333",
            "extra": "mean: 5.2163546391751225 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.89277913989537,
            "unit": "iter/sec",
            "range": "stddev: 0.000009159686335277163",
            "extra": "mean: 4.001716269841388 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.6729803818898,
            "unit": "iter/sec",
            "range": "stddev: 0.00001269535681445336",
            "extra": "mean: 2.533743250000011 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.5778101665761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000080635808306564",
            "extra": "mean: 1.292694783714993 msec\nrounds: 786"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.601559186350904,
            "unit": "iter/sec",
            "range": "stddev: 0.00010908280213140565",
            "extra": "mean: 37.5917814814815 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.992148202429153,
            "unit": "iter/sec",
            "range": "stddev: 0.000043357715210121154",
            "extra": "mean: 35.724303571428656 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.943569312452,
            "unit": "iter/sec",
            "range": "stddev: 0.000010675634871059221",
            "extra": "mean: 3.311877124182755 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 501.18820914442784,
            "unit": "iter/sec",
            "range": "stddev: 0.000009977562130141805",
            "extra": "mean: 1.9952584313726924 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1543.6813141699654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057387062066381526",
            "extra": "mean: 647.8021019109751 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1366.832378727138,
            "unit": "iter/sec",
            "range": "stddev: 0.000005870009809764585",
            "extra": "mean: 731.6186063219029 usec\nrounds: 1392"
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
        "date": 1643759058413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.20757860190483,
            "unit": "iter/sec",
            "range": "stddev: 0.00048085600568182626",
            "extra": "mean: 7.68004451612904 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.62542961171306,
            "unit": "iter/sec",
            "range": "stddev: 0.0004376181446260979",
            "extra": "mean: 5.965681951219433 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.8235276538848,
            "unit": "iter/sec",
            "range": "stddev: 0.00037276998475524144",
            "extra": "mean: 3.692441379310331 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 583.1838333330287,
            "unit": "iter/sec",
            "range": "stddev: 0.00018170243387701453",
            "extra": "mean: 1.7147251738525942 msec\nrounds: 719"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.14423655629653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003248124086351977",
            "extra": "mean: 8.323328930817462 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.50434952773983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006583235703464464",
            "extra": "mean: 5.479321465968703 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.8510278033886,
            "unit": "iter/sec",
            "range": "stddev: 0.0006635451150603396",
            "extra": "mean: 3.893307371794784 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.969084069139,
            "unit": "iter/sec",
            "range": "stddev: 0.00021108613147086903",
            "extra": "mean: 1.77629647577093 msec\nrounds: 681"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.413982140912548,
            "unit": "iter/sec",
            "range": "stddev: 0.0032638712935406243",
            "extra": "mean: 44.61500833333343 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.082667614513515,
            "unit": "iter/sec",
            "range": "stddev: 0.002408623140176839",
            "extra": "mean: 45.28438400000027 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.43853156445664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005131396921042662",
            "extra": "mean: 4.891445816733007 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.1986975949118,
            "unit": "iter/sec",
            "range": "stddev: 0.0004868417233704979",
            "extra": "mean: 2.92227880184331 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1029.6776050341525,
            "unit": "iter/sec",
            "range": "stddev: 0.00009540913329245229",
            "extra": "mean: 971.1777697319461 usec\nrounds: 1381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 962.9796842552382,
            "unit": "iter/sec",
            "range": "stddev: 0.00020375522102740232",
            "extra": "mean: 1.0384435064934865 msec\nrounds: 1232"
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
        "date": 1643760014261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.07898404110242,
            "unit": "iter/sec",
            "range": "stddev: 0.0002188079935588233",
            "extra": "mean: 5.3453358490566405 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.26598095074405,
            "unit": "iter/sec",
            "range": "stddev: 0.0002064000933224128",
            "extra": "mean: 4.060650180505488 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.5336340590928,
            "unit": "iter/sec",
            "range": "stddev: 0.00015540647629194102",
            "extra": "mean: 2.6073332589285387 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 794.7802868823196,
            "unit": "iter/sec",
            "range": "stddev: 0.00010173500359984828",
            "extra": "mean: 1.2582093649085015 msec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.9433233746225,
            "unit": "iter/sec",
            "range": "stddev: 0.00026413685655695513",
            "extra": "mean: 5.716136979166712 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.5614535621452,
            "unit": "iter/sec",
            "range": "stddev: 0.00020254776194605058",
            "extra": "mean: 4.493141035856746 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.39563818370533,
            "unit": "iter/sec",
            "range": "stddev: 0.00014098652312585875",
            "extra": "mean: 2.79021252900244 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 721.7548458619775,
            "unit": "iter/sec",
            "range": "stddev: 0.00010202966007731196",
            "extra": "mean: 1.3855120000001107 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.331237228440052,
            "unit": "iter/sec",
            "range": "stddev: 0.0012341342885665183",
            "extra": "mean: 41.09943076923068 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.141951926166666,
            "unit": "iter/sec",
            "range": "stddev: 0.0015951028436248576",
            "extra": "mean: 39.774159259259534 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 279.33144623728145,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935909447563284",
            "extra": "mean: 3.57997645259939 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 446.36012448207873,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165257349805032",
            "extra": "mean: 2.240343492063323 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1390.6116433324262,
            "unit": "iter/sec",
            "range": "stddev: 0.00004258016472649023",
            "extra": "mean: 719.1080304804766 usec\nrounds: 1706"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1227.4125090399484,
            "unit": "iter/sec",
            "range": "stddev: 0.00005251217676167249",
            "extra": "mean: 814.7220210279388 usec\nrounds: 1712"
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
        "date": 1643761449954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.81883489717657,
            "unit": "iter/sec",
            "range": "stddev: 0.000012188179532570453",
            "extra": "mean: 4.858641826923091 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.51438915106667,
            "unit": "iter/sec",
            "range": "stddev: 0.00001010906153168395",
            "extra": "mean: 3.724195202952041 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.80967335605266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000908583803404553",
            "extra": "mean: 2.434217266187134 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.013035335075,
            "unit": "iter/sec",
            "range": "stddev: 0.000008054693664415482",
            "extra": "mean: 1.2048003554502027 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.55833697312374,
            "unit": "iter/sec",
            "range": "stddev: 0.000025846661877163462",
            "extra": "mean: 5.275420833333137 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.85925257594283,
            "unit": "iter/sec",
            "range": "stddev: 0.000009146390369678055",
            "extra": "mean: 4.034547791164686 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.5473897256089,
            "unit": "iter/sec",
            "range": "stddev: 0.000012561172034830877",
            "extra": "mean: 2.5154233830844914 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.2092463990589,
            "unit": "iter/sec",
            "range": "stddev: 0.000009470199657967008",
            "extra": "mean: 1.2933109693878295 msec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.602114828718307,
            "unit": "iter/sec",
            "range": "stddev: 0.00013182695674342278",
            "extra": "mean: 37.59099629629635 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.09604069591043,
            "unit": "iter/sec",
            "range": "stddev: 0.000041809980043442775",
            "extra": "mean: 35.59220357142908 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.87510961529347,
            "unit": "iter/sec",
            "range": "stddev: 0.000012800212979856061",
            "extra": "mean: 3.312628196721451 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.17282279736554,
            "unit": "iter/sec",
            "range": "stddev: 0.000009609166951232016",
            "extra": "mean: 2.0113730158729406 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1512.8216777846364,
            "unit": "iter/sec",
            "range": "stddev: 0.000005248678739487906",
            "extra": "mean: 661.016440129541 usec\nrounds: 1545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1332.575889756383,
            "unit": "iter/sec",
            "range": "stddev: 0.000006033131461255962",
            "extra": "mean: 750.4263041880613 usec\nrounds: 1361"
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
        "date": 1643775027246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.83670641449166,
            "unit": "iter/sec",
            "range": "stddev: 0.000015939954966935185",
            "extra": "mean: 4.905887745098032 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.7577726793054,
            "unit": "iter/sec",
            "range": "stddev: 0.000012400203837528697",
            "extra": "mean: 3.748719259259201 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.4925214737205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010719260656211159",
            "extra": "mean: 2.454032766990279 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.6382470081816,
            "unit": "iter/sec",
            "range": "stddev: 0.000008552148235105918",
            "extra": "mean: 1.1995610849056757 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.40485128297752,
            "unit": "iter/sec",
            "range": "stddev: 0.000015926032421148963",
            "extra": "mean: 5.27969581151839 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.20013708730187,
            "unit": "iter/sec",
            "range": "stddev: 0.000010127568490564866",
            "extra": "mean: 4.045305200000101 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.1030532477318,
            "unit": "iter/sec",
            "range": "stddev: 0.000010933749339605338",
            "extra": "mean: 2.5309852500000662 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.5397698827477,
            "unit": "iter/sec",
            "range": "stddev: 0.000008715024965704883",
            "extra": "mean: 1.2927583544302819 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.473985730129456,
            "unit": "iter/sec",
            "range": "stddev: 0.00011502160939060748",
            "extra": "mean: 37.77292962962967 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.915906124391,
            "unit": "iter/sec",
            "range": "stddev: 0.00017369960842812893",
            "extra": "mean: 35.82187142857128 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.8532545416495,
            "unit": "iter/sec",
            "range": "stddev: 0.00002113066203923484",
            "extra": "mean: 3.3461238410593768 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.7958486980539,
            "unit": "iter/sec",
            "range": "stddev: 0.000010025577053930188",
            "extra": "mean: 2.0088556435643685 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1533.3087648724288,
            "unit": "iter/sec",
            "range": "stddev: 0.000005747127282579616",
            "extra": "mean: 652.1843629343631 usec\nrounds: 1554"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1362.9622578444926,
            "unit": "iter/sec",
            "range": "stddev: 0.000005412481108647887",
            "extra": "mean: 733.6960317459466 usec\nrounds: 1386"
          }
        ]
      }
    ]
  }
}