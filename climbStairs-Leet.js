// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
  if (n < 4) {
    return n;
  }
  let count = 4;
  let first = 2;
  let second = 3;
  while (count <= n) {
    if (count === n) {
      return first + second;
    } else {
      let temp = second
      second = first + second;
      first = temp;
      count++;
    }
  }
};

//Follows Fibonnacci sequence

console.log(climbStairs(1))  //1
console.log(climbStairs(2))  //2
console.log(climbStairs(3))  //3
console.log(climbStairs(4))  //5
console.log(climbStairs(5))  //8
console.log(climbStairs(6))  //13
console.log(climbStairs(7))  //21
console.log(climbStairs(8))  //34
