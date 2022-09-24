module.exports = {
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    // TypeScript
    {
      files: ["*.ts", "*.tsx"],
      extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
      parserOptions: {
        project: "tsconfig.json",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        // use type imports whenever possible. this is required to use vite.
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports" },
        ],

        // use double quotes. has to be kept in sync with prettier config
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

        // type inference is a good feature we want to use
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",

        // legacy rule when dealing with the "var" keyword. should not be used in modern code bases anymore
        "@typescript-eslint/no-use-before-define": "off",

        // unused vars can be prefixed with "_". especially useful for destructuring
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],

        // also allow variables starting with underscore because of the no-unused-vars rule
        // based on https://github.com/iamturns/eslint-config-airbnb-typescript/blob/e9910fca83641377656106e17c15bf7735442627/lib/shared.js#L37-L54
        "@typescript-eslint/naming-convention": [
          "error",
          // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
          },
          // Allow camelCase functions (23.2), and PascalCase functions (23.8)
          {
            selector: "function",
            format: ["camelCase", "PascalCase"],
          },
          // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
        ],

        // avoid potential bugs by always enforcing curly braces
        curly: ["error", "all"],

        // named exports are better supported by editors and refactoring tools
        "import/prefer-default-export": "off",

        // allow inclusion of dev dependencies for test files
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: ["**/*.test.ts", "**/*.test.tsx"] },
        ],

        // named functions are useful when using `forwardRef`
        "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],

        // spreading is fine as long as we use TypeScript.
        "react/jsx-props-no-spreading": "off",

        // we use TS everywhere. No need for this rule.
        "react/prop-types": "off",

        // we use TS default parameters instead.
        "react/require-default-props": "off",

        // modern build tools don't need that anymore.
        "react/react-in-jsx-scope": "off",

        // enforce adding keys in JSX
        "react/jsx-key": ["warn", { warnOnDuplicates: true }],
      },
    },
    // JS
    {
      files: ["*.js"],
      extends: ["airbnb-base", "prettier"],
      rules: {
        // named exports are better supported by editors and refactoring tools
        "import/prefer-default-export": "off",
      },
    },
  ],
};
