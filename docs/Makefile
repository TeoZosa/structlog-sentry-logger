# Makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
ifneq ($(shell command -v sphinx-build),)
SPHINXBUILD   ?= sphinx-build
else
SPHINXBUILD   ?= uv run sphinx-build
endif
SOURCEDIR     = source
BUILDDIR      = _build

# User-friendly check for sphinx-build (if called with no arguments, exits with exit code 2)
ifneq ($(shell $(SPHINXBUILD) >/dev/null 2>&1; echo $$?), 2)
$(error "The '$(SPHINXBUILD)' command was not found. Make sure you have Sphinx installed, then set the SPHINXBUILD environment variable to point to the full path of the '$(SPHINXBUILD)' executable. Alternatively you can add the directory with the executable to your PATH. If you don't have Sphinx installed, grab it from http://sphinx-doc.org/")
endif

.PHONY: help clean Makefile

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

clean:
	rm -rf $(BUILDDIR)/*

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: LAUNCH_DOCS_PREVIEW ?=false
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
ifneq ($(filter html,$(MAKECMDGOALS)),)
ifneq ($(LAUNCH_DOCS_PREVIEW),false)
	$(MAKE) launch-docs-in-browser
endif
endif

.PHONY: launch-docs-in-browser
launch-docs-in-browser: PRINTF_RED_TEXT_FORMAT_STR := \033[0;31m%s\033[0m\n
launch-docs-in-browser: PRINTF_GREEN_TEXT_FORMAT_STR := \033[0;32m%s\033[0m\n
launch-docs-in-browser:
ifneq ($(shell command -v open),)
	@echo
	@printf "$(PRINTF_GREEN_TEXT_FORMAT_STR)" "Launching docs browser preview."
	@open -a "Google Chrome" "$(BUILDDIR)/html/index.html"
else
	@echo
	@printf "$(PRINTF_RED_TEXT_FORMAT_STR)"  "Can't launch docs preview in browser."
	@echo "To view the docs, you may manually open the home page in your browser: $(BUILDDIR)/html/index.html"
endif
