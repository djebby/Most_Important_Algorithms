# https://leetcode.com/problems/find-all-duplicates-in-an-array/

from typing import List

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        
        duplicates = []

        for i in range(len(nums)):
            abs_num = abs(nums[i])
            
            if nums[abs_num - 1] < 0:
                duplicates.append(abs_num)
            
            nums[abs_num - 1] *= -1
        
        return duplicates
