// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

var replaceDigits = function(s) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let result = '';

  let shift = function(c, x) {
    let index = parseInt(alphabet.indexOf(c));
    let adder = index + parseInt(x);
    return alphabet[adder]
  }

  for (let i = 0; i < s.length; i += 2) {
    debugger;
    if (s[i + 1] !== undefined) {
      result += s[i];
      let returned = shift(s[i], s[i + 1]);
      result += returned;
    } else {
      result += s[i]
    }
  }

  return result;
};

console.log(replaceDigits("v0g6s4d")); //"vvgmswd"