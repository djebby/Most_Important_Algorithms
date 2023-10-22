// https://leetcode.com/problems/perfect-squares/ (top-interview-questions)

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (Math.floor(Math.sqrt(n)) === Math.sqrt(n)) { // n it self is a perfect square
    return 1;
  }
  
  const perfectSquares = []; // list of perfect squares that we can use 
  for (let i = 1; i*i <= n; i += 1) {
    perfectSquares.push(i*i);
  }

  const dp = new Array(n+1).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 0; i <= n; i += 1) {
    for (const square of perfectSquares) {
      if (square <= i) {
        dp[i] = Math.min(dp[i], 1+dp[i-square]);
      } else {
        break;
      }
    }
  }

  return dp[n];
};
