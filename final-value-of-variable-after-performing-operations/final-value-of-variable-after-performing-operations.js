/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i ++) {
    let current = operations[i];
    if (current[1] === '+') {
      x++;
    } else {
      x--;
    }
  }
  return x;
};