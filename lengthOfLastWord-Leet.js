// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
  if (s.length === 0) {
    return 0;
  }
  const split = s.trimEnd().split(' ');
  return  split[split.length - 1].length;
};

console.log(lengthOfLastWord('a b  '))  //5