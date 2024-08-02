// src/diffMinutes.ts
import { diffMilliseconds } from "./diffMilliseconds.mjs";
import { diffRound } from "./diffRound.mjs";
function diffMinutes(dateA, dateB, roundingMethod) {
  return diffRound(diffMilliseconds(dateA, dateB) / 6e4, roundingMethod);
}
export {
  diffMinutes
};
//# sourceMappingURL=diffMinutes.mjs.map