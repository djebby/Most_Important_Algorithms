# https://leetcode.com/problems/coin-change/ (top-interview-questions)

from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        cache = [float('inf')] * (amount+1)
        cache[0] = 0

        for amt in range(1, amount+1):
            for coin in coins:
                if amt >= coin:
                    cache[amt] = min(cache[amt], 1+cache[amt-coin])
        
        return cache[amount] if cache[amount] != float('inf') else -1
