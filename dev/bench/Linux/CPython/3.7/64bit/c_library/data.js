window.BENCHMARK_DATA = {
  "lastUpdate": 1647985649081,
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
        "date": 1643759973474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.2154525430508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049370766380715",
            "extra": "mean: 5.04501534653464 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.63661192031356,
            "unit": "iter/sec",
            "range": "stddev: 0.000009617665769551566",
            "extra": "mean: 3.8075422641509307 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.5655249864945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010520121404433264",
            "extra": "mean: 2.521651371571082 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.4110516558592,
            "unit": "iter/sec",
            "range": "stddev: 0.000008110116536056367",
            "extra": "mean: 1.25563300248138 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.15317117876236,
            "unit": "iter/sec",
            "range": "stddev: 0.000030997847458510114",
            "extra": "mean: 5.400933689839513 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.34975808878409,
            "unit": "iter/sec",
            "range": "stddev: 0.00001021788485925877",
            "extra": "mean: 4.092494331983957 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.1358703773252,
            "unit": "iter/sec",
            "range": "stddev: 0.000016201026430850296",
            "extra": "mean: 2.5897619897960205 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.3225130700074,
            "unit": "iter/sec",
            "range": "stddev: 0.00000732697070154559",
            "extra": "mean: 1.3399033025099123 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.31668130308363,
            "unit": "iter/sec",
            "range": "stddev: 0.00007603529947728809",
            "extra": "mean: 39.499648000000604 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.718181960319008,
            "unit": "iter/sec",
            "range": "stddev: 0.00003360112728801006",
            "extra": "mean: 37.42769629629621 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.6252569737035,
            "unit": "iter/sec",
            "range": "stddev: 0.000010198233653789172",
            "extra": "mean: 3.359929900332197 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.65776697224345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010757871867005704",
            "extra": "mean: 2.029806626506186 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1460.0226512921297,
            "unit": "iter/sec",
            "range": "stddev: 0.000006142364024366127",
            "extra": "mean: 684.9208805870193 usec\nrounds: 1499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1320.5623945098912,
            "unit": "iter/sec",
            "range": "stddev: 0.000005606715131002828",
            "extra": "mean: 757.2531249999258 usec\nrounds: 1344"
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
        "date": 1643761403769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.22452277198332,
            "unit": "iter/sec",
            "range": "stddev: 0.00001550013161720195",
            "extra": "mean: 5.0447845000000076 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.93429143615526,
            "unit": "iter/sec",
            "range": "stddev: 0.00010670278260490392",
            "extra": "mean: 3.861983650190138 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.1857853554855,
            "unit": "iter/sec",
            "range": "stddev: 0.000011714148331928281",
            "extra": "mean: 2.5304553884711716 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.0072871191164,
            "unit": "iter/sec",
            "range": "stddev: 0.000008286553440919094",
            "extra": "mean: 1.2468714637146148 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.369922135772,
            "unit": "iter/sec",
            "range": "stddev: 0.00024286360501035034",
            "extra": "mean: 5.54416162162147 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.10883943342304,
            "unit": "iter/sec",
            "range": "stddev: 0.000009912562618276424",
            "extra": "mean: 4.130373770491712 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.7761296507803,
            "unit": "iter/sec",
            "range": "stddev: 0.00001142406179532932",
            "extra": "mean: 2.619336103896081 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.0178122538388,
            "unit": "iter/sec",
            "range": "stddev: 0.000009055217753743895",
            "extra": "mean: 1.3350817345597445 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.912482449156073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000609054800487252",
            "extra": "mean: 40.140520000000066 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.226275055927513,
            "unit": "iter/sec",
            "range": "stddev: 0.00006351774555265413",
            "extra": "mean: 38.12970000000003 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.18371124771005,
            "unit": "iter/sec",
            "range": "stddev: 0.000014452438076610003",
            "extra": "mean: 3.3877208053693297 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.8365438646378,
            "unit": "iter/sec",
            "range": "stddev: 0.000010736689830681273",
            "extra": "mean: 2.0249615230461826 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1466.6066196106797,
            "unit": "iter/sec",
            "range": "stddev: 0.00000565911275641425",
            "extra": "mean: 681.8460973982625 usec\nrounds: 1499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1291.6534941237326,
            "unit": "iter/sec",
            "range": "stddev: 0.000006717573981341718",
            "extra": "mean: 774.2014437691028 usec\nrounds: 1316"
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
        "date": 1643775001737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.19763774967169,
            "unit": "iter/sec",
            "range": "stddev: 0.000449629654042553",
            "extra": "mean: 6.12753967391303 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 216.4221482329636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004925763485723914",
            "extra": "mean: 4.620599176954701 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.1101564825601,
            "unit": "iter/sec",
            "range": "stddev: 0.00006043405482906866",
            "extra": "mean: 2.86442540106952 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 705.6908478169904,
            "unit": "iter/sec",
            "range": "stddev: 0.00003017215941236294",
            "extra": "mean: 1.4170511111110995 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.416701053977,
            "unit": "iter/sec",
            "range": "stddev: 0.00011809815770942545",
            "extra": "mean: 6.272868484848456 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.98682304915152,
            "unit": "iter/sec",
            "range": "stddev: 0.00011754527243485874",
            "extra": "mean: 4.7172743362833405 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.43032631691216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000851386300880358",
            "extra": "mean: 2.9374586301370917 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.5490098140314,
            "unit": "iter/sec",
            "range": "stddev: 0.00004743418616895726",
            "extra": "mean: 1.4957766526019798 msec\nrounds: 711"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.012386324183865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006375320368657309",
            "extra": "mean: 47.590977272727294 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.62776330235984,
            "unit": "iter/sec",
            "range": "stddev: 0.0005219383192480076",
            "extra": "mean: 42.32309200000003 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.9702822042596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747114725412906",
            "extra": "mean: 3.8764154981549575 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 423.1956763172204,
            "unit": "iter/sec",
            "range": "stddev: 0.00007431509774721432",
            "extra": "mean: 2.362973101952055 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1340.918337235106,
            "unit": "iter/sec",
            "range": "stddev: 0.00003731090249633556",
            "extra": "mean: 745.7575694444903 usec\nrounds: 1440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1183.1433124991781,
            "unit": "iter/sec",
            "range": "stddev: 0.000028367876988656308",
            "extra": "mean: 845.2061465721167 usec\nrounds: 1269"
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
        "date": 1643775285145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.22420180246377,
            "unit": "iter/sec",
            "range": "stddev: 0.000013970873917906139",
            "extra": "mean: 4.440020175438628 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.8048461168182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000111977971280209",
            "extra": "mean: 3.392074496644278 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.7201064860892,
            "unit": "iter/sec",
            "range": "stddev: 0.000010212027507528197",
            "extra": "mean: 2.2088703056768852 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.3549972883462,
            "unit": "iter/sec",
            "range": "stddev: 0.000009166000072322473",
            "extra": "mean: 1.1045391067538453 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.73712260130884,
            "unit": "iter/sec",
            "range": "stddev: 0.00001242110424790823",
            "extra": "mean: 4.790714691943013 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.56674152402474,
            "unit": "iter/sec",
            "range": "stddev: 0.000011763860151530567",
            "extra": "mean: 3.6288849462365795 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.3384099855883,
            "unit": "iter/sec",
            "range": "stddev: 0.000009856500121064354",
            "extra": "mean: 2.2709806306307203 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.9821744379647,
            "unit": "iter/sec",
            "range": "stddev: 0.000009267564360703364",
            "extra": "mean: 1.1751127462340265 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.32597769553905,
            "unit": "iter/sec",
            "range": "stddev: 0.000048186987491992734",
            "extra": "mean: 35.30328275862076 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.88728012301649,
            "unit": "iter/sec",
            "range": "stddev: 0.00016075648053658482",
            "extra": "mean: 33.4590499999995 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.835446348817,
            "unit": "iter/sec",
            "range": "stddev: 0.000012723688157044669",
            "extra": "mean: 2.951285087719369 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.3222522292023,
            "unit": "iter/sec",
            "range": "stddev: 0.000009882003606710628",
            "extra": "mean: 1.7975193262411593 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1656.0545926961809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051624542581570425",
            "extra": "mean: 603.8448275862241 usec\nrounds: 1682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1478.619360540906,
            "unit": "iter/sec",
            "range": "stddev: 0.000005194856350109416",
            "extra": "mean: 676.3065780730625 usec\nrounds: 1505"
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
        "date": 1643781756858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.71709725407885,
            "unit": "iter/sec",
            "range": "stddev: 0.000018605814824253428",
            "extra": "mean: 5.007082587064673 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.0624730379116,
            "unit": "iter/sec",
            "range": "stddev: 0.000012805727862764218",
            "extra": "mean: 3.8305007547169736 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.095272713797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000133498491111416",
            "extra": "mean: 2.518287344913172 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.3376722088816,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880649507241133",
            "extra": "mean: 1.23253243902441 msec\nrounds: 820"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.74676888894854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001890736871305255",
            "extra": "mean: 5.472052972973106 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.68827554288904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010091288908308729",
            "extra": "mean: 4.103603252032536 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.9330698855377,
            "unit": "iter/sec",
            "range": "stddev: 0.000012059715791301754",
            "extra": "mean: 2.597854219948825 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.5063281253537,
            "unit": "iter/sec",
            "range": "stddev: 0.000012043365335212628",
            "extra": "mean: 1.3306607843137108 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.08848457625173,
            "unit": "iter/sec",
            "range": "stddev: 0.00011534767473458365",
            "extra": "mean: 39.8589240000004 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.447084037568143,
            "unit": "iter/sec",
            "range": "stddev: 0.00017174426061478123",
            "extra": "mean: 37.811351851852464 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.9503397417545,
            "unit": "iter/sec",
            "range": "stddev: 0.000014089614508410838",
            "extra": "mean: 3.367566445182918 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.77189928279637,
            "unit": "iter/sec",
            "range": "stddev: 0.000018137223391623057",
            "extra": "mean: 2.0543503054991206 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1501.8543923323687,
            "unit": "iter/sec",
            "range": "stddev: 0.00000600649479480553",
            "extra": "mean: 665.8435099337477 usec\nrounds: 1510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1312.966524928075,
            "unit": "iter/sec",
            "range": "stddev: 0.000006000784063727738",
            "extra": "mean: 761.6340409400617 usec\nrounds: 1319"
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
        "date": 1643823741545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.86585256025717,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765795370785741",
            "extra": "mean: 5.105535175879394 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.09454734614354,
            "unit": "iter/sec",
            "range": "stddev: 0.000014219859084558535",
            "extra": "mean: 3.8447557251908195 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.41531229525634,
            "unit": "iter/sec",
            "range": "stddev: 0.00002031783866963546",
            "extra": "mean: 2.528986533665901 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.3105235182359,
            "unit": "iter/sec",
            "range": "stddev: 0.000011145478834388377",
            "extra": "mean: 1.2542164821647788 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.34777667626142,
            "unit": "iter/sec",
            "range": "stddev: 0.000036328911583594303",
            "extra": "mean: 5.514266666666561 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.07606078159867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006898814376003718",
            "extra": "mean: 4.148068442622943 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.0463039197928,
            "unit": "iter/sec",
            "range": "stddev: 0.000017976013384712018",
            "extra": "mean: 2.624352971576105 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.0274742543329,
            "unit": "iter/sec",
            "range": "stddev: 0.000008227781144545526",
            "extra": "mean: 1.347658994708929 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.916976633856248,
            "unit": "iter/sec",
            "range": "stddev: 0.0005360865687247245",
            "extra": "mean: 40.13327999999959 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.404166225374446,
            "unit": "iter/sec",
            "range": "stddev: 0.000046125809006100666",
            "extra": "mean: 37.87281111111164 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.29303994016453,
            "unit": "iter/sec",
            "range": "stddev: 0.00026557616208156665",
            "extra": "mean: 3.3979736666668003 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.3062992585722,
            "unit": "iter/sec",
            "range": "stddev: 0.000010728813171152511",
            "extra": "mean: 2.043709638554139 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1468.8196307109713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056546152355934045",
            "extra": "mean: 680.8187874749177 usec\nrounds: 1501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1306.9026289688188,
            "unit": "iter/sec",
            "range": "stddev: 0.000005997255552796337",
            "extra": "mean: 765.1679458239569 usec\nrounds: 1329"
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
        "date": 1643830173658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.06097654803625,
            "unit": "iter/sec",
            "range": "stddev: 0.000012208383523714957",
            "extra": "mean: 5.100454040404075 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.2020192731089,
            "unit": "iter/sec",
            "range": "stddev: 0.000011252420678091032",
            "extra": "mean: 3.857994636015344 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.53945615386294,
            "unit": "iter/sec",
            "range": "stddev: 0.00000986064114705889",
            "extra": "mean: 2.534600746268629 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 801.420540141625,
            "unit": "iter/sec",
            "range": "stddev: 0.000007155028545292278",
            "extra": "mean: 1.2477843403206044 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.44431610678174,
            "unit": "iter/sec",
            "range": "stddev: 0.000014424409034438045",
            "extra": "mean: 5.392454301075394 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.0809713598812,
            "unit": "iter/sec",
            "range": "stddev: 0.000012579687714808262",
            "extra": "mean: 4.147983950617233 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.984226843724,
            "unit": "iter/sec",
            "range": "stddev: 0.000010524154854871704",
            "extra": "mean: 2.611073589743549 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.3483950612413,
            "unit": "iter/sec",
            "range": "stddev: 0.000006350684128390586",
            "extra": "mean: 1.3434569169961401 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.24560863129604,
            "unit": "iter/sec",
            "range": "stddev: 0.007334572434869243",
            "extra": "mean: 44.95269230769253 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.89887494797539,
            "unit": "iter/sec",
            "range": "stddev: 0.00004562620542751593",
            "extra": "mean: 35.84373928571516 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.06647616893537,
            "unit": "iter/sec",
            "range": "stddev: 0.000009625070150831",
            "extra": "mean: 3.3215255737702156 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 520.2425794220767,
            "unit": "iter/sec",
            "range": "stddev: 0.000010886361442977372",
            "extra": "mean: 1.922180228136791 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1427.790831693615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054736053686795885",
            "extra": "mean: 700.3827015850924 usec\nrounds: 1451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.1209342494199,
            "unit": "iter/sec",
            "range": "stddev: 0.000005550904541073831",
            "extra": "mean: 780.566434648012 usec\nrounds: 1293"
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
        "date": 1643842688279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.5266116670756,
            "unit": "iter/sec",
            "range": "stddev: 0.0008935342085555441",
            "extra": "mean: 7.6612729559748685 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 193.3739430072862,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896584678390844",
            "extra": "mean: 5.171327555555512 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.05513732829394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591186165386346",
            "extra": "mean: 3.635634693877553 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.9974695601975,
            "unit": "iter/sec",
            "range": "stddev: 0.0002334877324553657",
            "extra": "mean: 1.763676301369862 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.51330699973764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005786215263118937",
            "extra": "mean: 7.781295364238362 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.7534092334203,
            "unit": "iter/sec",
            "range": "stddev: 0.00044846132481106383",
            "extra": "mean: 5.722349019607895 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.77462487614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005612610655086173",
            "extra": "mean: 3.6660301538461444 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.5401408848377,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743904287424425",
            "extra": "mean: 1.8197032857142303 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.768731576732492,
            "unit": "iter/sec",
            "range": "stddev: 0.0025658739813621016",
            "extra": "mean: 43.919881818182006 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.741359017929746,
            "unit": "iter/sec",
            "range": "stddev: 0.0022222776269613088",
            "extra": "mean: 43.97274583333299 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.2527123992188,
            "unit": "iter/sec",
            "range": "stddev: 0.0006490196313378729",
            "extra": "mean: 4.96887713004499 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 353.64036739302895,
            "unit": "iter/sec",
            "range": "stddev: 0.00030465139132513367",
            "extra": "mean: 2.8277314814816363 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1017.8184915392793,
            "unit": "iter/sec",
            "range": "stddev: 0.0001797992660609951",
            "extra": "mean: 982.4934487952445 usec\nrounds: 1328"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 986.6191599009867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002385448441675122",
            "extra": "mean: 1.0135623152710274 msec\nrounds: 1218"
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
        "date": 1643898390147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.30197184265802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951411120093808",
            "extra": "mean: 5.017511822660064 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.260193979515,
            "unit": "iter/sec",
            "range": "stddev: 0.000008995027325212672",
            "extra": "mean: 3.8130071698113266 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.05923209138786,
            "unit": "iter/sec",
            "range": "stddev: 0.000010540270138195176",
            "extra": "mean: 2.4933972839506504 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.0293687235117,
            "unit": "iter/sec",
            "range": "stddev: 0.00000773153866006302",
            "extra": "mean: 1.2330009720534676 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.81739892736823,
            "unit": "iter/sec",
            "range": "stddev: 0.00001698462057214369",
            "extra": "mean: 5.410745989304784 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.82623680236844,
            "unit": "iter/sec",
            "range": "stddev: 0.000008665405081974435",
            "extra": "mean: 4.118171138211397 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.27018475824553,
            "unit": "iter/sec",
            "range": "stddev: 0.000019788894836313586",
            "extra": "mean: 2.5955810741687504 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.0908783075434,
            "unit": "iter/sec",
            "range": "stddev: 0.000007964006261890165",
            "extra": "mean: 1.334951511169576 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.307505661094257,
            "unit": "iter/sec",
            "range": "stddev: 0.000045019584797774256",
            "extra": "mean: 39.51396923076936 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.676509969506636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004886998566184964",
            "extra": "mean: 37.486162962961764 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.97799728497,
            "unit": "iter/sec",
            "range": "stddev: 0.00001569590712075255",
            "extra": "mean: 3.3672528239202646 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.64648722066465,
            "unit": "iter/sec",
            "range": "stddev: 0.000009498548108704051",
            "extra": "mean: 2.0506658536586375 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1469.9895416264549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072854614324406806",
            "extra": "mean: 680.2769487009821 usec\nrounds: 1501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1295.4773283107352,
            "unit": "iter/sec",
            "range": "stddev: 0.000005619314571468723",
            "extra": "mean: 771.9162490508197 usec\nrounds: 1317"
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
        "date": 1643987854330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.49020575151965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007616160010090159",
            "extra": "mean: 7.168962111801212 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.6440121529416,
            "unit": "iter/sec",
            "range": "stddev: 0.0009107786573325616",
            "extra": "mean: 5.505273684210491 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.193392956064,
            "unit": "iter/sec",
            "range": "stddev: 0.00044884546977776304",
            "extra": "mean: 3.4578936599423837 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 604.7428820024567,
            "unit": "iter/sec",
            "range": "stddev: 0.00028123974854700316",
            "extra": "mean: 1.6535953208556122 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.1077328131527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186550313861046",
            "extra": "mean: 7.569579605263195 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.65473350273848,
            "unit": "iter/sec",
            "range": "stddev: 0.00047830725655003585",
            "extra": "mean: 5.597388775510231 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.01058748581437,
            "unit": "iter/sec",
            "range": "stddev: 0.00047664694743263967",
            "extra": "mean: 3.662861609907198 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 587.9347710342944,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096464034828554",
            "extra": "mean: 1.700868955650983 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.68061097073663,
            "unit": "iter/sec",
            "range": "stddev: 0.0031029105208525832",
            "extra": "mean: 48.35447083333344 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.54441111045309,
            "unit": "iter/sec",
            "range": "stddev: 0.0015193472156817044",
            "extra": "mean: 46.41574999999939 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.57469588328337,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354576347285703",
            "extra": "mean: 5.035888362068911 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 355.01426493229974,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907778570091891",
            "extra": "mean: 2.8167882217090554 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1133.5849844200652,
            "unit": "iter/sec",
            "range": "stddev: 0.00018978073666041855",
            "extra": "mean: 882.1570625440081 usec\nrounds: 1423"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1004.0051687375279,
            "unit": "iter/sec",
            "range": "stddev: 0.00024799366162276147",
            "extra": "mean: 996.0108086469673 usec\nrounds: 1249"
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
        "date": 1643988153564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.017364429114,
            "unit": "iter/sec",
            "range": "stddev: 0.0003136238499550517",
            "extra": "mean: 5.127748510638321 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.2691947901505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669853842050271",
            "extra": "mean: 3.8569950464396223 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.21054276233764,
            "unit": "iter/sec",
            "range": "stddev: 0.00023108559451635342",
            "extra": "mean: 2.4986847999999924 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.3573842315719,
            "unit": "iter/sec",
            "range": "stddev: 0.00013277732841566933",
            "extra": "mean: 1.2355481268011532 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.84072941632039,
            "unit": "iter/sec",
            "range": "stddev: 0.0003872793463519556",
            "extra": "mean: 5.529727751196257 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.77338488329008,
            "unit": "iter/sec",
            "range": "stddev: 0.0003066142035533013",
            "extra": "mean: 4.11906766666674 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 375.5432627384234,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241870761523137",
            "extra": "mean: 2.662809053497862 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.7443760139565,
            "unit": "iter/sec",
            "range": "stddev: 0.00015100550353198445",
            "extra": "mean: 1.337355427974941 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.0332362569158,
            "unit": "iter/sec",
            "range": "stddev: 0.0013902608047862315",
            "extra": "mean: 39.946892592592185 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.015031935627086,
            "unit": "iter/sec",
            "range": "stddev: 0.001531346676974384",
            "extra": "mean: 37.016428571428506 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.86590451824145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002787653482550571",
            "extra": "mean: 3.3799095628416542 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.80532797490713,
            "unit": "iter/sec",
            "range": "stddev: 0.00019787287114061587",
            "extra": "mean: 2.0929025723474495 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1449.297769822634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000692086860740295",
            "extra": "mean: 689.9893319523844 usec\nrounds: 1931"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1322.5678053162699,
            "unit": "iter/sec",
            "range": "stddev: 0.00009712781108673244",
            "extra": "mean: 756.104901374691 usec\nrounds: 1673"
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
        "date": 1644011177260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.33072747674137,
            "unit": "iter/sec",
            "range": "stddev: 0.00013388480771607016",
            "extra": "mean: 5.11952222222217 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.9726057318712,
            "unit": "iter/sec",
            "range": "stddev: 0.000009384726040918372",
            "extra": "mean: 3.8914653846154086 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.51769833770845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001711635812176663",
            "extra": "mean: 2.69166180904524 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.5883829582376,
            "unit": "iter/sec",
            "range": "stddev: 0.000008414417826944907",
            "extra": "mean: 1.2616889440993626 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.6462630599189,
            "unit": "iter/sec",
            "range": "stddev: 0.000014281455457133487",
            "extra": "mean: 5.505205464480897 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.73326157758427,
            "unit": "iter/sec",
            "range": "stddev: 0.000008144817673598406",
            "extra": "mean: 4.1539752066114755 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.9560476014444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010391565614127428",
            "extra": "mean: 2.611265721649432 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.4357630617834,
            "unit": "iter/sec",
            "range": "stddev: 0.000008097556248639601",
            "extra": "mean: 1.3414972148540687 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.26351792543782,
            "unit": "iter/sec",
            "range": "stddev: 0.000028946692650491837",
            "extra": "mean: 39.582769230768946 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.568691827480585,
            "unit": "iter/sec",
            "range": "stddev: 0.00006431245664520282",
            "extra": "mean: 37.638285185184685 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.79356814197075,
            "unit": "iter/sec",
            "range": "stddev: 0.000010788001335844838",
            "extra": "mean: 3.38073612040149 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.35448209223165,
            "unit": "iter/sec",
            "range": "stddev: 0.000008604377506498193",
            "extra": "mean: 2.0774710472279168 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1425.525741462668,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283195615889195",
            "extra": "mean: 701.4955752212127 usec\nrounds: 1469"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1284.5943472530691,
            "unit": "iter/sec",
            "range": "stddev: 0.000005517460965266752",
            "extra": "mean: 778.4558620691149 usec\nrounds: 1305"
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
        "date": 1644244335977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.68382734980528,
            "unit": "iter/sec",
            "range": "stddev: 0.00003578642581340387",
            "extra": "mean: 5.00791683168314 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.3490066469429,
            "unit": "iter/sec",
            "range": "stddev: 0.000017354345109172986",
            "extra": "mean: 3.8263011320754816 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.49422933429094,
            "unit": "iter/sec",
            "range": "stddev: 0.000014154847635200968",
            "extra": "mean: 2.4906958230958356 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 803.1529264195842,
            "unit": "iter/sec",
            "range": "stddev: 0.000008440695954115886",
            "extra": "mean: 1.2450928921568527 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.28334535303338,
            "unit": "iter/sec",
            "range": "stddev: 0.000023700320549192485",
            "extra": "mean: 5.426426344086007 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.04167797130143,
            "unit": "iter/sec",
            "range": "stddev: 0.000011616460333684147",
            "extra": "mean: 4.097660728744854 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.2316296864621,
            "unit": "iter/sec",
            "range": "stddev: 0.000013341886564232321",
            "extra": "mean: 2.5757818877550114 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.6065548033653,
            "unit": "iter/sec",
            "range": "stddev: 0.000008945289460175362",
            "extra": "mean: 1.3340331585845286 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.989159702521054,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225647217650505",
            "extra": "mean: 40.01735199999999 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.36693516018989,
            "unit": "iter/sec",
            "range": "stddev: 0.00008459687816311817",
            "extra": "mean: 37.92628888889027 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.8519394244403,
            "unit": "iter/sec",
            "range": "stddev: 0.000013467738014128005",
            "extra": "mean: 3.368682724252629 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.51450308147497,
            "unit": "iter/sec",
            "range": "stddev: 0.000012099341535865897",
            "extra": "mean: 2.04702213279678 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1468.46050454344,
            "unit": "iter/sec",
            "range": "stddev: 0.000006594357637671792",
            "extra": "mean: 680.9852882702559 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1307.381043193078,
            "unit": "iter/sec",
            "range": "stddev: 0.000006114803198522363",
            "extra": "mean: 764.8879454131085 usec\nrounds: 1319"
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
        "date": 1644418223957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.33700827633064,
            "unit": "iter/sec",
            "range": "stddev: 0.00021111201032575453",
            "extra": "mean: 5.607361083743842 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.06910441702416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317617587911832",
            "extra": "mean: 4.200461048689066 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.5596438330528,
            "unit": "iter/sec",
            "range": "stddev: 0.000177344977861539",
            "extra": "mean: 2.676948692152916 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 764.3881017532037,
            "unit": "iter/sec",
            "range": "stddev: 0.00009776393344418205",
            "extra": "mean: 1.3082359572400406 msec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.99101552775159,
            "unit": "iter/sec",
            "range": "stddev: 0.00028669628528068506",
            "extra": "mean: 6.135307499999811 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.21740206112221,
            "unit": "iter/sec",
            "range": "stddev: 0.00026941745864487803",
            "extra": "mean: 4.479937454545664 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.33989584919766,
            "unit": "iter/sec",
            "range": "stddev: 0.00017106997260125093",
            "extra": "mean: 2.790646566523634 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.5730801959627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011534018812389225",
            "extra": "mean: 1.413281578947364 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.480379515722017,
            "unit": "iter/sec",
            "range": "stddev: 0.001016015637231466",
            "extra": "mean: 44.483234782608264 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.086370255298064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856080888291151",
            "extra": "mean: 41.5172560000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.70457632635316,
            "unit": "iter/sec",
            "range": "stddev: 0.00019619624612220442",
            "extra": "mean: 3.7354609836064983 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 461.6132148886516,
            "unit": "iter/sec",
            "range": "stddev: 0.00015580504998203976",
            "extra": "mean: 2.166315798045807 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1393.4878229016274,
            "unit": "iter/sec",
            "range": "stddev: 0.00005908200537901399",
            "extra": "mean: 717.6237808219402 usec\nrounds: 1825"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1251.0821521058972,
            "unit": "iter/sec",
            "range": "stddev: 0.00007321237748392242",
            "extra": "mean: 799.3080217128343 usec\nrounds: 1658"
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
        "date": 1644419379698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.67300444881778,
            "unit": "iter/sec",
            "range": "stddev: 0.000027303967812781104",
            "extra": "mean: 5.791293220338975 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.80223405250695,
            "unit": "iter/sec",
            "range": "stddev: 0.00002009868420333997",
            "extra": "mean: 4.370586695279006 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.7996071410224,
            "unit": "iter/sec",
            "range": "stddev: 0.00002565931778695042",
            "extra": "mean: 2.8752188888888814 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.3491132399305,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105881185776622",
            "extra": "mean: 1.409743074792228 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.6456259004887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005890313060386647",
            "extra": "mean: 6.224881595092082 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.6373560313465,
            "unit": "iter/sec",
            "range": "stddev: 0.000016804803560617935",
            "extra": "mean: 4.702842523364438 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.30609693801415,
            "unit": "iter/sec",
            "range": "stddev: 0.00018639869598168518",
            "extra": "mean: 3.0274948275861275 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.8926731500521,
            "unit": "iter/sec",
            "range": "stddev: 0.00000972131068588271",
            "extra": "mean: 1.5085398293030166 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.051076909445356,
            "unit": "iter/sec",
            "range": "stddev: 0.00005532196376974094",
            "extra": "mean: 45.34925909090907 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.34168738808768,
            "unit": "iter/sec",
            "range": "stddev: 0.00007667956180972057",
            "extra": "mean: 42.84180416666642 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.9384586660304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003278831976014004",
            "extra": "mean: 3.9071892720307524 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 435.8595385700467,
            "unit": "iter/sec",
            "range": "stddev: 0.000014809708693239321",
            "extra": "mean: 2.2943171171170564 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.3366336083875,
            "unit": "iter/sec",
            "range": "stddev: 0.000013252168344987672",
            "extra": "mean: 759.1074099722304 usec\nrounds: 1444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1152.3249534313998,
            "unit": "iter/sec",
            "range": "stddev: 0.00000907818503161009",
            "extra": "mean: 867.8107655502854 usec\nrounds: 1254"
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
        "date": 1644539071214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.30814844979193,
            "unit": "iter/sec",
            "range": "stddev: 0.0005440643682763463",
            "extra": "mean: 5.455294859813065 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.48023360842134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651975025182679",
            "extra": "mean: 4.193219642857175 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.58961685885225,
            "unit": "iter/sec",
            "range": "stddev: 0.00015638665642873654",
            "extra": "mean: 2.6839180555555555 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 774.9327175807009,
            "unit": "iter/sec",
            "range": "stddev: 0.00009551837110379977",
            "extra": "mean: 1.2904346110484886 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.7951650185144,
            "unit": "iter/sec",
            "range": "stddev: 0.00027151678651764357",
            "extra": "mean: 5.753899999999827 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.87648320448423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250908189561817",
            "extra": "mean: 4.331320306513476 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.2320365227251,
            "unit": "iter/sec",
            "range": "stddev: 0.00016711465477473842",
            "extra": "mean: 2.701008830548945 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 734.1194610798394,
            "unit": "iter/sec",
            "range": "stddev: 0.0001022770301561897",
            "extra": "mean: 1.362176121212028 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.63803102009352,
            "unit": "iter/sec",
            "range": "stddev: 0.0013701178379731595",
            "extra": "mean: 42.30470800000006 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.878468680496205,
            "unit": "iter/sec",
            "range": "stddev: 0.0013105936062721188",
            "extra": "mean: 40.19539999999931 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 282.5332607394755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001927075161331054",
            "extra": "mean: 3.539406289308012 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 469.5647292356068,
            "unit": "iter/sec",
            "range": "stddev: 0.00013565099084119337",
            "extra": "mean: 2.129631843575381 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1453.3349621410896,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367656973670749",
            "extra": "mean: 688.0726233453951 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.5331304916654,
            "unit": "iter/sec",
            "range": "stddev: 0.000050090649326533",
            "extra": "mean: 820.6588520055343 usec\nrounds: 1446"
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
        "date": 1644540082176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.2053452250472,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597811632210882",
            "extra": "mean: 8.182948120300717 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.446614747171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828142306761519",
            "extra": "mean: 6.155868508287366 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.60028405225324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006936732293379066",
            "extra": "mean: 4.262569433962266 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.5003940955684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384591461014516",
            "extra": "mean: 1.958862346760098 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.91171359073911,
            "unit": "iter/sec",
            "range": "stddev: 0.0004945305771136334",
            "extra": "mean: 8.856477049180297 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.05927263842247,
            "unit": "iter/sec",
            "range": "stddev: 0.00041867737802953335",
            "extra": "mean: 6.4910081871345895 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.38116104144757,
            "unit": "iter/sec",
            "range": "stddev: 0.000318070105358645",
            "extra": "mean: 4.266554511278156 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.95101430743557,
            "unit": "iter/sec",
            "range": "stddev: 0.00048064300629713767",
            "extra": "mean: 2.074899668874028 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.790136906816645,
            "unit": "iter/sec",
            "range": "stddev: 0.0025065554991703766",
            "extra": "mean: 53.219409999999634 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.286132086310115,
            "unit": "iter/sec",
            "range": "stddev: 0.002220537764404478",
            "extra": "mean: 51.85072857142934 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.15131921668643,
            "unit": "iter/sec",
            "range": "stddev: 0.0004449412435787326",
            "extra": "mean: 5.70934894736854 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.20547396884217,
            "unit": "iter/sec",
            "range": "stddev: 0.0004109060622445758",
            "extra": "mean: 3.3310518518519365 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 974.2409073567375,
            "unit": "iter/sec",
            "range": "stddev: 0.00016921665444232537",
            "extra": "mean: 1.0264401673638925 msec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 887.4475957113258,
            "unit": "iter/sec",
            "range": "stddev: 0.00018119066000349166",
            "extra": "mean: 1.126827099236726 msec\nrounds: 1048"
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
        "date": 1644597354868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.31469204349386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001310060300115034",
            "extra": "mean: 5.042490748898637 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.63227326471593,
            "unit": "iter/sec",
            "range": "stddev: 0.000007676261842410849",
            "extra": "mean: 3.866493486590042 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.33731928295475,
            "unit": "iter/sec",
            "range": "stddev: 0.000010356775533998195",
            "extra": "mean: 2.542347117794411 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.1196187598224,
            "unit": "iter/sec",
            "range": "stddev: 0.000020716998944909054",
            "extra": "mean: 1.2576724009901015 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.62182638208782,
            "unit": "iter/sec",
            "range": "stddev: 0.000020051214391738532",
            "extra": "mean: 5.445975675675717 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.02560215970607,
            "unit": "iter/sec",
            "range": "stddev: 0.00001012857344337737",
            "extra": "mean: 4.131794285714151 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.7521727398991,
            "unit": "iter/sec",
            "range": "stddev: 0.00001111410537467823",
            "extra": "mean: 2.5990756410257414 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.5870548927043,
            "unit": "iter/sec",
            "range": "stddev: 0.000008455751202503708",
            "extra": "mean: 1.3287499346405436 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.852152062167082,
            "unit": "iter/sec",
            "range": "stddev: 0.00010350613057562217",
            "extra": "mean: 40.237963999999806 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.413532415714513,
            "unit": "iter/sec",
            "range": "stddev: 0.000044895348714414234",
            "extra": "mean: 37.859381481480995 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.21208151005345,
            "unit": "iter/sec",
            "range": "stddev: 0.000012783194758715348",
            "extra": "mean: 3.375959531772373 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.14727850560786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001079294639467192",
            "extra": "mean: 2.0443740442655565 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1480.7965577072541,
            "unit": "iter/sec",
            "range": "stddev: 0.000007003541100003953",
            "extra": "mean: 675.312212737933 usec\nrounds: 1523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1331.2222269344022,
            "unit": "iter/sec",
            "range": "stddev: 0.000005894114086915158",
            "extra": "mean: 751.189380531036 usec\nrounds: 1356"
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
        "date": 1644600112442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.60426028088247,
            "unit": "iter/sec",
            "range": "stddev: 0.0007881702547467973",
            "extra": "mean: 6.345006145251397 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.9918894925342,
            "unit": "iter/sec",
            "range": "stddev: 0.0005724599404485371",
            "extra": "mean: 4.484468032786816 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.71340701737324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007222422848109746",
            "extra": "mean: 2.8033709424083866 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.7230113770386,
            "unit": "iter/sec",
            "range": "stddev: 0.00003878769226750715",
            "extra": "mean: 1.3874955901426886 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.3439483280217,
            "unit": "iter/sec",
            "range": "stddev: 0.00005042707692179477",
            "extra": "mean: 6.275732530120464 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.14595722143738,
            "unit": "iter/sec",
            "range": "stddev: 0.00003351842909131902",
            "extra": "mean: 4.73606036866365 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.90590582688304,
            "unit": "iter/sec",
            "range": "stddev: 0.00004716849656155238",
            "extra": "mean: 2.924781300813006 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.900675790527,
            "unit": "iter/sec",
            "range": "stddev: 0.00001428175553585616",
            "extra": "mean: 1.5108006934811955 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.79744002420086,
            "unit": "iter/sec",
            "range": "stddev: 0.0018578446151283957",
            "extra": "mean: 48.082840909090436 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.05411869775953,
            "unit": "iter/sec",
            "range": "stddev: 0.0016888274551180625",
            "extra": "mean: 45.343004347826856 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.06473932664738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984310688725322",
            "extra": "mean: 4.131126254826311 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 440.51941330045463,
            "unit": "iter/sec",
            "range": "stddev: 0.000028701688361728267",
            "extra": "mean: 2.2700475161986873 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1313.4247855232138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012964437384464083",
            "extra": "mean: 761.3683029452209 usec\nrounds: 1426"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1168.2292004158553,
            "unit": "iter/sec",
            "range": "stddev: 0.000024274884038477732",
            "extra": "mean: 855.9964086191558 usec\nrounds: 1253"
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
        "date": 1644600543759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.6233164529259,
            "unit": "iter/sec",
            "range": "stddev: 0.000015788256496356956",
            "extra": "mean: 5.06013165829145 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.8638087847981,
            "unit": "iter/sec",
            "range": "stddev: 0.000008417087111170647",
            "extra": "mean: 3.8780160919540148 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.2553975771451,
            "unit": "iter/sec",
            "range": "stddev: 0.000010133051375309688",
            "extra": "mean: 2.5300097256858387 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.4016195139442,
            "unit": "iter/sec",
            "range": "stddev: 0.00000834046373070944",
            "extra": "mean: 1.2462587009803785 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.2605151017136,
            "unit": "iter/sec",
            "range": "stddev: 0.000017011259353076233",
            "extra": "mean: 5.486651891891849 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.80570990489747,
            "unit": "iter/sec",
            "range": "stddev: 0.000009419830528034652",
            "extra": "mean: 4.135551639344255 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.4012737155904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010856442702888963",
            "extra": "mean: 2.6014481958763667 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.4754267650425,
            "unit": "iter/sec",
            "range": "stddev: 0.000008113679695642326",
            "extra": "mean: 1.3254242146595696 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.175019251337208,
            "unit": "iter/sec",
            "range": "stddev: 0.00016470466164265036",
            "extra": "mean: 39.72191600000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.606809884882498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649133632570919",
            "extra": "mean: 37.58436296296392 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.54653869533246,
            "unit": "iter/sec",
            "range": "stddev: 0.00002608353805711135",
            "extra": "mean: 3.3835618729098416 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.0993938099862,
            "unit": "iter/sec",
            "range": "stddev: 0.000010202148784054372",
            "extra": "mean: 2.0157250996017457 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.0814878227466,
            "unit": "iter/sec",
            "range": "stddev: 0.000006101248755969577",
            "extra": "mean: 679.31022044101 usec\nrounds: 1497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1302.1914542554937,
            "unit": "iter/sec",
            "range": "stddev: 0.000005411222423426988",
            "extra": "mean: 767.9362329802213 usec\nrounds: 1322"
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
        "date": 1644601039410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 170.438647531456,
            "unit": "iter/sec",
            "range": "stddev: 0.00039543516058971413",
            "extra": "mean: 5.867213888888909 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.26326502613148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006938765029013677",
            "extra": "mean: 4.4001831967212865 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.1671355532547,
            "unit": "iter/sec",
            "range": "stddev: 0.000024319797953939177",
            "extra": "mean: 2.888777984084971 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 711.6509556987974,
            "unit": "iter/sec",
            "range": "stddev: 0.00002768409287115064",
            "extra": "mean: 1.4051832460732967 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 158.6333510190644,
            "unit": "iter/sec",
            "range": "stddev: 0.00007189437258543279",
            "extra": "mean: 6.303844642857106 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.42734020753753,
            "unit": "iter/sec",
            "range": "stddev: 0.00006582118985257114",
            "extra": "mean: 4.7297572727273485 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.70398311457734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001366731174274188",
            "extra": "mean: 2.996667857142867 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 657.3442524643053,
            "unit": "iter/sec",
            "range": "stddev: 0.00002948215173121112",
            "extra": "mean: 1.5212729041915543 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.217933195118526,
            "unit": "iter/sec",
            "range": "stddev: 0.000258070013940101",
            "extra": "mean: 45.00868695652162 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.454855218553487,
            "unit": "iter/sec",
            "range": "stddev: 0.00019399358904569387",
            "extra": "mean: 42.635095833333914 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.90836189224555,
            "unit": "iter/sec",
            "range": "stddev: 0.00013657736323430142",
            "extra": "mean: 3.9229784090908653 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 433.2958388000894,
            "unit": "iter/sec",
            "range": "stddev: 0.000012631284382264478",
            "extra": "mean: 2.3078919999999634 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.4770219707098,
            "unit": "iter/sec",
            "range": "stddev: 0.000010912893165404902",
            "extra": "mean: 742.1276828435128 usec\nrounds: 1463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.8276005078737,
            "unit": "iter/sec",
            "range": "stddev: 0.000021355075109376632",
            "extra": "mean: 837.6418836141697 usec\nrounds: 1306"
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
        "date": 1644602722180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.52877673292747,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501480071474266",
            "extra": "mean: 5.062553499999998 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.898729785517,
            "unit": "iter/sec",
            "range": "stddev: 0.000012350422728107312",
            "extra": "mean: 3.862514122137423 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.22826112732366,
            "unit": "iter/sec",
            "range": "stddev: 0.000010921696986721221",
            "extra": "mean: 2.536601503759343 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.4656168115612,
            "unit": "iter/sec",
            "range": "stddev: 0.000008060812399413523",
            "extra": "mean: 1.253972558714462 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.39796221824537,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773200122271856",
            "extra": "mean: 5.482517391304327 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.65643558182805,
            "unit": "iter/sec",
            "range": "stddev: 0.000008943293689882308",
            "extra": "mean: 4.121052868852441 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.3393267560297,
            "unit": "iter/sec",
            "range": "stddev: 0.00001035350404311874",
            "extra": "mean: 2.595115345268486 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.0596219267826,
            "unit": "iter/sec",
            "range": "stddev: 0.000008445400040667902",
            "extra": "mean: 1.336791842105169 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.11337685113204,
            "unit": "iter/sec",
            "range": "stddev: 0.00010092290655046945",
            "extra": "mean: 39.81941600000013 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.648035413067433,
            "unit": "iter/sec",
            "range": "stddev: 0.00010815758815098587",
            "extra": "mean: 37.52621851851896 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.72259519423784,
            "unit": "iter/sec",
            "range": "stddev: 0.000018257447282726002",
            "extra": "mean: 3.3815474916388295 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.1488177959434,
            "unit": "iter/sec",
            "range": "stddev: 0.000009611172968241875",
            "extra": "mean: 2.036042771084238 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1484.854050246307,
            "unit": "iter/sec",
            "range": "stddev: 0.000005831944802199806",
            "extra": "mean: 673.4668635170711 usec\nrounds: 1524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1341.2544543003048,
            "unit": "iter/sec",
            "range": "stddev: 0.000005609996347445681",
            "extra": "mean: 745.5706833209902 usec\nrounds: 1361"
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
        "date": 1644937335469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.63506283252892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487056207590035",
            "extra": "mean: 5.505544933920714 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.16632231780926,
            "unit": "iter/sec",
            "range": "stddev: 0.000013441385293010845",
            "extra": "mean: 3.365118874172202 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.08350090977785,
            "unit": "iter/sec",
            "range": "stddev: 0.00001346364331279572",
            "extra": "mean: 2.2070986870897538 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.3781298682592,
            "unit": "iter/sec",
            "range": "stddev: 0.000007419935953345449",
            "extra": "mean: 1.0912525816649101 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.5465059448304,
            "unit": "iter/sec",
            "range": "stddev: 0.000016416009396711792",
            "extra": "mean: 4.772210328638365 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.8475644681532,
            "unit": "iter/sec",
            "range": "stddev: 0.000012597602559546114",
            "extra": "mean: 3.6120960714286277 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.4520200440125,
            "unit": "iter/sec",
            "range": "stddev: 0.000015220551819138787",
            "extra": "mean: 2.270394854586146 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.3186802776614,
            "unit": "iter/sec",
            "range": "stddev: 0.000015200393634050514",
            "extra": "mean: 1.1650684331797432 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.412926431487413,
            "unit": "iter/sec",
            "range": "stddev: 0.00011078233684869744",
            "extra": "mean: 35.19524827586196 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.102810127427787,
            "unit": "iter/sec",
            "range": "stddev: 0.00004046118915130653",
            "extra": "mean: 33.21949000000046 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.7055357146513,
            "unit": "iter/sec",
            "range": "stddev: 0.000015443623096770677",
            "extra": "mean: 2.943725947521763 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.8579215118425,
            "unit": "iter/sec",
            "range": "stddev: 0.000009057193275663606",
            "extra": "mean: 1.8022631762654875 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1660.400932129423,
            "unit": "iter/sec",
            "range": "stddev: 0.000009026934659712768",
            "extra": "mean: 602.2641764706341 usec\nrounds: 1700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1484.5818458424346,
            "unit": "iter/sec",
            "range": "stddev: 0.000006298936438077755",
            "extra": "mean: 673.5903465346124 usec\nrounds: 1616"
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
        "date": 1644938524725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.77913970713584,
            "unit": "iter/sec",
            "range": "stddev: 0.000017651510318498658",
            "extra": "mean: 4.448811403508784 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.15617113214836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481478008015068",
            "extra": "mean: 3.743128956228945 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.2006053379956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004002868248713135",
            "extra": "mean: 2.7012381546134785 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.5405783444576,
            "unit": "iter/sec",
            "range": "stddev: 0.000010140666061797289",
            "extra": "mean: 1.2352685297691184 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.5121065537434,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087300214995112",
            "extra": "mean: 5.479088586956477 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.94170727724364,
            "unit": "iter/sec",
            "range": "stddev: 0.00001853587616587379",
            "extra": "mean: 4.150381481481465 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.9305427208651,
            "unit": "iter/sec",
            "range": "stddev: 0.000014962023618844067",
            "extra": "mean: 2.604637789203047 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.9484419692125,
            "unit": "iter/sec",
            "range": "stddev: 0.000008968624289493911",
            "extra": "mean: 1.3316493438320471 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.173728938148166,
            "unit": "iter/sec",
            "range": "stddev: 0.00006110471967584663",
            "extra": "mean: 39.723951999999656 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.500796545238902,
            "unit": "iter/sec",
            "range": "stddev: 0.00007898657969650414",
            "extra": "mean: 37.734714814814076 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.36859095692245,
            "unit": "iter/sec",
            "range": "stddev: 0.000014113762581405415",
            "extra": "mean: 3.38560033333349 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.65588018693893,
            "unit": "iter/sec",
            "range": "stddev: 0.000011599985023560638",
            "extra": "mean: 2.0257026000000593 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1471.5666705800234,
            "unit": "iter/sec",
            "range": "stddev: 0.000006580690780303304",
            "extra": "mean: 679.547872340603 usec\nrounds: 1504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1305.807373800687,
            "unit": "iter/sec",
            "range": "stddev: 0.000007286572740452325",
            "extra": "mean: 765.8097358490148 usec\nrounds: 1325"
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
        "date": 1644939018942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.13361805341776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049867889844196",
            "extra": "mean: 5.072701500000003 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.94413541893516,
            "unit": "iter/sec",
            "range": "stddev: 0.000009031958722974604",
            "extra": "mean: 3.83223787878789 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.53961196383807,
            "unit": "iter/sec",
            "range": "stddev: 0.00001207484585901399",
            "extra": "mean: 2.528191791044747 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.2118679452568,
            "unit": "iter/sec",
            "range": "stddev: 0.000007610775989214694",
            "extra": "mean: 1.2434534229828982 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.090458067584,
            "unit": "iter/sec",
            "range": "stddev: 0.000020879757175078412",
            "extra": "mean: 5.461781081081085 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.3062109547961,
            "unit": "iter/sec",
            "range": "stddev: 0.000013008354145865773",
            "extra": "mean: 4.110047154471491 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.20891483205503,
            "unit": "iter/sec",
            "range": "stddev: 0.000010858572120822526",
            "extra": "mean: 2.60275064267345 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6193914810209,
            "unit": "iter/sec",
            "range": "stddev: 0.000009284639232683146",
            "extra": "mean: 1.3375790026246075 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.83488526531372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000614671050241343",
            "extra": "mean: 40.265939999999745 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.310545315286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173380081132038",
            "extra": "mean: 38.0075740740735 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.22456434809925,
            "unit": "iter/sec",
            "range": "stddev: 0.000013722834050745085",
            "extra": "mean: 3.387252013422908 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.7462402006573,
            "unit": "iter/sec",
            "range": "stddev: 0.000015979320327051458",
            "extra": "mean: 2.021238200000113 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1452.4373616866424,
            "unit": "iter/sec",
            "range": "stddev: 0.000005466738276258662",
            "extra": "mean: 688.4978494623344 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1288.3318174555425,
            "unit": "iter/sec",
            "range": "stddev: 0.00000551699375072985",
            "extra": "mean: 776.197549770215 usec\nrounds: 1306"
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
        "date": 1645453803515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.77546441623926,
            "unit": "iter/sec",
            "range": "stddev: 0.00001708046791276321",
            "extra": "mean: 5.030801980198032 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.5653756400798,
            "unit": "iter/sec",
            "range": "stddev: 0.000011614961530094194",
            "extra": "mean: 3.8231359848484834 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.2115379637248,
            "unit": "iter/sec",
            "range": "stddev: 0.00002648132949411623",
            "extra": "mean: 2.5302904999999942 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.79467550034,
            "unit": "iter/sec",
            "range": "stddev: 0.00000847493392708099",
            "extra": "mean: 1.2645507500000486 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.45601947065867,
            "unit": "iter/sec",
            "range": "stddev: 0.00002589174996672789",
            "extra": "mean: 5.421346524064342 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.9911619373067,
            "unit": "iter/sec",
            "range": "stddev: 0.000014712722315902217",
            "extra": "mean: 4.115376016260239 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.78763887560575,
            "unit": "iter/sec",
            "range": "stddev: 0.000012155199528211307",
            "extra": "mean: 2.598836082474261 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 738.7828464421248,
            "unit": "iter/sec",
            "range": "stddev: 0.000008316763793398537",
            "extra": "mean: 1.3535777188328895 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.108110502200667,
            "unit": "iter/sec",
            "range": "stddev: 0.00006651576078911088",
            "extra": "mean: 39.82776799999954 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.59504260525805,
            "unit": "iter/sec",
            "range": "stddev: 0.00008095762389052754",
            "extra": "mean: 37.600992592592874 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.50635314436596,
            "unit": "iter/sec",
            "range": "stddev: 0.00001373163702414625",
            "extra": "mean: 3.361272757475356 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.5876743933658,
            "unit": "iter/sec",
            "range": "stddev: 0.000009995648507191207",
            "extra": "mean: 2.0425350806453038 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1495.9987197948012,
            "unit": "iter/sec",
            "range": "stddev: 0.00000560568217488558",
            "extra": "mean: 668.4497698882825 usec\nrounds: 1521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1313.4484721469048,
            "unit": "iter/sec",
            "range": "stddev: 0.000007060401309435424",
            "extra": "mean: 761.354572490723 usec\nrounds: 1345"
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
        "date": 1645921134469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.38740686905203,
            "unit": "iter/sec",
            "range": "stddev: 0.00001456874533797074",
            "extra": "mean: 5.015361881188172 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.05237851945526,
            "unit": "iter/sec",
            "range": "stddev: 0.00003209589689343328",
            "extra": "mean: 3.860223193916354 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.98688933031775,
            "unit": "iter/sec",
            "range": "stddev: 0.000010584729439593489",
            "extra": "mean: 2.5063480198019956 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.7699017569679,
            "unit": "iter/sec",
            "range": "stddev: 0.000007811481208141146",
            "extra": "mean: 1.2456869618696067 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.37140225073207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008501607294837325",
            "extra": "mean: 5.4833158469942385 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.58614372771058,
            "unit": "iter/sec",
            "range": "stddev: 0.00004657292455918125",
            "extra": "mean: 4.139310245901729 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.85276289782365,
            "unit": "iter/sec",
            "range": "stddev: 0.00001074105646748598",
            "extra": "mean: 2.6119701799484765 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.1882659271706,
            "unit": "iter/sec",
            "range": "stddev: 0.000008230866194875898",
            "extra": "mean: 1.341942762284092 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.74012722956819,
            "unit": "iter/sec",
            "range": "stddev: 0.00013913214605796643",
            "extra": "mean: 40.42016399999952 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.160897367076494,
            "unit": "iter/sec",
            "range": "stddev: 0.00004044285179795361",
            "extra": "mean: 38.22498846153881 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.89501881448126,
            "unit": "iter/sec",
            "range": "stddev: 0.000023216067503103943",
            "extra": "mean: 3.3795770000000402 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.3831645525459,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993615436496029",
            "extra": "mean: 2.022722600000094 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.4382574280953,
            "unit": "iter/sec",
            "range": "stddev: 0.000006489888980799032",
            "extra": "mean: 679.1456245823833 usec\nrounds: 1497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1284.7999264150083,
            "unit": "iter/sec",
            "range": "stddev: 0.000005212115303790718",
            "extra": "mean: 778.3313023610697 usec\nrounds: 1313"
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
        "date": 1646063516713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.82381707942884,
            "unit": "iter/sec",
            "range": "stddev: 0.0007883090852541017",
            "extra": "mean: 7.762539743589732 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.76328657053747,
            "unit": "iter/sec",
            "range": "stddev: 0.0013585307110479024",
            "extra": "mean: 6.143891666666644 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.71693679165236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005280033518698198",
            "extra": "mean: 3.895340963855397 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.3362372630088,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146489009435285",
            "extra": "mean: 1.8203787264833657 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.13513954183715,
            "unit": "iter/sec",
            "range": "stddev: 0.0011111357840058432",
            "extra": "mean: 8.121158620689538 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.75011704862817,
            "unit": "iter/sec",
            "range": "stddev: 0.0007961723188791837",
            "extra": "mean: 6.182375742574346 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.96031452639636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912522407100037",
            "extra": "mean: 3.891651525423684 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.1734172697326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146265268807745",
            "extra": "mean: 1.9524636896048766 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.11704278373793,
            "unit": "iter/sec",
            "range": "stddev: 0.002958796043676095",
            "extra": "mean: 49.70909545454528 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.115478355114615,
            "unit": "iter/sec",
            "range": "stddev: 0.002545847270601835",
            "extra": "mean: 47.35862399999945 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.15201800916782,
            "unit": "iter/sec",
            "range": "stddev: 0.0007650928604151795",
            "extra": "mean: 5.23143836206866 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.7842210851708,
            "unit": "iter/sec",
            "range": "stddev: 0.0005074599327990845",
            "extra": "mean: 2.9003647465438203 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 991.6415634441208,
            "unit": "iter/sec",
            "range": "stddev: 0.0002811996108657079",
            "extra": "mean: 1.0084288888888935 msec\nrounds: 1305"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.9525536697502,
            "unit": "iter/sec",
            "range": "stddev: 0.00026307070304349437",
            "extra": "mean: 1.0846545150502476 msec\nrounds: 1196"
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
        "date": 1646086330281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.15174748253912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666139072361029",
            "extra": "mean: 5.911851428571413 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.0495157480168,
            "unit": "iter/sec",
            "range": "stddev: 0.000040221894193737874",
            "extra": "mean: 4.483309442060025 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.3727440711494,
            "unit": "iter/sec",
            "range": "stddev: 0.000037920168558478166",
            "extra": "mean: 2.912287061994625 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.0433807436378,
            "unit": "iter/sec",
            "range": "stddev: 0.001674418083328996",
            "extra": "mean: 2.207294141145099 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 158.57669158124835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003362686717173284",
            "extra": "mean: 6.306097005988046 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.75108166539613,
            "unit": "iter/sec",
            "range": "stddev: 0.00003824220722306852",
            "extra": "mean: 4.790394339622559 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.29240347094856,
            "unit": "iter/sec",
            "range": "stddev: 0.000032409933812287506",
            "extra": "mean: 2.9824713881018337 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.2202035037354,
            "unit": "iter/sec",
            "range": "stddev: 0.000017321436109984523",
            "extra": "mean: 1.5332245070422337 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.8751214939277,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054258366565227",
            "extra": "mean: 45.71403181818164 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.037858400683348,
            "unit": "iter/sec",
            "range": "stddev: 0.00015433722623563452",
            "extra": "mean: 43.40681249999948 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.4438140620635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000357177401466382",
            "extra": "mean: 3.8843427007297375 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.2958478259618,
            "unit": "iter/sec",
            "range": "stddev: 0.00001940697118353695",
            "extra": "mean: 2.3132306382979424 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1244.2025964069035,
            "unit": "iter/sec",
            "range": "stddev: 0.000006819529763958381",
            "extra": "mean: 803.7276267449297 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1130.0964647755993,
            "unit": "iter/sec",
            "range": "stddev: 0.000008223225717264989",
            "extra": "mean: 884.8802125919116 usec\nrounds: 1223"
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
        "date": 1646432254545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 145.16282997325777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144862225439381",
            "extra": "mean: 6.8888158227848155 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.47194577536385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779363189318658",
            "extra": "mean: 5.480294495412857 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.1454069574795,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885786723226665",
            "extra": "mean: 3.8146767918089135 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.5655394142609,
            "unit": "iter/sec",
            "range": "stddev: 0.00027248611294984306",
            "extra": "mean: 1.8533429712460425 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.7705357190641,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033426999073649",
            "extra": "mean: 7.475487741935435 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.35195510623524,
            "unit": "iter/sec",
            "range": "stddev: 0.00044538760771827023",
            "extra": "mean: 5.5447139423077285 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.60228264846958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008991434501250884",
            "extra": "mean: 4.1735829431439155 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.8974814391572,
            "unit": "iter/sec",
            "range": "stddev: 0.00043019954158624794",
            "extra": "mean: 1.8218338283828426 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.025474088753292,
            "unit": "iter/sec",
            "range": "stddev: 0.003131120002813086",
            "extra": "mean: 45.40197391304384 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.145040712126377,
            "unit": "iter/sec",
            "range": "stddev: 0.002876401158809157",
            "extra": "mean: 43.20580000000044 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.40233700144697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004712537169381047",
            "extra": "mean: 4.844906382978549 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 377.4761074984588,
            "unit": "iter/sec",
            "range": "stddev: 0.00032775794393179625",
            "extra": "mean: 2.6491742924526234 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 961.9549546064129,
            "unit": "iter/sec",
            "range": "stddev: 0.00020776284979566996",
            "extra": "mean: 1.0395497161394145 msec\nrounds: 1233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 871.8391077213205,
            "unit": "iter/sec",
            "range": "stddev: 0.00022271559137858476",
            "extra": "mean: 1.1470006233302 msec\nrounds: 1123"
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
        "date": 1646433383506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.3342538636871,
            "unit": "iter/sec",
            "range": "stddev: 0.00040200361663029387",
            "extra": "mean: 5.226455691056935 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.42617560328975,
            "unit": "iter/sec",
            "range": "stddev: 0.00033754262093956715",
            "extra": "mean: 3.9615542944785136 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.8033646874206,
            "unit": "iter/sec",
            "range": "stddev: 0.00024100121867378496",
            "extra": "mean: 2.5138047808765105 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 818.678079777204,
            "unit": "iter/sec",
            "range": "stddev: 0.00014593436040503027",
            "extra": "mean: 1.2214813425469278 msec\nrounds: 1013"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.66301639557605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003873533863635451",
            "extra": "mean: 5.32870045045047 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.374404374121,
            "unit": "iter/sec",
            "range": "stddev: 0.000339776523532204",
            "extra": "mean: 4.010034640522938 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.1702782472258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604474911617187",
            "extra": "mean: 2.4499579055442817 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.6155667901713,
            "unit": "iter/sec",
            "range": "stddev: 0.00015355893200235638",
            "extra": "mean: 1.2600559286463642 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.151333328026123,
            "unit": "iter/sec",
            "range": "stddev: 0.0015529522643696217",
            "extra": "mean: 41.40558148148128 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.34692954287794,
            "unit": "iter/sec",
            "range": "stddev: 0.0028012018683748526",
            "extra": "mean: 39.452510344827274 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.0212761730597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897031025136046",
            "extra": "mean: 3.3781355614972113 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 467.9327540523591,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424694804100659",
            "extra": "mean: 2.13705920634935 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1544.4288579834176,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863793315495322",
            "extra": "mean: 647.4885488126102 usec\nrounds: 1895"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1384.9450740771101,
            "unit": "iter/sec",
            "range": "stddev: 0.00009244598924981024",
            "extra": "mean: 722.0502955081976 usec\nrounds: 1692"
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
        "date": 1646433581896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.85913309738245,
            "unit": "iter/sec",
            "range": "stddev: 0.00003838208648352061",
            "extra": "mean: 5.158384771573615 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.94217373473842,
            "unit": "iter/sec",
            "range": "stddev: 0.00001006422691858455",
            "extra": "mean: 3.9071325581395273 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.3799370278721,
            "unit": "iter/sec",
            "range": "stddev: 0.00003047003828287369",
            "extra": "mean: 2.5616070528967856 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 435.0057049526375,
            "unit": "iter/sec",
            "range": "stddev: 0.001717791621998627",
            "extra": "mean: 2.2988204260651663 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.42243233698022,
            "unit": "iter/sec",
            "range": "stddev: 0.00002114079313944263",
            "extra": "mean: 5.481781967213045 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.72102585457162,
            "unit": "iter/sec",
            "range": "stddev: 0.000013242988097421487",
            "extra": "mean: 4.188990041493865 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.73128347349643,
            "unit": "iter/sec",
            "range": "stddev: 0.000011146853235524753",
            "extra": "mean: 2.612799222797915 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.393286154878,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153232100205816",
            "extra": "mean: 1.3469949400800212 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.709300027041817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005699967046680315",
            "extra": "mean: 40.47059200000007 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.10080653499967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000701192636756717",
            "extra": "mean: 38.31299230769202 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.82300879699534,
            "unit": "iter/sec",
            "range": "stddev: 0.000011515972270475494",
            "extra": "mean: 3.3803996655521713 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.04403589385646,
            "unit": "iter/sec",
            "range": "stddev: 0.000010486863353981714",
            "extra": "mean: 2.053202434077099 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1413.7764288808903,
            "unit": "iter/sec",
            "range": "stddev: 0.000006335595973156102",
            "extra": "mean: 707.3254155125325 usec\nrounds: 1444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1286.4414586393852,
            "unit": "iter/sec",
            "range": "stddev: 0.000005920210273875556",
            "extra": "mean: 777.3381316998737 usec\nrounds: 1306"
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
        "date": 1646663595746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.92475731745876,
            "unit": "iter/sec",
            "range": "stddev: 0.000020870323068019963",
            "extra": "mean: 5.88495764705886 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.46896855837906,
            "unit": "iter/sec",
            "range": "stddev: 0.000013162819995634045",
            "extra": "mean: 4.4950089285714725 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.09584377452444,
            "unit": "iter/sec",
            "range": "stddev: 0.000013375178997101263",
            "extra": "mean: 2.914637463976916 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 700.3390188602489,
            "unit": "iter/sec",
            "range": "stddev: 0.000010447526584585517",
            "extra": "mean: 1.427879888268153 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.29957644600415,
            "unit": "iter/sec",
            "range": "stddev: 0.000025628183844133685",
            "extra": "mean: 6.357296202531528 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 207.5376688316497,
            "unit": "iter/sec",
            "range": "stddev: 0.00001626703083924143",
            "extra": "mean: 4.818402392344397 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.48581086983785,
            "unit": "iter/sec",
            "range": "stddev: 0.000022687019426023048",
            "extra": "mean: 3.025848514851522 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.3141619164976,
            "unit": "iter/sec",
            "range": "stddev: 0.000009959728354167395",
            "extra": "mean: 1.5400865384614866 msec\nrounds: 676"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.760747113708877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002016143453823196",
            "extra": "mean: 45.9543045454546 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.916309637205035,
            "unit": "iter/sec",
            "range": "stddev: 0.000055607968903202696",
            "extra": "mean: 43.637043478260665 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.41266497335957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362962283599959",
            "extra": "mean: 3.946132684825072 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 433.9960843909102,
            "unit": "iter/sec",
            "range": "stddev: 0.000013028976059960837",
            "extra": "mean: 2.30416825396811 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1286.9010539837004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073643602794026055",
            "extra": "mean: 777.0605182927029 usec\nrounds: 1312"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1141.197005663915,
            "unit": "iter/sec",
            "range": "stddev: 0.000007666153004005252",
            "extra": "mean: 876.2728915663683 usec\nrounds: 1162"
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
        "date": 1646751844422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.00627711646776,
            "unit": "iter/sec",
            "range": "stddev: 0.0014490214838387566",
            "extra": "mean: 8.620223188405761 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.41183655258547,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492934014302624",
            "extra": "mean: 6.045516577540046 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.59893781960784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006832578382988",
            "extra": "mean: 4.022543333333287 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.5794677080123,
            "unit": "iter/sec",
            "range": "stddev: 0.00042337115133353264",
            "extra": "mean: 1.816268238557577 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.53140081779323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007739415425287606",
            "extra": "mean: 7.9031765517242025 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.19781658066995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277497131350074",
            "extra": "mean: 5.910241752577352 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.60340189681793,
            "unit": "iter/sec",
            "range": "stddev: 0.0003963663625069172",
            "extra": "mean: 3.912310996563654 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.01965772013,
            "unit": "iter/sec",
            "range": "stddev: 0.00047547052290741276",
            "extra": "mean: 1.9010696374622038 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.708844818916567,
            "unit": "iter/sec",
            "range": "stddev: 0.0030038252621244696",
            "extra": "mean: 50.73864090909068 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.65927510582127,
            "unit": "iter/sec",
            "range": "stddev: 0.0038432116032539277",
            "extra": "mean: 53.59265000000042 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.0154414381454,
            "unit": "iter/sec",
            "range": "stddev: 0.0011089466353015778",
            "extra": "mean: 5.617490212765996 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.35910719529085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533744355722585",
            "extra": "mean: 3.318300247524845 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 933.3894980670723,
            "unit": "iter/sec",
            "range": "stddev: 0.00033176799606256545",
            "extra": "mean: 1.0713641004863128 msec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 794.4500304088224,
            "unit": "iter/sec",
            "range": "stddev: 0.00035671874630679995",
            "extra": "mean: 1.2587324082364273 msec\nrounds: 1117"
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
        "date": 1646752639122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.07024125351558,
            "unit": "iter/sec",
            "range": "stddev: 0.000012217439713995573",
            "extra": "mean: 5.048713999999992 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.97153507453163,
            "unit": "iter/sec",
            "range": "stddev: 0.000009151892167152519",
            "extra": "mean: 3.861428244274806 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.44618089318885,
            "unit": "iter/sec",
            "range": "stddev: 0.000011746230571655992",
            "extra": "mean: 2.516063930348204 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 801.8797241415486,
            "unit": "iter/sec",
            "range": "stddev: 0.000009049690661633825",
            "extra": "mean: 1.2470698159509503 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.20572987868096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208656978637623",
            "extra": "mean: 5.458344565217481 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.7168355430926,
            "unit": "iter/sec",
            "range": "stddev: 0.000010863377862726752",
            "extra": "mean: 4.120027346938846 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.3698044614931,
            "unit": "iter/sec",
            "range": "stddev: 0.000011127703407943263",
            "extra": "mean: 2.6016611825192997 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.031772703897,
            "unit": "iter/sec",
            "range": "stddev: 0.000009516405380779981",
            "extra": "mean: 1.3531217965653872 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.82859332313438,
            "unit": "iter/sec",
            "range": "stddev: 0.00012968657435001303",
            "extra": "mean: 40.276144000000045 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.147098345873864,
            "unit": "iter/sec",
            "range": "stddev: 0.00004122539097982353",
            "extra": "mean: 38.24516153846206 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2717519450574,
            "unit": "iter/sec",
            "range": "stddev: 0.000026068759463917636",
            "extra": "mean: 3.3752795986619963 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.60845382731907,
            "unit": "iter/sec",
            "range": "stddev: 0.000010220223344988077",
            "extra": "mean: 2.0424483935742903 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1461.9778252625638,
            "unit": "iter/sec",
            "range": "stddev: 0.000005599463192537398",
            "extra": "mean: 684.0049026190976 usec\nrounds: 1489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1291.979325988784,
            "unit": "iter/sec",
            "range": "stddev: 0.00000622897850811419",
            "extra": "mean: 774.0061933535004 usec\nrounds: 1324"
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
        "date": 1646837007637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.33700471659242,
            "unit": "iter/sec",
            "range": "stddev: 0.000015688775592842185",
            "extra": "mean: 4.99158905472633 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.87460243900875,
            "unit": "iter/sec",
            "range": "stddev: 0.000009565981128404758",
            "extra": "mean: 3.8332593155893564 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.3502517580749,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755557765285827",
            "extra": "mean: 2.5487431077694453 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.8035003172647,
            "unit": "iter/sec",
            "range": "stddev: 0.000009000001783131413",
            "extra": "mean: 1.2379248166258876 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.37175102966506,
            "unit": "iter/sec",
            "range": "stddev: 0.000018638267616988855",
            "extra": "mean: 5.453402688172097 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.1458186163952,
            "unit": "iter/sec",
            "range": "stddev: 0.000010440325223024945",
            "extra": "mean: 4.112758367346937 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.965508318719,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636982249518956",
            "extra": "mean: 2.6180374358974365 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.0216743457876,
            "unit": "iter/sec",
            "range": "stddev: 0.000008680625091964232",
            "extra": "mean: 1.3368596583442454 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.035184448223518,
            "unit": "iter/sec",
            "range": "stddev: 0.00008218752277576409",
            "extra": "mean: 39.94378400000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.37007945304977,
            "unit": "iter/sec",
            "range": "stddev: 0.000058283346347161865",
            "extra": "mean: 37.92176666666612 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.8032265707086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001744405450962393",
            "extra": "mean: 3.4036385906038835 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.67439567653344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001027099812032479",
            "extra": "mean: 2.0338663326651805 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1435.7845599893208,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982389339647596",
            "extra": "mean: 696.4833219876929 usec\nrounds: 1469"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1282.3017688716684,
            "unit": "iter/sec",
            "range": "stddev: 0.000006637237111421062",
            "extra": "mean: 779.847633587784 usec\nrounds: 1310"
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
        "date": 1647269864061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.58891736473714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003339607483715268",
            "extra": "mean: 5.139038818565405 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.9217411655948,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411545976728384",
            "extra": "mean: 3.7185539393939395 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.21711942482557,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619788076175353",
            "extra": "mean: 2.6094867617107242 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.7566857056211,
            "unit": "iter/sec",
            "range": "stddev: 0.00015427545941041474",
            "extra": "mean: 1.200830947580647 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.92486010860213,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893810535659104",
            "extra": "mean: 5.29310964912271 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.65954178664396,
            "unit": "iter/sec",
            "range": "stddev: 0.00036342373432574467",
            "extra": "mean: 3.8962120521171992 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.34225992662596,
            "unit": "iter/sec",
            "range": "stddev: 0.00026324906933217055",
            "extra": "mean: 2.4670509316768934 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.6615402229363,
            "unit": "iter/sec",
            "range": "stddev: 0.00015614438118333784",
            "extra": "mean: 1.2489671974521968 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.666016756942224,
            "unit": "iter/sec",
            "range": "stddev: 0.0017087643126494094",
            "extra": "mean: 42.254681481481605 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.952400044313997,
            "unit": "iter/sec",
            "range": "stddev: 0.0016811306688809206",
            "extra": "mean: 35.77510333333318 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.14766166299563,
            "unit": "iter/sec",
            "range": "stddev: 0.00030887504069284906",
            "extra": "mean: 3.388134584450193 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.6064616350488,
            "unit": "iter/sec",
            "range": "stddev: 0.00020805992885639652",
            "extra": "mean: 1.891766507936489 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1471.8179059483034,
            "unit": "iter/sec",
            "range": "stddev: 0.00008615486302071682",
            "extra": "mean: 679.4318753417342 usec\nrounds: 1829"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1362.6233401635684,
            "unit": "iter/sec",
            "range": "stddev: 0.00008958990521079564",
            "extra": "mean: 733.878519855649 usec\nrounds: 1662"
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
        "date": 1647612544753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.7329350934445,
            "unit": "iter/sec",
            "range": "stddev: 0.000013147310169104091",
            "extra": "mean: 4.489681777777785 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.4472343339189,
            "unit": "iter/sec",
            "range": "stddev: 0.000016254017143456875",
            "extra": "mean: 3.4077676767676808 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.15446417701,
            "unit": "iter/sec",
            "range": "stddev: 0.000010932814997339608",
            "extra": "mean: 2.2464112582781213 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 891.8030475974368,
            "unit": "iter/sec",
            "range": "stddev: 0.000052101393888989664",
            "extra": "mean: 1.1213238199780224 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.02608308698044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003094280101699127",
            "extra": "mean: 4.784091943127871 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.83766909387646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000179889156859526",
            "extra": "mean: 3.638511428571421 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.9312649019134,
            "unit": "iter/sec",
            "range": "stddev: 0.000010296472714421561",
            "extra": "mean: 2.304512444444495 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.581186426022,
            "unit": "iter/sec",
            "range": "stddev: 0.000007680384803606911",
            "extra": "mean: 1.2054275294117645 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.97472204116358,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705479137800128",
            "extra": "mean: 35.74655714285718 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.124230118938037,
            "unit": "iter/sec",
            "range": "stddev: 0.00009379974119498932",
            "extra": "mean: 38.27864000000052 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.90849962930804,
            "unit": "iter/sec",
            "range": "stddev: 0.000012343544709235513",
            "extra": "mean: 3.3680410000000194 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.9936762341987,
            "unit": "iter/sec",
            "range": "stddev: 0.000010266801556360172",
            "extra": "mean: 2.0492068825909917 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1434.0216670144468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069478306601045015",
            "extra": "mean: 697.3395332874882 usec\nrounds: 1457"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1267.5409900099573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014351845381151596",
            "extra": "mean: 788.9291217257946 usec\nrounds: 1298"
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
        "date": 1647926021985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.73490561874485,
            "unit": "iter/sec",
            "range": "stddev: 0.00011581244330648995",
            "extra": "mean: 5.755895721925131 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 229.40176477755813,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021272631725296",
            "extra": "mean: 4.359164372469674 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.4101769178723,
            "unit": "iter/sec",
            "range": "stddev: 0.00006163803593671353",
            "extra": "mean: 2.829573298429339 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.2222452767044,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171998982116871",
            "extra": "mean: 1.388460307298349 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.79038329614454,
            "unit": "iter/sec",
            "range": "stddev: 0.0001449941119640921",
            "extra": "mean: 6.142869005847986 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.6967261598126,
            "unit": "iter/sec",
            "range": "stddev: 0.00011453919802626167",
            "extra": "mean: 4.5935463414635525 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.34922914964795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007152368303938589",
            "extra": "mean: 2.904028571428624 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.9540989376528,
            "unit": "iter/sec",
            "range": "stddev: 0.000053417444919922086",
            "extra": "mean: 1.4815822314050018 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.786721038315143,
            "unit": "iter/sec",
            "range": "stddev: 0.00045176486084353546",
            "extra": "mean: 43.885208333332905 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.838113653832565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004735333625334572",
            "extra": "mean: 41.94962800000013 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.484721402436,
            "unit": "iter/sec",
            "range": "stddev: 0.00009793079095223037",
            "extra": "mean: 3.7952864768680086 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 441.36974555640353,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176988669333543",
            "extra": "mean: 2.265674097664694 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1346.141635482188,
            "unit": "iter/sec",
            "range": "stddev: 0.000027140366672087896",
            "extra": "mean: 742.8638812154413 usec\nrounds: 1448"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1174.3905741790632,
            "unit": "iter/sec",
            "range": "stddev: 0.000029944001336756203",
            "extra": "mean: 851.5054718478409 usec\nrounds: 1261"
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
        "date": 1647972957471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.33329072565435,
            "unit": "iter/sec",
            "range": "stddev: 0.0010357311629170258",
            "extra": "mean: 7.853405769230827 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.77231560501232,
            "unit": "iter/sec",
            "range": "stddev: 0.000977619742417594",
            "extra": "mean: 5.996199047619059 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.6207514452386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005736514612250448",
            "extra": "mean: 3.896800996677754 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.6030686414341,
            "unit": "iter/sec",
            "range": "stddev: 0.00030333406918656077",
            "extra": "mean: 1.806348368794348 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.49872306466321,
            "unit": "iter/sec",
            "range": "stddev: 0.0014884290089013455",
            "extra": "mean: 8.65810437956218 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.71491924415383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007101477686303867",
            "extra": "mean: 6.381013402061939 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.91056742732587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005625641483573012",
            "extra": "mean: 3.9854837931034592 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.1520656480403,
            "unit": "iter/sec",
            "range": "stddev: 0.0002823357344359787",
            "extra": "mean: 1.9336672256097551 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.599400076350836,
            "unit": "iter/sec",
            "range": "stddev: 0.0022550526402705653",
            "extra": "mean: 53.76517499999913 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.92245315040201,
            "unit": "iter/sec",
            "range": "stddev: 0.0037313077277342913",
            "extra": "mean: 50.19462173913163 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.0242056065686,
            "unit": "iter/sec",
            "range": "stddev: 0.000361940901187958",
            "extra": "mean: 5.127568636363768 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7259615258665,
            "unit": "iter/sec",
            "range": "stddev: 0.0004349022420758484",
            "extra": "mean: 3.117926578947523 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1013.4280413382832,
            "unit": "iter/sec",
            "range": "stddev: 0.00019336016779402694",
            "extra": "mean: 986.7498817966881 usec\nrounds: 1269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 935.3544198321381,
            "unit": "iter/sec",
            "range": "stddev: 0.00019353910457584013",
            "extra": "mean: 1.0691134598791585 msec\nrounds: 1159"
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
        "date": 1647981727894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.71474454504033,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663859774539864",
            "extra": "mean: 5.083503030303035 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.94277731704597,
            "unit": "iter/sec",
            "range": "stddev: 0.000010459254162796059",
            "extra": "mean: 3.861857088122654 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.5484223805138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012264438627697814",
            "extra": "mean: 2.5474564231738466 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.2812570571425,
            "unit": "iter/sec",
            "range": "stddev: 0.000007949441214994007",
            "extra": "mean: 1.2433461444308556 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.35735575029415,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773006071091248",
            "extra": "mean: 5.513975409835992 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.89350673039038,
            "unit": "iter/sec",
            "range": "stddev: 0.000010407490030055632",
            "extra": "mean: 4.151211934156477 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.8450715342403,
            "unit": "iter/sec",
            "range": "stddev: 0.000018508309369357853",
            "extra": "mean: 2.6257396373057538 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.4882640908808,
            "unit": "iter/sec",
            "range": "stddev: 0.000008630733588952888",
            "extra": "mean: 1.332465873015843 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.02809152993355,
            "unit": "iter/sec",
            "range": "stddev: 0.0004936647078057747",
            "extra": "mean: 39.95510399999944 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.57905422865416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698400982661012",
            "extra": "mean: 37.62361111111045 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.3474674053438,
            "unit": "iter/sec",
            "range": "stddev: 0.000011067833944250222",
            "extra": "mean: 3.3858424749164 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.02595464780524,
            "unit": "iter/sec",
            "range": "stddev: 0.000010204935903291082",
            "extra": "mean: 2.0407082329317165 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1486.7089207064314,
            "unit": "iter/sec",
            "range": "stddev: 0.000005906773513777045",
            "extra": "mean: 672.6266225165551 usec\nrounds: 1510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1314.5296575297393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003418724045699757",
            "extra": "mean: 760.7283671934777 usec\nrounds: 1329"
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
        "date": 1647984070755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.97798485138756,
            "unit": "iter/sec",
            "range": "stddev: 0.001936417475143232",
            "extra": "mean: 9.092728888888923 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.55855397635747,
            "unit": "iter/sec",
            "range": "stddev: 0.0013671470257882504",
            "extra": "mean: 6.73135254237293 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.20751213025815,
            "unit": "iter/sec",
            "range": "stddev: 0.00036576182592692774",
            "extra": "mean: 4.269717870722415 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.70974770246323,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989531842778471",
            "extra": "mean: 2.0295924825174727 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.43783694344187,
            "unit": "iter/sec",
            "range": "stddev: 0.0011678800141344853",
            "extra": "mean: 8.973612800000154 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.29455556803282,
            "unit": "iter/sec",
            "range": "stddev: 0.0012548473539625684",
            "extra": "mean: 6.88257034883705 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.53739743532174,
            "unit": "iter/sec",
            "range": "stddev: 0.00117797524222348",
            "extra": "mean: 4.683020454545391 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 449.88441038046307,
            "unit": "iter/sec",
            "range": "stddev: 0.00048640185445176723",
            "extra": "mean: 2.2227931818182127 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.728433961865875,
            "unit": "iter/sec",
            "range": "stddev: 0.005133608571881514",
            "extra": "mean: 53.394747368421825 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.614654388447406,
            "unit": "iter/sec",
            "range": "stddev: 0.0010674713305850276",
            "extra": "mean: 48.50918095238147 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.03075045243534,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831170742655644",
            "extra": "mean: 5.404507075471564 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8282918016869,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745852730199148",
            "extra": "mean: 3.1364845144357707 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 893.3609902331817,
            "unit": "iter/sec",
            "range": "stddev: 0.00016910519517226714",
            "extra": "mean: 1.1193683303084274 msec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 813.5509888674576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002684267028959641",
            "extra": "mean: 1.2291792569659312 msec\nrounds: 969"
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
        "date": 1647985646319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.35525005117702,
            "unit": "iter/sec",
            "range": "stddev: 0.00037029608565675973",
            "extra": "mean: 8.172922695035433 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.9386330369354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890524591041139",
            "extra": "mean: 6.291736507936444 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.34255232265681,
            "unit": "iter/sec",
            "range": "stddev: 0.00027656066012549796",
            "extra": "mean: 4.2855449640288485 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.6910439779766,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666671077685518",
            "extra": "mean: 1.981410234899348 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.69367708719084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005518958562325995",
            "extra": "mean: 8.873612307692314 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.57052977205805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097141335945111",
            "extra": "mean: 6.68580903954794 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.3041284555132,
            "unit": "iter/sec",
            "range": "stddev: 0.00031258735762085813",
            "extra": "mean: 4.3420845588235535 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 475.1447658810956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003429249828266655",
            "extra": "mean: 2.1046217317486957 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.168605133897437,
            "unit": "iter/sec",
            "range": "stddev: 0.0019029617641425733",
            "extra": "mean: 52.16863684210475 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.700219961910516,
            "unit": "iter/sec",
            "range": "stddev: 0.0016898094636823243",
            "extra": "mean: 50.760854545454556 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.34240529087768,
            "unit": "iter/sec",
            "range": "stddev: 0.00036478554727812154",
            "extra": "mean: 5.575926108374021 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.8196152268175,
            "unit": "iter/sec",
            "range": "stddev: 0.00020593118162682693",
            "extra": "mean: 3.1170163934427952 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 943.6491412458648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000983839310566521",
            "extra": "mean: 1.0597159010601516 msec\nrounds: 1132"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 855.5836947525961,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883390662965047",
            "extra": "mean: 1.16879272727277 msec\nrounds: 1045"
          }
        ]
      }
    ]
  }
}