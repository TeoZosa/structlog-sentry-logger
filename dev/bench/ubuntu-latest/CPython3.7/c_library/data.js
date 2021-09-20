window.BENCHMARK_DATA = {
  "lastUpdate": 1632097185762,
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
        "date": 1631754486987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 109.06151887359829,
            "unit": "iter/sec",
            "range": "stddev: 0.00038492184655227444",
            "extra": "mean: 9.169136926829294 msec\nrounds: 123"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.03519839423937,
            "unit": "iter/sec",
            "range": "stddev: 0.0011154100359363774",
            "extra": "mean: 45.38193766666646 msec\nrounds: 24"
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
        "date": 1631755666645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 103.5763603859048,
            "unit": "iter/sec",
            "range": "stddev: 0.00030100058175767025",
            "extra": "mean: 9.654712680327828 msec\nrounds: 122"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.142138471049066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007379748729367263",
            "extra": "mean: 47.29890504545448 msec\nrounds: 22"
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
        "date": 1631767801007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 100.20600576620116,
            "unit": "iter/sec",
            "range": "stddev: 0.00015041533815971338",
            "extra": "mean: 9.979441774509823 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.367357432932764,
            "unit": "iter/sec",
            "range": "stddev: 0.00013940698614716172",
            "extra": "mean: 49.09817109523799 msec\nrounds: 21"
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
        "date": 1631919030088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.94010436001841,
            "unit": "iter/sec",
            "range": "stddev: 0.0012728349863667288",
            "extra": "mean: 12.997123000000059 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.58153039786611,
            "unit": "iter/sec",
            "range": "stddev: 0.002309676664510147",
            "extra": "mean: 53.81688044999992 msec\nrounds: 20"
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
        "date": 1631920233074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.13800878278353,
            "unit": "iter/sec",
            "range": "stddev: 0.0033119258175466544",
            "extra": "mean: 13.862317755555518 msec\nrounds: 90"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.697709000421913,
            "unit": "iter/sec",
            "range": "stddev: 0.004039237493137553",
            "extra": "mean: 56.504488800000054 msec\nrounds: 20"
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
        "date": 1631925795680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.27259752188897,
            "unit": "iter/sec",
            "range": "stddev: 0.0006767808307043156",
            "extra": "mean: 14.864893535211316 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.11978564925535,
            "unit": "iter/sec",
            "range": "stddev: 0.0027154634568342046",
            "extra": "mean: 62.035564352941314 msec\nrounds: 17"
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
        "date": 1631927894129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.44133760990178,
            "unit": "iter/sec",
            "range": "stddev: 0.0018077812551804265",
            "extra": "mean: 13.804272988235287 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.316774061805678,
            "unit": "iter/sec",
            "range": "stddev: 0.0046694886491822464",
            "extra": "mean: 57.74747631578942 msec\nrounds: 19"
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
        "date": 1631928736799,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.16740079562777,
            "unit": "iter/sec",
            "range": "stddev: 0.0011359669553642772",
            "extra": "mean: 13.483012607594992 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.13860014309627,
            "unit": "iter/sec",
            "range": "stddev: 0.0012283652310650466",
            "extra": "mean: 58.347822555555545 msec\nrounds: 18"
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
        "date": 1631930638047,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 132.01453525692358,
            "unit": "iter/sec",
            "range": "stddev: 0.00011543231100640066",
            "extra": "mean: 7.574923458646607 msec\nrounds: 133"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.965977817904374,
            "unit": "iter/sec",
            "range": "stddev: 0.0004164911252506971",
            "extra": "mean: 38.511933076922986 msec\nrounds: 26"
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
        "date": 1632097185134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 100.43395167058011,
            "unit": "iter/sec",
            "range": "stddev: 0.00020467920196943544",
            "extra": "mean: 9.956792333333308 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.57613473152691,
            "unit": "iter/sec",
            "range": "stddev: 0.00014512929710221943",
            "extra": "mean: 48.59999280952376 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}