function likes(names) {
  var str = '';
  var len = names.length;
  var likesStr = ' likes this';
  var likeStr = ' like this';
  switch (len) {
    case 0:
      str = 'no one' + likesStr;
      break;
    case 1:
      str = names[0] + likesStr;
      break;
    case 2:
      str = names.join(' and ') + likeStr;
      break;
    case 3:
      str = names[0] + ', ' + names[1] + ' and ' + names[2] + likeStr;
      break;
    default:
      str = names[0] + ', ' + names[1] + ' and ' + (len - 2) + ' others' + likeStr;
      break;
  }
  return str;
}
