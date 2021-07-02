// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
  let profits = [];
  let low = prices[0];
  let high = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i];
      high = prices[i];
    }
    if (prices[i] > high) {
      high = prices[i];
      profits.push(high - low);
    }
  }
  let max = 0;
  for (let i = 0; i < profits.length; i++) {
    if (profits[i] > max) {
      max = profits[i]
    }
  }
  return max;
};

//console.log(maxProfit([7,1,5,3,6,4]))  //5
//console.log(maxProfit([7,6,4,3,1]))  //0
console.log(maxProfit([2,4,1]))  //1