function iqTest(numbers){
  var arr = numbers.split(' ');
  if ((arr[0] % 2 === 0 && arr[1] % 2 === 0) || (arr[1] % 2 === 0 && arr[2] % 2 === 0) || (arr[0] % 2 === 0 && arr[2] % 2 === 0)) {
    var uniq = arr.filter(function (val) {return val % 2 !== 0}).join('');
  } else {
    var uniq = arr.filter(function (val) {return val % 2 === 0}).join('');
  }
  return arr.indexOf(uniq) + 1;
}
