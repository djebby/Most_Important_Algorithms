# https://leetcode.com/problems/rotate-array/ (top-interview-questions)

from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None: # Best Running Time (215ms - Beats 91,38%)
        """
        Do not return anything, modify nums in-place instead.
        """
        k %= len(nums)
        if k:
            rotatedVals = nums[-k:]
            nums[k:] = nums[:-k]
            nums[:k] = rotatedVals


    def rotateFollowUp(self, nums: List[int], k: int) -> None: # Time: O(n) Beats 84.34%, Space: O(1) Beats 76.72%
        k %= len(nums)
        if k:
            nums.reverse() # step 1: reverse the hole array
            left, right = 0, k-1
            while left < right: # step 2: reverse the part from 0 to k-1
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1

            left, right = k, len(nums) - 1
            while left < right: # step 3: reverse the part from k to n-1
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        

    def rotateFollowUp2(self, nums: List[int], k: int) -> None: # Best Space: O(1) (25.3MB - Beats 98.43%)
        """
        Do not return anything, modify nums in-place instead.
        """
        k %= len(nums)
        while k:
            nums.insert(0, nums.pop())
            k -= 1
