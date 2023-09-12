// https://leetcode.com/problems/word-break/ (top-interview-questions)

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  
  const dict = new Set(wordDict);

  const memo = {};
  memo[s.length] = true;

  const partitioning = (i) => {

    if (memo.hasOwnProperty(i)) return memo[i];

    for (let j = i+1; j <= s.length; j += 1) {
      const subStr = s.slice(i, j);
      if (!dict.has(subStr)) {
        continue;
      }

      if(partitioning(j)) {
        memo[i] = true;
        return true;
      }
    }

    memo[i] = false;
    return false;

  }
  
  return partitioning(0);
};
