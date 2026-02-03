/**
 * Basic usage examples for Quick Utils
 */

const quickUtils = require('../index');

console.log('=== String Utilities ===');
console.log('Capitalize:', quickUtils.capitalize('hello world'));
console.log('Camel Case:', quickUtils.camelCase('hello world'));
console.log('Kebab Case:', quickUtils.kebabCase('helloWorld'));
console.log('Snake Case:', quickUtils.snakeCase('helloWorld'));
console.log('Is Palindrome:', quickUtils.isPalindrome('racecar'));
console.log('Truncate:', quickUtils.truncate('This is a long sentence', 10));

console.log('\n=== Array Utilities ===');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Chunk:', quickUtils.chunk(numbers, 3));
console.log('Unique:', quickUtils.unique([1, 2, 2, 3, 3, 4]));
console.log('Shuffle:', quickUtils.shuffle([1, 2, 3, 4, 5]));
console.log('Difference:', quickUtils.difference([1, 2, 3], [2, 3, 4]));
console.log('Intersection:', quickUtils.intersection([1, 2, 3], [2, 3, 4]));

console.log('\n=== Math Utilities ===');
console.log('Random:', quickUtils.random(1, 100));
console.log('Clamp:', quickUtils.clamp(15, 1, 10));
console.log('Is Prime:', quickUtils.isPrime(17));
console.log('Factorial:', quickUtils.factorial(5));
console.log('GCD:', quickUtils.gcd(12, 18));
console.log('LCM:', quickUtils.lcm(4, 6));

console.log('\n=== Object Utilities ===');
const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log('Pick:', quickUtils.pick(obj, ['a', 'c']));
console.log('Omit:', quickUtils.omit(obj, ['b', 'd']));
console.log('Is Empty:', quickUtils.isEmpty({}));
console.log('Deep Clone:', quickUtils.deepClone({ nested: { value: 42 } }));
console.log('Get:', quickUtils.get({ a: { b: { c: 'value' } } }, 'a.b.c'));
console.log('Set:', quickUtils.set({}, 'a.b.c', 'value'));

console.log('\n=== Validation Utilities ===');
console.log('Is Email:', quickUtils.isEmail('test@example.com'));
console.log('Is URL:', quickUtils.isURL('https://example.com'));
console.log('Is Phone:', quickUtils.isPhone('123-456-7890'));
console.log('Is Credit Card:', quickUtils.isCreditCard('4111111111111111'));
console.log('Is IPv4:', quickUtils.isIPv4('192.168.1.1'));
console.log('Is Strong Password:', quickUtils.isStrongPassword('MyPass123!'));

console.log('\n=== Color Utilities ===');
console.log('Hex to RGB:', quickUtils.hexToRgb('#ff0000'));
console.log('RGB to Hex:', quickUtils.rgbToHex(255, 0, 0));
console.log('RGB to HSL:', quickUtils.rgbToHsl(255, 0, 0));
console.log('Lighten:', quickUtils.lighten('#333333', 20));
console.log('Darken:', quickUtils.darken('#666666', 20));
console.log('Is Light Color:', quickUtils.isLightColor('#ffffff'));

console.log('\n=== Date Utilities ===');
const now = new Date();
console.log('Format Date:', quickUtils.formatDate(now, 'MM/DD/YYYY HH:mm'));
console.log('Add Time:', quickUtils.formatDate(quickUtils.addTime(now, 7, 'days')));
console.log('Is Today:', quickUtils.isToday(now));
console.log('Is Past:', quickUtils.isPast(new Date('2020-01-01')));
console.log('Relative Time:', quickUtils.getRelativeTime(new Date(Date.now() - 3600000)));
console.log('Is Leap Year:', quickUtils.isLeapYear(2024));
console.log('Days in Month:', quickUtils.getDaysInMonth(2024, 2));

console.log('\n=== Function Utilities ===');
// Debounce example
const debouncedLog = quickUtils.debounce((msg) => console.log('Debounced:', msg), 100);
debouncedLog('Hello');
debouncedLog('World');
setTimeout(() => debouncedLog('Final'), 150);

// Throttle example
const throttledLog = quickUtils.throttle((msg) => console.log('Throttled:', msg), 100);
throttledLog('1');
throttledLog('2');
throttledLog('3');
setTimeout(() => throttledLog('4'), 150);

// Memoize example
const expensiveCalculation = quickUtils.memoize((n) => {
  console.log('Computing...');
  return n * n;
});
console.log('Memoized:', expensiveCalculation(5));
console.log('Memoized:', expensiveCalculation(5)); // Should use cache

// Once example
const onceFunction = quickUtils.once(() => console.log('This runs only once'));
onceFunction();
onceFunction();

setTimeout(() => {
  console.log('\n=== Function Utilities (Delayed) ===');
}, 200);
