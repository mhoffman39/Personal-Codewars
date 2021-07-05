// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

var isPalindrome = function(s) {
  const lower = s.toLowerCase();
  let converted = '';
  for (let i = 0; i < lower.length; i ++) {
    const current = lower[i];
    if (current === ' ') {
      continue;
    } else if (lower.charCodeAt(i) >= 48 && lower.charCodeAt(i) <= 57) {
      converted += current;
    } else if (lower.charCodeAt(i) < 97 || lower.charCodeAt(i) > 122) {
      continue;
    } else {
      converted += current;
    }
  }
  console.log(converted)
  const reversed = converted.split('').reverse().join('');
  if (reversed === converted) {
    return true;
  }
  return false;
};
// 48-57 numbers
// 65-90 uppercase
// 97-122 lowercase

//console.log(isPalindrome("A man, a plan, a canal: Panama"))  //true
console.log(isPalindrome("0P"))  //false

