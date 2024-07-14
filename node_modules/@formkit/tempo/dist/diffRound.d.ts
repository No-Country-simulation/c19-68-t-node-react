type DiffRoundingMethod = "trunc" | "round" | "floor" | "ceil";
/**
 * Return a rounded value with the given rounding method
 * @param value the value to round
 * @param method the rounding method
 */
declare function diffRound(value: number, method?: DiffRoundingMethod): number;

export { type DiffRoundingMethod, diffRound };
