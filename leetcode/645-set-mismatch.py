# https://leetcode.com/problems/set-mismatch/

from typing import List

class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        nums_count = {}
        for i in range(1, len(nums) + 1):
            nums_count[i] = 0
        
        for num in nums:
            nums_count[num] += 1
        
        error = [None] * 2
        
        for num in nums_count:
            if nums_count[num] == 2:
                error[0] = int(num)
            elif nums_count[num] == 0:
                error[1] = int(num)
        
        return error

