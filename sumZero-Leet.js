// Given an integer n, return any array containing n unique integers such that they add up to 0.

var sumZero = function(n) {
  const result = [];
  let counter = 1
  if (n % 2 !== 0) {
    result.push(0);
    n = n-1;
  }
  for (let i = 0; i < n; i += 2) {
    result.push(-counter);
    result.push(counter);
    counter++;
  }
  return result;
};

console.log(sumZero(6))  //[0,1,-1,2,-2]
