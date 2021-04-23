// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function(x) {
  if (x === 0) {
      return 0;
  }
  var negative = false;
  if (x < 0) {
    negative = true;
    x = Math.abs(x);
  }
  x = x.toString().split('').reverse().join('');
  x = parseInt(x);

  if ((x >= 2147483647) || (x <= -2147483648)) {
      return 0;
  }
  if (negative) {
    return -x;
  } else {
      return x;
  }
};

console.log(reverse(1534236469))