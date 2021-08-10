/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
  while (count < nums.length) {
    for (let i = 0; i < nums.length - 1; i ++) {
      if (nums[i] === 0) {
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
      }
    }
    count++;
  }
};