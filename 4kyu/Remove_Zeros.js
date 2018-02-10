function removeZeros(array) {
  if (array.length === 0) {
    return array;
  }
  
  var z = 0;
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === 0 || array[i] === "0") {
      z++;
      var end = array[i];
      for (var j = i; j < len; j++) {
        array[j] = array[j + 1];
      }
      array[len - 1] = end;
      i--;
    }
    if (i + 1 + z >= len) {
      return array;
    }
  }
}
