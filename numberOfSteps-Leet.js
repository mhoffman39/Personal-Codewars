// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps = function(num) {
//I: number
//O: number

  //create count variable
  let count = 0;
  //while num is > 0
  while(num > 0) {
    //if num % 2 is 0
    if (num % 2 === 0) {
      //num = num / 2
      //increment count
      num = num / 2;
      count ++;
    } else {
      //otherwise num = num -1
      //increment count
      num = num - 1;
      count ++;
    }
  }
  return count;
};

console.log(numberOfSteps(14)) //6