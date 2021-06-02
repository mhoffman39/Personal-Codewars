// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  let result = [];

  for (let i = 0; i < arr.length - 1; i ++) {
    let greatest = arr[i+1];
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[j] > greatest) {
        greatest = arr[j];
      }
    }
    result.push(greatest);
  }
  result.push(-1);
  return result;
};

module.exports = replaceElements;