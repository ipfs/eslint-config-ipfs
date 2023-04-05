/* eslint-env mocha */
'use strict'

const path = require('path')

const eslint = require('eslint')

const eslintrc = require('..')

describe('validate', () => {
  let expect

  before(async () => {
    ({ expect } = await import('aegir/chai'))

    eslintrc.overrides = eslintrc.overrides.map(override => {
      override.extends = './' + path.join('src', override.extends)

      return override
    })
  })

  it('should load config in eslint to validate all rule syntax is correct', async () => {
    const cli = new eslint.ESLint({
      useEslintrc: false,
      baseConfig: eslintrc
    })

    const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
    const result = await cli.lintText(code)

    expect(result[0].errorCount).to.equal(0)
  })
})
