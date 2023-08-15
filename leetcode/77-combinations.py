# https://leetcode.com/problems/combinations/

from typing import List

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        combinations = list()
        combination = list()

        def backtracking(num):
            if len(combination) == k:
                combinations.append(combination.copy())
                return
            for num in range(num, n+1):
                combination.append(num)
                backtracking(num+1)
                combination.pop()
        
        backtracking(1)
        return combinations
