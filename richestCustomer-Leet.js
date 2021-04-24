// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
  let max = 0;
  let reducer = (accumulator, current) => accumulator + current;

  for (var i = 0; i < accounts.length; i ++) {
    let sum = accounts[i].reduce(reducer);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]])) //10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])) //17
