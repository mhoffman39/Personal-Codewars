/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let sorted = nums.sort((a,b) => a - b);
  const distinct = new Set(sorted);
  let array = Array.from(distinct);
  console.log(array)
  if (array[array.length-3] !== undefined) {
    return array[array.length-3]
  } else if (array[array.length-3]) {
    return array[array.length-2]
  } else {
      return array[array.length-1]
  }

};