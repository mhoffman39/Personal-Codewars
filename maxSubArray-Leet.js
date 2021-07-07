// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
  // let max = nums[0];
  // let length = 0;
  // const add = (accumulator, current) => accumulator + current;

  // while(length <= nums.length) {
  //   for (let i = 0; i < nums.length - length; i ++) {
  //     const temp = nums.slice(i, i + length + 1);
  //     const sum = temp.reduce(add);
  //     if (sum > max) {
  //       max = sum;
  //     }
  //   }
  //   length ++;
  // }
  // return max;
  let maxSum = nums[0]
  let curSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] >= 0) {
          if (curSum <= 0) {
              curSum = nums[i]
          } else {
              curSum += nums[i]
          }
          maxSum = Math.max(maxSum, curSum)
      }
      else {
          if (curSum > 0) {
              curSum += nums[i]
          } else {
              curSum = nums[i]
              maxSum = Math.max(maxSum, curSum)
          }
      }
      console.log(maxSum, curSum)
  }

  return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6
//console.log(maxSubArray([1]))  //1
//console.log(maxSubArray([5,4,-1,7,8]))  //23