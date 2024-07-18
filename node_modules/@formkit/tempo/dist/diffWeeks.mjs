// src/diffWeeks.ts
import { diffMilliseconds } from "./diffMilliseconds.mjs";
import { diffRound } from "./diffRound.mjs";
function diffWeeks(dateA, dateB, roundingMethod) {
  return diffRound(
    diffMilliseconds(dateA, dateB) / 6048e5,
    // day * 7
    roundingMethod
  );
}
export {
  diffWeeks
};
//# sourceMappingURL=diffWeeks.mjs.map