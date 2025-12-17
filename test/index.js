'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const validate = require('..')

test('validate-npm-package-name', function () {
  // Traditional

  assert.deepStrictEqual(validate('some-package'), { validForNewPackages: true, validForOldPackages: true })
  assert.deepStrictEqual(validate('example.com'), { validForNewPackages: true, validForOldPackages: true })
  assert.deepStrictEqual(validate('under_score'), { validForNewPackages: true, validForOldPackages: true })
  assert.deepStrictEqual(validate('period.js'), { validForNewPackages: true, validForOldPackages: true })
  assert.deepStrictEqual(validate('123numeric'), { validForNewPackages: true, validForOldPackages: true })
  assert.deepStrictEqual(validate('crazy!'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain special characters ("~\'!()*")'],
  })

  // Scoped (npm 2+)

  assert.deepStrictEqual(validate('@npm/thingy'), { validForNewPackages: true, validForOldPackages: true })
  assert.deepStrictEqual(validate('@npm-zors/money!time.js'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain special characters ("~\'!()*")'],
  })

  // Scoped package validation - only period start is checked, everything else is allowed

  assert.deepStrictEqual(validate('@user/node_modules'), {
    validForNewPackages: true,
    validForOldPackages: true,
  })

  assert.deepStrictEqual(validate('@user/-package'), {
    validForNewPackages: true,
    validForOldPackages: true,
  })

  assert.deepStrictEqual(validate('@user/_package'), {
    validForNewPackages: true,
    validForOldPackages: true,
  })

  assert.deepStrictEqual(validate('@user/http'), {
    validForNewPackages: true,
    validForOldPackages: true,
  })

  // Invalid

  assert.deepStrictEqual(validate(null), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot be null'] })

  assert.deepStrictEqual(validate(undefined), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot be undefined'] })

  assert.deepStrictEqual(validate(42), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name must be a string'] })

  assert.deepStrictEqual(validate(''), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name length must be greater than zero'] })

  assert.deepStrictEqual(validate('.start-with-period'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a period'] })

  assert.deepStrictEqual(validate('@npm/.'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a period'] })

  assert.deepStrictEqual(validate('@npm/..'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a period'] })

  assert.deepStrictEqual(validate('@npm/.package'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a period'] })

  assert.deepStrictEqual(validate('_start-with-underscore'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with an underscore'] })

  assert.deepStrictEqual(validate('-start-with-hyphen'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a hyphen'] })

  assert.deepStrictEqual(validate('--start-with-double-hyphen'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a hyphen'] })

  assert.deepStrictEqual(validate('contain:colons'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name can only contain URL-friendly characters'] })

  assert.deepStrictEqual(validate(' leading-space'), {
    validForNewPackages: false,
    validForOldPackages: false,
    /* eslint-disable-next-line max-len */
    errors: ['name cannot contain leading or trailing spaces', 'name can only contain URL-friendly characters'] })

  assert.deepStrictEqual(validate('trailing-space '), {
    validForNewPackages: false,
    validForOldPackages: false,
    /* eslint-disable-next-line max-len */
    errors: ['name cannot contain leading or trailing spaces', 'name can only contain URL-friendly characters'] })

  assert.deepStrictEqual(validate('s/l/a/s/h/e/s'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name can only contain URL-friendly characters'] })

  assert.deepStrictEqual(validate('node_modules'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['node_modules is not a valid package name'] })

  assert.deepStrictEqual(validate('favicon.ico'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['favicon.ico is not a valid package name'] })

  // Node/IO Core

  assert.deepStrictEqual(validate('http'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['http is a core module name'] })

  assert.deepStrictEqual(validate('process'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['process is a core module name'] })

  // Long Package Names

  /* eslint-disable-next-line max-len */
  assert.deepStrictEqual(validate('ifyouwanttogetthesumoftwonumberswherethosetwonumbersarechosenbyfindingthelargestoftwooutofthreenumbersandsquaringthemwhichismultiplyingthembyitselfthenyoushouldinputthreenumbersintothisfunctionanditwilldothatforyou-'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain more than 214 characters'],
  })

  /* eslint-disable-next-line max-len */
  assert.deepStrictEqual(validate('ifyouwanttogetthesumoftwonumberswherethosetwonumbersarechosenbyfindingthelargestoftwooutofthreenumbersandsquaringthemwhichismultiplyingthembyitselfthenyoushouldinputthreenumbersintothisfunctionanditwilldothatforyou'), {
    validForNewPackages: true,
    validForOldPackages: true,
  })

  // Legacy Mixed-Case

  assert.deepStrictEqual(validate('CAPITAL-LETTERS'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain capital letters'] })
})
