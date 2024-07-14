// src/diffSeconds.ts
import { diffMilliseconds } from "./diffMilliseconds.mjs";
import { diffRound } from "./diffRound.mjs";
function diffSeconds(dateA, dateB, roundingMethod) {
  return diffRound(diffMilliseconds(dateA, dateB) / 1e3, roundingMethod);
}
export {
  diffSeconds
};
//# sourceMappingURL=diffSeconds.mjs.map