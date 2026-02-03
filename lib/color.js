/**
 * Color utility functions with input validation and error handling
 */

/**
 * Converts hex color to RGB object
 * @param {string} hex - Hex color string
 * @returns {Object|null} RGB object or null if invalid
 * @throws {TypeError} If input is not a string
 */
function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Converts RGB values to hex color
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} Hex color string
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function rgbToHex(r, g, b) {
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    throw new TypeError('Expected numbers for RGB values');
  }
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new RangeError('RGB values must be between 0 and 255');
  }
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Converts RGB to HSL
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {Object} HSL object
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function rgbToHsl(r, g, b) {
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    throw new TypeError('Expected numbers for RGB values');
  }
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new RangeError('RGB values must be between 0 and 255');
  }
  
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Converts HSL to RGB
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {Object} RGB object
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function hslToRgb(h, s, l) {
  if (typeof h !== 'number' || typeof s !== 'number' || typeof l !== 'number') {
    throw new TypeError('Expected numbers for HSL values');
  }
  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
    throw new RangeError('H: 0-360, S: 0-100, L: 0-100');
  }
  
  h /= 360;
  s /= 100;
  l /= 100;
  
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

/**
 * Lightens a color by percentage
 * @param {string} hex - Hex color string
 * @param {number} percent - Percentage to lighten (0-100)
 * @returns {string} Lightened hex color
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function lighten(hex, percent) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string for hex color');
  }
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new RangeError('Percent must be between 0 and 100');
  }
  
  const rgb = hexToRgb(hex);
  if (!rgb) throw new Error('Invalid hex color');
  
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hsl.l = Math.min(100, hsl.l + percent);
  
  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

/**
 * Darkens a color by percentage
 * @param {string} hex - Hex color string
 * @param {number} percent - Percentage to darken (0-100)
 * @returns {string} Darkened hex color
 * @throws {TypeError|RangeError} If inputs are invalid
 */
function darken(hex, percent) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string for hex color');
  }
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new RangeError('Percent must be between 0 and 100');
  }
  
  const rgb = hexToRgb(hex);
  if (!rgb) throw new Error('Invalid hex color');
  
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hsl.l = Math.max(0, hsl.l - percent);
  
  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

/**
 * Gets the luminance of a color
 * @param {string} hex - Hex color string
 * @returns {number} Luminance value (0-1)
 * @throws {TypeError} If input is not a string
 */
function getLuminance(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string for hex color');
  }
  
  const rgb = hexToRgb(hex);
  if (!rgb) throw new Error('Invalid hex color');
  
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Checks if color is light or dark
 * @param {string} hex - Hex color string
 * @returns {string} 'light' or 'dark'
 * @throws {TypeError} If input is not a string
 */
function isLightColor(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string for hex color');
  }
  return getLuminance(hex) > 0.5 ? 'light' : 'dark';
}

module.exports = {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  lighten,
  darken,
  getLuminance,
  isLightColor
};
