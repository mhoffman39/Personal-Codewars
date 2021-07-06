// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {

  //This was my answer. It works but it's extremely slow.
  // if (s.length !== t.length) {
  //   return false;
  // }
  // let newT = t;
  // for (let i = 0; i < s.length; i++) {
  //   if (newT.indexOf(s[i]) === -1) {
  //     return false;
  //   } else {
  //     newT = newT.replace(s[i], '0')
  //   }
  // }
  // return true;
  return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram('accc', 'ccac'))  //true