# Template: Shared Module

This repository contains the template structure and boilerplate for a new shared module. It can run
as-is to give you a sense for how everything functions, but you'll want to follow the instructions
under "How to use."

## How to use

1. Replace all occurrences of `TEMPLATE_MODULE` in the copy of the repository with the name of the
   service.
2. Remove the `private` flag from `package.json` and update the `description`.
3. If creating a new public module, change the `publishConfig.access` field in the `package.json` to
   `public` - this will cause `semantic-release` to publish it for any user of `npm`. Add in the
   appropriate `LICENSE` file and update the `license` field in `package.json`.
4. Remove the example code from `src/index.js`.
5. Rename the `module-template.sublime-project` file to use the name of the module.
6. Update this README to remove the setup instructions and document the modules's purpose and API.

## Building

`npm run build`

Outputs a commonjs-compatible bundle to `dist/index.js`.

## Running tests

`npm test`

## Publishing

Merging to master will automatically publish the package if commits with non-trivial changes have
been introduced (per [commit conventions](https://www.conventionalcommits.org)).
