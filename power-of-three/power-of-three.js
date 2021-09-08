/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1) {
    return true;
  }
  for (let i = 1; i ** 3 <= n; i ++) {
    if (3 ** i === n) {
      return true
    }
  }
  return false;
};