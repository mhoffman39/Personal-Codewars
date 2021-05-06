// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.

var halvesAreAlike = function(s) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let first = '';
  let last = '';
  let firstCount = 0;
  let lastCount = 0;

  let ss = s.toLowerCase();
  for (let i = 0; i < ss.length / 2; i ++) {
    first += ss[i];
  }
  for (let i = ss.length / 2; i < ss.length; i ++) {
    last += ss[i];
  }
  for (let i = 0; i < first.length; i ++) {
    if (vowels.indexOf(first[i]) !== -1) {
      firstCount++;
    }
  }
  for (let i = 0; i < last.length; i ++) {
    if (vowels.indexOf(last[i]) !== -1) {
      lastCount++;
    }
  }
  console.log(firstCount, lastCount)
  return firstCount === lastCount ? true : false;
};

console.log(halvesAreAlike("book")) //true
console.log(halvesAreAlike("textbook")) //false