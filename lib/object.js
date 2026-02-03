/**
 * Object utility functions with input validation and error handling
 */

/**
 * Creates object with specified properties
 * @param {Object} obj - Source object
 * @param {Array} keys - Properties to pick
 * @returns {Object} New object with picked properties
 * @throws {TypeError} If inputs are invalid
 */
function pick(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object');
  }
  if (!Array.isArray(keys)) {
    throw new TypeError('Expected an array of keys');
  }
  
  return keys.reduce((result, key) => {
    if (key in obj) result[key] = obj[key];
    return result;
  }, {});
}

/**
 * Creates object without specified properties
 * @param {Object} obj - Source object
 * @param {Array} keys - Properties to omit
 * @returns {Object} New object without omitted properties
 * @throws {TypeError} If inputs are invalid
 */
function omit(obj, keys) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object');
  }
  if (!Array.isArray(keys)) {
    throw new TypeError('Expected an array of keys');
  }
  
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}

/**
 * Checks if value is empty
 * @param {*} value - Value to check
 * @returns {boolean} True if empty
 */
function isEmpty(value) {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Deep clones an object
 * @param {*} obj - Object to clone
 * @returns {*} Deep cloned object
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
  return obj;
}

/**
 * Deep merges multiple objects
 * @param {...Object} objects - Objects to merge
 * @returns {Object} Merged object
 * @throws {TypeError} If inputs are invalid
 */
function deepMerge(...objects) {
  const isObject = obj => obj && typeof obj === 'object';
  
  return objects.reduce((result, obj) => {
    if (!isObject(obj)) return result;
    
    Object.keys(obj).forEach(key => {
      if (isObject(obj[key]) && isObject(result[key])) {
        result[key] = deepMerge(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
    
    return result;
  }, {});
}

/**
 * Checks if two objects are deeply equal
 * @param {*} obj1 - First object
 * @param {*} obj2 - Second object
 * @returns {boolean} True if deeply equal
 */
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return false;
  
  if (typeof obj1 !== typeof obj2) return false;
  
  if (typeof obj1 !== 'object') return obj1 === obj2;
  
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

/**
 * Gets nested property value using dot notation
 * @param {Object} obj - Object to get property from
 * @param {string} path - Property path (e.g., 'a.b.c')
 * @param {*} defaultValue - Default value if property doesn't exist
 * @returns {*} Property value or default
 * @throws {TypeError} If inputs are invalid
 */
function get(obj, path, defaultValue) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object');
  }
  if (typeof path !== 'string') {
    throw new TypeError('Expected a string path');
  }
  
  const keys = path.split('.');
  let result = obj;
  
  for (let key of keys) {
    if (result == null || typeof result !== 'object' || !(key in result)) {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result;
}

/**
 * Sets nested property value using dot notation
 * @param {Object} obj - Object to set property on
 * @param {string} path - Property path (e.g., 'a.b.c')
 * @param {*} value - Value to set
 * @returns {Object} Modified object
 * @throws {TypeError} If inputs are invalid
 */
function set(obj, path, value) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('Expected an object');
  }
  if (typeof path !== 'string') {
    throw new TypeError('Expected a string path');
  }
  
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
  return obj;
}

module.exports = {
  pick,
  omit,
  isEmpty,
  deepClone,
  deepMerge,
  deepEqual,
  get,
  set
};
