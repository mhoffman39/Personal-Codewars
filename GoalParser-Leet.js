// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

var interpret = function(command) {
//I: string
//O: string
  //create string variable to hold result
  let result = '';
  //iterate over command
  for (let i = 0; i < command.length; i ++) {
    //if current character is 'G'
    if (command[i] === 'G') {
      //add to result
      result += 'G';
    }
    //if current character is '('
    if (command[i] === '(') {
      //if next character is ')'
      if (command[i+1] === ')') {
        //add 'o' to result
        result += 'o'
      } else {
        //otherwise
          //add 'al' to result
          result += 'al';
      }
    }
  }
  return result
};

console.log(interpret("G()(al)"))  //"Goal"