function getMiddle(s) {
  var len = s.length;
  return (len & 1) ? s[Math.floor(len / 2)] : s[len / 2 - 1] + s[len / 2];
}
