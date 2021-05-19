// In a array nums of size 2 * n, there are n + 1 unique elements, and exactly one of these elements is repeated n times.

// Return the element repeated n times.

var repeatedNTimes = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i ++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  for(let key in obj) {
    if (obj[key] > 1) {
      return key;
    }
  }
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));  //5