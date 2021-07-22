/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    //convert num to string
  const string = num.toString();
    //if string has one digit 
      //return 
  if (string.length === 1) {
    return parseInt(string);
  }
    //sum var
  let sum = 0;
    //iterate over string
      //add each num to sum
  for (let i = 0; i < string.length; i ++) {
    sum += parseInt(string[i]);
  }
    //call adDigits with sum
  return addDigits(sum)
};