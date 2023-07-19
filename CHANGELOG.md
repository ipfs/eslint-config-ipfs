## [5.0.0](https://github.com/ipfs/eslint-config-ipfs/compare/v4.0.3...v5.0.0) (2023-07-19)


### ⚠ BREAKING CHANGES

* bump eslint-plugin-jsdoc from 43.2.0 to 46.4.4 (#176)

### Trivial Changes

* restore linting ([#148](https://github.com/ipfs/eslint-config-ipfs/issues/148)) ([b222ba7](https://github.com/ipfs/eslint-config-ipfs/commit/b222ba7221bffda51e66e4c3de5b98a36659bf4b))
* Update .github/workflows/stale.yml [skip ci] ([b77e8e7](https://github.com/ipfs/eslint-config-ipfs/commit/b77e8e75456346245fd5854b62399e9dc86a2d02))
* Update .github/workflows/stale.yml [skip ci] ([fec2f8f](https://github.com/ipfs/eslint-config-ipfs/commit/fec2f8ffde1021e1e4224738e60f431b57970e74))


### Dependencies

* bump eslint-config-standard-with-typescript from 34.0.1 to 36.1.0 ([#175](https://github.com/ipfs/eslint-config-ipfs/issues/175)) ([2caff0a](https://github.com/ipfs/eslint-config-ipfs/commit/2caff0aabb9e5c4316a4c8e69c644d288e5fd8b6))
* bump eslint-plugin-jsdoc from 43.2.0 to 46.4.4 ([#176](https://github.com/ipfs/eslint-config-ipfs/issues/176)) ([4768f37](https://github.com/ipfs/eslint-config-ipfs/commit/4768f37f13b3fde42f394333ec6af134113e3d24))

## [4.0.3](https://github.com/ipfs/eslint-config-ipfs/compare/v4.0.2...v4.0.3) (2023-05-11)


### Dependencies

* **dev:** bump aegir from 38.1.8 to 39.0.6 ([#156](https://github.com/ipfs/eslint-config-ipfs/issues/156)) ([37f2f4e](https://github.com/ipfs/eslint-config-ipfs/commit/37f2f4ed5d9324a521a5f7d1b1e4b6d9758a5ce7))

## [4.0.2](https://github.com/ipfs/eslint-config-ipfs/compare/v4.0.1...v4.0.2) (2023-04-27)


### Bug Fixes

* remove import newlines and specify all groups ([#149](https://github.com/ipfs/eslint-config-ipfs/issues/149)) ([70bc250](https://github.com/ipfs/eslint-config-ipfs/commit/70bc2500e15124901c4ae95af8c74c6b3e780107))

## [4.0.1](https://github.com/ipfs/eslint-config-ipfs/compare/v4.0.0...v4.0.1) (2023-04-27)


### Dependencies

* bump eslint-plugin-jsdoc from 40.3.0 to 43.1.1 ([#147](https://github.com/ipfs/eslint-config-ipfs/issues/147)) ([d95cf23](https://github.com/ipfs/eslint-config-ipfs/commit/d95cf2336cb5707db79dccaafad617e6ac7e261e))

## [4.0.0](https://github.com/ipfs/eslint-config-ipfs/compare/v3.1.7...v4.0.0) (2023-04-05)


### ⚠ BREAKING CHANGES

* `await` is not allowed before `return` unless it is inside a `try/catch` in which case it is required

Co-authored-by: Russell Dempsey <1173416+SgtPooki@users.noreply.github.com>
* previously jsx and tsx files were not linted, now they are
* add import sorting rule (#126)

### Features

* add import sorting rule ([#126](https://github.com/ipfs/eslint-config-ipfs/issues/126)) ([1462d09](https://github.com/ipfs/eslint-config-ipfs/commit/1462d096c8bd13af22ebe9ab6ef317996dc488c7))
* lint jsx ([#140](https://github.com/ipfs/eslint-config-ipfs/issues/140)) ([fb5e5b6](https://github.com/ipfs/eslint-config-ipfs/commit/fb5e5b6120cff5419faab4648a45855824eb46ae))


### Bug Fixes

* only require `await`ing promises returned from inside try/catch blocks ([#133](https://github.com/ipfs/eslint-config-ipfs/issues/133)) ([a6e4a7b](https://github.com/ipfs/eslint-config-ipfs/commit/a6e4a7b26eb43f829efb6b0202bf8fc7b397341a)), closes [#130](https://github.com/ipfs/eslint-config-ipfs/issues/130)


### Trivial Changes

* convert to aegir project ([81d8ba3](https://github.com/ipfs/eslint-config-ipfs/commit/81d8ba310dd48432a8991bc48fb805bf7cea4958))
* **deps:** bump eslint-config-standard-with-typescript from 27.0.1 to 34.0.1 ([#135](https://github.com/ipfs/eslint-config-ipfs/issues/135)) ([fc9aa6f](https://github.com/ipfs/eslint-config-ipfs/commit/fc9aa6f589131403753617e8a1f5f0c770d67d19))
* **deps:** bump eslint-plugin-jsdoc from 39.9.1 to 40.1.1 ([#139](https://github.com/ipfs/eslint-config-ipfs/issues/139)) ([bd1422b](https://github.com/ipfs/eslint-config-ipfs/commit/bd1422ba1ce171a20dbf74660f2f17d5eca538c4))
* fix linting ([adffc58](https://github.com/ipfs/eslint-config-ipfs/commit/adffc585b2006594a79122c2982da2e92408ccf6))
* use unified ci ([2674c56](https://github.com/ipfs/eslint-config-ipfs/commit/2674c56dfe0e0f05e0496030904e6c2b98147cd6))
