# @lynxtaa/eslint-config

Shared ESLint configuration

## Install

```sh
npm install --save-dev @lynxtaa/eslint-config
```

## Extend your config

```json
{
  "extends": "@lynxtaa/eslint-config"
}
```

## Extend your config (ES Modules)

```json
{
  "extends": ["@lynxtaa/eslint-config", "@lynxtaa/eslint-config/esm"]
}
```

## Add rules which requires type information

```js
module.exports = {
  extends: ['@lynxtaa/eslint-config', '@lynxtaa/eslint-config/requires-typechecking'],
  // See https://typescript-eslint.io/docs/linting/typed-linting
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
```
