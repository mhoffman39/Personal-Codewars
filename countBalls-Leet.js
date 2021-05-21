// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.

var countBalls = function(lowLimit, highLimit) {
  const obj = {};
  for (let i = lowLimit; i <= highLimit; i ++) {
    const string = i.toString();
    let sum = 0;
    for (let j = 0; j < string.length; j ++) {
      sum += parseInt(string[j]);
    }
    obj[sum] ? obj[sum]++ : obj[sum] = 1;
  }
  let max = 0;
  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key]
    }
  }
  return max
};

console.log(countBalls(1, 10))  //2
console.log(countBalls(5, 15))  //2
console.log(countBalls(19, 28))  //2