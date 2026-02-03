/**
 * Array utility functions with input validation and error handling
 */

/**
 * Splits array into chunks of specified size
 * @param {Array} array - The array to chunk
 * @param {number} size - Chunk size
 * @returns {Array} Array of chunks
 * @throws {TypeError} If inputs are invalid
 */
function chunk(array, size) {
  if (!Array.isArray(array)) throw new TypeError('Expected an array');
  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError('Expected a positive number for size');
  }
  
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Returns array with unique elements
 * @param {Array} array - The array to deduplicate
 * @returns {Array} Array with unique elements
 * @throws {TypeError} If input is not an array
 */
function unique(array) {
  if (!Array.isArray(array)) throw new TypeError('Expected an array');
  return [...new Set(array)];
}

/**
 * Randomly shuffles array elements
 * @param {Array} array - The array to shuffle
 * @returns {Array} Shuffled array
 * @throws {TypeError} If input is not an array
 */
function shuffle(array) {
  if (!Array.isArray(array)) throw new TypeError('Expected an array');
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Flattens nested array
 * @param {Array} array - The array to flatten
 * @param {number} depth - Flatten depth (default: 1)
 * @returns {Array} Flattened array
 * @throws {TypeError} If inputs are invalid
 */
function flatten(array, depth = 1) {
  if (!Array.isArray(array)) throw new TypeError('Expected an array');
  if (typeof depth !== 'number' || depth < 0) {
    throw new TypeError('Expected a non-negative number for depth');
  }
  
  return depth > 0 
    ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), [])
    : array.slice();
}

/**
 * Finds difference between two arrays
 * @param {Array} array1 - First array
 * @param {Array} array2 - Second array
 * @returns {Array} Elements in array1 not in array2
 * @throws {TypeError} If inputs are not arrays
 */
function difference(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new TypeError('Expected arrays');
  }
  return array1.filter(item => !array2.includes(item));
}

/**
 * Finds intersection between two arrays
 * @param {Array} array1 - First array
 * @param {Array} array2 - Second array
 * @returns {Array} Common elements
 * @throws {TypeError} If inputs are not arrays
 */
function intersection(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new TypeError('Expected arrays');
  }
  return array1.filter(item => array2.includes(item));
}

/**
 * Removes falsy values from array
 * @param {Array} array - The array to compact
 * @returns {Array} Array without falsy values
 * @throws {TypeError} If input is not an array
 */
function compact(array) {
  if (!Array.isArray(array)) throw new TypeError('Expected an array');
  return array.filter(Boolean);
}

/**
 * Groups array elements by key
 * @param {Array} array - The array to group
 * @param {Function|string} key - Grouping key function or property name
 * @returns {Object} Grouped object
 * @throws {TypeError} If inputs are invalid
 */
function groupBy(array, key) {
  if (!Array.isArray(array)) throw new TypeError('Expected an array');
  if (typeof key !== 'function' && typeof key !== 'string') {
    throw new TypeError('Expected a function or string for key');
  }
  
  return array.reduce((groups, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(item);
    return groups;
  }, {});
}

module.exports = {
  chunk,
  unique,
  shuffle,
  flatten,
  difference,
  intersection,
  compact,
  groupBy
};
