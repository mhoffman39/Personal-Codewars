// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
  let index = 0;
  let result = '';
  while (index < word1.length || index < word2.length) {
    if (word1.length > index) {
      result+=word1[index];
    }
    if (word2.length > index) {
      result+=word2[index];
    }
    index++;
  }
  return result;
}


console.log(mergeAlternately('abcde', 'pqrstuvwx'))  //'apbqcr'