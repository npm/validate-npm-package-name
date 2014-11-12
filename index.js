module.exports = function(input) {

  if (!input) return false

  if (!input.length) return false

  if (typeof input !== "string") return false

  return encodeURIComponent(input) === input

}
