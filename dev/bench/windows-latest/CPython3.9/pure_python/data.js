window.BENCHMARK_DATA = {
  "lastUpdate": 1632253064820,
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
        "date": 1631755071564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.18181818181819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.1875 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.378378378378379,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 96.35416666666667 msec\nrounds: 6"
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
          "id": "a830bc4a08c52c80a7d23252aaa468971a09cae7",
          "message": ":memo: Remove year from \"Performance\" section\n\nEasier to maintain; preempt risk of looking dated if the year\naccidentally doesn't get updated.",
          "timestamp": "2021-09-16T00:44:59Z",
          "tree_id": "6e6f16f6f92bbe32b37814f19654a748ccb5504f"
        },
        "date": 1631755071564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.18181818181819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.1875 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.378378378378379,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 96.35416666666667 msec\nrounds: 6"
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
        "date": 1631756166975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 91.94366197183098,
            "unit": "iter/sec",
            "range": "stddev: 0.0006918866293281991",
            "extra": "mean: 10.876225490196077 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.285714285714286,
            "unit": "iter/sec",
            "range": "stddev: 0.0013072812914594885",
            "extra": "mean: 70 msec\nrounds: 5"
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
        "date": 1631768369038,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.63636363636364,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601628990789374",
            "extra": "mean: 13.221153846153847 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.341772151898734,
            "unit": "iter/sec",
            "range": "stddev: 0.003812109659955208",
            "extra": "mean: 88.16964285714286 msec\nrounds: 7"
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
        "date": 1631919585286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.74509803921569,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684129",
            "extra": "mean: 15.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.666666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.008235098073355155",
            "extra": "mean: 93.75 msec\nrounds: 10"
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
        "date": 1631920836256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.657657657657666,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013086",
            "extra": "mean: 17.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.696969696969697,
            "unit": "iter/sec",
            "range": "stddev: 0.007179192058380324",
            "extra": "mean: 103.125 msec\nrounds: 10"
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
        "date": 1631926322593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.77570093457943,
            "unit": "iter/sec",
            "range": "stddev: 0.000628966004608916",
            "extra": "mean: 13.932291666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.130434782608695,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 89.84375 msec\nrounds: 10"
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
        "date": 1631928241133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.50847457627118,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067752660526254",
            "extra": "mean: 14.182692307692308 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.428571428571429,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 87.5 msec\nrounds: 10"
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
        "date": 1631928918646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.14285714285715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684115",
            "extra": "mean: 17.5 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.142857142857142,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 109.375 msec\nrounds: 10"
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
        "date": 1631931147504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.50847457627117,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601628990789376",
            "extra": "mean: 14.182692307692308 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.428571428571429,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 87.5 msec\nrounds: 10"
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
        "date": 1632097799962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.440000000000005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006862581727795956",
            "extra": "mean: 16.276041666666664 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.158730158730158,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 98.4375 msec\nrounds: 10"
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
        "date": 1632154485811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 54.700854700854705,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306989",
            "extra": "mean: 18.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.27536231884058,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 107.8125 msec\nrounds: 10"
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
        "date": 1632156581639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 87.27272727272727,
            "unit": "iter/sec",
            "range": "stddev: 0.0004910463758239917",
            "extra": "mean: 11.458333333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.250517598343688,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227416",
            "extra": "mean: 75.46875 msec\nrounds: 10"
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
        "date": 1632158614520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.81308411214954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307006",
            "extra": "mean: 16.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.62406015037594,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 103.90625 msec\nrounds: 10"
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
        "date": 1632179002339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 56.63716814159294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306989",
            "extra": "mean: 17.656250000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.62406015037594,
            "unit": "iter/sec",
            "range": "stddev: 0.005273035607113694",
            "extra": "mean: 103.90625 msec\nrounds: 10"
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
        "date": 1632180548738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.35593220338984,
            "unit": "iter/sec",
            "range": "stddev: 0.0009572256077840436",
            "extra": "mean: 12.291666666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.087934560327199,
            "unit": "iter/sec",
            "range": "stddev: 0.002141125499072339",
            "extra": "mean: 76.40625 msec\nrounds: 10"
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
        "date": 1632181486514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 55.17241379310346,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598774",
            "extra": "mean: 18.125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.922480620155039,
            "unit": "iter/sec",
            "range": "stddev: 0.0024705294220065464",
            "extra": "mean: 100.78125 msec\nrounds: 10"
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
        "date": 1632182044180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 84.95575221238938,
            "unit": "iter/sec",
            "range": "stddev: 0.0007030714142818265",
            "extra": "mean: 11.770833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.981744421906695,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306973",
            "extra": "mean: 77.03125000000001 msec\nrounds: 10"
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
        "date": 1632183269539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.37735849056604,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598793",
            "extra": "mean: 16.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 100 msec\nrounds: 10"
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
        "date": 1632184595025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 88.88888888888889,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588078458684126",
            "extra": "mean: 11.25 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.973799126637553,
            "unit": "iter/sec",
            "range": "stddev: 0.002057126839388696",
            "extra": "mean: 71.5625 msec\nrounds: 10"
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
          "id": "da76a8646ff9998c52ba6a81d51daa6e0ee069b5",
          "message": ":construction_worker: Streamline performance testing CI job",
          "timestamp": "2021-09-21T01:01:28Z",
          "tree_id": "b18323db408e71aa3a8d85c3997528e6acad7640"
        },
        "date": 1632186731814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 58.18181818181818,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359869",
            "extra": "mean: 17.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.40650406504065,
            "unit": "iter/sec",
            "range": "stddev: 0.005273035607113694",
            "extra": "mean: 96.09375 msec\nrounds: 10"
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
          "id": "77eb8a129cd88614cb31863ea67655674f31b9d0",
          "message": ":alembic: Test fixing erroneous benchmarks publishing",
          "timestamp": "2021-09-21T05:32:34Z",
          "tree_id": "1d2648c09d2e26a853668b7a3c5c060cabb2364c"
        },
        "date": 1632202720379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.78260869565217,
            "unit": "iter/sec",
            "range": "stddev: 0.0011065580541651007",
            "extra": "mean: 14.973958333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.847457627118644,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 92.1875 msec\nrounds: 10"
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
          "id": "06110252c92f623497e3f44ffd0b8fc9d2d5ce4e",
          "message": ":green_heart: Fix erroneous benchmarks publishing",
          "timestamp": "2021-09-21T06:48:20Z",
          "tree_id": "1d2648c09d2e26a853668b7a3c5c060cabb2364c"
        },
        "date": 1632207244782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 98.018018018018,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217336509168629",
            "extra": "mean: 10.202205882352942 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.094339622641513,
            "unit": "iter/sec",
            "range": "stddev: 0.0010925092168439072",
            "extra": "mean: 66.25 msec\nrounds: 10"
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
          "id": "290ddd4ce36bb4a8507b0f189c7a2010559cdddb",
          "message": "Merge pull request #275 from TeoZosa/dependabot/pip/pytest-xdist-2.4.0",
          "timestamp": "2021-09-21T13:17:57Z",
          "tree_id": "96fae1d78f537c6ea20a044eb769166249c62f50"
        },
        "date": 1632233125465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.11111111111111,
            "unit": "iter/sec",
            "range": "stddev: 0.0008112362472482609",
            "extra": "mean: 14.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.531531531531531,
            "unit": "iter/sec",
            "range": "stddev: 0.005764568651348608",
            "extra": "mean: 86.71875 msec\nrounds: 10"
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
          "id": "aa7ee9e570c6ee091f255b6cef84d89fdf0abd16",
          "message": "Merge pull request #276 from TeoZosa/dependabot/pip/sentry-sdk-1.4.0",
          "timestamp": "2021-09-21T13:31:33Z",
          "tree_id": "e35f66b1b2ccb595a98807cb7552912be12648bf"
        },
        "date": 1632233402004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 56.140350877192986,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598774",
            "extra": "mean: 17.812500000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.552238805970148,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 104.6875 msec\nrounds: 10"
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
          "id": "9bce65619929b63ece96b7e408ebafc8ec14ae85",
          "message": ":bug: Preempt premature brace expansion by the shell\n\nIf multiple commands are passed via brace syntax, quoting the string\nallows direct evaluation by tox as opposed to generating multiple envs\nin the call to tox.\n\nFor example,\n`poetry run tox -e py3{8,9} -- $(POSARGS)`\nbecomes\n`poetry run tox -e py38 py39 -- $(POSARGS)`\nWhereas\n`poetry run tox -e \"py3{8,9}\" -- $(POSARGS)`\npasses \"py3{8,9}\" directly to tox.\nNote: to activate this behavior via the `tox-%` make target, users would\n have to also invoke it with quotes, e.g., `make tox-\"py3{8,9}\"`.\n- If a user were to enter `make tox-py3{8,9}`, this would become\n`make tox-py38 tox-py39\"`, which, while this would still work, leads to\n different semantics as separate make targets are actually invoked.\n\nsee: https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html",
          "timestamp": "2021-09-21T18:52:19Z",
          "tree_id": "648410f6afef021ae2b6552a61636df5ec976b9b"
        },
        "date": 1632250705577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.96460176991151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008788392678522824",
            "extra": "mean: 14.713541666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.666666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 93.75 msec\nrounds: 10"
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
          "id": "bc817a8e82da08d7c19b19f4074f1b24355230d3",
          "message": ":bug: Fix `test` target help text rendering",
          "timestamp": "2021-09-21T19:02:06Z",
          "tree_id": "af626cf566f0baa9ca47e7f272fa9c0f69d41689"
        },
        "date": 1632251317993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 57.657657657657666,
            "unit": "iter/sec",
            "range": "stddev: 0.0004941058844013086",
            "extra": "mean: 17.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.078740157480315,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 99.21875 msec\nrounds: 10"
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
          "id": "4366858835a6c743efd691fefb3df3e67c2f62fa",
          "message": ":memo: Update help text: `bump-commit-and-push-project-version-number-%`\n\nNote: Cannot put the \"Note\" section underneath the help text as the help\n text must directly precede a valid target name (and not other comments)\n to be rendered properly.",
          "timestamp": "2021-09-21T19:23:50Z",
          "tree_id": "07399c0cf318486dadf19ecb850eca1864daf18f"
        },
        "date": 1632252612937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.81308411214954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307006",
            "extra": "mean: 16.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.32258064516129,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 96.875 msec\nrounds: 10"
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
          "id": "84d84fd9451cd9f82ff8372975b0a7eaedf96fe5",
          "message": "Update help text: `test-mutations`",
          "timestamp": "2021-09-21T19:31:16Z",
          "tree_id": "4cbb2406183f46e03463e8f10e4a00a0ef2d67ae"
        },
        "date": 1632253061932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.34920634920634,
            "unit": "iter/sec",
            "range": "stddev: 0.00047463031203522185",
            "extra": "mean: 11.580882352941178 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.617021276595743,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359876",
            "extra": "mean: 73.4375 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}