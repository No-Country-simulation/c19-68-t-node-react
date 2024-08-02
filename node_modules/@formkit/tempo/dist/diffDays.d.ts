import { DateInput } from './types.js';
import { DiffRoundingMethod } from './diffRound.js';

/**
 * Returns the difference between 2 dates in days.
 * @param dateA A date to compare with the right date
 * @param dateB A date to compare with the left date
 * @param roundingMethod the rounding method to use, default: trunc
 */
declare function diffDays(dateA: DateInput, dateB: DateInput, roundingMethod?: DiffRoundingMethod): number;

export { diffDays };
