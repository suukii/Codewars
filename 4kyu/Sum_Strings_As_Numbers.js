function sumStrings(a,b) {
  if (a === "") {
    a = "0";
  }
  if (b === "") {
    b = "0";
  }
  if (a.length <= 15 && b.length <= 15) {
    return String(parseInt(a) + parseInt(b));
  }
  
  var arr1 = a.split("");
  var arr2 = b.split("");
  var sum = [];

  if (arr1.length > arr2.length) {
    for (var i = arr1.length - 1; i >= 0; i--) {
      sum.unshift(parseInt(arr1[i]) + (arr2[i - (arr1.length - arr2.length)] ? parseInt(arr2[i - (arr1.length - arr2.length)]) : 0));
    }
  }
  else if (arr1.length < arr2.length) {
    for (var i = arr2.length - 1; i >= 0; i--) {
      sum.unshift(parseInt(arr2[i]) + (arr1[i - (arr2.length - arr1.length)] ? parseInt(arr1[i - (arr2.length - arr1.length)]) : 0));
    }
  }
  else if (arr1.length === arr2.length) {
    for (var i = 0; i < arr2.length; i++) {
      sum.push(parseInt(arr1[i]) + parseInt(arr2[i]));
    }
  }
  
  for (var i = sum.length - 1; i > 0; i--) {
    if (sum[i] > 9) {
      sum[i - 1] = sum[i - 1] + Math.floor(sum[i] / 10);
      sum[i] = sum[i] % 10;
    }
  }
  return sum.join("").replace(/^0*/, "");
}
