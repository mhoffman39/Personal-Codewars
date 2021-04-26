// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

var checkIfPangram = function(sentence) {
//I: string
//O: boolean

  if (sentence.includes('a') &&
      sentence.includes('b') &&
      sentence.includes('c') &&
      sentence.includes('d') &&
      sentence.includes('e') &&
      sentence.includes('f') &&
      sentence.includes('g') &&
      sentence.includes('h') &&
      sentence.includes('i') &&
      sentence.includes('j') &&
      sentence.includes('k') &&
      sentence.includes('l') &&
      sentence.includes('m') &&
      sentence.includes('n') &&
      sentence.includes('o') &&
      sentence.includes('p') &&
      sentence.includes('q') &&
      sentence.includes('r') &&
      sentence.includes('s') &&
      sentence.includes('t') &&
      sentence.includes('u') &&
      sentence.includes('v') &&
      sentence.includes('w') &&
      sentence.includes('x') &&
      sentence.includes('y') &&
      sentence.includes('z'))
      {
     return true;
   } else {
     return false;
   }
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); //true