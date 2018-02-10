function squareDigits(num){
  return +("" + num).split("").map(n => n * n).join("");
}
