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

#################################################################################
# COMMANDS                                                                      #
#################################################################################

.PHONY: provision_environment
## Set up Python virtual environment with installed project dependencies
provision_environment:
ifeq ($(shell command -v poetry),)
	@echo "poetry could not be found!"
	@echo "Please install poetry!"
	@echo "Ex.: 'curl -sSL \
	https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python - \
	&& source $$HOME/.poetry/env'"
	@echo "see:"
	@echo "- https://python-poetry.org/docs/#installation"
	@echo "Note: 'pyenv' recommended for Python version management"
	@echo "see:"
	@echo "- https://github.com/pyenv/pyenv"
	@echo "- https://python-poetry.org/docs/managing-environments/"
	false
else
	poetry update --lock -vv
	poetry install -vv
endif

.PHONY: get-project-version-number
## Echo project's canonical version number
get-project-version-number:
	@poetry version --short

.PHONY: bump-commit-and-push-project-version-number-%
##  Bumps the version of the project, writes the new version back to
##  pyproject.toml if a valid bump rule is provided, commits it to VCS, and pushes it to the remote repository.
##  The new version should ideally be a valid semver string or a valid bump rule:
##  "patch", "minor", "major", "prepatch", "preminor", "premajor", "prerelease".
bump-commit-and-push-project-version-number-%: VERSION_NUM_FILE:=pyproject.toml
bump-commit-and-push-project-version-number-%:
	# shell out to ensure next line gets updated version number;
	# directly running `poetry version $*` will cause next line to NOT pick up the version bump
	@echo "$(shell poetry version $*)"
	@export NEW_VER_NUM=$(shell $(MAKE) get-project-version-number) && \
		export COMMIT_MSG=":bookmark: Bump version number to \`$${NEW_VER_NUM}\`" && \
		git commit $(VERSION_NUM_FILE) -m "$${COMMIT_MSG}" && \
		git push \
	|| git checkout HEAD -- $(VERSION_NUM_FILE) # Rollback `VERSION_NUM_FILE` file on failure


.PHONY: install-pre-commit-hooks
## Install git pre-commit hooks locally
install-pre-commit-hooks:
	poetry run pre-commit install

.PHONY: test
## Test via poetry
test: clean update-dependencies generate-requirements
	poetry run tox
	$(MAKE) clean-requirements

.PHONY: test-%
test-%: clean update-dependencies generate-requirements
	poetry run tox -e clean,$*,report
	$(MAKE) clean-requirements

.PHONY: lint
## Run full static analysis suite for local development
lint:
	$(MAKE) scan-dependencies
	$(MAKE) pre-commit

.PHONY: pre-commit
## Lint using pre-commit hooks (see `.pre-commit-config.yaml`)
pre-commit: clean update-dependencies generate-requirements
	# Note: Running through `tox` since some hooks rely on finding their executables
	# in the `.tox/precommit/bin` directory and to provide an extra layer of isolation
	# for reproducibility.
	poetry run tox -e precommit -- $(PRECOMMIT_HOOK_ID)
	$(MAKE) clean-requirements

.PHONY: pre-commit-%
## Lint using a single specific pre-commit hook (see `.pre-commit-config.yaml`)
pre-commit-%: export SKIP= # Reset `SKIP` env var to force single hooks to always run
pre-commit-%:
	$(MAKE) pre-commit PRECOMMIT_HOOK_ID=$*

.PHONY: scan-dependencies
## Scan dependencies for security vulnerabilities
scan-dependencies: clean update-dependencies generate-requirements
	poetry run tox -e security
	$(MAKE) clean-requirements

.PHONY: clean
## Delete all compiled Python files
clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete

.PHONY: update-dependencies
## Install Python dependencies,
## updating packages in `poetry.lock` with any newer versions specified in
## `pyproject.toml`, and install structlog-sentry-logger source code
update-dependencies:
	poetry update --lock
ifneq (${CI}, true)
	poetry install
endif

.PHONY: generate-requirements
## Generate project requirements files from `pyproject.toml`
generate-requirements:
	poetry export -f requirements.txt --without-hashes > requirements.txt # subset
	poetry export --dev -f requirements.txt --without-hashes > requirements-dev.txt # superset

.PHONY: clean-requirements
## clean generated project requirements files
clean-requirements:
	find . -type f -name "requirements*.txt" -delete

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
