// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// No negative numbers in array.

var maxProduct = function(nums) {
  let largest = 0
  let second = 0
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] > largest) {
      second = largest;
      largest = nums[i];
    } else {
      if (nums[i] > second) {
        second = nums[i];
      }
    }
  }
  return (largest - 1) * (second - 1);
};

console.log(maxProduct([10,2,5,2]))  //12