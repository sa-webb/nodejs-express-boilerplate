presetup:
	rm -rf ./husky && .git

setup:
	npx husky --init

postsetup:
	npx husky add .husky/pre-commit "npm run pre-commit" && npx husky add .husky/pre-push "npm run pre-push"
