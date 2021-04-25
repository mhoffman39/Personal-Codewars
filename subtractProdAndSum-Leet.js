// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
//I: integer
//O: integer representing the difference between product and sum of n
  let string = n.toString();
  //create sum reducer
  let sumReducer = (a, b) => parseInt(a) + parseInt(b);
  //create product reducer
  let prodReducer = (a, b) => parseInt(a) * parseInt(b);

  //convert n to an array
  let array = string.split('');
  //reduce array
  let sum = array.reduce(sumReducer);
  let product = array.reduce(prodReducer);

  //return difference between product and sum
  return product - sum;
};

console.log(subtractProductAndSum(234)) //15