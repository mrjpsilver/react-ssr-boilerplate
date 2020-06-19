/**
 * Given a String of `n` length, truncate when over the provided `length`, appending
 * the given `suffix`, and breaking before the final `separator` inside the `length`
 * @param {String} str The string value to be truncated
 * @param {Number} length The desired length of the truncated output
 * @param {String} suffix The string to be appended to the truncated output
 * @param {String} separator The string before which truncation should occur, used to prevent clipping words
 * @returns {String} The truncated string
 */
export function truncateText (str = '', length = 100, suffix = '...', separator = ' ') {
  if (str.length > length) {
    return str.substring(0, str.lastIndexOf(separator, length)) + suffix
  } else {
    return str
  }
}
