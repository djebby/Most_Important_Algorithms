# https://leetcode.com/problems/find-the-duplicate-number/

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


solution = Solution()
print(solution.findDuplicate([1,3,4,2,2])) # output: 2
print(solution.findDuplicate([3,1,3,4,2])) # output: 3