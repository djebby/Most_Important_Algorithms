// https://leetcode.com/problems/unique-paths/ (top-interview-questions)

/** bottom-up approach (tabulation)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  const tab = new Array(n).fill(1);
  
  for (let i = m - 2; i >= 0; i -= 1) {
    for (let j = n - 2; j >= 0; j -= 1) {
      tab[j] += tab[j+1];
    }
  }

  return tab[0];

};



/** top-down approach (memoization)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {

  const memo = {};

  const dfs = function(r, c) {
    if (r === m-1 || c === n-1) {
      return 1;
    }

    const key = r + ',' + c;
    
    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    const pathNums = dfs(r+1, c) + dfs(r, c+1);

    memo[key] = pathNums;

    return pathNums;

  }

  return dfs(0, 0);

};
