window.BENCHMARK_DATA = {
  "lastUpdate": 1648486603390,
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
      }
    ]
  }
}