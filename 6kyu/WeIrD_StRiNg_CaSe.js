function toWeirdCase(string){
  var arr = string.split(" ");
  
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").map((char, index) => index & 1 ? char : char.toUpperCase()).join("");
  }
  
  return arr.join(" ")
}
