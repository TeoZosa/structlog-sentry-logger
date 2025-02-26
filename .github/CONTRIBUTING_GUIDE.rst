Contributor Guide
=================

Thank you for your interest in improving this project.
This project is open-source under the `Apache license`_ and
welcomes contributions in the form of bug reports, feature requests, and pull requests.

Here is a list of important resources for contributors:

- `Source Code`_
- `Documentation`_
- `Issue Tracker`_
- `Code of Conduct`_

.. _Apache license: https://opensource.org/licenses/Apache-2.0
.. _Source Code: https://github.com/TeoZosa/structlog-sentry-logger
.. _Documentation: https://structlog-sentry-logger.readthedocs.io
.. _Issue Tracker: https://github.com/TeoZosa/structlog-sentry-logger/issues

How to report a bug
--------------------

Report bugs on the `Issue Tracker`_.

When filing an issue, make sure to answer these questions:

- Which operating system and Python version are you using?
- Which version of this project are you using?
- What did you do?
- What did you expect to see?
- What did you see instead?

The best way to get your bug fixed is to provide a test case,
and/or steps to reproduce the issue.


How to request a feature
------------------------

Request features on the `Issue Tracker`_.


How to set up your development environment
------------------------------------------

.. note::
   For convenience, many of the below processes are abstracted away
   and encapsulated in single ``make`` targets.

.. tip::
   Invoking ``make`` without any arguments will display
   auto-generated documentation on available commands.

Make sure you have Python 3.9+ and uv_ installed and configured.

Install the package with development requirements:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. highlight:: bash
.. code-block:: bash

   $ make provision-environment

.. tip::
   Invoking the above without ``uv`` installed will emit a
   helpful error message letting you know how you can install uv.

.. _UV: https://github.com/astral-sh/uv


How to test the project
-----------------------

We use tox_ for our test automation framework
and pytest_ for our testing framework.

Run the full test suite:
^^^^^^^^^^^^^^^^^^^^^^^^

.. highlight:: bash
.. code-block:: bash

   $ make test

Run `mutation tests`_ to validate test suite robustness (Optional):
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. highlight:: bash
.. code-block:: bash

   $ make test-mutations

.. note::
   Test time scales with the complexity of the codebase. Results are cached
   in ``.mutmut-cache``, so once you get past the initial `cold start problem`_,
   subsequent mutation test runs will be much faster; new mutations will only
   be applied to modified code paths.

Lint the code:
^^^^^^^^^^^^^^

.. highlight:: bash
.. code-block:: bash

   $ make lint

.. danger::
   CI will fail if either testing or code quality fail,
   so it is recommended to automatically run the above locally
   prior to every commit that is pushed.

You can also run a specific Python ``tox`` testenv.
For example, invoke the Python3.9 unit test suite like this:

.. highlight:: bash
.. code-block:: bash

   $ make test-py37

Unit tests are located in the ``tests`` directory,
and are written using the pytest_ testing framework.

Build the documentation:
^^^^^^^^^^^^^^^^^^^^^^^^

.. highlight:: bash
.. code-block:: bash

   $ make docs-clean docs-html

.. note::
   For faster feedback loops, this will attempt to automatically open the newly
   built documentation static HTML in your browser.

.. _pytest: https://pytest.readthedocs.io/
.. _tox: https://tox.readthedocs.io/
.. _`mutation tests`: https://opensource.com/article/20/7/mutmut-python
.. _`cold start problem`: https://en.wikipedia.org/wiki/Cold_start_(recommender_systems)


How to submit changes
---------------------

Open a `pull request`_ to submit changes to this project.

Your pull request needs to meet the following guidelines for acceptance:

- The ``tox`` test suite must pass without errors and warnings.
- Include unit tests. This project maintains **100% code coverage**.
- If your changes add functionality, update the documentation accordingly.

Feel free to submit early, though we can always iterate on this.

To run linting and code formatting checks before commiting your change, you can install pre-commit as a Git hook by running the following command:

.. highlight:: bash
.. code-block:: bash

   $ make install-pre-commit-hooks

.. warning::
   This will prevent commits if any single pre-commit hook fails
   (unless it is allowed to fail)
   or a file is modified by an auto-formatting job;
   in the latter case, you may simply repeat the commit and it should pass.

It is recommended to open an issue before starting work on anything.
This will allow a chance to talk it over with the owners and validate your approach.

.. _pull request: https://github.com/TeoZosa/structlog-sentry-logger/pulls
.. github-only
.. _Code of Conduct: CODE_OF_CONDUCT.rst
