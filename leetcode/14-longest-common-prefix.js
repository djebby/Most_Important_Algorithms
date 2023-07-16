// https://leetcode.com/problems/longest-common-prefix/ (top-interview-questions)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minStr = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
      if (minStr.length > strs[i].length) {
        minStr = strs[i];
      }
    }
  
    let commPrefix = "";
  
    for (let i = 0; i < minStr.length; i++) {
      let j = 0;
      while (j < strs.length && minStr[i] === strs[j][i]) j += 1;
      if (j === strs.length) commPrefix += minStr[i];
      else break;
    }
  
    return commPrefix;
  
  };