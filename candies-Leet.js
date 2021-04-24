// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    let largest = Math.max(...candies);
    let result = [];
    for (let i = 0; i < candies.length; i ++) {
      if (largest - candies[i] <= extraCandies) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return result
};

console.log(kidsWithCandies([1,3,5,4,2], 2)) //[f,t,t,t,f]