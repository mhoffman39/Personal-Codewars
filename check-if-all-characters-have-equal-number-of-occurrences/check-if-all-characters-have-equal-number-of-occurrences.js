/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const tracker = {};
  for (let i = 0; i < s.length; i ++) {
    let current = s[i];
    tracker[current] ? tracker[current]++ : tracker[current] = 1; 
  }
  let array = Object.values(tracker);
  for (let i = 1; i < array.length; i ++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
};