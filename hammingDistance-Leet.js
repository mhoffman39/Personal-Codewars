// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

var hammingDistance = function(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }
  let binaryx = x.toString(2);   //converts x to binary string
  const binaryy = y.toString(2);  //converts y to binary string
  let count = 0;

  binaryx = binaryx.padStart(binaryy.length, '0');  //adds leading zeros to make both strings the same length

  for (let i = 0; i < binaryx.length; i++) {
    if (binaryx[i] !== binaryy[i]) {
      count++;
    }
  }

  return count
};

console.log(hammingDistance(1,4))  //2