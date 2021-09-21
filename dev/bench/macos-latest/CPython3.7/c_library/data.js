window.BENCHMARK_DATA = {
  "lastUpdate": 1632184445739,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
          "id": "a830bc4a08c52c80a7d23252aaa468971a09cae7",
          "message": ":memo: Remove year from \"Performance\" section\n\nEasier to maintain; preempt risk of looking dated if the year\naccidentally doesn't get updated.",
          "timestamp": "2021-09-16T00:44:59Z",
          "tree_id": "6e6f16f6f92bbe32b37814f19654a748ccb5504f"
        },
        "date": 1631755225425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.7989919057998,
            "unit": "iter/sec",
            "range": "stddev: 0.0009706145284325233",
            "extra": "mean: 13.92777215189872 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.048940985232282,
            "unit": "iter/sec",
            "range": "stddev: 0.002411001187323502",
            "extra": "mean: 76.63457142857169 msec\nrounds: 14"
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
          "id": "4cc61459ec5c5a6f91481c6ff85a23300f099946",
          "message": ":construction_worker: Benchmark based on process time\n\nGiven that benchmarks run automatically on cloud instances during CI,\nresource contention may confound metrics. Benchmarking based on process\ntime will lead to more accurate results within and between environment.\n\nNote: logging is inherently I/O-bound and process time, by definition,\nexcludes time spent waiting on I/O, so these benchmarks are *not*\na good indication of real-world performance. Instead, they are meant to\ncompare performance across different combinations of Python\ninterpreters, platforms, and library types (viz. Python and C).",
          "timestamp": "2021-09-16T01:00:37Z",
          "tree_id": "addd2c89830236692cba95e762cb2fb0018b4598"
        },
        "date": 1631757014637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.08407797998169,
            "unit": "iter/sec",
            "range": "stddev: 0.0010100223474545805",
            "extra": "mean: 14.475115384615359 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.92772294781633,
            "unit": "iter/sec",
            "range": "stddev: 0.0024532723470482277",
            "extra": "mean: 77.35314285714281 msec\nrounds: 14"
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
          "id": "99dd7a9b89d48ea97eacf85123b3fb121a53e9bd",
          "message": ":memo: Fix broken link",
          "timestamp": "2021-09-16T04:36:21Z",
          "tree_id": "27a53814f2e5df6ee6610a9e4460a01f86308d40"
        },
        "date": 1631768276657,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.96286561749558,
            "unit": "iter/sec",
            "range": "stddev: 0.0004400010609555127",
            "extra": "mean: 13.339938271604842 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.655179409550065,
            "unit": "iter/sec",
            "range": "stddev: 0.0014882905748422389",
            "extra": "mean: 73.2322857142856 msec\nrounds: 14"
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
          "id": "d23896f21f544a8e0a4c5d0d81f2128223599d91",
          "message": ":rotating_light: Fix `pylint` error: `unspecified-encoding`\n\nError log:\n```\npoetry run tox -e precommit -- pylint\nprecommit recreate: /Users/TeofiloZosa/Developer/personal/structlog-sentry-logger/.tox/precommit\nprecommit installdeps: importlib-metadata, pre-commit, mypy, pylint, emoji, pytest, pytest-benchmark, pytest-mock, sphinx, types-emoji, -rrequirements.txt\nprecommit installed: alabaster==0.7.12,astroid==2.8.0,attrs==21.2.0,Babel==2.9.1,backports.entry-points-selectable==1.1.0,certifi==2021.5.30,cfgv==3.3.1,charset-normalizer==2.0.6,colorama==0.4.4,distlib==0.3.2,docutils==0.17.1,emoji==1.5.0,filelock==3.0.12,gitdb==4.0.7,GitPython==3.1.23,identify==2.2.14,idna==3.2,imagesize==1.2.0,importlib-metadata==4.8.1,iniconfig==1.1.1,isort==5.9.3,Jinja2==3.0.1,lazy-object-proxy==1.6.0,MarkupSafe==2.0.1,mccabe==0.6.1,mypy==0.910,mypy-extensions==0.4.3,nodeenv==1.6.0,orjson==3.6.3,packaging==21.0,platformdirs==2.3.0,pluggy==1.0.0,pre-commit==2.15.0,py==1.10.0,py-cpuinfo==8.0.0,Pygments==2.10.0,pylint==2.11.1,pyparsing==2.4.7,pytest==6.2.5,pytest-benchmark==3.4.1,pytest-mock==3.6.1,python-dotenv==0.19.0,pytz==2021.1,PyYAML==5.4.1,requests==2.26.0,sentry-sdk==1.3.1,six==1.16.0,smmap==4.0.0,snowballstemmer==2.1.0,Sphinx==4.2.0,sphinxcontrib-applehelp==1.0.2,sphinxcontrib-devhelp==1.0.2,sphinxcontrib-htmlhelp==2.0.0,sphinxcontrib-jsmath==1.0.1,sphinxcontrib-qthelp==1.0.3,sphinxcontrib-serializinghtml==1.1.5,structlog==21.1.0,toml==0.10.2,typed-ast==1.4.3,types-emoji==1.2.4,typing-extensions==3.10.0.2,urllib3==1.26.6,virtualenv==20.8.0,wrapt==1.12.1,zipp==3.5.0\nprecommit run-test-pre: PYTHONHASHSEED='3671854975'\nprecommit run-test: commands[0] | pre-commit run pylint -vv --all-files --color always\npylint...................................................................Failed\n- hook id: pylint\n- duration: 10.63s\n- exit code: 4\n\n************* Module conf\ndocs/source/conf.py:60:rotating_light: W1514: Using open without explicitly specifying an encoding (unspecified-encoding)\n\n-------------------------------------------------------------------\nYour code has been rated at 9.92/10 (previous run: 10.00/10, -0.08)\n```",
          "timestamp": "2021-09-17T22:36:47Z",
          "tree_id": "6952d59be8e9966ffdaeee0d5f50753de6746fb8"
        },
        "date": 1631919191323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.36872394711015,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108595445242217",
            "extra": "mean: 13.446512820512883 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.363547678274486,
            "unit": "iter/sec",
            "range": "stddev: 0.00083840661277893",
            "extra": "mean: 74.83042857142864 msec\nrounds: 14"
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
          "id": "959344c1be799a11ca12d6c60c83734c0ac4a8f0",
          "message": ":construction_worker: Run benchmarks for 10 rounds minimum",
          "timestamp": "2021-09-17T22:39:13Z",
          "tree_id": "2cfa7f3c76575ff6640fc6d0fbae50ef7482feac"
        },
        "date": 1631920598345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.84532760472628,
            "unit": "iter/sec",
            "range": "stddev: 0.0006462070453457681",
            "extra": "mean: 13.541818181818147 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.930035577490228,
            "unit": "iter/sec",
            "range": "stddev: 0.0018004671331174607",
            "extra": "mean: 77.33930769230753 msec\nrounds: 13"
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
          "id": "3f9c5d9e1fcf990601ea83e9094f53ef699f436d",
          "message": "Merge pull request #262 from TeoZosa/dependabot/pip/dot-github/workflows/tox-3.24.4",
          "timestamp": "2021-09-17T23:37:37Z",
          "tree_id": "5a61dcaceaf3d00af9f7d7ac5cc96dc8457f88eb"
        },
        "date": 1631926843809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.5418741336861,
            "unit": "iter/sec",
            "range": "stddev: 0.0006802171963973031",
            "extra": "mean: 13.41527848101275 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.14212172045395,
            "unit": "iter/sec",
            "range": "stddev: 0.0024066816343277543",
            "extra": "mean: 76.09121428571416 msec\nrounds: 14"
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
          "id": "c3eb93104a61ab01094f0acfb85e1ce97bcab5aa",
          "message": "Merge pull request #265 from TeoZosa/dependabot/pip/emoji-1.5.0",
          "timestamp": "2021-09-17T23:51:01Z",
          "tree_id": "429dbf163282c04a49d771a2c8f0bb9a0eeb55bb"
        },
        "date": 1631929355309,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.39294033655345,
            "unit": "iter/sec",
            "range": "stddev: 0.0014014306743105167",
            "extra": "mean: 14.006987179487217 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.65746371689342,
            "unit": "iter/sec",
            "range": "stddev: 0.003336802814917447",
            "extra": "mean: 79.0047692307693 msec\nrounds: 13"
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
          "id": "fecaf63d91064bb0453d2246ff3bc30801074690",
          "message": "Merge pull request #264 from TeoZosa/dependabot/pip/pylint-2.11.1",
          "timestamp": "2021-09-18T00:04:26Z",
          "tree_id": "40ef8ad8a56ad319a91e5f5335b1c1c387ae8062"
        },
        "date": 1631930024872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.04527229877931,
            "unit": "iter/sec",
            "range": "stddev: 0.0011119438841766794",
            "extra": "mean: 14.276481012658254 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.008250947743973,
            "unit": "iter/sec",
            "range": "stddev: 0.0010607723912007855",
            "extra": "mean: 76.87428571428586 msec\nrounds: 14"
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
          "id": "2cbc574e1735d50fb1a9c8bc047e15b2ce725f8a",
          "message": "Merge pull request #263 from TeoZosa/dependabot/pip/tox-3.24.4",
          "timestamp": "2021-09-18T01:33:51Z",
          "tree_id": "5f076b277ecb6ca479b07bbb00aa9ffb04fd7c0c"
        },
        "date": 1631931314194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.61401379722369,
            "unit": "iter/sec",
            "range": "stddev: 0.0004425602881438791",
            "extra": "mean: 13.22506172839507 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.918779632450743,
            "unit": "iter/sec",
            "range": "stddev: 0.0012369558995518482",
            "extra": "mean: 77.40669230769254 msec\nrounds: 13"
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
          "id": "20bb41230a00c11bac58afbae88b56a1f48cf897",
          "message": ":memo: Note documentation dependency logic and future remediation plan",
          "timestamp": "2021-09-20T00:02:06Z",
          "tree_id": "12049da28a578ef67868b1f8b29cdb4393d5409e"
        },
        "date": 1632097662576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.31409010992462,
            "unit": "iter/sec",
            "range": "stddev: 0.001962496473480892",
            "extra": "mean: 14.02247435897429 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.44038186230602,
            "unit": "iter/sec",
            "range": "stddev: 0.004192223485981125",
            "extra": "mean: 80.38338461538464 msec\nrounds: 13"
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
          "id": "a5ed13d385ce7ebbf37ca0d0148dcfee66e6eccf",
          "message": "Merge pull request #268 from TeoZosa/dependabot/pip/poetry-1.1.9",
          "timestamp": "2021-09-20T14:22:55Z",
          "tree_id": "f7c8029ca6980f5a60d16dc991f01f3897d87584"
        },
        "date": 1632155820773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.36113772540688,
            "unit": "iter/sec",
            "range": "stddev: 0.00031614656229536566",
            "extra": "mean: 13.447884615384673 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.459933623298742,
            "unit": "iter/sec",
            "range": "stddev: 0.001007278566182114",
            "extra": "mean: 74.29457142857153 msec\nrounds: 14"
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
          "id": "4a1735882d9546db6acedc2edb65b34f8d3bf95d",
          "message": "Merge pull request #270 from TeoZosa/dependabot/pip/gitpython-3.1.24",
          "timestamp": "2021-09-20T15:17:46Z",
          "tree_id": "06662ff5700b686ef043e9f6d43ab59e8cbb5f6f"
        },
        "date": 1632159109744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.58273035963553,
            "unit": "iter/sec",
            "range": "stddev: 0.001049529535833425",
            "extra": "mean: 14.796679487179466 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.888709674449666,
            "unit": "iter/sec",
            "range": "stddev: 0.0013415466062360471",
            "extra": "mean: 77.58728571428534 msec\nrounds: 14"
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
          "id": "08c2314084ac7bcb2b91fba901de670874867f9b",
          "message": "Merge pull request #267 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.9",
          "timestamp": "2021-09-20T16:26:07Z",
          "tree_id": "93b3d3e711e4554809880c9fc9249a3800273076"
        },
        "date": 1632161152466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.42553305845392,
            "unit": "iter/sec",
            "range": "stddev: 0.00032393094012190675",
            "extra": "mean: 16.27987500000004 msec\nrounds: 64"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.987209971991755,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899752235540377",
            "extra": "mean: 91.01491666666679 msec\nrounds: 12"
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
          "id": "8aa33a82109f519b45fbbc6d5ea038a980113305",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2021-09-20T22:37:47Z",
          "tree_id": "24e309019fa1e569286d1bfa8170308fde51e30c"
        },
        "date": 1632178683908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.29951276665659,
            "unit": "iter/sec",
            "range": "stddev: 0.00036615972819713347",
            "extra": "mean: 13.459038461538473 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.217103569085902,
            "unit": "iter/sec",
            "range": "stddev: 0.003367965993875249",
            "extra": "mean: 81.85246153846113 msec\nrounds: 13"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "3f6fdd33f54576d220f5601bb6e09f9fc4c8a468",
          "message": ":green_heart: Install project directly",
          "timestamp": "2021-09-20T23:10:32Z",
          "tree_id": "ace8007d2305e1458502e5f58792e33d9ae53075"
        },
        "date": 1632180313445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.24412014228695,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118170107877014",
            "extra": "mean: 13.290074999999947 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.484332169186008,
            "unit": "iter/sec",
            "range": "stddev: 0.001471403090571738",
            "extra": "mean: 74.16014285714276 msec\nrounds: 14"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "3f6fdd33f54576d220f5601bb6e09f9fc4c8a468",
          "message": ":green_heart: Install project directly",
          "timestamp": "2021-09-20T23:10:32Z",
          "tree_id": "ace8007d2305e1458502e5f58792e33d9ae53075"
        },
        "date": 1632181423532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.98973529329733,
            "unit": "iter/sec",
            "range": "stddev: 0.0012301132097593981",
            "extra": "mean: 14.70810256410255 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.46938696971506,
            "unit": "iter/sec",
            "range": "stddev: 0.0009941338490818085",
            "extra": "mean: 74.24242857142849 msec\nrounds: 14"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "05efc63e15c973b365bd9fe8035f22673ad07ede",
          "message": ":construction_worker: Disable retries for simple `pip install`s",
          "timestamp": "2021-09-20T23:45:10Z",
          "tree_id": "b43e9b53a969dc66fbbe0a4e53fab8c561850581"
        },
        "date": 1632181902603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.70148504157113,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939134705314563",
            "extra": "mean: 13.20978048780489 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.862195910454206,
            "unit": "iter/sec",
            "range": "stddev: 0.0010860598231957606",
            "extra": "mean: 72.1386428571427 msec\nrounds: 14"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "849668599cf92a51dace04fab335022e2cfafad1",
          "message": ":construction_worker: Differentiate `.tox` cache from `.venv` cache",
          "timestamp": "2021-09-21T00:04:44Z",
          "tree_id": "85b7467d729a77c429b9ad02f77e872a46f0cd4d"
        },
        "date": 1632183032445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.52472991613149,
            "unit": "iter/sec",
            "range": "stddev: 0.0007106738239875837",
            "extra": "mean: 12.899109756097559 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.49192643122359,
            "unit": "iter/sec",
            "range": "stddev: 0.0018711828497351786",
            "extra": "mean: 74.11839999999982 msec\nrounds: 15"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "3919b79fbefdde2ff81ecf5ea9c3c6f60e81599b",
          "message": ":fire: Remove redundant PR-triggered workflow trigger",
          "timestamp": "2021-09-21T00:30:02Z",
          "tree_id": "cbb01e6bafef410a4f20e5086374804001801735"
        },
        "date": 1632184444390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.75635540013557,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913075441773241",
            "extra": "mean: 17.019435483870954 msec\nrounds: 62"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.495271880018004,
            "unit": "iter/sec",
            "range": "stddev: 0.0018046411831716311",
            "extra": "mean: 95.28100000000043 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}