// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

var balancedStringSplit = function(s) {
  let count = 0;
  const holder = {};
  for (let i = 0; i < s.length; i ++) {
    if (holder[s[i]]) {
      holder[s[i]]++;
    } else {
      holder[s[i]] = 1;
    }
    if (holder['L'] === holder['R']) {
      count++;
    }
  }
  return count
};

console.log(balancedStringSplit("RLLLLRRRLR"))  //4