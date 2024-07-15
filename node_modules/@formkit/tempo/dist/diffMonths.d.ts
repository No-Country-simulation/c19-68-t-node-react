import { DateInput } from './types.js';

/**
 * Returns the difference between 2 dates in months.
 * @param dateA A date to compare with the dateB date
 * @param dateB A date to compare with the dateA date
 */
declare function diffMonths(dateA: DateInput, dateB: DateInput): number;

export { diffMonths };
