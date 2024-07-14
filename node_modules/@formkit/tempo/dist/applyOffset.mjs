// src/applyOffset.ts
import { date } from "./date.mjs";
import { fixedLengthByOffset, offsetToMins } from "./common.mjs";
function applyOffset(dateInput, offset = "+00:00") {
  const d = date(dateInput);
  const token = (() => {
    switch (fixedLengthByOffset(offset)) {
      case 5:
        return "ZZ";
      case 6:
        return "Z";
    }
  })();
  const timeDiffInMins = offsetToMins(offset, token);
  return new Date(d.getTime() + timeDiffInMins * 1e3 * 60);
}
export {
  applyOffset
};
//# sourceMappingURL=applyOffset.mjs.map