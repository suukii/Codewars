function prefill(n, v) {
  if (n == 0 && typeof n !== "boolean") {
      return [];
  }
  if (n > 0 && n % 1 === 0 && typeof n !== "boolean") {
      var arr = Array.apply(null, {length: n}).map(() => v);
      return arr;
  }
  throw new TypeError(`${n} is invalid`);
}
