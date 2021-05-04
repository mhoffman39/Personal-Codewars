// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var maximum69Number  = function(num) {

  let array = num.toString().split('');

  for (let i = 0; i < array.length; i ++) {
    if (array[i] === '6') {
      array[i] = '9';
      break;
    }
  }
    let number = array.join('')
    return number;
};

console.log(maximum69Number(9669))  //9969