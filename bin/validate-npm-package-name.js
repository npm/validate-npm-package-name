#!/usr/bin/env node
'use strict'

const validate = require('..')
const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error('Usage: validate-npm-package-name <name>')
  process.exitCode = 1
} else {
  const result = validate(args[0])
  if (!result.validForNewPackages) {
    for (const message of (result.warnings || []).concat(result.errors || [])) {
      console.error(message)
    }
    process.exitCode = 1
  }
}
