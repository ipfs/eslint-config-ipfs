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
    'etc',
    'import'
  ],
  rules: {
    'no-use-before-define': 'off', // Types often are recursive & no use before define is too restrictive
    'etc/prefer-interface': 'error', // https://ncjamieson.com/prefer-interfaces/
    '@typescript-eslint/prefer-function-type': 'off', // conflicts with 'etc/prefer-interface'
    '@typescript-eslint/explicit-function-return-type': 'error', // functions require return types
    '@typescript-eslint/no-this-alias': 'off', // allow 'const self = this'
    '@typescript-eslint/await-thenable': 'error', // disallows awaiting a value that is not a "Thenable"
    '@typescript-eslint/restrict-template-expressions': 'off', // allow values with `any` type in template literals
    'jsdoc/require-param': 'off', // do not require jsdoc for params
    'jsdoc/require-param-type': 'off', // allow compiler to derive param type
    'import/order': [ // sort imports
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
        'newlines-between': 'always',
        // the overall order of imports
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index'], 'object'],
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          { // 3p imports
            pattern: '+(!(@))*/**',
            group: 'external',
            position: 'before',
            patternOptions: { nonegate: true }
          },
          { // scoped external imports excluding our 2p scoped packages
            pattern: '@!(ipfs|libp2p|ipfs-shipyard|ipld|multiformats)/**',
            group: 'external',
            position: 'after',
            patternOptions: { nonegate: false }
          },
          { // our 2p scoped packages
            pattern: '@{ipfs,libp2p,ipfs-shipyard,ipld,multiformats}/**',
            group: 'parent',
            position: 'before',
            patternOptions: { nonegate: true }
          },
          { // our relative (this package) imports
            pattern: '.*/**',
            group: 'index',
            position: 'after',
            patternOptions: { dot: true, nonegate: true }
          }
        ]
      }
    ]
  }
}
