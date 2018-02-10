function validate(n){
  var arr = n.toString().split("");
  var len = arr.length;
  var sum = 0;

  //odd number of digits
  if (len & 1) {
    for (var i = 1; i < len; i += 2) {
      arr[i] *= 2;
      arr[i] = arr[i] > 9 ? arr[i] - 9 : arr[i];
    }
  }
  //even number of digits
  else {
    for (var i = 0; i < len; i += 2) {
      arr[i] *= 2;
      arr[i] = arr[i] > 9 ? arr[i] - 9 : arr[i];
    }
  }
  
  sum = arr.reduce((a, b) => parseInt(a) + parseInt(b));
  return sum % 10 === 0;
}
