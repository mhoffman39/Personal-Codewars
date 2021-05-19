// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

var findAnagrams = function(s, p) {
  const indexes = [];

  for (let i = 0; i < s.length; i ++) {
    debugger;
    let anagram = true;
    const pArray = p.split('');
    //iterate p.length times
    for (let j = 0; j < p.length; j ++) {
      const index = pArray.indexOf(s[i + j]);
      if (index > -1) {
        delete pArray[index];
      } else {
        anagram = false;
      }
    }
    if (anagram === true) {
      indexes.push(i);
    }
  }
  return indexes;
};

console.log(findAnagrams("cbaebabacd", "abc"))  //[0,6]