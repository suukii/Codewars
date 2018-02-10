//solution 1
var breakChocolate = function(n, m) {
 var area = n * m;
 var totalBreak = area - 1;
 return totalBreak <= 0 ? 0 : totalBreak;
};


//solution 2
var breakChocolate = function(n, m) {
  if (n === 1 & m === 1 || n === 0 || m === 0) {
    return 0;
  }
  return n * m - 1;
};
