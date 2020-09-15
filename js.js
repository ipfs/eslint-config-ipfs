"use strict"

module.exports = {
  extends: "standard",
  parserOptions: {
    sourceType: "script",
  },
  globals: {
    self: true,
    mocha: true,
  },
  plugins: [
    "no-only-tests",
    "jsdoc"
  ],
  rules: {
    strict: [2, "safe"],
    curly: "error",
    "block-scoped-var": 2,
    complexity: 1,
    "default-case": 2,
    "dot-notation": 1,
    "guard-for-in": 1,
    "linebreak-style": [1, "unix"],
    "no-alert": 2,
    "no-case-declarations": 2,
    "no-console": 2,
    "no-constant-condition": 2,
    "no-continue": 1,
    "no-div-regex": 2,
    "no-empty": 1,
    "no-empty-pattern": 2,
    "no-extra-semi": 2,
    "no-implicit-coercion": 2,
    "no-labels": 2,
    "no-loop-func": 2,
    "no-nested-ternary": 1,
    "no-only-tests/no-only-tests": 2,
    "no-script-url": 2,
    "no-warning-comments": 1,
    "quote-props": [2, "as-needed"],
    "require-yield": 2,
    "max-nested-callbacks": [2, 4],
    "max-depth": [2, 4],
    "require-await": 2,
    "jsdoc/check-alignment": 2,
    "jsdoc/check-examples": 0,
    "jsdoc/check-indentation": 2,
    "jsdoc/check-param-names": 2,
    "jsdoc/check-syntax": 2,
    "jsdoc/check-tag-names": [2, { definedTags: ["internal", "packageDocumentation"] }],
    "jsdoc/check-types": 2,
    "jsdoc/implements-on-classes": 2,
    "jsdoc/match-description": 0,
    "jsdoc/newline-after-description": 2,
    "jsdoc/no-types": 0,
    // Note: no-undefined-types rule causes to many false positives:
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/559
    // And it is also unaware of many built in types
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/280
    "jsdoc/no-undefined-types": 1, 
    "jsdoc/require-returns-type": 0,
    "jsdoc/require-description": 0,
    "jsdoc/require-description-complete-sentence": 0,
    "jsdoc/require-example": 0,
    "jsdoc/require-hyphen-before-param-description": 2,
    "jsdoc/require-jsdoc": 0,
    "jsdoc/require-param": 2,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-param-name": 2,
    "jsdoc/require-param-type": 2,
    // Note: Do not require @returns because TS often can infer return types and
    // in many such cases it's not worth it.
    "jsdoc/require-returns": 0,
    "jsdoc/require-returns-check": 2,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-returns-type": 2,
     // Note: At the moment type parser used by eslint-plugin-jsdoc does not
     // parse various forms correctly. For now warn on invalid type froms,
     // should revisit once following issue is fixed:
     // https://github.com/jsdoctypeparser/jsdoctypeparser/issues/50
    "jsdoc/valid-types": 1

  },
  settings: {
    jsdoc: {
      mode: "typescript",
      tagNamePreference: {
        augments: {
          message: "@extends is to be used over @augments as it is more evocative of classes than @augments",
          replacement: "extends",
        }
      },
      structuredTags: {
        extends: {
          type: true
        }
      }
    }
  }
}
