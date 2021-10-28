/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (n !== 0) {
    let j = 0;
    for (let i = 0; i < nums1.length; i++) {
      if(nums2[j] < nums1[i]) {
        nums1.splice(i,0,nums2[j]);
        j++;
        nums1.pop();
      }
    }
    while (j < n) {
      let remaining = n-j
      console.log(nums1)
      nums1.splice(-remaining, 1, nums2[j]);
      j++
    }
  }  
};