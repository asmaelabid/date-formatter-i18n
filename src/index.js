const { format, formatRelative } = require("date-fns");
const { enUS, fr, de } = require("date-fns/locale");
const IntlMessageFormat = require("intl-messageformat");

/**
 * A utility for formatting dates with i18n support.
 */
class DateFormatter {
  constructor(locale = "en") {
    this.locale = locale;
    this.localesMap = { en: enUS, fr, de };
  }

  // Format a date into a specified format
  format(date, formatString = "PPP") {
    const locale = this.localesMap[this.locale] || enUS;
    return format(new Date(date), formatString, { locale });
  }

  // Format relative time (e.g., "3 days ago")
  formatRelative(date, baseDate = new Date()) {
    const locale = this.localesMap[this.locale] || enUS;
    return formatRelative(new Date(date), baseDate, { locale });
  }

  // Add custom messages for localization
  formatCustomMessage(messageTemplate, values) {
    const msgFormatter = new IntlMessageFormat(messageTemplate, this.locale);
    return msgFormatter.format(values);
  }
}

module.exports = DateFormatter;
