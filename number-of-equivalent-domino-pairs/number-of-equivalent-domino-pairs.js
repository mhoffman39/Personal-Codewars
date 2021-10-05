/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    
  let equivalent = 0;
  for (let i = 0; i < dominoes.length - 1; i ++) {
    let dom1 = dominoes[i];
    for (let j = i+1; j < dominoes.length; j ++) {
      let dom2 = dominoes[j];
      if (dom1[0] === dom2[0] && dom1[1] === dom2[1]) {
        equivalent++;
        continue;
      }
      if (dom1[0] === dom2[1] && dom1[1] === dom2[0]) {
        equivalent++;
      }
    }
  }
  return equivalent;
};