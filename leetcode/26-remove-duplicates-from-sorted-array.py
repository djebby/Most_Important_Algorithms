# https://leetcode.com/problems/remove-duplicates-from-sorted-array/ (top-interview-questions)

from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 1
        for j in range(1, len(nums)):
            if nums[j] > nums[i-1]:
                nums[i] = nums[j]
                i += 1
        return i