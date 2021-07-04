// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

var isPowerOfTwo = function(n) {
  if (n < 1) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  if (n % 2 === 1) {
    return false;
  }
  let count = 1;
  while (count < n) {
    let exp = 2 ** count;
    if (exp === n) {
      return true
    } else if (exp > n) {
      return false;
    } else {
      count++;
    }
  }
};

console.log(isPowerOfTwo(16))  //true