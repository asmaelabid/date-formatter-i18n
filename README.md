# Date Formatter Localized i18n 📅

A lightweight and developer-friendly **date formatting library** with full **i18n (internationalization)** support. Easily format dates into human-readable strings, customize relative time ("3 days ago"), and create localized messages. Perfect for multilingual web and mobile applications.
[![NPM Version](https://img.shields.io/npm/v/date-formatter-i18n)](https://www.npmjs.com/package/date-formatter-i18n) 
[![License](https://img.shields.io/npm/l/date-formatter-i18n)](https://github.com/asmaelabid/date-formatter-i18n/blob/main/LICENSE)

---

## 💡 Why Choose date-formatter-i18n?
If you're looking for a lightweight, highly customizable, and i18n-ready date formatter, this package simplifies date handling for multilingual applications. It's designed with developers in mind, offering essential features without the bloat.

---

## ✨ Features
- 📆 **Date Formatting**: Format dates into readable strings for different locales.
- 🌍 **Localization Support**: Supports multiple languages (English, French, German, and more).
- ⏳ **Relative Time**: Display relative time like "3 days ago" or "in 5 minutes."
- 🛠️ **Custom Messages**: Use dynamic templates for localization.

---

## 🚀 Installation

Install the package via NPM or Yarn:

```bash
npm install date-formatter-i18n
# or
yarn add date-formatter-i18n
```

## 📚 Usage
  - Import the Library
```js
import DateFormatter from 'date-formatter-i18n';

// Create an instance of DateFormatter
const dateFormatter = new DateFormatter('en');
```

  - Format Dates
```js
const formattedDate = dateFormatter.format('2023-12-25'); // Output: "December 25, 2023"
```
  - Format Relative Time
```js
const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
console.log(dateFormatter.formatRelative(threeDaysAgo)); // Output: "3 days ago"
```
---

## 🌐 Supported Locales
  - English (Default)
  - French
  - German
  - Arabic

---

## 🛠️ API Reference
```js
new DateFormatter(locale: string)
```
- Creates a new DateFormatter instance.

- locale: A string representing the language (e.g., en, fr, de, ar).

```js
.format(date: string | Date, formatString: string)
```
- Formats a date using the specified format string.

- date: The date to format (ISO string or Date object).
- formatString: Optional. A date-fns format string (default: PPP).
```js
.formatRelative(date: string | Date, baseDate: string | Date)
```
- Formats a date relative to another date.
- date: The target date.
- baseDate: Optional. The date to compare against (default: new Date()).

---

## 🏗️ Contributing
**Contributions are welcome! Please follow these steps:**

  - Fork the repository.
  - Create a new branch for your feature or bug fix.
  - Submit a pull request with your changes.

