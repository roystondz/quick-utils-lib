/**
 * Advanced usage examples for Quick Utils
 */

const quickUtils = require('../index');

console.log('=== Advanced String Manipulation ===');
const text = 'Hello World! This is a test.';
console.log('Original:', text);
console.log('Capitalized:', quickUtils.capitalize(text));
console.log('Reversed:', quickUtils.reverseString(text));
console.log('Truncated:', quickUtils.truncate(text, 20));
console.log('Case conversions:');
console.log('  Camel:', quickUtils.camelCase('hello world example'));
console.log('  Kebab:', quickUtils.kebabCase('helloWorldExample'));
console.log('  Snake:', quickUtils.snakeCase('helloWorldExample'));
console.log('Padded:', quickUtils.padString('test', 10, '*'));

console.log('\n=== Advanced Array Operations ===');
const users = [
  { id: 1, name: 'Alice', age: 25, department: 'Engineering' },
  { id: 2, name: 'Bob', age: 30, department: 'Design' },
  { id: 3, name: 'Charlie', age: 35, department: 'Engineering' },
  { id: 4, name: 'Diana', age: 28, department: 'Marketing' }
];

console.log('Group by department:', quickUtils.groupBy(users, 'department'));
console.log('Flatten nested arrays:', quickUtils.flatten([[1, 2], [3, 4], [5, 6]], 1));
console.log('Compact (remove falsy):', quickUtils.compact([0, 1, false, 2, '', 3, null, 4, undefined, 5]));

console.log('\n=== Advanced Math Operations ===');
console.log('Number theory:');
console.log('  Primes up to 20:', Array.from({length: 20}, (_, i) => i + 1).filter(quickUtils.isPrime));
console.log('  Factorials:', Array.from({length: 6}, (_, i) => `${i}! = ${quickUtils.factorial(i)}`));
console.log('  GCD/LCM pairs:', [
  {a: 12, b: 18, gcd: quickUtils.gcd(12, 18), lcm: quickUtils.lcm(12, 18)},
  {a: 15, b: 25, gcd: quickUtils.gcd(15, 25), lcm: quickUtils.lcm(15, 25)}
]);

console.log('\n=== Advanced Object Manipulation ===');
const complexObj = {
  user: {
    profile: {
      name: 'John Doe',
      settings: {
        theme: 'dark',
        notifications: {
          email: true,
          push: false,
          sms: true
        }
      }
    },
    metadata: {
      created: '2023-01-01',
      updated: '2023-12-01'
    }
  }
};

console.log('Deep get nested value:', quickUtils.get(complexObj, 'user.profile.settings.notifications.email'));
console.log('Deep set nested value:');
const newObj = quickUtils.deepClone(complexObj);
quickUtils.set(newObj, 'user.profile.settings.notifications.email', false);
console.log('  Updated email notifications:', quickUtils.get(newObj, 'user.profile.settings.notifications.email'));

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
console.log('Deep merge:', quickUtils.deepMerge(obj1, obj2));
console.log('Deep equal test:', quickUtils.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));

console.log('\n=== Advanced Validation ===');
const testCases = {
  emails: ['test@example.com', 'invalid-email', 'user@domain.co.uk'],
  urls: ['https://example.com', 'ftp://files.server.com', 'not-a-url'],
  phones: ['123-456-7890', '(123) 456-7890', '+1 123 456 7890', '123'],
  creditCards: ['4111111111111111', '4012888888881881', '1234567890123456'],
  passwords: ['weak', 'StrongPass123!', 'NoNumbers!', 'nouppercase123']
};

Object.entries(testCases).forEach(([type, cases]) => {
  console.log(`${type.toUpperCase()}:`);
  cases.forEach(testCase => {
    let result;
    switch (type) {
      case 'emails':
        result = quickUtils.isEmail(testCase);
        break;
      case 'urls':
        result = quickUtils.isURL(testCase);
        break;
      case 'phones':
        result = quickUtils.isPhone(testCase);
        break;
      case 'creditCards':
        result = quickUtils.isCreditCard(testCase);
        break;
      case 'passwords':
        result = quickUtils.isStrongPassword(testCase);
        break;
    }
    console.log(`  ${testCase}: ${result}`);
  });
});

console.log('\n=== Advanced Color Operations ===');
const baseColor = '#3498db';
console.log('Base color:', baseColor);
const rgb = quickUtils.hexToRgb(baseColor);
console.log('RGB:', rgb);
const hsl = quickUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
console.log('HSL:', hsl);

