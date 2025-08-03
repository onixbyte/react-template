import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

/**
 * Dayjs with `Duration` plugin.
 */
export default dayjs

/**
 * Formats a given datetime string into a standardised "YYYY-MM-DD HH:mm:ss" format.
 *
 * This function utilises the [dayjs](https://day.js.org/) library for parsing and formatting.
 *
 * @param {string} datetime the datetime string to format
 * @returns {string} the formatted datetime string in `YYYY-MM-DD HH:mm:ss` format
 */
function formatDatetime (datetime: string): string {
  return dayjs(datetime).format("YYYY-MM-DD HH:mm:ss")
}

export { formatDatetime }