/* eslint-env node */
module.exports = {
  env: {
    es2024: true,
  },
  extends: ["plugin:perfectionist/recommended-natural", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {},
};
