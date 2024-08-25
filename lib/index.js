"use strict";
const { builtinModules: builtins } = require("module");

//--------------------------------
// STATIC GLOBALS
//--------------------------------

const SCOPED_PACKAGE_PATTERN = new RegExp("^(?:@([^/]+?)[/])?([^/]+?)$");
const BLACK_LIST = ["node_modules", "favicon.ico"];

//--------------------------------
// JSDOCS global types
//--------------------------------

/**
 * @typedef {Object} ValidationReturn
 * @property {boolean} validForNewPackages - Indicates if the package name is valid for new packages.
 * @property {boolean} validForOldPackages - Indicates if the package name is valid for old packages.
 * @property {string[]} [warnings] - An array of warnings related to the package name.
 * @property {string[]} [errors] - An array of errors related to the package name.
 */

//--------------------------------
// Functions
//--------------------------------

/**
 * Checks if the provided string is a valid npm package name.
 *
 * @example validate("some-package")
 *
 * @param {string} name - NPM package name to validate
 * @returns {ValidationReturn}
 * ```
 * {
 *    validForNewPackages: boolean,
 *    validForOldPackages: boolean
 * }
 * ```
 *
 */

function validate(name) {
  const results = { warnings: [], errors: [] };

  /**
   * @typedef {Object} ValidationRule
   * @property { !MyCallBack } condition - A function that returns true if the validation condition is met.
   * @property { string } errors - The error message to return if the condition is met.
   * @property { string } warnings - The warning message to return if the condition is met.
   * @property { boolean } exit - Indicates whether to exit validation if this condition is met.
   */

  /**
   * Validation rules for npm package names.
   * Each rule contains a condition to check, an error message if the condition fails,
   * and an optional exit flag to indicate if validation should stop if the condition is met.
   *
   * @type {Object<string, ValidationRule>}
   */

  const ValidationList = {
    NULL_NAME: {
      condition: () => name === null,
      errors: "name cannot be null",
      exit: true,
    },
    UNDEFINED_NAME: {
      condition: () => name === undefined,
      errors: "name cannot be undefined",
      exit: true,
    },
    INVALID_TYPE: {
      condition: () => typeof name !== "string",
      errors: "name must be a string",
      exit: true,
    },
    TOO_SHORT_LENGTH_NAME: {
      condition: () => !name.length,
      errors: "name length must be greater than zero",
    },
    TOO_LONG_LENGTH_NAME: {
      condition: () => name.length > 214,
      warnings: "name can no longer contain more than 214 characters",
    },
    CANNOT_START_WITH_PERIOD: {
      condition: () => name.startsWith("."),
      errors: "name cannot start with a period",
    },
    CANNOT_START_WITH_UNDERSCORE: {
      condition: () => name.startsWith("_"),
      errors: "name cannot start with an underscore",
    },
    CANNOT_HAVE_SPACES: {
      condition: () => name !== name.trim(),
      errors: "name cannot contain leading or trailing spaces",
    },
    CORE_MODULE_NAME: {
      condition: () => builtins.includes(name.toLowerCase()),
      warnings: `${name} is a core module name`,
    },
    NO_CAPITAL_LETTERS: {
      condition: () => name !== name.toLowerCase(),
      warnings: "name can no longer contain capital letters",
    },
    SPECIAL_CHARACTERS: {
      condition: () => /[~'!()*]/.test(name),
      warnings: 'name can no longer contain special characters ("~\'!()*")',
    },
    URL_FRIENDLY: {
      condition: () =>
        encodeURIComponent(name) !== name && !isScopedPackage(name),
      errors: "name can only contain URL-friendly characters",
    },
    BLACK_LISTED: {
      condition: () => BLACK_LIST.includes(name.toLowerCase()),
      errors: `${name} is a blacklisted name`,
    },
  };

  // Function to Validation List
  for (const key in ValidationList) {
    const currentValidation = ValidationList[key];
    if (
      Object.prototype.hasOwnProperty.call(ValidationList, key) &&
      currentValidation.condition()
    ) {
      if (currentValidation.errors)
        results.errors.push(currentValidation.errors);
      if (currentValidation.warnings)
        results.warnings.push(currentValidation.warnings);
      if (currentValidation.exit) break;
    }
  }

  return done(results.warnings, results.errors);
}

/**
 *
 * Checks if the provided string is a scope package.
 *
 * @param {string} name
 * @returns
 */
const isScopedPackage = (name) => {
  const nameMatch = name.match(SCOPED_PACKAGE_PATTERN);
  return (
    nameMatch &&
    encodeURIComponent(nameMatch[1]) === nameMatch[1] &&
    encodeURIComponent(nameMatch[2]) === nameMatch[2]
  );
};

/**
 * Returns the validation result for the package name.
 *
 * @param {string[]} warnings - An array of warnings generated during validation.
 * @param {string[]} errors - An array of errors generated during validation.
 * @returns {ValidationReturn} The result of the validation.
 */
const done = (warnings, errors) => ({
  validForNewPackages: !errors.length && !warnings.length,
  validForOldPackages: !errors.length,
  ...(warnings.length && { warnings }),
  ...(errors.length && { errors }),
});

module.exports = validate;
