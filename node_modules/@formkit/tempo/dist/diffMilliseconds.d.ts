import { DateInput } from './types.js';

/**
 * Returns the difference between 2 dates in milliseconds.
 * @param dateA A date to compare with the right date
 * @param dateB A date to compare with the left date
 */
declare function diffMilliseconds(dateA: DateInput, dateB: DateInput): number;

export { diffMilliseconds };
