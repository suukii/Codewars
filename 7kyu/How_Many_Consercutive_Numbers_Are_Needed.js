function consecutive(arr) {
  var len = arr.length;
  return len ? (Math.max(...arr) - Math.min(...arr) + 1 - len) : 0;
}
