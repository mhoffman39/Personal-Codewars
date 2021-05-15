// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

var flipAndInvertImage = function(image) {
  let result = [];
  for (let i = 0; i < image.length; i ++) {
    let reversed = image[i].reverse();
    let flipped = [];
    for (let j = 0; j < reversed.length; j ++) {
      if (reversed[j] === 0) {
        flipped.push(1)
      } else {
        flipped.push(0)
      }
    }
    result.push(flipped);
  }
  return result;
};

image = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(image))  //[[1,0,0],[0,1,0],[1,1,1]]
