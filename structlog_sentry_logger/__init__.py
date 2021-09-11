r"""
=======================================================================================================
PLACEHOLDER THAT WILL BE EATEN BY SPHINX (note: purposely broken across two lines)
see: https://stackoverflow.com/questions/27965192/python-sphinx-skips-first-section-when-generating-pdf
=======================================================================================================

\:four_leaf_clover\: Recommended Best Practices
================================================


Canonical Log Lines
-------------------

Users should strive to implement canonical log lines
(when it makes sense).

- Note: the below is a quick primer on the topic; see the
  `original Stripe blog post`_ for more details.

**canonical log lines**: authoritative line for a particular request,
in the same vein that the IETF’s canonical link relation specifies an
authoritative URL.

**In addition to their normal log traces**,
requests (or some other unit of work that’s executing) also emit
ONE LONG LOG LINE at the end that
pulls all its key telemetry into one place. i.e.,

    .. highlight:: bash
    .. code-block:: bash

        [2019-03-18 22:48:32.999]
        "canonical-log-line"
        alloc_count=9123
        auth_type=api_key
        database_queries=34
        duration=0.009
        http_method=POST
        http_path=/v1/charges
        http_status=200
        key_id=mk_123
        permissions_used=account_write
        rate_allowed=true
        rate_quota=100
        rate_remaining=99
        request_id=req_123
        team=acquiring
        user_id=usr_123†

† uuid (aka guid) may be useful
    - i.e., :bash:`user_id = uuid.uuid4()`
    - See also: `When are you truly forced to use UUID as part of the design?`_


The above sample shows the kind of information that a canonical line might
contain:

#. HTTP request:
    - verb
    - path
    - response status
#. Authenticated user and related information, e.g.,
    - authentication method (API key, password)
    - ID of the API key they used
#. Rate limiters which allowed the request and related statistics, e.g.,
    - allotted quota
    - what portion remains
#. Timing information, e.g.,
    - total request duration
    - time spent in database queries
#. Number of:
    - database queries issued
    - objects allocated by the VM
    - etc.

**Canonical lines are an ergonomic feature.**

- By colocating everything that’s important to us, we make it accessible
  through queries that are easy for people to write, even under the duress of a
  production incident.
- Because the underlying logging system doesn’t need to piece together
  multiple log lines at query time they’re also cheap for computers to retrieve
  and aggregate, which makes them fast to use.
- The wide variety of information being logged provides almost limitless
  flexibility in what can be queried. This is especially valuable during the
  discovery phase of an incident where it’s understood that something’s wrong,
  but it’s still a mystery as to what.

Getting insight into e.g., a rate limiting problem, becomes as simple as
(e.g. using Splunk_ and its `built-in query language`_):

- :bash:`canonical-log-line rate_allowed=false | stats count by user_id`

.. _`original Stripe blog post`: https://stripe.com/blog/canonical-log-lines
.. _`When are you truly forced to use UUID as part of the design?`: https://stackoverflow.com/a/786541
.. _Splunk: https://www.splunk.com/en_us
.. _`built-in query language`: https://docs.splunk.com/Documentation/Splunk/8.1.1/SearchTutorial/Usethesearchlanguage

A Quick Primer on Log Levels
--------------------------------
Excerpt from [1]:

    You must use the appropriate criticality for each log message for log levels to be
    useful. While log levels are not completely standard, the following levels are common:

    - **TRACE** This is an extremely fine level of detail that only gets turned on for specific
      packages or classes. This is rarely used outside of development. If you need
      line-by-line logs or data structure dumps, this level is for you. If you find yourself
      using TRACE frequently, you should consider using a debugger to step through code
      instead.
    - **DEBUG** This is used when the message will be useful during a production issue but not
      during normal operations. Don’t use debug-level logging so much that the output is
      unusable when debugging; save that for TRACE.
    - **INFO** This is nice-to-have information about the state of the application but not
      indicative of any problems. Application state messages like “Service started” and
      “Listening on port 5050” go here. INFO is the default log level. Don’t emit frivolous
      logs with INFO—“just in case” logging goes into TRACE or DEBUG. INFO logging should
      tell us something useful during normal operations.
    - **WARN** These are messages about potentially problematic situations. A resource nearing
      its capacity merits a warning. Whenever you log a warning, there should be a concrete
      action you want the person seeing the message to take. If the warning is not
      actionable, log it to INFO.
    - **ERROR** These messages indicate that an error that needs attention is occurring. An
      unwritable database usually merits an ERROR log. ERROR logs should be detailed enough
      to diagnose problems. Log explicit details, including relevant stack traces and the
      resulting actions the software is performing.
    - **FATAL** These are the “last gasp” log messages. If the program encounters a condition so
      severe that it must exit immediately, a message about the cause of the problem can be
      logged at the FATAL level. Include relevant context about the program’s state;
      locations of recovery or diagnostic-related data should be logged.

    Here’s an INFO-level log emitted in Python:

    .. highlight:: bash
    .. code-block:: bash

        info!("Failed request: {}, retrying", e);

    The log line includes the error that causes the request to fail. The INFO level is used
    because the application is automatically retrying; no operator action is needed.

[1] C. Riccomini and D. Ryaboy, The Missing README: A Guide for the New Software Engineer, Paperback. No Starch Press, 2021.

"""
from typing import List

import sentry_sdk
from dotenv import find_dotenv, load_dotenv

from structlog_sentry_logger._config import (
    get_config_dict,
    get_logger,
    get_namespaced_module_name,
    getLogger,
)

__all__: List[str] = [
    "get_config_dict",
    "get_logger",
    "get_namespaced_module_name",
    "getLogger",
]

load_dotenv(find_dotenv())
# Note: if DSN isn't defined, will silently not transmit telemetry
sentry_sdk.init()  # pylint: disable=abstract-class-instantiated
