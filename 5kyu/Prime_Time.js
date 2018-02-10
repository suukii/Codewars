function prime(num) {
  var primes = [];
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(n) {
  var k = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= k; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
