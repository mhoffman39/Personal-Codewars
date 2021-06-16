var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i ++) {
    let needed = target - nums[i];
    if (obj[needed] !== undefined) {
      return [obj[needed], i]
    } else {
      obj[nums[i]] = i;
      console.log(obj)
    }
  }
  return []
};

console.log(twoSum([2,7,11,15], 9))  //[0,1]
