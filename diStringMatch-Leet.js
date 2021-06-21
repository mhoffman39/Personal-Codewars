// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

var diStringMatch = function(string) {
  const result = [];
  let i = 0;
  let d = string.length;

  for (let s = 0; s < string.length; s++) {
    if (s === string.length - 1) {
      if (string[s] === 'I') {
        result.push(i);
        result.push(i + 1);
      } else {
        result.push(d);
        result.push(d - 1);
      }
    } else {
      if (string[s] === 'I') {
        result.push(i);
        i++;
      } else {
        result.push(d);
        d --;
      }
    }
  }
  return result;
};

console.log(diStringMatch('IDID'))  //[0,4,1,3,2]