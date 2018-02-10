function palindrome(string) {
  string = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
  for (var i = 0, j = string.length - 1; i < string.length / 2 && j > string.length / 2; i++, j--) {
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
}
