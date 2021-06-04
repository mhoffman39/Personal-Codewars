// Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

var frequencySort = function(s) {
  let letterCount = {};
  for (let i = 0; i < s.length; i ++) {
    if (letterCount[s[i]] === undefined) {
      letterCount[s[i]] = 1;
    } else {
      letterCount[s[i]] ++;
    }
  }

  let count = 1;
  let backwardsString = '';
  while (count <= s.length) {
    for (var i in letterCount) {
      if (letterCount[i] === count) {
        let iterator = count;
        while (iterator > 0) {
          backwardsString += i;
          iterator--;
        }
      }
    }
    count++;
  }
  let reversed = backwardsString.split('').reverse().join('');
  return reversed;
};

console.log(frequencySort('tttree'))  //'eert' || 'ttteer'
console.log(frequencySort('cccaaa'))  //aaaccc || cccaaa