function narcissistic (value) {
  var arr = String(value).split('');
  var len = arr.length;
  arr = arr.map(function (val) {
      return Math.pow(parseInt(val), len);
  });
  
  if (len === 1) {
    return true;
  } else {
    var sum = arr.reduce(function (a, b) {
      return a + b;
    });
    if (sum !== value) {
      return false;
    }
  }
  return true;
}
