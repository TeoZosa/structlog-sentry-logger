window.BENCHMARK_DATA = {
  "lastUpdate": 1672216839979,
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
        "date": 1648221837371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.80351992465758,
            "unit": "iter/sec",
            "range": "stddev: 0.0005908514712407113",
            "extra": "mean: 8.561385826771621 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.12611686117378,
            "unit": "iter/sec",
            "range": "stddev: 0.0005731419445156007",
            "extra": "mean: 6.938367741935538 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.9982378156792,
            "unit": "iter/sec",
            "range": "stddev: 0.00045861706178552286",
            "extra": "mean: 5.050550000000109 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.4415492599741,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093528612357061",
            "extra": "mean: 3.2108753709199394 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.05828497648048,
            "unit": "iter/sec",
            "range": "stddev: 0.0007184186464771159",
            "extra": "mean: 9.254264957265015 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.8193830191336,
            "unit": "iter/sec",
            "range": "stddev: 0.0006827198047635096",
            "extra": "mean: 7.417331081081122 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.12475859405112,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479700991762896",
            "extra": "mean: 5.178000000000017 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 271.34222027215526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006117072514012753",
            "extra": "mean: 3.6853829787233394 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.825352281792709,
            "unit": "iter/sec",
            "range": "stddev: 0.0062348777114640255",
            "extra": "mean: 84.56407692307675 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.797978163627905,
            "unit": "iter/sec",
            "range": "stddev: 0.009334136979006834",
            "extra": "mean: 84.76028571428529 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 137.2824388935405,
            "unit": "iter/sec",
            "range": "stddev: 0.0011968206361469896",
            "extra": "mean: 7.284252873562932 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.74394059331277,
            "unit": "iter/sec",
            "range": "stddev: 0.001013375754956132",
            "extra": "mean: 4.613739130434786 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.2588649655577,
            "unit": "iter/sec",
            "range": "stddev: 0.00019397301183406447",
            "extra": "mean: 2.2713909465019673 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.27172446615447,
            "unit": "iter/sec",
            "range": "stddev: 0.00021733700737469383",
            "extra": "mean: 2.3027057569296945 msec\nrounds: 469"
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
        "date": 1648488282364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.93600894514893,
            "unit": "iter/sec",
            "range": "stddev: 0.00048051926135165895",
            "extra": "mean: 8.337779527559034 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.9844761290651,
            "unit": "iter/sec",
            "range": "stddev: 0.00037619094668576243",
            "extra": "mean: 6.667356687898 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.19878257873364,
            "unit": "iter/sec",
            "range": "stddev: 0.0007648383409382984",
            "extra": "mean: 5.643379629629657 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.0969272606017,
            "unit": "iter/sec",
            "range": "stddev: 0.00015923575931438437",
            "extra": "mean: 3.1240537313432757 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.80217591461474,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943315411216019",
            "extra": "mean: 8.944369747899339 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.3978653699864,
            "unit": "iter/sec",
            "range": "stddev: 0.0004362297494907116",
            "extra": "mean: 7.0225771812080335 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.16941793781697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004754777252806867",
            "extra": "mean: 5.176802884615562 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.43034928188706,
            "unit": "iter/sec",
            "range": "stddev: 0.0001942932609040609",
            "extra": "mean: 3.190501501501499 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.299679944756896,
            "unit": "iter/sec",
            "range": "stddev: 0.003615942529841967",
            "extra": "mean: 81.30292857142837 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.89079836397358,
            "unit": "iter/sec",
            "range": "stddev: 0.0025140071730074902",
            "extra": "mean: 77.57471428571401 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.33127831744056,
            "unit": "iter/sec",
            "range": "stddev: 0.00038687263643189863",
            "extra": "mean: 6.122526011560762 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.09779307339903,
            "unit": "iter/sec",
            "range": "stddev: 0.00023913431664210046",
            "extra": "mean: 4.30852868852466 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.5942275234902,
            "unit": "iter/sec",
            "range": "stddev: 0.00010915153239884605",
            "extra": "mean: 2.1664049079753944 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.92073898612847,
            "unit": "iter/sec",
            "range": "stddev: 0.00009391903960750896",
            "extra": "mean: 2.217684647302866 msec\nrounds: 482"
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
        "date": 1648489966424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.52255145567482,
            "unit": "iter/sec",
            "range": "stddev: 0.0002446749893665465",
            "extra": "mean: 7.903729323308297 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.11610248769907,
            "unit": "iter/sec",
            "range": "stddev: 0.00023134448297493335",
            "extra": "mean: 6.446783950617258 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.56805550877417,
            "unit": "iter/sec",
            "range": "stddev: 0.00017308349719459353",
            "extra": "mean: 4.638906250000003 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.22716690612833,
            "unit": "iter/sec",
            "range": "stddev: 0.0001245849803846403",
            "extra": "mean: 2.9919770114942863 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.90584160309237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284729781671844",
            "extra": "mean: 9.182243902439161 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.41243516915975,
            "unit": "iter/sec",
            "range": "stddev: 0.00016617515465425778",
            "extra": "mean: 6.737979865772062 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.77220541618422,
            "unit": "iter/sec",
            "range": "stddev: 0.00017866651099023815",
            "extra": "mean: 4.812963302752265 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.0518225075339,
            "unit": "iter/sec",
            "range": "stddev: 0.00017756473212816485",
            "extra": "mean: 3.066997118155638 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.61123588077334,
            "unit": "iter/sec",
            "range": "stddev: 0.001678713629702227",
            "extra": "mean: 73.46871428571434 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.108966095844089,
            "unit": "iter/sec",
            "range": "stddev: 0.0035325349592173596",
            "extra": "mean: 76.28366666666626 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.13346178512626,
            "unit": "iter/sec",
            "range": "stddev: 0.000672257650993037",
            "extra": "mean: 6.019256983240259 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.40171328081817,
            "unit": "iter/sec",
            "range": "stddev: 0.00019781822397151548",
            "extra": "mean: 4.23008778625946 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.4317923911368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000621294757481785",
            "extra": "mean: 2.121197628458459 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.33338244397106,
            "unit": "iter/sec",
            "range": "stddev: 0.00016110535312180213",
            "extra": "mean: 2.3510969072166104 msec\nrounds: 485"
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
        "date": 1648490760745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.901256992282,
            "unit": "iter/sec",
            "range": "stddev: 0.00036507904405955384",
            "extra": "mean: 8.271212598425153 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.00991441821947,
            "unit": "iter/sec",
            "range": "stddev: 0.00021736267215762326",
            "extra": "mean: 6.622081761006211 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.231284625879,
            "unit": "iter/sec",
            "range": "stddev: 0.00018245490518461232",
            "extra": "mean: 4.920502283105002 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.26224858894807,
            "unit": "iter/sec",
            "range": "stddev: 0.00011620858339350726",
            "extra": "mean: 3.1519665653496074 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.82989707827502,
            "unit": "iter/sec",
            "range": "stddev: 0.00025492293268652234",
            "extra": "mean: 8.86289915966383 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.23532935952224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617918437734091",
            "extra": "mean: 7.505516778523508 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.46850239748653,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669749155001314",
            "extra": "mean: 5.089874396135231 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.84145934308043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001684233959891801",
            "extra": "mean: 3.2170740740741564 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.158418582552823,
            "unit": "iter/sec",
            "range": "stddev: 0.004397496723807109",
            "extra": "mean: 82.24753846153868 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.975926875090934,
            "unit": "iter/sec",
            "range": "stddev: 0.004258382686466397",
            "extra": "mean: 77.0657857142858 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.25880351229011,
            "unit": "iter/sec",
            "range": "stddev: 0.00039546335518096795",
            "extra": "mean: 6.087953757225428 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.4699184035394,
            "unit": "iter/sec",
            "range": "stddev: 0.00027531285725725693",
            "extra": "mean: 4.43518145161267 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.49861245339537,
            "unit": "iter/sec",
            "range": "stddev: 0.00010503774492023664",
            "extra": "mean: 2.1436290983607225 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.5755831709257,
            "unit": "iter/sec",
            "range": "stddev: 0.00014774827463796006",
            "extra": "mean: 2.259501061570749 msec\nrounds: 471"
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
        "date": 1648605423065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.37560547386916,
            "unit": "iter/sec",
            "range": "stddev: 0.0008718827771998734",
            "extra": "mean: 8.592866141732245 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.3657617151338,
            "unit": "iter/sec",
            "range": "stddev: 0.0008480303356207956",
            "extra": "mean: 7.387392405063389 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.2376895537096,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051909862205732",
            "extra": "mean: 4.994064814814848 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.45728506835553,
            "unit": "iter/sec",
            "range": "stddev: 0.00042924899626807815",
            "extra": "mean: 3.3960783132530046 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.31072935503066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007129477377305611",
            "extra": "mean: 9.232695652174126 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.31368839803682,
            "unit": "iter/sec",
            "range": "stddev: 0.0006369195715916065",
            "extra": "mean: 7.33602040816322 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.7129952489678,
            "unit": "iter/sec",
            "range": "stddev: 0.0007925597007190602",
            "extra": "mean: 5.271120192307654 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.27182502053995,
            "unit": "iter/sec",
            "range": "stddev: 0.00021070082547422443",
            "extra": "mean: 3.3303157894737394 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.04942750297345,
            "unit": "iter/sec",
            "range": "stddev: 0.003465063978287762",
            "extra": "mean: 76.63171428571403 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.840620385402012,
            "unit": "iter/sec",
            "range": "stddev: 0.001620870414652414",
            "extra": "mean: 77.87785714285737 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.60040749152245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345887515497278",
            "extra": "mean: 6.729456647398826 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.9712719134763,
            "unit": "iter/sec",
            "range": "stddev: 0.00026432740586970706",
            "extra": "mean: 4.237803999999926 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.29707476232056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001458108428301177",
            "extra": "mean: 2.245691823899258 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.3042606010609,
            "unit": "iter/sec",
            "range": "stddev: 0.00016854328109573558",
            "extra": "mean: 2.3679609544471827 msec\nrounds: 461"
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
        "date": 1648608331813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.30237520966008,
            "unit": "iter/sec",
            "range": "stddev: 0.0001740633873917668",
            "extra": "mean: 7.855312977099245 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.28424673851657,
            "unit": "iter/sec",
            "range": "stddev: 0.00014408282891834756",
            "extra": "mean: 6.3985975609757215 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.85511248390648,
            "unit": "iter/sec",
            "range": "stddev: 0.00031204207371275216",
            "extra": "mean: 4.698031390134489 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.033945123941,
            "unit": "iter/sec",
            "range": "stddev: 0.0001669267850517219",
            "extra": "mean: 2.9758898305085375 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.7146896778541,
            "unit": "iter/sec",
            "range": "stddev: 0.0001839836522192326",
            "extra": "mean: 8.423557377049248 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.1396963499953,
            "unit": "iter/sec",
            "range": "stddev: 0.00041383108448394233",
            "extra": "mean: 6.842767741935521 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.0885065878826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002527717801174848",
            "extra": "mean: 4.828853211009215 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.50893475033007,
            "unit": "iter/sec",
            "range": "stddev: 0.0001423719033888749",
            "extra": "mean: 3.0815792507204085 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.46859652413996,
            "unit": "iter/sec",
            "range": "stddev: 0.0012416990951342722",
            "extra": "mean: 74.24678571428623 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.875007587058029,
            "unit": "iter/sec",
            "range": "stddev: 0.0049151863390168235",
            "extra": "mean: 77.66985714285723 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.87549279270888,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337412290557929",
            "extra": "mean: 5.852214285714523 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.4295185346237,
            "unit": "iter/sec",
            "range": "stddev: 0.00009172253253458324",
            "extra": "mean: 3.9615018315016837 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.12310409355985,
            "unit": "iter/sec",
            "range": "stddev: 0.0003340546439975237",
            "extra": "mean: 2.246569523809331 msec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 417.2978735342356,
            "unit": "iter/sec",
            "range": "stddev: 0.00022632418725217253",
            "extra": "mean: 2.39636974789894 msec\nrounds: 476"
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
        "date": 1648614631411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.40483485121997,
            "unit": "iter/sec",
            "range": "stddev: 0.0011639558322870066",
            "extra": "mean: 9.765163934426157 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.02263564184878,
            "unit": "iter/sec",
            "range": "stddev: 0.0006289253333769869",
            "extra": "mean: 7.406165605095484 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 176.77044746434524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125677468091791",
            "extra": "mean: 5.657054187192126 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.82156448719945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791263717493309",
            "extra": "mean: 3.612435331230278 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 100.72032704066825,
            "unit": "iter/sec",
            "range": "stddev: 0.0008573566314520779",
            "extra": "mean: 9.928482456140419 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.4401293427128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007032573328892238",
            "extra": "mean: 7.971930555555451 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.19763474343475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005133913375155902",
            "extra": "mean: 5.488545454545389 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.9955420911157,
            "unit": "iter/sec",
            "range": "stddev: 0.0004992919733721138",
            "extra": "mean: 3.7736483870968724 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.720539072670876,
            "unit": "iter/sec",
            "range": "stddev: 0.004631430689406327",
            "extra": "mean: 85.32030769230822 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.735701933289265,
            "unit": "iter/sec",
            "range": "stddev: 0.005799917114318568",
            "extra": "mean: 85.21007142857125 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 144.9690530135335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005728652983247439",
            "extra": "mean: 6.898023952095801 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 204.04310135355226,
            "unit": "iter/sec",
            "range": "stddev: 0.0010930248217974694",
            "extra": "mean: 4.900925311203081 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 401.90049842319166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558240800477433",
            "extra": "mean: 2.4881780538301888 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 385.4727646675711,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114609288556146",
            "extra": "mean: 2.594217002237221 msec\nrounds: 447"
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
        "date": 1648735247597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.06719229172108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003409600067028708",
            "extra": "mean: 8.259876033057909 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.4720617189865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591752811228877",
            "extra": "mean: 6.735273885350247 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.83898029400106,
            "unit": "iter/sec",
            "range": "stddev: 0.00027801288732561853",
            "extra": "mean: 4.930018867924544 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.8951538923079,
            "unit": "iter/sec",
            "range": "stddev: 0.00023673540233500013",
            "extra": "mean: 3.2373444108761786 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.16239594086107,
            "unit": "iter/sec",
            "range": "stddev: 0.0005043768013099285",
            "extra": "mean: 8.915644067796677 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.63482282644543,
            "unit": "iter/sec",
            "range": "stddev: 0.00021502575934361743",
            "extra": "mean: 6.96210000000003 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.4602993624167,
            "unit": "iter/sec",
            "range": "stddev: 0.00044557436873906545",
            "extra": "mean: 5.195876777251227 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6989255616672,
            "unit": "iter/sec",
            "range": "stddev: 0.00016832553104004786",
            "extra": "mean: 3.1675749235474187 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.873963893482909,
            "unit": "iter/sec",
            "range": "stddev: 0.0014001722421521177",
            "extra": "mean: 77.67615384615321 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.91180590973354,
            "unit": "iter/sec",
            "range": "stddev: 0.0029216008980837162",
            "extra": "mean: 77.44850000000015 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.5556295802818,
            "unit": "iter/sec",
            "range": "stddev: 0.0003514275264666248",
            "extra": "mean: 6.0039999999999285 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.84933624093844,
            "unit": "iter/sec",
            "range": "stddev: 0.00017560777804779084",
            "extra": "mean: 4.169284000000147 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 449.2013638887602,
            "unit": "iter/sec",
            "range": "stddev: 0.00013839132836125035",
            "extra": "mean: 2.2261731160897344 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.47283747591285,
            "unit": "iter/sec",
            "range": "stddev: 0.00011069339025187268",
            "extra": "mean: 2.2651450216448725 msec\nrounds: 462"
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
        "date": 1648765775349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.24511365255218,
            "unit": "iter/sec",
            "range": "stddev: 0.0007169755859693842",
            "extra": "mean: 8.677157480315039 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.96106682356046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005130382307935425",
            "extra": "mean: 6.71316352201255 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.42122630189564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003934279321076443",
            "extra": "mean: 4.915907834101388 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.76360844908606,
            "unit": "iter/sec",
            "range": "stddev: 0.00024884966126971573",
            "extra": "mean: 3.1871127596439166 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.2542332393289,
            "unit": "iter/sec",
            "range": "stddev: 0.0011070775067252585",
            "extra": "mean: 9.779546218487328 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.9918586546689,
            "unit": "iter/sec",
            "range": "stddev: 0.000683167740365614",
            "extra": "mean: 7.4631399999999575 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.4613588949214,
            "unit": "iter/sec",
            "range": "stddev: 0.00035202347939070685",
            "extra": "mean: 5.013502392344634 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.56887398299742,
            "unit": "iter/sec",
            "range": "stddev: 0.0010366507615884018",
            "extra": "mean: 4.023029850746324 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.47788774316288,
            "unit": "iter/sec",
            "range": "stddev: 0.004288438393981125",
            "extra": "mean: 80.14176923076896 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.197026898368836,
            "unit": "iter/sec",
            "range": "stddev: 0.0017192585882879702",
            "extra": "mean: 75.77464285714238 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.96520257990798,
            "unit": "iter/sec",
            "range": "stddev: 0.0014715171776338652",
            "extra": "mean: 6.712977142857102 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 227.78386482901882,
            "unit": "iter/sec",
            "range": "stddev: 0.00042327838839039626",
            "extra": "mean: 4.390126582278463 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.7069608539622,
            "unit": "iter/sec",
            "range": "stddev: 0.00015579706886526847",
            "extra": "mean: 2.194392638036671 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.6716910523569,
            "unit": "iter/sec",
            "range": "stddev: 0.00022940034849458117",
            "extra": "mean: 2.2590105042016915 msec\nrounds: 476"
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
        "date": 1648768283217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.74624934325269,
            "unit": "iter/sec",
            "range": "stddev: 0.0005326109698944929",
            "extra": "mean: 8.35099224806198 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.096287508255,
            "unit": "iter/sec",
            "range": "stddev: 0.00037183838887293205",
            "extra": "mean: 6.618296296296268 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.70815022921528,
            "unit": "iter/sec",
            "range": "stddev: 0.00017496903177605265",
            "extra": "mean: 4.745900900900924 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.6776320724129,
            "unit": "iter/sec",
            "range": "stddev: 0.00023823957938431535",
            "extra": "mean: 3.1981820809248367 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.31943531333249,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231004650388788",
            "extra": "mean: 8.824611570247969 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.52410146512443,
            "unit": "iter/sec",
            "range": "stddev: 0.0003564168214269036",
            "extra": "mean: 6.919261146496823 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.68884266073852,
            "unit": "iter/sec",
            "range": "stddev: 0.0001895130533617022",
            "extra": "mean: 4.9094490740741605 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.3838893366002,
            "unit": "iter/sec",
            "range": "stddev: 0.000804699796406202",
            "extra": "mean: 3.67128908554589 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.225538893475779,
            "unit": "iter/sec",
            "range": "stddev: 0.0013519996261137964",
            "extra": "mean: 75.61128571428607 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.646349884033135,
            "unit": "iter/sec",
            "range": "stddev: 0.003566206612073695",
            "extra": "mean: 79.07419999999897 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.5494776560974,
            "unit": "iter/sec",
            "range": "stddev: 0.00024888588704754903",
            "extra": "mean: 5.863401129943294 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.66158026435588,
            "unit": "iter/sec",
            "range": "stddev: 0.0001667612659122361",
            "extra": "mean: 4.087278431372445 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.9051267441241,
            "unit": "iter/sec",
            "range": "stddev: 0.00007190140975960377",
            "extra": "mean: 2.123569999999958 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.5737693912281,
            "unit": "iter/sec",
            "range": "stddev: 0.00007531156397968512",
            "extra": "mean: 2.1806742268044097 msec\nrounds: 485"
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
        "date": 1648769085210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.04630028732277,
            "unit": "iter/sec",
            "range": "stddev: 0.00032493250985210086",
            "extra": "mean: 7.997037878787848 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.03845922779095,
            "unit": "iter/sec",
            "range": "stddev: 0.0003302592461295315",
            "extra": "mean: 6.450012500000051 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.94446537498146,
            "unit": "iter/sec",
            "range": "stddev: 0.0002447613711707965",
            "extra": "mean: 4.763164383561632 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.0393245540172,
            "unit": "iter/sec",
            "range": "stddev: 0.00011092836185687203",
            "extra": "mean: 3.0026484149856163 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.0062661944739,
            "unit": "iter/sec",
            "range": "stddev: 0.0003840783661636041",
            "extra": "mean: 8.620224000000064 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.19791081784783,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890462823648779",
            "extra": "mean: 6.9833421052631905 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.91700406026226,
            "unit": "iter/sec",
            "range": "stddev: 0.00016109826631759578",
            "extra": "mean: 4.9281232227488445 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.6762278777243,
            "unit": "iter/sec",
            "range": "stddev: 0.0009547495002898566",
            "extra": "mean: 3.80696802325599 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.591705843360934,
            "unit": "iter/sec",
            "range": "stddev: 0.004142414171751675",
            "extra": "mean: 79.41735714285743 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.12785120518347,
            "unit": "iter/sec",
            "range": "stddev: 0.0011038901467284228",
            "extra": "mean: 76.17392857142947 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.80598938351116,
            "unit": "iter/sec",
            "range": "stddev: 0.0003052879738787413",
            "extra": "mean: 5.994988571428662 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.93564957292128,
            "unit": "iter/sec",
            "range": "stddev: 0.00020686294952611045",
            "extra": "mean: 4.116316406249931 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.17939364767454,
            "unit": "iter/sec",
            "range": "stddev: 0.00014423003467511732",
            "extra": "mean: 2.1089064885493984 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.4521511210581,
            "unit": "iter/sec",
            "range": "stddev: 0.00023430944971955035",
            "extra": "mean: 2.2499609856261533 msec\nrounds: 487"
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
        "date": 1648770499676,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.35587841962207,
            "unit": "iter/sec",
            "range": "stddev: 0.0005353707724717237",
            "extra": "mean: 8.449094488189031 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.62188698678096,
            "unit": "iter/sec",
            "range": "stddev: 0.0004328869042373428",
            "extra": "mean: 6.72848407643313 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.32835820895173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547048775651802",
            "extra": "mean: 4.846643518518601 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.17241739510587,
            "unit": "iter/sec",
            "range": "stddev: 0.00017938271186487253",
            "extra": "mean: 3.1528592814370953 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.95809864943115,
            "unit": "iter/sec",
            "range": "stddev: 0.0008123483613167327",
            "extra": "mean: 9.712689075630331 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.85790811992882,
            "unit": "iter/sec",
            "range": "stddev: 0.00046505139980681815",
            "extra": "mean: 7.15011409395953 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.24779449328466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002714965352195477",
            "extra": "mean: 5.044192307692349 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.88933398419914,
            "unit": "iter/sec",
            "range": "stddev: 0.000677741976383819",
            "extra": "mean: 3.485664615384678 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.328332035407612,
            "unit": "iter/sec",
            "range": "stddev: 0.0014760298025521723",
            "extra": "mean: 75.02814285714317 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.638707014204961,
            "unit": "iter/sec",
            "range": "stddev: 0.002325420990047275",
            "extra": "mean: 73.32073333333446 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.55990477174453,
            "unit": "iter/sec",
            "range": "stddev: 0.000448413546228954",
            "extra": "mean: 6.267238636363762 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.51620550090072,
            "unit": "iter/sec",
            "range": "stddev: 0.0001826550719947755",
            "extra": "mean: 4.157723999999888 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.72598282535927,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109121853344225",
            "extra": "mean: 2.138003952569346 msec\nrounds: 506"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.1859301073223,
            "unit": "iter/sec",
            "range": "stddev: 0.00017025784431293374",
            "extra": "mean: 2.2717672955975416 msec\nrounds: 477"
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
        "date": 1648771367676,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.60315268629078,
            "unit": "iter/sec",
            "range": "stddev: 0.001953365991077195",
            "extra": "mean: 9.293408000000035 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.49439213002722,
            "unit": "iter/sec",
            "range": "stddev: 0.000830548890385974",
            "extra": "mean: 8.032490322580614 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.5415761548488,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480451513704497",
            "extra": "mean: 5.569740566037653 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 276.76012792468094,
            "unit": "iter/sec",
            "range": "stddev: 0.000605421217150049",
            "extra": "mean: 3.613237237237243 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.55854890667936,
            "unit": "iter/sec",
            "range": "stddev: 0.0010533500111923355",
            "extra": "mean: 10.464788461538703 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.1714812350884,
            "unit": "iter/sec",
            "range": "stddev: 0.0020948048241163707",
            "extra": "mean: 7.8020476190474 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.56371035433148,
            "unit": "iter/sec",
            "range": "stddev: 0.0011277150169522192",
            "extra": "mean: 5.794961165048335 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.6805799734557,
            "unit": "iter/sec",
            "range": "stddev: 0.000983748180255376",
            "extra": "mean: 4.053825396825343 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.763941788602802,
            "unit": "iter/sec",
            "range": "stddev: 0.010497645911931214",
            "extra": "mean: 92.90276923076928 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.010578413210572,
            "unit": "iter/sec",
            "range": "stddev: 0.009018792079217717",
            "extra": "mean: 90.82174999999933 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.00890085642445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005558149799922909",
            "extra": "mean: 6.328757396449804 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 220.12509116625847,
            "unit": "iter/sec",
            "range": "stddev: 0.0005842244579685372",
            "extra": "mean: 4.542871485943913 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 425.0121911391477,
            "unit": "iter/sec",
            "range": "stddev: 0.00031019090494868165",
            "extra": "mean: 2.3528736842106324 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 395.1703725156998,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536000750966089",
            "extra": "mean: 2.530554083885099 msec\nrounds: 453"
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
        "date": 1648866121257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.67574178005228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008071928961675258",
            "extra": "mean: 8.796951612903213 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.49858373175203,
            "unit": "iter/sec",
            "range": "stddev: 0.0003303800378015596",
            "extra": "mean: 6.779726114649668 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.5981998478679,
            "unit": "iter/sec",
            "range": "stddev: 0.0003316494398124187",
            "extra": "mean: 5.2466392694064385 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.5767322263778,
            "unit": "iter/sec",
            "range": "stddev: 0.00023437808770984285",
            "extra": "mean: 3.1890121212121008 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.46894382808011,
            "unit": "iter/sec",
            "range": "stddev: 0.0006200530866293607",
            "extra": "mean: 9.39241025641 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.8859632839807,
            "unit": "iter/sec",
            "range": "stddev: 0.0003712485869114444",
            "extra": "mean: 7.097939189188936 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.17475361360457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005281660874436124",
            "extra": "mean: 5.371297560975667 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.36824149378555,
            "unit": "iter/sec",
            "range": "stddev: 0.00017694968235477577",
            "extra": "mean: 3.2323938461540096 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.99356818374908,
            "unit": "iter/sec",
            "range": "stddev: 0.0027537631780938693",
            "extra": "mean: 76.96115384615364 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.015231616695601,
            "unit": "iter/sec",
            "range": "stddev: 0.005925695379511245",
            "extra": "mean: 83.22769230769248 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.46759059758662,
            "unit": "iter/sec",
            "range": "stddev: 0.00048046503273178854",
            "extra": "mean: 6.310438596491348 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.45390055135007,
            "unit": "iter/sec",
            "range": "stddev: 0.00022114794755083138",
            "extra": "mean: 4.2113437499997906 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.76562214853055,
            "unit": "iter/sec",
            "range": "stddev: 0.00011683470511502701",
            "extra": "mean: 2.165600798403182 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.28369991545213,
            "unit": "iter/sec",
            "range": "stddev: 0.00018603651400085427",
            "extra": "mean: 2.302642259414027 msec\nrounds: 478"
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
        "date": 1649083053304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.03858929486988,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405181866493069",
            "extra": "mean: 8.544190476190511 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.02600548932608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103242128483625",
            "extra": "mean: 7.405980769230791 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.46537944161872,
            "unit": "iter/sec",
            "range": "stddev: 0.0003664542771217354",
            "extra": "mean: 4.988392523364508 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.2753948833275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002736130836201605",
            "extra": "mean: 3.222943283582086 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.90106110405692,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150373067314186",
            "extra": "mean: 9.099093220339123 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.88837298929187,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116708788241897",
            "extra": "mean: 7.413537414965967 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.73274567733975,
            "unit": "iter/sec",
            "range": "stddev: 0.0004297180010034495",
            "extra": "mean: 5.161749999999956 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.0922798805663,
            "unit": "iter/sec",
            "range": "stddev: 0.00022525380764253992",
            "extra": "mean: 3.28847546012268 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.472033862531386,
            "unit": "iter/sec",
            "range": "stddev: 0.007820712100340552",
            "extra": "mean: 80.17938461538421 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.794338322516106,
            "unit": "iter/sec",
            "range": "stddev: 0.003965624147484705",
            "extra": "mean: 78.15957142857093 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.5287583347856,
            "unit": "iter/sec",
            "range": "stddev: 0.0014554699728281761",
            "extra": "mean: 6.471287356321767 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.67993098243312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003907832688858254",
            "extra": "mean: 4.636499999999763 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.7963755594437,
            "unit": "iter/sec",
            "range": "stddev: 0.00016638245441764383",
            "extra": "mean: 2.218296450939713 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.58111325202896,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747978490266996",
            "extra": "mean: 2.2697296137339467 msec\nrounds: 466"
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
        "date": 1649084284369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.49482052291684,
            "unit": "iter/sec",
            "range": "stddev: 0.00020156435853546368",
            "extra": "mean: 7.843455882352905 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.3491360948795,
            "unit": "iter/sec",
            "range": "stddev: 0.0002088439978634551",
            "extra": "mean: 6.236391566265093 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.45404819096473,
            "unit": "iter/sec",
            "range": "stddev: 0.00013719807011170287",
            "extra": "mean: 4.577621739130399 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.45614035087334,
            "unit": "iter/sec",
            "range": "stddev: 0.000128634445854262",
            "extra": "mean: 2.920081967213148 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.95007936623642,
            "unit": "iter/sec",
            "range": "stddev: 0.00046793787599542656",
            "extra": "mean: 8.932552845528352 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.9109455272304,
            "unit": "iter/sec",
            "range": "stddev: 0.0001739948103957167",
            "extra": "mean: 6.715423076923089 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.8455195631179,
            "unit": "iter/sec",
            "range": "stddev: 0.0001425529226168904",
            "extra": "mean: 4.720420814479661 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.4747488914499,
            "unit": "iter/sec",
            "range": "stddev: 0.00013088977549265753",
            "extra": "mean: 2.9808502824860046 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.788932805545468,
            "unit": "iter/sec",
            "range": "stddev: 0.00063421137756275",
            "extra": "mean: 72.52192857142882 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.952830970736954,
            "unit": "iter/sec",
            "range": "stddev: 0.005387094329439868",
            "extra": "mean: 77.20320000000005 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.3406045496934,
            "unit": "iter/sec",
            "range": "stddev: 0.00026687704248459006",
            "extra": "mean: 5.768988764045294 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 252.67026530376293,
            "unit": "iter/sec",
            "range": "stddev: 0.00016010477039860523",
            "extra": "mean: 3.9577272727275172 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 500.30606392159393,
            "unit": "iter/sec",
            "range": "stddev: 0.00008665497725727779",
            "extra": "mean: 1.9987764932561685 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 471.03067867668045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000819583610529096",
            "extra": "mean: 2.1230039682540696 msec\nrounds: 504"
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
        "date": 1649167206062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.80345874837919,
            "unit": "iter/sec",
            "range": "stddev: 0.001129361453773734",
            "extra": "mean: 10.121103174603233 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.34586270536337,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644927116330512",
            "extra": "mean: 6.786753164556958 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.06968132610115,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843855087643682",
            "extra": "mean: 5.289055299539184 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.07538415651226,
            "unit": "iter/sec",
            "range": "stddev: 0.00022448419194301557",
            "extra": "mean: 3.2043539823008897 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.45069663513097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006702706518299119",
            "extra": "mean: 9.136533898305265 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.74371692389005,
            "unit": "iter/sec",
            "range": "stddev: 0.000675404569984869",
            "extra": "mean: 7.476986754967137 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.4807095526402,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268371343909959",
            "extra": "mean: 5.16847391304367 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.65815435854506,
            "unit": "iter/sec",
            "range": "stddev: 0.00021583089729985781",
            "extra": "mean: 3.3595585585585765 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.194203597871017,
            "unit": "iter/sec",
            "range": "stddev: 0.001540422811944657",
            "extra": "mean: 75.79085714285608 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.138655990570426,
            "unit": "iter/sec",
            "range": "stddev: 0.0020161318801709626",
            "extra": "mean: 76.11128571428439 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.55232394074514,
            "unit": "iter/sec",
            "range": "stddev: 0.0003804164464469257",
            "extra": "mean: 6.040386363636443 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.45514890581651,
            "unit": "iter/sec",
            "range": "stddev: 0.0001499717246126693",
            "extra": "mean: 4.176147410358356 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.99314041632465,
            "unit": "iter/sec",
            "range": "stddev: 0.00008948959032751846",
            "extra": "mean: 2.1598592132505408 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.2587025040484,
            "unit": "iter/sec",
            "range": "stddev: 0.00017772144821303018",
            "extra": "mean: 2.4197917525770767 msec\nrounds: 485"
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
        "date": 1649339642237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.68225492591996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833288759783873",
            "extra": "mean: 8.570283464566971 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.05951226822847,
            "unit": "iter/sec",
            "range": "stddev: 0.0005070380355476786",
            "extra": "mean: 6.799968152866269 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.4177729496648,
            "unit": "iter/sec",
            "range": "stddev: 0.00035040276065630594",
            "extra": "mean: 5.014598173515912 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.4336535444624,
            "unit": "iter/sec",
            "range": "stddev: 0.00015983591730336572",
            "extra": "mean: 3.1207708333333444 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.52502646855024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005133557636337397",
            "extra": "mean: 9.130333333333152 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.09674490562892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005106006910445977",
            "extra": "mean: 7.294119205298083 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.27420165596808,
            "unit": "iter/sec",
            "range": "stddev: 0.0003042571252610003",
            "extra": "mean: 5.069086538461464 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.526226611804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002119571691547493",
            "extra": "mean: 3.189525835866232 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.875430212692276,
            "unit": "iter/sec",
            "range": "stddev: 0.0008576501214186872",
            "extra": "mean: 77.66730769230726 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.344186605105586,
            "unit": "iter/sec",
            "range": "stddev: 0.0009451841090492885",
            "extra": "mean: 74.93899999999944 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.9833529012432,
            "unit": "iter/sec",
            "range": "stddev: 0.00033603387892295683",
            "extra": "mean: 6.024700564971598 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.99426605724918,
            "unit": "iter/sec",
            "range": "stddev: 0.0002180854371630864",
            "extra": "mean: 4.184200803212819 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.24896799103044,
            "unit": "iter/sec",
            "range": "stddev: 0.00013774197896678663",
            "extra": "mean: 2.2358911290323085 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.66256846225053,
            "unit": "iter/sec",
            "range": "stddev: 0.00014006101005643455",
            "extra": "mean: 2.2438501026695588 msec\nrounds: 487"
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
        "date": 1649690788004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.92496158835584,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345176502363137",
            "extra": "mean: 8.626269841269853 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.7481770300958,
            "unit": "iter/sec",
            "range": "stddev: 0.0010807385913086402",
            "extra": "mean: 7.259624203821701 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.1174135043237,
            "unit": "iter/sec",
            "range": "stddev: 0.0005330390760239121",
            "extra": "mean: 5.205150234741706 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.7373435226141,
            "unit": "iter/sec",
            "range": "stddev: 0.0005159343685017961",
            "extra": "mean: 3.325160714285569 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.49827820554657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007650036557854414",
            "extra": "mean: 9.302474576270964 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.6774992819838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712813364060981",
            "extra": "mean: 7.316493243243112 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.32396447680094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167663061848576",
            "extra": "mean: 5.703726829268232 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.46758731523556,
            "unit": "iter/sec",
            "range": "stddev: 0.0002779392490285595",
            "extra": "mean: 3.2629878048780085 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.422882567446706,
            "unit": "iter/sec",
            "range": "stddev: 0.002580863632535559",
            "extra": "mean: 80.49661538461532 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.210295535419798,
            "unit": "iter/sec",
            "range": "stddev: 0.006886562114598774",
            "extra": "mean: 89.20371428571373 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.57141570038033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987019646434986",
            "extra": "mean: 6.306306818181492 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.82202918701242,
            "unit": "iter/sec",
            "range": "stddev: 0.0003241708169337594",
            "extra": "mean: 4.240485943774898 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.3417974569721,
            "unit": "iter/sec",
            "range": "stddev: 0.00014081743434981315",
            "extra": "mean: 2.1865484536083377 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.23111136534317,
            "unit": "iter/sec",
            "range": "stddev: 0.00018828173427360058",
            "extra": "mean: 2.3461450216449635 msec\nrounds: 462"
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
        "date": 1649778316693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.48924772327273,
            "unit": "iter/sec",
            "range": "stddev: 0.00031632774889251537",
            "extra": "mean: 8.23118110236218 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.53229529361076,
            "unit": "iter/sec",
            "range": "stddev: 0.000346633867089492",
            "extra": "mean: 6.471139240506354 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.3331610873753,
            "unit": "iter/sec",
            "range": "stddev: 0.00034411239830259104",
            "extra": "mean: 4.846530701754397 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.4168533517092,
            "unit": "iter/sec",
            "range": "stddev: 0.00011955850899717442",
            "extra": "mean: 3.05421052631584 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.80901708842401,
            "unit": "iter/sec",
            "range": "stddev: 0.0004435845518296034",
            "extra": "mean: 8.786649999999991 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.81253434031305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005046516987304327",
            "extra": "mean: 7.101640522875747 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.05458550674743,
            "unit": "iter/sec",
            "range": "stddev: 0.00020372372726732202",
            "extra": "mean: 5.023747619047453 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.57057838849585,
            "unit": "iter/sec",
            "range": "stddev: 0.00054395375473408",
            "extra": "mean: 3.589754545454528 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.049890253307185,
            "unit": "iter/sec",
            "range": "stddev: 0.004445644092528111",
            "extra": "mean: 82.98830769230801 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.44261539525133,
            "unit": "iter/sec",
            "range": "stddev: 0.0015597836353204182",
            "extra": "mean: 74.39028571428555 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.74174610812545,
            "unit": "iter/sec",
            "range": "stddev: 0.00045714951570311683",
            "extra": "mean: 6.033482954545603 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.13826840733745,
            "unit": "iter/sec",
            "range": "stddev: 0.0005172677789728788",
            "extra": "mean: 4.461531746032101 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.1551729816386,
            "unit": "iter/sec",
            "range": "stddev: 0.00014721541150440048",
            "extra": "mean: 2.1731799591002376 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.42091009837554,
            "unit": "iter/sec",
            "range": "stddev: 0.000197927865473667",
            "extra": "mean: 2.250119148936182 msec\nrounds: 470"
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
        "date": 1649968528605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.35259571031816,
            "unit": "iter/sec",
            "range": "stddev: 0.00027177067538638143",
            "extra": "mean: 8.17309999999999 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.57712466715518,
            "unit": "iter/sec",
            "range": "stddev: 0.0004316811227639451",
            "extra": "mean: 6.916723529411694 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.67580258471193,
            "unit": "iter/sec",
            "range": "stddev: 0.0001848614754603507",
            "extra": "mean: 4.769267543859699 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.5782547974255,
            "unit": "iter/sec",
            "range": "stddev: 0.00012541444666010893",
            "extra": "mean: 3.0904425287355752 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.04490732692594,
            "unit": "iter/sec",
            "range": "stddev: 0.0006085815460721519",
            "extra": "mean: 8.846042016806644 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.30149792212947,
            "unit": "iter/sec",
            "range": "stddev: 0.0003027064733008348",
            "extra": "mean: 6.978294117647001 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.0531804452239,
            "unit": "iter/sec",
            "range": "stddev: 0.0002562634276328607",
            "extra": "mean: 4.973808411215091 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.741928190696,
            "unit": "iter/sec",
            "range": "stddev: 0.0001167203538222766",
            "extra": "mean: 3.108081081080926 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.061273231573427,
            "unit": "iter/sec",
            "range": "stddev: 0.00145546921742026",
            "extra": "mean: 76.56221428571516 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.642764218927411,
            "unit": "iter/sec",
            "range": "stddev: 0.0009833137432074335",
            "extra": "mean: 73.29892857142843 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.3409598713048,
            "unit": "iter/sec",
            "range": "stddev: 0.00047510837343688213",
            "extra": "mean: 6.048108108108012 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.2231072108277,
            "unit": "iter/sec",
            "range": "stddev: 0.0002082645135351984",
            "extra": "mean: 4.162796874999902 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.132631179114,
            "unit": "iter/sec",
            "range": "stddev: 0.0002285304464934887",
            "extra": "mean: 2.256660714285788 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.3238414777357,
            "unit": "iter/sec",
            "range": "stddev: 0.00021248172109520393",
            "extra": "mean: 2.3077428571429768 msec\nrounds: 490"
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
        "date": 1671164373149,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.38521063244356,
            "unit": "iter/sec",
            "range": "stddev: 0.00036688466307926255",
            "extra": "mean: 7.9123181818181525 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.45426640226333,
            "unit": "iter/sec",
            "range": "stddev: 0.0001613765889740967",
            "extra": "mean: 6.3916441717790935 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.34716323115543,
            "unit": "iter/sec",
            "range": "stddev: 0.00012127044298436801",
            "extra": "mean: 4.6653288288288834 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.5094609914933,
            "unit": "iter/sec",
            "range": "stddev: 0.00017135594713218902",
            "extra": "mean: 3.0910997067448824 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.30844321193656,
            "unit": "iter/sec",
            "range": "stddev: 0.0008784386188976978",
            "extra": "mean: 8.748260162601671 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.48160603587593,
            "unit": "iter/sec",
            "range": "stddev: 0.00019602000157139477",
            "extra": "mean: 6.7805065789475 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8176172022114,
            "unit": "iter/sec",
            "range": "stddev: 0.00022185890087893072",
            "extra": "mean: 4.906347222222113 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.1398637503839,
            "unit": "iter/sec",
            "range": "stddev: 0.00016756231338126864",
            "extra": "mean: 3.066169184290103 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.469879425336485,
            "unit": "iter/sec",
            "range": "stddev: 0.0020132228058345543",
            "extra": "mean: 74.23971428571414 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.369615498771093,
            "unit": "iter/sec",
            "range": "stddev: 0.0023852273286895844",
            "extra": "mean: 74.79646666666801 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.13933352348369,
            "unit": "iter/sec",
            "range": "stddev: 0.0002195420009116827",
            "extra": "mean: 5.8431920903956325 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.559676652384,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707964768996511",
            "extra": "mean: 4.139763779527856 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 376.80211234140364,
            "unit": "iter/sec",
            "range": "stddev: 0.00013618985165069275",
            "extra": "mean: 2.653912935323315 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 367.83351632120656,
            "unit": "iter/sec",
            "range": "stddev: 0.00010979272971477421",
            "extra": "mean: 2.7186212121213043 msec\nrounds: 396"
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
        "date": 1671168649735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.03534184921648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557426673829224",
            "extra": "mean: 7.934282442748153 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.6516546485294,
            "unit": "iter/sec",
            "range": "stddev: 0.00030962701212140266",
            "extra": "mean: 6.550862499999988 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.03290702347567,
            "unit": "iter/sec",
            "range": "stddev: 0.0003587372830532324",
            "extra": "mean: 4.806931818181795 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.4078282050898,
            "unit": "iter/sec",
            "range": "stddev: 0.0003804933528436943",
            "extra": "mean: 3.200944117647139 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.27195493955055,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987011748963858",
            "extra": "mean: 9.151478991596717 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.18915681775513,
            "unit": "iter/sec",
            "range": "stddev: 0.0006363921844668924",
            "extra": "mean: 7.342728476821209 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.30296701440346,
            "unit": "iter/sec",
            "range": "stddev: 0.0004235043231674356",
            "extra": "mean: 5.282537383177482 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.4593509175703,
            "unit": "iter/sec",
            "range": "stddev: 0.00022935047270969714",
            "extra": "mean: 3.328237237237278 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.719768064114891,
            "unit": "iter/sec",
            "range": "stddev: 0.0030800482558298726",
            "extra": "mean: 78.61778571428576 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.566783477911182,
            "unit": "iter/sec",
            "range": "stddev: 0.00416873992873153",
            "extra": "mean: 79.57485714285717 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.5230388542078,
            "unit": "iter/sec",
            "range": "stddev: 0.0008989023254080613",
            "extra": "mean: 6.041455056179804 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.1778871097109,
            "unit": "iter/sec",
            "range": "stddev: 0.00020590201774579975",
            "extra": "mean: 4.129196153846128 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 353.41933203748965,
            "unit": "iter/sec",
            "range": "stddev: 0.00027648845727749086",
            "extra": "mean: 2.829499999999782 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 339.3113829715067,
            "unit": "iter/sec",
            "range": "stddev: 0.00020241502753312073",
            "extra": "mean: 2.9471454545454314 msec\nrounds: 385"
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
        "date": 1671338685042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.25218914849803,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234840149540206",
            "extra": "mean: 8.113446153846155 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.96135949633455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002592174064197943",
            "extra": "mean: 6.580620253164562 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.3200285954817,
            "unit": "iter/sec",
            "range": "stddev: 0.00023748424937393588",
            "extra": "mean: 4.870445454545422 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.2977333628478,
            "unit": "iter/sec",
            "range": "stddev: 0.00014387987619653066",
            "extra": "mean: 3.1318731563421616 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.77519558745412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006096898425688839",
            "extra": "mean: 9.027291666666715 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.7800929338852,
            "unit": "iter/sec",
            "range": "stddev: 0.00029557907700138647",
            "extra": "mean: 7.103277027027051 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.44433255711812,
            "unit": "iter/sec",
            "range": "stddev: 0.00023275965575502594",
            "extra": "mean: 4.751850467289649 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.40617002727055,
            "unit": "iter/sec",
            "range": "stddev: 0.00012460308368205563",
            "extra": "mean: 3.092086956521816 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.604252300576237,
            "unit": "iter/sec",
            "range": "stddev: 0.000879447703809781",
            "extra": "mean: 73.50642857142857 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.023376961646116,
            "unit": "iter/sec",
            "range": "stddev: 0.0016470009107472977",
            "extra": "mean: 76.78500000000022 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.17114585701756,
            "unit": "iter/sec",
            "range": "stddev: 0.00030428116273469784",
            "extra": "mean: 5.808174157303147 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.81718983364598,
            "unit": "iter/sec",
            "range": "stddev: 0.00028270680304992465",
            "extra": "mean: 4.204910505836453 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 375.433011890292,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165719623015737",
            "extra": "mean: 2.6635910224437516 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 373.3660509120101,
            "unit": "iter/sec",
            "range": "stddev: 0.00010778160162629555",
            "extra": "mean: 2.6783367088607277 msec\nrounds: 395"
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
        "date": 1671350770428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.44075097955418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004964231551912978",
            "extra": "mean: 8.973378151260556 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.0045482394693,
            "unit": "iter/sec",
            "range": "stddev: 0.0004581040809099355",
            "extra": "mean: 7.575496551724121 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.2355295075183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002999067083823356",
            "extra": "mean: 5.48740414507778 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.141286398303,
            "unit": "iter/sec",
            "range": "stddev: 0.00021404190619704537",
            "extra": "mean: 3.5443235294117335 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.74401687315742,
            "unit": "iter/sec",
            "range": "stddev: 0.00039271336119878913",
            "extra": "mean: 9.639110091742925 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.26673532344836,
            "unit": "iter/sec",
            "range": "stddev: 0.0004731407417280272",
            "extra": "mean: 7.796253623188542 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.44633195998645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118728127596766",
            "extra": "mean: 5.901573604060918 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 280.8699924212742,
            "unit": "iter/sec",
            "range": "stddev: 0.0001801754668287619",
            "extra": "mean: 3.560366101694871 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.481721479026284,
            "unit": "iter/sec",
            "range": "stddev: 0.0012854747401999569",
            "extra": "mean: 80.11715384615451 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.49324884053039,
            "unit": "iter/sec",
            "range": "stddev: 0.0015538094667528117",
            "extra": "mean: 80.04323076923086 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.5502482834593,
            "unit": "iter/sec",
            "range": "stddev: 0.0003918167703124581",
            "extra": "mean: 6.7773522012575445 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.23730814641002,
            "unit": "iter/sec",
            "range": "stddev: 0.00023285910754005342",
            "extra": "mean: 4.603260869564985 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 313.0761470762275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001975812226003221",
            "extra": "mean: 3.1941111111110003 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 314.65919701214716,
            "unit": "iter/sec",
            "range": "stddev: 0.00023445181387859055",
            "extra": "mean: 3.178041543026616 msec\nrounds: 337"
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
        "date": 1671358359598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.28991107727276,
            "unit": "iter/sec",
            "range": "stddev: 0.00023851714374586655",
            "extra": "mean: 7.734555555555525 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.59824431709714,
            "unit": "iter/sec",
            "range": "stddev: 0.00014469021528054323",
            "extra": "mean: 6.150127906976732 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.8485505460961,
            "unit": "iter/sec",
            "range": "stddev: 0.0001792745829227507",
            "extra": "mean: 4.590344978165935 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.1334290389185,
            "unit": "iter/sec",
            "range": "stddev: 0.00018066365235504462",
            "extra": "mean: 3.0475407608695493 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.72875047481465,
            "unit": "iter/sec",
            "range": "stddev: 0.0004920083418313166",
            "extra": "mean: 8.640895161290313 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.36935662852764,
            "unit": "iter/sec",
            "range": "stddev: 0.00012813897231790273",
            "extra": "mean: 6.650291139240553 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.02252141624794,
            "unit": "iter/sec",
            "range": "stddev: 0.00015057239313122768",
            "extra": "mean: 4.807171806167202 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.2715093195745,
            "unit": "iter/sec",
            "range": "stddev: 0.000075294738095941",
            "extra": "mean: 2.9216571428570552 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.856736128945352,
            "unit": "iter/sec",
            "range": "stddev: 0.00127550569616599",
            "extra": "mean: 72.1670666666661 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.237631769282062,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162579144419844",
            "extra": "mean: 70.2363999999998 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.54666272458002,
            "unit": "iter/sec",
            "range": "stddev: 0.00008555311224980293",
            "extra": "mean: 5.7955337078654825 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 256.9394916943322,
            "unit": "iter/sec",
            "range": "stddev: 0.00006410412143177632",
            "extra": "mean: 3.89196691176477 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 385.48866107253025,
            "unit": "iter/sec",
            "range": "stddev: 0.00014722123915099253",
            "extra": "mean: 2.5941100244498463 msec\nrounds: 409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 382.5358650252071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000860361378761387",
            "extra": "mean: 2.6141339712920915 msec\nrounds: 418"
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
        "date": 1671364010452,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.71644301372423,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314258148709101",
            "extra": "mean: 8.717146153846175 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.0712944686168,
            "unit": "iter/sec",
            "range": "stddev: 0.0006389452433079691",
            "extra": "mean: 7.349088607594881 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.84658560697235,
            "unit": "iter/sec",
            "range": "stddev: 0.0004847029170286683",
            "extra": "mean: 5.323493087557524 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.35656052072994,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987947529930925",
            "extra": "mean: 3.3857382352941294 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.82433951417131,
            "unit": "iter/sec",
            "range": "stddev: 0.0007695768394683131",
            "extra": "mean: 9.63165289256193 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.31610460509143,
            "unit": "iter/sec",
            "range": "stddev: 0.000599655670640589",
            "extra": "mean: 7.673648648648528 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.23745170033894,
            "unit": "iter/sec",
            "range": "stddev: 0.0004387843084909149",
            "extra": "mean: 5.201900000000036 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.13254018857305,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632674957288804",
            "extra": "mean: 3.4467005988023445 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.407521619628652,
            "unit": "iter/sec",
            "range": "stddev: 0.0013651916179954246",
            "extra": "mean: 74.58499999999978 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.374377966536025,
            "unit": "iter/sec",
            "range": "stddev: 0.0035031632487301156",
            "extra": "mean: 80.81214285714366 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.91919095632488,
            "unit": "iter/sec",
            "range": "stddev: 0.0007973440041887877",
            "extra": "mean: 6.67026011560671 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.6719184953743,
            "unit": "iter/sec",
            "range": "stddev: 0.0004589305813884742",
            "extra": "mean: 4.511171314741282 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 337.6606149041037,
            "unit": "iter/sec",
            "range": "stddev: 0.00029117891984667047",
            "extra": "mean: 2.961553571428525 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 327.94738419034763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002888902798183084",
            "extra": "mean: 3.049269633507974 msec\nrounds: 382"
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
        "date": 1671374734627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.56880589110777,
            "unit": "iter/sec",
            "range": "stddev: 0.0018322998323500722",
            "extra": "mean: 10.80277519379842 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 114.56830228629056,
            "unit": "iter/sec",
            "range": "stddev: 0.0011141794342287477",
            "extra": "mean: 8.728417721518962 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.94799542976054,
            "unit": "iter/sec",
            "range": "stddev: 0.0013005880561890197",
            "extra": "mean: 6.581199029126118 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.69876800767008,
            "unit": "iter/sec",
            "range": "stddev: 0.004194279114717934",
            "extra": "mean: 4.260780780780747 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 87.41976787037026,
            "unit": "iter/sec",
            "range": "stddev: 0.0011567164418135165",
            "extra": "mean: 11.439060344827755 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.77898618033943,
            "unit": "iter/sec",
            "range": "stddev: 0.0011888410912925535",
            "extra": "mean: 8.94622535211263 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.17802039158855,
            "unit": "iter/sec",
            "range": "stddev: 0.0008317198060279178",
            "extra": "mean: 5.910933333333409 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 262.9604708539261,
            "unit": "iter/sec",
            "range": "stddev: 0.000615612433740082",
            "extra": "mean: 3.8028529411764613 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.107442289263965,
            "unit": "iter/sec",
            "range": "stddev: 0.009357373403801814",
            "extra": "mean: 90.02972727272797 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.603188909064343,
            "unit": "iter/sec",
            "range": "stddev: 0.0031854757351289123",
            "extra": "mean: 94.31125000000051 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 125.56571158088673,
            "unit": "iter/sec",
            "range": "stddev: 0.001263385774038609",
            "extra": "mean: 7.963957575757626 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 201.4379571092133,
            "unit": "iter/sec",
            "range": "stddev: 0.0006982179657560853",
            "extra": "mean: 4.96430769230762 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 295.7067729609936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004517546394939378",
            "extra": "mean: 3.381728426395932 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 301.121777937371,
            "unit": "iter/sec",
            "range": "stddev: 0.0005305021762347288",
            "extra": "mean: 3.3209155672825017 msec\nrounds: 379"
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
        "date": 1671378525126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.7173212947184,
            "unit": "iter/sec",
            "range": "stddev: 0.0003044703348113259",
            "extra": "mean: 7.9543533834586375 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.32951775425977,
            "unit": "iter/sec",
            "range": "stddev: 0.00027591364632010494",
            "extra": "mean: 6.437926380368074 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.77969659206656,
            "unit": "iter/sec",
            "range": "stddev: 0.00023441935798227485",
            "extra": "mean: 4.789737777777761 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.43659638366944,
            "unit": "iter/sec",
            "range": "stddev: 0.00008875635611167025",
            "extra": "mean: 3.0354854651162584 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.73996697537814,
            "unit": "iter/sec",
            "range": "stddev: 0.0002945608771644667",
            "extra": "mean: 8.49329268292661 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.55242601736416,
            "unit": "iter/sec",
            "range": "stddev: 0.00023820800630040077",
            "extra": "mean: 6.823496732026229 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.27153182196813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001640550596309434",
            "extra": "mean: 4.9195280373831825 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.90485561822055,
            "unit": "iter/sec",
            "range": "stddev: 0.00015526479021893633",
            "extra": "mean: 3.1455952380951477 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.206301292330842,
            "unit": "iter/sec",
            "range": "stddev: 0.001645188916638368",
            "extra": "mean: 75.72142857142897 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.084148834062056,
            "unit": "iter/sec",
            "range": "stddev: 0.002765494825861694",
            "extra": "mean: 76.4283571428577 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.4191335863162,
            "unit": "iter/sec",
            "range": "stddev: 0.00024014788029817075",
            "extra": "mean: 5.766376404494422 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.94457804109962,
            "unit": "iter/sec",
            "range": "stddev: 0.00023351246998099204",
            "extra": "mean: 4.150332031250037 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.0542929374483,
            "unit": "iter/sec",
            "range": "stddev: 0.00015048400987933866",
            "extra": "mean: 2.746843037974613 msec\nrounds: 395"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 360.78162444047933,
            "unit": "iter/sec",
            "range": "stddev: 0.00015752003031244366",
            "extra": "mean: 2.771759791122557 msec\nrounds: 383"
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
        "date": 1671379767731,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.87338589875436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005372796713456007",
            "extra": "mean: 9.270127118644073 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.8174956296969,
            "unit": "iter/sec",
            "range": "stddev: 0.00046054430229437927",
            "extra": "mean: 7.30900675675681 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.20816467264848,
            "unit": "iter/sec",
            "range": "stddev: 0.00025855890146096646",
            "extra": "mean: 5.428641025641148 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.85918643485473,
            "unit": "iter/sec",
            "range": "stddev: 0.0002112557157824209",
            "extra": "mean: 3.5105064102564687 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.3799794890835,
            "unit": "iter/sec",
            "range": "stddev: 0.0009167320386507375",
            "extra": "mean: 10.484380530973514 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.73968421993872,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727223059547552",
            "extra": "mean: 8.081481751824818 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.29835330540206,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400733727091918",
            "extra": "mean: 6.277528795811402 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 284.1263524459831,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828551940827001",
            "extra": "mean: 3.5195608974359947 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.548529022817043,
            "unit": "iter/sec",
            "range": "stddev: 0.001899413924453423",
            "extra": "mean: 79.69061538461567 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.583437872663334,
            "unit": "iter/sec",
            "range": "stddev: 0.002681875855173834",
            "extra": "mean: 79.46953846153858 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.76396442926654,
            "unit": "iter/sec",
            "range": "stddev: 0.0004854619276621026",
            "extra": "mean: 6.503474358974488 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.03077013591994,
            "unit": "iter/sec",
            "range": "stddev: 0.00033686186770287004",
            "extra": "mean: 4.628970212765666 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 320.48326319527723,
            "unit": "iter/sec",
            "range": "stddev: 0.00016030267743347105",
            "extra": "mean: 3.120287749287796 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 315.68949330464744,
            "unit": "iter/sec",
            "range": "stddev: 0.00027807500833902464",
            "extra": "mean: 3.1676695652172926 msec\nrounds: 345"
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
        "date": 1671419704994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 95.90219768400647,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855037627829038",
            "extra": "mean: 10.427289719626199 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.39958140018973,
            "unit": "iter/sec",
            "range": "stddev: 0.00030381106301704977",
            "extra": "mean: 8.445975806451607 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.59219062213884,
            "unit": "iter/sec",
            "range": "stddev: 0.00024706946931865066",
            "extra": "mean: 6.2659707602339205 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.5317368608378,
            "unit": "iter/sec",
            "range": "stddev: 0.00024870133136125104",
            "extra": "mean: 4.023630996309889 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.09589466969582,
            "unit": "iter/sec",
            "range": "stddev: 0.000483436657870746",
            "extra": "mean: 11.223861702127673 msec\nrounds: 94"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.01138901589405,
            "unit": "iter/sec",
            "range": "stddev: 0.0003467304570568742",
            "extra": "mean: 9.008084745762662 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.68218887086456,
            "unit": "iter/sec",
            "range": "stddev: 0.00013633018138799503",
            "extra": "mean: 6.506934911242551 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.44991350871075,
            "unit": "iter/sec",
            "range": "stddev: 0.00023582040562732272",
            "extra": "mean: 4.107621093750027 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.711986810622726,
            "unit": "iter/sec",
            "range": "stddev: 0.0017204805882493116",
            "extra": "mean: 93.35336363636415 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.154686688089871,
            "unit": "iter/sec",
            "range": "stddev: 0.0015454993578605265",
            "extra": "mean: 89.6484166666666 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 129.94341892274096,
            "unit": "iter/sec",
            "range": "stddev: 0.00027831977290886496",
            "extra": "mean: 7.695657142856607 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 187.52174080183119,
            "unit": "iter/sec",
            "range": "stddev: 0.00012019403815941097",
            "extra": "mean: 5.332714999999801 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 279.5052756620884,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794062511204966",
            "extra": "mean: 3.577749999999868 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 283.08845879204404,
            "unit": "iter/sec",
            "range": "stddev: 0.00009631689410793627",
            "extra": "mean: 3.532464743589555 msec\nrounds: 312"
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
        "date": 1671424255190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.14639086812396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530066553011883",
            "extra": "mean: 8.323179687499959 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.8316713796689,
            "unit": "iter/sec",
            "range": "stddev: 0.00040659195622623896",
            "extra": "mean: 6.7190000000000305 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.4407823934327,
            "unit": "iter/sec",
            "range": "stddev: 0.00030356779100214625",
            "extra": "mean: 4.989004672897168 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.2396089014922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002729237459563768",
            "extra": "mean: 3.2654169184289583 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.4158214197841,
            "unit": "iter/sec",
            "range": "stddev: 0.0003431243214930442",
            "extra": "mean: 8.74005000000014 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6032978303289,
            "unit": "iter/sec",
            "range": "stddev: 0.00038571042820659376",
            "extra": "mean: 6.963628378378375 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.0666741808506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003413482995808938",
            "extra": "mean: 5.289139423077046 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.52517929247335,
            "unit": "iter/sec",
            "range": "stddev: 0.00015919071965158238",
            "extra": "mean: 3.2203507692306435 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.328620323066803,
            "unit": "iter/sec",
            "range": "stddev: 0.003046734904274445",
            "extra": "mean: 81.11207692307659 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.999338322201178,
            "unit": "iter/sec",
            "range": "stddev: 0.004997276927168956",
            "extra": "mean: 83.33792857142797 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.39288369968259,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578934679280571",
            "extra": "mean: 6.082988372092963 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.93336478358654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508090785283401",
            "extra": "mean: 4.256526104417605 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 355.46101344442593,
            "unit": "iter/sec",
            "range": "stddev: 0.00015348504229890824",
            "extra": "mean: 2.8132480417753145 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.4329051658675,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810937262639575",
            "extra": "mean: 2.886561827956883 msec\nrounds: 372"
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
        "date": 1671430287936,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.05003604675498,
            "unit": "iter/sec",
            "range": "stddev: 0.00034175180666597203",
            "extra": "mean: 7.870914728682135 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.9600604286665,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251887246828298",
            "extra": "mean: 6.5376543209876266 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.02273375010745,
            "unit": "iter/sec",
            "range": "stddev: 0.0011152931335423018",
            "extra": "mean: 5.049925233644834 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.7798883946075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006636892448014073",
            "extra": "mean: 3.176823033707928 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.70131319239529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005182553552934637",
            "extra": "mean: 8.718295999999938 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.62710311912693,
            "unit": "iter/sec",
            "range": "stddev: 0.00022724627077224958",
            "extra": "mean: 6.914333333333219 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.75510234900773,
            "unit": "iter/sec",
            "range": "stddev: 0.00039177508890838794",
            "extra": "mean: 4.860146788990784 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.0324443037933,
            "unit": "iter/sec",
            "range": "stddev: 0.00011596518797960399",
            "extra": "mean: 3.0578005865101896 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.457027570344158,
            "unit": "iter/sec",
            "range": "stddev: 0.0014166591296937425",
            "extra": "mean: 74.31061538461464 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.315173972258718,
            "unit": "iter/sec",
            "range": "stddev: 0.0020326964444219247",
            "extra": "mean: 75.10228571428611 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.94322877045468,
            "unit": "iter/sec",
            "range": "stddev: 0.0005375305829982931",
            "extra": "mean: 6.026157303370758 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.46842442011004,
            "unit": "iter/sec",
            "range": "stddev: 0.00023345151055788723",
            "extra": "mean: 4.090507812499894 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 297.91753369765274,
            "unit": "iter/sec",
            "range": "stddev: 0.0027765101706357176",
            "extra": "mean: 3.3566335877863063 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 346.9161722040298,
            "unit": "iter/sec",
            "range": "stddev: 0.00018434383620032885",
            "extra": "mean: 2.882540740740895 msec\nrounds: 405"
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
        "date": 1671438557625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.38955214499471,
            "unit": "iter/sec",
            "range": "stddev: 0.0006078126085431949",
            "extra": "mean: 8.518645669291262 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.89784216085823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001804396423076837",
            "extra": "mean: 6.62699999999995 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.21758513000657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003615382146532353",
            "extra": "mean: 5.096383177570128 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.65578185231226,
            "unit": "iter/sec",
            "range": "stddev: 0.0001721155089978496",
            "extra": "mean: 3.2189969040248103 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.55855209296482,
            "unit": "iter/sec",
            "range": "stddev: 0.0003614938210272425",
            "extra": "mean: 8.884264957264872 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.0015300571431,
            "unit": "iter/sec",
            "range": "stddev: 0.00035128808468409866",
            "extra": "mean: 7.0921216216216525 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.75510896557162,
            "unit": "iter/sec",
            "range": "stddev: 0.00025290759398329297",
            "extra": "mean: 5.161154228855406 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.1984463181829,
            "unit": "iter/sec",
            "range": "stddev: 0.00020345381633791069",
            "extra": "mean: 3.2237427745665115 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.660975256836885,
            "unit": "iter/sec",
            "range": "stddev: 0.003603731054959806",
            "extra": "mean: 78.9828571428574 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.176503658676001,
            "unit": "iter/sec",
            "range": "stddev: 0.0032119178887092393",
            "extra": "mean: 75.89266666666579 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.12863283270545,
            "unit": "iter/sec",
            "range": "stddev: 0.0003680084033044527",
            "extra": "mean: 6.206221590909092 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.32938012824516,
            "unit": "iter/sec",
            "range": "stddev: 0.00013970184879700504",
            "extra": "mean: 4.143714285714357 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 357.6699497002883,
            "unit": "iter/sec",
            "range": "stddev: 0.00014670507755545008",
            "extra": "mean: 2.7958736842106977 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 349.16100914227343,
            "unit": "iter/sec",
            "range": "stddev: 0.00014426255230710547",
            "extra": "mean: 2.864008219178126 msec\nrounds: 365"
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
        "date": 1671466379655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.83705133740652,
            "unit": "iter/sec",
            "range": "stddev: 0.0017179720939490008",
            "extra": "mean: 9.022253731343255 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.75196674192287,
            "unit": "iter/sec",
            "range": "stddev: 0.0013791522166922128",
            "extra": "mean: 7.312509090909027 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.93732749954984,
            "unit": "iter/sec",
            "range": "stddev: 0.001000341873245896",
            "extra": "mean: 5.3781562499999955 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.6741329707788,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084861186058469",
            "extra": "mean: 3.3593782234957077 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.49906158613568,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329908037378011",
            "extra": "mean: 9.389754098360832 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.3334726668007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006526878603218202",
            "extra": "mean: 7.177026315789747 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 186.10797848318987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703599638964526",
            "extra": "mean: 5.373224770642085 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 264.0723273548039,
            "unit": "iter/sec",
            "range": "stddev: 0.0008463476070986608",
            "extra": "mean: 3.7868413173653517 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.043615405754855,
            "unit": "iter/sec",
            "range": "stddev: 0.008330207036607152",
            "extra": "mean: 83.03154545454561 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.768025944628658,
            "unit": "iter/sec",
            "range": "stddev: 0.003304999164601117",
            "extra": "mean: 78.32064285714324 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 117.40722161147002,
            "unit": "iter/sec",
            "range": "stddev: 0.002127894541865253",
            "extra": "mean: 8.517363636363452 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 209.728552529034,
            "unit": "iter/sec",
            "range": "stddev: 0.0009593029762159181",
            "extra": "mean: 4.768067999999971 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 283.07614112864303,
            "unit": "iter/sec",
            "range": "stddev: 0.000816857405890944",
            "extra": "mean: 3.5326184538652208 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 326.59995904809574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005752000832796326",
            "extra": "mean: 3.0618497409325705 msec\nrounds: 386"
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
        "date": 1671540740520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.59530124689641,
            "unit": "iter/sec",
            "range": "stddev: 0.0007032997361386709",
            "extra": "mean: 8.025984848484882 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.5211995073154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006049093882099925",
            "extra": "mean: 6.778686746987921 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.91625664587494,
            "unit": "iter/sec",
            "range": "stddev: 0.0003978024917907873",
            "extra": "mean: 5.183596330275273 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.6229259850549,
            "unit": "iter/sec",
            "range": "stddev: 0.00010752799589352573",
            "extra": "mean: 2.988438395415449 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.56978723884104,
            "unit": "iter/sec",
            "range": "stddev: 0.0004036543631151641",
            "extra": "mean: 8.652780487804835 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.23370128532935,
            "unit": "iter/sec",
            "range": "stddev: 0.0008040551323151283",
            "extra": "mean: 7.3946064516129875 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.24493366843748,
            "unit": "iter/sec",
            "range": "stddev: 0.0004178780798339179",
            "extra": "mean: 5.069838709677423 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.15685885162065,
            "unit": "iter/sec",
            "range": "stddev: 0.0004193764516034167",
            "extra": "mean: 3.1730231213873443 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.42348464546044,
            "unit": "iter/sec",
            "range": "stddev: 0.008479805435255346",
            "extra": "mean: 80.49271428571382 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.840479059930255,
            "unit": "iter/sec",
            "range": "stddev: 0.0035926343115750925",
            "extra": "mean: 77.87871428571387 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.760562806468,
            "unit": "iter/sec",
            "range": "stddev: 0.0008850275792713994",
            "extra": "mean: 6.3387197802200115 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.09558738788266,
            "unit": "iter/sec",
            "range": "stddev: 0.0006149326593197343",
            "extra": "mean: 4.29008550185873 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 343.8445412113177,
            "unit": "iter/sec",
            "range": "stddev: 0.0003377686829199323",
            "extra": "mean: 2.9082910447760364 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 355.50013399621395,
            "unit": "iter/sec",
            "range": "stddev: 0.00019714302953799897",
            "extra": "mean: 2.8129384615383857 msec\nrounds: 390"
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
        "date": 1671541698757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.14055179594087,
            "unit": "iter/sec",
            "range": "stddev: 0.00025799563590915363",
            "extra": "mean: 7.6839999999999264 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.55109602466734,
            "unit": "iter/sec",
            "range": "stddev: 0.00015719112996628323",
            "extra": "mean: 6.1519117647059645 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.49458892908285,
            "unit": "iter/sec",
            "range": "stddev: 0.0003369269831905348",
            "extra": "mean: 4.662122270742338 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.7952367053257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002322138430642064",
            "extra": "mean: 3.107566197183086 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.02387806405977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007071657138586682",
            "extra": "mean: 9.00707142857151 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.514144544243,
            "unit": "iter/sec",
            "range": "stddev: 0.00036965419038795564",
            "extra": "mean: 6.733365384615575 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.52967626330965,
            "unit": "iter/sec",
            "range": "stddev: 0.00025467778391886784",
            "extra": "mean: 4.818587962963038 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.23433486292356,
            "unit": "iter/sec",
            "range": "stddev: 0.0001714773216941877",
            "extra": "mean: 3.0373502824860266 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.572047502997938,
            "unit": "iter/sec",
            "range": "stddev: 0.0034258480851551737",
            "extra": "mean: 79.54153846153854 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.529223606175837,
            "unit": "iter/sec",
            "range": "stddev: 0.0016405254066579043",
            "extra": "mean: 73.91407142857176 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 174.46834056220516,
            "unit": "iter/sec",
            "range": "stddev: 0.00046333044153505176",
            "extra": "mean: 5.73169892473104 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.63359799493733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003237358163815732",
            "extra": "mean: 3.9898880597013955 msec\nrounds: 268"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 388.2140836173845,
            "unit": "iter/sec",
            "range": "stddev: 0.00017733017124314018",
            "extra": "mean: 2.5758983050846207 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 376.59678400899173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576551649250505",
            "extra": "mean: 2.6553599033817656 msec\nrounds: 414"
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
        "date": 1671544087316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.6522599503141,
            "unit": "iter/sec",
            "range": "stddev: 0.00036029936252440965",
            "extra": "mean: 7.653905109489045 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.33952523905958,
            "unit": "iter/sec",
            "range": "stddev: 0.0011681604696723068",
            "extra": "mean: 6.437511627907008 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.65100726344252,
            "unit": "iter/sec",
            "range": "stddev: 0.0002432345551291093",
            "extra": "mean: 4.552676595744591 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.2420419734699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000835408720292346",
            "extra": "mean: 2.87983561643841 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.7169432712979,
            "unit": "iter/sec",
            "range": "stddev: 0.0007997839520433125",
            "extra": "mean: 8.494953846153964 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.70075138313635,
            "unit": "iter/sec",
            "range": "stddev: 0.00018328994615989802",
            "extra": "mean: 6.548756249999932 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.8937459293259,
            "unit": "iter/sec",
            "range": "stddev: 0.000095681727935572",
            "extra": "mean: 4.653462555066071 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.44822394696007,
            "unit": "iter/sec",
            "range": "stddev: 0.0003247437240372653",
            "extra": "mean: 2.96341758241756 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.762566369976193,
            "unit": "iter/sec",
            "range": "stddev: 0.0012604522355475459",
            "extra": "mean: 72.66086666666732 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.06481629943423,
            "unit": "iter/sec",
            "range": "stddev: 0.0025844944462808934",
            "extra": "mean: 71.09940000000043 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.9927694345167,
            "unit": "iter/sec",
            "range": "stddev: 0.0008254209969156591",
            "extra": "mean: 6.060871657753984 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 257.16165885892406,
            "unit": "iter/sec",
            "range": "stddev: 0.0001743070125829096",
            "extra": "mean: 3.8886045627376693 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 377.616423409645,
            "unit": "iter/sec",
            "range": "stddev: 0.00014051944939011347",
            "extra": "mean: 2.6481899038463754 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 383.7168517635168,
            "unit": "iter/sec",
            "range": "stddev: 0.00009353552318449344",
            "extra": "mean: 2.6060883054891115 msec\nrounds: 419"
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
        "date": 1671549477603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.77131323827479,
            "unit": "iter/sec",
            "range": "stddev: 0.00036891541595468035",
            "extra": "mean: 8.280112000000017 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5673905223503,
            "unit": "iter/sec",
            "range": "stddev: 0.00035827511041768386",
            "extra": "mean: 6.68594936708859 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.15917375455956,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527283766358101",
            "extra": "mean: 4.922248803827677 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.06858091893554,
            "unit": "iter/sec",
            "range": "stddev: 0.00012221538375003423",
            "extra": "mean: 3.1439760479041614 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.1320660006793,
            "unit": "iter/sec",
            "range": "stddev: 0.000445785622205989",
            "extra": "mean: 8.839226890756114 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.64090513291518,
            "unit": "iter/sec",
            "range": "stddev: 0.0003198352646271674",
            "extra": "mean: 7.060107382550291 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.33864937076527,
            "unit": "iter/sec",
            "range": "stddev: 0.00019901937758242294",
            "extra": "mean: 4.991548076923027 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.99943565254034,
            "unit": "iter/sec",
            "range": "stddev: 0.00020082219515414994",
            "extra": "mean: 3.1948939393938613 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.415654343749267,
            "unit": "iter/sec",
            "range": "stddev: 0.0017663948151134272",
            "extra": "mean: 74.53978571428596 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.540241113007742,
            "unit": "iter/sec",
            "range": "stddev: 0.0033477020698319776",
            "extra": "mean: 73.853928571429 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.61680292557722,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733792400891419",
            "extra": "mean: 6.038034682080944 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.87909335183087,
            "unit": "iter/sec",
            "range": "stddev: 0.00015089241464705545",
            "extra": "mean: 4.168766798419148 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.61491884270566,
            "unit": "iter/sec",
            "range": "stddev: 0.000143057930118796",
            "extra": "mean: 2.742619537275156 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 330.52149247609157,
            "unit": "iter/sec",
            "range": "stddev: 0.00032264723229463786",
            "extra": "mean: 3.025521857923764 msec\nrounds: 366"
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
        "date": 1671551613983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.31431494970201,
            "unit": "iter/sec",
            "range": "stddev: 0.0005739944765385605",
            "extra": "mean: 8.381223999999989 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.87513471111393,
            "unit": "iter/sec",
            "range": "stddev: 0.000750305745889046",
            "extra": "mean: 6.950471337579592 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.18032026035547,
            "unit": "iter/sec",
            "range": "stddev: 0.00022305694642283736",
            "extra": "mean: 4.970665116279068 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.863182621162,
            "unit": "iter/sec",
            "range": "stddev: 0.00015409103439449967",
            "extra": "mean: 3.078218934911274 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.87716639446509,
            "unit": "iter/sec",
            "range": "stddev: 0.00019635006877977414",
            "extra": "mean: 8.781391666666938 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.1129743360244,
            "unit": "iter/sec",
            "range": "stddev: 0.00030117003907841186",
            "extra": "mean: 6.987486666666811 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.63981449136637,
            "unit": "iter/sec",
            "range": "stddev: 0.00014296862140838606",
            "extra": "mean: 4.95933802816912 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.2040782167003,
            "unit": "iter/sec",
            "range": "stddev: 0.00011761504600582483",
            "extra": "mean: 3.0655655976676393 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.488047662906789,
            "unit": "iter/sec",
            "range": "stddev: 0.0013132204354519169",
            "extra": "mean: 74.13971428571386 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.997930172725114,
            "unit": "iter/sec",
            "range": "stddev: 0.0009158631266004714",
            "extra": "mean: 71.43913333333339 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.19838732164345,
            "unit": "iter/sec",
            "range": "stddev: 0.00030774058031623493",
            "extra": "mean: 6.0169055555557325 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.76114246312997,
            "unit": "iter/sec",
            "range": "stddev: 0.00023157301967722922",
            "extra": "mean: 4.153494163424396 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 364.7998752439903,
            "unit": "iter/sec",
            "range": "stddev: 0.00015613796709548265",
            "extra": "mean: 2.741229007633752 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 365.0155416773916,
            "unit": "iter/sec",
            "range": "stddev: 0.00011474889609394223",
            "extra": "mean: 2.7396093749997665 msec\nrounds: 384"
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
        "date": 1671589263010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.61028370078938,
            "unit": "iter/sec",
            "range": "stddev: 0.00026711525040462017",
            "extra": "mean: 7.656364963503683 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.4617805714534,
            "unit": "iter/sec",
            "range": "stddev: 0.00043751960652373427",
            "extra": "mean: 6.3913372093021605 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.93072172814968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001323544374343383",
            "extra": "mean: 4.505910638297897 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 347.1672487758514,
            "unit": "iter/sec",
            "range": "stddev: 0.00007543826579953153",
            "extra": "mean: 2.8804560439560647 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.19272742457133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009029267916571527",
            "extra": "mean: 8.606390624999904 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.82248884786534,
            "unit": "iter/sec",
            "range": "stddev: 0.00035031168264857283",
            "extra": "mean: 6.501000000000179 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2651699154549,
            "unit": "iter/sec",
            "range": "stddev: 0.00019756009752415097",
            "extra": "mean: 4.711088495575131 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 337.2375809851963,
            "unit": "iter/sec",
            "range": "stddev: 0.00012480745921116958",
            "extra": "mean: 2.9652685714285707 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.51866783184708,
            "unit": "iter/sec",
            "range": "stddev: 0.004530615023261644",
            "extra": "mean: 73.97178571428574 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.786093140683557,
            "unit": "iter/sec",
            "range": "stddev: 0.0034806165066915526",
            "extra": "mean: 72.53686666666587 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.85223824537505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003542822994467165",
            "extra": "mean: 5.6865923913044085 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.1598770342041,
            "unit": "iter/sec",
            "range": "stddev: 0.00027144531308539484",
            "extra": "mean: 4.18130337078649 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 388.4415409420267,
            "unit": "iter/sec",
            "range": "stddev: 0.00010607496373987149",
            "extra": "mean: 2.574389952153047 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 374.33091763901217,
            "unit": "iter/sec",
            "range": "stddev: 0.0003255617243563815",
            "extra": "mean: 2.671433090024252 msec\nrounds: 411"
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
        "date": 1672072050588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.24828611443374,
            "unit": "iter/sec",
            "range": "stddev: 0.000628348657573406",
            "extra": "mean: 10.724057692307673 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 116.96248428316633,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403645313782748",
            "extra": "mean: 8.549749999999987 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 158.91002854705286,
            "unit": "iter/sec",
            "range": "stddev: 0.00046397082759215194",
            "extra": "mean: 6.292869047618996 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.14215648097556,
            "unit": "iter/sec",
            "range": "stddev: 0.00019372482742859682",
            "extra": "mean: 4.112820312499959 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 90.2115698712352,
            "unit": "iter/sec",
            "range": "stddev: 0.00048426892406745764",
            "extra": "mean: 11.085052631578906 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.23101270805972,
            "unit": "iter/sec",
            "range": "stddev: 0.0007645388915596825",
            "extra": "mean: 9.071857142857251 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.36382639958413,
            "unit": "iter/sec",
            "range": "stddev: 0.00038288526510969924",
            "extra": "mean: 6.520442424242432 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.95419431695896,
            "unit": "iter/sec",
            "range": "stddev: 0.00014060730728038904",
            "extra": "mean: 4.065797709923617 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.072792538145816,
            "unit": "iter/sec",
            "range": "stddev: 0.0009559279641937899",
            "extra": "mean: 90.31145454545418 msec\nrounds: 11"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.16724720842086,
            "unit": "iter/sec",
            "range": "stddev: 0.0005352702729945278",
            "extra": "mean: 89.54758333333324 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 134.91479167228906,
            "unit": "iter/sec",
            "range": "stddev: 0.00017245028418040958",
            "extra": "mean: 7.412085714285662 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 192.4316065998291,
            "unit": "iter/sec",
            "range": "stddev: 0.00012059347648715671",
            "extra": "mean: 5.196651515151295 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 291.4274172605725,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828550598689858",
            "extra": "mean: 3.431386138613977 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 285.58668897692627,
            "unit": "iter/sec",
            "range": "stddev: 0.000106877873105507",
            "extra": "mean: 3.5015637583892927 msec\nrounds: 298"
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
        "date": 1672074948235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.19520781428665,
            "unit": "iter/sec",
            "range": "stddev: 0.000194442618132048",
            "extra": "mean: 8.18362698412698 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.5815108882399,
            "unit": "iter/sec",
            "range": "stddev: 0.00029918228572956273",
            "extra": "mean: 6.730312499999951 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.43204002123235,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508149621332163",
            "extra": "mean: 5.014239436619793 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.529950609592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007948506770035093",
            "extra": "mean: 3.1894879518071995 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.13145106446663,
            "unit": "iter/sec",
            "range": "stddev: 0.000597201221607568",
            "extra": "mean: 9.08005833333331 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.13655325219176,
            "unit": "iter/sec",
            "range": "stddev: 0.00031954999128416963",
            "extra": "mean: 6.986335616438266 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.8646218106963,
            "unit": "iter/sec",
            "range": "stddev: 0.00023678307323375303",
            "extra": "mean: 5.07963285024159 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.7819663828755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003305333812892751",
            "extra": "mean: 3.486969604863246 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.34142456114372,
            "unit": "iter/sec",
            "range": "stddev: 0.005908350763418447",
            "extra": "mean: 81.02792307692287 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.076742522986715,
            "unit": "iter/sec",
            "range": "stddev: 0.0028951166092775144",
            "extra": "mean: 82.80378571428619 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.55561621650827,
            "unit": "iter/sec",
            "range": "stddev: 0.00027923041472443247",
            "extra": "mean: 6.346965116278874 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 222.38845197419997,
            "unit": "iter/sec",
            "range": "stddev: 0.00032036616757690503",
            "extra": "mean: 4.496636363636424 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 336.3535266986312,
            "unit": "iter/sec",
            "range": "stddev: 0.0001609164444132256",
            "extra": "mean: 2.973062330623304 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 324.9200350487687,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116183177028978",
            "extra": "mean: 3.077680327868688 msec\nrounds: 366"
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
        "date": 1672209875576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.00763674472596,
            "unit": "iter/sec",
            "range": "stddev: 0.00024062039815488803",
            "extra": "mean: 7.999511278195488 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.6865008847042,
            "unit": "iter/sec",
            "range": "stddev: 0.00016851133146277553",
            "extra": "mean: 6.38217073170737 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.2089997907879,
            "unit": "iter/sec",
            "range": "stddev: 0.0004165134266985966",
            "extra": "mean: 4.779909090909161 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.2911171216834,
            "unit": "iter/sec",
            "range": "stddev: 0.00013789803215668133",
            "extra": "mean: 3.064747851002855 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.41439307849001,
            "unit": "iter/sec",
            "range": "stddev: 0.0001741614332326348",
            "extra": "mean: 8.444919354838548 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.61818645542158,
            "unit": "iter/sec",
            "range": "stddev: 0.00014848261053215325",
            "extra": "mean: 6.728651612903058 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.49065259973347,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485792338916768",
            "extra": "mean: 4.890199074073977 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.2589070355174,
            "unit": "iter/sec",
            "range": "stddev: 0.00007975983930890756",
            "extra": "mean: 3.0744738372093305 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.442383065669947,
            "unit": "iter/sec",
            "range": "stddev: 0.001840035313802899",
            "extra": "mean: 74.39157142857107 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.8483440150223,
            "unit": "iter/sec",
            "range": "stddev: 0.0009786535356589542",
            "extra": "mean: 72.210800000002 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.47718595517367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435393754413248",
            "extra": "mean: 5.831679558010784 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.0484972395067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008176502914322393",
            "extra": "mean: 4.0314696969699275 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 369.2322461597348,
            "unit": "iter/sec",
            "range": "stddev: 0.00011049382656072487",
            "extra": "mean: 2.70832250000014 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 358.32644839080837,
            "unit": "iter/sec",
            "range": "stddev: 0.00024297635032363636",
            "extra": "mean: 2.790751295336567 msec\nrounds: 386"
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
        "date": 1672216836501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.91769521607293,
            "unit": "iter/sec",
            "range": "stddev: 0.00026964815617180855",
            "extra": "mean: 7.8175267175572865 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.45370473017311,
            "unit": "iter/sec",
            "range": "stddev: 0.00029673491832224837",
            "extra": "mean: 6.232327272727354 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.6128794048389,
            "unit": "iter/sec",
            "range": "stddev: 0.0002058075310338197",
            "extra": "mean: 4.70338392857136 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.07014869567723,
            "unit": "iter/sec",
            "range": "stddev: 0.00025976239649697487",
            "extra": "mean: 3.134107042253521 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.05227593487463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005850437364987173",
            "extra": "mean: 8.616806451613002 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.8281086001413,
            "unit": "iter/sec",
            "range": "stddev: 0.0007451414996384002",
            "extra": "mean: 6.857388535031929 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.09509626635688,
            "unit": "iter/sec",
            "range": "stddev: 0.00025798720886950014",
            "extra": "mean: 4.852129032258012 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.32686919089053,
            "unit": "iter/sec",
            "range": "stddev: 0.00015742500936150811",
            "extra": "mean: 3.055050147492841 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.172912352145907,
            "unit": "iter/sec",
            "range": "stddev: 0.00418308953925284",
            "extra": "mean: 75.91335714285664 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.746422493546362,
            "unit": "iter/sec",
            "range": "stddev: 0.0027360047566793526",
            "extra": "mean: 72.74619999999837 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.87907512541503,
            "unit": "iter/sec",
            "range": "stddev: 0.00033818684932782365",
            "extra": "mean: 5.956668508287553 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.22155438049944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121794149532867",
            "extra": "mean: 4.028659003831301 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 370.8332386557026,
            "unit": "iter/sec",
            "range": "stddev: 0.00018769041839606832",
            "extra": "mean: 2.6966299019609803 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 363.1640882328953,
            "unit": "iter/sec",
            "range": "stddev: 0.00020233384727883007",
            "extra": "mean: 2.753576227390372 msec\nrounds: 387"
          }
        ]
      }
    ]
  }
}