"use strict"

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["./js", "plugin:@typescript-eslint/recommended"],
}
