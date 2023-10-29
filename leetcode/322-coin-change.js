// https://leetcode.com/problems/coin-change/ (top-interview-questions)

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => (a - b));
  const dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0; // we need zero coin to make an amount of zero

  for (let i = 1; i <= amount; i += 1) {
    for (const coin of coins) {
      if (i < coin) break;
      dp[i] = Math.min(dp[i], 1+dp[i-coin]);
    }
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
};
