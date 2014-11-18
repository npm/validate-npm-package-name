var scopedPackagePattern = new RegExp("^(?:@([^/]+?)[/])?([^/]+?)$");
var nodeCoreModuleNames = require("node-core-module-names")
var blacklist = [
  "node_modules",
  "favicon.ico"
];

var validate = module.exports = function(name, options) {

  var errors = []

  if (!options) {
    options = {
      allowMixedCase: false
    }
  }

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

  if (name.toLowerCase() !== name && !options.allowMixedCase) {
    errors.push("name must be lowercase")
  }

  // No funny business
  blacklist.forEach(function(blacklistedName){
    if (name.toLowerCase() === blacklistedName) {
      errors.push(blacklistedName + " is a blacklisted name")
    }
  })

  // Disallow core module names
  // http, events, util, domain, cluster, etc
  nodeCoreModuleNames.forEach(function(nodeCoreModule){
    if (name.toLowerCase() === nodeCoreModule) {
      errors.push(nodeCoreModule + " is a Node.js core module name")
    }
  })

  if (encodeURIComponent(name) !== name) {

    // Maybe it's a scoped package name, like @user/package
    var nameMatch = name.match(scopedPackagePattern)
    if (nameMatch) {
      var user = nameMatch[1]
      var pkg = nameMatch[2]
      if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
        return done(errors)
      }
    }

    errors.push("name can only contain URL-friendly characters")
  }

  return done(errors)

}

validate.scopedPackagePattern = scopedPackagePattern

var done = function (errors) {
  if (errors.length) {
    return {valid: false, errors: errors}
  } else {
    return {valid: true}
  }
}
