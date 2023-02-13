window.BENCHMARK_DATA = {
  "lastUpdate": 1676306927128,
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
        "date": 1647981769274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 145.45985486399897,
            "unit": "iter/sec",
            "range": "stddev: 0.0008388593503860302",
            "extra": "mean: 6.8747490566037825 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.77923232722372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005258670082916994",
            "extra": "mean: 5.4710810810810955 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.391455697851,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011620978181806",
            "extra": "mean: 3.631194720496928 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 612.6364221518646,
            "unit": "iter/sec",
            "range": "stddev: 0.00037767172678688897",
            "extra": "mean: 1.6322895013122694 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.10778219640298,
            "unit": "iter/sec",
            "range": "stddev: 0.0008859756307528069",
            "extra": "mean: 7.512708749999919 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.7886985805876,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638932521864386",
            "extra": "mean: 5.787415544041534 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.4559841157379,
            "unit": "iter/sec",
            "range": "stddev: 0.00044418595497579055",
            "extra": "mean: 3.8101626959247374 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 534.0088772546791,
            "unit": "iter/sec",
            "range": "stddev: 0.00039596537903800993",
            "extra": "mean: 1.8726280453256976 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.299428932934937,
            "unit": "iter/sec",
            "range": "stddev: 0.003267382601833632",
            "extra": "mean: 49.262469565217366 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.199368920791485,
            "unit": "iter/sec",
            "range": "stddev: 0.002393731102532272",
            "extra": "mean: 41.32339166666554 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.20541513710953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530374243792546",
            "extra": "mean: 5.045270833333415 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.34268333660896,
            "unit": "iter/sec",
            "range": "stddev: 0.000791834045499004",
            "extra": "mean: 3.161128904429048 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1023.0407498210396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003560535395411667",
            "extra": "mean: 977.478170028838 usec\nrounds: 1388"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 938.394158014672,
            "unit": "iter/sec",
            "range": "stddev: 0.00034838342089570714",
            "extra": "mean: 1.0656502829425807 msec\nrounds: 1237"
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
        "date": 1647984065072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 236.81430784317922,
            "unit": "iter/sec",
            "range": "stddev: 0.00007102347334841847",
            "extra": "mean: 4.222717829457373 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 313.7853884269689,
            "unit": "iter/sec",
            "range": "stddev: 0.00007282741151256326",
            "extra": "mean: 3.1868915407855014 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 477.63148102413595,
            "unit": "iter/sec",
            "range": "stddev: 0.00005063535093989303",
            "extra": "mean: 2.0936643410853133 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 959.5974020469439,
            "unit": "iter/sec",
            "range": "stddev: 0.000017444260801159685",
            "extra": "mean: 1.0421036966824548 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.85880830232932,
            "unit": "iter/sec",
            "range": "stddev: 0.000022767040760054654",
            "extra": "mean: 4.5073711864407455 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.324190506375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007451366957242551",
            "extra": "mean: 3.420859554140088 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 458.87989261105554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005496862066379149",
            "extra": "mean: 2.17921947791161 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.3910941473356,
            "unit": "iter/sec",
            "range": "stddev: 0.000034799842506905",
            "extra": "mean: 1.1032765066394707 msec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.510051290348883,
            "unit": "iter/sec",
            "range": "stddev: 0.00047980724052939215",
            "extra": "mean: 32.77608387096765 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.46621794533817,
            "unit": "iter/sec",
            "range": "stddev: 0.0004351233229825732",
            "extra": "mean: 30.80124705882442 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.97574193306366,
            "unit": "iter/sec",
            "range": "stddev: 0.00006108968364237428",
            "extra": "mean: 2.89875454545448 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 581.0202808356916,
            "unit": "iter/sec",
            "range": "stddev: 0.00004843971558539268",
            "extra": "mean: 1.7211103174603177 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1718.7146272891587,
            "unit": "iter/sec",
            "range": "stddev: 0.000020955405381013383",
            "extra": "mean: 581.8301561657441 usec\nrounds: 1857"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1533.8134855131432,
            "unit": "iter/sec",
            "range": "stddev: 0.000022068891541885184",
            "extra": "mean: 651.9697534576351 usec\nrounds: 1663"
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
        "date": 1647985693687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.83495913692735,
            "unit": "iter/sec",
            "range": "stddev: 0.0008475724263109869",
            "extra": "mean: 7.643217123287625 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.80144354210086,
            "unit": "iter/sec",
            "range": "stddev: 0.0009052678631825186",
            "extra": "mean: 5.720776555023989 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.6242608794057,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991271788592383",
            "extra": "mean: 3.822275490196013 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.4957736625454,
            "unit": "iter/sec",
            "range": "stddev: 0.00031474375420417506",
            "extra": "mean: 1.7969588401697223 msec\nrounds: 707"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.43978332959936,
            "unit": "iter/sec",
            "range": "stddev: 0.0007498402140577229",
            "extra": "mean: 8.036015277777642 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.13270993441762,
            "unit": "iter/sec",
            "range": "stddev: 0.0010959519407030673",
            "extra": "mean: 6.055735416666689 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.40072407265993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005563679229124851",
            "extra": "mean: 3.993598675496743 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 534.521788273615,
            "unit": "iter/sec",
            "range": "stddev: 0.00029371113094718576",
            "extra": "mean: 1.8708311278194567 msec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.321013374006558,
            "unit": "iter/sec",
            "range": "stddev: 0.0016007608247230526",
            "extra": "mean: 44.80083333333459 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.788409887654257,
            "unit": "iter/sec",
            "range": "stddev: 0.0020429527929536314",
            "extra": "mean: 43.881955999999605 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.25322287822468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006427488018626734",
            "extra": "mean: 5.147919736842098 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.3871478041831,
            "unit": "iter/sec",
            "range": "stddev: 0.0005952463806608648",
            "extra": "mean: 3.017618536585193 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1014.0326331964527,
            "unit": "iter/sec",
            "range": "stddev: 0.00021932834345435708",
            "extra": "mean: 986.161556603737 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 903.6587063087153,
            "unit": "iter/sec",
            "range": "stddev: 0.00027934662631183744",
            "extra": "mean: 1.1066124777182988 msec\nrounds: 1122"
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
        "date": 1648220457248,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.84763357607684,
            "unit": "iter/sec",
            "range": "stddev: 0.000020332843306134824",
            "extra": "mean: 5.752163428571453 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.6895858043833,
            "unit": "iter/sec",
            "range": "stddev: 0.000013774726866507795",
            "extra": "mean: 4.372739565217373 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.0037314712791,
            "unit": "iter/sec",
            "range": "stddev: 0.000014049241218811705",
            "extra": "mean: 2.8901422413792885 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 703.827306730095,
            "unit": "iter/sec",
            "range": "stddev: 0.000009279142204756541",
            "extra": "mean: 1.4208030726257141 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.94629311065023,
            "unit": "iter/sec",
            "range": "stddev: 0.000032038413118841274",
            "extra": "mean: 6.213252760736167 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.75461173730017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000170020492244358",
            "extra": "mean: 4.790313333333275 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 329.49094930781706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001588095655683478",
            "extra": "mean: 3.034984730538926 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 644.3279837284707,
            "unit": "iter/sec",
            "range": "stddev: 0.000009688031170480999",
            "extra": "mean: 1.5520046082949808 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.259452500699414,
            "unit": "iter/sec",
            "range": "stddev: 0.00017645906455150285",
            "extra": "mean: 44.92473478260882 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.549902488685042,
            "unit": "iter/sec",
            "range": "stddev: 0.00004418702326878296",
            "extra": "mean: 42.463020833333275 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.7033578813587,
            "unit": "iter/sec",
            "range": "stddev: 0.000014201116205345519",
            "extra": "mean: 3.9729307086612393 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 421.0815199098998,
            "unit": "iter/sec",
            "range": "stddev: 0.000013550125072778388",
            "extra": "mean: 2.3748370629372983 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1281.9402683515625,
            "unit": "iter/sec",
            "range": "stddev: 0.000006360750582830589",
            "extra": "mean: 780.0675465838143 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8337339830055,
            "unit": "iter/sec",
            "range": "stddev: 0.000005993030350810543",
            "extra": "mean: 890.6038086803112 usec\nrounds: 1129"
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
        "date": 1648484444781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.19219994592459,
            "unit": "iter/sec",
            "range": "stddev: 0.000013204905370493033",
            "extra": "mean: 4.757550471698124 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.8118829629512,
            "unit": "iter/sec",
            "range": "stddev: 0.00004425689442856567",
            "extra": "mean: 3.652142446043175 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.63175140731425,
            "unit": "iter/sec",
            "range": "stddev: 0.000012031093595482837",
            "extra": "mean: 2.4176093750000183 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.1489865526512,
            "unit": "iter/sec",
            "range": "stddev: 0.000008236798389771713",
            "extra": "mean: 1.203153725961564 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.12463759560472,
            "unit": "iter/sec",
            "range": "stddev: 0.000015247644388195266",
            "extra": "mean: 5.124929441624369 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.94822765347857,
            "unit": "iter/sec",
            "range": "stddev: 0.000009604646667132362",
            "extra": "mean: 3.9223649805449265 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.7213179349282,
            "unit": "iter/sec",
            "range": "stddev: 0.000010387508225717123",
            "extra": "mean: 2.527030904522658 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 768.760577878443,
            "unit": "iter/sec",
            "range": "stddev: 0.000009067867068196115",
            "extra": "mean: 1.3007951093950616 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.906349759028448,
            "unit": "iter/sec",
            "range": "stddev: 0.00005529539812752179",
            "extra": "mean: 37.16594814814852 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.117675769651406,
            "unit": "iter/sec",
            "range": "stddev: 0.0006479166756781268",
            "extra": "mean: 35.5648172413789 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.31460178620165,
            "unit": "iter/sec",
            "range": "stddev: 0.000011873623083901502",
            "extra": "mean: 3.352165780730665 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.2975062371714,
            "unit": "iter/sec",
            "range": "stddev: 0.000011719719935366186",
            "extra": "mean: 2.0271742454728976 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1515.8563130805026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060458164483450644",
            "extra": "mean: 659.6931327665309 usec\nrounds: 1529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1326.5317127357355,
            "unit": "iter/sec",
            "range": "stddev: 0.000006948302091653256",
            "extra": "mean: 753.8455284553115 usec\nrounds: 1353"
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
        "date": 1648485950338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.15811863881822,
            "unit": "iter/sec",
            "range": "stddev: 0.0007890376146281733",
            "extra": "mean: 7.80286111111112 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 185.97472939089337,
            "unit": "iter/sec",
            "range": "stddev: 0.0005276288725957371",
            "extra": "mean: 5.377074634146327 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.3163079738694,
            "unit": "iter/sec",
            "range": "stddev: 0.0004401181622380197",
            "extra": "mean: 3.6857349544072022 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 581.3200939465862,
            "unit": "iter/sec",
            "range": "stddev: 0.00025216814742912315",
            "extra": "mean: 1.72022266288955 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.76868367116498,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298700895884149",
            "extra": "mean: 7.531896621621642 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.6543143677122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006928237247420972",
            "extra": "mean: 5.825661904761876 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.96241234250834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535482420959638",
            "extra": "mean: 3.6236819047619377 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 563.172715930617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003556884910833479",
            "extra": "mean: 1.7756542028985656 msec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.746420607124833,
            "unit": "iter/sec",
            "range": "stddev: 0.0035687203318475486",
            "extra": "mean: 45.984579166668354 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.208160384649474,
            "unit": "iter/sec",
            "range": "stddev: 0.0022141610273319406",
            "extra": "mean: 41.308384615383886 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.45536549661063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007734207022000011",
            "extra": "mean: 4.915082959641381 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.10610972117274,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621778892829915",
            "extra": "mean: 2.9230696897375834 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1057.6481819765609,
            "unit": "iter/sec",
            "range": "stddev: 0.0001723225408335947",
            "extra": "mean: 945.4939903845659 usec\nrounds: 1248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 985.1760462136513,
            "unit": "iter/sec",
            "range": "stddev: 0.00017787907802785624",
            "extra": "mean: 1.015047009966718 msec\nrounds: 1204"
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
        "date": 1648486600041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.5178373507597,
            "unit": "iter/sec",
            "range": "stddev: 0.00046820050312894703",
            "extra": "mean: 7.661787999999981 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.67951693785335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357310472857085",
            "extra": "mean: 5.858933854166655 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.77487516447124,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122894500074778",
            "extra": "mean: 4.05227638888893 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.8485204811742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002504648293098681",
            "extra": "mean: 1.9423188767550625 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.44808291319464,
            "unit": "iter/sec",
            "range": "stddev: 0.0005646012574256233",
            "extra": "mean: 8.166726470588484 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.3560529785578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453778632750865",
            "extra": "mean: 6.395659016393416 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.17098106280136,
            "unit": "iter/sec",
            "range": "stddev: 0.00046424861990608746",
            "extra": "mean: 4.146435842293971 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 483.40689917053254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659437475040594",
            "extra": "mean: 2.0686506578947848 msec\nrounds: 608"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.18617896368904,
            "unit": "iter/sec",
            "range": "stddev: 0.0027599592180783438",
            "extra": "mean: 49.53884545454605 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.55608100325415,
            "unit": "iter/sec",
            "range": "stddev: 0.0009759467701373623",
            "extra": "mean: 46.39062173912957 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.8202915583976,
            "unit": "iter/sec",
            "range": "stddev: 0.00047368477807434864",
            "extra": "mean: 5.561107655501964 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.5722603442534,
            "unit": "iter/sec",
            "range": "stddev: 0.0003437602035268721",
            "extra": "mean: 3.1890575999999364 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 941.3890559955187,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850854551613653",
            "extra": "mean: 1.062260065199611 msec\nrounds: 1227"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 857.970367414887,
            "unit": "iter/sec",
            "range": "stddev: 0.0002173047312083953",
            "extra": "mean: 1.1655414195866185 msec\nrounds: 1113"
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
        "date": 1648604773761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.15113973321574,
            "unit": "iter/sec",
            "range": "stddev: 0.0013770442669137491",
            "extra": "mean: 7.926999328859006 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.9942517576877,
            "unit": "iter/sec",
            "range": "stddev: 0.0004900764671121381",
            "extra": "mean: 5.649900999999935 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.962916510356,
            "unit": "iter/sec",
            "range": "stddev: 0.0003827146475453228",
            "extra": "mean: 3.861556756756752 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.4287788010536,
            "unit": "iter/sec",
            "range": "stddev: 0.000358832583191986",
            "extra": "mean: 1.8004108504399003 msec\nrounds: 682"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.6666967832226,
            "unit": "iter/sec",
            "range": "stddev: 0.0004985254498226164",
            "extra": "mean: 7.894734965035049 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.29401338124393,
            "unit": "iter/sec",
            "range": "stddev: 0.0004868928703809481",
            "extra": "mean: 5.941982010582013 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.25650598177364,
            "unit": "iter/sec",
            "range": "stddev: 0.0003778630982871467",
            "extra": "mean: 3.94856588628751 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 529.8048113516459,
            "unit": "iter/sec",
            "range": "stddev: 0.00036400528964210255",
            "extra": "mean: 1.8874875776397448 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.54893715983168,
            "unit": "iter/sec",
            "range": "stddev: 0.0015166791146968219",
            "extra": "mean: 48.66431739130352 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.84568493108389,
            "unit": "iter/sec",
            "range": "stddev: 0.0014028953914982925",
            "extra": "mean: 45.77563043478281 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.47262303736971,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485304323973439",
            "extra": "mean: 5.115805909090522 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.39462329636484,
            "unit": "iter/sec",
            "range": "stddev: 0.0003884450888159304",
            "extra": "mean: 2.9815624060149872 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1004.5963609993579,
            "unit": "iter/sec",
            "range": "stddev: 0.00019678508740611343",
            "extra": "mean: 995.424668874188 usec\nrounds: 1208"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 937.8567766891965,
            "unit": "iter/sec",
            "range": "stddev: 0.0004036280106913702",
            "extra": "mean: 1.0662608885017393 msec\nrounds: 1148"
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
        "date": 1648607689795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.68876918774293,
            "unit": "iter/sec",
            "range": "stddev: 0.00017004809987653164",
            "extra": "mean: 5.35650861244017 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.2151691093003,
            "unit": "iter/sec",
            "range": "stddev: 0.00019924836436324928",
            "extra": "mean: 3.964868582375546 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.84640267090947,
            "unit": "iter/sec",
            "range": "stddev: 0.00012431058382978842",
            "extra": "mean: 2.67489533898306 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 768.9112522196532,
            "unit": "iter/sec",
            "range": "stddev: 0.00006644805145943788",
            "extra": "mean: 1.3005402081361819 msec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.3648509018083,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049864659496732",
            "extra": "mean: 5.483512831858347 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 234.1172996117342,
            "unit": "iter/sec",
            "range": "stddev: 0.0001953126234244019",
            "extra": "mean: 4.2713631229235265 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.6616694996302,
            "unit": "iter/sec",
            "range": "stddev: 0.00017677649393598805",
            "extra": "mean: 2.690619135802475 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 684.452807708552,
            "unit": "iter/sec",
            "range": "stddev: 0.00006732916515365588",
            "extra": "mean: 1.4610211087421117 msec\nrounds: 938"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.63074487256533,
            "unit": "iter/sec",
            "range": "stddev: 0.0013169712458343031",
            "extra": "mean: 40.59966538461605 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.371603730289007,
            "unit": "iter/sec",
            "range": "stddev: 0.0008911555200621529",
            "extra": "mean: 39.414142307692785 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 277.89389739050375,
            "unit": "iter/sec",
            "range": "stddev: 0.00017455744263487663",
            "extra": "mean: 3.5984957186547137 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 460.7257244948797,
            "unit": "iter/sec",
            "range": "stddev: 0.00012699678759683913",
            "extra": "mean: 2.1704887459808284 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1409.6540255627642,
            "unit": "iter/sec",
            "range": "stddev: 0.000056924050367412585",
            "extra": "mean: 709.3939235201904 usec\nrounds: 1909"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1253.9495645669883,
            "unit": "iter/sec",
            "range": "stddev: 0.00006847321144112469",
            "extra": "mean: 797.4802402402191 usec\nrounds: 1665"
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
        "date": 1648613800055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.6495850046637,
            "unit": "iter/sec",
            "range": "stddev: 0.00015090467357526297",
            "extra": "mean: 5.32908186274511 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.59971646191215,
            "unit": "iter/sec",
            "range": "stddev: 0.00010661167220212736",
            "extra": "mean: 4.038776838235306 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.53223709825005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008862846200722784",
            "extra": "mean: 2.6915564792175877 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 755.4572224260065,
            "unit": "iter/sec",
            "range": "stddev: 0.00004759558054787915",
            "extra": "mean: 1.3237016872890448 msec\nrounds: 889"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.61273099433566,
            "unit": "iter/sec",
            "range": "stddev: 0.00014459432498012967",
            "extra": "mean: 5.662105978260832 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.6035563552357,
            "unit": "iter/sec",
            "range": "stddev: 0.00012899972454044704",
            "extra": "mean: 4.3743851405621275 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.16705602030777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000825498194183996",
            "extra": "mean: 2.8315211822659307 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 699.4031091431476,
            "unit": "iter/sec",
            "range": "stddev: 0.000048845674977258064",
            "extra": "mean: 1.4297906127771143 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.24451191530506,
            "unit": "iter/sec",
            "range": "stddev: 0.00045192211729455477",
            "extra": "mean: 41.24644799999956 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.519553572707775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300772140561708",
            "extra": "mean: 39.18563846153889 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.1640844440971,
            "unit": "iter/sec",
            "range": "stddev: 0.00009919980986471886",
            "extra": "mean: 3.70145425531913 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 457.63895315088905,
            "unit": "iter/sec",
            "range": "stddev: 0.00007485162281241683",
            "extra": "mean: 2.185128676470615 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1385.6007077784925,
            "unit": "iter/sec",
            "range": "stddev: 0.00002914372254858729",
            "extra": "mean: 721.7086382723354 usec\nrounds: 1667"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1228.1540417154038,
            "unit": "iter/sec",
            "range": "stddev: 0.00003443166550727366",
            "extra": "mean: 814.2301096068263 usec\nrounds: 1551"
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
        "date": 1648734191693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.49529668840535,
            "unit": "iter/sec",
            "range": "stddev: 0.00001203231452858511",
            "extra": "mean: 4.70598651162788 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.871872963045,
            "unit": "iter/sec",
            "range": "stddev: 0.000011604046438522752",
            "extra": "mean: 3.5858761565836224 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.5909689016936,
            "unit": "iter/sec",
            "range": "stddev: 0.000011562890947255939",
            "extra": "mean: 2.3832734117647107 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 853.3480145894669,
            "unit": "iter/sec",
            "range": "stddev: 0.000008279878590769807",
            "extra": "mean: 1.1718548387097205 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.48517025305742,
            "unit": "iter/sec",
            "range": "stddev: 0.000013206270842295604",
            "extra": "mean: 5.063671356783906 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.2229239850543,
            "unit": "iter/sec",
            "range": "stddev: 0.000010246023792690935",
            "extra": "mean: 3.8876783783785305 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.3248255100062,
            "unit": "iter/sec",
            "range": "stddev: 0.000010785076152396628",
            "extra": "mean: 2.4917471744470165 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.11394078022,
            "unit": "iter/sec",
            "range": "stddev: 0.000008563055897460557",
            "extra": "mean: 1.27208022670034 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.893517805600332,
            "unit": "iter/sec",
            "range": "stddev: 0.000050324195411407624",
            "extra": "mean: 37.18368148148172 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.568402853884557,
            "unit": "iter/sec",
            "range": "stddev: 0.000039094728645423256",
            "extra": "mean: 35.00370689655218 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.6738609587199,
            "unit": "iter/sec",
            "range": "stddev: 0.000012655784316916477",
            "extra": "mean: 3.250194855305464 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.1195050561837,
            "unit": "iter/sec",
            "range": "stddev: 0.000011019958045113501",
            "extra": "mean: 1.9526692307692748 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1530.766601466736,
            "unit": "iter/sec",
            "range": "stddev: 0.000005876737271419616",
            "extra": "mean: 653.2674537332009 usec\nrounds: 1567"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1355.7899478083898,
            "unit": "iter/sec",
            "range": "stddev: 0.000005885710780695291",
            "extra": "mean: 737.5773818182397 usec\nrounds: 1375"
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
        "date": 1648765205635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.88551224488643,
            "unit": "iter/sec",
            "range": "stddev: 0.000009748005296496544",
            "extra": "mean: 4.741909433962304 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.3933892248991,
            "unit": "iter/sec",
            "range": "stddev: 0.000011235116843822026",
            "extra": "mean: 3.6180315412186204 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 413.94487311171895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010612266112242252",
            "extra": "mean: 2.4157806146571397 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.3467142706235,
            "unit": "iter/sec",
            "range": "stddev: 0.000007647225168808578",
            "extra": "mean: 1.2028675675675742 msec\nrounds: 851"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.55436232057414,
            "unit": "iter/sec",
            "range": "stddev: 0.000028109461058575248",
            "extra": "mean: 5.087651010100863 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.30839508853242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000077877112122544",
            "extra": "mean: 3.9168316406251873 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.18550470934895,
            "unit": "iter/sec",
            "range": "stddev: 0.00004271043886277783",
            "extra": "mean: 2.498841133004782 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 774.6318075098487,
            "unit": "iter/sec",
            "range": "stddev: 0.000007300290920039202",
            "extra": "mean: 1.290935887611723 msec\nrounds: 783"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.83762432156727,
            "unit": "iter/sec",
            "range": "stddev: 0.00013935013547324644",
            "extra": "mean: 37.261122222222156 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.43300326538272,
            "unit": "iter/sec",
            "range": "stddev: 0.00034646047340278934",
            "extra": "mean: 35.17039655172493 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.0542585742797,
            "unit": "iter/sec",
            "range": "stddev: 0.000010280969832395366",
            "extra": "mean: 3.256753398058114 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.17426439860935,
            "unit": "iter/sec",
            "range": "stddev: 0.000010308656624733131",
            "extra": "mean: 1.9639641472868032 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1521.7440203576932,
            "unit": "iter/sec",
            "range": "stddev: 0.000004786166879455381",
            "extra": "mean: 657.1407455013 usec\nrounds: 1556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1336.5758145378861,
            "unit": "iter/sec",
            "range": "stddev: 0.000005476666682756094",
            "extra": "mean: 748.1805290227734 usec\nrounds: 1361"
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
        "date": 1648767345150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.8974816717547,
            "unit": "iter/sec",
            "range": "stddev: 0.0005150364169818445",
            "extra": "mean: 7.8187622377622095 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.1306799671248,
            "unit": "iter/sec",
            "range": "stddev: 0.0007147082189099474",
            "extra": "mean: 5.947754450261747 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.61021032926084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052173075630872",
            "extra": "mean: 4.022360942760935 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 541.7372874573716,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218444382790919",
            "extra": "mean: 1.8459131818182044 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.50735809819741,
            "unit": "iter/sec",
            "range": "stddev: 0.0003541932422445721",
            "extra": "mean: 8.16277499999989 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.51411048731293,
            "unit": "iter/sec",
            "range": "stddev: 0.0006411630280371057",
            "extra": "mean: 6.34863757225449 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.7073659248592,
            "unit": "iter/sec",
            "range": "stddev: 0.0009516430335907341",
            "extra": "mean: 4.154422097378467 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.8956435506559,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432706686026009",
            "extra": "mean: 1.905140597539544 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.436931871541066,
            "unit": "iter/sec",
            "range": "stddev: 0.001423953928645424",
            "extra": "mean: 48.931023809524206 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.194517475939453,
            "unit": "iter/sec",
            "range": "stddev: 0.0026258362121441697",
            "extra": "mean: 47.182013043478115 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.8605083995495,
            "unit": "iter/sec",
            "range": "stddev: 0.0003488223052344303",
            "extra": "mean: 5.323098550724449 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.6860550659258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005103131093897955",
            "extra": "mean: 3.042416873449122 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 995.351572679287,
            "unit": "iter/sec",
            "range": "stddev: 0.00027285284668183773",
            "extra": "mean: 1.0046701361089936 msec\nrounds: 1249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 936.5655473595218,
            "unit": "iter/sec",
            "range": "stddev: 0.00019404536834169038",
            "extra": "mean: 1.0677309269162423 msec\nrounds: 1122"
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
        "date": 1648768197206,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.16673721500516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000135282379932243",
            "extra": "mean: 4.780874881516592 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 273.66554695933667,
            "unit": "iter/sec",
            "range": "stddev: 0.000011114955888260187",
            "extra": "mean: 3.6540953405018417 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.37615723055444,
            "unit": "iter/sec",
            "range": "stddev: 0.000012193477328475674",
            "extra": "mean: 2.407456428571441 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 840.2268359903699,
            "unit": "iter/sec",
            "range": "stddev: 0.00000937599146544902",
            "extra": "mean: 1.190154797687825 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.84844811865938,
            "unit": "iter/sec",
            "range": "stddev: 0.000015674366470209653",
            "extra": "mean: 5.105988888888855 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.8093625039597,
            "unit": "iter/sec",
            "range": "stddev: 0.000021316953789078825",
            "extra": "mean: 3.9399649805447936 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 402.62330142680935,
            "unit": "iter/sec",
            "range": "stddev: 0.000011082643925491121",
            "extra": "mean: 2.483711192214205 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 776.5579401000838,
            "unit": "iter/sec",
            "range": "stddev: 0.000010239119960831221",
            "extra": "mean: 1.2877339195979618 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.718887908426417,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063261688952354",
            "extra": "mean: 37.42670740740773 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.427362061372502,
            "unit": "iter/sec",
            "range": "stddev: 0.00004755743636543474",
            "extra": "mean: 35.17737586206825 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.21420875281143,
            "unit": "iter/sec",
            "range": "stddev: 0.00001408952179531644",
            "extra": "mean: 3.265687781350606 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 505.88484820746555,
            "unit": "iter/sec",
            "range": "stddev: 0.000010768937758305178",
            "extra": "mean: 1.9767344357977208 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1534.0358284122751,
            "unit": "iter/sec",
            "range": "stddev: 0.000005753573887132711",
            "extra": "mean: 651.875257069451 usec\nrounds: 1556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1356.7899855400403,
            "unit": "iter/sec",
            "range": "stddev: 0.000007013933817136561",
            "extra": "mean: 737.0337418889277 usec\nrounds: 1387"
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
        "date": 1648769829100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.04016417781511,
            "unit": "iter/sec",
            "range": "stddev: 0.0012544974612955049",
            "extra": "mean: 7.810049342105303 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.84748727609454,
            "unit": "iter/sec",
            "range": "stddev: 0.0011907206939394104",
            "extra": "mean: 6.103236714975859 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.85342789977466,
            "unit": "iter/sec",
            "range": "stddev: 0.0008653239885734035",
            "extra": "mean: 4.018429677419387 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 531.2266345629713,
            "unit": "iter/sec",
            "range": "stddev: 0.0006397064328981246",
            "extra": "mean: 1.8824357344632738 msec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.4243809927782,
            "unit": "iter/sec",
            "range": "stddev: 0.0010964513108004293",
            "extra": "mean: 8.168307586206948 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.3900541077317,
            "unit": "iter/sec",
            "range": "stddev: 0.001124111394535239",
            "extra": "mean: 6.519327513227565 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.99572708971203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007248922565736279",
            "extra": "mean: 4.149451162790717 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 532.0507192796154,
            "unit": "iter/sec",
            "range": "stddev: 0.00030670843625325183",
            "extra": "mean: 1.8795200603317996 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.27023727510514,
            "unit": "iter/sec",
            "range": "stddev: 0.0030314155442937307",
            "extra": "mean: 49.333413636363716 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.771907650762184,
            "unit": "iter/sec",
            "range": "stddev: 0.0021857334129782554",
            "extra": "mean: 45.930747826086446 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.51545495521296,
            "unit": "iter/sec",
            "range": "stddev: 0.0004451253303342035",
            "extra": "mean: 5.221510714285988 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.06141956033457,
            "unit": "iter/sec",
            "range": "stddev: 0.00032800570421202845",
            "extra": "mean: 2.9406452554744376 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 968.7354267272001,
            "unit": "iter/sec",
            "range": "stddev: 0.0003578023716453157",
            "extra": "mean: 1.0322735933983802 msec\nrounds: 1333"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 847.2173772110033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005533387216390768",
            "extra": "mean: 1.180334618834129 msec\nrounds: 1115"
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
        "date": 1648770291972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.3737676854185,
            "unit": "iter/sec",
            "range": "stddev: 0.0008177385840786178",
            "extra": "mean: 7.670254666666689 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.31384853053098,
            "unit": "iter/sec",
            "range": "stddev: 0.0011217891263097773",
            "extra": "mean: 6.276918229166747 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.91799852147597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006487987940752821",
            "extra": "mean: 4.099738461538558 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.28445069191713,
            "unit": "iter/sec",
            "range": "stddev: 0.0006753349642369216",
            "extra": "mean: 2.0068858231706836 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.10022086879887,
            "unit": "iter/sec",
            "range": "stddev: 0.0014311061588707715",
            "extra": "mean: 9.33704890510946 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.8248609084778,
            "unit": "iter/sec",
            "range": "stddev: 0.0012066928955837325",
            "extra": "mean: 6.764761988304023 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.4331973046114,
            "unit": "iter/sec",
            "range": "stddev: 0.0006412130879310001",
            "extra": "mean: 4.159159430605054 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.69445236793536,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564165156003057",
            "extra": "mean: 2.046268369028068 msec\nrounds: 607"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.25010042135754,
            "unit": "iter/sec",
            "range": "stddev: 0.002093263157517787",
            "extra": "mean: 51.94778095238003 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.329336456095092,
            "unit": "iter/sec",
            "range": "stddev: 0.0035608514893671153",
            "extra": "mean: 51.73483333333316 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.1781763882248,
            "unit": "iter/sec",
            "range": "stddev: 0.0005456886034995585",
            "extra": "mean: 5.550061722488123 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.5760807436329,
            "unit": "iter/sec",
            "range": "stddev: 0.000408675544643549",
            "extra": "mean: 3.0250222513089695 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1011.6569841436957,
            "unit": "iter/sec",
            "range": "stddev: 0.00030398773927839255",
            "extra": "mean: 988.4773353751295 usec\nrounds: 1306"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 917.0569138391619,
            "unit": "iter/sec",
            "range": "stddev: 0.0002486131632016977",
            "extra": "mean: 1.0904448621553984 msec\nrounds: 1197"
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
        "date": 1648865714447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.31726492400608,
            "unit": "iter/sec",
            "range": "stddev: 0.0009636405878894123",
            "extra": "mean: 7.615144897959188 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.83883709683448,
            "unit": "iter/sec",
            "range": "stddev: 0.0009273802530825233",
            "extra": "mean: 5.887934803921466 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.87067231303064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003589745809258031",
            "extra": "mean: 3.9235585284281194 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 547.0536373926004,
            "unit": "iter/sec",
            "range": "stddev: 0.0002950774383805578",
            "extra": "mean: 1.827974318507888 msec\nrounds: 697"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.07323493764245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008421980902356703",
            "extra": "mean: 8.328250675675802 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.1081217253574,
            "unit": "iter/sec",
            "range": "stddev: 0.0009575155748730162",
            "extra": "mean: 6.365043315507979 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.68627422717825,
            "unit": "iter/sec",
            "range": "stddev: 0.0008794458965710811",
            "extra": "mean: 4.225002076124497 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.9427602411616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553190988479552",
            "extra": "mean: 1.9571663947797333 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.971792221081675,
            "unit": "iter/sec",
            "range": "stddev: 0.002907318223314756",
            "extra": "mean: 50.07061904761995 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.801674842327525,
            "unit": "iter/sec",
            "range": "stddev: 0.0027652398409652155",
            "extra": "mean: 48.073052173913744 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.08157754090033,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240051078206309",
            "extra": "mean: 5.462046009389451 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.4561756170359,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418244542566975",
            "extra": "mean: 3.159995212765778 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 999.9208164374393,
            "unit": "iter/sec",
            "range": "stddev: 0.00017928033162913545",
            "extra": "mean: 1.0000791898330939 msec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 902.223353351906,
            "unit": "iter/sec",
            "range": "stddev: 0.00018947352692572357",
            "extra": "mean: 1.1083729946524195 msec\nrounds: 1122"
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
        "date": 1649082117063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.8967376686384,
            "unit": "iter/sec",
            "range": "stddev: 0.00032638142484887715",
            "extra": "mean: 7.758148251748251 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.06402372994884,
            "unit": "iter/sec",
            "range": "stddev: 0.00035046567677397746",
            "extra": "mean: 5.9501134020617945 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.50931077011688,
            "unit": "iter/sec",
            "range": "stddev: 0.00033803346314345036",
            "extra": "mean: 4.073165277777803 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.1888402209339,
            "unit": "iter/sec",
            "range": "stddev: 0.00016599579541144051",
            "extra": "mean: 1.9113557536466501 msec\nrounds: 617"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.28089583719492,
            "unit": "iter/sec",
            "range": "stddev: 0.0009033425181254402",
            "extra": "mean: 8.38357218045116 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.8422574866294,
            "unit": "iter/sec",
            "range": "stddev: 0.00025865210294686404",
            "extra": "mean: 6.375832738095146 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.18762035901707,
            "unit": "iter/sec",
            "range": "stddev: 0.000240053712059292",
            "extra": "mean: 4.013040449438258 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.6531232334946,
            "unit": "iter/sec",
            "range": "stddev: 0.00017594882689996342",
            "extra": "mean: 2.0718813405797167 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.797007424966484,
            "unit": "iter/sec",
            "range": "stddev: 0.0015081373681935636",
            "extra": "mean: 50.512685000000346 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.88433835730947,
            "unit": "iter/sec",
            "range": "stddev: 0.0007850228316052535",
            "extra": "mean: 47.88277142857161 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.41923887267947,
            "unit": "iter/sec",
            "range": "stddev: 0.00023075797844601784",
            "extra": "mean: 5.307313658536376 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.85002469205284,
            "unit": "iter/sec",
            "range": "stddev: 0.000189507384866857",
            "extra": "mean: 3.0783436170213228 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 988.1856819917022,
            "unit": "iter/sec",
            "range": "stddev: 0.0001534172454388068",
            "extra": "mean: 1.0119555648534455 msec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 867.7951370847875,
            "unit": "iter/sec",
            "range": "stddev: 0.00034109127194667706",
            "extra": "mean: 1.1523457061067806 msec\nrounds: 1048"
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
        "date": 1649083398989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 179.71134386653662,
            "unit": "iter/sec",
            "range": "stddev: 0.000016126561977941343",
            "extra": "mean: 5.56447900552485 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 235.38433861402177,
            "unit": "iter/sec",
            "range": "stddev: 0.00003663775173427294",
            "extra": "mean: 4.2483710084033195 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.6183817006757,
            "unit": "iter/sec",
            "range": "stddev: 0.000013629328213384564",
            "extra": "mean: 2.8041179347825675 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 730.8593989258455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005332075668078307",
            "extra": "mean: 1.3682522267206445 msec\nrounds: 741"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 167.88387413173106,
            "unit": "iter/sec",
            "range": "stddev: 0.000029528418712534543",
            "extra": "mean: 5.956498235294143 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 218.74018181422085,
            "unit": "iter/sec",
            "range": "stddev: 0.000012185533407302185",
            "extra": "mean: 4.571633760683779 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.00094388339085,
            "unit": "iter/sec",
            "range": "stddev: 0.000012442775863129806",
            "extra": "mean: 2.9069687679083205 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 669.5449584244907,
            "unit": "iter/sec",
            "range": "stddev: 0.000011137608052975202",
            "extra": "mean: 1.493551683748175 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.395956184443087,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755367616926846",
            "extra": "mean: 42.74242916666685 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.821924174558518,
            "unit": "iter/sec",
            "range": "stddev: 0.00040596825584540897",
            "extra": "mean: 40.28696538461592 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.8953281306548,
            "unit": "iter/sec",
            "range": "stddev: 0.00011964992497647335",
            "extra": "mean: 3.7189192052980014 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 448.1987019830759,
            "unit": "iter/sec",
            "range": "stddev: 0.00006958217734638038",
            "extra": "mean: 2.2311532710279027 msec\nrounds: 642"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1353.7054944857382,
            "unit": "iter/sec",
            "range": "stddev: 0.00002818920510707073",
            "extra": "mean: 738.7131130614875 usec\nrounds: 1937"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1213.6899675220757,
            "unit": "iter/sec",
            "range": "stddev: 0.000047785337993016236",
            "extra": "mean: 823.9336459554372 usec\nrounds: 1706"
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
        "date": 1649166573646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.81303566051272,
            "unit": "iter/sec",
            "range": "stddev: 0.000016625353304612326",
            "extra": "mean: 5.500155675675714 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.92545803299137,
            "unit": "iter/sec",
            "range": "stddev: 0.00002209963158324579",
            "extra": "mean: 4.185405809128627 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 361.30075816583064,
            "unit": "iter/sec",
            "range": "stddev: 0.000013136029223168564",
            "extra": "mean: 2.7677771978021086 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 736.2280628119614,
            "unit": "iter/sec",
            "range": "stddev: 0.000009560234953083373",
            "extra": "mean: 1.3582747663551207 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.4002481625335,
            "unit": "iter/sec",
            "range": "stddev: 0.000019967334104999973",
            "extra": "mean: 5.938233529411655 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.17408760301745,
            "unit": "iter/sec",
            "range": "stddev: 0.000012610969187737675",
            "extra": "mean: 4.541860538116726 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.1711013595006,
            "unit": "iter/sec",
            "range": "stddev: 0.000012993434238518382",
            "extra": "mean: 2.8804240793201448 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 678.4829711606725,
            "unit": "iter/sec",
            "range": "stddev: 0.000010550497645070711",
            "extra": "mean: 1.4738763425253139 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.225330706935406,
            "unit": "iter/sec",
            "range": "stddev: 0.00005273123661748315",
            "extra": "mean: 43.056437500000214 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.49130578237813,
            "unit": "iter/sec",
            "range": "stddev: 0.00008024293156692081",
            "extra": "mean: 40.83081599999929 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.8417442125427,
            "unit": "iter/sec",
            "range": "stddev: 0.000011072505253021123",
            "extra": "mean: 3.8191007434944293 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 445.58876997740424,
            "unit": "iter/sec",
            "range": "stddev: 0.000011900278899722381",
            "extra": "mean: 2.2442217294899733 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.3136359451673,
            "unit": "iter/sec",
            "range": "stddev: 0.000006948626476568923",
            "extra": "mean: 742.2176791808985 usec\nrounds: 1465"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1188.5552005903673,
            "unit": "iter/sec",
            "range": "stddev: 0.000007259113554346096",
            "extra": "mean: 841.357641196042 usec\nrounds: 1204"
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
        "date": 1649338972229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 238.25248946551676,
            "unit": "iter/sec",
            "range": "stddev: 0.00001544804803556806",
            "extra": "mean: 4.197227916666676 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 312.5743398668486,
            "unit": "iter/sec",
            "range": "stddev: 0.000012972803672419098",
            "extra": "mean: 3.1992389408099946 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 467.85487358511546,
            "unit": "iter/sec",
            "range": "stddev: 0.000009680351568269436",
            "extra": "mean: 2.1374149473684447 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 942.487040311265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074799930281065196",
            "extra": "mean: 1.061022546972891 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 221.4664115400177,
            "unit": "iter/sec",
            "range": "stddev: 0.000013112415080291418",
            "extra": "mean: 4.515357399102959 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.1928001937571,
            "unit": "iter/sec",
            "range": "stddev: 0.00001098755620155884",
            "extra": "mean: 3.4698993150685324 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 448.5032678774454,
            "unit": "iter/sec",
            "range": "stddev: 0.00001103783862141206",
            "extra": "mean: 2.2296381578946542 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 880.0940735902151,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067228896654415165",
            "extra": "mean: 1.1362421700224001 msec\nrounds: 894"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.537352994660594,
            "unit": "iter/sec",
            "range": "stddev: 0.000044114634150203525",
            "extra": "mean: 32.74678064516097 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.12862373224975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004686513896217186",
            "extra": "mean: 31.124893749999938 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.6965675509969,
            "unit": "iter/sec",
            "range": "stddev: 0.00002206141844654086",
            "extra": "mean: 2.901102285714095 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 578.9009322156879,
            "unit": "iter/sec",
            "range": "stddev: 0.000010791031691533667",
            "extra": "mean: 1.7274112794612297 msec\nrounds: 594"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1728.4701593078091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052523686108254964",
            "extra": "mean: 578.5462911320751 usec\nrounds: 1793"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1538.4868663959503,
            "unit": "iter/sec",
            "range": "stddev: 0.000006585595893527159",
            "extra": "mean: 649.9892991238813 usec\nrounds: 1598"
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
        "date": 1649688220121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.94788814812338,
            "unit": "iter/sec",
            "range": "stddev: 0.00003409105893419388",
            "extra": "mean: 4.763086729857818 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.7713811602919,
            "unit": "iter/sec",
            "range": "stddev: 0.000012762824312849601",
            "extra": "mean: 3.6261920863309256 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.45001606118944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002253900618923761",
            "extra": "mean: 2.378404000000007 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 841.8270068146664,
            "unit": "iter/sec",
            "range": "stddev: 0.000008276459386081331",
            "extra": "mean: 1.1878925146198789 msec\nrounds: 855"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.25157333914103,
            "unit": "iter/sec",
            "range": "stddev: 0.00002304867264006227",
            "extra": "mean: 5.147963451776601 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 253.52415911927383,
            "unit": "iter/sec",
            "range": "stddev: 0.000010343767297464687",
            "extra": "mean: 3.9443972656252324 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.9069009045126,
            "unit": "iter/sec",
            "range": "stddev: 0.000014261726205850349",
            "extra": "mean: 2.4943446913581027 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 769.5648002246758,
            "unit": "iter/sec",
            "range": "stddev: 0.000008852483791631728",
            "extra": "mean: 1.2994357326479176 msec\nrounds: 778"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.484791353794762,
            "unit": "iter/sec",
            "range": "stddev: 0.000054102111696852124",
            "extra": "mean: 37.75751851851834 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.084086563580478,
            "unit": "iter/sec",
            "range": "stddev: 0.00008262708049552703",
            "extra": "mean: 35.607353571427986 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.0110022839677,
            "unit": "iter/sec",
            "range": "stddev: 0.000016007335840253774",
            "extra": "mean: 3.257212258064475 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.50301971697775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011848155504438068",
            "extra": "mean: 1.96269690522244 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1525.8405408396657,
            "unit": "iter/sec",
            "range": "stddev: 0.000005851756014073356",
            "extra": "mean: 655.376478232583 usec\nrounds: 1539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1360.904971123748,
            "unit": "iter/sec",
            "range": "stddev: 0.000005744810539589585",
            "extra": "mean: 734.8051636362708 usec\nrounds: 1375"
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
        "date": 1649777371205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.48941378874343,
            "unit": "iter/sec",
            "range": "stddev: 0.000465660423475304",
            "extra": "mean: 7.547772847682129 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.6781337038838,
            "unit": "iter/sec",
            "range": "stddev: 0.000688736739003535",
            "extra": "mean: 5.724815000000003 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.56440627801297,
            "unit": "iter/sec",
            "range": "stddev: 0.00047494927130850107",
            "extra": "mean: 3.9593861016949448 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 541.1239042661097,
            "unit": "iter/sec",
            "range": "stddev: 0.00033016015516080795",
            "extra": "mean: 1.8480055900621013 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.67782788946617,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999953949307903",
            "extra": "mean: 7.956852985074673 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.8617000612815,
            "unit": "iter/sec",
            "range": "stddev: 0.0005131219862978079",
            "extra": "mean: 6.140179057591322 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.0231035937066,
            "unit": "iter/sec",
            "range": "stddev: 0.0004811813436906896",
            "extra": "mean: 4.097972631579095 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.0176019046719,
            "unit": "iter/sec",
            "range": "stddev: 0.00041035522756364707",
            "extra": "mean: 1.941681209150395 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.89496755594194,
            "unit": "iter/sec",
            "range": "stddev: 0.0016443114617258647",
            "extra": "mean: 45.67259565217379 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.94798941053416,
            "unit": "iter/sec",
            "range": "stddev: 0.0024872565517382486",
            "extra": "mean: 45.56225999999981 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.61751030226418,
            "unit": "iter/sec",
            "range": "stddev: 0.0005030724875095855",
            "extra": "mean: 5.301734703196301 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.7510008935397,
            "unit": "iter/sec",
            "range": "stddev: 0.00042506861410335824",
            "extra": "mean: 3.1872408284023757 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 820.794112873616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003112641346629076",
            "extra": "mean: 1.2183323251417835 msec\nrounds: 1058"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 825.2775590342676,
            "unit": "iter/sec",
            "range": "stddev: 0.00039446250736300723",
            "extra": "mean: 1.2117135490394177 msec\nrounds: 989"
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
        "date": 1649968357128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.81225283669355,
            "unit": "iter/sec",
            "range": "stddev: 0.000015375588926014354",
            "extra": "mean: 4.766165876777205 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.1467898697533,
            "unit": "iter/sec",
            "range": "stddev: 0.00001901011063861651",
            "extra": "mean: 3.6476808664259694 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.9532594107198,
            "unit": "iter/sec",
            "range": "stddev: 0.000051459699343502775",
            "extra": "mean: 2.4041162735849166 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 846.0900261432133,
            "unit": "iter/sec",
            "range": "stddev: 0.000013542364169434212",
            "extra": "mean: 1.181907325581374 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.63003919095055,
            "unit": "iter/sec",
            "range": "stddev: 0.000015292121673687427",
            "extra": "mean: 5.085692929292885 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.3537209763437,
            "unit": "iter/sec",
            "range": "stddev: 0.00003618152731877982",
            "extra": "mean: 3.931532812500138 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.7712431554043,
            "unit": "iter/sec",
            "range": "stddev: 0.00001293668996661421",
            "extra": "mean: 2.4766498777505013 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.2304656805748,
            "unit": "iter/sec",
            "range": "stddev: 0.000012132752508777521",
            "extra": "mean: 1.2670570175438844 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.485874739665974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000469875563937177",
            "extra": "mean: 37.755974074074004 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.83182895671142,
            "unit": "iter/sec",
            "range": "stddev: 0.00004534491448664199",
            "extra": "mean: 35.93008571428641 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.8134846526228,
            "unit": "iter/sec",
            "range": "stddev: 0.000012286641899205056",
            "extra": "mean: 3.2699669902911968 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.74016596835384,
            "unit": "iter/sec",
            "range": "stddev: 0.000012033843129626759",
            "extra": "mean: 1.965639961013428 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1524.6878223947313,
            "unit": "iter/sec",
            "range": "stddev: 0.000005992448112236714",
            "extra": "mean: 655.8719662555991 usec\nrounds: 1541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1360.5018237276304,
            "unit": "iter/sec",
            "range": "stddev: 0.000006376967041461043",
            "extra": "mean: 735.022902990388 usec\nrounds: 1371"
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
        "date": 1671164149103,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.34725013121746,
            "unit": "iter/sec",
            "range": "stddev: 0.0009413534199152784",
            "extra": "mean: 8.309288321167921 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.04142333970515,
            "unit": "iter/sec",
            "range": "stddev: 0.0008759832117724303",
            "extra": "mean: 6.367746666666689 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.0223007604006,
            "unit": "iter/sec",
            "range": "stddev: 0.0006867564189508018",
            "extra": "mean: 4.3285864468864705 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.71100662534684,
            "unit": "iter/sec",
            "range": "stddev: 0.00033304893699846803",
            "extra": "mean: 1.958054529914589 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.93299445736955,
            "unit": "iter/sec",
            "range": "stddev: 0.0016732891336749256",
            "extra": "mean: 9.179955118110204 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.62642185827823,
            "unit": "iter/sec",
            "range": "stddev: 0.0011791288381575674",
            "extra": "mean: 6.820053216374263 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 227.83531923989244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005557330128735276",
            "extra": "mean: 4.389135114503821 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 469.654567423529,
            "unit": "iter/sec",
            "range": "stddev: 0.0003527955504476687",
            "extra": "mean: 2.1292244755243948 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.985419126054275,
            "unit": "iter/sec",
            "range": "stddev: 0.0013799295310003132",
            "extra": "mean: 55.60059473684252 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 17.2531426815061,
            "unit": "iter/sec",
            "range": "stddev: 0.0034850410104765215",
            "extra": "mean: 57.9604549999992 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.98864774308038,
            "unit": "iter/sec",
            "range": "stddev: 0.0010193980572437333",
            "extra": "mean: 6.097983084577241 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.3879937852293,
            "unit": "iter/sec",
            "range": "stddev: 0.0007599401413025367",
            "extra": "mean: 3.541227042253616 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 606.3883720093769,
            "unit": "iter/sec",
            "range": "stddev: 0.0005226054061417936",
            "extra": "mean: 1.6491081395349323 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 567.4690450809692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107717548575484",
            "extra": "mean: 1.7622106591863798 msec\nrounds: 713"
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
        "date": 1671168281775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.90619308250982,
            "unit": "iter/sec",
            "range": "stddev: 0.00007400247356757505",
            "extra": "mean: 5.497338947368415 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.00632626042656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002347938127633397",
            "extra": "mean: 4.183989669421461 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 362.5456026192411,
            "unit": "iter/sec",
            "range": "stddev: 0.00002632897045059867",
            "extra": "mean: 2.7582736979166653 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 728.2973710339722,
            "unit": "iter/sec",
            "range": "stddev: 0.000020825671720457805",
            "extra": "mean: 1.3730655083654748 msec\nrounds: 777"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.2690417348684,
            "unit": "iter/sec",
            "range": "stddev: 0.00006499706052001034",
            "extra": "mean: 5.942863819095381 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 221.24131715973238,
            "unit": "iter/sec",
            "range": "stddev: 0.00007909923506591172",
            "extra": "mean: 4.5199513944224865 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.5414008729341,
            "unit": "iter/sec",
            "range": "stddev: 0.00006836252006183369",
            "extra": "mean: 2.860891435185161 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 671.8911340961737,
            "unit": "iter/sec",
            "range": "stddev: 0.00003698966799630114",
            "extra": "mean: 1.48833635280096 msec\nrounds: 839"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.446126125562976,
            "unit": "iter/sec",
            "range": "stddev: 0.00020676328725517922",
            "extra": "mean: 44.551117391305255 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.861920610196687,
            "unit": "iter/sec",
            "range": "stddev: 0.00045312467547133735",
            "extra": "mean: 41.90777500000061 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.78258160791233,
            "unit": "iter/sec",
            "range": "stddev: 0.00005015581952772854",
            "extra": "mean: 3.8346119354838812 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 442.775648273397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004417663789562287",
            "extra": "mean: 2.258480121703844 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1019.7049974202799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000342898667252414",
            "extra": "mean: 980.6757861635169 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 907.0378375441475,
            "unit": "iter/sec",
            "range": "stddev: 0.00002420997582978828",
            "extra": "mean: 1.1024898395722416 msec\nrounds: 1122"
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
        "date": 1671338126278,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.8058383932505,
            "unit": "iter/sec",
            "range": "stddev: 0.00005795001375805109",
            "extra": "mean: 4.633794930875586 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.1451932434824,
            "unit": "iter/sec",
            "range": "stddev: 0.000010994107217458614",
            "extra": "mean: 3.5193275261324075 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.4701788987689,
            "unit": "iter/sec",
            "range": "stddev: 0.000015621154337137863",
            "extra": "mean: 2.344829836829857 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.58602064434,
            "unit": "iter/sec",
            "range": "stddev: 0.000008225453532383524",
            "extra": "mean: 1.1647056625142038 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.58682569560145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000239170857091457",
            "extra": "mean: 4.985372277227918 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.12646066214535,
            "unit": "iter/sec",
            "range": "stddev: 0.000009854063601826699",
            "extra": "mean: 3.8004539622641795 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 411.45811183746963,
            "unit": "iter/sec",
            "range": "stddev: 0.000010380167889860253",
            "extra": "mean: 2.4303810551558906 msec\nrounds: 417"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.8764844286966,
            "unit": "iter/sec",
            "range": "stddev: 0.000006966467165860811",
            "extra": "mean: 1.2612304938272263 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.873174871415415,
            "unit": "iter/sec",
            "range": "stddev: 0.00004699821927844231",
            "extra": "mean: 38.65006923076905 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.2566898769156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000685051219822458",
            "extra": "mean: 36.68824074074109 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.5255604039282,
            "unit": "iter/sec",
            "range": "stddev: 0.000010797743332153",
            "extra": "mean: 3.230750955413855 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 513.7644079175375,
            "unit": "iter/sec",
            "range": "stddev: 0.000010956104299459451",
            "extra": "mean: 1.9464174329501363 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1159.1220293511337,
            "unit": "iter/sec",
            "range": "stddev: 0.000014585366494762723",
            "extra": "mean: 862.721934945703 usec\nrounds: 1199"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1052.2037839892996,
            "unit": "iter/sec",
            "range": "stddev: 0.000010281005807244824",
            "extra": "mean: 950.3862419203859 usec\nrounds: 1083"
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
        "date": 1671350457584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.45518423419819,
            "unit": "iter/sec",
            "range": "stddev: 0.00005247513483236998",
            "extra": "mean: 4.774290995260684 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.17544327148624,
            "unit": "iter/sec",
            "range": "stddev: 0.000012582524842413153",
            "extra": "mean: 3.620886738351241 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.1242880815077,
            "unit": "iter/sec",
            "range": "stddev: 0.00002779781051181055",
            "extra": "mean: 2.368970533642714 msec\nrounds: 431"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.6414614275195,
            "unit": "iter/sec",
            "range": "stddev: 0.000008429970290425289",
            "extra": "mean: 1.164630459770097 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.25877704911093,
            "unit": "iter/sec",
            "range": "stddev: 0.000014008010318442937",
            "extra": "mean: 5.069482914572835 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.43823192066935,
            "unit": "iter/sec",
            "range": "stddev: 0.000012402625653762159",
            "extra": "mean: 3.8693965384617 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.72977311216255,
            "unit": "iter/sec",
            "range": "stddev: 0.000011943007774185803",
            "extra": "mean: 2.4646946472019287 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.601122538397,
            "unit": "iter/sec",
            "range": "stddev: 0.000015521235395739928",
            "extra": "mean: 1.2600788627937163 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.96134065041655,
            "unit": "iter/sec",
            "range": "stddev: 0.000042986993849245595",
            "extra": "mean: 35.76366428571452 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.00747232487092,
            "unit": "iter/sec",
            "range": "stddev: 0.00006613139331919582",
            "extra": "mean: 34.47387586206892 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.39001646544233,
            "unit": "iter/sec",
            "range": "stddev: 0.000014890492339204053",
            "extra": "mean: 3.232166349206346 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.9955244943525,
            "unit": "iter/sec",
            "range": "stddev: 0.000013214271581058754",
            "extra": "mean: 1.8148967741937614 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1193.3504992960682,
            "unit": "iter/sec",
            "range": "stddev: 0.000017784904059757443",
            "extra": "mean: 837.976772616158 usec\nrounds: 1227"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.1346031589753,
            "unit": "iter/sec",
            "range": "stddev: 0.000013343664724773632",
            "extra": "mean: 911.4651904339757 usec\nrounds: 1129"
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
        "date": 1671357986506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.1035541465423,
            "unit": "iter/sec",
            "range": "stddev: 0.0006131788628550032",
            "extra": "mean: 7.745720143884841 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.69828479544995,
            "unit": "iter/sec",
            "range": "stddev: 0.0002430167952624362",
            "extra": "mean: 5.8928114754098715 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 241.14446442983882,
            "unit": "iter/sec",
            "range": "stddev: 0.0004406580355298091",
            "extra": "mean: 4.146891791044827 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 533.0991742163687,
            "unit": "iter/sec",
            "range": "stddev: 0.00036916937363515675",
            "extra": "mean: 1.8758235772358003 msec\nrounds: 615"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.83945935474405,
            "unit": "iter/sec",
            "range": "stddev: 0.0002762207294037376",
            "extra": "mean: 8.275442519685031 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.18440717908555,
            "unit": "iter/sec",
            "range": "stddev: 0.0013726284127474847",
            "extra": "mean: 6.703113407821297 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.233388351231,
            "unit": "iter/sec",
            "range": "stddev: 0.00046035091865286",
            "extra": "mean: 4.180018545454232 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.6452176962526,
            "unit": "iter/sec",
            "range": "stddev: 0.00027505330402713716",
            "extra": "mean: 2.025746354166679 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.037141367622453,
            "unit": "iter/sec",
            "range": "stddev: 0.0014763239002315786",
            "extra": "mean: 52.5288950000002 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.240907709061773,
            "unit": "iter/sec",
            "range": "stddev: 0.003876921496625369",
            "extra": "mean: 51.97260000000084 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.22324432734516,
            "unit": "iter/sec",
            "range": "stddev: 0.00018188896939019732",
            "extra": "mean: 5.457822797927364 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.9635053239942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002784463204910995",
            "extra": "mean: 3.0772686274508976 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 666.0763710896862,
            "unit": "iter/sec",
            "range": "stddev: 0.00036330060165330416",
            "extra": "mean: 1.5013293421053537 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 614.9915173158583,
            "unit": "iter/sec",
            "range": "stddev: 0.0001732853686762397",
            "extra": "mean: 1.6260386880855173 msec\nrounds: 747"
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
        "date": 1671361780961,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.9707615059512,
            "unit": "iter/sec",
            "range": "stddev: 0.000017452788620566878",
            "extra": "mean: 4.717631775700935 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.4923388374827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922188529398118",
            "extra": "mean: 3.577915602836875 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.22984514784616,
            "unit": "iter/sec",
            "range": "stddev: 0.000023190762225671",
            "extra": "mean: 2.3967604705882155 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 861.3557957539807,
            "unit": "iter/sec",
            "range": "stddev: 0.000007689334244166294",
            "extra": "mean: 1.1609604357798027 msec\nrounds: 872"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.25390476080148,
            "unit": "iter/sec",
            "range": "stddev: 0.00008973726484160727",
            "extra": "mean: 5.121536500000161 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.2218161080453,
            "unit": "iter/sec",
            "range": "stddev: 0.000010548279807479086",
            "extra": "mean: 3.8576999999999755 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.32179467471997,
            "unit": "iter/sec",
            "range": "stddev: 0.000012127871911373968",
            "extra": "mean: 2.4732775061124466 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 787.3640954038924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073579492863933195",
            "extra": "mean: 1.2700604534005735 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.812918293377116,
            "unit": "iter/sec",
            "range": "stddev: 0.00004166344127011688",
            "extra": "mean: 38.740292307692016 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.02229880097117,
            "unit": "iter/sec",
            "range": "stddev: 0.0001536727707042135",
            "extra": "mean: 37.00647407407324 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.1962101376227,
            "unit": "iter/sec",
            "range": "stddev: 0.000011899249418149248",
            "extra": "mean: 3.2658797427654016 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.83028141785303,
            "unit": "iter/sec",
            "range": "stddev: 0.000013095834131108183",
            "extra": "mean: 1.953772639691887 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.9123660715297,
            "unit": "iter/sec",
            "range": "stddev: 0.000016452707797960912",
            "extra": "mean: 855.4961253090265 usec\nrounds: 1213"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1049.057792112465,
            "unit": "iter/sec",
            "range": "stddev: 0.000011958385960780913",
            "extra": "mean: 953.236330275305 usec\nrounds: 1090"
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
        "date": 1671374159025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.87078337538966,
            "unit": "iter/sec",
            "range": "stddev: 0.00001720257671157499",
            "extra": "mean: 4.7198579439252555 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.26876263907894,
            "unit": "iter/sec",
            "range": "stddev: 0.00001165234345465881",
            "extra": "mean: 3.5553183745583192 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.3403924092235,
            "unit": "iter/sec",
            "range": "stddev: 0.000014955901366656647",
            "extra": "mean: 2.367758372093043 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 852.9912395733442,
            "unit": "iter/sec",
            "range": "stddev: 0.000008335811725976722",
            "extra": "mean: 1.1723449826989873 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.68150976489977,
            "unit": "iter/sec",
            "range": "stddev: 0.000014955637548051826",
            "extra": "mean: 5.03318099999996 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.20436430985427,
            "unit": "iter/sec",
            "range": "stddev: 0.000010918767058128303",
            "extra": "mean: 3.8431330798479184 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.3204057266234,
            "unit": "iter/sec",
            "range": "stddev: 0.000012539737968840286",
            "extra": "mean: 2.4550697336562086 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 786.7565039282651,
            "unit": "iter/sec",
            "range": "stddev: 0.00000810114941568568",
            "extra": "mean: 1.2710412878787944 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.81457391556465,
            "unit": "iter/sec",
            "range": "stddev: 0.00003789957174474507",
            "extra": "mean: 38.73780769230747 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.10884472244519,
            "unit": "iter/sec",
            "range": "stddev: 0.00005998395179480542",
            "extra": "mean: 36.88832962962949 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.9647639983824,
            "unit": "iter/sec",
            "range": "stddev: 0.000013415471015416823",
            "extra": "mean: 3.25770289389068 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.6488342095706,
            "unit": "iter/sec",
            "range": "stddev: 0.000014486760874020942",
            "extra": "mean: 1.954465510597453 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.9556168566844,
            "unit": "iter/sec",
            "range": "stddev: 0.00001447604427443624",
            "extra": "mean: 854.7332784184551 usec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1049.0724564565442,
            "unit": "iter/sec",
            "range": "stddev: 0.000011050292284710386",
            "extra": "mean: 953.2230055659869 usec\nrounds: 1078"
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
        "date": 1671377949968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 213.76199739210335,
            "unit": "iter/sec",
            "range": "stddev: 0.000014905210576349108",
            "extra": "mean: 4.678100000000006 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.2965515403428,
            "unit": "iter/sec",
            "range": "stddev: 0.000011123915840178028",
            "extra": "mean: 3.5423741258741184 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.7680854716274,
            "unit": "iter/sec",
            "range": "stddev: 0.000011741572610567792",
            "extra": "mean: 2.376606103286392 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.9125228764137,
            "unit": "iter/sec",
            "range": "stddev: 0.000009196537194865412",
            "extra": "mean: 1.1765916763005626 msec\nrounds: 865"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.07271288904005,
            "unit": "iter/sec",
            "range": "stddev: 0.000016082004018995297",
            "extra": "mean: 5.048651000000177 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.4874684604992,
            "unit": "iter/sec",
            "range": "stddev: 0.00000953154488107359",
            "extra": "mean: 3.80970568181805 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.90244316772004,
            "unit": "iter/sec",
            "range": "stddev: 0.000012157743435877376",
            "extra": "mean: 2.4515665859564937 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.6089235989737,
            "unit": "iter/sec",
            "range": "stddev: 0.000008329101219243454",
            "extra": "mean: 1.2648478535352798 msec\nrounds: 792"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.520545511475465,
            "unit": "iter/sec",
            "range": "stddev: 0.000042764038090415634",
            "extra": "mean: 39.18411538461605 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.846707982093065,
            "unit": "iter/sec",
            "range": "stddev: 0.00005341729555531976",
            "extra": "mean: 37.24851481481479 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.93838508227435,
            "unit": "iter/sec",
            "range": "stddev: 0.000012865166135335435",
            "extra": "mean: 3.247402884615447 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.0464519302951,
            "unit": "iter/sec",
            "range": "stddev: 0.000010357253253905468",
            "extra": "mean: 1.941572447013647 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1162.4834569661796,
            "unit": "iter/sec",
            "range": "stddev: 0.000015390513205754976",
            "extra": "mean: 860.227295285367 usec\nrounds: 1209"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1046.6725004308873,
            "unit": "iter/sec",
            "range": "stddev: 0.00001536379558978015",
            "extra": "mean: 955.4086876155878 usec\nrounds: 1082"
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
        "date": 1671379032055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.52281733213326,
            "unit": "iter/sec",
            "range": "stddev: 0.000013480903511069273",
            "extra": "mean: 4.661508796296284 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.23392157874673,
            "unit": "iter/sec",
            "range": "stddev: 0.000012801506090748939",
            "extra": "mean: 3.5684473684210873 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.4085849040422,
            "unit": "iter/sec",
            "range": "stddev: 0.00001687864673491666",
            "extra": "mean: 2.3729938967135835 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.5010412894288,
            "unit": "iter/sec",
            "range": "stddev: 0.000008842085365879338",
            "extra": "mean: 1.18413116279069 msec\nrounds: 860"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.69218814838442,
            "unit": "iter/sec",
            "range": "stddev: 0.00002450276447839534",
            "extra": "mean: 5.032910500000103 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.7839878691585,
            "unit": "iter/sec",
            "range": "stddev: 0.00001244483197258646",
            "extra": "mean: 3.864226717557197 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.0820350256792,
            "unit": "iter/sec",
            "range": "stddev: 0.000011847225077246582",
            "extra": "mean: 2.468635766423479 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 785.4313922718964,
            "unit": "iter/sec",
            "range": "stddev: 0.000008946035046944605",
            "extra": "mean: 1.273185678391914 msec\nrounds: 796"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.692306369685866,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308912535846004",
            "extra": "mean: 38.9221576923079 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.103002249750222,
            "unit": "iter/sec",
            "range": "stddev: 0.00019988361620875789",
            "extra": "mean: 36.89628148148111 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 308.49494216610066,
            "unit": "iter/sec",
            "range": "stddev: 0.00001550239786607651",
            "extra": "mean: 3.241544230769195 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.3304350381933,
            "unit": "iter/sec",
            "range": "stddev: 0.000010765358674122232",
            "extra": "mean: 1.9405025048169062 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1150.8359390620806,
            "unit": "iter/sec",
            "range": "stddev: 0.000015161776910921677",
            "extra": "mean: 868.9335864979936 usec\nrounds: 1185"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1044.2814140424146,
            "unit": "iter/sec",
            "range": "stddev: 0.000011508678429382013",
            "extra": "mean: 957.5962825279048 usec\nrounds: 1076"
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
        "date": 1671419430699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.4318487707003,
            "unit": "iter/sec",
            "range": "stddev: 0.0012238151050349092",
            "extra": "mean: 7.972456834532368 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.7504140814171,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817431114435234",
            "extra": "mean: 5.7553819672131175 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.09854356855138,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841241735950212",
            "extra": "mean: 4.130549425287414 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.7720394028065,
            "unit": "iter/sec",
            "range": "stddev: 0.00045202259787482696",
            "extra": "mean: 1.9426074523397046 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.33186450768764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005060446476127906",
            "extra": "mean: 8.241858015267205 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.23243891832502,
            "unit": "iter/sec",
            "range": "stddev: 0.0009106865703693713",
            "extra": "mean: 6.240933526011722 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.64409953461586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004050343438947537",
            "extra": "mean: 4.07093026819918 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.30280946209575,
            "unit": "iter/sec",
            "range": "stddev: 0.00024143555536939806",
            "extra": "mean: 1.9868754578754462 msec\nrounds: 546"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.810366581126548,
            "unit": "iter/sec",
            "range": "stddev: 0.0026623023725766363",
            "extra": "mean: 53.162174999999934 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.262120438622453,
            "unit": "iter/sec",
            "range": "stddev: 0.0006992358392592476",
            "extra": "mean: 49.35317619047704 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.63270213404593,
            "unit": "iter/sec",
            "range": "stddev: 0.0002938597928375156",
            "extra": "mean: 5.386981865285229 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.0780441273221,
            "unit": "iter/sec",
            "range": "stddev: 0.00037294505283402",
            "extra": "mean: 3.0761843749999116 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 597.0930147209577,
            "unit": "iter/sec",
            "range": "stddev: 0.000782394829928708",
            "extra": "mean: 1.6747809392265869 msec\nrounds: 724"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 615.3157791394527,
            "unit": "iter/sec",
            "range": "stddev: 0.00028936926155604395",
            "extra": "mean: 1.6251817910448287 msec\nrounds: 670"
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
        "date": 1671423879827,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.23402330474264,
            "unit": "iter/sec",
            "range": "stddev: 0.00045174871699648933",
            "extra": "mean: 7.619975177304964 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.97398548081514,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765928716176437",
            "extra": "mean: 5.848843010752705 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.16092159313655,
            "unit": "iter/sec",
            "range": "stddev: 0.000382550118429265",
            "extra": "mean: 3.9815111111111916 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.3938419603458,
            "unit": "iter/sec",
            "range": "stddev: 0.0004411780771415804",
            "extra": "mean: 1.807031311475375 msec\nrounds: 610"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.55244539209592,
            "unit": "iter/sec",
            "range": "stddev: 0.00037022056886411444",
            "extra": "mean: 8.22690153846157 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.38455635618178,
            "unit": "iter/sec",
            "range": "stddev: 0.000564535456789069",
            "extra": "mean: 6.196379768786318 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.05261664315418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007858576683509885",
            "extra": "mean: 4.097477067669255 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 506.1860226323626,
            "unit": "iter/sec",
            "range": "stddev: 0.00034656820038315403",
            "extra": "mean: 1.9755583032490982 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.418444765107612,
            "unit": "iter/sec",
            "range": "stddev: 0.0009933342269453998",
            "extra": "mean: 51.49743000000022 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.17224019259296,
            "unit": "iter/sec",
            "range": "stddev: 0.0012153895334017521",
            "extra": "mean: 49.57307619047634 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.8061443607581,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799178931224001",
            "extra": "mean: 5.411075500000209 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.02904901315793,
            "unit": "iter/sec",
            "range": "stddev: 0.0005278509759325361",
            "extra": "mean: 3.114982905983107 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 664.2781447479623,
            "unit": "iter/sec",
            "range": "stddev: 0.00031553668667022794",
            "extra": "mean: 1.5053934980495496 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 615.2642309624375,
            "unit": "iter/sec",
            "range": "stddev: 0.000498099449777085",
            "extra": "mean: 1.6253179523141352 msec\nrounds: 713"
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
        "date": 1671428043336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.40796909928702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006711524167817966",
            "extra": "mean: 4.775367452830164 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.7141583326694,
            "unit": "iter/sec",
            "range": "stddev: 0.000012388373757097851",
            "extra": "mean: 3.626944680851052 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.59701258354545,
            "unit": "iter/sec",
            "range": "stddev: 0.000011848696468675713",
            "extra": "mean: 2.3496405529954187 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 860.470601524159,
            "unit": "iter/sec",
            "range": "stddev: 0.000012298373073019538",
            "extra": "mean: 1.1621547537227785 msec\nrounds: 873"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.6220989132065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000158571502426283",
            "extra": "mean: 5.034686500000074 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.73261456792363,
            "unit": "iter/sec",
            "range": "stddev: 0.000013673203796121898",
            "extra": "mean: 3.8951030888030407 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.36545500723014,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511761434925622",
            "extra": "mean: 2.4428050480770005 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.627359327054,
            "unit": "iter/sec",
            "range": "stddev: 0.000006203590003984341",
            "extra": "mean: 1.2490205191595292 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.006349039327482,
            "unit": "iter/sec",
            "range": "stddev: 0.00006870988574789679",
            "extra": "mean: 35.70618928571395 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.038865617743248,
            "unit": "iter/sec",
            "range": "stddev: 0.0004576608405258266",
            "extra": "mean: 34.436606896551176 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.5401964084086,
            "unit": "iter/sec",
            "range": "stddev: 0.000012662388000342008",
            "extra": "mean: 3.169168338558313 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.4563597184738,
            "unit": "iter/sec",
            "range": "stddev: 0.00000896540210644581",
            "extra": "mean: 1.8068271914133738 msec\nrounds: 559"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1194.8788896527665,
            "unit": "iter/sec",
            "range": "stddev: 0.000014945887419884579",
            "extra": "mean: 836.9049019609021 usec\nrounds: 1224"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.0310898932112,
            "unit": "iter/sec",
            "range": "stddev: 0.000013642445938637024",
            "extra": "mean: 914.0508064515884 usec\nrounds: 1116"
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
        "date": 1671437517597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.67918097346399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000380145675985586",
            "extra": "mean: 4.701917674418589 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.2503613172915,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081622503915353",
            "extra": "mean: 3.581015957446781 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.4822625127207,
            "unit": "iter/sec",
            "range": "stddev: 0.000015746053801545272",
            "extra": "mean: 2.3338188940092057 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 861.8264923896742,
            "unit": "iter/sec",
            "range": "stddev: 0.000009243666980871925",
            "extra": "mean: 1.160326363636372 msec\nrounds: 880"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.94232551506795,
            "unit": "iter/sec",
            "range": "stddev: 0.00001876794875565683",
            "extra": "mean: 5.051976616915502 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.1973343788576,
            "unit": "iter/sec",
            "range": "stddev: 0.000012182992341189104",
            "extra": "mean: 3.8580643678161564 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.83403873585587,
            "unit": "iter/sec",
            "range": "stddev: 0.000012353484300824176",
            "extra": "mean: 2.4459802884614783 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.4176843291245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000090337095528291",
            "extra": "mean: 1.2667565217389776 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.793069937809804,
            "unit": "iter/sec",
            "range": "stddev: 0.00005590096586546351",
            "extra": "mean: 38.77010384615404 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.98341329584743,
            "unit": "iter/sec",
            "range": "stddev: 0.00007094281815202619",
            "extra": "mean: 37.059803703703174 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.153796990379,
            "unit": "iter/sec",
            "range": "stddev: 0.000013855805008371592",
            "extra": "mean: 3.2035490506329523 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 516.6317538408961,
            "unit": "iter/sec",
            "range": "stddev: 0.000011628616737388474",
            "extra": "mean: 1.935614666666354 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1155.8554085514484,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601070005725256",
            "extra": "mean: 865.1601165696227 usec\nrounds: 1201"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1060.042173490104,
            "unit": "iter/sec",
            "range": "stddev: 0.000012320407666619289",
            "extra": "mean: 943.358693652329 usec\nrounds: 1087"
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
        "date": 1671465392185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.47348574758139,
            "unit": "iter/sec",
            "range": "stddev: 0.000773187211534867",
            "extra": "mean: 7.844768613138622 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.77441948414767,
            "unit": "iter/sec",
            "range": "stddev: 0.00026547240917460684",
            "extra": "mean: 5.821588586956544 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.864925352797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036550988501237",
            "extra": "mean: 4.221815444015428 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.3729406427303,
            "unit": "iter/sec",
            "range": "stddev: 0.000271470730357579",
            "extra": "mean: 1.9106834196891145 msec\nrounds: 579"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.34933177409809,
            "unit": "iter/sec",
            "range": "stddev: 0.0009305902754992204",
            "extra": "mean: 8.521565354330589 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.45932586970395,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432793702818661",
            "extra": "mean: 6.559126470588151 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.1430187917529,
            "unit": "iter/sec",
            "range": "stddev: 0.0007088136745428616",
            "extra": "mean: 4.441621176470743 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 464.564101255292,
            "unit": "iter/sec",
            "range": "stddev: 0.0005472196436620515",
            "extra": "mean: 2.15255547576301 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.4660701996408,
            "unit": "iter/sec",
            "range": "stddev: 0.0018584525300615604",
            "extra": "mean: 54.15337368420986 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.19460585508425,
            "unit": "iter/sec",
            "range": "stddev: 0.0013933778355987487",
            "extra": "mean: 52.097969999999805 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.96597022981203,
            "unit": "iter/sec",
            "range": "stddev: 0.0004759129616007423",
            "extra": "mean: 5.587654450261633 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.46373175766985,
            "unit": "iter/sec",
            "range": "stddev: 0.00013269114582674168",
            "extra": "mean: 3.1800169590641825 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 644.5031001941859,
            "unit": "iter/sec",
            "range": "stddev: 0.0003925179079565525",
            "extra": "mean: 1.5515829166666606 msec\nrounds: 720"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 579.7630587786975,
            "unit": "iter/sec",
            "range": "stddev: 0.0004351858342074207",
            "extra": "mean: 1.7248425625919568 msec\nrounds: 679"
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
        "date": 1671540459721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.8170617901778,
            "unit": "iter/sec",
            "range": "stddev: 0.00001669435925543539",
            "extra": "mean: 4.655123720930269 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.2210360834228,
            "unit": "iter/sec",
            "range": "stddev: 0.000013872726957922175",
            "extra": "mean: 3.555921754385952 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.5695913808126,
            "unit": "iter/sec",
            "range": "stddev: 0.000011757170810009043",
            "extra": "mean: 2.344283371824475 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 866.541602044082,
            "unit": "iter/sec",
            "range": "stddev: 0.000008421656966008888",
            "extra": "mean: 1.1540126840316767 msec\nrounds: 883"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.01116205093876,
            "unit": "iter/sec",
            "range": "stddev: 0.000018459422353754645",
            "extra": "mean: 5.024843781094251 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.91393079147383,
            "unit": "iter/sec",
            "range": "stddev: 0.000009743083240250286",
            "extra": "mean: 3.8474274809159397 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.8220283497917,
            "unit": "iter/sec",
            "range": "stddev: 0.000010984010865566237",
            "extra": "mean: 2.440083574879189 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.0477268683863,
            "unit": "iter/sec",
            "range": "stddev: 0.000007365098562336029",
            "extra": "mean: 1.2562060869565597 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.088408398380427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004640275853865667",
            "extra": "mean: 38.33120000000001 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.320252981640078,
            "unit": "iter/sec",
            "range": "stddev: 0.00003871593655543598",
            "extra": "mean: 36.60288214285666 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.0696429184906,
            "unit": "iter/sec",
            "range": "stddev: 0.00001233276188581359",
            "extra": "mean: 3.2044129337539884 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.2819447763213,
            "unit": "iter/sec",
            "range": "stddev: 0.000012992341021758235",
            "extra": "mean: 1.9406851145038466 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.8359375730015,
            "unit": "iter/sec",
            "range": "stddev: 0.000016199597267500393",
            "extra": "mean: 859.2276348549127 usec\nrounds: 1205"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1058.0378320225109,
            "unit": "iter/sec",
            "range": "stddev: 0.000013611060991744362",
            "extra": "mean: 945.1457875456422 usec\nrounds: 1092"
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
        "date": 1671541348032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.59357736419295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006798503531166772",
            "extra": "mean: 5.599305499999994 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 235.4008561662942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002953896337723281",
            "extra": "mean: 4.248072909699063 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.795848778336,
            "unit": "iter/sec",
            "range": "stddev: 0.00022339346430053192",
            "extra": "mean: 2.858810370370334 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 728.306511562476,
            "unit": "iter/sec",
            "range": "stddev: 0.00007253860477852953",
            "extra": "mean: 1.3730482758621023 msec\nrounds: 812"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.24959382148427,
            "unit": "iter/sec",
            "range": "stddev: 0.0006966611953586089",
            "extra": "mean: 6.27945086705201 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 216.0558563660662,
            "unit": "iter/sec",
            "range": "stddev: 0.00022022856367057147",
            "extra": "mean: 4.6284327433628425 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.19045446088785,
            "unit": "iter/sec",
            "range": "stddev: 0.00018974317477832756",
            "extra": "mean: 2.939529863013753 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 653.4247166660116,
            "unit": "iter/sec",
            "range": "stddev: 0.00013053809275856765",
            "extra": "mean: 1.5303981843575336 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.474583512654235,
            "unit": "iter/sec",
            "range": "stddev: 0.0014495611292921792",
            "extra": "mean: 46.566677272727276 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.389448690003316,
            "unit": "iter/sec",
            "range": "stddev: 0.002420395257255491",
            "extra": "mean: 44.663895652173466 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.19290423204777,
            "unit": "iter/sec",
            "range": "stddev: 0.00039967061829137884",
            "extra": "mean: 4.012955357142925 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 430.7076776312953,
            "unit": "iter/sec",
            "range": "stddev: 0.0001887580004381388",
            "extra": "mean: 2.3217603305786527 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 961.0861928829925,
            "unit": "iter/sec",
            "range": "stddev: 0.00022147472545746264",
            "extra": "mean: 1.0404894039735155 msec\nrounds: 1057"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 876.9390161364475,
            "unit": "iter/sec",
            "range": "stddev: 0.00022076977846496241",
            "extra": "mean: 1.1403301502146925 msec\nrounds: 932"
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
        "date": 1671543642896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.07412445663044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003723005413716012",
            "extra": "mean: 4.760224528301908 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.35409699210453,
            "unit": "iter/sec",
            "range": "stddev: 0.000016132271304169245",
            "extra": "mean: 3.6054992907801435 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.5984113680373,
            "unit": "iter/sec",
            "range": "stddev: 0.000010863960411413501",
            "extra": "mean: 2.360726511627931 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 859.9318442589465,
            "unit": "iter/sec",
            "range": "stddev: 0.000007407106092163724",
            "extra": "mean: 1.162882857142892 msec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.610126335905,
            "unit": "iter/sec",
            "range": "stddev: 0.000012152841551898696",
            "extra": "mean: 5.034989999999908 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.2534998543968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005486961183011142",
            "extra": "mean: 3.872164367816117 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.921050750943,
            "unit": "iter/sec",
            "range": "stddev: 0.000011137784629691401",
            "extra": "mean: 2.433557487922649 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.7050005246294,
            "unit": "iter/sec",
            "range": "stddev: 0.000006182552353808968",
            "extra": "mean: 1.2567471604937426 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.051064157192044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003647198678633292",
            "extra": "mean: 35.649271428571055 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.06947896166564,
            "unit": "iter/sec",
            "range": "stddev: 0.00003301990219392687",
            "extra": "mean: 34.4003413793111 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.2302736565399,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558746830070221",
            "extra": "mean: 3.1925394321766927 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 551.750862989814,
            "unit": "iter/sec",
            "range": "stddev: 0.000010063467388015072",
            "extra": "mean: 1.8124122082586778 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1204.5328904020982,
            "unit": "iter/sec",
            "range": "stddev: 0.000014786411568806671",
            "extra": "mean: 830.1973387095965 usec\nrounds: 1240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.179443649413,
            "unit": "iter/sec",
            "range": "stddev: 0.000015495577362205086",
            "extra": "mean: 911.4279398762911 usec\nrounds: 1131"
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
        "date": 1671548958675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.4657090227761,
            "unit": "iter/sec",
            "range": "stddev: 0.000016546042141247805",
            "extra": "mean: 4.706641860465121 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.1106189614478,
            "unit": "iter/sec",
            "range": "stddev: 0.000020555160389485004",
            "extra": "mean: 3.582808865248244 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.5042013098925,
            "unit": "iter/sec",
            "range": "stddev: 0.000011334700939785722",
            "extra": "mean: 2.383766352941216 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.1118606779955,
            "unit": "iter/sec",
            "range": "stddev: 0.00001463330561729137",
            "extra": "mean: 1.16943764434179 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.11978132846133,
            "unit": "iter/sec",
            "range": "stddev: 0.00001855468575949694",
            "extra": "mean: 5.073057575757436 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.48208977600274,
            "unit": "iter/sec",
            "range": "stddev: 0.000015810431530186712",
            "extra": "mean: 3.86873999999995 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.7100034759021,
            "unit": "iter/sec",
            "range": "stddev: 0.000012323905991085162",
            "extra": "mean: 2.4527237288135497 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.4999827392692,
            "unit": "iter/sec",
            "range": "stddev: 0.000010055833856615966",
            "extra": "mean: 1.2682308457712 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.97795251170353,
            "unit": "iter/sec",
            "range": "stddev: 0.00004903495911538581",
            "extra": "mean: 38.494180769230454 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.162598028056166,
            "unit": "iter/sec",
            "range": "stddev: 0.00010437123393468156",
            "extra": "mean: 36.815329629629055 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 305.92932209004306,
            "unit": "iter/sec",
            "range": "stddev: 0.00012669769144431402",
            "extra": "mean: 3.268728846153798 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.5358667766359,
            "unit": "iter/sec",
            "range": "stddev: 0.00001129772515647875",
            "extra": "mean: 1.9703041015623342 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1153.2160094876454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000157548449201343",
            "extra": "mean: 867.1402337228074 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1042.2593548104248,
            "unit": "iter/sec",
            "range": "stddev: 0.000015305756691881148",
            "extra": "mean: 959.454089219366 usec\nrounds: 1076"
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
        "date": 1671551135974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 233.10756562302814,
            "unit": "iter/sec",
            "range": "stddev: 0.0003353690865630125",
            "extra": "mean: 4.289865055762104 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.86874910019014,
            "unit": "iter/sec",
            "range": "stddev: 0.00033847279976442155",
            "extra": "mean: 3.357183333333311 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.5901718742671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002319002174909127",
            "extra": "mean: 2.2095044526901644 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.3975431512011,
            "unit": "iter/sec",
            "range": "stddev: 0.00014088439429357042",
            "extra": "mean: 1.1118553832116553 msec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.94397648947586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005171174314813826",
            "extra": "mean: 4.95186842105248 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.2075673479232,
            "unit": "iter/sec",
            "range": "stddev: 0.00030179511218325167",
            "extra": "mean: 3.5944385321101326 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.2473413447535,
            "unit": "iter/sec",
            "range": "stddev: 0.0002268986928188832",
            "extra": "mean: 2.245942664092638 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.8277920079722,
            "unit": "iter/sec",
            "range": "stddev: 0.00015025462794304536",
            "extra": "mean: 1.1739462006079286 msec\nrounds: 987"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.22094518443215,
            "unit": "iter/sec",
            "range": "stddev: 0.0011142887058788033",
            "extra": "mean: 36.73641724137879 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.08516961743858,
            "unit": "iter/sec",
            "range": "stddev: 0.0011521009283142",
            "extra": "mean: 34.38178333333255 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 331.6123110215823,
            "unit": "iter/sec",
            "range": "stddev: 0.00029051217634128076",
            "extra": "mean: 3.0155695876288413 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 564.0253702250643,
            "unit": "iter/sec",
            "range": "stddev: 0.0001959073861644015",
            "extra": "mean: 1.772969892473042 msec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1253.7507355473933,
            "unit": "iter/sec",
            "range": "stddev: 0.00010313577554468654",
            "extra": "mean: 797.6067105263913 usec\nrounds: 1520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1125.1463945123112,
            "unit": "iter/sec",
            "range": "stddev: 0.00011531783748917703",
            "extra": "mean: 888.7732342007324 usec\nrounds: 1345"
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
        "date": 1671589026558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.274976945102,
            "unit": "iter/sec",
            "range": "stddev: 0.00005156933121176198",
            "extra": "mean: 5.426672772277234 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.80183821211648,
            "unit": "iter/sec",
            "range": "stddev: 0.000041449143688615045",
            "extra": "mean: 4.13561785714287 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 369.03897524239306,
            "unit": "iter/sec",
            "range": "stddev: 0.000016693884537156148",
            "extra": "mean: 2.709740886699508 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.1245862075921,
            "unit": "iter/sec",
            "range": "stddev: 0.000022689844218189786",
            "extra": "mean: 1.3225333737864367 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.174244519128,
            "unit": "iter/sec",
            "range": "stddev: 0.0001693950458582891",
            "extra": "mean: 5.8080696261681775 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 231.4120070355645,
            "unit": "iter/sec",
            "range": "stddev: 0.00017305229290331912",
            "extra": "mean: 4.32129694915232 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 366.54052854110114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001199571297491188",
            "extra": "mean: 2.7282112676057526 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 706.2518078588757,
            "unit": "iter/sec",
            "range": "stddev: 0.00006362673860266539",
            "extra": "mean: 1.4159255790532737 msec\nrounds: 993"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.53479431060416,
            "unit": "iter/sec",
            "range": "stddev: 0.001079446392061364",
            "extra": "mean: 42.49028000000095 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.315702360465192,
            "unit": "iter/sec",
            "range": "stddev: 0.0009406231378510532",
            "extra": "mean: 41.125688461539 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.1361908722637,
            "unit": "iter/sec",
            "range": "stddev: 0.00021140280965964317",
            "extra": "mean: 3.5569949101798755 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 456.65561603016795,
            "unit": "iter/sec",
            "range": "stddev: 0.00008691337385919318",
            "extra": "mean: 2.1898340125394125 msec\nrounds: 638"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1051.725367134885,
            "unit": "iter/sec",
            "range": "stddev: 0.00005179018214081968",
            "extra": "mean: 950.8185608608117 usec\nrounds: 1487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 966.0183098952192,
            "unit": "iter/sec",
            "range": "stddev: 0.00007238722650842714",
            "extra": "mean: 1.035177066269548 msec\nrounds: 1343"
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
        "date": 1672071512296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.08522521626753,
            "unit": "iter/sec",
            "range": "stddev: 0.00025732407129404415",
            "extra": "mean: 4.899913744075827 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.13549976092116,
            "unit": "iter/sec",
            "range": "stddev: 0.000013337134821902148",
            "extra": "mean: 3.608343214285714 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.06963650650965,
            "unit": "iter/sec",
            "range": "stddev: 0.000011313474649425682",
            "extra": "mean: 2.347034180138583 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 862.6733252849806,
            "unit": "iter/sec",
            "range": "stddev: 0.00000813091719966257",
            "extra": "mean: 1.1591873432155262 msec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.03452712177096,
            "unit": "iter/sec",
            "range": "stddev: 0.000014502006437260455",
            "extra": "mean: 5.049624499999954 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.8215880560293,
            "unit": "iter/sec",
            "range": "stddev: 0.00002016989706716412",
            "extra": "mean: 3.878651153846286 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.7105391293377,
            "unit": "iter/sec",
            "range": "stddev: 0.000011248034757096205",
            "extra": "mean: 2.434804819277082 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 798.4021680175673,
            "unit": "iter/sec",
            "range": "stddev: 0.000007842415408500847",
            "extra": "mean: 1.252501608910958 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.19633957133696,
            "unit": "iter/sec",
            "range": "stddev: 0.000036752137576242793",
            "extra": "mean: 35.465596428571594 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.21378648953053,
            "unit": "iter/sec",
            "range": "stddev: 0.00003523945358096455",
            "extra": "mean: 34.230413793103274 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.6680632551932,
            "unit": "iter/sec",
            "range": "stddev: 0.000010867558918661285",
            "extra": "mean: 3.2085417721520026 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 552.5119164981161,
            "unit": "iter/sec",
            "range": "stddev: 0.000010015558711607942",
            "extra": "mean: 1.8099157142856117 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1196.4883647316042,
            "unit": "iter/sec",
            "range": "stddev: 0.000021001479829493193",
            "extra": "mean: 835.7791262135003 usec\nrounds: 1236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1095.5263206960449,
            "unit": "iter/sec",
            "range": "stddev: 0.000015048187908812397",
            "extra": "mean: 912.8032627866468 usec\nrounds: 1134"
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
        "date": 1672074342916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.7965029033084,
            "unit": "iter/sec",
            "range": "stddev: 0.000047301305449042355",
            "extra": "mean: 4.633995391705066 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.7695961114658,
            "unit": "iter/sec",
            "range": "stddev: 0.000010304485841855718",
            "extra": "mean: 3.54899894736836 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.72021184961613,
            "unit": "iter/sec",
            "range": "stddev: 0.000010986347772532754",
            "extra": "mean: 2.337976958525388 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 865.2077527687006,
            "unit": "iter/sec",
            "range": "stddev: 0.000008038946529863443",
            "extra": "mean: 1.1557917700112588 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.6940835980271,
            "unit": "iter/sec",
            "range": "stddev: 0.000014001966337863099",
            "extra": "mean: 4.982707920792093 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.9920406325035,
            "unit": "iter/sec",
            "range": "stddev: 0.000008959999050715221",
            "extra": "mean: 3.83153446969701 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.97876308926345,
            "unit": "iter/sec",
            "range": "stddev: 0.000012699136846606588",
            "extra": "mean: 2.4332157517900814 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.7903299419373,
            "unit": "iter/sec",
            "range": "stddev: 0.000006980033402472857",
            "extra": "mean: 1.2379450000000352 msec\nrounds: 820"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.753515676808924,
            "unit": "iter/sec",
            "range": "stddev: 0.000042774349789941784",
            "extra": "mean: 38.82964999999986 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.03248493714847,
            "unit": "iter/sec",
            "range": "stddev: 0.00005720028788833736",
            "extra": "mean: 36.99252962963032 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 306.5511148519625,
            "unit": "iter/sec",
            "range": "stddev: 0.000011700495755470282",
            "extra": "mean: 3.2620987220448145 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.9840702063707,
            "unit": "iter/sec",
            "range": "stddev: 0.000010967149642092615",
            "extra": "mean: 1.9531857692309056 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1155.289749355867,
            "unit": "iter/sec",
            "range": "stddev: 0.000015607425735752517",
            "extra": "mean: 865.5837209302265 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.3679099843698,
            "unit": "iter/sec",
            "range": "stddev: 0.000014992075698754866",
            "extra": "mean: 941.2934922090338 usec\nrounds: 1091"
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
        "date": 1672209638126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.1785296047824,
            "unit": "iter/sec",
            "range": "stddev: 0.000022290033759805903",
            "extra": "mean: 4.713012206572764 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.9609260789826,
            "unit": "iter/sec",
            "range": "stddev: 0.000013335849441809462",
            "extra": "mean: 3.5592137809187174 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.11402819697264,
            "unit": "iter/sec",
            "range": "stddev: 0.00002007661147470327",
            "extra": "mean: 2.385985514018696 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.680649815627,
            "unit": "iter/sec",
            "range": "stddev: 0.000008425677422663222",
            "extra": "mean: 1.1741490196078557 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.61059226656357,
            "unit": "iter/sec",
            "range": "stddev: 0.000018453587928834297",
            "extra": "mean: 5.086195959596141 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.4358399324487,
            "unit": "iter/sec",
            "range": "stddev: 0.000013698256067732233",
            "extra": "mean: 3.8545175572518344 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.87540920639395,
            "unit": "iter/sec",
            "range": "stddev: 0.000019703158826310577",
            "extra": "mean: 2.4945406403941877 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 779.190062505813,
            "unit": "iter/sec",
            "range": "stddev: 0.000008398283202899262",
            "extra": "mean: 1.2833839240506735 msec\nrounds: 790"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.79168315433063,
            "unit": "iter/sec",
            "range": "stddev: 0.000045890855968889975",
            "extra": "mean: 38.7721884615387 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.075752540457973,
            "unit": "iter/sec",
            "range": "stddev: 0.000040254600345927774",
            "extra": "mean: 36.93341481481443 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.583418596967,
            "unit": "iter/sec",
            "range": "stddev: 0.00001920432104825867",
            "extra": "mean: 3.2831728155340816 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.9851432523235,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066729988639904",
            "extra": "mean: 1.9685615087039772 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.537413593957,
            "unit": "iter/sec",
            "range": "stddev: 0.000014207153092482062",
            "extra": "mean: 859.4480833333762 usec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1045.1661794745378,
            "unit": "iter/sec",
            "range": "stddev: 0.000013183155770078864",
            "extra": "mean: 956.7856477165714 usec\nrounds: 1073"
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
        "date": 1672216606600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.43438915551484,
            "unit": "iter/sec",
            "range": "stddev: 0.0015594123353185189",
            "extra": "mean: 8.303276223776228 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.91018892983539,
            "unit": "iter/sec",
            "range": "stddev: 0.0009590650487107781",
            "extra": "mean: 5.991245989304905 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.62092407497403,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136114604249141",
            "extra": "mean: 4.03843093525175 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.0668023422975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505499578254934",
            "extra": "mean: 1.9045195688225738 msec\nrounds: 603"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.55642398532403,
            "unit": "iter/sec",
            "range": "stddev: 0.0015118704803839642",
            "extra": "mean: 8.964073643410769 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.15813869087376,
            "unit": "iter/sec",
            "range": "stddev: 0.000481846090285611",
            "extra": "mean: 6.445037356321541 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.33941231782296,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437830768017421",
            "extra": "mean: 4.24918202247192 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.3145585555744,
            "unit": "iter/sec",
            "range": "stddev: 0.00030412251559206285",
            "extra": "mean: 2.006764568345388 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.243677945816867,
            "unit": "iter/sec",
            "range": "stddev: 0.005002715407995205",
            "extra": "mean: 57.9922684210528 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.782834742985326,
            "unit": "iter/sec",
            "range": "stddev: 0.002503116662545409",
            "extra": "mean: 53.2400999999993 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.84630862068335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041420246286204",
            "extra": "mean: 5.654627499999982 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.57611652612985,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075863348892251",
            "extra": "mean: 3.6026154285715153 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 636.3262254531921,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911297270206567",
            "extra": "mean: 1.5715209589040575 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 570.4677185063128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004719387741503547",
            "extra": "mean: 1.752947568388892 msec\nrounds: 658"
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
        "date": 1672330250601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.5574565927876,
            "unit": "iter/sec",
            "range": "stddev: 0.000014557301799761737",
            "extra": "mean: 4.749297489539745 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.5902020502366,
            "unit": "iter/sec",
            "range": "stddev: 0.000011072449837397072",
            "extra": "mean: 3.60243262411339 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.12650490700776,
            "unit": "iter/sec",
            "range": "stddev: 0.000012387028252678925",
            "extra": "mean: 2.408904245283036 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.1460099106919,
            "unit": "iter/sec",
            "range": "stddev: 0.000009446333788757375",
            "extra": "mean: 1.165302860411914 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.09808390383373,
            "unit": "iter/sec",
            "range": "stddev: 0.000051832430882071235",
            "extra": "mean: 5.099488888888883 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.31844966329845,
            "unit": "iter/sec",
            "range": "stddev: 0.000011562494545595714",
            "extra": "mean: 3.8862351351350877 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.95658173048025,
            "unit": "iter/sec",
            "range": "stddev: 0.000011132091846788356",
            "extra": "mean: 2.5002713936431045 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.6213771402198,
            "unit": "iter/sec",
            "range": "stddev: 0.000009890041799548889",
            "extra": "mean: 1.2648279301745293 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.64999808118265,
            "unit": "iter/sec",
            "range": "stddev: 0.00005461664342014223",
            "extra": "mean: 38.986357692307976 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.985870198363724,
            "unit": "iter/sec",
            "range": "stddev: 0.000049062149085169786",
            "extra": "mean: 37.056429629630195 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.3746394254862,
            "unit": "iter/sec",
            "range": "stddev: 0.000011566533300772769",
            "extra": "mean: 3.285424836601111 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 509.8396080164117,
            "unit": "iter/sec",
            "range": "stddev: 0.000011293845673748819",
            "extra": "mean: 1.9614011627904164 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1180.1061149099185,
            "unit": "iter/sec",
            "range": "stddev: 0.000015826410098621336",
            "extra": "mean: 847.3814238953701 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1064.0007023946764,
            "unit": "iter/sec",
            "range": "stddev: 0.000014605534877237469",
            "extra": "mean: 939.8490036231798 usec\nrounds: 1104"
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
        "date": 1672330805593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.5497657837168,
            "unit": "iter/sec",
            "range": "stddev: 0.000013714808392441526",
            "extra": "mean: 4.795018571428567 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.0098953055493,
            "unit": "iter/sec",
            "range": "stddev: 0.00001573214500927834",
            "extra": "mean: 3.6495032374100824 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.14901542645254,
            "unit": "iter/sec",
            "range": "stddev: 0.00014270978279934545",
            "extra": "mean: 2.3972248837209826 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 863.7856255065783,
            "unit": "iter/sec",
            "range": "stddev: 0.00000767877179613929",
            "extra": "mean: 1.1576946530147882 msec\nrounds: 879"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.92482275941947,
            "unit": "iter/sec",
            "range": "stddev: 0.00001523876130799342",
            "extra": "mean: 5.103998492462196 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.81122636448015,
            "unit": "iter/sec",
            "range": "stddev: 0.00001395598567221956",
            "extra": "mean: 3.8939107692307298 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.1717149725799,
            "unit": "iter/sec",
            "range": "stddev: 0.000013057376352217025",
            "extra": "mean: 2.4620128953772884 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.4592531094315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065658904651548475",
            "extra": "mean: 1.2539825653797698 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.14408646506697,
            "unit": "iter/sec",
            "range": "stddev: 0.00006669687331527649",
            "extra": "mean: 35.53144285714233 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.251377563366578,
            "unit": "iter/sec",
            "range": "stddev: 0.00003823483504394947",
            "extra": "mean: 34.18642413793071 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.37017459985975,
            "unit": "iter/sec",
            "range": "stddev: 0.000015492441473854815",
            "extra": "mean: 3.21161139240486 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.1257595888919,
            "unit": "iter/sec",
            "range": "stddev: 0.000010689401560340085",
            "extra": "mean: 1.8411942028986619 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1198.7666669543964,
            "unit": "iter/sec",
            "range": "stddev: 0.000014153724077630392",
            "extra": "mean: 834.1906957928804 usec\nrounds: 1236"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1088.2783282890089,
            "unit": "iter/sec",
            "range": "stddev: 0.00004951734751778186",
            "extra": "mean: 918.8825817860399 usec\nrounds: 1131"
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
        "date": 1672352929045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.68034203815107,
            "unit": "iter/sec",
            "range": "stddev: 0.0008252181659884164",
            "extra": "mean: 8.218254347826083 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.51568245743005,
            "unit": "iter/sec",
            "range": "stddev: 0.0005295348825277263",
            "extra": "mean: 6.078447872340434 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.4223175938796,
            "unit": "iter/sec",
            "range": "stddev: 0.000699317717804292",
            "extra": "mean: 4.578286738351232 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.1765643089401,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942835874322825",
            "extra": "mean: 2.0611053244592457 msec\nrounds: 601"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.31388656313526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006031466241146644",
            "extra": "mean: 8.452093233082786 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.24915861593516,
            "unit": "iter/sec",
            "range": "stddev: 0.0007327819288342392",
            "extra": "mean: 6.400034463276875 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.04202148292012,
            "unit": "iter/sec",
            "range": "stddev: 0.0004057552136907381",
            "extra": "mean: 4.443614545454554 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.8818991560133,
            "unit": "iter/sec",
            "range": "stddev: 0.00030448739960539564",
            "extra": "mean: 2.033008333333331 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.341878718092058,
            "unit": "iter/sec",
            "range": "stddev: 0.0038959533325288575",
            "extra": "mean: 54.520042105262654 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.77971799019958,
            "unit": "iter/sec",
            "range": "stddev: 0.0013586139066998001",
            "extra": "mean: 50.55683809523868 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.0337517669959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007463651785855725",
            "extra": "mean: 5.680728780487694 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.938359275251,
            "unit": "iter/sec",
            "range": "stddev: 0.0004569551701714275",
            "extra": "mean: 3.1752245179064267 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 647.1426702804022,
            "unit": "iter/sec",
            "range": "stddev: 0.00024661750996127967",
            "extra": "mean: 1.5452543093267321 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 628.0435490886359,
            "unit": "iter/sec",
            "range": "stddev: 0.0002405338909761583",
            "extra": "mean: 1.5922462724935496 msec\nrounds: 778"
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
        "date": 1672680027184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.75377443071676,
            "unit": "iter/sec",
            "range": "stddev: 0.00001479421967055088",
            "extra": "mean: 4.790332547169775 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.63991792415356,
            "unit": "iter/sec",
            "range": "stddev: 0.000018117803212887213",
            "extra": "mean: 3.6411312949640733 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.5755486967899,
            "unit": "iter/sec",
            "range": "stddev: 0.000011062127586126838",
            "extra": "mean: 2.372054079254086 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 843.8930878156407,
            "unit": "iter/sec",
            "range": "stddev: 0.000007481781153518542",
            "extra": "mean: 1.1849842289719794 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.78548990225593,
            "unit": "iter/sec",
            "range": "stddev: 0.000011673102856916843",
            "extra": "mean: 5.107630808081031 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.02816584235586,
            "unit": "iter/sec",
            "range": "stddev: 0.000023041751219147948",
            "extra": "mean: 3.921135521235502 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.05984502307047,
            "unit": "iter/sec",
            "range": "stddev: 0.000011803319405507048",
            "extra": "mean: 2.4386684337349314 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.9211080859039,
            "unit": "iter/sec",
            "range": "stddev: 0.000007659709676661579",
            "extra": "mean: 1.2675538653367 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.08595707161769,
            "unit": "iter/sec",
            "range": "stddev: 0.000046158343040316945",
            "extra": "mean: 35.60498214285714 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.13743252800524,
            "unit": "iter/sec",
            "range": "stddev: 0.00021187049063761218",
            "extra": "mean: 34.320113793102976 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.6255198860791,
            "unit": "iter/sec",
            "range": "stddev: 0.00001070301237204729",
            "extra": "mean: 3.1885160377358277 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.012660962624,
            "unit": "iter/sec",
            "range": "stddev: 0.000010918087195353815",
            "extra": "mean: 1.8214516187051626 msec\nrounds: 556"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1202.49303301356,
            "unit": "iter/sec",
            "range": "stddev: 0.000015016167389776089",
            "extra": "mean: 831.6056497174926 usec\nrounds: 1239"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.5516992337139,
            "unit": "iter/sec",
            "range": "stddev: 0.000013093711813065266",
            "extra": "mean: 916.1270150575695 usec\nrounds: 1129"
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
        "date": 1672680462873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.43582251146333,
            "unit": "iter/sec",
            "range": "stddev: 0.000013734989311676542",
            "extra": "mean: 4.797639810426555 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.90156560368996,
            "unit": "iter/sec",
            "range": "stddev: 0.000014001824107607685",
            "extra": "mean: 3.637665714285686 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.1844446077372,
            "unit": "iter/sec",
            "range": "stddev: 0.000011724982458461515",
            "extra": "mean: 2.385584705882338 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 849.8260236561273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063335156496641",
            "extra": "mean: 1.1767114352391719 msec\nrounds: 857"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.32563680649776,
            "unit": "iter/sec",
            "range": "stddev: 0.000013094253518485836",
            "extra": "mean: 5.093578282828232 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.45505456440867,
            "unit": "iter/sec",
            "range": "stddev: 0.000011667502001845814",
            "extra": "mean: 3.914582945736417 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.3231460546513,
            "unit": "iter/sec",
            "range": "stddev: 0.000011456302221475148",
            "extra": "mean: 2.479401466992667 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.7754470713484,
            "unit": "iter/sec",
            "range": "stddev: 0.000006768298315184613",
            "extra": "mean: 1.2661826899129467 msec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.078214674797998,
            "unit": "iter/sec",
            "range": "stddev: 0.00003679549086668001",
            "extra": "mean: 35.61480000000015 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.13938826375892,
            "unit": "iter/sec",
            "range": "stddev: 0.00008317831252703712",
            "extra": "mean: 34.317810344828494 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.3105891905402,
            "unit": "iter/sec",
            "range": "stddev: 0.000015188451673806015",
            "extra": "mean: 3.2122261006288535 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.8915770567162,
            "unit": "iter/sec",
            "range": "stddev: 0.000009068886031567475",
            "extra": "mean: 1.8054074866309155 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1202.0648608070067,
            "unit": "iter/sec",
            "range": "stddev: 0.0000138853329872368",
            "extra": "mean: 831.901865369103 usec\nrounds: 1233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1101.7380720323247,
            "unit": "iter/sec",
            "range": "stddev: 0.000013734898576557166",
            "extra": "mean: 907.6567519858389 usec\nrounds: 1133"
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
        "date": 1672745075083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.3169660241008,
            "unit": "iter/sec",
            "range": "stddev: 0.00003153725309678793",
            "extra": "mean: 4.732227699530522 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.05760941001915,
            "unit": "iter/sec",
            "range": "stddev: 0.00006239817522978211",
            "extra": "mean: 3.596377031802128 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 412.7601516447448,
            "unit": "iter/sec",
            "range": "stddev: 0.000021313929137409864",
            "extra": "mean: 2.4227144893111725 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 844.5338329637075,
            "unit": "iter/sec",
            "range": "stddev: 0.000010642423162324699",
            "extra": "mean: 1.184085185185202 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.3726792443709,
            "unit": "iter/sec",
            "range": "stddev: 0.0000320705648103135",
            "extra": "mean: 5.092358080808053 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.64294907816026,
            "unit": "iter/sec",
            "range": "stddev: 0.000019034516545152945",
            "extra": "mean: 3.896463953488359 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.89844592258237,
            "unit": "iter/sec",
            "range": "stddev: 0.00001711236604030529",
            "extra": "mean: 2.494397297297357 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 778.2391477278261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001109754957783128",
            "extra": "mean: 1.2849520650813242 msec\nrounds: 799"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.72795772065373,
            "unit": "iter/sec",
            "range": "stddev: 0.00009965721773238267",
            "extra": "mean: 38.86822307692251 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.82845883421384,
            "unit": "iter/sec",
            "range": "stddev: 0.00041125635966214813",
            "extra": "mean: 37.27385185185212 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 304.9021401385277,
            "unit": "iter/sec",
            "range": "stddev: 0.000013156351511869106",
            "extra": "mean: 3.2797408360127123 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.4407343938549,
            "unit": "iter/sec",
            "range": "stddev: 0.000015155144976732154",
            "extra": "mean: 1.9552607619046452 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1169.845890178079,
            "unit": "iter/sec",
            "range": "stddev: 0.000016990632547766212",
            "extra": "mean: 854.813448844767 usec\nrounds: 1212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1062.9531834766763,
            "unit": "iter/sec",
            "range": "stddev: 0.000015113075570089544",
            "extra": "mean: 940.7752058554726 usec\nrounds: 1093"
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
        "date": 1672777832893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.87335745016864,
            "unit": "iter/sec",
            "range": "stddev: 0.0001324699437109708",
            "extra": "mean: 4.833875238095261 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.7944957349763,
            "unit": "iter/sec",
            "range": "stddev: 0.000012676513569900789",
            "extra": "mean: 3.6258881720429486 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.7639477521805,
            "unit": "iter/sec",
            "range": "stddev: 0.000045014893554584884",
            "extra": "mean: 2.3936962616822184 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 851.4200280142626,
            "unit": "iter/sec",
            "range": "stddev: 0.000007276427096318743",
            "extra": "mean: 1.1745084295612183 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.38478970575468,
            "unit": "iter/sec",
            "range": "stddev: 0.00002374880452423045",
            "extra": "mean: 5.06624649999992 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.47807945516854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000131400853511142",
            "extra": "mean: 3.883825769230648 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.63554546510335,
            "unit": "iter/sec",
            "range": "stddev: 0.00001531682353391128",
            "extra": "mean: 2.453171739130408 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.8695712811331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063935207223422575",
            "extra": "mean: 1.261241490683243 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.22293010258765,
            "unit": "iter/sec",
            "range": "stddev: 0.00005376905383964929",
            "extra": "mean: 35.43218214285674 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.33467777420995,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812107383612488",
            "extra": "mean: 34.08934666666651 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.65701219830027,
            "unit": "iter/sec",
            "range": "stddev: 0.000012409903745729243",
            "extra": "mean: 3.1881958990535173 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.1591862928776,
            "unit": "iter/sec",
            "range": "stddev: 0.000010954541014933457",
            "extra": "mean: 1.8176557347670086 msec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1176.389618695191,
            "unit": "iter/sec",
            "range": "stddev: 0.000014581138526324358",
            "extra": "mean: 850.0585045192458 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1066.5308617370797,
            "unit": "iter/sec",
            "range": "stddev: 0.00006648209895378353",
            "extra": "mean: 937.6193749998762 usec\nrounds: 1120"
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
        "date": 1672778507370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.7293791943122,
            "unit": "iter/sec",
            "range": "stddev: 0.000015400502135806647",
            "extra": "mean: 4.790892417061573 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.44847751037395,
            "unit": "iter/sec",
            "range": "stddev: 0.000014633909555840882",
            "extra": "mean: 3.630443010752666 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.8615675708095,
            "unit": "iter/sec",
            "range": "stddev: 0.000013080099067025984",
            "extra": "mean: 2.3537078341013635 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 854.0021962880172,
            "unit": "iter/sec",
            "range": "stddev: 0.00000763056119099258",
            "extra": "mean: 1.1709571759259787 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.10218193105945,
            "unit": "iter/sec",
            "range": "stddev: 0.000014365704783833347",
            "extra": "mean: 5.073510552763797 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.29563109596404,
            "unit": "iter/sec",
            "range": "stddev: 0.000016354091189509455",
            "extra": "mean: 3.9017442307690877 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.1158947111842,
            "unit": "iter/sec",
            "range": "stddev: 0.000011801773241918146",
            "extra": "mean: 2.4502843750000984 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.8490914057784,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024757348299027",
            "extra": "mean: 1.2612740694788818 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.08294297206791,
            "unit": "iter/sec",
            "range": "stddev: 0.00005597923875861027",
            "extra": "mean: 35.60880357142869 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.199776108199647,
            "unit": "iter/sec",
            "range": "stddev: 0.00004509293905616598",
            "extra": "mean: 34.24683793103427 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.87619089693425,
            "unit": "iter/sec",
            "range": "stddev: 0.00001263033871777915",
            "extra": "mean: 3.1859695924765585 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 551.921769959017,
            "unit": "iter/sec",
            "range": "stddev: 0.000010021022720154249",
            "extra": "mean: 1.8118509803921217 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1193.811528697977,
            "unit": "iter/sec",
            "range": "stddev: 0.000014454384794926031",
            "extra": "mean: 837.653160453764 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.4565371786296,
            "unit": "iter/sec",
            "range": "stddev: 0.000016503575859201",
            "extra": "mean: 916.2068904593848 usec\nrounds: 1132"
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
        "date": 1672840676706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.84463977961826,
            "unit": "iter/sec",
            "range": "stddev: 0.000013577584279048718",
            "extra": "mean: 4.788248341232231 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.5611729524355,
            "unit": "iter/sec",
            "range": "stddev: 0.000016941336265140078",
            "extra": "mean: 3.6158365591397947 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.0883918962932,
            "unit": "iter/sec",
            "range": "stddev: 0.000011695931992586094",
            "extra": "mean: 2.386131468531483 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 856.5022284352623,
            "unit": "iter/sec",
            "range": "stddev: 0.00000771167948062135",
            "extra": "mean: 1.1675392857142854 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.57613596399742,
            "unit": "iter/sec",
            "range": "stddev: 0.000014520285584860034",
            "extra": "mean: 5.061339999999905 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.2437414826377,
            "unit": "iter/sec",
            "range": "stddev: 0.000018473803558657596",
            "extra": "mean: 3.872310687022912 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.4964951978155,
            "unit": "iter/sec",
            "range": "stddev: 0.000009587935655576529",
            "extra": "mean: 2.466112560386409 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.4587105849022,
            "unit": "iter/sec",
            "range": "stddev: 0.000006941995307179736",
            "extra": "mean: 1.2618953980099665 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.285382538585154,
            "unit": "iter/sec",
            "range": "stddev: 0.00013031045692986145",
            "extra": "mean: 35.35394999999956 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.331505654626,
            "unit": "iter/sec",
            "range": "stddev: 0.00007035640467066558",
            "extra": "mean: 34.09303333333268 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.85684919800883,
            "unit": "iter/sec",
            "range": "stddev: 0.000011786270715117793",
            "extra": "mean: 3.1861659305994974 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.8673837280776,
            "unit": "iter/sec",
            "range": "stddev: 0.000008457485014526155",
            "extra": "mean: 1.802232442067756 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1178.0071589872448,
            "unit": "iter/sec",
            "range": "stddev: 0.000016514025977168585",
            "extra": "mean: 848.8912757200212 usec\nrounds: 1215"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1082.708079880596,
            "unit": "iter/sec",
            "range": "stddev: 0.000015006270359152897",
            "extra": "mean: 923.6099910792971 usec\nrounds: 1121"
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
        "date": 1672841049362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.10211900964579,
            "unit": "iter/sec",
            "range": "stddev: 0.0007946122670159012",
            "extra": "mean: 7.993469718309861 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.4887151685854,
            "unit": "iter/sec",
            "range": "stddev: 0.0010701385519902018",
            "extra": "mean: 6.1923831578946835 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.62666698424204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005129074377927502",
            "extra": "mean: 4.24400180505408 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.0008782977407,
            "unit": "iter/sec",
            "range": "stddev: 0.00040944783403815707",
            "extra": "mean: 1.9880680991735191 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.21605590349665,
            "unit": "iter/sec",
            "range": "stddev: 0.0010737040372822042",
            "extra": "mean: 8.832669465648777 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.17297704425727,
            "unit": "iter/sec",
            "range": "stddev: 0.0007165397741276822",
            "extra": "mean: 6.614938857142708 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.529449431998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744292565168043",
            "extra": "mean: 4.300530545454393 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 475.05892726744827,
            "unit": "iter/sec",
            "range": "stddev: 0.00030863998225946716",
            "extra": "mean: 2.1050020168066874 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.370950522870125,
            "unit": "iter/sec",
            "range": "stddev: 0.0027393543413728994",
            "extra": "mean: 57.567373684210715 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.388572605439848,
            "unit": "iter/sec",
            "range": "stddev: 0.0019079133448814886",
            "extra": "mean: 54.381600000000674 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.71503851580115,
            "unit": "iter/sec",
            "range": "stddev: 0.000642014182041942",
            "extra": "mean: 5.892229756097284 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.5560243614251,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614877643126901",
            "extra": "mean: 3.372044126074669 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 644.247079611302,
            "unit": "iter/sec",
            "range": "stddev: 0.00036652829472941755",
            "extra": "mean: 1.5521995079951885 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 564.9027852637313,
            "unit": "iter/sec",
            "range": "stddev: 0.00035357873396485895",
            "extra": "mean: 1.7702160904254325 msec\nrounds: 752"
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
        "date": 1672841275206,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.2838073655088,
            "unit": "iter/sec",
            "range": "stddev: 0.00020154023650859672",
            "extra": "mean: 4.732970370370398 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.0094694233387,
            "unit": "iter/sec",
            "range": "stddev: 0.000052144377095761234",
            "extra": "mean: 3.558598939929342 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.24680142628597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000112938640771996",
            "extra": "mean: 2.346058660508066 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.6587493724218,
            "unit": "iter/sec",
            "range": "stddev: 0.000008175970800963148",
            "extra": "mean: 1.1646070114942426 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.69297772323972,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734282061506615",
            "extra": "mean: 5.032890499999976 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.24741824316686,
            "unit": "iter/sec",
            "range": "stddev: 0.00001297194375503776",
            "extra": "mean: 3.8722555555556255 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.54209111833103,
            "unit": "iter/sec",
            "range": "stddev: 0.000011050006528145521",
            "extra": "mean: 2.459769902912545 msec\nrounds: 412"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.2072485593019,
            "unit": "iter/sec",
            "range": "stddev: 0.000008451310397440709",
            "extra": "mean: 1.2654907960198924 msec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.8575738972171,
            "unit": "iter/sec",
            "range": "stddev: 0.00009447367602433486",
            "extra": "mean: 38.673388461537925 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.138572263836735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000890544273220722",
            "extra": "mean: 36.84792222222173 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 309.43328628231956,
            "unit": "iter/sec",
            "range": "stddev: 0.000012673481462841894",
            "extra": "mean: 3.2317143769969974 msec\nrounds: 313"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 514.3705594355212,
            "unit": "iter/sec",
            "range": "stddev: 0.000015397468693138826",
            "extra": "mean: 1.9441237093690136 msec\nrounds: 523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1158.697864671505,
            "unit": "iter/sec",
            "range": "stddev: 0.000015182411195889394",
            "extra": "mean: 863.0377516778316 usec\nrounds: 1192"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1053.2541345544919,
            "unit": "iter/sec",
            "range": "stddev: 0.000012952311352452335",
            "extra": "mean: 949.4384756656877 usec\nrounds: 1089"
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
        "date": 1672858401958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.68263555307163,
            "unit": "iter/sec",
            "range": "stddev: 0.0012519711040109998",
            "extra": "mean: 7.5940156862745445 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.86577787897377,
            "unit": "iter/sec",
            "range": "stddev: 0.0009651449186750449",
            "extra": "mean: 5.686154589371981 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 237.91340593901748,
            "unit": "iter/sec",
            "range": "stddev: 0.001211177874883035",
            "extra": "mean: 4.2032099706744654 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.2993805011948,
            "unit": "iter/sec",
            "range": "stddev: 0.00031780938739395937",
            "extra": "mean: 1.830498140200276 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.24674493724264,
            "unit": "iter/sec",
            "range": "stddev: 0.0011857169372852118",
            "extra": "mean: 8.529021428571504 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.2295421966316,
            "unit": "iter/sec",
            "range": "stddev: 0.0010323653062573315",
            "extra": "mean: 6.126342000000022 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.80718798597903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004247448604707969",
            "extra": "mean: 3.9871265573772283 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.575372619469,
            "unit": "iter/sec",
            "range": "stddev: 0.00038936131947704184",
            "extra": "mean: 1.9509325914149807 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.73905112378573,
            "unit": "iter/sec",
            "range": "stddev: 0.002590107381126208",
            "extra": "mean: 53.36449499999958 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.871907490851306,
            "unit": "iter/sec",
            "range": "stddev: 0.002347558158004701",
            "extra": "mean: 50.32229545454472 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.16265223666267,
            "unit": "iter/sec",
            "range": "stddev: 0.0004737204662490571",
            "extra": "mean: 5.459628301887165 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.3258274159147,
            "unit": "iter/sec",
            "range": "stddev: 0.00033446285347523417",
            "extra": "mean: 3.0457549071618595 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 660.0618433943501,
            "unit": "iter/sec",
            "range": "stddev: 0.00032267929187286185",
            "extra": "mean: 1.515009555555472 msec\nrounds: 900"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 625.7140340331022,
            "unit": "iter/sec",
            "range": "stddev: 0.00033008491781675307",
            "extra": "mean: 1.5981741588156497 msec\nrounds: 743"
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
        "date": 1672938250284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.143063285921,
            "unit": "iter/sec",
            "range": "stddev: 0.00006214545457073898",
            "extra": "mean: 4.8509999999999875 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.74605192877897,
            "unit": "iter/sec",
            "range": "stddev: 0.000014129554636477255",
            "extra": "mean: 3.6397247311827616 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.2533145358826,
            "unit": "iter/sec",
            "range": "stddev: 0.000011459500141089442",
            "extra": "mean: 2.3515395784542923 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 864.5211834519916,
            "unit": "iter/sec",
            "range": "stddev: 0.00000831958735918194",
            "extra": "mean: 1.1567096551724134 msec\nrounds: 870"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.09546204398663,
            "unit": "iter/sec",
            "range": "stddev: 0.000015133783282891948",
            "extra": "mean: 5.099557070707163 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.64012187814927,
            "unit": "iter/sec",
            "range": "stddev: 0.00004042388230601785",
            "extra": "mean: 3.911749034749129 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.6083235851496,
            "unit": "iter/sec",
            "range": "stddev: 0.000010840807127067025",
            "extra": "mean: 2.4593692307692905 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.6272525250251,
            "unit": "iter/sec",
            "range": "stddev: 0.000007907846302881584",
            "extra": "mean: 1.2600373749998806 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.247841889231573,
            "unit": "iter/sec",
            "range": "stddev: 0.00004335083848197134",
            "extra": "mean: 35.40093448275822 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.340685457093052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388605405166766",
            "extra": "mean: 34.082366666667355 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 312.8988349700438,
            "unit": "iter/sec",
            "range": "stddev: 0.000014044128958603803",
            "extra": "mean: 3.195921135646726 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.7913302234165,
            "unit": "iter/sec",
            "range": "stddev: 0.000008492226935319258",
            "extra": "mean: 1.802479500891437 msec\nrounds: 561"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1186.7845868748445,
            "unit": "iter/sec",
            "range": "stddev: 0.000014673049419166227",
            "extra": "mean: 842.6128979592635 usec\nrounds: 1225"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1098.8673900034964,
            "unit": "iter/sec",
            "range": "stddev: 0.000015106817365942703",
            "extra": "mean: 910.0279151944059 usec\nrounds: 1132"
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
        "date": 1672947600426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.60538290547244,
            "unit": "iter/sec",
            "range": "stddev: 0.00095366152885915",
            "extra": "mean: 7.836660000000004 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.8176642463079,
            "unit": "iter/sec",
            "range": "stddev: 0.000609585010617016",
            "extra": "mean: 5.720245744680915 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.57098274942038,
            "unit": "iter/sec",
            "range": "stddev: 0.00038356963654371845",
            "extra": "mean: 3.912807272727318 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 545.5617464428412,
            "unit": "iter/sec",
            "range": "stddev: 0.00040186602436327384",
            "extra": "mean: 1.8329730897009848 msec\nrounds: 602"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.24591304665157,
            "unit": "iter/sec",
            "range": "stddev: 0.001341672544272348",
            "extra": "mean: 8.456951908396782 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.24719457526055,
            "unit": "iter/sec",
            "range": "stddev: 0.0009470519953918736",
            "extra": "mean: 6.240358857142719 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 238.33028647033788,
            "unit": "iter/sec",
            "range": "stddev: 0.0007852814894855688",
            "extra": "mean: 4.1958578358208705 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.01677499815986,
            "unit": "iter/sec",
            "range": "stddev: 0.0003650941808308228",
            "extra": "mean: 1.9607198214286343 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.354223120516103,
            "unit": "iter/sec",
            "range": "stddev: 0.001743015789674066",
            "extra": "mean: 51.66831000000034 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.194123221655147,
            "unit": "iter/sec",
            "range": "stddev: 0.001444599660311403",
            "extra": "mean: 49.51935714285684 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.3185777154772,
            "unit": "iter/sec",
            "range": "stddev: 0.00047888727076412206",
            "extra": "mean: 5.454984500000144 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.35015478966295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003878758099979661",
            "extra": "mean: 3.083087784090893 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 662.5797595804127,
            "unit": "iter/sec",
            "range": "stddev: 0.00044226576969837953",
            "extra": "mean: 1.509252260638422 msec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 616.958134234646,
            "unit": "iter/sec",
            "range": "stddev: 0.00043048730194919916",
            "extra": "mean: 1.6208555240794875 msec\nrounds: 706"
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
        "date": 1673019817668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.00769211994447,
            "unit": "iter/sec",
            "range": "stddev: 0.0005508784434675599",
            "extra": "mean: 7.2988602649006165 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.4357525344648,
            "unit": "iter/sec",
            "range": "stddev: 0.0004188378516134276",
            "extra": "mean: 5.6042580357142855 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.9248925421576,
            "unit": "iter/sec",
            "range": "stddev: 0.0004419762846932173",
            "extra": "mean: 3.8621238390093464 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.6479294531779,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479143176008335",
            "extra": "mean: 1.8394257493187527 msec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.95383612418713,
            "unit": "iter/sec",
            "range": "stddev: 0.00083639103053057",
            "extra": "mean: 8.067519580419585 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.32856314583398,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183123593578738",
            "extra": "mean: 6.608137810945241 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 236.20703383317928,
            "unit": "iter/sec",
            "range": "stddev: 0.00042722853713698656",
            "extra": "mean: 4.233574181818176 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.4704592126746,
            "unit": "iter/sec",
            "range": "stddev: 0.00030877988860865277",
            "extra": "mean: 2.0514063593004677 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.21954423263538,
            "unit": "iter/sec",
            "range": "stddev: 0.0023446779159980685",
            "extra": "mean: 54.886114999999336 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.566060190232516,
            "unit": "iter/sec",
            "range": "stddev: 0.0016570414650527504",
            "extra": "mean: 51.10890952380927 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.86169834229133,
            "unit": "iter/sec",
            "range": "stddev: 0.0006135969098913085",
            "extra": "mean: 5.4686137614676475 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.4159353341576,
            "unit": "iter/sec",
            "range": "stddev: 0.00043174720405942334",
            "extra": "mean: 3.130714186046629 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 679.2784610198626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002491422997073966",
            "extra": "mean: 1.4721503144654535 msec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 630.7501461452599,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775878265220655",
            "extra": "mean: 1.5854138221153942 msec\nrounds: 832"
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
        "date": 1673244593084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.63554506617038,
            "unit": "iter/sec",
            "range": "stddev: 0.000014202084657590058",
            "extra": "mean: 4.747536792452829 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.39388208580925,
            "unit": "iter/sec",
            "range": "stddev: 0.000022115023407935713",
            "extra": "mean: 3.6180250896057826 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.58540707189843,
            "unit": "iter/sec",
            "range": "stddev: 0.000012819889118062109",
            "extra": "mean: 2.366385547785517 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 837.9902487695451,
            "unit": "iter/sec",
            "range": "stddev: 0.000011065111967233848",
            "extra": "mean: 1.193331308411214 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.28690032464152,
            "unit": "iter/sec",
            "range": "stddev: 0.000013872410120838449",
            "extra": "mean: 5.043197500000094 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.05649945750326,
            "unit": "iter/sec",
            "range": "stddev: 0.000016185148948341286",
            "extra": "mean: 3.9053880769231024 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.20615955643405,
            "unit": "iter/sec",
            "range": "stddev: 0.000011664963371872729",
            "extra": "mean: 2.473985060240981 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.5351040083885,
            "unit": "iter/sec",
            "range": "stddev: 0.000006597900961999572",
            "extra": "mean: 1.2617737623763547 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.187015208505304,
            "unit": "iter/sec",
            "range": "stddev: 0.00005744979036267943",
            "extra": "mean: 35.47732857142868 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.267047171919938,
            "unit": "iter/sec",
            "range": "stddev: 0.00003927163988848518",
            "extra": "mean: 34.16812068965546 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.4054713349439,
            "unit": "iter/sec",
            "range": "stddev: 0.000011492538871231362",
            "extra": "mean: 3.2215926984126746 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.2668314478349,
            "unit": "iter/sec",
            "range": "stddev: 0.000010758551263921133",
            "extra": "mean: 1.8407160940323692 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1188.1386366907411,
            "unit": "iter/sec",
            "range": "stddev: 0.000014371924869419451",
            "extra": "mean: 841.6526229508421 usec\nrounds: 1220"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1079.3640406432428,
            "unit": "iter/sec",
            "range": "stddev: 0.000012917757844945224",
            "extra": "mean: 926.4714798207042 usec\nrounds: 1115"
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
        "date": 1673253666766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.81587688313607,
            "unit": "iter/sec",
            "range": "stddev: 0.00020375017582059896",
            "extra": "mean: 5.213332786885261 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 250.53790650687176,
            "unit": "iter/sec",
            "range": "stddev: 0.00015535331041679947",
            "extra": "mean: 3.991411974110081 msec\nrounds: 309"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.07891896432363,
            "unit": "iter/sec",
            "range": "stddev: 0.00012522012444091948",
            "extra": "mean: 2.61042816635162 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.1454472874623,
            "unit": "iter/sec",
            "range": "stddev: 0.00006415035381022802",
            "extra": "mean: 1.3224968867925115 msec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 176.45884975299296,
            "unit": "iter/sec",
            "range": "stddev: 0.00020843365699438975",
            "extra": "mean: 5.667043627450817 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.74490989029886,
            "unit": "iter/sec",
            "range": "stddev: 0.00017512052005157935",
            "extra": "mean: 4.333790073529344 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 364.4957316174421,
            "unit": "iter/sec",
            "range": "stddev: 0.00012592306401668573",
            "extra": "mean: 2.743516352201221 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 710.2085449087089,
            "unit": "iter/sec",
            "range": "stddev: 0.0000893966918705894",
            "extra": "mean: 1.4080371282051265 msec\nrounds: 975"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.96670277861656,
            "unit": "iter/sec",
            "range": "stddev: 0.0007993690378521147",
            "extra": "mean: 43.541295833334104 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.193968629727824,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236610975150057",
            "extra": "mean: 41.332615384615785 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 276.3189349197866,
            "unit": "iter/sec",
            "range": "stddev: 0.00015089072201199746",
            "extra": "mean: 3.6190064220184284 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 452.1000695112557,
            "unit": "iter/sec",
            "range": "stddev: 0.00008502285623683497",
            "extra": "mean: 2.2118996820351153 msec\nrounds: 629"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1034.5700576116647,
            "unit": "iter/sec",
            "range": "stddev: 0.00004138105679423855",
            "extra": "mean: 966.5850974930876 usec\nrounds: 1436"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 945.8847171471926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006304603527514373",
            "extra": "mean: 1.0572112878787385 msec\nrounds: 1320"
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
        "date": 1673260990721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.7497532727347,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041447508498207",
            "extra": "mean: 7.707143750000006 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.1597941230274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007226657055773169",
            "extra": "mean: 5.741853365384634 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.19296841628181,
            "unit": "iter/sec",
            "range": "stddev: 0.0005860758913447028",
            "extra": "mean: 3.918603267973892 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 544.9702698625075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381216355545608",
            "extra": "mean: 1.834962483829244 msec\nrounds: 773"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.7227313879255,
            "unit": "iter/sec",
            "range": "stddev: 0.0009764231642575485",
            "extra": "mean: 8.422986805555446 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.46865157613476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591613643723757",
            "extra": "mean: 6.193152604166548 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.9351996949201,
            "unit": "iter/sec",
            "range": "stddev: 0.0006312286345272454",
            "extra": "mean: 4.099449367088717 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 518.7430693102839,
            "unit": "iter/sec",
            "range": "stddev: 0.0002959502109091999",
            "extra": "mean: 1.9277365986394597 msec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.286454452603497,
            "unit": "iter/sec",
            "range": "stddev: 0.003057620674719919",
            "extra": "mean: 51.84986190476337 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.685037675445283,
            "unit": "iter/sec",
            "range": "stddev: 0.0016110076068898483",
            "extra": "mean: 48.34412272727336 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.64642847173351,
            "unit": "iter/sec",
            "range": "stddev: 0.0005101069726120734",
            "extra": "mean: 5.085269067796686 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.57028046903014,
            "unit": "iter/sec",
            "range": "stddev: 0.0004842332112927622",
            "extra": "mean: 3.034254176610959 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 683.885705601449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003622426267048766",
            "extra": "mean: 1.462232638888894 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 633.30105993695,
            "unit": "iter/sec",
            "range": "stddev: 0.00024224805838042333",
            "extra": "mean: 1.5790278325123246 msec\nrounds: 812"
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
        "date": 1673268601608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.04916208987308,
            "unit": "iter/sec",
            "range": "stddev: 0.000012809340034660677",
            "extra": "mean: 4.829770813397127 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.4113984376297,
            "unit": "iter/sec",
            "range": "stddev: 0.000013444198947453721",
            "extra": "mean: 3.670918345323778 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.24575095723634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000118945231709743",
            "extra": "mean: 2.3966691037735464 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.5349776616529,
            "unit": "iter/sec",
            "range": "stddev: 0.00002650865490871728",
            "extra": "mean: 1.175730600461919 msec\nrounds: 866"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.86758955254072,
            "unit": "iter/sec",
            "range": "stddev: 0.000027889763036310118",
            "extra": "mean: 5.1054898989899185 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.71070857437752,
            "unit": "iter/sec",
            "range": "stddev: 0.000012622425016945768",
            "extra": "mean: 3.9106692307691686 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.75172493678485,
            "unit": "iter/sec",
            "range": "stddev: 0.000012256735860563182",
            "extra": "mean: 2.458502173913127 msec\nrounds: 414"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.8658110298354,
            "unit": "iter/sec",
            "range": "stddev: 0.000007015218229963031",
            "extra": "mean: 1.2612474722565257 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.898113300415552,
            "unit": "iter/sec",
            "range": "stddev: 0.00008332987572184048",
            "extra": "mean: 35.84471785714286 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.04666346485612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004682767354710784",
            "extra": "mean: 34.42736206896573 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.46999484562156,
            "unit": "iter/sec",
            "range": "stddev: 0.000015180329889854427",
            "extra": "mean: 3.210582131661333 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.2389786127013,
            "unit": "iter/sec",
            "range": "stddev: 0.000010321744818731025",
            "extra": "mean: 1.8207010771993206 msec\nrounds: 557"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1198.4783477646736,
            "unit": "iter/sec",
            "range": "stddev: 0.000015966845633095295",
            "extra": "mean: 834.3913779211257 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1097.0225511654994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002330998515306107",
            "extra": "mean: 911.5582892417111 usec\nrounds: 1134"
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
        "date": 1673280831717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.07295834237192,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684626726158568",
            "extra": "mean: 4.829215789473642 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.79596049925243,
            "unit": "iter/sec",
            "range": "stddev: 0.000013711131315993296",
            "extra": "mean: 3.6792305454545207 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.71398209589825,
            "unit": "iter/sec",
            "range": "stddev: 0.000012713947469840616",
            "extra": "mean: 2.3939825882352705 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.3532599109199,
            "unit": "iter/sec",
            "range": "stddev: 0.000006874012863247106",
            "extra": "mean: 1.1691076036866268 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.0497558437876,
            "unit": "iter/sec",
            "range": "stddev: 0.000027447581030017746",
            "extra": "mean: 5.100745959596092 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.32747601651414,
            "unit": "iter/sec",
            "range": "stddev: 0.00001239873806557694",
            "extra": "mean: 3.9319385214009177 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.0100478492185,
            "unit": "iter/sec",
            "range": "stddev: 0.00001312887544118154",
            "extra": "mean: 2.4449277108435483 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 789.5344414539721,
            "unit": "iter/sec",
            "range": "stddev: 0.00000667356819156257",
            "extra": "mean: 1.2665691925464881 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.000271602634538,
            "unit": "iter/sec",
            "range": "stddev: 0.00003894366624034015",
            "extra": "mean: 35.7139392857143 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.976743265855543,
            "unit": "iter/sec",
            "range": "stddev: 0.000205570210938996",
            "extra": "mean: 34.510434482757766 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.81333012871903,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295120984374017",
            "extra": "mean: 3.2070469841273046 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.1637077792215,
            "unit": "iter/sec",
            "range": "stddev: 0.00000971876253789212",
            "extra": "mean: 1.8209506306305783 msec\nrounds: 555"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1195.8896116732803,
            "unit": "iter/sec",
            "range": "stddev: 0.00001543419295412386",
            "extra": "mean: 836.1975806452629 usec\nrounds: 1240"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1100.0387995906156,
            "unit": "iter/sec",
            "range": "stddev: 0.000012873115537805428",
            "extra": "mean: 909.0588444445366 usec\nrounds: 1125"
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
        "date": 1673311633507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.50072556369574,
            "unit": "iter/sec",
            "range": "stddev: 0.000028334810217014736",
            "extra": "mean: 5.47943027027026 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.6633444109959,
            "unit": "iter/sec",
            "range": "stddev: 0.00003145520011995393",
            "extra": "mean: 4.172519591836753 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.307651990173,
            "unit": "iter/sec",
            "range": "stddev: 0.000022758999999061464",
            "extra": "mean: 2.7004572944297065 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 765.1304796966936,
            "unit": "iter/sec",
            "range": "stddev: 0.000014151499600984051",
            "extra": "mean: 1.3069666240409237 msec\nrounds: 782"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.07228515378281,
            "unit": "iter/sec",
            "range": "stddev: 0.000034280457039143595",
            "extra": "mean: 5.949820930232607 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.18607995321216,
            "unit": "iter/sec",
            "range": "stddev: 0.000029316541345006096",
            "extra": "mean: 4.500732000000088 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.2561265890982,
            "unit": "iter/sec",
            "range": "stddev: 0.00002496188366196819",
            "extra": "mean: 2.82281638888888 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 698.0788499560643,
            "unit": "iter/sec",
            "range": "stddev: 0.000012814895389078041",
            "extra": "mean: 1.432502932960851 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.01954234383025,
            "unit": "iter/sec",
            "range": "stddev: 0.00016220850038603434",
            "extra": "mean: 45.41420454545433 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.23422323635292,
            "unit": "iter/sec",
            "range": "stddev: 0.00023713744852432554",
            "extra": "mean: 43.03995833333355 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 265.312146618975,
            "unit": "iter/sec",
            "range": "stddev: 0.000026758174149115752",
            "extra": "mean: 3.7691451851849758 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.07505570764465,
            "unit": "iter/sec",
            "range": "stddev: 0.000027026947554557152",
            "extra": "mean: 2.207139826839792 msec\nrounds: 462"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 984.0747273450045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000209043222538745",
            "extra": "mean: 1.016182991202265 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 893.6376881981308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000214451189933665",
            "extra": "mean: 1.1190217391304642 msec\nrounds: 920"
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
        "date": 1673335040222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.85638670269694,
            "unit": "iter/sec",
            "range": "stddev: 0.00022562578690932635",
            "extra": "mean: 5.054170940170966 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.7928481102685,
            "unit": "iter/sec",
            "range": "stddev: 0.00017437183587420532",
            "extra": "mean: 3.8198140522876116 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.4619428810766,
            "unit": "iter/sec",
            "range": "stddev: 0.00014993240177795325",
            "extra": "mean: 2.5033673866091144 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 835.8043349173523,
            "unit": "iter/sec",
            "range": "stddev: 0.00008624156295743772",
            "extra": "mean: 1.1964522774327129 msec\nrounds: 966"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.4030522038802,
            "unit": "iter/sec",
            "range": "stddev: 0.00023274500354492138",
            "extra": "mean: 5.452471962616789 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.76731526046862,
            "unit": "iter/sec",
            "range": "stddev: 0.00018846353394901184",
            "extra": "mean: 4.153387676056332 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 374.7795321417794,
            "unit": "iter/sec",
            "range": "stddev: 0.00013971679089770577",
            "extra": "mean: 2.668235360360339 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.6664164582274,
            "unit": "iter/sec",
            "range": "stddev: 0.00008458338548492706",
            "extra": "mean: 1.3286098305084926 msec\nrounds: 885"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.91928749226407,
            "unit": "iter/sec",
            "range": "stddev: 0.001024209315694451",
            "extra": "mean: 41.807265384615576 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.85784895663511,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586162404149928",
            "extra": "mean: 40.22874230769183 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 286.2470698473771,
            "unit": "iter/sec",
            "range": "stddev: 0.0001660574642158009",
            "extra": "mean: 3.4934855421688193 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 468.01873392823774,
            "unit": "iter/sec",
            "range": "stddev: 0.00006980646602138588",
            "extra": "mean: 2.136666606498132 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1058.554858593354,
            "unit": "iter/sec",
            "range": "stddev: 0.000053815099300755206",
            "extra": "mean: 944.684153005387 usec\nrounds: 1281"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 960.1807969905404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007072612755028952",
            "extra": "mean: 1.041470526315735 msec\nrounds: 1140"
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
        "date": 1673539401980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.3009139500001,
            "unit": "iter/sec",
            "range": "stddev: 0.000014138131406846863",
            "extra": "mean: 4.755091079812207 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.81199755416554,
            "unit": "iter/sec",
            "range": "stddev: 0.000013035141336741587",
            "extra": "mean: 3.561101408450723 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.18065059495837,
            "unit": "iter/sec",
            "range": "stddev: 0.000012291725847391899",
            "extra": "mean: 2.3354628440367327 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 891.084419147131,
            "unit": "iter/sec",
            "range": "stddev: 0.000007121467929711021",
            "extra": "mean: 1.1222281284607283 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.5060587310011,
            "unit": "iter/sec",
            "range": "stddev: 0.000015276362825977112",
            "extra": "mean: 5.012379104477846 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.29052995111624,
            "unit": "iter/sec",
            "range": "stddev: 0.000018246498293007745",
            "extra": "mean: 3.812566165413492 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.42633844531616,
            "unit": "iter/sec",
            "range": "stddev: 0.000010761328790456604",
            "extra": "mean: 2.3842088785046047 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.5180496948008,
            "unit": "iter/sec",
            "range": "stddev: 0.00000697836582670808",
            "extra": "mean: 1.211360551558753 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.22124325865063,
            "unit": "iter/sec",
            "range": "stddev: 0.00004394308608651579",
            "extra": "mean: 35.43429999999986 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.251805391168602,
            "unit": "iter/sec",
            "range": "stddev: 0.000044721740120829045",
            "extra": "mean: 34.18592413793063 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.4932777631386,
            "unit": "iter/sec",
            "range": "stddev: 0.000010721623409810991",
            "extra": "mean: 3.1299563076922254 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.2634754689656,
            "unit": "iter/sec",
            "range": "stddev: 0.00001057022629679239",
            "extra": "mean: 1.7848745166958375 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1176.0642250405383,
            "unit": "iter/sec",
            "range": "stddev: 0.000016414445543847573",
            "extra": "mean: 850.2936988543551 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1092.8917117386566,
            "unit": "iter/sec",
            "range": "stddev: 0.000013285916870597981",
            "extra": "mean: 915.0037366548629 usec\nrounds: 1124"
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
        "date": 1673622569852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.54462854194222,
            "unit": "iter/sec",
            "range": "stddev: 0.000016426532149416883",
            "extra": "mean: 4.74958685446013 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.2538763418939,
            "unit": "iter/sec",
            "range": "stddev: 0.000014840396427102903",
            "extra": "mean: 3.568193286219016 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.804462466852,
            "unit": "iter/sec",
            "range": "stddev: 0.000040832571838429146",
            "extra": "mean: 2.3266394077449197 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.9544464280805,
            "unit": "iter/sec",
            "range": "stddev: 0.000007699466677183748",
            "extra": "mean: 1.1274536184210742 msec\nrounds: 912"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.32035467952093,
            "unit": "iter/sec",
            "range": "stddev: 0.000013980484426083982",
            "extra": "mean: 4.99200394088675 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.6210335413024,
            "unit": "iter/sec",
            "range": "stddev: 0.000021271136026219246",
            "extra": "mean: 3.8223226415093605 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.0534119130032,
            "unit": "iter/sec",
            "range": "stddev: 0.000013724548303189489",
            "extra": "mean: 2.397774413145429 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.5527417146657,
            "unit": "iter/sec",
            "range": "stddev: 0.000008278950514898469",
            "extra": "mean: 1.220177725118463 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.117638576275315,
            "unit": "iter/sec",
            "range": "stddev: 0.00006244226497336589",
            "extra": "mean: 35.56486428571442 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.151890092952186,
            "unit": "iter/sec",
            "range": "stddev: 0.00005166229580557011",
            "extra": "mean: 34.30309310344724 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.3635525650128,
            "unit": "iter/sec",
            "range": "stddev: 0.000018125772603552166",
            "extra": "mean: 3.141063076923012 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 569.2560358217629,
            "unit": "iter/sec",
            "range": "stddev: 0.000012095870025931617",
            "extra": "mean: 1.7566787826086492 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1185.0989441810207,
            "unit": "iter/sec",
            "range": "stddev: 0.00001630572422624895",
            "extra": "mean: 843.8114006514993 usec\nrounds: 1228"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1099.0795523463382,
            "unit": "iter/sec",
            "range": "stddev: 0.000014099959716034894",
            "extra": "mean: 909.8522466960457 usec\nrounds: 1135"
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
        "date": 1673680110740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.5994444372138,
            "unit": "iter/sec",
            "range": "stddev: 0.00002202915063549026",
            "extra": "mean: 4.725910328638514 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 284.53909094535726,
            "unit": "iter/sec",
            "range": "stddev: 0.000014331854601290761",
            "extra": "mean: 3.514455594405619 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.7234331766652,
            "unit": "iter/sec",
            "range": "stddev: 0.000016607617679472676",
            "extra": "mean: 2.3216754022989057 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 889.890603313936,
            "unit": "iter/sec",
            "range": "stddev: 0.000007218764598285803",
            "extra": "mean: 1.123733632286956 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.89251858927517,
            "unit": "iter/sec",
            "range": "stddev: 0.000014007142916270964",
            "extra": "mean: 4.953130541872003 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.4343371764452,
            "unit": "iter/sec",
            "range": "stddev: 0.000012680502256101396",
            "extra": "mean: 3.78165714285715 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.91947950369166,
            "unit": "iter/sec",
            "range": "stddev: 0.000012139946256075119",
            "extra": "mean: 2.4101061757721176 msec\nrounds: 421"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.664225645601,
            "unit": "iter/sec",
            "range": "stddev: 0.000007453124475283934",
            "extra": "mean: 1.2082194312796015 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.226372686306732,
            "unit": "iter/sec",
            "range": "stddev: 0.00003402648575502083",
            "extra": "mean: 35.42786071428594 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.387016228489987,
            "unit": "iter/sec",
            "range": "stddev: 0.000058325284831484565",
            "extra": "mean: 34.02863333333327 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.50640158545565,
            "unit": "iter/sec",
            "range": "stddev: 0.000011510674000589491",
            "extra": "mean: 3.1396543209876393 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.4316524902833,
            "unit": "iter/sec",
            "range": "stddev: 0.000009972252088836509",
            "extra": "mean: 1.7685603478259198 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1159.155650898348,
            "unit": "iter/sec",
            "range": "stddev: 0.000016498559684279245",
            "extra": "mean: 862.6969115191716 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1082.5410328238472,
            "unit": "iter/sec",
            "range": "stddev: 0.00001340444864419847",
            "extra": "mean: 923.7525134649761 usec\nrounds: 1114"
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
        "date": 1673691426679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.29682453321828,
            "unit": "iter/sec",
            "range": "stddev: 0.000019233357673050835",
            "extra": "mean: 4.710386046511633 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.840813829542,
            "unit": "iter/sec",
            "range": "stddev: 0.000013809457610429253",
            "extra": "mean: 3.560736013986044 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.738790068874,
            "unit": "iter/sec",
            "range": "stddev: 0.000014073901744118553",
            "extra": "mean: 2.343353881278531 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 895.3687349321532,
            "unit": "iter/sec",
            "range": "stddev: 0.000006177743585625425",
            "extra": "mean: 1.1168582964601454 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.0264429985158,
            "unit": "iter/sec",
            "range": "stddev: 0.00001931924945498729",
            "extra": "mean: 4.974469950738685 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.95147210811825,
            "unit": "iter/sec",
            "range": "stddev: 0.00001300960369103379",
            "extra": "mean: 3.8029830827067137 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 422.5156424134057,
            "unit": "iter/sec",
            "range": "stddev: 0.000012090004159486016",
            "extra": "mean: 2.3667762790698315 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.6232031730985,
            "unit": "iter/sec",
            "range": "stddev: 0.00000598708999166991",
            "extra": "mean: 1.2039153206650837 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.217557367302085,
            "unit": "iter/sec",
            "range": "stddev: 0.000050077671946303525",
            "extra": "mean: 35.438928571428335 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.280610732958834,
            "unit": "iter/sec",
            "range": "stddev: 0.00004443706569834489",
            "extra": "mean: 34.152293103448834 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.1716289574849,
            "unit": "iter/sec",
            "range": "stddev: 0.000011992186832930611",
            "extra": "mean: 3.162839130434655 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.1250783053096,
            "unit": "iter/sec",
            "range": "stddev: 0.000009874451669116924",
            "extra": "mean: 1.782133856893663 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1164.0744471278692,
            "unit": "iter/sec",
            "range": "stddev: 0.000015651394785025715",
            "extra": "mean: 859.0515859765743 usec\nrounds: 1198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1083.1171062140006,
            "unit": "iter/sec",
            "range": "stddev: 0.000013464364859538",
            "extra": "mean: 923.2612007167594 usec\nrounds: 1116"
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
        "date": 1673705982273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.99755576511427,
            "unit": "iter/sec",
            "range": "stddev: 0.000024459260036152967",
            "extra": "mean: 4.651215668202778 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 282.75416846612933,
            "unit": "iter/sec",
            "range": "stddev: 0.000009400586152716826",
            "extra": "mean: 3.5366410526315137 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.7024886039828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001085372854588293",
            "extra": "mean: 2.343553240740734 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 881.1105311673917,
            "unit": "iter/sec",
            "range": "stddev: 0.00000773348869841191",
            "extra": "mean: 1.1349313901345504 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.77339932813555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000136275752500534",
            "extra": "mean: 4.95605467980317 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.072957206103,
            "unit": "iter/sec",
            "range": "stddev: 0.000008084251943137689",
            "extra": "mean: 3.801226893939371 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 409.8497865966677,
            "unit": "iter/sec",
            "range": "stddev: 0.000011558477744777727",
            "extra": "mean: 2.4399183132528943 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.2708555889232,
            "unit": "iter/sec",
            "range": "stddev: 0.00000757993492609771",
            "extra": "mean: 1.2235845597105046 msec\nrounds: 829"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.988648158484672,
            "unit": "iter/sec",
            "range": "stddev: 0.00026362209934257115",
            "extra": "mean: 38.47833846153802 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.137902121922018,
            "unit": "iter/sec",
            "range": "stddev: 0.00011755797956000669",
            "extra": "mean: 36.84883214285747 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 310.2914585457729,
            "unit": "iter/sec",
            "range": "stddev: 0.000010320655427459064",
            "extra": "mean: 3.2227764331208104 msec\nrounds: 314"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 521.5179281136288,
            "unit": "iter/sec",
            "range": "stddev: 0.000012098399332017005",
            "extra": "mean: 1.917479622641312 msec\nrounds: 530"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1137.1346846411204,
            "unit": "iter/sec",
            "range": "stddev: 0.00001578135480731393",
            "extra": "mean: 879.4033050848325 usec\nrounds: 1180"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1050.336406918826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000116039594915076",
            "extra": "mean: 952.0759191176772 usec\nrounds: 1088"
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
        "date": 1673706845530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.47738351199155,
            "unit": "iter/sec",
            "range": "stddev: 0.00004517994032803888",
            "extra": "mean: 4.706383255813969 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.7917280283701,
            "unit": "iter/sec",
            "range": "stddev: 0.00004821000181997101",
            "extra": "mean: 3.548720209059233 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 430.5233856202863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011926265393013439",
            "extra": "mean: 2.322754195011329 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.132855299734,
            "unit": "iter/sec",
            "range": "stddev: 0.000007353143908302232",
            "extra": "mean: 1.1109471164309535 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.78413161261028,
            "unit": "iter/sec",
            "range": "stddev: 0.000015801712175481707",
            "extra": "mean: 4.980473267326643 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.53494858396164,
            "unit": "iter/sec",
            "range": "stddev: 0.000021199091318587954",
            "extra": "mean: 3.838256653992559 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.08375140071695,
            "unit": "iter/sec",
            "range": "stddev: 0.000044693912885293516",
            "extra": "mean: 2.3918652582160242 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.579888210757,
            "unit": "iter/sec",
            "range": "stddev: 0.000007629699599054128",
            "extra": "mean: 1.2025302850356552 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.089656565826697,
            "unit": "iter/sec",
            "range": "stddev: 0.00005464636431009212",
            "extra": "mean: 35.600292857142996 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.0841287508243,
            "unit": "iter/sec",
            "range": "stddev: 0.00006104437334636665",
            "extra": "mean: 34.38301379310384 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.2417102262605,
            "unit": "iter/sec",
            "range": "stddev: 0.000014599379884790354",
            "extra": "mean: 3.1521706250000614 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.0980443921595,
            "unit": "iter/sec",
            "range": "stddev: 0.000010113949305069215",
            "extra": "mean: 1.7822197207678836 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1190.008663962007,
            "unit": "iter/sec",
            "range": "stddev: 0.00001858300903556071",
            "extra": "mean: 840.3300163131642 usec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.6265640500699,
            "unit": "iter/sec",
            "range": "stddev: 0.000014429663629253003",
            "extra": "mean: 913.5535650624487 usec\nrounds: 1122"
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
        "date": 1673744465643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.43553711108282,
            "unit": "iter/sec",
            "range": "stddev: 0.00037316899079855605",
            "extra": "mean: 4.75204907749079 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.0802993650237,
            "unit": "iter/sec",
            "range": "stddev: 0.0002301515723967986",
            "extra": "mean: 3.7163627450980337 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.9138342403572,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989743258359491",
            "extra": "mean: 2.445502979515743 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 842.7639339772122,
            "unit": "iter/sec",
            "range": "stddev: 0.00008204939948989708",
            "extra": "mean: 1.1865718971631258 msec\nrounds: 1128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.37259369722025,
            "unit": "iter/sec",
            "range": "stddev: 0.00021750845118500474",
            "extra": "mean: 5.394540692640669 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.26095038298203,
            "unit": "iter/sec",
            "range": "stddev: 0.00018705476343669703",
            "extra": "mean: 4.093982269503489 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 377.6246082357703,
            "unit": "iter/sec",
            "range": "stddev: 0.00011823948177151745",
            "extra": "mean: 2.648132505643406 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.170263747371,
            "unit": "iter/sec",
            "range": "stddev: 0.00012038449082544716",
            "extra": "mean: 1.2752332576617071 msec\nrounds: 881"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.383364310365717,
            "unit": "iter/sec",
            "range": "stddev: 0.0013952200283277965",
            "extra": "mean: 41.0115678571429 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.32144309036264,
            "unit": "iter/sec",
            "range": "stddev: 0.0015154266444080057",
            "extra": "mean: 37.9918379310343 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.4966032361431,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764998945884025",
            "extra": "mean: 3.294929792746066 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 511.67967354834786,
            "unit": "iter/sec",
            "range": "stddev: 0.0001816851766507422",
            "extra": "mean: 1.9543477134147123 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1094.326252019467,
            "unit": "iter/sec",
            "range": "stddev: 0.00007521747796846884",
            "extra": "mean: 913.8042682925706 usec\nrounds: 1476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1016.267967675859,
            "unit": "iter/sec",
            "range": "stddev: 0.00010194416413585756",
            "extra": "mean: 983.9924427480846 usec\nrounds: 1310"
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
        "date": 1673784791949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.47283561445778,
            "unit": "iter/sec",
            "range": "stddev: 0.001083686242477972",
            "extra": "mean: 8.165075912408703 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.1252597524219,
            "unit": "iter/sec",
            "range": "stddev: 0.0008305371839283659",
            "extra": "mean: 6.284357377049183 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 232.01165750766688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005229009079139537",
            "extra": "mean: 4.310128252788138 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 515.0881231380702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002739939891831386",
            "extra": "mean: 1.9414153716216602 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.58190333467628,
            "unit": "iter/sec",
            "range": "stddev: 0.0012906980771592164",
            "extra": "mean: 8.882422222222198 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.0427841938325,
            "unit": "iter/sec",
            "range": "stddev: 0.00048269590292909857",
            "extra": "mean: 6.408498830409387 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.6951125800927,
            "unit": "iter/sec",
            "range": "stddev: 0.000577197713050906",
            "extra": "mean: 4.4703703557312 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.7696290679012,
            "unit": "iter/sec",
            "range": "stddev: 0.00027001188648933155",
            "extra": "mean: 2.0585889692585524 msec\nrounds: 553"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.461259823576473,
            "unit": "iter/sec",
            "range": "stddev: 0.0017187502957620128",
            "extra": "mean: 54.16748421052618 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.345583408144254,
            "unit": "iter/sec",
            "range": "stddev: 0.000993506252609772",
            "extra": "mean: 51.69138500000017 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.0348278496199,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996688621916546",
            "extra": "mean: 5.713148704663189 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.8676283602567,
            "unit": "iter/sec",
            "range": "stddev: 0.0003939162254783227",
            "extra": "mean: 3.1658831428571386 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 629.4665535768036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002110934304055217",
            "extra": "mean: 1.588646758620808 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 572.7806176905369,
            "unit": "iter/sec",
            "range": "stddev: 0.00034197184740294984",
            "extra": "mean: 1.7458691322901607 msec\nrounds: 703"
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
        "date": 1673828469217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.75592438277934,
            "unit": "iter/sec",
            "range": "stddev: 0.000025169956834374576",
            "extra": "mean: 4.8133404761904774 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.6920617175864,
            "unit": "iter/sec",
            "range": "stddev: 0.000012807009976925108",
            "extra": "mean: 3.588189752650198 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.41083627368084,
            "unit": "iter/sec",
            "range": "stddev: 0.000011152182952849643",
            "extra": "mean: 2.3179760820046127 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 889.3447136590929,
            "unit": "iter/sec",
            "range": "stddev: 0.000006683542530235439",
            "extra": "mean: 1.1244233924612093 msec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.06481806729724,
            "unit": "iter/sec",
            "range": "stddev: 0.000014545146965517252",
            "extra": "mean: 5.074472499999985 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.03045223546883,
            "unit": "iter/sec",
            "range": "stddev: 0.000016263154032512375",
            "extra": "mean: 3.8457034220532633 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.5222870441294,
            "unit": "iter/sec",
            "range": "stddev: 0.000013746289387144375",
            "extra": "mean: 2.4008319148935544 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 821.7710475002071,
            "unit": "iter/sec",
            "range": "stddev: 0.000006009649011804226",
            "extra": "mean: 1.2168839520958519 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.14479936376661,
            "unit": "iter/sec",
            "range": "stddev: 0.00003344690018958979",
            "extra": "mean: 35.53054285714298 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.273322080937113,
            "unit": "iter/sec",
            "range": "stddev: 0.00005190869375792714",
            "extra": "mean: 34.160796551724594 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.61572777845424,
            "unit": "iter/sec",
            "range": "stddev: 0.000013249943355225898",
            "extra": "mean: 3.148458695652274 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.7514387144798,
            "unit": "iter/sec",
            "range": "stddev: 0.000009129528121350471",
            "extra": "mean: 1.786507243816275 msec\nrounds: 566"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1178.9584086975071,
            "unit": "iter/sec",
            "range": "stddev: 0.000015063801141732457",
            "extra": "mean: 848.2063426688502 usec\nrounds: 1214"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.350767697421,
            "unit": "iter/sec",
            "range": "stddev: 0.000016366735126026728",
            "extra": "mean: 921.3611209964008 usec\nrounds: 1124"
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
        "date": 1673836988120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.15617958906117,
            "unit": "iter/sec",
            "range": "stddev: 0.0005069682528837026",
            "extra": "mean: 7.344506896551762 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.80699394743405,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482875988537005",
            "extra": "mean: 5.470250226244347 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.31659027622925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005750284916017849",
            "extra": "mean: 3.6321821325648598 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 584.6320419022641,
            "unit": "iter/sec",
            "range": "stddev: 0.00028029199644688464",
            "extra": "mean: 1.7104775796178053 msec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.7362880744095,
            "unit": "iter/sec",
            "range": "stddev: 0.0009095139216581074",
            "extra": "mean: 8.016913245033118 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.64576848093336,
            "unit": "iter/sec",
            "range": "stddev: 0.0008712857406823027",
            "extra": "mean: 6.110759900990118 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.1578644229062,
            "unit": "iter/sec",
            "range": "stddev: 0.0004482292047043751",
            "extra": "mean: 3.8144955223880914 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.126459093861,
            "unit": "iter/sec",
            "range": "stddev: 0.00035992243065982615",
            "extra": "mean: 1.8548523878437617 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.96955566977439,
            "unit": "iter/sec",
            "range": "stddev: 0.001404226785679395",
            "extra": "mean: 52.716047619047536 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.145311796774283,
            "unit": "iter/sec",
            "range": "stddev: 0.0025127290634580934",
            "extra": "mean: 49.639340909090436 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.0747461029108,
            "unit": "iter/sec",
            "range": "stddev: 0.0007792604614456882",
            "extra": "mean: 5.317034959349724 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.1017139327573,
            "unit": "iter/sec",
            "range": "stddev: 0.0003945863936766848",
            "extra": "mean: 3.0020860240961365 msec\nrounds: 415"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 662.7495241977138,
            "unit": "iter/sec",
            "range": "stddev: 0.0004006177081353168",
            "extra": "mean: 1.5088656626506705 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 637.2465181492348,
            "unit": "iter/sec",
            "range": "stddev: 0.00038837663467087874",
            "extra": "mean: 1.569251414514301 msec\nrounds: 813"
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
        "date": 1673869402161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.81814309359785,
            "unit": "iter/sec",
            "range": "stddev: 0.000014449159421705116",
            "extra": "mean: 4.766032075471709 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.3304633383034,
            "unit": "iter/sec",
            "range": "stddev: 0.000017340119119463286",
            "extra": "mean: 3.5928514184396914 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.3665003938866,
            "unit": "iter/sec",
            "range": "stddev: 0.000010936595132835228",
            "extra": "mean: 2.350913856812905 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.4770503080363,
            "unit": "iter/sec",
            "range": "stddev: 0.00000769291294967807",
            "extra": "mean: 1.1204769911504753 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.66211634726616,
            "unit": "iter/sec",
            "range": "stddev: 0.000012563735780823474",
            "extra": "mean: 5.008461386138624 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.5628374424485,
            "unit": "iter/sec",
            "range": "stddev: 0.000013161918714604465",
            "extra": "mean: 3.837845833333289 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.9780036709797,
            "unit": "iter/sec",
            "range": "stddev: 0.000010577855420032023",
            "extra": "mean: 2.3982080378250816 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.5546322755978,
            "unit": "iter/sec",
            "range": "stddev: 0.000006049768978029034",
            "extra": "mean: 1.2201749103941646 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.243848918406872,
            "unit": "iter/sec",
            "range": "stddev: 0.00007543840921328521",
            "extra": "mean: 35.40593928571426 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.374323962172458,
            "unit": "iter/sec",
            "range": "stddev: 0.000054792042483776344",
            "extra": "mean: 34.043336666667656 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.21196009997306,
            "unit": "iter/sec",
            "range": "stddev: 0.000010999996993368274",
            "extra": "mean: 3.1425594427243677 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 562.4555787923026,
            "unit": "iter/sec",
            "range": "stddev: 0.000009861633888861276",
            "extra": "mean: 1.7779181818183527 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.451835265151,
            "unit": "iter/sec",
            "range": "stddev: 0.000014660041407860297",
            "extra": "mean: 851.4610561055781 usec\nrounds: 1212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1088.206765099339,
            "unit": "iter/sec",
            "range": "stddev: 0.000012378857998086086",
            "extra": "mean: 918.9430097953059 usec\nrounds: 1123"
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
        "date": 1673976429200,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.8106887021074,
            "unit": "iter/sec",
            "range": "stddev: 0.00003079201299114583",
            "extra": "mean: 4.766201408450721 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.3462685488637,
            "unit": "iter/sec",
            "range": "stddev: 0.000013314066172411526",
            "extra": "mean: 3.5543389473684166 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.4789782923174,
            "unit": "iter/sec",
            "range": "stddev: 0.000018262411105185",
            "extra": "mean: 2.35029237875289 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.834313463844,
            "unit": "iter/sec",
            "range": "stddev: 0.000006713761394688181",
            "extra": "mean: 1.1063974725274723 msec\nrounds: 910"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.3953976186097,
            "unit": "iter/sec",
            "range": "stddev: 0.000012821813859403046",
            "extra": "mean: 5.01516089108904 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.64689044024806,
            "unit": "iter/sec",
            "range": "stddev: 0.000013782091424204935",
            "extra": "mean: 3.8219449056604344 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.37763857179823,
            "unit": "iter/sec",
            "range": "stddev: 0.000012003699053519042",
            "extra": "mean: 2.401665957446859 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.4024678434286,
            "unit": "iter/sec",
            "range": "stddev: 0.000006330998724037582",
            "extra": "mean: 1.2086016646849456 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.207426128780753,
            "unit": "iter/sec",
            "range": "stddev: 0.000055134028132830786",
            "extra": "mean: 35.45165714285695 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.300387573402876,
            "unit": "iter/sec",
            "range": "stddev: 0.000037986506225531775",
            "extra": "mean: 34.12924137930994 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.25770069617124,
            "unit": "iter/sec",
            "range": "stddev: 0.000011967546026863497",
            "extra": "mean: 3.1421077881620927 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.8658446076373,
            "unit": "iter/sec",
            "range": "stddev: 0.000009563694754317588",
            "extra": "mean: 1.760979304347742 msec\nrounds: 575"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.3857824835757,
            "unit": "iter/sec",
            "range": "stddev: 0.000016112573022403854",
            "extra": "mean: 840.7700972445491 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1087.6865353326107,
            "unit": "iter/sec",
            "range": "stddev: 0.00001467686673422836",
            "extra": "mean: 919.3825311942503 usec\nrounds: 1122"
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
        "date": 1673976823226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.85052168083624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006002143388957901",
            "extra": "mean: 7.70116274509803 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.08151113470942,
            "unit": "iter/sec",
            "range": "stddev: 0.0008683764384758091",
            "extra": "mean: 5.879533838383946 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.4548326654217,
            "unit": "iter/sec",
            "range": "stddev: 0.0007350688660457484",
            "extra": "mean: 4.074069306930678 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.1961037483181,
            "unit": "iter/sec",
            "range": "stddev: 0.00033554999461191804",
            "extra": "mean: 1.7850891737891748 msec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.39398965708607,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491129129190742",
            "extra": "mean: 7.974863888888869 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 159.22575387737584,
            "unit": "iter/sec",
            "range": "stddev: 0.0007326752667678526",
            "extra": "mean: 6.280391052631647 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 245.59800600792022,
            "unit": "iter/sec",
            "range": "stddev: 0.0004864499077278192",
            "extra": "mean: 4.07169429530202 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 520.5976745783746,
            "unit": "iter/sec",
            "range": "stddev: 0.00028890404752462663",
            "extra": "mean: 1.9208691256830666 msec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.238290561502428,
            "unit": "iter/sec",
            "range": "stddev: 0.0028784521287963894",
            "extra": "mean: 54.82969999999947 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.594038944719475,
            "unit": "iter/sec",
            "range": "stddev: 0.002479003694633024",
            "extra": "mean: 51.03593000000117 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.98843686060601,
            "unit": "iter/sec",
            "range": "stddev: 0.0006398750050352771",
            "extra": "mean: 5.291329017857211 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.95852096984214,
            "unit": "iter/sec",
            "range": "stddev: 0.00043749106864250046",
            "extra": "mean: 2.985444278606767 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 659.9913776840941,
            "unit": "iter/sec",
            "range": "stddev: 0.00031449229000888386",
            "extra": "mean: 1.515171309523761 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 599.5596416116794,
            "unit": "iter/sec",
            "range": "stddev: 0.000292696126349769",
            "extra": "mean: 1.6678907828283684 msec\nrounds: 792"
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
        "date": 1673977656832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.0594978706265,
            "unit": "iter/sec",
            "range": "stddev: 0.000013998694338232174",
            "extra": "mean: 4.738000469483595 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.2142068460734,
            "unit": "iter/sec",
            "range": "stddev: 0.000014728749657061835",
            "extra": "mean: 3.607318727915205 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.05255473262343,
            "unit": "iter/sec",
            "range": "stddev: 0.00001242128978802064",
            "extra": "mean: 2.3199027334852187 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.8591718747149,
            "unit": "iter/sec",
            "range": "stddev: 0.000007157003014109373",
            "extra": "mean: 1.1225118756936747 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.81962816336883,
            "unit": "iter/sec",
            "range": "stddev: 0.000013621418952802235",
            "extra": "mean: 5.004513366336657 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.91648343219725,
            "unit": "iter/sec",
            "range": "stddev: 0.000016012364808671768",
            "extra": "mean: 3.8180109433962817 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.91391076445865,
            "unit": "iter/sec",
            "range": "stddev: 0.000011301735406969185",
            "extra": "mean: 2.3814405152224825 msec\nrounds: 427"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 827.8740135985078,
            "unit": "iter/sec",
            "range": "stddev: 0.000006623093098820137",
            "extra": "mean: 1.2079132616487316 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.18878593717841,
            "unit": "iter/sec",
            "range": "stddev: 0.00005670117903282868",
            "extra": "mean: 35.475100000000076 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.30167835972105,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112494514151759",
            "extra": "mean: 34.12773793103365 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.9743837893579,
            "unit": "iter/sec",
            "range": "stddev: 0.000012535473415923662",
            "extra": "mean: 3.135047987616376 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.4723659643906,
            "unit": "iter/sec",
            "range": "stddev: 0.00003908428792205106",
            "extra": "mean: 1.7622003466204923 msec\nrounds: 577"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1168.414311016646,
            "unit": "iter/sec",
            "range": "stddev: 0.000015668657859057915",
            "extra": "mean: 855.8607940447874 usec\nrounds: 1209"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.9975522991224,
            "unit": "iter/sec",
            "range": "stddev: 0.000014649938292388549",
            "extra": "mean: 929.3701438848669 usec\nrounds: 1112"
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
        "date": 1674054496696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.440774579857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002998409439827768",
            "extra": "mean: 5.4217946236559085 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.40214457078054,
            "unit": "iter/sec",
            "range": "stddev: 0.00001637383023030297",
            "extra": "mean: 4.108427235772376 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.8518025079291,
            "unit": "iter/sec",
            "range": "stddev: 0.00002249463242924224",
            "extra": "mean: 2.733347199999997 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 762.5670313529214,
            "unit": "iter/sec",
            "range": "stddev: 0.00001830679321388045",
            "extra": "mean: 1.3113601282051661 msec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.1943513365012,
            "unit": "iter/sec",
            "range": "stddev: 0.000027885978549548478",
            "extra": "mean: 5.807391428571346 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 225.14309176565055,
            "unit": "iter/sec",
            "range": "stddev: 0.000016495953473295415",
            "extra": "mean: 4.441619736842253 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 354.9266373522989,
            "unit": "iter/sec",
            "range": "stddev: 0.00001920132472089816",
            "extra": "mean: 2.817483656509567 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 690.1009033088277,
            "unit": "iter/sec",
            "range": "stddev: 0.00018219532343748061",
            "extra": "mean: 1.4490634560906945 msec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.02351230173315,
            "unit": "iter/sec",
            "range": "stddev: 0.0001103710306899375",
            "extra": "mean: 45.40601818181855 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.249866313268587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000904704515771812",
            "extra": "mean: 43.01100000000021 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.062720775177,
            "unit": "iter/sec",
            "range": "stddev: 0.000018413388371655963",
            "extra": "mean: 3.7585122676581206 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 450.58339728071996,
            "unit": "iter/sec",
            "range": "stddev: 0.000016045986529087394",
            "extra": "mean: 2.2193449781661294 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 976.0811551012105,
            "unit": "iter/sec",
            "range": "stddev: 0.00028369225462917115",
            "extra": "mean: 1.0245049756096452 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 883.6104979472149,
            "unit": "iter/sec",
            "range": "stddev: 0.00001768049677694257",
            "extra": "mean: 1.131720370370405 msec\nrounds: 918"
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
        "date": 1674140466281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.9127282742306,
            "unit": "iter/sec",
            "range": "stddev: 0.000011710599783743779",
            "extra": "mean: 4.631500921658962 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.9776261251513,
            "unit": "iter/sec",
            "range": "stddev: 0.000009936577723869642",
            "extra": "mean: 3.5214041811846535 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.0111448962017,
            "unit": "iter/sec",
            "range": "stddev: 0.000010145757771455261",
            "extra": "mean: 2.3363877598152567 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 899.5464350609749,
            "unit": "iter/sec",
            "range": "stddev: 0.00000818283665040683",
            "extra": "mean: 1.1116713501646147 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.71206046376386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001801721179838584",
            "extra": "mean: 5.007208866995 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.1009635551514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000102567048732191",
            "extra": "mean: 3.800822264150999 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 414.9838823223928,
            "unit": "iter/sec",
            "range": "stddev: 0.000010524354760705532",
            "extra": "mean: 2.409732142857345 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 820.7937567710673,
            "unit": "iter/sec",
            "range": "stddev: 0.000008306551588308033",
            "extra": "mean: 1.2183328537170104 msec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.170379639605404,
            "unit": "iter/sec",
            "range": "stddev: 0.000344773635973053",
            "extra": "mean: 38.21113846153888 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.492928671461993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004954350742979247",
            "extra": "mean: 36.372989285714496 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.83106809149086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001809579281463032",
            "extra": "mean: 3.186427672955792 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.831064087915,
            "unit": "iter/sec",
            "range": "stddev: 0.000010762617359486249",
            "extra": "mean: 1.9090124060152511 msec\nrounds: 532"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1142.7185619126515,
            "unit": "iter/sec",
            "range": "stddev: 0.000017726879334473626",
            "extra": "mean: 875.1061139028205 usec\nrounds: 1194"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1036.252770523425,
            "unit": "iter/sec",
            "range": "stddev: 0.000012129633538955226",
            "extra": "mean: 965.0155140187339 usec\nrounds: 1070"
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
        "date": 1674226252760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.23506495791403,
            "unit": "iter/sec",
            "range": "stddev: 0.0008549304766360082",
            "extra": "mean: 7.234054545454528 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 186.91687153421086,
            "unit": "iter/sec",
            "range": "stddev: 0.0003517725810298316",
            "extra": "mean: 5.349971844660223 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.0704628671624,
            "unit": "iter/sec",
            "range": "stddev: 0.0004657613760516472",
            "extra": "mean: 3.744330201342362 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 610.8272534238897,
            "unit": "iter/sec",
            "range": "stddev: 0.00019377230582060884",
            "extra": "mean: 1.6371240713224038 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.01333227625173,
            "unit": "iter/sec",
            "range": "stddev: 0.000464425973111093",
            "extra": "mean: 7.691518881119089 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.5082404748307,
            "unit": "iter/sec",
            "range": "stddev: 0.00069355029794571",
            "extra": "mean: 5.969855555555532 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.898342747903,
            "unit": "iter/sec",
            "range": "stddev: 0.00036856666456063083",
            "extra": "mean: 3.8925903114186706 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 560.028972165503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002548855841001708",
            "extra": "mean: 1.7856219047618742 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.76278508601585,
            "unit": "iter/sec",
            "range": "stddev: 0.002600201165015691",
            "extra": "mean: 48.16309545454574 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.025370737264478,
            "unit": "iter/sec",
            "range": "stddev: 0.0023053951344039997",
            "extra": "mean: 45.40218695652243 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.7905292665129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006172168456541648",
            "extra": "mean: 5.133719815668232 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 360.34777135906205,
            "unit": "iter/sec",
            "range": "stddev: 0.00027958059476737525",
            "extra": "mean: 2.7750969465649007 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 720.570546197643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002411310284774097",
            "extra": "mean: 1.3877891696751552 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 656.6161309095181,
            "unit": "iter/sec",
            "range": "stddev: 0.0001924350046023809",
            "extra": "mean: 1.5229598435463967 msec\nrounds: 767"
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
        "date": 1674487450382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.8510364981572,
            "unit": "iter/sec",
            "range": "stddev: 0.000011147343475343564",
            "extra": "mean: 4.548534389140267 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 289.2398706860057,
            "unit": "iter/sec",
            "range": "stddev: 0.00001120315187118458",
            "extra": "mean: 3.457338013698618 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.44833708140663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011530670529336128",
            "extra": "mean: 2.270413839285703 msec\nrounds: 448"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 902.6060456059977,
            "unit": "iter/sec",
            "range": "stddev: 0.000007802101736131995",
            "extra": "mean: 1.1079030601092565 msec\nrounds: 915"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.9715407175133,
            "unit": "iter/sec",
            "range": "stddev: 0.000027358246617751297",
            "extra": "mean: 4.951192610837415 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.57756875089774,
            "unit": "iter/sec",
            "range": "stddev: 0.000009747133829591204",
            "extra": "mean: 3.7512533582090164 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 424.5742381415923,
            "unit": "iter/sec",
            "range": "stddev: 0.000010193280472851492",
            "extra": "mean: 2.355300699300808 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.023932655648,
            "unit": "iter/sec",
            "range": "stddev: 0.000007813604310918473",
            "extra": "mean: 1.1990063604240484 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.157178485519644,
            "unit": "iter/sec",
            "range": "stddev: 0.00009471757728159528",
            "extra": "mean: 38.23042307692285 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.563292703071497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000627431047667224",
            "extra": "mean: 36.28013571428517 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.3169634362286,
            "unit": "iter/sec",
            "range": "stddev: 0.000016441865547993993",
            "extra": "mean: 3.1613859375000164 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.3505837544425,
            "unit": "iter/sec",
            "range": "stddev: 0.000011106675562590654",
            "extra": "mean: 1.896271722846227 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.5747716098374,
            "unit": "iter/sec",
            "range": "stddev: 0.000015179122567057252",
            "extra": "mean: 844.8980360065055 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1071.394727732351,
            "unit": "iter/sec",
            "range": "stddev: 0.000012178811105324266",
            "extra": "mean: 933.3628158844307 usec\nrounds: 1108"
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
        "date": 1674560899819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.77028226098753,
            "unit": "iter/sec",
            "range": "stddev: 0.000014885442941063479",
            "extra": "mean: 4.744501877934311 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.94719788956417,
            "unit": "iter/sec",
            "range": "stddev: 0.00003237991732441061",
            "extra": "mean: 3.597805653710266 msec\nrounds: 283"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 432.2971119632022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000136642674620911",
            "extra": "mean: 2.3132238738738593 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.3508890083108,
            "unit": "iter/sec",
            "range": "stddev: 0.000007094534717895369",
            "extra": "mean: 1.1206354051054086 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.09333684973492,
            "unit": "iter/sec",
            "range": "stddev: 0.000013308433528572447",
            "extra": "mean: 5.048125373134368 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.2668109438669,
            "unit": "iter/sec",
            "range": "stddev: 0.000013613971539432412",
            "extra": "mean: 3.842210984848449 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.6760017068035,
            "unit": "iter/sec",
            "range": "stddev: 0.000012905231756071075",
            "extra": "mean: 2.3884817757008543 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.6224776812355,
            "unit": "iter/sec",
            "range": "stddev: 0.000007759384338594765",
            "extra": "mean: 1.2039163722026864 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.964864943685377,
            "unit": "iter/sec",
            "range": "stddev: 0.00012463230788748356",
            "extra": "mean: 35.759157142856346 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.929132304593242,
            "unit": "iter/sec",
            "range": "stddev: 0.00018170995157805488",
            "extra": "mean: 34.56723103448299 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.66682664683077,
            "unit": "iter/sec",
            "range": "stddev: 0.000017384340577122848",
            "extra": "mean: 3.1779644859811014 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.5863858037923,
            "unit": "iter/sec",
            "range": "stddev: 0.000010530130820752273",
            "extra": "mean: 1.7806699472757186 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1189.3613940242763,
            "unit": "iter/sec",
            "range": "stddev: 0.000014887118788554705",
            "extra": "mean: 840.7873376623058 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.9683689930398,
            "unit": "iter/sec",
            "range": "stddev: 0.000013797817767374056",
            "extra": "mean: 915.7774422734897 usec\nrounds: 1126"
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
        "date": 1674746014819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.06066904250406,
            "unit": "iter/sec",
            "range": "stddev: 0.000014813253878806226",
            "extra": "mean: 4.737974178403731 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 278.2906088169545,
            "unit": "iter/sec",
            "range": "stddev: 0.000014534873169292892",
            "extra": "mean: 3.593365957446841 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.67112366341297,
            "unit": "iter/sec",
            "range": "stddev: 0.000012287169393401327",
            "extra": "mean: 2.343725517241395 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 881.8737087643697,
            "unit": "iter/sec",
            "range": "stddev: 0.000007436829321652246",
            "extra": "mean: 1.133949215246639 msec\nrounds: 892"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.23344267559713,
            "unit": "iter/sec",
            "range": "stddev: 0.000018085673937044877",
            "extra": "mean: 5.044557499999982 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.58112354288903,
            "unit": "iter/sec",
            "range": "stddev: 0.000013885684067717304",
            "extra": "mean: 3.837576515151567 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 410.7699367776997,
            "unit": "iter/sec",
            "range": "stddev: 0.000012577516998124045",
            "extra": "mean: 2.434452744630091 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 818.4560157206193,
            "unit": "iter/sec",
            "range": "stddev: 0.000008279816131269645",
            "extra": "mean: 1.2218127557160638 msec\nrounds: 831"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.057298615231975,
            "unit": "iter/sec",
            "range": "stddev: 0.00006720131447131702",
            "extra": "mean: 35.64135000000007 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.071883138248275,
            "unit": "iter/sec",
            "range": "stddev: 0.00020469717264219248",
            "extra": "mean: 34.39749655172338 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.27449586470965,
            "unit": "iter/sec",
            "range": "stddev: 0.000013127468942982185",
            "extra": "mean: 3.171839184953036 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.0613910432024,
            "unit": "iter/sec",
            "range": "stddev: 0.000011479647947236311",
            "extra": "mean: 1.7887123239435494 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.0285765822796,
            "unit": "iter/sec",
            "range": "stddev: 0.00001602368212557845",
            "extra": "mean: 845.288118811938 usec\nrounds: 1212"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1081.4289812288507,
            "unit": "iter/sec",
            "range": "stddev: 0.000018639127503194606",
            "extra": "mean: 924.7024236983909 usec\nrounds: 1114"
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
        "date": 1675093352562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.56603717444665,
            "unit": "iter/sec",
            "range": "stddev: 0.000015955681902894443",
            "extra": "mean: 4.771765566037695 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 279.9804053150143,
            "unit": "iter/sec",
            "range": "stddev: 0.00001260938275630734",
            "extra": "mean: 3.571678521126756 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.765613717847,
            "unit": "iter/sec",
            "range": "stddev: 0.000012707129826346722",
            "extra": "mean: 2.305392517006831 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 883.8196119278002,
            "unit": "iter/sec",
            "range": "stddev: 0.000007496402047860864",
            "extra": "mean: 1.1314526024363563 msec\nrounds: 903"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.42751942192797,
            "unit": "iter/sec",
            "range": "stddev: 0.000015065301742216432",
            "extra": "mean: 5.065150000000109 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.1130526207678,
            "unit": "iter/sec",
            "range": "stddev: 0.000011881619239970485",
            "extra": "mean: 3.84448219696976 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 419.07285148677624,
            "unit": "iter/sec",
            "range": "stddev: 0.000012250091994784174",
            "extra": "mean: 2.3862199530516586 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.0710014557997,
            "unit": "iter/sec",
            "range": "stddev: 0.000006722396399860407",
            "extra": "mean: 1.2120169030732462 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.036542829924755,
            "unit": "iter/sec",
            "range": "stddev: 0.00012605651352913741",
            "extra": "mean: 35.66773571428542 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.016667173625294,
            "unit": "iter/sec",
            "range": "stddev: 0.000043441353082676296",
            "extra": "mean: 34.46295172413703 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.853356093959,
            "unit": "iter/sec",
            "range": "stddev: 0.00001639901672021284",
            "extra": "mean: 3.136237962962893 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 568.5729468270029,
            "unit": "iter/sec",
            "range": "stddev: 0.000011413977376243495",
            "extra": "mean: 1.7587892733564505 msec\nrounds: 578"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1193.5140208375667,
            "unit": "iter/sec",
            "range": "stddev: 0.00001576427939715583",
            "extra": "mean: 837.8619626925159 usec\nrounds: 1233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1092.5978092400305,
            "unit": "iter/sec",
            "range": "stddev: 0.000018083139545525267",
            "extra": "mean: 915.2498673739442 usec\nrounds: 1131"
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
        "date": 1675094582014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.14340921846593,
            "unit": "iter/sec",
            "range": "stddev: 0.0009710137316935406",
            "extra": "mean: 7.743329729729732 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.75083738084723,
            "unit": "iter/sec",
            "range": "stddev: 0.0008285325436932399",
            "extra": "mean: 6.106838999999904 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 251.9317768748264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740591096143269",
            "extra": "mean: 3.9693285714285063 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 522.7510173775506,
            "unit": "iter/sec",
            "range": "stddev: 0.00040816795133262246",
            "extra": "mean: 1.9129565830720558 msec\nrounds: 638"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.23953195731893,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116524369468261",
            "extra": "mean: 8.386480419580513 msec\nrounds: 143"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.5302271700392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004974171840870654",
            "extra": "mean: 6.429618333333448 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 244.0529063681556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006364848775051794",
            "extra": "mean: 4.097472203389755 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.24038389589197,
            "unit": "iter/sec",
            "range": "stddev: 0.0003853301253294254",
            "extra": "mean: 1.9714518633540896 msec\nrounds: 644"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.328155256113085,
            "unit": "iter/sec",
            "range": "stddev: 0.0011744895955153537",
            "extra": "mean: 51.73799499999987 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.514686474259257,
            "unit": "iter/sec",
            "range": "stddev: 0.002270633700659365",
            "extra": "mean: 51.24345714285723 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.08856095883178,
            "unit": "iter/sec",
            "range": "stddev: 0.0004995699367504933",
            "extra": "mean: 5.461837674418415 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.364036821439,
            "unit": "iter/sec",
            "range": "stddev: 0.00027660280949452575",
            "extra": "mean: 2.9818343358397708 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 666.6059242866627,
            "unit": "iter/sec",
            "range": "stddev: 0.0003023972495435658",
            "extra": "mean: 1.5001366828086677 msec\nrounds: 826"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 626.5652372608239,
            "unit": "iter/sec",
            "range": "stddev: 0.00025025665080503397",
            "extra": "mean: 1.596003002611082 msec\nrounds: 766"
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
        "date": 1675179890239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 212.634000216194,
            "unit": "iter/sec",
            "range": "stddev: 0.000013603466387686458",
            "extra": "mean: 4.702916744186054 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.9839006911856,
            "unit": "iter/sec",
            "range": "stddev: 0.00001307533758925986",
            "extra": "mean: 3.5463017482517523 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 426.5331396194561,
            "unit": "iter/sec",
            "range": "stddev: 0.000011152985722667772",
            "extra": "mean: 2.344483715596352 msec\nrounds: 436"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.3323758059362,
            "unit": "iter/sec",
            "range": "stddev: 0.000006913791090268713",
            "extra": "mean: 1.1206586549062738 msec\nrounds: 907"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.13520169673896,
            "unit": "iter/sec",
            "range": "stddev: 0.000014853673247944925",
            "extra": "mean: 4.9471838235296 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.1837236103866,
            "unit": "iter/sec",
            "range": "stddev: 0.000012780832510718733",
            "extra": "mean: 3.7996270676692214 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.5950483139736,
            "unit": "iter/sec",
            "range": "stddev: 0.000010433829972103434",
            "extra": "mean: 2.388943691588857 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.396409377729,
            "unit": "iter/sec",
            "range": "stddev: 0.000006925168256814022",
            "extra": "mean: 1.2042441281139045 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.06068122314517,
            "unit": "iter/sec",
            "range": "stddev: 0.000055819155626906465",
            "extra": "mean: 35.63705357142842 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.13992701553539,
            "unit": "iter/sec",
            "range": "stddev: 0.000038417933454233284",
            "extra": "mean: 34.31717586206957 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 318.1496181810566,
            "unit": "iter/sec",
            "range": "stddev: 0.000011658478888359077",
            "extra": "mean: 3.1431752321981645 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.517344299089,
            "unit": "iter/sec",
            "range": "stddev: 0.000013430302297590467",
            "extra": "mean: 1.7682923611112507 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1180.1701594314784,
            "unit": "iter/sec",
            "range": "stddev: 0.000015546859329473803",
            "extra": "mean: 847.3354388842779 usec\nrounds: 1219"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1083.5905974133684,
            "unit": "iter/sec",
            "range": "stddev: 0.000013117364366331833",
            "extra": "mean: 922.8577678572451 usec\nrounds: 1120"
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
        "date": 1675265706343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.48524777363588,
            "unit": "iter/sec",
            "range": "stddev: 0.000031089277439364546",
            "extra": "mean: 4.556114864864818 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.41663312649376,
            "unit": "iter/sec",
            "range": "stddev: 0.000011371960963222206",
            "extra": "mean: 3.479269759450192 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 431.280722666829,
            "unit": "iter/sec",
            "range": "stddev: 0.00021241187718606402",
            "extra": "mean: 2.318675395033864 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 907.2225827850494,
            "unit": "iter/sec",
            "range": "stddev: 0.000007574588651999065",
            "extra": "mean: 1.1022653304441965 msec\nrounds: 923"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.71674053631028,
            "unit": "iter/sec",
            "range": "stddev: 0.00002900113046334537",
            "extra": "mean: 4.932991707317244 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.00999446026594,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253752551900104",
            "extra": "mean: 3.759257249070657 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 420.2590991286356,
            "unit": "iter/sec",
            "range": "stddev: 0.000012017995302793422",
            "extra": "mean: 2.3794844705882583 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.699163544791,
            "unit": "iter/sec",
            "range": "stddev: 0.000007848094760689252",
            "extra": "mean: 1.1994734356552756 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.982113912782314,
            "unit": "iter/sec",
            "range": "stddev: 0.00011039114345747189",
            "extra": "mean: 38.48801538461558 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.36240132434105,
            "unit": "iter/sec",
            "range": "stddev: 0.00006728687065818271",
            "extra": "mean: 36.54649999999889 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 317.1476410913264,
            "unit": "iter/sec",
            "range": "stddev: 0.000022601647855565394",
            "extra": "mean: 3.15310559006188 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.7583774846943,
            "unit": "iter/sec",
            "range": "stddev: 0.000011365046553992939",
            "extra": "mean: 1.8912229906540754 msec\nrounds: 535"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1160.6127958382724,
            "unit": "iter/sec",
            "range": "stddev: 0.000016256508000191746",
            "extra": "mean: 861.6137988360994 usec\nrounds: 1203"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1053.7549527207236,
            "unit": "iter/sec",
            "range": "stddev: 0.000012878757039614884",
            "extra": "mean: 948.9872359964411 usec\nrounds: 1089"
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
        "date": 1675481462119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.5439976665501,
            "unit": "iter/sec",
            "range": "stddev: 0.000015585983103786506",
            "extra": "mean: 4.772267452830179 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.7137575639923,
            "unit": "iter/sec",
            "range": "stddev: 0.000014033201561308376",
            "extra": "mean: 3.6008298932384526 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.46228053847676,
            "unit": "iter/sec",
            "range": "stddev: 0.000011101720997504805",
            "extra": "mean: 2.361485416666615 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 886.1343122480006,
            "unit": "iter/sec",
            "range": "stddev: 0.000006323153556521252",
            "extra": "mean: 1.1284970982143079 msec\nrounds: 896"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.20780698148712,
            "unit": "iter/sec",
            "range": "stddev: 0.000012575909529474407",
            "extra": "mean: 5.045209950248838 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.033138050034,
            "unit": "iter/sec",
            "range": "stddev: 0.000013677933987107047",
            "extra": "mean: 3.8605099236640656 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.62058002549276,
            "unit": "iter/sec",
            "range": "stddev: 0.000013104321341976866",
            "extra": "mean: 2.3945180094787406 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.5489401574994,
            "unit": "iter/sec",
            "range": "stddev: 0.000006400731463143889",
            "extra": "mean: 1.1982520759193296 msec\nrounds: 843"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.18305173935223,
            "unit": "iter/sec",
            "range": "stddev: 0.00009933599196128951",
            "extra": "mean: 35.4823178571429 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.380598228152937,
            "unit": "iter/sec",
            "range": "stddev: 0.000044880318497949176",
            "extra": "mean: 34.03606666666796 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 315.44963895801186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001414853214971201",
            "extra": "mean: 3.1700781250001864 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 565.3290710227127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010013856145155813",
            "extra": "mean: 1.7688812609458466 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1178.029146589981,
            "unit": "iter/sec",
            "range": "stddev: 0.000015080912130420268",
            "extra": "mean: 848.8754313886726 usec\nrounds: 1217"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1091.5727770279714,
            "unit": "iter/sec",
            "range": "stddev: 0.000014129070177366164",
            "extra": "mean: 916.1093250444585 usec\nrounds: 1126"
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
        "date": 1675580551230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.9818517964406,
            "unit": "iter/sec",
            "range": "stddev: 0.000013234009837572855",
            "extra": "mean: 4.608680365296819 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 285.66762996295574,
            "unit": "iter/sec",
            "range": "stddev: 0.000012365061572548737",
            "extra": "mean: 3.5005716262975826 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 427.5330497789908,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154532441801138",
            "extra": "mean: 2.339000459770164 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 903.9097687564557,
            "unit": "iter/sec",
            "range": "stddev: 0.000008340418292926846",
            "extra": "mean: 1.1063051142546445 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.9461501232133,
            "unit": "iter/sec",
            "range": "stddev: 0.000019024813920375165",
            "extra": "mean: 4.951815121951424 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.33142652289587,
            "unit": "iter/sec",
            "range": "stddev: 0.00001121899944477689",
            "extra": "mean: 3.7831294339622605 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.77554898874564,
            "unit": "iter/sec",
            "range": "stddev: 0.000012419100584858853",
            "extra": "mean: 2.405143838862608 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.1596468316916,
            "unit": "iter/sec",
            "range": "stddev: 0.000008210627304739643",
            "extra": "mean: 1.2118866983372623 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.834601712913674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382799386350262",
            "extra": "mean: 38.70777692307679 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.040522927659623,
            "unit": "iter/sec",
            "range": "stddev: 0.00009612311416620623",
            "extra": "mean: 36.98153333333302 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.0883410459473,
            "unit": "iter/sec",
            "range": "stddev: 0.000021375326539689803",
            "extra": "mean: 3.193986708860695 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.778199781131,
            "unit": "iter/sec",
            "range": "stddev: 0.000012412507458950174",
            "extra": "mean: 1.8947353271027467 msec\nrounds: 535"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1139.5695804203694,
            "unit": "iter/sec",
            "range": "stddev: 0.000018200720151042012",
            "extra": "mean: 877.5243014394221 usec\nrounds: 1181"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1039.423588134827,
            "unit": "iter/sec",
            "range": "stddev: 0.000017387969131127746",
            "extra": "mean: 962.0716822430691 usec\nrounds: 1070"
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
        "date": 1676093448146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.41742661695486,
            "unit": "iter/sec",
            "range": "stddev: 0.00011970391851477657",
            "extra": "mean: 5.307364705882329 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.74685297348242,
            "unit": "iter/sec",
            "range": "stddev: 0.0001242089394318617",
            "extra": "mean: 4.036378214285673 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.3828515577198,
            "unit": "iter/sec",
            "range": "stddev: 0.000025436349944479232",
            "extra": "mean: 2.714567184035481 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 768.1555547083212,
            "unit": "iter/sec",
            "range": "stddev: 0.00003855530245608922",
            "extra": "mean: 1.3018196560196886 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.37459766699345,
            "unit": "iter/sec",
            "range": "stddev: 0.00010368441809900537",
            "extra": "mean: 5.767857653061347 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.30473570010508,
            "unit": "iter/sec",
            "range": "stddev: 0.00010487229640500566",
            "extra": "mean: 4.380110631229187 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 362.93406502791663,
            "unit": "iter/sec",
            "range": "stddev: 0.00009475941769787616",
            "extra": "mean: 2.755321410579304 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 704.8064663430081,
            "unit": "iter/sec",
            "range": "stddev: 0.00012474485684411084",
            "extra": "mean: 1.418829207383194 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.596150303697662,
            "unit": "iter/sec",
            "range": "stddev: 0.0003971937793820149",
            "extra": "mean: 44.25532608695556 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.774369441909663,
            "unit": "iter/sec",
            "range": "stddev: 0.0003597985333027151",
            "extra": "mean: 42.0621039999989 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 268.9743674437069,
            "unit": "iter/sec",
            "range": "stddev: 0.00007385239908527332",
            "extra": "mean: 3.717826384364629 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 450.96428861957133,
            "unit": "iter/sec",
            "range": "stddev: 0.00028255067191751594",
            "extra": "mean: 2.217470485437017 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1008.2263017095597,
            "unit": "iter/sec",
            "range": "stddev: 0.000024899628853953028",
            "extra": "mean: 991.84081818178 usec\nrounds: 1100"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 915.3020708708764,
            "unit": "iter/sec",
            "range": "stddev: 0.00004311844893814734",
            "extra": "mean: 1.092535493827231 msec\nrounds: 1296"
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
        "date": 1676102492897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.11688229691134,
            "unit": "iter/sec",
            "range": "stddev: 0.00008535031748344606",
            "extra": "mean: 4.73671261682245 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 280.78601957541554,
            "unit": "iter/sec",
            "range": "stddev: 0.000018056106637479484",
            "extra": "mean: 3.5614308771929895 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 435.84008918414804,
            "unit": "iter/sec",
            "range": "stddev: 0.000012768483241759678",
            "extra": "mean: 2.2944195011337913 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 883.8099582475817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069604327388633174",
            "extra": "mean: 1.1314649610678749 msec\nrounds: 899"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.8286238017829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000185269059817863",
            "extra": "mean: 5.0294569306928585 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.59946365866324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007379359816059815",
            "extra": "mean: 3.8373064393939575 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 417.8541918935883,
            "unit": "iter/sec",
            "range": "stddev: 0.000013023110606770791",
            "extra": "mean: 2.393179294117653 msec\nrounds: 425"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.0624460234624,
            "unit": "iter/sec",
            "range": "stddev: 0.00000845295132480725",
            "extra": "mean: 1.2149746411483022 msec\nrounds: 836"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.99825570866926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006284791365927549",
            "extra": "mean: 35.71651071428583 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.008331192718828,
            "unit": "iter/sec",
            "range": "stddev: 0.00020359221249872497",
            "extra": "mean: 34.47285517241346 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.3676187787847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000331641692182075",
            "extra": "mean: 3.1608797507789035 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 561.2699366325191,
            "unit": "iter/sec",
            "range": "stddev: 0.00001964203428522162",
            "extra": "mean: 1.7816739054290929 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1183.4535433188018,
            "unit": "iter/sec",
            "range": "stddev: 0.000017467224552980706",
            "extra": "mean: 844.9845840130434 usec\nrounds: 1226"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1088.104110111886,
            "unit": "iter/sec",
            "range": "stddev: 0.000013344423688587086",
            "extra": "mean: 919.0297056199645 usec\nrounds: 1121"
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
        "date": 1676108829344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.9801750975472,
            "unit": "iter/sec",
            "range": "stddev: 0.000623898174460123",
            "extra": "mean: 7.753129496402869 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.87203189014838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005001768762791838",
            "extra": "mean: 5.886784239130505 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 247.34088166967462,
            "unit": "iter/sec",
            "range": "stddev: 0.00032736810909038503",
            "extra": "mean: 4.0430032967033185 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 523.8347386554929,
            "unit": "iter/sec",
            "range": "stddev: 0.0002451539856429721",
            "extra": "mean: 1.9089990147783302 msec\nrounds: 609"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.19938485791762,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353493334821577",
            "extra": "mean: 8.460280916030626 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.35959301705617,
            "unit": "iter/sec",
            "range": "stddev: 0.0011398823716747884",
            "extra": "mean: 6.563419999999955 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.1516819691169,
            "unit": "iter/sec",
            "range": "stddev: 0.0003979146228935843",
            "extra": "mean: 4.164034962405961 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 507.1690975223184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004079282947618832",
            "extra": "mean: 1.9717289655172536 msec\nrounds: 580"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.834954473560668,
            "unit": "iter/sec",
            "range": "stddev: 0.00152896934493969",
            "extra": "mean: 53.092775 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.16122064094231,
            "unit": "iter/sec",
            "range": "stddev: 0.0015761385710478834",
            "extra": "mean: 49.600171428571855 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.11383502690245,
            "unit": "iter/sec",
            "range": "stddev: 0.0002642260212239721",
            "extra": "mean: 5.402081372549333 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.6104490477788,
            "unit": "iter/sec",
            "range": "stddev: 0.0003652656709454845",
            "extra": "mean: 3.0997136111109014 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 650.1120057652365,
            "unit": "iter/sec",
            "range": "stddev: 0.00015038545385144889",
            "extra": "mean: 1.5381964817322762 msec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 608.274768072,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300642757355313",
            "extra": "mean: 1.6439938864628894 msec\nrounds: 687"
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
        "date": 1676198216598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.9332339867498,
            "unit": "iter/sec",
            "range": "stddev: 0.000014210505409416566",
            "extra": "mean: 4.740836619718338 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 281.08402453559967,
            "unit": "iter/sec",
            "range": "stddev: 0.000015250478632202131",
            "extra": "mean: 3.557655052264803 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 428.16170044711845,
            "unit": "iter/sec",
            "range": "stddev: 0.000012438114073777219",
            "extra": "mean: 2.335566210045703 msec\nrounds: 438"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 906.1937603974167,
            "unit": "iter/sec",
            "range": "stddev: 0.000007696807895720352",
            "extra": "mean: 1.103516757344968 msec\nrounds: 919"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.11848956837008,
            "unit": "iter/sec",
            "range": "stddev: 0.000014868133575470858",
            "extra": "mean: 5.022135323383097 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.1047400895239,
            "unit": "iter/sec",
            "range": "stddev: 0.000019816580172415397",
            "extra": "mean: 3.829880681818086 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.3664213050709,
            "unit": "iter/sec",
            "range": "stddev: 0.000020626128247136237",
            "extra": "mean: 2.4017306603773934 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 834.7277529513792,
            "unit": "iter/sec",
            "range": "stddev: 0.00000775777007097906",
            "extra": "mean: 1.1979953900709077 msec\nrounds: 846"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.001386068610778,
            "unit": "iter/sec",
            "range": "stddev: 0.00007485070599442369",
            "extra": "mean: 35.71251785714237 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.102499001483647,
            "unit": "iter/sec",
            "range": "stddev: 0.000053320187446209045",
            "extra": "mean: 34.36131034482709 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 316.66799589036174,
            "unit": "iter/sec",
            "range": "stddev: 0.000025738769163626857",
            "extra": "mean: 3.1578814814813954 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 567.9198073569288,
            "unit": "iter/sec",
            "range": "stddev: 0.000011376076143591445",
            "extra": "mean: 1.7608119791664805 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1198.4593074831776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001552782335948221",
            "extra": "mean: 834.4046341465263 usec\nrounds: 1230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1093.2499692372435,
            "unit": "iter/sec",
            "range": "stddev: 0.000013055278757475",
            "extra": "mean: 914.7038903625091 usec\nrounds: 1131"
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
        "date": 1676198408683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.93295665761286,
            "unit": "iter/sec",
            "range": "stddev: 0.000016369226454375514",
            "extra": "mean: 4.588567123287674 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 287.522903925805,
            "unit": "iter/sec",
            "range": "stddev: 0.00000925370099487806",
            "extra": "mean: 3.4779837931034843 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.95601053241563,
            "unit": "iter/sec",
            "range": "stddev: 0.000010320752171976318",
            "extra": "mean: 2.2990830699774265 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 900.1770942461544,
            "unit": "iter/sec",
            "range": "stddev: 0.000007703439726798136",
            "extra": "mean: 1.1108925192519383 msec\nrounds: 909"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.19831740585988,
            "unit": "iter/sec",
            "range": "stddev: 0.00001172891777596972",
            "extra": "mean: 4.897200000000113 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.4366577170456,
            "unit": "iter/sec",
            "range": "stddev: 0.000009978836747985062",
            "extra": "mean: 3.767377153558029 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 421.3630263044406,
            "unit": "iter/sec",
            "range": "stddev: 0.000010252747684080222",
            "extra": "mean: 2.373250469483495 msec\nrounds: 426"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 819.4745769338787,
            "unit": "iter/sec",
            "range": "stddev: 0.000016836341886295193",
            "extra": "mean: 1.220294110577011 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.903008773947143,
            "unit": "iter/sec",
            "range": "stddev: 0.00010919155729551741",
            "extra": "mean: 38.605553846153384 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.326724169902064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000647322102786628",
            "extra": "mean: 36.59421428571414 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.55188226658055,
            "unit": "iter/sec",
            "range": "stddev: 0.00001161493226804177",
            "extra": "mean: 3.1791257861636537 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.8061827112562,
            "unit": "iter/sec",
            "range": "stddev: 0.000010129961297769563",
            "extra": "mean: 1.901841463414562 msec\nrounds: 533"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1162.1516688873628,
            "unit": "iter/sec",
            "range": "stddev: 0.000017288392080124963",
            "extra": "mean: 860.4728855721509 usec\nrounds: 1206"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1061.178333582517,
            "unit": "iter/sec",
            "range": "stddev: 0.000015316910189644005",
            "extra": "mean: 942.3486782132272 usec\nrounds: 1097"
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
        "date": 1676205991657,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 215.98775180240347,
            "unit": "iter/sec",
            "range": "stddev: 0.000012914852324550773",
            "extra": "mean: 4.629892165898605 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 283.1970879050671,
            "unit": "iter/sec",
            "range": "stddev: 0.000023224210652462772",
            "extra": "mean: 3.5311097560975577 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.6472398621766,
            "unit": "iter/sec",
            "range": "stddev: 0.000010680627971567678",
            "extra": "mean: 2.327490804597703 msec\nrounds: 435"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 896.587200658601,
            "unit": "iter/sec",
            "range": "stddev: 0.00000699519489183594",
            "extra": "mean: 1.1153404814003987 msec\nrounds: 914"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.3101426445981,
            "unit": "iter/sec",
            "range": "stddev: 0.000012842594835663124",
            "extra": "mean: 4.942905911330003 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.70096622792,
            "unit": "iter/sec",
            "range": "stddev: 0.000008029996949193478",
            "extra": "mean: 3.777847940074963 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.3319732497802,
            "unit": "iter/sec",
            "range": "stddev: 0.000010243924755454092",
            "extra": "mean: 2.401929383886271 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.7025286802086,
            "unit": "iter/sec",
            "range": "stddev: 0.000006977421535798566",
            "extra": "mean: 1.2038003562945274 msec\nrounds: 842"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.879595183409037,
            "unit": "iter/sec",
            "range": "stddev: 0.00009380793151615949",
            "extra": "mean: 38.640480769231 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.14712929664927,
            "unit": "iter/sec",
            "range": "stddev: 0.00010910155440564148",
            "extra": "mean: 36.83630740740711 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 311.88356584500684,
            "unit": "iter/sec",
            "range": "stddev: 0.00001127416115470604",
            "extra": "mean: 3.2063247619047632 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 527.4866205523921,
            "unit": "iter/sec",
            "range": "stddev: 0.000012981906822138327",
            "extra": "mean: 1.8957826815641021 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.0872348546004,
            "unit": "iter/sec",
            "range": "stddev: 0.000014164930691183014",
            "extra": "mean: 859.7807370184161 usec\nrounds: 1194"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1070.7545912844305,
            "unit": "iter/sec",
            "range": "stddev: 0.000013316293729326085",
            "extra": "mean: 933.9208144794819 usec\nrounds: 1105"
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
        "date": 1676206301015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.1843953345169,
            "unit": "iter/sec",
            "range": "stddev: 0.000018967501284428504",
            "extra": "mean: 5.5498701657459 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 237.59856273573035,
            "unit": "iter/sec",
            "range": "stddev: 0.000011506811456242091",
            "extra": "mean: 4.2087796680498135 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 364.18828337391153,
            "unit": "iter/sec",
            "range": "stddev: 0.000011516458213675227",
            "extra": "mean: 2.745832432432489 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.3821765726794,
            "unit": "iter/sec",
            "range": "stddev: 0.000010477421175066287",
            "extra": "mean: 1.3344325916230464 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 167.42018960683384,
            "unit": "iter/sec",
            "range": "stddev: 0.000021966356338729983",
            "extra": "mean: 5.972995266272124 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 219.69656934900848,
            "unit": "iter/sec",
            "range": "stddev: 0.000013666381529066442",
            "extra": "mean: 4.551732432432328 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.35700533866515,
            "unit": "iter/sec",
            "range": "stddev: 0.00001163396247353893",
            "extra": "mean: 2.838030704225272 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 692.2192106049758,
            "unit": "iter/sec",
            "range": "stddev: 0.000008650311500880566",
            "extra": "mean: 1.4446290780142237 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.461611858749997,
            "unit": "iter/sec",
            "range": "stddev: 0.0001694833660378831",
            "extra": "mean: 46.59482272727318 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.613794827792322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000861352555758096",
            "extra": "mean: 44.22079565217429 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 260.40297508912664,
            "unit": "iter/sec",
            "range": "stddev: 0.000020986026707756593",
            "extra": "mean: 3.8402019011408597 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 441.47680466156663,
            "unit": "iter/sec",
            "range": "stddev: 0.000013470210984203098",
            "extra": "mean: 2.265124666666449 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 990.0598187755381,
            "unit": "iter/sec",
            "range": "stddev: 0.000018958542028575984",
            "extra": "mean: 1.0100399804496212 msec\nrounds: 1023"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 890.2728939116726,
            "unit": "iter/sec",
            "range": "stddev: 0.00001718864630053638",
            "extra": "mean: 1.1232510917031402 msec\nrounds: 916"
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
        "date": 1676209306247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 219.2591889781986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000124301880403705",
            "extra": "mean: 4.560812272727288 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.9159379289846,
            "unit": "iter/sec",
            "range": "stddev: 0.00000974402973240121",
            "extra": "mean: 3.461214383561628 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.3508376937019,
            "unit": "iter/sec",
            "range": "stddev: 0.000013505295227283931",
            "extra": "mean: 2.3075990929705164 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.3456094029312,
            "unit": "iter/sec",
            "range": "stddev: 0.000007303743988605351",
            "extra": "mean: 1.1206420353982582 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.9042743926947,
            "unit": "iter/sec",
            "range": "stddev: 0.000021730710232920114",
            "extra": "mean: 4.880327669902685 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.81257691242496,
            "unit": "iter/sec",
            "range": "stddev: 0.00001073653299329886",
            "extra": "mean: 3.7479492592593444 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 423.0259759693322,
            "unit": "iter/sec",
            "range": "stddev: 0.000013793302752233226",
            "extra": "mean: 2.363921028037522 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 828.8288252604704,
            "unit": "iter/sec",
            "range": "stddev: 0.000006476372612631701",
            "extra": "mean: 1.2065217443248752 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.153450137994614,
            "unit": "iter/sec",
            "range": "stddev: 0.00011649460608191273",
            "extra": "mean: 38.23587307692314 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.431963586811367,
            "unit": "iter/sec",
            "range": "stddev: 0.00010190086549685718",
            "extra": "mean: 36.45382500000022 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.27348686178675,
            "unit": "iter/sec",
            "range": "stddev: 0.000012223164284570897",
            "extra": "mean: 3.192099050633003 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.7009918682685,
            "unit": "iter/sec",
            "range": "stddev: 0.000009810536032261315",
            "extra": "mean: 1.902222014925516 msec\nrounds: 536"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1163.3761869201298,
            "unit": "iter/sec",
            "range": "stddev: 0.000014499220692842122",
            "extra": "mean: 859.5671900826468 usec\nrounds: 1210"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1057.3158301325886,
            "unit": "iter/sec",
            "range": "stddev: 0.00001292600739136094",
            "extra": "mean: 945.7911926605684 usec\nrounds: 1090"
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
        "date": 1676261767526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 216.6611640031596,
            "unit": "iter/sec",
            "range": "stddev: 0.000027977074161662478",
            "extra": "mean: 4.6155018348623695 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 286.62772562883373,
            "unit": "iter/sec",
            "range": "stddev: 0.00001073259215930663",
            "extra": "mean: 3.4888460207612364 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 429.80654279649696,
            "unit": "iter/sec",
            "range": "stddev: 0.00001164313435119543",
            "extra": "mean: 2.326628146453033 msec\nrounds: 437"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.9840302749816,
            "unit": "iter/sec",
            "range": "stddev: 0.00000798247883847589",
            "extra": "mean: 1.112366812227042 msec\nrounds: 916"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.227175466277,
            "unit": "iter/sec",
            "range": "stddev: 0.000016038641242016227",
            "extra": "mean: 4.94493382352936 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.42520571198924,
            "unit": "iter/sec",
            "range": "stddev: 0.000017894973375099142",
            "extra": "mean: 3.767539700374545 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 416.01899328320695,
            "unit": "iter/sec",
            "range": "stddev: 0.000011491536071304421",
            "extra": "mean: 2.403736406619409 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.6599423214873,
            "unit": "iter/sec",
            "range": "stddev: 0.000008255124725960159",
            "extra": "mean: 1.2155690930788143 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.169476144459423,
            "unit": "iter/sec",
            "range": "stddev: 0.00009871323385687027",
            "extra": "mean: 38.21245769230727 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.467905469202798,
            "unit": "iter/sec",
            "range": "stddev: 0.00020398608635319816",
            "extra": "mean: 36.4061250000007 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.23095678882544,
            "unit": "iter/sec",
            "range": "stddev: 0.000012845290533867221",
            "extra": "mean: 3.1823726415091436 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 531.0414371633111,
            "unit": "iter/sec",
            "range": "stddev: 0.000013021043858865237",
            "extra": "mean: 1.8830922222223314 msec\nrounds: 540"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1143.10191442139,
            "unit": "iter/sec",
            "range": "stddev: 0.000016107744579942126",
            "extra": "mean: 874.8126368996376 usec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1039.025024622497,
            "unit": "iter/sec",
            "range": "stddev: 0.000015290381153345486",
            "extra": "mean: 962.4407269337177 usec\nrounds: 1073"
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
        "date": 1676265579583,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 217.7560251550951,
            "unit": "iter/sec",
            "range": "stddev: 0.000013509540535361985",
            "extra": "mean: 4.5922954337899835 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 288.04235232212295,
            "unit": "iter/sec",
            "range": "stddev: 0.000010254929895128608",
            "extra": "mean: 3.4717116838487767 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.01754923447623,
            "unit": "iter/sec",
            "range": "stddev: 0.000011688612675836003",
            "extra": "mean: 2.304054298642551 msec\nrounds: 442"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 898.3208091538417,
            "unit": "iter/sec",
            "range": "stddev: 0.000007654487838270238",
            "extra": "mean: 1.1131880613362763 msec\nrounds: 913"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.48237435596178,
            "unit": "iter/sec",
            "range": "stddev: 0.000013031509664586193",
            "extra": "mean: 4.938701470588304 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 264.87183427316086,
            "unit": "iter/sec",
            "range": "stddev: 0.000011792832425955689",
            "extra": "mean: 3.775410861423286 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 418.17571585404016,
            "unit": "iter/sec",
            "range": "stddev: 0.00000955156975237778",
            "extra": "mean: 2.3913392434988725 msec\nrounds: 423"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.3924091333902,
            "unit": "iter/sec",
            "range": "stddev: 0.000007992797541259211",
            "extra": "mean: 1.2057018957345813 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.77899410563301,
            "unit": "iter/sec",
            "range": "stddev: 0.00012226477352905176",
            "extra": "mean: 38.79127307692306 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.10941359326258,
            "unit": "iter/sec",
            "range": "stddev: 0.00006126250788030994",
            "extra": "mean: 36.887555555555316 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 314.2869821640176,
            "unit": "iter/sec",
            "range": "stddev: 0.000013960227519804077",
            "extra": "mean: 3.1818053459119344 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 530.2622754235438,
            "unit": "iter/sec",
            "range": "stddev: 0.00001445062339656316",
            "extra": "mean: 1.885859217877146 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1160.9119776221867,
            "unit": "iter/sec",
            "range": "stddev: 0.000015260830068846414",
            "extra": "mean: 861.3917500000549 usec\nrounds: 1200"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1038.0104889504635,
            "unit": "iter/sec",
            "range": "stddev: 0.000013289595158426608",
            "extra": "mean: 963.38140186917 usec\nrounds: 1070"
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
        "date": 1676306918188,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 214.51585915746801,
            "unit": "iter/sec",
            "range": "stddev: 0.000020286183318770505",
            "extra": "mean: 4.66165999999999 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 285.503930851943,
            "unit": "iter/sec",
            "range": "stddev: 0.000012321772808098822",
            "extra": "mean: 3.502578745644596 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 438.18374511609744,
            "unit": "iter/sec",
            "range": "stddev: 0.000013296273103045132",
            "extra": "mean: 2.2821476404494385 msec\nrounds: 445"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 890.849747066915,
            "unit": "iter/sec",
            "range": "stddev: 0.000009027063735737095",
            "extra": "mean: 1.1225237513873216 msec\nrounds: 901"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 202.2682400095103,
            "unit": "iter/sec",
            "range": "stddev: 0.000016875339456227843",
            "extra": "mean: 4.94392990196079 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 265.2528853453798,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253461023614657",
            "extra": "mean: 3.769987265917664 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 425.00116404746467,
            "unit": "iter/sec",
            "range": "stddev: 0.000015280206218849007",
            "extra": "mean: 2.352934731934802 msec\nrounds: 429"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.7286700350365,
            "unit": "iter/sec",
            "range": "stddev: 0.000005935482198056349",
            "extra": "mean: 1.202315173237776 msec\nrounds: 837"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.228025993979298,
            "unit": "iter/sec",
            "range": "stddev: 0.00006267276397231785",
            "extra": "mean: 35.4257857142858 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.313801311661003,
            "unit": "iter/sec",
            "range": "stddev: 0.00006953487642394369",
            "extra": "mean: 34.11362413793127 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 319.67611399748506,
            "unit": "iter/sec",
            "range": "stddev: 0.000029573579910118938",
            "extra": "mean: 3.128166153846162 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 571.0196239419381,
            "unit": "iter/sec",
            "range": "stddev: 0.000010660740958931296",
            "extra": "mean: 1.7512532986111193 msec\nrounds: 576"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1203.980955210405,
            "unit": "iter/sec",
            "range": "stddev: 0.00001447280088507737",
            "extra": "mean: 830.5779220778807 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.5282715669803,
            "unit": "iter/sec",
            "range": "stddev: 0.000014549119935707742",
            "extra": "mean: 913.6356053812581 usec\nrounds: 1115"
          }
        ]
      }
    ]
  }
}