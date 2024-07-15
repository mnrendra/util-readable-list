import type { Options } from './types'

/**
 * Convert the array items into plain text.
 *
 * @param {string[]} items - List of items.
 * @param {Options} options - Options for conjunction, quoting, and comma.
 *
 * @returns {string} The readable list.
 */
const main = (
  items: string[],
  {
    conj = 'and',
    quote = '',
    comma = ','
  }: Options = {}
): string => {
  // Get the items length.
  const { length } = items

  // Return an empty string if the list is empty.
  if (length < 1) {
    return ''
  }

  // Return the single item if the list contains only one item.
  if (length < 2) {
    return `${quote}${items[0]}${quote}`
  }

  // Return two items with a conjunction if the list contains only two items.
  if (length < 3) {
    return `${quote}${items[0]}${quote} ${conj} ${quote}${items[1]}${quote}`
  }

  // Return multiple items separated by commas and conjunctions if the list
  // contains more than one item.
  const firstItems = `${quote}${items.slice(0, -1).join(`${quote}${comma} ${quote}`)}${quote}`
  const lastItem = `${quote}${items.at(-1)}${quote}`
  return `${firstItems}${comma} ${conj} ${lastItem}`
}

// Export `main` as the default value.
export default main
