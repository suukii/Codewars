//solution 1
function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}


//solution 2
function rowSumOddNumbers(n) {
	var row = n;
  var x = 0;
  while (n) {
    x += n - 1;
    n--;
  }
  x = x * 2 + 1;
  var total = 0;
  for (var i = 0; i < row; i++) {
    total += x;
    x += 2;
  }
  return total;
}
