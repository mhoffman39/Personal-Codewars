// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

var judgeCircle = function(moves) {

  const array = moves.split('');
  let vertical = 0;
  let horizontal = 0;
  let remaining = moves.length;

  for (let i = 0; i < array.length; i ++) {
    if (array[i] === 'U') {
      vertical ++;
      remaining --;
    } else if (array[i] === 'D') {
      vertical --;
      remaining --;
    } else if (array[i] === 'L') {
      horizontal --;
      remaining --;
    } else {
      horizontal ++;
      remaining --;
    }
    if (vertical > remaining || horizontal > remaining) {
      console.log(remaining);
      return false;
    }
  }
  if (vertical === 0 && horizontal === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(judgeCircle('UD'))  //true
console.log(judgeCircle('UDLR'))  //true
console.log(judgeCircle('UDL'))  //false
console.log(judgeCircle('U'))  //false
console.log(judgeCircle('UUUUUUUUUUUUUUUUUUUUUUUUD'))  //false