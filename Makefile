NODE = $(shell which node)
NPM = $(shell which npm)
BOWER = $(shell which bower)
INIT = $(`pwd`/scripts/init.sh)

.PHONY: all

init:
	$(shell `pwd`/scripts/create-app.sh)

all: build run

build:
	r.js -o apps/public/web/build.js

install:
ifeq ($(NPM),)
	@echo -e "npm not found.\nInstall it from https://npmjs.org/"
	@exit 1
else
	$(NPM) install .
endif

ifeq ($(BOWER),)
	@echo -e "Bower not found.\nInstall it from https://github.com/bower/bower"
	@exit 1
else
	$(BOWER) install
endif

run:
	$(NPM) start
