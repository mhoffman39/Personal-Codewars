//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
  const wordArr = s.split(' ');
  const reverser = (word) => {
    return word.split('').reverse().join('');
  }
  let result = '';

  for (let i = 0; i < wordArr.length; i ++) {
    let reversedWord = reverser(wordArr[i]);
    if (i < wordArr.length - 1) {
      result += reversedWord + ' ';
    } else {
      result += reversedWord;
    }
  }
  return result
};

console.log(reverseWords("Let's take LeetCode contest"))  //"s'teL ekat edoCteeL tsetnoc"