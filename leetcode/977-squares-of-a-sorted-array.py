# https://leetcode.com/problems/squares-of-a-sorted-array

from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]: # Time: O(n)
        left, right, squares = 0, len(nums) - 1, []
        while left <= right:
            if (nums[right]) ** 2 > (nums[left]) ** 2:
                squares.append((nums[right])**2)
                right -= 1
            else:
                squares.append((nums[left])**2)
                left += 1
        return squares[::-1]
    
    def sorted_squares(self, nums: List[int]) -> List[int]: # Time: O(nlog(n))
        for i in range(len(nums)): nums[i] = (nums[i]) ** 2
        nums.sort()
        return nums
