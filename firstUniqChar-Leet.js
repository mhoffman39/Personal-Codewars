// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i ++) {
    let current = s[i];
    if (s.indexOf(current) === i && s.indexOf(current, i+1) === -1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'))  //0
console.log(firstUniqChar('loveleetcode'))  //2
console.log(firstUniqChar('aabb'))  //-1