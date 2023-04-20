# https://leetcode.com/problems/combination-sum/

from typing import List

class Solution:
	def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
		combinations = list()

		def backtracking(i, combination, curr_sum):
			if curr_sum > target or i >= len(candidates):
				return
			elif curr_sum == target:
				combinations.append(combination.copy())
				return

			combination.append(candidates[i])
			backtracking(i, combination, curr_sum + candidates[i])
			combination.pop()
			backtracking(i + 1, combination, curr_sum)

		backtracking(0, list(), 0)
		return combinations