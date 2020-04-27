# @rodogir/eslint-config

This package provides @rodogir's personal eslint configuration as a ready to use package.

## Introduction

This `eslint` config supports the following technologies and plugins:

- TypeScript
- React
- Airbnb
- Prettier

## Quick Start

```bash
yarn add -D @rodogir/eslint-config
```

Then, create a `.eslintrc.js` file with the following content.

```js
module.exports = {
  extends: "@rodogir/eslint-config",
};
```

Add a script to lint your code to the `package.json`

```json
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ./"
  }
}
```

Add a `tsconfig.eslint.json` file with the following content. See [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) why this is necessary.

```json
{
  "extends": "./tsconfig.json",
  "include": ["/**/*.ts", "/**/*.tsx", "./**/*.js"]
}
```
