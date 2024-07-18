import { DateInput } from './types.js';

/**
 * Returns the difference between 2 dates in years.
 * @param dateA A date to compare with the dateB date
 * @param dateB A date to compare with the dateA date
 */
declare function diffYears(dateA: DateInput, dateB: DateInput): number;

export { diffYears };