console.log('Color variations:');
console.log('  Lightened 20%:', quickUtils.lighten(baseColor, 20));
console.log('  Darkened 20%:', quickUtils.darken(baseColor, 20));
console.log('  Luminance:', quickUtils.getLuminance(baseColor));
console.log('  Is light:', quickUtils.isLightColor(baseColor));

// Color palette generator
function generatePalette(baseColor) {
  const palette = {
    base: baseColor,
    light: quickUtils.lighten(baseColor, 20),
    lighter: quickUtils.lighten(baseColor, 40),
    dark: quickUtils.darken(baseColor, 20),
    darker: quickUtils.darken(baseColor, 40)
  };
  return palette;
}
console.log('Color palette:', generatePalette(baseColor));

console.log('\n=== Advanced Date Operations ===');
const baseDate = new Date('2023-06-15T10:30:00');
console.log('Base date:', baseDate.toISOString());

console.log('Date arithmetic:');
console.log('  +1 week:', quickUtils.formatDate(quickUtils.addTime(baseDate, 1, 'days'), 'YYYY-MM-DD'));
console.log('  +3 months:', quickUtils.formatDate(quickUtils.addTime(baseDate, 3, 'months'), 'YYYY-MM-DD'));
console.log('  +2 years:', quickUtils.formatDate(quickUtils.addTime(baseDate, 2, 'years'), 'YYYY-MM-DD'));

const futureDate = quickUtils.addTime(baseDate, 45, 'days');
console.log('Date differences:');
console.log('  Days between:', quickUtils.dateDiff(baseDate, futureDate, 'days'));
console.log('  Hours between:', quickUtils.dateDiff(baseDate, futureDate, 'hours'));
console.log('  Minutes between:', quickUtils.dateDiff(baseDate, futureDate, 'minutes'));

console.log('Date checks:');
console.log('  Is today:', quickUtils.isToday(baseDate));
console.log('  Is past:', quickUtils.isPast(baseDate));
console.log('  Is future:', quickUtils.isFuture(futureDate));
console.log('  Relative time:', quickUtils.getRelativeTime(baseDate));

console.log('\n=== Advanced Function Composition ===');
// Create a data processing pipeline
const pipeline = quickUtils.pipe(
  arr => quickUtils.unique(arr),
  arr => quickUtils.shuffle(arr),
  arr => quickUtils.chunk(arr, 3),
  arr => quickUtils.flatten(arr, 1)
);

const testData = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
console.log('Data pipeline result:', pipeline(testData));

// Function composition example
const addAndMultiply = quickUtils.compose(
  x => x * 2,
  x => x + 10
);
console.log('Composition (add 10, then multiply by 2):', addAndMultiply(5)); // (5 + 10) * 2 = 30

// Advanced memoization with custom resolver
const memoizedExpensive = quickUtils.memoize(
  (a, b) => {
    console.log('Expensive computation for', a, b);
    return a * b + Math.random();
  },
  (a, b) => `${a},${b}` // Custom cache key
);

console.log('Memoization with custom resolver:');
console.log(memoizedExpensive(2, 3));
console.log(memoizedExpensive(2, 3)); // Should use cache
console.log(memoizedExpensive(3, 2)); // Different args, new computation

console.log('\n=== Performance Measurement ===');
const timedFunction = quickUtils.time((n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
});

const result = timedFunction(1000000);
console.log('Performance test result:', {
  sum: result.result,
  time: `${result.time.toFixed(2)}ms`
});

console.log('\n=== Error Handling Examples ===');
try {
  quickUtils.capitalize(123); // Should throw TypeError
} catch (error) {
  console.log('Caught error:', error.message);
}

try {
  quickUtils.chunk('not an array', 2); // Should throw TypeError
} catch (error) {
  console.log('Caught error:', error.message);
}

try {
  quickUtils.random(10, 5); // Should throw RangeError
} catch (error) {
  console.log('Caught error:', error.message);
}

console.log('\n=== Categorized Usage ===');
console.log('Using string category:', quickUtils.string.capitalize('hello'));
console.log('Using array category:', quickUtils.array.unique([1, 2, 2, 3]));
console.log('Using math category:', quickUtils.math.isPrime(17));
console.log('Using object category:', quickUtils.object.isEmpty({}));
console.log('Using validation category:', quickUtils.validation.isEmail('test@example.com'));
console.log('Using color category:', quickUtils.color.hexToRgb('#ff0000'));
console.log('Using date category:', quickUtils.date.isToday(new Date()));
console.log('Using function category:', quickUtils.function.debounce(() => {}, 100));
