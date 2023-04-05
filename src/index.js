'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: './js.js'
    },
    {
      files: ['*.ts'],
      extends: './ts.js'
    }
  ]
}
