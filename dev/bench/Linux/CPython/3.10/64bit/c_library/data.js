window.BENCHMARK_DATA = {
  "lastUpdate": 1648768199331,
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
      }
    ]
  }
}