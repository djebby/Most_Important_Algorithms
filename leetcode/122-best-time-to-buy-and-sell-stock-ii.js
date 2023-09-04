// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ (top-interview-questions)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profitAccumulator = 0;
  for (let i = 0; i < prices.length - 1; i += 1) {
    if (prices[i] < prices[i+1]) {
      // just exploit every opportunity of profit
      profitAccumulator += prices[i+1] - prices[i];
    }
  }

  return profitAccumulator;
};
