// Given a string of math expression in the form "5+6*7", calculate the answer.

const calculateString = (str) => {
  return eval(str)
}

console.log(calculateString('5 + 6 * 7'))  //47