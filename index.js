module.exports = function(name) {

  var errors = []

  if (name === null) {
    errors.push("name cannot be null")
    return done(errors)
  }

  if (name === undefined) {
    errors.push("name cannot be undefined")
    return done(errors)
  }

  if (typeof name !== "string") {
    errors.push("name must be a string")
    return done(errors)
  }

  if (!name.length) {
    errors.push("name length must be greater than zero")
  }

  if (name.match(/^\./)) {
    errors.push("name cannot start with a period")
  }

  if (name.match(/^_/)) {
    errors.push("name cannot start with an underscore")
  }

  if (name.length > 50) {
    errors.push("name cannot be longer than 50 characters")
  }

  if (name.trim() !== name) {
    errors.push("name cannot contain leading or trailing spaces")
  }

  if (encodeURIComponent(name) !== name) {
    errors.push("name can only contain URL-friendly characters")
  }

  return done(errors)

}

var done = function (errors) {
  if (errors.length) {
    return {valid: false, errors: errors}
  } else {
    return {valid: true}
  }
}
