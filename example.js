var valid = require("./")

// true
valid("some-package")
valid("example.com")
valid("CAPITAL-LETTERS")
valid("under_score")
valid("123numeric")
valid("crazy!")

// false
valid("")
valid(" leading-space")
valid("trailing-space ")
valid("s/l/a/s/h/e/s")
