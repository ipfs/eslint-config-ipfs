## [7.0.6](https://github.com/ipfs/eslint-config-ipfs/compare/v7.0.5...v7.0.6) (2024-07-29)

### Bug Fixes

* unpin eslint-plugin-jsdoc ([#236](https://github.com/ipfs/eslint-config-ipfs/issues/236)) ([0276f8f](https://github.com/ipfs/eslint-config-ipfs/commit/0276f8f656d70d353c7d96cdc91d8c699425eb27))

## [7.0.5](https://github.com/ipfs/eslint-config-ipfs/compare/v7.0.4...v7.0.5) (2024-07-29)

### Bug Fixes

* pin eslint-plugin-jsdoc ([#235](https://github.com/ipfs/eslint-config-ipfs/issues/235)) ([977c9a4](https://github.com/ipfs/eslint-config-ipfs/commit/977c9a430388d500ba38662fcbc4aadf78db509d))

## [7.0.4](https://github.com/ipfs/eslint-config-ipfs/compare/v7.0.3...v7.0.4) (2024-07-23)

### Dependencies

* **dev:** bump aegir from 43.0.3 to 44.0.1 ([#231](https://github.com/ipfs/eslint-config-ipfs/issues/231)) ([66a69e2](https://github.com/ipfs/eslint-config-ipfs/commit/66a69e2525e0b37767ea1aa759581c87b57472f6))

## [7.0.3](https://github.com/ipfs/eslint-config-ipfs/compare/v7.0.2...v7.0.3) (2024-07-23)


### Bug Fixes

* allow `any` args and referencing functions by property name ([#232](https://github.com/ipfs/eslint-config-ipfs/issues/232)) ([27ecf3e](https://github.com/ipfs/eslint-config-ipfs/commit/27ecf3e4055cd229339c62cc1a941e96a4e22852))

## [7.0.2](https://github.com/ipfs/eslint-config-ipfs/compare/v7.0.1...v7.0.2) (2024-06-21)


### Bug Fixes

* turn off no-undef for ts files ([#229](https://github.com/ipfs/eslint-config-ipfs/issues/229)) ([c9ccaeb](https://github.com/ipfs/eslint-config-ipfs/commit/c9ccaeb3ee79e2b670c50f56fe10e5bb925785e3))

## [7.0.1](https://github.com/ipfs/eslint-config-ipfs/compare/v7.0.0...v7.0.1) (2024-06-21)


### Dependencies

* **dev:** bump aegir from 42.2.11 to 43.0.1 ([#226](https://github.com/ipfs/eslint-config-ipfs/issues/226)) ([ae61638](https://github.com/ipfs/eslint-config-ipfs/commit/ae61638e32107feef038320e0a6915ba6d19ff87))

## [7.0.0](https://github.com/ipfs/eslint-config-ipfs/compare/v6.0.2...v7.0.0) (2024-05-01)


### ⚠ BREAKING CHANGES

* eslint-config-love requires updated peer dependencies

### Dependencies

* upgrade deps, replace eslint-config-standard-with-typescript with eslint-config-love ([#218](https://github.com/ipfs/eslint-config-ipfs/issues/218)) ([a83be5b](https://github.com/ipfs/eslint-config-ipfs/commit/a83be5bd51eee32c7a8218912ba3c2f22c1eae1c)), closes [#217](https://github.com/ipfs/eslint-config-ipfs/issues/217)

## [6.0.2](https://github.com/ipfs/eslint-config-ipfs/compare/v6.0.1...v6.0.2) (2024-05-01)


### Bug Fixes

* use @typescript-eslint/no-unused-vars ([#221](https://github.com/ipfs/eslint-config-ipfs/issues/221)) ([9a95776](https://github.com/ipfs/eslint-config-ipfs/commit/9a957762f5fc9123cd4265fe6204f0fb40c3da0c)), closes [/github.com/standard/eslint-config-standard/blob/master/src/index.ts#L143](https://github.com/ipfs//github.com/standard/eslint-config-standard/blob/master/src/index.ts/issues/L143)


### Trivial Changes

* Update .github/workflows/stale.yml [skip ci] ([1f9ebc6](https://github.com/ipfs/eslint-config-ipfs/commit/1f9ebc65974d1ffb210234e7d4ba9cefaa0d6176))

## [6.0.1](https://github.com/ipfs/eslint-config-ipfs/compare/v6.0.0...v6.0.1) (2024-01-19)


### Dependencies

* **dev:** bump aegir from 40.0.13 to 42.2.2 ([#203](https://github.com/ipfs/eslint-config-ipfs/issues/203)) ([ba17326](https://github.com/ipfs/eslint-config-ipfs/commit/ba173267e7c727a19a6c4ea8ec67cc73f677c0ef))

## [6.0.0](https://github.com/ipfs/eslint-config-ipfs/compare/v5.0.1...v6.0.0) (2023-09-29)


### ⚠ BREAKING CHANGES

* All interfaces now need to use method signature style rather than property function style

eg:
before
```ts
interface Foo {
  bar: (baz: number) => void
}
```
after
```ts
interface Foo {
  bar(baz: number): void
}
```

### Features

* add method-signature-style rule ([#190](https://github.com/ipfs/eslint-config-ipfs/issues/190)) ([8823186](https://github.com/ipfs/eslint-config-ipfs/commit/88231860087f4ff4f7c8118a84c8f64bcc81f7d0))

## [5.0.1](https://github.com/ipfs/eslint-config-ipfs/compare/v5.0.0...v5.0.1) (2023-07-26)


### Dependencies

* bump eslint-config-standard-with-typescript from 36.1.1 to 37.0.0 ([#179](https://github.com/ipfs/eslint-config-ipfs/issues/179)) ([51d369c](https://github.com/ipfs/eslint-config-ipfs/commit/51d369c9ebf1fd4c7b4946c68a9158b9d78f02e9))
* **dev:** bump aegir from 39.0.13 to 40.0.0 ([#178](https://github.com/ipfs/eslint-config-ipfs/issues/178)) ([42155e8](https://github.com/ipfs/eslint-config-ipfs/commit/42155e836dad27f1654a26661f6005ea4f03b7f9))

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
