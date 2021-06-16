// There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

// For each location indices[i], do both of the following:

// Increment all the cells on row ri.
// Increment all the cells on column ci.
// Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

var oddCells = function(m, n, indices) {
  let array = [];
  for (let i = 0; i < m; i++) {
    let internal = [];
    for (let j = 0; j < n; j++) {
      internal.push(0);
    }
    array.push(internal);
  }
  for (let i = 0; i < indices.length; i++) {
    let current = indices[i];
    let row = current[0];
    let column = current[1];
    for (let j = 0; j < array[row].length; j++) {
      array[row][j]++;
    }
    for (let k = 0; k < array.length; k++) {
      array[k][column]++;
    }
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j ++) {
      if (array[i][j] % 2 === 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(oddCells(2,3,[[0,1],[1,1]]))  //6


// 0  0  0
// 0  0  0

// 1  3  1
// 1  3  1