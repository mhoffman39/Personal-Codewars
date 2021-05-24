// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

var diagonalSum = function(mat) {
  let sum = 0;
  let primary = 0;
  let secondary = mat.length - 1;
  let i = 0;
  while (i < mat.length) {
    if (primary === secondary) {
      sum += mat[i][primary];
      primary++;
      secondary--;
      i++
    } else {
      sum += mat[i][primary] + mat[i][secondary];
      primary++;
      secondary--;
      i++;
    }
  }
  return sum;
};

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))  //25