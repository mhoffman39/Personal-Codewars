// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

var maxArea = function(height) {
  let maxHeight = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (area > maxHeight) {
      maxHeight = area;
    }
    (height[right] > height[left]) ? left++ : right--;
    }
  return maxHeight;
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]))