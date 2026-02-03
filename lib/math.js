/**
 * Math utility functions with input validation and error handling
 */

/**
 * Returns random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 * @throws {TypeError} If inputs are invalid
 */
function random(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected numbers');
  }
  if (min > max) {
    throw new RangeError('Min must be less than or equal to max');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Clamps number within specified range
 * @param {number} number - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 * @throws {TypeError} If inputs are invalid
 */
function clamp(number, min, max) {
  if (typeof number !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected numbers');
  }
  if (min > max) {
    throw new RangeError('Min must be less than or equal to max');
  }
  return Math.min(Math.max(number, min), max);
}

/**
 * Checks if number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if even
 * @throws {TypeError} If input is not a number
 */
function isEven(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }
  return num % 2 === 0;
}

/**
 * Checks if number is odd
 * @param {number} num - Number to check
 * @returns {boolean} True if odd
 * @throws {TypeError} If input is not a number
 */
function isOdd(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }
  return !isEven(num);
}

/**
 * Checks if number is prime
 * @param {number} num - Number to check
 * @returns {boolean} True if prime
 * @throws {TypeError} If input is not a number
 */
function isPrime(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Calculates factorial of a number
 * @param {number} num - Number to calculate factorial for
 * @returns {number} Factorial
 * @throws {TypeError} If input is not a number
 * @throws {RangeError} If input is negative
 */
function factorial(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }
  if (num < 0) {
    throw new RangeError('Factorial is not defined for negative numbers');
  }
  if (num === 0 || num === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calculates greatest common divisor
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} GCD
 * @throws {TypeError} If inputs are not numbers
 */
function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Expected numbers');
  }
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculates least common multiple
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} LCM
 * @throws {TypeError} If inputs are not numbers
 */
function lcm(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Expected numbers');
  }
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if number is within range
 * @param {number} num - Number to check
 * @param {number} start - Range start
 * @param {number} end - Range end
 * @param {boolean} inclusive - Include boundaries (default: true)
 * @returns {boolean} True if in range
 * @throws {TypeError} If inputs are invalid
 */
function inRange(num, start, end, inclusive = true) {
  if (typeof num !== 'number' || typeof start !== 'number' || typeof end !== 'number') {
    throw new TypeError('Expected numbers');
  }
  if (typeof inclusive !== 'boolean') {
    throw new TypeError('Expected a boolean for inclusive');
  }
  
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  
  return inclusive 
    ? num >= min && num <= max
    : num > min && num < max;
}

module.exports = {
  random,
  clamp,
  isEven,
  isOdd,
  isPrime,
  factorial,
  gcd,
  lcm,
  inRange
};
