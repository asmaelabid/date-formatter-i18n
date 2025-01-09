import DateFormatter from './index.js';

// Create an instance of DateFormatter
const dateFormatter = new DateFormatter('en');

// Test the format method
const formattedDate = dateFormatter.format(new Date());
console.log('Formatted Date:', formattedDate);

// Test the formatRelative method
const relativeDate = dateFormatter.formatRelative(new Date(Date.now() - 86400000)); // 1 day ago
console.log('Relative Date:', relativeDate);

// Test with different locales
const dateFormatterFR = new DateFormatter('fr');
const formattedDateFR = dateFormatterFR.format(new Date());
console.log('Formatted Date (Fr):', formattedDateFR);

const dateFormatterAR = new DateFormatter('ar');
const formattedDateAR = dateFormatterAR.format(new Date());
console.log('Formatted Date (AR):', formattedDateAR);

const dateFormatterDE = new DateFormatter('de');
const formattedDateDE = dateFormatterDE.format(new Date());
console.log('Formatted Date (DE):', formattedDateDE);