const eslint = require("eslint")
const test = require("tape")
const eslintrc = require("..")
const fs = require('fs')
const path = require('path')

test("load config in eslint to validate all js rule syntax is correct", function (t) {
  var cli = new eslint.CLIEngine({
    useEslintrc: false,
    baseConfig: eslintrc,
  })

  var code = fs.readFileSync(path.join(process.cwd(), 'test/fixtures/valid.js'), {
    encoding: 'utf-8'
  })

  t.equal(cli.executeOnText(code, 'index.js').errorCount, 0)
  t.end()
})

test("load config in eslint to validate all ts rule syntax is correct", function (t) {
  var cli = new eslint.CLIEngine({
    useEslintrc: false,
    baseConfig: eslintrc,
  })

  var code = fs.readFileSync(path.join(process.cwd(), 'test/fixtures/valid.ts'), {
    encoding: 'utf-8'
  })

  t.equal(cli.executeOnText(code, 'test/fixtures/valid.ts').errorCount, 0)
  t.end()
})
