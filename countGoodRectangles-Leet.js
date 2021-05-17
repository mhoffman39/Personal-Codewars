// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

var countGoodRectangles = function(rectangles) {
  let count = 1;
  let maxLen = [];
  for (let i = 0; i < rectangles.length; i ++) {
    if (rectangles[i][0] <= rectangles[i][1]) {
      maxLen.push(rectangles[i][0]);
    } else {
      maxLen.push(rectangles[i][1]);
    }
  }
  let sorted = maxLen.sort((a, b) => b - a);
  for (let i = 1; i < sorted.length; i ++) {
    if (sorted[i] === sorted[0]) {
      count++;
    } else {
      break;
    }
  }
  return count;
};

rectangles = [[5,8],[3,9],[5,12],[16,5]]
console.log(countGoodRectangles(rectangles))  //3
