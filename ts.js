'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json' // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
  },
  extends: [
    './js',
    'standard-with-typescript'
  ],
  plugins: [
    'etc'
  ],
  rules: {
    'no-use-before-define': 'off', // Types often are recursive & no use before define is too restrctive
    'etc/prefer-interface': 'error', // https://ncjamieson.com/prefer-interfaces/
    '@typescript-eslint/prefer-function-type': 'off' // conflicts with 'etc/prefer-interface'
  }
}
