# Changelog

## [7.0.1](https://github.com/npm/validate-npm-package-name/compare/v7.0.0...v7.0.1) (2025-12-18)
### Bug Fixes
* [`23f220d`](https://github.com/npm/validate-npm-package-name/commit/23f220dad912024af5f3a48501f8f1bfbf8fa311) [#156](https://github.com/npm/validate-npm-package-name/pull/156) reject leading hyphens (#156) (@hashtagchris)
### Documentation
* [`52ff0f1`](https://github.com/npm/validate-npm-package-name/commit/52ff0f181afeb60126ec0e623991130dd94785e2) [#154](https://github.com/npm/validate-npm-package-name/pull/154) use const instead of var (#154) (@hashtagchris)
### Chores
* [`cfb27ae`](https://github.com/npm/validate-npm-package-name/commit/cfb27aec1cfb94a199fd38db1a1785b8fb7fc96b) [#153](https://github.com/npm/validate-npm-package-name/pull/153) remove tap (@owlstronaut)
* [`2358aa2`](https://github.com/npm/validate-npm-package-name/commit/2358aa27e2514f82eb14a243d05ae85651fb5a94) [#153](https://github.com/npm/validate-npm-package-name/pull/153) swap from tap to built-in node:test (@owlstronaut)
* [`fc8e3f5`](https://github.com/npm/validate-npm-package-name/commit/fc8e3f50841cb8ab488a00b967633edf085f7361) [#149](https://github.com/npm/validate-npm-package-name/pull/149) bump @npmcli/eslint-config from 5.1.0 to 6.0.0 (#149) (@dependabot[bot])
* [`23a9e2c`](https://github.com/npm/validate-npm-package-name/commit/23a9e2cba69fe548d9dcadc17ea770b23d67a439) [#152](https://github.com/npm/validate-npm-package-name/pull/152) bump @npmcli/template-oss from 4.28.0 to 4.28.1 (#152) (@dependabot[bot], @npm-cli-bot)

## [7.0.0](https://github.com/npm/validate-npm-package-name/compare/v6.0.2...v7.0.0) (2025-10-22)
### ⚠️ BREAKING CHANGES
* align to npm 11 node engine range (#147)
### Bug Fixes
* [`69e0cbb`](https://github.com/npm/validate-npm-package-name/commit/69e0cbbd779e91194e918571ed7a5cd45571fa1b) [#147](https://github.com/npm/validate-npm-package-name/pull/147) align to npm 11 node engine range (#147) (@owlstronaut)
### Chores
* [`c6866b9`](https://github.com/npm/validate-npm-package-name/commit/c6866b9d968c224bc554184e2c87cdb32e3fb904) [#146](https://github.com/npm/validate-npm-package-name/pull/146) bump @npmcli/template-oss from 4.26.0 to 4.27.1 (#146) (@dependabot[bot], @npm-cli-bot)

## [6.0.2](https://github.com/npm/validate-npm-package-name/compare/v6.0.1...v6.0.2) (2025-07-21)
### Bug Fixes
* [`186f541`](https://github.com/npm/validate-npm-package-name/commit/186f541ab415da4c0fb4b4c7b9cd41e98e828d94) [#142](https://github.com/npm/validate-npm-package-name/pull/142) scoped names validate exclusionlist/underscore/core module (#142) (@owlstronaut)
### Chores
* [`8123f73`](https://github.com/npm/validate-npm-package-name/commit/8123f73c17529e488c37c56706c501330d55d513) [#140](https://github.com/npm/validate-npm-package-name/pull/140) bump @npmcli/template-oss from 4.24.4 to 4.25.0 (#140) (@dependabot[bot], @owlstronaut)

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
