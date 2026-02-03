/**
 * Date utility functions with input validation and error handling
 */

/**
 * Formats date to specified format
 * @param {Date|string|number} date - Date to format
 * @param {string} format - Format string (YYYY-MM-DD, MM/DD/YYYY, etc.)
 * @returns {string} Formatted date string
 * @throws {TypeError} If inputs are invalid
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  if (typeof format !== 'string') {
    throw new TypeError('Expected a string for format');
  }
  
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new TypeError('Invalid date');
  }
  
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Adds time to a date
 * @param {Date|string|number} date - Original date
 * @param {number} amount - Amount to add
 * @param {string} unit - Unit (years, months, days, hours, minutes, seconds)
 * @returns {Date} New date with added time
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function addTime(date, amount, unit) {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new TypeError('Invalid date');
  }
  if (typeof amount !== 'number') {
    throw new TypeError('Expected a number for amount');
  }
  if (typeof unit !== 'string') {
    throw new TypeError('Expected a string for unit');
  }
  
  const validUnits = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
  if (!validUnits.includes(unit)) {
    throw new RangeError(`Unit must be one of: ${validUnits.join(', ')}`);
  }
  
  const result = new Date(d);
  
  switch (unit) {
    case 'years':
      result.setFullYear(result.getFullYear() + amount);
      break;
    case 'months':
      result.setMonth(result.getMonth() + amount);
      break;
    case 'days':
      result.setDate(result.getDate() + amount);
      break;
    case 'hours':
      result.setHours(result.getHours() + amount);
      break;
    case 'minutes':
      result.setMinutes(result.getMinutes() + amount);
      break;
    case 'seconds':
      result.setSeconds(result.getSeconds() + amount);
      break;
  }
  
  return result;
}

/**
 * Subtracts time from a date
 * @param {Date|string|number} date - Original date
 * @param {number} amount - Amount to subtract
 * @param {string} unit - Unit (years, months, days, hours, minutes, seconds)
 * @returns {Date} New date with subtracted time
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function subtractTime(date, amount, unit) {
  return addTime(date, -amount, unit);
}

/**
 * Gets difference between two dates
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @param {string} unit - Unit (years, months, days, hours, minutes, seconds, milliseconds)
 * @returns {number} Difference in specified unit
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function dateDiff(date1, date2, unit = 'milliseconds') {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    throw new TypeError('Invalid date');
  }
  if (typeof unit !== 'string') {
    throw new TypeError('Expected a string for unit');
  }
  
  const validUnits = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
  if (!validUnits.includes(unit)) {
    throw new RangeError(`Unit must be one of: ${validUnits.join(', ')}`);
  }
  
  const diffMs = d2.getTime() - d1.getTime();
  
  switch (unit) {
    case 'years':
      return diffMs / (1000 * 60 * 60 * 24 * 365.25);
    case 'months':
      return diffMs / (1000 * 60 * 60 * 24 * 30.44);
    case 'days':
      return diffMs / (1000 * 60 * 60 * 24);
    case 'hours':
      return diffMs / (1000 * 60 * 60);
    case 'minutes':
      return diffMs / (1000 * 60);
    case 'seconds':
      return diffMs / 1000;
    case 'milliseconds':
      return diffMs;
    default:
      return diffMs;
  }
}

/**
 * Checks if a date is today
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} True if date is today
 * @throws {TypeError} If input is invalid
 */
function isToday(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new TypeError('Invalid date');
  }
  
  const today = new Date();
  return d.toDateString() === today.toDateString();
}

/**
 * Checks if a date is in the past
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} True if date is in the past
 * @throws {TypeError} If input is invalid
 */
function isPast(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new TypeError('Invalid date');
  }
  return d < new Date();
}

/**
 * Checks if a date is in the future
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} True if date is in the future
 * @throws {TypeError} If input is invalid
 */
function isFuture(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new TypeError('Invalid date');
  }
  return d > new Date();
}

/**
 * Gets relative time string (e.g., "2 hours ago")
 * @param {Date|string|number} date - Date to get relative time for
 * @returns {string} Relative time string
 * @throws {TypeError} If input is invalid
 */
function getRelativeTime(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    throw new TypeError('Invalid date');
  }
  
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSeconds < 60) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  
  return formatDate(d, 'MMM DD, YYYY');
}

/**
 * Checks if a year is a leap year
 * @param {number} year - Year to check
 * @returns {boolean} True if leap year
 * @throws {TypeError} If input is not a number
 */
function isLeapYear(year) {
  if (typeof year !== 'number') {
    throw new TypeError('Expected a number for year');
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Gets days in month
 * @param {number} year - Year
 * @param {number} month - Month (1-12)
 * @returns {number} Number of days in month
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function getDaysInMonth(year, month) {
  if (typeof year !== 'number') {
    throw new TypeError('Expected a number for year');
  }
  if (typeof month !== 'number') {
    throw new TypeError('Expected a number for month');
  }
  if (month < 1 || month > 12) {
    throw new RangeError('Month must be between 1 and 12');
  }
  
  return new Date(year, month, 0).getDate();
}

module.exports = {
  formatDate,
  addTime,
  subtractTime,
  dateDiff,
  isToday,
  isPast,
  isFuture,
  getRelativeTime,
  isLeapYear,
  getDaysInMonth
};
