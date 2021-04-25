// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
//I: a string
//O: integer

  //create a count variable
  let count = 0;
  //iterate over jewels
  for (var i = 0; i < jewels.length; i ++) {
    //iterate over stones
    for (var j = 0; j < stones.length; j ++) {
      //if current jewel matches current stone
      if (jewels[i] === stones[j]) {
        //increase count
        count ++;
      }
    }
  }
  //return count variable
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))  //3
console.log(numJewelsInStones('z', 'ZZ'))  //0