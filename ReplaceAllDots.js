var replaceDots = function(str) {
  let newStr = ''
  for (var i = 0; i < str.length; i ++) {
    if (str[i] === '.') {
      newStr += '-';
    } else {
      newStr += str[i]
    }
  }
  return newStr;
}


console.log((replaceDots("one.two.three")));