// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

var twoSum = function(numbers, target) {
  const hasSeen = {};

  for (let i = 0; i < numbers.length; i ++) {
    const needed = target - numbers[i];
    if (hasSeen[needed]) {
      return [hasSeen[needed], i + 1]
    } else {
      hasSeen[numbers[i]] = i + 1;
    }
  }
};

console.log(twoSum([2,7,11,15], 9))  //[1, 2]