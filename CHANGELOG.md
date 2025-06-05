# Changelog

## [6.0.1](https://github.com/npm/validate-npm-package-name/compare/v6.0.0...v6.0.1) (2025-06-05)
### Bug Fixes
* [`68a5c0e`](https://github.com/npm/validate-npm-package-name/commit/68a5c0e9776544fc888f93a7deef5a817272ef66) [#136](https://github.com/npm/validate-npm-package-name/pull/136) adding validation for scoped packages that begin with one or more periods (@shmam)
### Chores
* [`99ced75`](https://github.com/npm/validate-npm-package-name/commit/99ced7599aa0f7c315055c1a943075d5460c24d5) [#136](https://github.com/npm/validate-npm-package-name/pull/136) template-oss fixes (@shmam)
* [`c45bc37`](https://github.com/npm/validate-npm-package-name/commit/c45bc3709039088c7f97e89816452d3f04f68023) [#134](https://github.com/npm/validate-npm-package-name/pull/134) bump @npmcli/template-oss from 4.23.3 to 4.24.3 (#134) (@dependabot[bot], @npm-cli-bot)

## [6.0.0](https://github.com/npm/validate-npm-package-name/compare/v5.0.1...v6.0.0) (2024-09-24)
### ⚠️ BREAKING CHANGES
* `validate-npm-package-name` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`d14349c`](https://github.com/npm/validate-npm-package-name/commit/d14349c40aa07be3ebbf840106e613af81d3cb4a) [#131](https://github.com/npm/validate-npm-package-name/pull/131) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`e78d90d`](https://github.com/npm/validate-npm-package-name/commit/e78d90dac8857000b3e7997091bc8946a820b4a4) [#131](https://github.com/npm/validate-npm-package-name/pull/131) run template-oss-apply (@hashtagchris)
* [`3b308e9`](https://github.com/npm/validate-npm-package-name/commit/3b308e9f6a0c14c59bc5eacbc369206d2e351395) [#128](https://github.com/npm/validate-npm-package-name/pull/128) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`5f444c8`](https://github.com/npm/validate-npm-package-name/commit/5f444c828af6d2b2bf38b4efd04e95f712b062da) [#129](https://github.com/npm/validate-npm-package-name/pull/129) postinstall for dependabot template-oss PR (@hashtagchris)
* [`a75975a`](https://github.com/npm/validate-npm-package-name/commit/a75975a1f4ee75b1eba65740bcb163a4beed8986) [#129](https://github.com/npm/validate-npm-package-name/pull/129) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [5.0.1](https://github.com/npm/validate-npm-package-name/compare/v5.0.0...v5.0.1) (2024-05-06)

### Dependencies

* [`f12f849`](https://github.com/npm/validate-npm-package-name/commit/f12f84980f51916585e86917f11af7416f6241f1) [#104](https://github.com/npm/validate-npm-package-name/pull/104) replace `builtins` dependency with Node.js `module.builtinModules` (#104)

### Chores

* [`f2b3233`](https://github.com/npm/validate-npm-package-name/commit/f2b3233b206b11cab27deead59460d579739d136) [#112](https://github.com/npm/validate-npm-package-name/pull/112) auto publish (#112) (@lukekarrys)
* [`406b31a`](https://github.com/npm/validate-npm-package-name/commit/406b31afe4b9da4e5c705d4a74abb31ed15fa8c4) [#110](https://github.com/npm/validate-npm-package-name/pull/110) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`bcc451a`](https://github.com/npm/validate-npm-package-name/commit/bcc451a4e42e5001ea80bd27769cedf1485de8cf) [#69](https://github.com/npm/validate-npm-package-name/pull/69) update tap coverage in package.json (#69) (@wraithgar)
* [`320e5dd`](https://github.com/npm/validate-npm-package-name/commit/320e5ddfc6e2fcb92390cb6cf8da09038c045b2e) [#68](https://github.com/npm/validate-npm-package-name/pull/68) add new tests to reach full test coverage (#68) (@janbritz)
* [`5c72411`](https://github.com/npm/validate-npm-package-name/commit/5c7241144e118dfa4fbf00169d7a664f09543a71) [#59](https://github.com/npm/validate-npm-package-name/pull/59) bump @npmcli/eslint-config from 3.1.0 to 4.0.0 (@dependabot[bot])
* [`a893e39`](https://github.com/npm/validate-npm-package-name/commit/a893e39da69c0b7ad281d9b83fc553e82f8a8ff2) [#110](https://github.com/npm/validate-npm-package-name/pull/110) postinstall for dependabot template-oss PR (@lukekarrys)
* [`13f9b85`](https://github.com/npm/validate-npm-package-name/commit/13f9b853d8d13bbc1ae2ddec07a55eca5acea503) [#109](https://github.com/npm/validate-npm-package-name/pull/109) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [5.0.0](https://github.com/npm/validate-npm-package-name/compare/v4.0.0...v5.0.0) (2022-10-10)

### ⚠️ BREAKING CHANGES

* `validate-npm-package-name` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`f0983ef`](https://github.com/npm/validate-npm-package-name/commit/f0983ef00924709c6c8bb86dd8d1765da154b2b2) [#50](https://github.com/npm/validate-npm-package-name/pull/50) postinstall for dependabot template-oss PR (@lukekarrys)

## [4.0.0](https://github.com/npm/validate-npm-package-name/compare/v3.0.0...v4.0.0) (2022-03-29)


### ⚠ BREAKING CHANGES

* scopedPackagePattern is no longer exported from this module.
* This drops support for node 10 and non-LTS versions of node 12 and node 14

### Features

* add changelog ([d23c813](https://github.com/npm/validate-npm-package-name/commit/d23c8137dbe71adb60c69c705e79e18be3bc4c9c))


### Bug Fixes

* remove validate.scopedPackagePattern ([#42](https://github.com/npm/validate-npm-package-name/issues/42)) ([1943cc6](https://github.com/npm/validate-npm-package-name/commit/1943cc6e759cc202782ac77a1d30980e0e26b0da))


### Documentation

* Move invalid example to the right section ([#18](https://github.com/npm/validate-npm-package-name/issues/18)) ([9ee8d54](https://github.com/npm/validate-npm-package-name/commit/9ee8d54e28204b762f11451cf01207a3dc6be679))
* update misleading naming rule ([#27](https://github.com/npm/validate-npm-package-name/issues/27)) ([3c65535](https://github.com/npm/validate-npm-package-name/commit/3c655357259e07e34fea4396767e72d73a0231c9))


### Dependencies

* @npmcli/template-oss@3.2.1 ([#39](https://github.com/npm/validate-npm-package-name/issues/39)) ([b456a01](https://github.com/npm/validate-npm-package-name/commit/b456a012ab38c8c78a98bd476f2aa444b66e2179))
* bump builtins from 1.0.3 to 5.0.0 ([#41](https://github.com/npm/validate-npm-package-name/issues/41)) ([2c6129e](https://github.com/npm/validate-npm-package-name/commit/2c6129ee9243d07241cc0e2bf64e81c0037b7ba6))

## 3.0.0

## Breaking Changes

- No longer allow "~'!()*" in package names (https://github.com/npm/validate-npm-package-name/pull/13)

## Docs

- Remove ableist examples from README (https://github.com/npm/validate-npm-package-name/pull/12)

## Dependencies

- Add `standard` (https://github.com/npm/validate-npm-package-name/commit/48f145f89bae4d1543ac1eecd594c6a89e01ea95)
- Update `builtin` (https://github.com/npm/validate-npm-package-name/commit/48f145f89bae4d1543ac1eecd594c6a89e01ea95)
- Update `tap` (https://github.com/npm/validate-npm-package-name/commit/48f145f89bae4d1543ac1eecd594c6a89e01ea95)
