import { DateInput } from './types.js';
import { DiffRoundingMethod } from './diffRound.js';

/**
 * Returns the difference between 2 dates in minutes.
 * @param dateA A date to compare with the right date
 * @param roundingMethod the rounding method to use, default: trunc
 */
declare function diffMinutes(dateA: DateInput, dateB: DateInput, roundingMethod?: DiffRoundingMethod): number;

export { diffMinutes };
