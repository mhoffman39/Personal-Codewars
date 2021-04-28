// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = function(allowed, words) {
  let allowedObj = {};
  let count = 0;

  for (let i = 0; i < allowed.length; i ++) {
    allowedObj[allowed[i]] = 1;
  }
  for (let i = 0; i < words.length; i ++) {
    let passes = true;
    for (let j = 0; j < words[i].length; j ++) {
      let currentLetter = words[i][j]
      if (allowedObj[currentLetter] === undefined) {
        passes = false;
      }
    }
    if (passes === true) {
      count++;
    }
  }
  return count
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])); //2