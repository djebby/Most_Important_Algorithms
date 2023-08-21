# https://leetcode.com/problems/subsets-ii/

from typing import List

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        subSets = list()
        subSet = list()

        def backtracking(i):
            if i == len(nums):
                subSets.append(subSet.copy())
                return
            
            subSet.append(nums[i])
            backtracking(i+1)
            subSet.pop()
            
            i += 1
            while i < len(nums) and nums[i-1] == nums[i]:
                i += 1
            backtracking(i)
        
        backtracking(0)
        return subSets
