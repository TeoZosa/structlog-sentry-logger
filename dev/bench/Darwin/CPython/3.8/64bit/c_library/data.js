window.BENCHMARK_DATA = {
  "lastUpdate": 1643756640729,
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
      }
    ]
  }
}