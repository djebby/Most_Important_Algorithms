# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ (top-interview-questions)

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        max_profit = 0
        min_price = prices[0] # minimum price seen so far

        for price in prices:
            if price < min_price:
                min_price = price
            elif price > min_price: # there is a profit, see if he can be our maximum profit can gain until this day
                max_profit = max(max_profit, (price - min_price))
        
        return max_profit
