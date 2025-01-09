import { format, formatRelative } from "date-fns";
import { enUS, fr, de, ar } from "date-fns/locale";
import { IntlMessageFormat } from "intl-messageformat";

/**
 * A utility for formatting dates with i18n support.
 */
class DateFormatter {
  constructor(locale = "en") {
    this.locale = locale;
    this.localesMap = { en: enUS, fr, de, ar };
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
}

export default DateFormatter;
