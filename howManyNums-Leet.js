// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
  //I: array of numbers
  //O: array of numbers

  //create a result array
  let result = [];

  //iterate over nums
  for (let i = 0; i < nums.length; i ++) {
    //create a count variable
    let count = 0;
      //iterate over nums
      for (let j = 0; j < nums.length; j ++) {
        //if current num is less than num[i]
        if (nums[j] < nums[i]) {
          //increase count
          count++;
        }
      }
      //push count to result array
      result.push(count);
  }
  //return result array
  return result;
};

console.log(smallerNumbersThanCurrent([6,5,4,8])) //[2,1,0,3]
