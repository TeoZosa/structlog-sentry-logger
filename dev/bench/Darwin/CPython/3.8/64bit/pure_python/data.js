window.BENCHMARK_DATA = {
  "lastUpdate": 1643756999832,
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
        "date": 1642086180777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.79737504494811,
            "unit": "iter/sec",
            "range": "stddev: 0.00041294563358096277",
            "extra": "mean: 8.27832558139533 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.47161597741032,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381432404311959",
            "extra": "mean: 7.018941935483877 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.3791994260936,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838966014806955",
            "extra": "mean: 4.869042253521166 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.25615982156154,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331007295540684",
            "extra": "mean: 3.112780780780794 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.14119565891993,
            "unit": "iter/sec",
            "range": "stddev: 0.0011972515157029709",
            "extra": "mean: 9.88716806722669 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.45743135207766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004374739484252945",
            "extra": "mean: 7.0692645161290235 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.4375685044684,
            "unit": "iter/sec",
            "range": "stddev: 0.00024864076244778167",
            "extra": "mean: 5.116723502304198 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.6804151034956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487196024379363",
            "extra": "mean: 3.325790273556046 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.558077589749209,
            "unit": "iter/sec",
            "range": "stddev: 0.0018160068903072272",
            "extra": "mean: 73.75676923076952 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.219667692806492,
            "unit": "iter/sec",
            "range": "stddev: 0.0027111143693702147",
            "extra": "mean: 75.64486666666757 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.52935020525578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931554994334522",
            "extra": "mean: 6.348023391812583 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.26734505089513,
            "unit": "iter/sec",
            "range": "stddev: 0.0004141713493409695",
            "extra": "mean: 4.323999999999695 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.7999614895974,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764579068748132",
            "extra": "mean: 2.193944897958976 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.77113206790597,
            "unit": "iter/sec",
            "range": "stddev: 0.00020652751242028955",
            "extra": "mean: 2.258503157894752 msec\nrounds: 475"
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
        "date": 1642435798791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.86313213385188,
            "unit": "iter/sec",
            "range": "stddev: 0.00048080284117135453",
            "extra": "mean: 8.484417322834632 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.3681876261468,
            "unit": "iter/sec",
            "range": "stddev: 0.00046465502056196935",
            "extra": "mean: 6.926733766233746 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5802586874906,
            "unit": "iter/sec",
            "range": "stddev: 0.00038036941236252035",
            "extra": "mean: 5.112990476190429 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.63327923363573,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727447617881136",
            "extra": "mean: 3.1986358024690147 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.82677407787669,
            "unit": "iter/sec",
            "range": "stddev: 0.00041122615025662094",
            "extra": "mean: 9.10524786324793 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.39215311595342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628148942492877",
            "extra": "mean: 8.104243055555449 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.85889322525057,
            "unit": "iter/sec",
            "range": "stddev: 0.00025689506083636853",
            "extra": "mean: 5.239472906404239 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.44308984349107,
            "unit": "iter/sec",
            "range": "stddev: 0.00016919420967873253",
            "extra": "mean: 3.2739323076924074 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.186262551673678,
            "unit": "iter/sec",
            "range": "stddev: 0.0017282343479805616",
            "extra": "mean: 75.83649999999993 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.522924738162427,
            "unit": "iter/sec",
            "range": "stddev: 0.002398980191986007",
            "extra": "mean: 73.94849999999968 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.4929702775492,
            "unit": "iter/sec",
            "range": "stddev: 0.00034201266053878685",
            "extra": "mean: 6.116470930232526 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.9451583703751,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593038243166115",
            "extra": "mean: 4.44552800000028 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.6460262662161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007769995519929343",
            "extra": "mean: 2.1898800000003034 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.1116088757213,
            "unit": "iter/sec",
            "range": "stddev: 0.00015602824936799794",
            "extra": "mean: 2.3035550755941268 msec\nrounds: 463"
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
        "date": 1643747095192,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.35065367261419,
            "unit": "iter/sec",
            "range": "stddev: 0.0008260374913279448",
            "extra": "mean: 9.22929365079365 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.10821056935384,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503687387764822",
            "extra": "mean: 6.891408805031431 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.30557365925964,
            "unit": "iter/sec",
            "range": "stddev: 0.000374641602106292",
            "extra": "mean: 5.068280542986423 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.1213054779087,
            "unit": "iter/sec",
            "range": "stddev: 0.0003092804532909985",
            "extra": "mean: 3.1936504559270613 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.87265851208221,
            "unit": "iter/sec",
            "range": "stddev: 0.0007928380442210402",
            "extra": "mean: 9.101445378151421 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.0606740499827,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164357970076501",
            "extra": "mean: 7.349662251655786 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.9456072139624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003652942233948827",
            "extra": "mean: 5.001360189573441 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.66804949360414,
            "unit": "iter/sec",
            "range": "stddev: 0.00020204509257054805",
            "extra": "mean: 3.1282450704226785 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.455302446366286,
            "unit": "iter/sec",
            "range": "stddev: 0.0007893598045872702",
            "extra": "mean: 74.3201428571424 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.733759821390054,
            "unit": "iter/sec",
            "range": "stddev: 0.0066391682084412295",
            "extra": "mean: 93.16400000000158 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.4640022955689,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233880590931517",
            "extra": "mean: 5.971432584269844 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 152.25752645989138,
            "unit": "iter/sec",
            "range": "stddev: 0.0014696964607852005",
            "extra": "mean: 6.56781981981972 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.17260988276496,
            "unit": "iter/sec",
            "range": "stddev: 0.00011098505359555242",
            "extra": "mean: 2.11786956521745 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.2223065476856,
            "unit": "iter/sec",
            "range": "stddev: 0.00009093912134671553",
            "extra": "mean: 2.2410354330709255 msec\nrounds: 508"
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
        "date": 1643756396355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.05279914054017,
            "unit": "iter/sec",
            "range": "stddev: 0.0011460965725950895",
            "extra": "mean: 9.086547619047609 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.28826188071548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812501708408033",
            "extra": "mean: 7.12818012422366 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.5474551063828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005417932225201776",
            "extra": "mean: 5.193524886877877 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3356618122786,
            "unit": "iter/sec",
            "range": "stddev: 0.00017898315160960867",
            "extra": "mean: 3.141338278931804 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.85636510043783,
            "unit": "iter/sec",
            "range": "stddev: 0.0015612200537655596",
            "extra": "mean: 10.219059322034084 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.2257890619184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961810459390946",
            "extra": "mean: 7.234539999999919 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.90683473740754,
            "unit": "iter/sec",
            "range": "stddev: 0.0004722459207211202",
            "extra": "mean: 5.238157142857146 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.52954619153945,
            "unit": "iter/sec",
            "range": "stddev: 0.00033584847653890667",
            "extra": "mean: 3.465849557522102 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.616650440158324,
            "unit": "iter/sec",
            "range": "stddev: 0.001259421402562018",
            "extra": "mean: 73.43949999999947 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.088968523835383,
            "unit": "iter/sec",
            "range": "stddev: 0.004648011587741582",
            "extra": "mean: 76.40021428571485 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.61106437527755,
            "unit": "iter/sec",
            "range": "stddev: 0.00066430339411174",
            "extra": "mean: 7.012078651685288 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.04428110975064,
            "unit": "iter/sec",
            "range": "stddev: 0.00023618861198064075",
            "extra": "mean: 4.165898039215481 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.0430953772237,
            "unit": "iter/sec",
            "range": "stddev: 0.0001296031490066569",
            "extra": "mean: 2.2024341085270542 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.99355817277194,
            "unit": "iter/sec",
            "range": "stddev: 0.0002041376011068919",
            "extra": "mean: 2.257369168357049 msec\nrounds: 493"
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
        "date": 1643756997732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.19162519897888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588570774788056",
            "extra": "mean: 8.320047244094473 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.38062979030337,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386734724164552",
            "extra": "mean: 6.435808641975305 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.30948339623686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855018972519366",
            "extra": "mean: 4.942922018348651 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.9092840367007,
            "unit": "iter/sec",
            "range": "stddev: 0.0001471905311295334",
            "extra": "mean: 3.049623931623957 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.21746545973419,
            "unit": "iter/sec",
            "range": "stddev: 0.0007677531662796389",
            "extra": "mean: 9.41464754098363 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.47128273754248,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117161018569434",
            "extra": "mean: 7.492248366012911 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.34531219346795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006458603879089335",
            "extra": "mean: 5.607100000000033 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.2734127420559,
            "unit": "iter/sec",
            "range": "stddev: 0.0010777191431863764",
            "extra": "mean: 3.4569371257485617 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.888284351243511,
            "unit": "iter/sec",
            "range": "stddev: 0.004166933501712449",
            "extra": "mean: 77.58984615384563 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.573352037691208,
            "unit": "iter/sec",
            "range": "stddev: 0.003179551768810115",
            "extra": "mean: 79.53328571428641 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.76430808616516,
            "unit": "iter/sec",
            "range": "stddev: 0.0009452416182840507",
            "extra": "mean: 6.143853107344725 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.31373551804683,
            "unit": "iter/sec",
            "range": "stddev: 0.00028542040190067137",
            "extra": "mean: 4.323132812499936 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.0648056654957,
            "unit": "iter/sec",
            "range": "stddev: 0.0001561667169562127",
            "extra": "mean: 2.2219022403258872 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.3787392601943,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680633371349999",
            "extra": "mean: 2.307450526315769 msec\nrounds: 475"
          }
        ]
      }
    ]
  }
}