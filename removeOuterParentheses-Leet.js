// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

var removeOuterParentheses = function(S) {
  let result = '';
  const temp = [];
  let count = 0;

  const chopper = (array) => {
    array.splice(0,1);
    array.splice(array.length-1);
  }

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count++;
    } else {
      count--;
    }
    temp.push(S[i]);
    if (count === 0) {
      chopper(temp);
      result += temp.join('');
      temp.length = 0;
    }
  }
  return result;
};

console.log(removeOuterParentheses("(()())((()))"))  //"()()()"