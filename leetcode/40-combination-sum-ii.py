# https://leetcode.com/problems/combination-sum-ii/

from typing import List

class Solution:
	def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
		candidates.sort()
		combinations = list()
		combination = list()

		def backtracking(idx, curSum):
			if curSum > target:
				return
			elif curSum == target:
				combinations.append(combination.copy())
				return

			for i in range(idx, len(candidates)):
				if i > idx and candidates[i-1] == candidates[i]:
					continue
				combination.append(candidates[i])
				backtracking(i+1, combination, curSum + candidates[i])
				combination.pop()

		backtracking(0, 0)
		return combinations
