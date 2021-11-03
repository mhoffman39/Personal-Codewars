/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var string = x.toString();
  string = string.split('').reverse().join('');
  var result = parseInt(string);

  return result === x ? true : false;
};