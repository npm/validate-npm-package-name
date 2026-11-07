'use strict'

const { test } = require('node:test')
const assert = require('node:assert/strict')
const { spawnSync } = require('node:child_process')
const { resolve } = require('node:path')

const cli = resolve(__dirname, '../bin/validate-npm-package-name.js')
const usage = 'Usage: validate-npm-package-name <name>\n'
const cases = [
  ['valid name', ['some-package'], 0, ''],
  ['scoped name', ['@npm/thingy'], 0, ''],
  ['invalid name', ['_invalid'], 1, 'name cannot start with an underscore\n'],
  ['empty name', [''], 1, 'name length must be greater than zero\n'],
  ['legacy capital letters', ['MixedCase'], 1, 'name can no longer contain capital letters\n'],
  ['legacy core module', ['http'], 1, 'http is a core module name\n'],
  ['legacy length', ['a'.repeat(215)], 1,
    'name can no longer contain more than 214 characters\n'],
  ['legacy special characters', ['crazy!'], 1,
    'name can no longer contain special characters ("~\'!()*")\n'],
  ['warnings and errors', ['Invalid name:here'], 1,
    'name can no longer contain capital letters\nname can only contain URL-friendly characters\n'],
  ['missing name', [], 1, usage],
  ['multiple names', ['some-package', 'another-package'], 1, usage],
  ['no legacy flag', ['--legacy', 'MixedCase'], 1, usage],
]

for (const [description, args, status, stderr] of cases) {
  test(`CLI: ${description}`, () => {
    const result = spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' })
    assert.ifError(result.error)
    assert.equal(result.signal, null)
    assert.equal(result.status, status)
    assert.equal(result.stdout, '')
    assert.equal(result.stderr, stderr)
  })
}
