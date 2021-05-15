// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

var squareIsWhite = function(coordinates) {
  let result = false;
  const row = coordinates.charCodeAt(0) - 96;
  const column = parseInt(coordinates[1])
  console.log(row, column)

  if (row % 2 === 0 && column % 2 === 0) {
    return false;
  }
  if (row % 2 === 1 && column % 2 === 1) {
    return false;
  } else {
    return true;
  }
};

console.log(squareIsWhite('b1')) //true
console.log(squareIsWhite('a1')) //false