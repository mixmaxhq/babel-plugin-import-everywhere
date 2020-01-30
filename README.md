# `babel-plugin-import-everywhere`

A babel plugin to support the `import` statement anywhere that statements are valid, and transform
those statements to commonjs imports.

Adapted from a [comment](https://github.com/babel/babel/issues/10864#issuecomment-565443750) by
@nicolo-ribaudo.

## Install

```sh
npm install -D babel-plugin-import-everywhere
```

## Usage

```json
{
  "plugins": ["babel-plugin-import-everywhere"]
}
```

## Building

`npm run build`

Outputs a commonjs-compatible bundle to `dist/index.js`.

## Running tests

`npm test`

## Publishing

Merging to master will automatically publish the package if commits with non-trivial changes have
been introduced (per [commit conventions](https://www.conventionalcommits.org)).
