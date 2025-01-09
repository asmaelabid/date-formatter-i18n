import DateFormatter from './index.js';

// Create an instance of DateFormatter
const dateFormatter = new DateFormatter('en');

// Test the format method
const formattedDate = dateFormatter.format(new Date());
console.log('Formatted Date:', formattedDate);

// Test the formatRelative method
const relativeDate = dateFormatter.formatRelative(new Date(Date.now() - 86400000)); // 1 day ago
console.log('Relative Date:', relativeDate);

// Test the formatCustomMessage method
const customMessage = dateFormatter.formatCustomMessage('Hello, {name}!', { name: 'John' });
console.log('Custom Message:', customMessage);

// Test with different locales
const dateFormatterFR = new DateFormatter('fr');
const formattedDateFR = dateFormatterFR.format(new Date());
console.log('Formatted Date (FR):', formattedDateFR);

const dateFormatterDE = new DateFormatter('de');
const formattedDateDE = dateFormatterDE.format(new Date());
console.log('Formatted Date (DE):', formattedDateDE);