# Quick Utils

A comprehensive utility library for common JavaScript operations including string manipulation, array operations, math functions, object utilities, validation, and color conversions.

## Installation

```bash
npm install quick-utils
```

## Usage

```javascript
const {
  capitalize, reverseString, truncate, isPalindrome,
  chunk, unique, shuffle,
  random, clamp, isEven, isOdd,
  pick, omit, isEmpty,
  isEmail, isURL, isPhone,
  hexToRgb, rgbToHex
} = require('quick-utils');

// String utilities
console.log(capitalize('hello')); // "Hello"
console.log(reverseString('world')); // "dlrow"
console.log(truncate('Hello World', 5)); // "He..."
console.log(isPalindrome('racecar')); // true

// Array utilities
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
console.log(shuffle([1, 2, 3])); // [3, 1, 2] (random order)

// Math utilities
console.log(random(1, 10)); // Random number between 1-10
console.log(clamp(5, 1, 10)); // 5
console.log(isEven(4)); // true
console.log(isOdd(3)); // true

// Object utilities
console.log(pick({a: 1, b: 2, c: 3}, ['a', 'c'])); // {a: 1, c: 3}
console.log(omit({a: 1, b: 2, c: 3}, ['b'])); // {a: 1, c: 3}
console.log(isEmpty({})); // true

// Validation utilities
console.log(isEmail('test@example.com')); // true
console.log(isURL('https://example.com')); // true
console.log(isPhone('123-456-7890')); // true

// Color utilities
console.log(hexToRgb('#ff0000')); // {r: 255, g: 0, b: 0}
console.log(rgbToHex(255, 0, 0)); // "#ff0000"
```

## API

### String Utilities

- **capitalize(str)** - Capitalizes the first letter of a string
- **reverseString(str)** - Reverses a string
- **truncate(str, length, suffix)** - Truncates a string to specified length
- **isPalindrome(str)** - Checks if a string is a palindrome

### Array Utilities

- **chunk(array, size)** - Splits array into chunks of specified size
- **unique(array)** - Returns array with unique elements
- **shuffle(array)** - Randomly shuffles array elements

### Math Utilities

- **random(min, max)** - Returns random integer between min and max
- **clamp(number, min, max)** - Clamps number within specified range
- **isEven(num)** - Checks if number is even
- **isOdd(num)** - Checks if number is odd

### Object Utilities

- **pick(obj, keys)** - Creates object with specified properties
- **omit(obj, keys)** - Creates object without specified properties
- **isEmpty(value)** - Checks if value is empty

### Validation Utilities

- **isEmail(email)** - Validates email format
- **isURL(url)** - Validates URL format
- **isPhone(phone)** - Validates phone number format

### Color Utilities

- **hexToRgb(hex)** - Converts hex color to RGB object
- **rgbToHex(r, g, b)** - Converts RGB values to hex color

## License

ISC
