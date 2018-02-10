function dominator(arr) {
   var o = {};
   for (var i = 0; i < arr.length; i++) {
     if (o[arr[i]]) {
       o[arr[i]] += 1;
     }
     else {
       o[arr[i]] = 1;
     }
   }
   var newArr = Object.keys(o);
   var res;
   for (var i = 0; i < newArr.length; i++) {
     if (o[newArr[i]] > arr.length / 2) {
       res = +newArr[i];
       break;
     } else {
       res = -1;
     }
   }
   return res;
}
