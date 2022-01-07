# nodejs-express-boilerplate

Node.js TypeScript Express Server Boilerplate

## Quickstart

### Set the correct Node version

### (Using Volta)

[Volta](https://volta.sh/) automatically locates the Node version defined in `package.json`.

### (Using NVM)

Execute: `nvm use` - references the `.nvmrc` config file and sets the correct node version.

1. `npm ci` - install npm dependencies (make sure you're using the correct version of Node)
2. `export NODE_ENV=local` - set the environment variable
3. `npm run watch` - compile TS to JS -> `/dist`
4. `npm run dev` - `nodemon /dist/index.js`
