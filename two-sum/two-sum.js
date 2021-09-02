/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i ++) {
    let current = nums[i];
    console.log(nums.indexOf(target - current))
    if (nums.indexOf(target - current) !== -1  && nums.indexOf(target - current) !== i) {
      return [i, nums.indexOf(target - current)]
    }
  }
};