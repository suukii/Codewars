function ipToInt32(ip){
  var arr = ip.split(".");
  var res;
  
  arr = arr.map(function (ele) {
    ele = (+ele).toString(2);
    while (ele.length < 8) {
      ele = "0" + ele;
    }
    return ele;
  });
  
  res = parseInt(arr.join(""), 2);
  return res;
}
