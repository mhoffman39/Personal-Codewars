// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

var selfDividingNumbers = function(left, right) {
  const result = [];
  let flag = false;

  while (left <= right) {
    const string = left.toString();
    for (let i = 0; i < string.length; i++) {
      if (left % parseInt(string[i]) === 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(left);
    }
    left++;
  }
  return result;
};

console.log(selfDividingNumbers(1, 22)) //[1,2,3,4,5,6,7,8,9,11,12,15,22]