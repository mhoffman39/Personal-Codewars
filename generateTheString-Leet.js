// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

var generateTheString = function(n) {
  let code = 97;
  let result = '';
  if (n % 2 === 1) {
    for (let i = 0; i < n; i ++) {
      result += String.fromCharCode(code);
    }
  } else {
      if ((n / 2) % 2 === 1) {
          result += String.fromCharCode(code).repeat(n/2);
          result += String.fromCharCode(code + 1).repeat(n/2);
      } else {
        let a = (n / 2) - 1;
        let b = (n / 2) + 1;
        result += String.fromCharCode(code).repeat(a);
        result += String.fromCharCode(code+1).repeat(b);
      }
  }
  return result;
};

console.log(generateTheString(1))  //'a'
console.log(generateTheString(5))  //'aaaaa'
console.log(generateTheString(6))  //'ababab'
console.log(generateTheString(8))  //'aaabbbbb'