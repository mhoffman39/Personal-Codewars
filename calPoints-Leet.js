// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

var calPoints = function(ops) {
  let result = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'C') {
      result.pop();
    } else if (ops[i] === 'D') {
      result.push(result[result.length-1] * 2)
    } else if (ops[i] === '+') {
      let lastScore = result[result.length-1];
      let previousScore = result[result.length-2];
      let addScore = lastScore + previousScore;
      result.push(addScore);
    } else {
      result.push(parseInt(ops[i]));
    }
  }
  return result.reduce((a, b) => a + b);
};

console.log(calPoints(["5","2","C","D","+"]))  //30