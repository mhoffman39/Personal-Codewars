// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function(n) {
  const arr = [];
  for ( let i = 0; i < 100; i ++) {
    let converted = converter(n);
    if (converted === 1) {
      return true;
    } else {
      n = converted;
      if (arr.indexOf(converted) !== -1) {
        return false;
      }
      arr.push(n);
      console.log(arr)
    }
  }
  return false;
};

const converter = (n) => {
  const string = n.toString();
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string[i] ** 2
  }
  return sum;
}

console.log(isHappy(2))


