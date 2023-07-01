# https://leetcode.com/problems/combination-sum/

from typing import List

class Solution:
	def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
		combinations = list()

		def backtracking(index, _sum, combination):
			if _sum > target:
				return
			elif _sum == target:
				combinations.append(combination.copy())
				return

			for i in range(index, len(candidates)):
				combination.append(candidates[i])
				backtracking(i, _sum + candidates[i], combination)
				combination.pop()

		backtracking(0, list(), 0)
		return combinations