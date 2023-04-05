'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: './js.js'
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: './ts.js'
    }
  ]
}
