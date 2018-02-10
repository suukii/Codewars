function palindromize(number){
  function isPalindromic(num) {
    return num == ("" + num).split("").reduceRight((a, b) => a + b);
  }
  var count = 0;
  while (!isPalindromic(number)) {
    number += +("" + number).split("").reduceRight((a, b) => a + b);
    count++;
  }
  return count + " " + number;
}
