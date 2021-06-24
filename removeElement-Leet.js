// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
};

console.log(removeElement([3,2,2,3], 3))  //[2,2]