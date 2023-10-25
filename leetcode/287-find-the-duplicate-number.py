# https://leetcode.com/problems/find-the-duplicate-number/ (top-interview-questions)

from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int: # Time: O(n), Space: O(1)
        tortoise, hare = 0, 0
        while True:
            tortoise = nums[tortoise]
            hare = nums[nums[hare]]
            if tortoise == hare: break

        tortoise2 = 0
        while tortoise != tortoise2:
            tortoise = nums[tortoise]
            tortoise2 = nums[tortoise2]
        
        return tortoise
