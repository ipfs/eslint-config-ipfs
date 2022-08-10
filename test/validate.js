const eslint = require("eslint")
const test = require("tape")
const eslintrc = require("..")

console.info(eslint)

test("load config in eslint to validate all rule syntax is correct", async function (t) {
  var cli = new eslint.ESLint({
    useEslintrc: false,
    baseConfig: eslintrc,
  })

  var code = "var foo = 1\nvar bar = function () {}\nbar(foo)\n"
  var result = await cli.lintText(code)

  t.equal(result[0].errorCount, 0)
  t.end()
})
