/**
 * Quick Utils - A comprehensive utility library for common JavaScript operations
 * Modular structure with input validation and error handling
 */

// Import all utility modules
const stringUtils = require('./lib/string');
const arrayUtils = require('./lib/array');
const mathUtils = require('./lib/math');
const objectUtils = require('./lib/object');
const validationUtils = require('./lib/validation');
const colorUtils = require('./lib/color');
const dateUtils = require('./lib/date');
const functionUtils = require('./lib/function');

// Export all utilities in a structured way
module.exports = {
  // String utilities
  ...stringUtils,
  
  // Array utilities
  ...arrayUtils,
  
  // Math utilities
  ...mathUtils,
  
  // Object utilities
  ...objectUtils,
  
  // Validation utilities
  ...validationUtils,
  
  // Color utilities
  ...colorUtils,
  
  // Date utilities
  ...dateUtils,
  
  // Function utilities
  ...functionUtils,
  
  // Export categories for better organization
  string: stringUtils,
  array: arrayUtils,
  math: mathUtils,
  object: objectUtils,
  validation: validationUtils,
  color: colorUtils,
  date: dateUtils,
  function: functionUtils
};
