# https://leetcode.com/problems/time-needed-to-buy-tickets/

from typing import List

class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        required_time = 0
        for i in range(len(tickets)):
            required_time += min(tickets[i], (tickets[k] - 1 if i > k else tickets[k]))
        return required_time
