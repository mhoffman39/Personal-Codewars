// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

var countMatches = function(items, ruleKey, ruleValue) {

  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type' && items[i][0] === ruleValue) {
      count++;
    }
    if (ruleKey === 'color' && items[i][1] === ruleValue) {
      count++;
    }
    if (ruleKey === 'name' && items[i][2] === ruleValue) {
      count++;
    }
  }

  return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 'color', 'silver')) // 1
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], 'type', 'phone'))  //2