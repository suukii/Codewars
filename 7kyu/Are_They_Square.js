var isSquare = function(arr){
  if (arr.length) {
    return arr.every(function (ele) {
      return (Math.sqrt(ele) % 1 === 0);
    });
  }
}
