// src/diffYears.ts
import { diffMonths } from "./diffMonths.mjs";
function diffYears(dateA, dateB) {
  const r = Math.trunc(diffMonths(dateA, dateB) / 12);
  return r == 0 ? 0 : r;
}
export {
  diffYears
};
//# sourceMappingURL=diffYears.mjs.map