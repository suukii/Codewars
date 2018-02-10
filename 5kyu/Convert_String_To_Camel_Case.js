//solution 1
function toCamelCase(str){
  if (!str) { return "";}
  var arr = str.split(str.indexOf("-") !== -1 ? "-" : "_");
  var change = arr.slice(1).map(function (ele) {
    return ele[0].toUpperCase() + ele.slice(1);
  });
  return arr[0] + change.join("");
}


//solution 2
function toCamelCase(str){
  if (!str) { return "";}

  function lowerToUpper (match, p1) {
    return p1.toUpperCase();
  }
  return str.replace(/[-_](\w)/gi, lowerToUpper);
}
