# https://leetcode.com/problems/contains-duplicate/ (top-interview-questions)

from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numbers = set()
        for n in nums:
            if n in numbers:
                return True
            numbers.add(n)
        return False
