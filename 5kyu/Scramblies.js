function scramble(str1, str2) {
  var map = {};
  for (var i in str1) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]] = 1;
  }
  for (var i in str2) {
    if (!map[str2[i]]) {
      return false;
    }
    map[str2[i]]--;
  }
  return true;
}
