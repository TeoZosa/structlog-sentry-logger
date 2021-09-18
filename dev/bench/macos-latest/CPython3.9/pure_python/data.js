window.BENCHMARK_DATA = {
  "lastUpdate": 1631930117829,
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
        "date": 1631755667319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.29753215154669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006077723572701246",
            "extra": "mean: 13.83173076923078 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.847401633993414,
            "unit": "iter/sec",
            "range": "stddev: 0.0017177316181778428",
            "extra": "mean: 72.21571428571417 msec\nrounds: 14"
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
        "date": 1631757364698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.57656010289615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437464947956849",
            "extra": "mean: 13.409038961038984 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.163417511244752,
            "unit": "iter/sec",
            "range": "stddev: 0.001079801813317595",
            "extra": "mean: 70.60442857142853 msec\nrounds: 14"
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
        "date": 1631768905210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.22601928012314,
            "unit": "iter/sec",
            "range": "stddev: 0.0012725354665778588",
            "extra": "mean: 15.57001369863013 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.189442793147181,
            "unit": "iter/sec",
            "range": "stddev: 0.005331733693773426",
            "extra": "mean: 75.81821428571408 msec\nrounds: 14"
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
        "date": 1631919611036,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.8060870781711,
            "unit": "iter/sec",
            "range": "stddev: 0.00048744941935755914",
            "extra": "mean: 13.367896103896156 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.405250425675217,
            "unit": "iter/sec",
            "range": "stddev: 0.0009429371185418235",
            "extra": "mean: 69.41913333333301 msec\nrounds: 15"
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
        "date": 1631921002757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.26632549823614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005706814445126457",
            "extra": "mean: 13.83770370370371 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.073710590091897,
            "unit": "iter/sec",
            "range": "stddev: 0.0011240678593307132",
            "extra": "mean: 71.05446666666678 msec\nrounds: 15"
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
        "date": 1631927216874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.88182152487195,
            "unit": "iter/sec",
            "range": "stddev: 0.0003816652848455276",
            "extra": "mean: 13.006975903614498 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.473581371921869,
            "unit": "iter/sec",
            "range": "stddev: 0.0013252250374935315",
            "extra": "mean: 69.09139999999982 msec\nrounds: 15"
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
        "date": 1631929599046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.58592410746715,
            "unit": "iter/sec",
            "range": "stddev: 0.00048755270188676717",
            "extra": "mean: 13.969226666666579 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.281688209799912,
            "unit": "iter/sec",
            "range": "stddev: 0.0020457998249608813",
            "extra": "mean: 70.01973333333329 msec\nrounds: 15"
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
        "date": 1631930116801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.95433952418249,
            "unit": "iter/sec",
            "range": "stddev: 0.0004824399736135656",
            "extra": "mean: 13.34145569620249 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.978233095423809,
            "unit": "iter/sec",
            "range": "stddev: 0.0028189552573350705",
            "extra": "mean: 71.53979999999999 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}