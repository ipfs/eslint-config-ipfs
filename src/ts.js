'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json' // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
  },
  extends: [
    './js.js',
    'standard-with-typescript'
  ],
  plugins: [
    'etc'
  ],
  rules: {
    'no-use-before-define': 'off', // Types often are recursive & no use before define is too restrictive
    'etc/prefer-interface': 'error', // https://ncjamieson.com/prefer-interfaces/
    '@typescript-eslint/prefer-function-type': 'off', // conflicts with 'etc/prefer-interface'
    '@typescript-eslint/explicit-function-return-type': 'error', // functions require return types
    '@typescript-eslint/no-this-alias': 'off', // allow 'const self = this'
    '@typescript-eslint/await-thenable': 'error', // disallows awaiting a value that is not a "Thenable"
    '@typescript-eslint/restrict-template-expressions': 'off', // allow values with `any` type in template literals
    '@typescript-eslint/method-signature-style': ['error', 'method'], // enforce method signature style
    "no-unused-vars": "off", // disable this rule to use @typescript-eslint/no-unused-vars instead
    "@typescript-eslint/no-unused-vars": "error", // disallow unused variables
    'no-return-await': 'off', // disable this rule to use @typescript-eslint/return-await instead
    '@typescript-eslint/return-await': ['error', 'in-try-catch'], // require awaiting thenables returned from try/catch
    'jsdoc/require-param': 'off', // do not require jsdoc for params
    'jsdoc/require-param-type': 'off' // allow compiler to derive param type
  }
}
