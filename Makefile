define DESCRIPTION
Code quality (testing, linting/auto-formatting, etc.) and local execution
orchestration for $(PROJECT_NAME).
endef

#################################################################################
# CONFIGURATIONS                                                                #
#################################################################################

MAKEFLAGS += --warn-undefined-variables
SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help
.DELETE_ON_ERROR:
.SUFFIXES:

#################################################################################
# GLOBALS                                                                       #
#################################################################################

PROJECT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PROJECT_NAME := $(shell basename $(PROJECT_DIR))

# List any changed files (excluding submodules)
CHANGED_FILES := $(shell git diff --name-only)

ifeq ($(strip $(CHANGED_FILES)),)
GIT_VERSION := $(shell git describe --tags --long --always)
else
diff_checksum := $(shell git diff | shasum -a 256 | cut -c -6)
GIT_VERSION := $(shell git describe --tags --long --always --dirty)-$(diff_checksum)
endif
TAG := $(shell date +v%Y%m%d)-$(GIT_VERSION)

#################################################################################
# HELPER TARGETS                                                                #
#################################################################################

.PHONY: strong-version-tag
strong-version-tag: get-make-var-TAG

.PHONY: strong-version-tag-dateless
strong-version-tag-dateless: get-make-var-GIT_VERSION

.PHONY: get-make-var-%
get-make-var-%:
	@echo $($*)

.PHONY: _validate-uv-installation
_validate-uv-installation:
ifeq ($(shell command -v uv),)
	@echo "uv could not be found!"
	@echo "Please install uv!"
	@echo "Ex.: 'curl -LsSf \
	https://astral.sh/uv/install.sh | sh'"
	@echo "see:"
	@echo "- https://github.com/astral-sh/uv?tab=readme-ov-file#installation"
	false
else
	@echo "Using $(shell uv --version) in $(shell which uv)"
endif

.PHONY: update-dependencies
## Update and install Python dependencies,
## updating packages in `uv.lock` with any newer versions
## that adhere to `pyproject.toml` version range constraints
update-dependencies:
	uv sync --all-packages
ifneq (${CI}, true)
	$(MAKE) install
endif

.PHONY: install
## Install Python dependencies specified in `uv.lock`
install:
	uv sync --all-extras
	$(MAKE) clean

.PHONY: generate-requirements
## Generate project requirements files from `pyproject.toml`
## Creates three files:
## - requirements.txt: base dependencies with sentry
## - requirements-dev.txt: adds development dependencies
## - requirements-all.txt: adds documentation dependencies
generate-requirements:
	uv pip compile pyproject.toml -o requirements-all.txt --extra sentry --extra dev --extra docs

.PHONY: clean-requirements
## Clean generated project requirements files
clean-requirements:
	find . -type f -name "requirements*.txt" -delete -maxdepth 1

.PHONY: clean
## Delete all compiled Python files
clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete
	# Clean up files in source directories that may have been generated from C extension compilation
	find . -type f -name "*.so" -delete -maxdepth 2
	find . -type f -name "*.pyd" -delete -maxdepth 2

#################################################################################
# COMMANDS                                                                      #
#################################################################################

.PHONY: provision-environment
## Set up a Python virtual environment with installed project dependencies
provision-environment: _validate-uv-installation install install-project

.PHONY: install-pre-commit-hooks
## Install git pre-commit hooks locally
install-pre-commit-hooks:
	uvx pre-commit install

.PHONY: get-project-version-number
## Echo project's canonical version number
get-project-version-number:
	@echo \
		"from tomli import load; \
		print(load(open('pyproject.toml', 'rb'))['project']['version'])" \
		| uv run --with tomli -

#  Note: The new version should ideally be a valid semver string or a valid bump rule:
#  "patch", "minor", "major", "prepatch", "preminor", "premajor", "prerelease".
.PHONY: bump-commit-and-push-project-version-number-%
##  *ATOMICALLY*:
##  1.) Bump the version of the project
##  2.) Write the new version back to `pyproject.toml` (assuming a valid bump rule is provided)
##  3.) Commit the version bump to VCS
##  4.) Push the commit to the remote repository
##  (e.g.,
##  `bump-commit-and-push-project-version-number-patch`,
##  `bump-commit-and-push-project-version-number-minor`,
##  etc.)
bump-commit-and-push-project-version-number-%: VERSION_NUM_FILE:=pyproject.toml
bump-commit-and-push-project-version-number-%:
	# shell out to ensure the updated version number propagates to the downstream commands;
	NEW_VER_NUM="$(shell $(MAKE) _get_bumped-project-version-$*)" && \
	$(MAKE) _bump-project-version-$${NEW_VER_NUM} && \
		export COMMIT_MSG=":bookmark: Bump version number to \`$${NEW_VER_NUM}\`" && \
		git commit $(VERSION_NUM_FILE) -m "$${COMMIT_MSG}" && \
		git push \
	|| git checkout HEAD -- $(VERSION_NUM_FILE) # Rollback `VERSION_NUM_FILE` file on failure

_get_bumped-project-version-%: VERSION_NUM_FILE:=pyproject.toml
_get_bumped-project-version-%:
	@echo \
		"import tomli; \
		data=tomli.load(open('${VERSION_NUM_FILE}', 'rb')); \
		from packaging.version import Version; \
		v=Version(data['project']['version']); \
		bump_type='$*'; \
		bumped_project_version=str(Version\
			(bump_type if '.' in bump_type else \
			f'{v.major+1 if bump_type==\"major\" else v.major}.{v.minor+1 if bump_type==\"minor\" else v.minor}.{v.micro+1 if bump_type==\"patch\" else v.micro}')); \
		print(bumped_project_version)" \
		| uv run --with tomli --with packaging -

