function solution(pairs){
  var k = Object.keys(pairs);
  var res = "";
  for (var i = 0; i < k.length; i++) {
    res += "," + k[i] + " = " + pairs[k[i]];
  }
  return res.slice(1);
}
