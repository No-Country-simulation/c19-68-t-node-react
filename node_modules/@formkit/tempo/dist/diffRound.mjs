// src/diffRound.ts
function diffRound(value, method = "trunc") {
  const r = Math[method](value);
  return r == 0 ? 0 : r;
}
export {
  diffRound
};
//# sourceMappingURL=diffRound.mjs.map