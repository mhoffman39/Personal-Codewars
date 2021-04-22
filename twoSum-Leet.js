var twoSum = function(nums, target) {

    //iterate over nums array
    for (let i = 0; i < nums.length; i ++) {
        //if (current < target)
        if (nums[i] <= target) {
            //variable to hold target - current value
            let search = target - nums[i];
            //using find if variable is found (!-1)
            for (let j = i + 1; j < nums.length; j ++) {
              if (nums[j] === search) {
                return [i, j]
              }
            }
            }
          }
        };
        console.log(twoSum([3,2,4], 6))
