# https://leetcode.com/problems/missing-number/ (top-interview-questions)

from typing import List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        missingNumber = len(nums)
        for i in range(len(nums)):
            missingNumber = missingNumber ^ nums[i] ^ i
        return missingNumber


    def missing_number(self, nums: List[int]) -> int:
        missingNumber = 0
        for i in range(len(nums)+1): missingNumber += i
        missingNumber -= sum(nums)
        return missingNumber
