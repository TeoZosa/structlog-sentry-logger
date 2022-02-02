window.BENCHMARK_DATA = {
  "lastUpdate": 1643824301962,
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
        "date": 1642085758471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.62269727965155,
            "unit": "iter/sec",
            "range": "stddev: 0.0015316224340841777",
            "extra": "mean: 8.724275590551171 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.22930428898223,
            "unit": "iter/sec",
            "range": "stddev: 0.0004604501607595459",
            "extra": "mean: 6.746304347826107 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.71323686795955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005450285174170461",
            "extra": "mean: 5.007179372197299 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.8610404807071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002864357914978682",
            "extra": "mean: 3.087744047619002 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.88416611379895,
            "unit": "iter/sec",
            "range": "stddev: 0.000526548748621199",
            "extra": "mean: 9.018420168067218 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.9114718395626,
            "unit": "iter/sec",
            "range": "stddev: 0.0005631123022290954",
            "extra": "mean: 7.0466466666665655 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.98199419529226,
            "unit": "iter/sec",
            "range": "stddev: 0.00031450302091709753",
            "extra": "mean: 4.878477272727043 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.6743701947271,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125001564899252",
            "extra": "mean: 3.147877492877449 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.22073439630442,
            "unit": "iter/sec",
            "range": "stddev: 0.0034840605147341266",
            "extra": "mean: 81.82814285714305 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.697917094726701,
            "unit": "iter/sec",
            "range": "stddev: 0.004169490722583313",
            "extra": "mean: 73.00379999999933 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.8252176639392,
            "unit": "iter/sec",
            "range": "stddev: 0.0003966239235104401",
            "extra": "mean: 5.923285714285789 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 180.18777866806334,
            "unit": "iter/sec",
            "range": "stddev: 0.0013963301291620375",
            "extra": "mean: 5.54976595744693 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.8690083950799,
            "unit": "iter/sec",
            "range": "stddev: 0.00014527855165686636",
            "extra": "mean: 2.1419284253577335 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.808911719749,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374293465646095",
            "extra": "mean: 2.2532219917013916 msec\nrounds: 482"
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
        "date": 1642435422896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.24523444938042,
            "unit": "iter/sec",
            "range": "stddev: 0.0003707185153870484",
            "extra": "mean: 8.386079365079365 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1360166283891,
            "unit": "iter/sec",
            "range": "stddev: 0.0006095585547017449",
            "extra": "mean: 7.085363636363626 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.71160275038193,
            "unit": "iter/sec",
            "range": "stddev: 0.0006514197552898339",
            "extra": "mean: 5.413845070422531 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.4693853132722,
            "unit": "iter/sec",
            "range": "stddev: 0.00024908282790247105",
            "extra": "mean: 3.210588414634112 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.55139631610032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960380575707492",
            "extra": "mean: 9.128135593220495 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.84370598530268,
            "unit": "iter/sec",
            "range": "stddev: 0.0004317227478224707",
            "extra": "mean: 7.415993150685099 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.96168902098623,
            "unit": "iter/sec",
            "range": "stddev: 0.0003808288007109005",
            "extra": "mean: 5.103038277512021 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.376542747018,
            "unit": "iter/sec",
            "range": "stddev: 0.00021937639765053432",
            "extra": "mean: 3.2218929663608016 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.515118710370622,
            "unit": "iter/sec",
            "range": "stddev: 0.003310613854469937",
            "extra": "mean: 79.90335714285735 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.153852152580768,
            "unit": "iter/sec",
            "range": "stddev: 0.0021039148713083",
            "extra": "mean: 76.02335714285806 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.3030902320807,
            "unit": "iter/sec",
            "range": "stddev: 0.000369585509070098",
            "extra": "mean: 6.161312138728094 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.37557721621886,
            "unit": "iter/sec",
            "range": "stddev: 0.00029712180713330823",
            "extra": "mean: 4.340737903225959 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.2951420715037,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381417995382175",
            "extra": "mean: 2.1819999999999538 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.5026969178986,
            "unit": "iter/sec",
            "range": "stddev: 0.00010765027026312147",
            "extra": "mean: 2.234623404255071 msec\nrounds: 470"
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
        "date": 1643746610245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.54313276853622,
            "unit": "iter/sec",
            "range": "stddev: 0.0002200303755868365",
            "extra": "mean: 7.84048484848485 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.63708820301693,
            "unit": "iter/sec",
            "range": "stddev: 0.0001979067070169826",
            "extra": "mean: 6.384184049079759 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.9261584202187,
            "unit": "iter/sec",
            "range": "stddev: 0.00030039372268292943",
            "extra": "mean: 4.740995652173899 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.74626414786223,
            "unit": "iter/sec",
            "range": "stddev: 0.00008475351729365963",
            "extra": "mean: 3.014351955307298 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.70561192282362,
            "unit": "iter/sec",
            "range": "stddev: 0.00023428776309298357",
            "extra": "mean: 8.424201550387941 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.2476663065126,
            "unit": "iter/sec",
            "range": "stddev: 0.0004956976353098132",
            "extra": "mean: 7.130243421052659 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.92961296756272,
            "unit": "iter/sec",
            "range": "stddev: 0.00010664432168657024",
            "extra": "mean: 4.7863009259259695 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.0290534580957,
            "unit": "iter/sec",
            "range": "stddev: 0.00008862074143224679",
            "extra": "mean: 3.067211309523767 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.527132045099476,
            "unit": "iter/sec",
            "range": "stddev: 0.0016226142605261801",
            "extra": "mean: 73.9254999999999 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.904904359088205,
            "unit": "iter/sec",
            "range": "stddev: 0.0014150823549979568",
            "extra": "mean: 71.91707142857139 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.9252437534626,
            "unit": "iter/sec",
            "range": "stddev: 0.0001611788912303017",
            "extra": "mean: 5.716727777777959 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.6672722150114,
            "unit": "iter/sec",
            "range": "stddev: 0.00009652826834916287",
            "extra": "mean: 4.0053307393001365 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.0354369945994,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605067692128583",
            "extra": "mean: 2.1503737574554203 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 460.95473328486304,
            "unit": "iter/sec",
            "range": "stddev: 0.00006750665548130323",
            "extra": "mean: 2.169410416666695 msec\nrounds: 480"
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
        "date": 1643756377901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.85862280754134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005510355542516544",
            "extra": "mean: 8.557348837209352 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.36322717504382,
            "unit": "iter/sec",
            "range": "stddev: 0.0003336072754135739",
            "extra": "mean: 7.073975460122626 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.6359480502545,
            "unit": "iter/sec",
            "range": "stddev: 0.000295562877247421",
            "extra": "mean: 4.680860169491539 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.6954346466557,
            "unit": "iter/sec",
            "range": "stddev: 0.00019444846752222634",
            "extra": "mean: 3.1979999999999844 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.18740255690575,
            "unit": "iter/sec",
            "range": "stddev: 0.00043591013982245783",
            "extra": "mean: 9.329454545454634 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.77087225909162,
            "unit": "iter/sec",
            "range": "stddev: 0.00043641567410605635",
            "extra": "mean: 7.0042298136643915 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.0456022666673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002771153055847734",
            "extra": "mean: 5.26189497716882 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.3669338106118,
            "unit": "iter/sec",
            "range": "stddev: 0.00008886444914477406",
            "extra": "mean: 3.0453736263735918 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.176870638080688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008744149441238186",
            "extra": "mean: 70.5374285714286 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.264077165095332,
            "unit": "iter/sec",
            "range": "stddev: 0.0023993041491231896",
            "extra": "mean: 75.39159999999991 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.21288087239222,
            "unit": "iter/sec",
            "range": "stddev: 0.0004774117799711993",
            "extra": "mean: 6.320597883598096 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.71380798051382,
            "unit": "iter/sec",
            "range": "stddev: 0.000122188848517895",
            "extra": "mean: 4.036916666666656 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.0886853912094,
            "unit": "iter/sec",
            "range": "stddev: 0.00017784226163224896",
            "extra": "mean: 2.1409210526314753 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.866303880169,
            "unit": "iter/sec",
            "range": "stddev: 0.00011582277230092643",
            "extra": "mean: 2.237805785123952 msec\nrounds: 484"
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
        "date": 1643756633673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.35558832810868,
            "unit": "iter/sec",
            "range": "stddev: 0.0006135171099627196",
            "extra": "mean: 8.378325757575746 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.91709935880698,
            "unit": "iter/sec",
            "range": "stddev: 0.0005027006659695274",
            "extra": "mean: 6.715145569620309 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.69740393235932,
            "unit": "iter/sec",
            "range": "stddev: 0.0004419275733261936",
            "extra": "mean: 4.95792201834862 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.93476728285395,
            "unit": "iter/sec",
            "range": "stddev: 0.00020792625265565265",
            "extra": "mean: 3.1256371681415334 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.56157319730119,
            "unit": "iter/sec",
            "range": "stddev: 0.0012317003333988789",
            "extra": "mean: 9.846243697479208 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.8514292436169,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657835106419065",
            "extra": "mean: 7.254186666666746 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.8733598924911,
            "unit": "iter/sec",
            "range": "stddev: 0.000518816300841953",
            "extra": "mean: 5.131537735848994 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.58156349249543,
            "unit": "iter/sec",
            "range": "stddev: 0.0003393181140958544",
            "extra": "mean: 3.371753753753825 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.060793290063822,
            "unit": "iter/sec",
            "range": "stddev: 0.0054269435289063415",
            "extra": "mean: 82.91328571428558 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.244945397712437,
            "unit": "iter/sec",
            "range": "stddev: 0.0035104961461756134",
            "extra": "mean: 75.50050000000093 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.71478121296582,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716416125104165",
            "extra": "mean: 6.145723163841956 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.8434275776359,
            "unit": "iter/sec",
            "range": "stddev: 0.00038981190279685263",
            "extra": "mean: 4.204446640315861 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.3656309509305,
            "unit": "iter/sec",
            "range": "stddev: 0.00022298508641374327",
            "extra": "mean: 2.205725206611954 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 410.80607481611736,
            "unit": "iter/sec",
            "range": "stddev: 0.00042069464771485435",
            "extra": "mean: 2.434238589211745 msec\nrounds: 482"
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
        "date": 1643758551920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.0260209083499,
            "unit": "iter/sec",
            "range": "stddev: 0.0005636954760021429",
            "extra": "mean: 8.331526717557232 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.6826449016311,
            "unit": "iter/sec",
            "range": "stddev: 0.00027090553750054277",
            "extra": "mean: 6.680801242236085 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.6083967302491,
            "unit": "iter/sec",
            "range": "stddev: 0.000255926530332837",
            "extra": "mean: 4.887384955752214 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.95073648006655,
            "unit": "iter/sec",
            "range": "stddev: 0.0001450802726125894",
            "extra": "mean: 3.067948275862094 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.61886752810142,
            "unit": "iter/sec",
            "range": "stddev: 0.0004917496485503829",
            "extra": "mean: 8.959058823529434 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.83124904165496,
            "unit": "iter/sec",
            "range": "stddev: 0.0005190850438860176",
            "extra": "mean: 7.528348993288522 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.40568871697766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003332013634213716",
            "extra": "mean: 5.0657101449275315 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.4673387787464,
            "unit": "iter/sec",
            "range": "stddev: 0.00019107489071993648",
            "extra": "mean: 3.241834302325497 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.264685427985142,
            "unit": "iter/sec",
            "range": "stddev: 0.0023866506578547465",
            "extra": "mean: 75.38814285714247 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.622281381844651,
            "unit": "iter/sec",
            "range": "stddev: 0.0018446254928283807",
            "extra": "mean: 73.40914285714055 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.98178248914527,
            "unit": "iter/sec",
            "range": "stddev: 0.0003241502712763632",
            "extra": "mean: 6.061275280898323 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.81458499761638,
            "unit": "iter/sec",
            "range": "stddev: 0.0005555262502558743",
            "extra": "mean: 4.408887550201012 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.62227978178,
            "unit": "iter/sec",
            "range": "stddev: 0.00009378705458993252",
            "extra": "mean: 2.1113871595330083 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.54328386220874,
            "unit": "iter/sec",
            "range": "stddev: 0.00016859893910756152",
            "extra": "mean: 2.275088794926252 msec\nrounds: 473"
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
        "date": 1643759147985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.56913645289582,
            "unit": "iter/sec",
            "range": "stddev: 0.00045580037670670003",
            "extra": "mean: 8.092635658914693 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.54730274308864,
            "unit": "iter/sec",
            "range": "stddev: 0.00041192856722601083",
            "extra": "mean: 6.777487500000007 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.85882185602375,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977300482720075",
            "extra": "mean: 4.8814104803492775 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.8524563639899,
            "unit": "iter/sec",
            "range": "stddev: 0.00016868543257352698",
            "extra": "mean: 3.126441520467821 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.30810893293474,
            "unit": "iter/sec",
            "range": "stddev: 0.0006749018974252027",
            "extra": "mean: 9.065516666666646 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.71929627717975,
            "unit": "iter/sec",
            "range": "stddev: 0.0003498465026719477",
            "extra": "mean: 7.006761006289351 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.6210446511588,
            "unit": "iter/sec",
            "range": "stddev: 0.000321444366684188",
            "extra": "mean: 5.111924444444359 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.8927027058309,
            "unit": "iter/sec",
            "range": "stddev: 0.00014049575525667434",
            "extra": "mean: 3.1457154929579247 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.74128459024867,
            "unit": "iter/sec",
            "range": "stddev: 0.0025450310073893245",
            "extra": "mean: 72.77339999999981 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.273361337175963,
            "unit": "iter/sec",
            "range": "stddev: 0.0029525070428529",
            "extra": "mean: 75.33886666666754 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.52718998776797,
            "unit": "iter/sec",
            "range": "stddev: 0.0004521558132774925",
            "extra": "mean: 6.0780227272728995 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.98644955101742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002401199925651039",
            "extra": "mean: 4.149610909090959 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.31940352753566,
            "unit": "iter/sec",
            "range": "stddev: 0.00015874875976080912",
            "extra": "mean: 2.235539062499986 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.5437505389024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011136313512873322",
            "extra": "mean: 2.200008247422631 msec\nrounds: 485"
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
        "date": 1643759954572,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.76900172234244,
            "unit": "iter/sec",
            "range": "stddev: 0.0004466195170417109",
            "extra": "mean: 8.563916666666692 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.92664026305354,
            "unit": "iter/sec",
            "range": "stddev: 0.000221384937644317",
            "extra": "mean: 6.496601226993885 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.94966752444782,
            "unit": "iter/sec",
            "range": "stddev: 0.00033774039215977796",
            "extra": "mean: 5.0517892376681806 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.87382975393945,
            "unit": "iter/sec",
            "range": "stddev: 0.00017922325315718852",
            "extra": "mean: 3.0686723163841636 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.24429814958813,
            "unit": "iter/sec",
            "range": "stddev: 0.0005478190974999051",
            "extra": "mean: 8.83046666666667 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.53332538292312,
            "unit": "iter/sec",
            "range": "stddev: 0.0005980388645234917",
            "extra": "mean: 7.488767295597394 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.64703213537797,
            "unit": "iter/sec",
            "range": "stddev: 0.00013982044508241027",
            "extra": "mean: 4.886462264150895 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.3343024367822,
            "unit": "iter/sec",
            "range": "stddev: 0.0001871383541941301",
            "extra": "mean: 3.1120238095238375 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.498607715032849,
            "unit": "iter/sec",
            "range": "stddev: 0.0020010114530313356",
            "extra": "mean: 74.08171428571413 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.651728035734799,
            "unit": "iter/sec",
            "range": "stddev: 0.0004735941903603774",
            "extra": "mean: 73.25079999999981 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.39514344961245,
            "unit": "iter/sec",
            "range": "stddev: 0.00036338697368318556",
            "extra": "mean: 5.8687118644065706 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.66348448686986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002609858591514496",
            "extra": "mean: 4.190000000000064 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.35127019083427,
            "unit": "iter/sec",
            "range": "stddev: 0.0001142051242491098",
            "extra": "mean: 2.11259599999984 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 462.604521523718,
            "unit": "iter/sec",
            "range": "stddev: 0.00009515593610375433",
            "extra": "mean: 2.16167364016724 msec\nrounds: 478"
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
        "date": 1643760334339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.60975527380498,
            "unit": "iter/sec",
            "range": "stddev: 0.0010776520397288848",
            "extra": "mean: 9.04079389312982 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.20032181014807,
            "unit": "iter/sec",
            "range": "stddev: 0.0014470648076270395",
            "extra": "mean: 7.396432098765467 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.5721389585967,
            "unit": "iter/sec",
            "range": "stddev: 0.00044613389675264554",
            "extra": "mean: 4.985737327188928 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.01325393742314,
            "unit": "iter/sec",
            "range": "stddev: 0.0003209117771251008",
            "extra": "mean: 3.2256685393259095 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.70047143989632,
            "unit": "iter/sec",
            "range": "stddev: 0.0010131098981438688",
            "extra": "mean: 10.13166386554648 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.96815358649238,
            "unit": "iter/sec",
            "range": "stddev: 0.0007240306485134185",
            "extra": "mean: 8.066587837837737 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.77163545747982,
            "unit": "iter/sec",
            "range": "stddev: 0.00031789447888687746",
            "extra": "mean: 5.005715639810356 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.5266312413966,
            "unit": "iter/sec",
            "range": "stddev: 0.0002837304123070058",
            "extra": "mean: 3.305494117647001 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.849138267600008,
            "unit": "iter/sec",
            "range": "stddev: 0.0029930259814515588",
            "extra": "mean: 77.82623076923137 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.961006811009263,
            "unit": "iter/sec",
            "range": "stddev: 0.002562703913087395",
            "extra": "mean: 77.1544999999989 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.09572787182827,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005930171600157",
            "extra": "mean: 6.325281609195172 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.53049534619987,
            "unit": "iter/sec",
            "range": "stddev: 0.0004032765785152704",
            "extra": "mean: 4.282096000000081 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.7529710527157,
            "unit": "iter/sec",
            "range": "stddev: 0.00018023983145007338",
            "extra": "mean: 2.198996078431511 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 406.82257805103086,
            "unit": "iter/sec",
            "range": "stddev: 0.00031491552004834193",
            "extra": "mean: 2.4580739957715974 msec\nrounds: 473"
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
        "date": 1643761487560,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.38649935560866,
            "unit": "iter/sec",
            "range": "stddev: 0.0004976785334678148",
            "extra": "mean: 8.238148437499982 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.6882342626683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004407471770273771",
            "extra": "mean: 6.636218181818203 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.55465462161035,
            "unit": "iter/sec",
            "range": "stddev: 0.00032247212944342996",
            "extra": "mean: 5.061890350877164 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.95355356178095,
            "unit": "iter/sec",
            "range": "stddev: 0.00017432663251653897",
            "extra": "mean: 3.185184523809559 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.93836504142992,
            "unit": "iter/sec",
            "range": "stddev: 0.000554508475850422",
            "extra": "mean: 8.77667500000007 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.27337782438684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041631738826617",
            "extra": "mean: 7.028721854304576 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.38924439791765,
            "unit": "iter/sec",
            "range": "stddev: 0.0003677524500600831",
            "extra": "mean: 5.336485576923071 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.3793757689709,
            "unit": "iter/sec",
            "range": "stddev: 0.000054771220607736256",
            "extra": "mean: 3.111587349397515 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.50265664769537,
            "unit": "iter/sec",
            "range": "stddev: 0.0017807336755040785",
            "extra": "mean: 74.05950000000036 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.987217794714805,
            "unit": "iter/sec",
            "range": "stddev: 0.0034535384792216996",
            "extra": "mean: 76.99878571428543 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.47863417610134,
            "unit": "iter/sec",
            "range": "stddev: 0.0004962996947265618",
            "extra": "mean: 6.231359116021945 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.13213498884684,
            "unit": "iter/sec",
            "range": "stddev: 0.00032093488271200564",
            "extra": "mean: 4.217058139534878 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.9659152220744,
            "unit": "iter/sec",
            "range": "stddev: 0.00018149229570886614",
            "extra": "mean: 2.188347022587066 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.25186493314334,
            "unit": "iter/sec",
            "range": "stddev: 0.00017432976053281875",
            "extra": "mean: 2.24088699360353 msec\nrounds: 469"
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
        "date": 1643762530542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.95756484801845,
            "unit": "iter/sec",
            "range": "stddev: 0.00047632686305200037",
            "extra": "mean: 8.26736220472433 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.98991453801818,
            "unit": "iter/sec",
            "range": "stddev: 0.000554821517901331",
            "extra": "mean: 6.897031446540975 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.27811255526956,
            "unit": "iter/sec",
            "range": "stddev: 0.00017286248486458704",
            "extra": "mean: 4.8478240740740866 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.5002118279059,
            "unit": "iter/sec",
            "range": "stddev: 0.00012377627779675283",
            "extra": "mean: 3.0534331395348158 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.85314340230995,
            "unit": "iter/sec",
            "range": "stddev: 0.00041458761117277966",
            "extra": "mean: 8.940294117647019 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.4775874833354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896323753914232",
            "extra": "mean: 7.605859060402583 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.43777541407374,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143618743033849",
            "extra": "mean: 5.014095238095165 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.43864387826153,
            "unit": "iter/sec",
            "range": "stddev: 0.00015740591466732086",
            "extra": "mean: 3.1701886227545852 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.953460057086335,
            "unit": "iter/sec",
            "range": "stddev: 0.007714989417995939",
            "extra": "mean: 83.65778571428554 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.83222869231348,
            "unit": "iter/sec",
            "range": "stddev: 0.0027421482083771972",
            "extra": "mean: 77.92878571428525 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.29576971754716,
            "unit": "iter/sec",
            "range": "stddev: 0.00018814559170521276",
            "extra": "mean: 5.941919999999478 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.44858611477957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011155179050284897",
            "extra": "mean: 4.090839779005534 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.80231688366155,
            "unit": "iter/sec",
            "range": "stddev: 0.00011017408661144494",
            "extra": "mean: 2.1105848670755702 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.47300384929605,
            "unit": "iter/sec",
            "range": "stddev: 0.00013179595827464449",
            "extra": "mean: 2.2100766045548816 msec\nrounds: 483"
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
        "date": 1643775605877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.83113975595279,
            "unit": "iter/sec",
            "range": "stddev: 0.000568661558738249",
            "extra": "mean: 8.486720930232538 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.22639932568944,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907196871699746",
            "extra": "mean: 7.080829113924009 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.20754137626741,
            "unit": "iter/sec",
            "range": "stddev: 0.0008356229507918599",
            "extra": "mean: 5.1491306306306095 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.214026411321,
            "unit": "iter/sec",
            "range": "stddev: 0.000807583735759321",
            "extra": "mean: 3.6203809523809674 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.323907283418,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687077108086874",
            "extra": "mean: 9.064218487394916 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.05651936745792,
            "unit": "iter/sec",
            "range": "stddev: 0.0004262799034759628",
            "extra": "mean: 7.296259999999937 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.77728724492914,
            "unit": "iter/sec",
            "range": "stddev: 0.00036775951298022395",
            "extra": "mean: 5.411920560747615 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.771706041946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002452436964841254",
            "extra": "mean: 3.347037151702729 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.673076735259878,
            "unit": "iter/sec",
            "range": "stddev: 0.0025995433242214784",
            "extra": "mean: 73.13642857142888 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.030468019578613,
            "unit": "iter/sec",
            "range": "stddev: 0.008578261052295342",
            "extra": "mean: 83.12228571428649 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.15567280559333,
            "unit": "iter/sec",
            "range": "stddev: 0.0008503399068325091",
            "extra": "mean: 6.615696132596594 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.28813841200284,
            "unit": "iter/sec",
            "range": "stddev: 0.00047880726641079147",
            "extra": "mean: 4.419144578313247 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.5840470367167,
            "unit": "iter/sec",
            "range": "stddev: 0.00022446171894862616",
            "extra": "mean: 2.2543642105263246 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.8567035968654,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421426133575769",
            "extra": "mean: 2.2378538622129667 msec\nrounds: 479"
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
        "date": 1643776062112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.87326455192674,
            "unit": "iter/sec",
            "range": "stddev: 0.0006156647655045913",
            "extra": "mean: 8.483687999999947 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.4546308779681,
            "unit": "iter/sec",
            "range": "stddev: 0.0004929895475906714",
            "extra": "mean: 7.3284431137723995 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.51346579962748,
            "unit": "iter/sec",
            "range": "stddev: 0.00016958418368806497",
            "extra": "mean: 4.795853333333192 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.3000407085491,
            "unit": "iter/sec",
            "range": "stddev: 0.00017165876145818529",
            "extra": "mean: 3.171582210242594 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.5727048539102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006760401343032772",
            "extra": "mean: 9.472145299145113 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.83107245912944,
            "unit": "iter/sec",
            "range": "stddev: 0.00032551114327877",
            "extra": "mean: 7.255258064516086 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.62944971666937,
            "unit": "iter/sec",
            "range": "stddev: 0.000259104922530321",
            "extra": "mean: 5.009280952380938 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.6758880671211,
            "unit": "iter/sec",
            "range": "stddev: 0.00035454052952371695",
            "extra": "mean: 3.099084985835651 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.9621625395179,
            "unit": "iter/sec",
            "range": "stddev: 0.00236530010641565",
            "extra": "mean: 71.62214285714289 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.100359043411647,
            "unit": "iter/sec",
            "range": "stddev: 0.0037985640237930317",
            "extra": "mean: 76.3337857142865 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.45406636196694,
            "unit": "iter/sec",
            "range": "stddev: 0.000360465411830309",
            "extra": "mean: 6.043973544973391 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.44298710366056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003094958969244624",
            "extra": "mean: 4.21153731343276 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.1750373372769,
            "unit": "iter/sec",
            "range": "stddev: 0.00017527961840390857",
            "extra": "mean: 2.177818737270493 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.37014157798046,
            "unit": "iter/sec",
            "range": "stddev: 0.00018388309229454047",
            "extra": "mean: 2.2656720647772266 msec\nrounds: 494"
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
        "date": 1643782402589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.0381632418282,
            "unit": "iter/sec",
            "range": "stddev: 0.0011891395163075593",
            "extra": "mean: 8.692767441860523 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.73157830070983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005400357174177829",
            "extra": "mean: 6.723521739130415 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.73635967482343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003762527230648409",
            "extra": "mean: 4.884330275229421 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.0670830658303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002131876163959363",
            "extra": "mean: 3.1243450292397723 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.33284686711836,
            "unit": "iter/sec",
            "range": "stddev: 0.000669901027392371",
            "extra": "mean: 8.902115702479504 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.87391007405316,
            "unit": "iter/sec",
            "range": "stddev: 0.000810080140645932",
            "extra": "mean: 7.944458064516212 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.8813957997193,
            "unit": "iter/sec",
            "range": "stddev: 0.0004951863207572183",
            "extra": "mean: 5.157792452830319 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.09424483318975,
            "unit": "iter/sec",
            "range": "stddev: 0.0003681262912149953",
            "extra": "mean: 3.2563293413173184 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.992940770555611,
            "unit": "iter/sec",
            "range": "stddev: 0.004765913423092992",
            "extra": "mean: 83.38238461538502 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.900205850427568,
            "unit": "iter/sec",
            "range": "stddev: 0.0024443608841300773",
            "extra": "mean: 77.5181428571433 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.36790359066595,
            "unit": "iter/sec",
            "range": "stddev: 0.000528365235462475",
            "extra": "mean: 6.121153409090666 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 222.42755499366538,
            "unit": "iter/sec",
            "range": "stddev: 0.00040762019839996424",
            "extra": "mean: 4.495845849802555 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.9106423087253,
            "unit": "iter/sec",
            "range": "stddev: 0.00016857202698580766",
            "extra": "mean: 2.1649208924951204 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.3673424328144,
            "unit": "iter/sec",
            "range": "stddev: 0.00021874073797873903",
            "extra": "mean: 2.250390396659705 msec\nrounds: 479"
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
        "date": 1643824300366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.24863818055236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003628313257806356",
            "extra": "mean: 8.385839999999973 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.1748855729717,
            "unit": "iter/sec",
            "range": "stddev: 0.00023761547056989918",
            "extra": "mean: 6.6148553459119555 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.76750987013534,
            "unit": "iter/sec",
            "range": "stddev: 0.00021585792288346454",
            "extra": "mean: 4.83634977578475 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.303307621912,
            "unit": "iter/sec",
            "range": "stddev: 0.00018618815098958965",
            "extra": "mean: 3.1220408163265247 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.72071335784078,
            "unit": "iter/sec",
            "range": "stddev: 0.00039541621781022683",
            "extra": "mean: 9.197879310344696 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.4564642682551,
            "unit": "iter/sec",
            "range": "stddev: 0.00026696712285569004",
            "extra": "mean: 7.119643835616702 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.86438902695312,
            "unit": "iter/sec",
            "range": "stddev: 0.0001137526873528685",
            "extra": "mean: 4.953820754717064 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.1338892596793,
            "unit": "iter/sec",
            "range": "stddev: 0.00017687024568216762",
            "extra": "mean: 3.309790909091022 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.232575751406749,
            "unit": "iter/sec",
            "range": "stddev: 0.0015958451502545061",
            "extra": "mean: 75.57107692307679 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.003804541671704,
            "unit": "iter/sec",
            "range": "stddev: 0.0029183527417497085",
            "extra": "mean: 76.90057142857094 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.5277358567493,
            "unit": "iter/sec",
            "range": "stddev: 0.00030899245477951473",
            "extra": "mean: 6.005005681817599 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.29353088030567,
            "unit": "iter/sec",
            "range": "stddev: 0.00018560126283979062",
            "extra": "mean: 4.110261363636401 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.88664931401314,
            "unit": "iter/sec",
            "range": "stddev: 0.00011308760557302174",
            "extra": "mean: 2.1603561076604305 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.5745774074277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000807385393644723",
            "extra": "mean: 2.264623126338475 msec\nrounds: 467"
          }
        ]
      }
    ]
  }
}