// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {
  let index1 = 0;
  let index2 = 0;
  let sorted = [];
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] < nums2[index2]) {
        sorted.push(nums1[index1]);
        index1++;
    } else {
      sorted.push(nums2[index2]);
      index2++;
    }
  }
  if (index1 < nums1.length) {
    sorted = sorted.concat(nums1.slice(index1));
  } else {
    sorted = sorted.concat(nums2.slice(index2));
  }
  if (sorted.length % 2 === 1) {
    let middle = Math.floor(sorted.length / 2);
    return sorted[middle];
  } else {
    let middle1 = (sorted.length / 2) - 1;
    let middle2 = sorted.length / 2;
    return (sorted[middle1] + sorted[middle2]) / 2;
  }
};

console.log(findMedianSortedArrays([1,2], [3,4]));