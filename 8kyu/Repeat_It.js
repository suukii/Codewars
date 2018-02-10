var repeatIt = function(str, n) {
  if ((typeof str) === "string") {
    var res = "";
    for (var i = 1; i <= n; i++) {
      res += str;
    }
    return res;
  }
  else {
    return "Not a string";
  }
}
