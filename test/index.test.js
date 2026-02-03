const {
  capitalize, reverseString, truncate, isPalindrome,
  chunk, unique, shuffle,
  random, clamp, isEven, isOdd,
  pick, omit, isEmpty,
  isEmail, isURL, isPhone,
  hexToRgb, rgbToHex
} = require('../index');

describe('Quick Utils Package', () => {
  describe('String utilities', () => {
    test('capitalize', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('HELLO')).toBe('Hello');
      expect(capitalize('')).toBe('');
    });

    test('reverseString', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('')).toBe('');
    });

    test('truncate', () => {
      expect(truncate('Hello World', 5)).toBe('He...');
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    test('isPalindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
  });

  describe('Array utilities', () => {
    test('chunk', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3], 4)).toEqual([[1, 2, 3]]);
    });

    test('unique', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test('shuffle', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled).toHaveLength(5);
      expect(shuffled).toEqual(expect.arrayContaining(arr));
    });
  });

  describe('Math utilities', () => {
    test('random', () => {
      const num = random(1, 10);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });

    test('clamp', () => {
      expect(clamp(5, 1, 10)).toBe(5);
      expect(clamp(0, 1, 10)).toBe(1);
      expect(clamp(15, 1, 10)).toBe(10);
    });

    test('isEven and isOdd', () => {
      expect(isEven(2)).toBe(true);
      expect(isOdd(2)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isOdd(3)).toBe(true);
    });
  });

  describe('Object utilities', () => {
    test('pick', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('omit', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
    });

    test('isEmpty', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe('Validation utilities', () => {
    test('isEmail', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('invalid-email')).toBe(false);
    });

    test('isURL', () => {
      expect(isURL('https://example.com')).toBe(true);
      expect(isURL('not-a-url')).toBe(false);
    });

    test('isPhone', () => {
      expect(isPhone('123-456-7890')).toBe(true);
      expect(isPhone('(123) 456-7890')).toBe(true);
      expect(isPhone('123')).toBe(false);
    });
  });

  describe('Color utilities', () => {
    test('hexToRgb', () => {
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('ff0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#invalid')).toBeNull();
    });

    test('rgbToHex', () => {
      expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
      expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    });
  });
});
