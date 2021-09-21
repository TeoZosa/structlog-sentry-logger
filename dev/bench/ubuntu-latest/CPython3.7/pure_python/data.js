window.BENCHMARK_DATA = {
  "lastUpdate": 1632252840137,
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
        "date": 1631754452812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 116.7064369400682,
            "unit": "iter/sec",
            "range": "stddev: 0.00014605223016376088",
            "extra": "mean: 8.568507669491495 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.171557065324166,
            "unit": "iter/sec",
            "range": "stddev: 0.00045800239095418867",
            "extra": "mean: 45.10283139130441 msec\nrounds: 23"
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
        "date": 1631755674109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.80686519230119,
            "unit": "iter/sec",
            "range": "stddev: 0.0015159500035331753",
            "extra": "mean: 13.734968499999955 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.706337976596128,
            "unit": "iter/sec",
            "range": "stddev: 0.0026567345225044768",
            "extra": "mean: 56.47695200000018 msec\nrounds: 18"
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
        "date": 1631767792755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 89.39251835194536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215155064865544",
            "extra": "mean: 11.18661850495051 msec\nrounds: 101"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.606104386575392,
            "unit": "iter/sec",
            "range": "stddev: 0.0023939014351905268",
            "extra": "mean: 46.28321617391306 msec\nrounds: 23"
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
        "date": 1631918939709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 117.985836577637,
            "unit": "iter/sec",
            "range": "stddev: 0.00005072986190359019",
            "extra": "mean: 8.475593588235316 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.15081230895851,
            "unit": "iter/sec",
            "range": "stddev: 0.00004731806415944382",
            "extra": "mean: 43.19502860869538 msec\nrounds: 23"
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
        "date": 1631920203161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 83.97505808323375,
            "unit": "iter/sec",
            "range": "stddev: 0.00046967618190253224",
            "extra": "mean: 11.90829780681816 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.95090574219185,
            "unit": "iter/sec",
            "range": "stddev: 0.000976977446663019",
            "extra": "mean: 50.123037666666754 msec\nrounds: 21"
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
        "date": 1631925785185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.68704306675812,
            "unit": "iter/sec",
            "range": "stddev: 0.001483967951477854",
            "extra": "mean: 14.995416710843426 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.793768294376072,
            "unit": "iter/sec",
            "range": "stddev: 0.0035278381796023076",
            "extra": "mean: 56.19945047368419 msec\nrounds: 19"
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
        "date": 1631927873510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.41057130465397,
            "unit": "iter/sec",
            "range": "stddev: 0.0010206543993007875",
            "extra": "mean: 14.003528913580165 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.206279125476208,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929469025841856",
            "extra": "mean: 58.11831789473679 msec\nrounds: 19"
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
        "date": 1631928602122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 115.33376883298175,
            "unit": "iter/sec",
            "range": "stddev: 0.00005048866741398791",
            "extra": "mean: 8.6704874913793 msec\nrounds: 116"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.33458605728328,
            "unit": "iter/sec",
            "range": "stddev: 0.00007361346769465431",
            "extra": "mean: 44.77360795652182 msec\nrounds: 23"
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
        "date": 1631930649747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.67431305226646,
            "unit": "iter/sec",
            "range": "stddev: 0.00023779150863741376",
            "extra": "mean: 9.739534361344585 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.76984360971403,
            "unit": "iter/sec",
            "range": "stddev: 0.0009192367640054938",
            "extra": "mean: 48.146727476190584 msec\nrounds: 21"
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
        "date": 1632097168765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.45855070836416,
            "unit": "iter/sec",
            "range": "stddev: 0.0010253843027673017",
            "extra": "mean: 13.994126526315778 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.402961114016694,
            "unit": "iter/sec",
            "range": "stddev: 0.0013726741962969019",
            "extra": "mean: 57.4614856315791 msec\nrounds: 19"
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
        "date": 1632153814094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.26184918300619,
            "unit": "iter/sec",
            "range": "stddev: 0.001910739277894268",
            "extra": "mean: 14.867268922077917 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.294009147056137,
            "unit": "iter/sec",
            "range": "stddev: 0.002208193614180889",
            "extra": "mean: 61.372249823529245 msec\nrounds: 17"
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
        "date": 1632155925021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.55917549733907,
            "unit": "iter/sec",
            "range": "stddev: 0.00024967618597167176",
            "extra": "mean: 9.750468401785712 msec\nrounds: 112"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.05558125431782,
            "unit": "iter/sec",
            "range": "stddev: 0.000666427319209638",
            "extra": "mean: 47.493345727272775 msec\nrounds: 22"
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
        "date": 1632158004410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 117.71329608942014,
            "unit": "iter/sec",
            "range": "stddev: 0.00010450794950444063",
            "extra": "mean: 8.495217050420171 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.324153859903458,
            "unit": "iter/sec",
            "range": "stddev: 0.00007282082038131446",
            "extra": "mean: 42.87400974999996 msec\nrounds: 24"
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
        "date": 1632178293616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 85.3805155376435,
            "unit": "iter/sec",
            "range": "stddev: 0.00036646014269099757",
            "extra": "mean: 11.712274090909055 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.503405529251204,
            "unit": "iter/sec",
            "range": "stddev: 0.0008696962828049021",
            "extra": "mean: 48.77238557142856 msec\nrounds: 21"
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
        "date": 1632180219675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.95004341748471,
            "unit": "iter/sec",
            "range": "stddev: 0.0016058968853259485",
            "extra": "mean: 14.094424074074114 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.497704388672737,
            "unit": "iter/sec",
            "range": "stddev: 0.002747406018138624",
            "extra": "mean: 57.150353999999965 msec\nrounds: 19"
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
        "date": 1632181353917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.7658007897119,
            "unit": "iter/sec",
            "range": "stddev: 0.0008835184639126197",
            "extra": "mean: 14.756706013157869 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.360281806835765,
            "unit": "iter/sec",
            "range": "stddev: 0.0028879366312091017",
            "extra": "mean: 61.1236414999999 msec\nrounds: 18"
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
        "date": 1632181839967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.0091243269466,
            "unit": "iter/sec",
            "range": "stddev: 0.0004323756657404644",
            "extra": "mean: 12.985474237500005 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.016553338010407,
            "unit": "iter/sec",
            "range": "stddev: 0.00032115513230794563",
            "extra": "mean: 55.50451194736848 msec\nrounds: 19"
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
        "date": 1632183021975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.16660554260777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005152618285364549",
            "extra": "mean: 13.483157179487103 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.532752155067435,
            "unit": "iter/sec",
            "range": "stddev: 0.0012351361875466008",
            "extra": "mean: 57.03611111111116 msec\nrounds: 18"
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
        "date": 1632184351158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.17995099141284,
            "unit": "iter/sec",
            "range": "stddev: 0.0008601219352960939",
            "extra": "mean: 12.956732767441915 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 18.78957019733227,
            "unit": "iter/sec",
            "range": "stddev: 0.0027438867216215104",
            "extra": "mean: 53.22101514285725 msec\nrounds: 21"
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
        "date": 1632186465636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 117.07644608012974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005024115078518506",
            "extra": "mean: 8.541427703703762 msec\nrounds: 135"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.68787157797545,
            "unit": "iter/sec",
            "range": "stddev: 0.001626237991911827",
            "extra": "mean: 42.21569661538446 msec\nrounds: 26"
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
        "date": 1632202526646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.66554916817579,
            "unit": "iter/sec",
            "range": "stddev: 0.00008977595641159365",
            "extra": "mean: 9.740365761467912 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.480017656037745,
            "unit": "iter/sec",
            "range": "stddev: 0.00034577449896008947",
            "extra": "mean: 48.82808290476198 msec\nrounds: 21"
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
        "date": 1632207041202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 80.29537964044593,
            "unit": "iter/sec",
            "range": "stddev: 0.0014731174903276371",
            "extra": "mean: 12.454016712765945 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.185034433021617,
            "unit": "iter/sec",
            "range": "stddev: 0.00272339685933935",
            "extra": "mean: 52.123961699999995 msec\nrounds: 20"
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
        "date": 1632232559973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 99.76782212966238,
            "unit": "iter/sec",
            "range": "stddev: 0.00026744960889632947",
            "extra": "mean: 10.023271819047617 msec\nrounds: 105"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.28329239851024,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524024907496227",
            "extra": "mean: 49.3016607142856 msec\nrounds: 21"
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
        "date": 1632233109989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.75341783972087,
            "unit": "iter/sec",
            "range": "stddev: 0.0016714135058458679",
            "extra": "mean: 12.538647585106427 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.870449851350227,
            "unit": "iter/sec",
            "range": "stddev: 0.003074283906297811",
            "extra": "mean: 50.3259869545454 msec\nrounds: 22"
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
        "date": 1632250470507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.63214663008159,
            "unit": "iter/sec",
            "range": "stddev: 0.0014204816891321948",
            "extra": "mean: 12.717445000000025 msec\nrounds: 94"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.355608037500073,
            "unit": "iter/sec",
            "range": "stddev: 0.0056455565358631155",
            "extra": "mean: 57.61826366666676 msec\nrounds: 21"
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
        "date": 1632251069406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 105.51028623312418,
            "unit": "iter/sec",
            "range": "stddev: 0.000360169109018325",
            "extra": "mean: 9.477748906779643 msec\nrounds: 118"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.90327382675933,
            "unit": "iter/sec",
            "range": "stddev: 0.0013388730680014495",
            "extra": "mean: 45.65527545833333 msec\nrounds: 24"
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
        "date": 1632252371132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.28695051903527,
            "unit": "iter/sec",
            "range": "stddev: 0.0014768379983847075",
            "extra": "mean: 12.30209761363635 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.800507548107184,
            "unit": "iter/sec",
            "range": "stddev: 0.001841668646805155",
            "extra": "mean: 50.50375590476186 msec\nrounds: 21"
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
        "date": 1632252839364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 101.04513759603653,
            "unit": "iter/sec",
            "range": "stddev: 0.00016383295122109092",
            "extra": "mean: 9.89656725490198 msec\nrounds: 102"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.780630973143854,
            "unit": "iter/sec",
            "range": "stddev: 0.0004671408183513092",
            "extra": "mean: 48.12173419047595 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}