/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const reversed = `${"0".repeat(32 - n.toString(2).length)}${n.toString(2)}`
    .split("")
    .reverse()
    .join("")
  let bitValue = 1;
  let total = 0;
  for (let i = reversed.length - 1; i >= 0; i--) {
    if (reversed[i] === '1') {
      total += bitValue;

    }
    bitValue *= 2;
  }
  return total;
};