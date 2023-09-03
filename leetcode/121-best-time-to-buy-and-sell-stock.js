// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ (top-interview-questions)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  /**
   * main idea:
   * - when the curve between prices[buy] and prices[sell] is increasing => there is a profit so save it
   * - Otherwise if the curve is decreasing, => we found a less day that we can buy on it so 
   *    => update the buy pointer to be equal to sell
   * - always increment the 'sell' pointer 
   */

  let maximumProfit = 0;
  let buy = 0; // pointer
  let sell = 1; // pointer

  while (sell < prices.length) {
    if (prices[buy] >= prices[sell]) buy = sell;
    else maximumProfit = Math.max(maximumProfit, (prices[sell] - prices[buy]));
    sell += 1;
  }

  return maximumProfit;
};
