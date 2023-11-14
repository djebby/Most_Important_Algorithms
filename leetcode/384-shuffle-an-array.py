# https://leetcode.com/problems/shuffle-an-array/ (top-interview-questions)

import random
from typing import List

class Solution:
    def __init__(self, nums: List[int]):
        self.original = nums

    def reset(self) -> List[int]:
        return self.original

    def shuffle(self) -> List[int]:
        shuffled = self.original.copy()
        for i in range(len(shuffled)):
            random_idx = random.randint(i, len(shuffled)-1)
            shuffled[i], shuffled[random_idx] = shuffled[random_idx], shuffled[i]
        return shuffled
        #------------cheating------------
        # shuffled = self.original.copy()
        # random.shuffle(shuffled)
        # return shuffled
