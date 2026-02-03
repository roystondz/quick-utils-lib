# Quick Utils

[![npm version](https://badge.fury.io/js/quick-utils-lib.svg)](https://badge.fury.io/js/quick-utils-lib)
[![npm downloads](https://img.shields.io/npm/dm/quick-utils-lib.svg)](https://www.npmjs.com/package/quick-utils-lib)
[![Build Status](https://github.com/roystondz/quick-utils-lib/workflows/CI/badge.svg)](https://github.com/roystondz/quick-utils-lib/actions)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A comprehensive utility library for common JavaScript operations including string manipulation, array operations, math functions, object utilities, validation, color conversions, date operations, and function utilities.

## 🚀 Features

- **📦 Zero Dependencies** - Lightweight and fast
- **🔧 Modular Structure** - Import only what you need
- **📝 TypeScript Support** - Full type definitions included
- **🛡️ Input Validation** - Comprehensive error handling
- **📚 Well Documented** - JSDoc comments and examples
- **⚡ High Performance** - Optimized algorithms
- **🧪 Fully Tested** - Comprehensive test suite

## 📦 Installation

```bash
npm install quick-utils-lib
```

## 🎯 Quick Start

```javascript
const quickUtils = require('quick-utils-lib');

// String utilities
console.log(quickUtils.capitalize('hello world')); // "Hello world"
console.log(quickUtils.camelCase('hello world')); // "helloWorld"

// Array utilities
console.log(quickUtils.chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(quickUtils.unique([1, 2, 2, 3])); // [1, 2, 3]

// Math utilities
console.log(quickUtils.random(1, 10)); // Random number 1-10
console.log(quickUtils.isPrime(17)); // true

// Object utilities
console.log(quickUtils.pick({a: 1, b: 2, c: 3}, ['a', 'c'])); // {a: 1, c: 3}
console.log(quickUtils.deepClone({nested: {value: 42}})); // Deep copied object

// Validation utilities
console.log(quickUtils.isEmail('test@example.com')); // true
console.log(quickUtils.isURL('https://example.com')); // true

// Color utilities
console.log(quickUtils.hexToRgb('#ff0000')); // {r: 255, g: 0, b: 0}
console.log(quickUtils.lighten('#333333', 20)); // "#666666"

// Date utilities
console.log(quickUtils.formatDate(new Date(), 'YYYY-MM-DD')); // "2024-01-01"
console.log(quickUtils.isToday(new Date())); // true

// Function utilities
const debouncedFn = quickUtils.debounce(() => console.log('Debounced!'), 300);
const memoizedFn = quickUtils.memoize((n) => n * n); // Cached factorial
```

## 📚 API Documentation

### String Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `capitalize(str)` | Capitalizes first letter | `capitalize('hello')` → `"Hello"` |
| `reverseString(str)` | Reverses a string | `reverseString('hello')` → `"olleh"` |
| `truncate(str, length, suffix)` | Truncates string | `truncate('Hello World', 5)` → `"He..."` |
| `isPalindrome(str)` | Checks palindrome | `isPalindrome('racecar')` → `true` |
| `camelCase(str)` | Converts to camelCase | `camelCase('hello world')` → `"helloWorld"` |
| `kebabCase(str)` | Converts to kebab-case | `kebabCase('helloWorld')` → `"hello-world"` |
| `snakeCase(str)` | Converts to snake_case | `snakeCase('helloWorld')` → `"hello_world"` |
| `padString(str, length, chars)` | Pads string | `padString('test', 10, '*')` → `"***test***"` |

### Array Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `chunk(array, size)` | Splits into chunks | `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]` |
| `unique(array)` | Removes duplicates | `unique([1,2,2,3])` → `[1,2,3]` |
| `shuffle(array)` | Randomly shuffles | `shuffle([1,2,3])` → `[3,1,2]` |
| `flatten(array, depth)` | Flattens nested | `flatten([[1,2],[3,4]])` → `[1,2,3,4]` |
| `difference(arr1, arr2)` | Array difference | `difference([1,2,3],[2,3,4])` → `[1]` |
| `intersection(arr1, arr2)` | Array intersection | `intersection([1,2,3],[2,3,4])` → `[2,3]` |
| `compact(array)` | Removes falsy values | `compact([0,1,false,2])` → `[1,2]` |
| `groupBy(array, key)` | Groups by key | `groupBy(users,'dept')` → `{eng:[...],des:[...]}` |

### Math Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `random(min, max)` | Random integer | `random(1,10)` → `7` |
| `clamp(number, min, max)` | Clamps number | `clamp(15,1,10)` → `10` |
| `isEven(num)` | Checks if even | `isEven(4)` → `true` |
| `isOdd(num)` | Checks if odd | `isOdd(3)` → `true` |
| `isPrime(num)` | Checks if prime | `isPrime(17)` → `true` |
| `factorial(num)` | Calculates factorial | `factorial(5)` → `120` |
| `gcd(a, b)` | Greatest common divisor | `gcd(12,18)` → `6` |
| `lcm(a, b)` | Least common multiple | `lcm(4,6)` → `12` |
| `inRange(num, start, end)` | Checks range | `inRange(5,1,10)` → `true` |

### Object Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `pick(obj, keys)` | Select properties | `pick({a:1,b:2},['a'])` → `{a:1}` |
| `omit(obj, keys)` | Remove properties | `omit({a:1,b:2},['b'])` → `{a:1}` |
| `isEmpty(value)` | Checks if empty | `isEmpty({})` → `true` |
| `deepClone(obj)` | Deep clones object | `deepClone({a:{b:1}})` → `{a:{b:1}}` |
| `deepMerge(...objs)` | Deep merges objects | `deepMerge({a:1},{b:2})` → `{a:1,b:2}` |
| `deepEqual(obj1, obj2)` | Deep equality check | `deepEqual({a:1},{a:1})` → `true` |
| `get(obj, path)` | Get nested property | `get({a:{b:1}},'a.b')` → `1` |
| `set(obj, path, value)` | Set nested property | `set({},'a.b',1)` → `{a:{b:1}}` |

### Validation Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `isEmail(email)` | Validates email | `isEmail('test@ex.com')` → `true` |
| `isURL(url)` | Validates URL | `isURL('https://ex.com')` → `true` |
| `isPhone(phone)` | Validates phone | `isPhone('123-456-7890')` → `true` |
| `isCreditCard(card)` | Validates credit card | `isCreditCard('4111...')` → `true` |
| `isIPv4(ip)` | Validates IPv4 | `isIPv4('192.168.1.1')` → `true` |
| `isIPv6(ip)` | Validates IPv6 | `isIPv6('::1')` → `true` |
| `isMAC(mac)` | Validates MAC address | `isMAC('00:00:00:00:00:00')` → `true` |
| `isHexColor(color)` | Validates hex color | `isHexColor('#ff0000')` → `true` |
| `isStrongPassword(pwd, opts)` | Validates password strength | `isStrongPassword('Pass123!')` → `true` |
| `isJSON(str)` | Validates JSON | `isJSON('{"a":1}')` → `true` |

### Color Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `hexToRgb(hex)` | Hex to RGB | `hexToRgb('#ff0000')` → `{r:255,g:0,b:0}` |
| `rgbToHex(r, g, b)` | RGB to hex | `rgbToHex(255,0,0)` → `"#ff0000"` |
| `rgbToHsl(r, g, b)` | RGB to HSL | `rgbToHsl(255,0,0)` → `{h:0,s:100,l:50}` |
| `hslToRgb(h, s, l)` | HSL to RGB | `hslToRgb(0,100,50)` → `{r:255,g:0,b:0}` |
| `lighten(hex, percent)` | Lighten color | `lighten('#333',20)` → `"#666666"` |
| `darken(hex, percent)` | Darken color | `darken('#666',20)` → `"#333333"` |
| `getLuminance(hex)` | Get luminance | `getLuminance('#fff')` → `1` |
| `isLightColor(hex)` | Check if light | `isLightColor('#fff')` → `"light"` |

### Date Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `formatDate(date, format)` | Format date | `formatDate(date,'YYYY-MM-DD')` → `"2024-01-01"` |
| `addTime(date, amount, unit)` | Add time | `addTime(date,7,'days')` → `Date + 7 days` |
| `subtractTime(date, amount, unit)` | Subtract time | `subtractTime(date,1,'year')` → `Date - 1 year` |
| `dateDiff(date1, date2, unit)` | Date difference | `dateDiff(d1,d2,'days')` → `7` |
| `isToday(date)` | Check if today | `isToday(new Date())` → `true` |
| `isPast(date)` | Check if past | `isPast(oldDate)` → `true` |
| `isFuture(date)` | Check if future | `isFuture(futureDate)` → `true` |
| `getRelativeTime(date)` | Relative time | `getRelativeTime(past)` → `"2 hours ago"` |
| `isLeapYear(year)` | Check leap year | `isLeapYear(2024)` → `true` |
| `getDaysInMonth(year, month)` | Days in month | `getDaysInMonth(2024,2)` → `29` |

### Function Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `debounce(func, delay)` | Debounce function | `debounce(fn,300)` |
| `throttle(func, limit)` | Throttle function | `throttle(fn,100)` |
| `memoize(func, resolver)` | Memoize function | `memoize(expensiveFn)` |
| `once(func)` | Run once | `once(initFn)` |
| `partial(func, ...args)` | Partial application | `partial(add,5)` |
| `flip(func)` | Flip arguments | `flip(subtract)` |
| `negate(func)` | Negate result | `negate(isEven)` |
| `compose(...funcs)` | Compose functions | `compose(f,g)` |
| `pipe(...funcs)` | Pipe functions | `pipe(f,g)` |
| `time(func)` | Measure execution time | `time(expensiveFn)` |
| `retry(func, times, delay)` | Retry on failure | `retry(asyncFn,3,1000)` |

## 🏗️ Modular Imports

You can import specific categories for better tree-shaking:

```javascript
// Import everything
const quickUtils = require('quick-utils-lib');

// Import specific category
const { string, array, math } = require('quick-utils-lib');

// Use category methods
console.log(string.capitalize('hello'));
console.log(array.chunk([1,2,3,4], 2));
console.log(math.isPrime(17));
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Performance

Run the included benchmarks to test performance:

```bash
# Run basic benchmarks
npm run benchmark

# Run performance comparisons
node benchmark/performance.js
```

## 📖 Examples

Check out the examples directory for comprehensive usage examples:

```bash
# Basic usage examples
npm run example:basic

# Advanced usage examples
npm run example:advanced
```

## 🔧 TypeScript Support

Full TypeScript definitions are included:

```typescript
import quickUtils from 'quick-utils-lib';

// Full type safety
const result: string = quickUtils.capitalize('hello');
const isValid: boolean = quickUtils.isEmail('test@example.com');
```

## 📝 Changelog

### v1.0.5
- 🎉 Initial release with 50+ utility functions
- ✨ 8 utility categories: string, array, math, object, validation, color, date, function
- 📝 Full TypeScript support
- 🧪 Comprehensive test suite
- 📚 Complete documentation and examples
- ⚡ Performance benchmarks
- 🛡️ Input validation and error handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **npm**: https://www.npmjs.com/package/quick-utils-lib
- **GitHub**: https://github.com/roystondz/quick-utils-lib
- **Issues**: https://github.com/roystondz/quick-utils-lib/issues
- **Documentation**: https://github.com/roystondz/quick-utils-lib/blob/main/README.md

## 🙏 Acknowledgments

- Inspired by popular utility libraries like Lodash and Underscore.js
- Built with modern JavaScript best practices
- Optimized for performance and developer experience

---

**Made with ❤️ by [Roy D'Souza](https://github.com/roystondz)**
