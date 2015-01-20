var validate = require("./")

// regular

validate("some-package")  // => {valid: true}
validate("example.com")   // => {valid: true}
validate("under_score")   // => {valid: true}
validate("123numeric")    // => {valid: true}
validate("crazy!")        // => {valid: true}

// scoped

validate("@npm/thingy")   // => {valid: true}
validate("@jane/foo.js")  // => {valid: true}

// valid, but reserved by node core

validate("http")          // => {valid: true, warnings:["http is a node core module name"]}
validate("url")           // => {valid: true, warnings:["url is a node core module name"]}

// invalid

validate("")              // => {valid: false, errors:["name length must be greater than zero"]}
validate("ca$h")          // => {valid: false, errors:["name can only contain URL-friendly characters"]}
validate("_flodash")      // => {valid: false, errors:["name cannot start with an underscore"]}
validate("CAPITALS")      // => {valid: false, errors:["name must be lowercase"]}

// Nowadays, package names have to be lowercase
// To validate older packages, do this:

validate("CAPITALS",
  {allowMixedCase: true}) // => {valid: true}
