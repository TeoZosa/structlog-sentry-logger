Structlog-Sentry-Logger
==============================
![CI](https://github.com/TeoZosa/structlog-sentry-logger/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/TeoZosa/structlog-sentry-logger/branch/master/graph/badge.svg?token=3HF21UWY82)](undefined)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
![GitHub](https://img.shields.io/github/license/teozosa/structlog-sentry-logger?style=plastic)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/structlog-sentry-logger?style=plastic)
![PyPI](https://img.shields.io/pypi/v/structlog-sentry-logger?color=informational&style=plastic)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

A multi-purpose, pre-configured, performance-optimized [`structlog`](https://www.structlog.org/en/stable/) logger
with (optional) [Sentry](https://sentry.io/welcome/) integration
via [`structlog-sentry`](https://github.com/kiwicom/structlog-sentry).

Why
------------
1. Makes logging as easy as using print statements, but prettier and less smelly!
2. Highly opinionated! There are only [two (2) distinct configurations](#output-formatting--storage).
3. Structured logs in JSON format means they are ready to be ingested by many of your
favorite log analysis tools!

What You Get
------------

### Powerful Automatic Context Fields
The pre-configured options include:

1. Timestamps
    - `DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"`
2. Log levels
    - Added to the JSON context for filtering and categorization
3. Logger names
    - Automatically assigned to namespaced versions of the initializing
python modules (`.py` files), relative to your project directory.
        - e.g., the logger in `docs_src/sentry_integration.py` is named `docs_src.sentry_integration`

With fields sorted by key for easier at-a-glance analysis.

### Performance
`structlog-sentry-logger` is fully-tuned and leverages [`ORJSON`](https://github.com/ijl/orjson)
as the JSON serializer for lightning-fast logging (more than a 4x speedup over
Python's built-in JSON library[[1]](#1)). It's 2020, you don't have to let your
obligate cross-cutting concerns cripple performance any longer!  

For further reference, see:
- "[`ORJSON`: Serialize](https://github.com/ijl/orjson#serialize)" for benchmarks
- "[`structlog`: Performance](https://www.structlog.org/en/stable/performance.html)" for salient performance-related configurations.

<a id="1">[1]</a>
source:
[Choosing a faster JSON library for Python: Benchmarking](https://pythonspeed.com/articles/faster-json-library/#step-4-benchmarking)

### Built-in Sentry Integration (Optional)
Automatically add much richer context to your Sentry reports.
- Your entire logging context is sent as a Sentry event when the `structlog-sentry-logger`
log level is `error` or higher.
    - i.e., `logger.error("")`, `logger.exception("")`
- See [`structlog-sentry`](https://github.com/kiwicom/structlog-sentry) for more details.

------------
Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  * [Pure `structlog` Logging (Without Sentry)](#pure-structlog-logging-without-sentry)
  * [Sentry Integration](#sentry-integration)
    + [Log Custom Context Directly to Sentry](#log-custom-context-directly-to-sentry)
- [Output: Formatting & Storage](#output-formatting--storage)
- [Summary](#summary)
- [Further Reading](#further-reading)
    + [`structlog`](#structlog-structured-logging-for-python)
    + [`Sentry`](#sentry-monitor-and-fix-crashes-in-realtime)
    + [`structlog-sentry`](#structlog-sentry-provides-the-structlog-sentryprocessor-for-sentry-integration)

Installation
==============================
 ```shell script
pip install structlog-sentry-logger
```

Usage
==============================
Pure `structlog` Logging (Without Sentry)
------------
At the top of your Python module, import and instantiate the logger:
```python
import structlog_sentry_logger

LOGGER = structlog_sentry_logger.get_logger()
```
Now anytime you want to print anything, don't. Instead do this:
```python
LOG_MSG = "Information that's useful for future me and others"
LOGGER.info(LOG_MSG, extra_field="extra_value")
```
###### Note: all the regular [Python logging levels](https://docs.python.org/3/library/logging.html#levels) are supported.
Which automatically produces this:
```
{
    "event": "Information that's useful for future me and others",
    "extra_field": "extra_value",
    "level": "info",
    "logger": "docs_src.pure_structlog_logging_without_sentry",
    "sentry": "skipped",
    "timestamp": "2020-10-18 15:30:05"
}
```

Sentry Integration
------------
Export your [Sentry DSN](https://docs.sentry.io/platforms/python/#configure)
into your local environment.

- An easy way to do this is to put it into a local `.env` file and use
[`python-dotenv`](https://github.com/theskumar/python-dotenv) to populate your environment:
 ```shell script
# On the command line:
SENTRY_DSN=YOUR_SENTRY_DSN
 echo "SENTRY_DSN=${SENTRY_DSN}" >> .env
```

Then load the `.env` file in your Python code prior to instantiating the logger, e.g.:
```python
from dotenv import find_dotenv, load_dotenv
load_dotenv(find_dotenv())

import structlog_sentry_logger
LOGGER = structlog_sentry_logger.get_logger()
```

### Log Custom Context Directly to Sentry
With `structlog`, you can even incorporate custom messages in your exception handling which will automatically be reported to Sentry (thanks to the `structlog-sentry` module):
```python
import uuid

import structlog_sentry_logger

LOGGER = structlog_sentry_logger.get_logger()

curr_user_logger = LOGGER.bind(uuid=uuid.uuid4().hex)  # LOGGER instance with bound UUID
try:
    curr_user_logger.warn("A dummy error for testing purposes is about to be thrown!")
    x = 1 / 0
except ZeroDivisionError as err:
    ERR_MSG = (
        "I threw an error on purpose for this example!\n"
        "Now throwing another that explicitly chains from that one!"
    )
    curr_user_logger.exception(ERR_MSG)
    raise RuntimeError(ERR_MSG) from err
```

```
{
    "event": "A dummy error for testing purposes is about to be thrown!",
    "level": "warning",
    "logger": "docs_src.sentry_integration",
    "sentry": "skipped",
    "timestamp": "2020-10-18 15:29:55",
    "uuid": "181e0e00b9034732af4fed2b8424fb11"
}
{
    "event": "I threw an error on purpose for this example!\nNow throwing another that explicitly chains from that one!",
    "exception": 'Traceback (most recent call last):\n  File "/app/structlog-sentry-logger/docs_src/sentry_integration.py", line 10, in <module>\n    x = 1 / 0\nZeroDivisionError: division by zero',
    "level": "error",
    "logger": "docs_src.sentry_integration",
    "sentry": "sent",
    "sentry_id": null,
    "timestamp": "2020-10-18 15:29:55",
    "uuid": "181e0e00b9034732af4fed2b8424fb11"
}
Traceback (most recent call last):
  File "/app/structlog-sentry-logger/docs_src/sentry_integration.py", line 10, in <module>
    x = 1 / 0
ZeroDivisionError: division by zero

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/app/structlog-sentry-logger/docs_src/sentry_integration.py", line 17, in <module>
    raise RuntimeError(ERR_MSG) from err
RuntimeError: I threw an error on purpose for this example!
Now throwing another that explicitly chains from that one!
```

Output: Formatting & Storage
==============================
The default behavior is to stream JSON logs directly to the standard output
stream [like a proper 12 Factor App](https://12factor.net/logs).

For local development, it often helps to prettify logging to stdout and save
JSON logs to a `.logs` folder at the root of your project directory for later
debugging. To enable this behavior, set the following environment variable
(e.g. via [`python-dotenv`](https://github.com/theskumar/python-dotenv) as in
the [Sentry Integration](#sentry-integration) section):
```bash
CI_ENVIRONMENT_SLUG=dev-local
```
In doing so, with our previous exception handling example we would get:

<img src=".static/Output_Formatting_example.png">

Summary
==============================
That's it. Now no excuses.
Get out there and program with pride knowing no one
will laugh at you in production! For not logging properly, that is. You're on your own
for that other [observability](https://devops.com/metrics-logs-and-traces-the-golden-triangle-of-observability-in-monitoring/) stuff.

Further Reading
==============================
<img src="https://www.structlog.org/en/stable/_static/structlog_logo_small.png" width="200">

### [`structlog`](https://www.structlog.org/en/stable/#): Structured Logging for Python

<img src="https://camo.githubusercontent.com/2dfeafbee0904d6df16ddf7200993dace1629e60/68747470733a2f2f73656e7472792d6272616e642e73746f726167652e676f6f676c65617069732e636f6d2f73656e7472792d6c6f676f2d626c61636b2e706e67" width="400">

### [`Sentry`](https://sentry.io/welcome/): Monitor and fix crashes in realtime.

### [`structlog-sentry`](https://github.com/kiwicom/structlog-sentry): Provides the [`structlog`](https://www.structlog.org/en/stable/#) `SentryProcessor` for [Sentry](https://sentry.io/welcome/) integration.
