BR := $(shell git branch | grep \* | cut -d ' ' -f2-)

DEVIMG := "rockstatweb"
DEVNAME := "rstdev"

.PHONY: start-dev

bump-patch:
	bumpversion patch

bump-minor:
	bumpversion minor

to_master:
	@echo $(BR)
	git checkout master && git merge $(BR) && git checkout $(BR)

clean:
	now rm rockstat --safe

deploy:
	now --public && now alias


build:
	docker build -t website .

build-dev:
	docker build \
		-f Dockerfile.dev \
		-t $(DEVIMG) .

start-dev: 
	docker run --rm -it --name $(DEVNAME) \
		-v "$$PWD:/usr/src" -p 10080:10080 $(DEVIMG) $(cmd)
