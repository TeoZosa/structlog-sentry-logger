"""Sphinx configuration."""
import datetime
import os
import pathlib
import re
import sys
from typing import List, Match

import emoji
import importlib_metadata
from dotenv import find_dotenv, load_dotenv
from sphinx.application import Sphinx

# Load user-specific env vars (e.g. secrets) from a `.env` file
load_dotenv(find_dotenv())


# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. Note that we are adding an absolute
# path.
_project_directory = pathlib.Path(__file__).parent.parent.parent
sys.path.insert(0, str(_project_directory))


# -- Project information -----------------------------------------------------
PACKAGE_NAME = "structlog-sentry-logger"
try:
    project_metadata = importlib_metadata.metadata(PACKAGE_NAME)
except importlib_metadata.PackageNotFoundError as err:
    raise RuntimeError(
        f"The package '{PACKAGE_NAME}' must be installed. "
        "Please install the package in editable mode before building docs."
    ) from err


# pylint: disable=invalid-name

# -- Project information -----------------------------------------------------
project = project_metadata["Name"]
author = project_metadata["Author"]
copyright = (  # pylint: disable=redefined-builtin
    f"{datetime.datetime.now().year}, {author}"
)
version = release = project_metadata["Version"]

# -- General configuration ---------------------------------------------------
extensions = [
    "autoapi.extension",  # Include documentation from docstrings (https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html)
    "myst_parser",  # MyST .md parsing (https://myst-parser.readthedocs.io/en/latest/index.html)
    "sphinx.ext.autodoc",  # Deferred to by `autoapi.extension` for type hints (via `autodoc_typehints` config) and sphinx_icontract for contract auto-documentation
    "sphinx.ext.intersphinx",  # Link to other projects’ documentation (https://www.sphinx-doc.org/en/master/usage/extensions/intersphinx.html)
    "sphinx.ext.viewcode",  # Add documentation links to/from source code (https://www.sphinx-doc.org/en/master/usage/extensions/viewcode.html)
    "sphinx.ext.autosectionlabel",  # Allow reference sections using its title (https://www.sphinx-doc.org/en/master/usage/extensions/autosectionlabel.html)
    "sphinx_rtd_theme",  # Sphinx theme used on Read The Docs (https://github.com/readthedocs/sphinx_rtd_theme)
    "sphinxcontrib.confluencebuilder",  # Build Confluence supported format files (e.g. storage format) and optionally publish them to a Confluence instance (https://sphinxcontrib-confluencebuilder.readthedocs.io/en/stable/)
]

rst_prolog = pathlib.Path("global.rst").read_text()

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# List of patterns, relative to source directory, that match files and
#   directories to ignore when looking for source files.
#   This pattern also affects html_static_path and html_extra_path.
exclude_patterns: List[str] = [
    ".DS_Store",
    ".venv",
    "_build",
    "Thumbs.db",
    "global.rst",
]

# Sphinx configs
html_theme = "sphinx_rtd_theme"
html_show_sourcelink = (
    False  # Remove 'view source code' from top of page (for html, not python)
)

# -- Extension configurations ---------------------------------------------------

# `sphinx-autoapi` configs
autoapi_add_toctree_entry = False
autoapi_dirs = [str(_project_directory / "structlog_sentry_logger")]
autoapi_member_order = "groupwise"
autoapi_options = [
    "members",
    # Display children of an object that have been inherited from a base class.
    "inherited-members",
    "undoc-members",
    #
    # "special-members", # Display special objects (eg. __foo__ in Python)
    "show-inheritance",
    # Display an inheritance diagram in generated class documentation. It makes use of
    # the `sphinx.ext.inheritance_diagram` extension, and requires Graphviz to be
    # installed.
    "show-inheritance-diagram",
    "show-module-summary",
    "imported-members",
]
autoapi_python_class_content = "both"  # Concatenate __init__ and class docstrings
autoapi_python_use_implicit_namespaces = True  # APIDOC config
autoapi_template_dir = "_templates"
autoapi_type = "python"
autodoc_typehints = "description"  # Show typehints as content of function or method

# `myst_parser` configs
# Prefix document path to section labels, to use:
# `path/to/file:heading` instead of just `heading`
autosectionlabel_prefix_document = True


def convert_emoji_shortcodes(app: Sphinx, exception: Exception) -> None:
    """Convert emoji shortcodes in HTML files to corresponding emoji characters

    Running separately to support Read The Docs builds.
    Adapted from: https://bitbucket.org/lbesson/bin/src/master/emojize.py
    """

    def emojize_match(match: Match) -> str:
        """Convert emoji shortcodes in match to corresponding emoji characters"""
        return emoji.emojize(match.group(), use_aliases=True, variant="emoji_type")

    def emojize_all(text: str) -> str:
        """Convert all emoji shortcodes in text to corresponding emoji characters"""
        return re.sub(r":([a-z0-9_-]+):", emojize_match, text)

    if exception is None:
        for html_file in pathlib.Path(app.outdir).rglob("*.html"):
            html_file.write_text(emojize_all(html_file.read_text()))


def setup(app: Sphinx) -> None:
    """Connects bespoke emoji shortcode conversion functions"""
    app.connect("build-finished", convert_emoji_shortcodes)


# sphinxcontrib.confluencebuilder configs
# user-specific values sourced from a `.env.` file in the root of this directory
confluence_publish = True
confluence_space_name = os.environ.get("confluence_space_name")
confluence_parent_page = os.environ.get("confluence_parent_page")
confluence_page_hierarchy = True
confluence_server_url = os.environ.get("confluence_server_url")
confluence_server_user = os.environ.get("confluence_server_user")
confluence_server_pass = os.environ.get("confluence_server_pass")


# -- External mapping --------------------------------------------------------
python_version = ".".join(map(str, sys.version_info[0:2]))
intersphinx_mapping = {
    "sphinx": ("http://www.sphinx-doc.org/en/stable", None),
    "python": ("https://docs.python.org/" + python_version, None),
}
