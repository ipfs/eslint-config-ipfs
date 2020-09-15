"use strict"

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["./js", "plugin:@typescript-eslint/recommended"],
  rules: {
    // Types often are recursive & no use before define is too restrctive
    "no-use-before-define": 0
  }
}
