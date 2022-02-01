window.BENCHMARK_DATA = {
  "lastUpdate": 1643759040430,
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
        "date": 1642085029671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.78465051046098,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719165931759307",
            "extra": "mean: 4.980460396039585 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.7262470533433,
            "unit": "iter/sec",
            "range": "stddev: 0.000010017952342187057",
            "extra": "mean: 3.806243233082694 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.8998813078337,
            "unit": "iter/sec",
            "range": "stddev: 0.00001145420435141671",
            "extra": "mean: 2.4943883663366395 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.1760060874584,
            "unit": "iter/sec",
            "range": "stddev: 0.002421877978413368",
            "extra": "mean: 2.2926524752475452 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.16588661075153,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561232626841201",
            "extra": "mean: 5.342853968253829 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.76440409812358,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989907803526012",
            "extra": "mean: 4.068937499999964 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.92366843342495,
            "unit": "iter/sec",
            "range": "stddev: 0.0027481452417057444",
            "extra": "mean: 4.256701790281255 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.109923294837,
            "unit": "iter/sec",
            "range": "stddev: 0.000015111457809091082",
            "extra": "mean: 1.3438874670184613 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.993016951064224,
            "unit": "iter/sec",
            "range": "stddev: 0.00011181228420878414",
            "extra": "mean: 40.01117599999944 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.369291378032294,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137937055705491",
            "extra": "mean: 37.92290000000072 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.0769800147663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011267486037749372",
            "extra": "mean: 3.3775000000004285 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.41477621944676,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989774746734656",
            "extra": "mean: 2.0349408450702318 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.8732022129907,
            "unit": "iter/sec",
            "range": "stddev: 0.000005708315567960175",
            "extra": "mean: 678.9450704225598 usec\nrounds: 1491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1307.2023388041698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057231402649545424",
            "extra": "mean: 764.9925113466375 usec\nrounds: 1322"
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
        "date": 1642431334764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.611549504584,
            "unit": "iter/sec",
            "range": "stddev: 0.000019929311130718454",
            "extra": "mean: 4.492129910714305 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.57557840017375,
            "unit": "iter/sec",
            "range": "stddev: 0.000011561725045533555",
            "extra": "mean: 3.417920270270262 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.91322980354266,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864615758215439",
            "extra": "mean: 2.2425887665198294 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.7403619080139,
            "unit": "iter/sec",
            "range": "stddev: 0.00222108443766593",
            "extra": "mean: 2.017184955752207 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.51384575570398,
            "unit": "iter/sec",
            "range": "stddev: 0.000019494617215111967",
            "extra": "mean: 4.842290338164311 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.35835998518206,
            "unit": "iter/sec",
            "range": "stddev: 0.000011161243739195387",
            "extra": "mean: 3.67163321167893 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.72106901296564,
            "unit": "iter/sec",
            "range": "stddev: 0.002500578363443218",
            "extra": "mean: 3.880163945578276 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.3274327036888,
            "unit": "iter/sec",
            "range": "stddev: 0.000010569211781541084",
            "extra": "mean: 1.2043441666666705 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.99468660848128,
            "unit": "iter/sec",
            "range": "stddev: 0.00021431726605444787",
            "extra": "mean: 35.72106428571483 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.564360281937414,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908135571704646",
            "extra": "mean: 33.824510000000174 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.181312821149,
            "unit": "iter/sec",
            "range": "stddev: 0.00001624625167474034",
            "extra": "mean: 2.983459882005996 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.4399654021362,
            "unit": "iter/sec",
            "range": "stddev: 0.00001350363574672381",
            "extra": "mean: 1.8068807142855825 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1629.9361811389958,
            "unit": "iter/sec",
            "range": "stddev: 0.000007367445585188673",
            "extra": "mean: 613.5209535021195 usec\nrounds: 1699"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1472.3128168039677,
            "unit": "iter/sec",
            "range": "stddev: 0.000006939337427709188",
            "extra": "mean: 679.2034875922335 usec\nrounds: 1491"
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
        "date": 1642432578953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.98986194542016,
            "unit": "iter/sec",
            "range": "stddev: 0.00009459213010792456",
            "extra": "mean: 5.8142961956521795 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.75435948076912,
            "unit": "iter/sec",
            "range": "stddev: 0.00007728723033016224",
            "extra": "mean: 4.469186666666695 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.9264357783027,
            "unit": "iter/sec",
            "range": "stddev: 0.00005481374683893058",
            "extra": "mean: 2.9246056910568248 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.1448755446767,
            "unit": "iter/sec",
            "range": "stddev: 0.0012837726892714653",
            "extra": "mean: 1.9336941102756977 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.1729826600963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008095356211048116",
            "extra": "mean: 6.282473214285592 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 209.72629240594128,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454504938092772",
            "extra": "mean: 4.768119383259889 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.94700584191054,
            "unit": "iter/sec",
            "range": "stddev: 0.00005846730646012956",
            "extra": "mean: 2.9944870967742614 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.1758735704051,
            "unit": "iter/sec",
            "range": "stddev: 0.00002983534417837938",
            "extra": "mean: 1.5499649645390443 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.187241410113053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005977098367707706",
            "extra": "mean: 45.07094782608689 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.534273207219712,
            "unit": "iter/sec",
            "range": "stddev: 0.0005219711611050616",
            "extra": "mean: 42.49122083333449 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.27306107955374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000765873068823745",
            "extra": "mean: 3.963958718860799 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 425.3560350396813,
            "unit": "iter/sec",
            "range": "stddev: 0.00005181092256775689",
            "extra": "mean: 2.3509716981133475 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1295.256919588651,
            "unit": "iter/sec",
            "range": "stddev: 0.00003134581003496041",
            "extra": "mean: 772.047602970985 usec\nrounds: 1481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1146.3624782050076,
            "unit": "iter/sec",
            "range": "stddev: 0.000033821775590155746",
            "extra": "mean: 872.3244340357473 usec\nrounds: 1281"
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
        "date": 1642433741588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.5218977549291,
            "unit": "iter/sec",
            "range": "stddev: 0.0002762094854849768",
            "extra": "mean: 5.448941037735872 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.57625295297592,
            "unit": "iter/sec",
            "range": "stddev: 0.00019892060782850544",
            "extra": "mean: 4.139479720279688 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.1058449030854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001595890417215914",
            "extra": "mean: 2.680204595185988 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.0392516328968,
            "unit": "iter/sec",
            "range": "stddev: 0.00009166509733053074",
            "extra": "mean: 1.3226826488706713 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.10955501046772,
            "unit": "iter/sec",
            "range": "stddev: 0.00020971464607421266",
            "extra": "mean: 6.056584671532797 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 225.51082538696912,
            "unit": "iter/sec",
            "range": "stddev: 0.00020101865900194453",
            "extra": "mean: 4.434376923076899 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 360.88409237650546,
            "unit": "iter/sec",
            "range": "stddev: 0.00017835765111816026",
            "extra": "mean: 2.770972789115663 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 701.0638717587364,
            "unit": "iter/sec",
            "range": "stddev: 0.00011063646761530519",
            "extra": "mean: 1.4264035564852775 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.634920273268577,
            "unit": "iter/sec",
            "range": "stddev: 0.0011699834276896117",
            "extra": "mean: 42.31027600000047 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.036278530524285,
            "unit": "iter/sec",
            "range": "stddev: 0.001133782100785551",
            "extra": "mean: 39.942038461538836 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.0212082510302,
            "unit": "iter/sec",
            "range": "stddev: 0.00018463772994862135",
            "extra": "mean: 3.676183950617434 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 413.4283047437546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004445510234313888",
            "extra": "mean: 2.418799072356224 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1346.4185056821775,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733600317749428",
            "extra": "mean: 742.7111227153991 usec\nrounds: 1915"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1241.4924447526455,
            "unit": "iter/sec",
            "range": "stddev: 0.000057577587198042226",
            "extra": "mean: 805.4821470937261 usec\nrounds: 1686"
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
        "date": 1643746344028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.26948405260205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107943660035037",
            "extra": "mean: 5.228225531914879 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.4000560377732,
            "unit": "iter/sec",
            "range": "stddev: 0.0003260400440310332",
            "extra": "mean: 4.025763987138288 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.9764912853751,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209175747726906",
            "extra": "mean: 2.6739648702594967 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.3143796727096,
            "unit": "iter/sec",
            "range": "stddev: 0.00014906829700099693",
            "extra": "mean: 1.2766266341463406 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.52985182080204,
            "unit": "iter/sec",
            "range": "stddev: 0.00041148920546837085",
            "extra": "mean: 5.729678846153761 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.68458936960664,
            "unit": "iter/sec",
            "range": "stddev: 0.00024310956830186738",
            "extra": "mean: 4.531354014598552 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.0435763594461,
            "unit": "iter/sec",
            "range": "stddev: 0.00023987952042790926",
            "extra": "mean: 2.7170695652173533 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 688.5618836932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009258556085090453",
            "extra": "mean: 1.4523022892820572 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.105335804064275,
            "unit": "iter/sec",
            "range": "stddev: 0.0013536268360904496",
            "extra": "mean: 43.28004615384547 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.150902999641914,
            "unit": "iter/sec",
            "range": "stddev: 0.0016595133533612852",
            "extra": "mean: 39.76000384615365 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.913954204043,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572278817535941",
            "extra": "mean: 3.677633988763977 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 476.1698021514308,
            "unit": "iter/sec",
            "range": "stddev: 0.00021103792017485587",
            "extra": "mean: 2.1000911764706607 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1383.6501439507724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000661011810919274",
            "extra": "mean: 722.7260477454755 usec\nrounds: 1885"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1266.3547913298137,
            "unit": "iter/sec",
            "range": "stddev: 0.00009036009914990436",
            "extra": "mean: 789.6681142177292 usec\nrounds: 1681"
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
        "date": 1643755001885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.14719736455658,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125759723483159",
            "extra": "mean: 4.996322772277234 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.74139811587645,
            "unit": "iter/sec",
            "range": "stddev: 0.000023540463521627",
            "extra": "mean: 3.820564905660382 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.6277426376629,
            "unit": "iter/sec",
            "range": "stddev: 0.000020690246176208846",
            "extra": "mean: 2.527628606965143 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.3861432992421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000091575553236602",
            "extra": "mean: 1.2324588092345525 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.64967511307046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348399149297511",
            "extra": "mean: 5.386489361702073 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.25803964260183,
            "unit": "iter/sec",
            "range": "stddev: 0.000011780998577571205",
            "extra": "mean: 4.077338306451577 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.1471119138039,
            "unit": "iter/sec",
            "range": "stddev: 0.000012417748568301275",
            "extra": "mean: 2.5964104859334904 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 755.5324823948154,
            "unit": "iter/sec",
            "range": "stddev: 0.000009923058169503939",
            "extra": "mean: 1.3235698309492858 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.127592891182903,
            "unit": "iter/sec",
            "range": "stddev: 0.00005227887017401077",
            "extra": "mean: 39.79688799999991 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.605255168539212,
            "unit": "iter/sec",
            "range": "stddev: 0.00006986745285651653",
            "extra": "mean: 37.58655925925877 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.1345526943925,
            "unit": "iter/sec",
            "range": "stddev: 0.000012860028362140479",
            "extra": "mean: 3.4114026845635976 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.7050852849062,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908798989579871",
            "extra": "mean: 2.0462238476954213 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1481.8924817768736,
            "unit": "iter/sec",
            "range": "stddev: 0.000006122724941814385",
            "extra": "mean: 674.8127899272038 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1319.9916690345053,
            "unit": "iter/sec",
            "range": "stddev: 0.00000623458362414724",
            "extra": "mean: 757.5805389222191 usec\nrounds: 1336"
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
        "date": 1643755295055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.87897114803042,
            "unit": "iter/sec",
            "range": "stddev: 0.00020994361785622883",
            "extra": "mean: 5.621800000000015 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.51778654182607,
            "unit": "iter/sec",
            "range": "stddev: 0.000245036944023199",
            "extra": "mean: 4.192559450171829 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.70438226241004,
            "unit": "iter/sec",
            "range": "stddev: 0.00008500453342667489",
            "extra": "mean: 2.8352355408388594 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.6451224375779,
            "unit": "iter/sec",
            "range": "stddev: 0.00006326552603418042",
            "extra": "mean: 1.3742963007159943 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.7153399399967,
            "unit": "iter/sec",
            "range": "stddev: 0.00014353855465609774",
            "extra": "mean: 6.222181407035268 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 213.6381768481297,
            "unit": "iter/sec",
            "range": "stddev: 0.00012586142089354355",
            "extra": "mean: 4.680811336032306 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.8617865621105,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272428419962805",
            "extra": "mean: 2.916627163461527 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.8358880311695,
            "unit": "iter/sec",
            "range": "stddev: 0.00005716420969218131",
            "extra": "mean: 1.5041305952381396 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.310509867659817,
            "unit": "iter/sec",
            "range": "stddev: 0.0008335703252722585",
            "extra": "mean: 44.82192499999963 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.303224133762292,
            "unit": "iter/sec",
            "range": "stddev: 0.001478460327637998",
            "extra": "mean: 41.14680400000054 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.18305408506643,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817913419443679",
            "extra": "mean: 3.7011943750001164 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 447.71413715705773,
            "unit": "iter/sec",
            "range": "stddev: 0.00009602369879070699",
            "extra": "mean: 2.2335680672267912 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1393.8529627859918,
            "unit": "iter/sec",
            "range": "stddev: 0.000051703180362676464",
            "extra": "mean: 717.4357889236966 usec\nrounds: 1914"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1210.0576225616571,
            "unit": "iter/sec",
            "range": "stddev: 0.00006108796100186426",
            "extra": "mean: 826.4069258809583 usec\nrounds: 1646"
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
        "date": 1643757256268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.13100124344203,
            "unit": "iter/sec",
            "range": "stddev: 0.00034303603389344807",
            "extra": "mean: 5.287340485829921 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.9949146498636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093791402249004",
            "extra": "mean: 3.9683340490797527 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.8347515325148,
            "unit": "iter/sec",
            "range": "stddev: 0.000227260649953128",
            "extra": "mean: 2.5327051282051336 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.8748890662222,
            "unit": "iter/sec",
            "range": "stddev: 0.00006762903515848683",
            "extra": "mean: 1.3317797872340444 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.51036589538458,
            "unit": "iter/sec",
            "range": "stddev: 0.00043948545098821377",
            "extra": "mean: 5.53984805825253 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 235.60602691103117,
            "unit": "iter/sec",
            "range": "stddev: 0.000326802379116011",
            "extra": "mean: 4.244373597359702 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.7363951323441,
            "unit": "iter/sec",
            "range": "stddev: 0.00023416997851189627",
            "extra": "mean: 2.5924439918533104 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 757.3488171885385,
            "unit": "iter/sec",
            "range": "stddev: 0.0001353753317535658",
            "extra": "mean: 1.3203955394189975 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.211929627467747,
            "unit": "iter/sec",
            "range": "stddev: 0.0015330064138761078",
            "extra": "mean: 41.30195384615394 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.561372713878175,
            "unit": "iter/sec",
            "range": "stddev: 0.0019102185957911898",
            "extra": "mean: 39.12152962962997 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.1139180135054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002543674321234503",
            "extra": "mean: 3.5197149333334132 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.00247351064246,
            "unit": "iter/sec",
            "range": "stddev: 0.00018412983226193233",
            "extra": "mean: 2.0746781499201585 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1388.3994049124435,
            "unit": "iter/sec",
            "range": "stddev: 0.00005785838915774515",
            "extra": "mean: 720.2538379531089 usec\nrounds: 1876"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1254.4345128541247,
            "unit": "iter/sec",
            "range": "stddev: 0.00007148190078702866",
            "extra": "mean: 797.1719446117373 usec\nrounds: 1661"
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
        "date": 1643757687073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.80456146680982,
            "unit": "iter/sec",
            "range": "stddev: 0.00001647569014247694",
            "extra": "mean: 5.030065671641789 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.60149589207003,
            "unit": "iter/sec",
            "range": "stddev: 0.000011175927143005961",
            "extra": "mean: 3.8372765151515367 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.35929781711576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011809704980514315",
            "extra": "mean: 2.497756403940943 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.3177761157601,
            "unit": "iter/sec",
            "range": "stddev: 0.000010578810731859274",
            "extra": "mean: 1.2495036719706167 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.88295553295225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001005428641386585",
            "extra": "mean: 5.43824193548378 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.91876974085673,
            "unit": "iter/sec",
            "range": "stddev: 0.000021889639571160054",
            "extra": "mean: 4.116602439024327 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.80886805400615,
            "unit": "iter/sec",
            "range": "stddev: 0.00001084025463874093",
            "extra": "mean: 2.578589821882929 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.2960596494254,
            "unit": "iter/sec",
            "range": "stddev: 0.000009816327008404371",
            "extra": "mean: 1.3310332020996176 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.7080692205453,
            "unit": "iter/sec",
            "range": "stddev: 0.000046556327174251686",
            "extra": "mean: 40.47260800000018 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.24307384720169,
            "unit": "iter/sec",
            "range": "stddev: 0.00008851259310727791",
            "extra": "mean: 38.10529230769323 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.40963104959525,
            "unit": "iter/sec",
            "range": "stddev: 0.00005839730113457665",
            "extra": "mean: 3.3623658940393986 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.6217287543253,
            "unit": "iter/sec",
            "range": "stddev: 0.00021203312334515127",
            "extra": "mean: 2.0634650505052803 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1452.059767328091,
            "unit": "iter/sec",
            "range": "stddev: 0.000006088638215275055",
            "extra": "mean: 688.6768867923955 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1308.1103134944133,
            "unit": "iter/sec",
            "range": "stddev: 0.000006302671275436111",
            "extra": "mean: 764.4615210843003 usec\nrounds: 1328"
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
        "date": 1643758453344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.12883541464075,
            "unit": "iter/sec",
            "range": "stddev: 0.000014464554121826455",
            "extra": "mean: 4.996781188118798 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.0888592197011,
            "unit": "iter/sec",
            "range": "stddev: 0.00004943503440910497",
            "extra": "mean: 3.8301136363636252 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.1716268061375,
            "unit": "iter/sec",
            "range": "stddev: 0.000023026546650769423",
            "extra": "mean: 2.5178032178217693 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.9493896650348,
            "unit": "iter/sec",
            "range": "stddev: 0.00000926440053093989",
            "extra": "mean: 1.2423141291108153 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.7096556824346,
            "unit": "iter/sec",
            "range": "stddev: 0.000015321816469139186",
            "extra": "mean: 5.413902139037431 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.69385197063755,
            "unit": "iter/sec",
            "range": "stddev: 0.000009652063012252365",
            "extra": "mean: 4.103509349593641 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.96710474426203,
            "unit": "iter/sec",
            "range": "stddev: 0.000010114963226875259",
            "extra": "mean: 2.590894373401562 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.030520099032,
            "unit": "iter/sec",
            "range": "stddev: 0.000009391290292091337",
            "extra": "mean: 1.3226979247729453 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.063013428361682,
            "unit": "iter/sec",
            "range": "stddev: 0.00022859571066238796",
            "extra": "mean: 39.89943199999985 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.610315873318637,
            "unit": "iter/sec",
            "range": "stddev: 0.00004292901415617134",
            "extra": "mean: 37.57941111111236 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.59818490812506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011268544661400387",
            "extra": "mean: 3.360235548172854 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.31486214858114,
            "unit": "iter/sec",
            "range": "stddev: 0.000009650132635331384",
            "extra": "mean: 2.0148499999998615 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1483.7492583712979,
            "unit": "iter/sec",
            "range": "stddev: 0.00000559677613341655",
            "extra": "mean: 673.9683233929253 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1321.3142961680246,
            "unit": "iter/sec",
            "range": "stddev: 0.000005875808813387665",
            "extra": "mean: 756.8222056630462 usec\nrounds: 1342"
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
        "date": 1643759038432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.1026795540751,
            "unit": "iter/sec",
            "range": "stddev: 0.000012351492447133516",
            "extra": "mean: 4.9974343283582225 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.1976533310009,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944648458293387",
            "extra": "mean: 3.813916666666693 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.5432015910138,
            "unit": "iter/sec",
            "range": "stddev: 0.000010518672316534466",
            "extra": "mean: 2.5091382716050012 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.619197905319,
            "unit": "iter/sec",
            "range": "stddev: 0.000008181167990242807",
            "extra": "mean: 1.2490332515337206 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.40486891128202,
            "unit": "iter/sec",
            "range": "stddev: 0.000018350684428949255",
            "extra": "mean: 5.393601612903216 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.5812331825496,
            "unit": "iter/sec",
            "range": "stddev: 0.000009300140459973057",
            "extra": "mean: 4.088621138211466 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.29634080111896,
            "unit": "iter/sec",
            "range": "stddev: 0.000009955817658731304",
            "extra": "mean: 2.5954048717949716 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.4802039178911,
            "unit": "iter/sec",
            "range": "stddev: 0.000008489159104713507",
            "extra": "mean: 1.332480183727016 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.76509563834186,
            "unit": "iter/sec",
            "range": "stddev: 0.000040487460198663594",
            "extra": "mean: 40.37941199999963 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.20353860647972,
            "unit": "iter/sec",
            "range": "stddev: 0.000042354963744353434",
            "extra": "mean: 38.162784615384574 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.4324441689633,
            "unit": "iter/sec",
            "range": "stddev: 0.000010217792338236834",
            "extra": "mean: 3.362107999999916 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.75894262731066,
            "unit": "iter/sec",
            "range": "stddev: 0.000008919608985065748",
            "extra": "mean: 2.041820808080609 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1428.0547565863455,
            "unit": "iter/sec",
            "range": "stddev: 0.00001549075214451807",
            "extra": "mean: 700.2532608696481 usec\nrounds: 1472"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.1170090447379,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869023925950974",
            "extra": "mean: 780.5688262195878 usec\nrounds: 1312"
          }
        ]
      }
    ]
  }
}