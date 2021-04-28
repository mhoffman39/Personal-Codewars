// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
//I: two arrays; each array is a series of strings
//O: boolean

  //create a word1 string var
  let w1string = '';
  //create a word2 string var
  let w2string = '';

  //iterate over word1
  for (let i = 0; i < word1.length; i++) {
    //concatenate to word1 string
    w1string += word1[i];
  }

  //iterate over word2
  for (let i = 0; i < word2.length; i++) {
    //concatenate to word2 string
    w2string += word2[i];
  }

  //return word1 equals word2 ? true : false
  return w1string === w2string ? true : false;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))  //true