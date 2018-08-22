export:
	./bin/export
start:
	./bin/toc
	yarn start:static --cors "*" &
	serverpid="$!"
	yarn start
	kill "$serverpid"
