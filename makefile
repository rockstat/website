export:
	./bin/toc
	yarn start:static --cors "*" &
	yarn build:export
	
start:
	./bin/toc
	yarn start:static --cors "*" &
	serverpid="$!"
	yarn start
	kill "$serverpid"
