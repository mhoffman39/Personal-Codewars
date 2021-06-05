// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

// For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

// Each element of nums is in exactly one pair, and
// The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

var minPairSum = function(nums) {
  const pairs = [];
  const sums =[];
  const sorted = nums.sort((a,b) => a - b);

  for (let i = 0; i < sorted.length / 2; i ++) {
    const onePair = [];
    onePair.push(sorted[i], sorted[sorted.length - 1- i])
    pairs.push(onePair);
  }
  let max = 0;
  for (let i = 0; i < pairs.length; i ++) {
    let sum = pairs[i][0] + pairs[i][1];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

console.log(minPairSum([3,5,2,3]))  //7
console.log(minPairSum([3,5,4,2,4,6]))  //8