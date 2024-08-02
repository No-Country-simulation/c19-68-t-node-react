// src/diffMonths.ts
import { date } from "./date.mjs";
import { monthDays } from "./monthDays.mjs";
function diffMonths(dateA, dateB) {
  const l = date(dateA);
  const r = date(dateB);
  if (l < r) {
    const rs = diffMonths(r, l);
    return rs == 0 ? 0 : -rs;
  }
  let months = (l.getFullYear() - r.getFullYear()) * 12 + (l.getMonth() - r.getMonth());
  const ld = l.getDate();
  const rd = r.getDate();
  if (ld < rd) {
    const lm = monthDays(l);
    if (!(lm == ld && lm < rd)) {
      months--;
    }
  }
  return months == 0 ? 0 : months;
}
export {
  diffMonths
};
//# sourceMappingURL=diffMonths.mjs.map