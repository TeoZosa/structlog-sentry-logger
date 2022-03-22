window.BENCHMARK_DATA = {
  "lastUpdate": 1647986055961,
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
        "date": 1643830737598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.30657906419165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005224427228120179",
            "extra": "mean: 8.381767441860523 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.68203932865248,
            "unit": "iter/sec",
            "range": "stddev: 0.00047067815944941893",
            "extra": "mean: 6.86426415094343 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.50928058075496,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613741801056081",
            "extra": "mean: 4.913780821917789 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.22188713485,
            "unit": "iter/sec",
            "range": "stddev: 0.000464410976523635",
            "extra": "mean: 3.182464497041368 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.2588749153085,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409856169783397",
            "extra": "mean: 9.500386554621661 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.52944704963448,
            "unit": "iter/sec",
            "range": "stddev: 0.0003609815969187139",
            "extra": "mean: 7.115946308724916 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.69022506560847,
            "unit": "iter/sec",
            "range": "stddev: 0.00038106330160064724",
            "extra": "mean: 5.058419047619197 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.0795112978167,
            "unit": "iter/sec",
            "range": "stddev: 0.00023105112394689238",
            "extra": "mean: 3.3774711246200777 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.54160319040173,
            "unit": "iter/sec",
            "range": "stddev: 0.0010034056431051114",
            "extra": "mean: 73.84649999999989 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.279355913297273,
            "unit": "iter/sec",
            "range": "stddev: 0.0016607175398768777",
            "extra": "mean: 75.30485714285666 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.58853018409806,
            "unit": "iter/sec",
            "range": "stddev: 0.0007129471105650599",
            "extra": "mean: 6.510902857142753 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.93076982117543,
            "unit": "iter/sec",
            "range": "stddev: 0.00020863849833014668",
            "extra": "mean: 4.202903225806323 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.7011094896105,
            "unit": "iter/sec",
            "range": "stddev: 0.0003025459248323593",
            "extra": "mean: 2.1992468879666305 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.85012645914213,
            "unit": "iter/sec",
            "range": "stddev: 0.00009668331554513825",
            "extra": "mean: 2.218031982942394 msec\nrounds: 469"
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
        "date": 1643842726883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.08979312405603,
            "unit": "iter/sec",
            "range": "stddev: 0.00035279383418477395",
            "extra": "mean: 8.327102362204695 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.1624165316091,
            "unit": "iter/sec",
            "range": "stddev: 0.0006624806773844812",
            "extra": "mean: 6.88883544303804 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.7085357710279,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494386874115092",
            "extra": "mean: 4.9576484018265 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.5695344959839,
            "unit": "iter/sec",
            "range": "stddev: 0.00028683247836809096",
            "extra": "mean: 3.1489166666667336 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.96847148368332,
            "unit": "iter/sec",
            "range": "stddev: 0.0008846562861490871",
            "extra": "mean: 9.176966386554644 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.46858492607703,
            "unit": "iter/sec",
            "range": "stddev: 0.0004288183885064396",
            "extra": "mean: 7.381785234899172 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.43766230883847,
            "unit": "iter/sec",
            "range": "stddev: 0.0005028859999390642",
            "extra": "mean: 5.143036529680307 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.4165457817388,
            "unit": "iter/sec",
            "range": "stddev: 0.00021987512965145048",
            "extra": "mean: 3.2849725609756506 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.208818207034922,
            "unit": "iter/sec",
            "range": "stddev: 0.002527921036985492",
            "extra": "mean: 75.70700000000053 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.682673265972094,
            "unit": "iter/sec",
            "range": "stddev: 0.001829640982218234",
            "extra": "mean: 73.0851333333329 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.38254810276945,
            "unit": "iter/sec",
            "range": "stddev: 0.00046468123823599456",
            "extra": "mean: 6.046587209302129 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.03749877145634,
            "unit": "iter/sec",
            "range": "stddev: 0.00018957480963078163",
            "extra": "mean: 4.166015748031588 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.49403759099135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001681584382876755",
            "extra": "mean: 2.1715807770961746 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.3182675627267,
            "unit": "iter/sec",
            "range": "stddev: 0.0002452056905204019",
            "extra": "mean: 2.2971698513798438 msec\nrounds: 471"
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
        "date": 1643898498833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.66799366469584,
            "unit": "iter/sec",
            "range": "stddev: 0.00027864950410527945",
            "extra": "mean: 7.894654135338326 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.42322634630366,
            "unit": "iter/sec",
            "range": "stddev: 0.000545101755996436",
            "extra": "mean: 6.692399999999983 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.9039659159576,
            "unit": "iter/sec",
            "range": "stddev: 0.00029879376713337727",
            "extra": "mean: 4.631688888888953 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.15858038799894,
            "unit": "iter/sec",
            "range": "stddev: 0.00021895936086250146",
            "extra": "mean: 3.0106101694915917 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.92273649762642,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763157076895061",
            "extra": "mean: 8.77787903225828 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.71650615628155,
            "unit": "iter/sec",
            "range": "stddev: 0.0004875010069406305",
            "extra": "mean: 6.862640522875946 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.4824254643857,
            "unit": "iter/sec",
            "range": "stddev: 0.0003436327108788885",
            "extra": "mean: 4.86659624413145 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.007277688486,
            "unit": "iter/sec",
            "range": "stddev: 0.00022557285573518898",
            "extra": "mean: 3.067416184971009 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.278197200197377,
            "unit": "iter/sec",
            "range": "stddev: 0.003173493481814403",
            "extra": "mean: 75.311428571428 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.514365770814393,
            "unit": "iter/sec",
            "range": "stddev: 0.0032744268127994237",
            "extra": "mean: 73.99533333333324 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.9407350665226,
            "unit": "iter/sec",
            "range": "stddev: 0.00032476809028614755",
            "extra": "mean: 5.782327683615689 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.90291060253384,
            "unit": "iter/sec",
            "range": "stddev: 0.000273629801961958",
            "extra": "mean: 4.116871212121113 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 490.02489551765046,
            "unit": "iter/sec",
            "range": "stddev: 0.00007398940237114309",
            "extra": "mean: 2.0407126436782854 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.78141614303934,
            "unit": "iter/sec",
            "range": "stddev: 0.00007603000575484818",
            "extra": "mean: 2.1796872427984724 msec\nrounds: 486"
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
        "date": 1643988226975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.02776689124735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003638842836994238",
            "extra": "mean: 7.872294573643359 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.621789707517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003567091626479057",
            "extra": "mean: 6.425835365853635 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.4408181348323,
            "unit": "iter/sec",
            "range": "stddev: 0.00023370979479154708",
            "extra": "mean: 4.751929824561347 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8878628584615,
            "unit": "iter/sec",
            "range": "stddev: 0.00027283127559264253",
            "extra": "mean: 3.1358985915492505 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.36629729188203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005669454169362768",
            "extra": "mean: 8.743834710743775 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.6148063292048,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359428493784274",
            "extra": "mean: 7.1625641025640885 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.04646306497796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002871815402063952",
            "extra": "mean: 4.806618604651192 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.8527919485926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002972440726013455",
            "extra": "mean: 3.3238847262247524 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.313329626042261,
            "unit": "iter/sec",
            "range": "stddev: 0.009017648237249067",
            "extra": "mean: 88.39130769230754 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.172305040476646,
            "unit": "iter/sec",
            "range": "stddev: 0.004272270786167801",
            "extra": "mean: 75.91685714285694 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.3546342453693,
            "unit": "iter/sec",
            "range": "stddev: 0.0004876897973151158",
            "extra": "mean: 6.01125423728817 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 212.68209849713526,
            "unit": "iter/sec",
            "range": "stddev: 0.0005726464932615064",
            "extra": "mean: 4.7018531746030785 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.95532046997084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002796421366202538",
            "extra": "mean: 2.198018036072192 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.31487677097005,
            "unit": "iter/sec",
            "range": "stddev: 0.00025668358787837555",
            "extra": "mean: 2.265955789473582 msec\nrounds: 475"
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
        "date": 1643988680885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.21405837955841,
            "unit": "iter/sec",
            "range": "stddev: 0.0008012316927096855",
            "extra": "mean: 8.459230769230745 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.350161822419,
            "unit": "iter/sec",
            "range": "stddev: 0.0002510336918929392",
            "extra": "mean: 6.395899999999938 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.1041503007028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002794982175059088",
            "extra": "mean: 4.759544247787546 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.2924759588181,
            "unit": "iter/sec",
            "range": "stddev: 0.00017616736397913998",
            "extra": "mean: 3.046064327485357 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.05841100562017,
            "unit": "iter/sec",
            "range": "stddev: 0.00033621062989952087",
            "extra": "mean: 8.691237704918015 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.91764784517406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002132133091702847",
            "extra": "mean: 6.8531806451612365 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.59034263090686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478803908708617",
            "extra": "mean: 4.936069444444691 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 293.738016340337,
            "unit": "iter/sec",
            "range": "stddev: 0.00038359641608261947",
            "extra": "mean: 3.404394202898676 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.037396841597387,
            "unit": "iter/sec",
            "range": "stddev: 0.0014571532686549773",
            "extra": "mean: 76.70242857142918 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.377325624171812,
            "unit": "iter/sec",
            "range": "stddev: 0.003001303706650594",
            "extra": "mean: 74.7533571428564 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.91375061348563,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763028672100901",
            "extra": "mean: 6.372927777777923 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.69520610607677,
            "unit": "iter/sec",
            "range": "stddev: 0.00019656412566747893",
            "extra": "mean: 4.12039453124971 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.13916587453235,
            "unit": "iter/sec",
            "range": "stddev: 0.0001385787088698752",
            "extra": "mean: 2.08707630522081 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.6147605566189,
            "unit": "iter/sec",
            "range": "stddev: 0.00019123607146329027",
            "extra": "mean: 2.2290840336132716 msec\nrounds: 476"
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
        "date": 1644011470677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.65523332648343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005390976802111119",
            "extra": "mean: 8.288078125000014 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.4825057290051,
            "unit": "iter/sec",
            "range": "stddev: 0.0005679698558511006",
            "extra": "mean: 6.9212531645569895 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.7521661238377,
            "unit": "iter/sec",
            "range": "stddev: 0.0004977921611191472",
            "extra": "mean: 5.031391705069137 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.13367090981376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002326249134209121",
            "extra": "mean: 3.1833582089552417 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.80017291220389,
            "unit": "iter/sec",
            "range": "stddev: 0.0006020551912858067",
            "extra": "mean: 9.107453781512703 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.1279923842943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007551354931270905",
            "extra": "mean: 7.239662162162172 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.81095373534805,
            "unit": "iter/sec",
            "range": "stddev: 0.0003421587326494054",
            "extra": "mean: 5.055331775700871 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.43212340289955,
            "unit": "iter/sec",
            "range": "stddev: 0.00018123762467936143",
            "extra": "mean: 3.22131610942252 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.708515827950277,
            "unit": "iter/sec",
            "range": "stddev: 0.001342665867544216",
            "extra": "mean: 72.94735714285723 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.580327150081205,
            "unit": "iter/sec",
            "range": "stddev: 0.0022684646947726873",
            "extra": "mean: 73.63592857142771 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.32482954080052,
            "unit": "iter/sec",
            "range": "stddev: 0.00033556441368351973",
            "extra": "mean: 6.012331428571786 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 230.297581322688,
            "unit": "iter/sec",
            "range": "stddev: 0.00040292538290949306",
            "extra": "mean: 4.342207999999886 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.0335857409378,
            "unit": "iter/sec",
            "range": "stddev: 0.00014434462269154592",
            "extra": "mean: 2.155016427104661 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.054133268823,
            "unit": "iter/sec",
            "range": "stddev: 0.00017764109860067434",
            "extra": "mean: 2.293293248945103 msec\nrounds: 474"
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
        "date": 1644244442860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.7984591941509,
            "unit": "iter/sec",
            "range": "stddev: 0.00038970658442271516",
            "extra": "mean: 7.645349999999989 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.87122499376812,
            "unit": "iter/sec",
            "range": "stddev: 0.00034894643876827214",
            "extra": "mean: 6.41555232558146 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.97561206925081,
            "unit": "iter/sec",
            "range": "stddev: 0.0003972489514973496",
            "extra": "mean: 4.525386266094438 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.82405536162867,
            "unit": "iter/sec",
            "range": "stddev: 0.00021106518853693452",
            "extra": "mean: 2.968909090909072 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.42048297906143,
            "unit": "iter/sec",
            "range": "stddev: 0.0003197318295882152",
            "extra": "mean: 8.10238281250003 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.31024332754907,
            "unit": "iter/sec",
            "range": "stddev: 0.00025337454216632605",
            "extra": "mean: 6.6089378881986764 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.79211191130133,
            "unit": "iter/sec",
            "range": "stddev: 0.00043289049126820034",
            "extra": "mean: 4.677441048034937 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.28533081609424,
            "unit": "iter/sec",
            "range": "stddev: 0.00021441203948591728",
            "extra": "mean: 3.0742240896358393 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.85998824672996,
            "unit": "iter/sec",
            "range": "stddev: 0.0014597586819486941",
            "extra": "mean: 72.15013333333337 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.303396007636124,
            "unit": "iter/sec",
            "range": "stddev: 0.00161596843439165",
            "extra": "mean: 69.91346666666658 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.10502082406387,
            "unit": "iter/sec",
            "range": "stddev: 0.00033659376572629465",
            "extra": "mean: 5.552316062176041 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.6488473369605,
            "unit": "iter/sec",
            "range": "stddev: 0.00019991924076301787",
            "extra": "mean: 4.172772000000236 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.02571845804925,
            "unit": "iter/sec",
            "range": "stddev: 0.00011239378286881755",
            "extra": "mean: 2.192858778626083 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.3744700225608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000957842179743837",
            "extra": "mean: 2.2056822033897014 msec\nrounds: 472"
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
        "date": 1644418779910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.79993889128171,
            "unit": "iter/sec",
            "range": "stddev: 0.0007280418450539909",
            "extra": "mean: 8.48896875 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.5981457160341,
            "unit": "iter/sec",
            "range": "stddev: 0.00041874244219132983",
            "extra": "mean: 6.775152866242048 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.32521536425605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534082616905797",
            "extra": "mean: 4.754541666666688 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.12009724075733,
            "unit": "iter/sec",
            "range": "stddev: 0.0004749356956540171",
            "extra": "mean: 3.3884510385756808 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.22137899272361,
            "unit": "iter/sec",
            "range": "stddev: 0.0010198008553603474",
            "extra": "mean: 9.155716666666702 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.96232424849887,
            "unit": "iter/sec",
            "range": "stddev: 0.000636694897803873",
            "extra": "mean: 7.248355704697985 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.40210940270373,
            "unit": "iter/sec",
            "range": "stddev: 0.0007880016818211434",
            "extra": "mean: 5.252042654028496 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.7966513619009,
            "unit": "iter/sec",
            "range": "stddev: 0.0003351501432392871",
            "extra": "mean: 3.280875939849641 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.344078853975695,
            "unit": "iter/sec",
            "range": "stddev: 0.004023152643426419",
            "extra": "mean: 81.01050000000016 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.702353020165777,
            "unit": "iter/sec",
            "range": "stddev: 0.0039281738116463205",
            "extra": "mean: 78.72557142857214 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.96372324575037,
            "unit": "iter/sec",
            "range": "stddev: 0.0009544472295484817",
            "extra": "mean: 6.62410795454563 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 152.82795393085902,
            "unit": "iter/sec",
            "range": "stddev: 0.00273784212544706",
            "extra": "mean: 6.543305555555698 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 385.5447684113278,
            "unit": "iter/sec",
            "range": "stddev: 0.0009695130707119237",
            "extra": "mean: 2.59373251028821 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.3792967523822,
            "unit": "iter/sec",
            "range": "stddev: 0.00042923390180554674",
            "extra": "mean: 2.3619482758621055 msec\nrounds: 464"
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
        "date": 1644420693801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.60182479266561,
            "unit": "iter/sec",
            "range": "stddev: 0.00039186138915613524",
            "extra": "mean: 7.898780303030298 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.57972289928378,
            "unit": "iter/sec",
            "range": "stddev: 0.00019437654473225947",
            "extra": "mean: 6.345994152046736 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.98008242079385,
            "unit": "iter/sec",
            "range": "stddev: 0.00018363620022448032",
            "extra": "mean: 4.587575107296164 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9411852409303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546084671843334",
            "extra": "mean: 3.1651460674157454 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.06435721349669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006499841732435249",
            "extra": "mean: 9.168898305084864 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.97275300845203,
            "unit": "iter/sec",
            "range": "stddev: 0.0003754748629209341",
            "extra": "mean: 6.8505935483870655 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.19027029797502,
            "unit": "iter/sec",
            "range": "stddev: 0.00035096443397628145",
            "extra": "mean: 4.921495495495514 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3491852537841,
            "unit": "iter/sec",
            "range": "stddev: 0.0001728799510319374",
            "extra": "mean: 3.092631884057908 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.509353780061899,
            "unit": "iter/sec",
            "range": "stddev: 0.001167395996261318",
            "extra": "mean: 74.02278571428589 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.65191707045441,
            "unit": "iter/sec",
            "range": "stddev: 0.0034018782409021946",
            "extra": "mean: 73.24978571428683 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.26670816038748,
            "unit": "iter/sec",
            "range": "stddev: 0.00032570163317143007",
            "extra": "mean: 5.942946236559319 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.65359896750206,
            "unit": "iter/sec",
            "range": "stddev: 0.00011959078346115263",
            "extra": "mean: 4.03789811320781 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.10615696871497,
            "unit": "iter/sec",
            "range": "stddev: 0.0001289456685327264",
            "extra": "mean: 2.1136905222438838 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.5866126090804,
            "unit": "iter/sec",
            "range": "stddev: 0.00011870314579738388",
            "extra": "mean: 2.1998008130079825 msec\nrounds: 492"
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
        "date": 1644539549012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.06642633504563,
            "unit": "iter/sec",
            "range": "stddev: 0.00018561835561798295",
            "extra": "mean: 7.808447761193974 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.63314778202627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002423686389317186",
            "extra": "mean: 6.34384337349395 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.75751239851098,
            "unit": "iter/sec",
            "range": "stddev: 0.00015201768907038336",
            "extra": "mean: 4.592264069264036 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 345.41947722017005,
            "unit": "iter/sec",
            "range": "stddev: 0.00015721824348361417",
            "extra": "mean: 2.8950307262569357 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.92664353237461,
            "unit": "iter/sec",
            "range": "stddev: 0.00017366262997472475",
            "extra": "mean: 8.40854471544702 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.64100682971173,
            "unit": "iter/sec",
            "range": "stddev: 0.00011467699052190274",
            "extra": "mean: 6.638298701298673 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.3158642413769,
            "unit": "iter/sec",
            "range": "stddev: 0.00010915377509212727",
            "extra": "mean: 4.709963636363619 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.01512847685115,
            "unit": "iter/sec",
            "range": "stddev: 0.00005735130038883508",
            "extra": "mean: 2.9849398280803245 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.800078266158083,
            "unit": "iter/sec",
            "range": "stddev: 0.001239218836273732",
            "extra": "mean: 72.46335714285757 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.167677294313833,
            "unit": "iter/sec",
            "range": "stddev: 0.0010569295286682345",
            "extra": "mean: 70.58319999999914 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.96006915018893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001641203224561512",
            "extra": "mean: 5.619238095238392 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 255.10474215649674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006022258408636485",
            "extra": "mean: 3.9199584905659624 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 500.8156399643759,
            "unit": "iter/sec",
            "range": "stddev: 0.0001671580290098925",
            "extra": "mean: 1.9967427536231341 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 486.7314965979343,
            "unit": "iter/sec",
            "range": "stddev: 0.000034896914355809735",
            "extra": "mean: 2.054520833333398 msec\nrounds: 528"
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
        "date": 1644540286295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.06189532624298,
            "unit": "iter/sec",
            "range": "stddev: 0.000473378783195328",
            "extra": "mean: 8.125992187500056 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.78794994686385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003238493799882037",
            "extra": "mean: 6.4604512195121355 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.3337699216251,
            "unit": "iter/sec",
            "range": "stddev: 0.000290815343664238",
            "extra": "mean: 4.823140969162975 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.72653409431285,
            "unit": "iter/sec",
            "range": "stddev: 0.00012375293388856108",
            "extra": "mean: 2.978614730878192 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.79363613799221,
            "unit": "iter/sec",
            "range": "stddev: 0.00024985150994643755",
            "extra": "mean: 8.417959349593334 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.94658838067593,
            "unit": "iter/sec",
            "range": "stddev: 0.00023345381766944415",
            "extra": "mean: 6.759196078431608 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.23478450856217,
            "unit": "iter/sec",
            "range": "stddev: 0.00018273691841505374",
            "extra": "mean: 4.896325581395156 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.45522228441797,
            "unit": "iter/sec",
            "range": "stddev: 0.0003197395645890222",
            "extra": "mean: 3.2314852941176335 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.143108739510229,
            "unit": "iter/sec",
            "range": "stddev: 0.002389086943389792",
            "extra": "mean: 76.08549999999958 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.621724704943851,
            "unit": "iter/sec",
            "range": "stddev: 0.0035325282699526376",
            "extra": "mean: 73.41214285714211 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.89594346494405,
            "unit": "iter/sec",
            "range": "stddev: 0.00020052379044433805",
            "extra": "mean: 5.8515139664806055 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.24974599133967,
            "unit": "iter/sec",
            "range": "stddev: 0.00011255109255268618",
            "extra": "mean: 4.077476190476104 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.52093168806925,
            "unit": "iter/sec",
            "range": "stddev: 0.00013338387885245006",
            "extra": "mean: 2.21965269461082 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.0750547193026,
            "unit": "iter/sec",
            "range": "stddev: 0.00007086163499137861",
            "extra": "mean: 2.192621564482327 msec\nrounds: 473"
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
        "date": 1644598638210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.10680707032624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003792371435010179",
            "extra": "mean: 8.057575757575819 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.68933261463462,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021199649323607",
            "extra": "mean: 6.592421383647926 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.36380402687143,
            "unit": "iter/sec",
            "range": "stddev: 0.00018716891175506994",
            "extra": "mean: 4.822442396313361 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.1731491597034,
            "unit": "iter/sec",
            "range": "stddev: 0.00009624070353542694",
            "extra": "mean: 3.0287138810197556 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.50213270520645,
            "unit": "iter/sec",
            "range": "stddev: 0.0008747304793392876",
            "extra": "mean: 9.389483333333418 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.5676173021106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005988386741632047",
            "extra": "mean: 7.2166933333331444 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.42098428349092,
            "unit": "iter/sec",
            "range": "stddev: 0.00032315390848176027",
            "extra": "mean: 5.196938388625615 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.5268241733928,
            "unit": "iter/sec",
            "range": "stddev: 0.00023282760895676897",
            "extra": "mean: 3.189519756838924 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.932559473607915,
            "unit": "iter/sec",
            "range": "stddev: 0.0023638997173374117",
            "extra": "mean: 77.32421428571408 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.203835148231962,
            "unit": "iter/sec",
            "range": "stddev: 0.0015552668192697632",
            "extra": "mean: 75.73557142857113 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.95129539316093,
            "unit": "iter/sec",
            "range": "stddev: 0.00023696562130769426",
            "extra": "mean: 5.849619318181579 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.4692102706266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002319078794302619",
            "extra": "mean: 4.141314741035721 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 476.7004241188847,
            "unit": "iter/sec",
            "range": "stddev: 0.00010415594749895575",
            "extra": "mean: 2.0977535353537027 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.6566886159174,
            "unit": "iter/sec",
            "range": "stddev: 0.00014068286406506862",
            "extra": "mean: 2.238855983773044 msec\nrounds: 493"
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
        "date": 1644601202474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.72444852206362,
            "unit": "iter/sec",
            "range": "stddev: 0.00036128017891992094",
            "extra": "mean: 8.082476923076939 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.92891155100102,
            "unit": "iter/sec",
            "range": "stddev: 0.00039774970681223556",
            "extra": "mean: 6.62563580246907 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.11326732110643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662629049750829",
            "extra": "mean: 5.073225225225223 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 260.7679234104793,
            "unit": "iter/sec",
            "range": "stddev: 0.001548539342816632",
            "extra": "mean: 3.8348274853801048 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.83620279099965,
            "unit": "iter/sec",
            "range": "stddev: 0.003149814955800634",
            "extra": "mean: 10.22116528925624 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 121.0661675686677,
            "unit": "iter/sec",
            "range": "stddev: 0.0024661308641747122",
            "extra": "mean: 8.259945945945704 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.96083900433666,
            "unit": "iter/sec",
            "range": "stddev: 0.0016189547196125327",
            "extra": "mean: 5.815277511961785 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.7762337430934,
            "unit": "iter/sec",
            "range": "stddev: 0.00028081070421050717",
            "extra": "mean: 3.207428571428602 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.58564672646746,
            "unit": "iter/sec",
            "range": "stddev: 0.004628447797748645",
            "extra": "mean: 104.32264285714231 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.117060797352794,
            "unit": "iter/sec",
            "range": "stddev: 0.005321374546167994",
            "extra": "mean: 89.95183333333223 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.73240292246916,
            "unit": "iter/sec",
            "range": "stddev: 0.0007090520227057799",
            "extra": "mean: 6.3398514285713 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.19460402547264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895044462319894",
            "extra": "mean: 4.3253604651163124 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 424.1007828159524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630519211591315",
            "extra": "mean: 2.357930097087256 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.55489154751683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002311486847677169",
            "extra": "mean: 2.349873118279834 msec\nrounds: 465"
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
        "date": 1644601659133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.0884273223627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381862931639023",
            "extra": "mean: 8.058769230769228 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.43329736324387,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478149111544596",
            "extra": "mean: 6.475287500000026 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.64450546674777,
            "unit": "iter/sec",
            "range": "stddev: 0.00020105898299793563",
            "extra": "mean: 4.74733484162899 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.6630043029325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593987523557976",
            "extra": "mean: 3.070658892128249 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.2139211707579,
            "unit": "iter/sec",
            "range": "stddev: 0.00043723957073475386",
            "extra": "mean: 8.531409836065412 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9647173044979,
            "unit": "iter/sec",
            "range": "stddev: 0.0003853640657665131",
            "extra": "mean: 6.898230263157781 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.23556748902462,
            "unit": "iter/sec",
            "range": "stddev: 0.000345996787870527",
            "extra": "mean: 4.969300469483557 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.7850868966459,
            "unit": "iter/sec",
            "range": "stddev: 0.00024952613465987214",
            "extra": "mean: 3.3026725663716214 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.456013732823052,
            "unit": "iter/sec",
            "range": "stddev: 0.001112386566633105",
            "extra": "mean: 74.31621428571488 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.564984511694565,
            "unit": "iter/sec",
            "range": "stddev: 0.0018393282293176385",
            "extra": "mean: 73.71921428571378 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.28706016085778,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768846236268286",
            "extra": "mean: 6.523707865168859 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.70387476601036,
            "unit": "iter/sec",
            "range": "stddev: 0.00018919578733984574",
            "extra": "mean: 4.154482352941372 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.1689008181501,
            "unit": "iter/sec",
            "range": "stddev: 0.0001810816589913307",
            "extra": "mean: 2.271855185909957 msec\nrounds: 511"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.70419368822485,
            "unit": "iter/sec",
            "range": "stddev: 0.00018422958885335128",
            "extra": "mean: 2.3601371308017596 msec\nrounds: 474"
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
        "date": 1644602328104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.40679271933453,
            "unit": "iter/sec",
            "range": "stddev: 0.00027166058119287433",
            "extra": "mean: 7.7877500000000195 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.19918655952745,
            "unit": "iter/sec",
            "range": "stddev: 0.00032361352846987647",
            "extra": "mean: 6.570337349397623 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.0577549981196,
            "unit": "iter/sec",
            "range": "stddev: 0.00025759873187283636",
            "extra": "mean: 4.628392070484594 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.4764220615872,
            "unit": "iter/sec",
            "range": "stddev: 0.00006375659060633745",
            "extra": "mean: 2.9631699716714035 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.03454652802671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957435403123661",
            "extra": "mean: 8.330934959349484 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.28204546467884,
            "unit": "iter/sec",
            "range": "stddev: 0.00015600400186082687",
            "extra": "mean: 6.6541548387098075 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.9529078477748,
            "unit": "iter/sec",
            "range": "stddev: 0.00010240236674094936",
            "extra": "mean: 4.7629728506787075 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.70646980490034,
            "unit": "iter/sec",
            "range": "stddev: 0.00008398785229150108",
            "extra": "mean: 3.042227920227848 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.45186519078773,
            "unit": "iter/sec",
            "range": "stddev: 0.004208668110776823",
            "extra": "mean: 74.33913333333373 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.139711662999945,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044701576006493",
            "extra": "mean: 70.72279999999911 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.8428802641519,
            "unit": "iter/sec",
            "range": "stddev: 0.00021828986426545405",
            "extra": "mean: 5.7194207650274596 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.17051515754488,
            "unit": "iter/sec",
            "range": "stddev: 0.00021113819329440217",
            "extra": "mean: 4.078793893129468 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 477.8105532989661,
            "unit": "iter/sec",
            "range": "stddev: 0.0001174721029936642",
            "extra": "mean: 2.092879684418146 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 404.83199033318806,
            "unit": "iter/sec",
            "range": "stddev: 0.00026808724294392856",
            "extra": "mean: 2.4701605206075046 msec\nrounds: 461"
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
        "date": 1644603511228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.20125053534915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002763886708591034",
            "extra": "mean: 7.6218785714285024 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.6918463789228,
            "unit": "iter/sec",
            "range": "stddev: 0.00039662096134787943",
            "extra": "mean: 6.109039772727259 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.3772855126718,
            "unit": "iter/sec",
            "range": "stddev: 0.00008990201770748701",
            "extra": "mean: 4.437004366812179 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.1668300984122,
            "unit": "iter/sec",
            "range": "stddev: 0.00009145408581270756",
            "extra": "mean: 2.872186301369782 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.03946937115303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002803995042310052",
            "extra": "mean: 8.127473282442917 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.27507766210837,
            "unit": "iter/sec",
            "range": "stddev: 0.00028270870963684164",
            "extra": "mean: 6.4401835443037685 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.99144270574757,
            "unit": "iter/sec",
            "range": "stddev: 0.00012269295576990016",
            "extra": "mean: 4.545631355932163 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 348.6962220213338,
            "unit": "iter/sec",
            "range": "stddev: 0.00013832564112175523",
            "extra": "mean: 2.867825737265425 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.993111657568033,
            "unit": "iter/sec",
            "range": "stddev: 0.0011707722400595393",
            "extra": "mean: 71.46373333333335 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.681183420833422,
            "unit": "iter/sec",
            "range": "stddev: 0.0009531768536243986",
            "extra": "mean: 68.11439999999891 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.7455336900349,
            "unit": "iter/sec",
            "range": "stddev: 0.00029874989040503986",
            "extra": "mean: 5.626020408163223 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.5154029723803,
            "unit": "iter/sec",
            "range": "stddev: 0.0001947153710587028",
            "extra": "mean: 3.78049818181823 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 512.6407156123529,
            "unit": "iter/sec",
            "range": "stddev: 0.00006498294576973752",
            "extra": "mean: 1.9506839186690295 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 492.9288075413298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000767762590932336",
            "extra": "mean: 2.028690522243731 msec\nrounds: 517"
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
        "date": 1644938265214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.21618623569172,
            "unit": "iter/sec",
            "range": "stddev: 0.00044642846747786703",
            "extra": "mean: 8.050480620154998 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.86213917508658,
            "unit": "iter/sec",
            "range": "stddev: 0.0002936847716059778",
            "extra": "mean: 6.584919753086507 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.51458736076614,
            "unit": "iter/sec",
            "range": "stddev: 0.00019679323590404737",
            "extra": "mean: 4.7278063063062765 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.5141187943501,
            "unit": "iter/sec",
            "range": "stddev: 0.00022873362559969784",
            "extra": "mean: 3.2947396449703965 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.01468346901542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007445244658907296",
            "extra": "mean: 9.522477876106247 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.5628967884233,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896281570818224",
            "extra": "mean: 7.216939189189557 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.3014390612058,
            "unit": "iter/sec",
            "range": "stddev: 0.0003077739227021306",
            "extra": "mean: 5.042827751196247 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.0406980642137,
            "unit": "iter/sec",
            "range": "stddev: 0.00018517446749257923",
            "extra": "mean: 3.1541691842902106 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.785680038357105,
            "unit": "iter/sec",
            "range": "stddev: 0.0038423137610636175",
            "extra": "mean: 78.21249999999961 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.549073291776452,
            "unit": "iter/sec",
            "range": "stddev: 0.00468690560832312",
            "extra": "mean: 73.80578571428538 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.34884996995373,
            "unit": "iter/sec",
            "range": "stddev: 0.00039399323751737803",
            "extra": "mean: 6.121867403314681 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.25294189098418,
            "unit": "iter/sec",
            "range": "stddev: 0.0002371116484450491",
            "extra": "mean: 4.179676923076879 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.05824243669775,
            "unit": "iter/sec",
            "range": "stddev: 0.00011977917826745701",
            "extra": "mean: 2.159555555555638 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.46860697554246,
            "unit": "iter/sec",
            "range": "stddev: 0.00010166247877343683",
            "extra": "mean: 2.21009808102345 msec\nrounds: 469"
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
        "date": 1644939231625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.73247275618532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033783170428235",
            "extra": "mean: 8.351953125000005 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.1957205401742,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269725943592706",
            "extra": "mean: 6.527597484276717 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.59653939567534,
            "unit": "iter/sec",
            "range": "stddev: 0.0002465050531992032",
            "extra": "mean: 4.8876682027650045 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.84530100468504,
            "unit": "iter/sec",
            "range": "stddev: 0.00014879214965883857",
            "extra": "mean: 3.087894117647034 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.33178446561101,
            "unit": "iter/sec",
            "range": "stddev: 0.0003446796015592477",
            "extra": "mean: 8.823650000000102 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.61796069269124,
            "unit": "iter/sec",
            "range": "stddev: 0.0004784403483335073",
            "extra": "mean: 7.214072368420912 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.1569863442018,
            "unit": "iter/sec",
            "range": "stddev: 0.00028601445745159393",
            "extra": "mean: 4.971241706161225 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.0129869157929,
            "unit": "iter/sec",
            "range": "stddev: 0.00018199349983742837",
            "extra": "mean: 3.1346686217008504 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.92495402409201,
            "unit": "iter/sec",
            "range": "stddev: 0.0034527037884170904",
            "extra": "mean: 77.36971428571492 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.560674817923871,
            "unit": "iter/sec",
            "range": "stddev: 0.0014573559623852366",
            "extra": "mean: 73.74264285714206 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.8802167745803,
            "unit": "iter/sec",
            "range": "stddev: 0.000316111824324196",
            "extra": "mean: 5.992322033898046 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.30180587189176,
            "unit": "iter/sec",
            "range": "stddev: 0.00023999056109545003",
            "extra": "mean: 4.110121568627158 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.55132620810923,
            "unit": "iter/sec",
            "range": "stddev: 0.0001015639513653331",
            "extra": "mean: 2.134237903225666 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.3204144247577,
            "unit": "iter/sec",
            "range": "stddev: 0.00010685471670477447",
            "extra": "mean: 2.196255578093021 msec\nrounds: 493"
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
        "date": 1644939982808,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.59293301275234,
            "unit": "iter/sec",
            "range": "stddev: 0.000358873938941825",
            "extra": "mean: 8.026137404580144 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.3975787846564,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015902084887567",
            "extra": "mean: 6.649043209876597 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.5714236514167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004602304974845584",
            "extra": "mean: 4.8176188340806565 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.73623943399735,
            "unit": "iter/sec",
            "range": "stddev: 0.00014618655983676297",
            "extra": "mean: 3.0327270114941913 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.40393328890434,
            "unit": "iter/sec",
            "range": "stddev: 0.00034584859616698996",
            "extra": "mean: 8.590775000000109 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.36659311032102,
            "unit": "iter/sec",
            "range": "stddev: 0.001466362195278155",
            "extra": "mean: 8.37755333333322 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.14661298004032,
            "unit": "iter/sec",
            "range": "stddev: 0.000740264515392867",
            "extra": "mean: 5.551034146341663 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8322289445951,
            "unit": "iter/sec",
            "range": "stddev: 0.00019027451963446855",
            "extra": "mean: 3.136445783132465 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.869275194232108,
            "unit": "iter/sec",
            "range": "stddev: 0.001324451576321832",
            "extra": "mean: 84.25114285714359 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.866713153172144,
            "unit": "iter/sec",
            "range": "stddev: 0.0012977149655721539",
            "extra": "mean: 72.11514285714061 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.16442913926994,
            "unit": "iter/sec",
            "range": "stddev: 0.00027907527289195057",
            "extra": "mean: 6.16658045977013 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.34562719264397,
            "unit": "iter/sec",
            "range": "stddev: 0.00020231554218970375",
            "extra": "mean: 4.178058365758745 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.55079446988765,
            "unit": "iter/sec",
            "range": "stddev: 0.00020076729638781883",
            "extra": "mean: 2.199974155069366 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.78461043296136,
            "unit": "iter/sec",
            "range": "stddev: 0.00007510194156820528",
            "extra": "mean: 2.203688659793658 msec\nrounds: 485"
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
        "date": 1645454517420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.92507151510709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656077609039387",
            "extra": "mean: 8.479960937499982 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.3739578709668,
            "unit": "iter/sec",
            "range": "stddev: 0.00017324717962626627",
            "extra": "mean: 6.56280124223602 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.9941583831931,
            "unit": "iter/sec",
            "range": "stddev: 0.00013870553271657147",
            "extra": "mean: 4.717111111111069 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.5198964736396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001129130248930136",
            "extra": "mean: 3.0909999999999376 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.75829989403941,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998203364912087",
            "extra": "mean: 8.7139666666667 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.8206150065245,
            "unit": "iter/sec",
            "range": "stddev: 0.00036402158881465216",
            "extra": "mean: 7.051161073825514 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.94198552283,
            "unit": "iter/sec",
            "range": "stddev: 0.00021143451864804284",
            "extra": "mean: 4.927516587677737 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.6380271955331,
            "unit": "iter/sec",
            "range": "stddev: 0.00006653216755979988",
            "extra": "mean: 3.109085106382868 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.340702483276369,
            "unit": "iter/sec",
            "range": "stddev: 0.0033624932991480486",
            "extra": "mean: 74.95857142857203 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.805399094365791,
            "unit": "iter/sec",
            "range": "stddev: 0.0011940877892162",
            "extra": "mean: 72.43542857142872 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.34390083860407,
            "unit": "iter/sec",
            "range": "stddev: 0.00014423749850164328",
            "extra": "mean: 5.836215909091164 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.54905973751664,
            "unit": "iter/sec",
            "range": "stddev: 0.0001831690044837327",
            "extra": "mean: 4.13994573643411 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.19586737632136,
            "unit": "iter/sec",
            "range": "stddev: 0.00007170302643710567",
            "extra": "mean: 2.168276150627411 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.48155401874027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004932794281778502",
            "extra": "mean: 2.200309322034147 msec\nrounds: 472"
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
        "date": 1645921840375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.54090701487775,
            "unit": "iter/sec",
            "range": "stddev: 0.000542000894126871",
            "extra": "mean: 8.094484848484822 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.11108255420658,
            "unit": "iter/sec",
            "range": "stddev: 0.00022820861132482256",
            "extra": "mean: 6.405695121951187 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.2069323620969,
            "unit": "iter/sec",
            "range": "stddev: 0.000339151251433958",
            "extra": "mean: 5.122768888888952 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.74875277303465,
            "unit": "iter/sec",
            "range": "stddev: 0.00020332407039761328",
            "extra": "mean: 3.207711309523792 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.34035161585996,
            "unit": "iter/sec",
            "range": "stddev: 0.000695352646159675",
            "extra": "mean: 8.90152100840338 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.38839513644658,
            "unit": "iter/sec",
            "range": "stddev: 0.0006280452250783465",
            "extra": "mean: 7.27863513513536 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.272408441809,
            "unit": "iter/sec",
            "range": "stddev: 0.00039240787599366763",
            "extra": "mean: 4.993199052132831 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.9687234361509,
            "unit": "iter/sec",
            "range": "stddev: 0.00016296713274536464",
            "extra": "mean: 3.2157574850299158 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.042927876625303,
            "unit": "iter/sec",
            "range": "stddev: 0.004710970607628668",
            "extra": "mean: 83.03628571428615 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.156867577882041,
            "unit": "iter/sec",
            "range": "stddev: 0.0039094242993558",
            "extra": "mean: 76.00593333333356 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.56419976985742,
            "unit": "iter/sec",
            "range": "stddev: 0.00039585255073974046",
            "extra": "mean: 5.9678618784529105 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.48132467669183,
            "unit": "iter/sec",
            "range": "stddev: 0.0004926411847604951",
            "extra": "mean: 4.474646825396663 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.5270993000589,
            "unit": "iter/sec",
            "range": "stddev: 0.00013816168986396178",
            "extra": "mean: 2.200088842975331 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.3108971075017,
            "unit": "iter/sec",
            "range": "stddev: 0.0001111492880400278",
            "extra": "mean: 2.196301486199426 msec\nrounds: 471"
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
        "date": 1646063488420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.59548282823718,
            "unit": "iter/sec",
            "range": "stddev: 0.0010545662032476694",
            "extra": "mean: 8.503728000000002 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.04839916927526,
            "unit": "iter/sec",
            "range": "stddev: 0.0012488322267306872",
            "extra": "mean: 7.296692307692339 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.3297594011911,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899596755860228",
            "extra": "mean: 4.991769585253415 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.2971585027397,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308322643753683",
            "extra": "mean: 3.468643274853841 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.29741774902938,
            "unit": "iter/sec",
            "range": "stddev: 0.0008648644111416827",
            "extra": "mean: 9.233830508474544 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.38643289332964,
            "unit": "iter/sec",
            "range": "stddev: 0.000632342572811426",
            "extra": "mean: 7.226141891892071 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.20189631414203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007515827274324229",
            "extra": "mean: 5.096790697674419 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.567031524751,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766882266394558",
            "extra": "mean: 3.18911077844313 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.266759470807973,
            "unit": "iter/sec",
            "range": "stddev: 0.002012082105952346",
            "extra": "mean: 75.37635714285683 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.951067167934529,
            "unit": "iter/sec",
            "range": "stddev: 0.0028735634652828786",
            "extra": "mean: 77.21371428571493 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.86070722653733,
            "unit": "iter/sec",
            "range": "stddev: 0.0005236170546951155",
            "extra": "mean: 6.102744318181788 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.88203236338697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005437351729716699",
            "extra": "mean: 4.257456349206379 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.80452641075334,
            "unit": "iter/sec",
            "range": "stddev: 0.00016534373370696617",
            "extra": "mean: 2.1514420432220316 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.81416481833213,
            "unit": "iter/sec",
            "range": "stddev: 0.00011350559509885717",
            "extra": "mean: 2.1653731656182065 msec\nrounds: 477"
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
        "date": 1646086535963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.4714809248615,
            "unit": "iter/sec",
            "range": "stddev: 0.0003377640838181207",
            "extra": "mean: 8.370198412698375 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.3604787882254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008345435868831271",
            "extra": "mean: 7.333503144654176 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.90277365083824,
            "unit": "iter/sec",
            "range": "stddev: 0.00023967968138989784",
            "extra": "mean: 4.809940639269428 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.3336773643497,
            "unit": "iter/sec",
            "range": "stddev: 0.00010734968240677688",
            "extra": "mean: 3.0737672413792994 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.03504853424651,
            "unit": "iter/sec",
            "range": "stddev: 0.00035429736444364226",
            "extra": "mean: 9.006165289256124 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.6469072562608,
            "unit": "iter/sec",
            "range": "stddev: 0.00029249199579849366",
            "extra": "mean: 6.913386666666645 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.42862304616602,
            "unit": "iter/sec",
            "range": "stddev: 0.00030440956227572485",
            "extra": "mean: 4.989307339449533 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.8829803259966,
            "unit": "iter/sec",
            "range": "stddev: 0.00012195551429770494",
            "extra": "mean: 3.0875348837208865 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.001848119839723,
            "unit": "iter/sec",
            "range": "stddev: 0.0016553613064660166",
            "extra": "mean: 76.91214285714386 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.455548155004129,
            "unit": "iter/sec",
            "range": "stddev: 0.0015449207686222843",
            "extra": "mean: 74.3187857142854 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.373714743291,
            "unit": "iter/sec",
            "range": "stddev: 0.00018150036628290867",
            "extra": "mean: 5.869449999999945 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.3487729327736,
            "unit": "iter/sec",
            "range": "stddev: 0.00029800719144164973",
            "extra": "mean: 4.231035294117804 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.10235676684937,
            "unit": "iter/sec",
            "range": "stddev: 0.00015202156512833263",
            "extra": "mean: 2.173429423459216 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.7390994251284,
            "unit": "iter/sec",
            "range": "stddev: 0.00011961434253223837",
            "extra": "mean: 2.1990631578946678 msec\nrounds: 475"
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
        "date": 1646432646294,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.93136309910672,
            "unit": "iter/sec",
            "range": "stddev: 0.0012483165611258608",
            "extra": "mean: 9.715211864406742 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.17230577964378,
            "unit": "iter/sec",
            "range": "stddev: 0.0006111621819204737",
            "extra": "mean: 7.2901012658227025 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.32671020060442,
            "unit": "iter/sec",
            "range": "stddev: 0.000383191910099271",
            "extra": "mean: 5.042185185185169 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.750301654299,
            "unit": "iter/sec",
            "range": "stddev: 0.0003279601942060318",
            "extra": "mean: 3.167059523809595 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.09697859830261,
            "unit": "iter/sec",
            "range": "stddev: 0.0016618322783502769",
            "extra": "mean: 10.515581196581245 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.32939452443205,
            "unit": "iter/sec",
            "range": "stddev: 0.0007232993534832294",
            "extra": "mean: 7.732194244604513 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.47719027584503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006989558725475849",
            "extra": "mean: 5.764446601941766 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 285.78465911383387,
            "unit": "iter/sec",
            "range": "stddev: 0.00044931518053893725",
            "extra": "mean: 3.4991381381380573 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.480985280493709,
            "unit": "iter/sec",
            "range": "stddev: 0.006507247096064217",
            "extra": "mean: 87.10053846153852 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.956496711363474,
            "unit": "iter/sec",
            "range": "stddev: 0.0033533093093498475",
            "extra": "mean: 77.18135714285727 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.99799421286923,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745861011473875",
            "extra": "mean: 6.666755813953437 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.87374762486112,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547605464000824",
            "extra": "mean: 4.275811244980018 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 416.28210543149345,
            "unit": "iter/sec",
            "range": "stddev: 0.00048435022128755635",
            "extra": "mean: 2.4022171189978465 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 406.703718064693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003259233874148527",
            "extra": "mean: 2.458792372881463 msec\nrounds: 472"
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
        "date": 1646434996290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.6661219464798,
            "unit": "iter/sec",
            "range": "stddev: 0.0004740008538171415",
            "extra": "mean: 8.356583999999984 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.35941314642906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004903936287163455",
            "extra": "mean: 7.024474025974052 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.99540705102513,
            "unit": "iter/sec",
            "range": "stddev: 0.0004319122066484768",
            "extra": "mean: 5.102160377358545 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.88603249608053,
            "unit": "iter/sec",
            "range": "stddev: 0.00027037564082545693",
            "extra": "mean: 3.3796796407185816 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.64712514092224,
            "unit": "iter/sec",
            "range": "stddev: 0.0010407615224935086",
            "extra": "mean: 10.137142857143086 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.64810830779828,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856053778212862",
            "extra": "mean: 7.773141891891953 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.96829328960428,
            "unit": "iter/sec",
            "range": "stddev: 0.000857032522528343",
            "extra": "mean: 5.58758192090379 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.09478095400766,
            "unit": "iter/sec",
            "range": "stddev: 0.00048827635748083047",
            "extra": "mean: 3.6088734567901533 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.135094391338667,
            "unit": "iter/sec",
            "range": "stddev: 0.008028759865280882",
            "extra": "mean: 89.80615384615339 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.90668093025991,
            "unit": "iter/sec",
            "range": "stddev: 0.0033776041463182225",
            "extra": "mean: 83.98646153846092 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.1480458003854,
            "unit": "iter/sec",
            "range": "stddev: 0.0011267176354518946",
            "extra": "mean: 7.135311764705676 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.8594502114763,
            "unit": "iter/sec",
            "range": "stddev: 0.00046518442449112655",
            "extra": "mean: 4.675968253968406 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 401.0360523747995,
            "unit": "iter/sec",
            "range": "stddev: 0.00031249114010507373",
            "extra": "mean: 2.4935414012738732 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 388.3216485098092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003539751148071418",
            "extra": "mean: 2.5751847826087384 msec\nrounds: 460"
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
        "date": 1646435445094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.3916346104686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002438039262058263",
            "extra": "mean: 7.9119160305342975 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.379343869992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037885795680966",
            "extra": "mean: 6.73948255813954 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.5973727564022,
            "unit": "iter/sec",
            "range": "stddev: 0.00038083304239531606",
            "extra": "mean: 5.2466620370369705 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.1059896249929,
            "unit": "iter/sec",
            "range": "stddev: 0.00021065477081500913",
            "extra": "mean: 3.143606321839066 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.84786987987644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005579664881767032",
            "extra": "mean: 8.861487603305878 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.71352251099017,
            "unit": "iter/sec",
            "range": "stddev: 0.000516984292142909",
            "extra": "mean: 7.157503311258492 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.0454751760692,
            "unit": "iter/sec",
            "range": "stddev: 0.0003661379260089218",
            "extra": "mean: 5.127009478673071 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.756835739705,
            "unit": "iter/sec",
            "range": "stddev: 0.00024858175497682845",
            "extra": "mean: 3.1871815561959815 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.798888325128395,
            "unit": "iter/sec",
            "range": "stddev: 0.003678848360322014",
            "extra": "mean: 78.13178571428533 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.707656803354668,
            "unit": "iter/sec",
            "range": "stddev: 0.003292772912918431",
            "extra": "mean: 72.95192857142955 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.63212095129154,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896815896459671",
            "extra": "mean: 5.965443820224452 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.07070675634978,
            "unit": "iter/sec",
            "range": "stddev: 0.0004094677683689951",
            "extra": "mean: 4.462876984127073 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.4384597489041,
            "unit": "iter/sec",
            "range": "stddev: 0.00013828901061164222",
            "extra": "mean: 2.162449897750681 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.3483286254629,
            "unit": "iter/sec",
            "range": "stddev: 0.00017030487042834816",
            "extra": "mean: 2.235394514768017 msec\nrounds: 474"
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
        "date": 1646663962694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.6764772226327,
            "unit": "iter/sec",
            "range": "stddev: 0.0005902679884688184",
            "extra": "mean: 8.218515384615301 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.16011351331085,
            "unit": "iter/sec",
            "range": "stddev: 0.00033885105346020137",
            "extra": "mean: 6.572024539877336 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.1377648421099,
            "unit": "iter/sec",
            "range": "stddev: 0.00014865858061723541",
            "extra": "mean: 4.626678733031715 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.88420804492927,
            "unit": "iter/sec",
            "range": "stddev: 0.00012952797324608325",
            "extra": "mean: 3.0405838150288713 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.88551247148888,
            "unit": "iter/sec",
            "range": "stddev: 0.0003977585663181734",
            "extra": "mean: 8.629206349206319 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.40980604942544,
            "unit": "iter/sec",
            "range": "stddev: 0.00036298626638405087",
            "extra": "mean: 6.783809210526383 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.76750442148915,
            "unit": "iter/sec",
            "range": "stddev: 0.00019880331673519414",
            "extra": "mean: 4.722159817351678 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.0667562266752,
            "unit": "iter/sec",
            "range": "stddev: 0.000154913890656394",
            "extra": "mean: 3.002401114206157 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.804642225087516,
            "unit": "iter/sec",
            "range": "stddev: 0.0018881352781437834",
            "extra": "mean: 72.43939999999967 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.995709848407733,
            "unit": "iter/sec",
            "range": "stddev: 0.0024930221151581583",
            "extra": "mean: 71.45046666666701 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 180.478967893187,
            "unit": "iter/sec",
            "range": "stddev: 0.00020471343733812402",
            "extra": "mean: 5.540811827956766 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.48924968572337,
            "unit": "iter/sec",
            "range": "stddev: 0.00017624246961817173",
            "extra": "mean: 4.040579545454437 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 489.92389848776406,
            "unit": "iter/sec",
            "range": "stddev: 0.00009868980111829345",
            "extra": "mean: 2.0411333333333506 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 478.0901692941253,
            "unit": "iter/sec",
            "range": "stddev: 0.00010209904269743763",
            "extra": "mean: 2.0916556420234427 msec\nrounds: 514"
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
        "date": 1646752441694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.33266569250256,
            "unit": "iter/sec",
            "range": "stddev: 0.00032668155689123966",
            "extra": "mean: 8.108152000000032 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.95492956203861,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349099975278106",
            "extra": "mean: 6.80480745341611 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.88067079960072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002651273386850976",
            "extra": "mean: 4.810452054794508 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.56113336518104,
            "unit": "iter/sec",
            "range": "stddev: 0.00020823823497408624",
            "extra": "mean: 3.1098285714285927 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.62821849735582,
            "unit": "iter/sec",
            "range": "stddev: 0.000513279696645948",
            "extra": "mean: 8.958308333333184 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.55016465507444,
            "unit": "iter/sec",
            "range": "stddev: 0.00033491513985013346",
            "extra": "mean: 7.015074324324202 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.59160660555406,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794405136396174",
            "extra": "mean: 4.887786046511513 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.7572125828236,
            "unit": "iter/sec",
            "range": "stddev: 0.00010580459664562877",
            "extra": "mean: 3.032534124629145 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.681387839982571,
            "unit": "iter/sec",
            "range": "stddev: 0.0015762449048291032",
            "extra": "mean: 73.09199999999956 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.378880990393972,
            "unit": "iter/sec",
            "range": "stddev: 0.002642218458218811",
            "extra": "mean: 74.74466666666663 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.28779519513844,
            "unit": "iter/sec",
            "range": "stddev: 0.00043782612640938973",
            "extra": "mean: 6.1241564245811615 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.00521420373138,
            "unit": "iter/sec",
            "range": "stddev: 0.00015215387470868328",
            "extra": "mean: 4.098273076923074 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.1239141010646,
            "unit": "iter/sec",
            "range": "stddev: 0.0001183977674136606",
            "extra": "mean: 2.206901840490724 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.66937290271187,
            "unit": "iter/sec",
            "range": "stddev: 0.00026758115046814155",
            "extra": "mean: 2.2953185654005273 msec\nrounds: 474"
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
        "date": 1646753373680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.6783684210022,
            "unit": "iter/sec",
            "range": "stddev: 0.0003816039571267985",
            "extra": "mean: 7.89400757575757 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.2030801426211,
            "unit": "iter/sec",
            "range": "stddev: 0.0009324587082911868",
            "extra": "mean: 6.934664634146306 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.69773176436505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003074804813104472",
            "extra": "mean: 4.83798245614034 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.93744573572667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003929700851633408",
            "extra": "mean: 3.3677126760563456 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.62758595487794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008929756684635363",
            "extra": "mean: 9.121791666666764 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.24271848294595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780304964206357",
            "extra": "mean: 7.0302368421051655 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.84915673606528,
            "unit": "iter/sec",
            "range": "stddev: 0.0007003264568521182",
            "extra": "mean: 5.295231481481251 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.2658566897176,
            "unit": "iter/sec",
            "range": "stddev: 0.00027203027611571507",
            "extra": "mean: 3.202399425287306 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.698040397477886,
            "unit": "iter/sec",
            "range": "stddev: 0.0015819363430315022",
            "extra": "mean: 73.00314285714344 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.015519147223156,
            "unit": "iter/sec",
            "range": "stddev: 0.004784178534215977",
            "extra": "mean: 76.83135714285731 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.7366450163517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006889242203587714",
            "extra": "mean: 6.182890710382296 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.8635363345548,
            "unit": "iter/sec",
            "range": "stddev: 0.00021901292918554045",
            "extra": "mean: 4.050821011673341 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.792441839607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002068499881593835",
            "extra": "mean: 2.1561369047618704 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 447.09044559720803,
            "unit": "iter/sec",
            "range": "stddev: 0.00023892599472486657",
            "extra": "mean: 2.2366838966201446 msec\nrounds: 503"
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
        "date": 1646838463497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.0163611760368,
            "unit": "iter/sec",
            "range": "stddev: 0.0004451701007532548",
            "extra": "mean: 8.128999999999975 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.47136190072203,
            "unit": "iter/sec",
            "range": "stddev: 0.0003713709091648588",
            "extra": "mean: 6.558608695652141 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.03466420464827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569572461618564",
            "extra": "mean: 5.049621004566169 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.3730416201773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108912461485495",
            "extra": "mean: 3.18093432835819 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.1581607903261,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923624705392672",
            "extra": "mean: 8.837188524590179 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.57137646497867,
            "unit": "iter/sec",
            "range": "stddev: 0.0007915765921099328",
            "extra": "mean: 7.26895394736832 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.392432266488,
            "unit": "iter/sec",
            "range": "stddev: 0.00033359873672120596",
            "extra": "mean: 4.916603773584772 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.32833562947184,
            "unit": "iter/sec",
            "range": "stddev: 0.00017265961888731377",
            "extra": "mean: 3.1712976190476425 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.106331668829245,
            "unit": "iter/sec",
            "range": "stddev: 0.0013836328436968187",
            "extra": "mean: 76.2989999999998 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.35547798778744,
            "unit": "iter/sec",
            "range": "stddev: 0.002293074778450356",
            "extra": "mean: 74.87564285714247 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.57563399956499,
            "unit": "iter/sec",
            "range": "stddev: 0.0007509090705951706",
            "extra": "mean: 6.15098324022329 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.23535204753458,
            "unit": "iter/sec",
            "range": "stddev: 0.000343117437767626",
            "extra": "mean: 4.145329411764465 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.3177001587764,
            "unit": "iter/sec",
            "range": "stddev: 0.0001232607732844263",
            "extra": "mean: 2.1914556451613616 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.8960530870105,
            "unit": "iter/sec",
            "range": "stddev: 0.00013666382176660485",
            "extra": "mean: 2.2527796610166853 msec\nrounds: 472"
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
        "date": 1647271585742,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.94864283884503,
            "unit": "iter/sec",
            "range": "stddev: 0.00039168927334958377",
            "extra": "mean: 8.550761904761886 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.28257996767607,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384379487051719",
            "extra": "mean: 6.743880503144664 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.37303569879134,
            "unit": "iter/sec",
            "range": "stddev: 0.00038580817492296984",
            "extra": "mean: 5.092348837209298 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.26310889037336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002497992745832687",
            "extra": "mean: 3.3304124629079954 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.99720706302111,
            "unit": "iter/sec",
            "range": "stddev: 0.00043770893524741774",
            "extra": "mean: 9.174547008546833 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.18125459242512,
            "unit": "iter/sec",
            "range": "stddev: 0.0003295280954936787",
            "extra": "mean: 7.236871621621668 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.63749393051518,
            "unit": "iter/sec",
            "range": "stddev: 0.00027526561411087274",
            "extra": "mean: 5.034296296296444 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.0680112630738,
            "unit": "iter/sec",
            "range": "stddev: 0.00021512152830835353",
            "extra": "mean: 3.1941941176471436 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.277311068342632,
            "unit": "iter/sec",
            "range": "stddev: 0.0015442749200096475",
            "extra": "mean: 70.0412 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.777343434269234,
            "unit": "iter/sec",
            "range": "stddev: 0.001447374937437416",
            "extra": "mean: 72.58293333333323 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.12106132171542,
            "unit": "iter/sec",
            "range": "stddev: 0.00030941841925289054",
            "extra": "mean: 5.94809473684208 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.4750540476254,
            "unit": "iter/sec",
            "range": "stddev: 0.000140497796893536",
            "extra": "mean: 4.040811320754595 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.91339002237225,
            "unit": "iter/sec",
            "range": "stddev: 0.00011552275032906733",
            "extra": "mean: 2.169605009634155 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 457.87503434062563,
            "unit": "iter/sec",
            "range": "stddev: 0.000052570272960433444",
            "extra": "mean: 2.18400202020203 msec\nrounds: 495"
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
        "date": 1647613364253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.98119995740737,
            "unit": "iter/sec",
            "range": "stddev: 0.00020852949730427143",
            "extra": "mean: 7.634683453237422 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.07113894287406,
            "unit": "iter/sec",
            "range": "stddev: 0.00017357107505193715",
            "extra": "mean: 6.05799418604647 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 225.2499517321562,
            "unit": "iter/sec",
            "range": "stddev: 0.00022602980892790915",
            "extra": "mean: 4.4395126050419575 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 355.54378814885274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000584083268497612",
            "extra": "mean: 2.8125930851064056 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.38519779515067,
            "unit": "iter/sec",
            "range": "stddev: 0.0001920307576053158",
            "extra": "mean: 7.975423076923003 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.27576632649954,
            "unit": "iter/sec",
            "range": "stddev: 0.0001432681700079725",
            "extra": "mean: 6.398944785276224 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.5152079991609,
            "unit": "iter/sec",
            "range": "stddev: 0.0004371008090958243",
            "extra": "mean: 4.576340517241436 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 343.3422231130479,
            "unit": "iter/sec",
            "range": "stddev: 0.0001493780939642719",
            "extra": "mean: 2.9125459459460155 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.474880292739988,
            "unit": "iter/sec",
            "range": "stddev: 0.0018101730856458962",
            "extra": "mean: 69.08519999999996 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.913992867383234,
            "unit": "iter/sec",
            "range": "stddev: 0.0011634964474942558",
            "extra": "mean: 67.05112499999855 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.00246669955217,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694357920695841",
            "extra": "mean: 5.405333333333445 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 263.3975056824714,
            "unit": "iter/sec",
            "range": "stddev: 0.00018901671255366095",
            "extra": "mean: 3.7965431654675994 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 520.705102626967,
            "unit": "iter/sec",
            "range": "stddev: 0.00007849162846671224",
            "extra": "mean: 1.9204728260871293 msec\nrounds: 552"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 495.5784527705355,
            "unit": "iter/sec",
            "range": "stddev: 0.0001062284789391641",
            "extra": "mean: 2.017843984962404 msec\nrounds: 532"
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
        "date": 1647926902798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.1287810502892,
            "unit": "iter/sec",
            "range": "stddev: 0.001289831175412965",
            "extra": "mean: 9.696614173228374 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 127.19461673245095,
            "unit": "iter/sec",
            "range": "stddev: 0.0009686568380669269",
            "extra": "mean: 7.861967948718003 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.1506348368161,
            "unit": "iter/sec",
            "range": "stddev: 0.0005896543237454549",
            "extra": "mean: 5.2867916666667245 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.7802503700438,
            "unit": "iter/sec",
            "range": "stddev: 0.00038448362835680325",
            "extra": "mean: 3.3357767857142573 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.11050178228619,
            "unit": "iter/sec",
            "range": "stddev: 0.0010303340036419068",
            "extra": "mean: 9.890169491525484 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.2626176892294,
            "unit": "iter/sec",
            "range": "stddev: 0.0006736038260408802",
            "extra": "mean: 7.503979865771633 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.74383542341957,
            "unit": "iter/sec",
            "range": "stddev: 0.0003008427411374181",
            "extra": "mean: 5.1614545454545135 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.1391578887798,
            "unit": "iter/sec",
            "range": "stddev: 0.00039152414817134924",
            "extra": "mean: 3.36542651296839 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.992583930516908,
            "unit": "iter/sec",
            "range": "stddev: 0.0015089021844352628",
            "extra": "mean: 71.46642857142815 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.57914605276854,
            "unit": "iter/sec",
            "range": "stddev: 0.0029185315208319954",
            "extra": "mean: 73.64233333333345 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.33001790882196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008629204223853744",
            "extra": "mean: 6.608074285714492 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.49374997039527,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147346746291594",
            "extra": "mean: 4.175474308300797 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.32888199893125,
            "unit": "iter/sec",
            "range": "stddev: 0.00008257797392174358",
            "extra": "mean: 2.1866102040813966 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.57602929803295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007988405972501809",
            "extra": "mean: 2.2544049586775867 msec\nrounds: 484"
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
        "date": 1647973546186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.46570559090368,
            "unit": "iter/sec",
            "range": "stddev: 0.0005152163948566458",
            "extra": "mean: 8.370603053435126 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.58893482568305,
            "unit": "iter/sec",
            "range": "stddev: 0.000418674428728059",
            "extra": "mean: 6.4687682926828876 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.86622287482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005544585476582902",
            "extra": "mean: 5.003346666666728 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.65086555463097,
            "unit": "iter/sec",
            "range": "stddev: 0.00011426778632503176",
            "extra": "mean: 2.952893678160939 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.33112543061941,
            "unit": "iter/sec",
            "range": "stddev: 0.000529189044524769",
            "extra": "mean: 8.746524590163673 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.81680522565208,
            "unit": "iter/sec",
            "range": "stddev: 0.0004589486710928227",
            "extra": "mean: 6.9532903225807 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.6168818370372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001729667817677506",
            "extra": "mean: 4.839875576037004 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.7258858763354,
            "unit": "iter/sec",
            "range": "stddev: 0.00039419925584010927",
            "extra": "mean: 3.1276791907514907 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.510670534578702,
            "unit": "iter/sec",
            "range": "stddev: 0.002376541789895126",
            "extra": "mean: 74.01557142857104 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.835851458298706,
            "unit": "iter/sec",
            "range": "stddev: 0.0015141101474004453",
            "extra": "mean: 72.2760000000002 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.0731087822247,
            "unit": "iter/sec",
            "range": "stddev: 0.0001539678729253542",
            "extra": "mean: 5.744712707182455 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.41877144593778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001257309958546623",
            "extra": "mean: 3.9616704980840804 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 442.34939319172764,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656426383986696",
            "extra": "mean: 2.2606564299424043 msec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 420.77129364600364,
            "unit": "iter/sec",
            "range": "stddev: 0.0002261323853040791",
            "extra": "mean: 2.376587982832554 msec\nrounds: 466"
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
        "date": 1647982203107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.0403211780959,
            "unit": "iter/sec",
            "range": "stddev: 0.0002962687477713404",
            "extra": "mean: 7.933968992248066 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.9044301460076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005309683417244826",
            "extra": "mean: 6.7611226993865206 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.56686719887188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001775868067413211",
            "extra": "mean: 4.771746666666701 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.1488280687947,
            "unit": "iter/sec",
            "range": "stddev: 0.00007100705571112357",
            "extra": "mean: 2.922704735375955 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.01884612607444,
            "unit": "iter/sec",
            "range": "stddev: 0.0008106900657958358",
            "extra": "mean: 9.00747967479672 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.4539918695669,
            "unit": "iter/sec",
            "range": "stddev: 0.0005052917155513702",
            "extra": "mean: 6.922619354838866 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.52939163300178,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882275079497956",
            "extra": "mean: 4.865484162895903 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.7476514795742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002066603611702581",
            "extra": "mean: 3.1872748538011058 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.567285011832642,
            "unit": "iter/sec",
            "range": "stddev: 0.0011181786308773276",
            "extra": "mean: 73.70671428571411 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.954299668585254,
            "unit": "iter/sec",
            "range": "stddev: 0.003177249191215157",
            "extra": "mean: 71.66250000000066 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.29864800884127,
            "unit": "iter/sec",
            "range": "stddev: 0.000607843366670639",
            "extra": "mean: 6.788928571428417 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.0237089405988,
            "unit": "iter/sec",
            "range": "stddev: 0.0003660341716569605",
            "extra": "mean: 4.309904382469869 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.66702043384214,
            "unit": "iter/sec",
            "range": "stddev: 0.00017549447310779025",
            "extra": "mean: 2.1613816326530073 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.613417707082,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564229147084782",
            "extra": "mean: 2.2491448979590065 msec\nrounds: 490"
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
        "date": 1647984267021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.51528613701534,
            "unit": "iter/sec",
            "range": "stddev: 0.00024134800286109036",
            "extra": "mean: 7.904183206106854 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.31953553583807,
            "unit": "iter/sec",
            "range": "stddev: 0.00030138261549356556",
            "extra": "mean: 6.4800609756097085 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.56809021592224,
            "unit": "iter/sec",
            "range": "stddev: 0.00031506114638288547",
            "extra": "mean: 4.817696202531672 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.4994807655039,
            "unit": "iter/sec",
            "range": "stddev: 0.00007531572483940022",
            "extra": "mean: 2.945512605041983 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.34563029081951,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855321332994794",
            "extra": "mean: 8.595079999999854 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.28430402501755,
            "unit": "iter/sec",
            "range": "stddev: 0.00025182382146130174",
            "extra": "mean: 6.789589743589657 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.2417492113531,
            "unit": "iter/sec",
            "range": "stddev: 0.00010938752870253903",
            "extra": "mean: 4.7564292237443 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.13668563077243,
            "unit": "iter/sec",
            "range": "stddev: 0.00011401610919785593",
            "extra": "mean: 3.0382514124293216 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.703269404318904,
            "unit": "iter/sec",
            "range": "stddev: 0.0016054466154831776",
            "extra": "mean: 72.97528571428558 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.564974873144859,
            "unit": "iter/sec",
            "range": "stddev: 0.0032811129528752233",
            "extra": "mean: 73.71926666666677 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.86092278846795,
            "unit": "iter/sec",
            "range": "stddev: 0.00021827284388359057",
            "extra": "mean: 5.751723756905823 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 249.77667867565088,
            "unit": "iter/sec",
            "range": "stddev: 0.00015226033832115243",
            "extra": "mean: 4.003576335877844 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 488.24312437968734,
            "unit": "iter/sec",
            "range": "stddev: 0.00014033670023629966",
            "extra": "mean: 2.0481599229287655 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 475.170027621593,
            "unit": "iter/sec",
            "range": "stddev: 0.00007118873643273327",
            "extra": "mean: 2.1045098425196995 msec\nrounds: 508"
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
        "date": 1647986051935,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.29636650292974,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235525302414009",
            "extra": "mean: 8.312803030303046 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.0096322201095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005548695245270908",
            "extra": "mean: 6.578530487804898 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.16852188949966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003111129881984192",
            "extra": "mean: 4.713234513274378 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.39216388241096,
            "unit": "iter/sec",
            "range": "stddev: 0.00014446977823163318",
            "extra": "mean: 2.981584269662906 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.98017932987177,
            "unit": "iter/sec",
            "range": "stddev: 0.0003434494736983788",
            "extra": "mean: 8.476000000000058 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.83363050554854,
            "unit": "iter/sec",
            "range": "stddev: 0.00021377424497466012",
            "extra": "mean: 6.629821192053148 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.47957752106512,
            "unit": "iter/sec",
            "range": "stddev: 0.0001921243593647299",
            "extra": "mean: 4.619373390557787 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 339.4746261166675,
            "unit": "iter/sec",
            "range": "stddev: 0.00024983259150233633",
            "extra": "mean: 2.945728260869575 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.533826445818775,
            "unit": "iter/sec",
            "range": "stddev: 0.002851691740169139",
            "extra": "mean: 73.88893333333282 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.716856645131305,
            "unit": "iter/sec",
            "range": "stddev: 0.0029194031679685498",
            "extra": "mean: 72.90299999999945 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.59267586647024,
            "unit": "iter/sec",
            "range": "stddev: 0.00019222124972667512",
            "extra": "mean: 5.760611702127416 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 253.29709960695254,
            "unit": "iter/sec",
            "range": "stddev: 0.00017236334404772721",
            "extra": "mean: 3.9479330855020645 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 500.8197425265122,
            "unit": "iter/sec",
            "range": "stddev: 0.000073109680500692",
            "extra": "mean: 1.996726396917275 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 476.79112960785903,
            "unit": "iter/sec",
            "range": "stddev: 0.000091444878362322",
            "extra": "mean: 2.0973544554456343 msec\nrounds: 505"
          }
        ]
      }
    ]
  }
}