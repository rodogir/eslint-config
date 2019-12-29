module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    // hook rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    // anchor tags in Next.js never have a explicit href.
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "off"
  }
};
