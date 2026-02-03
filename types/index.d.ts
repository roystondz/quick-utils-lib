/**
 * TypeScript definitions for Quick Utils
 */

// String utilities
export function capitalize(str: string): string;
export function reverseString(str: string): string;
export function truncate(str: string, length: number, suffix?: string): string;
export function isPalindrome(str: string): boolean;
export function camelCase(str: string): string;
export function kebabCase(str: string): string;
export function snakeCase(str: string): string;
export function padString(str: string, length: number, chars?: string): string;

// Array utilities
export function chunk<T>(array: T[], size: number): T[][];
export function unique<T>(array: T[]): T[];
export function shuffle<T>(array: T[]): T[];
export function flatten<T>(array: any[], depth?: number): T[];
export function difference<T>(array1: T[], array2: T[]): T[];
export function intersection<T>(array1: T[], array2: T[]): T[];
export function compact<T>(array: (T | null | undefined | false | 0 | '')[]): T[];
export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]>;
export function groupBy<T>(array: T[], key: (item: T) => string): Record<string, T[]>;

// Math utilities
export function random(min: number, max: number): number;
export function clamp(number: number, min: number, max: number): number;
export function isEven(num: number): boolean;
export function isOdd(num: number): boolean;
export function isPrime(num: number): boolean;
export function factorial(num: number): number;
export function gcd(a: number, b: number): number;
export function lcm(a: number, b: number): number;
export function inRange(num: number, start: number, end: number, inclusive?: boolean): boolean;

// Object utilities
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
export function isEmpty(value: any): boolean;
export function deepClone<T>(obj: T): T;
export function deepMerge<T extends object>(...objects: T[]): T;
export function deepEqual(obj1: any, obj2: any): boolean;
export function get(obj: any, path: string, defaultValue?: any): any;
export function set(obj: any, path: string, value: any): any;

// Validation utilities
export function isEmail(email: string): boolean;
export function isURL(url: string): boolean;
export function isPhone(phone: string): boolean;
export function isCreditCard(cardNumber: string): boolean;
export function isIPv4(ip: string): boolean;
export function isIPv6(ip: string): boolean;
export function isMAC(mac: string): boolean;
export function isHexColor(color: string): boolean;
export function isStrongPassword(password: string, options?: StrongPasswordOptions): boolean;
export function isJSON(str: string): boolean;

// Color utilities
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null;
export function rgbToHex(r: number, g: number, b: number): string;
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number };
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number };
export function lighten(hex: string, percent: number): string;
export function darken(hex: string, percent: number): string;
export function getLuminance(hex: string): number;
export function isLightColor(hex: string): 'light' | 'dark';

// Date utilities
export function formatDate(date: Date | string | number, format?: string): string;
export function addTime(date: Date | string | number, amount: number, unit: TimeUnit): Date;
export function subtractTime(date: Date | string | number, amount: number, unit: TimeUnit): Date;
export function dateDiff(date1: Date | string | number, date2: Date | string | number, unit?: TimeUnit): number;
export function isToday(date: Date | string | number): boolean;
export function isPast(date: Date | string | number): boolean;
export function isFuture(date: Date | string | number): boolean;
export function getRelativeTime(date: Date | string | number): string;
export function isLeapYear(year: number): boolean;
export function getDaysInMonth(year: number, month: number): number;

// Function utilities
export function debounce<T extends (...args: any[]) => any>(func: T, delay: number, immediate?: boolean): T;
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T;
export function memoize<T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => string): T;
export function once<T extends (...args: any[]) => any>(func: T): T;
export function partial<T extends (...args: any[]) => any>(func: T, ...args: any[]): T;
export function flip<T extends (...args: any[]) => any>(func: T): T;
export function negate<T extends (...args: any[]) => any>(func: T): T;
export function compose<T>(...funcs: ((arg: T) => T)[]): (arg: T) => T;
export function pipe<T>(...funcs: ((arg: T) => T)[]): (arg: T) => T;
export function time<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => { result: ReturnType<T>; time: number };
export function retry<T extends (...args: any[]) => Promise<any>>(func: T, times?: number, delay?: number): T;

// Utility categories
export const string: {
  capitalize: typeof capitalize;
  reverseString: typeof reverseString;
  truncate: typeof truncate;
  isPalindrome: typeof isPalindrome;
  camelCase: typeof camelCase;
  kebabCase: typeof kebabCase;
  snakeCase: typeof snakeCase;
  padString: typeof padString;
};

export const array: {
  chunk: typeof chunk;
  unique: typeof unique;
  shuffle: typeof shuffle;
  flatten: typeof flatten;
  difference: typeof difference;
  intersection: typeof intersection;
  compact: typeof compact;
  groupBy: typeof groupBy;
};

export const math: {
  random: typeof random;
  clamp: typeof clamp;
  isEven: typeof isEven;
  isOdd: typeof isOdd;
  isPrime: typeof isPrime;
  factorial: typeof factorial;
  gcd: typeof gcd;
  lcm: typeof lcm;
  inRange: typeof inRange;
};

