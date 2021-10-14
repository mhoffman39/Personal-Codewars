/**
 * @param {number[]} prices
 * @return {number}
 */
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