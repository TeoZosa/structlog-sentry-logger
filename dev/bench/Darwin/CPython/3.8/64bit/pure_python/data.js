window.BENCHMARK_DATA = {
  "lastUpdate": 1675094761179,
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
        "date": 1643758609171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.90946242429942,
            "unit": "iter/sec",
            "range": "stddev: 0.0005028282782894727",
            "extra": "mean: 7.87963309352518 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.15379848442046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760606320152587",
            "extra": "mean: 6.445217647058854 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.19338653794915,
            "unit": "iter/sec",
            "range": "stddev: 0.00024759007809455833",
            "extra": "mean: 4.945760180995399 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.26190317100844,
            "unit": "iter/sec",
            "range": "stddev: 0.00022409666251850668",
            "extra": "mean: 3.1420662983425953 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.68644537822739,
            "unit": "iter/sec",
            "range": "stddev: 0.0006152164024029422",
            "extra": "mean: 8.719426229508414 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.3873873024708,
            "unit": "iter/sec",
            "range": "stddev: 0.0004931562968367619",
            "extra": "mean: 7.072766666666628 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.57404814580798,
            "unit": "iter/sec",
            "range": "stddev: 0.00047512466687641325",
            "extra": "mean: 5.087141509433912 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.1198931594028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002235916155749615",
            "extra": "mean: 3.1336184971097754 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.458986430649837,
            "unit": "iter/sec",
            "range": "stddev: 0.001330972104462692",
            "extra": "mean: 74.29980000000023 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.985896621846482,
            "unit": "iter/sec",
            "range": "stddev: 0.0028669935920992567",
            "extra": "mean: 71.50060000000025 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.68624262477982,
            "unit": "iter/sec",
            "range": "stddev: 0.0004165123819708414",
            "extra": "mean: 5.9281657142863 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.30821873686392,
            "unit": "iter/sec",
            "range": "stddev: 0.00020129491461326251",
            "extra": "mean: 4.05995384615371 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.4546375899136,
            "unit": "iter/sec",
            "range": "stddev: 0.00014402119667052926",
            "extra": "mean: 2.112134765624912 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.42938352490734,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903709103477207",
            "extra": "mean: 2.2250436590436684 msec\nrounds: 481"
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
        "date": 1643759043929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.47489088039579,
            "unit": "iter/sec",
            "range": "stddev: 0.0006826071459822939",
            "extra": "mean: 8.512457364341167 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.3391510672181,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144566944362887",
            "extra": "mean: 6.696167701863367 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.92777085214982,
            "unit": "iter/sec",
            "range": "stddev: 0.00028405189027122356",
            "extra": "mean: 4.809362385321128 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.1803872763231,
            "unit": "iter/sec",
            "range": "stddev: 0.00021995014478152044",
            "extra": "mean: 3.1527800586510226 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.61288989878042,
            "unit": "iter/sec",
            "range": "stddev: 0.0005460805801342869",
            "extra": "mean: 8.801818181818245 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.5937585807045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234190292314356",
            "extra": "mean: 7.112691275167622 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.1710348147928,
            "unit": "iter/sec",
            "range": "stddev: 0.0002600843477445344",
            "extra": "mean: 4.94630697674418 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.918715093862,
            "unit": "iter/sec",
            "range": "stddev: 0.00015213682148243186",
            "extra": "mean: 3.15538323353302 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.521889225588632,
            "unit": "iter/sec",
            "range": "stddev: 0.0024943154988278935",
            "extra": "mean: 79.8601538461535 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.270670491147257,
            "unit": "iter/sec",
            "range": "stddev: 0.0014291895421013172",
            "extra": "mean: 75.35414285714432 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.8326290974545,
            "unit": "iter/sec",
            "range": "stddev: 0.00039523417581974023",
            "extra": "mean: 6.1412752808990465 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.08372876166374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936033545706772",
            "extra": "mean: 4.147936507936642 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.5071872418826,
            "unit": "iter/sec",
            "range": "stddev: 0.00014749313067009254",
            "extra": "mean: 2.1668134920635276 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.1329799576155,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779607640427344",
            "extra": "mean: 2.34668530020714 msec\nrounds: 483"
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
        "date": 1643759910611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.8714926518108,
            "unit": "iter/sec",
            "range": "stddev: 0.0004931547509717122",
            "extra": "mean: 8.205364341085238 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.31324932912878,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909249589638862",
            "extra": "mean: 7.126910714285637 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.04802646180698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411416019039947",
            "extra": "mean: 4.9008070175438645 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.80796788475703,
            "unit": "iter/sec",
            "range": "stddev: 0.0001521005991987301",
            "extra": "mean: 3.1866622340425734 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.46596467130036,
            "unit": "iter/sec",
            "range": "stddev: 0.0004124102609582522",
            "extra": "mean: 8.736221311475362 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.82578148899,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667602214021941",
            "extra": "mean: 7.255536585365804 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.64987737534864,
            "unit": "iter/sec",
            "range": "stddev: 0.00027308783719651186",
            "extra": "mean: 4.983805687203762 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.50384286196686,
            "unit": "iter/sec",
            "range": "stddev: 0.00018981727776748748",
            "extra": "mean: 3.2309776536312085 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.280410133379029,
            "unit": "iter/sec",
            "range": "stddev: 0.0008329277965620763",
            "extra": "mean: 70.02600000000001 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.05774039533249,
            "unit": "iter/sec",
            "range": "stddev: 0.0043603957030086925",
            "extra": "mean: 76.58292857142816 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.0779266136514,
            "unit": "iter/sec",
            "range": "stddev: 0.000366616791057674",
            "extra": "mean: 5.879657754010592 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.33730489153407,
            "unit": "iter/sec",
            "range": "stddev: 0.00042709301256353845",
            "extra": "mean: 4.160818897637664 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.12048484510143,
            "unit": "iter/sec",
            "range": "stddev: 0.00010595103055451432",
            "extra": "mean: 2.1780775047259784 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.0284777940672,
            "unit": "iter/sec",
            "range": "stddev: 0.00009492875070458116",
            "extra": "mean: 2.2122500000001653 msec\nrounds: 512"
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
        "date": 1643760263488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.8925014489354,
            "unit": "iter/sec",
            "range": "stddev: 0.0010405403051944007",
            "extra": "mean: 8.857984251968492 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.67319621939532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005170849507062896",
            "extra": "mean: 6.96024050632907 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.54759100011822,
            "unit": "iter/sec",
            "range": "stddev: 0.00041313113090470934",
            "extra": "mean: 4.961607305936063 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.17776879146754,
            "unit": "iter/sec",
            "range": "stddev: 0.00011295586067821117",
            "extra": "mean: 3.0658128654970396 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.69232514763415,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915782885034155",
            "extra": "mean: 9.034050000000143 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.91160926357688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005524634188481238",
            "extra": "mean: 7.198822368421036 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.728565446174,
            "unit": "iter/sec",
            "range": "stddev: 0.0004045551733511741",
            "extra": "mean: 5.109116279069665 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.3880498347794,
            "unit": "iter/sec",
            "range": "stddev: 0.00019969774386333856",
            "extra": "mean: 3.1807824773413964 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.027057197799783,
            "unit": "iter/sec",
            "range": "stddev: 0.003180778950316236",
            "extra": "mean: 76.76330769230798 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.892844986746029,
            "unit": "iter/sec",
            "range": "stddev: 0.0013311534633011336",
            "extra": "mean: 77.56240000000076 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.82045503257945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004206074106128372",
            "extra": "mean: 6.141734463276778 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.9803215501089,
            "unit": "iter/sec",
            "range": "stddev: 0.00041101671950276937",
            "extra": "mean: 4.292208000000215 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.1148298433105,
            "unit": "iter/sec",
            "range": "stddev: 0.00010209642393196805",
            "extra": "mean: 2.1226247544204733 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.34114356030096,
            "unit": "iter/sec",
            "range": "stddev: 0.00006842457381977492",
            "extra": "mean: 2.205844349680089 msec\nrounds: 469"
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
        "date": 1643761181957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.51797922884386,
            "unit": "iter/sec",
            "range": "stddev: 0.00034287905485725804",
            "extra": "mean: 8.030968750000048 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.22345549795327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002933356474935168",
            "extra": "mean: 6.74657055214725 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.36251689272416,
            "unit": "iter/sec",
            "range": "stddev: 0.00020887178649851756",
            "extra": "mean: 4.869437788018409 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.99924025028093,
            "unit": "iter/sec",
            "range": "stddev: 0.00006732376333894361",
            "extra": "mean: 3.021154970760243 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.13403854126452,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792343645154961",
            "extra": "mean: 9.887867768594862 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.5863643782002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003264324807271207",
            "extra": "mean: 7.215717105263072 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8461466532789,
            "unit": "iter/sec",
            "range": "stddev: 0.00021702656382163886",
            "extra": "mean: 4.905660550458656 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.4618214007726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010642077370519705",
            "extra": "mean: 3.1107893175074155 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.892003564291134,
            "unit": "iter/sec",
            "range": "stddev: 0.000911721183522177",
            "extra": "mean: 71.98385714285749 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.840549722277101,
            "unit": "iter/sec",
            "range": "stddev: 0.0021503844174613164",
            "extra": "mean: 77.87828571428663 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.65298134509695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003591902667942745",
            "extra": "mean: 6.224596590908641 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.59036410261663,
            "unit": "iter/sec",
            "range": "stddev: 0.00025004729393045657",
            "extra": "mean: 4.0884685039368724 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.782417870953,
            "unit": "iter/sec",
            "range": "stddev: 0.00012949943813121202",
            "extra": "mean: 2.1241235059761974 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.8049617947985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004715037171508897",
            "extra": "mean: 2.165416317991721 msec\nrounds: 478"
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
        "date": 1643775401298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.86379771809484,
            "unit": "iter/sec",
            "range": "stddev: 0.000887474747960731",
            "extra": "mean: 8.70596323529417 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.97552921069114,
            "unit": "iter/sec",
            "range": "stddev: 0.0018931806193289514",
            "extra": "mean: 8.851474358974436 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.89790530616094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007878566713790408",
            "extra": "mean: 5.58978037383181 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.4478764002933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928790682835965",
            "extra": "mean: 3.5279855072463873 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.93124331713287,
            "unit": "iter/sec",
            "range": "stddev: 0.0011224150106702913",
            "extra": "mean: 9.621745762711873 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.64222285057454,
            "unit": "iter/sec",
            "range": "stddev: 0.000917327522050591",
            "extra": "mean: 7.654493150685105 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.02626916221826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007872529693523167",
            "extra": "mean: 6.171838709677472 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 269.6798456247412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768099546571883",
            "extra": "mean: 3.7081006097559746 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.495263644434285,
            "unit": "iter/sec",
            "range": "stddev: 0.0015422450401075588",
            "extra": "mean: 74.10007142857263 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.887547199930774,
            "unit": "iter/sec",
            "range": "stddev: 0.006825016355090723",
            "extra": "mean: 84.12164285714242 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 135.39076589339808,
            "unit": "iter/sec",
            "range": "stddev: 0.0010255765881641784",
            "extra": "mean: 7.386028089887348 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.84324526145258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527040522136445",
            "extra": "mean: 4.467412000000195 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 380.39974210186534,
            "unit": "iter/sec",
            "range": "stddev: 0.00043771405219962555",
            "extra": "mean: 2.6288135593220643 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 404.55226874430906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003083959740454558",
            "extra": "mean: 2.4718684759917497 msec\nrounds: 479"
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
        "date": 1643776205905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.05545729471794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007845763413041772",
            "extra": "mean: 8.399446969696923 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.3658583304598,
            "unit": "iter/sec",
            "range": "stddev: 0.0004260673985883427",
            "extra": "mean: 6.650445859872625 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.9291147510382,
            "unit": "iter/sec",
            "range": "stddev: 0.0002291988449385036",
            "extra": "mean: 4.740929203539825 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.35805322134865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870581742946643",
            "extra": "mean: 3.2856038781163317 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.56721238866776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005556459152406383",
            "extra": "mean: 8.805358333333402 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.09451338889008,
            "unit": "iter/sec",
            "range": "stddev: 0.00046582158560950875",
            "extra": "mean: 7.457426666666673 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.13650101038908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003971218346975248",
            "extra": "mean: 5.177685185185211 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.24549227934284,
            "unit": "iter/sec",
            "range": "stddev: 0.00015721474432603896",
            "extra": "mean: 3.112884146341385 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.506173768502192,
            "unit": "iter/sec",
            "range": "stddev: 0.001964410272774957",
            "extra": "mean: 74.04021428571461 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.442770286100519,
            "unit": "iter/sec",
            "range": "stddev: 0.0009862416394716385",
            "extra": "mean: 74.3894285714288 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.3435727735597,
            "unit": "iter/sec",
            "range": "stddev: 0.0003625931294748913",
            "extra": "mean: 6.084813559322133 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.85544582055854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570022321685916",
            "extra": "mean: 4.084042307692215 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.0078434293998,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459445071052124",
            "extra": "mean: 2.1367163265306526 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.63189903390634,
            "unit": "iter/sec",
            "range": "stddev: 0.00014041969757264778",
            "extra": "mean: 2.279815950920386 msec\nrounds: 489"
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
        "date": 1643782713972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.61123566751434,
            "unit": "iter/sec",
            "range": "stddev: 0.0006742870041948926",
            "extra": "mean: 8.36041860465115 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.29253715134604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051187667406128",
            "extra": "mean: 6.653690322580624 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.51727902768573,
            "unit": "iter/sec",
            "range": "stddev: 0.0006032398071435559",
            "extra": "mean: 5.0120972222222235 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.6483818219678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006198197247329973",
            "extra": "mean: 3.1882836257309854 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.43351626048366,
            "unit": "iter/sec",
            "range": "stddev: 0.001025563388106892",
            "extra": "mean: 9.484650000000036 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.54451857584445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006368488441466955",
            "extra": "mean: 7.2703733333334 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.97411602668765,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358178431579414",
            "extra": "mean: 5.263875000000103 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.8451240953684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003830251079854617",
            "extra": "mean: 3.438256024096519 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.11249395888667,
            "unit": "iter/sec",
            "range": "stddev: 0.005639234902511665",
            "extra": "mean: 76.2631428571431 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.657884393756829,
            "unit": "iter/sec",
            "range": "stddev: 0.006371879095588198",
            "extra": "mean: 85.77885714285622 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.58169567861304,
            "unit": "iter/sec",
            "range": "stddev: 0.000762955175757371",
            "extra": "mean: 6.427491329479477 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.13806283931356,
            "unit": "iter/sec",
            "range": "stddev: 0.00036434542454331405",
            "extra": "mean: 4.252820610686797 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 432.6418113505216,
            "unit": "iter/sec",
            "range": "stddev: 0.00032931360830109767",
            "extra": "mean: 2.3113808553972865 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.90107379140875,
            "unit": "iter/sec",
            "range": "stddev: 0.00024035751924530023",
            "extra": "mean: 2.294098501070747 msec\nrounds: 467"
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
        "date": 1643824423506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.59289998538891,
            "unit": "iter/sec",
            "range": "stddev: 0.00048558608246519037",
            "extra": "mean: 8.432208000000031 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.8673665380244,
            "unit": "iter/sec",
            "range": "stddev: 0.0006296084180543661",
            "extra": "mean: 7.149630573248404 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.97550539264327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221904269072106",
            "extra": "mean: 5.000612440191328 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.1797740468677,
            "unit": "iter/sec",
            "range": "stddev: 0.00019507506316977018",
            "extra": "mean: 3.213576470588307 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.08525580176611,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722093088901268",
            "extra": "mean: 9.700708333333422 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.05585294468884,
            "unit": "iter/sec",
            "range": "stddev: 0.00042385725883743584",
            "extra": "mean: 7.243445161290216 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.58404688779706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002285117880936157",
            "extra": "mean: 5.192538095238065 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.0772762577779,
            "unit": "iter/sec",
            "range": "stddev: 0.0002276270561916274",
            "extra": "mean: 3.366127536231639 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.200573282039736,
            "unit": "iter/sec",
            "range": "stddev: 0.0019121770286799104",
            "extra": "mean: 75.75428571428537 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.718625840529949,
            "unit": "iter/sec",
            "range": "stddev: 0.0029438723887129665",
            "extra": "mean: 78.62484615384619 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.45034465488885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505276863076861",
            "extra": "mean: 6.781944134077981 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.94626686899335,
            "unit": "iter/sec",
            "range": "stddev: 0.00042819665243683583",
            "extra": "mean: 4.406329365079437 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 433.7064102701538,
            "unit": "iter/sec",
            "range": "stddev: 0.000187821165297838",
            "extra": "mean: 2.3057072164949197 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 389.6269965164841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002503880697131399",
            "extra": "mean: 2.566557268722761 msec\nrounds: 454"
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
        "date": 1643830736124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.46916534926552,
            "unit": "iter/sec",
            "range": "stddev: 0.00027831548969234083",
            "extra": "mean: 8.165320610687065 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.10129364091281,
            "unit": "iter/sec",
            "range": "stddev: 0.0005203798821867589",
            "extra": "mean: 6.75213548387096 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.99447482702976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003003965513398161",
            "extra": "mean: 4.878180257510746 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3642364356129,
            "unit": "iter/sec",
            "range": "stddev: 0.00019933112071977347",
            "extra": "mean: 3.092487935656781 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.60346270169778,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541458158126179",
            "extra": "mean: 8.725739837398347 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.21101867058374,
            "unit": "iter/sec",
            "range": "stddev: 0.00045542378805386223",
            "extra": "mean: 6.934282894736813 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.51076864695315,
            "unit": "iter/sec",
            "range": "stddev: 0.00028209277686625157",
            "extra": "mean: 4.938009009009039 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.7877531566902,
            "unit": "iter/sec",
            "range": "stddev: 0.00019189181439618894",
            "extra": "mean: 3.156687687687781 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.919143694279938,
            "unit": "iter/sec",
            "range": "stddev: 0.001777617149660478",
            "extra": "mean: 71.84349999999995 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.05204315751287,
            "unit": "iter/sec",
            "range": "stddev: 0.004531328835615962",
            "extra": "mean: 76.61635714285785 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.3232164444082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175524341679542",
            "extra": "mean: 6.048757225433376 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.74465270917855,
            "unit": "iter/sec",
            "range": "stddev: 0.00019279217781963858",
            "extra": "mean: 4.1537786561266135 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.65677069806134,
            "unit": "iter/sec",
            "range": "stddev: 0.00013292282926236244",
            "extra": "mean: 2.1429025844929295 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.9789000709608,
            "unit": "iter/sec",
            "range": "stddev: 0.00015818450842783097",
            "extra": "mean: 2.2124926624738452 msec\nrounds: 477"
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
        "date": 1643843062598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.53277626079094,
            "unit": "iter/sec",
            "range": "stddev: 0.0004906819846288948",
            "extra": "mean: 8.365906249999979 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.38381467608798,
            "unit": "iter/sec",
            "range": "stddev: 0.00040684404546577666",
            "extra": "mean: 6.694165644171831 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.16510519508995,
            "unit": "iter/sec",
            "range": "stddev: 0.00035363525140933257",
            "extra": "mean: 4.946452054794506 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.2221987983575,
            "unit": "iter/sec",
            "range": "stddev: 0.00021396520851212227",
            "extra": "mean: 3.1623333333333146 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.96327604545877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161419215743589",
            "extra": "mean: 8.931499999999867 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.310307420071,
            "unit": "iter/sec",
            "range": "stddev: 0.00051521249369418",
            "extra": "mean: 7.733335570469644 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.19463405338072,
            "unit": "iter/sec",
            "range": "stddev: 0.00009955729154244234",
            "extra": "mean: 4.84978672985794 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.76268360797025,
            "unit": "iter/sec",
            "range": "stddev: 0.00014760530109293661",
            "extra": "mean: 3.2075679758308158 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.011527283778657,
            "unit": "iter/sec",
            "range": "stddev: 0.0020291880325458743",
            "extra": "mean: 76.85492857142836 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.347036290591706,
            "unit": "iter/sec",
            "range": "stddev: 0.0014034232872094875",
            "extra": "mean: 74.92299999999982 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36213411947944,
            "unit": "iter/sec",
            "range": "stddev: 0.00028845949757289827",
            "extra": "mean: 6.01098324022347 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.7788421938393,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398976251819971",
            "extra": "mean: 4.295923076923295 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.92345273797036,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798307611042828",
            "extra": "mean: 2.1462753036438964 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.5131198810941,
            "unit": "iter/sec",
            "range": "stddev: 0.00006978045567943274",
            "extra": "mean: 2.2547247311829244 msec\nrounds: 465"
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
        "date": 1643898540323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.12381566374654,
            "unit": "iter/sec",
            "range": "stddev: 0.0009420149248311392",
            "extra": "mean: 8.686299999999985 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.71130572797125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007887194915581089",
            "extra": "mean: 7.056599999999987 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.14563177231759,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091223569577762",
            "extra": "mean: 5.286931506849395 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.21810482700295,
            "unit": "iter/sec",
            "range": "stddev: 0.00032120906360827824",
            "extra": "mean: 3.20288921282797 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.13314434062367,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763758670991922",
            "extra": "mean: 9.247858333333584 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.11578209935374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008352114213383861",
            "extra": "mean: 7.5691184210526785 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.96689637520277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960315834690376",
            "extra": "mean: 5.209231481481484 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 280.554388912215,
            "unit": "iter/sec",
            "range": "stddev: 0.00041391909222334935",
            "extra": "mean: 3.5643712574851154 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.61776301007045,
            "unit": "iter/sec",
            "range": "stddev: 0.0016638590801094785",
            "extra": "mean: 73.43349999999938 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.487746398846122,
            "unit": "iter/sec",
            "range": "stddev: 0.005079536876982127",
            "extra": "mean: 80.07850000000006 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.66950871174467,
            "unit": "iter/sec",
            "range": "stddev: 0.0010480500476550937",
            "extra": "mean: 7.108861111110917 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.1883393383492,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560892559954561",
            "extra": "mean: 4.4407272727274005 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.22629814089254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818475043045874",
            "extra": "mean: 2.23101590457253 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.54437861302443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870768606402585",
            "extra": "mean: 2.3444219409282945 msec\nrounds: 474"
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
        "date": 1643988319513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.45626100233075,
            "unit": "iter/sec",
            "range": "stddev: 0.000855512500749453",
            "extra": "mean: 8.892346153846198 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.4512600903084,
            "unit": "iter/sec",
            "range": "stddev: 0.00044133250240260954",
            "extra": "mean: 6.691144654088117 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.66772359749004,
            "unit": "iter/sec",
            "range": "stddev: 0.00041361898690888614",
            "extra": "mean: 4.838684931506862 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.8645110868664,
            "unit": "iter/sec",
            "range": "stddev: 0.00020898997588978709",
            "extra": "mean: 3.1068973607037873 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.84849737927762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008798712090229715",
            "extra": "mean: 10.116491666666832 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.37489432241478,
            "unit": "iter/sec",
            "range": "stddev: 0.000775009368995503",
            "extra": "mean: 7.38689403973499 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.7801915968958,
            "unit": "iter/sec",
            "range": "stddev: 0.00020280953052883503",
            "extra": "mean: 4.955887850467201 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.75317621346767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004539987061774487",
            "extra": "mean: 3.336078078077996 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.556698322425017,
            "unit": "iter/sec",
            "range": "stddev: 0.0021353890025731788",
            "extra": "mean: 79.63876923076978 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.941082946795516,
            "unit": "iter/sec",
            "range": "stddev: 0.0049911781317497905",
            "extra": "mean: 77.27328571428568 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.4328308710818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703140679416169",
            "extra": "mean: 6.3925199999999505 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.43237353184688,
            "unit": "iter/sec",
            "range": "stddev: 0.00038741213757793294",
            "extra": "mean: 4.320916666666741 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.7910444413483,
            "unit": "iter/sec",
            "range": "stddev: 0.00023949402722699543",
            "extra": "mean: 2.2381827309237243 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.4914416183198,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249809194723982",
            "extra": "mean: 2.270191666666902 msec\nrounds: 480"
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
        "date": 1643988904861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.73235741568479,
            "unit": "iter/sec",
            "range": "stddev: 0.0007724825035058795",
            "extra": "mean: 8.715937007874052 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.9283853699485,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102325791915207",
            "extra": "mean: 7.146512820512852 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.1269141052147,
            "unit": "iter/sec",
            "range": "stddev: 0.000661319970361243",
            "extra": "mean: 5.520990654205652 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.32602871214397,
            "unit": "iter/sec",
            "range": "stddev: 0.00034278377997827125",
            "extra": "mean: 3.2224174174174487 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.29666062839246,
            "unit": "iter/sec",
            "range": "stddev: 0.000614191326354366",
            "extra": "mean: 9.066457627118595 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.97105082772623,
            "unit": "iter/sec",
            "range": "stddev: 0.000520625593356208",
            "extra": "mean: 7.195743243243068 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.0080491851958,
            "unit": "iter/sec",
            "range": "stddev: 0.0004568056610918191",
            "extra": "mean: 5.181131067961193 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.65874071766586,
            "unit": "iter/sec",
            "range": "stddev: 0.000262905373694743",
            "extra": "mean: 3.2609538461539516 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.69928517367589,
            "unit": "iter/sec",
            "range": "stddev: 0.005480680225188436",
            "extra": "mean: 85.47530769230768 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.233110661592823,
            "unit": "iter/sec",
            "range": "stddev: 0.004238248796688682",
            "extra": "mean: 81.74535714285724 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.54026115982225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652608508423079",
            "extra": "mean: 6.388132947977097 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.67834802685655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003495569624226526",
            "extra": "mean: 4.35391497975712 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 417.72368552606406,
            "unit": "iter/sec",
            "range": "stddev: 0.00032815373953495197",
            "extra": "mean: 2.393926977687753 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 417.8760208083296,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951887297458291",
            "extra": "mean: 2.393054279749346 msec\nrounds: 479"
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
        "date": 1644011630273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.90908828041918,
            "unit": "iter/sec",
            "range": "stddev: 0.0010209297190767349",
            "extra": "mean: 8.778930769230804 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.43685479103283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006628977520975523",
            "extra": "mean: 6.828881987577597 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.82719193360802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357442766830804",
            "extra": "mean: 5.0294931506849325 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.8285369390415,
            "unit": "iter/sec",
            "range": "stddev: 0.0004480576952120383",
            "extra": "mean: 3.462261764705938 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.41346778029066,
            "unit": "iter/sec",
            "range": "stddev: 0.0016693932362080782",
            "extra": "mean: 10.265521008403384 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.04487875305728,
            "unit": "iter/sec",
            "range": "stddev: 0.0009136365517383677",
            "extra": "mean: 7.689653061224378 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.4451372935095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716576225831035",
            "extra": "mean: 5.22342857142866 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.2851495548475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003128833921499794",
            "extra": "mean: 3.3191148036254434 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.899205607383905,
            "unit": "iter/sec",
            "range": "stddev: 0.0024022637534259245",
            "extra": "mean: 77.52415384615382 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.239270749279424,
            "unit": "iter/sec",
            "range": "stddev: 0.006784420140503005",
            "extra": "mean: 81.70421428571422 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.21233408766102,
            "unit": "iter/sec",
            "range": "stddev: 0.0009995241619284376",
            "extra": "mean: 6.613217142857398 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.80977737814163,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419001903111541",
            "extra": "mean: 4.570179687500092 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 424.9635210255241,
            "unit": "iter/sec",
            "range": "stddev: 0.0003091327588990602",
            "extra": "mean: 2.3531431535271428 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.4586132876239,
            "unit": "iter/sec",
            "range": "stddev: 0.0001813969151938026",
            "extra": "mean: 2.296429487179513 msec\nrounds: 468"
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
        "date": 1644244775343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.68713056396896,
            "unit": "iter/sec",
            "range": "stddev: 0.0010680674824579965",
            "extra": "mean: 9.644398437499992 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.20604012051103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735128325078256",
            "extra": "mean: 6.934522292993508 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.41014684187803,
            "unit": "iter/sec",
            "range": "stddev: 0.0004710648752663129",
            "extra": "mean: 5.040064814814865 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.8956429166365,
            "unit": "iter/sec",
            "range": "stddev: 0.00028869873426882504",
            "extra": "mean: 3.2373392857142886 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.32098810831877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006622145162076635",
            "extra": "mean: 9.064458333333173 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.90957045828165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310335467693502",
            "extra": "mean: 7.251128378378245 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.78812743592022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005568897520949365",
            "extra": "mean: 5.269033492822876 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.03397776876324,
            "unit": "iter/sec",
            "range": "stddev: 0.00044879581146720906",
            "extra": "mean: 3.5456720779220783 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.746195033172018,
            "unit": "iter/sec",
            "range": "stddev: 0.002793196932619279",
            "extra": "mean: 78.45478571428544 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.492831451404426,
            "unit": "iter/sec",
            "range": "stddev: 0.001982669091219287",
            "extra": "mean: 74.11342857142955 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.69877135883394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315737798229241",
            "extra": "mean: 6.184338888888953 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.0120386517272,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662861296685651",
            "extra": "mean: 4.25510116731482 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.32621307231284,
            "unit": "iter/sec",
            "range": "stddev: 0.00027796304345186043",
            "extra": "mean: 2.245544885177505 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 408.6854854518571,
            "unit": "iter/sec",
            "range": "stddev: 0.0003461047778291128",
            "extra": "mean: 2.446869379014928 msec\nrounds: 467"
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
        "date": 1644418857479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.20699522419446,
            "unit": "iter/sec",
            "range": "stddev: 0.00044277578313186314",
            "extra": "mean: 8.05107633587781 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.56658384951024,
            "unit": "iter/sec",
            "range": "stddev: 0.00034018697615271256",
            "extra": "mean: 6.469703703703669 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.67045686338673,
            "unit": "iter/sec",
            "range": "stddev: 0.00024157613644501153",
            "extra": "mean: 4.769389140271496 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.0979051247288,
            "unit": "iter/sec",
            "range": "stddev: 0.00026097306275929717",
            "extra": "mean: 3.1436862170088538 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.82200325910914,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143397155827192",
            "extra": "mean: 8.48737903225803 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.88615746772237,
            "unit": "iter/sec",
            "range": "stddev: 0.00033886159060665384",
            "extra": "mean: 6.807993464052227 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.87444157417406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003211293213009408",
            "extra": "mean: 4.953574074074024 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.5143365443925,
            "unit": "iter/sec",
            "range": "stddev: 0.000558495684393909",
            "extra": "mean: 3.490226744186185 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.561673161739472,
            "unit": "iter/sec",
            "range": "stddev: 0.002251349447589255",
            "extra": "mean: 73.737214285714 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.501627910565205,
            "unit": "iter/sec",
            "range": "stddev: 0.0026874862964135957",
            "extra": "mean: 74.06514285714293 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.11491190282936,
            "unit": "iter/sec",
            "range": "stddev: 0.00024168278183391828",
            "extra": "mean: 5.810071823204769 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.53051082423673,
            "unit": "iter/sec",
            "range": "stddev: 0.00022665805001486795",
            "extra": "mean: 4.089469230769237 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.14697255468667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099840634130196",
            "extra": "mean: 2.1452461538462173 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.2381957843422,
            "unit": "iter/sec",
            "range": "stddev: 0.00013081520129599262",
            "extra": "mean: 2.2063453815260874 msec\nrounds: 498"
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
        "date": 1644420983689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.82159131627695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008349270507763633",
            "extra": "mean: 8.633968749999942 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.53431592274194,
            "unit": "iter/sec",
            "range": "stddev: 0.0006748676860055593",
            "extra": "mean: 6.918772151898729 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.31180389421368,
            "unit": "iter/sec",
            "range": "stddev: 0.00048041601095034865",
            "extra": "mean: 4.9674186046511455 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.0865530889414,
            "unit": "iter/sec",
            "range": "stddev: 0.00015134200630354398",
            "extra": "mean: 3.07610385756684 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.16986476461825,
            "unit": "iter/sec",
            "range": "stddev: 0.0005102153391966325",
            "extra": "mean: 8.91505042016802 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.5587199367404,
            "unit": "iter/sec",
            "range": "stddev: 0.00030165236195353335",
            "extra": "mean: 7.014653333333409 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.750304556085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706148726897126",
            "extra": "mean: 4.956622009569298 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.66805161915494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002969510462076755",
            "extra": "mean: 3.2608548387097085 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.626484435148097,
            "unit": "iter/sec",
            "range": "stddev: 0.001520017244335317",
            "extra": "mean: 73.38650000000031 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.183021774585429,
            "unit": "iter/sec",
            "range": "stddev: 0.002719086607304284",
            "extra": "mean: 75.85514285714267 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.95609665686385,
            "unit": "iter/sec",
            "range": "stddev: 0.0004012974470250818",
            "extra": "mean: 6.0622191011234134 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.30375320227657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003708134757477556",
            "extra": "mean: 4.458240157480568 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 439.0568261090336,
            "unit": "iter/sec",
            "range": "stddev: 0.000154387222544322",
            "extra": "mean: 2.277609504132078 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.6307199764497,
            "unit": "iter/sec",
            "range": "stddev: 0.000137506798417631",
            "extra": "mean: 2.327580299785861 msec\nrounds: 467"
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
        "date": 1644539460049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.2881240819988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009414419997082457",
            "extra": "mean: 8.905661290322621 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.83558357994107,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942473127054205",
            "extra": "mean: 6.904380645161391 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.7056876572263,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411694875441034",
            "extra": "mean: 5.083737089201871 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.63536578318514,
            "unit": "iter/sec",
            "range": "stddev: 0.00019492967100091262",
            "extra": "mean: 3.208878419452985 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.34161097549463,
            "unit": "iter/sec",
            "range": "stddev: 0.00043296458023275804",
            "extra": "mean: 9.316051724137932 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.16076577271835,
            "unit": "iter/sec",
            "range": "stddev: 0.00032780729390101735",
            "extra": "mean: 7.237944827586235 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.1579860544891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005326995198257537",
            "extra": "mean: 5.286586206896592 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.9865816104306,
            "unit": "iter/sec",
            "range": "stddev: 0.00023681747310194296",
            "extra": "mean: 3.2788327759197378 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.349443657563254,
            "unit": "iter/sec",
            "range": "stddev: 0.0037226404245868042",
            "extra": "mean: 80.97530769230751 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.391484159036631,
            "unit": "iter/sec",
            "range": "stddev: 0.0023652870845679882",
            "extra": "mean: 80.70058333333208 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.17433049423977,
            "unit": "iter/sec",
            "range": "stddev: 0.0003887319217353746",
            "extra": "mean: 6.091086206896918 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.66371071182698,
            "unit": "iter/sec",
            "range": "stddev: 0.0004496379804692833",
            "extra": "mean: 4.373234374999924 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.2252592987775,
            "unit": "iter/sec",
            "range": "stddev: 0.00017607556880330316",
            "extra": "mean: 2.2923936170213484 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.1470261198737,
            "unit": "iter/sec",
            "range": "stddev: 0.00021211191360010382",
            "extra": "mean: 2.3521274725276844 msec\nrounds: 455"
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
        "date": 1644540414905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.77650234816154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552397892172955",
            "extra": "mean: 7.887897058823548 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.83435635860698,
            "unit": "iter/sec",
            "range": "stddev: 0.0007737366540171122",
            "extra": "mean: 6.76432748538009 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.01423077608024,
            "unit": "iter/sec",
            "range": "stddev: 0.00034730644086599846",
            "extra": "mean: 4.78436322869955 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.5286603940748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003123020767160979",
            "extra": "mean: 3.0719261363636354 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.41015573300426,
            "unit": "iter/sec",
            "range": "stddev: 0.0010244767341474669",
            "extra": "mean: 9.13991935483868 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.7190311621767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004972976269660969",
            "extra": "mean: 6.8157483870967255 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.1137509482647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598748906325984",
            "extra": "mean: 4.805064516128929 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.06446006129386,
            "unit": "iter/sec",
            "range": "stddev: 0.00016265110811890251",
            "extra": "mean: 3.0763129251701056 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.705442627059167,
            "unit": "iter/sec",
            "range": "stddev: 0.002569558909425954",
            "extra": "mean: 72.96371428571469 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.34133813621511,
            "unit": "iter/sec",
            "range": "stddev: 0.0021424848621674247",
            "extra": "mean: 74.95499999999973 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.16306829119347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003380825149949521",
            "extra": "mean: 5.8767158469941245 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.88097466312442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084152083388184",
            "extra": "mean: 4.050534883720895 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 488.66915712425225,
            "unit": "iter/sec",
            "range": "stddev: 0.00013522579245061554",
            "extra": "mean: 2.046374291115192 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 469.33280636316897,
            "unit": "iter/sec",
            "range": "stddev: 0.00006982049916131899",
            "extra": "mean: 2.130684210526297 msec\nrounds: 494"
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
        "date": 1644598697751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.2469293566525,
            "unit": "iter/sec",
            "range": "stddev: 0.00034395355197903516",
            "extra": "mean: 7.920984732824359 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.9545077159176,
            "unit": "iter/sec",
            "range": "stddev: 0.00034048124942957103",
            "extra": "mean: 6.624512345679053 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.80108528607772,
            "unit": "iter/sec",
            "range": "stddev: 0.00048599840864299826",
            "extra": "mean: 5.1599298245614005 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.8351805505988,
            "unit": "iter/sec",
            "range": "stddev: 0.00023164427507585078",
            "extra": "mean: 3.196571428571337 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.56350740878965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395364772937975",
            "extra": "mean: 9.211198347107167 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.87921624058782,
            "unit": "iter/sec",
            "range": "stddev: 0.0003281740376172262",
            "extra": "mean: 6.902301282051322 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.56358219371685,
            "unit": "iter/sec",
            "range": "stddev: 0.00018133164898236678",
            "extra": "mean: 4.912470046083055 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.8801738138064,
            "unit": "iter/sec",
            "range": "stddev: 0.00023898114689647907",
            "extra": "mean: 3.2270538243626286 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.568205430383472,
            "unit": "iter/sec",
            "range": "stddev: 0.0026349856350082173",
            "extra": "mean: 73.7017142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.322485024099352,
            "unit": "iter/sec",
            "range": "stddev: 0.0025071613572774753",
            "extra": "mean: 75.06107142857184 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.22985856911467,
            "unit": "iter/sec",
            "range": "stddev: 0.00047761117529362333",
            "extra": "mean: 6.0890267379677425 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.66059200879147,
            "unit": "iter/sec",
            "range": "stddev: 0.00034728143268781034",
            "extra": "mean: 4.190050781249899 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.7724948666205,
            "unit": "iter/sec",
            "range": "stddev: 0.00011022072955823767",
            "extra": "mean: 2.1241682785297824 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.1569078749723,
            "unit": "iter/sec",
            "range": "stddev: 0.00011626028353811599",
            "extra": "mean: 2.2214476386036988 msec\nrounds: 487"
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
        "date": 1644601107322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.71429172994807,
            "unit": "iter/sec",
            "range": "stddev: 0.0004368512773443796",
            "extra": "mean: 8.284023255813954 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.79459155870273,
            "unit": "iter/sec",
            "range": "stddev: 0.000324878500753048",
            "extra": "mean: 6.587850000000001 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.0436774571264,
            "unit": "iter/sec",
            "range": "stddev: 0.0004579298200823162",
            "extra": "mean: 5.100904109589019 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.80838704634044,
            "unit": "iter/sec",
            "range": "stddev: 0.00014019033232966357",
            "extra": "mean: 3.032063583815086 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.88220514946296,
            "unit": "iter/sec",
            "range": "stddev: 0.0008089581105873695",
            "extra": "mean: 9.444457627118771 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.3530669807493,
            "unit": "iter/sec",
            "range": "stddev: 0.0004744850920655119",
            "extra": "mean: 6.975783783783913 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.43678054625641,
            "unit": "iter/sec",
            "range": "stddev: 0.0002845106790574327",
            "extra": "mean: 5.039388349514651 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.9023863476041,
            "unit": "iter/sec",
            "range": "stddev: 0.00036209271606322163",
            "extra": "mean: 3.522337423312889 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.685382754712158,
            "unit": "iter/sec",
            "range": "stddev: 0.006562913696050213",
            "extra": "mean: 85.5769999999998 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.766570552628336,
            "unit": "iter/sec",
            "range": "stddev: 0.0025093558387104275",
            "extra": "mean: 78.3295714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.02423801996258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242525568653214",
            "extra": "mean: 6.6655895953755 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.62008090513547,
            "unit": "iter/sec",
            "range": "stddev: 0.00033634612082804517",
            "extra": "mean: 4.226184000000046 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.1549212364693,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838573952191542",
            "extra": "mean: 2.2514666666669605 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 411.8868012762966,
            "unit": "iter/sec",
            "range": "stddev: 0.00031098175839864754",
            "extra": "mean: 2.4278515283843554 msec\nrounds: 458"
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
        "date": 1644601581139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.2107088729915,
            "unit": "iter/sec",
            "range": "stddev: 0.00013272074287097498",
            "extra": "mean: 7.563683823529396 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.1286313214777,
            "unit": "iter/sec",
            "range": "stddev: 0.00007273052680200751",
            "extra": "mean: 6.130131736526982 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.09286152203222,
            "unit": "iter/sec",
            "range": "stddev: 0.000264395442639916",
            "extra": "mean: 4.564274678111495 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.83587869675455,
            "unit": "iter/sec",
            "range": "stddev: 0.00017892391316257756",
            "extra": "mean: 3.186378830083526 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.01406394838327,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550685609004117",
            "extra": "mean: 9.432710743801742 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.25937317576822,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545640552925716",
            "extra": "mean: 7.029413793103478 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.36276952003922,
            "unit": "iter/sec",
            "range": "stddev: 0.00012842246286211064",
            "extra": "mean: 4.6218672566371515 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.77051851564966,
            "unit": "iter/sec",
            "range": "stddev: 0.00014308479915374774",
            "extra": "mean: 3.032411764705837 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.888104468173594,
            "unit": "iter/sec",
            "range": "stddev: 0.0030896779644180657",
            "extra": "mean: 72.00406666666646 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.909477122884415,
            "unit": "iter/sec",
            "range": "stddev: 0.0012814545650153282",
            "extra": "mean: 71.89342857142782 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.71926043682515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986050595268368",
            "extra": "mean: 5.857569892472976 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.74926536014783,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849832769914473",
            "extra": "mean: 4.05269696969687 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 482.3555863887657,
            "unit": "iter/sec",
            "range": "stddev: 0.00011999558583850155",
            "extra": "mean: 2.073159362549658 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.0791445055307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000937556749327259",
            "extra": "mean: 2.1782736418512094 msec\nrounds: 497"
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
        "date": 1644602066149,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.43727146231782,
            "unit": "iter/sec",
            "range": "stddev: 0.00040288500386075407",
            "extra": "mean: 7.725749999999986 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.4993999980689,
            "unit": "iter/sec",
            "range": "stddev: 0.0004518934890238948",
            "extra": "mean: 6.4725170454545395 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.58942360567872,
            "unit": "iter/sec",
            "range": "stddev: 0.00019195044226652525",
            "extra": "mean: 4.553953389830471 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.2701813845932,
            "unit": "iter/sec",
            "range": "stddev: 0.00008011799122954177",
            "extra": "mean: 2.9216684782608806 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.94060953181351,
            "unit": "iter/sec",
            "range": "stddev: 0.0005380817114059299",
            "extra": "mean: 8.478843749999937 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.9786382265836,
            "unit": "iter/sec",
            "range": "stddev: 0.00034686083204229227",
            "extra": "mean: 6.757732142857058 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2416814109616,
            "unit": "iter/sec",
            "range": "stddev: 0.0001813658770102178",
            "extra": "mean: 4.711609865470813 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.303358097962,
            "unit": "iter/sec",
            "range": "stddev: 0.00010838294138393877",
            "extra": "mean: 3.0183817204301113 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.294113779239865,
            "unit": "iter/sec",
            "range": "stddev: 0.0016572498245441608",
            "extra": "mean: 69.95886666666635 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.846232396895067,
            "unit": "iter/sec",
            "range": "stddev: 0.003053568823932628",
            "extra": "mean: 72.22181250000136 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.93726795908037,
            "unit": "iter/sec",
            "range": "stddev: 0.00018850026135888096",
            "extra": "mean: 5.683844086021506 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.22559615062087,
            "unit": "iter/sec",
            "range": "stddev: 0.0001856741083599741",
            "extra": "mean: 4.028593406592967 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.36635601855215,
            "unit": "iter/sec",
            "range": "stddev: 0.00010508451815696387",
            "extra": "mean: 2.0774198019802186 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.42226087754995,
            "unit": "iter/sec",
            "range": "stddev: 0.00011928708278239644",
            "extra": "mean: 2.1672123015871905 msec\nrounds: 504"
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
        "date": 1644603568194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.89699397621341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604292697976577",
            "extra": "mean: 8.136895522388034 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.69258586230663,
            "unit": "iter/sec",
            "range": "stddev: 0.00038199718986832307",
            "extra": "mean: 6.680357575757565 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.46041717568426,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116272523986817",
            "extra": "mean: 4.706759090909138 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.00739872705185,
            "unit": "iter/sec",
            "range": "stddev: 0.00021898014094399586",
            "extra": "mean: 3.1445809248554863 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.20904198331964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006974809332187426",
            "extra": "mean: 9.24137190082645 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.99347231332825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007580232506013215",
            "extra": "mean: 7.3532941176470965 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.0176754654185,
            "unit": "iter/sec",
            "range": "stddev: 0.00039853610072850763",
            "extra": "mean: 4.974686915887813 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.45000054769304,
            "unit": "iter/sec",
            "range": "stddev: 0.00027046135366001983",
            "extra": "mean: 3.231539823008913 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.723404776725166,
            "unit": "iter/sec",
            "range": "stddev: 0.0018880933882772432",
            "extra": "mean: 72.86821428571396 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.772207684891752,
            "unit": "iter/sec",
            "range": "stddev: 0.002335547687373962",
            "extra": "mean: 72.61000000000071 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.89095658099743,
            "unit": "iter/sec",
            "range": "stddev: 0.00047394961357295057",
            "extra": "mean: 5.886128491620087 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.52588988944393,
            "unit": "iter/sec",
            "range": "stddev: 0.00020436505010362651",
            "extra": "mean: 4.089546511627559 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.75990031247505,
            "unit": "iter/sec",
            "range": "stddev: 0.00009197756124482681",
            "extra": "mean: 2.084375954198516 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.7397585630282,
            "unit": "iter/sec",
            "range": "stddev: 0.00008789448653425805",
            "extra": "mean: 2.179885177453189 msec\nrounds: 479"
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
        "date": 1644938336219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.54889315871318,
            "unit": "iter/sec",
            "range": "stddev: 0.0008404686931662666",
            "extra": "mean: 8.295389312977036 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.79777928230106,
            "unit": "iter/sec",
            "range": "stddev: 0.0004425823313785684",
            "extra": "mean: 6.587711656441837 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.01735120131383,
            "unit": "iter/sec",
            "range": "stddev: 0.000598550271459511",
            "extra": "mean: 5.12774885844754 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.9299394623942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002650814148163119",
            "extra": "mean: 3.1453470588235786 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.38879814877617,
            "unit": "iter/sec",
            "range": "stddev: 0.000497016440467337",
            "extra": "mean: 8.7421147540984 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.72458986826325,
            "unit": "iter/sec",
            "range": "stddev: 0.00044328151743343915",
            "extra": "mean: 6.957751633986861 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.97725505815356,
            "unit": "iter/sec",
            "range": "stddev: 0.0003237603814300734",
            "extra": "mean: 4.926660377358523 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.57129257946286,
            "unit": "iter/sec",
            "range": "stddev: 0.00018597985697101449",
            "extra": "mean: 3.1390147928993475 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.519248344329444,
            "unit": "iter/sec",
            "range": "stddev: 0.004539161342396546",
            "extra": "mean: 79.87699999999975 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.55486025543755,
            "unit": "iter/sec",
            "range": "stddev: 0.0028999682415843837",
            "extra": "mean: 79.65042857142889 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.645032107842,
            "unit": "iter/sec",
            "range": "stddev: 0.000472817034950083",
            "extra": "mean: 6.037005681818197 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.01521536998715,
            "unit": "iter/sec",
            "range": "stddev: 0.0004025802066521359",
            "extra": "mean: 4.2550436507937945 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 421.55553994242393,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050430069389979",
            "extra": "mean: 2.372166666666461 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.7984008855682,
            "unit": "iter/sec",
            "range": "stddev: 0.00019042338473267698",
            "extra": "mean: 2.2737690677965685 msec\nrounds: 472"
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
        "date": 1644939457974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.87394986752675,
            "unit": "iter/sec",
            "range": "stddev: 0.0007387229649657412",
            "extra": "mean: 8.412272000000009 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.7210258027037,
            "unit": "iter/sec",
            "range": "stddev: 0.0004625883625356615",
            "extra": "mean: 6.862427672955936 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.91727277365243,
            "unit": "iter/sec",
            "range": "stddev: 0.00024404864934050586",
            "extra": "mean: 4.832849315068557 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.65744703894063,
            "unit": "iter/sec",
            "range": "stddev: 0.00024041499164352502",
            "extra": "mean: 3.198388554216822 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.1747286361321,
            "unit": "iter/sec",
            "range": "stddev: 0.0006944654361364812",
            "extra": "mean: 8.914663865546402 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.67116291840964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005447333414112367",
            "extra": "mean: 7.211304635761747 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.24927840164756,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547028909824664",
            "extra": "mean: 5.1480242718447 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.8625024219893,
            "unit": "iter/sec",
            "range": "stddev: 0.00032740663807510857",
            "extra": "mean: 3.258788519637457 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.137164192969848,
            "unit": "iter/sec",
            "range": "stddev: 0.0027289859616938107",
            "extra": "mean: 76.11992857142903 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.817707479772958,
            "unit": "iter/sec",
            "range": "stddev: 0.0033335769761675756",
            "extra": "mean: 78.0170714285729 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.59908709323003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617576457100137",
            "extra": "mean: 6.265699999999678 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.6151392084019,
            "unit": "iter/sec",
            "range": "stddev: 0.0003002989890171816",
            "extra": "mean: 4.208486055776705 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.914975150941,
            "unit": "iter/sec",
            "range": "stddev: 0.00018415322711724675",
            "extra": "mean: 2.227593320235674 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.5367785994373,
            "unit": "iter/sec",
            "range": "stddev: 0.00020169720991119306",
            "extra": "mean: 2.229471578947249 msec\nrounds: 475"
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
        "date": 1644940351817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.84857975402647,
            "unit": "iter/sec",
            "range": "stddev: 0.0003899846908492236",
            "extra": "mean: 8.074376000000022 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.54608753283574,
            "unit": "iter/sec",
            "range": "stddev: 0.0003444250079516506",
            "extra": "mean: 6.428962732919272 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.33050960187646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002143396720276798",
            "extra": "mean: 4.823216814159364 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.90795211850076,
            "unit": "iter/sec",
            "range": "stddev: 0.00011381133767087546",
            "extra": "mean: 3.0128835227273223 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.13150526569652,
            "unit": "iter/sec",
            "range": "stddev: 0.00048250993584101617",
            "extra": "mean: 8.761822580645143 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.90551594442542,
            "unit": "iter/sec",
            "range": "stddev: 0.0005356727734927778",
            "extra": "mean: 7.096954248366049 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.92901234860793,
            "unit": "iter/sec",
            "range": "stddev: 0.00036407369997508063",
            "extra": "mean: 4.976882075471607 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.55648066885465,
            "unit": "iter/sec",
            "range": "stddev: 0.0002420198677069342",
            "extra": "mean: 3.1490461095101754 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.57991616384444,
            "unit": "iter/sec",
            "range": "stddev: 0.0034952481188164092",
            "extra": "mean: 79.49178571428561 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.177474222832874,
            "unit": "iter/sec",
            "range": "stddev: 0.0020646856686314732",
            "extra": "mean: 75.88707692307833 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.50457648383235,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734526785220565",
            "extra": "mean: 6.308966101694868 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.43484444715904,
            "unit": "iter/sec",
            "range": "stddev: 0.00028476220015611036",
            "extra": "mean: 4.124819607842962 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.9229009266235,
            "unit": "iter/sec",
            "range": "stddev: 0.00025223081431057843",
            "extra": "mean: 2.1695602409635852 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.17665083859083,
            "unit": "iter/sec",
            "range": "stddev: 0.00020114616584310759",
            "extra": "mean: 2.2312630480166322 msec\nrounds: 479"
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
        "date": 1645454531971,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.1262087780543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006610309543997866",
            "extra": "mean: 8.255851562499993 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.01755244514615,
            "unit": "iter/sec",
            "range": "stddev: 0.0001946719578374324",
            "extra": "mean: 6.621746835443041 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.07776339912272,
            "unit": "iter/sec",
            "range": "stddev: 0.00017711195303006782",
            "extra": "mean: 4.876199074074151 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.6947656672165,
            "unit": "iter/sec",
            "range": "stddev: 0.00008052816845511898",
            "extra": "mean: 3.0609611940297734 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.0392859109661,
            "unit": "iter/sec",
            "range": "stddev: 0.0004273233236632018",
            "extra": "mean: 8.925440677966003 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.7307348166668,
            "unit": "iter/sec",
            "range": "stddev: 0.0004985404003141814",
            "extra": "mean: 7.20820805369123 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.32249425875108,
            "unit": "iter/sec",
            "range": "stddev: 0.0002161520898314523",
            "extra": "mean: 5.016995215310958 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.2743328666296,
            "unit": "iter/sec",
            "range": "stddev: 0.00018793906500300635",
            "extra": "mean: 3.1223232628398776 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.158686236766187,
            "unit": "iter/sec",
            "range": "stddev: 0.003924471070961208",
            "extra": "mean: 75.99542857142819 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.65165082587611,
            "unit": "iter/sec",
            "range": "stddev: 0.0018088181938053646",
            "extra": "mean: 73.25121428571434 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.54993301865423,
            "unit": "iter/sec",
            "range": "stddev: 0.00031028497595692506",
            "extra": "mean: 5.863385474860451 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.13357106865334,
            "unit": "iter/sec",
            "range": "stddev: 0.00016666215210756625",
            "extra": "mean: 4.062834645669171 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.9588191360444,
            "unit": "iter/sec",
            "range": "stddev: 0.00011796691773782213",
            "extra": "mean: 2.178844720496765 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.5887958417351,
            "unit": "iter/sec",
            "range": "stddev: 0.00014289611144174932",
            "extra": "mean: 2.2341935483871995 msec\nrounds: 465"
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
        "date": 1645922545111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.89222081956939,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099697591828531",
            "extra": "mean: 8.203968992248056 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.7249584313921,
            "unit": "iter/sec",
            "range": "stddev: 0.0003782687505487267",
            "extra": "mean: 6.63460126582278 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.4651844331521,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114966870614978",
            "extra": "mean: 4.774063063063045 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.7509015573979,
            "unit": "iter/sec",
            "range": "stddev: 0.0001465833208952833",
            "extra": "mean: 3.051097633136101 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.80007396299686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003576720044527486",
            "extra": "mean: 8.488959016393471 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.19097063617065,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331836349630091",
            "extra": "mean: 7.452066225165629 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.33392905521728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002429105310123666",
            "extra": "mean: 4.870115740740954 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.21460006521505,
            "unit": "iter/sec",
            "range": "stddev: 0.00006952626112588139",
            "extra": "mean: 3.093919642857191 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.183190196467967,
            "unit": "iter/sec",
            "range": "stddev: 0.0028544744228617925",
            "extra": "mean: 82.08030769230791 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.327951379633282,
            "unit": "iter/sec",
            "range": "stddev: 0.0009176958125617992",
            "extra": "mean: 75.0302857142862 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.62131079343035,
            "unit": "iter/sec",
            "range": "stddev: 0.00024119349185652204",
            "extra": "mean: 5.8609325842695625 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.48558845616478,
            "unit": "iter/sec",
            "range": "stddev: 0.000296667793105134",
            "extra": "mean: 4.1931254901962625 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.79200557747964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000774877908573541",
            "extra": "mean: 2.1515000000001128 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.79678509627286,
            "unit": "iter/sec",
            "range": "stddev: 0.00012361686803483575",
            "extra": "mean: 2.1987842323650484 msec\nrounds: 482"
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
        "date": 1646063536264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.5010657323105,
            "unit": "iter/sec",
            "range": "stddev: 0.0009856525508276158",
            "extra": "mean: 9.478577235772345 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.28531561616006,
            "unit": "iter/sec",
            "range": "stddev: 0.0009002838437568767",
            "extra": "mean: 7.231425806451568 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.20818936135203,
            "unit": "iter/sec",
            "range": "stddev: 0.00037632933635926505",
            "extra": "mean: 4.969976635514019 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.5182951316803,
            "unit": "iter/sec",
            "range": "stddev: 0.0002227776833280081",
            "extra": "mean: 3.210084337349417 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.04154385671636,
            "unit": "iter/sec",
            "range": "stddev: 0.0010483002749921387",
            "extra": "mean: 10.633598290598254 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.1410166051133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005154506137325299",
            "extra": "mean: 7.238979591836775 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.87729571994922,
            "unit": "iter/sec",
            "range": "stddev: 0.0006039936344781017",
            "extra": "mean: 5.379893203883509 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.02990973649383,
            "unit": "iter/sec",
            "range": "stddev: 0.0003759046172205847",
            "extra": "mean: 3.436072948328323 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.971778968298905,
            "unit": "iter/sec",
            "range": "stddev: 0.0028220446410439724",
            "extra": "mean: 77.0904285714281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.534965650190687,
            "unit": "iter/sec",
            "range": "stddev: 0.0021073849791998253",
            "extra": "mean: 73.88271428571461 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 145.98697563925535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006361660970881734",
            "extra": "mean: 6.849926136363523 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.2360200203061,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545678091067365",
            "extra": "mean: 4.162573122529563 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.34047125242085,
            "unit": "iter/sec",
            "range": "stddev: 0.000248243749202207",
            "extra": "mean: 2.2709699999997497 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.14150682021904,
            "unit": "iter/sec",
            "range": "stddev: 0.00017510971394956815",
            "extra": "mean: 2.282367647058662 msec\nrounds: 476"
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
        "date": 1646086880374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.01093933963325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169741542502579",
            "extra": "mean: 8.473790697674382 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.30669041432316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005192057881046691",
            "extra": "mean: 7.076805755395696 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.6197895970097,
            "unit": "iter/sec",
            "range": "stddev: 0.00027245640891104296",
            "extra": "mean: 5.009523364486002 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.8079458857775,
            "unit": "iter/sec",
            "range": "stddev: 0.00016378428721504492",
            "extra": "mean: 3.1564864864864903 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.747701676725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005486836222057701",
            "extra": "mean: 9.195596638655468 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.97037248296772,
            "unit": "iter/sec",
            "range": "stddev: 0.0004669744287291515",
            "extra": "mean: 7.247932885905986 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.41667650043868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002102198900807567",
            "extra": "mean: 5.117270531400912 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.0052766392532,
            "unit": "iter/sec",
            "range": "stddev: 0.00017408987345970706",
            "extra": "mean: 3.194834319526588 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.573397206191178,
            "unit": "iter/sec",
            "range": "stddev: 0.005565233358390005",
            "extra": "mean: 79.53299999999977 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.16498452644161,
            "unit": "iter/sec",
            "range": "stddev: 0.0016240848056817045",
            "extra": "mean: 75.95907142857021 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.77739430543986,
            "unit": "iter/sec",
            "range": "stddev: 0.00027355518528038097",
            "extra": "mean: 6.181333333333175 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.40481798052122,
            "unit": "iter/sec",
            "range": "stddev: 0.00035196605241955513",
            "extra": "mean: 4.516613545817138 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 432.72887941439893,
            "unit": "iter/sec",
            "range": "stddev: 0.00021029117161655737",
            "extra": "mean: 2.310915789473711 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.3355814534959,
            "unit": "iter/sec",
            "range": "stddev: 0.00009936467520673427",
            "extra": "mean: 2.2556276595743894 msec\nrounds: 470"
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
        "date": 1646432966885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.30456838638344,
            "unit": "iter/sec",
            "range": "stddev: 0.0025105085472577377",
            "extra": "mean: 9.319267716535508 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.16443082160816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005898073955464566",
            "extra": "mean: 7.034108280254907 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.06002324464663,
            "unit": "iter/sec",
            "range": "stddev: 0.0006074740916953353",
            "extra": "mean: 5.206705607476664 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.67162847635905,
            "unit": "iter/sec",
            "range": "stddev: 0.00043371938044572283",
            "extra": "mean: 3.667414925373144 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.8383292612468,
            "unit": "iter/sec",
            "range": "stddev: 0.0009030609750889023",
            "extra": "mean: 9.44837288135608 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.09161019266287,
            "unit": "iter/sec",
            "range": "stddev: 0.0008966998481995093",
            "extra": "mean: 7.51362162162141 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.37029261813657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007829377610549565",
            "extra": "mean: 5.637922705314111 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.7887693573705,
            "unit": "iter/sec",
            "range": "stddev: 0.00020781649393121956",
            "extra": "mean: 3.1970457317074263 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.115575131011273,
            "unit": "iter/sec",
            "range": "stddev: 0.005977555820713791",
            "extra": "mean: 82.53838461538484 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.922245923262116,
            "unit": "iter/sec",
            "range": "stddev: 0.004238560014261712",
            "extra": "mean: 77.38592857142886 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.97630162982358,
            "unit": "iter/sec",
            "range": "stddev: 0.0006109741159098524",
            "extra": "mean: 6.2902457142857715 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.58659525871747,
            "unit": "iter/sec",
            "range": "stddev: 0.0005364236543450363",
            "extra": "mean: 4.617090909091017 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 411.3829492771267,
            "unit": "iter/sec",
            "range": "stddev: 0.00032935067055231166",
            "extra": "mean: 2.430825102880852 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 398.6027288291256,
            "unit": "iter/sec",
            "range": "stddev: 0.0002738800166837749",
            "extra": "mean: 2.50876355748353 msec\nrounds: 461"
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
        "date": 1646435246414,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.90044375127684,
            "unit": "iter/sec",
            "range": "stddev: 0.00044310259747155684",
            "extra": "mean: 8.48173228346454 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.28631266748113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006109224896315137",
            "extra": "mean: 7.391730769230809 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.35318855776066,
            "unit": "iter/sec",
            "range": "stddev: 0.00031509120347061295",
            "extra": "mean: 4.869658986175057 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.95385555180866,
            "unit": "iter/sec",
            "range": "stddev: 0.0001905726442897209",
            "extra": "mean: 3.215911242603609 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.33240143487028,
            "unit": "iter/sec",
            "range": "stddev: 0.000504784130415834",
            "extra": "mean: 9.063520661156863 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.3381605868316,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040818701000864",
            "extra": "mean: 7.499728476821057 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.8876913714412,
            "unit": "iter/sec",
            "range": "stddev: 0.0003213653967573735",
            "extra": "mean: 5.131160377358443 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.6446015677826,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270094326432399",
            "extra": "mean: 3.1187177177177743 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.6010538873755,
            "unit": "iter/sec",
            "range": "stddev: 0.001594779098692525",
            "extra": "mean: 73.52371428571429 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.711799001034326,
            "unit": "iter/sec",
            "range": "stddev: 0.005876629246617418",
            "extra": "mean: 78.66707142857062 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.07674885000955,
            "unit": "iter/sec",
            "range": "stddev: 0.0007168970453849266",
            "extra": "mean: 6.286273809523735 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.8485252490441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006077278624623227",
            "extra": "mean: 4.548586345381219 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 433.39268479234835,
            "unit": "iter/sec",
            "range": "stddev: 0.00022672596102656954",
            "extra": "mean: 2.3073762781186082 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.2674495092808,
            "unit": "iter/sec",
            "range": "stddev: 0.0001540210965157034",
            "extra": "mean: 2.3133826086956613 msec\nrounds: 460"
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
        "date": 1646435505482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.36006369585895,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912320065553875",
            "extra": "mean: 8.821448818897673 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.90679932795095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005143721121635293",
            "extra": "mean: 6.715610062893162 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.03656582528367,
            "unit": "iter/sec",
            "range": "stddev: 0.0003373682467097809",
            "extra": "mean: 4.949599078340976 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.3102727713708,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078060208458953",
            "extra": "mean: 3.171479289940841 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.2674637411782,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462475668087289",
            "extra": "mean: 8.675475000000018 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.25024264610207,
            "unit": "iter/sec",
            "range": "stddev: 0.0003479418932231539",
            "extra": "mean: 6.932397350993448 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.26171636805196,
            "unit": "iter/sec",
            "range": "stddev: 0.00041758909118477447",
            "extra": "mean: 5.095237209302134 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.25448156640414,
            "unit": "iter/sec",
            "range": "stddev: 0.00010941923166131812",
            "extra": "mean: 3.1520437317784316 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.093779519458227,
            "unit": "iter/sec",
            "range": "stddev: 0.0024960838822550447",
            "extra": "mean: 76.37214285714323 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.80248641933923,
            "unit": "iter/sec",
            "range": "stddev: 0.0017442920727810485",
            "extra": "mean: 72.45071428571441 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.09192611255233,
            "unit": "iter/sec",
            "range": "stddev: 0.00016570280892825638",
            "extra": "mean: 5.949125714285718 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.89601448122582,
            "unit": "iter/sec",
            "range": "stddev: 0.00015242401234386951",
            "extra": "mean: 4.11698809523815 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.6580124265654,
            "unit": "iter/sec",
            "range": "stddev: 0.00006832509101737037",
            "extra": "mean: 2.1246849593493864 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.95056118813693,
            "unit": "iter/sec",
            "range": "stddev: 0.0001033999093298383",
            "extra": "mean: 2.217537987679317 msec\nrounds: 487"
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
        "date": 1646664422324,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.2415104303199,
            "unit": "iter/sec",
            "range": "stddev: 0.000575968251384696",
            "extra": "mean: 8.38634126984127 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.62326542663033,
            "unit": "iter/sec",
            "range": "stddev: 0.000425685682164703",
            "extra": "mean: 6.774000000000041 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.77682579641555,
            "unit": "iter/sec",
            "range": "stddev: 0.0006339901153670469",
            "extra": "mean: 5.2143943661971415 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.68256774654054,
            "unit": "iter/sec",
            "range": "stddev: 0.00014892948200227995",
            "extra": "mean: 3.0990208333332596 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.2520870945666,
            "unit": "iter/sec",
            "range": "stddev: 0.0008497073922659028",
            "extra": "mean: 9.41157983193289 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.35927307406968,
            "unit": "iter/sec",
            "range": "stddev: 0.00036822350133464967",
            "extra": "mean: 7.074173333333557 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.710835379336,
            "unit": "iter/sec",
            "range": "stddev: 0.00025182149468554036",
            "extra": "mean: 4.908919047618996 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.9666941963498,
            "unit": "iter/sec",
            "range": "stddev: 0.00010607884809270546",
            "extra": "mean: 3.115588059701468 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.431369539188914,
            "unit": "iter/sec",
            "range": "stddev: 0.0019367721248864562",
            "extra": "mean: 74.45257142857135 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.767034246481034,
            "unit": "iter/sec",
            "range": "stddev: 0.0012791209979805226",
            "extra": "mean: 72.63728571428578 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.83685065396497,
            "unit": "iter/sec",
            "range": "stddev: 0.00037088820006292694",
            "extra": "mean: 6.030022857142885 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.98687753631486,
            "unit": "iter/sec",
            "range": "stddev: 0.00027397859822778754",
            "extra": "mean: 4.2019123505976 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.46435986948035,
            "unit": "iter/sec",
            "range": "stddev: 0.00011834948612184241",
            "extra": "mean: 2.1717207392195395 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.9661236787541,
            "unit": "iter/sec",
            "range": "stddev: 0.00011961490837218904",
            "extra": "mean: 2.2028075396825044 msec\nrounds: 504"
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
        "date": 1646752836861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.44813263741362,
            "unit": "iter/sec",
            "range": "stddev: 0.0009728192600093607",
            "extra": "mean: 9.30681599999997 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.20235670589685,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946092662179299",
            "extra": "mean: 7.032232258064483 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.58458505743675,
            "unit": "iter/sec",
            "range": "stddev: 0.00035443844432496",
            "extra": "mean: 5.192523584905605 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.5369871482631,
            "unit": "iter/sec",
            "range": "stddev: 0.00031640621416831506",
            "extra": "mean: 3.3722606060606473 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.85861595080114,
            "unit": "iter/sec",
            "range": "stddev: 0.0005001313719467555",
            "extra": "mean: 9.271396551724177 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.00966981419478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001676131348231439",
            "extra": "mean: 7.0917122302156805 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.78288638462925,
            "unit": "iter/sec",
            "range": "stddev: 0.0002698389887038826",
            "extra": "mean: 5.0817427184466295 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.1107744847101,
            "unit": "iter/sec",
            "range": "stddev: 0.0005075992500314599",
            "extra": "mean: 3.321036923076887 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.14267690043097,
            "unit": "iter/sec",
            "range": "stddev: 0.0018118762056544358",
            "extra": "mean: 76.08800000000063 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.763556036113544,
            "unit": "iter/sec",
            "range": "stddev: 0.0038936875040407673",
            "extra": "mean: 78.34807142857159 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.17393216560728,
            "unit": "iter/sec",
            "range": "stddev: 0.0009431741939619143",
            "extra": "mean: 6.5714277456648995 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.6018989646184,
            "unit": "iter/sec",
            "range": "stddev: 0.00033072859717595454",
            "extra": "mean: 4.3364777327936554 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 439.33916067913543,
            "unit": "iter/sec",
            "range": "stddev: 0.00023199370893365839",
            "extra": "mean: 2.2761458333333833 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.2609608287309,
            "unit": "iter/sec",
            "range": "stddev: 0.00013371043158731351",
            "extra": "mean: 2.2611084598698237 msec\nrounds: 461"
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
        "date": 1646753480295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.94127741186583,
            "unit": "iter/sec",
            "range": "stddev: 0.001016269534257575",
            "extra": "mean: 9.906749999999981 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.35330189430758,
            "unit": "iter/sec",
            "range": "stddev: 0.00044461738037422465",
            "extra": "mean: 6.927448051948121 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.44659667082493,
            "unit": "iter/sec",
            "range": "stddev: 0.0007101734140437913",
            "extra": "mean: 5.278532407407462 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.69969489966485,
            "unit": "iter/sec",
            "range": "stddev: 0.00020427049479753662",
            "extra": "mean: 3.2605184049079172 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.67619910443233,
            "unit": "iter/sec",
            "range": "stddev: 0.0007963789722650709",
            "extra": "mean: 9.287103448275753 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.58152130564977,
            "unit": "iter/sec",
            "range": "stddev: 0.0004361923755216449",
            "extra": "mean: 7.164272108843418 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.89694292181298,
            "unit": "iter/sec",
            "range": "stddev: 0.00036374467240684797",
            "extra": "mean: 5.238428571428601 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.57975435994325,
            "unit": "iter/sec",
            "range": "stddev: 0.00040308673610814583",
            "extra": "mean: 3.51395341614912 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.388273260531545,
            "unit": "iter/sec",
            "range": "stddev: 0.0025028779972715797",
            "extra": "mean: 80.72150000000023 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.729413583193542,
            "unit": "iter/sec",
            "range": "stddev: 0.0059237429718635454",
            "extra": "mean: 78.55821428571426 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.7341874781077,
            "unit": "iter/sec",
            "range": "stddev: 0.0006531991327179199",
            "extra": "mean: 6.46269590643298 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.67025848983215,
            "unit": "iter/sec",
            "range": "stddev: 0.00034867217123369103",
            "extra": "mean: 4.316479838709591 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 438.2418874719588,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459605186255816",
            "extra": "mean: 2.2818448637317577 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 375.0664946318083,
            "unit": "iter/sec",
            "range": "stddev: 0.00035085325732025623",
            "extra": "mean: 2.666193899782145 msec\nrounds: 459"
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
        "date": 1646838601346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.86504841796284,
            "unit": "iter/sec",
            "range": "stddev: 0.00038496567045460045",
            "extra": "mean: 8.273690476190477 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.09817996845382,
            "unit": "iter/sec",
            "range": "stddev: 0.0004469557267793961",
            "extra": "mean: 6.798180645161325 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.44370362241693,
            "unit": "iter/sec",
            "range": "stddev: 0.00029221529629125127",
            "extra": "mean: 4.939644859813108 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.27225912081667,
            "unit": "iter/sec",
            "range": "stddev: 0.00016555067307019107",
            "extra": "mean: 3.1819544072948767 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.27322194872848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005498910505396072",
            "extra": "mean: 9.151372881356101 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.59625275316681,
            "unit": "iter/sec",
            "range": "stddev: 0.0013118981088996436",
            "extra": "mean: 8.156856164383612 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.42410996721523,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271811070094391",
            "extra": "mean: 5.039710144927578 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.5860507941287,
            "unit": "iter/sec",
            "range": "stddev: 0.00021018014841161706",
            "extra": "mean: 3.1787804878049712 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.453085706712596,
            "unit": "iter/sec",
            "range": "stddev: 0.007775675596949949",
            "extra": "mean: 87.31271428571473 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.548286577228806,
            "unit": "iter/sec",
            "range": "stddev: 0.0012363279042445587",
            "extra": "mean: 73.81007142857042 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.76678990985016,
            "unit": "iter/sec",
            "range": "stddev: 0.00032718248432893625",
            "extra": "mean: 5.996397727272765 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.017976324855,
            "unit": "iter/sec",
            "range": "stddev: 0.0003814514883652558",
            "extra": "mean: 4.273176000000262 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.3043563624866,
            "unit": "iter/sec",
            "range": "stddev: 0.00005765173554712674",
            "extra": "mean: 2.144522105263455 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.22380389962586,
            "unit": "iter/sec",
            "range": "stddev: 0.00004487177114687687",
            "extra": "mean: 2.1823397027602924 msec\nrounds: 471"
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
        "date": 1647271615127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.0616690945226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856470363041618",
            "extra": "mean: 8.470149606299225 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.92489113652596,
            "unit": "iter/sec",
            "range": "stddev: 0.0004547161418446823",
            "extra": "mean: 6.760187499999976 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.9123960722946,
            "unit": "iter/sec",
            "range": "stddev: 0.00043923423506139005",
            "extra": "mean: 5.156967889908282 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.67908303072437,
            "unit": "iter/sec",
            "range": "stddev: 0.00020540395614945892",
            "extra": "mean: 3.1778407079645734 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.76318266136386,
            "unit": "iter/sec",
            "range": "stddev: 0.0007740022212937945",
            "extra": "mean: 8.790190082644541 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.8755909075515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005844128110690363",
            "extra": "mean: 7.1492101910828305 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.74636051334463,
            "unit": "iter/sec",
            "range": "stddev: 0.0002865649422122817",
            "extra": "mean: 4.932271028037421 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.59292154783475,
            "unit": "iter/sec",
            "range": "stddev: 0.00026703242930748675",
            "extra": "mean: 3.337862573099325 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.999735362530139,
            "unit": "iter/sec",
            "range": "stddev: 0.0025445935328166636",
            "extra": "mean: 76.92464285714274 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.00260485517263,
            "unit": "iter/sec",
            "range": "stddev: 0.0022847566818451756",
            "extra": "mean: 76.9076666666668 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.71616326406982,
            "unit": "iter/sec",
            "range": "stddev: 0.00035536080366174006",
            "extra": "mean: 5.962454545454248 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.36828793466313,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640435235733355",
            "extra": "mean: 4.143046332046295 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.72484261920295,
            "unit": "iter/sec",
            "range": "stddev: 0.00019976752489760948",
            "extra": "mean: 2.1611115459883465 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.8349030303344,
            "unit": "iter/sec",
            "range": "stddev: 0.00014954687573035346",
            "extra": "mean: 2.2230378151260655 msec\nrounds: 476"
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
        "date": 1647613450459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.90838002884023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003062434897114157",
            "extra": "mean: 8.136141732283443 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.4327848156568,
            "unit": "iter/sec",
            "range": "stddev: 0.0005372331087341763",
            "extra": "mean: 6.923635802469122 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.92219580516422,
            "unit": "iter/sec",
            "range": "stddev: 0.00020629677306427017",
            "extra": "mean: 4.76366968325795 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.5689559250772,
            "unit": "iter/sec",
            "range": "stddev: 0.00010254978958537465",
            "extra": "mean: 3.0905313432835975 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.3535229789672,
            "unit": "iter/sec",
            "range": "stddev: 0.00023513334820346042",
            "extra": "mean: 8.744811475409707 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.0287950752941,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097217324082832",
            "extra": "mean: 6.895182432432355 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.80021820731866,
            "unit": "iter/sec",
            "range": "stddev: 0.00027333173717004796",
            "extra": "mean: 4.859081339712779 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.4243471704061,
            "unit": "iter/sec",
            "range": "stddev: 0.00009304468428549387",
            "extra": "mean: 3.1603130699088187 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.772316070718855,
            "unit": "iter/sec",
            "range": "stddev: 0.001999487654155421",
            "extra": "mean: 72.60942857142868 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.14328467414802,
            "unit": "iter/sec",
            "range": "stddev: 0.0012116720128268967",
            "extra": "mean: 70.70493333333398 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.2973970832677,
            "unit": "iter/sec",
            "range": "stddev: 0.00073371388387037",
            "extra": "mean: 5.977379310344425 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.47318787518049,
            "unit": "iter/sec",
            "range": "stddev: 0.0001355392042486842",
            "extra": "mean: 4.124167330677306 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.83259285315694,
            "unit": "iter/sec",
            "range": "stddev: 0.000126286015212352",
            "extra": "mean: 2.203455670103364 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.1954833696821,
            "unit": "iter/sec",
            "range": "stddev: 0.0001072397060528425",
            "extra": "mean: 2.292550102249649 msec\nrounds: 489"
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
        "date": 1647926782049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.09244920220597,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980414330292565",
            "extra": "mean: 8.258153225806442 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.71067336161227,
            "unit": "iter/sec",
            "range": "stddev: 0.0009822702025544838",
            "extra": "mean: 7.261601265822845 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.49438334411747,
            "unit": "iter/sec",
            "range": "stddev: 0.0003717678496351407",
            "extra": "mean: 5.037925925925882 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.4192945316563,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818071294678125",
            "extra": "mean: 3.1906140350877377 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.64229128579991,
            "unit": "iter/sec",
            "range": "stddev: 0.0010533063221266248",
            "extra": "mean: 9.377142857142982 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.810144678026,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613979510954322",
            "extra": "mean: 7.204084415584522 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.49724268760633,
            "unit": "iter/sec",
            "range": "stddev: 0.0006047277431337265",
            "extra": "mean: 5.333411764705917 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.00363695083894,
            "unit": "iter/sec",
            "range": "stddev: 0.0003722086696758404",
            "extra": "mean: 3.3002904191616875 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.032323886760175,
            "unit": "iter/sec",
            "range": "stddev: 0.004394188022106591",
            "extra": "mean: 76.73228571428632 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.837980661475054,
            "unit": "iter/sec",
            "range": "stddev: 0.006162778465068033",
            "extra": "mean: 84.4738666666648 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.69020405499862,
            "unit": "iter/sec",
            "range": "stddev: 0.0013803658335335158",
            "extra": "mean: 6.911317919075483 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 198.47422936179035,
            "unit": "iter/sec",
            "range": "stddev: 0.0015849715269290548",
            "extra": "mean: 5.0384374999997705 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 404.56019590972045,
            "unit": "iter/sec",
            "range": "stddev: 0.00042959842133533343",
            "extra": "mean: 2.471820040899809 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.3714916989831,
            "unit": "iter/sec",
            "range": "stddev: 0.0003180038981511751",
            "extra": "mean: 2.3675840336134306 msec\nrounds: 476"
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
        "date": 1647973878015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.14440867294243,
            "unit": "iter/sec",
            "range": "stddev: 0.000407812637524898",
            "extra": "mean: 8.464217741935519 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.45973480952773,
            "unit": "iter/sec",
            "range": "stddev: 0.0011507219772830648",
            "extra": "mean: 7.382267515923585 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.6017654097872,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655998537561424",
            "extra": "mean: 5.00997572815539 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.7131487921727,
            "unit": "iter/sec",
            "range": "stddev: 0.00023160042320744976",
            "extra": "mean: 3.1376176470588053 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.52391717901358,
            "unit": "iter/sec",
            "range": "stddev: 0.000658629731596006",
            "extra": "mean: 9.300256410256408 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.94016193057053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005160235515059026",
            "extra": "mean: 7.249520270270019 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.04095035187046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005025314023394673",
            "extra": "mean: 5.317990566037643 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.94591325385426,
            "unit": "iter/sec",
            "range": "stddev: 0.0002918041302507423",
            "extra": "mean: 3.3450867052022066 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.946264678983557,
            "unit": "iter/sec",
            "range": "stddev: 0.004184555111122724",
            "extra": "mean: 77.24235714285678 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.004215880617341,
            "unit": "iter/sec",
            "range": "stddev: 0.002467437927043031",
            "extra": "mean: 83.30406666666619 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.03156305166434,
            "unit": "iter/sec",
            "range": "stddev: 0.0008744221068203228",
            "extra": "mean: 6.755316091953924 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.38948829378577,
            "unit": "iter/sec",
            "range": "stddev: 0.00021955068079292298",
            "extra": "mean: 4.340475806451855 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 434.5964150785975,
            "unit": "iter/sec",
            "range": "stddev: 0.0002396654611304837",
            "extra": "mean: 2.300985386221256 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.4374507934162,
            "unit": "iter/sec",
            "range": "stddev: 0.000134810915605641",
            "extra": "mean: 2.270469957081471 msec\nrounds: 466"
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
        "date": 1647982534610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.91408915247393,
            "unit": "iter/sec",
            "range": "stddev: 0.0007334268412957011",
            "extra": "mean: 8.553289062499955 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.12131679785628,
            "unit": "iter/sec",
            "range": "stddev: 0.0006945857107095948",
            "extra": "mean: 6.70594936708858 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.49392579831775,
            "unit": "iter/sec",
            "range": "stddev: 0.00012699421439507657",
            "extra": "mean: 4.7282681818181755 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.0607803748645,
            "unit": "iter/sec",
            "range": "stddev: 0.00030853616306650647",
            "extra": "mean: 3.2148057971014 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.58779200193462,
            "unit": "iter/sec",
            "range": "stddev: 0.0011635813439880738",
            "extra": "mean: 9.843702479338818 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.07641148611538,
            "unit": "iter/sec",
            "range": "stddev: 0.0005386821405486702",
            "extra": "mean: 7.2423666666667215 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.13141118121703,
            "unit": "iter/sec",
            "range": "stddev: 0.00038471148627111656",
            "extra": "mean: 4.9718738317756435 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.46840015268634,
            "unit": "iter/sec",
            "range": "stddev: 0.00022395325769839037",
            "extra": "mean: 3.200323615160299 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.682382414803687,
            "unit": "iter/sec",
            "range": "stddev: 0.002707641058663923",
            "extra": "mean: 78.84953846153827 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.841491961225804,
            "unit": "iter/sec",
            "range": "stddev: 0.005784450784571923",
            "extra": "mean: 77.87257142857281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.73388036728724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569016641753878",
            "extra": "mean: 6.221463687151307 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.54811549887822,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578947093527759",
            "extra": "mean: 4.10596484375017 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.94948810529263,
            "unit": "iter/sec",
            "range": "stddev: 0.00016116563850548292",
            "extra": "mean: 2.1461553784860596 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.282103794488,
            "unit": "iter/sec",
            "range": "stddev: 0.00022013970796781155",
            "extra": "mean: 2.286853249475711 msec\nrounds: 477"
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
        "date": 1647984627220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.24271001210938,
            "unit": "iter/sec",
            "range": "stddev: 0.0009879266328237798",
            "extra": "mean: 8.677338461538458 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.40292991774538,
            "unit": "iter/sec",
            "range": "stddev: 0.0005455797205089692",
            "extra": "mean: 7.122358490566023 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.09502123826724,
            "unit": "iter/sec",
            "range": "stddev: 0.0003994653745685731",
            "extra": "mean: 4.948167420814459 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.0823431257562,
            "unit": "iter/sec",
            "range": "stddev: 0.00028185151786101986",
            "extra": "mean: 3.1637325581395763 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.42610817659126,
            "unit": "iter/sec",
            "range": "stddev: 0.000518021099260758",
            "extra": "mean: 8.894731092436894 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.27820910027657,
            "unit": "iter/sec",
            "range": "stddev: 0.0009134165580264957",
            "extra": "mean: 7.795556291390757 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.04690740766134,
            "unit": "iter/sec",
            "range": "stddev: 0.00038395405478268386",
            "extra": "mean: 5.1269718309859265 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.29110478781064,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557165900339307",
            "extra": "mean: 3.233200000000164 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.152144001813026,
            "unit": "iter/sec",
            "range": "stddev: 0.0020191861460269987",
            "extra": "mean: 76.03323076923047 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.87397558021402,
            "unit": "iter/sec",
            "range": "stddev: 0.002856535551339911",
            "extra": "mean: 77.67608333333312 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.6552924606043,
            "unit": "iter/sec",
            "range": "stddev: 0.000824793235446486",
            "extra": "mean: 6.726972067039011 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.95349776441748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003558100201946456",
            "extra": "mean: 4.406188976377977 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 435.2438016852111,
            "unit": "iter/sec",
            "range": "stddev: 0.00025859380220515576",
            "extra": "mean: 2.297562874251446 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.1314649440621,
            "unit": "iter/sec",
            "range": "stddev: 0.00020239345534744932",
            "extra": "mean: 2.2824199584197262 msec\nrounds: 481"
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
        "date": 1647986153634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.43498702189169,
            "unit": "iter/sec",
            "range": "stddev: 0.00046545825714807044",
            "extra": "mean: 8.167599999999979 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.86088856925218,
            "unit": "iter/sec",
            "range": "stddev: 0.0004273287567117924",
            "extra": "mean: 6.717681249999968 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.96547491970423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002484058041808635",
            "extra": "mean: 4.855182648401878 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.6076879592991,
            "unit": "iter/sec",
            "range": "stddev: 0.00011647089207884477",
            "extra": "mean: 3.0711805555555554 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.85611747870519,
            "unit": "iter/sec",
            "range": "stddev: 0.00048329329570913565",
            "extra": "mean: 8.86083999999991 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.3667028560971,
            "unit": "iter/sec",
            "range": "stddev: 0.0013892652025270925",
            "extra": "mean: 7.442320000000086 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.80757867304845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902314330343919",
            "extra": "mean: 5.004815165876827 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.85656448814206,
            "unit": "iter/sec",
            "range": "stddev: 0.00014493359232707633",
            "extra": "mean: 3.2066023738872547 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.161679956829625,
            "unit": "iter/sec",
            "range": "stddev: 0.00261566481789243",
            "extra": "mean: 75.97814285714323 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.72614958953912,
            "unit": "iter/sec",
            "range": "stddev: 0.001289110880660163",
            "extra": "mean: 72.85364285714279 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.75063895811303,
            "unit": "iter/sec",
            "range": "stddev: 0.0012052146819963047",
            "extra": "mean: 6.3795593220338995 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.8204841995763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002599866721442837",
            "extra": "mean: 4.240513725489996 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.8244009035191,
            "unit": "iter/sec",
            "range": "stddev: 0.00017426510768000535",
            "extra": "mean: 2.1986507276511045 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.9693618456021,
            "unit": "iter/sec",
            "range": "stddev: 0.00017581950037438032",
            "extra": "mean: 2.2990124999998565 msec\nrounds: 480"
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
        "date": 1648221976999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.34444393987457,
            "unit": "iter/sec",
            "range": "stddev: 0.0007732787306337978",
            "extra": "mean: 8.669685039370155 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.53386666767653,
            "unit": "iter/sec",
            "range": "stddev: 0.0004104465292091914",
            "extra": "mean: 6.732471337579584 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.1288868333381,
            "unit": "iter/sec",
            "range": "stddev: 0.0004179623181602827",
            "extra": "mean: 4.996779904306233 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.68498915361016,
            "unit": "iter/sec",
            "range": "stddev: 0.00020931134646524503",
            "extra": "mean: 3.177781065088747 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.52493003919395,
            "unit": "iter/sec",
            "range": "stddev: 0.000775299310364811",
            "extra": "mean: 8.966605042016734 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.1404987311479,
            "unit": "iter/sec",
            "range": "stddev: 0.000344078759786051",
            "extra": "mean: 7.1869801324504 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.53536683689347,
            "unit": "iter/sec",
            "range": "stddev: 0.00030505408780799587",
            "extra": "mean: 5.2483694581281775 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.9849493138948,
            "unit": "iter/sec",
            "range": "stddev: 0.00021116056080835112",
            "extra": "mean: 3.300493975903708 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.061624745549508,
            "unit": "iter/sec",
            "range": "stddev: 0.0022622171958117557",
            "extra": "mean: 76.56015384615381 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.799648923915202,
            "unit": "iter/sec",
            "range": "stddev: 0.0024325581930641654",
            "extra": "mean: 78.12714285714303 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.89036567591614,
            "unit": "iter/sec",
            "range": "stddev: 0.0004514832611502247",
            "extra": "mean: 6.333508670520074 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.87886206617355,
            "unit": "iter/sec",
            "range": "stddev: 0.00030714512943252735",
            "extra": "mean: 4.275717741935398 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.04020068933727,
            "unit": "iter/sec",
            "range": "stddev: 0.0001784180995307614",
            "extra": "mean: 2.293366525423796 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 407.8986466409236,
            "unit": "iter/sec",
            "range": "stddev: 0.00018090391052466318",
            "extra": "mean: 2.451589403973453 msec\nrounds: 453"
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
        "date": 1648488392521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.05438368186861,
            "unit": "iter/sec",
            "range": "stddev: 0.0004286272355865618",
            "extra": "mean: 8.260750000000032 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.84110662282188,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071500747202402",
            "extra": "mean: 6.764018633540398 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.33275857524228,
            "unit": "iter/sec",
            "range": "stddev: 0.00042323348633798916",
            "extra": "mean: 5.093393518518518 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.7110560719417,
            "unit": "iter/sec",
            "range": "stddev: 0.0001531815930331414",
            "extra": "mean: 3.167453216374304 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.69419956076747,
            "unit": "iter/sec",
            "range": "stddev: 0.000449787545401076",
            "extra": "mean: 9.200122950819761 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.94451210043337,
            "unit": "iter/sec",
            "range": "stddev: 0.00043196583900624304",
            "extra": "mean: 7.197117647058771 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.75692892318708,
            "unit": "iter/sec",
            "range": "stddev: 0.000540037771245784",
            "extra": "mean: 5.187880952380686 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.54991825880967,
            "unit": "iter/sec",
            "range": "stddev: 0.001383083849538414",
            "extra": "mean: 3.4656048632218566 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.809964181369455,
            "unit": "iter/sec",
            "range": "stddev: 0.003368671626270965",
            "extra": "mean: 78.06423076923033 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.314244360076207,
            "unit": "iter/sec",
            "range": "stddev: 0.0063838396381507125",
            "extra": "mean: 81.2067692307684 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.02870289238382,
            "unit": "iter/sec",
            "range": "stddev: 0.0011086053391948744",
            "extra": "mean: 6.801393063583918 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.06365218375382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005901730422709207",
            "extra": "mean: 4.523584000000028 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 425.4878942846602,
            "unit": "iter/sec",
            "range": "stddev: 0.0002452100234363683",
            "extra": "mean: 2.350243128964274 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 408.8139207849404,
            "unit": "iter/sec",
            "range": "stddev: 0.0003123929689334327",
            "extra": "mean: 2.4461006564550365 msec\nrounds: 457"
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
        "date": 1648490119339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.14909671759428,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583411032035998",
            "extra": "mean: 8.463881889763817 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.32444559597567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006252614210261439",
            "extra": "mean: 7.075916666666731 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.03598909005532,
            "unit": "iter/sec",
            "range": "stddev: 0.00026583086490228027",
            "extra": "mean: 4.949613207547201 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.3100965033321,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852346674433395",
            "extra": "mean: 3.286121661720976 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.91016573234722,
            "unit": "iter/sec",
            "range": "stddev: 0.0009161242195637742",
            "extra": "mean: 9.623697478991703 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.71594286358567,
            "unit": "iter/sec",
            "range": "stddev: 0.00054436724034487",
            "extra": "mean: 7.368331081081211 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.78697318863772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002819441684820939",
            "extra": "mean: 5.187072463768195 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.190786629255,
            "unit": "iter/sec",
            "range": "stddev: 0.00016567560109675476",
            "extra": "mean: 3.276638888888862 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.635258007108769,
            "unit": "iter/sec",
            "range": "stddev: 0.0018188349081413862",
            "extra": "mean: 79.14361538461552 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.914354766549861,
            "unit": "iter/sec",
            "range": "stddev: 0.0029055876455421955",
            "extra": "mean: 77.43321428571497 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.0831430031811,
            "unit": "iter/sec",
            "range": "stddev: 0.00036150008079950874",
            "extra": "mean: 6.094471264367558 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.0296324295045,
            "unit": "iter/sec",
            "range": "stddev: 0.0002835827072845737",
            "extra": "mean: 4.309794354838799 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.5856596305638,
            "unit": "iter/sec",
            "range": "stddev: 0.000138097083885204",
            "extra": "mean: 2.2442373949581382 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 430.18412976763886,
            "unit": "iter/sec",
            "range": "stddev: 0.00017117388364338402",
            "extra": "mean: 2.324585987261184 msec\nrounds: 471"
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
        "date": 1648491063758,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.97197739331288,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395230143259611",
            "extra": "mean: 8.198604477611962 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.94341678143215,
            "unit": "iter/sec",
            "range": "stddev: 0.00039045451755551894",
            "extra": "mean: 6.453968944099316 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.63302995535895,
            "unit": "iter/sec",
            "range": "stddev: 0.00022037106609197417",
            "extra": "mean: 4.680924107142802 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.11279813347977,
            "unit": "iter/sec",
            "range": "stddev: 0.00011994587111964643",
            "extra": "mean: 3.0201188405797446 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.95252168453365,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267267002639433",
            "extra": "mean: 8.624219512195268 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.16072859514733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319360554424695",
            "extra": "mean: 6.98515584415583 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.39367243616846,
            "unit": "iter/sec",
            "range": "stddev: 0.00042135641393280704",
            "extra": "mean: 5.0660185185184785 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.3632814917949,
            "unit": "iter/sec",
            "range": "stddev: 0.0002230852323951129",
            "extra": "mean: 3.211682492581747 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.844295939918029,
            "unit": "iter/sec",
            "range": "stddev: 0.003471724415558965",
            "extra": "mean: 77.85557142857158 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.486480983089397,
            "unit": "iter/sec",
            "range": "stddev: 0.006099748103248673",
            "extra": "mean: 80.08661538461581 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.2646992010515,
            "unit": "iter/sec",
            "range": "stddev: 0.000573393647348637",
            "extra": "mean: 6.014505813953776 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.6298804839125,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205089290377811",
            "extra": "mean: 4.190590038314235 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.3191603948625,
            "unit": "iter/sec",
            "range": "stddev: 0.0001938778633579803",
            "extra": "mean: 2.1866566866268435 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.1036643101516,
            "unit": "iter/sec",
            "range": "stddev: 0.00022550363365885046",
            "extra": "mean: 2.236617768594957 msec\nrounds: 484"
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
        "date": 1648605401518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.46549350169607,
            "unit": "iter/sec",
            "range": "stddev: 0.0010571000276719312",
            "extra": "mean: 9.305312499999989 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.4166601474602,
            "unit": "iter/sec",
            "range": "stddev: 0.0006052998104723504",
            "extra": "mean: 6.876791139240491 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.7702270008315,
            "unit": "iter/sec",
            "range": "stddev: 0.00023615989356593568",
            "extra": "mean: 4.813009132420103 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.77162024551996,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980675748860867",
            "extra": "mean: 3.281145400593445 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.71396811419562,
            "unit": "iter/sec",
            "range": "stddev: 0.0008548095256898345",
            "extra": "mean: 9.198449999999792 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.5989617326428,
            "unit": "iter/sec",
            "range": "stddev: 0.0005127390632005189",
            "extra": "mean: 7.062198675496857 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.76769283576382,
            "unit": "iter/sec",
            "range": "stddev: 0.0004277678747397163",
            "extra": "mean: 5.160819047619013 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.1450320204791,
            "unit": "iter/sec",
            "range": "stddev: 0.00023406482837773018",
            "extra": "mean: 3.2139352941177015 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.259446645407257,
            "unit": "iter/sec",
            "range": "stddev: 0.0018495859189095927",
            "extra": "mean: 75.41792857142912 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.3809056388093,
            "unit": "iter/sec",
            "range": "stddev: 0.0021475298728873566",
            "extra": "mean: 74.73335714285666 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.08644636576346,
            "unit": "iter/sec",
            "range": "stddev: 0.0004867959858325717",
            "extra": "mean: 6.094348571428684 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.26050650470324,
            "unit": "iter/sec",
            "range": "stddev: 0.00031392605949041787",
            "extra": "mean: 4.232616000000377 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.1562363976603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003448077917136713",
            "extra": "mean: 2.2514600000002787 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.22346499891347,
            "unit": "iter/sec",
            "range": "stddev: 0.0002805615709177889",
            "extra": "mean: 2.385362660944067 msec\nrounds: 466"
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
        "date": 1648608414436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.93267754916315,
            "unit": "iter/sec",
            "range": "stddev: 0.0006151133540415547",
            "extra": "mean: 8.408118110236192 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.93812679830833,
            "unit": "iter/sec",
            "range": "stddev: 0.00042213469060099865",
            "extra": "mean: 6.669417721518998 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.41567861935636,
            "unit": "iter/sec",
            "range": "stddev: 0.000348095146283152",
            "extra": "mean: 4.9403287671233445 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.89257687315126,
            "unit": "iter/sec",
            "range": "stddev: 0.00020743727460622796",
            "extra": "mean: 3.106626470588266 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.17836359812046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005016479575552783",
            "extra": "mean: 8.914375000000046 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.23911382735196,
            "unit": "iter/sec",
            "range": "stddev: 0.00022795858926781285",
            "extra": "mean: 6.981333333333195 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.72171183515297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004253103193000548",
            "extra": "mean: 5.595291079812212 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.6273068057298,
            "unit": "iter/sec",
            "range": "stddev: 0.00034925595692259886",
            "extra": "mean: 3.348655589123817 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.680477332183598,
            "unit": "iter/sec",
            "range": "stddev: 0.0027640972166463394",
            "extra": "mean: 78.86138461538486 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.844411806509749,
            "unit": "iter/sec",
            "range": "stddev: 0.006315001224191287",
            "extra": "mean: 84.42799999999957 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.162083031422,
            "unit": "iter/sec",
            "range": "stddev: 0.0005782472416129644",
            "extra": "mean: 6.322627906976482 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.7804288531077,
            "unit": "iter/sec",
            "range": "stddev: 0.00028328838020397434",
            "extra": "mean: 4.259298804780948 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.54063690488334,
            "unit": "iter/sec",
            "range": "stddev: 0.00015237227355777185",
            "extra": "mean: 2.157308163265082 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 424.0808775015997,
            "unit": "iter/sec",
            "range": "stddev: 0.00023871380365301216",
            "extra": "mean: 2.358040772532187 msec\nrounds: 466"
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
        "date": 1648615058295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.42190425956524,
            "unit": "iter/sec",
            "range": "stddev: 0.0007586955687319633",
            "extra": "mean: 8.739585365853618 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9888237781646,
            "unit": "iter/sec",
            "range": "stddev: 0.00042300587898506405",
            "extra": "mean: 6.897083333333452 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.91226420373897,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687017752803088",
            "extra": "mean: 5.265589371980708 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.07564442303493,
            "unit": "iter/sec",
            "range": "stddev: 0.00045287063245669944",
            "extra": "mean: 3.4955789473683683 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.16710834397126,
            "unit": "iter/sec",
            "range": "stddev: 0.001201850806797256",
            "extra": "mean: 9.884635593220372 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.71199447281904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006298420853648441",
            "extra": "mean: 7.368545454545538 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.48287522251223,
            "unit": "iter/sec",
            "range": "stddev: 0.0006426270423622899",
            "extra": "mean: 5.510161764706018 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.71560277707533,
            "unit": "iter/sec",
            "range": "stddev: 0.000301099665999353",
            "extra": "mean: 3.524656346749223 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.837528242562092,
            "unit": "iter/sec",
            "range": "stddev: 0.0030525691785358243",
            "extra": "mean: 77.89661538461564 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.09389353399974,
            "unit": "iter/sec",
            "range": "stddev: 0.003972745371366091",
            "extra": "mean: 82.6863571428577 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.0430519988417,
            "unit": "iter/sec",
            "range": "stddev: 0.0005489334602298099",
            "extra": "mean: 6.32738983050852 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.41796771943038,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812731083155314",
            "extra": "mean: 4.557511904762054 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 432.82572190128354,
            "unit": "iter/sec",
            "range": "stddev: 0.0003407394509659136",
            "extra": "mean: 2.3103987341770655 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.7097402389319,
            "unit": "iter/sec",
            "range": "stddev: 0.0001652288175333407",
            "extra": "mean: 2.3163711790392894 msec\nrounds: 458"
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
        "date": 1648735432221,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.90654239402599,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861075482356775",
            "extra": "mean: 8.779126984127002 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.84639318553343,
            "unit": "iter/sec",
            "range": "stddev: 0.00041108955286097814",
            "extra": "mean: 6.903865384615426 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.40244179185794,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254732683220473",
            "extra": "mean: 4.965183098591543 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.1492653772215,
            "unit": "iter/sec",
            "range": "stddev: 0.00026240947670763616",
            "extra": "mean: 3.266380530973514 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.87068250300727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528389161699168",
            "extra": "mean: 9.019516949152683 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.09509618301996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116896323535936",
            "extra": "mean: 7.037540540540468 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.43885983318154,
            "unit": "iter/sec",
            "range": "stddev: 0.00037188136709961027",
            "extra": "mean: 5.143004854368865 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.0702121933449,
            "unit": "iter/sec",
            "range": "stddev: 0.00018739557760823387",
            "extra": "mean: 3.235510769230748 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.348532024153757,
            "unit": "iter/sec",
            "range": "stddev: 0.0031758818624748534",
            "extra": "mean: 80.98128571428553 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.75330813647944,
            "unit": "iter/sec",
            "range": "stddev: 0.012365695704800695",
            "extra": "mean: 85.08242857142838 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.17416126456658,
            "unit": "iter/sec",
            "range": "stddev: 0.00036387252208270476",
            "extra": "mean: 6.091092485549541 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.91292779188745,
            "unit": "iter/sec",
            "range": "stddev: 0.00025925187217677015",
            "extra": "mean: 4.256896414342567 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.99794493396234,
            "unit": "iter/sec",
            "range": "stddev: 0.00016042501145820104",
            "extra": "mean: 2.2371467505241793 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.88232528676326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002055828206437304",
            "extra": "mean: 2.3816196581197815 msec\nrounds: 468"
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
        "date": 1648766123027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.49454372067308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006156102719286651",
            "extra": "mean: 8.58409302325582 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.65136950067,
            "unit": "iter/sec",
            "range": "stddev: 0.00025866581845013914",
            "extra": "mean: 6.682197452229282 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.07681587942528,
            "unit": "iter/sec",
            "range": "stddev: 0.0003001597385391459",
            "extra": "mean: 4.948613207547162 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.57422697285307,
            "unit": "iter/sec",
            "range": "stddev: 0.00019746134929540457",
            "extra": "mean: 3.2512477064219736 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.57202117007711,
            "unit": "iter/sec",
            "range": "stddev: 0.00043055756984977276",
            "extra": "mean: 8.962820512820409 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.38394794737334,
            "unit": "iter/sec",
            "range": "stddev: 0.0004126144718228755",
            "extra": "mean: 7.278870748299231 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.08435641721445,
            "unit": "iter/sec",
            "range": "stddev: 0.0004598059090979755",
            "extra": "mean: 5.37390686274524 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.8038629254053,
            "unit": "iter/sec",
            "range": "stddev: 0.00021600774941257144",
            "extra": "mean: 3.380618461538402 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.914414331310065,
            "unit": "iter/sec",
            "range": "stddev: 0.004004962572708559",
            "extra": "mean: 77.4328571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.25623255976894,
            "unit": "iter/sec",
            "range": "stddev: 0.0018871333236729177",
            "extra": "mean: 75.43621428571485 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.41236754621625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004212313976610902",
            "extra": "mean: 6.195312138728625 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.03365189011436,
            "unit": "iter/sec",
            "range": "stddev: 0.00028610657715946356",
            "extra": "mean: 4.42411999999959 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.46584018694944,
            "unit": "iter/sec",
            "range": "stddev: 0.00018558231740518148",
            "extra": "mean: 2.2911300448430847 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.9266400934325,
            "unit": "iter/sec",
            "range": "stddev: 0.00016208491388200566",
            "extra": "mean: 2.33684913793089 msec\nrounds: 464"
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
        "date": 1648768542668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.81649280094098,
            "unit": "iter/sec",
            "range": "stddev: 0.0005514091459103652",
            "extra": "mean: 8.487776000000004 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.04158770552732,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946886440734251",
            "extra": "mean: 6.990973856209222 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.54597545452094,
            "unit": "iter/sec",
            "range": "stddev: 0.00038411089079761976",
            "extra": "mean: 5.03661682242993 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.1009721200158,
            "unit": "iter/sec",
            "range": "stddev: 0.00045351309211239714",
            "extra": "mean: 3.532308605341232 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.31948461740589,
            "unit": "iter/sec",
            "range": "stddev: 0.0012780964917715354",
            "extra": "mean: 10.491034482758776 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.30473880491866,
            "unit": "iter/sec",
            "range": "stddev: 0.0013735751148116978",
            "extra": "mean: 9.406918367346861 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.3845186435227,
            "unit": "iter/sec",
            "range": "stddev: 0.00035836412541858975",
            "extra": "mean: 5.36525247524764 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.50725146447087,
            "unit": "iter/sec",
            "range": "stddev: 0.00014733231671745312",
            "extra": "mean: 3.2101981424148502 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.767666767825908,
            "unit": "iter/sec",
            "range": "stddev: 0.004669897319465438",
            "extra": "mean: 78.32284615384594 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.381182353097381,
            "unit": "iter/sec",
            "range": "stddev: 0.006435355712895518",
            "extra": "mean: 87.86433333333339 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.59857398483106,
            "unit": "iter/sec",
            "range": "stddev: 0.0007122228716492226",
            "extra": "mean: 6.426794117647169 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.41365622953086,
            "unit": "iter/sec",
            "range": "stddev: 0.0004480015403870258",
            "extra": "mean: 4.620780487805208 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.6573119032641,
            "unit": "iter/sec",
            "range": "stddev: 0.00014883466068523436",
            "extra": "mean: 2.2438765690375644 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.93945322996956,
            "unit": "iter/sec",
            "range": "stddev: 0.00020534424042486217",
            "extra": "mean: 2.3259088983050638 msec\nrounds: 472"
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
        "date": 1648769553639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.63910670949834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005973509851763738",
            "extra": "mean: 8.289186046511622 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.65518760891314,
            "unit": "iter/sec",
            "range": "stddev: 0.00039618333871977384",
            "extra": "mean: 6.593905660377341 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.1745486860017,
            "unit": "iter/sec",
            "range": "stddev: 0.0004365550417630519",
            "extra": "mean: 5.258327188940019 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.04715825655194,
            "unit": "iter/sec",
            "range": "stddev: 0.00019513073333275692",
            "extra": "mean: 3.2149465875370553 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.96601695961074,
            "unit": "iter/sec",
            "range": "stddev: 0.0006675656059835875",
            "extra": "mean: 9.711942148760187 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.50379522459852,
            "unit": "iter/sec",
            "range": "stddev: 0.0005624962380644305",
            "extra": "mean: 7.546953642384095 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.90219653265729,
            "unit": "iter/sec",
            "range": "stddev: 0.0003884871580215199",
            "extra": "mean: 5.078663507108945 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.86888691909627,
            "unit": "iter/sec",
            "range": "stddev: 0.00022534120177772896",
            "extra": "mean: 3.248135951661742 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.843482895691546,
            "unit": "iter/sec",
            "range": "stddev: 0.002462861398705046",
            "extra": "mean: 77.86050000000066 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.903827771618063,
            "unit": "iter/sec",
            "range": "stddev: 0.0027874339913977896",
            "extra": "mean: 77.49638461538503 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.98493341425998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006152359205457783",
            "extra": "mean: 6.329717514124282 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.18052760768387,
            "unit": "iter/sec",
            "range": "stddev: 0.00024850190982673125",
            "extra": "mean: 4.1984960317458775 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 424.7957864471032,
            "unit": "iter/sec",
            "range": "stddev: 0.00025388444930789136",
            "extra": "mean: 2.354072314049478 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 421.0248974363791,
            "unit": "iter/sec",
            "range": "stddev: 0.0002324152315985604",
            "extra": "mean: 2.3751564482029464 msec\nrounds: 473"
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
        "date": 1648770688011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.32864282272203,
            "unit": "iter/sec",
            "range": "stddev: 0.002249641807464149",
            "extra": "mean: 9.868877862595422 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.78641650067334,
            "unit": "iter/sec",
            "range": "stddev: 0.0005209081023433369",
            "extra": "mean: 6.7665217391304955 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.1720390454095,
            "unit": "iter/sec",
            "range": "stddev: 0.00038184302005943484",
            "extra": "mean: 4.946282407407445 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.70381855110674,
            "unit": "iter/sec",
            "range": "stddev: 0.00037594888085862234",
            "extra": "mean: 3.2926816816816604 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.57367483176557,
            "unit": "iter/sec",
            "range": "stddev: 0.000714180755755036",
            "extra": "mean: 9.126279661016705 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.02677987999468,
            "unit": "iter/sec",
            "range": "stddev: 0.0005615776175715846",
            "extra": "mean: 7.297843537414949 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.75817537455907,
            "unit": "iter/sec",
            "range": "stddev: 0.001494056843921177",
            "extra": "mean: 5.960961352656988 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.35851033939247,
            "unit": "iter/sec",
            "range": "stddev: 0.00018878637337316963",
            "extra": "mean: 3.2117317073169525 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.985206140147465,
            "unit": "iter/sec",
            "range": "stddev: 0.0019579648157668503",
            "extra": "mean: 77.01071428571434 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.971550609894443,
            "unit": "iter/sec",
            "range": "stddev: 0.0019808689693226298",
            "extra": "mean: 77.09178571428613 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.10163546257894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442479291130135",
            "extra": "mean: 6.207261627907449 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.95575471752213,
            "unit": "iter/sec",
            "range": "stddev: 0.00021001983763389162",
            "extra": "mean: 4.256120481927586 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.4647155348215,
            "unit": "iter/sec",
            "range": "stddev: 0.00021488041787233372",
            "extra": "mean: 2.215012526096007 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 388.5784505019195,
            "unit": "iter/sec",
            "range": "stddev: 0.0002747684595168078",
            "extra": "mean: 2.5734829059828686 msec\nrounds: 468"
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
        "date": 1648771497311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.38909196935191,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573611355563426",
            "extra": "mean: 8.819190476190526 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.74904957659683,
            "unit": "iter/sec",
            "range": "stddev: 0.0003099174478241919",
            "extra": "mean: 6.67783870967741 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.7487826253916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113598939834441",
            "extra": "mean: 4.908004784689093 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.47568359034824,
            "unit": "iter/sec",
            "range": "stddev: 0.00016976144648823602",
            "extra": "mean: 3.101009009008983 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.09190536962257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856576344520474",
            "extra": "mean: 9.251386554622004 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.1474751164257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148196153379599",
            "extra": "mean: 7.399324324324435 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.41555465866355,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687819909735556",
            "extra": "mean: 5.3643592233011415 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.60857353917515,
            "unit": "iter/sec",
            "range": "stddev: 0.00016804563213160788",
            "extra": "mean: 3.2721595092024236 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.886218373538311,
            "unit": "iter/sec",
            "range": "stddev: 0.0038278656721987803",
            "extra": "mean: 77.60228571428586 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.885091672825473,
            "unit": "iter/sec",
            "range": "stddev: 0.0032966155246835884",
            "extra": "mean: 77.6090714285712 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.00472234834896,
            "unit": "iter/sec",
            "range": "stddev: 0.0005164917121001891",
            "extra": "mean: 6.2891213872830205 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.14679912629393,
            "unit": "iter/sec",
            "range": "stddev: 0.000550912591754234",
            "extra": "mean: 4.781330645161568 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.15957457531636,
            "unit": "iter/sec",
            "range": "stddev: 0.0001820364451804354",
            "extra": "mean: 2.2363381147540813 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.0028438658628,
            "unit": "iter/sec",
            "range": "stddev: 0.00018057918437533812",
            "extra": "mean: 2.3201703056771965 msec\nrounds: 458"
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
        "date": 1648866263793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.43687084033684,
            "unit": "iter/sec",
            "range": "stddev: 0.00018576571535804914",
            "extra": "mean: 7.847022556390925 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.59424316812016,
            "unit": "iter/sec",
            "range": "stddev: 0.00013472812661267637",
            "extra": "mean: 6.265890173410438 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.76086191773865,
            "unit": "iter/sec",
            "range": "stddev: 0.00015613150665517148",
            "extra": "mean: 4.634760869565221 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.59447406390024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011265905084066839",
            "extra": "mean: 2.970934097421209 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.81834752820878,
            "unit": "iter/sec",
            "range": "stddev: 0.00015640400823562867",
            "extra": "mean: 8.345967213114589 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5325650855042,
            "unit": "iter/sec",
            "range": "stddev: 0.00023471462986749273",
            "extra": "mean: 6.68750649350655 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.0766362666697,
            "unit": "iter/sec",
            "range": "stddev: 0.00011761096872969911",
            "extra": "mean: 4.782935185185092 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.78318464163254,
            "unit": "iter/sec",
            "range": "stddev: 0.00009659665274074815",
            "extra": "mean: 3.0231282798833647 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.205678441729942,
            "unit": "iter/sec",
            "range": "stddev: 0.00105720822488735",
            "extra": "mean: 75.72500000000001 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.515287721168075,
            "unit": "iter/sec",
            "range": "stddev: 0.0018025449713192636",
            "extra": "mean: 73.99028571428546 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.18473379672747,
            "unit": "iter/sec",
            "range": "stddev: 0.00028121674497977236",
            "extra": "mean: 5.741031250000324 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.783289857847,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054146534804337",
            "extra": "mean: 3.955957692307712 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 483.7747228648149,
            "unit": "iter/sec",
            "range": "stddev: 0.00006255456701248083",
            "extra": "mean: 2.067077821011823 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.39986163954535,
            "unit": "iter/sec",
            "range": "stddev: 0.00008755952082356083",
            "extra": "mean: 2.1767529411765927 msec\nrounds: 510"
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
        "date": 1649083561609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.83677657961543,
            "unit": "iter/sec",
            "range": "stddev: 0.0007536913361391823",
            "extra": "mean: 8.486314960629956 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.72259247097975,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799718066631246",
            "extra": "mean: 7.106179487179523 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.57046540312842,
            "unit": "iter/sec",
            "range": "stddev: 0.000509298555257462",
            "extra": "mean: 5.113246511627944 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.64061634195826,
            "unit": "iter/sec",
            "range": "stddev: 0.0006604973807416875",
            "extra": "mean: 3.6147981927711217 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.98694953614593,
            "unit": "iter/sec",
            "range": "stddev: 0.0010414765028277165",
            "extra": "mean: 9.435123893805045 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.1341384523581,
            "unit": "iter/sec",
            "range": "stddev: 0.0011591748162681787",
            "extra": "mean: 7.511221476509941 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.87119172452643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005587986795771155",
            "extra": "mean: 5.35127962085315 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.4373280151753,
            "unit": "iter/sec",
            "range": "stddev: 0.00029652377514956404",
            "extra": "mean: 3.3620527950310923 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.911365321548274,
            "unit": "iter/sec",
            "range": "stddev: 0.002062187966406",
            "extra": "mean: 77.4511428571432 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.636778332578597,
            "unit": "iter/sec",
            "range": "stddev: 0.009484907052902773",
            "extra": "mean: 94.01342857142885 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.55706033188207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006928352125007945",
            "extra": "mean: 6.554924418604672 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.9011604137851,
            "unit": "iter/sec",
            "range": "stddev: 0.0005580719092640567",
            "extra": "mean: 4.675056451613125 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 378.0845801696185,
            "unit": "iter/sec",
            "range": "stddev: 0.0010999723016385052",
            "extra": "mean: 2.6449108280252376 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.69770326335185,
            "unit": "iter/sec",
            "range": "stddev: 0.00019385221894209086",
            "extra": "mean: 2.3380999999998995 msec\nrounds: 460"
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
        "date": 1649167410728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.7695910795329,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324913105553338",
            "extra": "mean: 8.713109375000048 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.37279807255433,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331626136194616",
            "extra": "mean: 7.279461538461518 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.43811755138134,
            "unit": "iter/sec",
            "range": "stddev: 0.0003177404029202564",
            "extra": "mean: 4.964303738317687 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.71549342489624,
            "unit": "iter/sec",
            "range": "stddev: 0.00020341507187012463",
            "extra": "mean: 3.177473053892214 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.87620921538293,
            "unit": "iter/sec",
            "range": "stddev: 0.00048549175905757103",
            "extra": "mean: 9.10115126050415 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.8191297017771,
            "unit": "iter/sec",
            "range": "stddev: 0.0006598371064010098",
            "extra": "mean: 7.308919463087415 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.04390289583407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006496050155555643",
            "extra": "mean: 5.2619420289853505 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.97189776768056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001582945270581182",
            "extra": "mean: 3.1648384146341186 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.268381447011796,
            "unit": "iter/sec",
            "range": "stddev: 0.0011716917327029494",
            "extra": "mean: 75.36714285714271 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.815536824529657,
            "unit": "iter/sec",
            "range": "stddev: 0.0026982413482906356",
            "extra": "mean: 78.0302857142858 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.88362066941343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005606026989677555",
            "extra": "mean: 6.415042168674839 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.40489642185454,
            "unit": "iter/sec",
            "range": "stddev: 0.00024136530024708195",
            "extra": "mean: 4.247999999999838 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.41777635588664,
            "unit": "iter/sec",
            "range": "stddev: 0.00016735712188510824",
            "extra": "mean: 2.2400541666665053 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.2146832287757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003241434257755994",
            "extra": "mean: 2.351753218883968 msec\nrounds: 466"
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
        "date": 1649340175396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.44036852825663,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013745998945078",
            "extra": "mean: 8.302864000000042 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.59155594562068,
            "unit": "iter/sec",
            "range": "stddev: 0.00038592089817534404",
            "extra": "mean: 6.821675324675304 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.09696119011326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987196939318821",
            "extra": "mean: 5.43192018779343 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.61972164497337,
            "unit": "iter/sec",
            "range": "stddev: 0.00020191002951624199",
            "extra": "mean: 3.2090395136778103 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.60863335705412,
            "unit": "iter/sec",
            "range": "stddev: 0.00033210507171950237",
            "extra": "mean: 8.959880341880343 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.03464951406542,
            "unit": "iter/sec",
            "range": "stddev: 0.0004506713276949109",
            "extra": "mean: 7.244557823129056 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.67909025447003,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456281993143879",
            "extra": "mean: 5.534674757281493 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.25316835963594,
            "unit": "iter/sec",
            "range": "stddev: 0.0003846740068032736",
            "extra": "mean: 3.3084847560974113 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.962030674327275,
            "unit": "iter/sec",
            "range": "stddev: 0.004164246367314498",
            "extra": "mean: 83.59784615384615 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.747761857239766,
            "unit": "iter/sec",
            "range": "stddev: 0.0019197751012955985",
            "extra": "mean: 78.44514285714206 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.6392824330638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003517491486706474",
            "extra": "mean: 6.186614942528642 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.88794924833425,
            "unit": "iter/sec",
            "range": "stddev: 0.00043842785630945533",
            "extra": "mean: 4.388121457489967 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 412.35005166947417,
            "unit": "iter/sec",
            "range": "stddev: 0.00024675022388594603",
            "extra": "mean: 2.42512398373983 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.4999430338577,
            "unit": "iter/sec",
            "range": "stddev: 0.00018953640782510495",
            "extra": "mean: 2.2857145833333536 msec\nrounds: 480"
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
        "date": 1649690559509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.65197164702555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371093372741334",
            "extra": "mean: 8.722048000000036 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.22677740641325,
            "unit": "iter/sec",
            "range": "stddev: 0.00039670435966044715",
            "extra": "mean: 6.74641935483874 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.3833349915777,
            "unit": "iter/sec",
            "range": "stddev: 0.00047791293591754956",
            "extra": "mean: 5.144473933649344 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.3259013511364,
            "unit": "iter/sec",
            "range": "stddev: 0.0001963827112031056",
            "extra": "mean: 3.2120681114550953 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.2585917407982,
            "unit": "iter/sec",
            "range": "stddev: 0.000668417908969854",
            "extra": "mean: 9.152598290598236 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.61869320549926,
            "unit": "iter/sec",
            "range": "stddev: 0.0003604064642993152",
            "extra": "mean: 7.214034246575397 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.42150529431714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202533695682264",
            "extra": "mean: 5.091092233009844 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.79802049163203,
            "unit": "iter/sec",
            "range": "stddev: 0.00015536463723575587",
            "extra": "mean: 3.248883792048905 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.374968620615341,
            "unit": "iter/sec",
            "range": "stddev: 0.003980867791527472",
            "extra": "mean: 80.80828571428533 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.862256260243859,
            "unit": "iter/sec",
            "range": "stddev: 0.0032059974292692377",
            "extra": "mean: 77.7468571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.5390467365169,
            "unit": "iter/sec",
            "range": "stddev: 0.0004104345396383097",
            "extra": "mean: 6.152367816091877 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.10700254217406,
            "unit": "iter/sec",
            "range": "stddev: 0.0004032376761682453",
            "extra": "mean: 4.327000000000056 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.3715187732358,
            "unit": "iter/sec",
            "range": "stddev: 0.00014904271371262763",
            "extra": "mean: 2.2453164556963006 msec\nrounds: 474"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.73313302872646,
            "unit": "iter/sec",
            "range": "stddev: 0.00020871243258199266",
            "extra": "mean: 2.343384946236839 msec\nrounds: 465"
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
        "date": 1649778340343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.87878303520046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005051238829360613",
            "extra": "mean: 8.341759689922496 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.25893339795354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004026077800922526",
            "extra": "mean: 6.790759493670874 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.4109672189732,
            "unit": "iter/sec",
            "range": "stddev: 0.00023720494585330331",
            "extra": "mean: 4.798211981566786 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.16121310261997,
            "unit": "iter/sec",
            "range": "stddev: 0.00007394718042076104",
            "extra": "mean: 3.0472827380952174 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.29930009460985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006051478944517821",
            "extra": "mean: 8.904775000000182 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.09376104186725,
            "unit": "iter/sec",
            "range": "stddev: 0.00041275705672300545",
            "extra": "mean: 7.03760666666677 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.06570113902046,
            "unit": "iter/sec",
            "range": "stddev: 0.0002918078902626873",
            "extra": "mean: 5.074449760765561 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.56603842836546,
            "unit": "iter/sec",
            "range": "stddev: 0.00010117477753064371",
            "extra": "mean: 3.158898550724626 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.600736771340575,
            "unit": "iter/sec",
            "range": "stddev: 0.001980883901940248",
            "extra": "mean: 73.52542857142831 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.071954594493352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378460032081088",
            "extra": "mean: 71.06333333333244 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.7169635919041,
            "unit": "iter/sec",
            "range": "stddev: 0.00024379504538481886",
            "extra": "mean: 5.892162921348084 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.3351655781698,
            "unit": "iter/sec",
            "range": "stddev: 0.00024270754030250827",
            "extra": "mean: 4.360430278884317 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.1135917169415,
            "unit": "iter/sec",
            "range": "stddev: 0.00007928670498958778",
            "extra": "mean: 2.1500124223602115 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.227682092963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005737945243041597",
            "extra": "mean: 2.2015390946501987 msec\nrounds: 486"
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
        "date": 1649968949551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.9320747817335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007764130868108457",
            "extra": "mean: 8.479457364341139 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.59436552822214,
            "unit": "iter/sec",
            "range": "stddev: 0.00031725055564179824",
            "extra": "mean: 6.684743750000011 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.14588307808972,
            "unit": "iter/sec",
            "range": "stddev: 0.0002543662510756313",
            "extra": "mean: 4.874579908675747 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.47849385366106,
            "unit": "iter/sec",
            "range": "stddev: 0.00024183013467518418",
            "extra": "mean: 3.200220238095223 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.3172863279472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437968986060472",
            "extra": "mean: 9.232136752137112 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.6911232385064,
            "unit": "iter/sec",
            "range": "stddev: 0.0004338445967595236",
            "extra": "mean: 7.158651006711543 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.16130688975758,
            "unit": "iter/sec",
            "range": "stddev: 0.00040933518312252353",
            "extra": "mean: 5.1239665071769505 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.10028655475116,
            "unit": "iter/sec",
            "range": "stddev: 0.00021577756609714678",
            "extra": "mean: 3.2143975535169043 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.316288484073715,
            "unit": "iter/sec",
            "range": "stddev: 0.0014284147749277466",
            "extra": "mean: 75.09600000000002 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.304962085609736,
            "unit": "iter/sec",
            "range": "stddev: 0.0029786787071883146",
            "extra": "mean: 75.15992857142909 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.26044574618038,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701666012894215",
            "extra": "mean: 6.279022988506131 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.0134619814382,
            "unit": "iter/sec",
            "range": "stddev: 0.0003368781659223548",
            "extra": "mean: 4.255075396825489 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.93188920574767,
            "unit": "iter/sec",
            "range": "stddev: 0.00015751867209648214",
            "extra": "mean: 2.193310061601617 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 405.3353521937211,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352171534872438",
            "extra": "mean: 2.4670929752065445 msec\nrounds: 484"
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
        "date": 1671164593362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.23838808312459,
            "unit": "iter/sec",
            "range": "stddev: 0.00017243414339477222",
            "extra": "mean: 8.248212598425267 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.6794456508404,
            "unit": "iter/sec",
            "range": "stddev: 0.001570671871643053",
            "extra": "mean: 7.108358974358997 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.55457017268668,
            "unit": "iter/sec",
            "range": "stddev: 0.00048680972303123075",
            "extra": "mean: 5.139946078431361 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 206.65087188341013,
            "unit": "iter/sec",
            "range": "stddev: 0.003075823206650038",
            "extra": "mean: 4.839079510703384 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 83.06771952614211,
            "unit": "iter/sec",
            "range": "stddev: 0.003878226890979284",
            "extra": "mean: 12.038370689655101 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.80228944138747,
            "unit": "iter/sec",
            "range": "stddev: 0.0005586458591917416",
            "extra": "mean: 7.587121621621757 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.12206460754288,
            "unit": "iter/sec",
            "range": "stddev: 0.0005971206205895748",
            "extra": "mean: 5.315697560975547 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.7899356516677,
            "unit": "iter/sec",
            "range": "stddev: 0.00013454507672437503",
            "extra": "mean: 3.2279938271603976 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.364201211413596,
            "unit": "iter/sec",
            "range": "stddev: 0.0010876224186928782",
            "extra": "mean: 74.82676923076835 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.621868649622403,
            "unit": "iter/sec",
            "range": "stddev: 0.0033167121744817397",
            "extra": "mean: 79.227571428571 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.1724552380828,
            "unit": "iter/sec",
            "range": "stddev: 0.0012782330805321729",
            "extra": "mean: 6.571491525423842 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.6713760520052,
            "unit": "iter/sec",
            "range": "stddev: 0.0004606923961933304",
            "extra": "mean: 4.316459016393642 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 346.87732937164407,
            "unit": "iter/sec",
            "range": "stddev: 0.0004606958113349507",
            "extra": "mean: 2.882863523573202 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 351.0379202590958,
            "unit": "iter/sec",
            "range": "stddev: 0.000237004306931995",
            "extra": "mean: 2.8486950904389907 msec\nrounds: 387"
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
        "date": 1671168658422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.93386803129424,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993607875911486",
            "extra": "mean: 7.8165384615384825 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.77257319735932,
            "unit": "iter/sec",
            "range": "stddev: 0.00043278035225368793",
            "extra": "mean: 6.632506024096393 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.29800978031062,
            "unit": "iter/sec",
            "range": "stddev: 0.0012519860951343987",
            "extra": "mean: 5.094295154185019 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.3376152738448,
            "unit": "iter/sec",
            "range": "stddev: 0.00021183594479761726",
            "extra": "mean: 3.102337278106501 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.86610709555853,
            "unit": "iter/sec",
            "range": "stddev: 0.0011274026907764653",
            "extra": "mean: 8.93925806451616 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.46318284106533,
            "unit": "iter/sec",
            "range": "stddev: 0.0010986161918210657",
            "extra": "mean: 6.970429487179599 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.83695819923392,
            "unit": "iter/sec",
            "range": "stddev: 0.00029957289147314054",
            "extra": "mean: 4.881931506849236 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.17783775719874,
            "unit": "iter/sec",
            "range": "stddev: 0.00021451580389655366",
            "extra": "mean: 3.1930739644970743 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.512913519283954,
            "unit": "iter/sec",
            "range": "stddev: 0.004363643756674541",
            "extra": "mean: 74.00328571428538 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.370273488944225,
            "unit": "iter/sec",
            "range": "stddev: 0.003194792738638433",
            "extra": "mean: 74.79278571428567 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.5056374078676,
            "unit": "iter/sec",
            "range": "stddev: 0.0003345168466350866",
            "extra": "mean: 5.934519553072884 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.8774767854516,
            "unit": "iter/sec",
            "range": "stddev: 0.00028971307702345726",
            "extra": "mean: 4.117302325581061 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 332.3738752484569,
            "unit": "iter/sec",
            "range": "stddev: 0.001403813711425165",
            "extra": "mean: 3.00866004962778 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 378.41651560653514,
            "unit": "iter/sec",
            "range": "stddev: 0.00020300731657186101",
            "extra": "mean: 2.6425907928388797 msec\nrounds: 391"
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
        "date": 1671339117325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.10490125805926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004293296209394372",
            "extra": "mean: 8.61290082644626 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.4965480082877,
            "unit": "iter/sec",
            "range": "stddev: 0.0021693031107704436",
            "extra": "mean: 7.968346666666565 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.79976414568637,
            "unit": "iter/sec",
            "range": "stddev: 0.0002980067008370164",
            "extra": "mean: 5.1599650000000175 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.47772736457324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003240460059616152",
            "extra": "mean: 3.4785303514376995 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.67703075817028,
            "unit": "iter/sec",
            "range": "stddev: 0.0010001268270556274",
            "extra": "mean: 9.932752212389286 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.4266674010002,
            "unit": "iter/sec",
            "range": "stddev: 0.00045000380410400515",
            "extra": "mean: 7.726382978723534 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.01345254848255,
            "unit": "iter/sec",
            "range": "stddev: 0.0007234614755707271",
            "extra": "mean: 5.524451282051319 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.70191384640174,
            "unit": "iter/sec",
            "range": "stddev: 0.0010332623874977178",
            "extra": "mean: 3.777834415584426 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.460868081582188,
            "unit": "iter/sec",
            "range": "stddev: 0.002138957384405719",
            "extra": "mean: 80.25123076923126 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.531364559565974,
            "unit": "iter/sec",
            "range": "stddev: 0.002035699845009239",
            "extra": "mean: 79.79976923076885 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.04314892549877,
            "unit": "iter/sec",
            "range": "stddev: 0.0007261161530898533",
            "extra": "mean: 6.9423641975309405 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 207.42957047711798,
            "unit": "iter/sec",
            "range": "stddev: 0.001376027768091326",
            "extra": "mean: 4.82091341991335 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 325.9091354344667,
            "unit": "iter/sec",
            "range": "stddev: 0.000505599534992438",
            "extra": "mean: 3.0683398876404877 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 329.0840084138951,
            "unit": "iter/sec",
            "range": "stddev: 0.00022270093956666958",
            "extra": "mean: 3.038737752161695 msec\nrounds: 347"
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
        "date": 1671350822077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.9117315797641,
            "unit": "iter/sec",
            "range": "stddev: 0.0005588763084609659",
            "extra": "mean: 8.270496062992128 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.85188174996236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004029313996870916",
            "extra": "mean: 6.542281250000026 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.28881271454125,
            "unit": "iter/sec",
            "range": "stddev: 0.00033990981870355666",
            "extra": "mean: 4.871186046511569 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.3949104618263,
            "unit": "iter/sec",
            "range": "stddev: 0.000112047782538676",
            "extra": "mean: 3.1114369501466483 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.83018029954064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799744113582098",
            "extra": "mean: 8.785016393442676 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.90982914846822,
            "unit": "iter/sec",
            "range": "stddev: 0.00025930294002556503",
            "extra": "mean: 6.90084313725499 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.24796491543958,
            "unit": "iter/sec",
            "range": "stddev: 0.0003223387235410497",
            "extra": "mean: 5.121692307692387 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.9522562065973,
            "unit": "iter/sec",
            "range": "stddev: 0.00017651822804827638",
            "extra": "mean: 3.086874626865571 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.642365391267857,
            "unit": "iter/sec",
            "range": "stddev: 0.001163080555731107",
            "extra": "mean: 73.30107142857172 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.992955013582424,
            "unit": "iter/sec",
            "range": "stddev: 0.002299210139736898",
            "extra": "mean: 71.46453333333369 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.64581517145146,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570747678326061",
            "extra": "mean: 6.036977142857195 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.5861897279423,
            "unit": "iter/sec",
            "range": "stddev: 0.00031588280412298144",
            "extra": "mean: 4.173863281249774 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 356.7942312776832,
            "unit": "iter/sec",
            "range": "stddev: 0.00012818357054204831",
            "extra": "mean: 2.802735897435874 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.49481172718896,
            "unit": "iter/sec",
            "range": "stddev: 0.000180445878228199",
            "extra": "mean: 2.8288958333333447 msec\nrounds: 384"
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
        "date": 1671358562194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.78679684616344,
            "unit": "iter/sec",
            "range": "stddev: 0.0010578545196415852",
            "extra": "mean: 8.788365853658505 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.8574488641897,
            "unit": "iter/sec",
            "range": "stddev: 0.0005096615639815372",
            "extra": "mean: 6.717836477987416 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.80971690320405,
            "unit": "iter/sec",
            "range": "stddev: 0.00045506052438329137",
            "extra": "mean: 4.955162790697733 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.268205497881,
            "unit": "iter/sec",
            "range": "stddev: 0.00025152487439433904",
            "extra": "mean: 3.2230179640718277 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.34926635275073,
            "unit": "iter/sec",
            "range": "stddev: 0.0007240901339242138",
            "extra": "mean: 9.145008771929858 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.99829739938488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005514144386978191",
            "extra": "mean: 7.246466216216211 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.11629865663514,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797030992140066",
            "extra": "mean: 5.402009478672973 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.43860481769104,
            "unit": "iter/sec",
            "range": "stddev: 0.0016478202628675926",
            "extra": "mean: 3.617439759036158 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.236664624085014,
            "unit": "iter/sec",
            "range": "stddev: 0.004333099151463126",
            "extra": "mean: 81.72161538461499 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.023616260568827,
            "unit": "iter/sec",
            "range": "stddev: 0.005215287429250271",
            "extra": "mean: 90.71433333333385 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.0691779199189,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730636618595214",
            "extra": "mean: 6.753600000000241 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 204.85456938601067,
            "unit": "iter/sec",
            "range": "stddev: 0.0013049014129384944",
            "extra": "mean: 4.881511811023773 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.0454453367868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002887233726796666",
            "extra": "mean: 2.8814670050764097 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 315.1408114002898,
            "unit": "iter/sec",
            "range": "stddev: 0.0010206252014209004",
            "extra": "mean: 3.1731846965698347 msec\nrounds: 379"
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
        "date": 1671364351224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.95662368112525,
            "unit": "iter/sec",
            "range": "stddev: 0.00013350560291504112",
            "extra": "mean: 7.7545454545454655 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.66596474576636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003339064230871397",
            "extra": "mean: 6.4655465838509425 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.45877756049143,
            "unit": "iter/sec",
            "range": "stddev: 0.00019353104811282813",
            "extra": "mean: 4.774209090909075 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.9343453746147,
            "unit": "iter/sec",
            "range": "stddev: 0.00010636242259015054",
            "extra": "mean: 3.058718100890132 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.88276895008057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005747724509622919",
            "extra": "mean: 8.858747967479639 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.57897916746225,
            "unit": "iter/sec",
            "range": "stddev: 0.00029384796831500166",
            "extra": "mean: 6.685431372548964 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.08459517373552,
            "unit": "iter/sec",
            "range": "stddev: 0.00017201512507318382",
            "extra": "mean: 4.8057377777777 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.02509354075517,
            "unit": "iter/sec",
            "range": "stddev: 0.00015105057537529603",
            "extra": "mean: 3.1743502994012407 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.805426321425871,
            "unit": "iter/sec",
            "range": "stddev: 0.0021076926658379516",
            "extra": "mean: 72.43528571428547 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.503959587202656,
            "unit": "iter/sec",
            "range": "stddev: 0.003373752058522204",
            "extra": "mean: 79.9746666666664 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.02473617019805,
            "unit": "iter/sec",
            "range": "stddev: 0.00023824906976683822",
            "extra": "mean: 5.8814971428567935 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.54611222899004,
            "unit": "iter/sec",
            "range": "stddev: 0.00010356742144273913",
            "extra": "mean: 3.991281250000145 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 359.1218784724235,
            "unit": "iter/sec",
            "range": "stddev: 0.0001998190656420562",
            "extra": "mean: 2.784569974554721 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 354.8027602357723,
            "unit": "iter/sec",
            "range": "stddev: 0.00014101393624321693",
            "extra": "mean: 2.818467362924357 msec\nrounds: 383"
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
        "date": 1671374692029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.08628881788233,
            "unit": "iter/sec",
            "range": "stddev: 0.0006701934652630334",
            "extra": "mean: 8.54070967741931 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.22917125168496,
            "unit": "iter/sec",
            "range": "stddev: 0.0001561759619132789",
            "extra": "mean: 6.656496815286692 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.5070401522179,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517419891490395",
            "extra": "mean: 4.962605769230706 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.49757591975595,
            "unit": "iter/sec",
            "range": "stddev: 0.00007149836821333619",
            "extra": "mean: 3.231043076923071 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.21450974020635,
            "unit": "iter/sec",
            "range": "stddev: 0.00027170178044343607",
            "extra": "mean: 9.073215517241458 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.96949630287034,
            "unit": "iter/sec",
            "range": "stddev: 0.00021514541549478406",
            "extra": "mean: 7.144413793103669 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.31179276197463,
            "unit": "iter/sec",
            "range": "stddev: 0.00017304836452904896",
            "extra": "mean: 5.227069306930677 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.8327199097387,
            "unit": "iter/sec",
            "range": "stddev: 0.00008492721860107834",
            "extra": "mean: 3.3351930379747703 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.885566049110638,
            "unit": "iter/sec",
            "range": "stddev: 0.0011969042233113045",
            "extra": "mean: 77.6062142857139 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.455108472201239,
            "unit": "iter/sec",
            "range": "stddev: 0.0008396569976040555",
            "extra": "mean: 74.32121428571443 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.00735590872316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002903789642844381",
            "extra": "mean: 6.328819277108052 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.0660956227725,
            "unit": "iter/sec",
            "range": "stddev: 0.00010278205961170447",
            "extra": "mean: 4.272297520661122 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.61248664466575,
            "unit": "iter/sec",
            "range": "stddev: 0.00014879119622352783",
            "extra": "mean: 2.8934139784947326 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.2366431526711,
            "unit": "iter/sec",
            "range": "stddev: 0.00008531083917119039",
            "extra": "mean: 2.871610497237616 msec\nrounds: 362"
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
        "date": 1671378584085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.58841416080705,
            "unit": "iter/sec",
            "range": "stddev: 0.00015327952220645834",
            "extra": "mean: 7.599453237410053 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.36988234852709,
            "unit": "iter/sec",
            "range": "stddev: 0.00013995157819059016",
            "extra": "mean: 6.2355847953216665 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.00403704096487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008198520532165956",
            "extra": "mean: 4.629543103448346 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.2237265747489,
            "unit": "iter/sec",
            "range": "stddev: 0.00011060143689198897",
            "extra": "mean: 3.02825000000005 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.1403586674323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007924458726747619",
            "extra": "mean: 8.53676744186052 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.37357503270923,
            "unit": "iter/sec",
            "range": "stddev: 0.0003628364890235509",
            "extra": "mean: 6.606172839505952 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.33333394765248,
            "unit": "iter/sec",
            "range": "stddev: 0.00022247121465311602",
            "extra": "mean: 4.823151111111153 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.34025411446646,
            "unit": "iter/sec",
            "range": "stddev: 0.00028399199254621155",
            "extra": "mean: 3.161153179190891 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.829014378487148,
            "unit": "iter/sec",
            "range": "stddev: 0.0011657772065189012",
            "extra": "mean: 72.31173333333368 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.365490643756088,
            "unit": "iter/sec",
            "range": "stddev: 0.0010449904624749717",
            "extra": "mean: 69.61126666666597 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.7725210819328,
            "unit": "iter/sec",
            "range": "stddev: 0.0002929995314882799",
            "extra": "mean: 5.787957446808202 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.2615104786341,
            "unit": "iter/sec",
            "range": "stddev: 0.00007807381767182774",
            "extra": "mean: 3.9641402214020967 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 393.308677531295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007530173405037061",
            "extra": "mean: 2.5425322580644854 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 372.63448760848524,
            "unit": "iter/sec",
            "range": "stddev: 0.00017550672864260626",
            "extra": "mean: 2.683594871794763 msec\nrounds: 390"
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
        "date": 1671379865739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.95749650466128,
            "unit": "iter/sec",
            "range": "stddev: 0.0008789453791278317",
            "extra": "mean: 9.177890756302567 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.47518378398615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005670200189776595",
            "extra": "mean: 7.381425675675703 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.70623976542018,
            "unit": "iter/sec",
            "range": "stddev: 0.00048531065452675856",
            "extra": "mean: 5.595775510204097 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.54759715873692,
            "unit": "iter/sec",
            "range": "stddev: 0.009860234875000918",
            "extra": "mean: 4.5756622950819885 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.76847895565253,
            "unit": "iter/sec",
            "range": "stddev: 0.007867348780117002",
            "extra": "mean: 11.796837837837812 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.64617891449649,
            "unit": "iter/sec",
            "range": "stddev: 0.0015548984857132707",
            "extra": "mean: 8.15353571428553 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.28627574855125,
            "unit": "iter/sec",
            "range": "stddev: 0.002898086914288234",
            "extra": "mean: 6.481457894736888 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.0338623106277,
            "unit": "iter/sec",
            "range": "stddev: 0.0010016098588327394",
            "extra": "mean: 3.81630065359473 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.687914696204059,
            "unit": "iter/sec",
            "range": "stddev: 0.0048207431068847855",
            "extra": "mean: 85.55846153846201 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.900107100963778,
            "unit": "iter/sec",
            "range": "stddev: 0.002866148604691264",
            "extra": "mean: 84.03285714285806 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 141.7706169250961,
            "unit": "iter/sec",
            "range": "stddev: 0.0006272009665044399",
            "extra": "mean: 7.053647798742004 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 205.27594888807212,
            "unit": "iter/sec",
            "range": "stddev: 0.00042870528899820946",
            "extra": "mean: 4.871491304347864 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 314.731670361727,
            "unit": "iter/sec",
            "range": "stddev: 0.00022241518879499367",
            "extra": "mean: 3.1773097345134707 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 303.47279991148565,
            "unit": "iter/sec",
            "range": "stddev: 0.00021124549848027945",
            "extra": "mean: 3.2951882352938107 msec\nrounds: 340"
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
        "date": 1671419846638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.3871877834678,
            "unit": "iter/sec",
            "range": "stddev: 0.000817064550503814",
            "extra": "mean: 8.819338582677178 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.53073129840004,
            "unit": "iter/sec",
            "range": "stddev: 0.00026741109724407483",
            "extra": "mean: 6.9189437500000395 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.63063844807272,
            "unit": "iter/sec",
            "range": "stddev: 0.00021059674148585125",
            "extra": "mean: 5.059944186046584 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.6994382022475,
            "unit": "iter/sec",
            "range": "stddev: 0.0002947278683049224",
            "extra": "mean: 3.370414201183429 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.54276811194178,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358984835431568",
            "extra": "mean: 9.212958333333502 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.3269693820076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006774186739194659",
            "extra": "mean: 7.335305732483918 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.14772113133245,
            "unit": "iter/sec",
            "range": "stddev: 0.0010227711376451787",
            "extra": "mean: 5.550999999999854 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.6586318273471,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425701443468567",
            "extra": "mean: 3.282362275449032 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.732805710117583,
            "unit": "iter/sec",
            "range": "stddev: 0.0019660241186629348",
            "extra": "mean: 78.53728571428624 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.751245068000403,
            "unit": "iter/sec",
            "range": "stddev: 0.002692450740313891",
            "extra": "mean: 78.4237142857153 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.05084781803998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861245226807507",
            "extra": "mean: 6.4494971428569725 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.967036920635,
            "unit": "iter/sec",
            "range": "stddev: 0.00018353952780934867",
            "extra": "mean: 4.0989143968876025 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 349.0419534570263,
            "unit": "iter/sec",
            "range": "stddev: 0.0003794710245646848",
            "extra": "mean: 2.8649851116625698 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.1265037896344,
            "unit": "iter/sec",
            "range": "stddev: 0.00034648445687583034",
            "extra": "mean: 2.8318463476072675 msec\nrounds: 397"
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
        "date": 1671424292320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.22170783719669,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453114884716139",
            "extra": "mean: 7.985835820895533 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.71789995692262,
            "unit": "iter/sec",
            "range": "stddev: 0.00040565766576717936",
            "extra": "mean: 6.679228070175468 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.11258391170574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002733342667058311",
            "extra": "mean: 4.828291845493611 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.489486088025,
            "unit": "iter/sec",
            "range": "stddev: 0.0003363637755899151",
            "extra": "mean: 3.210381231671512 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.54450311601899,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429158434676657",
            "extra": "mean: 8.88537398373982 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.54027362824868,
            "unit": "iter/sec",
            "range": "stddev: 0.00044007947675897937",
            "extra": "mean: 6.966685897435827 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.88000804087704,
            "unit": "iter/sec",
            "range": "stddev: 0.00026832490213242525",
            "extra": "mean: 4.904845794392476 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.60613967630087,
            "unit": "iter/sec",
            "range": "stddev: 0.00022454610076712698",
            "extra": "mean: 3.2509104046242925 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.714627452333731,
            "unit": "iter/sec",
            "range": "stddev: 0.00284339801359795",
            "extra": "mean: 78.64957142857166 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.443311145952354,
            "unit": "iter/sec",
            "range": "stddev: 0.002761974131405847",
            "extra": "mean: 80.36446153846171 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 143.47772163862922,
            "unit": "iter/sec",
            "range": "stddev: 0.000700644441320572",
            "extra": "mean: 6.9697231638418 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.4570174205552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693612504814751",
            "extra": "mean: 4.22909842519679 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.43697928036835,
            "unit": "iter/sec",
            "range": "stddev: 0.0003565835445101038",
            "extra": "mean: 2.7976959798991996 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 362.81522457616137,
            "unit": "iter/sec",
            "range": "stddev: 0.0001687765420940438",
            "extra": "mean: 2.756223918575066 msec\nrounds: 393"
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
        "date": 1671430318878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.96826096539566,
            "unit": "iter/sec",
            "range": "stddev: 0.0010545434567324572",
            "extra": "mean: 8.931102362204722 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.47943530576373,
            "unit": "iter/sec",
            "range": "stddev: 0.0021760178061271704",
            "extra": "mean: 7.723234177215208 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.65844255975543,
            "unit": "iter/sec",
            "range": "stddev: 0.001118617109589976",
            "extra": "mean: 5.929142857142781 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.53915017021708,
            "unit": "iter/sec",
            "range": "stddev: 0.0010268688032013889",
            "extra": "mean: 3.928668730650171 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.670500072303,
            "unit": "iter/sec",
            "range": "stddev: 0.0010348956353236675",
            "extra": "mean: 10.134741379310208 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.6814155660297,
            "unit": "iter/sec",
            "range": "stddev: 0.0007451872818832561",
            "extra": "mean: 7.956625850340031 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.9997841571275,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014224452714612",
            "extra": "mean: 5.813960784313933 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.8120859389506,
            "unit": "iter/sec",
            "range": "stddev: 0.00033703002614146637",
            "extra": "mean: 3.5110869565217464 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.498593908185217,
            "unit": "iter/sec",
            "range": "stddev: 0.0025675492854731305",
            "extra": "mean: 80.00900000000073 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.143038049342382,
            "unit": "iter/sec",
            "range": "stddev: 0.006838244325157311",
            "extra": "mean: 82.3517142857142 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.50886428957872,
            "unit": "iter/sec",
            "range": "stddev: 0.0007897367943272599",
            "extra": "mean: 6.733604790419051 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.28387080762758,
            "unit": "iter/sec",
            "range": "stddev: 0.0004318200847891683",
            "extra": "mean: 4.623553278688285 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.4551412794152,
            "unit": "iter/sec",
            "range": "stddev: 0.00022759169800522347",
            "extra": "mean: 2.972164420485202 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.1309424579059,
            "unit": "iter/sec",
            "range": "stddev: 0.00039526375445595536",
            "extra": "mean: 3.1139945355190455 msec\nrounds: 366"
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
        "date": 1671438393646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.97463974602924,
            "unit": "iter/sec",
            "range": "stddev: 0.0003380929159571045",
            "extra": "mean: 8.266195312499974 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.97273720222077,
            "unit": "iter/sec",
            "range": "stddev: 0.00013033015873219398",
            "extra": "mean: 6.49465624999993 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.81070952425776,
            "unit": "iter/sec",
            "range": "stddev: 0.00018467468510204152",
            "extra": "mean: 4.835339534883737 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.3443227415696,
            "unit": "iter/sec",
            "range": "stddev: 0.00015744195970096098",
            "extra": "mean: 3.073666666666653 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.76886793355429,
            "unit": "iter/sec",
            "range": "stddev: 0.00019508563952593108",
            "extra": "mean: 8.637900826446291 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.76067206464896,
            "unit": "iter/sec",
            "range": "stddev: 0.0004371309981474106",
            "extra": "mean: 7.00473026315785 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.81745272710975,
            "unit": "iter/sec",
            "range": "stddev: 0.0002428528208872966",
            "extra": "mean: 5.106797101449354 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.02021181584433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007970442066381981",
            "extra": "mean: 3.1150686567164114 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.620081448087014,
            "unit": "iter/sec",
            "range": "stddev: 0.0018617819421189708",
            "extra": "mean: 73.42100000000025 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.108139832357622,
            "unit": "iter/sec",
            "range": "stddev: 0.0015383569373407133",
            "extra": "mean: 70.88106666666695 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.97462911201117,
            "unit": "iter/sec",
            "range": "stddev: 0.00014199496672321168",
            "extra": "mean: 5.953280000000274 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.7005940944173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894375909799888",
            "extra": "mean: 4.137350194552532 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 366.1365218875162,
            "unit": "iter/sec",
            "range": "stddev: 0.00007552694504976438",
            "extra": "mean: 2.731221662468346 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 361.68669686342344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002798190696545103",
            "extra": "mean: 2.7648238341970597 msec\nrounds: 386"
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
        "date": 1671466380806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.51320201612607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956806916665961",
            "extra": "mean: 8.509682170542611 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.65082995746843,
            "unit": "iter/sec",
            "range": "stddev: 0.00046820612529030963",
            "extra": "mean: 6.637865853658548 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.82115393646828,
            "unit": "iter/sec",
            "range": "stddev: 0.0001450519610723743",
            "extra": "mean: 4.720963800905036 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.3005735219087,
            "unit": "iter/sec",
            "range": "stddev: 0.00009711279896041801",
            "extra": "mean: 3.0275454545454203 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.72230952982588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005706840329603969",
            "extra": "mean: 8.871358333333331 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.25644661417817,
            "unit": "iter/sec",
            "range": "stddev: 0.00024527636941875893",
            "extra": "mean: 6.790874172185259 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.24392500108968,
            "unit": "iter/sec",
            "range": "stddev: 0.00027836705053146444",
            "extra": "mean: 4.920196261682303 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.68121682967376,
            "unit": "iter/sec",
            "range": "stddev: 0.00021534576456357047",
            "extra": "mean: 3.1086676737158943 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.705657303744827,
            "unit": "iter/sec",
            "range": "stddev: 0.0012095495483405556",
            "extra": "mean: 72.96257142857117 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.155016301860375,
            "unit": "iter/sec",
            "range": "stddev: 0.0025713116904660465",
            "extra": "mean: 70.64633333333366 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.26535568718782,
            "unit": "iter/sec",
            "range": "stddev: 0.00016686343551880326",
            "extra": "mean: 5.873185393258767 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.6076994856753,
            "unit": "iter/sec",
            "range": "stddev: 0.00018352508002090513",
            "extra": "mean: 4.13894094488197 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 374.57977419804797,
            "unit": "iter/sec",
            "range": "stddev: 0.00012348729554225357",
            "extra": "mean: 2.669658291457241 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 354.47101563216694,
            "unit": "iter/sec",
            "range": "stddev: 0.0001800536244723662",
            "extra": "mean: 2.821105128205167 msec\nrounds: 390"
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
        "date": 1671540830270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.13957764711122,
            "unit": "iter/sec",
            "range": "stddev: 0.00036219896153787806",
            "extra": "mean: 8.187354330708638 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.3593785697969,
            "unit": "iter/sec",
            "range": "stddev: 0.00030153394912397417",
            "extra": "mean: 6.60679245283018 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.89143455361236,
            "unit": "iter/sec",
            "range": "stddev: 0.00017257908279456638",
            "extra": "mean: 4.928744292237524 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.38915627588875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007388964619915039",
            "extra": "mean: 3.3739425981872535 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.07505568288607,
            "unit": "iter/sec",
            "range": "stddev: 0.0004390194765271963",
            "extra": "mean: 8.766158333333369 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.26891723537932,
            "unit": "iter/sec",
            "range": "stddev: 0.00047384356673809303",
            "extra": "mean: 7.078697986577054 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.2328457019274,
            "unit": "iter/sec",
            "range": "stddev: 0.0008644262833278135",
            "extra": "mean: 5.398610576923155 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.2230228169419,
            "unit": "iter/sec",
            "range": "stddev: 0.0005246870701516879",
            "extra": "mean: 3.3308571428572296 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.972640700762128,
            "unit": "iter/sec",
            "range": "stddev: 0.0022896891486480293",
            "extra": "mean: 77.08530769230748 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.63969115817499,
            "unit": "iter/sec",
            "range": "stddev: 0.002742088868477586",
            "extra": "mean: 79.11585714285658 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.94295584550173,
            "unit": "iter/sec",
            "range": "stddev: 0.0005844237965280616",
            "extra": "mean: 6.995797687861153 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.18498850029204,
            "unit": "iter/sec",
            "range": "stddev: 0.00020915677377640005",
            "extra": "mean: 4.344331950207653 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 345.8801044058869,
            "unit": "iter/sec",
            "range": "stddev: 0.0001860516452049053",
            "extra": "mean: 2.891175257731823 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 338.4104040163018,
            "unit": "iter/sec",
            "range": "stddev: 0.00016922234836495848",
            "extra": "mean: 2.9549918918917997 msec\nrounds: 370"
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
        "date": 1671541773920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.64471457653427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005028990732455126",
            "extra": "mean: 9.120366666666632 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.44570486206763,
            "unit": "iter/sec",
            "range": "stddev: 0.0007643204108388889",
            "extra": "mean: 7.725246666666627 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.3618356814057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770646045193405",
            "extra": "mean: 5.735200000000011 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.26293798051546,
            "unit": "iter/sec",
            "range": "stddev: 0.0003024071255870998",
            "extra": "mean: 3.6066847133758446 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.308911176143,
            "unit": "iter/sec",
            "range": "stddev: 0.0009237486786456124",
            "extra": "mean: 10.172017857142881 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.09836560534086,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582150571977064",
            "extra": "mean: 7.930316901408319 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.41760635029146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213581405892007",
            "extra": "mean: 5.70068205128224 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.79062928804336,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700374340990573",
            "extra": "mean: 3.7765686900958433 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.53289981458644,
            "unit": "iter/sec",
            "range": "stddev: 0.003209861721201063",
            "extra": "mean: 86.70846153846166 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.937228542831683,
            "unit": "iter/sec",
            "range": "stddev: 0.0034246449357422707",
            "extra": "mean: 83.77153846153854 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.50330298807566,
            "unit": "iter/sec",
            "range": "stddev: 0.0007945577181724588",
            "extra": "mean: 6.779509202453867 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.80266805664468,
            "unit": "iter/sec",
            "range": "stddev: 0.00045073431408642326",
            "extra": "mean: 4.612489361702536 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 322.7384038922631,
            "unit": "iter/sec",
            "range": "stddev: 0.0005510289706000242",
            "extra": "mean: 3.098484679665892 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 297.10216892928105,
            "unit": "iter/sec",
            "range": "stddev: 0.00033751105773358574",
            "extra": "mean: 3.365845505618066 msec\nrounds: 356"
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
        "date": 1671544166345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.29324131591854,
            "unit": "iter/sec",
            "range": "stddev: 0.0009269364112929098",
            "extra": "mean: 8.598951999999997 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.82631975302482,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845669051826127",
            "extra": "mean: 6.67439473684203 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.4136471797349,
            "unit": "iter/sec",
            "range": "stddev: 0.0002355903830705404",
            "extra": "mean: 5.014701923076925 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.26676334149124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005982427152554906",
            "extra": "mean: 3.2865896656535516 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.55101659091264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007478112807855478",
            "extra": "mean: 9.29791304347832 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.7523275804285,
            "unit": "iter/sec",
            "range": "stddev: 0.000746606738162982",
            "extra": "mean: 7.312489795918592 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.49991316101375,
            "unit": "iter/sec",
            "range": "stddev: 0.00018499864450748085",
            "extra": "mean: 5.167960975609779 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.0502831690386,
            "unit": "iter/sec",
            "range": "stddev: 0.0002603066122877277",
            "extra": "mean: 3.343919254658416 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.096950544874495,
            "unit": "iter/sec",
            "range": "stddev: 0.005405867392863826",
            "extra": "mean: 82.66546153846204 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.623446816919266,
            "unit": "iter/sec",
            "range": "stddev: 0.004547070705410602",
            "extra": "mean: 86.0329999999987 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 141.03910561058694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238521144925131",
            "extra": "mean: 7.0902321428570945 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 205.15242911682336,
            "unit": "iter/sec",
            "range": "stddev: 0.0007758508005536632",
            "extra": "mean: 4.874424369747791 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 351.4015515729859,
            "unit": "iter/sec",
            "range": "stddev: 0.00012616968707801504",
            "extra": "mean: 2.8457472527474046 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 307.45501984019694,
            "unit": "iter/sec",
            "range": "stddev: 0.0011392494521988068",
            "extra": "mean: 3.252508287292758 msec\nrounds: 362"
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
        "date": 1671549286256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.91626653338747,
            "unit": "iter/sec",
            "range": "stddev: 0.0011395014861228406",
            "extra": "mean: 8.55312977099241 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.92634001063988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763267505730579",
            "extra": "mean: 7.1466172839506905 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.8046145460059,
            "unit": "iter/sec",
            "range": "stddev: 0.00042130887508322974",
            "extra": "mean: 5.133348623853238 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.6345503476988,
            "unit": "iter/sec",
            "range": "stddev: 0.0003449113758926318",
            "extra": "mean: 3.382554572271373 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.76052550209798,
            "unit": "iter/sec",
            "range": "stddev: 0.0005998069705565538",
            "extra": "mean: 9.194512396694057 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.66232219979577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006098666882523581",
            "extra": "mean: 7.371243421052875 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.65379247768803,
            "unit": "iter/sec",
            "range": "stddev: 0.0006959917130020781",
            "extra": "mean: 5.16385446009386 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.85632295766686,
            "unit": "iter/sec",
            "range": "stddev: 0.00019763146183670983",
            "extra": "mean: 3.1069764011798773 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.314850952411547,
            "unit": "iter/sec",
            "range": "stddev: 0.003046286267841677",
            "extra": "mean: 81.20276923076976 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.375832827250106,
            "unit": "iter/sec",
            "range": "stddev: 0.004750500469296986",
            "extra": "mean: 80.80264285714327 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.06536737178766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007056373673873898",
            "extra": "mean: 6.576119318181634 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.64258041021677,
            "unit": "iter/sec",
            "range": "stddev: 0.0004949333418446748",
            "extra": "mean: 4.431787644787639 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 341.8621746330953,
            "unit": "iter/sec",
            "range": "stddev: 0.00042741750832738304",
            "extra": "mean: 2.925155440414703 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 324.20248761080865,
            "unit": "iter/sec",
            "range": "stddev: 0.00037483755093631674",
            "extra": "mean: 3.0844920634923 msec\nrounds: 378"
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
        "date": 1671551759833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.64336997138872,
            "unit": "iter/sec",
            "range": "stddev: 0.0029318610709383047",
            "extra": "mean: 8.64727480916035 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.71795270676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002861352274723673",
            "extra": "mean: 6.54801863354036 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.59328120088782,
            "unit": "iter/sec",
            "range": "stddev: 0.00019016212212837744",
            "extra": "mean: 4.79401826484018 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.87609063369325,
            "unit": "iter/sec",
            "range": "stddev: 0.00018096136630373655",
            "extra": "mean: 3.0686510263929354 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.38453082676139,
            "unit": "iter/sec",
            "range": "stddev: 0.0017641048855957194",
            "extra": "mean: 9.961694214876097 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.03196751780104,
            "unit": "iter/sec",
            "range": "stddev: 0.0007761411459770413",
            "extra": "mean: 7.460906666666578 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.8653309739791,
            "unit": "iter/sec",
            "range": "stddev: 0.0005384326789284571",
            "extra": "mean: 5.322961904762025 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.3123565048223,
            "unit": "iter/sec",
            "range": "stddev: 0.00009291407874624158",
            "extra": "mean: 3.1122363636363666 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.890942625389306,
            "unit": "iter/sec",
            "range": "stddev: 0.003114792204041769",
            "extra": "mean: 77.57384615384557 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.71399860146025,
            "unit": "iter/sec",
            "range": "stddev: 0.0027234164394319216",
            "extra": "mean: 78.65346153846093 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.3450087890673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002687989368310821",
            "extra": "mean: 6.122011363636659 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.6014345237818,
            "unit": "iter/sec",
            "range": "stddev: 0.00033410429175456706",
            "extra": "mean: 4.393645418326708 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 317.44956784534344,
            "unit": "iter/sec",
            "range": "stddev: 0.0004139637850463675",
            "extra": "mean: 3.1501066666664506 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 319.69309462916306,
            "unit": "iter/sec",
            "range": "stddev: 0.0004017701926117185",
            "extra": "mean: 3.1279999999999313 msec\nrounds: 366"
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
        "date": 1671589374452,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.47260579029677,
            "unit": "iter/sec",
            "range": "stddev: 0.0021542403837834165",
            "extra": "mean: 9.571887218045042 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.04037110860733,
            "unit": "iter/sec",
            "range": "stddev: 0.0014535765562391843",
            "extra": "mean: 7.297119760479044 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.96701184741121,
            "unit": "iter/sec",
            "range": "stddev: 0.0014300509070650962",
            "extra": "mean: 5.525868995633224 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.2437576617803,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117261246768887",
            "extra": "mean: 3.5939710144928094 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.24966107105075,
            "unit": "iter/sec",
            "range": "stddev: 0.001728566672707941",
            "extra": "mean: 9.876576271186348 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.73140544602836,
            "unit": "iter/sec",
            "range": "stddev: 0.001571046517669761",
            "extra": "mean: 7.708233766233467 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.67315181050412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007232206171463487",
            "extra": "mean: 5.300171171170981 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.7679755317734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125828996969222",
            "extra": "mean: 3.381028653295066 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.759182031297899,
            "unit": "iter/sec",
            "range": "stddev: 0.009878867791435682",
            "extra": "mean: 85.0399285714286 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.237378791116472,
            "unit": "iter/sec",
            "range": "stddev: 0.00530746510188232",
            "extra": "mean: 81.71684615384578 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.52146036936225,
            "unit": "iter/sec",
            "range": "stddev: 0.0009073186355892348",
            "extra": "mean: 6.191127777777834 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.67660818759924,
            "unit": "iter/sec",
            "range": "stddev: 0.0009053698461478701",
            "extra": "mean: 4.572962825279033 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 373.4244742219754,
            "unit": "iter/sec",
            "range": "stddev: 0.0002756427140840767",
            "extra": "mean: 2.6779176755446623 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 371.3092287822415,
            "unit": "iter/sec",
            "range": "stddev: 0.00014442069564939394",
            "extra": "mean: 2.6931730279897277 msec\nrounds: 393"
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
        "date": 1672072193602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.94822537404143,
            "unit": "iter/sec",
            "range": "stddev: 0.0007873914169350157",
            "extra": "mean: 9.013213114754066 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.66806012059644,
            "unit": "iter/sec",
            "range": "stddev: 0.0015351264051037968",
            "extra": "mean: 7.537609271523161 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.25386395581128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012284179449113",
            "extra": "mean: 5.3119759615384545 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.7891741412727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005965840224393336",
            "extra": "mean: 3.3693951367781243 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.16901751057213,
            "unit": "iter/sec",
            "range": "stddev: 0.0017607789018897187",
            "extra": "mean: 10.186513274336345 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.9185720351173,
            "unit": "iter/sec",
            "range": "stddev: 0.001027842559727771",
            "extra": "mean: 8.202195804195945 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.56337482763047,
            "unit": "iter/sec",
            "range": "stddev: 0.0006460403792768084",
            "extra": "mean: 6.003720812182501 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.0387781868109,
            "unit": "iter/sec",
            "range": "stddev: 0.0006455937643512274",
            "extra": "mean: 3.860425867507877 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.063201303244977,
            "unit": "iter/sec",
            "range": "stddev: 0.0070042716982375705",
            "extra": "mean: 90.38975000000111 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.737102056155116,
            "unit": "iter/sec",
            "range": "stddev: 0.010901738943856206",
            "extra": "mean: 93.13499999999937 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.8887442692118,
            "unit": "iter/sec",
            "range": "stddev: 0.0004568368402934513",
            "extra": "mean: 6.41483132530115 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.00639314928551,
            "unit": "iter/sec",
            "range": "stddev: 0.00043266312120051383",
            "extra": "mean: 4.651024489795843 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 288.96143052907036,
            "unit": "iter/sec",
            "range": "stddev: 0.0006986896785028133",
            "extra": "mean: 3.460669467786972 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.6813258682179,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849494149176481",
            "extra": "mean: 3.1183605633804317 msec\nrounds: 355"
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
        "date": 1672075050513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.7663674750679,
            "unit": "iter/sec",
            "range": "stddev: 0.00045965783916831826",
            "extra": "mean: 11.140029702970262 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.55012457970878,
            "unit": "iter/sec",
            "range": "stddev: 0.00016003722602665917",
            "extra": "mean: 8.093880952380964 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.01272702384105,
            "unit": "iter/sec",
            "range": "stddev: 0.0005042871969685934",
            "extra": "mean: 6.249502890173263 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.69775030427706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002954292927493143",
            "extra": "mean: 4.260799256505597 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.14935308038092,
            "unit": "iter/sec",
            "range": "stddev: 0.0008148580217584131",
            "extra": "mean: 11.88363265306131 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.14451888435957,
            "unit": "iter/sec",
            "range": "stddev: 0.0005992195089783287",
            "extra": "mean: 9.421117647058743 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.96446353495998,
            "unit": "iter/sec",
            "range": "stddev: 0.00038180274493545895",
            "extra": "mean: 6.624075471698163 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.847784200398,
            "unit": "iter/sec",
            "range": "stddev: 0.00023644548892033817",
            "extra": "mean: 4.151999999999782 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.485897421231847,
            "unit": "iter/sec",
            "range": "stddev: 0.0020548891365807834",
            "extra": "mean: 95.36618181818181 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.690281173831677,
            "unit": "iter/sec",
            "range": "stddev: 0.00336866235929152",
            "extra": "mean: 93.54290909090969 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 129.5262623882918,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315264853421811",
            "extra": "mean: 7.720442028985717 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 186.87069607407034,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570708934122756",
            "extra": "mean: 5.3512938144332045 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 270.7239647751201,
            "unit": "iter/sec",
            "range": "stddev: 0.0002059752050619716",
            "extra": "mean: 3.6937993311034036 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 268.11771367391987,
            "unit": "iter/sec",
            "range": "stddev: 0.000233050309467052",
            "extra": "mean: 3.7297050847456603 msec\nrounds: 295"
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
        "date": 1672209924279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.69718128411436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005104983919722365",
            "extra": "mean: 8.217117187500005 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.6097404235331,
            "unit": "iter/sec",
            "range": "stddev: 0.0007653222270923175",
            "extra": "mean: 7.01214375 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.0573996464398,
            "unit": "iter/sec",
            "range": "stddev: 0.0006789782111328159",
            "extra": "mean: 4.998565420560769 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.1959176178913,
            "unit": "iter/sec",
            "range": "stddev: 0.0001416714231290557",
            "extra": "mean: 3.084554572271435 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.45964332254484,
            "unit": "iter/sec",
            "range": "stddev: 0.001089008393008105",
            "extra": "mean: 9.57307500000028 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.3798979111501,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574191811768591",
            "extra": "mean: 7.174635761589277 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.75265314456428,
            "unit": "iter/sec",
            "range": "stddev: 0.0004020423858373105",
            "extra": "mean: 5.082523584905605 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.4107974527052,
            "unit": "iter/sec",
            "range": "stddev: 0.00021102778570221986",
            "extra": "mean: 3.140597014925456 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.801697139277891,
            "unit": "iter/sec",
            "range": "stddev: 0.004161093525045073",
            "extra": "mean: 78.11464285714287 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.515644358344689,
            "unit": "iter/sec",
            "range": "stddev: 0.0042934989006085805",
            "extra": "mean: 73.98833333333386 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.39955787385907,
            "unit": "iter/sec",
            "range": "stddev: 0.00039413675770805077",
            "extra": "mean: 5.973731428571227 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.4885898965249,
            "unit": "iter/sec",
            "range": "stddev: 0.00033827060018331656",
            "extra": "mean: 4.338609561752875 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 374.9894385886103,
            "unit": "iter/sec",
            "range": "stddev: 0.00014117161731341793",
            "extra": "mean: 2.6667417721518025 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 323.48775631682724,
            "unit": "iter/sec",
            "range": "stddev: 0.00036114090432098835",
            "extra": "mean: 3.0913071065990816 msec\nrounds: 394"
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
        "date": 1672216890966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.80390908148982,
            "unit": "iter/sec",
            "range": "stddev: 0.00045549706536570625",
            "extra": "mean: 10.019647619047674 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.07161257083894,
            "unit": "iter/sec",
            "range": "stddev: 0.000305333827475172",
            "extra": "mean: 8.259574468085162 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.13348259741673,
            "unit": "iter/sec",
            "range": "stddev: 0.00026997213232359126",
            "extra": "mean: 6.129949438202181 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 253.30219037468822,
            "unit": "iter/sec",
            "range": "stddev: 0.00031958541141711923",
            "extra": "mean: 3.947853741496612 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 90.1146964992761,
            "unit": "iter/sec",
            "range": "stddev: 0.0007554533607600042",
            "extra": "mean: 11.096969072164972 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.47782315323352,
            "unit": "iter/sec",
            "range": "stddev: 0.00047359499577600514",
            "extra": "mean: 8.369754098360774 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.8863766779054,
            "unit": "iter/sec",
            "range": "stddev: 0.00021415157009008095",
            "extra": "mean: 6.215566666666876 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.99953188657977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000986557587278579",
            "extra": "mean: 3.906257142856998 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.256222580545272,
            "unit": "iter/sec",
            "range": "stddev: 0.0015211367833426052",
            "extra": "mean: 88.8397500000003 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.331958389048742,
            "unit": "iter/sec",
            "range": "stddev: 0.002233973060797395",
            "extra": "mean: 88.24600000000042 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 133.66303548752512,
            "unit": "iter/sec",
            "range": "stddev: 0.00034910857703760503",
            "extra": "mean: 7.481500000000604 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 197.38828210268574,
            "unit": "iter/sec",
            "range": "stddev: 0.00018324183837720512",
            "extra": "mean: 5.066156862745165 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 294.5103100785462,
            "unit": "iter/sec",
            "range": "stddev: 0.00012158284676315538",
            "extra": "mean: 3.3954668674699335 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 284.15060895940917,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270424859531722",
            "extra": "mean: 3.519260450160956 msec\nrounds: 311"
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
        "date": 1672331892026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.41154570397588,
            "unit": "iter/sec",
            "range": "stddev: 0.00041750565609530513",
            "extra": "mean: 8.169164062500032 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.2886953637208,
            "unit": "iter/sec",
            "range": "stddev: 0.00021409814791780338",
            "extra": "mean: 6.481356250000014 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.65227704028402,
            "unit": "iter/sec",
            "range": "stddev: 0.0003597334768823",
            "extra": "mean: 5.033921658986136 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.413466086893,
            "unit": "iter/sec",
            "range": "stddev: 0.00013805080819741556",
            "extra": "mean: 3.1209674556212623 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.23384242284818,
            "unit": "iter/sec",
            "range": "stddev: 0.0014017685556684794",
            "extra": "mean: 9.68674590163928 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.19784364780364,
            "unit": "iter/sec",
            "range": "stddev: 0.0014160798385989574",
            "extra": "mean: 7.451684563758388 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.00751444205318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002385518232511259",
            "extra": "mean: 4.974938388625674 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.25268478573844,
            "unit": "iter/sec",
            "range": "stddev: 0.00021757539401014617",
            "extra": "mean: 3.1520615835776633 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.742215871340061,
            "unit": "iter/sec",
            "range": "stddev: 0.003453617956435578",
            "extra": "mean: 78.4792857142855 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.78455468445761,
            "unit": "iter/sec",
            "range": "stddev: 0.0011419439229126865",
            "extra": "mean: 78.21938461538409 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.5895136306187,
            "unit": "iter/sec",
            "range": "stddev: 0.0005011032074966323",
            "extra": "mean: 5.966960451977225 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.9319328458741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000851738417444678",
            "extra": "mean: 4.033365079364932 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 372.89796473235805,
            "unit": "iter/sec",
            "range": "stddev: 0.00009801120247506586",
            "extra": "mean: 2.6816987341771497 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 364.35015003214,
            "unit": "iter/sec",
            "range": "stddev: 0.00013759458364323536",
            "extra": "mean: 2.7446125654450486 msec\nrounds: 382"
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
        "date": 1672340977837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.92397205673605,
            "unit": "iter/sec",
            "range": "stddev: 0.00024150964717257244",
            "extra": "mean: 8.480039999999967 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.98388701800928,
            "unit": "iter/sec",
            "range": "stddev: 0.0007839315755166909",
            "extra": "mean: 6.897318181818261 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.53087155052484,
            "unit": "iter/sec",
            "range": "stddev: 0.0002035506825898742",
            "extra": "mean: 5.037000000000032 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.3585546735984,
            "unit": "iter/sec",
            "range": "stddev: 0.00006566507799930426",
            "extra": "mean: 3.211731249999905 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.06892310752428,
            "unit": "iter/sec",
            "range": "stddev: 0.0007752970849979727",
            "extra": "mean: 9.253353982301089 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.21717436202013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014857636189762253",
            "extra": "mean: 7.081291666666761 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.0285342994335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005534477364222261",
            "extra": "mean: 5.207559405940589 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.92714152369456,
            "unit": "iter/sec",
            "range": "stddev: 0.00007494915142729589",
            "extra": "mean: 3.2370092024539723 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.787898993866273,
            "unit": "iter/sec",
            "range": "stddev: 0.0038826707196953805",
            "extra": "mean: 78.19892857142919 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.767365275412637,
            "unit": "iter/sec",
            "range": "stddev: 0.002172974771821344",
            "extra": "mean: 92.87323076923079 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.44220624483688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005726381947642808",
            "extra": "mean: 6.392136904761935 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.9678131535211,
            "unit": "iter/sec",
            "range": "stddev: 0.00010030142710704389",
            "extra": "mean: 4.202248979591481 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 354.59076528083455,
            "unit": "iter/sec",
            "range": "stddev: 0.00007583353281543445",
            "extra": "mean: 2.820152406417025 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 345.22052013225425,
            "unit": "iter/sec",
            "range": "stddev: 0.00013778627915067392",
            "extra": "mean: 2.896699186991837 msec\nrounds: 369"
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
        "date": 1672353497565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.63639115177276,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107336508151226",
            "extra": "mean: 7.9594772727272 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.26053520404227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005011531611664724",
            "extra": "mean: 6.611109756097678 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.66797750851623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638587469472321",
            "extra": "mean: 4.958645454545558 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.2871891470879,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462343621689737",
            "extra": "mean: 3.2863690476190737 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.33930798032031,
            "unit": "iter/sec",
            "range": "stddev: 0.0009104746307111108",
            "extra": "mean: 9.584115702479188 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.0370588137078,
            "unit": "iter/sec",
            "range": "stddev: 0.0005383957332323104",
            "extra": "mean: 7.140966887417327 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.29575812324495,
            "unit": "iter/sec",
            "range": "stddev: 0.0001955308325730277",
            "extra": "mean: 5.042972222222117 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.78712442594264,
            "unit": "iter/sec",
            "range": "stddev: 0.00016615549777677767",
            "extra": "mean: 3.136889552238832 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.83217423006667,
            "unit": "iter/sec",
            "range": "stddev: 0.003069123557644597",
            "extra": "mean: 72.29521428571394 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.783306210849746,
            "unit": "iter/sec",
            "range": "stddev: 0.0009374210722323607",
            "extra": "mean: 72.55153333333291 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.39172308162247,
            "unit": "iter/sec",
            "range": "stddev: 0.00014802347357130183",
            "extra": "mean: 5.868829670329537 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.99467639914275,
            "unit": "iter/sec",
            "range": "stddev: 0.000280635528143364",
            "extra": "mean: 4.237383720930548 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.649718454062,
            "unit": "iter/sec",
            "range": "stddev: 0.00010658212222537753",
            "extra": "mean: 2.697965087282103 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 360.8538356912293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001102699607373674",
            "extra": "mean: 2.7712051282050583 msec\nrounds: 390"
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
        "date": 1672683752879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.35702060013797,
            "unit": "iter/sec",
            "range": "stddev: 0.0004505198061073902",
            "extra": "mean: 8.668739837398366 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.44955855288106,
            "unit": "iter/sec",
            "range": "stddev: 0.00044655481501401244",
            "extra": "mean: 6.736294871794971 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.46889894971292,
            "unit": "iter/sec",
            "range": "stddev: 0.0009025091753687096",
            "extra": "mean: 5.2502009803921705 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.55320033170625,
            "unit": "iter/sec",
            "range": "stddev: 0.00009229394521640031",
            "extra": "mean: 3.294315457413248 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.21625406859047,
            "unit": "iter/sec",
            "range": "stddev: 0.0015716520738952625",
            "extra": "mean: 9.688396551723999 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.05217887183453,
            "unit": "iter/sec",
            "range": "stddev: 0.002410549728382973",
            "extra": "mean: 8.767916666666617 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.69585974994118,
            "unit": "iter/sec",
            "range": "stddev: 0.00038394698117194277",
            "extra": "mean: 5.414306532663456 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.8384365510158,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758051232497038",
            "extra": "mean: 3.368835962145139 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.85475413305051,
            "unit": "iter/sec",
            "range": "stddev: 0.002252823604347721",
            "extra": "mean: 77.79223076923167 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.637247801848014,
            "unit": "iter/sec",
            "range": "stddev: 0.00316718462903023",
            "extra": "mean: 79.13115384615347 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.2288701724801,
            "unit": "iter/sec",
            "range": "stddev: 0.00042468284128614346",
            "extra": "mean: 6.164130952381103 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.13765058399142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766375043234069",
            "extra": "mean: 4.289311475409823 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 347.7452398397821,
            "unit": "iter/sec",
            "range": "stddev: 0.00019334723726058235",
            "extra": "mean: 2.8756684073108625 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 333.91085210268704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398413492826837",
            "extra": "mean: 2.9948113207547733 msec\nrounds: 371"
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
        "date": 1672686527273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.97390302023285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005243637024291034",
            "extra": "mean: 8.066213740457922 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.5083497934976,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405493361451002",
            "extra": "mean: 6.600296296296389 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.00352949318167,
            "unit": "iter/sec",
            "range": "stddev: 0.0003333997072253407",
            "extra": "mean: 4.926022727272765 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.7280402662754,
            "unit": "iter/sec",
            "range": "stddev: 0.00007860993490573614",
            "extra": "mean: 3.0795000000000154 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.02141641227392,
            "unit": "iter/sec",
            "range": "stddev: 0.00033723007350574847",
            "extra": "mean: 8.619098360655851 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.6197210257246,
            "unit": "iter/sec",
            "range": "stddev: 0.00047327336418265264",
            "extra": "mean: 6.914686274509702 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.37201143254026,
            "unit": "iter/sec",
            "range": "stddev: 0.0003910918548780396",
            "extra": "mean: 4.9907169811322305 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.6911816800018,
            "unit": "iter/sec",
            "range": "stddev: 0.0001091149395292259",
            "extra": "mean: 3.147710914454219 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.353210541024358,
            "unit": "iter/sec",
            "range": "stddev: 0.0013630933489763223",
            "extra": "mean: 74.88835714285739 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.956760096320444,
            "unit": "iter/sec",
            "range": "stddev: 0.002226591914201045",
            "extra": "mean: 71.64986666666569 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.30880851352381,
            "unit": "iter/sec",
            "range": "stddev: 0.0002799205803278025",
            "extra": "mean: 6.012910614525162 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.80085839303572,
            "unit": "iter/sec",
            "range": "stddev: 0.00037186431228473026",
            "extra": "mean: 4.135634615384814 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 363.75359876377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000878586505717979",
            "extra": "mean: 2.749113695090679 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 359.31212618074824,
            "unit": "iter/sec",
            "range": "stddev: 0.00013942122650566286",
            "extra": "mean: 2.783095607235255 msec\nrounds: 387"
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
        "date": 1672767341667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.3367237550119,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489006514521801",
            "extra": "mean: 7.9785075757576 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.00992790450238,
            "unit": "iter/sec",
            "range": "stddev: 0.00019927443406991469",
            "extra": "mean: 6.40984848484851 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.51722745022172,
            "unit": "iter/sec",
            "range": "stddev: 0.00033257275756445203",
            "extra": "mean: 4.795766816143406 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.8848483020242,
            "unit": "iter/sec",
            "range": "stddev: 0.00021473676935721431",
            "extra": "mean: 3.0221994301994233 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.81327166505334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006747379677605035",
            "extra": "mean: 8.488008064516109 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.73138138193312,
            "unit": "iter/sec",
            "range": "stddev: 0.0008638858587076199",
            "extra": "mean: 7.006167741935549 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.94377195469602,
            "unit": "iter/sec",
            "range": "stddev: 0.00014447432858948967",
            "extra": "mean: 5.0265458937197725 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.23788000599984,
            "unit": "iter/sec",
            "range": "stddev: 0.00013590066156988158",
            "extra": "mean: 3.1226786786786884 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.103081002310958,
            "unit": "iter/sec",
            "range": "stddev: 0.003523916122818064",
            "extra": "mean: 76.31792857142779 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.991143606097433,
            "unit": "iter/sec",
            "range": "stddev: 0.0022610787139210995",
            "extra": "mean: 71.47378571428524 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.64488648773806,
            "unit": "iter/sec",
            "range": "stddev: 0.00042465681937665673",
            "extra": "mean: 6.037010989011275 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.66813629269373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005497549450644403",
            "extra": "mean: 4.316519379845063 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.6734152593222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003444127871394113",
            "extra": "mean: 2.9012971576227575 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 357.5690707257847,
            "unit": "iter/sec",
            "range": "stddev: 0.000319072427620273",
            "extra": "mean: 2.796662468513356 msec\nrounds: 397"
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
        "date": 1672779991774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.41748918882732,
            "unit": "iter/sec",
            "range": "stddev: 0.0004494709305051842",
            "extra": "mean: 8.168767441860481 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.44629878141092,
            "unit": "iter/sec",
            "range": "stddev: 0.00011859751832432814",
            "extra": "mean: 6.3112865853659255 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.87106606468856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000799597273682938",
            "extra": "mean: 4.787642533936674 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.29220179155504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633279568587799",
            "extra": "mean: 3.0931769911504303 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.82298923217759,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520796549407203",
            "extra": "mean: 8.559959016393334 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.15134784021052,
            "unit": "iter/sec",
            "range": "stddev: 0.0002614638503297235",
            "extra": "mean: 6.842222222222099 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.9321264859412,
            "unit": "iter/sec",
            "range": "stddev: 0.00009187341194401161",
            "extra": "mean: 4.927755980861307 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.7480468544272,
            "unit": "iter/sec",
            "range": "stddev: 0.00007971785154663392",
            "extra": "mean: 3.147147590361552 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.27434467404841,
            "unit": "iter/sec",
            "range": "stddev: 0.0027353012892290204",
            "extra": "mean: 75.33328571428603 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.905047068584263,
            "unit": "iter/sec",
            "range": "stddev: 0.0009622703560302159",
            "extra": "mean: 71.91633333333367 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.09598022345614,
            "unit": "iter/sec",
            "range": "stddev: 0.00014238310573498264",
            "extra": "mean: 5.91380113636365 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.86036591255595,
            "unit": "iter/sec",
            "range": "stddev: 0.00007112269731370446",
            "extra": "mean: 4.018317647059066 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.5911734850178,
            "unit": "iter/sec",
            "range": "stddev: 0.00009744404219899422",
            "extra": "mean: 2.6983913043477483 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 362.2724740669242,
            "unit": "iter/sec",
            "range": "stddev: 0.00047254680642959006",
            "extra": "mean: 2.760353246753342 msec\nrounds: 385"
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
        "date": 1672783145932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.17109584950745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006635783751785942",
            "extra": "mean: 8.11878787878787 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.03310000171138,
            "unit": "iter/sec",
            "range": "stddev: 0.00018500162832929293",
            "extra": "mean: 6.492111111111115 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.2920964809398,
            "unit": "iter/sec",
            "range": "stddev: 0.00036073567015681713",
            "extra": "mean: 4.847495454545417 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.21121367690455,
            "unit": "iter/sec",
            "range": "stddev: 0.00006486895808483849",
            "extra": "mean: 3.065498542274051 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.83030825154263,
            "unit": "iter/sec",
            "range": "stddev: 0.00021942409749051053",
            "extra": "mean: 8.559422764227756 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.20220229788526,
            "unit": "iter/sec",
            "range": "stddev: 0.00021650860231131234",
            "extra": "mean: 6.7933766233765525 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.29649257771032,
            "unit": "iter/sec",
            "range": "stddev: 0.00021883677027031973",
            "extra": "mean: 4.9432394366197885 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.960684753203,
            "unit": "iter/sec",
            "range": "stddev: 0.00007101249433867864",
            "extra": "mean: 3.1351826347305267 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.505587454466863,
            "unit": "iter/sec",
            "range": "stddev: 0.0017135510907649075",
            "extra": "mean: 74.04342857142865 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.110541985917783,
            "unit": "iter/sec",
            "range": "stddev: 0.001843748704599756",
            "extra": "mean: 70.86899999999947 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.65515516274277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005546467298965336",
            "extra": "mean: 5.929258426966292 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.52970826462303,
            "unit": "iter/sec",
            "range": "stddev: 0.00023762693074451407",
            "extra": "mean: 4.106275193798471 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 366.3601607903623,
            "unit": "iter/sec",
            "range": "stddev: 0.00017709969932739328",
            "extra": "mean: 2.7295544303798294 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 356.27688805980654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002653102786691224",
            "extra": "mean: 2.8068056994820685 msec\nrounds: 386"
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
        "date": 1672841213872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.97911311562945,
            "unit": "iter/sec",
            "range": "stddev: 0.001025282745625815",
            "extra": "mean: 8.131462121212108 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.76317700293768,
            "unit": "iter/sec",
            "range": "stddev: 0.00016790329387732502",
            "extra": "mean: 6.379049079754619 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.07057342739088,
            "unit": "iter/sec",
            "range": "stddev: 0.0003760533147740987",
            "extra": "mean: 4.924396396396428 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.28407182732946,
            "unit": "iter/sec",
            "range": "stddev: 0.00015966152364606478",
            "extra": "mean: 3.0742359882005847 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.36372449485872,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578114493889299",
            "extra": "mean: 8.520520325203266 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.7915045179304,
            "unit": "iter/sec",
            "range": "stddev: 0.0005675292373017424",
            "extra": "mean: 7.205051948052127 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.2992340694802,
            "unit": "iter/sec",
            "range": "stddev: 0.0004322592709816501",
            "extra": "mean: 5.068443396226483 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.6292871523234,
            "unit": "iter/sec",
            "range": "stddev: 0.00016269030120531829",
            "extra": "mean: 3.138443452380891 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.660448577779412,
            "unit": "iter/sec",
            "range": "stddev: 0.004808780268459666",
            "extra": "mean: 78.9861428571432 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.325363496879966,
            "unit": "iter/sec",
            "range": "stddev: 0.0027955709987029574",
            "extra": "mean: 75.04485714285713 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.12957950881366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706317892927157",
            "extra": "mean: 5.84352513966469 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.94400501215966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003351029849146567",
            "extra": "mean: 4.256333333332955 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 366.51333262015856,
            "unit": "iter/sec",
            "range": "stddev: 0.00022306040194522737",
            "extra": "mean: 2.7284137055837054 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 360.89953516880837,
            "unit": "iter/sec",
            "range": "stddev: 0.00020201886615724376",
            "extra": "mean: 2.770854219948653 msec\nrounds: 391"
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
        "date": 1672843251855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.35086840881766,
            "unit": "iter/sec",
            "range": "stddev: 0.0005348920775681768",
            "extra": "mean: 8.173215384615377 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.32844421162898,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479332803024233",
            "extra": "mean: 6.787555555555562 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.50068833072785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194429986226628",
            "extra": "mean: 4.889959090909045 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.84655141617833,
            "unit": "iter/sec",
            "range": "stddev: 0.0003179551950473241",
            "extra": "mean: 3.097446745562135 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.14881974329047,
            "unit": "iter/sec",
            "range": "stddev: 0.001260254647924887",
            "extra": "mean: 9.332813953488449 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.13810710960226,
            "unit": "iter/sec",
            "range": "stddev: 0.0013078932831137456",
            "extra": "mean: 8.761315789473713 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.58153526505455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005605790990586862",
            "extra": "mean: 5.247098039215776 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.8750886180169,
            "unit": "iter/sec",
            "range": "stddev: 0.00029496768078932973",
            "extra": "mean: 3.2693084112149475 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.23077110969539,
            "unit": "iter/sec",
            "range": "stddev: 0.0015749068511321453",
            "extra": "mean: 75.58138461538414 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.474173307167732,
            "unit": "iter/sec",
            "range": "stddev: 0.015453205380534654",
            "extra": "mean: 95.47292857142965 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 136.3492951851268,
            "unit": "iter/sec",
            "range": "stddev: 0.0015119813848995579",
            "extra": "mean: 7.334104651162742 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.81586766347297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006523205164173728",
            "extra": "mean: 4.633579591836708 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.4815709185012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002772655649394185",
            "extra": "mean: 2.919865139949284 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 300.0689283002379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005928993503915015",
            "extra": "mean: 3.332567639257327 msec\nrounds: 377"
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
        "date": 1672844339916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.37040208387863,
            "unit": "iter/sec",
            "range": "stddev: 0.0009364775136714801",
            "extra": "mean: 8.667734374999943 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.83088294621737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004335723559910992",
            "extra": "mean: 6.95260975609758 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.4278574726861,
            "unit": "iter/sec",
            "range": "stddev: 0.00021958878329189147",
            "extra": "mean: 4.964556603773644 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.92450610287915,
            "unit": "iter/sec",
            "range": "stddev: 0.00029467251150027096",
            "extra": "mean: 3.2475492537313513 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.16444623150757,
            "unit": "iter/sec",
            "range": "stddev: 0.00047005814043799536",
            "extra": "mean: 9.160491666666607 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.44193231931206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005900770680387797",
            "extra": "mean: 7.223245033112733 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.90051202912497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002826243212077285",
            "extra": "mean: 5.184019417475759 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.814019515522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002380374089651301",
            "extra": "mean: 3.369113095238093 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.70033558194407,
            "unit": "iter/sec",
            "range": "stddev: 0.0028559150740616558",
            "extra": "mean: 78.73807692307668 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.569190979188136,
            "unit": "iter/sec",
            "range": "stddev: 0.004494234909646003",
            "extra": "mean: 79.55961538461655 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.07767052672196,
            "unit": "iter/sec",
            "range": "stddev: 0.00023403780116514693",
            "extra": "mean: 6.05775449101776 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 196.18268968024216,
            "unit": "iter/sec",
            "range": "stddev: 0.0012936113843646227",
            "extra": "mean: 5.09728968253977 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 365.59398615994195,
            "unit": "iter/sec",
            "range": "stddev: 0.0001362362611961749",
            "extra": "mean: 2.7352747524750445 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.16610201264456,
            "unit": "iter/sec",
            "range": "stddev: 0.0004602184699068921",
            "extra": "mean: 2.8721923076925004 msec\nrounds: 390"
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
        "date": 1672858863184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.62532840899829,
            "unit": "iter/sec",
            "range": "stddev: 0.005324009315531652",
            "extra": "mean: 8.501570312499977 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.4375247191652,
            "unit": "iter/sec",
            "range": "stddev: 0.0004778818137890756",
            "extra": "mean: 6.5173105590062645 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.94482975988348,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602199549502408",
            "extra": "mean: 5.292550218340607 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.95121059955517,
            "unit": "iter/sec",
            "range": "stddev: 0.00018806363665737851",
            "extra": "mean: 3.175094955489631 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.10420196319555,
            "unit": "iter/sec",
            "range": "stddev: 0.00033290714834684996",
            "extra": "mean: 8.539403225806431 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.4943330427194,
            "unit": "iter/sec",
            "range": "stddev: 0.0007930372535284826",
            "extra": "mean: 7.1687500000000375 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.1938750969714,
            "unit": "iter/sec",
            "range": "stddev: 0.0001947446153380592",
            "extra": "mean: 4.9703302325581245 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.97854924807854,
            "unit": "iter/sec",
            "range": "stddev: 0.0002218527332053627",
            "extra": "mean: 3.154787610619559 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.362284950726577,
            "unit": "iter/sec",
            "range": "stddev: 0.0019155385966836173",
            "extra": "mean: 74.83749999999999 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.991809592038463,
            "unit": "iter/sec",
            "range": "stddev: 0.004026873719903229",
            "extra": "mean: 76.97157142857236 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.84399158778592,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013582421587975",
            "extra": "mean: 6.178789772727455 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.4639706206361,
            "unit": "iter/sec",
            "range": "stddev: 0.00036004992721991595",
            "extra": "mean: 4.124324110672178 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.78090659088576,
            "unit": "iter/sec",
            "range": "stddev: 0.00013461817185944126",
            "extra": "mean: 2.7717653061223904 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.57250990455503,
            "unit": "iter/sec",
            "range": "stddev: 0.0008438647581757959",
            "extra": "mean: 2.910593749999968 msec\nrounds: 384"
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
        "date": 1672942105542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.30547710215104,
            "unit": "iter/sec",
            "range": "stddev: 0.0011097064112693057",
            "extra": "mean: 8.452694029850777 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.82600452883776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002313976423469757",
            "extra": "mean: 6.336091463414582 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.22034856651456,
            "unit": "iter/sec",
            "range": "stddev: 0.000579822496347076",
            "extra": "mean: 5.0963114035088015 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.9401904129631,
            "unit": "iter/sec",
            "range": "stddev: 0.00019985977342615755",
            "extra": "mean: 3.0125909090909158 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.62340804117456,
            "unit": "iter/sec",
            "range": "stddev: 0.00031937725618932765",
            "extra": "mean: 8.430039370078601 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.2979585729792,
            "unit": "iter/sec",
            "range": "stddev: 0.003689980552640629",
            "extra": "mean: 7.283429487179601 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.83938699277485,
            "unit": "iter/sec",
            "range": "stddev: 0.0010690811736733586",
            "extra": "mean: 4.954434389140294 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.57089931393296,
            "unit": "iter/sec",
            "range": "stddev: 0.0016643847432211822",
            "extra": "mean: 3.1688600000001594 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.503192779584765,
            "unit": "iter/sec",
            "range": "stddev: 0.0083454506788411",
            "extra": "mean: 79.97957142857156 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.841939573170434,
            "unit": "iter/sec",
            "range": "stddev: 0.008632151722637831",
            "extra": "mean: 77.86985714285828 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.95026975987824,
            "unit": "iter/sec",
            "range": "stddev: 0.0024172317134335103",
            "extra": "mean: 6.412300546448127 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 222.69349495170837,
            "unit": "iter/sec",
            "range": "stddev: 0.006279354745415576",
            "extra": "mean: 4.490476923076951 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 365.5738410826064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008701970275301377",
            "extra": "mean: 2.7354254807691136 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 365.4921526948787,
            "unit": "iter/sec",
            "range": "stddev: 0.0004175311216599914",
            "extra": "mean: 2.736036855037003 msec\nrounds: 407"
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
        "date": 1672949682326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.96067630513255,
            "unit": "iter/sec",
            "range": "stddev: 0.0003579727240236261",
            "extra": "mean: 8.336065040650448 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.73906279821105,
            "unit": "iter/sec",
            "range": "stddev: 0.0007679102295001614",
            "extra": "mean: 7.2601045751633215 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.77034076211325,
            "unit": "iter/sec",
            "range": "stddev: 0.001099134020149997",
            "extra": "mean: 5.3829906103286 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.15422060898976,
            "unit": "iter/sec",
            "range": "stddev: 0.00019374153626946543",
            "extra": "mean: 3.245128358208919 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.58953015151184,
            "unit": "iter/sec",
            "range": "stddev: 0.0007022580326724424",
            "extra": "mean: 9.381784482758752 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.81318932307339,
            "unit": "iter/sec",
            "range": "stddev: 0.0019255275578069686",
            "extra": "mean: 8.209291666666704 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.59016729940748,
            "unit": "iter/sec",
            "range": "stddev: 0.0004503475943299267",
            "extra": "mean: 5.060980582524151 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.8504148837769,
            "unit": "iter/sec",
            "range": "stddev: 0.00011308625879161626",
            "extra": "mean: 3.107033434650407 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.21634975748001,
            "unit": "iter/sec",
            "range": "stddev: 0.0018389984254456313",
            "extra": "mean: 75.66385714285698 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.830097255219355,
            "unit": "iter/sec",
            "range": "stddev: 0.0009303873026684471",
            "extra": "mean: 72.30607142857285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.55215688964734,
            "unit": "iter/sec",
            "range": "stddev: 0.00010212352624271688",
            "extra": "mean: 5.897890173410462 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.31211641890823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005287373791360664",
            "extra": "mean: 4.304553784860652 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.55514758037134,
            "unit": "iter/sec",
            "range": "stddev: 0.00008492910474415064",
            "extra": "mean: 2.698653645833123 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 361.9116190818104,
            "unit": "iter/sec",
            "range": "stddev: 0.00016340296360295927",
            "extra": "mean: 2.7631055408971252 msec\nrounds: 379"
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
        "date": 1673021397144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.32487545568115,
            "unit": "iter/sec",
            "range": "stddev: 0.0003390735929174556",
            "extra": "mean: 8.108664179104455 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.65444414206505,
            "unit": "iter/sec",
            "range": "stddev: 0.0010380525950739576",
            "extra": "mean: 6.961149068323039 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.14674774981933,
            "unit": "iter/sec",
            "range": "stddev: 0.00017629396052652851",
            "extra": "mean: 4.827495535714354 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7652814288345,
            "unit": "iter/sec",
            "range": "stddev: 0.00018720938177373383",
            "extra": "mean: 3.1175443786981716 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.17695972361959,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996446802216293",
            "extra": "mean: 8.994669421487604 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.10075673678608,
            "unit": "iter/sec",
            "range": "stddev: 0.000416180578165798",
            "extra": "mean: 7.457079470198718 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.8919653656961,
            "unit": "iter/sec",
            "range": "stddev: 0.0003371760747272124",
            "extra": "mean: 5.002702325581377 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.96315963095026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002183859379763809",
            "extra": "mean: 3.1952642642642397 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.503651081874185,
            "unit": "iter/sec",
            "range": "stddev: 0.00571444354919334",
            "extra": "mean: 86.92892307692273 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.120063576079687,
            "unit": "iter/sec",
            "range": "stddev: 0.0017813967232794196",
            "extra": "mean: 76.21914285714178 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.0401893013524,
            "unit": "iter/sec",
            "range": "stddev: 0.0003806163783430701",
            "extra": "mean: 6.20963005780323 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 173.53314170646186,
            "unit": "iter/sec",
            "range": "stddev: 0.0015733254457003648",
            "extra": "mean: 5.76258800000025 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 317.86395422759455,
            "unit": "iter/sec",
            "range": "stddev: 0.000332656332574805",
            "extra": "mean: 3.145999999999961 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 338.59262774539627,
            "unit": "iter/sec",
            "range": "stddev: 0.000288522231009985",
            "extra": "mean: 2.953401574803179 msec\nrounds: 381"
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
        "date": 1673245035902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.18132571102204,
            "unit": "iter/sec",
            "range": "stddev: 0.001063233076411036",
            "extra": "mean: 8.118113636363647 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.10117225437085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002094844973627353",
            "extra": "mean: 6.406101796407233 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.38962404155265,
            "unit": "iter/sec",
            "range": "stddev: 0.00025937896051671255",
            "extra": "mean: 4.600035555555569 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.45667900388673,
            "unit": "iter/sec",
            "range": "stddev: 0.00020387250910572716",
            "extra": "mean: 3.0726055555555445 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.19103340739034,
            "unit": "iter/sec",
            "range": "stddev: 0.0004025349122194418",
            "extra": "mean: 8.052111111110959 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.07008397713304,
            "unit": "iter/sec",
            "range": "stddev: 0.0005887235781709071",
            "extra": "mean: 7.088675159235721 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.5084009103546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004099631866851517",
            "extra": "mean: 5.037570175438544 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.0886538236659,
            "unit": "iter/sec",
            "range": "stddev: 0.000602165701717538",
            "extra": "mean: 3.2145177514793875 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.818012603768626,
            "unit": "iter/sec",
            "range": "stddev: 0.00336373954398687",
            "extra": "mean: 78.0152142857146 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.572426154956931,
            "unit": "iter/sec",
            "range": "stddev: 0.003399939385366582",
            "extra": "mean: 79.53914285714296 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.79679373094763,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674635986513327",
            "extra": "mean: 6.142627118643924 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.7812324197533,
            "unit": "iter/sec",
            "range": "stddev: 0.0010203498131099603",
            "extra": "mean: 4.351965517241409 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 354.8634788244456,
            "unit": "iter/sec",
            "range": "stddev: 0.0003840849496321452",
            "extra": "mean: 2.8179851116623627 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 364.4102519517882,
            "unit": "iter/sec",
            "range": "stddev: 0.0007295186829128144",
            "extra": "mean: 2.744159898477008 msec\nrounds: 394"
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
        "date": 1673254226310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.00277548205504,
            "unit": "iter/sec",
            "range": "stddev: 0.0006338791853714852",
            "extra": "mean: 8.403165354330701 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.12524557159372,
            "unit": "iter/sec",
            "range": "stddev: 0.000724097742278363",
            "extra": "mean: 6.8434444444444225 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.29938573681375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047804135247854",
            "extra": "mean: 5.3677042253521225 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.8156873788792,
            "unit": "iter/sec",
            "range": "stddev: 0.00026345060074409827",
            "extra": "mean: 3.156409356725136 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.42060294916544,
            "unit": "iter/sec",
            "range": "stddev: 0.000661295079425484",
            "extra": "mean: 8.895166666666803 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.7280221959388,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359289112563347",
            "extra": "mean: 7.367675324675303 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.49677648502143,
            "unit": "iter/sec",
            "range": "stddev: 0.00027995011936413403",
            "extra": "mean: 4.890052631578992 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.82940296961283,
            "unit": "iter/sec",
            "range": "stddev: 0.0002112195945027156",
            "extra": "mean: 3.08804571428567 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.504197837845544,
            "unit": "iter/sec",
            "range": "stddev: 0.005264619160119363",
            "extra": "mean: 79.97314285714297 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.571776989247924,
            "unit": "iter/sec",
            "range": "stddev: 0.006568650561913174",
            "extra": "mean: 79.5432500000004 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.38445214494723,
            "unit": "iter/sec",
            "range": "stddev: 0.001178474893176721",
            "extra": "mean: 6.925953488372158 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.89353152822193,
            "unit": "iter/sec",
            "range": "stddev: 0.0017602710844712769",
            "extra": "mean: 4.953105691056842 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 342.70647835008754,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267106504784402",
            "extra": "mean: 2.917948924731042 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 320.0259328507559,
            "unit": "iter/sec",
            "range": "stddev: 0.0003694787645724419",
            "extra": "mean: 3.124746770026134 msec\nrounds: 387"
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
        "date": 1673261228633,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.29582925513287,
            "unit": "iter/sec",
            "range": "stddev: 0.000585369805029182",
            "extra": "mean: 8.382522727272743 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.41693694710145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485544164885269",
            "extra": "mean: 6.648187499999946 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.28818077162165,
            "unit": "iter/sec",
            "range": "stddev: 0.0002025885274914982",
            "extra": "mean: 4.801040540540577 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.5439748825772,
            "unit": "iter/sec",
            "range": "stddev: 0.00011299348407061478",
            "extra": "mean: 3.1099945205478794 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.64567763761637,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164486205475792",
            "extra": "mean: 8.877393442623 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.98611548981276,
            "unit": "iter/sec",
            "range": "stddev: 0.0004627675464323219",
            "extra": "mean: 7.247105960264733 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.6290034810323,
            "unit": "iter/sec",
            "range": "stddev: 0.00026093298597304796",
            "extra": "mean: 5.05998604651152 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.60608771872495,
            "unit": "iter/sec",
            "range": "stddev: 0.00011913364062138068",
            "extra": "mean: 3.178578034682071 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.588169751181132,
            "unit": "iter/sec",
            "range": "stddev: 0.0021018133824167694",
            "extra": "mean: 73.59342857142893 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.877542712763363,
            "unit": "iter/sec",
            "range": "stddev: 0.0018235409379508223",
            "extra": "mean: 72.05886666666763 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.7431289854846,
            "unit": "iter/sec",
            "range": "stddev: 0.0002446498156338008",
            "extra": "mean: 5.997248618784481 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.41622554105737,
            "unit": "iter/sec",
            "range": "stddev: 0.00027907664586018457",
            "extra": "mean: 4.22982812500039 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 350.9292517744008,
            "unit": "iter/sec",
            "range": "stddev: 0.00018961907041563844",
            "extra": "mean: 2.8495772151899783 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 372.46907740651534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001867997252316754",
            "extra": "mean: 2.684786632390943 msec\nrounds: 389"
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
        "date": 1673268970438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.55802571342824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021258978572223",
            "extra": "mean: 7.778588652482295 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.33487907677682,
            "unit": "iter/sec",
            "range": "stddev: 0.00021032789253772112",
            "extra": "mean: 6.23694610778449 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.77135613187997,
            "unit": "iter/sec",
            "range": "stddev: 0.00018881766806918196",
            "extra": "mean: 4.677895196506493 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 341.83025686102974,
            "unit": "iter/sec",
            "range": "stddev: 0.00008839107161323181",
            "extra": "mean: 2.925428571428502 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.42138652646531,
            "unit": "iter/sec",
            "range": "stddev: 0.0002988008126674159",
            "extra": "mean: 8.444420634920668 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.7170157679707,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121036436613768",
            "extra": "mean: 6.679267515923412 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.07178692081163,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946358228017455",
            "extra": "mean: 4.948736363636367 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.1698515361626,
            "unit": "iter/sec",
            "range": "stddev: 0.00016881023222706942",
            "extra": "mean: 3.065887283236935 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.656298284768926,
            "unit": "iter/sec",
            "range": "stddev: 0.0026196248829693743",
            "extra": "mean: 73.22628571428577 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.833605701658911,
            "unit": "iter/sec",
            "range": "stddev: 0.002022414167935992",
            "extra": "mean: 72.2877333333334 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.0025170324072,
            "unit": "iter/sec",
            "range": "stddev: 0.0004070837151444991",
            "extra": "mean: 5.987933701657608 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.48762738688038,
            "unit": "iter/sec",
            "range": "stddev: 0.00012785756773314982",
            "extra": "mean: 4.024345238095336 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 387.3271061612956,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794035043529856",
            "extra": "mean: 2.5817971014493555 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 372.5665882283548,
            "unit": "iter/sec",
            "range": "stddev: 0.00011339599353902959",
            "extra": "mean: 2.684083950617376 msec\nrounds: 405"
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
        "date": 1673281506153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.65846477352669,
            "unit": "iter/sec",
            "range": "stddev: 0.000549984736797009",
            "extra": "mean: 8.49917599999997 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6701406777734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504939349637101",
            "extra": "mean: 6.9603885350319405 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.7596650386403,
            "unit": "iter/sec",
            "range": "stddev: 0.00020300762509200664",
            "extra": "mean: 5.031201877934303 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.0514520313558,
            "unit": "iter/sec",
            "range": "stddev: 0.00006087390912006294",
            "extra": "mean: 3.214902208201858 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.4218391353361,
            "unit": "iter/sec",
            "range": "stddev: 0.0004859072031264954",
            "extra": "mean: 9.30909401709408 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.49951858270327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002315567593881924",
            "extra": "mean: 7.0175675675677756 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.1528524388092,
            "unit": "iter/sec",
            "range": "stddev: 0.0001840136341454582",
            "extra": "mean: 5.204190243902044 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.40698278392966,
            "unit": "iter/sec",
            "range": "stddev: 0.00018657390958743086",
            "extra": "mean: 3.373739682539682 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.12141242920747,
            "unit": "iter/sec",
            "range": "stddev: 0.002658982179475206",
            "extra": "mean: 76.2113076923076 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.172676857300456,
            "unit": "iter/sec",
            "range": "stddev: 0.001278215428368373",
            "extra": "mean: 75.91471428571391 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.63137808174812,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896965054662116",
            "extra": "mean: 6.225433734939897 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.30250868216777,
            "unit": "iter/sec",
            "range": "stddev: 0.0001772927553709752",
            "extra": "mean: 4.438476987447535 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 326.6682743534861,
            "unit": "iter/sec",
            "range": "stddev: 0.001309424733186058",
            "extra": "mean: 3.0612094240835437 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.99497456104297,
            "unit": "iter/sec",
            "range": "stddev: 0.00016431648347182794",
            "extra": "mean: 3.0211939058173742 msec\nrounds: 361"
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
        "date": 1673311909460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.57544371343874,
            "unit": "iter/sec",
            "range": "stddev: 0.00024721743423593284",
            "extra": "mean: 7.542874999999968 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.72017565073966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003950185256878009",
            "extra": "mean: 6.070901734104054 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.46698843311174,
            "unit": "iter/sec",
            "range": "stddev: 0.000382232741749567",
            "extra": "mean: 4.556493927125519 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.86359254167724,
            "unit": "iter/sec",
            "range": "stddev: 0.00042815280016591785",
            "extra": "mean: 2.866449871465261 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.41488919091337,
            "unit": "iter/sec",
            "range": "stddev: 0.0023006839906622714",
            "extra": "mean: 8.740121212121213 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.2688340821157,
            "unit": "iter/sec",
            "range": "stddev: 0.0005955310996678373",
            "extra": "mean: 6.610747058823458 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.24755299513868,
            "unit": "iter/sec",
            "range": "stddev: 0.001632694810084747",
            "extra": "mean: 4.848542372881245 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.9595464112325,
            "unit": "iter/sec",
            "range": "stddev: 0.00021173956300169478",
            "extra": "mean: 2.8738972972971975 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.639364296508763,
            "unit": "iter/sec",
            "range": "stddev: 0.0027961186159182663",
            "extra": "mean: 73.31720000000057 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.44681693282498,
            "unit": "iter/sec",
            "range": "stddev: 0.00240283094346322",
            "extra": "mean: 69.21940000000102 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.49685405452175,
            "unit": "iter/sec",
            "range": "stddev: 0.0003418573807139594",
            "extra": "mean: 5.509737373737615 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.72031183805694,
            "unit": "iter/sec",
            "range": "stddev: 0.0002975673250020221",
            "extra": "mean: 3.895289752650406 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 398.6211773024699,
            "unit": "iter/sec",
            "range": "stddev: 0.00025756842001299147",
            "extra": "mean: 2.5086474501107845 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 401.0044769004816,
            "unit": "iter/sec",
            "range": "stddev: 0.00031705934205618943",
            "extra": "mean: 2.4937377450979747 msec\nrounds: 408"
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
        "date": 1673335344170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.54411013422121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522649384694516",
            "extra": "mean: 9.751900900900967 msec\nrounds: 111"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.14591323106438,
            "unit": "iter/sec",
            "range": "stddev: 0.00030701203856799077",
            "extra": "mean: 7.683683453237401 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.23128427612542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006486020016712975",
            "extra": "mean: 5.7394973821990485 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.0609416509324,
            "unit": "iter/sec",
            "range": "stddev: 0.00013844734257713697",
            "extra": "mean: 3.675647058823494 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.36239580255855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002316355100424144",
            "extra": "mean: 10.486313725490213 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.813326191912,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480970118820042",
            "extra": "mean: 8.209282442748016 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.29273334623184,
            "unit": "iter/sec",
            "range": "stddev: 0.0001793956924053967",
            "extra": "mean: 5.97754594594604 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.00968273350077,
            "unit": "iter/sec",
            "range": "stddev: 0.00011282524314238259",
            "extra": "mean: 3.787739864864842 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.05720722588496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008994400404499254",
            "extra": "mean: 90.43874999999969 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.71646162858818,
            "unit": "iter/sec",
            "range": "stddev: 0.0026034480661856784",
            "extra": "mean: 85.3499999999999 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 135.44540374487383,
            "unit": "iter/sec",
            "range": "stddev: 0.00020225347006159764",
            "extra": "mean: 7.3830486111113 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 200.7628990162504,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235858572605298",
            "extra": "mean: 4.981000000000283 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 299.91135363529776,
            "unit": "iter/sec",
            "range": "stddev: 0.00019759876260986661",
            "extra": "mean: 3.3343185840707896 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 290.65239279147306,
            "unit": "iter/sec",
            "range": "stddev: 0.00019232968026943923",
            "extra": "mean: 3.440535928143707 msec\nrounds: 334"
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
        "date": 1673539754991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.72432374038887,
            "unit": "iter/sec",
            "range": "stddev: 0.001046212601743199",
            "extra": "mean: 8.082485074626902 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.77035600888962,
            "unit": "iter/sec",
            "range": "stddev: 0.0003497686605984424",
            "extra": "mean: 6.461185628742513 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.353583842988,
            "unit": "iter/sec",
            "range": "stddev: 0.00024245607001875669",
            "extra": "mean: 4.687055084745724 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.5713711443625,
            "unit": "iter/sec",
            "range": "stddev: 0.00010921520553655384",
            "extra": "mean: 2.9711380281690065 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.15279746401723,
            "unit": "iter/sec",
            "range": "stddev: 0.00037870805406969393",
            "extra": "mean: 8.684113821138201 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.27225112817302,
            "unit": "iter/sec",
            "range": "stddev: 0.0003822685878164188",
            "extra": "mean: 6.69916874999994 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.86721730552927,
            "unit": "iter/sec",
            "range": "stddev: 0.00023941953519146636",
            "extra": "mean: 4.905153526971097 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.3418470812023,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551827372305462",
            "extra": "mean: 3.5293057142858686 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.641013135066082,
            "unit": "iter/sec",
            "range": "stddev: 0.004426765358349059",
            "extra": "mean: 79.10758333333322 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.640039361256406,
            "unit": "iter/sec",
            "range": "stddev: 0.0035673894077901387",
            "extra": "mean: 73.31357142857163 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.0002982679265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007343157762885651",
            "extra": "mean: 6.024085561496931 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.28507230095144,
            "unit": "iter/sec",
            "range": "stddev: 0.0004314233654773651",
            "extra": "mean: 4.19665399239534 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 387.59158450913884,
            "unit": "iter/sec",
            "range": "stddev: 0.00020269118733110678",
            "extra": "mean: 2.5800353773584614 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 373.5118625476271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001410984960275602",
            "extra": "mean: 2.6772911392405603 msec\nrounds: 395"
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
        "date": 1673623145260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.10479162516522,
            "unit": "iter/sec",
            "range": "stddev: 0.000614433699282109",
            "extra": "mean: 8.257311594202877 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.39375099922435,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861516514334757",
            "extra": "mean: 6.973804597701117 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.9545033007932,
            "unit": "iter/sec",
            "range": "stddev: 0.0003005148926705541",
            "extra": "mean: 4.695838709677455 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.77766880338464,
            "unit": "iter/sec",
            "range": "stddev: 0.00048522545153796386",
            "extra": "mean: 3.1869699453551847 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.35207913537177,
            "unit": "iter/sec",
            "range": "stddev: 0.00043703412231827643",
            "extra": "mean: 8.52136585365861 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.92784276048494,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234999681924103",
            "extra": "mean: 6.852701863353969 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.09665179716066,
            "unit": "iter/sec",
            "range": "stddev: 0.000551941501640225",
            "extra": "mean: 4.875749999999971 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.4143742692583,
            "unit": "iter/sec",
            "range": "stddev: 0.00016184214598061013",
            "extra": "mean: 2.9725245901639834 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.631445984778987,
            "unit": "iter/sec",
            "range": "stddev: 0.0062183649440131035",
            "extra": "mean: 79.16750000000076 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.683996383775911,
            "unit": "iter/sec",
            "range": "stddev: 0.002602510311950802",
            "extra": "mean: 73.07806666666656 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.58164509111538,
            "unit": "iter/sec",
            "range": "stddev: 0.0008222650618293734",
            "extra": "mean: 5.760977777777636 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 253.2895521730582,
            "unit": "iter/sec",
            "range": "stddev: 0.0002375886536152043",
            "extra": "mean: 3.948050724637696 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 393.1206710767848,
            "unit": "iter/sec",
            "range": "stddev: 0.0002772100033626131",
            "extra": "mean: 2.543748201438837 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 379.6976388896713,
            "unit": "iter/sec",
            "range": "stddev: 0.00018196489338044586",
            "extra": "mean: 2.6336745283016363 msec\nrounds: 424"
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
        "date": 1673680434482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.35111770023603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003699657915191455",
            "extra": "mean: 8.240550387596924 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.59115900093357,
            "unit": "iter/sec",
            "range": "stddev: 0.0004109585440434306",
            "extra": "mean: 6.553459627329273 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.88524108768377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006935502832172222",
            "extra": "mean: 4.953309090909103 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.8371161597861,
            "unit": "iter/sec",
            "range": "stddev: 0.00022922628905092262",
            "extra": "mean: 3.2068023598820017 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.91974880216955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005151320513592378",
            "extra": "mean: 8.778109243697308 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.72909949935055,
            "unit": "iter/sec",
            "range": "stddev: 0.00018690351945283094",
            "extra": "mean: 6.909460526315837 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.73622686971026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530653053680369",
            "extra": "mean: 5.031795238095122 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.85092485876106,
            "unit": "iter/sec",
            "range": "stddev: 0.00028182768666821877",
            "extra": "mean: 3.4861313432835455 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.179357881408162,
            "unit": "iter/sec",
            "range": "stddev: 0.002804772544367955",
            "extra": "mean: 75.8762307692303 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.156383457219244,
            "unit": "iter/sec",
            "range": "stddev: 0.0034792457129053595",
            "extra": "mean: 82.2613076923084 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.1866678319086,
            "unit": "iter/sec",
            "range": "stddev: 0.0010880547790621607",
            "extra": "mean: 6.703011834319663 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.8636738386383,
            "unit": "iter/sec",
            "range": "stddev: 0.00027927885390599945",
            "extra": "mean: 4.369413385826603 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 328.75826071055667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751752633308282",
            "extra": "mean: 3.041748663101773 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 336.6951837284643,
            "unit": "iter/sec",
            "range": "stddev: 0.00017959666031115481",
            "extra": "mean: 2.97004545454524 msec\nrounds: 374"
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
        "date": 1673695176413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.45135963521702,
            "unit": "iter/sec",
            "range": "stddev: 0.00039503674238071563",
            "extra": "mean: 7.908179104477556 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.30750205162974,
            "unit": "iter/sec",
            "range": "stddev: 0.00043050410129756415",
            "extra": "mean: 6.356975903614508 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.13735025765675,
            "unit": "iter/sec",
            "range": "stddev: 0.00047312361417039574",
            "extra": "mean: 4.781546666666677 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.6978533482862,
            "unit": "iter/sec",
            "range": "stddev: 0.00030084906108466234",
            "extra": "mean: 3.0515915492957864 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.50230136772726,
            "unit": "iter/sec",
            "range": "stddev: 0.00027815599654283126",
            "extra": "mean: 8.368039682540036 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.2753061797151,
            "unit": "iter/sec",
            "range": "stddev: 0.00019740496127847453",
            "extra": "mean: 6.6990316455695815 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.4391048629928,
            "unit": "iter/sec",
            "range": "stddev: 0.00010649950068947402",
            "extra": "mean: 4.7746575342468285 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.17845143209706,
            "unit": "iter/sec",
            "range": "stddev: 0.000226475504538591",
            "extra": "mean: 2.9746106442577407 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.061456016479822,
            "unit": "iter/sec",
            "range": "stddev: 0.0017313583310011834",
            "extra": "mean: 76.56114285714288 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.521266054088997,
            "unit": "iter/sec",
            "range": "stddev: 0.0013650350637520662",
            "extra": "mean: 73.95757142857106 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.04526257734932,
            "unit": "iter/sec",
            "range": "stddev: 0.0006287096815397636",
            "extra": "mean: 5.915575418994273 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.36760662530378,
            "unit": "iter/sec",
            "range": "stddev: 0.00011585577103501941",
            "extra": "mean: 3.962473684210684 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 373.32074796888406,
            "unit": "iter/sec",
            "range": "stddev: 0.00013201365681660607",
            "extra": "mean: 2.678661728394879 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 368.9144183433802,
            "unit": "iter/sec",
            "range": "stddev: 0.00014283496881564692",
            "extra": "mean: 2.7106557788945365 msec\nrounds: 398"
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
        "date": 1673708951827,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.32572638308993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002709167238436345",
            "extra": "mean: 7.979207692307691 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.83922530328394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434958295797294",
            "extra": "mean: 6.673819875776437 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.64114195622082,
            "unit": "iter/sec",
            "range": "stddev: 0.00013986900582551792",
            "extra": "mean: 4.792918552036252 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.54464144424696,
            "unit": "iter/sec",
            "range": "stddev: 0.0001740006346378557",
            "extra": "mean: 2.998099431818194 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.69569061534986,
            "unit": "iter/sec",
            "range": "stddev: 0.00034626151790874714",
            "extra": "mean: 8.49648780487788 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.88435435165985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005435039182240354",
            "extra": "mean: 6.950025974026021 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.52017869597537,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590894332902774",
            "extra": "mean: 4.889493087557518 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.8732350779419,
            "unit": "iter/sec",
            "range": "stddev: 0.00013050995148127496",
            "extra": "mean: 3.0592899408284473 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.623883124483164,
            "unit": "iter/sec",
            "range": "stddev: 0.00661130134361236",
            "extra": "mean: 79.21492857142886 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.17064365853305,
            "unit": "iter/sec",
            "range": "stddev: 0.0024069601319778888",
            "extra": "mean: 82.16492307692228 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.6683560247449,
            "unit": "iter/sec",
            "range": "stddev: 0.00024237265142423108",
            "extra": "mean: 5.825185393258245 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.14965141422542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003477341868249211",
            "extra": "mean: 4.062569230769215 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.66093838673777,
            "unit": "iter/sec",
            "range": "stddev: 0.0001430846607427525",
            "extra": "mean: 2.697883419689146 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 364.9672509565469,
            "unit": "iter/sec",
            "range": "stddev: 0.0001671015712189494",
            "extra": "mean: 2.7399718670074873 msec\nrounds: 391"
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
        "date": 1673712446658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.81436502849763,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469555833470614",
            "extra": "mean: 7.823846715328429 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.73671871477717,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429009849234396",
            "extra": "mean: 6.299739644970421 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.8264862470073,
            "unit": "iter/sec",
            "range": "stddev: 0.0001228298917509755",
            "extra": "mean: 4.61198268398265 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.732088959275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011147066536554935",
            "extra": "mean: 2.94349586776854 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.44316197986838,
            "unit": "iter/sec",
            "range": "stddev: 0.00021120435708164053",
            "extra": "mean: 8.167054687499952 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.68950876990368,
            "unit": "iter/sec",
            "range": "stddev: 0.000119128689466907",
            "extra": "mean: 6.506625000000166 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.81646991389658,
            "unit": "iter/sec",
            "range": "stddev: 0.00019568062303205775",
            "extra": "mean: 4.698884444444502 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.0228046371058,
            "unit": "iter/sec",
            "range": "stddev: 0.00009376553975878821",
            "extra": "mean: 2.958380281690104 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.079747690921495,
            "unit": "iter/sec",
            "range": "stddev: 0.0017749355320285218",
            "extra": "mean: 71.0239999999994 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.559148969212085,
            "unit": "iter/sec",
            "range": "stddev: 0.0015055710196599519",
            "extra": "mean: 68.68533333333413 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.26891132187896,
            "unit": "iter/sec",
            "range": "stddev: 0.000684092353761957",
            "extra": "mean: 5.838771276595683 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.8831702756024,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424305172119055",
            "extra": "mean: 3.8627462686563128 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 377.52294978666254,
            "unit": "iter/sec",
            "range": "stddev: 0.00024252751444530664",
            "extra": "mean: 2.6488455882353588 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 363.694224081117,
            "unit": "iter/sec",
            "range": "stddev: 0.00033511988816313054",
            "extra": "mean: 2.7495624999999 msec\nrounds: 400"
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
        "date": 1673774329407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.01364455709562,
            "unit": "iter/sec",
            "range": "stddev: 0.00031071026224520636",
            "extra": "mean: 8.195804687499974 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.65614653577944,
            "unit": "iter/sec",
            "range": "stddev: 0.00010319545709215539",
            "extra": "mean: 6.508037735849024 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.9164733178637,
            "unit": "iter/sec",
            "range": "stddev: 0.00009780433060329934",
            "extra": "mean: 4.856338028169055 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.4772839530071,
            "unit": "iter/sec",
            "range": "stddev: 0.000050269801284434186",
            "extra": "mean: 3.091407185628757 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.49944658600658,
            "unit": "iter/sec",
            "range": "stddev: 0.00047740072369085426",
            "extra": "mean: 8.733666666666787 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.35122675201526,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642570949572242",
            "extra": "mean: 6.975873333333311 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.16885305551662,
            "unit": "iter/sec",
            "range": "stddev: 0.00011165929525233656",
            "extra": "mean: 5.020865384615427 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.88844598826495,
            "unit": "iter/sec",
            "range": "stddev: 0.00015962848792684244",
            "extra": "mean: 3.1358928571429017 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.971670797526171,
            "unit": "iter/sec",
            "range": "stddev: 0.0010944411615264602",
            "extra": "mean: 77.09107142857111 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.573533161595826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005748507737571051",
            "extra": "mean: 73.6727857142857 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.59661182301446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004985378316671326",
            "extra": "mean: 6.150189655172487 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.74020879193026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545674173686386",
            "extra": "mean: 4.171181818181767 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.1832993143599,
            "unit": "iter/sec",
            "range": "stddev: 0.00007855446567848505",
            "extra": "mean: 2.831390957447068 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.0494570712083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006835382723807139",
            "extra": "mean: 2.8731548913044493 msec\nrounds: 368"
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
        "date": 1673785330347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.30003052615544,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893332022879546",
            "extra": "mean: 8.673024590163948 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.17101998532505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003974093469593971",
            "extra": "mean: 7.1854039735100415 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.24903602719377,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349695509977766",
            "extra": "mean: 5.3121121951219115 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.51437325622845,
            "unit": "iter/sec",
            "range": "stddev: 0.00013573952275075778",
            "extra": "mean: 3.3839301587301844 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.51205356936407,
            "unit": "iter/sec",
            "range": "stddev: 0.000446408350212274",
            "extra": "mean: 9.568274336283189 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.44526606108818,
            "unit": "iter/sec",
            "range": "stddev: 0.0003804794396357655",
            "extra": "mean: 7.550288732394305 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.50501964609796,
            "unit": "iter/sec",
            "range": "stddev: 0.0003107978742098474",
            "extra": "mean: 5.449442211055418 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.1701410318954,
            "unit": "iter/sec",
            "range": "stddev: 0.00026039686567118375",
            "extra": "mean: 3.4462539682540267 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.649556681690493,
            "unit": "iter/sec",
            "range": "stddev: 0.0013647000186938819",
            "extra": "mean: 79.05415384615357 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.989788389457646,
            "unit": "iter/sec",
            "range": "stddev: 0.0050150673206614885",
            "extra": "mean: 83.40430769230906 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.9324195532438,
            "unit": "iter/sec",
            "range": "stddev: 0.00026573669263726035",
            "extra": "mean: 6.175415662650539 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.63401461900355,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125159176881429",
            "extra": "mean: 4.5323927125508074 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 327.6171069656055,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908425307226901",
            "extra": "mean: 3.0523436619717907 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 321.96976567854097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002047601672109713",
            "extra": "mean: 3.1058816901410973 msec\nrounds: 355"
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
        "date": 1673829019839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.74130852343154,
            "unit": "iter/sec",
            "range": "stddev: 0.00026800974241738716",
            "extra": "mean: 7.259986206896585 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.0777415580639,
            "unit": "iter/sec",
            "range": "stddev: 0.0005228771182489413",
            "extra": "mean: 5.949627777777709 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.87687492290615,
            "unit": "iter/sec",
            "range": "stddev: 0.00036911701238442733",
            "extra": "mean: 4.388334710743746 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 357.40635080765605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001834325165478563",
            "extra": "mean: 2.7979357326478116 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.59949078871381,
            "unit": "iter/sec",
            "range": "stddev: 0.000540994849613004",
            "extra": "mean: 7.898925925925989 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.92780401990643,
            "unit": "iter/sec",
            "range": "stddev: 0.00030187940887391987",
            "extra": "mean: 6.252821428571161 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.91329674776833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008472663067436839",
            "extra": "mean: 4.9526208333332695 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 357.8777847365102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000551825482952726",
            "extra": "mean: 2.7942500000000177 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.944356440061602,
            "unit": "iter/sec",
            "range": "stddev: 0.001931667517974691",
            "extra": "mean: 71.71359999999987 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.279281809241878,
            "unit": "iter/sec",
            "range": "stddev: 0.0039586032505461895",
            "extra": "mean: 70.03153333333454 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.89936997347834,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448703408350352",
            "extra": "mean: 5.558663157894466 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 267.7488262865217,
            "unit": "iter/sec",
            "range": "stddev: 0.00013446482562278205",
            "extra": "mean: 3.734843636363456 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 406.71082475759107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000822595798502479",
            "extra": "mean: 2.4587494089836994 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 378.396537897474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003674254099514342",
            "extra": "mean: 2.642730310262375 msec\nrounds: 419"
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
        "date": 1673837315529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.60765044328217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006288491700275872",
            "extra": "mean: 7.961298507462709 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.57721943992382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680472928240633",
            "extra": "mean: 6.346094972067007 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.20778570905517,
            "unit": "iter/sec",
            "range": "stddev: 0.00019142603029552644",
            "extra": "mean: 4.71236244541488 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.9146652271291,
            "unit": "iter/sec",
            "range": "stddev: 0.0002617339687924063",
            "extra": "mean: 3.0403022598869494 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.78852885737176,
            "unit": "iter/sec",
            "range": "stddev: 0.0004678178372267266",
            "extra": "mean: 8.636434108527274 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.19995225424748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740277321121097",
            "extra": "mean: 6.527417177914133 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.62481437248218,
            "unit": "iter/sec",
            "range": "stddev: 0.00021649355823732713",
            "extra": "mean: 4.6162763157895625 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.82721794863676,
            "unit": "iter/sec",
            "range": "stddev: 0.000298870905263859",
            "extra": "mean: 3.116942528735502 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.489035341272485,
            "unit": "iter/sec",
            "range": "stddev: 0.0038454516675511417",
            "extra": "mean: 74.1342857142863 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.773156118724591,
            "unit": "iter/sec",
            "range": "stddev: 0.0035533467725101867",
            "extra": "mean: 72.60500000000008 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.3396146066225,
            "unit": "iter/sec",
            "range": "stddev: 0.00032018578540067544",
            "extra": "mean: 5.870624999999981 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.45019586324983,
            "unit": "iter/sec",
            "range": "stddev: 0.00017221683680557684",
            "extra": "mean: 3.9611773584905103 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 376.3216895158682,
            "unit": "iter/sec",
            "range": "stddev: 0.00011920755155646944",
            "extra": "mean: 2.6573009950249853 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 384.87397065507577,
            "unit": "iter/sec",
            "range": "stddev: 0.0001998564776087159",
            "extra": "mean: 2.5982531328318914 msec\nrounds: 399"
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
        "date": 1673869713974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.02621525969118,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566622970547809",
            "extra": "mean: 7.750362962962985 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.65363077205498,
            "unit": "iter/sec",
            "range": "stddev: 0.00024306854634170577",
            "extra": "mean: 6.224571428571448 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.92200759655148,
            "unit": "iter/sec",
            "range": "stddev: 0.00028635533346664304",
            "extra": "mean: 4.526484304932641 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.9201886184505,
            "unit": "iter/sec",
            "range": "stddev: 0.0010778682473907737",
            "extra": "mean: 3.077678873239505 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.91158737679315,
            "unit": "iter/sec",
            "range": "stddev: 0.00034775077586697453",
            "extra": "mean: 8.409609374999905 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.36419374616653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003045328722110382",
            "extra": "mean: 6.606582278481077 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.28833739371643,
            "unit": "iter/sec",
            "range": "stddev: 0.00014191531400529748",
            "extra": "mean: 4.688488888888776 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.51980404988495,
            "unit": "iter/sec",
            "range": "stddev: 0.00013938889594493313",
            "extra": "mean: 2.971593314763021 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.57572382273248,
            "unit": "iter/sec",
            "range": "stddev: 0.007873419826113958",
            "extra": "mean: 79.51828571428646 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.260130545870123,
            "unit": "iter/sec",
            "range": "stddev: 0.005412752220453",
            "extra": "mean: 81.56519999999954 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.2369724522774,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093612891002023",
            "extra": "mean: 5.90887431694033 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.25247247621593,
            "unit": "iter/sec",
            "range": "stddev: 0.0010283007342213202",
            "extra": "mean: 4.287199999999858 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.99271395987455,
            "unit": "iter/sec",
            "range": "stddev: 0.00027004165866269844",
            "extra": "mean: 2.8986119402982755 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 343.4490897254281,
            "unit": "iter/sec",
            "range": "stddev: 0.00028074816963969296",
            "extra": "mean: 2.911639686683853 msec\nrounds: 383"
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
        "date": 1673978120918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.36721115008541,
            "unit": "iter/sec",
            "range": "stddev: 0.00038538460493335163",
            "extra": "mean: 8.04070454545457 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.0301657879569,
            "unit": "iter/sec",
            "range": "stddev: 0.00031555044319773166",
            "extra": "mean: 6.57764197530866 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.96410489768272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403050395347568",
            "extra": "mean: 5.051420814479714 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.8254793086177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005432594979100801",
            "extra": "mean: 3.116959420289843 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.8565511567777,
            "unit": "iter/sec",
            "range": "stddev: 0.0007597361619008886",
            "extra": "mean: 9.1864016393444 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.841677276118,
            "unit": "iter/sec",
            "range": "stddev: 0.000393071885246445",
            "extra": "mean: 7.1001710526317785 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8488560286633,
            "unit": "iter/sec",
            "range": "stddev: 0.00018247070940655033",
            "extra": "mean: 4.905595348837225 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.1860414725571,
            "unit": "iter/sec",
            "range": "stddev: 0.00030551572901860055",
            "extra": "mean: 3.1828275862069004 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.322003286728634,
            "unit": "iter/sec",
            "range": "stddev: 0.0020617547484749724",
            "extra": "mean: 75.0637857142851 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.496759813590629,
            "unit": "iter/sec",
            "range": "stddev: 0.002282679459863589",
            "extra": "mean: 74.09185714285626 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.1134624661963,
            "unit": "iter/sec",
            "range": "stddev: 0.0012475603341201064",
            "extra": "mean: 6.056441340782435 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.47815910412524,
            "unit": "iter/sec",
            "range": "stddev: 0.00019402216105499916",
            "extra": "mean: 4.073682170542215 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 351.9765712752623,
            "unit": "iter/sec",
            "range": "stddev: 0.00045616917559006384",
            "extra": "mean: 2.841098191214417 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 353.2767313473689,
            "unit": "iter/sec",
            "range": "stddev: 0.00021584185463034095",
            "extra": "mean: 2.8306421319798805 msec\nrounds: 394"
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
        "date": 1673981630692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.80837765120093,
            "unit": "iter/sec",
            "range": "stddev: 0.0008122879293205789",
            "extra": "mean: 7.824213235294156 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.98768824515392,
            "unit": "iter/sec",
            "range": "stddev: 0.0002443696286320061",
            "extra": "mean: 6.329607142857056 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.61289402444942,
            "unit": "iter/sec",
            "range": "stddev: 0.000502133021682333",
            "extra": "mean: 4.816656521739135 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.15967526664747,
            "unit": "iter/sec",
            "range": "stddev: 0.0004686307804179703",
            "extra": "mean: 3.1932591549295912 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.68991615565423,
            "unit": "iter/sec",
            "range": "stddev: 0.0018292174197871468",
            "extra": "mean: 9.64413934426226 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.8010365774801,
            "unit": "iter/sec",
            "range": "stddev: 0.0009519077169269939",
            "extra": "mean: 7.886370860927175 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.96444765954382,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220624491361751",
            "extra": "mean: 5.129140271493229 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.5177710739274,
            "unit": "iter/sec",
            "range": "stddev: 0.00010133871499239869",
            "extra": "mean: 3.129716374268986 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.57087024515124,
            "unit": "iter/sec",
            "range": "stddev: 0.005672868519857269",
            "extra": "mean: 86.4239230769223 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.79409278458872,
            "unit": "iter/sec",
            "range": "stddev: 0.0021648799030192538",
            "extra": "mean: 78.1610714285707 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.93273493293506,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836007394060754",
            "extra": "mean: 6.063077777777832 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.84391354438412,
            "unit": "iter/sec",
            "range": "stddev: 0.000473913805784763",
            "extra": "mean: 4.590442687746965 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.4055609724396,
            "unit": "iter/sec",
            "range": "stddev: 0.00015017240100332631",
            "extra": "mean: 2.8296102564101564 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 342.65728057950656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005092264460994132",
            "extra": "mean: 2.918367875647605 msec\nrounds: 386"
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
        "date": 1674007148951,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.52422758104451,
            "unit": "iter/sec",
            "range": "stddev: 0.000540870521004324",
            "extra": "mean: 7.966589552238843 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.906981681483,
            "unit": "iter/sec",
            "range": "stddev: 0.0005098094706707125",
            "extra": "mean: 6.582975903614423 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.50880188027645,
            "unit": "iter/sec",
            "range": "stddev: 0.0010387842383905118",
            "extra": "mean: 5.0375599999999725 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.6691338882131,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716303669306261",
            "extra": "mean: 3.1982690058479664 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.41580105724435,
            "unit": "iter/sec",
            "range": "stddev: 0.0009099854109932527",
            "extra": "mean: 9.486243902438934 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.96379026959056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006149578947879847",
            "extra": "mean: 7.196119205297972 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.1420170800741,
            "unit": "iter/sec",
            "range": "stddev: 0.0005968458750511322",
            "extra": "mean: 5.204483720930522 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.7359262520149,
            "unit": "iter/sec",
            "range": "stddev: 0.0019301941653763468",
            "extra": "mean: 3.218166666666583 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.04648462471796,
            "unit": "iter/sec",
            "range": "stddev: 0.004766882611658444",
            "extra": "mean: 76.64899999999946 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.510318505758761,
            "unit": "iter/sec",
            "range": "stddev: 0.0016790620893829592",
            "extra": "mean: 74.01750000000007 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.72663307487335,
            "unit": "iter/sec",
            "range": "stddev: 0.0004430492841973319",
            "extra": "mean: 5.857316939890937 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.0012243897687,
            "unit": "iter/sec",
            "range": "stddev: 0.0010358177005975562",
            "extra": "mean: 4.424754789272155 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 348.94831858439545,
            "unit": "iter/sec",
            "range": "stddev: 0.0008680531817140369",
            "extra": "mean: 2.8657538860103244 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 336.9619610180594,
            "unit": "iter/sec",
            "range": "stddev: 0.001027866578965358",
            "extra": "mean: 2.967694029850465 msec\nrounds: 402"
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
        "date": 1674055651526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.14707867376273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002684757639357633",
            "extra": "mean: 7.80353333333336 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.08657232799598,
            "unit": "iter/sec",
            "range": "stddev: 0.0007078271306576483",
            "extra": "mean: 6.845256097560996 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.03413097291946,
            "unit": "iter/sec",
            "range": "stddev: 0.0007735903634028735",
            "extra": "mean: 5.127307692307713 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.54093324663205,
            "unit": "iter/sec",
            "range": "stddev: 0.00034224526914307645",
            "extra": "mean: 3.241061046511616 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.00968625406118,
            "unit": "iter/sec",
            "range": "stddev: 0.0009437985979094404",
            "extra": "mean: 9.900040650406378 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.40306595021293,
            "unit": "iter/sec",
            "range": "stddev: 0.0028605696236606226",
            "extra": "mean: 8.665281045751584 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.15759578361371,
            "unit": "iter/sec",
            "range": "stddev: 0.0003981724935955235",
            "extra": "mean: 5.231285714285602 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.4861097189243,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279571852140393",
            "extra": "mean: 3.5399970674487578 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.075589474544742,
            "unit": "iter/sec",
            "range": "stddev: 0.004959750201785081",
            "extra": "mean: 82.81169230769173 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.836605598043596,
            "unit": "iter/sec",
            "range": "stddev: 0.004133281024498779",
            "extra": "mean: 77.90221428571493 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.2937388482302,
            "unit": "iter/sec",
            "range": "stddev: 0.00046677875453714104",
            "extra": "mean: 6.086659217876654 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.32307051206877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003036300182209239",
            "extra": "mean: 4.213665354330338 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 358.04969511113376,
            "unit": "iter/sec",
            "range": "stddev: 0.00021352621775583386",
            "extra": "mean: 2.792908396946445 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 348.667883585935,
            "unit": "iter/sec",
            "range": "stddev: 0.0003115415502892563",
            "extra": "mean: 2.8680588235295077 msec\nrounds: 391"
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
        "date": 1674141898693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.82691921109632,
            "unit": "iter/sec",
            "range": "stddev: 0.0006517209727800095",
            "extra": "mean: 8.41560150375941 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.88564111581573,
            "unit": "iter/sec",
            "range": "stddev: 0.0004287266275095201",
            "extra": "mean: 6.761981707317049 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.96435248559578,
            "unit": "iter/sec",
            "range": "stddev: 0.000330168848204707",
            "extra": "mean: 4.926973568281993 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.40788931894826,
            "unit": "iter/sec",
            "range": "stddev: 0.00012635427064176946",
            "extra": "mean: 3.035750000000009 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.57369452306003,
            "unit": "iter/sec",
            "range": "stddev: 0.0003957674815742994",
            "extra": "mean: 8.433573770491916 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.87923192658212,
            "unit": "iter/sec",
            "range": "stddev: 0.00017457679277531254",
            "extra": "mean: 6.672038461538467 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.60102574745736,
            "unit": "iter/sec",
            "range": "stddev: 0.0004579080910403993",
            "extra": "mean: 5.035220720720789 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.2367017524875,
            "unit": "iter/sec",
            "range": "stddev: 0.00021174895935860514",
            "extra": "mean: 3.093708092485523 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.667688526874398,
            "unit": "iter/sec",
            "range": "stddev: 0.005531974255785577",
            "extra": "mean: 78.94100000000066 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.143108739510097,
            "unit": "iter/sec",
            "range": "stddev: 0.009030147317564796",
            "extra": "mean: 76.08550000000035 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.2753121468499,
            "unit": "iter/sec",
            "range": "stddev: 0.00039413299989438203",
            "extra": "mean: 5.838553072626189 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.4660709891019,
            "unit": "iter/sec",
            "range": "stddev: 0.0022321349796979584",
            "extra": "mean: 4.3579427480914745 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 360.66373083346497,
            "unit": "iter/sec",
            "range": "stddev: 0.00012262053935452864",
            "extra": "mean: 2.772665822784787 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 368.4178368948552,
            "unit": "iter/sec",
            "range": "stddev: 0.00018266478215796836",
            "extra": "mean: 2.7143094059406128 msec\nrounds: 404"
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
        "date": 1674226583364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.78547058456273,
            "unit": "iter/sec",
            "range": "stddev: 0.0005990013364000023",
            "extra": "mean: 7.950043795620438 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.61180661828584,
            "unit": "iter/sec",
            "range": "stddev: 0.0007441127447190592",
            "extra": "mean: 6.915064705882406 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.46422850263554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006617566313162809",
            "extra": "mean: 5.421105263157905 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.2308497710441,
            "unit": "iter/sec",
            "range": "stddev: 0.00040650772608046134",
            "extra": "mean: 3.3307703081232303 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.4145273736896,
            "unit": "iter/sec",
            "range": "stddev: 0.0019229993847409868",
            "extra": "mean: 10.37188095238113 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.84487184952482,
            "unit": "iter/sec",
            "range": "stddev: 0.0007764460920706517",
            "extra": "mean: 7.415929032257995 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.32812803714975,
            "unit": "iter/sec",
            "range": "stddev: 0.0003732685417843152",
            "extra": "mean: 4.870253333333225 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.5614823738896,
            "unit": "iter/sec",
            "range": "stddev: 0.00028244387185963565",
            "extra": "mean: 3.0810803324099196 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.935860098078848,
            "unit": "iter/sec",
            "range": "stddev: 0.004461029906218646",
            "extra": "mean: 83.78114285714159 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.559906267213576,
            "unit": "iter/sec",
            "range": "stddev: 0.0026630219304768876",
            "extra": "mean: 79.61842857142999 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.98451863339892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005714289173813148",
            "extra": "mean: 6.494159340659211 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.86997448675243,
            "unit": "iter/sec",
            "range": "stddev: 0.000364923667819511",
            "extra": "mean: 4.100545801526389 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 344.05443338122785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494362935591024",
            "extra": "mean: 2.906516826923009 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 370.34015376451634,
            "unit": "iter/sec",
            "range": "stddev: 0.00025253875900132215",
            "extra": "mean: 2.7002202970295723 msec\nrounds: 404"
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
        "date": 1674489121811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.33309139681894,
            "unit": "iter/sec",
            "range": "stddev: 0.0007273231167969079",
            "extra": "mean: 7.978738805970128 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.89061699597738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005824866188309803",
            "extra": "mean: 6.373867469879602 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.5023960472399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033540511136289",
            "extra": "mean: 4.661952586206868 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.6223081251858,
            "unit": "iter/sec",
            "range": "stddev: 0.00019122240283528263",
            "extra": "mean: 2.979539726027401 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.05378307796592,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564857485305672",
            "extra": "mean: 8.691587301587052 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.61993747369735,
            "unit": "iter/sec",
            "range": "stddev: 0.000477388495744703",
            "extra": "mean: 6.82035483870939 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.2108272580676,
            "unit": "iter/sec",
            "range": "stddev: 0.0004766850898506186",
            "extra": "mean: 4.896899999999847 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.9233524688586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005498114787297883",
            "extra": "mean: 3.1063294797687453 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.119289009503053,
            "unit": "iter/sec",
            "range": "stddev: 0.0033395504443461317",
            "extra": "mean: 76.22364285714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.104534874695592,
            "unit": "iter/sec",
            "range": "stddev: 0.004232026319535158",
            "extra": "mean: 76.30946153846068 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.8600660110983,
            "unit": "iter/sec",
            "range": "stddev: 0.0007576364453831277",
            "extra": "mean: 6.334724324324654 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.3109217229571,
            "unit": "iter/sec",
            "range": "stddev: 0.0004114803321870072",
            "extra": "mean: 4.249696498054384 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 337.2127771799029,
            "unit": "iter/sec",
            "range": "stddev: 0.0005937308671966677",
            "extra": "mean: 2.965486682808879 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 304.0036753361899,
            "unit": "iter/sec",
            "range": "stddev: 0.0007576006047032139",
            "extra": "mean: 3.289433915212129 msec\nrounds: 401"
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
        "date": 1674561324858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.03685787974862,
            "unit": "iter/sec",
            "range": "stddev: 0.0005352188141239378",
            "extra": "mean: 7.997641791044745 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.78028091445114,
            "unit": "iter/sec",
            "range": "stddev: 0.00037645903996701266",
            "extra": "mean: 6.54534730538915 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.55421163674401,
            "unit": "iter/sec",
            "range": "stddev: 0.0003373563249507862",
            "extra": "mean: 4.818018348623895 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.4867528419119,
            "unit": "iter/sec",
            "range": "stddev: 0.0001943961356625218",
            "extra": "mean: 3.13002023121384 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.78064540651647,
            "unit": "iter/sec",
            "range": "stddev: 0.00040918460618108817",
            "extra": "mean: 8.418879999999888 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.26117660742082,
            "unit": "iter/sec",
            "range": "stddev: 0.00036040784791394097",
            "extra": "mean: 6.790656050955441 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.64981140631645,
            "unit": "iter/sec",
            "range": "stddev: 0.0004768221102249128",
            "extra": "mean: 4.95909216589863 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.3500587604014,
            "unit": "iter/sec",
            "range": "stddev: 0.00038705308876743583",
            "extra": "mean: 3.1313600000000923 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.782457687854825,
            "unit": "iter/sec",
            "range": "stddev: 0.0016598076480640782",
            "extra": "mean: 72.55600000000038 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.028252199168952,
            "unit": "iter/sec",
            "range": "stddev: 0.009067340407564807",
            "extra": "mean: 76.75626666666678 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.68101466609195,
            "unit": "iter/sec",
            "range": "stddev: 0.000770871715257835",
            "extra": "mean: 5.99948351648372 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.57495765495148,
            "unit": "iter/sec",
            "range": "stddev: 0.00029781896442861064",
            "extra": "mean: 4.139501915709032 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 341.3321135474988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005963669291162613",
            "extra": "mean: 2.929697969543211 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 358.61998660183775,
            "unit": "iter/sec",
            "range": "stddev: 0.00019270279342296237",
            "extra": "mean: 2.7884670050759395 msec\nrounds: 394"
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
        "date": 1674746844699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.64404194600765,
            "unit": "iter/sec",
            "range": "stddev: 0.001212328098554591",
            "extra": "mean: 9.037992307692289 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.05558909429254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121315116679757",
            "extra": "mean: 7.296309523809441 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.80393766223318,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941650041000572",
            "extra": "mean: 5.2685945945945365 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.6362339526795,
            "unit": "iter/sec",
            "range": "stddev: 0.0005228094278048166",
            "extra": "mean: 3.5009563953488723 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.25784128176416,
            "unit": "iter/sec",
            "range": "stddev: 0.0007767275536261895",
            "extra": "mean: 9.152661157024951 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.59059639939107,
            "unit": "iter/sec",
            "range": "stddev: 0.0006566801430587912",
            "extra": "mean: 7.542012987012949 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7216997827561,
            "unit": "iter/sec",
            "range": "stddev: 0.0005659307090082464",
            "extra": "mean: 5.243241860465077 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.6272558551079,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823648838781562",
            "extra": "mean: 3.3486561604584204 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.666257379778786,
            "unit": "iter/sec",
            "range": "stddev: 0.0013258205296814386",
            "extra": "mean: 73.17292307692415 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.258156781825381,
            "unit": "iter/sec",
            "range": "stddev: 0.0069851604201502",
            "extra": "mean: 81.5783333333324 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.44238563704184,
            "unit": "iter/sec",
            "range": "stddev: 0.00030291956545381937",
            "extra": "mean: 5.765603351954998 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.0075632934439,
            "unit": "iter/sec",
            "range": "stddev: 0.0004009284390403174",
            "extra": "mean: 4.328862595419535 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 341.1831434744511,
            "unit": "iter/sec",
            "range": "stddev: 0.00026816916157975426",
            "extra": "mean: 2.930977157360306 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 322.5513246724422,
            "unit": "iter/sec",
            "range": "stddev: 0.00047148744722719514",
            "extra": "mean: 3.100281795511215 msec\nrounds: 401"
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
        "date": 1675094755325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 91.32630623217811,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116695846238204",
            "extra": "mean: 10.949747572815529 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.17950726206874,
            "unit": "iter/sec",
            "range": "stddev: 0.0006666696106525593",
            "extra": "mean: 8.68209999999994 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.4910476973468,
            "unit": "iter/sec",
            "range": "stddev: 0.0002158901038626377",
            "extra": "mean: 6.116542857142804 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 254.54124725210733,
            "unit": "iter/sec",
            "range": "stddev: 0.0001407137908508848",
            "extra": "mean: 3.9286363636364285 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 88.09543072372841,
            "unit": "iter/sec",
            "range": "stddev: 0.0007146224405129828",
            "extra": "mean: 11.35132653061257 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.0219783448641,
            "unit": "iter/sec",
            "range": "stddev: 0.0003956562289548061",
            "extra": "mean: 8.926819672131307 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.4540003715796,
            "unit": "iter/sec",
            "range": "stddev: 0.0001715579296326356",
            "extra": "mean: 6.23231578947361 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.41352024705915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003098417508658664",
            "extra": "mean: 4.025545787545911 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.002387518091496,
            "unit": "iter/sec",
            "range": "stddev: 0.00145805433868069",
            "extra": "mean: 90.88936363636306 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.673383782860562,
            "unit": "iter/sec",
            "range": "stddev: 0.002671268724782155",
            "extra": "mean: 93.69100000000104 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 137.9300832407979,
            "unit": "iter/sec",
            "range": "stddev: 0.00038819709310306444",
            "extra": "mean: 7.250050000000385 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 195.69508097116915,
            "unit": "iter/sec",
            "range": "stddev: 0.00023137661650386",
            "extra": "mean: 5.109990476190484 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 279.5482002526599,
            "unit": "iter/sec",
            "range": "stddev: 0.0001872327519060034",
            "extra": "mean: 3.577200636942698 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 277.86799465917983,
            "unit": "iter/sec",
            "range": "stddev: 0.000274609780714309",
            "extra": "mean: 3.5988311688309205 msec\nrounds: 308"
          }
        ]
      }
    ]
  }
}