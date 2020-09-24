Structlog-Sentry-Logger
==============================

A logger that automagically wraps [Structlog](https://www.structlog.org/en/stable/) with [Sentry](https://sentry.io/welcome/) integration using
`CorSAIR`-standard configurations.

##### Benefits:
1. Makes logging as easy as using print statements, but prettier and less smelly!
2. Highly opinionated! There is **literally** nothing you are allowed to configure!
3. Structured logs in JSON format means they are ready to be ingested by many
favorite log analysis tools!

Save your tears for what you do best: writing fancy computer mumbo jumbo to
make the world a better place!  


Usage
------------
At the top of your Python module, import and instantiate the logger:
```python
from structlog_sentry_logger import logger
LOGGER = logger.get_logger()
```
Now anytime you want to print anything, don't. Instead do this:
```python
LOGGER.info("Information that's useful for future me and others")
```
###### Note: all the regular [Python logging levels](https://docs.python.org/3/library/logging.html#levels) are supported.

You can even incorporate custom messages in your exception handling:
```python
try:
    assert False
except AssertionError as err:
    err_msg = ("I threw an error on purpose for this example!\n"
               "Now throwing another!")
    LOGGER.exception(err_msg)
    raise RuntimeError(err_msg) from err
```

Output Formatting
------------
The default behavior is to stream JSON logs directly to the standard output
stream [like a proper 12 Factor App](https://12factor.net/logs).

For local development, it often helps to prettify logging to stdout and save
JSON logs to a `.logs` folder at the root of your project directory. To enable
this behavior, set the following environment variable:
```bash
CI_ENVIRONMENT_SLUG=dev-local
```

Summary
------------
That's it. Now no excuses.
Get out there and program with pride knowing no one
will laugh at you in production! For not logging properly, that is. You're on your own
for that other [observability](https://devops.com/metrics-logs-and-traces-the-golden-triangle-of-observability-in-monitoring/) stuff.

Further Reading
------------
<img src="https://www.structlog.org/en/stable/_static/structlog_logo_small.png" width="200">

### [`Structlog`](https://www.structlog.org/en/stable/#): Structured Logging for Python

<img src="https://camo.githubusercontent.com/2dfeafbee0904d6df16ddf7200993dace1629e60/68747470733a2f2f73656e7472792d6272616e642e73746f726167652e676f6f676c65617069732e636f6d2f73656e7472792d6c6f676f2d626c61636b2e706e67" width="400">

### [`Sentry`](https://sentry.io/welcome/): Monitor and fix crashes in realtime.
