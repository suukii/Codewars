function humanReadable(seconds) {
  var sec = parseInt(seconds % 60);
  var min = parseInt(seconds / 60 % 60);
  var hour = parseInt(seconds / (60 * 60));
  var zero = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return zero(hour) + ':' + zero(min) + ':' + zero(sec);
}
