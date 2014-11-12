var valid = require("./")

valid("some-package")  // => {valid: true}
valid("example.com")   // => {valid: true}
valid("CAPITALS")      // => {valid: true}
valid("under_score")   // => {valid: true}
valid("123numeric")    // => {valid: true}
valid("crazy!")        // => {valid: true}

valid("")              // => {valid: false, errors:["name length must be greater than zero"]}
valid("ca$h")          // => {valid: false, errors:["name can only contain URL-friendly characters"]}
valid("_flodash")      // => {valid: false, errors:["name cannot start with an underscore"]}
