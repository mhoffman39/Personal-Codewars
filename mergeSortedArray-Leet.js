// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < nums2.length; i ++) {
      nums1[i] = nums2[i];
    }
    return nums1;
  }
  nums1.splice(m);
  console.log(nums1)
  let counter = 0;
  for (let i = 0; i < nums2.length; i++) {
    while (nums2[i] >= nums1[counter]) {
      counter++;
    }
    nums1.splice(counter, 0, nums2[i]);
  }
  return nums1;
};

console.log(merge([4,0,0,0,0,0], 1, [1,2,3,5,6], 5))  //[1,2,2,3,5,6]