/**
 * Performance benchmarks for Quick Utils
 */

const quickUtils = require('../index');

// Simple benchmark function
function benchmark(name, fn, iterations = 100000) {
  console.log(`\n=== ${name} ===`);
  
  // Warm up
  for (let i = 0; i < 1000; i++) {
    fn();
  }
  
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = performance.now();
  
  const totalTime = end - start;
  const avgTime = totalTime / iterations;
  const opsPerSec = Math.round(1000 / avgTime);
  
  console.log(`Iterations: ${iterations}`);
  console.log(`Total time: ${totalTime.toFixed(2)}ms`);
  console.log(`Average time: ${avgTime.toFixed(4)}ms`);
  console.log(`Operations/sec: ${opsPerSec.toLocaleString()}`);
  
  return { totalTime, avgTime, opsPerSec };
}

// Test data
const testString = 'Hello World! This is a test string for benchmarking purposes.';
const testArray = Array.from({length: 1000}, (_, i) => i);
const testObject = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const testColor = '#3498db';
const testDate = new Date();

console.log('Quick Utils Performance Benchmarks');
console.log('=====================================');

// String utilities benchmarks
benchmark('String Capitalize', () => quickUtils.capitalize(testString));
benchmark('String Reverse', () => quickUtils.reverseString(testString));
benchmark('String Truncate', () => quickUtils.truncate(testString, 20));
benchmark('String Is Palindrome', () => quickUtils.isPalindrome('racecar'));
benchmark('String Camel Case', () => quickUtils.camelCase('hello world example'));
benchmark('String Kebab Case', () => quickUtils.kebabCase('helloWorldExample'));
benchmark('String Snake Case', () => quickUtils.snakeCase('helloWorldExample'));

// Array utilities benchmarks
benchmark('Array Chunk', () => quickUtils.chunk(testArray, 10));
benchmark('Array Unique', () => quickUtils.unique([1, 2, 2, 3, 3, 4, 4, 5]));
benchmark('Array Shuffle', () => quickUtils.shuffle([1, 2, 3, 4, 5]));
benchmark('Array Flatten', () => quickUtils.flatten([[1, 2], [3, 4], [5, 6]], 1));
benchmark('Array Difference', () => quickUtils.difference([1, 2, 3, 4], [3, 4, 5, 6]));
benchmark('Array Intersection', () => quickUtils.intersection([1, 2, 3, 4], [3, 4, 5, 6]));
benchmark('Array Compact', () => quickUtils.compact([0, 1, false, 2, '', 3, null, 4, undefined, 5]));

// Math utilities benchmarks
benchmark('Math Random', () => quickUtils.random(1, 100));
benchmark('Math Clamp', () => quickUtils.clamp(50, 1, 100));
benchmark('Math Is Even', () => quickUtils.isEven(42));
benchmark('Math Is Odd', () => quickUtils.isOdd(42));
benchmark('Math Is Prime', () => quickUtils.isPrime(17));
benchmark('Math Factorial', () => quickUtils.factorial(5));
benchmark('Math GCD', () => quickUtils.gcd(12, 18));
benchmark('Math LCM', () => quickUtils.lcm(4, 6));

// Object utilities benchmarks
benchmark('Object Pick', () => quickUtils.pick(testObject, ['a', 'c', 'e']));
benchmark('Object Omit', () => quickUtils.omit(testObject, ['b', 'd']));
benchmark('Object Is Empty', () => quickUtils.isEmpty({}));
benchmark('Object Deep Clone', () => quickUtils.deepClone({ nested: { value: 42 } }));
benchmark('Object Get', () => quickUtils.get({ a: { b: { c: 'value' } } }, 'a.b.c'));
benchmark('Object Set', () => quickUtils.set({}, 'a.b.c', 'value'));

// Validation utilities benchmarks
benchmark('Validation Is Email', () => quickUtils.isEmail('test@example.com'));
benchmark('Validation Is URL', () => quickUtils.isURL('https://example.com'));
benchmark('Validation Is Phone', () => quickUtils.isPhone('123-456-7890'));
benchmark('Validation Is Credit Card', () => quickUtils.isCreditCard('4111111111111111'));
benchmark('Validation Is IPv4', () => quickUtils.isIPv4('192.168.1.1'));
benchmark('Validation Is Strong Password', () => quickUtils.isStrongPassword('MyPass123!'));

// Color utilities benchmarks
benchmark('Color Hex to RGB', () => quickUtils.hexToRgb(testColor));
benchmark('Color RGB to Hex', () => quickUtils.rgbToHex(52, 152, 219));
benchmark('Color RGB to HSL', () => quickUtils.rgbToHsl(52, 152, 219));
benchmark('Color HSL to RGB', () => quickUtils.hslToRgb(204, 61, 53));
benchmark('Color Lighten', () => quickUtils.lighten(testColor, 20));
benchmark('Color Darken', () => quickUtils.darken(testColor, 20));
benchmark('Color Get Luminance', () => quickUtils.getLuminance(testColor));
benchmark('Color Is Light Color', () => quickUtils.isLightColor(testColor));

