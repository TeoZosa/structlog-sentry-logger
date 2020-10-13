Structlog-Sentry-Logger
==============================

A multi-purpose, pre-configured [`structlog`](https://www.structlog.org/en/stable/) logger
with (optional) [Sentry](https://sentry.io/welcome/) integration
via [`structlog-sentry`](https://github.com/kiwicom/structlog-sentry).

##### Benefits:
1. Makes logging as easy as using print statements, but prettier and less smelly!
2. Highly opinionated! There are only two (2) distinct configurations. 
3. Structured logs in JSON format means they are ready to be ingested by many
favorite log analysis tools!

Save your tears for what you do best: writing fancy computer mumbo jumbo to
make the world a better place!  


Usage
==============================
Pure `structlog` Logging (Without Sentry)
------------
At the top of your Python module, import and instantiate the logger:
```python
from structlog_sentry_logger import logger
LOGGER = logger.get_logger()
```
Now anytime you want to print anything, don't. Instead do this:
```python
LOGGER.info("Information that's useful for future me and others", extra_field="extra_value")
```
###### Note: all the regular [Python logging levels](https://docs.python.org/3/library/logging.html#levels) are supported.
```
{
    "event": "Information that's useful for future me and others",
    "extra_field": "extra_value",
    "level": "info",
    "logger": "<input>",
    "timestamp": "2020-09-25 17:21:26",
}
```

With `structlog`, you can even incorporate custom messages in your exception handling:
```python
import uuid

from structlog_sentry_logger import logger
LOGGER = logger.get_logger()

curr_user_logger = LOGGER.bind(uuid=uuid.uuid4().hex)  # LOGGER instance with bound UUID
try:
    curr_user_logger.warn("A dummy error for testing purposes is about to be thrown!")
    assert False
except AssertionError as err:
    err_msg = ("I threw an error on purpose for this example!\n"
               "Now throwing another that explicitly chains from that one!")
    curr_user_logger.exception(err_msg)
    raise RuntimeError(err_msg) from err
```

```
{
    "event": "A dummy error for testing purposes is about to be thrown!",
    "level": "warning",
    "logger": "<input>",
    "timestamp": "2020-09-25 17:19:02",
    "uuid": "68f595440e69478a97a26b002f9cbf44",
}
{
    "event": "I threw an error on purpose for this example!\nNow throwing another that explicitly chains from that one!",
    "exception": 'Traceback (most recent call last):\n  File "<input>", line 8, in <module>\nAssertionError',
    "level": "error",
    "logger": "<input>",
    "timestamp": "2020-09-25 17:19:02",
    "uuid": "68f595440e69478a97a26b002f9cbf44",
}
Traceback (most recent call last):
  File "<input>", line 8, in <module>
AssertionError
The above exception was the direct cause of the following exception:
Traceback (most recent call last):
  File "<input>", line 13, in <module>
RuntimeError: I threw an error on purpose for this example!
Now throwing another that explicitly chains from that one!
```
Sentry Integration
------------
Export your [Sentry DSN](https://docs.sentry.io/platforms/python/#configure) 
into your local environment. 

- An easy way to do this is to put it into a local `.env` file and use 
`python-dotenv` to populate your environment:
 ```shell script
# On the command line:
SENTRY_DSN=YOUR_SENTRY_DSN
 echo "SENTRY_DSN=${SENTRY_DSN}" > .env
```
```python
# In your Python code, prior to instantiating the logger:
from dotenv import find_dotenv, load_dotenv
load_dotenv(find_dotenv())
```

Output: Formatting & Storage
==============================
The default behavior is to stream JSON logs directly to the standard output
stream [like a proper 12 Factor App](https://12factor.net/logs).

For local development, it often helps to prettify logging to stdout and save
JSON logs to a `.logs` folder at the root of your project directory. To enable
this behavior, set the following environment variable:
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

### [`Structlog`](https://www.structlog.org/en/stable/#): Structured Logging for Python

<img src="https://camo.githubusercontent.com/2dfeafbee0904d6df16ddf7200993dace1629e60/68747470733a2f2f73656e7472792d6272616e642e73746f726167652e676f6f676c65617069732e636f6d2f73656e7472792d6c6f676f2d626c61636b2e706e67" width="400">

### [`Sentry`](https://sentry.io/welcome/): Monitor and fix crashes in realtime.

### [`structlog-sentry`](https://github.com/kiwicom/structlog-sentry): Provides the `structlog` `SentryProcessor` for `Sentry` integration.
