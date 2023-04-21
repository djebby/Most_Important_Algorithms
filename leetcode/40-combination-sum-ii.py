# https://leetcode.com/problems/combination-sum-ii/

from typing import List

class Solution:
	def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
		candidates.sort()
		combinations = list()

		def backtracking(idx, combination, curSum):
			if curSum > target:
				return
			elif curSum == target:
				combinations.append(combination.copy())
				return
			
			prev = -1
			for i in range(idx, len(candidates)):
				if candidates[i] == prev:
					continue
				combination.append(candidates[i])
				backtracking(i+1, combination, curSum + candidates[i])
				combination.pop()
				prev = candidates[i]

		backtracking(0, list(), 0)
		return combinations
