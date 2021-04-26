// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.

var maxIceCream = function(costs, coins) {
//I: array of integers, integer
//O: integer

  //create count variable to count ice cream bars
  let count = 0;
  //create a remaining variable initialized to coins
  let remaining = coins;
  //sort costs in ascending order
  let sorted = costs.sort(function(a,b) {
    return a - b
  })
  //iterate over array
  for (let i = 0; i < sorted.length; i ++) {
    //if remaining - currentcost >= 0
    if (remaining - sorted[i] >= 0) {
      //increment count
      count ++;
      //remaining = remaining - current
      remaining = remaining - sorted[i];
    } else
      return count
  }
  return count;
};

console.log(maxIceCream([1,3,2,4,1], 7))  //4