'use strict'

var validate = require('..')
var test = require('tap').test

test('validate-npm-package-name', function (t) {
  // Traditional

  t.same(validate('some-package'), { validForNewPackages: true, validForOldPackages: true })
  t.same(validate('example.com'), { validForNewPackages: true, validForOldPackages: true })
  t.same(validate('under_score'), { validForNewPackages: true, validForOldPackages: true })
  t.same(validate('period.js'), { validForNewPackages: true, validForOldPackages: true })
  t.same(validate('123numeric'), { validForNewPackages: true, validForOldPackages: true })
  t.same(validate('crazy!'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain special characters ("~\'!()*")'],
  })

  // Scoped (npm 2+)

  t.same(validate('@npm/thingy'), { validForNewPackages: true, validForOldPackages: true })
  t.same(validate('@npm-zors/money!time.js'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain special characters ("~\'!()*")'],
  })

  // Invalid

  t.same(validate(''), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name length must be greater than zero'] })

  t.same(validate(''), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name length must be greater than zero'] })

  t.same(validate('.start-with-period'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with a period'] })

  t.same(validate('_start-with-underscore'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name cannot start with an underscore'] })

  t.same(validate('contain:colons'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name can only contain URL-friendly characters'] })

  t.same(validate(' leading-space'), {
    validForNewPackages: false,
    validForOldPackages: false,
    /* eslint-disable-next-line max-len */
    errors: ['name cannot contain leading or trailing spaces', 'name can only contain URL-friendly characters'] })

  t.same(validate('trailing-space '), {
    validForNewPackages: false,
    validForOldPackages: false,
    /* eslint-disable-next-line max-len */
    errors: ['name cannot contain leading or trailing spaces', 'name can only contain URL-friendly characters'] })

  t.same(validate('s/l/a/s/h/e/s'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['name can only contain URL-friendly characters'] })

  t.same(validate('node_modules'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['node_modules is a blacklisted name'] })

  t.same(validate('favicon.ico'), {
    validForNewPackages: false,
    validForOldPackages: false,
    errors: ['favicon.ico is a blacklisted name'] })

  // Node/IO Core

  t.same(validate('http'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['http is a core module name'] })

  // Long Package Names

  /* eslint-disable-next-line max-len */
  t.same(validate('ifyouwanttogetthesumoftwonumberswherethosetwonumbersarechosenbyfindingthelargestoftwooutofthreenumbersandsquaringthemwhichismultiplyingthembyitselfthenyoushouldinputthreenumbersintothisfunctionanditwilldothatforyou-'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain more than 214 characters'],
  })

  /* eslint-disable-next-line max-len */
  t.same(validate('ifyouwanttogetthesumoftwonumberswherethosetwonumbersarechosenbyfindingthelargestoftwooutofthreenumbersandsquaringthemwhichismultiplyingthembyitselfthenyoushouldinputthreenumbersintothisfunctionanditwilldothatforyou'), {
    validForNewPackages: true,
    validForOldPackages: true,
  })

  // Legacy Mixed-Case

  t.same(validate('CAPITAL-LETTERS'), {
    validForNewPackages: false,
    validForOldPackages: true,
    warnings: ['name can no longer contain capital letters'] })

  t.end()
})
