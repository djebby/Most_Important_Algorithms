# https://leetcode.com/problems/subsets/ (top-interview-questions)

from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        numsSubsets = list()
        numsSubset = list()

        n = (2 ** len(nums)) - 1
        
        while n >= 0:
            for i in range(len(nums)):
                if (n & (1 << i)) != 0:
                    numsSubset.append(nums[i])
            numsSubsets.append(numsSubset.copy())
            numsSubset.clear()
            n -= 1

        return numsSubsets


    def subsets(self, nums: List[int]) -> List[List[int]]:
        numsSubsets = list()
        numsSubset = list()

        def backtracking(index):
            if index == len(nums):
                numsSubsets.append(numsSubset.copy())
                return
            
            numsSubset.append(nums[index])
            backtracking(index+1)
            numsSubset.pop()
            backtracking(index+1)
        
        backtracking(0)
        return numsSubsets
