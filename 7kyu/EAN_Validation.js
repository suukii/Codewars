function validateEAN(eanCode) {
  var digits = eanCode.split("");
  var checkSum = digits[digits.length - 1];
  var sum = 0;
  
  for (var i = 0; i < digits.length - 1; i += 2) {
    sum += digits[i] * 1 + digits[i + 1] * 3;
  }
  sum = (sum % 10) === 0 ? 0 : 10 - (sum % 10);
  
  return sum == checkSum;
}
