function accum(s) {
	return s.split('').map(function (val, index) {
    var init = val.toUpperCase();
    for (var i = 0; i < index; i++) {
      init += val.toLowerCase();
    }
    return init;
  }).join('-');
}
