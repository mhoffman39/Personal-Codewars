/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let numSet = new Set(nums);

  return nums.length === numSet.size ? false : true;
};