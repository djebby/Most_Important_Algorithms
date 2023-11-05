# https://leetcode.com/problems/top-k-frequent-elements/ (top-interview-questions)

from collections import Counter
from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        mostFreqEl = []
        occurrences = Counter(nums)
        frequencesBucket = [[] for i in range(len(nums)+1)]
        for value in occurrences:
            frequencesBucket[occurrences[value]].append(value)
        
        for i in range(len(frequencesBucket) - 1, 0, -1):
            mostFreqEl.extend(frequencesBucket[i])
            k -= len(frequencesBucket[i])
            if k == 0: return mostFreqEl
