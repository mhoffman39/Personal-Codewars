// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

var isSumEqual = function(firstWord, secondWord, targetWord) {
  let longest = firstWord;
  if (firstWord.length >= secondWord.length && firstWord.length >= targetWord.length) {
    longest = firstWord;
  } else if (secondWord.length >= firstWord.length && secondWord.length >= targetWord.length) {
    longest = secondWord;
  } else {
    longest = targetWord;
  }

  const alphabet = {a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9}
  let string1 = '';
  let string2 = '';
  let stringT = '';

  for (let i = 0; i < longest.length; i ++) {
    if (firstWord[i]) {
      string1 += alphabet[firstWord[i]];
    }
    if (secondWord[i]) {
      string2 += alphabet[secondWord[i]];
    }
    if (targetWord[i]) {
      stringT += alphabet[targetWord[i]];
    }
  }
  const first = parseInt(string1);
  const second = parseInt(string2);
  const target = parseInt(stringT);

  return first + second === target ? true : false;
};

console.log(isSumEqual("acb", "cba", "cdb"))  //true
console.log(isSumEqual("aaa", "a", "aabe"))  //false