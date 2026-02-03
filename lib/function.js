/**
 * Function utility functions with input validation and error handling
 */

/**
 * Creates a debounced function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @param {boolean} immediate - Execute immediately on leading edge
 * @returns {Function} Debounced function
 * @throws {TypeError} If inputs are invalid
 */
function debounce(func, delay, immediate = false) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof delay !== 'number' || delay < 0) {
    throw new TypeError('Expected a non-negative number for delay');
  }
  if (typeof immediate !== 'boolean') {
    throw new TypeError('Expected a boolean for immediate');
  }
  
  let timeoutId;
  
  return function(...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) func.apply(this, args);
    }, delay);
    
    if (callNow) func.apply(this, args);
  };
}

/**
 * Creates a throttled function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 * @throws {TypeError} If inputs are invalid
 */
function throttle(func, limit) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof limit !== 'number' || limit < 0) {
    throw new TypeError('Expected a non-negative number for limit');
  }
  
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Creates a memoized function
 * @param {Function} func - Function to memoize
 * @param {Function} resolver - Function to resolve cache key
 * @returns {Function} Memoized function
 * @throws {TypeError} If inputs are invalid
 */
function memoize(func, resolver) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (resolver && typeof resolver !== 'function') {
    throw new TypeError('Expected a function for resolver');
  }
  
  const cache = new Map();
  
  return function(...args) {
    const key = resolver ? resolver.apply(this, args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

/**
 * Creates a function that only executes once
 * @param {Function} func - Function to execute once
 * @returns {Function} Function that executes once
 * @throws {TypeError} If input is invalid
 */
function once(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  
  let called = false;
  let result;
  
  return function(...args) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

/**
 * Creates a function with specified arguments partially applied
 * @param {Function} func - Function to partially apply
 * @param {...*} args - Arguments to partially apply
 * @returns {Function} Partially applied function
 * @throws {TypeError} If input is invalid
 */
function partial(func, ...args) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  
  return function(...moreArgs) {
    return func.apply(this, [...args, ...moreArgs]);
  };
}

/**
 * Creates a function with arguments in reverse order
 * @param {Function} func - Function to flip
 * @returns {Function} Function with reversed arguments
 * @throws {TypeError} If input is invalid
 */
function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  
  return function(...args) {
    return func.apply(this, args.reverse());
  };
}

/**
 * Creates a function that negates the result of another function
 * @param {Function} func - Function to negate
 * @returns {Function} Negated function
 * @throws {TypeError} If input is invalid
 */
function negate(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  
  return function(...args) {
    return !func.apply(this, args);
  };
}

/**
 * Creates a function that composes multiple functions
 * @param {...Function} funcs - Functions to compose
 * @returns {Function} Composed function
 * @throws {TypeError} If inputs are invalid
 */
function compose(...funcs) {
  if (funcs.some(func => typeof func !== 'function')) {
    throw new TypeError('All arguments must be functions');
  }
  
  return function(arg) {
    return funcs.reduceRight((acc, func) => func(acc), arg);
  };
}

/**
 * Creates a function that pipes multiple functions
 * @param {...Function} funcs - Functions to pipe
 * @returns {Function} Piped function
 * @throws {TypeError} If inputs are invalid
 */
function pipe(...funcs) {
  if (funcs.some(func => typeof func !== 'function')) {
    throw new TypeError('All arguments must be functions');
  }
  
  return function(arg) {
    return funcs.reduce((acc, func) => func(acc), arg);
  };
}

/**
 * Measures execution time of a function
 * @param {Function} func - Function to measure
 * @returns {Object} Object with result and time
 * @throws {TypeError} If input is invalid
 */
function time(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  
  return function(...args) {
    const start = performance.now();
    const result = func.apply(this, args);
    const end = performance.now();
    
    return {
      result,
      time: end - start
    };
  };
}

/**
 * Creates a function that retries on failure
 * @param {Function} func - Function to retry
 * @param {number} times - Number of retries
 * @param {number} delay - Delay between retries in milliseconds
 * @returns {Function} Function with retry logic
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function retry(func, times = 3, delay = 1000) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof times !== 'number' || times < 0) {
    throw new RangeError('Times must be a non-negative number');
  }
  if (typeof delay !== 'number' || delay < 0) {
    throw new RangeError('Delay must be a non-negative number');
  }
  
  return async function(...args) {
    let lastError;
    
    for (let i = 0; i <= times; i++) {
      try {
        return await func.apply(this, args);
      } catch (error) {
        lastError = error;
        if (i < times) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError;
  };
}

module.exports = {
  debounce,
  throttle,
  memoize,
  once,
  partial,
  flip,
  negate,
  compose,
  pipe,
  time,
  retry
};
