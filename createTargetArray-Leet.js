// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

var createTargetArray = function(nums, index) {
//I: two arrays
//O: one array
  //create result array;
  let result = [];
  //iterate over array
  for (let i = 0; i < nums.length; i ++) {
    if (result[index[i]] === 'undefined') {
      result[index[i]] = nums[i];
    } else {
      result.splice(index[i], 0, nums[i])
    }
  }
  //return result array
  return result;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])); //[0,4,1,3,2]