// Date utilities benchmarks
benchmark('Date Format', () => quickUtils.formatDate(testDate, 'YYYY-MM-DD HH:mm:ss'));
benchmark('Date Add Time', () => quickUtils.addTime(testDate, 1, 'days'));
benchmark('Date Subtract Time', () => quickUtils.subtractTime(testDate, 1, 'days'));
benchmark('Date Diff', () => quickUtils.dateDiff(testDate, new Date(testDate.getTime() + 86400000), 'days'));
benchmark('Date Is Today', () => quickUtils.isToday(testDate));
benchmark('Date Is Past', () => quickUtils.isPast(new Date('2020-01-01')));
benchmark('Date Is Future', () => quickUtils.isFuture(new Date('2030-01-01')));
benchmark('Date Get Relative Time', () => quickUtils.getRelativeTime(new Date(Date.now() - 3600000)));
benchmark('Date Is Leap Year', () => quickUtils.isLeapYear(2024));
benchmark('Date Get Days in Month', () => quickUtils.getDaysInMonth(2024, 2));

// Function utilities benchmarks
const testFunc = (x) => x * 2;
benchmark('Function Debounce Creation', () => quickUtils.debounce(testFunc, 100));
benchmark('Function Throttle Creation', () => quickUtils.throttle(testFunc, 100));
benchmark('Function Memoize Creation', () => quickUtils.memoize(testFunc));
benchmark('Function Once Creation', () => quickUtils.once(testFunc));
benchmark('Function Partial Creation', () => quickUtils.partial(testFunc, 5));
benchmark('Function Flip Creation', () => quickUtils.flip((a, b) => [a, b]));
benchmark('Function Negate Creation', () => quickUtils.negate(() => true));

// Memory usage benchmarks
console.log('\n=== Memory Usage Tests ===');

function memoryTest(name, fn, iterations = 1000) {
  console.log(`\n${name}:`);
  
  // Force garbage collection if available
  if (global.gc) {
    global.gc();
  }
  
  const memBefore = process.memoryUsage();
  
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  
  if (global.gc) {
    global.gc();
  }
  
  const memAfter = process.memoryUsage();
  
  console.log(`  Heap used: ${((memAfter.heapUsed - memBefore.heapUsed) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Heap total: ${((memAfter.heapTotal - memBefore.heapTotal) / 1024 / 1024).toFixed(2)} MB`);
}

memoryTest('Deep Clone Memory', () => {
  const largeObj = { data: Array.from({length: 100}, (_, i) => ({ id: i, value: `item${i}` })) };
  quickUtils.deepClone(largeObj);
});

memoryTest('Deep Merge Memory', () => {
  const obj1 = { data: Array.from({length: 50}, (_, i) => ({ id: i })) };
  const obj2 = { more: Array.from({length: 50}, (_, i) => ({ id: i + 50 })) };
  quickUtils.deepMerge(obj1, obj2);
});

memoryTest('Array Operations Memory', () => {
  const largeArray = Array.from({length: 1000}, (_, i) => i);
  quickUtils.unique(largeArray);
  quickUtils.shuffle(largeArray);
  quickUtils.chunk(largeArray, 10);
});

// Comparison with native methods
console.log('\n=== Native Method Comparisons ===');

function compareWithNative(name, utilsFunc, nativeFunc, testFn) {
  console.log(`\n${name}:`);
  
  const utilsResult = benchmark('Quick Utils', utilsFunc, 50000);
  const nativeResult = benchmark('Native Method', nativeFunc, 50000);
  
  const speedup = nativeResult.avgTime / utilsResult.avgTime;
  console.log(`Speedup: ${speedup.toFixed(2)}x ${speedup > 1 ? '(Quick Utils faster)' : '(Native faster)'}`);
}

compareWithNative(
  'Array Unique',
  () => quickUtils.unique([1, 2, 2, 3, 3, 4, 4, 5]),
  () => [...new Set([1, 2, 2, 3, 3, 4, 4, 5])],
  () => [1, 2, 2, 3, 3, 4, 4, 5]
);

compareWithNative(
  'String Capitalize',
  () => quickUtils.capitalize('hello world'),
  () => 'hello world'.charAt(0).toUpperCase() + 'hello world'.slice(1).toLowerCase(),
  () => 'hello world'
);

compareWithNative(
  'Object Keys Check',
  () => quickUtils.isEmpty({}),
  () => Object.keys({}).length === 0,
  () => ({})
);

console.log('\n=== Benchmark Summary ===');
console.log('All benchmarks completed successfully!');
console.log('Results show performance characteristics of Quick Utils functions.');
console.log('For production use, consider the specific use case and data sizes.');
