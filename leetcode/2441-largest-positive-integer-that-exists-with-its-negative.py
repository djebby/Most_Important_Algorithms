# https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

from typing import List


class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        positive_set = set()
        negative_set = set()

        _max = -1
        for num in nums:
            if num > 0:
                if -num in negative_set: _max = max(num, _max)
                positive_set.add(num)
            else:
                if -num in positive_set: _max = max(-num, _max)
                negative_set.add(num)

        return _max
