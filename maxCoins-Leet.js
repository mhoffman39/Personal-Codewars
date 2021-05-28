// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins which you can have.

var maxCoins = function(piles) {
  let sorted = mergeSort(piles);
  console.log(sorted)
  let sum = 0;
  for (let i = sorted.length - 2; i >= 0; i -= 3) {
    console.log(sorted[i])
    sum += sorted[i];
  }
  return sum;
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  let remainder = i === left.length ? right.slice(j) : left.slice(i);
  return result.concat(remainder);
}

console.log(maxCoins([2,4,1,2,7,8]))  //9

