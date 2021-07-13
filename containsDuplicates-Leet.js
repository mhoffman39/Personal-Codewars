// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
  let numSet = new Set(nums);

  return nums.length === numSet.size ? false : true;
};

console.log(containsDuplicate([1,2,3,4]))  //false
console.log(containsDuplicate([1,1,2,3,4]))  //true