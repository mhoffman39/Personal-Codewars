// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

var countNegatives = function(grid) {
  let count = 0;
  for (let i = grid.length - 1; i >= 0; i --) {
    let arrCount = 0;
    for (let j = grid[i].length - 1; j >= 0; j --) {
      if (grid[i][j] < 0) {
        arrCount++;
      } else {
        break;
      }
    }
    if (arrCount > 0) {
      count += arrCount;
    } else {
      break;
    }
  }
  return count;
};

grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid))  //8
