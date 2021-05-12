// Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

var sortArrayByParity = function(nums) {

  let result = [];
  nums.forEach((num) => {
    if (num % 2 === 0) {
      result.unshift(num)
    } else {
      result.push(num)
    }
  })
  return result;
};

console.log(sortArrayByParity([3,1,2,4])) //[2,4,3,1]