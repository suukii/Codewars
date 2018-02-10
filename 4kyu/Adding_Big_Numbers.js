function add(a, b) {
  if (a === "") {
    a = "0";
  }
  if (b === "") {
    b = "0";
  }
  var solution = "";
  
  if (a.length <= 15 && b.length <= 15) {
    solution = String(parseInt(a) + parseInt(b));
  }
  
  var arrayA = a.split("").reverse();
  var arrayB = b.split("").reverse();
  var sumArray = [];
  
  if (arrayA.length === arrayB.length) {
    for (var i = 0; i < arrayA.length; i++) {
    	sumArray.push(parseInt(arrayA[i]) + parseInt(arrayB[i]));
    }
  }
  else if (arrayA.length > arrayB.length) {
    for (var i = 0; i < arrayA.length; i++) {
    	sumArray.push(parseInt(arrayA[i]) + (arrayB[i] ? parseInt(arrayB[i]) : 0));
    }
  }
  else if (arrayA.length < arrayB.length) {
    for (var i = 0; i < arrayB.length; i++) {
    	sumArray.push(parseInt(arrayB[i]) + (arrayA[i] ? parseInt(arrayA[i]) : 0));
    }
  }

  for (var i = 0; i < sumArray.length - 1; i++) {
    if (sumArray[i] > 9) {
      sumArray[i + 1] += Math.floor(sumArray[i] / 10);
  	  sumArray[i] %= 10;
    }	
  }
  solution = sumArray.reverse().join("");
  return solution.replace(/^0*/, "");
}
