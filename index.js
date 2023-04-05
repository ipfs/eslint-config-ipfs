'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: './js'
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: './ts'
    }
  ]
}
