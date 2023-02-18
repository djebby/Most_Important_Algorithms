# https://leetcode.com/problems/search-in-rotated-sorted-array/ (top-interview-questions)

from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)-1
        
        # search for the pivot element index
        while left < right:
            middle = (left + right) // 2
            if nums[middle] > nums[right]: left = middle + 1
            else: right = middle
        pivot = left

        # determine in which subarray the target belong
        if target <= nums[-1]: right = len(nums) - 1
        else: left, right = 0, pivot - 1

        # binary search in the appropriate subarray
        while left <= right:
            middle = (left + right) // 2
            if nums[middle] == target: return middle
            elif nums[middle] < target: left = middle + 1
            else: right = middle - 1
        
        # in case that the target not found
        return -1