// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function(nums) {
  if (nums.length === 1) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    const remaining = i === left.length ? right.slice(j) : left.slice(i);
    return result.concat(remaining);
  }

  return merge(sortColors(left), sortColors(right));
};


const nums1 = [2,0,2,1,1,0];
const nums2 = [2,0,1];
const nums3 = [0];
const nums4 = [1];
console.log(sortColors([2,0,2,1,1,0]))  //[0,0,1,1,2,2]
console.log(sortColors(nums2))  //[0,1,2]
console.log(sortColors(nums3))  //[0]
console.log(sortColors(nums4))  //[1]