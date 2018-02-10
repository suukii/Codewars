function getMissingElement(superImportantArray){
  var res;
  superImportantArray.sort((a, b) => b - a);
  if (superImportantArray[0] !== 9) {
    res = 9;
  }
  else if (superImportantArray[superImportantArray.length - 1] !== 0) {
    res = 0;
  }
  else {
    for (var i = 0; i < superImportantArray.length; i++) {
      if (superImportantArray[i] - superImportantArray[i + 1] > 1) {
        res = superImportantArray[i] - 1;
      }
    }
  }
  return res;
}
