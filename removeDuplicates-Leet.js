// You are given a string s. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.

var removeDuplicates = function(s) {
  let changes = 0;
  let array = s.split('');

  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1] !== undefined) {
      if (array[i] === array[i + 1]) {
        delete array[i];
        delete array[i + 1];
        changes ++;
      }
    }
  }
  for (let i = 1; i < array.length; i += 2) {
    if (array[i + 1] !== undefined) {
      if (array[i] === array[i + 1]) {
        delete array[i];
        delete array[i + 1];
        changes ++;
      }
    }
  }
  if (changes === 0) {
    return array.join('');
  } else {
    return removeDuplicates(array.join(''))
  }
}

s = "abbaca"
console.log(removeDuplicates(s)) //'ca'