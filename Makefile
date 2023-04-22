default: dev

bootstrap:
	nvm install && nvm use
	npm install
	echo "Happy coding!!! :tada:"

dev:
	npm run dev

install:
	npm install

format:
	npx prettier --write .

linter:
	npx eslint

test:
	npm run test
