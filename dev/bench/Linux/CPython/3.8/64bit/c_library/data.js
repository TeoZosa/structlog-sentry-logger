window.BENCHMARK_DATA = {
  "lastUpdate": 1646432242695,
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
        "date": 1643775326579,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.03508438935708,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230777845950097",
            "extra": "mean: 4.877214077669859 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.3257847316305,
            "unit": "iter/sec",
            "range": "stddev: 0.00000891166626088672",
            "extra": "mean: 3.726812915129133 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.61580990990325,
            "unit": "iter/sec",
            "range": "stddev: 0.000010410543763643747",
            "extra": "mean: 2.4413120192307867 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.9362338994235,
            "unit": "iter/sec",
            "range": "stddev: 0.000009046438503836833",
            "extra": "mean: 1.1737967704729135 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.665001790468,
            "unit": "iter/sec",
            "range": "stddev: 0.000026031615875427322",
            "extra": "mean: 5.244801041666543 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.39116166892154,
            "unit": "iter/sec",
            "range": "stddev: 0.000008131163220005564",
            "extra": "mean: 3.9937511904763032 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.3052679900175,
            "unit": "iter/sec",
            "range": "stddev: 0.000018999673814681777",
            "extra": "mean: 2.5043496296297287 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.4872412318487,
            "unit": "iter/sec",
            "range": "stddev: 0.000009312045917717543",
            "extra": "mean: 1.2650425558313363 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.538190372593412,
            "unit": "iter/sec",
            "range": "stddev: 0.00015193869546446714",
            "extra": "mean: 37.68154444444421 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.008209206117925,
            "unit": "iter/sec",
            "range": "stddev: 0.00005318681995993379",
            "extra": "mean: 35.70381785714335 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.4094897762832,
            "unit": "iter/sec",
            "range": "stddev: 0.000010612785522278005",
            "extra": "mean: 3.2958758169935387 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.2722105270903,
            "unit": "iter/sec",
            "range": "stddev: 0.000009953691879619185",
            "extra": "mean: 1.9869962598425086 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1567.2697373604797,
            "unit": "iter/sec",
            "range": "stddev: 0.000005146995233882356",
            "extra": "mean: 638.0522613064371 usec\nrounds: 1592"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1355.0563181277182,
            "unit": "iter/sec",
            "range": "stddev: 0.000007430934046668649",
            "extra": "mean: 737.9767074048261 usec\nrounds: 1391"
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
        "date": 1643781811016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.75725285799754,
            "unit": "iter/sec",
            "range": "stddev: 0.00008956935560733223",
            "extra": "mean: 4.88383188405793 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.67523380445925,
            "unit": "iter/sec",
            "range": "stddev: 0.000008809862076676673",
            "extra": "mean: 3.7219656826568395 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.2654732366571,
            "unit": "iter/sec",
            "range": "stddev: 0.000010023672294709983",
            "extra": "mean: 2.449386650485468 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.7186030669491,
            "unit": "iter/sec",
            "range": "stddev: 0.000008865019641493583",
            "extra": "mean: 1.1937182680901761 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.96293534706146,
            "unit": "iter/sec",
            "range": "stddev: 0.000014505618869367764",
            "extra": "mean: 5.264184816753881 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.030415275331,
            "unit": "iter/sec",
            "range": "stddev: 0.00003366442825837213",
            "extra": "mean: 4.031763600000147 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.9919020245462,
            "unit": "iter/sec",
            "range": "stddev: 0.000010741589345015693",
            "extra": "mean: 2.5575977272726753 msec\nrounds: 396"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 775.4241838514118,
            "unit": "iter/sec",
            "range": "stddev: 0.000009219413826670076",
            "extra": "mean: 1.289616729559755 msec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.632419348156503,
            "unit": "iter/sec",
            "range": "stddev: 0.00003142570399797997",
            "extra": "mean: 37.54822222222255 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.141905558780202,
            "unit": "iter/sec",
            "range": "stddev: 0.00003325139353323285",
            "extra": "mean: 35.53419642857136 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.0910133060965,
            "unit": "iter/sec",
            "range": "stddev: 0.00003703556344202483",
            "extra": "mean: 3.354680132450502 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.5916894643412,
            "unit": "iter/sec",
            "range": "stddev: 0.000011215598555066156",
            "extra": "mean: 1.9976360396035566 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1512.7009603640915,
            "unit": "iter/sec",
            "range": "stddev: 0.000006793470343326247",
            "extra": "mean: 661.0691909386442 usec\nrounds: 1545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1340.061798755557,
            "unit": "iter/sec",
            "range": "stddev: 0.000005882662394917733",
            "extra": "mean: 746.2342415317308 usec\nrounds: 1358"
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
        "date": 1643823784349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.44400550020637,
            "unit": "iter/sec",
            "range": "stddev: 0.00010624701205277618",
            "extra": "mean: 5.635580628272264 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.0009797083799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000878949871102502",
            "extra": "mean: 4.273486381322995 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.732090175747,
            "unit": "iter/sec",
            "range": "stddev: 0.00012763188903582148",
            "extra": "mean: 2.734241885964847 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.9960458405689,
            "unit": "iter/sec",
            "range": "stddev: 0.00005601495936267875",
            "extra": "mean: 1.3245102481121713 msec\nrounds: 927"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 167.05182453525126,
            "unit": "iter/sec",
            "range": "stddev: 0.00019920017326601473",
            "extra": "mean: 5.9861662857144085 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.17744858041334,
            "unit": "iter/sec",
            "range": "stddev: 0.00017536917349161483",
            "extra": "mean: 4.521256603773647 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 345.0327832531974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007695946588655802",
            "extra": "mean: 2.8982753191489175 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 695.9271243269675,
            "unit": "iter/sec",
            "range": "stddev: 0.00006164539669520266",
            "extra": "mean: 1.4369320652174637 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.602520711447756,
            "unit": "iter/sec",
            "range": "stddev: 0.0006345235562206599",
            "extra": "mean: 42.36835600000035 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.23720948929925,
            "unit": "iter/sec",
            "range": "stddev: 0.0008124749591831918",
            "extra": "mean: 39.62403214285664 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.51908960175376,
            "unit": "iter/sec",
            "range": "stddev: 0.00014297469504866703",
            "extra": "mean: 3.7520764516127167 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 457.0583872544164,
            "unit": "iter/sec",
            "range": "stddev: 0.00010994827650850254",
            "extra": "mean: 2.1879042763159298 msec\nrounds: 608"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1404.1715104235823,
            "unit": "iter/sec",
            "range": "stddev: 0.000042663185686484914",
            "extra": "mean: 712.163715455486 usec\nrounds: 1954"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1224.8760561849356,
            "unit": "iter/sec",
            "range": "stddev: 0.00005452331230917991",
            "extra": "mean: 816.4091337654631 usec\nrounds: 1697"
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
        "date": 1643830206959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.50472281817042,
            "unit": "iter/sec",
            "range": "stddev: 0.00001455231474079655",
            "extra": "mean: 4.889862621359223 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.3447294883139,
            "unit": "iter/sec",
            "range": "stddev: 0.000023116390460193458",
            "extra": "mean: 3.754532713754623 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.5046351327749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000365278287311746",
            "extra": "mean: 2.436026086956501 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 842.32912730978,
            "unit": "iter/sec",
            "range": "stddev: 0.000014872140024600755",
            "extra": "mean: 1.1871844004656318 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.81350032702645,
            "unit": "iter/sec",
            "range": "stddev: 0.00009635258867196925",
            "extra": "mean: 5.268329166666844 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.30329393191087,
            "unit": "iter/sec",
            "range": "stddev: 0.000010083281928841273",
            "extra": "mean: 4.027332799999897 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.30633665158376,
            "unit": "iter/sec",
            "range": "stddev: 0.000010803843085036608",
            "extra": "mean: 2.529683709273254 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.8408022280489,
            "unit": "iter/sec",
            "range": "stddev: 0.000007810778603348075",
            "extra": "mean: 1.2757692597240713 msec\nrounds: 797"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.55630521928758,
            "unit": "iter/sec",
            "range": "stddev: 0.00006670891567262607",
            "extra": "mean: 37.65584074074092 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.004049385541112,
            "unit": "iter/sec",
            "range": "stddev: 0.00004705347908629744",
            "extra": "mean: 35.70912142857147 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.6417889408339,
            "unit": "iter/sec",
            "range": "stddev: 0.00002066673913839015",
            "extra": "mean: 3.3151905228759495 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.39368835291,
            "unit": "iter/sec",
            "range": "stddev: 0.000009207574364575718",
            "extra": "mean: 1.9904708661418196 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1513.5590971102802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075827384231426535",
            "extra": "mean: 660.6943870967586 usec\nrounds: 1550"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1344.0087143412418,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975753611155563",
            "extra": "mean: 744.0427947598125 usec\nrounds: 1374"
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
        "date": 1643842701338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.68536030259378,
            "unit": "iter/sec",
            "range": "stddev: 0.00001345553753703655",
            "extra": "mean: 4.909533009708729 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.1118721025231,
            "unit": "iter/sec",
            "range": "stddev: 0.00002509616759025222",
            "extra": "mean: 3.7297863468634866 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.62306486495925,
            "unit": "iter/sec",
            "range": "stddev: 0.000010873035818190694",
            "extra": "mean: 2.435323501199008 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.42092903501,
            "unit": "iter/sec",
            "range": "stddev: 0.000009921058980441977",
            "extra": "mean: 1.1758882758620728 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.651012349157,
            "unit": "iter/sec",
            "range": "stddev: 0.000015222308414345762",
            "extra": "mean: 5.272842931937268 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.88734025654819,
            "unit": "iter/sec",
            "range": "stddev: 0.000021388924568361656",
            "extra": "mean: 4.017882142857164 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.81035721491116,
            "unit": "iter/sec",
            "range": "stddev: 0.000011362571757029396",
            "extra": "mean: 2.5264624378109315 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.1224271228864,
            "unit": "iter/sec",
            "range": "stddev: 0.000010142309582327151",
            "extra": "mean: 1.275311055276425 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.84100729329858,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682206270698796",
            "extra": "mean: 37.25642592592533 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.361381109286498,
            "unit": "iter/sec",
            "range": "stddev: 0.00006002837855158852",
            "extra": "mean: 35.25921379310281 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.6981683792948,
            "unit": "iter/sec",
            "range": "stddev: 0.00001031695820984644",
            "extra": "mean: 3.303620915032937 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.5981594771151,
            "unit": "iter/sec",
            "range": "stddev: 0.000009808078441469295",
            "extra": "mean: 1.9857101960783536 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1557.0712226157198,
            "unit": "iter/sec",
            "range": "stddev: 0.000005668319588666213",
            "extra": "mean: 642.2313799622491 usec\nrounds: 1587"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1372.5755649752443,
            "unit": "iter/sec",
            "range": "stddev: 0.000005976177819795037",
            "extra": "mean: 728.5573381295302 usec\nrounds: 1390"
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
        "date": 1643898428050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.469932773929,
            "unit": "iter/sec",
            "range": "stddev: 0.00003928491929142142",
            "extra": "mean: 4.914731067961172 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.5394131446295,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835582687790148",
            "extra": "mean: 3.7238481617646997 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.5970422918649,
            "unit": "iter/sec",
            "range": "stddev: 0.000021286117689960793",
            "extra": "mean: 2.4655012135922005 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.7572883409304,
            "unit": "iter/sec",
            "range": "stddev: 0.000009454318566924111",
            "extra": "mean: 1.1936631455398858 msec\nrounds: 852"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.56831393329287,
            "unit": "iter/sec",
            "range": "stddev: 0.000020658467287639374",
            "extra": "mean: 5.303117894736842 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.0073694747576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011278647583503356",
            "extra": "mean: 4.032138247011973 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.38687044600397,
            "unit": "iter/sec",
            "range": "stddev: 0.000018701512070886968",
            "extra": "mean: 2.5615615577889015 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 778.1355694906667,
            "unit": "iter/sec",
            "range": "stddev: 0.000009248404185216541",
            "extra": "mean: 1.2851231060604977 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.46363245111762,
            "unit": "iter/sec",
            "range": "stddev: 0.00039186321291397985",
            "extra": "mean: 37.78770740740725 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.014850672341577,
            "unit": "iter/sec",
            "range": "stddev: 0.00005493478613252225",
            "extra": "mean: 35.695353571428356 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.30120247677064,
            "unit": "iter/sec",
            "range": "stddev: 0.000017240178820272897",
            "extra": "mean: 2.947233881578897 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 570.0370861171303,
            "unit": "iter/sec",
            "range": "stddev: 0.00000948482407751832",
            "extra": "mean: 1.7542718260869814 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1770.4523745858087,
            "unit": "iter/sec",
            "range": "stddev: 0.000005537278978490196",
            "extra": "mean: 564.827393469958 usec\nrounds: 1807"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1550.7963187250741,
            "unit": "iter/sec",
            "range": "stddev: 0.00000561802480570401",
            "extra": "mean: 644.8300063170839 usec\nrounds: 1583"
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
        "date": 1643987938614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.82735938057223,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680286779804388",
            "extra": "mean: 5.687397021276618 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.45761603398248,
            "unit": "iter/sec",
            "range": "stddev: 0.0002350858720988644",
            "extra": "mean: 4.041096071428545 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.7540424403505,
            "unit": "iter/sec",
            "range": "stddev: 0.000214026508572332",
            "extra": "mean: 2.605835742187489 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.7449090402977,
            "unit": "iter/sec",
            "range": "stddev: 0.00010145425437078922",
            "extra": "mean: 1.2742994423792418 msec\nrounds: 1076"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.645636491071,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516915131930909",
            "extra": "mean: 5.505224454148427 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.42627474283134,
            "unit": "iter/sec",
            "range": "stddev: 0.000308144395615059",
            "extra": "mean: 4.265733442622901 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.8569812259417,
            "unit": "iter/sec",
            "range": "stddev: 0.00021123528543302077",
            "extra": "mean: 2.7483325910930843 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 758.8865732595431,
            "unit": "iter/sec",
            "range": "stddev: 0.00013959988012060182",
            "extra": "mean: 1.317719979818374 msec\nrounds: 991"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.47202732714585,
            "unit": "iter/sec",
            "range": "stddev: 0.002143187624575282",
            "extra": "mean: 39.258751851851535 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.68333258117903,
            "unit": "iter/sec",
            "range": "stddev: 0.0013721650978934718",
            "extra": "mean: 38.93575714285648 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 276.7648283991394,
            "unit": "iter/sec",
            "range": "stddev: 0.00029051166912894997",
            "extra": "mean: 3.6131758713135294 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.9732311911391,
            "unit": "iter/sec",
            "range": "stddev: 0.00019448446431239992",
            "extra": "mean: 2.0535009646300164 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1507.4004227321582,
            "unit": "iter/sec",
            "range": "stddev: 0.00007551572851848672",
            "extra": "mean: 663.3937372708862 usec\nrounds: 1964"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1262.2470317856087,
            "unit": "iter/sec",
            "range": "stddev: 0.00008463077192508271",
            "extra": "mean: 792.2379493223074 usec\nrounds: 1697"
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
        "date": 1643988213504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.05485132529486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002297415134910473",
            "extra": "mean: 5.374759071729973 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.6687300840104,
            "unit": "iter/sec",
            "range": "stddev: 0.00020913501420693337",
            "extra": "mean: 4.054020141342683 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.5875450824375,
            "unit": "iter/sec",
            "range": "stddev: 0.000163630602106219",
            "extra": "mean: 2.586736206896567 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.3069478241815,
            "unit": "iter/sec",
            "range": "stddev: 0.00010108860314109191",
            "extra": "mean: 1.2464057586836965 msec\nrounds: 1094"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.53305174789966,
            "unit": "iter/sec",
            "range": "stddev: 0.000345662693438566",
            "extra": "mean: 5.570005022831117 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.97004627279296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001635543684961234",
            "extra": "mean: 4.3865411985019405 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.84666423057456,
            "unit": "iter/sec",
            "range": "stddev: 0.00017721626833246845",
            "extra": "mean: 2.6965322772277878 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 726.7769206113804,
            "unit": "iter/sec",
            "range": "stddev: 0.00009407786783335355",
            "extra": "mean: 1.3759380239520793 msec\nrounds: 1002"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.09222787757602,
            "unit": "iter/sec",
            "range": "stddev: 0.0011814749567100548",
            "extra": "mean: 39.85297777777885 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.938486550941054,
            "unit": "iter/sec",
            "range": "stddev: 0.000949989449538379",
            "extra": "mean: 40.09866428571485 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 287.0702655310153,
            "unit": "iter/sec",
            "range": "stddev: 0.0002377784438380033",
            "extra": "mean: 3.4834677083334467 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 467.86052018580455,
            "unit": "iter/sec",
            "range": "stddev: 0.00015415467932450972",
            "extra": "mean: 2.137389150943669 msec\nrounds: 636"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1529.1182989842978,
            "unit": "iter/sec",
            "range": "stddev: 0.00006390751379496017",
            "extra": "mean: 653.9716388615848 usec\nrounds: 2038"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1291.2768638380935,
            "unit": "iter/sec",
            "range": "stddev: 0.00006527656622036622",
            "extra": "mean: 774.4272572403069 usec\nrounds: 1761"
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
        "date": 1644011218075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.19626775424223,
            "unit": "iter/sec",
            "range": "stddev: 0.000016165353753711364",
            "extra": "mean: 4.945689705882414 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.9851578649069,
            "unit": "iter/sec",
            "range": "stddev: 0.000014901144448534465",
            "extra": "mean: 3.773796268656729 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.50579588616097,
            "unit": "iter/sec",
            "range": "stddev: 0.000011130082212882254",
            "extra": "mean: 2.484436274509761 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.8057919847034,
            "unit": "iter/sec",
            "range": "stddev: 0.00001090087328866239",
            "extra": "mean: 1.2348639759036066 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.37835278367476,
            "unit": "iter/sec",
            "range": "stddev: 0.000017437373749204704",
            "extra": "mean: 5.336795767195604 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.7633324873692,
            "unit": "iter/sec",
            "range": "stddev: 0.000019410084734846752",
            "extra": "mean: 4.068955241935426 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.52368101142713,
            "unit": "iter/sec",
            "range": "stddev: 0.000011816120620690362",
            "extra": "mean: 2.5738456852790614 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 765.0788207741424,
            "unit": "iter/sec",
            "range": "stddev: 0.00001243618945138556",
            "extra": "mean: 1.3070548717949784 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.250878675244547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006777516080157481",
            "extra": "mean: 38.09396296296296 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.80752741822208,
            "unit": "iter/sec",
            "range": "stddev: 0.00005374516491035766",
            "extra": "mean: 35.96148571428565 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.53322408635177,
            "unit": "iter/sec",
            "range": "stddev: 0.00002440285958663105",
            "extra": "mean: 3.33852781456962 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 497.87770999517585,
            "unit": "iter/sec",
            "range": "stddev: 0.000012209547360774093",
            "extra": "mean: 2.0085253465347734 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1477.9439041459293,
            "unit": "iter/sec",
            "range": "stddev: 0.000006292113186191198",
            "extra": "mean: 676.6156666669143 usec\nrounds: 1500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1326.2075988539923,
            "unit": "iter/sec",
            "range": "stddev: 0.000006407357410130208",
            "extra": "mean: 754.0297619046398 usec\nrounds: 1344"
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
        "date": 1644244368440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.76174638641828,
            "unit": "iter/sec",
            "range": "stddev: 0.000013948467691796565",
            "extra": "mean: 4.859989855072532 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.6165353580626,
            "unit": "iter/sec",
            "range": "stddev: 0.00011821663266191577",
            "extra": "mean: 3.7790533333333167 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.4466972311332,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089841310425787",
            "extra": "mean: 2.436369951923073 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.0065049352827,
            "unit": "iter/sec",
            "range": "stddev: 0.000008075429798930981",
            "extra": "mean: 1.2091803317535634 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.1750422594682,
            "unit": "iter/sec",
            "range": "stddev: 0.000029762079670989082",
            "extra": "mean: 5.258313541666707 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.40594862862903,
            "unit": "iter/sec",
            "range": "stddev: 0.000010603363867253748",
            "extra": "mean: 4.041939999999997 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.28836319035634,
            "unit": "iter/sec",
            "range": "stddev: 0.000016444213431762932",
            "extra": "mean: 2.5234150000000177 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 769.8585151464175,
            "unit": "iter/sec",
            "range": "stddev: 0.000009097829959631106",
            "extra": "mean: 1.2989399744572707 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.483113190002793,
            "unit": "iter/sec",
            "range": "stddev: 0.00006023379024423533",
            "extra": "mean: 37.75991111111113 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.89704595191413,
            "unit": "iter/sec",
            "range": "stddev: 0.00003961154283065939",
            "extra": "mean: 35.846089285714704 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.64352448037835,
            "unit": "iter/sec",
            "range": "stddev: 0.000018797592582979604",
            "extra": "mean: 3.2933355048861603 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 499.7460776352332,
            "unit": "iter/sec",
            "range": "stddev: 0.000010364993168996003",
            "extra": "mean: 2.0010162055336917 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1535.2158176540163,
            "unit": "iter/sec",
            "range": "stddev: 0.000005559801240190822",
            "extra": "mean: 651.3742162506593 usec\nrounds: 1563"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1367.5339523450637,
            "unit": "iter/sec",
            "range": "stddev: 0.000005142060971456158",
            "extra": "mean: 731.2432706224134 usec\nrounds: 1382"
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
        "date": 1644418199675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.42642695751,
            "unit": "iter/sec",
            "range": "stddev: 0.00001283623095381194",
            "extra": "mean: 4.284005084745727 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 305.5290373709467,
            "unit": "iter/sec",
            "range": "stddev: 0.000012555325661046213",
            "extra": "mean: 3.2730113268608485 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 464.10910948421576,
            "unit": "iter/sec",
            "range": "stddev: 0.000012194433915772388",
            "extra": "mean: 2.1546657446809063 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 949.4815424847552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073849965829162196",
            "extra": "mean: 1.0532063607924804 msec\nrounds: 959"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.9549517970573,
            "unit": "iter/sec",
            "range": "stddev: 0.000015656239616576656",
            "extra": "mean: 4.630595370370323 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.87408807846043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000109717166994376",
            "extra": "mean: 3.535141754385899 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.52985903957386,
            "unit": "iter/sec",
            "range": "stddev: 0.000011911483761059447",
            "extra": "mean: 2.2295059734513014 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 884.7360204574115,
            "unit": "iter/sec",
            "range": "stddev: 0.000007996369111053633",
            "extra": "mean: 1.13028064516125 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.23261579243021,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125214811570304",
            "extra": "mean: 33.0768599999999 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.799709529528723,
            "unit": "iter/sec",
            "range": "stddev: 0.00008021399698639137",
            "extra": "mean: 31.44682812499955 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.3137332102965,
            "unit": "iter/sec",
            "range": "stddev: 0.00001157629457792187",
            "extra": "mean: 2.912787643678241 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.26221577315,
            "unit": "iter/sec",
            "range": "stddev: 0.000013331976907862437",
            "extra": "mean: 1.7659663176266196 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1726.5942839756676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058295789534244375",
            "extra": "mean: 579.1748584371502 usec\nrounds: 1766"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1509.5260761840173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060246120511876335",
            "extra": "mean: 662.4595730919298 usec\nrounds: 1546"
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
        "date": 1644419382291,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.23889209256433,
            "unit": "iter/sec",
            "range": "stddev: 0.000012506292122284284",
            "extra": "mean: 4.872370873786398 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.7713479825289,
            "unit": "iter/sec",
            "range": "stddev: 0.000024864960765762756",
            "extra": "mean: 3.7206346863468633 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.02648358626953,
            "unit": "iter/sec",
            "range": "stddev: 0.000010396161597287264",
            "extra": "mean: 2.4508213075060574 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.2142918533286,
            "unit": "iter/sec",
            "range": "stddev: 0.000010177763308500328",
            "extra": "mean: 1.2074169811320927 msec\nrounds: 848"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.07961291146788,
            "unit": "iter/sec",
            "range": "stddev: 0.000015765994918295294",
            "extra": "mean: 5.288777486910906 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.02042206631305,
            "unit": "iter/sec",
            "range": "stddev: 0.00014321038631228834",
            "extra": "mean: 4.0647032128514 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.51186236103064,
            "unit": "iter/sec",
            "range": "stddev: 0.000010034044857583443",
            "extra": "mean: 2.5476937027707063 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.7792527590364,
            "unit": "iter/sec",
            "range": "stddev: 0.00001002921250199954",
            "extra": "mean: 1.2923582487309353 msec\nrounds: 788"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.61147512433216,
            "unit": "iter/sec",
            "range": "stddev: 0.0001498982516258534",
            "extra": "mean: 37.57777407407422 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.015812124362345,
            "unit": "iter/sec",
            "range": "stddev: 0.00013803738317389404",
            "extra": "mean: 35.694128571429395 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.9415275903258,
            "unit": "iter/sec",
            "range": "stddev: 0.00001334725094327158",
            "extra": "mean: 3.290106514657884 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.65010598897936,
            "unit": "iter/sec",
            "range": "stddev: 0.00002834358529803148",
            "extra": "mean: 1.9974029527560166 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1517.7802828499641,
            "unit": "iter/sec",
            "range": "stddev: 0.000005757491905496069",
            "extra": "mean: 658.8568920675933 usec\nrounds: 1538"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1341.0627133431954,
            "unit": "iter/sec",
            "range": "stddev: 0.00000701511335751553",
            "extra": "mean: 745.677282688037 usec\nrounds: 1369"
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
        "date": 1644539059769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.4148471934829,
            "unit": "iter/sec",
            "range": "stddev: 0.000011716208866739242",
            "extra": "mean: 4.8920125603864735 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.2914463458124,
            "unit": "iter/sec",
            "range": "stddev: 0.000009844717591805172",
            "extra": "mean: 3.7412345724907135 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.14527789577886,
            "unit": "iter/sec",
            "range": "stddev: 0.00008666124377715102",
            "extra": "mean: 2.4441196172248842 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 838.166170751691,
            "unit": "iter/sec",
            "range": "stddev: 0.000008721895938729639",
            "extra": "mean: 1.193080841121483 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.49906974229205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001657166395678146",
            "extra": "mean: 5.305065968586251 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.3083787392055,
            "unit": "iter/sec",
            "range": "stddev: 0.0001604365659411688",
            "extra": "mean: 4.076501606425475 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.4224309058389,
            "unit": "iter/sec",
            "range": "stddev: 0.000011425953852823808",
            "extra": "mean: 2.5225615960100076 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.0170902554212,
            "unit": "iter/sec",
            "range": "stddev: 0.000011168837684810219",
            "extra": "mean: 1.2869729797980118 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.538636421270503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002832314985928487",
            "extra": "mean: 37.6809111111115 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.97673454754952,
            "unit": "iter/sec",
            "range": "stddev: 0.000031929165979810264",
            "extra": "mean: 35.74398571428666 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.435316379097,
            "unit": "iter/sec",
            "range": "stddev: 0.000041530359990327875",
            "extra": "mean: 3.3174613114753955 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.0631864304005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000091910884904231",
            "extra": "mean: 2.0077773809523265 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1514.3061306391724,
            "unit": "iter/sec",
            "range": "stddev: 0.000005961881969257292",
            "extra": "mean: 660.3684550744774 usec\nrounds: 1547"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1334.5277473825793,
            "unit": "iter/sec",
            "range": "stddev: 0.000005550015060326265",
            "extra": "mean: 749.32874341602 usec\nrounds: 1329"
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
        "date": 1644540116427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.99426561719622,
            "unit": "iter/sec",
            "range": "stddev: 0.0005903417677704309",
            "extra": "mean: 7.692647019867588 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.273812837535,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314105112307197",
            "extra": "mean: 5.8728936842105 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.19985934227805,
            "unit": "iter/sec",
            "range": "stddev: 0.0002540849060091935",
            "extra": "mean: 3.888027009646275 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.5225866622536,
            "unit": "iter/sec",
            "range": "stddev: 0.00031733856722725043",
            "extra": "mean: 1.8197614152202588 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.75658220144238,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490979990600011",
            "extra": "mean: 8.08037828947368 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.02820027176614,
            "unit": "iter/sec",
            "range": "stddev: 0.0006917253725379995",
            "extra": "mean: 6.171765151515127 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.47591937799328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003808714744756938",
            "extra": "mean: 4.0245348623854085 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.4430626873806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003193734702405179",
            "extra": "mean: 1.943849713467096 msec\nrounds: 698"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.53788106997463,
            "unit": "iter/sec",
            "range": "stddev: 0.002467202897041837",
            "extra": "mean: 46.42982272727248 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.45973412283258,
            "unit": "iter/sec",
            "range": "stddev: 0.00219658418866684",
            "extra": "mean: 48.8764904761897 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.60773440208013,
            "unit": "iter/sec",
            "range": "stddev: 0.00046076774454120186",
            "extra": "mean: 5.3020095022623375 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.1806590495219,
            "unit": "iter/sec",
            "range": "stddev: 0.00028233406408181865",
            "extra": "mean: 3.0194999999999053 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1021.5648260593425,
            "unit": "iter/sec",
            "range": "stddev: 0.00013552436919368413",
            "extra": "mean: 978.8903988183224 usec\nrounds: 1354"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 901.4918590886679,
            "unit": "iter/sec",
            "range": "stddev: 0.00022549812319393",
            "extra": "mean: 1.1092723577236911 msec\nrounds: 1230"
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
        "date": 1644597387142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.25436255115534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001612377373057773",
            "extra": "mean: 4.848382296650716 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.98767264172614,
            "unit": "iter/sec",
            "range": "stddev: 0.00001204198290317422",
            "extra": "mean: 3.6902047619048117 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.5905582091934,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527873468072444",
            "extra": "mean: 2.4355163069543995 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.0495028828165,
            "unit": "iter/sec",
            "range": "stddev: 0.000010319966312571807",
            "extra": "mean: 1.1764020761245655 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.46462601750198,
            "unit": "iter/sec",
            "range": "stddev: 0.000020212622156605747",
            "extra": "mean: 5.222896891191739 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.723291925196,
            "unit": "iter/sec",
            "range": "stddev: 0.000010873385958159",
            "extra": "mean: 3.988460714285583 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.5588506736664,
            "unit": "iter/sec",
            "range": "stddev: 0.000013224501913910987",
            "extra": "mean: 2.528068827930218 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 777.6768116388374,
            "unit": "iter/sec",
            "range": "stddev: 0.00000930441339549391",
            "extra": "mean: 1.2858812105926753 msec\nrounds: 793"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.214418212325793,
            "unit": "iter/sec",
            "range": "stddev: 0.00010911059428265709",
            "extra": "mean: 38.146946153846315 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.770381510378648,
            "unit": "iter/sec",
            "range": "stddev: 0.00010213800518507451",
            "extra": "mean: 42.06916071428551 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 302.36911655379186,
            "unit": "iter/sec",
            "range": "stddev: 0.000013733477067411395",
            "extra": "mean: 3.3072160655736105 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.8714419884969,
            "unit": "iter/sec",
            "range": "stddev: 0.000030280357002224313",
            "extra": "mean: 1.9767868217054623 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1545.5761868650595,
            "unit": "iter/sec",
            "range": "stddev: 0.000006385221448087597",
            "extra": "mean: 647.007898089017 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1351.193156545271,
            "unit": "iter/sec",
            "range": "stddev: 0.000006905295518710187",
            "extra": "mean: 740.0866376179694 usec\nrounds: 1377"
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
        "date": 1644600122991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.41822852709961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004992784852043374",
            "extra": "mean: 4.397184897959215 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.01903731319953,
            "unit": "iter/sec",
            "range": "stddev: 0.000016682961590560013",
            "extra": "mean: 3.3781611111111123 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 462.879531485415,
            "unit": "iter/sec",
            "range": "stddev: 0.00003142919946404442",
            "extra": "mean: 2.160389328063234 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 942.483116662761,
            "unit": "iter/sec",
            "range": "stddev: 0.00002215672004390213",
            "extra": "mean: 1.061026964112525 msec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.05125747035765,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700859679442779",
            "extra": "mean: 4.738185462554995 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.4374773452586,
            "unit": "iter/sec",
            "range": "stddev: 0.000051512790787385536",
            "extra": "mean: 3.6305880000001167 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.86653795437957,
            "unit": "iter/sec",
            "range": "stddev: 0.000021867029809175252",
            "extra": "mean: 2.2428236139629716 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 875.1668572301498,
            "unit": "iter/sec",
            "range": "stddev: 0.00002091648927962906",
            "extra": "mean: 1.1426392484342236 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.9111727901649,
            "unit": "iter/sec",
            "range": "stddev: 0.0002826997074800299",
            "extra": "mean: 33.43232333333349 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.682318226906915,
            "unit": "iter/sec",
            "range": "stddev: 0.00023288511771806626",
            "extra": "mean: 31.563346875000065 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.4055419859498,
            "unit": "iter/sec",
            "range": "stddev: 0.00003894543697432205",
            "extra": "mean: 2.920513477089205 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 572.695087529407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000319534148759228",
            "extra": "mean: 1.7461298722047298 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1725.3607998766079,
            "unit": "iter/sec",
            "range": "stddev: 0.000014325139485185403",
            "extra": "mean: 579.588918486798 usec\nrounds: 1877"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1524.1408277216244,
            "unit": "iter/sec",
            "range": "stddev: 0.000012099295805469285",
            "extra": "mean: 656.107350325927 usec\nrounds: 1687"
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
        "date": 1644600567483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.14976364332406,
            "unit": "iter/sec",
            "range": "stddev: 0.000013225882647114282",
            "extra": "mean: 4.946827450980424 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.3794673167237,
            "unit": "iter/sec",
            "range": "stddev: 0.000009983316497471139",
            "extra": "mean: 3.7400029629629423 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.0366501072774,
            "unit": "iter/sec",
            "range": "stddev: 0.000010926553162267887",
            "extra": "mean: 2.493537684729063 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 824.9210005880445,
            "unit": "iter/sec",
            "range": "stddev: 0.00001004962650535756",
            "extra": "mean: 1.2122372921614923 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.41428771166156,
            "unit": "iter/sec",
            "range": "stddev: 0.000026348884361096722",
            "extra": "mean: 5.335772486772771 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.08677376864924,
            "unit": "iter/sec",
            "range": "stddev: 0.000008334574331879972",
            "extra": "mean: 4.063607258064665 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 389.23681950537093,
            "unit": "iter/sec",
            "range": "stddev: 0.000010293648440358533",
            "extra": "mean: 2.5691300254450913 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 764.4327100756645,
            "unit": "iter/sec",
            "range": "stddev: 0.000008682591282560824",
            "extra": "mean: 1.3081596153846147 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.611351017890644,
            "unit": "iter/sec",
            "range": "stddev: 0.00012202254832158279",
            "extra": "mean: 33.77083333333282 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.31967097511159,
            "unit": "iter/sec",
            "range": "stddev: 0.00014065205320419578",
            "extra": "mean: 31.92881562499994 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.9382009216272,
            "unit": "iter/sec",
            "range": "stddev: 0.00002977886622457306",
            "extra": "mean: 2.950390358126762 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.0685438331312,
            "unit": "iter/sec",
            "range": "stddev: 0.00003613727391429966",
            "extra": "mean: 1.7886894389437809 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1687.9867123139045,
            "unit": "iter/sec",
            "range": "stddev: 0.000014283150174143615",
            "extra": "mean: 592.4217250674875 usec\nrounds: 1855"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1477.7980337850713,
            "unit": "iter/sec",
            "range": "stddev: 0.000016131130052688676",
            "extra": "mean: 676.6824539877812 usec\nrounds: 1630"
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
        "date": 1644601088116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.11816190757952,
            "unit": "iter/sec",
            "range": "stddev: 0.0005492391297185919",
            "extra": "mean: 7.92907210884352 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.24337460478773,
            "unit": "iter/sec",
            "range": "stddev: 0.0005721050841676378",
            "extra": "mean: 5.979310106382969 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.15824126195068,
            "unit": "iter/sec",
            "range": "stddev: 0.00038512709578693966",
            "extra": "mean: 4.112548251748191 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.7499479079978,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834892773731936",
            "extra": "mean: 1.842469085173475 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.33073772019895,
            "unit": "iter/sec",
            "range": "stddev: 0.0009166507733151438",
            "extra": "mean: 8.380070542635481 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.8390133407053,
            "unit": "iter/sec",
            "range": "stddev: 0.0009132135706954329",
            "extra": "mean: 6.416878409090898 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.48579124117015,
            "unit": "iter/sec",
            "range": "stddev: 0.00023870816519679862",
            "extra": "mean: 3.9763677902622296 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.11130806881755,
            "unit": "iter/sec",
            "range": "stddev: 0.00017682998007042554",
            "extra": "mean: 1.9680727118644683 msec\nrounds: 590"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.12083037708816,
            "unit": "iter/sec",
            "range": "stddev: 0.002155429225345914",
            "extra": "mean: 49.69973809523848 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.197218924877046,
            "unit": "iter/sec",
            "range": "stddev: 0.0014227669080158925",
            "extra": "mean: 47.176000000000016 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.98657452722685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008450579175267117",
            "extra": "mean: 5.650146078431302 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.58809501412145,
            "unit": "iter/sec",
            "range": "stddev: 0.00023945852201760174",
            "extra": "mean: 3.0619609693879406 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 982.5774789317147,
            "unit": "iter/sec",
            "range": "stddev: 0.0002580989689917848",
            "extra": "mean: 1.0177314475874488 msec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 900.4882665881813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003914047054149686",
            "extra": "mean: 1.110508639705939 msec\nrounds: 1088"
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
        "date": 1644602735465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 231.59325968601658,
            "unit": "iter/sec",
            "range": "stddev: 0.000020845816332798693",
            "extra": "mean: 4.317914957264964 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 302.4989676975581,
            "unit": "iter/sec",
            "range": "stddev: 0.000011089919517495422",
            "extra": "mean: 3.3057964052287656 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 461.7197416299024,
            "unit": "iter/sec",
            "range": "stddev: 0.000017128642856911285",
            "extra": "mean: 2.1658159914712143 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 951.2337145676252,
            "unit": "iter/sec",
            "range": "stddev: 0.000007847003076548711",
            "extra": "mean: 1.0512663551402204 msec\nrounds: 963"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.88049346401968,
            "unit": "iter/sec",
            "range": "stddev: 0.000201600995444316",
            "extra": "mean: 4.764616203703715 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.0691114183779,
            "unit": "iter/sec",
            "range": "stddev: 0.000012543665107264614",
            "extra": "mean: 3.557843816254419 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 449.28597746726626,
            "unit": "iter/sec",
            "range": "stddev: 0.00001159783754431636",
            "extra": "mean: 2.2257538631346607 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 883.978118338757,
            "unit": "iter/sec",
            "range": "stddev: 0.000008770352759901738",
            "extra": "mean: 1.131249721293193 msec\nrounds: 897"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.698982988026508,
            "unit": "iter/sec",
            "range": "stddev: 0.0001267799117489557",
            "extra": "mean: 33.67118666666672 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.323343731704444,
            "unit": "iter/sec",
            "range": "stddev: 0.00005909243297614445",
            "extra": "mean: 31.925071875000157 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.25623022567584,
            "unit": "iter/sec",
            "range": "stddev: 0.000019228191603852216",
            "extra": "mean: 2.92178757225434 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 575.8769207792018,
            "unit": "iter/sec",
            "range": "stddev: 0.00000952223970130154",
            "extra": "mean: 1.7364821612349564 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1721.2213167335376,
            "unit": "iter/sec",
            "range": "stddev: 0.000005939682624219792",
            "extra": "mean: 580.9828116106291 usec\nrounds: 1757"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1536.0896554444646,
            "unit": "iter/sec",
            "range": "stddev: 0.000013655979000220644",
            "extra": "mean: 651.0036679536469 usec\nrounds: 1554"
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
        "date": 1644937361821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.96903369390748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005322461416064115",
            "extra": "mean: 7.753799275362332 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.5459795338953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990652750229218",
            "extra": "mean: 5.968510869565185 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.43736911537835,
            "unit": "iter/sec",
            "range": "stddev: 0.0005113419172901413",
            "extra": "mean: 4.041426739926687 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.6115333405467,
            "unit": "iter/sec",
            "range": "stddev: 0.0004820894720682278",
            "extra": "mean: 1.9319507692307942 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.92104789320052,
            "unit": "iter/sec",
            "range": "stddev: 0.0014736755751120832",
            "extra": "mean: 8.552779999999935 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.03119903434379,
            "unit": "iter/sec",
            "range": "stddev: 0.0010146229261347073",
            "extra": "mean: 6.534615204678469 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.15330513715395,
            "unit": "iter/sec",
            "range": "stddev: 0.0007655447505197641",
            "extra": "mean: 4.164006818181786 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.3386370814622,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907555948928062",
            "extra": "mean: 1.9827947463768818 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.442570396686833,
            "unit": "iter/sec",
            "range": "stddev: 0.002785043677062041",
            "extra": "mean: 51.43352857142839 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.568119508253616,
            "unit": "iter/sec",
            "range": "stddev: 0.0024698037543757104",
            "extra": "mean: 48.61893181818191 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.1244473595562,
            "unit": "iter/sec",
            "range": "stddev: 0.001115816574162951",
            "extra": "mean: 5.551717241379487 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.97225115429626,
            "unit": "iter/sec",
            "range": "stddev: 0.0005363807052531428",
            "extra": "mean: 3.067745786516835 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 968.4900615956886,
            "unit": "iter/sec",
            "range": "stddev: 0.000201602529094897",
            "extra": "mean: 1.0325351179674425 msec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 866.8917915225867,
            "unit": "iter/sec",
            "range": "stddev: 0.00029290930930405307",
            "extra": "mean: 1.153546509240358 msec\nrounds: 974"
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
        "date": 1644938527161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.96582482848814,
            "unit": "iter/sec",
            "range": "stddev: 0.000940417370893148",
            "extra": "mean: 7.301091358024703 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.8120521959353,
            "unit": "iter/sec",
            "range": "stddev: 0.00042981185311303155",
            "extra": "mean: 5.324471929824546 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.08886598043733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003783693561441424",
            "extra": "mean: 3.595972807017548 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 597.6339343136099,
            "unit": "iter/sec",
            "range": "stddev: 0.00025482552896468035",
            "extra": "mean: 1.6732650918634877 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.3432931294156,
            "unit": "iter/sec",
            "range": "stddev: 0.0008353473357145013",
            "extra": "mean: 8.309561538461585 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.80416555081104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006931449492973165",
            "extra": "mean: 5.786897536946016 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.28729327834935,
            "unit": "iter/sec",
            "range": "stddev: 0.00044299666437834176",
            "extra": "mean: 3.6997669696968414 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 533.9540561700308,
            "unit": "iter/sec",
            "range": "stddev: 0.0004002296801939683",
            "extra": "mean: 1.8728203081232198 msec\nrounds: 714"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.582031345929064,
            "unit": "iter/sec",
            "range": "stddev: 0.0021811821775626875",
            "extra": "mean: 44.28299583333425 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.855952457737523,
            "unit": "iter/sec",
            "range": "stddev: 0.002082784778434699",
            "extra": "mean: 41.91825925925907 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.22585458376432,
            "unit": "iter/sec",
            "range": "stddev: 0.0006387570079458743",
            "extra": "mean: 4.944966122448938 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.0962018263061,
            "unit": "iter/sec",
            "range": "stddev: 0.0003886106952643774",
            "extra": "mean: 2.9490156321840075 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1042.3472312709323,
            "unit": "iter/sec",
            "range": "stddev: 0.00018300067816409024",
            "extra": "mean: 959.3732011747195 usec\nrounds: 1362"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 960.7513844427605,
            "unit": "iter/sec",
            "range": "stddev: 0.00023071745248629525",
            "extra": "mean: 1.0408519999999832 msec\nrounds: 1200"
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
        "date": 1644939028181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.82422194370696,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197471391793617",
            "extra": "mean: 7.362457046979847 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.40097181914467,
            "unit": "iter/sec",
            "range": "stddev: 0.0004035977765574457",
            "extra": "mean: 5.543207389162618 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.1015077957144,
            "unit": "iter/sec",
            "range": "stddev: 0.00034848722663463535",
            "extra": "mean: 3.829928093645477 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 573.1026862469085,
            "unit": "iter/sec",
            "range": "stddev: 0.000242788921381085",
            "extra": "mean: 1.7448880000000073 msec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.95185838360564,
            "unit": "iter/sec",
            "range": "stddev: 0.0004391674353888081",
            "extra": "mean: 7.815439436619617 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.26698974869007,
            "unit": "iter/sec",
            "range": "stddev: 0.00046115552787783816",
            "extra": "mean: 5.907826455026438 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.2074419397433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004263051775206322",
            "extra": "mean: 3.8728550675675937 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 537.7945949864558,
            "unit": "iter/sec",
            "range": "stddev: 0.00028834308225997627",
            "extra": "mean: 1.8594459842520077 msec\nrounds: 635"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.76935545798363,
            "unit": "iter/sec",
            "range": "stddev: 0.002442789624230807",
            "extra": "mean: 48.14785909090912 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.25351932453883,
            "unit": "iter/sec",
            "range": "stddev: 0.0028784287744944154",
            "extra": "mean: 44.9367125000002 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.7098169008209,
            "unit": "iter/sec",
            "range": "stddev: 0.00045901251100673987",
            "extra": "mean: 5.032464000000138 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.9857190182426,
            "unit": "iter/sec",
            "range": "stddev: 0.00026502856600776686",
            "extra": "mean: 2.865446766169039 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1052.6065795969425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012675737526507015",
            "extra": "mean: 950.0225624496036 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 952.9809320684504,
            "unit": "iter/sec",
            "range": "stddev: 0.00023829675178600352",
            "extra": "mean: 1.0493389388489593 msec\nrounds: 1112"
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
        "date": 1645453875856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.59138145156786,
            "unit": "iter/sec",
            "range": "stddev: 0.00023258989787124895",
            "extra": "mean: 5.274501363636381 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.71269605152744,
            "unit": "iter/sec",
            "range": "stddev: 0.00023019627486353916",
            "extra": "mean: 4.06979377162625 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.9757150688187,
            "unit": "iter/sec",
            "range": "stddev: 0.00015323971482471177",
            "extra": "mean: 2.5908365758755103 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.1959235646111,
            "unit": "iter/sec",
            "range": "stddev: 0.00007897802108687224",
            "extra": "mean: 1.2559722681358971 msec\nrounds: 1089"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.61132422389704,
            "unit": "iter/sec",
            "range": "stddev: 0.00023646326514387896",
            "extra": "mean: 5.727005418719237 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.51505970602446,
            "unit": "iter/sec",
            "range": "stddev: 0.00018224306426088243",
            "extra": "mean: 4.33811136363628 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.4656913942568,
            "unit": "iter/sec",
            "range": "stddev: 0.00014945226395150822",
            "extra": "mean: 2.713956884875895 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.4649014133022,
            "unit": "iter/sec",
            "range": "stddev: 0.00008027563186266755",
            "extra": "mean: 1.352329228998902 msec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.65269099293125,
            "unit": "iter/sec",
            "range": "stddev: 0.0011409129973161377",
            "extra": "mean: 40.563523076922245 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.211689483867232,
            "unit": "iter/sec",
            "range": "stddev: 0.0009603295016494503",
            "extra": "mean: 39.6641407407422 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.4528284196341,
            "unit": "iter/sec",
            "range": "stddev: 0.00017331447651513363",
            "extra": "mean: 3.552993251533585 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 483.4357673231386,
            "unit": "iter/sec",
            "range": "stddev: 0.00014130878177322462",
            "extra": "mean: 2.0685271293374927 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1465.2756893082596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000629798879612137",
            "extra": "mean: 682.4654276985165 usec\nrounds: 1964"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1314.3778133635083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006264660466516498",
            "extra": "mean: 760.8162507254959 usec\nrounds: 1723"
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
        "date": 1645921155394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.74564496808517,
            "unit": "iter/sec",
            "range": "stddev: 0.000011842259379375977",
            "extra": "mean: 4.860370192307681 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.31941840999264,
            "unit": "iter/sec",
            "range": "stddev: 0.00001064457856152496",
            "extra": "mean: 3.685692700729931 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.54604712950226,
            "unit": "iter/sec",
            "range": "stddev: 0.000057863491966777854",
            "extra": "mean: 2.4239718377087978 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 848.8534971448521,
            "unit": "iter/sec",
            "range": "stddev: 0.000009758280742425208",
            "extra": "mean: 1.178059586681959 msec\nrounds: 871"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.15055764622278,
            "unit": "iter/sec",
            "range": "stddev: 0.000026292925324506242",
            "extra": "mean: 5.25899062499996 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.86393817890038,
            "unit": "iter/sec",
            "range": "stddev: 0.000011420218661025685",
            "extra": "mean: 4.002178174603206 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.9320105024967,
            "unit": "iter/sec",
            "range": "stddev: 0.000018406263070732278",
            "extra": "mean: 2.5066928039702683 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.551989186476,
            "unit": "iter/sec",
            "range": "stddev: 0.000009945945498159516",
            "extra": "mean: 1.253836757425715 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.652138602605973,
            "unit": "iter/sec",
            "range": "stddev: 0.00012187985450166287",
            "extra": "mean: 40.56443200000061 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.062933935643745,
            "unit": "iter/sec",
            "range": "stddev: 0.000037108828225810184",
            "extra": "mean: 35.634192857143276 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.08083146030066,
            "unit": "iter/sec",
            "range": "stddev: 0.000012767151412959754",
            "extra": "mean: 3.2994498371335834 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.5293979697225,
            "unit": "iter/sec",
            "range": "stddev: 0.000010616768933132376",
            "extra": "mean: 1.9899333333335658 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1562.5352281114883,
            "unit": "iter/sec",
            "range": "stddev: 0.000006049169119461522",
            "extra": "mean: 639.985570890853 usec\nrounds: 1594"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1395.8548069106391,
            "unit": "iter/sec",
            "range": "stddev: 0.000006623648870494916",
            "extra": "mean: 716.4068892045007 usec\nrounds: 1408"
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
        "date": 1646063308965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 232.54948198625772,
            "unit": "iter/sec",
            "range": "stddev: 0.00011951439033452543",
            "extra": "mean: 4.3001600840336165 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 310.6283788139389,
            "unit": "iter/sec",
            "range": "stddev: 0.00014646321187221234",
            "extra": "mean: 3.2192808777429276 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 490.5330084389484,
            "unit": "iter/sec",
            "range": "stddev: 0.00006734045515104842",
            "extra": "mean: 2.0385987951806914 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1088.431432294509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153921241766625",
            "extra": "mean: 918.7533273381422 usec\nrounds: 1112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.42564402903392,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165984044590488",
            "extra": "mean: 4.557352466367523 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.34061434958204,
            "unit": "iter/sec",
            "range": "stddev: 0.0003240689877917112",
            "extra": "mean: 3.4923442567568816 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 471.3620244794269,
            "unit": "iter/sec",
            "range": "stddev: 0.000030583975785490165",
            "extra": "mean: 2.1215115942027825 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 1023.809308792307,
            "unit": "iter/sec",
            "range": "stddev: 0.00001703049581220819",
            "extra": "mean: 976.744391179259 usec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 37.96601282531856,
            "unit": "iter/sec",
            "range": "stddev: 0.00011814096421381909",
            "extra": "mean: 26.339347368421205 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 40.135336354186556,
            "unit": "iter/sec",
            "range": "stddev: 0.00013721622091439776",
            "extra": "mean: 24.915699999999852 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.6708737341828,
            "unit": "iter/sec",
            "range": "stddev: 0.00003699400330737168",
            "extra": "mean: 2.8195154269969054 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.549490371034,
            "unit": "iter/sec",
            "range": "stddev: 0.00006954609258236868",
            "extra": "mean: 1.5348028273808272 msec\nrounds: 672"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 2090.5728140023916,
            "unit": "iter/sec",
            "range": "stddev: 0.00001021451803079433",
            "extra": "mean: 478.3377997179179 usec\nrounds: 2127"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1852.757745866548,
            "unit": "iter/sec",
            "range": "stddev: 0.000011354617969902396",
            "extra": "mean: 539.7359704640138 usec\nrounds: 1896"
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
        "date": 1646086277372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.2074074630269,
            "unit": "iter/sec",
            "range": "stddev: 0.00012674626123534836",
            "extra": "mean: 5.549161458333336 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.8598524550292,
            "unit": "iter/sec",
            "range": "stddev: 0.0001152890322665183",
            "extra": "mean: 4.186555378486105 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 359.40300691370334,
            "unit": "iter/sec",
            "range": "stddev: 0.00005222931320651815",
            "extra": "mean: 2.7823918575063873 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 762.0416387415465,
            "unit": "iter/sec",
            "range": "stddev: 0.000042374876658518874",
            "extra": "mean: 1.31226425061421 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.97140273181358,
            "unit": "iter/sec",
            "range": "stddev: 0.00010418024197964652",
            "extra": "mean: 6.061656647398786 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.97643419553657,
            "unit": "iter/sec",
            "range": "stddev: 0.00008314987472696228",
            "extra": "mean: 4.651672653061255 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.66920596383096,
            "unit": "iter/sec",
            "range": "stddev: 0.00007322351448685876",
            "extra": "mean: 2.876297304582198 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 690.1621325176125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000328309934339534",
            "extra": "mean: 1.4489348993288627 msec\nrounds: 745"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.5100847628118,
            "unit": "iter/sec",
            "range": "stddev: 0.00040530103438797565",
            "extra": "mean: 42.53493809523808 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.53708579313542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003323341715302437",
            "extra": "mean: 40.75463599999978 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.1491081699247,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205339496499514",
            "extra": "mean: 3.858782332155654 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 445.1596906864795,
            "unit": "iter/sec",
            "range": "stddev: 0.000055981555250946",
            "extra": "mean: 2.2463848837209475 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1374.2536454363717,
            "unit": "iter/sec",
            "range": "stddev: 0.000021370391072975117",
            "extra": "mean: 727.6677077196083 usec\nrounds: 1697"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1183.9329389117127,
            "unit": "iter/sec",
            "range": "stddev: 0.000026621539279272308",
            "extra": "mean: 844.6424346629071 usec\nrounds: 1454"
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
        "date": 1646432241002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 229.41696582770487,
            "unit": "iter/sec",
            "range": "stddev: 0.000018623031087609095",
            "extra": "mean: 4.3588755364806495 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 300.0560957330447,
            "unit": "iter/sec",
            "range": "stddev: 0.000019637569599513442",
            "extra": "mean: 3.3327101639344288 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 466.98892860273526,
            "unit": "iter/sec",
            "range": "stddev: 0.000013259200993667146",
            "extra": "mean: 2.1413783898305097 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 961.2858096147711,
            "unit": "iter/sec",
            "range": "stddev: 0.00001082409237037923",
            "extra": "mean: 1.040273340142973 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.10326599500078,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653628719224242",
            "extra": "mean: 4.692560648148204 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.438673341061,
            "unit": "iter/sec",
            "range": "stddev: 0.000024028101165916967",
            "extra": "mean: 3.5914551236749164 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 446.7571496183929,
            "unit": "iter/sec",
            "range": "stddev: 0.00009413394981568551",
            "extra": "mean: 2.2383525386312706 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.7869595875715,
            "unit": "iter/sec",
            "range": "stddev: 0.000009808145913002675",
            "extra": "mean: 1.1226028729282178 msec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 29.560075137769726,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143395876559082",
            "extra": "mean: 33.82941333333325 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 31.295926160392103,
            "unit": "iter/sec",
            "range": "stddev: 0.00007158081315945034",
            "extra": "mean: 31.95304062499971 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.4024409819808,
            "unit": "iter/sec",
            "range": "stddev: 0.000016852793677578067",
            "extra": "mean: 2.903579885057551 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.0726232326521,
            "unit": "iter/sec",
            "range": "stddev: 0.000011479218230322224",
            "extra": "mean: 1.7696840350877863 msec\nrounds: 570"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1748.1639096640743,
            "unit": "iter/sec",
            "range": "stddev: 0.000007104583031530282",
            "extra": "mean: 572.0287408245141 usec\nrounds: 1771"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1516.7343249136654,
            "unit": "iter/sec",
            "range": "stddev: 0.000006415321866555825",
            "extra": "mean: 659.3112475758874 usec\nrounds: 1547"
          }
        ]
      }
    ]
  }
}