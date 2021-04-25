// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function(s, indices) {
//I: string, an array of integers
//O: shuffled string

  //create array variable
  let array = [];

  //iterate over string
  for (let i = 0; i < s.length; i ++) {
    //variable for indice value
    let index = indices[i];
    //current letter assigned to array at indice value
    array[index] = s[i];
  }

  return array.join('')
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))  //'leetcode'