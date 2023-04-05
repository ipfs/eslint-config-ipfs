# eslint-config-ipfs <!-- omit in toc -->

[![ipfs.tech](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.tech)
[![Discuss](https://img.shields.io/discourse/https/discuss.ipfs.tech/posts.svg?style=flat-square)](https://discuss.ipfs.tech)
[![codecov](https://img.shields.io/codecov/c/github/ipfs/eslint-config-ipfs.svg?style=flat-square)](https://codecov.io/gh/ipfs/eslint-config-ipfs)
[![CI](https://img.shields.io/github/actions/workflow/status/ipfs/eslint-config-ipfs/js-test-and-release.yml?branch=main\&style=flat-square)](https://github.com/ipfs/eslint-config-ipfs/actions/workflows/js-test-and-release.yml?query=branch%3Amain)

> ESLint Shareable Config for IPFS project

## Table of contents <!-- omit in toc -->

- [Install](#install)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)

## Install

```console
$ npm i eslint-config-ipfs
```

This package provides IPFS's .eslintrc as an extensible shared config.

## Usage

Provided configuration contains ESLint rules followed by JS libraries in the JS
IPFS ecosystem. It provides slightly separate rule sets for `.js` and `.ts`
files. To use this configuration you'll need `.eslintrc` file in your project
root with a following content:

```json
{
  "extends": "ipfs"
}
```

Or a key in your `package.json` with:

```json
{
  "eslintConfig": {
    "extends": "ipfs"
  }
}
```

If you use [AEgir][] this config will comes with it, so above `.eslintrc` is the
only thing you'll need. If you choose to use ESLint directly, you'll need to add
this package to your (dev) dependencies and satisfy "typescript" peer dependency
yourself.

## License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

## Contribute

Contributions welcome! Please check out [the issues](https://github.com/ipfs/eslint-config-ipfs/issues).

Also see our [contributing document](https://github.com/ipfs/community/blob/master/CONTRIBUTING_JS.md) for more information on how we work, and about contributing in general.

Please be aware that all interactions related to this repo are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/CONTRIBUTING.md)

[node.js ci]: https://github.com/ipfs/eslint-config-ipfs/workflows/Node.js%20CI/badge.svg

[version.icon]: https://img.shields.io/npm/v/eslint-config-ipfs.svg

[package.url]: https://npmjs.org/package/eslint-config-ipfs

[downloads.image]: https://img.shields.io/npm/dm/eslint-config-ipfs.svg

[downloads.url]: https://npmjs.org/package/eslint-config-ipfs

[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg

[prettier.url]: https://github.com/prettier/prettier

[ts-jsdoc]: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

[aegir]: https://github.com/ipfs/aegir "Automated JavaScript project management."
