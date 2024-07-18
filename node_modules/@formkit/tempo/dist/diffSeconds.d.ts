import { DiffRoundingMethod } from './diffRound.js';
import { DateInput } from './types.js';

/**
 * Returns the difference between 2 dates in seconds.
 * @param dateA A date to compare with the right date
 * @param dateB A date to compare with the left date
 * @param roundingMethod the rounding method to use, default: trunc
 */
declare function diffSeconds(dateA: DateInput, dateB: DateInput, roundingMethod?: DiffRoundingMethod): number;

export { diffSeconds };
