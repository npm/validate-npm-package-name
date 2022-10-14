# Changelog

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
