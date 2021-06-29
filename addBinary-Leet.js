// Given two binary strings a and b, return their sum as a binary string.

var addBinary = function(a, b) {
  if (a.length !== b.length) {
    a.length < b.length ? a = a.padStart(b.length, '0') : b = b.padStart(a.length, '0')
  }
  let carry = false;
  let result = [];
  for (let i = a.length - 1; i >= 0; i--) {
    if (carry) {
      if (a[i] === '1' && b[i] === '1') {
        result.unshift('1');
      } else if (a[i] === '0' && b[i] === '0') {
        result.unshift('1');
        carry = false;
      } else {
        result.unshift('0');
      }
    } else {
      if (a[i] === '1' && b[i] === '1') {
        result.unshift('0');
        carry = true;
      } else if (a[i] === '0' && b[i] === '0') {
        result.unshift('0');
      } else {
        result.unshift('1');
      }
    }
  }
  if (carry) {
    result.unshift('1');
  }
  return result.join('');
};

console.log(addBinary('11', '1'))  //'100'