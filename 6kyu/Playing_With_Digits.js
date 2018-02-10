function digPow(n, p){
  var powArr = String(n).split('').map(function (val, index) {
    return Math.pow(parseInt(val), (index + p));
  });
  var sum = powArr.reduce(function (a, b) {
    return a + b;
  });
  
  if ((sum / n) % 1 === 0 ) {
    return sum / n;
  } else {
    return -1;
  }
}
