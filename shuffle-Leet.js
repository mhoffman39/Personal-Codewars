// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function(nums, n) {
  let result = [];

  for (let i = 0; i < n; i ++) {
    result.push(nums[i]);
    result.push(nums[i + n])
  }
  return result;
};

console.log(shuffle([2,5,1,3,4,7], 3))  //[2,3,5,4,1,7]