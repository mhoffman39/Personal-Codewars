/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length < 2) {
    return false;
  }
    let stack = [];
    let map = {
      "(":")",
      "[":"]",
      "{":"}"
    };
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i])
    } else {
      if (map[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};