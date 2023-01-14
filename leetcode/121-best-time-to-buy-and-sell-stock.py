# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ (top-interview-questions)

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        buy, sell, maxProfit = 0, 1, 0

        while sell < len(prices):
            if prices[buy] > prices[sell]: buy = sell
            else: maxProfit = max(maxProfit, prices[sell] - prices[buy])
            sell += 1

        return maxProfit