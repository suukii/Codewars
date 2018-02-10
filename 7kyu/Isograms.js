function isIsogram(str){
  if (str === '') {
    return true;
  }
  var arr = str.toLowerCase().split('');
  for (var i = 0; i < arr.length; i++) {
    if (str.toLowerCase().indexOf(arr[i]) !== -1 && str.toLowerCase().indexOf(arr[i]) !== str.toLowerCase().lastIndexOf(arr[i])) {
      return false;
    }
  }
  return true;
}
