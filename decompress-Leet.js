// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

var decompressRLElist = function(nums) {
  //I: array of nums
  //O: array of nums

  //create result array
  let array = [];

  //iterate over array by twos
  for (let i = 0; i < nums.length; i += 2) {
    //iterate nums[i] times
    for (let j = 0; j < nums[i]; j ++) {
      //push nums[i + 1] to result array
      array.push(nums[i+1])
    }
  }
  //return result array
  return array;
};

console.log(decompressRLElist([1,2,3,4])); // [2,4,4,4]