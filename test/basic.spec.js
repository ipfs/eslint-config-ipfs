/* eslint-env mocha */
'use strict'

const eslintrc = require('../src/index.js')

describe('basic', () => {
  let expect

  before(async () => {
    ({ expect } = await import('aegir/chai'))
  })

  it('should have basic properties of config', () => {
    expect(eslintrc.overrides).to.be.an('array')
  })
})
