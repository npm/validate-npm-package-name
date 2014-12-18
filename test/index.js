var valid = require("..")
var test = require("tap").test
var path = require("path")
var fs = require("fs")

test("validate-npm-package-name", function (t) {

  // Traditional

  t.deepEqual(valid("some-package"), {valid: true})
  t.deepEqual(valid("example.com"), {valid: true})
  t.deepEqual(valid("under_score"), {valid: true})
  t.deepEqual(valid("period.js"), {valid: true})
  t.deepEqual(valid("123numeric"), {valid: true})
  t.deepEqual(valid("crazy!"), {valid: true})

  // Scoped (npm 2+)

  t.deepEqual(valid("@npm/thingy"), {valid: true})
  t.deepEqual(valid("@npm-zors/money!time.js"), {valid: true})

  // Invalid

  t.deepEqual(valid(""), {
    valid: false,
    errors: ["name length must be greater than zero"]})

  t.deepEqual(valid(""), {
    valid: false,
    errors: ["name length must be greater than zero"]})

  t.deepEqual(valid(".start-with-period"), {
    valid: false,
    errors: ["name cannot start with a period"]})

  t.deepEqual(valid("_start-with-underscore"), {
    valid: false,
    errors: ["name cannot start with an underscore"]})

  t.deepEqual(valid("contain:colons"), {
    valid: false,
    errors: ["name can only contain URL-friendly characters"]})

  t.deepEqual(valid("1234567890123456789012345678901234567890-more-than-fifty"), {
    valid: false,
    errors: ["name cannot be longer than 50 characters"]})

  t.deepEqual(valid(" leading-space"), {
    valid: false,
    errors: ["name cannot contain leading or trailing spaces", "name can only contain URL-friendly characters"]})

  t.deepEqual(valid("trailing-space "), {
    valid: false,
    errors: ["name cannot contain leading or trailing spaces", "name can only contain URL-friendly characters"]})

  t.deepEqual(valid("s/l/a/s/h/e/s"), {
    valid: false,
    errors: ["name can only contain URL-friendly characters"]})

  t.deepEqual(valid("node_modules"), {
    valid: false,
    errors: ["node_modules is a blacklisted name"]})

  t.deepEqual(valid("favicon.ico"), {
    valid: false,
    errors: ["favicon.ico is a blacklisted name"]})

  // Sketchy

  t.deepEqual(valid("http"), {
    valid: true,
    warnings: ["http is a node core module name"]})

  // Legacy Mixed-Case

  t.deepEqual(valid("CAPITAL-LETTERS", {allowMixedCase: true}), {valid: true})

  t.deepEqual(valid("CAPITAL-LETTERS"), {
    valid: false,
    errors: ["name must be lowercase"]})

  t.end()
})
