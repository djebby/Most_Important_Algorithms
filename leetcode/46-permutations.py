# https://leetcode.com/problems/permutations/ (top-interview-questions)

from typing import List


class Solution:

    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtracking(i):
            if i == len(nums) - 1:
                return [[nums[i]]]

            permutations = list()
            subPermutations = backtracking(i+1)
            for subPermutation in subPermutations:
                for j in range(len(subPermutation)+1):
                    pCopy = subPermutation.copy()
                    pCopy.insert(j, nums[i])
                    permutations.append(pCopy)
            
            return permutations
        
        return backtracking(0)


    def permute01(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1:
            return [nums]

        permutations = list()
        chosen = [False] * len(nums)
        permutation = list()

        def backtracking():
            if len(permutation) == len(nums):
                permutations.append(permutation.copy())
                return
            
            for i in range(len(nums)):
                if(chosen[i]):
                    continue
                permutation.append(nums[i])
                chosen[i] = True
                backtracking()
                chosen[i] = False
                permutation.pop()
        
        backtracking()
        return permutations
    


    def permute02(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1: return [nums[:]]
        permutations = []
        
        for _ in range(len(nums)):
            num = nums.pop(0)
            sub_permutations = self.permute(nums)
            for sub_permutation in sub_permutations:
                sub_permutation.append(num)
            permutations.extend(sub_permutations)
            nums.append(num)
        
        return permutations


