// src/removeOffset.ts
import { applyOffset } from "./applyOffset.mjs";
function removeOffset(dateInput, offset = "+00:00") {
  const positive = offset.slice(0, 1) === "+";
  return applyOffset(
    dateInput,
    offset.replace(positive ? "+" : "-", positive ? "-" : "+")
  );
}
export {
  removeOffset
};
//# sourceMappingURL=removeOffset.mjs.map