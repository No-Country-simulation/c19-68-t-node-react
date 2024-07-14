// src/diffMilliseconds.ts
import { date } from "./date.mjs";
function diffMilliseconds(dateA, dateB) {
  const left = date(dateA);
  const right = date(dateB);
  return +left - +right;
}
export {
  diffMilliseconds
};
//# sourceMappingURL=diffMilliseconds.mjs.map