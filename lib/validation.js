/**
 * Validation utility functions with input validation and error handling
 */

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 * @throws {TypeError} If input is not a string
 */
function isEmail(email) {
  if (typeof email !== 'string') {
    throw new TypeError('Expected a string');
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validates URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 * @throws {TypeError} If input is not a string
 */
function isURL(url) {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string');
  }
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 * @throws {TypeError} If input is not a string
 */
function isPhone(phone) {
  if (typeof phone !== 'string') {
    throw new TypeError('Expected a string');
  }
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Validates credit card number using Luhn algorithm
 * @param {string} cardNumber - Credit card number to validate
 * @returns {boolean} True if valid credit card number
 * @throws {TypeError} If input is not a string
 */
function isCreditCard(cardNumber) {
  if (typeof cardNumber !== 'string') {
    throw new TypeError('Expected a string');
  }
  
  const cleaned = cardNumber.replace(/\D/g, '');
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * Validates IPv4 address
 * @param {string} ip - IP address to validate
 * @returns {boolean} True if valid IPv4
 * @throws {TypeError} If input is not a string
 */
function isIPv4(ip) {
  if (typeof ip !== 'string') {
    throw new TypeError('Expected a string');
  }
  const re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return re.test(ip);
}

/**
 * Validates IPv6 address
 * @param {string} ip - IP address to validate
 * @returns {boolean} True if valid IPv6
 * @throws {TypeError} If input is not a string
 */
function isIPv6(ip) {
  if (typeof ip !== 'string') {
    throw new TypeError('Expected a string');
  }
  const re = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  const reCompressed = /^((?:[0-9a-fA-F]{1,4}(?::|$)){0,7}[0-9a-fA-F]{1,4})?::(?:[0-9a-fA-F]{1,4}(?::|$)){0,7}[0-9a-fA-F]{1,4}$/;
  return re.test(ip) || reCompressed.test(ip);
}

/**
 * Validates MAC address
 * @param {string} mac - MAC address to validate
 * @returns {boolean} True if valid MAC address
 * @throws {TypeError} If input is not a string
 */
function isMAC(mac) {
  if (typeof mac !== 'string') {
    throw new TypeError('Expected a string');
  }
  const re = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return re.test(mac);
}

/**
 * Validates hexadecimal color
 * @param {string} color - Color to validate
 * @returns {boolean} True if valid hex color
 * @throws {TypeError} If input is not a string
 */
function isHexColor(color) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string');
  }
  const re = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  return re.test(color);
}

/**
 * Validates strong password
 * @param {string} password - Password to validate
 * @param {Object} options - Validation options
 * @returns {boolean} True if strong password
 * @throws {TypeError} If inputs are invalid
 */
function isStrongPassword(password, options = {}) {
  if (typeof password !== 'string') {
    throw new TypeError('Expected a string');
  }
  if (typeof options !== 'object') {
    throw new TypeError('Expected an object for options');
  }
  
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true
  } = options;
  
  if (password.length < minLength) return false;
  if (requireUppercase && !/[A-Z]/.test(password)) return false;
  if (requireLowercase && !/[a-z]/.test(password)) return false;
  if (requireNumbers && !/\d/.test(password)) return false;
  if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
  
  return true;
}

/**
 * Validates JSON string
 * @param {string} str - String to validate
 * @returns {boolean} True if valid JSON
 * @throws {TypeError} If input is not a string
 */
function isJSON(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  isEmail,
  isURL,
  isPhone,
  isCreditCard,
  isIPv4,
  isIPv6,
  isMAC,
  isHexColor,
  isStrongPassword,
  isJSON
};