_bump-project-version-%: VERSION_NUM_FILE:=pyproject.toml
_bump-project-version-%:
	echo \
		"import tomli, tomli_w; \
		data=tomli.load(open('${VERSION_NUM_FILE}', 'rb')); \
		data['project']['version']='$*'; \
		tomli_w.dump(data, open('${VERSION_NUM_FILE}', 'wb'))" \
			| uv run --with tomli --with tomli-w -

.PHONY: package
## Build project package(s)
package:
	uvx --with tox-uv tox -e package

.PHONY: tox-%
## Run specified tox testenvs
# Note: generating requirements since at least one test environment needs them (viz. `security` as of 2025/02/25)
tox-%: generate-requirements
	uvx --with tox-uv tox -e "$*" -- $(POSARGS)
	$(MAKE) clean-requirements

.PHONY: test
ifeq (${CI}, true)
test: export TOX_PARALLEL_NO_SPINNER=1
endif
## Run pre-defined test suite via tox
test:
	uvx --with tox-uv tox run-parallel

.PHONY: test-%
## Run Python version-specific tests (e.g., `make test-py39`)
test-%:
	$(MAKE) tox-$*,coverage

.PHONY: performance-benchmarks
## Run performance benchmark tests
performance-benchmarks:
	$(MAKE) performance-benchmarks-"{pure_python,c_library}"

.PHONY: performance-benchmarks-%
# Run library-specific (viz. Python or C) performance benchmark tests
performance-benchmarks-%:
	$(MAKE) tox-"py3{9,10,11,12,13}-benchmark-$*"

# Mutation testing modifies the code in small ways that should produce incorrect semantics
# If a test suite is sufficiently strong, this "mutated" code should caught by the suite,
# thus causing tests to fail.
.PHONY: test-mutations
## Run mutation testing to validate test suite robustness
test-mutations:
	$(MAKE) tox-mutmut

.PHONY: lint
## Run full static analysis suite for local development
lint:
	$(MAKE) scan-dependencies
	$(MAKE) pre-commit

.PHONY: scan-dependencies
## Scan dependencies for security vulnerabilities
scan-dependencies:
	$(MAKE) tox-security

.PHONY: pre-commit
## Lint using *ALL* pre-commit hooks
## (see `.pre-commit-config.yaml`)
pre-commit:
	# Note: Running through `tox` since some hooks rely on finding their executables
	# in the `.tox/precommit/bin` directory and to provide an extra layer of isolation
	# for reproducibility.
	$(MAKE) tox-precommit POSARGS=$(PRECOMMIT_HOOK_ID)

.PHONY: pre-commit-%
## Lint using a *SINGLE* specific pre-commit hook (e.g., `make pre-commit-mypy`)
## (see `.pre-commit-config.yaml`)
pre-commit-%: export SKIP= # Reset `SKIP` env var to force single hooks to always run
pre-commit-%:
	$(MAKE) pre-commit PRECOMMIT_HOOK_ID=$*

.PHONY: docs-%
## Build documentation in the format specified after `-`
## (e.g.,
## `make docs-html` builds the docs in HTML format,
## `make docs-confluence` builds and publishes the docs on confluence (see `docs/source/conf.py` for details),
## `make docs-clean` cleans the docs build directory)
docs-%: LAUNCH_DOCS_PREVIEW ?= true
docs-%:
	$(MAKE) $* LAUNCH_DOCS_PREVIEW=$(LAUNCH_DOCS_PREVIEW) -C docs

.PHONY: test-docs
## Test documentation format/syntax
test-docs:
	uvx --with tox-uv tox -e docs

#################################################################################
# Self Documenting Commands                                                     #
#################################################################################

.DEFAULT_GOAL := help

# Inspired by <http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html>
# sed script explained:
# /^##/:
# 	* save line in hold space
# 	* purge line
# 	* Loop:
# 		* append newline + line to hold space
# 		* go to next line
# 		* if line starts with doc comment, strip comment character off and loop
# 	* remove target prerequisites
# 	* append hold space (+ newline) to line
# 	* replace newline plus comments by `---`
# 	* print line
# Separate expressions are necessary because labels cannot be delimited by
# semicolon; see <http://stackoverflow.com/a/11799865/1968>
export DESCRIPTION
.PHONY: help
help:
ifdef DESCRIPTION
	@echo "$$(tput bold)Description:$$(tput sgr0)" && echo "$$DESCRIPTION" && echo
endif
	@echo "$$(tput bold)Available rules:$$(tput sgr0)"
	@echo
	@sed -n -e "/^## / { \
		h; \
		s/.*//; \
		:doc" \
		-e "H; \
		n; \
		s/^## //; \
		t doc" \
		-e "s/:.*//; \
		G; \
		s/\\n## /---/; \
		s/\\n/ /g; \
		p; \
	}" ${MAKEFILE_LIST} \
	| LC_ALL='C' sort --ignore-case \
	| awk -F '---' \
		-v ncol=$$(tput cols) \
		-v indent=19 \
		-v col_on="$$(tput setaf 6)" \
		-v col_off="$$(tput sgr0)" \
	'{ \
		printf "%s%*s%s ", col_on, -indent, $$1, col_off; \
		n = split($$2, words, " "); \
		line_length = ncol - indent; \
		for (i = 1; i <= n; i++) { \
			line_length -= length(words[i]) + 1; \
			if (line_length <= 0) { \
				line_length = ncol - indent - length(words[i]) - 1; \
				printf "\n%*s ", -indent, " "; \
			} \
			printf "%s ", words[i]; \
		} \
		printf "\n"; \
	}' \
	| more $(shell test $(shell uname) = Darwin && echo '--no-init --raw-control-chars')
