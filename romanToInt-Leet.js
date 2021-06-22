// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
  const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];
    if (roman[current] < roman[next]) {
      sum += (roman[next] - roman[current]);
      i++;
    } else {
      sum += roman[current];
    }
  }
  return sum;
};

console.log(romanToInt("LVIII"))  //58
console.log(romanToInt("MCMXCIV"))  //1994
console.log(romanToInt("IX"))  //9
