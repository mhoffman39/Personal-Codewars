// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function(nums) {
  //I: array of numbers
  //O: array of numbers created by adding each number in sequence
  //C: -10^6 <= nums[i] <= 10^6
  //E:

    //create a result variable array with initial value of nums[0]
    var result = [nums[0]];

    //iterate over input array starting at index 1
    for (var i = 1; i < nums.length; i ++) {
      //push to variable array the result of current variable + result variable at index i - 1
      result.push(nums[i] + result[i-1])
    }
    //return result varialbe
    return result;
};

console.log(runningSum([1,2,3,4])) //[1,2,6,10]