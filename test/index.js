var validate = require("..")
var test = require("tap").test
var path = require("path")
var fs = require("fs")

test("validate-npm-package-name", function (t) {

  // Traditional

  t.deepEqual(validate("some-package"), {valid: true})
  t.deepEqual(validate("example.com"), {valid: true})
  t.deepEqual(validate("under_score"), {valid: true})
  t.deepEqual(validate("period.js"), {valid: true})
  t.deepEqual(validate("123numeric"), {valid: true})
  t.deepEqual(validate("crazy!"), {valid: true})

  // Scoped (npm 2+)

  t.deepEqual(validate("@npm/thingy"), {valid: true})
  t.deepEqual(validate("@npm-zors/money!time.js"), {valid: true})

  // Invalid

  t.deepEqual(validate(""), {
    valid: false,
    errors: ["name length must be greater than zero"]})

  t.deepEqual(validate(""), {
    valid: false,
    errors: ["name length must be greater than zero"]})

  t.deepEqual(validate(".start-with-period"), {
    valid: false,
    errors: ["name cannot start with a period"]})

  t.deepEqual(validate("_start-with-underscore"), {
    valid: false,
    errors: ["name cannot start with an underscore"]})

  t.deepEqual(validate("contain:colons"), {
    valid: false,
    errors: ["name can only contain URL-friendly characters"]})

  t.deepEqual(validate("1234567890123456789012345678901234567890-more-than-fifty"), {
    valid: false,
    errors: ["name cannot be longer than 50 characters"]})

  t.deepEqual(validate(" leading-space"), {
    valid: false,
    errors: ["name cannot contain leading or trailing spaces", "name can only contain URL-friendly characters"]})

  t.deepEqual(validate("trailing-space "), {
    valid: false,
    errors: ["name cannot contain leading or trailing spaces", "name can only contain URL-friendly characters"]})

  t.deepEqual(validate("s/l/a/s/h/e/s"), {
    valid: false,
    errors: ["name can only contain URL-friendly characters"]})

  t.deepEqual(validate("node_modules"), {
    valid: false,
    errors: ["node_modules is a blacklisted name"]})

  t.deepEqual(validate("favicon.ico"), {
    valid: false,
    errors: ["favicon.ico is a blacklisted name"]})

  // Sketchy

  t.deepEqual(validate("http"), {
    valid: true,
    warnings: ["http is a node core module name"]})

  // Legacy Mixed-Case

  t.deepEqual(validate("CAPITAL-LETTERS", {allowMixedCase: true}), {valid: true})

  t.deepEqual(validate("CAPITAL-LETTERS"), {
    valid: false,
    errors: ["name must be lowercase"]})

  t.end()
})
