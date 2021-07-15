// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
  const counter = {};
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i]] >= 1 ? counter[nums[i]]++ : counter[nums[i]] = 1;
    if (counter[nums[i]] >= nums.length / 2) {
      return nums[i];
    }
  }
};

console.log(majorityElement([2,2,1,1,1,2,2]))  //2