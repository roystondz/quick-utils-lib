/**
 * String utility functions with input validation and error handling
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 * @throws {TypeError} If input is not a string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Reverses a string
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 * @throws {TypeError} If input is not a string
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Truncates a string to specified length
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add when truncated (default: '...')
 * @returns {string} The truncated string
 * @throws {TypeError} If inputs are invalid
 */
function truncate(str, length, suffix = '...') {
  if (typeof str !== 'string') throw new TypeError('Expected a string');
  if (typeof length !== 'number') throw new TypeError('Expected a number for length');
  if (typeof suffix !== 'string') throw new TypeError('Expected a string for suffix');
  
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - The string to check
 * @returns {boolean} True if palindrome
 * @throws {TypeError} If input is not a string
 */
function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Converts string to camelCase
 * @param {string} str - The string to convert
 * @returns {string} camelCase string
 * @throws {TypeError} If input is not a string
 */
function camelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

/**
 * Converts string to kebab-case
 * @param {string} str - The string to convert
 * @returns {string} kebab-case string
 * @throws {TypeError} If input is not a string
 */
function kebabCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

/**
 * Converts string to snake_case
 * @param {string} str - The string to convert
 * @returns {string} snake_case string
 * @throws {TypeError} If input is not a string
 */
function snakeCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/\s+/g, '_').toLowerCase();
}

/**
 * Pads a string to a specified length
 * @param {string} str - The string to pad
 * @param {number} length - Target length
 * @param {string} chars - Characters to pad with (default: ' ')
 * @returns {string} Padded string
 * @throws {TypeError} If inputs are invalid
 */
function padString(str, length, chars = ' ') {
  if (typeof str !== 'string') throw new TypeError('Expected a string');
  if (typeof length !== 'number') throw new TypeError('Expected a number for length');
  if (typeof chars !== 'string') throw new TypeError('Expected a string for chars');
  
  const padLength = length - str.length;
  if (padLength <= 0) return str;
  
  const leftPad = Math.floor(padLength / 2);
  const rightPad = padLength - leftPad;
  
  return chars.repeat(leftPad) + str + chars.repeat(rightPad);
}

module.exports = {
  capitalize,
  reverseString,
  truncate,
  isPalindrome,
  camelCase,
  kebabCase,
  snakeCase,
  padString
};
