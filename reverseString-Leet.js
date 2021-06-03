// Write a function that reverses a string. The input string is given as an array of characters s.

var reverseString = function(s) {
  if (s.length === 1) {
    return s;
  }
  let beginning = 0;
  let end = s.length - 1
  while (beginning < end) {
    [s[beginning], s[end]] = [s[end], s[beginning]];
      beginning++;
      end--;
  }
  return s;
};

console.log(reverseString(["h","e","l","l","o"])) //["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])) //["h","a","n","n","a","H"]