var valid = require("..")
var test = require("tap").test
var path = require("path")
var fs = require("fs")

test("valid-npm-package-name", function (t) {
  t.equal(valid("some-package"), true)
  t.equal(valid("example.com"), true)
  t.equal(valid("CAPITAL-LETTERS"), true)
  t.equal(valid("under_score"), true)
  t.equal(valid("123numeric"), true)
  t.equal(valid("crazy!"), true)

  t.equal(valid(""), false)
  t.equal(valid(" leading-space"), false)
  t.equal(valid("trailing-space "), false)
  t.equal(valid("s/l/a/s/h/e/s"), false)
  t.end()
})
