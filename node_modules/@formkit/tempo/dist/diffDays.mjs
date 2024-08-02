// src/diffDays.ts
import { diffMilliseconds } from "./diffMilliseconds.mjs";
import { diffRound } from "./diffRound.mjs";
function diffDays(dateA, dateB, roundingMethod) {
  return diffRound(
    diffMilliseconds(dateA, dateB) / 864e5,
    // hour * 24
    roundingMethod
  );
}
export {
  diffDays
};
//# sourceMappingURL=diffDays.mjs.map