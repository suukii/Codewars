function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now';
  }
  
  var res = "";
  var arr = [[Math.floor(seconds / (60 * 60 * 24) / 365), ' year'], 
             [parseInt(seconds / (60 * 60 * 24) % 365), ' day'], 
             [parseInt(seconds / (60 * 60) % 24), ' hour'], 
             [parseInt(seconds / 60 % 60), ' minute'], 
             [seconds % 60, ' second']];
  arr = arr.map(function (ele) {
    return ele[0] === 1 ? ele[0] + ele[1] : ele[0] === 0 ? 0 : ele[0] + ele[1] + 's';
  });
  arr = arr.filter(function (ele) {return ele !== 0});
  
  var len = arr.length;
  switch (len) {
    case 1:
      res = arr[0];
      break;
    case 2:
      res = arr.join(' and ');
      break;
    case 3:
    //combine these three cases
    case 4:
    case 5:
      res = arr.slice(0, len - 1).join(', ') + ' and ' + arr[len - 1];
      break;
  }
  return res;
}