export const object: {
  pick: typeof pick;
  omit: typeof omit;
  isEmpty: typeof isEmpty;
  deepClone: typeof deepClone;
  deepMerge: typeof deepMerge;
  deepEqual: typeof deepEqual;
  get: typeof get;
  set: typeof set;
};

export const validation: {
  isEmail: typeof isEmail;
  isURL: typeof isURL;
  isPhone: typeof isPhone;
  isCreditCard: typeof isCreditCard;
  isIPv4: typeof isIPv4;
  isIPv6: typeof isIPv6;
  isMAC: typeof isMAC;
  isHexColor: typeof isHexColor;
  isStrongPassword: typeof isStrongPassword;
  isJSON: typeof isJSON;
};

export const color: {
  hexToRgb: typeof hexToRgb;
  rgbToHex: typeof rgbToHex;
  rgbToHsl: typeof rgbToHsl;
  hslToRgb: typeof hslToRgb;
  lighten: typeof lighten;
  darken: typeof darken;
  getLuminance: typeof getLuminance;
  isLightColor: typeof isLightColor;
};

export const date: {
  formatDate: typeof formatDate;
  addTime: typeof addTime;
  subtractTime: typeof subtractTime;
  dateDiff: typeof dateDiff;
  isToday: typeof isToday;
  isPast: typeof isPast;
  isFuture: typeof isFuture;
  getRelativeTime: typeof getRelativeTime;
  isLeapYear: typeof isLeapYear;
  getDaysInMonth: typeof getDaysInMonth;
};

export const func: {
  debounce: typeof debounce;
  throttle: typeof throttle;
  memoize: typeof memoize;
  once: typeof once;
  partial: typeof partial;
  flip: typeof flip;
  negate: typeof negate;
  compose: typeof compose;
  pipe: typeof pipe;
  time: typeof time;
  retry: typeof retry;
};

// Type definitions
export type TimeUnit = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

export interface StrongPasswordOptions {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
}

// Default export
declare const quickUtils: {
  // All functions exported individually
  capitalize: typeof capitalize;
  reverseString: typeof reverseString;
  truncate: typeof truncate;
  isPalindrome: typeof isPalindrome;
  camelCase: typeof camelCase;
  kebabCase: typeof kebabCase;
  snakeCase: typeof snakeCase;
  padString: typeof padString;
  chunk: typeof chunk;
  unique: typeof unique;
  shuffle: typeof shuffle;
  flatten: typeof flatten;
  difference: typeof difference;
  intersection: typeof intersection;
  compact: typeof compact;
  groupBy: typeof groupBy;
  random: typeof random;
  clamp: typeof clamp;
  isEven: typeof isEven;
  isOdd: typeof isOdd;
  isPrime: typeof isPrime;
  factorial: typeof factorial;
  gcd: typeof gcd;
  lcm: typeof lcm;
  inRange: typeof inRange;
  pick: typeof pick;
  omit: typeof omit;
  isEmpty: typeof isEmpty;
  deepClone: typeof deepClone;
  deepMerge: typeof deepMerge;
  deepEqual: typeof deepEqual;
  get: typeof get;
  set: typeof set;
  isEmail: typeof isEmail;
  isURL: typeof isURL;
  isPhone: typeof isPhone;
  isCreditCard: typeof isCreditCard;
  isIPv4: typeof isIPv4;
  isIPv6: typeof isIPv6;
  isMAC: typeof isMAC;
  isHexColor: typeof isHexColor;
  isStrongPassword: typeof isStrongPassword;
  isJSON: typeof isJSON;
  hexToRgb: typeof hexToRgb;
  rgbToHex: typeof rgbToHex;
  rgbToHsl: typeof rgbToHsl;
  hslToRgb: typeof hslToRgb;
  lighten: typeof lighten;
  darken: typeof darken;
  getLuminance: typeof getLuminance;
  isLightColor: typeof isLightColor;
  formatDate: typeof formatDate;
  addTime: typeof addTime;
  subtractTime: typeof subtractTime;
  dateDiff: typeof dateDiff;
  isToday: typeof isToday;
  isPast: typeof isPast;
  isFuture: typeof isFuture;
  getRelativeTime: typeof getRelativeTime;
  isLeapYear: typeof isLeapYear;
  getDaysInMonth: typeof getDaysInMonth;
  debounce: typeof debounce;
  throttle: typeof throttle;
  memoize: typeof memoize;
  once: typeof once;
  partial: typeof partial;
  flip: typeof flip;
  negate: typeof negate;
  compose: typeof compose;
  pipe: typeof pipe;
  time: typeof time;
  retry: typeof retry;
  // Categories
  string: typeof string;
  array: typeof array;
  math: typeof math;
  object: typeof object;
  validation: typeof validation;
  color: typeof color;
  date: typeof date;
  function: typeof func;
};

export default quickUtils;
