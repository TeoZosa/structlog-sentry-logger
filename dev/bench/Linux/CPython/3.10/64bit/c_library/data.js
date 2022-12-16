window.BENCHMARK_DATA = {
  "lastUpdate": 1671164153391,
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
      }
    ]
  }
}