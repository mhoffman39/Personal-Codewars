// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  let plength = prefix.length;
  strs.shift();

  for (const element of strs) {
    while (prefix !== element.substring(0, plength)) {
      prefix = prefix.substring(0, plength - 1);
      plength --;

      if (plength === 0) {
        return '';
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])) //'fl'