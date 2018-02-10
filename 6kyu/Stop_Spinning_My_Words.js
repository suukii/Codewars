function spinWords(str){
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  return arr.join(" ");
}
