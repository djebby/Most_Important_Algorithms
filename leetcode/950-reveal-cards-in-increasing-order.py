# https://leetcode.com/problems/reveal-cards-in-increasing-order/

from collections import deque
from typing import List

class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort()
        queue = deque(range(len(deck)))
        output = [None] * len(deck)
        for card in deck:
            output[queue.popleft()] = card
            if queue: queue.append(queue.popleft())
        
        return output
