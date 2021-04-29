// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

var sumOddLengthSubarrays = function(arr) {
  let length = 1;
  let sum = 0;

  //while length is less than or equal to arr.length
  while (length <= arr.length) {
    debugger;
    //iterate over arr
    for (let i = 0; i < arr.length; i++) {
      //create subarray var
      let subarray = [];
      let adder = 0;
      //while subarray.length <= length
      while (subarray.length < length) {
        //push current number to subarray
        subarray.push(arr[i + adder]);
        adder++;
      }
      //add up subarray and add to sum
      let subarraySum = subarray.reduce((a,b) => {
        return a + b;
      })
      sum += subarraySum;
      subarraySum = 0;
    }
    length += 2;
  }
  return sum
};

console.log(sumOddLengthSubarrays([1,4,2,5,3])) //58