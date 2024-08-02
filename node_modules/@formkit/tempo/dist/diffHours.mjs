// src/diffHours.ts
import { diffMilliseconds } from "./diffMilliseconds.mjs";
import { diffRound } from "./diffRound.mjs";
function diffHours(dateA, dateB, roundingMethod) {
  return diffRound(
    diffMilliseconds(dateA, dateB) / 36e5,
    // 1000 * 60 * 60
    roundingMethod
  );
}
export {
  diffHours
};
//# sourceMappingURL=diffHours.mjs.map