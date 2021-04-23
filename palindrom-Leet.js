// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
  var string = x.toString();
  string = string.split('').reverse().join('');
  var result = parseInt(string);

  return result === x ? true : false;
};

console.log(isPalindrome(12321))