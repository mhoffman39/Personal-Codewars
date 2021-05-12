// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

var finalPrices = function(prices) {
  let result = [];

  for (let i = 0; i < prices.length; i ++) {
    let current = prices[i];
    for (let j = i + 1; j < prices.length; j ++) {
      if (prices[j] <= current) {
        result.push(current - prices[j]);
        break;
      }
    }
    if (result.length < i + 1) {
      result.push(current)
    }
  }
  return result;
};

console.log(finalPrices([8,4,6,2,3]))  //[4,2,4,2,3]